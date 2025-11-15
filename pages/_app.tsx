import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import Script from 'next/script'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Load jQuery and Bootstrap
    if (typeof window !== 'undefined') {
      // Initialize scripts after component mounts
      const initScripts = () => {
        if (window.jQuery) {
          // Initialize WOW.js (loaded from local file)
          if (window.WOW) {
            new window.WOW().init()
          }
          
          // Initialize counterUp after waypoints and counterup are loaded
          const initCounterUp = () => {
            if (window.jQuery && window.jQuery.fn && window.jQuery.fn.counterUp) {
              window.jQuery('[data-toggle="counter-up"]').counterUp({
                delay: 10,
                time: 2000
              })
            } else {
              // Retry after a short delay
              setTimeout(initCounterUp, 100)
            }
          }
          
          // Wait a bit for counterup to load
          setTimeout(initCounterUp, 500)
        }
      }

      // Wait for jQuery to load
      const checkJQuery = setInterval(() => {
        if (window.jQuery) {
          clearInterval(checkJQuery)
          initScripts()
        }
      }, 100)

      return () => clearInterval(checkJQuery)
    }
  }, [])

  return (
    <>
      <Script
        src="https://code.jquery.com/jquery-3.4.1.min.js"
        strategy="beforeInteractive"
        onLoad={() => {
          // Set jQuery to window after load
          if (typeof window !== 'undefined' && window.jQuery) {
            window.$ = window.jQuery
          }
        }}
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        strategy="beforeInteractive"
        onLoad={() => {
          // Ensure Bootstrap is properly initialized
          if (typeof window !== 'undefined' && (window as any).bootstrap) {
            // Bootstrap loaded successfully
          }
        }}
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
      />
      <Script
        src="/lib/tempusdominus/js/moment-timezone.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"
        strategy="lazyOnload"
      />
      <Script
        src="/js/main.js"
        strategy="lazyOnload"
      />
      <Component {...pageProps} />
    </>
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

