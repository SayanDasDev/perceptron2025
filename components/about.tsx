import useFonts from '@/hooks/useFonts'
import React from 'react'

const About = () => {

  const { font_main } = useFonts()

  return (
    <div className={`${font_main.className} w-full h-full border-subtle !border-t-0 !border-b-0`}>
      About
    </div>
  )
}

export default About
