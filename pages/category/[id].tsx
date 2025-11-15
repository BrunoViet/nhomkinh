import { useRouter } from 'next/router'
import Head from 'next/head'
import Layout from '@/components/Layout'
import Link from 'next/link'
import ProductCarousel from '@/components/ProductCarousel'

// Mock data - trong thực tế sẽ lấy từ API hoặc database
const categories = [
  {
    id: 1,
    name: "Cửa Nhôm Kính",
    description: "Danh mục cửa nhôm kính với đa dạng mẫu mã, từ cửa 2 cánh, 4 cánh đến cửa lùa. Chất lượng cao, giá cả hợp lý.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    products: [
      {
        id: 7,
        name: "Cửa Nhôm Kính - Cửa 4 Cánh",
        description: "Cửa nhôm kính 4 cánh sang trọng, phù hợp cho cửa chính biệt thự, nhà phố.",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
      },
      {
        id: 8,
        name: "Cửa Nhôm Kính - Cửa 2 Cánh",
        description: "Cửa nhôm kính 2 cánh gọn gàng, tiết kiệm không gian. Phù hợp cho cửa phụ, cửa sổ lớn.",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80"
      },
      {
        id: 5,
        name: "Cửa Lùa Nhôm Kính",
        description: "Cửa lùa nhôm kính tiết kiệm không gian, dễ sử dụng. Phù hợp cho phòng khách, ban công.",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
      },
      {
        id: 6,
        name: "Cửa Mở Quay Nhôm Kính",
        description: "Cửa mở quay nhôm kính truyền thống, bền bỉ. Phù hợp cho mọi không gian sống.",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80"
      }
    ]
  },
  {
    id: 2,
    name: "Vách Kính",
    description: "Danh mục vách kính cường lực hiện đại, tạo không gian mở. Phù hợp cho văn phòng, showroom, nhà ở.",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80",
    products: [
      {
        id: 9,
        name: "Vách Kính - Vách Ngăn Phòng",
        description: "Vách kính ngăn phòng hiện đại, tạo không gian mở. Phù hợp cho văn phòng, nhà ở.",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
      },
      {
        id: 10,
        name: "Vách Kính - Vách Mặt Tiền",
        description: "Vách kính mặt tiền sang trọng, tăng tính thẩm mỹ. Phù hợp cho cửa hàng, showroom.",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80"
      },
      {
        id: 4,
        name: "Vách Kính Cường Lực",
        description: "Vách kính cường lực hiện đại, tạo không gian mở. Phù hợp cho văn phòng, showroom.",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80"
      }
    ]
  },
  {
    id: 3,
    name: "Mái Kính",
    description: "Danh mục mái kính che nắng, che mưa hiệu quả. Phù hợp cho sân vườn, ban công, hiên nhà.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
    products: [
      {
        id: 11,
        name: "Mái Kính - Mái Che Sân Vườn",
        description: "Mái kính che sân vườn, ban công. Chống nắng, chống mưa hiệu quả.",
        image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
      },
      {
        id: 12,
        name: "Mái Kính - Mái Che Cửa",
        description: "Mái kính che cửa chính, cửa sổ. Bảo vệ khỏi mưa nắng, tăng tuổi thọ cửa.",
        image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80"
      }
    ]
  }
]

export default function CategoryDetail() {
  const router = useRouter()
  const { id } = router.query
  const categoryId = id ? parseInt(id as string) : null
  const category = categoryId ? categories.find(c => c.id === categoryId) : null

  if (!category) {
    return (
      <Layout>
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center">
              <h1>Danh mục không tồn tại</h1>
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
        <title>{category.name} - Restoran</title>
        <meta name="description" content={category.description} />
      </Head>
      <Layout>
        {/* Hero Header Banner */}
        <div className="container-xxl position-relative p-0">
          <div 
            className="container-xxl py-5 bg-dark hero-header mb-5 product-detail-hero"
            style={{
              backgroundImage: `linear-gradient(rgba(15, 23, 43, .8), rgba(15, 23, 43, .8)), url(${category.image})`,
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}
          >
            <div className="container my-5 py-5">
              <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                  <h1 className="display-3 text-white animated slideInLeft mb-3 mb-md-4">{category.name}</h1>
                  <p className="text-white animated slideInLeft mb-3 mb-md-4 pb-2">{category.description}</p>
                  <Link href="/" className="btn btn-primary py-2 py-sm-3 px-4 px-sm-5 me-2 me-md-3 animated slideInLeft">
                    <i className="fa fa-arrow-left me-2"></i>Quay về trang chủ
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Products */}
        {category.products && category.products.length > 0 && (
          <ProductCarousel 
            title={`Sản Phẩm ${category.name}`}
            products={category.products}
          />
        )}
      </Layout>
    </>
  )
}

