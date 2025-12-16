'use client'

import { useState } from 'react'
import { FaUser, FaBars, FaTimes, FaSearch, FaBell } from 'react-icons/fa'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Find Jobs', href: '/jobs' },
    { label: 'Find Talent', href: '/talent' },
    { label: 'Employers', href: '/employers' },
    { label: 'Candidates', href: '/candidates' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <a href="/" className="flex items-center">
                <div className="h-10 w-10 bg-primary-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">TF</span>
                </div>
                <span className="ml-3 text-xl font-bold text-gray-900">
                  Talent<span className="text-primary-600">Finders</span>Pro
                </span>
              </a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <button className="p-2 text-gray-600 hover:text-primary-600">
              <FaSearch className="w-5 h-5" />
            </button>

            {/* Notifications */}
            <button className="p-2 text-gray-600 hover:text-primary-600 relative">
              <FaBell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* User Login */}
            <div className="flex items-center space-x-2">
              {isLoggedIn ? (
                <>
                  <div className="relative">
                    <button className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg">
                      <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                        <FaUser className="w-4 h-4 text-primary-600" />
                      </div>
                      <span className="text-sm font-medium text-gray-700 hidden md:inline">
                        John Doe
                      </span>
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex items-center space-x-2">
                  <a
                    href="/login"
                    className="btn-secondary py-2 px-4 text-sm"
                  >
                    Login
                  </a>
                  <a
                    href="/register"
                    className="btn-primary py-2 px-4 text-sm"
                  >
                    Register
                  </a>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-primary-600"
            >
              {isMenuOpen ? (
                <FaTimes className="w-6 h-6" />
              ) : (
                <FaBars className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="nav-link px-0 py-3 border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
