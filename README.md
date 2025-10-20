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
- ***Tạo thư mục chứa Website***.</p>
`D:\Apache24\nguyenducduong`</p>
<img width="874" height="583" alt="image" src="https://github.com/user-attachments/assets/4c2cd886-5624-4d8a-86d6-06ead8a988d6" /></p>
- ***Trong đó bạn có thể thêm 1 file kiểm tra:***

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
6. Fake IP</p>
- ***Vị trí: C:\Windows\System32\drivers\etc\hosts***</p>
+ Mở Notepad bằng quyền Administrator.</p>
+ Chọn File → Open → chuyển sang All Files → chọn file hosts.</p>
+ Thêm dòng cuối cùng: 127.0.0.1   nguyenducduong.com </p>
7. Thao tác dòng lệnh trên file D:\Apache24\bin\httpd.exe</p>
- Chạy lệnh ***-k install***</p>
<img width="1077" height="206" alt="image" src="https://github.com/user-attachments/assets/5677a840-735b-4796-9377-0b8c84db1818" /></p>
- Chạy lệnh ***-k start***</p>
<img width="1086" height="215" alt="image" src="https://github.com/user-attachments/assets/36f42e98-7d41-4bf8-a4a1-41e184ca079c" /></p>
8. Thêm code cho file index.html</p>
<img width="859" height="177" alt="image" src="https://github.com/user-attachments/assets/516c991c-14e9-4b7e-a9d4-f69b946db5c6" /></p>
9. Kết quả đạt được</p>
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/95d5c818-28ba-4262-81cd-dd0cb66290ae" /></p>













