import { useState } from 'react'
import { INITIAL_COLUMNS } from '@/constants'
import type { Card } from '@/types'

export function useBoard() {
  const [columns, setColumns] = useState(INITIAL_COLUMNS)

  function addCard(columnId: string, cardData: Omit<Card, 'id'>): void {
    const newCard = { id: crypto.randomUUID(), ...cardData }

    const result = columns.map((column) =>
      column.id === columnId
        ? { ...column, cards: [...column.cards, newCard] }
        : column
    )
    setColumns(result)
  }

  function moveCard(
    cardId: string,
    fromColumnId: string,
    toColumnId: string
  ): void {
    const foundColumn = columns.find((column) => column.id === fromColumnId)
    const foundCard = foundColumn?.cards.find((card) => card.id === cardId)

    if (!foundCard) return

    const result = columns.map((column) => {
      if (column.id === fromColumnId) {
        return {
          ...column,
          cards: column.cards.filter((card) => card.id !== cardId),
        }
      }
      if (column.id === toColumnId) {
        return { ...column, cards: [...column.cards, foundCard] }
      }
      return column
    })
    setColumns(result)
  }

  function editCard(
    cardId: string,
    columnId: string,
    updateData: Partial<Omit<Card, 'id'>>
  ): void {
    const result = columns.map((column) =>
      column.id === columnId
        ? {
            ...column,
            cards: column.cards.map((card) =>
              card.id === cardId ? { ...card, ...updateData } : card
            ),
          }
        : column
    )

    setColumns(result)
  }

  function deleteCard(cardId: string, columnId: string): void {
    const result = columns.map((column) =>
      column.id === columnId
        ? {
            ...column,
            cards: column.cards.filter((card) => card.id !== cardId),
          }
        : column
    )
    setColumns(result)
  }

  return { columns, addCard, moveCard, editCard, deleteCard }
}
