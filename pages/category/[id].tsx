import { useRouter } from 'next/router'
import Head from 'next/head'
import Layout from '@/components/Layout'
import Link from 'next/link'
import ProductCarousel from '@/components/ProductCarousel'
import { useLanguage } from '@/contexts/LanguageContext'
import { getCategoryById, getProductsByCategory } from '@/constants/products'

export default function CategoryDetail() {
  const router = useRouter()
  const { dictionary, language } = useLanguage()
  const copy = dictionary.pages.categoryDetail
  const { id } = router.query
  const categoryId = id ? parseInt(id as string, 10) : undefined
  const category = categoryId ? getCategoryById(categoryId) : undefined
  const categoryProducts = categoryId ? getProductsByCategory(categoryId) : []

  const localizedCategory = category
    ? {
        id: category.id,
        name: category.name[language],
        description: category.description[language],
        image: category.heroImage,
        highlights: (category.highlights ?? []).map(item => item[language])
      }
    : null

  const carouselProducts = categoryProducts.map(product => ({
    id: product.id,
    name: product.name[language],
    description: product.description[language],
    image: product.image
  }))

  if (!localizedCategory) {
    return (
      <Layout>
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center">
              <h1>{dictionary.pages.categories.sectionTitle}</h1>
              <Link href="/categories" className="btn btn-primary mt-3">{copy.backToListing}</Link>
            </div>
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <>
      <Head>
        <title>{localizedCategory.name} - Nhôm Kính</title>
        <meta name="description" content={localizedCategory.description} />
      </Head>
      <Layout>
        <div className="container-xxl position-relative p-0">
          <div 
            className="container-xxl py-5 bg-dark hero-header mb-5 product-detail-hero"
            style={{
              backgroundImage: `linear-gradient(rgba(15, 23, 43, .85), rgba(15, 23, 43, .85)), url(${localizedCategory.image})`,
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}
          >
            <div className="container my-5 py-5">
              <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                  <h1 className="display-3 text-white mb-3">{localizedCategory.name}</h1>
                  <p className="text-white-50 mb-4">{localizedCategory.description}</p>
                  <div className="d-flex flex-wrap justify-content-center gap-2">
                    <Link href="/categories" className="btn btn-outline-light">
                      <i className="fa fa-arrow-left me-2"></i>{copy.backToListing}
                    </Link>
                    <Link href="/" className="btn btn-primary">
                      <i className="fa fa-home me-2"></i>{dictionary.pages.productDetail.backToHome}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-xxl py-5">
          <div className="container">
            {localizedCategory.highlights.length > 0 && (
              <div className="row g-4 mb-4">
                {localizedCategory.highlights.map((item, idx) => (
                  <div key={idx} className="col-md-4">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-check text-primary me-3"></i>
                      <span>{item}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
            {carouselProducts.length > 0 && (
              <ProductCarousel 
                title={copy.productSectionTitle}
                products={carouselProducts}
              />
            )}
          </div>
        </div>
      </Layout>
    </>
  )
}


