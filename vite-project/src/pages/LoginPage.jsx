import { useState , useEffect} from 'react'
import {
  ArrowLeft,
  LogIn,
  LockKeyhole,
  User,
} from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

function LoginPage() {
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
  const token = localStorage.getItem('token')

  if (token) {
    navigate('/dashboard', { replace: true })
  }
}, [navigate])

  const handleSubmit = async (event) => {
    event.preventDefault()

    setError('')

    // Basic validation
    if (!username || !password) {
      setError('Please enter username and password')
      return
    }

    try {
      setIsLoading(true)

      const response = await fetch(
        'http://localhost:5000/api/auth/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      )

      const data = await response.json()

      // Backend returned an error
      if (!response.ok) {
        setError(data.message || 'Login failed')
        return
      }

      // Store JWT token
      localStorage.setItem('token', data.token)

      // Store user information
      localStorage.setItem(
        'user',
        JSON.stringify(data.user)
      )

      // Go to dashboard
      navigate('/dashboard')
    } catch (error) {
      console.error('Login error:', error)

      setError(
        'Unable to connect to the server. Please try again.'
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <div className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6">

        <div className="w-full max-w-md">

          {/* Back to Home */}
          <Link
            to="/"
            className="mb-6 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
          >
            <ArrowLeft size={17} />
            Back to Home
          </Link>


          {/* Login Card */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-6 shadow-2xl shadow-black/30 sm:p-8">

            {/* Logo */}
            <div className="flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold shadow-lg shadow-blue-900/30">
                M
              </div>
            </div>


            {/* Heading */}
            <div className="mt-6 text-center">

              <h1 className="text-2xl font-bold text-white sm:text-3xl">
                Welcome back
              </h1>

              <p className="mt-2 text-sm text-slate-400">
                Sign in to access your MyPortal workspace.
              </p>

            </div>


            {/* Login Form */}
            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >

              {/* Username */}
              <div>

                <label
                  htmlFor="username"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Username
                </label>

                <div className="relative">

                  <User
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(event) =>
                      setUsername(event.target.value)
                    }
                    placeholder="Enter your username"
                    autoComplete="username"
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 py-3 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />

                </div>

              </div>


              {/* Password */}
              <div>

                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Password
                </label>

                <div className="relative">

                  <LockKeyhole
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(event) =>
                      setPassword(event.target.value)
                    }
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    className="w-full rounded-lg border border-slate-700 bg-slate-950 py-3 pl-10 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  />

                </div>

              </div>


              {/* Error Message */}
              {error && (
                <div className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3">

                  <p className="text-sm text-red-400">
                    {error}
                  </p>

                </div>
              )}


              {/* Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:bg-blue-500 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
              >

                <LogIn size={18} />

                {isLoading
                  ? 'Signing in...'
                  : 'Sign In'}

              </button>

            </form>


            {/* Demo Credentials */}
            <div className="mt-6 rounded-lg border border-blue-500/10 bg-blue-500/5 p-4">

              <p className="text-center text-xs leading-5 text-slate-400">

                Demo credentials:

                <br />

                Username:{' '}
                <span className="font-medium text-slate-300">
                  prasath
                </span>

                <br />

                Password:{' '}
                <span className="font-medium text-slate-300">
                  123456
                </span>

              </p>

            </div>

          </div>


          {/* Footer */}
          <p className="mt-6 text-center text-xs text-slate-600">
            © 2026 MyPortal. All rights reserved.
          </p>

        </div>

      </div>

    </div>
  )
}

export default LoginPage