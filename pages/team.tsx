import Head from 'next/head'
import Link from 'next/link'
import Layout from '@/components/Layout'

export default function Team() {
  return (
    <>
      <Head>
        <title>Our Team - Restoran</title>
        <meta name="description" content="Restoran Team" />
      </Head>
      <Layout>
        <div className="container-xxl position-relative p-0">
          <div className="container-xxl py-5 bg-dark hero-header mb-5">
            <div className="container text-center my-5 pt-5 pb-4">
              <h1 className="display-3 text-white mb-3 animated slideInDown">Our Team</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center text-uppercase">
                  <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                  <li className="breadcrumb-item"><a href="#">Pages</a></li>
                  <li className="breadcrumb-item text-white active" aria-current="page">Team</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>

        <div className="container-xxl pt-5 pb-3">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h5 className="section-title ff-secondary text-center text-primary fw-normal">Team Members</h5>
              <h1 className="mb-5">Our Master Chefs</h1>
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
      </Layout>
    </>
  )
}

