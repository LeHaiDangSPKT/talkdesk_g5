# TALKDESK_G5
## Các bước clone và chạy project local
1. Clone repositories về local bằng lệnh: `git clone https://github.com/LeHaiDangSPKT/talkdesk_g5.git`
2. Sử dụng IDE Visual Studio Code (VSC) và mở project vừa clone về.
3. Khởi chạy Front-end:
   - Di chuyển đến thư mục **fe_v2** bằng lệnh: `cd fe_v2`
   - Cài đặt node trong thư mục **fe_v2** bằng lệnh: `npm i` (chèn hình ảnh)
   - Nếu có xảy ra lỗi xung đột giữa các version chạy lệnh: `npm i --force`
   - Lưu ý: vào file **.env** trong thư mục **fe_v** sửa lại **REACT_APP_API = https://talkdesk-g5.vercel.app** nếu không muốn chạy Back-end ở local (bỏ qua bước 4).
   - Sau bước trên, chúng ta có thể khởi chạy Front-end bằng lệnh: `npm start`
![image](https://user-images.githubusercontent.com/127852125/236396116-098ee747-69a2-438e-a0fe-b97c45d7a270.png)
4. Khởi chạy Back-end:
   - Mở một terminal mới và di chuyển đến thư mục **be** bằng lệnh: `cd be`
   - Cài đặt node trong thư mục **fe_v2** bằng lệnh: `npm i` (chèn hình ảnh)
   - Nếu có xảy ra lỗi xung đột giữa các version chạy lệnh: `npm i --force`
   - Chạy Back-end bằng lệnh: `npm start`
![image](https://user-images.githubusercontent.com/127852125/236396237-48648677-a623-4161-ac28-402217251309.png)
