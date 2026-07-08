import { useEffect, type RefObject } from "react"

type Handler = (event: MouseEvent | TouchEvent) => void

export function useOutsideClick(
  ref: RefObject<HTMLElement | null>,
  callback: Handler
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const el = ref.current
      if (!el || el.contains(event.target as Node)) return
      callback(event)
    }

    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, [ref, callback])
}
