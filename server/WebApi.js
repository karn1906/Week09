import express from 'express';

const app = express()
const port = 3000

// GET, POST, PUT, DELETE
app.get('/', (req, res) => {
  res.send('Welcome to the Bookstore!');
});

// URL: http://localhost:3000/bookstore/u100/ORD100/BookTitle/2/500
app.get('/bookstore/:userName/:orderId/:bookTitle/:quantity/:price', (req, res) => {
  let myData = "<h1>Bookstore Order Details</h1>";
  myData += `<strong>User Name:</strong> ${req.params.userName}<br/>`;  //รหัสผู้ใช้
  myData += `<strong>Order ID:</strong> ${req.params.orderId}<br/>`;  //รหัสออเดอร์
  myData += `<strong>Book Title:</strong> ${req.params.bookTitle}<br/>`; //ชื่อหนังสือ
  myData += `<strong>Quantity:</strong> ${req.params.quantity}<br/>`; //จำนวน
  myData += `<strong>Price:</strong> ${req.params.price} THB<br/>`; //ราคาต่อ1
 // คำนวณราคาทั้งหมด
const totalPrice = req.params.quantity * req.params.price;
  myData += `<strong>Total Price:</strong> ${totalPrice} THB<br/>`;

  res.set('Content-type', 'text/html');
  res.send(myData);
});
app.post('/', (req, res) => {
  res.send('Hello World in POST method!');
});
app.listen(port, () => {
 console.log(`Example app listening on port ${port}`);
});
