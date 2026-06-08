'use client'

import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from 'react'
import type { Product } from '@/lib/products'

type CartItem = Product & { qty: number }

type CartState = {
  items: CartItem[]
  wishlist: string[]
  isOpen: boolean
  add: (product: Product) => void
  remove: (id: string) => void
  setQty: (id: string, qty: number) => void
  toggleWishlist: (id: string) => void
  open: () => void
  close: () => void
  count: number
  total: number
}

const CartContext = createContext<CartState | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [wishlist, setWishlist] = useState<string[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const add = useCallback((product: Product) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === product.id)
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i,
        )
      }
      return [...prev, { ...product, qty: 1 }]
    })
    setIsOpen(true)
  }, [])

  const remove = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id))
  }, [])

  const setQty = useCallback((id: string, qty: number) => {
    setItems((prev) =>
      qty <= 0
        ? prev.filter((i) => i.id !== id)
        : prev.map((i) => (i.id === id ? { ...i, qty } : i)),
    )
  }, [])

  const toggleWishlist = useCallback((id: string) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((w) => w !== id) : [...prev, id],
    )
  }, [])

  const count = items.reduce((sum, i) => sum + i.qty, 0)
  const total = items.reduce((sum, i) => sum + i.qty * i.price, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        wishlist,
        isOpen,
        add,
        remove,
        setQty,
        toggleWishlist,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
        count,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
