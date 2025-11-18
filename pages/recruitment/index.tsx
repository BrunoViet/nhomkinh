import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'
import { useLanguage } from '@/contexts/LanguageContext'
import { recruitmentPositions } from '@/constants/recruitment'

export default function RecruitmentPage() {
  const { dictionary, language } = useLanguage()
  const copy = dictionary.pages.recruitment

  const localizedPositions = recruitmentPositions.map(position => ({
    id: position.id,
    title: position.title[language],
    description: position.description[language],
    requirements: position.requirements[language],
    benefits: position.benefits[language],
    type: position.type,
    location: position.location,
    salary: position.salary,
    contactEmail: position.contactEmail
  }))

  const typeLabel = (type: string) => {
    if (language === 'vi') {
      return type === 'fulltime' ? 'Toàn thời gian' : type === 'parttime' ? 'Bán thời gian' : 'Thực tập'
    }
    return type === 'fulltime' ? 'Full-time' : type === 'parttime' ? 'Part-time' : 'Internship'
  }

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
            <div className="row g-4 mb-5">
              <div className="col-lg-6">
                <div className="bg-light rounded p-4 h-100">
                  <h5 className="section-title ff-secondary text-primary fw-normal">{copy.introTitle}</h5>
                  <ul className="list-unstyled mt-3 mb-0">
                    {copy.introHighlights.map((item: string, idx: number) => (
                      <li key={idx} className="d-flex align-items-start mb-3">
                        <i className="fa fa-check text-primary me-3 mt-1"></i>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="bg-dark rounded p-4 h-100 text-white">
                  <h5 className="section-title ff-secondary text-primary fw-normal">{dictionary.pages.contact.sectionTitle}</h5>
                  <p className="mb-3">{dictionary.pages.contact.sectionSubtitle}</p>
                  <Link href="/contact" className="btn btn-primary">{dictionary.pages.contact.form.submit}</Link>
                </div>
              </div>
            </div>

            <div className="mb-4 text-center">
              <h5 className="section-title ff-secondary text-primary fw-normal">{copy.listingTitle}</h5>
              <h2>{copy.listingSubtitle}</h2>
            </div>

            <div className="row g-4">
              {localizedPositions.map(position => (
                <div key={position.id} className="col-lg-4 col-md-6">
                  <div className="card h-100 shadow-sm border-0">
                    <div className="card-body d-flex flex-column">
                      <div className="d-flex justify-content-between mb-2">
                        <span className="badge bg-primary-subtle text-primary">{typeLabel(position.type)}</span>
                        <span className="text-muted">{position.location}</span>
                      </div>
                      <h5 className="card-title">{position.title}</h5>
                      <p className="text-muted">{position.description}</p>
                      <div className="mb-3">
                        <strong>{language === 'vi' ? 'Yêu cầu:' : 'Requirements:'}</strong>
                        <ul className="small mt-2">
                          {position.requirements.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="mb-3">
                        <strong>{language === 'vi' ? 'Quyền lợi:' : 'Benefits:'}</strong>
                        <ul className="small mt-2">
                          {position.benefits.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-auto">
                        <div className="text-muted mb-2">
                          <i className="fa fa-money-bill me-2"></i>{position.salary}
                        </div>
                        <a href={`mailto:${position.contactEmail}`} className="btn btn-primary w-100">{copy.applyCta}</a>
                      </div>
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


