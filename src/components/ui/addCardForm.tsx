import type { Card, Priority } from '@/types'
import { useState, type FormEvent } from 'react'
import Modal from './Modal'

export interface AddCardFormProps {
  columnId: string
  onAdd: (columnId: string, cardData: Omit<Card, 'id'>) => void
}

function AddCardFormUi({ columnId, onAdd }: AddCardFormProps) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState<Priority>('low')
  const [isOpen, setOpen] = useState(false)

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    if (!title.trim()) return
    onAdd(columnId, { title, description, priority })
    setTitle('')
    setDescription('')
    setPriority('low')
    setOpen(false)
  }

  return (
    <div className="mt-auto">
      <button
        className="w-90 py-1.5 ml-5 mb-2 rounded bg-blue-500 text-sm font-medium text-white hover:bg-blue-600"
        onClick={() => {
          setOpen(true)
        }}
      >
        Add Card
      </button>

      <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Card title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border-b border-gray-300 pb-1 text-lg font-medium outline-none focus:border-gray-600"
          />
          <textarea
            placeholder="Add a description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={3}
            className="w-full resize-none rounded border 
            border-gray-200 p-2 text-sm outline-none focus:border-gray-400"
          />
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value as Priority)}
            className="w-full rounded border border-gray-200 p-2 text-sm outline-none"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          <button className="mt-1 rounded bg-blue-500 py-1.5 text-sm font-medium text-white hover:bg-blue-600">
            Add card
          </button>
        </form>
      </Modal>
    </div>
  )
}

export default AddCardFormUi
