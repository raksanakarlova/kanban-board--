import type { Column, Card } from '@/types'
import ColumnUi from '@/components/ui/Column'

export interface BoardProps {
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

function Board({ columns, onAdd, onMove, onEdit, onDelete }: BoardProps) {
  return (
    <div className="flex m-auto mt-8">
      {columns.map((column) => (
        <ColumnUi
          key={column.id}
          column={column}
          columns={columns}
          onAdd={onAdd}
          onMove={onMove}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}

export default Board
