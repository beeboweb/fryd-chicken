"use client"

import React, { useRef } from "react"
import Image from "next/image"
import { Navbar } from "@/components/Navbar"
import { ChickenScroll } from "@/components/ChickenScroll"
import { OverlayUI } from "@/components/OverlayUI"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { products } from "@/app/data/products"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)

  const stats = [
    { value: "24H", label: "MARINATION" },
    { value: "11", label: "SECRET SPICES" },
    { value: "100%", label: "FRESH DAILY" },
    { value: "1K+", label: "HAPPY CUSTOMERS" },
  ]

  const kitchenImages = [
    { src: "/images/restaurant/counter-front.webp", alt: "FRYD Counter" },
    { src: "/images/restaurant/interior-wide.webp", alt: "FRYD Interior" },
    { src: "/images/restaurant/kiosk-tiles.webp", alt: "FRYD Kiosk" },
    { src: "/images/restaurant/counter-angle.webp", alt: "FRYD Counter Angle" },
    { src: "/images/restaurant/red-lighting.webp", alt: "FRYD Vibes" },
  ]

  return (
    <main className="min-h-screen bg-black text-white selection:bg-primary selection:text-white font-sans">
      <Navbar />

      {/* 
        ZONE A: THE SCROLLYTELLING HERO
        Height: 180vh
        Behavior: Sticky Frame sequence + Parallax Overlays
        Z-Index: 0 (Visual Layer: Bottom)
      */}
      <div ref={containerRef} className="relative h-[180vh] w-full bg-black z-0">
          {/* STICKY CANVAS WRAPPER */}
          <ChickenScroll targetRef={containerRef} />

          {/* ABSOLUTE OVERLAY CONTENT */}
          <OverlayUI /> 
      </div>

      {/* 
        ZONE B: STANDARD CONTENT
        Z-Index: 10 (Higher than Zone A to slide over it "like a curtain")
      */}
      <div className="relative z-10 bg-white text-black shadow-2xl">
        
        {/* STATS SECTION */}
        <section className="bg-black text-white py-16 md:py-24 border-b border-white/10">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-5xl md:text-7xl font-black text-primary mb-2 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm font-bold tracking-widest text-neutral-400 uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QUALITY SECTION */}
        <section className="py-16 md:py-24 container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                   <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">
                       NOT JUST <span className="text-primary">FAST</span> FOOD.
                   </h2>
                   <p className="text-lg md:text-xl font-medium text-neutral-600 mb-8 leading-relaxed">
                       We don't do heat lamps. We don't do frozen patties. Every single piece of chicken is marinated for 24 hours in our secret blend of 11 herbs and spices, then hand-breaded and pressure fried to order. 
                   </p>
                   <Button variant="outline" className="h-14 text-lg border-black text-black hover:bg-black hover:text-white uppercase font-bold px-8 transition-all hover:scale-105">
                       Our Story
                   </Button>
                </div>
                <div className="aspect-square relative overflow-hidden border-2 border-black group">
                    <Image 
                      src="/images/restaurant/interior-wide.webp"
                      alt="FRYD Restaurant Interior"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300"></div>
                </div>
            </div>
        </section>

        {/* MENU HIGHLIGHTS SECTION */}
        <section className="py-16 md:py-24 bg-neutral-100 border-y-2 border-black">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-2">
                THE <span className="text-primary">MENU</span>
              </h2>
              <div className="w-24 h-2 bg-primary mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="border-2 border-black bg-white overflow-hidden group hover:border-primary transition-colors">
                  <CardContent className="p-0">
                    <div className="aspect-square bg-neutral-200 relative overflow-hidden">
                      <Image 
                        src={`/images/products/${product.id}_mock.png`}
                        alt={product.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-black uppercase tracking-tight">{product.title}</h3>
                        <span className="text-xl font-black text-primary">{product.price}</span>
                      </div>
                      <p className="text-neutral-500 font-medium text-sm mb-4">{product.description}</p>
                      <Button className="w-full bg-black text-white hover:bg-primary uppercase font-bold h-12 transition-all hover:scale-[1.02]">
                        Order Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* THE KITCHEN CAROUSEL */}
        <section className="bg-black text-white py-16 md:py-24">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
               <div>
                  <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-2">
                     The Kitchen
                  </h2>
                  <div className="w-24 h-2 bg-primary"></div>
               </div>
               <p className="text-neutral-400 font-bold max-w-sm md:text-right">
                  BEHIND THE SCENES. NO SECRETS. JUST PASSION AND 24 HOURS OF MARINATION.
               </p>
            </div>

            <Carousel className="w-full">
              <CarouselContent>
                {kitchenImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="border-white/10 bg-neutral-800 overflow-hidden">
                        <CardContent className="flex aspect-video items-center justify-center p-0 relative overflow-hidden group">
                          <Image 
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-end gap-2 mt-8">
                 <CarouselPrevious className="static translate-y-0 border-white/20 hover:bg-primary hover:text-white hover:border-primary text-white" />
                 <CarouselNext className="static translate-y-0 border-white/20 hover:bg-primary hover:text-white hover:border-primary text-white" />
              </div>
            </Carousel>
          </div>
        </section>

        {/* CTA SECTION - HUNGRY YET? */}
        <section className="bg-primary py-16 md:py-24">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white mb-4">
              HUNGRY YET?
            </h2>
            <p className="text-white/80 font-bold text-lg md:text-xl mb-8 uppercase tracking-wider">
              Find your nearest FRYD and get your fix.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-black hover:bg-black hover:text-white uppercase font-bold h-14 px-8 text-lg transition-all hover:scale-105">
                Find Your FRYD
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary uppercase font-bold h-14 px-8 text-lg transition-all hover:scale-105">
                Order Online
              </Button>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-black py-12 md:py-16 border-t border-white/10 text-white">
           <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12">
                {/* Brand */}
                <div>
                  <div className="text-3xl font-black tracking-tighter text-white mb-4">
                    FRYD<span className="text-primary">.</span>
                  </div>
                  <p className="text-neutral-500 font-medium text-sm">
                    Premium fried chicken. No compromises. Born from passion, served with pride.
                  </p>
                </div>
                
                {/* Quick Links */}
                <div>
                  <h4 className="font-bold uppercase tracking-wider text-sm mb-4">Quick Links</h4>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-neutral-400 hover:text-primary font-medium transition-colors">Menu</a></li>
                    <li><a href="#" className="text-neutral-400 hover:text-primary font-medium transition-colors">Locations</a></li>
                    <li><a href="#" className="text-neutral-400 hover:text-primary font-medium transition-colors">About Us</a></li>
                    <li><a href="#" className="text-neutral-400 hover:text-primary font-medium transition-colors">Careers</a></li>
                  </ul>
                </div>
                
                {/* Socials */}
                <div>
                  <h4 className="font-bold uppercase tracking-wider text-sm mb-4">Follow Us</h4>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 border-2 border-white/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                      <span className="font-bold text-sm">IG</span>
                    </a>
                    <a href="#" className="w-10 h-10 border-2 border-white/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                      <span className="font-bold text-sm">TK</span>
                    </a>
                    <a href="#" className="w-10 h-10 border-2 border-white/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                      <span className="font-bold text-sm">X</span>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-neutral-500 text-sm font-bold">
                   © 2024 FRYD CHICKEN. EST. GEN Z.
                </p>
                <p className="text-neutral-600 text-xs font-medium">
                   MADE WITH 🔥 AND LOTS OF OIL
                </p>
              </div>
           </div>
        </footer>

      </div>
    </main>
  )
}
