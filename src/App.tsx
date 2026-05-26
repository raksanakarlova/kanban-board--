import Board from './components/ui/Board'
import { useBoard } from './hooks/useBoard'

function App() {
  const { columns, addCard, moveCard, editCard, deleteCard } = useBoard()

  return (
    <div>
      <Board
        columns={columns}
        onAdd={addCard}
        onMove={moveCard}
        onEdit={editCard}
        onDelete={deleteCard}
      />
    </div>
  )
}

export default App
