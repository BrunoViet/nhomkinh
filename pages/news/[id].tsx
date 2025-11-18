import { useRouter } from 'next/router'
import Head from 'next/head'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { getNewsById, getAllNews } from '@/constants/news'
import { useMemo } from 'react'

export default function NewsDetail() {
  const router = useRouter()
  const { id } = router.query
  const newsId = id ? parseInt(id as string) : null
  const news = newsId ? getNewsById(newsId) : null

  // Lọc tin tức tương tự (loại trừ tin tức hiện tại)
  const relatedNews = useMemo(() => {
    if (!news) return []
    
    const allNews = getAllNews()
    const filtered = allNews.filter(n => n.id !== news.id)
    
    // Ưu tiên tin cùng category
    const sameCategory = filtered.filter(n => n.category === news.category)
    if (sameCategory.length >= 3) {
      return sameCategory.slice(0, 3)
    }
    
    return filtered.slice(0, 3)
  }, [news])

  if (!news) {
    return (
      <Layout>
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center">
              <h1>Tin tức không tồn tại</h1>
              <Link href="/" className="btn btn-primary mt-3">Về trang chủ</Link>
            </div>
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <>
      <Head>
        <title>{news.title} - Nhôm Kính</title>
        <meta name="description" content={news.excerpt} />
      </Head>
      <Layout>
        {/* Hero Header Banner */}
        <div className="container-xxl position-relative p-0">
          <div 
            className="container-xxl py-5 bg-dark hero-header mb-5 news-detail-hero"
            style={{
              backgroundImage: `linear-gradient(rgba(15, 23, 43, .8), rgba(15, 23, 43, .8)), url(${news.image})`,
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              marginTop: '80px'
            }}
          >
            <div className="container my-5 py-5">
              <div className="row justify-content-center">
                <div className="col-lg-10 text-center">
                  {news.category && (
                    <span className="text-white-50 mb-2 d-block">
                      <i className="fa fa-tag me-2"></i>
                      {news.category}
                    </span>
                  )}
                  <h1 className="display-3 text-white animated slideInLeft mb-3 mb-md-4">{news.title}</h1>
                  <div className="text-white-50 mb-3">
                    <i className="fa fa-calendar me-2"></i>
                    {news.date}
                    {news.author && (
                      <>
                        <span className="mx-3">•</span>
                        <i className="fa fa-user me-2"></i>
                        {news.author}
                      </>
                    )}
                  </div>
                  <Link href="/" className="btn btn-primary py-2 py-sm-3 px-4 px-sm-5 me-2 me-md-3 animated slideInLeft">
                    <i className="fa fa-arrow-left me-2"></i>Quay về trang chủ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* News Detail Content */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5">
              {/* News Content */}
              <div className="col-lg-8">
                <div className="news-detail-image-wrapper mb-4 wow fadeInLeft" data-wow-delay="0.1s">
                  <img 
                    src={news.image} 
                    alt={news.title} 
                    className="img-fluid w-100 rounded"
                    style={{ maxHeight: '500px', objectFit: 'cover' }}
                  />
                </div>

                {/* News Meta */}
                <div className="news-meta mb-4 wow fadeInUp" data-wow-delay="0.2s">
                  <div className="d-flex flex-wrap align-items-center text-muted mb-3">
                    <span className="me-4">
                      <i className="fa fa-calendar me-2"></i>
                      {news.date}
                    </span>
                    {news.author && (
                      <span className="me-4">
                        <i className="fa fa-user me-2"></i>
                        {news.author}
                      </span>
                    )}
                    {news.category && (
                      <span className="me-4">
                        <i className="fa fa-tag me-2"></i>
                        {news.category}
                      </span>
                    )}
                  </div>
                  
                  {news.tags && news.tags.length > 0 && (
                    <div className="mb-3">
                      {news.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="badge bg-primary me-2 mb-2"
                          style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* News Content */}
                {news.content && (
                  <div className="news-detail-content wow fadeInUp" data-wow-delay="0.3s">
                    <div 
                      dangerouslySetInnerHTML={{ __html: news.content }}
                      style={{
                        fontSize: '1.1rem',
                        lineHeight: '1.8',
                        color: '#333'
                      }}
                    />
                  </div>
                )}

                {/* Share Buttons */}
                <div className="news-share mt-5 pt-4 border-top wow fadeInUp" data-wow-delay="0.4s">
                  <h5 className="mb-3">Chia Sẻ Bài Viết</h5>
                  <div className="d-flex gap-2">
                    <button className="btn btn-outline-primary">
                      <i className="fab fa-facebook-f me-2"></i>Facebook
                    </button>
                    <button className="btn btn-outline-info">
                      <i className="fab fa-twitter me-2"></i>Twitter
                    </button>
                    <button className="btn btn-outline-danger">
                      <i className="fab fa-google-plus-g me-2"></i>Google+
                    </button>
                    <button className="btn btn-outline-secondary">
                      <i className="fa fa-link me-2"></i>Copy Link
                    </button>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="col-lg-4">
                <div className="news-detail-sidebar wow fadeInRight" data-wow-delay="0.2s">
                  {/* Contact Card */}
                  <div className="bg-light p-4 rounded mb-4">
                    <h5 className="mb-3">Cần Tư Vấn?</h5>
                    <p className="text-muted mb-3">
                      Liên hệ với chúng tôi để được tư vấn miễn phí về các sản phẩm nhôm kính.
                    </p>
                    <Link href="/contact" className="btn btn-primary w-100">
                      <i className="fa fa-phone me-2"></i>Liên Hệ Ngay
                    </Link>
                  </div>

                  {/* Related News */}
                  {relatedNews.length > 0 && (
                    <div className="bg-light p-4 rounded">
                      <h5 className="mb-4">Tin Tức Liên Quan</h5>
                      {relatedNews.map((related, index) => (
                        <Link 
                          key={related.id} 
                          href={`/news/${related.id}`}
                          className="text-decoration-none d-flex mb-3 pb-3 border-bottom"
                        >
                          <div className="flex-shrink-0 me-3" style={{ width: '80px', height: '80px' }}>
                            <img 
                              src={related.image} 
                              alt={related.title} 
                              className="img-fluid w-100 h-100 rounded"
                              style={{ objectFit: 'cover' }}
                            />
                          </div>
                          <div className="flex-grow-1">
                            <h6 className="text-dark mb-1" style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
                              {related.title}
                            </h6>
                            <span className="text-muted small">
                              <i className="fa fa-calendar me-1"></i>
                              {related.date}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

