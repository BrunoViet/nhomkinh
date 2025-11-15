import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'

export default function Menu() {
  return (
    <>
      <Head>
        <title>Menu - Restoran</title>
        <meta name="description" content="Restoran Menu" />
      </Head>
      <Layout>
        <div className="container-xxl position-relative p-0">
          <div className="container-xxl py-5 bg-dark hero-header mb-5">
            <div className="container text-center my-5 pt-5 pb-4">
              <h1 className="display-3 text-white mb-3 animated slideInDown">Food Menu</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center text-uppercase">
                  <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                  <li className="breadcrumb-item text-white active" aria-current="page">Menu</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>

        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h5 className="section-title ff-secondary text-center text-primary fw-normal">Food Menu</h5>
              <h1 className="mb-5">Most Popular Items</h1>
            </div>
            <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
              <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                <li className="nav-item">
                  <a className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" href="#tab-1">
                    <i className="fa fa-coffee fa-2x text-primary"></i>
                    <div className="ps-3">
                      <small className="text-body">Popular</small>
                      <h6 className="mt-n1 mb-0">Breakfast</h6>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" href="#tab-2">
                    <i className="fa fa-hamburger fa-2x text-primary"></i>
                    <div className="ps-3">
                      <small className="text-body">Special</small>
                      <h6 className="mt-n1 mb-0">Launch</h6>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" href="#tab-3">
                    <i className="fa fa-utensils fa-2x text-primary"></i>
                    <div className="ps-3">
                      <small className="text-body">Lovely</small>
                      <h6 className="mt-n1 mb-0">Dinner</h6>
                    </div>
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                {[1, 2, 3].map((tab) => (
                  <div key={tab} id={`tab-${tab}`} className={`tab-pane fade show p-0 ${tab === 1 ? 'active' : ''}`}>
                    <div className="row g-4">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <div key={i} className="col-lg-6">
                          <div className="d-flex align-items-center">
                            <img className="flex-shrink-0 img-fluid rounded" src={`https://images.unsplash.com/photo-${['1600607687939-ce8a6c25118c', '1600607687920-4e2a09cf159d', '1600607687644-c7171b42498b', '1600566753190-17f0baa2a6c3', '1600607687939-ce8a6c25118c', '1600607687920-4e2a09cf159d', '1600607687644-c7171b42498b', '1600566753190-17f0baa2a6c3'][(i - 1) % 8]}?w=200&q=80`} alt="Sản phẩm nhôm kính" style={{ width: '80px' }} />
                            <div className="w-100 d-flex flex-column text-start ps-4">
                              <h5 className="d-flex justify-content-between border-bottom pb-2">
                                <span>Chicken Burger</span>
                                <span className="text-primary">$115</span>
                              </h5>
                              <small className="fst-italic">Ipsum ipsum clita erat amet dolor justo diam</small>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

