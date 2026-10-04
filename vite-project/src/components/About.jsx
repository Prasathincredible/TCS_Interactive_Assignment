import {
  ShieldCheck,
  Zap,
  Users,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

function About() {
  const features = [
    'Easy access to employee services',
    'Centralized workplace information',
    'Simple and responsive user experience',
    'Secure employee-focused portal',
  ]

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-950 py-20 sm:py-24"
    >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute left-1/4 top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left content */}
          <div>
            <div className="mb-5 inline-flex items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
              About MyPortal
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              A simpler way to manage your
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                digital workplace.
              </span>
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-400 sm:text-lg">
              MyPortal is a centralized employee self-service platform
              designed to bring frequently used workplace services,
              information, and resources together in one convenient place.
            </p>

            <p className="mt-4 text-base leading-7 text-slate-400">
              From checking attendance and managing leave to accessing
              documents and learning resources, employees can find the
              information they need without navigating multiple systems.
            </p>

            {/* Features */}
            <div className="mt-8 space-y-4">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400">
                    <CheckCircle2 size={16} />
                  </div>

                  <span className="text-sm text-slate-300 sm:text-base">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              type="button"
              className="group mt-8 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition duration-200 hover:bg-blue-500 active:scale-95"
            >
              Explore MyPortal
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </button>
          </div>

          {/* Right visual */}
          <div className="relative mx-auto w-full max-w-lg">

            {/* Glow */}
            <div className="absolute inset-10 rounded-full bg-blue-500/20 blur-3xl" />

            {/* Main card */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/90 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-8">

              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-400">
                    MyPortal
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-white">
                    Your workspace
                  </h3>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-900/30">
                  <ShieldCheck size={24} />
                </div>
              </div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-slate-800 bg-slate-800/60 p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                    <Zap size={20} />
                  </div>

                  <p className="mt-4 text-2xl font-bold text-white">
                    Fast
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Easy access
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-800/60 p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                    <Users size={20} />
                  </div>

                  <p className="mt-4 text-2xl font-bold text-white">
                    Connected
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    One workspace
                  </p>
                </div>
              </div>

              {/* Progress */}
              <div className="mt-4 rounded-2xl border border-slate-800 bg-slate-800/60 p-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-300">
                    Employee Experience
                  </span>

                  <span className="text-sm font-semibold text-blue-400">
                    92%
                  </span>
                </div>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-700">
                  <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
                </div>

                <p className="mt-3 text-xs text-slate-500">
                  Designed to make everyday employee tasks simpler.
                </p>
              </div>

              {/* Status */}
              <div className="mt-4 flex items-center gap-3 rounded-2xl border border-green-500/10 bg-green-500/5 p-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-500/10">
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                </div>

                <div>
                  <p className="text-sm font-medium text-white">
                    Portal available
                  </p>

                  <p className="text-xs text-slate-500">
                    Your workplace is always within reach.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -right-3 -top-5 hidden rounded-xl border border-slate-700 bg-slate-900/95 p-4 shadow-xl backdrop-blur-md sm:block lg:-right-6">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                  <ShieldCheck size={18} />
                </div>

                <div>
                  <p className="text-xs font-semibold text-white">
                    Secure Access
                  </p>

                  <p className="text-[11px] text-slate-500">
                    Employee focused
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About