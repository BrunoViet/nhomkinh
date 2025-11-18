import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/Layout'
import ProductCarousel from '@/components/ProductCarousel'
import { useEffect, useState, useMemo } from 'react'
import { useRouter } from 'next/router'
import { featuredProject, sideProjects, gridProjects } from '@/constants/projects'
import { products as productSource, productCategories } from '@/constants/products'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Home() {
  const router = useRouter()
  const { dictionary, language } = useLanguage()
  const home = dictionary.home
  const {
    hero,
    productSearch,
    products: productContent,
    categoryProducts,
    news,
    services,
    about,
    projectsSection,
    reservation,
    meta
  } = home

  const [currentSlide, setCurrentSlide] = useState(0)
  const [productSearchQuery, setProductSearchQuery] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  
  const bannerImages = home.bannerImages
  const localizedProducts = useMemo(() => productSource.map(product => ({
    id: product.id,
    name: product.name[language],
    description: product.description[language],
    image: product.image,
    details: product.details[language],
    categoryId: product.categoryId
  })), [language])
  const localizedCategories = useMemo(() => productCategories.map(category => ({
    id: category.id,
    name: category.name[language],
    description: category.description[language]
  })), [language])

  // Danh sách danh mục
  // Tìm kiếm suggestions (sản phẩm và danh mục)
  const searchSuggestions = useMemo(() => {
    if (!productSearchQuery.trim()) return { products: [], categories: [] }
    
    const query = productSearchQuery.toLowerCase()
    const matchedProducts = localizedProducts.filter(product => 
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query)
    ).slice(0, 5)
    
    const matchedCategories = localizedCategories.filter(category => 
      category.name.toLowerCase().includes(query) ||
      category.description.toLowerCase().includes(query)
    )
    
    return { products: matchedProducts, categories: matchedCategories }
  }, [productSearchQuery, localizedProducts, localizedCategories])

  // Sản phẩm hiển thị trong carousel (luôn hiển thị 6 sản phẩm đầu tiên)
  const displayProducts = localizedProducts.slice(0, 6)
  const categoryShowcaseProducts = useMemo(() => {
    return productCategories.flatMap(category => 
      localizedProducts.filter(product => product.categoryId === category.id).slice(0, 2)
    )
  }, [localizedProducts])

  // Xử lý click vào suggestion
  const handleSuggestionClick = (type: 'product' | 'category', id: number) => {
    if (type === 'product') {
      router.push(`/product/${id}`)
    } else {
      router.push(`/category/${id}`)
    }
    setProductSearchQuery('')
    setShowSuggestions(false)
  }

  useEffect(() => {
    // Auto slide banner
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerImages.length)
    }, 5000) // Đổi ảnh mỗi 5 giây

    return () => clearInterval(slideInterval)
  }, [bannerImages.length])

  useEffect(() => {
    // Initialize counter-up after component mounts and scripts are loaded
    if (typeof window !== 'undefined' && window.jQuery) {
      const initCounter = () => {
        const $ = window.jQuery
        if ($.fn && $.fn.counterUp) {
          $('[data-toggle="counter-up"]').counterUp({
            delay: 10,
            time: 2000
          })
        } else {
          // Retry if counterUp is not loaded yet
          setTimeout(initCounter, 200)
        }
      }
      // Wait a bit for scripts to load
      setTimeout(initCounter, 1000)
    }
  }, [])

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Head>
            <Layout>
        <div className="container-xxl position-relative p-0">
                <div 
                  className="container-xxl py-5 bg-dark hero-header hero-slider"
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    zIndex: 1,
                    marginBottom: '3rem'
                  }}
                >
                  {/* Background Images Slider */}
                  <div className="hero-slider-background">
                    {bannerImages.map((image, index) => (
                      <div
                        key={index}
                        className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          backgroundImage: `linear-gradient(rgba(15, 23, 43, 0.7), rgba(15, 23, 43, 0.7)), url(${image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center center',
                          backgroundRepeat: 'no-repeat',
                          opacity: index === currentSlide ? 1 : 0,
                          transition: 'opacity 1s ease-in-out',
                          zIndex: 1
                        }}
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <div className="container my-5 py-5" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="row align-items-center g-5">
                      <div className="col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
                        <h1 className="display-3 text-white animated slideInLeft mb-3 mb-md-4">
                          {hero.titleLine1}
                          <br className="d-none d-md-block" />
                          {hero.titleLine2}
                        </h1>
                        <p className="text-white animated slideInLeft mb-3 mb-md-4 pb-2 px-3 px-md-0">
                          {hero.description}
                        </p>
                        <Link href="/contact" className="btn btn-primary py-2 py-sm-3 px-4 px-sm-5 me-2 me-md-3 animated slideInLeft">
                          {hero.cta}
                        </Link>
                      </div>
                      <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                        <div 
                          className="hero-image-container"
                          style={{ 
                            width: '100%', 
                            height: '400px', 
                            display: 'flex', 
                            alignItems: 'center', 
                            justifyContent: 'center',
                            position: 'relative',
                            minHeight: '400px'
                          }}
                        >
                          {bannerImages.map((image, index) => (
                            <Image
                              key={index}
                              className={`img-fluid hero-rotating-img ${index === currentSlide ? 'active' : ''}`}
                              src={image}
                              alt=""
                              width={600}
                              height={400}
                              priority={index === 0}
                              loading={index === 0 ? 'eager' : 'lazy'}
                              style={{
                                position: index === currentSlide ? 'relative' : 'absolute',
                                maxWidth: '100%',
                                maxHeight: '100%',
                                objectFit: 'contain',
                                width: 'auto',
                                height: 'auto',
                                opacity: index === currentSlide ? 1 : 0,
                                transition: 'opacity 0.5s ease-in-out',
                                zIndex: index === currentSlide ? 2 : 1
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Slide Indicators */}
                  <div 
                    className="hero-slider-indicators"
                    style={{
                      position: 'absolute',
                      bottom: '30px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      display: 'flex',
                      gap: '10px',
                      zIndex: 3
                    }}
                  >
                    {bannerImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`hero-slider-dot ${index === currentSlide ? 'active' : ''}`}
                        style={{
                          width: '12px',
                          height: '12px',
                          borderRadius: '50%',
                          border: '2px solid white',
                          background: index === currentSlide ? 'var(--primary)' : 'transparent',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          padding: 0
                        }}
                        aria-label={`Slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

        {/* Product Search Section Start */}
        <div className="container-xxl py-4" style={{ marginTop: '3rem' }}>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 col-xl-7">
                <div className="product-search-wrapper wow fadeInUp" data-wow-delay="0.1s" style={{ position: 'relative', zIndex: 1050 }}>
                  <div className="product-search-box position-relative">
                    <div className="input-group">
                      <span className="input-group-text bg-white border-end-0" style={{ 
                        borderTopLeftRadius: '50px', 
                        borderBottomLeftRadius: '50px',
                        border: '2px solid var(--primary)',
                        paddingLeft: '20px',
                        paddingRight: '15px'
                      }}>
                        <i className="fa fa-search text-primary" style={{ fontSize: '1.2rem' }}></i>
                      </span>
                      <input
                        type="text"
                        className="form-control border-start-0 border-end-0"
                        placeholder={productSearch.placeholder}
                        value={productSearchQuery}
                        onChange={(e) => {
                          setProductSearchQuery(e.target.value)
                          setShowSuggestions(true)
                        }}
                        onFocus={() => {
                          if (productSearchQuery.trim()) {
                            setShowSuggestions(true)
                          }
                        }}
                        onBlur={() => {
                          // Delay để cho phép click vào suggestion
                          setTimeout(() => setShowSuggestions(false), 200)
                        }}
                        style={{
                          border: '2px solid var(--primary)',
                          borderLeft: 'none',
                          borderRight: 'none',
                          padding: '15px 20px',
                          fontSize: '1rem',
                          height: 'auto'
                        }}
                      />
                      {productSearchQuery && (
                        <button
                          type="button"
                          className="btn btn-link text-muted border-start-0"
                          onClick={() => {
                            setProductSearchQuery('')
                            setShowSuggestions(false)
                          }}
                          style={{
                            border: '2px solid var(--primary)',
                            borderLeft: 'none',
                            padding: '0 15px',
                            textDecoration: 'none'
                          }}
                        >
                          <i className="fa fa-times"></i>
                        </button>
                      )}
                      <span className="input-group-text bg-primary text-white border-start-0" style={{ 
                        borderTopRightRadius: '50px', 
                        borderBottomRightRadius: '50px',
                        border: '2px solid var(--primary)',
                        paddingLeft: '20px',
                        paddingRight: '20px',
                        cursor: 'pointer'
                      }}>
                        <i className="fa fa-search"></i>
                      </span>
                    </div>
                    
                    {/* Dropdown Suggestions */}
                    {showSuggestions && productSearchQuery.trim() && 
                     (searchSuggestions.products.length > 0 || searchSuggestions.categories.length > 0) && (
                      <div 
                        className="product-search-suggestions"
                        style={{
                          position: 'absolute',
                          top: '100%',
                          left: 0,
                          right: 0,
                          marginTop: '10px',
                          background: 'white',
                          borderRadius: '15px',
                          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
                          zIndex: 1051,
                          maxHeight: '400px',
                          overflowY: 'auto',
                          animation: 'fadeInDown 0.3s ease-out'
                        }}
                        onMouseDown={(e) => e.preventDefault()} // Prevent blur khi click
                      >
                        {searchSuggestions.categories.length > 0 && (
                          <div className="suggestion-section">
                            <div className="px-4 py-2 fw-bold text-muted border-bottom" style={{ 
                              fontSize: '0.85rem', 
                              textTransform: 'uppercase',
                              background: '#f8f9fa'
                            }}>
                              <i className="fa fa-tags me-2"></i>{productSearch.categoriesTitle}
                            </div>
                            {searchSuggestions.categories.map((category) => (
                              <div
                                key={`category-${category.id}`}
                                className="suggestion-item px-4 py-3 d-flex align-items-center"
                                onClick={() => handleSuggestionClick('category', category.id)}
                                style={{
                                  cursor: 'pointer',
                                  transition: 'all 0.2s ease',
                                  borderBottom: '1px solid #f0f0f0'
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.background = '#f8f9fa'
                                  e.currentTarget.style.paddingLeft = '30px'
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.background = 'white'
                                  e.currentTarget.style.paddingLeft = '16px'
                                }}
                              >
                                <i className="fa fa-folder text-primary me-3" style={{ fontSize: '1.1rem' }}></i>
                                <div className="flex-grow-1">
                                  <div className="fw-semibold text-dark">{category.name}</div>
                                  <div className="text-muted small">{category.description}</div>
                                </div>
                                <i className="fa fa-chevron-right text-muted"></i>
                              </div>
                            ))}
                          </div>
                        )}
                        
                        {searchSuggestions.products.length > 0 && (
                          <div className="suggestion-section">
                            <div className="px-4 py-2 fw-bold text-muted border-bottom" style={{ 
                              fontSize: '0.85rem', 
                              textTransform: 'uppercase',
                              background: '#f8f9fa'
                            }}>
                              <i className="fa fa-box me-2"></i>{productSearch.productsTitle}
                            </div>
                            {searchSuggestions.products.map((product) => (
                              <div
                                key={`product-${product.id}`}
                                className="suggestion-item px-4 py-3 d-flex align-items-center"
                                onClick={() => handleSuggestionClick('product', product.id)}
                                style={{
                                  cursor: 'pointer',
                                  transition: 'all 0.2s ease',
                                  borderBottom: '1px solid #f0f0f0'
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.background = '#f8f9fa'
                                  e.currentTarget.style.paddingLeft = '30px'
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.background = 'white'
                                  e.currentTarget.style.paddingLeft = '16px'
                                }}
                              >
                                <div className="flex-shrink-0 me-3" style={{ width: '50px', height: '50px', position: 'relative' }}>
                                  <Image 
                                    src={product.image} 
                                    alt={product.name}
                                    fill
                                    className="rounded"
                                    style={{ objectFit: 'cover' }}
                                    sizes="50px"
                                  />
                                </div>
                                <div className="flex-grow-1">
                                  <div className="fw-semibold text-dark">{product.name}</div>
                                  <div className="text-muted small" style={{ 
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                    maxWidth: '300px'
                                  }}>
                                    {product.description}
                                  </div>
                                </div>
                                <i className="fa fa-chevron-right text-muted"></i>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Product Search Section End */}

        {/* Product Carousel Start */}
        <div style={{ marginTop: '2rem' }}>
        <ProductCarousel 
            title={productContent.sectionTitle}
            subtitle={productContent.heading}
            products={displayProducts}
        />
        </div>
        {/* Product Carousel End */}

        {/* Product by Category Carousel Start */}
        <div style={{ marginTop: '2rem' }}>
        <ProductCarousel 
            title={categoryProducts.sectionTitle}
            subtitle={categoryProducts.heading}
            products={categoryShowcaseProducts}
        />
        </div>
        {/* Product by Category Carousel End */}

        {/* News Section Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h5 className="section-title ff-secondary text-center text-primary fw-normal">{news.sectionTitle}</h5>
              <h1 className="mb-5">{news.heading}</h1>
            </div>
            <div className="row g-4">
              <div className="col-lg-8">
                <div className="news-main-item wow fadeInUp" data-wow-delay="0.1s">
                  <Link href={`/news/${news.main.id}`} className="text-decoration-none">
                    <div className="news-main-image-wrapper position-relative overflow-hidden rounded mb-3" style={{ height: '450px' }}>
                      <Image 
                        src={news.main.image} 
                        alt={news.main.title} 
                        fill
                        className="news-main-image"
                        style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                        sizes="(max-width: 768px) 100vw, 66vw"
                        priority
                      />
                      <div className="news-overlay position-absolute bottom-0 start-0 w-100 p-4" style={{
                        background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)'
                      }}>
                        <span className="text-white-50 small"><i className="fa fa-calendar me-2"></i>{news.main.date}</span>
                        <h3 className="text-white mt-2 mb-2" style={{ fontSize: '1.75rem', fontWeight: '600' }}>
                          {news.main.title}
                        </h3>
                        <p className="text-white mb-0" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                          {news.main.excerpt}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="news-sidebar">
                  {news.sidebar.map((item, index) => (
                    <div key={item.id} className={`news-side-item ${index < news.sidebar.length - 1 ? 'mb-4' : ''} wow fadeInUp`} data-wow-delay={`${0.2 + index * 0.1}s`}>
                      <Link href={`/news/${item.id}`} className="text-decoration-none d-flex">
                        <div className="news-side-image-wrapper flex-shrink-0 me-3" style={{ width: '120px', height: '100px', position: 'relative' }}>
                          <Image 
                            src={item.image} 
                            alt={item.title} 
                            fill
                            className="rounded"
                            style={{ objectFit: 'cover' }}
                            sizes="120px"
                          />
                        </div>
                        <div className="news-side-content flex-grow-1">
                          <span className="text-muted small d-block mb-1"><i className="fa fa-calendar me-1"></i>{item.date}</span>
                          <h6 className="text-dark mb-2" style={{ fontSize: '1rem', fontWeight: '600', lineHeight: '1.4' }}>
                            {item.title}
                          </h6>
                          <p className="text-muted small mb-0" style={{ fontSize: '0.875rem', lineHeight: '1.5' }}>
                            {item.excerpt}
                          </p>
                        </div>
                      </Link>
            </div>
                  ))}
                  </div>
                </div>
              </div>

            <div className="row g-4 mt-2">
              {news.grid.map((item, index) => (
                <div key={item.id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.6 + index * 0.1}s`}>
                  <Link href={`/news/${item.id}`} className="text-decoration-none">
                    <div className="news-card rounded overflow-hidden h-100" style={{ 
                      boxShadow: '0 0 45px rgba(0, 0, 0, .08)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                    }}>
                      <div className="news-card-image-wrapper position-relative overflow-hidden" style={{ height: '200px' }}>
                        <Image 
                          src={item.image} 
                          alt={item.title} 
                          fill
                          className="w-100 h-100"
                          style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <div className="news-card-content p-3">
                        <span className="text-muted small d-block mb-2"><i className="fa fa-calendar me-1"></i>{item.date}</span>
                        <h6 className="text-dark mb-2" style={{ fontSize: '1.1rem', fontWeight: '600', lineHeight: '1.4' }}>
                          {item.title}
                        </h6>
                        <p className="text-muted small mb-0" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                          {item.excerpt}
                        </p>
                  </div>
                </div>
                  </Link>
              </div>
              ))}
                  </div>
                </div>
              </div>
        {/* News Section End */}

        {/* Service Start */}
        <div className="container-xxl py-4 py-md-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h5 className="section-title ff-secondary text-center text-primary fw-normal">{services.sectionTitle}</h5>
              <h1 className="mb-5">{services.heading}</h1>
            </div>
            <div className="row g-3 g-md-4">
              {services.items.map((item, index) => (
                <div key={item.title} className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.2}s`}>
                <div className="service-item rounded pt-3">
                  <div className="p-4">
                      <i className={`fa fa-3x ${item.icon} text-primary mb-4`}></i>
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                  </div>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
        {/* Service End */}

        {/* About Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <div className="row g-3">
                  <div className="col-6 text-start" style={{ position: 'relative', minHeight: '200px' }}>
                    <Image className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80" alt="Cửa nhôm kính" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 50vw, 25vw" />
                  </div>
                  <div className="col-6 text-start" style={{ position: 'relative', minHeight: '200px' }}>
                    <Image className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s" src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80" alt="Vách kính" style={{ marginTop: '25%', objectFit: 'cover' }} fill sizes="(max-width: 768px) 50vw, 25vw" />
                  </div>
                  <div className="col-6 text-end" style={{ position: 'relative', minHeight: '200px' }}>
                    <Image className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s" src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80" alt="Cửa kính hiện đại" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 50vw, 25vw" />
                  </div>
                  <div className="col-6 text-end" style={{ position: 'relative', minHeight: '200px' }}>
                    <Image className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80" alt="Nhôm kính" fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 50vw, 25vw" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                  <h5 className="section-title ff-secondary text-start text-primary fw-normal">{about.sectionTitle}</h5>
                  <h1 className="mb-4">{about.heading}</h1>
                  <p className="mb-4">{about.description1}</p>
                  <p className="mb-4">{about.description2}</p>
                <div className="row g-4 mb-4">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                        <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">{about.counters.years.value}</h1>
                      <div className="ps-4">
                          <p className="mb-0">{about.counters.years.labelTop}</p>
                          <h6 className="text-uppercase mb-0">{about.counters.years.labelBottom}</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                        <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">{about.counters.projects.value}</h1>
                      <div className="ps-4">
                          <p className="mb-0">{about.counters.projects.labelTop}</p>
                          <h6 className="text-uppercase mb-0">{about.counters.projects.labelBottom}</h6>
                      </div>
                    </div>
                  </div>
                </div>
                  <Link href="/about" className="btn btn-primary py-3 px-5 mt-2">{about.button}</Link>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}

        {/* Projects Section Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h5 className="section-title ff-secondary text-center text-primary fw-normal">{projectsSection.sectionTitle}</h5>
              <h1 className="mb-5">{projectsSection.heading}</h1>
                    </div>
                  <div className="row g-4">
              {/* Dự án chính - bên trái */}
              <div className="col-lg-8">
                <div className="news-main-item wow fadeInUp" data-wow-delay="0.1s">
                  <Link href={`/project/${featuredProject.id}`} className="text-decoration-none">
                    <div className="news-main-image-wrapper position-relative overflow-hidden rounded mb-3" style={{ height: '450px' }}>
                      <Image 
                        src={featuredProject.image} 
                        alt={featuredProject.title} 
                        fill
                        className="news-main-image"
                        style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                        sizes="(max-width: 768px) 100vw, 66vw"
                      />
                      <div className="news-overlay position-absolute bottom-0 start-0 w-100 p-4" style={{
                        background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)'
                      }}>
                        <span className="text-white-50 small">
                          <i className="fa fa-map-marker-alt me-2"></i>{featuredProject.location}
                          {featuredProject.area && (
                            <>
                              <span className="mx-2">•</span>
                              <i className="fa fa-ruler-combined me-1"></i>
                              {featuredProject.area}
                            </>
                          )}
                          {featuredProject.year && (
                            <>
                              <span className="mx-2">•</span>
                              <i className="fa fa-calendar me-1"></i>
                              {featuredProject.year}
                            </>
                          )}
                        </span>
                        <h3 className="text-white mt-2 mb-2" style={{ fontSize: '1.75rem', fontWeight: '600' }}>
                          {featuredProject.title}
                        </h3>
                        <p className="text-white mb-0" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                          {featuredProject.description}
                        </p>
                          </div>
                        </div>
                  </Link>
                  </div>
                </div>

              {/* Các dự án nhỏ - bên phải */}
              <div className="col-lg-4">
                <div className="news-sidebar">
                  {sideProjects.map((project, index) => (
                    <div key={project.id} className={`news-side-item ${index < sideProjects.length - 1 ? 'mb-4' : ''} wow fadeInUp`} data-wow-delay={`${0.2 + index * 0.1}s`}>
                      <Link href={`/project/${project.id}`} className="text-decoration-none d-flex">
                        <div className="news-side-image-wrapper flex-shrink-0 me-3" style={{ width: '120px', height: '100px', position: 'relative' }}>
                          <Image 
                            src={project.image} 
                            alt={project.title} 
                            fill
                            className="rounded"
                            style={{ objectFit: 'cover' }}
                            sizes="120px"
                          />
                          </div>
                        <div className="news-side-content flex-grow-1">
                          <span className="text-muted small d-block mb-1">
                            <i className="fa fa-map-marker-alt me-1"></i>{project.location}
                          </span>
                          <h6 className="text-dark mb-2" style={{ fontSize: '1rem', fontWeight: '600', lineHeight: '1.4' }}>
                            {project.title}
                          </h6>
                          <p className="text-muted small mb-0" style={{ fontSize: '0.875rem', lineHeight: '1.5' }}>
                            {project.description.substring(0, 60)}...
                          </p>
                        </div>
                      </Link>
                      </div>
                    ))}
                  </div>
                </div>
            </div>

            {/* Thêm các dự án khác dạng grid */}
            <div className="row g-4 mt-2">
              {gridProjects.map((project, index) => (
                <div key={project.id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.6 + index * 0.1}s`}>
                  <Link href={`/project/${project.id}`} className="text-decoration-none">
                    <div className="news-card rounded overflow-hidden h-100" style={{ 
                      boxShadow: '0 0 45px rgba(0, 0, 0, .08)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                    }}>
                      <div className="news-card-image-wrapper position-relative overflow-hidden" style={{ height: '200px' }}>
                        <Image 
                          src={project.image} 
                          alt={project.title} 
                          fill
                          className="w-100 h-100"
                          style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <div className="news-card-content p-3">
                        <span className="text-muted small d-block mb-2">
                          <i className="fa fa-map-marker-alt me-1"></i>{project.location}
                          {project.area && (
                            <>
                              <span className="mx-2">•</span>
                              {project.area}
                            </>
                          )}
                        </span>
                        <h6 className="text-dark mb-2" style={{ fontSize: '1.1rem', fontWeight: '600', lineHeight: '1.4' }}>
                          {project.title}
                        </h6>
                        <p className="text-muted small mb-0" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                          {project.description.substring(0, 80)}...
                        </p>
                          </div>
                        </div>
                  </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
        {/* Projects Section End */}

        {/* Reservation Start */}
        <div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
          <div className="row g-0">
            <div className="col-md-6">
              <div className="video">
                <button type="button" className="btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                  <span></span>
                </button>
              </div>
            </div>
            <div className="col-md-6 bg-dark d-flex align-items-center">
              <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
                <h5 className="section-title ff-secondary text-start text-primary fw-normal">{reservation.sectionTitle}</h5>
                <h1 className="text-white mb-4">{reservation.heading}</h1>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="name" placeholder={reservation.form.name} />
                        <label htmlFor="name">{reservation.form.name}</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="email" className="form-control" id="email" placeholder={reservation.form.email} />
                        <label htmlFor="email">{reservation.form.email}</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="tel" className="form-control" id="phone" placeholder={reservation.form.phone} />
                        <label htmlFor="phone">{reservation.form.phone}</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <select className="form-select" id="select1" defaultValue={reservation.form.productOptions[0]?.value ?? ''}>
                          {reservation.form.productOptions.map(option => (
                            <option key={option.value} value={option.value}>{option.label}</option>
                          ))}
                        </select>
                        <label htmlFor="select1">{reservation.form.productType}</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea className="form-control" placeholder={reservation.form.message} id="message" style={{ height: '100px' }}></textarea>
                        <label htmlFor="message">{reservation.form.message}</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3" type="submit">{reservation.form.submit}</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="videoModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content rounded-0">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Video Giới Thiệu</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="ratio ratio-16x9">
                  <iframe className="embed-responsive-item" src="" id="video" allowFullScreen allow="autoplay"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Reservation End */}

      </Layout>
    </>
  )
}

