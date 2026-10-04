import { useEffect, useState } from 'react'
import {
  CalendarCheck,
  FileText,
  GraduationCap,
  LogOut,
  User,
  WalletCards,
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()

  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (!token) {
      navigate('/login')
      return
    }

    const fetchUser = async () => {
      try {
        const response = await fetch(
          'http://localhost:5000/api/auth/me',
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )

        const data = await response.json()

        if (!response.ok) {
          localStorage.removeItem('token')
          localStorage.removeItem('user')

          navigate('/login')
          return
        }

        setUser(data.user)

        // Keep the latest user information locally
        localStorage.setItem(
          'user',
          JSON.stringify(data.user)
        )
      } catch (error) {
        console.error(
          'Failed to fetch user:',
          error
        )

        navigate('/login')
      } finally {
        setIsLoading(false)
      }
    }

    fetchUser()
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')

    navigate('/login')
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 text-white">
        <p className="text-slate-400">
          Loading dashboard...
        </p>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 font-bold">
              M
            </div>

            <span className="text-xl font-bold">
              MyPortal
            </span>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-300 transition hover:border-red-500/50 hover:bg-red-500/10 hover:text-red-400"
          >
            <LogOut size={17} />

            <span className="hidden sm:inline">
              Logout
            </span>
          </button>

        </div>
      </header>


      {/* Main */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {/* Welcome */}
        <section className="mb-8">

          <p className="text-sm font-medium text-blue-400">
            Employee Dashboard
          </p>

          <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
            Welcome back, {user.name}!
          </h1>

          <p className="mt-2 text-slate-400">
            Here is an overview of your employee
            information and services.
          </p>

        </section>


        {/* Employee Information */}
        <section className="grid gap-6 lg:grid-cols-3">

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 lg:col-span-2">

            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                <User size={20} />
              </div>

              <div>
                <h2 className="font-semibold text-white">
                  Employee Information
                </h2>

                <p className="text-sm text-slate-500">
                  Your profile details
                </p>
              </div>
            </div>


            <div className="grid gap-5 sm:grid-cols-2">

              <DashboardInfo
                label="Employee ID"
                value={user.employeeId}
              />

              <DashboardInfo
                label="Name"
                value={user.name}
              />

              <DashboardInfo
                label="Designation"
                value={user.designation}
              />

              <DashboardInfo
                label="Department"
                value={user.department}
              />

              <DashboardInfo
                label="Email"
                value={user.email}
              />

              <DashboardInfo
                label="Location"
                value={user.location}
              />

            </div>
          </div>


          {/* Status */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

            <h2 className="font-semibold text-white">
              Employment Status
            </h2>

            <div className="mt-6 flex items-center gap-3">

              <div className="h-3 w-3 rounded-full bg-emerald-500" />

              <span className="font-medium text-emerald-400">
                Active
              </span>

            </div>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              Your employee account is active and
              available for portal services.
            </p>

          </div>

        </section>


        {/* Quick Services */}
        <section className="mt-8">

          <h2 className="mb-4 text-xl font-bold">
            Quick Services
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <DashboardCard
              icon={CalendarCheck}
              title="Attendance"
              description="View attendance details"
            />

            <DashboardCard
              icon={FileText}
              title="Documents"
              description="Access employee documents"
            />

            <DashboardCard
              icon={WalletCards}
              title="Payroll"
              description="View salary information"
            />

            <DashboardCard
              icon={GraduationCap}
              title="Learning"
              description="Access training programs"
            />

          </div>

        </section>

      </main>
    </div>
  )
}


function DashboardInfo({ label, value }) {
  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
        {label}
      </p>

      <p className="mt-1 text-sm font-medium text-slate-200">
        {value}
      </p>
    </div>
  )
}


function DashboardCard({
  icon: Icon,
  title,
  description,
}) {
  return (
    <button
      type="button"
      className="rounded-xl border border-slate-800 bg-slate-900 p-5 text-left transition hover:-translate-y-1 hover:border-blue-500/40 hover:bg-slate-800"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
        <Icon size={20} />
      </div>

      <h3 className="mt-4 font-semibold text-white">
        {title}
      </h3>

      <p className="mt-1 text-sm text-slate-500">
        {description}
      </p>
    </button>
  )
}


export default Dashboard