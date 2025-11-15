import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'
import ProductCarousel from '@/components/ProductCarousel'
import { useEffect, useState } from 'react'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Danh sách ảnh banner - ảnh nhôm kính
  const bannerImages = [
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80', // Cửa nhôm kính
    'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1920&q=80', // Vách kính
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1920&q=80', // Cửa kính hiện đại
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80'  // Nhôm kính
  ]

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
        <title>Nhôm Kính - Chuyên Thiết Kế & Thi Công Nhôm Kính</title>
        <meta name="description" content="Chuyên thiết kế, sản xuất và thi công nhôm kính chất lượng cao. Cửa nhôm kính, vách kính, mái kính và các sản phẩm nhôm kính khác." />
      </Head>
            <Layout>
              <div className="container-xxl position-relative p-0" style={{ paddingTop: '80px' }}>
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
                        <h1 className="display-3 text-white animated slideInLeft mb-3 mb-md-4">Nhôm Kính<br className="d-none d-md-block" />Chất Lượng Cao</h1>
                        <p className="text-white animated slideInLeft mb-3 mb-md-4 pb-2 px-3 px-md-0">Chuyên thiết kế, sản xuất và thi công các sản phẩm nhôm kính cao cấp. Với nhiều năm kinh nghiệm, chúng tôi cam kết mang đến những sản phẩm chất lượng, đẹp mắt và bền bỉ theo thời gian.</p>
                        <Link href="/contact" className="btn btn-primary py-2 py-sm-3 px-4 px-sm-5 me-2 me-md-3 animated slideInLeft">Liên Hệ Ngay</Link>
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
                            <img 
                              key={index}
                              className={`img-fluid hero-rotating-img ${index === currentSlide ? 'active' : ''}`}
                              src={image} 
                              alt="" 
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

        {/* Product Carousel Start */}
        <div style={{ marginTop: '3rem', position: 'relative', zIndex: 0 }}>
        <ProductCarousel 
          title="Sản Phẩm"
          products={[
            {
              id: 1,
              name: "Sản Phẩm 1",
              description: "Mô tả ngắn về sản phẩm 1. Đây là một sản phẩm chất lượng cao với nhiều tính năng nổi bật.",
              image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
            },
            {
              id: 2,
              name: "Sản Phẩm 2",
              description: "Mô tả ngắn về sản phẩm 2. Sản phẩm được thiết kế hiện đại và tiện lợi cho người sử dụng.",
              image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80"
            },
            {
              id: 3,
              name: "Sản Phẩm 3",
              description: "Mô tả ngắn về sản phẩm 3. Chất lượng đảm bảo và giá cả hợp lý cho mọi khách hàng.",
              image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
            },
            {
              id: 4,
              name: "Sản Phẩm 4",
              description: "Mô tả ngắn về sản phẩm 4. Được nhiều khách hàng tin tưởng và đánh giá cao.",
              image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80"
            },
            {
              id: 5,
              name: "Sản Phẩm 5",
              description: "Mô tả ngắn về sản phẩm 5. Thiết kế độc đáo và phù hợp với xu hướng hiện đại.",
              image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
            },
            {
              id: 6,
              name: "Sản Phẩm 6",
              description: "Mô tả ngắn về sản phẩm 6. Sản phẩm bán chạy nhất với nhiều ưu đãi hấp dẫn.",
              image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80"
            }
          ]}
        />
        </div>
        {/* Product Carousel End */}

        {/* Product by Category Carousel Start */}
        <div style={{ marginTop: '2rem', position: 'relative', zIndex: 0 }}>
        <ProductCarousel 
          title="Sản Phẩm Theo Danh Mục"
          products={[
            {
              id: 7,
              name: "Danh Mục 1 - Sản Phẩm A",
              description: "Mô tả về sản phẩm thuộc danh mục 1. Chất lượng cao và đáng tin cậy.",
              image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
            },
            {
              id: 8,
              name: "Danh Mục 1 - Sản Phẩm B",
              description: "Mô tả về sản phẩm thuộc danh mục 1. Thiết kế hiện đại và tiện lợi.",
              image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80"
            },
            {
              id: 9,
              name: "Danh Mục 2 - Sản Phẩm C",
              description: "Mô tả về sản phẩm thuộc danh mục 2. Được nhiều khách hàng yêu thích.",
              image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
            },
            {
              id: 10,
              name: "Danh Mục 2 - Sản Phẩm D",
              description: "Mô tả về sản phẩm thuộc danh mục 2. Giá cả hợp lý và chất lượng tốt.",
              image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80"
            },
            {
              id: 11,
              name: "Danh Mục 3 - Sản Phẩm E",
              description: "Mô tả về sản phẩm thuộc danh mục 3. Phù hợp với mọi nhu cầu sử dụng.",
              image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
            },
            {
              id: 12,
              name: "Danh Mục 3 - Sản Phẩm F",
              description: "Mô tả về sản phẩm thuộc danh mục 3. Sản phẩm bán chạy nhất tuần này.",
              image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80"
            }
          ]}
        />
        </div>
        {/* Product by Category Carousel End */}

        {/* Service Start */}
        <div className="container-xxl py-4 py-md-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h5 className="section-title ff-secondary text-center text-primary fw-normal">Dịch Vụ</h5>
              <h1 className="mb-5">Dịch Vụ Của Chúng Tôi</h1>
            </div>
            <div className="row g-3 g-md-4">
              <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="service-item rounded pt-3">
                  <div className="p-4">
                    <i className="fa fa-3x fa-tools text-primary mb-4"></i>
                    <h5>Thiết Kế Chuyên Nghiệp</h5>
                    <p>Đội ngũ thiết kế giàu kinh nghiệm, tư vấn giải pháp phù hợp với từng công trình</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="service-item rounded pt-3">
                  <div className="p-4">
                    <i className="fa fa-3x fa-industry text-primary mb-4"></i>
                    <h5>Sản Xuất Chất Lượng</h5>
                    <p>Xưởng sản xuất hiện đại, đảm bảo chất lượng sản phẩm đạt tiêu chuẩn cao nhất</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="service-item rounded pt-3">
                  <div className="p-4">
                    <i className="fa fa-3x fa-hammer text-primary mb-4"></i>
                    <h5>Thi Công Tận Nơi</h5>
                    <p>Đội ngũ thợ lành nghề, thi công nhanh chóng, đúng tiến độ, đảm bảo chất lượng</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                <div className="service-item rounded pt-3">
                  <div className="p-4">
                    <i className="fa fa-3x fa-headset text-primary mb-4"></i>
                    <h5>Bảo Hành Dài Hạn</h5>
                    <p>Chế độ bảo hành uy tín, hỗ trợ bảo trì, sửa chữa nhanh chóng khi cần thiết</p>
                  </div>
                </div>
              </div>
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
                  <div className="col-6 text-start">
                    <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80" alt="Cửa nhôm kính" />
                  </div>
                  <div className="col-6 text-start">
                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s" src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80" alt="Vách kính" style={{ marginTop: '25%' }} />
                  </div>
                  <div className="col-6 text-end">
                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s" src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80" alt="Cửa kính hiện đại" />
                  </div>
                  <div className="col-6 text-end">
                    <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80" alt="Nhôm kính" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <h5 className="section-title ff-secondary text-start text-primary fw-normal">Về Chúng Tôi</h5>
                <h1 className="mb-4">Chào Mừng Đến Với <i className="fa fa-building text-primary me-2"></i>Nhôm Kính</h1>
                <p className="mb-4">Chúng tôi là đơn vị chuyên thiết kế, sản xuất và thi công các sản phẩm nhôm kính chất lượng cao. Với nhiều năm kinh nghiệm trong ngành, chúng tôi tự hào mang đến những giải pháp nhôm kính hoàn hảo cho mọi công trình.</p>
                <p className="mb-4">Đội ngũ kỹ thuật viên giàu kinh nghiệm, xưởng sản xuất hiện đại cùng quy trình làm việc chuyên nghiệp, chúng tôi cam kết mang đến những sản phẩm chất lượng, đẹp mắt và bền bỉ theo thời gian.</p>
                <div className="row g-4 mb-4">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                      <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">10</h1>
                      <div className="ps-4">
                        <p className="mb-0">Năm</p>
                        <h6 className="text-uppercase mb-0">Kinh Nghiệm</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                      <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">500</h1>
                      <div className="ps-4">
                        <p className="mb-0">Dự Án</p>
                        <h6 className="text-uppercase mb-0">Đã Hoàn Thành</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <Link href="/about" className="btn btn-primary py-3 px-5 mt-2">Xem Thêm</Link>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}

        {/* Menu Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h5 className="section-title ff-secondary text-center text-primary fw-normal">Dự Án</h5>
              <h1 className="mb-5">Dự Án Tiêu Biểu</h1>
            </div>
            <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
              <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                <li className="nav-item">
                  <a className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" href="#tab-1">
                    <i className="fa fa-building fa-2x text-primary"></i>
                    <div className="ps-3">
                      <small className="text-body">Nhà Ở</small>
                      <h6 className="mt-n1 mb-0">Biệt Thự & Nhà Phố</h6>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" href="#tab-2">
                    <i className="fa fa-briefcase fa-2x text-primary"></i>
                    <div className="ps-3">
                      <small className="text-body">Văn Phòng</small>
                      <h6 className="mt-n1 mb-0">Công Ty & Showroom</h6>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" href="#tab-3">
                    <i className="fa fa-store fa-2x text-primary"></i>
                    <div className="ps-3">
                      <small className="text-body">Thương Mại</small>
                      <h6 className="mt-n1 mb-0">Cửa Hàng & Trung Tâm</h6>
                    </div>
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div id="tab-1" className="tab-pane fade show p-0 active">
                  <div className="row g-4">
                    {[
                      { name: "Cửa Nhôm Xingfa Biệt Thự", price: "Liên hệ" },
                      { name: "Cửa Nhôm Kính 4 Cánh", price: "Liên hệ" },
                      { name: "Vách Kính Phòng Khách", price: "Liên hệ" },
                      { name: "Mái Kính Sân Vườn", price: "Liên hệ" },
                      { name: "Cửa Lùa Ban Công", price: "Liên hệ" },
                      { name: "Cửa Nhôm Việt Pháp", price: "Liên hệ" },
                      { name: "Vách Kính Ngăn Phòng", price: "Liên hệ" },
                      { name: "Mái Kính Che Cửa", price: "Liên hệ" }
                    ].map((item, i) => (
                      <div key={i} className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img className="flex-shrink-0 img-fluid rounded" src={`https://images.unsplash.com/photo-${['1600607687939-ce8a6c25118c', '1600607687920-4e2a09cf159d', '1600607687644-c7171b42498b', '1600566753190-17f0baa2a6c3', '1600607687939-ce8a6c25118c', '1600607687920-4e2a09cf159d', '1600607687644-c7171b42498b', '1600566753190-17f0baa2a6c3'][i % 8]}?w=200&q=80`} alt="Sản phẩm nhôm kính" style={{ width: '80px' }} />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>{item.name}</span>
                              <span className="text-primary">{item.price}</span>
                            </h5>
                            <small className="fst-italic">Sản phẩm chất lượng cao, thi công chuyên nghiệp</small>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div id="tab-2" className="tab-pane fade show p-0">
                  <div className="row g-4">
                    {[
                      { name: "Vách Kính Văn Phòng", price: "Liên hệ" },
                      { name: "Cửa Nhôm Kính Văn Phòng", price: "Liên hệ" },
                      { name: "Vách Kính Mặt Tiền", price: "Liên hệ" },
                      { name: "Cửa Trượt Văn Phòng", price: "Liên hệ" },
                      { name: "Vách Kính Ngăn Phòng Họp", price: "Liên hệ" },
                      { name: "Cửa Nhôm Kính Showroom", price: "Liên hệ" },
                      { name: "Vách Kính Cường Lực", price: "Liên hệ" },
                      { name: "Cửa Nhôm Kính Công Ty", price: "Liên hệ" }
                    ].map((item, i) => (
                      <div key={i} className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img className="flex-shrink-0 img-fluid rounded" src={`https://images.unsplash.com/photo-${['1600607687939-ce8a6c25118c', '1600607687920-4e2a09cf159d', '1600607687644-c7171b42498b', '1600566753190-17f0baa2a6c3', '1600607687939-ce8a6c25118c', '1600607687920-4e2a09cf159d', '1600607687644-c7171b42498b', '1600566753190-17f0baa2a6c3'][i % 8]}?w=200&q=80`} alt="Sản phẩm nhôm kính" style={{ width: '80px' }} />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>{item.name}</span>
                              <span className="text-primary">{item.price}</span>
                            </h5>
                            <small className="fst-italic">Thiết kế hiện đại, phù hợp không gian làm việc</small>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div id="tab-3" className="tab-pane fade show p-0">
                  <div className="row g-4">
                    {[
                      { name: "Vách Kính Cửa Hàng", price: "Liên hệ" },
                      { name: "Cửa Nhôm Kính Trung Tâm", price: "Liên hệ" },
                      { name: "Vách Kính Showroom", price: "Liên hệ" },
                      { name: "Cửa Nhôm Kính Siêu Thị", price: "Liên hệ" },
                      { name: "Vách Kính Mặt Tiền", price: "Liên hệ" },
                      { name: "Cửa Nhôm Kính Cửa Hàng", price: "Liên hệ" },
                      { name: "Vách Kính Trung Tâm", price: "Liên hệ" },
                      { name: "Cửa Nhôm Kính Thương Mại", price: "Liên hệ" }
                    ].map((item, i) => (
                      <div key={i} className="col-lg-6">
                        <div className="d-flex align-items-center">
                          <img className="flex-shrink-0 img-fluid rounded" src={`https://images.unsplash.com/photo-${['1600607687939-ce8a6c25118c', '1600607687920-4e2a09cf159d', '1600607687644-c7171b42498b', '1600566753190-17f0baa2a6c3', '1600607687939-ce8a6c25118c', '1600607687920-4e2a09cf159d', '1600607687644-c7171b42498b', '1600566753190-17f0baa2a6c3'][i % 8]}?w=200&q=80`} alt="Sản phẩm nhôm kính" style={{ width: '80px' }} />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>{item.name}</span>
                              <span className="text-primary">{item.price}</span>
                            </h5>
                            <small className="fst-italic">Thiết kế sang trọng, thu hút khách hàng</small>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Menu End */}

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
                <h5 className="section-title ff-secondary text-start text-primary fw-normal">Liên Hệ</h5>
                <h1 className="text-white mb-4">Yêu Cầu Báo Giá</h1>
                <form>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="text" className="form-control" id="name" placeholder="Họ và Tên" />
                        <label htmlFor="name">Họ và Tên</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="email" className="form-control" id="email" placeholder="Email" />
                        <label htmlFor="email">Email</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input type="tel" className="form-control" id="phone" placeholder="Số Điện Thoại" />
                        <label htmlFor="phone">Số Điện Thoại</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <select className="form-select" id="select1">
                          <option value="1">Cửa Nhôm Kính</option>
                          <option value="2">Vách Kính</option>
                          <option value="3">Mái Kính</option>
                          <option value="4">Khác</option>
                        </select>
                        <label htmlFor="select1">Loại Sản Phẩm</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea className="form-control" placeholder="Yêu cầu chi tiết" id="message" style={{ height: '100px' }}></textarea>
                        <label htmlFor="message">Yêu Cầu Chi Tiết</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3" type="submit">Gửi Yêu Cầu</button>
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

        {/* Team Start */}
        <div className="container-xxl pt-5 pb-3">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h5 className="section-title ff-secondary text-center text-primary fw-normal">Team Members</h5>
              <h1 className="mb-5">Our Master Chefs</h1>
            </div>
            <div className="row g-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${i * 0.2}s`}>
                  <div className="team-item text-center rounded overflow-hidden">
                    <div className="rounded-circle overflow-hidden m-4">
                      <img className="img-fluid" src={`https://images.unsplash.com/photo-${['1507003211169-0a1dd7228f2d', '1494790108377-be9c29b29330', '1500648767791-00dcc994a43e', '1506794778202-cad84cf45f1d'][i - 1]}?w=400&q=80`} alt="Đội ngũ nhân viên" />
                    </div>
                    <h5 className="mb-0">Full Name</h5>
                    <small>Designation</small>
                    <div className="d-flex justify-content-center mt-3">
                      <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                      <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-twitter"></i></a>
                      <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-instagram"></i></a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Team End */}

        {/* Testimonial Start */}
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container">
            <div className="text-center">
              <h5 className="section-title ff-secondary text-center text-primary fw-normal">Testimonial</h5>
              <h1 className="mb-5">Our Clients Say!!!</h1>
            </div>
            <div className="owl-carousel testimonial-carousel">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="testimonial-item bg-transparent border rounded p-4">
                  <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                  <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                  <div className="d-flex align-items-center">
                    <img className="img-fluid flex-shrink-0 rounded-circle" src={`https://images.unsplash.com/photo-${['1507003211169-0a1dd7228f2d', '1494790108377-be9c29b29330', '1500648767791-00dcc994a43e', '1506794778202-cad84cf45f1d'][i - 1]}?w=100&q=80`} alt="Khách hàng" style={{ width: '50px', height: '50px' }} />
                    <div className="ps-3">
                      <h5 className="mb-1">Client Name</h5>
                      <small>Profession</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Testimonial End */}
      </Layout>
    </>
  )
}

