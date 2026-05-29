import type { Column, Priority } from '@/types'

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
        priority: 'medium',
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

export const PRIORITY_STYLES: Record<Priority, string> = {
  low: 'bg-green-100 border-green-200 text-gray-600',
  medium: 'bg-yellow-100 border-yellow-200 text-gray-600',
  high: 'bg-red-100 border-red-200 text-gray-600',
}
