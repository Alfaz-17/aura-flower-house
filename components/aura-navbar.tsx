'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { motion, AnimatePresence } from 'framer-motion'

const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Collections', href: '/collections' },
    { name: 'Signature', href: '/signature' },
    { name: 'Wedding', href: '/wedding' },
    { name: 'About', href: '/about' },
]

export function AuraNavbar() {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const pathname = usePathname()

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Don't render the public navbar on admin pages
    if (pathname?.startsWith('/admin')) {
        return null
    }
    
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-50 w-full px-2 group">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12 bg-background/70 backdrop-blur-md rounded-2xl border border-primary/10', isScrolled && 'bg-background/95 max-w-4xl backdrop-blur-xl lg:px-5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-0 lg:gap-0 lg:py-0">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-3 -my-6">
                                <Image 
                                    src="/logo.png" 
                                    alt="Aura House of Flowers" 
                                    width={280} 
                                    height={100} 
                                    className="h-30 w-auto object-contain my-[-10] p-0 drop-shadow-md"
                                />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-50 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className={cn("m-auto size-6 duration-200", menuState ? "opacity-0 rotate-180 scale-0" : "opacity-100 rotate-0 scale-100")} />
                                <X className={cn("absolute inset-0 m-auto size-6 duration-200", menuState ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-180 scale-0")} />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-10 text-[11px] uppercase tracking-[0.2em] font-medium">
                                {menuItems.map((item, index) => {
                                    const isActive = pathname === item.href
                                    return (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className={cn(
                                                    "relative group block transition-colors duration-300",
                                                    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                                                )}
                                            >
                                                <span>{item.name}</span>
                                                <span className={cn(
                                                    "absolute -bottom-1 left-1/2 w-0 h-[1px] bg-primary transition-all duration-300 ease-out group-hover:w-full group-hover:left-0",
                                                    isActive && "w-full left-0"
                                                )} />
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>

                        <div className="hidden lg:flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                             <Button
                                asChild
                                variant="outline"
                                size="sm"
                                className={cn('text-[11px] uppercase tracking-[0.2em]', isScrolled && 'lg:hidden')}>
                                <Link href="/contact">
                                    <span>Contact</span>
                                </Link>
                            </Button>
                            <Button
                                asChild
                                size="sm"
                                className={cn('text-[11px] uppercase tracking-[0.2em] bg-foreground text-background', isScrolled ? 'lg:inline-flex' : 'hidden')}>
                                <Link href="/collections">
                                    <span>Explore</span>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            <AnimatePresence>
                {menuState && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-40 bg-background/20 backdrop-blur-sm lg:hidden"
                            onClick={() => setMenuState(false)}
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                            className="fixed top-0 right-0 z-40 h-screen w-[80%] max-w-sm bg-background/90 backdrop-blur-2xl border-l border-primary/10 shadow-2xl lg:hidden p-8 pt-32"
                        >
                            <div className="flex flex-col h-full justify-between">
                                <ul className="space-y-8">
                                    {menuItems.map((item, index) => {
                                        const isActive = pathname === item.href
                                        return (
                                            <motion.li 
                                                key={index}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.1 + index * 0.1 }}
                                            >
                                                <Link
                                                    href={item.href}
                                                    onClick={() => setMenuState(false)}
                                                    className={cn(
                                                        "block text-2xl font-serif tracking-tight transition-colors",
                                                        isActive ? "text-primary italic" : "text-muted-foreground hover:text-foreground"
                                                    )}
                                                >
                                                    {item.name}
                                                </Link>
                                            </motion.li>
                                        )
                                    })}
                                </ul>

                                <div className="space-y-6">
                                     <div className="h-px w-full bg-primary/10" />
                                     <div className="flex flex-col gap-4">
                                        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Follow Us</p>
                                        <Link href="#" className="font-serif text-lg text-primary hover:opacity-80">@aurahouseofflowers</Link>
                                     </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    )
}
