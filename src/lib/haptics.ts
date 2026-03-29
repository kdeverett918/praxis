const canVibrate = typeof navigator !== 'undefined' && 'vibrate' in navigator

function vibrate(pattern: number | number[]) {
  if (canVibrate) navigator.vibrate(pattern)
}

export const haptics = {
  light: () => vibrate(10),
  medium: () => vibrate(15),
  heavy: () => vibrate(25),
  success: () => vibrate([15, 50, 15]),
  error: () => vibrate([8, 30, 8]),
  selection: () => vibrate(5),
}
