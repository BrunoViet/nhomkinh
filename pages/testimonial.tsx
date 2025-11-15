import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'

export default function Testimonial() {
  return (
    <>
      <Head>
        <title>Testimonial - Restoran</title>
        <meta name="description" content="Restoran Testimonials" />
      </Head>
      <Layout>
        <div className="container-xxl position-relative p-0">
          <div className="container-xxl py-5 bg-dark hero-header mb-5">
            <div className="container text-center my-5 pt-5 pb-4">
              <h1 className="display-3 text-white mb-3 animated slideInDown">Testimonial</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center text-uppercase">
                  <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                  <li className="breadcrumb-item"><a href="#">Pages</a></li>
                  <li className="breadcrumb-item text-white active" aria-current="page">Testimonial</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>

        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container">
            <div className="text-center">
              <h5 className="section-title ff-secondary text-center text-primary fw-normal">Testimonial</h5>
              <h1 className="mb-5">Our Clients Say!!!</h1>
            </div>
            <div className="owl-carousel testimonial-carousel">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="testimonial-item bg-transparent border rounded p-4">
                  <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
                  <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                  <div className="d-flex align-items-center">
                    <img className="img-fluid flex-shrink-0 rounded-circle" src={`https://images.unsplash.com/photo-${['1507003211169-0a1dd7228f2d', '1494790108377-be9c29b29330', '1500648767791-00dcc994a43e', '1506794778202-cad84cf45f1d'][i - 1]}?w=100&q=80`} alt="Khách hàng" style={{ width: '50px', height: '50px' }} />
                    <div className="ps-3">
                      <h5 className="mb-1">Client Name</h5>
                      <small>Profession</small>
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

