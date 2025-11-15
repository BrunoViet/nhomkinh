import { useRouter } from 'next/router'
import Head from 'next/head'
import Layout from '@/components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import ProductCarousel from '@/components/ProductCarousel'
import { useEffect, useMemo } from 'react'

// Mock data - trong thực tế sẽ lấy từ API hoặc database
const products = [
  {
    id: 1,
    name: "Cửa Nhôm Xingfa",
    description: "Cửa nhôm Xingfa cao cấp, chống nước, chống ồn tốt. Phù hợp cho biệt thự, nhà phố hiện đại.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    details: "Cửa nhôm Xingfa là sản phẩm cao cấp với nhiều ưu điểm vượt trội. Khung nhôm được làm từ hợp kim nhôm cao cấp, có độ bền cao, chống ăn mòn tốt. Kính cường lực 2 lớp cách nhiệt, cách âm hiệu quả. Hệ thống khóa đa điểm an toàn, chống trộm. Phù hợp cho cửa chính, cửa sổ của biệt thự, nhà phố hiện đại. Bảo hành 5 năm, bảo trì trọn đời."
  },
  {
    id: 2,
    name: "Cửa Nhôm Việt Pháp",
    description: "Cửa nhôm Việt Pháp chất lượng, giá cả hợp lý. Thiết kế đẹp mắt, độ bền cao.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
    details: "Cửa nhôm Việt Pháp là sản phẩm được nhiều khách hàng tin tưởng. Với giá cả hợp lý nhưng vẫn đảm bảo chất lượng tốt. Khung nhôm chắc chắn, kính an toàn. Thiết kế đẹp mắt, phù hợp với nhiều phong cách kiến trúc. Dễ dàng vệ sinh và bảo trì. Phù hợp cho nhà ở, văn phòng, cửa hàng. Bảo hành 3 năm."
  },
  {
    id: 3,
    name: "Cửa Nhôm Kính Cường Lực",
    description: "Cửa nhôm kính cường lực an toàn, sang trọng. Phù hợp cho cửa chính, cửa sổ.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    details: "Cửa nhôm kính cường lực là sản phẩm an toàn và sang trọng. Kính cường lực có độ dày 8-12mm, chịu lực tốt, an toàn khi vỡ. Khung nhôm chắc chắn, chống gió bão hiệu quả. Thiết kế hiện đại, tăng tính thẩm mỹ cho công trình. Phù hợp cho cửa chính, cửa sổ lớn, cửa ban công. Bảo hành 5 năm."
  },
  {
    id: 4,
    name: "Vách Kính Cường Lực",
    description: "Vách kính cường lực hiện đại, tạo không gian mở. Phù hợp cho văn phòng, showroom.",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80",
    details: "Vách kính cường lực là giải pháp hiện đại cho không gian mở. Kính cường lực trong suốt, tạo cảm giác rộng rãi, thoáng đãng. Hệ thống khung nhôm chắc chắn, dễ dàng lắp đặt. Có thể kết hợp với cửa trượt, cửa mở quay. Phù hợp cho văn phòng, showroom, nhà ở hiện đại. Cách âm, cách nhiệt tốt. Bảo hành 5 năm."
  },
  {
    id: 5,
    name: "Cửa Lùa Nhôm Kính",
    description: "Cửa lùa nhôm kính tiết kiệm không gian, dễ sử dụng. Phù hợp cho phòng khách, ban công.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    details: "Cửa lùa nhôm kính là giải pháp tiết kiệm không gian hiệu quả. Cửa trượt mượt mà, dễ dàng mở đóng. Không chiếm diện tích khi mở, phù hợp cho không gian nhỏ. Kính cường lực an toàn, khung nhôm chắc chắn. Hệ thống ray trượt chất lượng cao, bền bỉ. Phù hợp cho phòng khách, ban công, cửa ra vào. Bảo hành 3 năm."
  },
  {
    id: 6,
    name: "Cửa Mở Quay Nhôm Kính",
    description: "Cửa mở quay nhôm kính truyền thống, bền bỉ. Phù hợp cho mọi không gian sống.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
    details: "Cửa mở quay nhôm kính là sản phẩm truyền thống, được nhiều khách hàng ưa chuộng. Thiết kế đơn giản, dễ sử dụng. Khung nhôm chắc chắn, kính an toàn. Bản lề chất lượng cao, mở đóng mượt mà. Phù hợp cho mọi không gian sống, từ nhà ở đến văn phòng. Giá cả hợp lý, độ bền cao. Bảo hành 3 năm."
  },
  {
    id: 7,
    name: "Cửa Nhôm Kính - Cửa 4 Cánh",
    description: "Cửa nhôm kính 4 cánh sang trọng, phù hợp cho cửa chính biệt thự, nhà phố.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    details: "Cửa nhôm kính 4 cánh là sản phẩm sang trọng, phù hợp cho cửa chính. Thiết kế 4 cánh tạo không gian mở rộng, thoáng đãng. Khung nhôm cao cấp, kính cường lực an toàn. Hệ thống khóa đa điểm, an toàn cao. Phù hợp cho cửa chính biệt thự, nhà phố, cửa hàng. Tăng tính thẩm mỹ và giá trị công trình. Bảo hành 5 năm."
  },
  {
    id: 8,
    name: "Cửa Nhôm Kính - Cửa 2 Cánh",
    description: "Cửa nhôm kính 2 cánh gọn gàng, tiết kiệm không gian. Phù hợp cho cửa phụ, cửa sổ lớn.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
    details: "Cửa nhôm kính 2 cánh là sản phẩm gọn gàng, tiết kiệm không gian. Thiết kế 2 cánh đơn giản, dễ sử dụng. Khung nhôm chắc chắn, kính an toàn. Phù hợp cho cửa phụ, cửa sổ lớn, cửa ban công. Giá cả hợp lý, dễ dàng bảo trì. Phù hợp với nhiều phong cách kiến trúc. Bảo hành 3 năm."
  },
  {
    id: 9,
    name: "Vách Kính - Vách Ngăn Phòng",
    description: "Vách kính ngăn phòng hiện đại, tạo không gian mở. Phù hợp cho văn phòng, nhà ở.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    details: "Vách kính ngăn phòng là giải pháp hiện đại cho không gian mở. Kính trong suốt tạo cảm giác rộng rãi, thoáng đãng. Có thể kết hợp với cửa trượt, cửa mở quay. Phù hợp cho văn phòng, nhà ở hiện đại. Cách âm, cách nhiệt tốt. Dễ dàng vệ sinh và bảo trì. Tăng tính thẩm mỹ cho không gian. Bảo hành 5 năm."
  },
  {
    id: 10,
    name: "Vách Kính - Vách Mặt Tiền",
    description: "Vách kính mặt tiền sang trọng, tăng tính thẩm mỹ. Phù hợp cho cửa hàng, showroom.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
    details: "Vách kính mặt tiền là giải pháp sang trọng cho cửa hàng, showroom. Kính cường lực trong suốt, tăng tính thẩm mỹ. Tạo không gian mở, thu hút khách hàng. Khung nhôm chắc chắn, chống gió bão tốt. Dễ dàng lắp đặt và bảo trì. Phù hợp cho cửa hàng, showroom, văn phòng. Tăng giá trị và tính chuyên nghiệp. Bảo hành 5 năm."
  },
  {
    id: 11,
    name: "Mái Kính - Mái Che Sân Vườn",
    description: "Mái kính che sân vườn, ban công. Chống nắng, chống mưa hiệu quả.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    details: "Mái kính che sân vườn là giải pháp hoàn hảo cho không gian ngoài trời. Kính cường lực chống nắng, chống mưa hiệu quả. Khung nhôm chắc chắn, chịu lực tốt. Tạo không gian sử dụng quanh năm. Phù hợp cho sân vườn, ban công, hiên nhà. Dễ dàng vệ sinh và bảo trì. Tăng giá trị sử dụng không gian. Bảo hành 5 năm."
  },
  {
    id: 12,
    name: "Mái Kính - Mái Che Cửa",
    description: "Mái kính che cửa chính, cửa sổ. Bảo vệ khỏi mưa nắng, tăng tuổi thọ cửa.",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80",
    details: "Mái kính che cửa là giải pháp bảo vệ hiệu quả cho cửa chính, cửa sổ. Chống mưa, chống nắng, bảo vệ cửa khỏi tác động thời tiết. Tăng tuổi thọ sử dụng của cửa. Khung nhôm chắc chắn, kính cường lực an toàn. Thiết kế đẹp mắt, phù hợp với kiến trúc. Dễ dàng lắp đặt và bảo trì. Phù hợp cho mọi loại công trình. Bảo hành 5 năm."
  }
]

export default function ProductDetail() {
  const router = useRouter()
  const { id } = router.query
  const productId = id ? parseInt(id as string) : null
  const product = productId ? products.find(p => p.id === productId) : null

  // Lọc sản phẩm tương tự (loại trừ sản phẩm hiện tại)
  const relatedProducts = useMemo(() => {
    if (!product) return []
    
    // Lấy các sản phẩm khác (loại trừ sản phẩm hiện tại)
    const filtered = products.filter(p => p.id !== product.id)
    
    // Nếu có thể, lọc theo danh mục tương tự (nếu có field category)
    // Ở đây tạm thời lấy ngẫu nhiên 6 sản phẩm khác
    return filtered.slice(0, 6)
  }, [product])


  if (!product) {
    return (
      <Layout>
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center">
              <h1>Sản phẩm không tồn tại</h1>
              <Link href="/" className="btn btn-primary mt-3">Về trang chủ</Link>
            </div>
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <>
      <Head>
        <title>{product.name} - Restoran</title>
        <meta name="description" content={product.description} />
      </Head>
      <Layout>
        {/* Hero Header Banner */}
        <div className="container-xxl position-relative p-0">
          <div 
            className="container-xxl py-5 bg-dark hero-header mb-5 product-detail-hero"
            style={{
              backgroundImage: `linear-gradient(rgba(15, 23, 43, .8), rgba(15, 23, 43, .8)), url(${product.image})`,
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}
          >
            <div className="container my-5 py-5">
              <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                  <h1 className="display-3 text-white animated slideInLeft mb-3 mb-md-4">{product.name}</h1>
                  <p className="text-white animated slideInLeft mb-3 mb-md-4 pb-2">{product.description}</p>
                  <Link href="/" className="btn btn-primary py-2 py-sm-3 px-4 px-sm-5 me-2 me-md-3 animated slideInLeft">
                    <i className="fa fa-arrow-left me-2"></i>Quay về trang chủ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Detail Content */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5">
              {/* Product Image */}
              <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.1s">
                <div className="product-detail-image-wrapper">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="product-detail-image"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
                <div className="product-detail-info">
                  <div className="product-detail-content">
                    <h3 className="mb-3">Chi tiết sản phẩm</h3>
                    <p className="text-muted">{product.details}</p>
                  </div>

                  <div className="mt-4">
                    <button className="btn btn-primary me-2">
                      <i className="fa fa-shopping-cart me-2"></i>Thêm vào giỏ
                    </button>
                    <Link href="/" className="btn btn-outline-primary">
                      <i className="fa fa-arrow-left me-2"></i>Quay lại
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Carousel */}
        {relatedProducts.length > 0 && (
          <ProductCarousel 
            title="Sản Phẩm Tương Tự"
            products={relatedProducts}
          />
        )}
      </Layout>
    </>
  )
}

