import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from '@/shared/ui/Header'
import Footer from '@/shared/ui/Footer'

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <div className="min-h-screen flex flex-col bg-bg text-ink">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
