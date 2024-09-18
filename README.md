# Food Deli
website การขายอาหาร และมีระบบจัดการสินค้า และระบบติดตามสถานะการจัดส่ง
# Available Scripts

## Frontend
### `cd frontend`
### `npm install`
### `npm run dev`

## Backend
### `cd backend`
### `npm install`
### `npm run server`

## Admin Side
### `cd admin`
### `npm install`
### `npm run dev`

## Built With ##
* ![React][React.js]
* ![MongoDB][MongoDB]
* ![NodeJS][NodeJS]
* ![Express.js][Express.js]
* ![jsonwebtoken][jsonwebtoken]
* ![stripe][stripe]

## Home Page (http://localhost:5174) ##
เป็นหน้าที่แสดงเมนูอาหาร รายละเอียดของเมนู สามารถกดเพิ่มสินค้าเข้าตะกร้า และมีปุ่ม login และ register ที่ navbar (สามารถใช้ email: john@gmail.com password: 12345678 ในการ login ได้)
<br/>
&nbsp;&nbsp;
<br/>
&nbsp;&nbsp;
<br/>
![image](https://github.com/user-attachments/assets/65b8b282-07fd-45f8-823c-a60556e97334)
![image](https://github.com/user-attachments/assets/32bc8e00-dfdb-4151-85bc-e2c05463e886) ![image](https://github.com/user-attachments/assets/8d3d288e-4728-4cc2-bfed-74aa09fafae4)



## Cart Page (http://localhost:5174/cart) ##
เป็นหน้าที่แสดงตะกร้าสินค้า จำนวนสินค้า และราคารวมของสินค้าแต่ละชนิด
<br/>
&nbsp;&nbsp;
<br/>
&nbsp;&nbsp;
<br/>
![image](https://github.com/user-attachments/assets/d644c503-dde3-4da6-bca3-5881ef837ad8)

## Placeorder Page (http://localhost:5174/order) ##
เป็นหน้าที่แสดงราคารวมทั้งหมด และแบบฟอร์มสำหรับที่อยู่จัดส่งสินค้า
<br/>
&nbsp;&nbsp;
<br/>
&nbsp;&nbsp;
<br/>
![image](https://github.com/user-attachments/assets/f7948b68-f818-4a92-b3fd-2417c63bfe17)

## Payment Page ##
เป็นหน้าที่แสดงการจ่ายเงิน ใช้ stripe ในการทำหน้า demo payment โดยเราจะใช้ testing card ในตัวอย่างข้างล่างในการจ่ายเงิน 
<br/>
&nbsp;&nbsp;
<br/>
&nbsp;&nbsp;
<br/>
![image](https://github.com/user-attachments/assets/96fcda41-720a-449a-bca2-0241ce1795b8)
![image](https://github.com/user-attachments/assets/a01aed29-b086-49c4-9a76-a68fc968b5df)

## My Orders Page (http://localhost:5174/myorders) ##
เป็นหน้าที่แสดง order ต่างๆที่เราได้ทำการสั่งซื้อ โดยจะแสดงรายละเอียดเมนู ราคาทั้งหมด สถานะการจัดส่ง และสามารถคลิกที่ปุ่ม track order ในการอัพเดตสถานะการจัดส่ง
<br/>
&nbsp;&nbsp;
<br/>
&nbsp;&nbsp;
<br/>
![image](https://github.com/user-attachments/assets/009cbff7-80b9-44dc-bb32-0b9467ac7ef7)

## Admin Add Product Page (http://localhost:5173/add) ##
เป็นหน้าที่ใช้สำหรับการเพิ่มสินค้าใหม่ โดยทำการเพิ่มรายละเอียดสินค้าต่างๆลงในแบบฟอร์ม 
<br/>
&nbsp;&nbsp;
<br/>
&nbsp;&nbsp;
<br/>
![image](https://github.com/user-attachments/assets/aadbd7d9-6d98-4a84-a65c-081620a2e281)

## Admin Product List Page (http://localhost:5173/list) ##
เป็นหน้าที่แสดงสินค้าต่างๆที่มีอยู่ในหน้าร้านค้า โดยจะสามารถลบสินค้าที่ต้องการออกจากหน้าร้านได้
<br/>
&nbsp;&nbsp;
<br/>
&nbsp;&nbsp;
<br/>
![image](https://github.com/user-attachments/assets/d4800bf2-ec04-4e2a-94ba-bccac94a7041)

## Admin Order List Page (http://localhost:5173/orders) ##
เป็นหน้าที่แสดงรายละเอียดของ order ต่างๆที่มีการสั่งซื้อ และสามารถแก้ไขสถานะการจัดส่งของ order ต่างๆได้ที่หน้านี้
<br/>
&nbsp;&nbsp;
<br/>
&nbsp;&nbsp;
<br/>
![image](https://github.com/user-attachments/assets/e12076ea-3cd8-4a22-91e2-98b37e982d71)


[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[MongoDB]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[NodeJS]: https://img.shields.io/badge/Nodejs-3C873A?style=for-the-badge&logo=node.js&logoColor=white
[Express.js]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[jsonwebtoken]: https://img.shields.io/badge/jsonwebtoken-007acc?style=for-the-badge
[stripe]: https://img.shields.io/badge/Stripe-635bff?style=for-the-badge&logo=stripe&logoColor=white
