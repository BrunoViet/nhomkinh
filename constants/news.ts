export interface News {
  id: number
  title: string
  excerpt: string
  image: string
  date: string
  content: string
  category?: string
  author?: string
  tags?: string[]
}

export const featuredNews: News = {
  id: 1,
  title: "Xu Hướng Thiết Kế Cửa Nhôm Kính Hiện Đại Năm 2024",
  excerpt: "Khám phá những xu hướng thiết kế cửa nhôm kính mới nhất, từ cửa kính cường lực đến hệ thống cửa thông minh tự động...",
  image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
  date: "15 Tháng 12, 2024",
  category: "Xu Hướng",
  author: "Admin",
  tags: ["Thiết kế", "Cửa nhôm kính", "Xu hướng"],
  content: `
    <p>Năm 2024 đánh dấu sự phát triển mạnh mẽ của ngành nhôm kính với nhiều xu hướng thiết kế mới, hiện đại và thông minh. Các nhà thiết kế và kiến trúc sư đang hướng đến những giải pháp tối ưu, kết hợp giữa tính thẩm mỹ và công năng sử dụng.</p>
    
    <h3>1. Cửa Kính Cường Lực Không Khung</h3>
    <p>Xu hướng cửa kính cường lực không khung đang được ưa chuộng trong các công trình hiện đại. Loại cửa này tạo cảm giác không gian mở, tối đa hóa ánh sáng tự nhiên và tầm nhìn. Kính cường lực có độ dày từ 10-15mm, đảm bảo an toàn và độ bền cao.</p>
    
    <h3>2. Hệ Thống Cửa Thông Minh Tự Động</h3>
    <p>Công nghệ cửa tự động đang trở thành tiêu chuẩn trong các công trình cao cấp. Hệ thống cửa thông minh tích hợp cảm biến, điều khiển từ xa và kết nối với hệ thống nhà thông minh (smart home). Người dùng có thể điều khiển cửa qua ứng dụng điện thoại, giọng nói hoặc tự động mở/đóng dựa trên cảm biến chuyển động.</p>
    
    <h3>3. Kính Low-E Cách Nhiệt</h3>
    <p>Kính Low-E (Low Emissivity) là giải pháp cách nhiệt hiệu quả, giúp giảm chi phí năng lượng cho điều hòa. Loại kính này có lớp phủ đặc biệt phản xạ nhiệt, giữ nhiệt độ trong nhà ổn định, đặc biệt phù hợp với khí hậu nhiệt đới như Việt Nam.</p>
    
    <h3>4. Thiết Kế Tối Giản (Minimalist)</h3>
    <p>Phong cách thiết kế tối giản tiếp tục thống trị trong năm 2024. Cửa nhôm kính với khung mỏng, đường nét đơn giản, màu sắc trung tính tạo không gian thanh lịch và hiện đại. Xu hướng này phù hợp với cả biệt thự, nhà phố và văn phòng.</p>
    
    <h3>5. Kết Hợp Vật Liệu Tự Nhiên</h3>
    <p>Việc kết hợp kính với các vật liệu tự nhiên như gỗ, đá, tre đang trở thành xu hướng. Sự kết hợp này tạo điểm nhấn thẩm mỹ, mang lại cảm giác gần gũi với thiên nhiên trong không gian hiện đại.</p>
    
    <p>Với những xu hướng này, ngành nhôm kính đang hướng đến những giải pháp bền vững, thông minh và thân thiện với môi trường, đáp ứng nhu cầu ngày càng cao của khách hàng.</p>
  `
}

export const sideNews: News[] = [
  {
    id: 2,
    title: "Cách Chọn Vách Kính Phù Hợp Cho Văn Phòng",
    excerpt: "Hướng dẫn chi tiết về cách lựa chọn vách kính...",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400&q=80",
    date: "14 Tháng 12, 2024",
    category: "Tư Vấn",
    author: "Chuyên gia",
    tags: ["Vách kính", "Văn phòng"],
    content: `
      <p>Vách kính là giải pháp hiện đại cho không gian văn phòng, tạo sự thông thoáng và chuyên nghiệp. Tuy nhiên, việc lựa chọn vách kính phù hợp cần dựa trên nhiều yếu tố.</p>
      
      <h3>1. Xác Định Mục Đích Sử Dụng</h3>
      <p>Trước tiên, bạn cần xác định mục đích sử dụng vách kính: ngăn phòng, cách âm, trang trí hay kết hợp. Mỗi mục đích sẽ yêu cầu loại kính và hệ thống khung khác nhau.</p>
      
      <h3>2. Lựa Chọn Loại Kính</h3>
      <p><strong>Kính trong suốt:</strong> Tạo không gian mở, phù hợp cho văn phòng cần sự thông thoáng.</p>
      <p><strong>Kính mờ:</strong> Đảm bảo sự riêng tư nhưng vẫn giữ ánh sáng tự nhiên.</p>
      <p><strong>Kính cách âm:</strong> Sử dụng kính 2 lớp hoặc 3 lớp với khoảng không khí ở giữa, phù hợp cho phòng họp, phòng làm việc riêng.</p>
      
      <h3>3. Chọn Hệ Thống Khung</h3>
      <p>Khung nhôm là lựa chọn phổ biến nhất với ưu điểm nhẹ, bền, dễ lắp đặt. Hệ thống khung mỏng (slim frame) tạo vẻ hiện đại, trong khi khung dày hơn đảm bảo độ chắc chắn và cách âm tốt hơn.</p>
      
      <h3>4. Xem Xét Yếu Tố An Toàn</h3>
      <p>Kính cường lực là lựa chọn an toàn nhất cho văn phòng. Khi vỡ, kính cường lực sẽ vỡ thành các mảnh nhỏ, không sắc nhọn, giảm nguy cơ thương tích.</p>
      
      <h3>5. Ngân Sách và Bảo Trì</h3>
      <p>Xác định ngân sách phù hợp và cân nhắc chi phí bảo trì lâu dài. Kính dễ vệ sinh, nhưng cần lựa chọn hệ thống khung chất lượng để tránh hỏng hóc.</p>
      
      <p>Với những lưu ý trên, bạn sẽ có thể lựa chọn được hệ thống vách kính phù hợp nhất cho văn phòng của mình.</p>
    `
  },
  {
    id: 3,
    title: "Bảo Trì Cửa Nhôm Kính Đúng Cách",
    excerpt: "Những lưu ý quan trọng khi bảo trì cửa nhôm kính...",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=400&q=80",
    date: "13 Tháng 12, 2024",
    category: "Bảo Trì",
    author: "Kỹ thuật viên",
    tags: ["Bảo trì", "Cửa nhôm kính"],
    content: `
      <p>Bảo trì định kỳ là yếu tố quan trọng để đảm bảo cửa nhôm kính hoạt động tốt và có tuổi thọ lâu dài. Dưới đây là hướng dẫn chi tiết về cách bảo trì cửa nhôm kính đúng cách.</p>
      
      <h3>1. Vệ Sinh Kính Thường Xuyên</h3>
      <p>Vệ sinh kính ít nhất 2-3 lần/tháng bằng nước sạch và khăn mềm. Tránh sử dụng các chất tẩy rửa có tính axit mạnh hoặc các vật liệu cứng có thể làm xước kính. Sử dụng dung dịch vệ sinh kính chuyên dụng để đạt hiệu quả tốt nhất.</p>
      
      <h3>2. Bảo Dưỡng Khung Nhôm</h3>
      <p>Khung nhôm cần được lau chùi bằng khăn ẩm và xà phòng nhẹ. Kiểm tra và làm sạch các rãnh thoát nước để tránh tắc nghẽn. Đối với khung nhôm ngoài trời, nên kiểm tra định kỳ để phát hiện các dấu hiệu ăn mòn sớm.</p>
      
      <h3>3. Kiểm Tra và Bôi Trơn Phụ Kiện</h3>
      <p>Các phụ kiện như bản lề, khóa, tay nắm cần được kiểm tra và bôi trơn định kỳ 3-6 tháng/lần. Sử dụng dầu bôi trơn chuyên dụng để đảm bảo cửa mở/đóng mượt mà. Nếu phát hiện phụ kiện bị hỏng, cần thay thế ngay.</p>
      
      <h3>4. Kiểm Tra Độ Kín Khít</h3>
      <p>Kiểm tra gioăng cao su xung quanh cửa, đảm bảo chúng còn đàn hồi và không bị nứt. Gioăng bị hỏng sẽ làm giảm khả năng cách âm, cách nhiệt và chống nước. Thay thế gioăng mới nếu cần thiết.</p>
      
      <h3>5. Điều Chỉnh Cửa Nếu Cần</h3>
      <p>Nếu cửa bị lệch hoặc khó mở/đóng, cần điều chỉnh lại các vít điều chỉnh trên bản lề. Đối với cửa lùa, kiểm tra và điều chỉnh ray trượt để đảm bảo cửa di chuyển mượt mà.</p>
      
      <h3>6. Bảo Trì Định Kỳ Chuyên Nghiệp</h3>
      <p>Nên thuê dịch vụ bảo trì chuyên nghiệp 1-2 lần/năm để kiểm tra toàn diện, phát hiện và xử lý các vấn đề tiềm ẩn. Điều này giúp kéo dài tuổi thọ cửa và tránh các chi phí sửa chữa lớn sau này.</p>
      
      <p>Với việc bảo trì đúng cách, cửa nhôm kính của bạn sẽ luôn hoạt động tốt và có tuổi thọ lâu dài.</p>
    `
  },
  {
    id: 4,
    title: "Ưu Điểm Của Mái Kính Polycarbonate",
    excerpt: "Tìm hiểu về vật liệu mái kính polycarbonate...",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80",
    date: "12 Tháng 12, 2024",
    category: "Vật Liệu",
    author: "Chuyên gia",
    tags: ["Mái kính", "Polycarbonate"],
    content: `
      <p>Mái kính polycarbonate là giải pháp hiện đại cho các công trình cần che nắng, che mưa nhưng vẫn đảm bảo ánh sáng tự nhiên. Vật liệu này có nhiều ưu điểm vượt trội so với các loại mái che truyền thống.</p>
      
      <h3>1. Độ Bền Cao</h3>
      <p>Polycarbonate có độ bền gấp 250 lần so với kính thông thường và gấp 30 lần so với acrylic. Vật liệu này chịu được tác động mạnh, không dễ vỡ, đặc biệt phù hợp cho các khu vực có gió bão.</p>
      
      <h3>2. Chống Tia UV</h3>
      <p>Mái kính polycarbonate có lớp phủ chống tia UV, bảo vệ không gian bên dưới khỏi tác hại của ánh nắng mặt trời. Đồng thời, vật liệu này vẫn cho phép ánh sáng tự nhiên đi qua, tạo không gian sáng sủa.</p>
      
      <h3>3. Cách Nhiệt Tốt</h3>
      <p>Với cấu trúc rỗng (honeycomb), mái kính polycarbonate có khả năng cách nhiệt tốt, giúp giảm nhiệt độ trong nhà, tiết kiệm chi phí điều hòa. Độ dày càng lớn, khả năng cách nhiệt càng cao.</p>
      
      <h3>4. Trọng Lượng Nhẹ</h3>
      <p>Polycarbonate nhẹ hơn kính thông thường rất nhiều, giúp giảm tải trọng cho kết cấu công trình. Điều này đặc biệt quan trọng khi lắp đặt mái che cho các công trình có kết cấu yếu hoặc cần giảm tải trọng.</p>
      
      <h3>5. Dễ Lắp Đặt và Bảo Trì</h3>
      <p>Vật liệu polycarbonate dễ cắt, uốn cong và lắp đặt. Quá trình thi công nhanh chóng, ít tốn kém. Bề mặt trơn, dễ vệ sinh, chỉ cần rửa bằng nước và xà phòng nhẹ.</p>
      
      <h3>6. Đa Dạng Màu Sắc và Độ Dày</h3>
      <p>Mái kính polycarbonate có nhiều màu sắc và độ dày khác nhau, phù hợp với nhiều phong cách kiến trúc. Từ trong suốt đến mờ, từ màu xanh, xám đến các màu đặc biệt khác.</p>
      
      <h3>7. Giá Cả Hợp Lý</h3>
      <p>So với kính cường lực, mái kính polycarbonate có giá cả hợp lý hơn, phù hợp với nhiều ngân sách. Tuổi thọ cao và chi phí bảo trì thấp giúp tiết kiệm chi phí lâu dài.</p>
      
      <p>Với những ưu điểm trên, mái kính polycarbonate là lựa chọn lý tưởng cho sân vườn, ban công, hiên nhà và nhiều không gian khác.</p>
    `
  },
  {
    id: 5,
    title: "Cửa Nhôm Xingfa - Lựa Chọn Hàng Đầu",
    excerpt: "Tại sao cửa nhôm Xingfa được ưa chuộng...",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80",
    date: "11 Tháng 12, 2024",
    category: "Sản Phẩm",
    author: "Admin",
    tags: ["Cửa nhôm", "Xingfa"],
    content: `
      <p>Cửa nhôm Xingfa đã trở thành lựa chọn hàng đầu của nhiều khách hàng tại Việt Nam. Với chất lượng vượt trội và nhiều ưu điểm nổi bật, sản phẩm này đang chiếm lĩnh thị trường cửa nhôm kính cao cấp.</p>
      
      <h3>1. Chất Lượng Hàng Đầu</h3>
      <p>Xingfa là thương hiệu nhôm kính hàng đầu thế giới, được sản xuất theo tiêu chuẩn quốc tế. Hợp kim nhôm cao cấp, độ dày đạt chuẩn, đảm bảo độ bền và khả năng chịu lực tốt. Sản phẩm được kiểm định chất lượng nghiêm ngặt trước khi xuất xưởng.</p>
      
      <h3>2. Hệ Thống Cửa Đa Dạng</h3>
      <p>Xingfa cung cấp nhiều hệ thống cửa khác nhau như hệ 55, hệ 60, hệ 70, hệ 93, phù hợp với nhiều loại công trình từ nhà ở đến văn phòng, biệt thự. Mỗi hệ thống được thiết kế tối ưu cho từng mục đích sử dụng cụ thể.</p>
      
      <h3>3. Khả Năng Cách Âm, Cách Nhiệt Vượt Trội</h3>
      <p>Với thiết kế đa lớp và gioăng cao su chất lượng cao, cửa nhôm Xingfa có khả năng cách âm, cách nhiệt tốt. Điều này đặc biệt quan trọng trong môi trường đô thị ồn ào và khí hậu nhiệt đới nóng ẩm như Việt Nam.</p>
      
      <h3>4. Chống Nước, Chống Gió Tốt</h3>
      <p>Hệ thống gioăng kép và thiết kế khung chắc chắn giúp cửa nhôm Xingfa chống nước, chống gió hiệu quả. Sản phẩm đạt tiêu chuẩn chống nước cấp 6 và chống gió cấp 8, phù hợp với điều kiện thời tiết khắc nghiệt.</p>
      
      <h3>5. An Toàn và Bảo Mật</h3>
      <p>Cửa nhôm Xingfa tích hợp hệ thống khóa đa điểm châu Âu, đảm bảo an toàn và bảo mật cao. Kết hợp với kính cường lực, sản phẩm tạo ra một lớp bảo vệ vững chắc cho ngôi nhà của bạn.</p>
      
      <h3>6. Thiết Kế Hiện Đại, Đẹp Mắt</h3>
      <p>Với khung mỏng, đường nét tinh tế, cửa nhôm Xingfa mang lại vẻ đẹp hiện đại, sang trọng. Sản phẩm có nhiều màu sắc và hoàn thiện bề mặt khác nhau, phù hợp với nhiều phong cách kiến trúc.</p>
      
      <h3>7. Dễ Bảo Trì</h3>
      <p>Cửa nhôm Xingfa được thiết kế để dễ dàng bảo trì và vệ sinh. Các phụ kiện chất lượng cao, ít hỏng hóc, giúp giảm chi phí bảo trì lâu dài.</p>
      
      <h3>8. Bảo Hành Dài Hạn</h3>
      <p>Hầu hết các nhà cung cấp cửa nhôm Xingfa chính hãng đều cung cấp chế độ bảo hành từ 5-10 năm, đảm bảo quyền lợi của khách hàng.</p>
      
      <p>Với những ưu điểm vượt trội trên, không có gì ngạc nhiên khi cửa nhôm Xingfa trở thành lựa chọn hàng đầu của người tiêu dùng Việt Nam.</p>
    `
  }
]

export const gridNews: News[] = [
  {
    id: 6,
    title: "Thiết Kế Cửa Kính Cho Không Gian Nhỏ",
    excerpt: "Giải pháp thiết kế cửa kính tối ưu cho không gian nhỏ hẹp...",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=600&q=80",
    date: "10 Tháng 12, 2024",
    category: "Thiết Kế",
    author: "Kiến trúc sư",
    tags: ["Thiết kế", "Không gian nhỏ"],
    content: `
      <p>Thiết kế cửa kính cho không gian nhỏ đòi hỏi sự tinh tế và tính toán kỹ lưỡng để tối ưu hóa diện tích và ánh sáng. Dưới đây là những giải pháp hiệu quả.</p>
      
      <h3>1. Sử Dụng Cửa Lùa</h3>
      <p>Cửa lùa là lựa chọn tối ưu cho không gian nhỏ vì không chiếm diện tích khi mở. Cửa trượt dọc tường, giải phóng không gian sàn, tạo cảm giác rộng rãi hơn.</p>
      
      <h3>2. Cửa Kính Không Khung</h3>
      <p>Cửa kính không khung tạo cảm giác không gian mở, liền mạch. Thiết kế này phù hợp cho các phòng nhỏ, giúp tối đa hóa ánh sáng và tầm nhìn.</p>
      
      <h3>3. Cửa Mở Quay Vào Trong</h3>
      <p>Đối với không gian nhỏ, cửa mở quay vào trong sẽ tiết kiệm diện tích hơn so với cửa mở ra ngoài. Tuy nhiên, cần tính toán vị trí đồ nội thất để tránh va chạm.</p>
      
      <h3>4. Sử Dụng Kính Trong Suốt</h3>
      <p>Kính trong suốt tạo cảm giác không gian liền mạch, mở rộng tầm nhìn. Tránh sử dụng kính mờ hoặc có hoa văn trong không gian nhỏ vì sẽ tạo cảm giác chật chội.</p>
      
      <h3>5. Tối Đa Hóa Ánh Sáng</h3>
      <p>Cửa kính lớn, trong suốt giúp đón ánh sáng tự nhiên tối đa, tạo cảm giác không gian sáng sủa, rộng rãi hơn. Kết hợp với gương và các vật liệu phản quang để tăng hiệu ứng.</p>
      
      <p>Với những giải pháp trên, bạn có thể tạo ra không gian nhỏ nhưng vẫn thoáng đãng và hiện đại.</p>
    `
  },
  {
    id: 7,
    title: "An Toàn Khi Sử Dụng Kính Cường Lực",
    excerpt: "Những điều cần biết về an toàn khi sử dụng kính cường lực...",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80",
    date: "9 Tháng 12, 2024",
    category: "An Toàn",
    author: "Chuyên gia",
    tags: ["Kính cường lực", "An toàn"],
    content: `
      <p>Kính cường lực là vật liệu an toàn được sử dụng rộng rãi trong xây dựng. Tuy nhiên, để đảm bảo an toàn tối đa, cần hiểu rõ đặc tính và cách sử dụng đúng cách.</p>
      
      <h3>1. Đặc Tính An Toàn Của Kính Cường Lực</h3>
      <p>Kính cường lực được xử lý nhiệt ở nhiệt độ cao, tạo ra ứng suất bề mặt, khiến kính có độ bền gấp 4-5 lần kính thông thường. Khi vỡ, kính cường lực vỡ thành các mảnh nhỏ, không sắc nhọn, giảm nguy cơ thương tích.</p>
      
      <h3>2. Nhận Biết Kính Cường Lực</h3>
      <p>Kính cường lực thường có tem dán hoặc khắc logo nhà sản xuất ở góc. Khi nhìn nghiêng, bạn có thể thấy các vết cong nhẹ do quá trình tôi luyện. Kính cường lực không thể cắt hoặc khoan sau khi đã tôi luyện.</p>
      
      <h3>3. Ứng Dụng Phù Hợp</h3>
      <p>Kính cường lực phù hợp cho cửa, vách, ban công, cầu thang, lan can. Độ dày tối thiểu thường là 8mm cho cửa và 10mm cho vách. Đối với các ứng dụng cao, cần sử dụng kính dày hơn hoặc kính dán an toàn.</p>
      
      <h3>4. Lưu Ý Khi Lắp Đặt</h3>
      <p>Kính cường lực phải được lắp đặt bởi thợ chuyên nghiệp. Cần đảm bảo khung đỡ chắc chắn, phù hợp với trọng lượng kính. Khoảng cách giữa kính và khung phải đủ để kính có thể giãn nở khi nhiệt độ thay đổi.</p>
      
      <h3>5. Bảo Trì và Kiểm Tra</h3>
      <p>Kiểm tra định kỳ các vết nứt, vỡ trên bề mặt kính. Nếu phát hiện vết nứt, cần thay thế ngay vì kính cường lực có thể vỡ hoàn toàn khi có vết nứt. Vệ sinh kính bằng nước sạch và khăn mềm, tránh các vật cứng có thể làm xước.</p>
      
      <h3>6. Xử Lý Khi Kính Vỡ</h3>
      <p>Nếu kính cường lực vỡ, các mảnh vỡ sẽ rơi xuống dưới dạng hạt nhỏ. Cần dọn dẹp cẩn thận, tránh để trẻ em và vật nuôi tiếp xúc. Nếu kính vỡ do va đập mạnh, cần kiểm tra toàn bộ hệ thống để đảm bảo an toàn.</p>
      
      <p>Với việc hiểu rõ và sử dụng đúng cách, kính cường lực là vật liệu an toàn và hiệu quả cho mọi công trình.</p>
    `
  },
  {
    id: 8,
    title: "Xu Hướng Mái Kính Xanh Bền Vững",
    excerpt: "Khám phá xu hướng mái kính thân thiện với môi trường...",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80",
    date: "8 Tháng 12, 2024",
    category: "Môi Trường",
    author: "Chuyên gia",
    tags: ["Mái kính", "Bền vững"],
    content: `
      <p>Xu hướng mái kính xanh bền vững đang phát triển mạnh mẽ, hướng đến các giải pháp thân thiện với môi trường và tiết kiệm năng lượng.</p>
      
      <h3>1. Mái Kính Năng Lượng Mặt Trời</h3>
      <p>Mái kính tích hợp tấm pin năng lượng mặt trời là xu hướng mới. Vừa che nắng, vừa tạo ra điện năng, giúp giảm chi phí điện và bảo vệ môi trường. Công nghệ này đang được ứng dụng rộng rãi trong các công trình xanh.</p>
      
      <h3>2. Kính Cách Nhiệt Thông Minh</h3>
      <p>Kính cách nhiệt thông minh có khả năng tự động điều chỉnh độ trong suốt dựa trên nhiệt độ và ánh sáng. Vào mùa hè, kính tự động mờ đi để giảm nhiệt, vào mùa đông, kính trong suốt để đón ánh sáng. Điều này giúp tiết kiệm năng lượng điều hòa.</p>
      
      <h3>3. Vật Liệu Tái Chế</h3>
      <p>Nhiều nhà sản xuất đang sử dụng vật liệu tái chế để sản xuất mái kính. Khung nhôm tái chế, kính tái chế giúp giảm tác động đến môi trường, đồng thời vẫn đảm bảo chất lượng và độ bền.</p>
      
      <h3>4. Hệ Thống Thu Nước Mưa</h3>
      <p>Mái kính xanh thường được tích hợp hệ thống thu nước mưa. Nước mưa được thu gom và tái sử dụng cho tưới tiêu, giảm lãng phí tài nguyên nước.</p>
      
      <h3>5. Kết Hợp Với Cây Xanh</h3>
      <p>Mái kính kết hợp với hệ thống cây xanh trên mái tạo không gian xanh, giúp giảm nhiệt độ, cải thiện chất lượng không khí. Giải pháp này đang được ưa chuộng trong các công trình xanh, bền vững.</p>
      
      <h3>6. Tiết Kiệm Năng Lượng</h3>
      <p>Mái kính xanh được thiết kế để tối đa hóa ánh sáng tự nhiên, giảm nhu cầu chiếu sáng nhân tạo. Kết hợp với hệ thống thông gió tự nhiên, giúp giảm chi phí năng lượng đáng kể.</p>
      
      <h3>7. Chứng Nhận Xanh</h3>
      <p>Nhiều công trình sử dụng mái kính xanh đang đạt các chứng nhận xanh như LEED, LOTUS, giúp tăng giá trị công trình và thể hiện cam kết bảo vệ môi trường.</p>
      
      <p>Xu hướng mái kính xanh bền vững không chỉ mang lại lợi ích môi trường mà còn giúp tiết kiệm chi phí và tăng giá trị công trình trong dài hạn.</p>
    `
  }
]

// Hàm helper để lấy tất cả tin tức
export function getAllNews(): News[] {
  return [featuredNews, ...sideNews, ...gridNews]
}

// Hàm helper để lấy tin tức theo ID
export function getNewsById(id: number): News | undefined {
  return getAllNews().find(news => news.id === id)
}

