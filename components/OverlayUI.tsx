"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { products } from '@/app/data/products'

export function OverlayUI() {
  const product = products[0]

  return (
    <div className="absolute inset-0 z-10 pointer-events-none w-full h-full">
         <div className="sticky top-0 h-screen w-full flex items-center justify-center">
             <div className="text-center px-4">
                 <h1 className="text-5xl md:text-9xl font-black text-white uppercase tracking-tighter mb-4 mix-blend-difference">
                    {product.title}
                 </h1>
                 <p className="text-sm md:text-2xl font-bold text-white uppercase tracking-widest mix-blend-difference">
                    {product.subtitle}
                 </p>
             </div>
         </div>
    </div>
  )
}
