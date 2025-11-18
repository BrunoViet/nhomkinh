import { useRouter } from 'next/router'
import Head from 'next/head'
import Layout from '@/components/Layout'
import Link from 'next/link'
import { getProjectById, getAllProjects } from '@/constants/projects'
import { useMemo } from 'react'

export default function ProjectDetail() {
  const router = useRouter()
  const { id } = router.query
  const projectId = id ? parseInt(id as string) : null
  const project = projectId ? getProjectById(projectId) : null

  // Lọc dự án tương tự (loại trừ dự án hiện tại)
  const relatedProjects = useMemo(() => {
    if (!project) return []
    
    const allProjects = getAllProjects()
    const filtered = allProjects.filter(p => p.id !== project.id && p.category === project.category)
    
    // Nếu không đủ dự án cùng category, lấy thêm các dự án khác
    if (filtered.length < 3) {
      const otherProjects = allProjects.filter(p => p.id !== project.id && p.category !== project.category)
      return [...filtered, ...otherProjects].slice(0, 3)
    }
    
    return filtered.slice(0, 3)
  }, [project])

  if (!project) {
    return (
      <Layout>
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center">
              <h1>Dự án không tồn tại</h1>
              <Link href="/" className="btn btn-primary mt-3">Về trang chủ</Link>
            </div>
          </div>
        </div>
      </Layout>
    )
  }

  const categoryLabels: Record<string, string> = {
    residential: 'Nhà Ở',
    office: 'Văn Phòng',
    commercial: 'Thương Mại'
  }

  return (
    <>
      <Head>
        <title>{project.title} - Nhôm Kính</title>
        <meta name="description" content={project.description} />
      </Head>
      <Layout>
        {/* Hero Header Banner */}
        <div className="container-xxl position-relative p-0">
          <div 
            className="container-xxl py-5 bg-dark hero-header mb-5 project-detail-hero"
            style={{
              backgroundImage: `linear-gradient(rgba(15, 23, 43, .8), rgba(15, 23, 43, .8)), url(${project.image})`,
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              marginTop: '80px'
            }}
          >
            <div className="container my-5 py-5">
              <div className="row justify-content-center">
                <div className="col-lg-10 text-center">
                  <span className="text-white-50 mb-2 d-block">
                    <i className="fa fa-tag me-2"></i>
                    {categoryLabels[project.category] || project.category}
                  </span>
                  <h1 className="display-3 text-white animated slideInLeft mb-3 mb-md-4">{project.title}</h1>
                  <p className="text-white animated slideInLeft mb-3 mb-md-4 pb-2">{project.description}</p>
                  <Link href="/" className="btn btn-primary py-2 py-sm-3 px-4 px-sm-5 me-2 me-md-3 animated slideInLeft">
                    <i className="fa fa-arrow-left me-2"></i>Quay về trang chủ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Detail Content */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5">
              {/* Project Image Gallery */}
              <div className="col-lg-8">
                <div className="project-detail-image-wrapper mb-4 wow fadeInLeft" data-wow-delay="0.1s">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="img-fluid w-100 rounded"
                    style={{ maxHeight: '500px', objectFit: 'cover' }}
                  />
                </div>

                {/* Additional Images */}
                {project.images && project.images.length > 1 && (
                  <div className="row g-3 mb-4">
                    {project.images.slice(1, 4).map((img, index) => (
                      <div key={index} className="col-md-4 wow fadeInUp" data-wow-delay={`${0.2 + index * 0.1}s`}>
                        <img 
                          src={img} 
                          alt={`${project.title} - Hình ${index + 2}`} 
                          className="img-fluid w-100 rounded"
                          style={{ height: '200px', objectFit: 'cover' }}
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Project Content */}
                {project.content && (
                  <div className="project-detail-content wow fadeInUp" data-wow-delay="0.3s">
                    <div dangerouslySetInnerHTML={{ __html: project.content }} />
                  </div>
                )}
              </div>

              {/* Project Info Sidebar */}
              <div className="col-lg-4">
                <div className="project-detail-info wow fadeInRight" data-wow-delay="0.2s">
                  <div className="bg-light p-4 rounded mb-4">
                    <h4 className="mb-4">Thông Tin Dự Án</h4>
                    
                    <div className="mb-3">
                      <h6 className="text-primary mb-2">
                        <i className="fa fa-map-marker-alt me-2"></i>Địa Điểm
                      </h6>
                      <p className="mb-0">{project.location}</p>
                    </div>

                    {project.area && (
                      <div className="mb-3">
                        <h6 className="text-primary mb-2">
                          <i className="fa fa-ruler-combined me-2"></i>Diện Tích
                        </h6>
                        <p className="mb-0">{project.area}</p>
                      </div>
                    )}

                    {project.year && (
                      <div className="mb-3">
                        <h6 className="text-primary mb-2">
                          <i className="fa fa-calendar me-2"></i>Năm Hoàn Thành
                        </h6>
                        <p className="mb-0">{project.year}</p>
                      </div>
                    )}

                    {project.client && (
                      <div className="mb-3">
                        <h6 className="text-primary mb-2">
                          <i className="fa fa-user me-2"></i>Chủ Đầu Tư
                        </h6>
                        <p className="mb-0">{project.client}</p>
                      </div>
                    )}

                    {project.duration && (
                      <div className="mb-3">
                        <h6 className="text-primary mb-2">
                          <i className="fa fa-clock me-2"></i>Thời Gian Thi Công
                        </h6>
                        <p className="mb-0">{project.duration}</p>
                      </div>
                    )}

                    <div className="mb-3">
                      <h6 className="text-primary mb-2">
                        <i className="fa fa-tag me-2"></i>Danh Mục
                      </h6>
                      <p className="mb-0">{categoryLabels[project.category] || project.category}</p>
                    </div>
                  </div>

                  {/* Features */}
                  {project.features && project.features.length > 0 && (
                    <div className="bg-light p-4 rounded mb-4">
                      <h4 className="mb-4">Đặc Điểm Nổi Bật</h4>
                      <ul className="list-unstyled">
                        {project.features.map((feature, index) => (
                          <li key={index} className="mb-2">
                            <i className="fa fa-check text-primary me-2"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Contact Button */}
                  <div className="text-center">
                    <Link href="/contact" className="btn btn-primary w-100 py-3">
                      <i className="fa fa-phone me-2"></i>Liên Hệ Tư Vấn
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <div className="container-xxl py-5 bg-light">
            <div className="container">
              <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h5 className="section-title ff-secondary text-center text-primary fw-normal">Dự Án</h5>
                <h1 className="mb-5">Dự Án Tương Tự</h1>
              </div>
              <div className="row g-4">
                {relatedProjects.map((relatedProject, index) => (
                  <div key={relatedProject.id} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.2 + index * 0.1}s`}>
                    <Link href={`/project/${relatedProject.id}`} className="text-decoration-none">
                      <div className="news-card rounded overflow-hidden h-100" style={{ 
                        boxShadow: '0 0 45px rgba(0, 0, 0, .08)',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                      }}>
                        <div className="news-card-image-wrapper position-relative overflow-hidden" style={{ height: '200px' }}>
                          <img 
                            src={relatedProject.image} 
                            alt={relatedProject.title} 
                            className="img-fluid w-100 h-100"
                            style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                          />
                        </div>
                        <div className="news-card-content p-3">
                          <span className="text-muted small d-block mb-2">
                            <i className="fa fa-map-marker-alt me-1"></i>{relatedProject.location}
                            {relatedProject.area && (
                              <>
                                <span className="mx-2">•</span>
                                {relatedProject.area}
                              </>
                            )}
                          </span>
                          <h6 className="text-dark mb-2" style={{ fontSize: '1.1rem', fontWeight: '600', lineHeight: '1.4' }}>
                            {relatedProject.title}
                          </h6>
                          <p className="text-muted small mb-0" style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                            {relatedProject.description.substring(0, 80)}...
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </Layout>
    </>
  )
}

