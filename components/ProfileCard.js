'use client'

import Profile_image from 'public/static/images/Kehan.JPG'
import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'

const ProfileCard = () => {
  const ref = useRef(null)
  const [style, setStyle] = useState({})

  const onMouseMove = useCallback((e) => {
    if (!ref.current || window.innerWidth < 1280) return

    const { clientX, clientY } = e
    const { width, height, x, y } = ref.current.getBoundingClientRect()
    const mouseX = Math.abs(clientX - x)
    const mouseY = Math.abs(clientY - y)
    const rotateMin = -15
    const rotateMax = 15
    const rotateRange = rotateMax - rotateMin

    const rotate = {
      x: rotateMax - (mouseY / height) * rotateRange,
      y: rotateMin + (mouseX / width) * rotateRange,
    }

    setStyle({
      transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
    })
  }, [])

  const onMouseLeave = useCallback(() => {
    setStyle({ transform: 'rotateX(0deg) rotateY(0deg)' })
  }, [])

  useEffect(() => {
    const { current } = ref
    if (!current) return
    current.addEventListener('mousemove', onMouseMove)
    current.addEventListener('mouseleave', onMouseLeave)
    return () => {
      if (!current) return
      current.removeEventListener('mousemove', onMouseMove)
      current.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [onMouseLeave, onMouseMove])

  return (
    <>
      <div
        className="z-10 mb-8 scale-100 transition-all duration-200 ease-out hover:z-50 xl:mb-0 xl:hover:scale-[1.15]"
        style={{ perspective: '600px' }}
        ref={ref}
      >
        <div
          style={style}
          className="dark:bg-dark flex flex-col overflow-hidden bg-white shadow-cyan-100/50 transition-all duration-200 ease-out dark:shadow-cyan-700/50 xl:rounded-lg xl:shadow-lg"
        >
          <Image
            src={Profile_image}
            alt="avatar"
            width="950px"
            height="950px"
            className="object-cover"
            style={{ objectPosition: 'center' }}
          />
          <span className="h-1.5 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
        </div>
      </div>
    </>
  )
}

export default ProfileCard
