import { ArrowRight } from 'lucide-react'

function ServiceCard({ icon: Icon, title, description, color }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-slate-700 hover:shadow-xl">
      {/* Background glow */}
      <div
        className={`absolute -right-10 -top-10 h-24 w-24 rounded-full ${color} opacity-10 blur-2xl transition duration-300 group-hover:opacity-20`}
      />

      {/* Icon */}
      <div
        className={`relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${color} bg-opacity-10`}
      >
        <Icon size={24} />
      </div>

      {/* Content */}
      <div className="relative">
        <h3 className="text-lg font-semibold text-white">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          {description}
        </p>

        {/* Learn more */}
        <button
          type="button"
          className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition duration-200 group-hover:text-blue-400"
        >
          Explore
          <ArrowRight
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </button>
      </div>
    </div>
  )
}

export default ServiceCard