'use client'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react'
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <nav className=" ">
                <div className="max-w-8xl mx-auto px-4 sm:px-8 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <span className="text-4xl font-bold">ZipTrip</span>
                            </div>
                            <div className="hidden md:block ml-8 text-lg">
                                <NavigationMenu>
                                    <NavigationMenuList>
                                        <NavigationMenuItem>
                                            <NavigationMenuLink className="px-4 py-4 font-medium hover:bg-gray-800 rounded-md" href="#">
                                                Home
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                        <NavigationMenuItem>
                                            <NavigationMenuLink className="px-3 py-2 font-medium hover:bg-gray-800 rounded-md" href="/events">
                                                Events
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                        <NavigationMenuItem>
                                            <NavigationMenuLink className="px-3 py-2 font-medium hover:bg-gray-800 rounded-md" href="#">
                                                Contact
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                    </NavigationMenuList>
                                </NavigationMenu>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <Button variant="secondary" className='text-lg'>Sign Up</Button>
                        </div>
                        <div className="md:hidden">
                            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                                <SheetTrigger asChild>
                                    <Button variant="ghost" size="icon" className="">
                                        <Menu className="h-6 w-6" />
                                        <span className="sr-only">Toggle menu</span>
                                    </Button>
                                </SheetTrigger>
                                <SheetContent side="right" className="w-[300px] bg-gray-900  p-0">
                                    <nav className="flex flex-col h-full">
                                        <div className="px-4 py-6 border-b border-gray-800">
                                            <div className="flex items-center justify-between mb-6">
                                                <span className="text-2xl font-bold">ZipTrip</span>
                                            </div>
                                            <Button className="w-full" variant="secondary">
                                                Sign Up
                                            </Button>
                                        </div>
                                        <div className="px-4 py-6">
                                            <ul className="space-y-4">
                                                <li>
                                                    <a href="#" className="block py-2 text-base font-medium hover:bg-gray-800 rounded-md">
                                                        Home
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block py-2 text-base font-medium hover:bg-gray-800 rounded-md">
                                                        Events
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block py-2 text-base font-medium hover:bg-gray-800 rounded-md">
                                                        Services
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" className="block py-2 text-base font-medium hover:bg-gray-800 rounded-md">
                                                        Contact
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}