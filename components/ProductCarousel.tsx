import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

interface Product {
  id: number
  name: string
  description: string
  image: string
}

interface ProductCarouselProps {
  products: Product[]
  title?: string
}

export default function ProductCarousel({ products, title = "Sản Phẩm" }: ProductCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    // Check if desktop
    const checkDesktop = () => {
      const desktop = window.innerWidth >= 992
      setIsDesktop(desktop)
      
      // Handle carousel initialization/destruction based on screen size
      if (typeof window !== 'undefined' && carouselRef.current) {
        // Wait for jQuery to be available
        const checkAndInit = () => {
          if (window.jQuery && window.jQuery.fn) {
            const $ = window.jQuery
            
            if (desktop) {
              // Destroy carousel on desktop
              if ($(carouselRef.current!).data('owl.carousel')) {
                try {
                  $(carouselRef.current!).trigger('destroy.owl.carousel')
                } catch (e) {
                  // Ignore errors when destroying
                }
              }
            } else {
              // Initialize carousel on tablet/mobile
              if ($.fn && $.fn.owlCarousel) {
                // Destroy existing carousel if any
                if ($(carouselRef.current!).data('owl.carousel')) {
                  try {
                    $(carouselRef.current!).trigger('destroy.owl.carousel')
                  } catch (e) {
                    // Ignore errors when destroying
                  }
                }

                // Initialize Owl Carousel
                try {
                  $(carouselRef.current!).owlCarousel({
                    autoplay: true,
                    autoplayTimeout: 3000,
                    autoplayHoverPause: true,
                    smartSpeed: 1000,
                    margin: 16,
                    dots: true,
                    loop: true,
                    nav: false,
                    responsive: {
                      0: {
                        items: 1,
                        margin: 10
                      },
                      480: {
                        items: 2,
                        margin: 12
                      },
                      576: {
                        items: 3,
                        margin: 16
                      }
                    }
                  })
                } catch (e) {
                  console.error('Error initializing Owl Carousel:', e)
                }
              } else {
                // Retry if owlCarousel not available yet
                setTimeout(checkAndInit, 200)
              }
            }
          } else {
            // Retry if jQuery not available yet
            setTimeout(checkAndInit, 200)
          }
        }
        
        // Small delay to ensure scripts are loaded
        setTimeout(checkAndInit, 300)
      }
    }
    
    checkDesktop()
    window.addEventListener('resize', checkDesktop)

    return () => {
      window.removeEventListener('resize', checkDesktop)
      if (typeof window !== 'undefined' && window.jQuery && carouselRef.current) {
        const $ = window.jQuery
        if ($(carouselRef.current).data('owl.carousel')) {
          $(carouselRef.current).trigger('destroy.owl.carousel')
        }
      }
    }
  }, [products])

        return (
          <div className="container-xxl py-5 section-fade-in" style={{ position: 'relative', zIndex: 0 }}>
            <div className="container">
              {title && (
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                  <h5 className="section-title ff-secondary text-center text-primary fw-normal">{title}</h5>
                  <h1 className="mb-5">Sản Phẩm Nổi Bật</h1>
                </div>
              )}
              <div className="product-carousel-wrapper">
          {isDesktop ? (
            // Desktop: Grid layout 2 rows x 3 columns (hiển thị 6 items đầu tiên)
            <div className="product-grid-desktop">
              {products.slice(0, 6).map((product) => (
                <div key={product.id} className="product-item">
                  <Link href={`/product/${product.id}`} className="product-card-link">
                    <div className="product-card">
                      <div className="product-image-wrapper">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <div className="product-overlay">
                          <h5 className="product-name">{product.name}</h5>
                          <p className="product-description">{product.description}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            // Tablet/Mobile: Owl Carousel (hiển thị tất cả items)
            <div ref={carouselRef} className="owl-carousel product-carousel">
              {products.map((product) => (
                <div key={product.id} className="product-item">
                  <Link href={`/product/${product.id}`} className="product-card-link">
                    <div className="product-card">
                      <div className="product-image-wrapper">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <div className="product-overlay">
                          <h5 className="product-name">{product.name}</h5>
                          <p className="product-description">{product.description}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

