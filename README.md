# TALKDESK_G5
## Các bước clone và chạy project local
1. Clone repositories về local bằng lệnh: `git clone https://github.com/LeHaiDangSPKT/talkdesk_g5.git`
2. Sử dụng IDE Visual Studio Code (VSC) và mở project vừa clone về.
3. Khởi chạy Front-end:
   - Di chuyển đến thư mục **fe_v2** bằng lệnh: `cd fe_v2`
   ![image](https://github.com/LeHaiDangSPKT/talkdesk_g5/assets/88248896/9ce3f34f-a76b-4b67-a63a-b86722588404)
   - Cài đặt node trong thư mục **fe_v2** bằng lệnh: `npm i` 
   ![image](https://github.com/LeHaiDangSPKT/talkdesk_g5/assets/88248896/017452f2-738a-44c4-be8c-c2d8bd400d0c)
   - Nếu có xảy ra lỗi xung đột giữa các version chạy lệnh: `npm i --force`
   - Lưu ý: vào file **.env** trong thư mục **fe_v2** sửa lại **REACT_APP_API = http://54.173.217.245:5000** nếu không muốn chạy Back-end ở local (bỏ qua bước 4).
   ![image](https://github.com/LeHaiDangSPKT/talkdesk_g5/assets/88248896/7d5a3a8d-90ce-482e-bff0-8b0f939db536)
   - Nếu chạy ở local, tạm thời bỏ qua bước này. Sau khi hoàn thành xong bước 4, chúng ta sẽ thực hiện bước này. Khởi chạy Front-end bằng lệnh: `npm start`
   ![image](https://github.com/LeHaiDangSPKT/talkdesk_g5/assets/88248896/b2bf66e6-d603-4bfa-aef9-59ed7340daca)
4. Khởi chạy Back-end:
   - Mở một terminal mới và di chuyển đến thư mục **be** bằng lệnh: `cd be`
   ![image](https://github.com/LeHaiDangSPKT/talkdesk_g5/assets/88248896/69692a1c-ac2d-4844-a460-6c81263a2f9f)
   - Cài đặt node trong thư mục **be** bằng lệnh: `npm i`
   ![image](https://github.com/LeHaiDangSPKT/talkdesk_g5/assets/88248896/5bd530c1-c04f-4526-b0aa-2260119249e2)
   - Nếu có xảy ra lỗi xung đột giữa các version chạy lệnh: `npm i --force`
   - Chạy Back-end bằng lệnh: `npm start`
   ![image](https://github.com/LeHaiDangSPKT/talkdesk_g5/assets/88248896/1bb62518-f76e-4ab0-94ea-c8334b747746)
   
## Kết quả
![image](https://github.com/LeHaiDangSPKT/talkdesk_g5/assets/88248896/376b81c9-947e-4a33-81d2-b0dfcc7d1de7)
### Tài khoản Admin
	+ Tên tài khoản: admin@admin
	+ Mật khẩu: 1
- Khi đăng nhập bằng tài khoản admin bên giao diện sẽ có thêm chức năng “Admin”:
![image](https://github.com/LeHaiDangSPKT/talkdesk_g5/assets/88248896/822ba58b-2625-4303-ba37-16a134d845c4)
### Tài khoản User: (Có thể đăng nhập vào bằng email)
- Khi đăng nhập bằng tài khoản google sẽ hiển thị giao diện như sau và không có chức năng “Admin”:
![image](https://github.com/LeHaiDangSPKT/talkdesk_g5/assets/88248896/33980745-16e4-4e89-9fd1-3dfc4a870704)


