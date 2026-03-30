import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'motion/react'
import { subscribeToXPPopups, type XPPopupItem } from '@/components/shared/xpPopupQueue'

export default function XPPopupLayer() {
  const [popups, setPopups] = useState<XPPopupItem[]>([])

  useEffect(() => {
    return subscribeToXPPopups(setPopups)
  }, [])

  if (popups.length === 0) return null

  return createPortal(
    <div className="pointer-events-none fixed inset-0" style={{ zIndex: 9999 }}>
      <AnimatePresence>
        {popups.map((popup) => (
          <motion.div
            key={popup.id}
            initial={{ opacity: 1, y: popup.y, x: popup.x, scale: 0.5 }}
            animate={{ opacity: 0, y: popup.y - 60, scale: 1.2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="absolute font-mono text-sm font-bold text-secondary"
            style={{ transform: 'translate(-50%, -50%)' }}
            aria-live="polite"
          >
            +{popup.amount} XP
          </motion.div>
        ))}
      </AnimatePresence>
    </div>,
    document.body,
  )
}
