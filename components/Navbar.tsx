import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState, useMemo } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { products as productSource, productCategories } from '@/constants/products'

export default function Navbar() {
  const router = useRouter()
  const { language, setLanguage, dictionary } = useLanguage()
  const navContent = dictionary.navbar
  const [searchQuery, setSearchQuery] = useState('')
  const [showSearchResults, setShowSearchResults] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const localizedProducts = useMemo(() => productSource.map(product => ({
    id: product.id,
    name: product.name[language],
    description: product.description[language],
    image: product.image,
    categoryId: product.categoryId
  })), [language])

  const localizedCategories = useMemo(() => productCategories.map(category => ({
    id: category.id,
    name: category.name[language],
    description: category.description[language]
  })), [language])

  const isActive = (path: string) => {
    return router.pathname === path ? 'active' : ''
  }

  // Search functionality
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return { products: [], categories: [] }

    const query = searchQuery.toLowerCase()
    const matchedProducts = localizedProducts.filter(p =>
      p.name.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query)
    )
    const matchedCategories = localizedCategories.filter(c =>
      c.name.toLowerCase().includes(query) ||
      c.description.toLowerCase().includes(query)
    )

    return { products: matchedProducts.slice(0, 6), categories: matchedCategories.slice(0, 6) }
  }, [searchQuery, localizedProducts, localizedCategories])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Navigate to search results page or show results
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`)
      setShowSearchResults(false)
    }
  }

  const handleProductClick = (productId: number) => {
    router.push(`/product/${productId}`)
    setSearchQuery('')
    setShowSearchResults(false)
    handleNavItemClick()
  }

  const handleCategoryClick = (categoryId: number) => {
    router.push(`/category/${categoryId}`)
    setSearchQuery('')
    setShowSearchResults(false)
    handleNavItemClick()
  }

  useEffect(() => {
    // Đóng menu khi click vào overlay hoặc bên ngoài
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      
      // Đóng search results khi click bên ngoài
      const searchDropdown = target.closest('.search-results-dropdown')
      const searchInput = target.closest('.search-input')
      if (!searchDropdown && !searchInput && showSearchResults) {
        setShowSearchResults(false)
      }
      
      if (typeof window !== 'undefined' && window.innerWidth < 992 && isMobileMenuOpen) {
        const isClickInsideMenu = target.closest('.navbar-collapse')
        const isClickOnToggler = target.closest('.navbar-toggler')
        const isClickOnCloseBtn = target.closest('.menu-close-btn')
        
        if (!isClickInsideMenu && !isClickOnToggler && !isClickOnCloseBtn) {
          closeMenu()
        }
      }
    }

    // Đóng menu khi click vào nút close
    const handleCloseClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('.menu-close-btn') || target.closest('.fa-times')) {
        e.preventDefault()
        e.stopPropagation()
        closeMenu()
      }
    }

    document.addEventListener('click', handleClickOutside)
    document.addEventListener('click', handleCloseClick)

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('click', handleCloseClick)
    }
  }, [showSearchResults, isMobileMenuOpen])

  useEffect(() => {
    if (typeof document === 'undefined') return
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const closeMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  const handleLanguageSelect = (lang: 'vi' | 'en') => {
    setLanguage(lang)
    if (typeof window !== 'undefined' && window.innerWidth < 992) {
      closeMenu()
    }
  }

  const handleNavItemClick = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 992) {
      closeMenu()
    }
  }

  return (
    <>
      {/* Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="menu-overlay d-lg-none" 
          onClick={closeMenu}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1999,
            transition: 'opacity 0.3s ease-in-out'
          }}
        />
      )}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 px-md-4 px-lg-5 py-3 py-lg-0">
        <Link href="/" className="navbar-brand p-0">
          <h1 className="text-primary m-0" style={{ fontSize: 'clamp(1.25rem, 4vw, 1.75rem)' }}>
            <i className="fa fa-building me-2 me-md-3"></i>{navContent.brand}
          </h1>
        </Link>
        <button 
          className="navbar-toggler" 
          type="button" 
          aria-label="Toggle navigation"
          aria-expanded={isMobileMenuOpen}
          onClick={toggleMenu}
          style={{ zIndex: 2100, position: 'relative' }}
        >
          <span className="fa fa-bars"></span>
        </button>
        <div className={`navbar-collapse ${isMobileMenuOpen ? 'show-mobile' : ''}`}>
          <button className="menu-close-btn d-lg-none" type="button" onClick={closeMenu} style={{ 
            position: 'absolute', 
            top: '20px', 
            right: '20px', 
            background: 'transparent', 
            border: 'none', 
            color: 'var(--light)', 
            fontSize: '24px', 
            cursor: 'pointer',
            zIndex: 10000 
          }}>
            <i className="fa fa-times"></i>
          </button>
        <div className="navbar-nav ms-auto py-0 pe-2 pe-md-4">
          <Link href="/" className={`nav-item nav-link ${isActive('/')}`} onClick={handleNavItemClick}>{navContent.links.home}</Link>
          <Link href="/about" className={`nav-item nav-link ${isActive('/about')}`} onClick={handleNavItemClick}>{navContent.links.about}</Link>
          <Link href="/news" className={`nav-item nav-link ${isActive('/news')}`} onClick={handleNavItemClick}>{navContent.links.news}</Link>
          <div className="nav-item dropdown d-none d-lg-block">
            <Link href="/products" className={`nav-link ${isActive('/products')}`} onClick={handleNavItemClick}>
              {navContent.links.products}
            </Link>
            <div className="dropdown-menu nav-mega-menu">
              {localizedProducts.slice(0, 6).map(product => (
                <Link 
                  key={product.id}
                  href={`/product/${product.id}`}
                  className="dropdown-item"
                  onClick={handleNavItemClick}
                >
                  {product.name}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/products" className={`nav-item nav-link d-lg-none ${isActive('/products')}`} onClick={handleNavItemClick}>
            {navContent.links.products}
          </Link>

          <div className="nav-item dropdown d-none d-lg-block">
            <Link href="/categories" className={`nav-link ${isActive('/categories')}`} onClick={handleNavItemClick}>
              {navContent.links.categories}
            </Link>
            <div className="dropdown-menu nav-mega-menu">
              {localizedCategories.map(category => (
                <Link 
                  key={category.id}
                  href={`/category/${category.id}`}
                  className="dropdown-item"
                  onClick={handleNavItemClick}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/categories" className={`nav-item nav-link d-lg-none ${isActive('/categories')}`} onClick={handleNavItemClick}>
            {navContent.links.categories}
          </Link>

          <Link href="/recruitment" className={`nav-item nav-link ${isActive('/recruitment')}`} onClick={handleNavItemClick}>
            {navContent.links.recruitment}
          </Link>
          <Link href="/contact" className={`nav-item nav-link ${isActive('/contact')}`} onClick={handleNavItemClick}>{navContent.links.contact}</Link>
        </div>

        {/* Search Bar */}
        <div
          className="navbar-search position-relative ms-lg-3 mt-3 mt-lg-0"
          style={{ width: 'min(380px, 100%)' }}
        >
          <form onSubmit={handleSearch} className="d-flex align-items-center">
            <div className="position-relative w-100">
              <input
                type="text"
                className="form-control search-input"
                placeholder={navContent.search.placeholder}
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setShowSearchResults(e.target.value.trim().length > 0)
                }}
                onFocus={() => {
                  if (searchQuery.trim().length > 0) {
                    setShowSearchResults(true)
                  }
                }}
                style={{
                  width: '100%',
                  paddingRight: '48px',
                  borderRadius: '28px',
                  border: '1px solid rgba(255, 255, 255, 0.35)',
                  background: 'rgba(255, 255, 255, 0.12)',
                  color: 'white',
                  paddingLeft: '18px',
                  transition: 'width 0.3s ease'
                }}
              />
              <button
                type="submit"
                className="btn btn-link search-btn"
                style={{
                  position: 'absolute',
                  right: '5px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'white',
                  padding: '5px 10px',
                  textDecoration: 'none'
                }}
              >
                <i className="fa fa-search"></i>
              </button>
            </div>

            {/* Search Results Dropdown */}
            {showSearchResults && (searchResults.products.length > 0 || searchResults.categories.length > 0) && (
              <div 
                className="search-results-dropdown"
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '0',
                  marginTop: '10px',
                  background: 'white',
                  borderRadius: '8px',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
                  minWidth: '300px',
                  maxHeight: '400px',
                  overflowY: 'auto',
                  zIndex: 1000,
                  padding: '10px 0'
                }}
                onMouseLeave={() => setShowSearchResults(false)}
              >
                {searchResults.products.length > 0 && (
                  <div className="search-section">
                    <div className="px-3 py-2 fw-bold text-muted" style={{ fontSize: '0.85rem', textTransform: 'uppercase' }}>
                      {navContent.search.productsTitle}
                    </div>
                    {searchResults.products.map((product) => (
                      <div
                        key={product.id}
                        className="search-result-item px-3 py-2"
                        onClick={() => handleProductClick(product.id)}
                        style={{
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'var(--primary)'
                          e.currentTarget.style.color = 'white'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent'
                          e.currentTarget.style.color = 'inherit'
                        }}
                      >
                        {product.name}
                      </div>
                    ))}
                  </div>
                )}
                {searchResults.categories.length > 0 && (
                  <div className="search-section">
                    <div className="px-3 py-2 fw-bold text-muted" style={{ fontSize: '0.85rem', textTransform: 'uppercase' }}>
                      {navContent.search.categoriesTitle}
                    </div>
                    {searchResults.categories.map((category) => (
                      <div
                        key={category.id}
                        className="search-result-item px-3 py-2"
                        onClick={() => handleCategoryClick(category.id)}
                        style={{
                          cursor: 'pointer',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'var(--primary)'
                          e.currentTarget.style.color = 'white'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = 'transparent'
                          e.currentTarget.style.color = 'inherit'
                        }}
                      >
                        {category.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </form>
        </div>

        {/* Language Switcher - Two Flag Buttons */}
        <div className="language-switcher d-flex align-items-center ms-lg-3 mt-3 mt-lg-0 gap-2">
          <button
            type="button"
            className={`flag-button ${language === 'vi' ? 'active' : ''}`}
            onClick={() => handleLanguageSelect('vi')}
            aria-label="Tiếng Việt"
            title="Tiếng Việt"
          >
            <img
              src="https://flagcdn.com/w40/vn.png"
              alt="Vietnam Flag"
              width={32}
              height={24}
            />
          </button>
          <button
            type="button"
            className={`flag-button ${language === 'en' ? 'active' : ''}`}
            onClick={() => handleLanguageSelect('en')}
            aria-label="English"
            title="English"
          >
            <img
              src="https://flagcdn.com/w40/gb.png"
              alt="United Kingdom Flag"
              width={32}
              height={24}
            />
          </button>
        </div>
      </div>
    </nav>
    </>
  )
}

