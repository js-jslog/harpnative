import { useRef, useEffect } from 'react'

export const usePrevious = (value: string): string => {
  const ref = useRef(value)
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}
