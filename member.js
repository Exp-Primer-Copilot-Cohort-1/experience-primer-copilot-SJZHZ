function skillsMember() {
  return {
    name: 'Member',
    description: 'Member of the team',
    skills: [
      {
        name: 'GitHub',
        level: 1,
        description: 'Basic knowledge of GitHub',
        tasks: [
          {
            name: 'Create a repository',
            description: 'Create a repository on GitHub',
            level: 1,
            points: 1,
            type: 'GitHub',
            tags: ['repository', 'create']
          },
          {
            name: 'Create a branch',
            description: 'Create a branch on GitHub',
            level: 1,
            points: 1,
            type: 'GitHub',
            tags: ['branch', 'create']
          },
          {
            name: 'Create a pull request',
            description: 'Create a pull request on GitHub',
            level: 1,
            points: 1,
            type: 'GitHub',
            tags: ['pull request', 'create']
          },
          {
            name: 'Merge a pull request',
            description: 'Merge a pull request on GitHub',
            level: 1,
            points: 1,
            type: 'GitHub',
            tags: ['pull request', 'merge']
          }
        ]
      },
      {
        name: 'Git',
        level: 1,
        description: 'Basic knowledge of Git',
        tasks: [
          {
            name: 'Create a commit',
            description: 'Create a commit on Git',
            level: 1,
            points: 1,
            type: 'Git',
            tags: ['commit', 'create']
          },
          {
            name: 'Push a commit',
            description: 'Push a commit on Git',
            level: 1,
            points: 1,
            type: 'Git',
            tags: ['commit', 'push']
          },
          {
            name: 'Create a branch',
            description: 'Create a branch on Git',
            level: 1,
            points: 1,
            type: 'Git',
            tags: ['branch', 'create']
          },
          {
            name: 'Switch a branch',
            description: 'Switch a branch on Git',
            level: 1,
            points: 1,
            type: 'Git',
            tags: ['branch', 'switch']
          },
          {
            name: 'Merge a branch',
            description: 'Merge a branch on Git'
          },
          {
            name: 'Resolve a merge conflict',
            description: 'Resolve a merge conflict on Git',
            level: 1,
            points: 1,
            type: 'Git',
            tags: ['merge', 'conflict']
          }
        ]
      }
    ]
  }
}