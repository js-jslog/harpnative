import { useRef, useEffect } from 'react'

export const usePrevious = (value: string, initial: string): string => {
  const ref = useRef(initial)
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}
