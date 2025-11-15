import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useMemo } from 'react'

// Mock data - trong thực tế sẽ lấy từ API hoặc database
// Sản phẩm nhôm kính chính
const products = [
  { id: 1, name: "Cửa Nhôm Xingfa" },
  { id: 2, name: "Cửa Nhôm Việt Pháp" },
  { id: 3, name: "Cửa Nhôm Kính Cường Lực" },
  { id: 4, name: "Vách Kính Cường Lực" },
  { id: 5, name: "Cửa Lùa Nhôm Kính" },
  { id: 6, name: "Cửa Mở Quay Nhôm Kính" }
]

// Danh mục sản phẩm nhôm kính
const categories = [
  { id: 1, name: "Cửa Nhôm Kính" },
  { id: 2, name: "Vách Kính" },
  { id: 3, name: "Mái Kính" }
]

export default function Navbar() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [showSearchResults, setShowSearchResults] = useState(false)
  const [currentLang, setCurrentLang] = useState('vi')

  const isActive = (path: string) => {
    return router.pathname === path ? 'active' : ''
  }

  // Search functionality
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return { products: [], categories: [] }
    
    const query = searchQuery.toLowerCase()
    const matchedProducts = products.filter(p => 
      p.name.toLowerCase().includes(query)
    )
    const matchedCategories = categories.filter(c => 
      c.name.toLowerCase().includes(query)
    )
    
    return { products: matchedProducts, categories: matchedCategories }
  }, [searchQuery])

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
  }

  const handleCategoryClick = (categoryId: number) => {
    router.push(`/category/${categoryId}`)
    setSearchQuery('')
    setShowSearchResults(false)
  }

  const changeLanguage = (lang: string) => {
    setCurrentLang(lang)
    // TODO: Implement language change logic
    // This could involve updating i18n context or router locale
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
      
      if (window.innerWidth < 992) {
        const navbarCollapse = document.getElementById('navbarCollapse')
        
        // Kiểm tra nếu click vào overlay (::before pseudo-element không thể detect trực tiếp)
        // Nên kiểm tra nếu click bên ngoài menu và không phải là toggler
        if (navbarCollapse?.classList.contains('show')) {
          const isClickInsideMenu = target.closest('.navbar-collapse')
          const isClickOnToggler = target.closest('.navbar-toggler')
          const isClickOnCloseBtn = target.closest('.menu-close-btn')
          
          if (!isClickInsideMenu && !isClickOnToggler && !isClickOnCloseBtn) {
            // Click vào overlay hoặc bên ngoài
            const bsCollapse = new (window as any).bootstrap.Collapse(navbarCollapse, { toggle: true })
          }
        }
      }
    }

    // Đóng menu khi click vào nút close
    const handleCloseClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('.menu-close-btn') || target.closest('.fa-times')) {
        e.preventDefault()
        e.stopPropagation()
        const navbarCollapse = document.getElementById('navbarCollapse')
        if (navbarCollapse?.classList.contains('show')) {
          const bsCollapse = new (window as any).bootstrap.Collapse(navbarCollapse, { toggle: true })
        }
      }
    }

    document.addEventListener('click', handleClickOutside)
    document.addEventListener('click', handleCloseClick)

    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('click', handleCloseClick)
    }
  }, [showSearchResults])

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const navbarCollapse = document.getElementById('navbarCollapse')
    if (navbarCollapse) {
      const handleShow = () => setIsMenuOpen(true)
      const handleHide = () => setIsMenuOpen(false)
      
      navbarCollapse.addEventListener('show.bs.collapse', handleShow)
      navbarCollapse.addEventListener('hide.bs.collapse', handleHide)
      
      return () => {
        navbarCollapse.removeEventListener('show.bs.collapse', handleShow)
        navbarCollapse.removeEventListener('hide.bs.collapse', handleHide)
      }
    }
  }, [])

  const closeMenu = () => {
    const navbarCollapse = document.getElementById('navbarCollapse')
    if (navbarCollapse?.classList.contains('show')) {
      const bsCollapse = new (window as any).bootstrap.Collapse(navbarCollapse, { toggle: true })
    }
  }

  return (
    <>
      {/* Overlay */}
      {isMenuOpen && (
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
            zIndex: 9997,
            transition: 'opacity 0.3s ease-in-out'
          }}
        />
      )}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 px-md-4 px-lg-5 py-3 py-lg-0">
        <Link href="/" className="navbar-brand p-0">
          <h1 className="text-primary m-0" style={{ fontSize: 'clamp(1.25rem, 4vw, 1.75rem)' }}>
            <i className="fa fa-building me-2 me-md-3"></i>Nhôm Kính
          </h1>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" style={{ zIndex: 9999, position: 'relative' }}>
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
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
          <Link href="/" className={`nav-item nav-link ${isActive('/')}`}>Trang Chủ</Link>
          <Link href="/about" className={`nav-item nav-link ${isActive('/about')}`}>Giới Thiệu</Link>
          <Link href="/service" className={`nav-item nav-link ${isActive('/service')}`}>Dịch Vụ</Link>
          
          {/* Products Dropdown */}
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Sản Phẩm</a>
            <div className="dropdown-menu m-0" style={{ maxHeight: '400px', overflowY: 'auto', minWidth: '220px' }}>
              {products.map((product) => (
                <Link key={product.id} href={`/product/${product.id}`} className="dropdown-item">
                  {product.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Categories Dropdown */}
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Danh Mục</a>
            <div className="dropdown-menu m-0" style={{ minWidth: '220px' }}>
              {categories.map((category) => (
                <Link key={category.id} href={`/category/${category.id}`} className="dropdown-item">
                  {category.name}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/contact" className={`nav-item nav-link ${isActive('/contact')}`}>Liên Hệ</Link>
        </div>

        {/* Search Bar */}
        <div className="navbar-search position-relative ms-lg-3 mt-3 mt-lg-0">
          <form onSubmit={handleSearch} className="d-flex align-items-center">
            <div className="position-relative">
              <input
                type="text"
                className="form-control search-input"
                placeholder="Tìm kiếm sản phẩm nhôm kính..."
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
                  width: '250px',
                  paddingRight: '40px',
                  borderRadius: '25px',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  paddingLeft: '15px'
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
                      Sản Phẩm
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
                      Danh Mục
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

        {/* Language Switcher */}
        <div className="nav-item dropdown ms-lg-3 mt-3 mt-lg-0">
          <a href="#" className="nav-link dropdown-toggle d-flex align-items-center" data-bs-toggle="dropdown" style={{ padding: '0.5rem 1rem' }}>
            {currentLang === 'vi' ? (
              <span className="flag-icon" style={{ fontSize: '1.2rem' }}>🇻🇳</span>
            ) : (
              <span className="flag-icon" style={{ fontSize: '1.2rem' }}>🇬🇧</span>
            )}
          </a>
          <div className="dropdown-menu dropdown-menu-end m-0" style={{ minWidth: '120px' }}>
            <button
              className={`dropdown-item d-flex align-items-center ${currentLang === 'vi' ? 'active' : ''}`}
              onClick={() => changeLanguage('vi')}
            >
              <span style={{ fontSize: '1.2rem', marginRight: '8px' }}>🇻🇳</span>
              <span>Tiếng Việt</span>
            </button>
            <button
              className={`dropdown-item d-flex align-items-center ${currentLang === 'en' ? 'active' : ''}`}
              onClick={() => changeLanguage('en')}
            >
              <span style={{ fontSize: '1.2rem', marginRight: '8px' }}>🇬🇧</span>
              <span>English</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
    </>
  )
}

