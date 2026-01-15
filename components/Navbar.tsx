"use client"

import * as React from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* LOGO */}
        <div className="text-2xl font-black tracking-tighter text-white">
          FRYD<span className="text-primary">.</span>
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-4">
          <Button variant="default" className="hidden md:inline-flex rounded-none uppercase font-bold bg-primary hover:bg-primary/90">
            Order Now
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 rounded-none">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] border-l border-white/10 bg-black text-white p-0">
              <div className="flex flex-col gap-8 p-8 mt-12">
                <div className="text-4xl font-black tracking-tighter hover:text-primary transition-colors cursor-pointer">
                  MENU
                </div>
                <div className="text-4xl font-black tracking-tighter hover:text-primary transition-colors cursor-pointer">
                  LOCATIONS
                </div>
                <div className="text-4xl font-black tracking-tighter hover:text-primary transition-colors cursor-pointer">
                  STORY
                </div>
                <div className="mt-8 border-t border-white/10 pt-8">
                  <Button className="w-full uppercase font-bold text-xl h-12 rounded-none bg-primary hover:bg-primary/90">
                    Order Delivery
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
