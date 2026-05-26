import type { Card, Priority } from '@/types'
import { useState, type FormEvent } from 'react'

export interface AddCardFormProps {
  columnId: string
  onAdd: (columnId: string, cardData: Omit<Card, 'id'>) => void
}

function AddCardFormUi({ columnId, onAdd }: AddCardFormProps) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState<Priority>('low')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    onAdd(columnId, { title, description, priority })
    setTitle('')
    setDescription('')
    setPriority('low')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value as Priority)}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>

      <button>Add</button>
    </form>
  )
}

export default AddCardFormUi
