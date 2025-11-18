import Head from 'next/head'
import Link from 'next/link'
import { useMemo } from 'react'
import Layout from '@/components/Layout'
import { useLanguage } from '@/contexts/LanguageContext'
import { products as productSource, productCategories } from '@/constants/products'

export default function ProductsPage() {
  const { dictionary, language } = useLanguage()
  const copy = dictionary.pages.products

  const localizedProducts = useMemo(() => productSource.map(product => ({
    id: product.id,
    name: product.name[language],
    description: product.description[language],
    image: product.image,
    categoryId: product.categoryId
  })), [language])

  const localizedCategories = useMemo(() => productCategories.map(category => ({
    id: category.id,
    name: category.name[language]
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
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-3 mb-4">
              <div>
                <h5 className="section-title ff-secondary text-primary fw-normal">{copy.sectionTitle}</h5>
                <h2 className="mb-0">{copy.sectionSubtitle}</h2>
              </div>
              <div className="d-flex flex-wrap gap-2">
                {localizedCategories.map(category => (
                  <Link
                    key={category.id}
                    href={`/categories#cat-${category.id}`}
                    className="btn btn-outline-primary btn-sm"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="row g-4">
              {localizedProducts.length === 0 && (
                <div className="col-12">
                  <div className="text-center py-5">
                    <p className="text-muted">{copy.empty}</p>
                  </div>
                </div>
              )}

              {localizedProducts.map(product => (
                <div key={product.id} className="col-lg-4 col-md-6">
                  <div className="card h-100 shadow-sm product-list-card">
                    <div className="ratio ratio-4x3">
                      <img src={product.image} alt={product.name} className="card-img-top object-fit-cover" />
                    </div>
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text text-muted flex-grow-1">{product.description}</p>
                      <Link href={`/product/${product.id}`} className="btn btn-primary mt-3">
                        {dictionary.pages.productDetail.detailTitle}
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


