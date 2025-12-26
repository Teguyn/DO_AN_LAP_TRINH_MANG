# 🚀 Portfolio Chuyên Gia An Niên Mạng & Tự động hóa

Một website portfolio chuyên nghiệp được thiết kế để thu hút sự chú ý của các nhà tuyển dụng trong lĩnh vực an niên mạng và tự động hóa.

## 📋 Cấu Trúc Tệp

```
📁 DO_AN_LT_MANG/
├── 📄 index.html          # Trang chính (gồm tất cả các section)
├── 📁 css/
│   └── 📄 style.css       # Các kiểu CSS và responsive design
├── 📁 js/
│   └── 📄 script.js       # Chức năng JavaScript
└── 📄 README.md           # File này
```

## 🎨 Các Phần Chính (8 Section)

### 1. **🏆 Trang Chủ (Hero Section)**
- Giới thiệu ngắn gọn về bạn
- Avatar/hình minh họa với gradient tuyệt đẹp
- Hiệu ứng animation fade-in, slide-up khi tải trang
- Nền chia hai màu (trắng và đen)
- Nút điều hướng rõ ràng (Contact, Projects, CV)

### 2. **👤 Giới Thiệu Bản Thân (About Me)**
- Thông tin cá nhân cơ bản
- Kinh nghiệm và định hướng nghề nghiệp
- Sở thích và phong cách làm việc
- Các kỹ năng nổi bật với thẻ highlights

### 3. **🧠 Kỹ Năng (Skills)**
- **Kỹ năng kỹ thuật:**
  - Networking (TCP/IP, DNS, DHCP, VPN)
  - Network Security (Firewall, IDS/IPS)
  - Python & Scripting
  - SIEM & Splunk
  - n8n & Automation Tools
  - Penetration Testing
  - Linux/Windows Administration
  - Cloud Security

- **Kỹ năng mềm:**
  - Giao tiếp & Trình bày
  - Làm việc nhóm
  - Giải quyết vấn đề
  - Quản lý thời gian
  - Tư duy phản biện
  - Học tập liên tục

### 4. **🧪 Dự Án (Projects/Portfolio)**
6 dự án mẫu với:
- Tên dự án
- Mô tả chi tiết
- Công nghệ sử dụng
- Link GitHub và Demo
- Hình ảnh placeholder

### 5. **📝 Chứng Chỉ & Thành Tựu (Certifications & Achievements)**
- 6 chứng chỉ quan trọng
- 4 thành tích đáng chú ý
- Giải thưởng và đóng góp

### 6. **✍️ Blog / Bài Viết (Blog Posts)**
6 bài viết mẫu về:
- Bảo mật
- Automation
- Networking
- Kinh nghiệm cá nhân
- Python
- Splunk/SIEM

### 7. **📬 Liên Hệ (Contact)**
- Thông tin liên hệ (email, điện thoại, địa chỉ)
- Form gửi tin nhắn với validation
- Các nút social media
- Link tới LinkedIn, GitHub, Twitter, Facebook

### 8. **📄 Footer**
- Copyright
- Link nhanh đến các section
- Social icons
- Năm tự động cập nhật

## 🎯 Tính Năng Chính

✨ **Animations & Effects:**
- Fade-in, slide-up, slide-left, slide-right khi tải
- Float animation cho avatar
- Hover effects cho tất cả các interactive elements
- Smooth scroll behavior

📱 **Responsive Design:**
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (dưới 768px)
- Mobile menu hamburger

🌐 **Navigation:**
- Fixed navigation bar với backdrop blur
- Active link indicator
- Smooth scrolling
- Mobile hamburger menu

🎨 **Design:**
- Modern gradient colors
- Professional typography
- Consistent spacing
- Color scheme: Blue (#1e40af) + Black (#000000)

✅ **Form Validation:**
- Validate tên, email, chủ đề, tin nhắn
- Validate định dạng email
- Thông báo lỗi/thành công

## 🚀 Cách Sử Dụng

### 1. **Mở File HTML**
Đơn giản nhất, mở file `index.html` trong trình duyệt:
```bash
# Trên Windows
start index.html

# Hoặc bạn có thể kéo file vào trình duyệt
```

### 2. **Sử Dụng Live Server (Khuyến Khích)**
Nếu sử dụng VS Code:
1. Cài đặt extension "Live Server"
2. Click chuột phải trên `index.html`
3. Chọn "Open with Live Server"

Hoặc dùng Python:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Sau đó truy cập: `http://localhost:8000`

## 📝 Hướng Dẫn Chỉnh Sửa

### 1. **Thay Đổi Thông Tin Cá Nhân**

Mở `index.html` và tìm các phần sau:
- **[Tên của bạn]** - Thay bằng tên thực của bạn
- **your.email@example.com** - Thay bằng email của bạn
- **+84xxx-xxx-xxx** - Thay bằng số điện thoại của bạn
- **Giới thiệu** - Chỉnh sửa phần mô tả về bạn

### 2. **Cập Nhật Dự Án**

Tìm section `.project-card` và cập nhật:
```html
<h3>Tên Dự Án Của Bạn</h3>
<p class="project-description">Mô tả dự án...</p>
<div class="project-tech">
    <span class="tech-tag">Công nghệ 1</span>
    <span class="tech-tag">Công nghệ 2</span>
</div>
```

### 3. **Thêm Avatar/Hình Ảnh**

Thay thế `.avatar-placeholder` bằng hình ảnh thực:
```html
<!-- Thay từ -->
<div class="avatar-placeholder">
    <i class="fas fa-user-circle"></i>
</div>

<!-- Thành -->
<img src="path/to/your/avatar.jpg" alt="Your Name" class="avatar-image">
```

Thêm CSS cho hình ảnh:
```css
.avatar-image {
    width: 350px;
    height: 350px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 20px 60px rgba(30, 64, 175, 0.3);
}
```

### 4. **Cập Nhật Links Social Media**

Tìm `https://linkedin.com`, `https://github.com`, v.v. và thay bằng links thực của bạn.

### 5. **Thay Đổi Màu Sắc**

Mở `css/style.css` và chỉnh sửa CSS variables:
```css
:root {
    --primary-color: #1e40af;    /* Màu xanh chính */
    --secondary-color: #000000;   /* Màu đen */
    --text-color: #333333;        /* Màu text */
    --light-bg: #ffffff;          /* Nền sáng */
    --dark-bg: #0f172a;           /* Nền tối */
}
```

## 💻 Công Nghệ Sử Dụng

- **HTML5** - Cấu trúc trang
- **CSS3** - Kiểu dáng (Flexbox, Grid, Animations)
- **JavaScript (Vanilla)** - Tính năng tương tác
- **Font Awesome Icons** - Icons tuyệt đẹp
- **Google Fonts** - Các font chuyên nghiệp

## 🔧 Tính Năng JavaScript

- ✅ Mobile menu toggle
- ✅ Smooth scroll navigation
- ✅ Form validation
- ✅ Form submission handling
- ✅ Scroll animations
- ✅ Active navigation indicator
- ✅ Skill bars animation
- ✅ Parallax effect (tùy chọn)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📈 SEO Optimization (Cơ Bản)

- ✅ Meta tags cơ bản
- ✅ Semantic HTML
- ✅ Alt text cho images
- ✅ Fast loading (inline CSS cho critical path)

## 🔐 Bảo Mật Form

**Lưu Ý:** Để form hoạt động thực tế, bạn cần:

1. **Backend Server** - Xử lý dữ liệu form
2. **Email Service** - Gửi email (SendGrid, Mailgun, etc.)
3. **Validation Server-side** - Kiểm tra dữ liệu phía server

Ví dụ Node.js + Express:
```javascript
app.post('/api/contact', (req, res) => {
    // Validation
    // Send email
    // Save to database
    res.json({ message: 'Tin nhắn đã được gửi!' });
});
```

## 📱 Responsive Breakpoints

- **Desktop:** 1200px và trên
- **Tablet:** 768px - 1199px
- **Mobile:** Dưới 768px

## 🎓 Tài Nguyên Hữu Ích

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS Tricks](https://css-tricks.com/)
- [Font Awesome Icons](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)

## 📞 Hỗ Trợ

Nếu gặp vấn đề:
1. Kiểm tra file HTML syntax
2. Mở DevTools (F12) để xem console errors
3. Đảm bảo tất cả files (HTML, CSS, JS) đang trong thư mục đúng
4. Clear cache browser (Ctrl+Shift+Delete)

## 📄 License

Tự do sử dụng, chỉnh sửa và phân phối cho mục đích cá nhân hoặc thương mại.

---

**Chúc bạn thành công với portfolio của mình! 🚀**

Hãy nhớ rằng, một portfolio tốt không chỉ đẹp mắt mà còn phải:
- ✨ Thể hiện được khả năng của bạn
- 📱 Dễ sử dụng trên tất cả thiết bị
- ⚡ Tải nhanh
- 🎯 Rõ ràng và chuyên nghiệp
- 🔗 Có các project thực tế có thể click vào
