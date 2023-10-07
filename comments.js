// Create web server
const express = require('express');
const app = express();
const port = 3000;
// Body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Database
const pgp = require('pg-promise')();
const db = pgp({
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  port: 5432,
  database: 'experience-primer'
});
// CORS
const cors = require('cors');
app.use(cors());
// Routes
app.get('/members', async (req, res) => {
  const members = await db.any('SELECT * FROM members');
  res.json(members);
});
app.get('/members/:id', async (req, res) => {
  const id = req.params.id;
  const member = await db.one('SELECT * FROM members WHERE id = $1', [id]);
  res.json(member);
});
app.post('/members', async (req, res) => {
  const { name, level, description } = req.body;
  const member = await db.one(
    'INSERT INTO members (name, level, description) VALUES ($1, $2, $3) RETURNING *',
    [name, level, description]
  );
  res.json(member);
});
app.get('/members/:id/tasks', async (req, res) => {
  const id = req.params.id;
  const tasks = await db.any('SELECT * FROM tasks WHERE member_id = $1', [id]);
  res.json(tasks);
});
app.post('/members/:id/tasks', async (req, res) => {
  const id = req.params.id;
  const { name, description, level, points, type, tags } = req.body;
  const task = await db.one(
    'INSERT INTO tasks (name, description, level, points, type, tags, member_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
    [name, description, level, points, type, tags, id]
  );
  res.json(task);
});
app.get('/members/:id/tasks/:taskId', async (req, res) => {
  const id = req.params.id;
  const taskId = req.params.taskId;
  const task = await db.one(
    'SELECT * FROM tasks WHERE