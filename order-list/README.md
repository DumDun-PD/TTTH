# Little Lemon Restaurant

Giao diện React đơn giản cho Little Lemon Restaurant, gồm tiêu đề và hai nút **Sign up** và **Login**. Trang được thiết kế theo tông màu vàng - xanh, có hỗ trợ màn hình nhỏ và trạng thái focus bằng bàn phím.

> Hiện tại đây là giao diện minh họa. Hai nút chỉ hiển thị thông báo khi được nhấn, chưa kết nối chức năng đăng ký hoặc đăng nhập.

## Yêu cầu

- Node.js và npm

## Cài đặt và chạy

Mở terminal tại thư mục `order-list`, sau đó chạy:

```bash
npm install
npm start
```

Ứng dụng sẽ chạy ở [http://localhost:3000](http://localhost:3000).

## Các lệnh

| Lệnh | Mô tả |
| --- | --- |
| `npm start` | Chạy ứng dụng ở chế độ phát triển. |
| `npm test` | Chạy bộ kiểm thử. |
| `npm run build` | Tạo bản build production trong thư mục `build`. |

## Cấu trúc chính

```text
src/
├── App.js       # Thành phần giao diện chính
├── App.css      # Kiểu dáng trang và các nút
├── App.test.js  # Kiểm thử giao diện
└── index.css    # Kiểu dáng toàn cục
```

## Công nghệ

- React
- Create React App
- CSS
