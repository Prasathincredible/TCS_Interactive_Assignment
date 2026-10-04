import {
  CalendarCheck,
  FileText,
  GraduationCap,
  Headphones,
  WalletCards,
  Plane,
} from 'lucide-react'

import ServiceCard from './ServiceCard'

function Services() {
  const services = [
    {
      icon: CalendarCheck,
      title: 'Attendance',
      description:
        'View your attendance, working hours, and daily attendance records.',
      color: 'text-blue-400',
    },
    {
      icon: Plane,
      title: 'Leave Management',
      description:
        'Apply for leave, check your leave balance, and track requests.',
      color: 'text-cyan-400',
    },
    {
      icon: WalletCards,
      title: 'Payroll',
      description:
        'Access salary information, payslips, and important payroll details.',
      color: 'text-emerald-400',
    },
    {
      icon: FileText,
      title: 'Documents',
      description:
        'Manage employee documents, certificates, and important files.',
      color: 'text-violet-400',
    },
    {
      icon: GraduationCap,
      title: 'Learning',
      description:
        'Explore learning programs, training courses, and development resources.',
      color: 'text-orange-400',
    },
    {
      icon: Headphones,
      title: 'Help & Support',
      description:
        'Raise requests and get assistance for employee-related services.',
      color: 'text-pink-400',
    },
  ]

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-slate-950 py-20 sm:py-24"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
            Employee Services
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need,
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              right at your fingertips.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            Access essential employee services from one convenient
            digital workspace.
          </p>
        </div>

        {/* Services grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              color={service.color}
            />
          ))}
        </div>

        {/* Bottom information */}
        <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-center sm:p-8">
          <h3 className="text-lg font-semibold text-white">
            One portal. Multiple possibilities.
          </h3>

          <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-400">
            MyPortal brings frequently used employee services together,
            making it easier to manage your workday and stay connected.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services