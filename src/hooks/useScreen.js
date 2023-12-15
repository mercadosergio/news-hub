import { useState } from 'react'
import { useEffect } from 'react'

export default function useScreen() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const handleWidth = () => {
    setScreenWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWidth)
    return () => {
      window.removeEventListener('resize', handleWidth)
    }
  }, [])

  return { screenWidth }
}
