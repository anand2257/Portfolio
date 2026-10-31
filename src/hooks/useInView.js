import { useEffect, useRef, useState } from 'react'

/**
 * Custom hook that uses IntersectionObserver to track visibility.
 * @param {IntersectionObserverInit} options
 * @returns {[React.RefObject, boolean]}
 */
export function useInView(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          // Once seen, we can unobserve to save resources
          observer.unobserve(el)
        }
      },
      { threshold: 0.1, ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, inView]
}
