import { useState } from 'react'
import {
  Menu,
  X,
  Home,
  BriefcaseBusiness,
  Newspaper,
  Info,
  LogIn,
} from 'lucide-react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    {
      name: 'Home',
      href: '#home',
      icon: Home,
    },
    {
      name: 'Services',
      href: '#services',
      icon: BriefcaseBusiness,
    },
    {
      name: 'News',
      href: '#news',
      icon: Newspaper,
    },
    {
      name: 'About',
      href: '#about',
      icon: Info,
    },
  ]

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-800 bg-gray-950 text-white shadow-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* LEFT SECTION */}
        <div className="flex items-center gap-3">

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="rounded-lg p-2 text-gray-300 transition hover:bg-gray-800 hover:text-white lg:hidden"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>

          {/* Logo / Application Name */}
          <a
            href="#home"
            className="flex items-center gap-2"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 font-bold text-white shadow-md">
              M
            </div>

            <span className="text-xl font-bold tracking-wide">
              MyPortal
            </span>
          </a>
        </div>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const Icon = item.icon

            return (
              <a
                key={item.name}
                href={item.href}
                className="group flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-300 transition duration-200 hover:bg-gray-800 hover:text-white"
              >
                <Icon
                  size={17}
                  className="transition group-hover:text-blue-400"
                />

                <span>{item.name}</span>
              </a>
            )
          })}
        </div>

        {/* DESKTOP LOGIN */}
        <div className="hidden lg:block">
          <Link
            to="/login"
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition duration-200 hover:bg-blue-500 hover:shadow-lg active:scale-95"
          >
            <LogIn size={18} />
            <span>Login</span>
          </Link>
        </div>

        {/* MOBILE LOGIN */}
        <Link
          to="/login"
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white transition hover:bg-blue-500 lg:hidden"
        >
          <LogIn size={17} />
          <span className="hidden sm:inline">Login</span>
        </Link>
      </div>

      {/* MOBILE NAVIGATION */}
      {isMobileMenuOpen && (
        <div className="border-t border-gray-800 bg-gray-950 lg:hidden">
          <div className="space-y-1 px-4 py-4 sm:px-6">

            {navItems.map((item) => {
              const Icon = item.icon

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleMobileLinkClick}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-gray-300 transition hover:bg-gray-800 hover:text-white"
                >
                  <Icon size={19} />

                  <span>{item.name}</span>
                </a>
              )
            })}

            {/* MOBILE MENU LOGIN */}
            <Link
              to="/login"
              onClick={handleMobileLinkClick}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              <LogIn size={19} />
              Login
            </Link>

          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar