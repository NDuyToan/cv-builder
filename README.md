# 📄 CV Builder (React + TypeScript + Vite)

Dự án CV cá nhân được xây dựng bằng **React + TypeScript + Vite**, giúp bạn dễ dàng chỉnh sửa trực tiếp nội dung trong code, hỗ trợ song ngữ (**Tiếng Việt** 🇻🇳 & **Tiếng Anh** 🇬🇧), tùy biến CV theo từng công ty ứng tuyển và in/xuất file PDF chuẩn A4 chỉ với 1 click.

---

## 🚀 1. Hướng dẫn cài đặt & Khởi chạy

```bash
# 1. Cài đặt các gói phụ thuộc (dependencies)
npm install

# 2. Khởi chạy môi trường phát triển (Dev Server)
npm run dev

# 3. Đóng gói dự án (Production Build)
npm run build
```
Sau khi chạy `npm run dev`, mở đường dẫn `http://localhost:5173/` trên trình duyệt để xem trực tiếp CV.

---

## ✍️ 2. Cách chỉnh sửa nội dung CV trực tiếp trong code

Tất cả nội dung CV được phân tách rõ ràng trong thư mục `src/data/`:

| File | Mục đích |
|---|---|
| `src/data/cv-vi.ts` | Nội dung CV **Tiếng Việt** (Mục tiêu, Kỹ năng, Kinh nghiệm, Dự án, Học vấn) |
| `src/data/cv-en.ts` | Nội dung CV **Tiếng Anh** chuyên nghiệp chuẩn quốc tế |
| `src/types/cv.ts` | Cấu trúc định nghĩa kiểu dữ liệu (TypeScript Schema) |

### Ví dụ chỉnh sửa dự án hoặc thêm kỹ năng:
Mở file `src/data/cv-vi.ts` hoặc `src/data/cv-en.ts` và chỉnh sửa trực tiếp:
```typescript
// Thêm kỹ năng mới
{
  category: 'Công nghệ cốt lõi',
  items: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Redux'],
}

// Chỉnh sửa hoặc thêm bullet points trong dự án
responsibilities: [
  'Phát triển cổng quản trị (Admin Portal) từ đầu bằng React và TypeScript...',
  'Tối ưu hóa hiệu năng và tích hợp RESTful APIs / GraphQL...',
]
```

---

## ✂️ 3. Chủ động ngắt trang A4 (Custom Page Breaks)

Để tránh trường hợp tiêu đề bị rớt lại ở cuối trang 1 còn nội dung nhảy sang trang 2, hoặc bạn muốn chủ động chia trang theo ý mình:

Chỉ cần thêm thuộc tính `pageBreakBefore: true` vào bất kỳ **Công ty (`experiences`)**, **Dự án (`projects`)**, hoặc **Học vấn (`education`)** trong file data:

```typescript
// Ví dụ: Muốn ngắt trang trước Công ty SmartDev
{
  company: 'SmartDev Company',
  role: 'Frontend Developer',
  period: '03/2021 – 10/2022',
  pageBreakBefore: true, // 👈 Thêm dòng này để chủ động đẩy công ty này sang đầu trang tiếp theo!
  projects: [ ... ]
}

// Hoặc muốn ngắt trang trước 1 dự án con cụ thể:
{
  name: 'Linglow Admin & Partner Portal',
  pageBreakBefore: true, // 👈 Đẩy dự án này sang trang mới
  // ...
}
```
Trên màn hình xem trước, hệ thống sẽ hiển thị một đường gạch nét đứt `✂ Ngắt trang tại đây (Page Break)` để bạn thấy trước vị trí ngắt trang (đường này tự động ẩn khi in ra PDF).

---

## 🏢 4. Cách tạo bản CV riêng cho từng công ty cụ thể

Khi bạn muốn ứng tuyển vào một công ty cụ thể (ví dụ Công ty ABC) và muốn nhấn mạnh các kỹ năng/dự án phù hợp với công ty đó:

1. Nhân bản file `src/data/cv-vi.ts` hoặc `src/data/cv-en.ts` thành file mới, ví dụ: `src/data/cv-company-abc.ts`.
2. Đổi `id` và `title` trong file mới:
   ```typescript
   export const cvCompanyABC: CVData = {
     id: 'cv-abc',
     title: 'Bản CV - Công ty ABC (React/NextJS)',
     language: 'vi',
     // ... chỉnh sửa các dự án, kỹ năng phù hợp với ABC
   };
   ```
3. Mở `src/data/index.ts` và thêm vào danh sách `cvProfiles`:
   ```typescript
   import { cvCompanyABC } from './cv-company-abc';

   export const cvProfiles: CVData[] = [
     cvVietnamese,
     cvEnglish,
     cvCompanyABC, // Thêm bản CV này vào danh sách
   ];
   ```
4. Khi mở giao diện web, bạn sẽ thấy menu chọn cấu hình CV xuất hiện trên thanh công cụ để bạn chuyển đổi và in ấn cho công ty đó!

---

## 🖼️ 5. Thay đổi ảnh đại diện (Avatar)

- Đặt file ảnh của bạn vào thư mục `public/avatar.png` (khuyên dùng ảnh tỷ lệ đứng khoảng 3:4 hoặc 4:5).
- Hoặc chỉnh sửa đường dẫn ảnh trong `src/data/cv-vi.ts` (mục `personalInfo.avatarUrl`).

---

## 🖨️ 6. Hướng dẫn In CV / Xuất file PDF chuẩn A4 (Select text & Click link 100%)

1. Nhấp vào nút **"In CV / Xuất PDF"** trên thanh công cụ (hoặc nhấn phím tắt `Ctrl + P`).
2. Trên hộp thoại in của trình duyệt:
   - **Destination (Máy in)**: Chọn **Save as PDF** (Lưu dưới dạng PDF) — *Không chọn Microsoft Print to PDF*.
   - **Paper size (Khổ giấy)**: Chọn *A4*.
   - **Margins (Căn lề)**: Chọn *Default* (Mặc định) hoặc *None*.
   - **Options (Tùy chọn)**: Đảm bảo đã tick chọn **Background graphics** (Đồ họa nền) để hiển thị đầy đủ màu sắc các badge và thanh tiêu đề.
3. Bấm **Save** để lưu file PDF chất lượng cao.
