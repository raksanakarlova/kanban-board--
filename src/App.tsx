import Board from './components/ui/Board'
import { useBoard } from './hooks/useBoard'

function App() {
  const { columns, addCard, moveCard, editCard, deleteCard } = useBoard()

  return (
    <div className="min-h-screen">
      <h1 className="text-center text-gray-600 text-2xl mt-4">Kanban board:</h1>
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
