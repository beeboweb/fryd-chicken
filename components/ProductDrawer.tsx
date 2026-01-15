"use client"

import * as React from "react"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { Product } from "@/app/data/products"
import { Badge } from "@/components/ui/badge"

interface ProductDrawerProps {
  product: Product;
  children: React.ReactNode;
}

export function ProductDrawer({ product, children }: ProductDrawerProps) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        {children}
      </DrawerTrigger>
      <DrawerContent className="bg-neutral-900 border-neutral-800 text-white rounded-none">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="text-3xl font-black uppercase tracking-tighter text-white">
              {product.title}
            </DrawerTitle>
            <DrawerDescription className="text-neutral-400">
              {product.subtitle}
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-between mb-6">
                <span className="text-2xl font-bold text-primary">{product.price}</span>
                <Badge variant="outline" className="text-white border-white/20">
                   {product.nutrition.cal} KCAL
                </Badge>
            </div>
            
            <div className="space-y-4">
                <div className="bg-neutral-800 p-4 border border-white/5">
                    <h4 className="font-bold text-sm mb-2 text-neutral-300">DETAILS</h4>
                    <p className="text-sm text-neutral-400">{product.details}</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-neutral-800 p-4 border border-white/5">
                        <span className="block text-xs text-neutral-500">PROTEIN</span>
                        <span className="block text-xl font-bold">{product.nutrition.protein}</span>
                    </div>
                     <div className="bg-neutral-800 p-4 border border-white/5">
                        <span className="block text-xs text-neutral-500">CALORIES</span>
                        <span className="block text-xl font-bold">{product.nutrition.cal}</span>
                    </div>
                </div>
            </div>
          </div>
          <DrawerFooter>
            <Button className="w-full bg-primary hover:bg-primary/90 uppercase font-bold rounded-none">Add to Order</Button>
            <DrawerClose asChild>
              <Button variant="outline" className="w-full border-white/10 hover:bg-white/10 text-white rounded-none">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
