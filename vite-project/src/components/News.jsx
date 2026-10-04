import {
  Megaphone,
  GraduationCap,
  CalendarDays,
  HeartPulse,
} from 'lucide-react'

import NewsCard from './NewsCard'

function News() {
  const newsItems = [
    {
      icon: Megaphone,
      category: 'Announcement',
      title: 'Welcome to the new MyPortal experience',
      description:
        'Access employee services, important updates, and workplace resources from one convenient portal.',
      date: '03 Oct 2026',
      color: 'bg-blue-500',
    },
    {
      icon: GraduationCap,
      category: 'Learning',
      title: 'New learning programs are now available',
      description:
        'Explore new technical and professional development programs to continue building your skills.',
      date: '01 Oct 2026',
      color: 'bg-cyan-500',
    },
    {
      icon: CalendarDays,
      category: 'Holiday',
      title: 'Upcoming holiday and office schedule',
      description:
        'Check the upcoming holiday calendar and plan your work schedule accordingly.',
      date: '29 Sep 2026',
      color: 'bg-violet-500',
    },
    {
      icon: HeartPulse,
      category: 'Wellness',
      title: 'Employee wellness initiative',
      description:
        'Discover new resources and activities designed to support a healthy and balanced workplace.',
      date: '27 Sep 2026',
      color: 'bg-emerald-500',
    },
  ]

  return (
    <section
      id="news"
      className="relative overflow-hidden bg-slate-900 py-20 sm:py-24"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
            Latest Updates
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Stay informed.
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Stay connected.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-400 sm:text-lg">
            Keep up with the latest company announcements, learning
            opportunities, events, and employee updates.
          </p>
        </div>

        {/* News grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {newsItems.map((news) => (
            <NewsCard
              key={news.title}
              icon={news.icon}
              category={news.category}
              title={news.title}
              description={news.description}
              date={news.date}
              color={news.color}
            />
          ))}
        </div>

        {/* View all button */}
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/60 px-6 py-3 text-sm font-semibold text-slate-200 transition duration-200 hover:border-slate-600 hover:bg-slate-800"
          >
            View all updates
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </section>
  )
}

function ArrowRightIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

export default News