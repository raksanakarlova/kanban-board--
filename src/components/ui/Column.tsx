import type { Column, Card } from '@/types'
import CardUi from './Card'
import AddCardFormUi from './addCardForm'

export interface ColumnProps {
  column: Column
  columns: Column[]
  onAdd: (columnId: string, cardData: Omit<Card, 'id'>) => void
  onMove: (cardId: string, fromColumnId: string, toColumnId: string) => void
  onEdit: (
    cardId: string,
    columnId: string,
    updateData: Partial<Omit<Card, 'id'>>
  ) => void
  onDelete: (cardId: string, columnId: string) => void
}

function ColumnUi({ column, onAdd, onMove, onEdit, onDelete }: ColumnProps) {
  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault()
  }

  function handleDrop(e: React.DragEvent<HTMLDivElement>) {
    const cardId = e.dataTransfer.getData('cardId')
    const fromColumnId = e.dataTransfer.getData('fromColumnId')
    if (fromColumnId !== column.id) {
      onMove(cardId, fromColumnId, column.id)
    }
  }

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="flex flex-col min-h-96 bg-gray-50 mx-auto w-100 rounded-md"
    >
      <h2 className="pt-2 pb-2 bg-gray-200 rounded-md text-center text-xl text-gray-700">
        {column.title}
      </h2>
      <div className="flex flex-col flex-1">
        {column.cards.map((card) => (
          <CardUi
            key={card.id}
            card={card}
            columnId={column.id}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}

        <AddCardFormUi columnId={column.id} onAdd={onAdd} />
      </div>
    </div>
  )
}

export default ColumnUi
