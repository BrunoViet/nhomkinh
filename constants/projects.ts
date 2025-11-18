export interface Project {
  id: number
  title: string
  location: string
  image: string
  description: string
  category: 'residential' | 'office' | 'commercial'
  area?: string
  year?: string
  features?: string[]
  content?: string
  images?: string[]
  client?: string
  duration?: string
}

export const featuredProject: Project = {
  id: 1,
  title: 'Biệt Thự Cửa Nhôm Xingfa Cao Cấp - The Grand Villa',
  location: 'Khu đô thị Vinhomes Grand Park, Quận 9, TP.HCM',
  image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
  description: 'Dự án thi công cửa nhôm Xingfa hệ 93 cho biệt thự 3 tầng với diện tích 500m². Sử dụng kính cường lực Low-E 2 lớp cách nhiệt, hệ thống khóa đa điểm châu Âu, thiết kế hiện đại theo phong cách tối giản. Thời gian thi công: 45 ngày.',
  category: 'residential',
  area: '500m²',
  year: '2024',
  features: ['Cửa nhôm Xingfa hệ 93', 'Kính Low-E 2 lớp', 'Khóa đa điểm châu Âu', 'Thiết kế tối giản'],
  client: 'Chủ đầu tư The Grand Villa',
  duration: '45 ngày',
  images: [
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&q=80',
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=80',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80'
  ],
  content: `
    <p>Dự án thi công cửa nhôm Xingfa hệ 93 cho biệt thự 3 tầng tại khu đô thị Vinhomes Grand Park là một trong những công trình tiêu biểu của chúng tôi trong năm 2024. Với diện tích 500m², dự án này thể hiện sự kết hợp hoàn hảo giữa chất lượng, thẩm mỹ và công năng sử dụng.</p>
    
    <h3>Thông Tin Dự Án</h3>
    <p>Biệt thự được thiết kế theo phong cách hiện đại, tối giản với hệ thống cửa nhôm Xingfa cao cấp. Toàn bộ công trình sử dụng kính cường lực Low-E 2 lớp cách nhiệt, đảm bảo tiết kiệm năng lượng và tạo không gian sống thoải mái.</p>
    
    <h3>Giải Pháp Kỹ Thuật</h3>
    <p>Hệ thống cửa nhôm Xingfa hệ 93 được lựa chọn cho dự án này với những ưu điểm vượt trội:</p>
    <ul>
      <li>Khung nhôm cao cấp, chống ăn mòn, độ bền cao</li>
      <li>Kính Low-E 2 lớp cách nhiệt, cách âm hiệu quả</li>
      <li>Hệ thống khóa đa điểm châu Âu, đảm bảo an toàn</li>
      <li>Thiết kế tối giản, sang trọng, phù hợp với kiến trúc hiện đại</li>
    </ul>
    
    <h3>Quy Trình Thi Công</h3>
    <p>Dự án được thi công trong 45 ngày với quy trình chuyên nghiệp:</p>
    <ul>
      <li>Khảo sát và đo đạc chính xác</li>
      <li>Sản xuất theo đúng thiết kế</li>
      <li>Lắp đặt bởi đội ngũ thợ lành nghề</li>
      <li>Kiểm tra và nghiệm thu chất lượng</li>
    </ul>
    
    <h3>Kết Quả</h3>
    <p>Sau khi hoàn thành, dự án nhận được sự đánh giá cao từ chủ đầu tư. Hệ thống cửa nhôm kính không chỉ đáp ứng yêu cầu về thẩm mỹ mà còn đảm bảo chất lượng, độ bền và tiết kiệm năng lượng.</p>
  `
}

export const sideProjects: Project[] = [
  {
    id: 2,
    title: 'Vách Kính Văn Phòng Cao Cấp - Tech Tower',
    location: 'Tòa nhà Tech Tower, 123 Nguyễn Huệ, Quận 1, TP.HCM',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400&q=80',
    description: 'Thiết kế và thi công hệ thống vách kính cường lực cho 15 tầng văn phòng với diện tích 2,500m². Sử dụng kính 12mm, khung nhôm hệ 100, hệ thống cửa trượt tự động.',
    category: 'office',
    area: '2,500m²',
    year: '2024',
    client: 'Công ty Tech Tower',
    duration: '60 ngày',
    features: ['Vách kính cường lực 12mm', 'Khung nhôm hệ 100', 'Cửa trượt tự động'],
    content: `<p>Dự án thi công hệ thống vách kính cường lực cho tòa nhà văn phòng Tech Tower với quy mô 15 tầng, diện tích 2,500m². Hệ thống vách kính hiện đại tạo không gian làm việc thông thoáng, chuyên nghiệp.</p>`
  },
  {
    id: 3,
    title: 'Showroom Ô Tô Cao Cấp - Luxury Auto',
    location: 'Showroom Luxury Auto, 456 Lê Lợi, Quận 3, TP.HCM',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&q=80',
    description: 'Thiết kế cửa nhôm kính 4 cánh và vách kính mặt tiền cho showroom ô tô cao cấp. Sử dụng kính trong suốt 15mm, hệ thống cửa tự động, đèn LED tích hợp.',
    category: 'commercial',
    area: '800m²',
    year: '2024',
    client: 'Luxury Auto',
    duration: '30 ngày',
    features: ['Cửa nhôm kính 4 cánh', 'Kính trong suốt 15mm', 'Cửa tự động', 'Đèn LED tích hợp'],
    content: `<p>Dự án thiết kế và thi công cửa nhôm kính 4 cánh cùng vách kính mặt tiền cho showroom ô tô cao cấp. Hệ thống cửa tự động và đèn LED tích hợp tạo điểm nhấn ấn tượng, thu hút khách hàng.</p>`
  },
  {
    id: 4,
    title: 'Mái Kính Sân Vườn - Sky Garden Villa',
    location: 'Biệt thự Sky Garden, Khu đô thị Sala, Quận 2, TP.HCM',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80',
    description: 'Thi công mái kính polycarbonate cho sân vườn 150m². Hệ thống mái kính chống tia UV, cách nhiệt, chống ồn, thiết kế hiện đại với khung nhôm chịu lực.',
    category: 'residential',
    area: '150m²',
    year: '2024',
    client: 'Chủ đầu tư Sky Garden',
    duration: '20 ngày',
    features: ['Mái kính polycarbonate', 'Chống tia UV', 'Cách nhiệt', 'Khung nhôm chịu lực'],
    content: `<p>Dự án thi công mái kính polycarbonate cho sân vườn biệt thự, tạo không gian thư giãn ngoài trời thoáng đãng. Hệ thống mái kính chống tia UV, cách nhiệt hiệu quả, phù hợp với khí hậu nhiệt đới.</p>`
  },
  {
    id: 5,
    title: 'Vách Kính Mặt Tiền Thương Mại - Fashion Mall',
    location: 'Trung tâm thương mại Fashion Mall, 789 Nguyễn Trãi, Quận 10, TP.HCM',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80',
    description: 'Thiết kế vách kính mặt tiền cho trung tâm thương mại với diện tích 1,200m². Sử dụng kính cường lực 15mm, khung nhôm hệ 120, hệ thống đèn LED trang trí.',
    category: 'commercial',
    area: '1,200m²',
    year: '2023',
    client: 'Fashion Mall',
    duration: '50 ngày',
    features: ['Vách kính cường lực 15mm', 'Khung nhôm hệ 120', 'Đèn LED trang trí'],
    content: `<p>Dự án thiết kế và thi công vách kính mặt tiền cho trung tâm thương mại Fashion Mall. Hệ thống vách kính lớn với đèn LED trang trí tạo điểm nhấn kiến trúc ấn tượng, thu hút khách hàng.</p>`
  }
]

export const gridProjects: Project[] = [
  {
    id: 6,
    title: 'Cửa Nhôm Kính 4 Cánh Biệt Thự - Royal Estate',
    location: 'Khu đô thị Royal Estate, Quận 7, TP.HCM',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=600&q=80',
    description: 'Thiết kế cửa nhôm kính 4 cánh sang trọng cho biệt thự với hệ thống khóa điện tử thông minh, kính Low-E cách nhiệt, thiết kế theo phong cách cổ điển hiện đại.',
    category: 'residential',
    area: '350m²',
    year: '2024',
    client: 'Chủ đầu tư Royal Estate',
    duration: '35 ngày',
    features: ['Cửa nhôm kính 4 cánh', 'Khóa điện tử thông minh', 'Kính Low-E cách nhiệt'],
    content: `<p>Dự án thiết kế và thi công cửa nhôm kính 4 cánh sang trọng cho biệt thự. Hệ thống khóa điện tử thông minh và kính Low-E cách nhiệt tạo không gian sống cao cấp, hiện đại.</p>`
  },
  {
    id: 7,
    title: 'Vách Kính Ngăn Phòng Văn Phòng - Corporate Center',
    location: 'Tòa nhà Corporate Center, 321 Điện Biên Phủ, Quận Bình Thạnh, TP.HCM',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80',
    description: 'Giải pháp vách kính ngăn phòng hiện đại cho văn phòng 20 tầng với diện tích 3,000m². Sử dụng kính mờ thông minh, hệ thống điều khiển tự động, cách âm tốt.',
    category: 'office',
    area: '3,000m²',
    year: '2024',
    client: 'Corporate Center',
    duration: '70 ngày',
    features: ['Kính mờ thông minh', 'Điều khiển tự động', 'Cách âm tốt'],
    content: `<p>Dự án thi công hệ thống vách kính ngăn phòng hiện đại cho tòa nhà văn phòng 20 tầng. Kính mờ thông minh với hệ thống điều khiển tự động tạo không gian làm việc linh hoạt, chuyên nghiệp.</p>`
  },
  {
    id: 8,
    title: 'Cửa Lùa Ban Công Nhà Phố - Modern Townhouse',
    location: 'Khu đô thị Modern Townhouse, Quận 2, TP.HCM',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80',
    description: 'Thi công cửa lùa ban công cho nhà phố hiện đại với hệ thống ray trượt êm ái, kính cường lực 10mm, khung nhôm chống gỉ, thiết kế tối giản phù hợp không gian nhỏ.',
    category: 'residential',
    area: '120m²',
    year: '2024',
    client: 'Chủ đầu tư Modern Townhouse',
    duration: '15 ngày',
    features: ['Cửa lùa', 'Ray trượt êm ái', 'Kính cường lực 10mm', 'Khung nhôm chống gỉ'],
    content: `<p>Dự án thi công cửa lùa ban công cho nhà phố hiện đại. Hệ thống ray trượt êm ái và kính cường lực tạo không gian mở, tối ưu diện tích cho không gian nhỏ.</p>`
  }
]

// Hàm helper để lấy tất cả dự án
export function getAllProjects(): Project[] {
  return [featuredProject, ...sideProjects, ...gridProjects]
}

// Hàm helper để lấy dự án theo ID
export function getProjectById(id: number): Project | undefined {
  return getAllProjects().find(project => project.id === id)
}

