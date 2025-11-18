import type { AppProps } from 'next/app'
import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'
import Head from 'next/head'
import '../styles/globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

export default function App({ Component, pageProps }: AppProps) {
  const [momentLoaded, setMomentLoaded] = useState(false)
  const [momentTimezoneLoaded, setMomentTimezoneLoaded] = useState(false)
  const scriptsInitializedRef = useRef(false)
  const [isClientReady, setIsClientReady] = useState(false)

  useEffect(() => {
    if (scriptsInitializedRef.current) return
    scriptsInitializedRef.current = true

    if (typeof window === 'undefined') return

    const initScripts = () => {
      if (!window.jQuery) return

      if (window.WOW) {
        new window.WOW().init()
      }

      const initCounterUp = () => {
        if (window.jQuery?.fn?.counterUp) {
          window.jQuery('[data-toggle="counter-up"]').counterUp({
            delay: 10,
            time: 2000
          })
        } else {
          setTimeout(initCounterUp, 150)
        }
      }

      setTimeout(initCounterUp, 400)
    }

    const waitForJQuery = () => {
      if (window.jQuery) {
        initScripts()
        return
      }
      setTimeout(waitForJQuery, 100)
    }

    waitForJQuery()
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return
    const readyTimeout = window.requestAnimationFrame(() => setIsClientReady(true))
    return () => window.cancelAnimationFrame(readyTimeout)
  }, [])

  const renderFallback = () => (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0f172b',
        color: '#fff',
        flexDirection: 'column',
        gap: '1rem'
      }}
    >
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div>Đang tải nội dung ...</div>
    </div>
  )

  return (
    <LanguageProvider>
      <Head>
        {/* Preload critical CSS */}
        <link rel="preload" href="/css/style.css" as="style" />
        <link rel="preload" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" as="style" />
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://flagcdn.com" />
      </Head>
      <Script
        src="https://code.jquery.com/jquery-3.4.1.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (typeof window !== 'undefined' && window.jQuery) {
            window.$ = window.jQuery
          }
        }}
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        strategy="afterInteractive"
      />
      <Script
        src="/lib/wow/wow.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="/lib/easing/easing.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="/lib/waypoints/waypoints.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="/lib/counterup/counterup.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="/lib/owlcarousel/owl.carousel.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="/lib/tempusdominus/js/moment.min.js"
        strategy="lazyOnload"
        onLoad={() => {
          // Verify moment is loaded before loading moment-timezone
          if (typeof window !== 'undefined' && (window as any).moment) {
            setMomentLoaded(true)
          }
        }}
      />
      {momentLoaded && (
        <Script
          src="/lib/tempusdominus/js/moment-timezone.min.js"
          strategy="lazyOnload"
          onLoad={() => {
            // Verify moment-timezone is loaded before loading tempusdominus
            if (typeof window !== 'undefined' && (window as any).moment && (window as any).moment.tz) {
              setMomentTimezoneLoaded(true)
            }
          }}
        />
      )}
      {momentTimezoneLoaded && (
        <Script
          src="/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"
          strategy="lazyOnload"
        />
      )}
      <Script
        src="/js/main.js"
        strategy="lazyOnload"
      />
      {isClientReady ? <Component {...pageProps} /> : renderFallback()}
    </LanguageProvider>
  )
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    jQuery: any
    $: any
    WOW: any
  }
}

