# Bài Tập 02: Lập Trình Web
## Nội Dung Bài Tập
### 1. *Cài đặt Apache web server*.
### 2. *Cài đặt nodejs và nodered => Dùng làm backend.*
### 3. *Tạo csdl tuỳ ý trên mssql (sql server 2022), nhớ các thông số kết nối: ip, port, username, password, db_name, table_name.*
### 4. *Cài đặt thư viện trên nodered.*
### 5. *Tạo api back-end bằng nodered.*
### 6. *Tạo giao diện front-end.*
### 7. *Nhận xét bài làm của mình.*

## Bài Làm
### 1. Cài đặt Apache web server.</p>
1. Tắt IIS (nếu có): mở Command Prompt Run as Administrator và chạy.</p>
`iisreset /stop`</p>
<img width="1000" height="220" alt="image" src="https://github.com/user-attachments/assets/44178b66-9870-4814-bc3b-1978b43d1650" /></p>
→ là đã tắt IIS thành công ✅.</p>
2. Dowload Apache Server.</p>
<img width="830" height="61" alt="image" src="https://github.com/user-attachments/assets/ce826eb0-0913-4253-ad4d-200542c6957d" /></p>
3. Giải nén File Zip ra ổ D.</p>
<img width="1149" height="554" alt="image" src="https://github.com/user-attachments/assets/1ec29fd3-9b1c-4649-8c89-0ba02fd89442" /></p>
4. D:\Apache24\conf\httpd.conf</p>
- ***Sửa dòng ServerRoot***</p>
<img width="902" height="534" alt="image" src="https://github.com/user-attachments/assets/c032a107-65fe-4c35-8be5-29b68f8f4971" /></p>
- ***Sửa DocumentRoot và Directory***.</p>
<img width="1045" height="421" alt="image" src="https://github.com/user-attachments/assets/3fa0e65d-9a5b-43bf-bad4-418991f07f3a" /></p>
- ***Bỏ dấu '#' trước dòng Include conf/extra/httpd-vhosts.conf***</p>
<img width="386" height="76" alt="image" src="https://github.com/user-attachments/assets/36fc8fdc-c264-4c94-b833-d01f1efa2893" /></p>
5. D:Apache24\conf\extra\httpd-vhosts.conf.</p>
- ***Mở file httpd-vhosts.conf***</p>
- ***Thêm cấu hình website***</p>
<img width="671" height="385" alt="image" src="https://github.com/user-attachments/assets/4b984eb0-6c53-4c1c-8dc5-5e96ef22f506" /></p>










