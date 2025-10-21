<img width="726" height="152" alt="image" src="https://github.com/user-attachments/assets/cc282be8-c0e8-4976-8ebe-9204d0797cda" /># Bài Tập 02: Lập Trình Web
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

### 2. Cài đặt nodejs và nodered => Dùng làm backend.</p>
1. Cài đặt Note.js</p>
2. Cài đặt nodered</p>
<img width="895" height="297" alt="image" src="https://github.com/user-attachments/assets/4db0e6ea-c1c1-4bc3-a126-09fc26ffbe69" /></p>
3. Cài đặt NSSM</p>
<img width="779" height="56" alt="image" src="https://github.com/user-attachments/assets/e88bdc2e-c324-4b07-b314-7b7be23161d6" /></p>
- Giải nén và Copy **nssm.exe** vào thư mục D:\nodejs\nodered\.</p>
<img width="814" height="320" alt="image" src="https://github.com/user-attachments/assets/2e2dfa8f-0d9a-497a-aa6c-e4539675bdc0" /></p>
4. Tạo file khởi động Node-RED.</p>
- Vào Notepad -> Tạo 1 file mới: Dán 5 nội dung sau vào.</p>
`@echo off
REM fix path
set PATH=D:\nodejs;%PATH%
REM Run Node-RED
node "D:\nodejs\nodered\node_modules\node-red\red.js" -u "D:\nodejs\nodered\work" %*`</p>
- Sau đó lưu với tên **run-nodered** vào D:\nodejs\nodered\</p>
<img width="834" height="371" alt="image" src="https://github.com/user-attachments/assets/15c5a653-3e55-41cc-97fa-884d3589482f" /></p>
5. Cài đặt service `a1-nodered`.</p>
- Vào CMD -> cd /d D:\nodejs\nodered.</p>
- Chạy lệnh **nssm.exe install a1-nodered** để cài đặt service.</p>
- Chạy service `a1-nodered` bằng lệnh: **nssm start a1-nodered**</p>
<img width="526" height="67" alt="image" src="https://github.com/user-attachments/assets/c68f8fd3-3182-406a-a91d-9877b1a05479" /></p>
6. Kết quả đạt được</p>
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/dc24c576-9d5f-4ea4-8764-2ae46a6f4cc6" /></p>

### 3. Tạo CSDL.</p>
1. Tạo Database.</p>
- Tạo 1 database bất kì.</p>
<img width="340" height="350" alt="image" src="https://github.com/user-attachments/assets/cacf49d1-5f28-4bf9-a020-94c764f537e4" /></p>
2. Tạo User.</p>
- Dùng code để tiến hành tạo user nhanh chóng hơn.</p>
<img width="665" height="347" alt="image" src="https://github.com/user-attachments/assets/6fb057bb-46ea-42da-9d71-10a9b82b64f3" /></p>
3. Tạo Table trong Database.</p>
- Dùng code để tạo nhanh và thêm dữ liệu vào bảng.</p>
<img width="793" height="202" alt="image" src="https://github.com/user-attachments/assets/8096e8d0-d2d7-4c19-aaac-fef64dbc64d9" /></p>
4. Ghi nhớ các thông tin sau.</p>
- IP</p>
<img width="598" height="125" alt="image" src="https://github.com/user-attachments/assets/6044754b-fda8-4c3a-a0dd-ee667e510ef3" /></p>
- PORT</p>
<img width="466" height="423" alt="image" src="https://github.com/user-attachments/assets/0d8b1988-516e-43f3-abc5-822628139940" /></p>

### 4. Cài đặt thư viện trên nodered.</p>
1. Truy cập giao diện Nodered bằng url: ***http://localhost:1880***
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/2762af00-2434-4b8c-8eb4-11f1ecec1ffa" /></p>
2. Cài đặt các thư viện:</p>
- Tại giao diện Nodered -> menu -> Manage palette -> install -> Tìm và cài từng package sau:</p>
2.1. ***Node-red-contrib-mssql-plus***.</p>
<img width="895" height="397" alt="image" src="https://github.com/user-attachments/assets/ff4d9597-e6ef-4ff1-860e-9b821f6a8daa" /></p>
2.2. ***Node-red-node-mysql***.</p>
<img width="720" height="158" alt="image" src="https://github.com/user-attachments/assets/a49cb3d9-4934-4ff3-9d63-8e32727cddfd" /></p>
2.3. ***Node-red-contrib-telegrambot***.</p>
<img width="726" height="152" alt="image" src="https://github.com/user-attachments/assets/2b53485c-e843-43cc-9e7e-41cf0f406e1f" /></p>
2.4. ***Node-red-contrib-moment***.</p>
<img width="718" height="184" alt="image" src="https://github.com/user-attachments/assets/391b5e5a-51a9-4595-95ce-6eedb592b2cc" /></p>
2.5. ***node-red-contrib-influxdb***.</p>
<img width="721" height="158" alt="image" src="https://github.com/user-attachments/assets/f3c891df-065c-4620-9a4c-e4f54ac83af6" /></p>
2.6. ***node-red-contrib-duckdns***.</p>
<img width="725" height="155" alt="image" src="https://github.com/user-attachments/assets/76bc3369-39c9-43dd-b716-0a9fe3976aee" /></p>
2.7. ***node-red-contrib-cron-plus***.</p>
<img width="733" height="180" alt="image" src="https://github.com/user-attachments/assets/ac09d661-1e35-4660-a213-4d153d636a51" /></p>
3. Sửa file `D:\nodejs\nodered\work\settings.js - > xoá dấu **//** ở 8 dòng dưới.</p>
- <img width="902" height="287" alt="image" src="https://github.com/user-attachments/assets/747b90ad-1e9b-4f25-aa7b-a7d647b20039" /></p>
3.1. ***Sinh mật khẩu mã hoá mới***.</p>
- Dùng Tool: `https://tms.tnut.edu.vn/pw.php`</p>
<img width="706" height="172" alt="image" src="https://github.com/user-attachments/assets/3e30e05c-f465-4026-a53c-955f1b8acc0c" /></p>
4. Khởi động lại Nodered.</p>
<img width="530" height="128" alt="image" src="https://github.com/user-attachments/assets/6f6eaca8-6cce-45df-960e-1c42538ba8ac" /></p>
5. Truy cập lại Node-RED.</p>
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/c4d84025-e00b-49aa-9ee9-233291c683c7" /></p>

### 5. Tạo api back-end bằng nodered.</p>
1. Tại giao diện Nodered - Flow1: Thực hiện kéo thả các node như sau: http in, http response, MSSQL, function.</p>
2. Cấu hình các Node.</p>
2.1. ***http in***.</p>
<img width="639" height="413" alt="image" src="https://github.com/user-attachments/assets/fed8d647-2c21-435e-9eab-c6d86ffa4a4a" /></p>
2.2. ***function***.</p>
<img width="832" height="675" alt="image" src="https://github.com/user-attachments/assets/f50a5f9f-8701-4543-a726-3ae83c66a92a" /></p>
2.3. ***MSSQL***.</p>
<img width="683" height="867" alt="image" src="https://github.com/user-attachments/assets/713de2eb-9a00-4c70-a0fd-86e244ac7a91" /></p>
2.4. ***http response***.</p>
<img width="642" height="857" alt="image" src="https://github.com/user-attachments/assets/6ef7897e-4874-4af0-bff2-4399511e06a6" /></p>
2.5. ***Thêm node 'Debug'***.</p>
<img width="952" height="861" alt="image" src="https://github.com/user-attachments/assets/d16cbc19-0faf-4031-80ea-d67137388725" /></p>
2.6. ***Test API***.</p>
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/48cc6096-6789-47e5-bcb3-f4b8ce086e1f" /></p>










































