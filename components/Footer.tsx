import Link from 'next/link'

export default function Footer() {
  return (
    <div className="container-fluid bg-dark text-light footer pt-4 pt-md-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-4 py-md-5">
        <div className="row g-4 g-md-5">
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-3 mb-md-4">Công Ty</h4>
            <Link href="/about" className="btn btn-link">Giới Thiệu</Link>
            <Link href="/contact" className="btn btn-link">Liên Hệ</Link>
            <Link href="/service" className="btn btn-link">Dịch Vụ</Link>
            <a className="btn btn-link" href="">Chính Sách Bảo Mật</a>
            <a className="btn btn-link" href="">Điều Khoản Sử Dụng</a>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-3 mb-md-4">Liên Hệ</h4>
            <p className="mb-2"><i className="fa fa-map-marker-alt me-2 me-md-3"></i>123 Đường ABC, Quận XYZ, TP.HCM</p>
            <p className="mb-2"><i className="fa fa-phone-alt me-2 me-md-3"></i>+84 123 456 789</p>
            <p className="mb-2"><i className="fa fa-envelope me-2 me-md-3"></i>info@nhomkinh.com</p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
              <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
              <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-3 mb-md-4">Giờ Làm Việc</h4>
            <h5 className="text-light fw-normal">Thứ 2 - Thứ 6</h5>
            <p>07:30 - 17:30</p>
            <h5 className="text-light fw-normal">Thứ 7</h5>
            <p>07:30 - 12:00</p>
            <h5 className="text-light fw-normal">Chủ Nhật</h5>
            <p>Nghỉ</p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-3 mb-md-4">Đăng Ký Nhận Tin</h4>
            <p className="mb-3">Đăng ký để nhận thông tin về sản phẩm mới và ưu đãi đặc biệt.</p>
            <div className="position-relative mx-auto" style={{ maxWidth: '100%' }}>
              <input className="form-control border-primary w-100 py-2 py-md-3 ps-3 ps-md-4 pe-5" type="text" placeholder="Email của bạn" />
              <button type="button" className="btn btn-primary py-1 py-md-2 px-2 px-md-3 position-absolute top-0 end-0 mt-1 mt-md-2 me-1 me-md-2" style={{ fontSize: '0.75rem' }}>Đăng Ký</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a className="border-bottom" href="#">Nhôm Kính</a>, Bảo Lưu Mọi Quyền.
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <Link href="/">Trang Chủ</Link>
                <Link href="/about">Giới Thiệu</Link>
                <Link href="/service">Dịch Vụ</Link>
                <Link href="/contact">Liên Hệ</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

