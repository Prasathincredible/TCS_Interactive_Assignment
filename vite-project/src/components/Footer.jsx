import {
  ArrowUp,
  BriefcaseBusiness,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'

function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-2"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 font-bold text-white shadow-lg">
                M
              </div>

              <span className="text-xl font-bold tracking-wide text-white">
                MyPortal
              </span>
            </a>

            <p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">
              Your digital workplace for accessing employee services,
              workplace information, and company updates from one place.
            </p>

            {/* Social links */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 font-bold text-slate-400 transition hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400"
              >
                in
              </a>

              <a
                href="#"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 font-bold text-slate-400 transition hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400"
              >
                GH
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 font-bold text-slate-400 transition hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400"
              >
                IG
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 font-bold text-slate-400 transition hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400"
              >
                f
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-sm text-slate-400 transition hover:text-blue-400"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="text-sm text-slate-400 transition hover:text-blue-400"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="#news"
                  className="text-sm text-slate-400 transition hover:text-blue-400"
                >
                  News & Announcements
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="text-sm text-slate-400 transition hover:text-blue-400"
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href="#services"
                  className="text-sm text-slate-400 transition hover:text-blue-400"
                >
                  Attendance
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="text-sm text-slate-400 transition hover:text-blue-400"
                >
                  Leave Management
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="text-sm text-slate-400 transition hover:text-blue-400"
                >
                  Payroll
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="text-sm text-slate-400 transition hover:text-blue-400"
                >
                  Learning
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>

            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <Mail
                  size={17}
                  className="mt-0.5 shrink-0 text-blue-400"
                />

                <span className="text-sm text-slate-400">
                  support@myportal.com
                </span>
              </li>

              <li className="flex items-start gap-3">
                <Phone
                  size={17}
                  className="mt-0.5 shrink-0 text-blue-400"
                />

                <span className="text-sm text-slate-400">
                  +91 98765 43210
                </span>
              </li>

              <li className="flex items-start gap-3">
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-blue-400"
                />

                <span className="text-sm leading-6 text-slate-400">
                  Chennai, Tamil Nadu
                  <br />
                  India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 flex flex-col gap-5 border-t border-slate-800 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <BriefcaseBusiness
              size={15}
              className="text-blue-400"
            />

            <p className="text-xs text-slate-500 sm:text-sm">
              © 2026 MyPortal. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="#"
              className="text-xs text-slate-500 transition hover:text-slate-300 sm:text-sm"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-xs text-slate-500 transition hover:text-slate-300 sm:text-sm"
            >
              Terms of Use
            </a>

            <button
              type="button"
              onClick={handleBackToTop}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-400 transition hover:border-blue-500/50 hover:text-blue-400"
              aria-label="Back to top"
            >
              <ArrowUp size={17} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer