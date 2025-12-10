'use client'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { use, useEffect, useState } from 'react'
import { ModeToggle } from './theme-btn'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import LoadingBar from 'react-top-loading-bar'
import { usePathname } from 'next/navigation'


const Navbar = () => {
  const [progress, setprogress] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    setprogress(30)

    setTimeout(() => {
      setprogress(70)
    } , 100);

    setTimeout(() => {
      setprogress(100)
    }, 400);
  
  }, [pathname])

  useEffect(() => {
    setTimeout(() => {
      setprogress(0)
    }, 500);
  }, [])
  
  
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className=" bg-background/50 shadow-md sticky top-0 backdrop-blur z-50">
      <LoadingBar
        color="#7f22fe"
        progress={progress}
        onLoaderFinished={() => setprogress(0)}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-purple-600">
            Yukta Blog
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
  <Link
    href="/"
    className="text-gray-700 font-medium transition-all duration-200 hover:font-bold hover:text-purple-600"
  >
    Home
  </Link>
  <Link
    href="/about"
    className="text-gray-700 font-medium transition-all duration-200 hover:font-bold hover:text-purple-600"
  >
    About
  </Link>
  <Link
    href="/blog"
    className="text-gray-700 font-medium transition-all duration-200 hover:font-bold hover:text-purple-600"
  >
    Blog
  </Link>
  <Link
    href="/contact"
    className="text-gray-700 font-medium transition-all duration-200 hover:font-bold hover:text-purple-600"
  >
    Contact
  </Link>
  <div className="flex items-center">
    <Button className="mx-1" variant="outline">
      Login
    </Button>
    <Button className="mx-1" variant="outline">
      SignUp
    </Button>
    <ModeToggle />
  </div>
</div>
          

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet>
            <span className='mx-2'>
            <ModeToggle/>
            </span>
  <SheetTrigger asChild>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button></SheetTrigger>
            <SheetContent>
    <SheetHeader>
      <SheetTitle className="font-bold text-center my-4">YuktaBlog</SheetTitle>
      <SheetDescription>
        <div className="flex flex-col space-y-4 items-center">
            <Link href="/" className="text-gray-700 hover:text-purple-600">Home</Link>
            <Link href="/about" className="text-gray-700 hover:text-purple-600">About</Link>
            <Link href="/blog" className="text-gray-700 hover:text-purple-600">Blog</Link>
            <Link href="/contact" className="text-gray-700 hover:text-purple-600">Contact</Link>
              <div>
            <Button className="mx-1 text-xs" variant="outline">Login</Button>
            <Button className="mx-1 text-xs" variant="outline">SignUp</Button>
          </div>
          </div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
          </div>
        
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 space-y-2">
            <Link href="/" className="block text-gray-700 hover:text-purple-600">Home</Link>
            <Link href="/about" className="block text-gray-700 hover:text-purple-600">About</Link>
            <Link href="/contact" className="block text-gray-700 hover:text-purple-600">Contact</Link>
          </div>
        )}
        
      </div>
    </nav>
  )
}

export default Navbar

