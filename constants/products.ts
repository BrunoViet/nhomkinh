export type SupportedLanguage = 'vi' | 'en'

export interface LocalizedText {
  vi: string
  en: string
}

export interface ProductCategory {
  id: number
  slug: string
  name: LocalizedText
  description: LocalizedText
  heroImage: string
  highlights?: LocalizedText[]
}

export interface Product {
  id: number
  categoryId: number
  name: LocalizedText
  description: LocalizedText
  details: LocalizedText
  image: string
  gallery?: string[]
}

export const productCategories: ProductCategory[] = [
  {
    id: 1,
    slug: 'aluminum-doors',
    name: {
      vi: 'Cửa Nhôm Kính',
      en: 'Aluminum Glass Doors'
    },
    description: {
      vi: 'Hệ cửa nhôm kính cao cấp với đa dạng thiết kế từ cửa mở quay, cửa lùa đến cửa xếp trượt, phù hợp cho mọi không gian sống.',
      en: 'Premium aluminum-glass door systems ranging from swing and sliding doors to folding panels, suitable for every living space.'
    },
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    highlights: [
      {
        vi: 'Khóa đa điểm an toàn tuyệt đối',
        en: 'Secure multi-point locking system'
      },
      {
        vi: 'Kính cường lực cách âm, cách nhiệt',
        en: 'Tempered glass for sound and heat insulation'
      },
      {
        vi: 'Thiết kế theo yêu cầu',
        en: 'Fully customized design'
      }
    ]
  },
  {
    id: 2,
    slug: 'glass-partitions',
    name: {
      vi: 'Vách Kính',
      en: 'Glass Partitions'
    },
    description: {
      vi: 'Giải pháp vách kính hiện đại giúp mở rộng tầm nhìn, tối ưu ánh sáng và tạo không gian làm việc chuyên nghiệp.',
      en: 'Modern glass partition solutions that expand sightlines, optimize natural light and deliver professional workspaces.'
    },
    heroImage: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&q=80',
    highlights: [
      {
        vi: 'Tối ưu ánh sáng tự nhiên',
        en: 'Maximize natural daylight'
      },
      {
        vi: 'Cách âm hiệu quả cho văn phòng',
        en: 'Effective acoustic control for offices'
      },
      {
        vi: 'Thi công nhanh chóng, sạch sẽ',
        en: 'Fast and clean installation'
      }
    ]
  },
  {
    id: 3,
    slug: 'glass-roofs',
    name: {
      vi: 'Mái Kính',
      en: 'Glass Canopies'
    },
    description: {
      vi: 'Mái kính lấy sáng cho sân vườn, ban công và mặt tiền, bảo vệ khỏi mưa nắng mà vẫn giữ được sự thông thoáng.',
      en: 'Glass canopies for patios, balconies and facades that protect from weather while keeping the space airy.'
    },
    heroImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
    highlights: [
      {
        vi: 'Kính an toàn hai lớp',
        en: 'Double-layer safety glass'
      },
      {
        vi: 'Khung nhôm chịu lực cao',
        en: 'High-load aluminum frame'
      },
      {
        vi: 'Bề mặt chống UV',
        en: 'UV protective surface'
      }
    ]
  }
]

export const products: Product[] = [
  {
    id: 1,
    categoryId: 1,
    name: {
      vi: 'Cửa Nhôm Xingfa',
      en: 'Xingfa Aluminum Door'
    },
    description: {
      vi: 'Cửa nhôm Xingfa cao cấp, chống nước, chống ồn tốt. Phù hợp cho biệt thự, nhà phố hiện đại.',
      en: 'Premium Xingfa aluminum door with excellent insulation. Ideal for modern villas and townhouses.'
    },
    details: {
      vi: 'Khung nhôm hợp kim dày 2.0mm cùng kính cường lực Low-E giúp cửa Xingfa giữ nhiệt, cách âm vượt trội. Hệ khóa đa điểm an toàn tuyệt đối, phụ kiện đồng bộ chính hãng. Hỗ trợ nhiều màu anod và vân gỗ theo thiết kế.',
      en: '2.0mm thick alloy frame combined with Low-E tempered glass delivers outstanding insulation. Multi-point locking ensures security while genuine accessories and custom anodized colors complete the modern look.'
    },
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80'
  },
  {
    id: 2,
    categoryId: 1,
    name: {
      vi: 'Cửa Nhôm Việt Pháp',
      en: 'Vietnam-France Aluminum Door'
    },
    description: {
      vi: 'Giải pháp tiết kiệm với khung nhôm dày 1.4mm, bền màu và dễ bảo trì.',
      en: 'Cost-effective solution with 1.4mm frames, long-lasting color and easy maintenance.'
    },
    details: {
      vi: 'Cửa Việt Pháp sở hữu thiết kế thanh thoát, phù hợp nhiều phong cách kiến trúc. Khung nhôm định hình chắc chắn, gioăng EPDM kín khít, phụ kiện đồng bộ. Lý tưởng cho nhà phố, văn phòng vừa và nhỏ.',
      en: 'Slim profile matches most architectural styles. Reinforced frames with tight EPDM gaskets and synchronized hardware make it ideal for townhouses and SME offices.'
    },
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80'
  },
  {
    id: 3,
    categoryId: 1,
    name: {
      vi: 'Cửa Nhôm Kính Cường Lực',
      en: 'Tempered Glass Aluminum Door'
    },
    description: {
      vi: 'Thiết kế tối giản, kính trong suốt tạo cảm giác sang trọng cho cửa chính.',
      en: 'Minimalist frame with clear tempered glass delivering a classy entrance.'
    },
    details: {
      vi: 'Kính cường lực 10 - 12mm chịu lực gấp 5 lần kính thường, kết hợp keo chống rung giúp đóng mở êm. Có thể tùy chọn bản lề thủy lực hoặc bản lề mở quay truyền thống.',
      en: '10-12mm tempered glass withstands 5x the force of regular panes while anti-vibration sealant ensures smooth operation. Compatible with both hydraulic and traditional hinges.'
    },
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80'
  },
  {
    id: 4,
    categoryId: 2,
    name: {
      vi: 'Vách Kính Cường Lực',
      en: 'Tempered Glass Partition'
    },
    description: {
      vi: 'Vách kính full-height cho văn phòng mở, tối ưu ánh sáng và tầm nhìn.',
      en: 'Floor-to-ceiling partitions for open offices, maximizing light and sightlines.'
    },
    details: {
      vi: 'Khung nhôm hệ 100 kết hợp kính cường lực 12mm an toàn. Giải pháp lý tưởng cho phòng họp, showroom và không gian làm việc linh hoạt.',
      en: '100-series aluminum frames paired with 12mm tempered glass ensure safety in meeting rooms, showrooms and flexible work areas.'
    },
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&q=80'
  },
  {
    id: 5,
    categoryId: 1,
    name: {
      vi: 'Cửa Lùa Nhôm Kính',
      en: 'Sliding Aluminum Door'
    },
    description: {
      vi: 'Tiết kiệm diện tích với hệ ray trượt êm, phù hợp căn hộ và cửa ban công.',
      en: 'Space-saving sliding system with smooth rails for apartments and balconies.'
    },
    details: {
      vi: 'Ray trượt hợp kim chống mài mòn, bánh xe thép không gỉ giúp cửa vận hành nhẹ nhàng. Gioăng chống bụi kép giữ không gian luôn sạch và kín khí.',
      en: 'Wear-resistant alloy rails and stainless steel rollers keep the door gliding effortlessly while double dust seals maintain a clean, sealed interior.'
    },
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80'
  },
  {
    id: 6,
    categoryId: 1,
    name: {
      vi: 'Cửa Mở Quay Nhôm Kính',
      en: 'Hinged Aluminum Door'
    },
    description: {
      vi: 'Kiểu dáng truyền thống với phụ kiện hiện đại, bền bỉ theo thời gian.',
      en: 'Classic hinged design upgraded with modern hardware for long-lasting performance.'
    },
    details: {
      vi: 'Ứng dụng linh hoạt cho cả cửa phòng và cửa chính. Bản lề hợp kim chịu lực cao, khóa đa điểm đảm bảo an toàn tuyệt đối.',
      en: 'Versatile for interior and exterior use. Heavy-duty hinges and multi-point locks guarantee absolute security.'
    },
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80'
  },
  {
    id: 7,
    categoryId: 1,
    name: {
      vi: 'Cửa Nhôm Kính 4 Cánh',
      en: 'Four-Panel Aluminum Door'
    },
    description: {
      vi: 'Mở rộng tối đa không gian, phù hợp cửa chính biệt thự sang trọng.',
      en: 'Expands the opening width; perfect for luxury villa entrances.'
    },
    details: {
      vi: 'Hệ cửa xếp trượt linh hoạt, có thể mở toàn phần. Khung nhôm dày 2.2mm, kính an toàn hai lớp và khóa điện tử tùy chọn.',
      en: 'Bi-fold system allows fully-open configuration. 2.2mm frames with laminated safety glass and optional smart locks.'
    },
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80'
  },
  {
    id: 8,
    categoryId: 1,
    name: {
      vi: 'Cửa Nhôm Kính 2 Cánh',
      en: 'Double Aluminum Door'
    },
    description: {
      vi: 'Giải pháp gọn gàng cho cửa phụ, cửa sổ lớn và lối thông tầng.',
      en: 'Compact solution for side entrances, picture windows and mezzanine access.'
    },
    details: {
      vi: 'Khung nhôm định hình cùng kính cường lực 8mm. Dễ dàng kết hợp nan trang trí, mang lại vẻ hiện đại cho ngôi nhà.',
      en: 'Formed aluminum with 8mm tempered glass. Accepts decorative mullions to refresh any facade.'
    },
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80'
  },
  {
    id: 9,
    categoryId: 2,
    name: {
      vi: 'Vách Kính Ngăn Phòng',
      en: 'Glass Room Divider'
    },
    description: {
      vi: 'Tạo không gian mở linh hoạt với kính trong suốt và khung tối giản.',
      en: 'Create flexible open zones with clear glass and minimal frames.'
    },
    details: {
      vi: 'Ứng dụng cho căn hộ, studio hoặc văn phòng nhỏ. Kết hợp rèm kéo hoặc kính mờ điện tử để đảm bảo riêng tư.',
      en: 'Ideal for apartments, studios or compact offices. Pair with blinds or switchable glass for privacy on demand.'
    },
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80'
  },
  {
    id: 10,
    categoryId: 2,
    name: {
      vi: 'Vách Kính Mặt Tiền',
      en: 'Storefront Glass Wall'
    },
    description: {
      vi: 'Tăng tính thẩm mỹ cho showroom và cửa hàng với mặt kính xuyên suốt.',
      en: 'Adds premium aesthetics to showrooms and retail spaces with full-height glazing.'
    },
    details: {
      vi: 'Khung nhôm hệ 120 chịu lực gió mạnh, kính an toàn 15mm cùng gioăng kép chống nước tuyệt đối.',
      en: '120-series structural frames resist high winds, 15mm safety glass and dual seals keep water out.'
    },
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&q=80'
  },
  {
    id: 11,
    categoryId: 3,
    name: {
      vi: 'Mái Kính Sân Vườn',
      en: 'Garden Glass Canopy'
    },
    description: {
      vi: 'Che mưa nắng cho sân vườn, hiên nhà mà vẫn đảm bảo ánh sáng tự nhiên.',
      en: 'Protects patios and porches from weather while keeping natural light.'
    },
    details: {
      vi: 'Khung thép mạ kẽm phủ sơn tĩnh điện, kính cường lực 10mm hoặc polycarbonate cao cấp. Thiết kế cong nhẹ giúp thoát nước nhanh.',
      en: 'Powder-coated galvanized frame with 10mm tempered glass or premium polycarbonate. Gentle curvature allows fast water drainage.'
    },
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80'
  },
  {
    id: 12,
    categoryId: 3,
    name: {
      vi: 'Mái Kính Mặt Tiền',
      en: 'Facade Glass Awning'
    },
    description: {
      vi: 'Bảo vệ cửa chính khỏi mưa tạt, tăng điểm nhấn sang trọng cho mặt tiền.',
      en: 'Shields the main entrance from rain while elevating the facade.'
    },
    details: {
      vi: 'Sử dụng tay đỡ inox 304, kính an toàn hai lớp liên kết keo UV. Phù hợp cho nhà phố, khách sạn boutique và cửa hàng.',
      en: 'Features stainless steel brackets with laminated glass bonded by UV adhesive. Ideal for townhouses, boutique hotels and shops.'
    },
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&q=80'
  }
]

export const getProductById = (id: number) => products.find(product => product.id === id)
export const getCategoryById = (id: number) => productCategories.find(category => category.id === id)
export const getProductsByCategory = (categoryId: number) =>
  products.filter(product => product.categoryId === categoryId)

