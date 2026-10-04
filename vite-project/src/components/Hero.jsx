import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  LayoutDashboard,
  ShieldCheck,
  Users,
} from 'lucide-react'

function Hero() {
  const handleExplore = () => {
    const servicesSection = document.getElementById('services')

    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }

  const handleLearnMore = () => {
    const aboutSection = document.getElementById('about')

    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 pt-16 text-white"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="absolute -right-40 top-40 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl" />

        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-indigo-600/10 blur-3xl" />

        {/* Decorative Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Main Hero Content */}
      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid w-full items-center gap-14 lg:grid-cols-2 lg:gap-10">

          {/* LEFT CONTENT */}
          <div className="max-w-2xl">

            {/* Small Label */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />

              Your Digital Workplace
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Everything you need,
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
                all in one place.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              Welcome to MyPortal, your digital workspace for accessing
              employee services, managing daily tasks, staying updated with
              company news, and connecting with your organization.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <button
                type="button"
                onClick={handleExplore}
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition duration-200 hover:bg-blue-500 hover:shadow-blue-900/50 active:scale-95"
              >
                Explore Portal

                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </button>

              <button
                type="button"
                onClick={handleLearnMore}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/60 px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-sm transition duration-200 hover:border-slate-600 hover:bg-slate-800"
              >
                Learn More
              </button>

            </div>

            {/* Feature Highlights */}
            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                  <ShieldCheck size={19} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Secure
                  </p>

                  <p className="text-xs text-slate-400">
                    Employee access
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                  <Clock3 size={19} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Anytime
                  </p>

                  <p className="text-xs text-slate-400">
                    Easy access
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
                  <Users size={19} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-white">
                    Connected
                  </p>

                  <p className="text-xs text-slate-400">
                    One workspace
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">

            {/* Outer Glow */}
            <div className="absolute inset-8 rounded-3xl bg-blue-500/20 blur-3xl" />

            {/* Main Dashboard Card */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-900/90 shadow-2xl shadow-black/40 backdrop-blur-xl">

              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4 sm:px-6">

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
                    <LayoutDashboard size={20} />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      MyPortal
                    </p>

                    <p className="text-xs text-slate-400">
                      Employee Dashboard
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>

              </div>

              {/* User Profile Section */}
              <div className="border-b border-slate-800 p-5 sm:p-6">

                <div className="flex items-center gap-4">

                  {/* Avatar */}
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-lg font-bold text-white shadow-lg">
                    PS
                  </div>

                  <div className="min-w-0">
                    <p className="text-lg font-semibold text-white">
                      Welcome back!
                    </p>

                    <p className="truncate text-sm text-slate-400">
                      Your workspace is ready.
                    </p>
                  </div>

                  <div className="ml-auto hidden items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1.5 sm:flex">
                    <span className="h-2 w-2 rounded-full bg-green-400" />

                    <span className="text-xs font-medium text-green-400">
                      Active
                    </span>
                  </div>

                </div>

              </div>

              {/* Statistics */}
              <div className="grid grid-cols-2 gap-3 p-5 sm:grid-cols-3 sm:p-6">

                <div className="rounded-xl border border-slate-800 bg-slate-800/50 p-4">
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                    <BriefcaseBusiness size={17} />
                  </div>

                  <p className="text-2xl font-bold text-white">
                    12
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Projects
                  </p>
                </div>

                <div className="rounded-xl border border-slate-800 bg-slate-800/50 p-4">
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                    <CheckCircle2 size={17} />
                  </div>

                  <p className="text-2xl font-bold text-white">
                    08
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Completed
                  </p>
                </div>

                <div className="col-span-2 rounded-xl border border-slate-800 bg-slate-800/50 p-4 sm:col-span-1">
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400">
                    <Clock3 size={17} />
                  </div>

                  <p className="text-2xl font-bold text-white">
                    24
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Tasks
                  </p>
                </div>

              </div>

              {/* Progress Section */}
              <div className="border-t border-slate-800 p-5 sm:p-6">

                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-medium text-slate-200">
                    Weekly Progress
                  </p>

                  <span className="text-sm font-semibold text-blue-400">
                    78%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                </div>

                <p className="mt-3 text-xs text-slate-500">
                  Keep going! You're making great progress this week.
                </p>

              </div>

            </div>

            {/* Floating Notification Card */}
            <div className="absolute -right-3 -top-5 hidden rounded-xl border border-slate-700 bg-slate-900/95 p-3 shadow-xl backdrop-blur-md sm:block lg:-right-6">

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-500/10 text-green-400">
                  <CheckCircle2 size={18} />
                </div>

                <div>
                  <p className="text-xs font-semibold text-white">
                    All caught up
                  </p>

                  <p className="text-[11px] text-slate-500">
                    No pending alerts
                  </p>
                </div>
              </div>

            </div>

            {/* Floating Service Card */}
            <div className="absolute -bottom-5 -left-3 hidden rounded-xl border border-slate-700 bg-slate-900/95 p-3 shadow-xl backdrop-blur-md sm:block lg:-left-6">

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                  <BriefcaseBusiness size={18} />
                </div>

                <div>
                  <p className="text-xs font-semibold text-white">
                    Quick Services
                  </p>

                  <p className="text-[11px] text-slate-500">
                    Access everything easily
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2">

        <button
          type="button"
          aria-label="Slide 1"
          className="h-2.5 w-8 rounded-full bg-blue-500"
        />

        <button
          type="button"
          aria-label="Slide 2"
          className="h-2.5 w-2.5 rounded-full bg-slate-600 transition hover:bg-slate-400"
        />

        <button
          type="button"
          aria-label="Slide 3"
          className="h-2.5 w-2.5 rounded-full bg-slate-600 transition hover:bg-slate-400"
        />

        <button
          type="button"
          aria-label="Slide 4"
          className="h-2.5 w-2.5 rounded-full bg-slate-600 transition hover:bg-slate-400"
        />

      </div>

    </section>
  )
}

export default Hero