import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'

export default function Service() {
  const services = [
    { icon: 'fa-user-tie', title: 'Master Chefs', delay: '0.1s' },
    { icon: 'fa-utensils', title: 'Quality Food', delay: '0.3s' },
    { icon: 'fa-cart-plus', title: 'Online Order', delay: '0.5s' },
    { icon: 'fa-headset', title: '24/7 Service', delay: '0.7s' },
    { icon: 'fa-user-tie', title: 'Master Chefs', delay: '0.1s' },
    { icon: 'fa-utensils', title: 'Quality Food', delay: '0.3s' },
    { icon: 'fa-cart-plus', title: 'Online Order', delay: '0.5s' },
    { icon: 'fa-headset', title: '24/7 Service', delay: '0.7s' },
  ]

  return (
    <>
      <Head>
        <title>Service - Restoran</title>
        <meta name="description" content="Restoran Services" />
      </Head>
      <Layout>
        <div className="container-xxl position-relative p-0">
          <div className="container-xxl py-5 bg-dark hero-header mb-5">
            <div className="container text-center my-5 pt-5 pb-4">
              <h1 className="display-3 text-white mb-3 animated slideInDown">Our Services</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center text-uppercase">
                  <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                  <li className="breadcrumb-item text-white active" aria-current="page">Service</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>

        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h5 className="section-title ff-secondary text-center text-primary fw-normal">Our Services</h5>
              <h1 className="mb-5">Explore Our Services</h1>
            </div>
            <div className="row g-4">
              {services.map((service, index) => (
                <div key={index} className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay={service.delay}>
                  <div className="service-item rounded pt-3">
                    <div className="p-4">
                      <i className={`fa fa-3x ${service.icon} text-primary mb-4`}></i>
                      <h5>{service.title}</h5>
                      <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
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

