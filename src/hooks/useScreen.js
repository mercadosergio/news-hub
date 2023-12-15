import { useState } from 'react'
import { useEffect } from 'react'
import { useLayoutEffect } from 'react'

const canUseDOM = () => {
  !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  )
}

const useSafeLayoutEffect = canUseDOM() ? useLayoutEffect : useEffect

export default function useScreen(query) {
  const mql = window.matchMedia(query)
  const [matches, setMatches] = useState(false)

  const handler = () => {
    setMatches(mql.matches)
  }

  useSafeLayoutEffect(() => {
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [])

  return matches
}
