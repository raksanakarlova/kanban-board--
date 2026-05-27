import type { Card } from '@/types'
import { useState } from 'react'
import { SquarePen } from 'lucide-react'
import { Trash } from 'lucide-react'
import Modal from './Modal'

export interface CardProps {
  card: Card
  columnId: string
  onEdit: (
    cardId: string,
    columnId: string,
    updateData: Partial<Omit<Card, 'id'>>
  ) => void
  onDelete: (cardId: string, columnId: string) => void
}

function CardUi({ card, columnId, onEdit, onDelete }: CardProps) {
  const [isEditing, setEditing] = useState(false)
  const [editText, setEditText] = useState(card.title)
  const [editDescription, setEditDescription] = useState(card.description)

  return (
    <div className="flex flex-col border border-gray-200 bg-white mx-auto my-4 w-90 h-35 p-4 rounded-md shadow-lg">
      <Modal isOpen={isEditing} onClose={() => setEditing(false)}>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="w-full border-b border-gray-300 pb-1 text-lg 
            font-medium outline-none focus:border-gray-600"
          />
          <textarea
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            rows={3}
            className="w-full resize-none rounded border
             border-gray-200 p-2 text-sm outline-none focus:border-gray-400"
          />
          <button
            onClick={() => {
              onEdit(card.id, columnId, {
                title: editText,
                description: editDescription,
              })
              setEditing(false)
            }}
            className="mt-1 rounded bg-blue-500 py-1.5 text-sm font-medium text-white hover:bg-blue-600"
          >
            Save
          </button>
        </div>
      </Modal>

      <div className="flex justify-between items-start gap-2 mb-1">
        <h3 className="min-w-0 wrap-break-word">{card.title}</h3>
        <span className="border shrink-0 text-xs pr-2 pl-2 pt-0.5 pb-0.5 rounded-3xl">
          {card.priority}
        </span>
      </div>
      {card.description && (
        <p className="wrap-break-word text-sm">{card.description}</p>
      )}
      <div className="flex mt-auto gap-2">
        <button onClick={() => setEditing(true)}>
          <SquarePen size={16} />
        </button>
        <button onClick={() => onDelete(card.id, columnId)}>
          <Trash size={16} />
        </button>
      </div>
    </div>
  )
}

export default CardUi
