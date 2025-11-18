import Head from 'next/head'
import Link from 'next/link'
import { useMemo } from 'react'
import Layout from '@/components/Layout'
import { useLanguage } from '@/contexts/LanguageContext'
import { productCategories, getProductsByCategory } from '@/constants/products'

export default function CategoriesPage() {
  const { dictionary, language } = useLanguage()
  const copy = dictionary.pages.categories

  const localizedCategories = useMemo(() => productCategories.map(category => ({
    id: category.id,
    name: category.name[language],
    description: category.description[language],
    image: category.heroImage,
    highlights: (category.highlights ?? []).map(item => item[language]),
    totalProducts: getProductsByCategory(category.id).length
  })), [language])

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
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h5 className="section-title ff-secondary text-center text-primary fw-normal">{copy.sectionTitle}</h5>
              <h1 className="mb-5">{copy.sectionSubtitle}</h1>
            </div>
            <div className="row g-4">
              {localizedCategories.map(category => (
                <div key={category.id} id={`cat-${category.id}`} className="col-lg-4 col-md-6">
                  <div className="card h-100 shadow-sm border-0">
                    <div className="ratio ratio-4x3">
                      <img src={category.image} alt={category.name} className="card-img-top object-fit-cover" />
                    </div>
                    <div className="card-body d-flex flex-column">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <h5 className="card-title mb-0">{category.name}</h5>
                        <span className="badge bg-primary-subtle text-primary">{category.totalProducts} SP</span>
                      </div>
                      <p className="card-text text-muted">{category.description}</p>
                      {category.highlights.length > 0 && (
                        <ul className="list-unstyled small text-muted mb-3">
                          {category.highlights.map((item, idx) => (
                            <li key={idx}><i className="fa fa-check text-primary me-2"></i>{item}</li>
                          ))}
                        </ul>
                      )}
                      <Link href={`/category/${category.id}`} className="btn btn-outline-primary mt-auto">
                        {dictionary.pages.categoryDetail.productSectionTitle}
                      </Link>
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


