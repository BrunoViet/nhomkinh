import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Service() {
  const { dictionary } = useLanguage()
  const copy = dictionary.pages.service

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

        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h5 className="section-title ff-secondary text-center text-primary fw-normal">{copy.sectionTitle}</h5>
              <h1 className="mb-5">{copy.sectionSubtitle}</h1>
            </div>
            <div className="row g-4">
              {copy.services.map((service, index) => (
                <div key={service.title} className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay={`${0.1 * (index % 4 + 1)}s`}>
                  <div className="service-item rounded pt-3">
                    <div className="p-4">
                      <i className={`fa fa-3x ${service.icon} text-primary mb-4`}></i>
                      <h5>{service.title}</h5>
                      <p>{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

