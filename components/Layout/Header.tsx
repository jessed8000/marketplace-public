// components/Layout/Header.tsx
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
})

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${
      isScrolled 
        ? 'fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50' 
        : 'absolute top-6 left-1/2 transform -translate-x-1/2 z-30 bg-transparent'
    } transition-all duration-300 ${poppins.className}`}>
      <div className={`${
        isScrolled 
          ? 'max-w-6xl mx-auto px-4' 
          : 'flex justify-center items-center'
      }`}>
        <div className={`flex justify-start items-center h-20 ${
          isScrolled ? 'gap-32' : 'gap-12'
        }`}>
          {/* Logo */}
          <Link href="/" className="flex items-center no-underline">
            <img 
              src="/images/lemon-chain-logo.svg"
              alt="LEMON CHAIN"
              className={`w-auto object-contain ${
                isScrolled ? 'h-10' : 'h-8'
              }`}
              onError={(e) => {
                e.currentTarget.outerHTML = `<span class="${isScrolled ? 'text-2xl' : 'text-xl'} font-bold text-gray-900">LEMON<span class="text-lemon-400">CHAIN</span></span>`;
              }}
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className={`hidden md:flex items-center ${
            isScrolled ? 'gap-16' : 'gap-8'
          }`}>
            <Link 
              href="/connect" 
              className={`text-gray-700 font-medium no-underline transition-colors duration-200 hover:text-gray-900 ${
                isScrolled ? 'text-lg' : 'text-base'
              }`}
            >
              Connect
            </Link>
            <Link 
              href="/about" 
              className={`text-gray-700 font-medium no-underline transition-colors duration-200 hover:text-gray-900 ${
                isScrolled ? 'text-lg' : 'text-base'
              }`}
            >
              About
            </Link>
            <Link 
              href="/launch" 
              className={`text-gray-700 font-medium no-underline transition-colors duration-200 hover:text-gray-900 ${
                isScrolled ? 'text-lg' : 'text-base'
              }`}
            >
              Launch
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden ml-auto p-2 rounded-lg border-none bg-transparent cursor-pointer transition-colors duration-200 hover:bg-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center">
              <span className={`block w-full h-0.5 bg-gray-700 mb-1 rounded-sm transition-all duration-300 ${
                mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}></span>
              <span className={`block w-full h-0.5 bg-gray-700 mb-1 rounded-sm transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`block w-full h-0.5 bg-gray-700 rounded-sm transition-all duration-300 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white rounded-b-xl shadow-lg p-2 flex flex-col gap-1">
            <Link 
              href="/connect" 
              className="block py-3 px-4 text-gray-700 text-base font-medium no-underline rounded-lg transition-colors duration-200 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Connect
            </Link>
            <Link 
              href="/about" 
              className="block py-3 px-4 text-gray-700 text-base font-medium no-underline rounded-lg transition-colors duration-200 hover:bg-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/launch" 
              className="block mx-4 my-2 py-3 px-6 bg-gray-900 text-white text-base font-semibold no-underline rounded-3xl text-center transition-colors duration-200 hover:bg-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              Launch
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}