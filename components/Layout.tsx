import { ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Spinner from './Spinner'
import BackToTop from './BackToTop'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="container-xxl bg-white p-0">
      <Spinner />
      <div className="container-xxl position-relative p-0">
        <Navbar />
      </div>
      {children}
      <Footer />
      <BackToTop />
    </div>
  )
}

