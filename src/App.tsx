import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from '@/shared/ui/Layout'

const HomePage = lazy(() => import('@/pages/home/HomePage'))
const PortfolioPage = lazy(() => import('@/pages/portfolio/PortfolioPage'))
const PublicationsPage = lazy(() => import('@/pages/publications/PublicationsPage'))
const PartnersPage = lazy(() => import('@/pages/partners/PartnersPage'))
const CredentialsPage = lazy(() => import('@/pages/credentials/CredentialsPage'))
const ContactPage = lazy(() => import('@/pages/contact/ContactPage'))

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/publications" element={<PublicationsPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/credentials" element={<CredentialsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
