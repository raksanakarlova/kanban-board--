import type { Column, Card } from '@/types'
import CardUi from './Card'
import AddCardFormUi from './addCardForm'

export interface ColumnProps {
  column: Column
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
  return (
    <div className="flex flex-col min-h-96 bg-gray-50 mx-auto w-100 rounded-md">
      <h2 className="pt-2 pb-2 bg-gray-200  rounded-md text-center text-xl">
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
