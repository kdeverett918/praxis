import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowRight } from 'lucide-react'

const STORAGE_KEY = 'praxis-swipe-hint-seen'

export default function SwipeHint() {
  const [visible, setVisible] = useState(
    () => typeof window !== 'undefined' && !window.localStorage.getItem(STORAGE_KEY),
  )

  useEffect(() => {
    if (!visible) {
      return
    }

    const timer = window.setTimeout(() => {
      setVisible(false)
      window.localStorage.setItem(STORAGE_KEY, '1')
    }, 4000)

    return () => window.clearTimeout(timer)
  }, [visible])

  const dismiss = () => {
    setVisible(false)
    window.localStorage.setItem(STORAGE_KEY, '1')
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="pointer-events-auto absolute bottom-4 left-1/2 z-30 -translate-x-1/2"
          onClick={dismiss}
        >
          <div className="flex items-center gap-2 rounded-full border border-border bg-surface/90 px-4 py-2 shadow-lg backdrop-blur-sm">
            <span className="font-body text-xs text-text-secondary">
              Swipe to navigate
            </span>
            <motion.div
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 1.2, repeat: Infinity }}
            >
              <ArrowRight className="h-3.5 w-3.5 text-primary" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
