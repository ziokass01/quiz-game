# Mini Quiz Game (React + Vite)

Mini game trắc nghiệm 15 câu hỏi với cơ chế mở hộp quà ngẫu nhiên, chạy hoàn toàn frontend, phù hợp deploy ngay lên Vercel.

## Tính năng chính

- Màn hình mở đầu với nút **"Bắt đầu trò chơi"**
- 15 câu hỏi trắc nghiệm (mỗi câu 4 đáp án A, B, C, D)
- Chỉ 1 đáp án đúng cho mỗi câu
- Trả lời đúng sẽ mở màn chọn **4 hộp quà**
- Kho phần thưởng toàn game:
  - 1 phần thưởng `20.000đ`
  - 3 phần thưởng `2.000đ`
  - Các phần còn lại `1.000đ`
- Quà đã nhận sẽ bị loại khỏi kho quà (không lặp lại đúng phần quà đã nhận)
- Hiệu ứng âm thanh khi:
  - trả lời đúng
  - trả lời sai/hết giờ
  - mở quà
- Đồng hồ đếm ngược cho mỗi câu hỏi
- Màn hình tổng kết cuối game:
  - số câu đúng
  - tổng quà đã nhận
- Nút chơi lại
- UI sinh động, hiện đại, dễ nhìn, dễ trình chiếu
- Dữ liệu câu hỏi tách riêng trong mảng để dễ chỉnh sửa

## Cấu trúc project

```bash
quiz-game/
├─ index.html
├─ package.json
├─ vite.config.js
├─ README.md
└─ src/
   ├─ App.jsx
   ├─ main.jsx
   ├─ styles.css
   └─ data/
      └─ questions.js
```

## Chạy local

```bash
npm install
npm run dev
```

## Build production

```bash
npm run build
```

## Deploy Vercel

1. Push code lên GitHub.
2. Import repository vào Vercel.
3. Vercel tự nhận diện Vite:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy.

Không cần backend vì toàn bộ dữ liệu câu hỏi/phần thưởng xử lý ở frontend.

## Tuỳ chỉnh nhanh

- Sửa câu hỏi tại: `src/data/questions.js`
- Sửa thời gian mỗi câu tại hằng số `QUESTION_TIME` trong `src/data/questions.js`
- Sửa giao diện tại: `src/styles.css`
