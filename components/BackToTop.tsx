export default function BackToTop() {
  const phoneNumber = "+84123456789" // Số điện thoại (format: +84xxxxxxxxx)
  
  return (
    <>
      {/* Nút gọi điện thoại */}
      <a 
        href={`tel:${phoneNumber}`}
        className="btn btn-lg btn-success btn-lg-square call-phone-btn"
        style={{ 
          width: '56px', 
          height: '56px',
          position: 'fixed',
          right: '20px',
          bottom: '20px',
          zIndex: 99,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          boxShadow: '0 4px 15px rgba(40, 167, 69, 0.4)',
          transition: 'all 0.3s ease'
        }}
        title="Gọi điện thoại"
      >
        <i className="fa fa-phone" style={{ fontSize: '1.2rem' }}></i>
      </a>
      
      {/* Nút quay về đầu trang */}
      <a 
        href="#" 
        className="btn btn-lg btn-primary btn-lg-square back-to-top" 
        style={{ 
          width: '56px', 
          height: '56px',
          position: 'fixed',
          right: '20px',
          bottom: '90px',
          zIndex: 99,
          display: 'none',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          boxShadow: '0 4px 15px rgba(254, 161, 22, 0.4)',
          transition: 'all 0.3s ease'
        }}
        title="Quay về đầu trang"
      >
        <i className="fa fa-arrow-up" style={{ fontSize: '1.2rem' }}></i>
      </a>
    </>
  )
}

