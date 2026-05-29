import type { Column } from '@/types'

export const INITIAL_COLUMNS: Column[] = [
  {
    id: 'todo',
    title: 'ToDo:',
    cards: [
      {
        id: crypto.randomUUID(),
        title: 'Buy milk',
        description: 'купить миндальное молоко',
        priority: 'low',
      },
      {
        id: crypto.randomUUID(),
        title: 'Go to the cinema',
        priority: 'medium',
      },
    ],
  },

  {
    id: 'in-progress',
    title: 'In Progress:',
    cards: [
      {
        id: crypto.randomUUID(),
        title: 'Go to the cinema',
        priority: 'low',
      },
      {
        id: crypto.randomUUID(),
        title: 'Buy clothes',
        priority: 'low',
      },
    ],
  },

  {
    id: 'done',
    title: 'Done:',
    cards: [
      {
        id: crypto.randomUUID(),
        title: 'Take the pills',
        priority: 'low',
      },
      {
        id: crypto.randomUUID(),
        title: 'Go to the cinema',
        priority: 'medium',
      },
    ],
  },
]
