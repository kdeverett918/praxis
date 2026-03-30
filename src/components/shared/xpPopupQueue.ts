export interface XPPopupItem {
  id: string
  amount: number
  x: number
  y: number
}

let popupId = 0
const listeners = new Set<(items: XPPopupItem[]) => void>()
let queue: XPPopupItem[] = []

export function subscribeToXPPopups(listener: (items: XPPopupItem[]) => void) {
  listeners.add(listener)
  listener(queue)

  return () => {
    listeners.delete(listener)
  }
}

export function triggerXPPopup(amount: number, x: number, y: number) {
  const item: XPPopupItem = { id: `xp-${++popupId}`, amount, x, y }
  queue = [...queue, item]
  listeners.forEach((listener) => listener(queue))

  window.setTimeout(() => {
    queue = queue.filter((popup) => popup.id !== item.id)
    listeners.forEach((listener) => listener(queue))
  }, 900)
}
