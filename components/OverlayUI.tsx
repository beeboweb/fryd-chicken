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
                 <h1 className="text-6xl md:text-[10rem] font-black text-white uppercase tracking-tighter mb-4 mix-blend-difference">
                    {product.title}
                 </h1>
                 <p className="text-lg md:text-4xl font-bold text-white uppercase tracking-widest mix-blend-difference">
                    {product.subtitle}
                 </p>
             </div>
         </div>
    </div>
  )
}
