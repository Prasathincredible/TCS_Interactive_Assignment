import { ArrowRight, CalendarDays } from 'lucide-react'

function NewsCard({
  icon: Icon,
  category,
  title,
  description,
  date,
  color,
}) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80 transition duration-300 hover:-translate-y-1 hover:border-slate-700 hover:shadow-xl">
      {/* Top accent */}
      <div className={`h-1 w-full ${color}`} />

      <div className="p-6">
        {/* Category + Icon */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 ${color.replace(
                'bg-',
                'text-',
              )}`}
            >
              <Icon size={19} />
            </div>

            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              {category}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <CalendarDays size={14} />
            <span>{date}</span>
          </div>
        </div>

        {/* Content */}
        <h3 className="mt-5 text-lg font-semibold leading-7 text-white transition group-hover:text-blue-400">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          {description}
        </p>

        {/* Read more */}
        <button
          type="button"
          className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition duration-200 group-hover:text-blue-400"
        >
          Read more
          <ArrowRight
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </button>
      </div>
    </article>
  )
}

export default NewsCard