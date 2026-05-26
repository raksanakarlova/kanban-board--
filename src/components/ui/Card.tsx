import type { Card } from '@/types'
import { useState } from 'react'

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

  if (isEditing) {
    return (
      <>
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
        <input
          type="text"
          value={editDescription}
          onChange={(e) => setEditDescription(e.target.value)}
        />
        <button
          onClick={() => {
            onEdit(card.id, columnId, {
              title: editText,
              description: editDescription,
            })
            setEditing(false)
          }}
        >
          Save
        </button>
      </>
    )
  }

  return (
    <div>
      <h3>{card.title}</h3>
      <span>{card.priority}</span>
      {card.description && <p>{card.description}</p>}
      <button onClick={() => setEditing(true)}>Edit</button>
      <button onClick={() => onDelete(card.id, columnId)}>Delete</button>
    </div>
  )
}

export default CardUi
