import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function About() {
  const { dictionary } = useLanguage()
  const copy = dictionary.pages.about
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
        <title>{copy.metaTitle}</title>
        <meta name="description" content={copy.metaDescription} />
      </Head>
      <Layout>
        <div className="container-xxl position-relative p-0">
          <div className="container-xxl py-5 bg-dark hero-header mb-5">
            <div className="container text-center my-5 pt-5 pb-4">
              <h1 className="display-3 text-white mb-3 animated slideInDown">{copy.heroTitle}</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center text-uppercase">
                  <li className="breadcrumb-item"><Link href="/">{copy.breadcrumbParent}</Link></li>
                  <li className="breadcrumb-item text-white active" aria-current="page">{copy.breadcrumbCurrent}</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>

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
                <h5 className="section-title ff-secondary text-start text-primary fw-normal">{copy.sectionTitle}</h5>
                <h1 className="mb-4">{copy.welcomeTitle}</h1>
                {copy.paragraphs.map((paragraph, idx) => (
                  <p key={idx} className="mb-4">{paragraph}</p>
                ))}
                <div className="row g-4 mb-4">
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                      <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">{copy.stats.years.value}</h1>
                      <div className="ps-4">
                        <p className="mb-0">{copy.stats.years.labelTop}</p>
                        <h6 className="text-uppercase mb-0">{copy.stats.years.labelBottom}</h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                      <h1 className="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">{copy.stats.projects.value}</h1>
                      <div className="ps-4">
                        <p className="mb-0">{copy.stats.projects.labelTop}</p>
                        <h6 className="text-uppercase mb-0">{copy.stats.projects.labelBottom}</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <Link href="/contact" className="btn btn-primary py-3 px-5 mt-2">{copy.cta}</Link>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}

        {/* Team Start */}
        <div className="container-xxl pt-5 pb-3">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h5 className="section-title ff-secondary text-center text-primary fw-normal">{copy.team.title}</h5>
              <h1 className="mb-5">{copy.team.subtitle}</h1>
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
      </Layout>
    </>
  )
}

