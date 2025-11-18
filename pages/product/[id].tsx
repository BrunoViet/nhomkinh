import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '@/components/Layout'
import Link from 'next/link'
import ProductCarousel from '@/components/ProductCarousel'
import { useMemo } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { getProductById, getProductsByCategory, getCategoryById } from '@/constants/products'

export default function ProductDetail() {
  const router = useRouter()
  const { dictionary, language } = useLanguage()
  const copy = dictionary.pages.productDetail
  const { id } = router.query
  const productId = id ? parseInt(id as string, 10) : undefined
  const product = productId ? getProductById(productId) : undefined

  const localizedProduct = useMemo(() => {
    if (!product) return null
    return {
      id: product.id,
      name: product.name[language],
      description: product.description[language],
      details: product.details[language],
      image: product.image,
      categoryId: product.categoryId
    }
  }, [product, language])

  const category = product ? getCategoryById(product.categoryId) : undefined

  const relatedProducts = useMemo(() => {
    if (!product) return []
    return getProductsByCategory(product.categoryId)
      .filter(item => item.id !== product.id)
      .map(item => ({
        id: item.id,
        name: item.name[language],
        description: item.description[language],
        image: item.image
      }))
      .slice(0, 6)
  }, [product, language])

  if (!localizedProduct) {
    return (
      <Layout>
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center">
              <h1>{copy.notFoundTitle}</h1>
              <Link href="/" className="btn btn-primary mt-3">{copy.notFoundCta}</Link>
            </div>
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <>
      <Head>
        <title>{localizedProduct.name} - Nhôm Kính</title>
        <meta name="description" content={localizedProduct.description} />
      </Head>
      <Layout>
        <div className="container-xxl position-relative p-0">
          <div 
            className="container-xxl py-5 bg-dark hero-header mb-5 product-detail-hero"
            style={{
              backgroundImage: `linear-gradient(rgba(15, 23, 43, .85), rgba(15, 23, 43, .85)), url(${localizedProduct.image})`,
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}
          >
            <div className="container my-5 py-5">
              <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                  <h1 className="display-3 text-white mb-3">{localizedProduct.name}</h1>
                  <p className="text-white-50 mb-4">{localizedProduct.description}</p>
                  <div className="d-flex flex-wrap justify-content-center gap-2">
                    <Link href="/products" className="btn btn-outline-light">
                      <i className="fa fa-arrow-left me-2"></i>{copy.backToListing}
                    </Link>
                    <Link href="/" className="btn btn-primary">
                      <i className="fa fa-home me-2"></i>{copy.backToHome}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6">
                <div className="product-detail-image-wrapper" style={{ position: 'relative', minHeight: '500px' }}>
                  <Image 
                    src={localizedProduct.image} 
                    alt={localizedProduct.name} 
                    fill
                    className="product-detail-image"
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="product-detail-info">
                  <div className="mb-4">
                    <span className="badge bg-primary-subtle text-primary mb-2">
                      {category ? category.name[language] : copy.breadcrumbParent}
                    </span>
                    <h3 className="mb-3">{copy.detailTitle}</h3>
                    <p className="text-muted">{localizedProduct.details}</p>
                  </div>
                  <div className="d-flex flex-wrap gap-3">
                    <button className="btn btn-primary">
                      <i className="fa fa-phone me-2"></i>{copy.addToCart}
                    </button>
                    <Link href="/contact" className="btn btn-outline-primary">
                      <i className="fa fa-envelope me-2"></i>{dictionary.pages.contact.sectionTitle}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <ProductCarousel 
            title={copy.relatedTitle}
            products={relatedProducts}
          />
        )}
      </Layout>
    </>
  )
}


