import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { dictionary } = useLanguage()
  const footer = dictionary.footer
  const brandName = dictionary.navbar.brand
  return (
    <div className="container-fluid bg-dark text-light footer pt-4 pt-md-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-4 py-md-5">
        <div className="row g-4 g-md-5">
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-3 mb-md-4">{footer.companyTitle}</h4>
            <Link href="/about" className="btn btn-link">{footer.links.about}</Link>
            <Link href="/contact" className="btn btn-link">{footer.links.contact}</Link>
            <Link href="/service" className="btn btn-link">{footer.links.service}</Link>
            <a className="btn btn-link" href="">{footer.links.privacy}</a>
            <a className="btn btn-link" href="">{footer.links.terms}</a>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-3 mb-md-4">{footer.contactTitle}</h4>
            <p className="mb-2"><i className="fa fa-map-marker-alt me-2 me-md-3"></i>{footer.address}</p>
            <p className="mb-2"><i className="fa fa-phone-alt me-2 me-md-3"></i>{footer.phone}</p>
            <p className="mb-2"><i className="fa fa-envelope me-2 me-md-3"></i>{footer.email}</p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
              <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
              <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-3 mb-md-4">{footer.workTimeTitle}</h4>
            <h5 className="text-light fw-normal">{footer.workDays.weekdays}</h5>
            <p>{footer.workDays.weekdayHours}</p>
            <h5 className="text-light fw-normal">{footer.workDays.saturday}</h5>
            <p>{footer.workDays.saturdayHours}</p>
            <h5 className="text-light fw-normal">{footer.workDays.sunday}</h5>
            <p>{footer.workDays.sundayHours}</p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-3 mb-md-4">{footer.subscribeTitle}</h4>
            <p className="mb-3">{footer.subscribeDescription}</p>
            <div className="position-relative mx-auto" style={{ maxWidth: '100%' }}>
              <input className="form-control border-primary w-100 py-2 py-md-3 ps-3 ps-md-4 pe-5" type="text" placeholder={footer.subscribePlaceholder} />
              <button type="button" className="btn btn-primary py-1 py-md-2 px-2 px-md-3 position-absolute top-0 end-0 mt-1 mt-md-2 me-1 me-md-2" style={{ fontSize: '0.75rem' }}>{footer.subscribeButton}</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <Link className="border-bottom" href="/">{brandName}</Link>, {footer.copyright}
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <Link href="/">{footer.nav.home}</Link>
                <Link href="/about">{footer.nav.about}</Link>
                <Link href="/service">{footer.nav.service}</Link>
                <Link href="/contact">{footer.nav.contact}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

