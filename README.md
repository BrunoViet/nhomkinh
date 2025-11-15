# Restoran - Next.js Restaurant Website

Website nhà hàng được chuyển đổi từ HTML tĩnh sang Next.js.

## Cài đặt

1. Cài đặt dependencies:
```bash
npm install
```

2. Di chuyển các file assets vào thư mục `public`:
   - Di chuyển thư mục `css/` vào `public/css/`
   - Di chuyển thư mục `img/` vào `public/img/`
   - Di chuyển thư mục `lib/` vào `public/lib/`

3. Chạy development server:
```bash
npm run dev
```

4. Mở [http://localhost:3000](http://localhost:3000) trong trình duyệt.

## Cấu trúc dự án

```
├── components/          # React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Layout.tsx
│   ├── Spinner.tsx
│   └── BackToTop.tsx
├── pages/              # Next.js pages
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── index.tsx
│   ├── about.tsx
│   ├── menu.tsx
│   ├── service.tsx
│   ├── booking.tsx
│   ├── team.tsx
│   ├── testimonial.tsx
│   └── contact.tsx
├── public/             # Static files
│   ├── css/
│   ├── img/
│   ├── lib/
│   └── js/
├── styles/             # Global styles
└── package.json
```

## Các trang

- `/` - Trang chủ
- `/about` - Giới thiệu
- `/menu` - Thực đơn
- `/service` - Dịch vụ
- `/booking` - Đặt bàn
- `/team` - Đội ngũ
- `/testimonial` - Đánh giá
- `/contact` - Liên hệ

## Build cho production

```bash
npm run build
npm start
```

## Lưu ý

- Đảm bảo tất cả các file CSS, images và libraries đã được di chuyển vào thư mục `public/`
- Các file JavaScript từ thư mục `lib/` sẽ được load tự động qua `_app.tsx`
- Bootstrap và jQuery được load từ CDN

