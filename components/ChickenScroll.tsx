"use client"

import React, { useRef, useEffect, useState, useCallback } from 'react'
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion'
import { products } from '@/app/data/products'

const FRAME_COUNT = 120 // First 120 frames = bucket complete state

interface ChickenScrollProps {
  targetRef: React.RefObject<HTMLElement | null>
}

export function ChickenScroll({ targetRef }: ChickenScrollProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  })
  const [images, setImages] = useState<HTMLImageElement[]>([])
  const [imagesLoaded, setImagesLoaded] = useState(false)
  
  const activeProduct = products[0]

  useEffect(() => {
    const loadImages = async () => {
      const loadedImages: HTMLImageElement[] = []
      const promises: Promise<void>[] = []

      for (let i = 1; i <= FRAME_COUNT; i++) {
        const promise = new Promise<void>((resolve) => {
          const img = new Image()
          // Pad number with zeros: 001, 002, ...
          const frameNum = i.toString().padStart(3, '0')
          img.src = `${activeProduct.imageFolder}/frame_${frameNum}.webp`
          img.onload = () => {
             loadedImages[i - 1] = img // Preserve order
             resolve()
          }
          img.onerror = () => {
              // Gracefully handle missing images
              resolve()
          }
        })
        promises.push(promise)
      }

      await Promise.all(promises)
      setImages(loadedImages)
      setImagesLoaded(true)
    }

    loadImages()
  }, [activeProduct.imageFolder])

  const renderFrame = useCallback((index: number) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Center Logic
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2

    if (imagesLoaded && images[index]) {
      const img = images[index]
      
      // Calculate scaling to 'cover' (full screen)
      const scale = Math.max(canvas.width / img.width, canvas.height / img.height)
      const w = img.width * scale
      const h = img.height * scale
      
      ctx.drawImage(img, centerX - w / 2, centerY - h / 2, w, h)
    }
  }, [images, imagesLoaded]) // Dependencies for renderFrame

  // Handle Resize
  useEffect(() => {
    const handleResize = () => {
       if (canvasRef.current) {
         canvasRef.current.width = window.innerWidth
         canvasRef.current.height = window.innerHeight
       }
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.floor(latest * FRAME_COUNT)
      )
      requestAnimationFrame(() => renderFrame(frameIndex))
  })

  // Initial render
  useEffect(() => {
     if (imagesLoaded) {
         renderFrame(0)
     }
  }, [imagesLoaded, renderFrame])

  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
        <canvas 
          ref={canvasRef}
          className="w-full h-full object-contain pointer-events-none"
        />
    </div>
  )
}
