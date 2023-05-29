# TALKDESK_G5
## Các bước clone và chạy project local
1. Clone repositories về local bằng lệnh: `git clone https://github.com/LeHaiDangSPKT/talkdesk_g5.git`
2. Sử dụng IDE Visual Studio Code (VSC) và mở project vừa clone về.
3. Khởi chạy Front-end:
   - Di chuyển đến thư mục **fe_v2** bằng lệnh: `cd fe_v2`
   - Cài đặt node trong thư mục **fe_v2** bằng lệnh: `npm i` 
   - Nếu có xảy ra lỗi xung đột giữa các version chạy lệnh: `npm i --force`
   - Lưu ý: vào file **.env** trong thư mục **fe_v2** sửa lại **REACT_APP_API = http://54.173.217.245:5000** nếu không muốn chạy Back-end ở local (bỏ qua bước 4).
   - Sau bước trên, chúng ta có thể khởi chạy Front-end bằng lệnh: `npm start`
4. Khởi chạy Back-end:
   - Mở một terminal mới và di chuyển đến thư mục **be** bằng lệnh: `cd be`
   - Cài đặt node trong thư mục **be** bằng lệnh: `npm i`
   - Nếu có xảy ra lỗi xung đột giữa các version chạy lệnh: `npm i --force`
   - Chạy Back-end bằng lệnh: `npm start`
