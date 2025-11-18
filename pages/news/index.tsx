import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { useLanguage } from '@/contexts/LanguageContext'
import { featuredNews, sideNews, gridNews } from '@/constants/news'

export default function NewsPage() {
  const { dictionary } = useLanguage()
  const copy = dictionary.pages.newsList

  return (
    <>
      <Head>
        <title>{copy.metaTitle}</title>
        <meta name="description" content={copy.metaDescription} />
      </Head>
      <Layout>
        <div className="container-xxl position-relative p-0">
          <div className="container-xxl py-5 bg-dark hero-header mb-5">
            <div className="container text-center my-5 pt-5 pb-4">
              <h1 className="display-3 text-white mb-3 animated slideInDown">{copy.heroTitle}</h1>
              <p className="text-white-50 mb-4">{copy.heroDescription}</p>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center text-uppercase">
                  <li className="breadcrumb-item"><Link href="/">{copy.breadcrumbParent}</Link></li>
                  <li className="breadcrumb-item text-white active" aria-current="page">{copy.breadcrumbCurrent}</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>

        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-8">
                <div className="news-main-item wow fadeInUp" data-wow-delay="0.1s">
                  <Link href={`/news/${featuredNews.id}`} className="text-decoration-none">
                    <div className="news-main-image-wrapper position-relative overflow-hidden rounded mb-3">
                      <img src={featuredNews.image} alt={featuredNews.title} className="img-fluid w-100 news-main-image" style={{ height: '450px', objectFit: 'cover' }} />
                      <div className="news-overlay position-absolute bottom-0 start-0 w-100 p-4">
                        <span className="text-white-50 small"><i className="fa fa-calendar me-2"></i>{featuredNews.date}</span>
                        <h3 className="text-white mt-2 mb-2">{featuredNews.title}</h3>
                        <p className="text-white mb-0">{featuredNews.excerpt}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="news-sidebar">
                  <h5 className="section-title ff-secondary text-primary fw-normal mb-3">{copy.sidebarTitle}</h5>
                  {sideNews.map((news, index) => (
                    <div key={news.id} className={`news-side-item ${index < sideNews.length - 1 ? 'mb-4' : ''}`}>
                      <Link href={`/news/${news.id}`} className="text-decoration-none d-flex">
                        <div className="flex-shrink-0 me-3" style={{ width: '120px', height: '100px' }}>
                          <img src={news.image} alt={news.title} className="img-fluid w-100 h-100 rounded" style={{ objectFit: 'cover' }} />
                        </div>
                        <div className="flex-grow-1">
                          <span className="text-muted small d-block mb-1"><i className="fa fa-calendar me-1"></i>{news.date}</span>
                          <h6 className="text-dark mb-2">{news.title}</h6>
                          <p className="text-muted small mb-0">{news.excerpt}</p>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="row g-4 mt-2">
              <div className="col-12">
                <h5 className="section-title ff-secondary text-primary fw-normal">{copy.gridTitle}</h5>
              </div>
              {gridNews.map(news => (
                <div key={news.id} className="col-lg-4 col-md-6">
                  <Link href={`/news/${news.id}`} className="text-decoration-none">
                    <div className="news-card rounded overflow-hidden h-100">
                      <div className="position-relative overflow-hidden" style={{ height: '200px' }}>
                        <img src={news.image} alt={news.title} className="img-fluid w-100 h-100" style={{ objectFit: 'cover' }} />
                      </div>
                      <div className="p-3">
                        <span className="text-muted small d-block mb-2"><i className="fa fa-calendar me-1"></i>{news.date}</span>
                        <h6 className="text-dark mb-2">{news.title}</h6>
                        <p className="text-muted small mb-0">{news.excerpt}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}


