'use client'

import { AnimatePresence, motion } from 'motion/react'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import { useCart } from './cart-context'

export function CartDrawer() {
  const { items, isOpen, close, setQty, total, remove } = useCart()

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[60] bg-foreground/40 backdrop-blur-sm"
            aria-hidden="true"
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 right-0 z-[70] flex w-full max-w-md flex-col bg-background shadow-2xl"
            role="dialog"
            aria-label="Shopping cart"
          >
            <div className="flex items-center justify-between border-b border-border px-6 py-5">
              <h2 className="font-heading text-xl font-semibold">Your Cart</h2>
              <button
                type="button"
                onClick={close}
                aria-label="Close cart"
                className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                <X className="size-5" />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-secondary">
                  <ShoppingBag className="size-7 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground">Your cart is empty.</p>
                <button
                  type="button"
                  onClick={close}
                  className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-4">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-4 border-b border-border py-4 last:border-0"
                    >
                      <div className="size-20 shrink-0 overflow-hidden rounded-xl bg-secondary">
                        <img
                          src={item.image || '/placeholder.svg'}
                          alt={item.name}
                          className="size-full object-cover"
                        />
                      </div>
                      <div className="flex flex-1 flex-col">
                        <div className="flex justify-between gap-2">
                          <p className="text-sm font-medium leading-snug text-foreground">
                            {item.name}
                          </p>
                          <button
                            type="button"
                            onClick={() => remove(item.id)}
                            aria-label={`Remove ${item.name}`}
                            className="text-muted-foreground hover:text-foreground"
                          >
                            <X className="size-4" />
                          </button>
                        </div>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {item.category}
                        </p>
                        <div className="mt-auto flex items-center justify-between pt-2">
                          <div className="flex items-center gap-2 rounded-full border border-border">
                            <button
                              type="button"
                              onClick={() => setQty(item.id, item.qty - 1)}
                              aria-label="Decrease quantity"
                              className="p-1.5 text-muted-foreground hover:text-foreground"
                            >
                              <Minus className="size-3.5" />
                            </button>
                            <span className="w-5 text-center text-sm font-medium">
                              {item.qty}
                            </span>
                            <button
                              type="button"
                              onClick={() => setQty(item.id, item.qty + 1)}
                              aria-label="Increase quantity"
                              className="p-1.5 text-muted-foreground hover:text-foreground"
                            >
                              <Plus className="size-3.5" />
                            </button>
                          </div>
                          <span className="text-sm font-semibold">
                            ${item.price * item.qty}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border px-6 py-5">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Subtotal
                    </span>
                    <span className="font-heading text-xl font-semibold">
                      ${total}
                    </span>
                  </div>
                  <button
                    type="button"
                    className="w-full rounded-full bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    Secure Checkout
                  </button>
                  <p className="mt-3 text-center text-xs text-muted-foreground">
                    Apple Pay · Google Pay · Stripe · Guest checkout available
                  </p>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
