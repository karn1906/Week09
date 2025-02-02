import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());

const myOrder = [
  {
    "orderId": "ORD001",
    "orderDate": "01/01/2025 11:00:00",
    "orderTotal": 2000,
    "orderStatus": 10,
    "orderBy": "Dog"
  },
  {
    "orderId": "ORD002",
    "orderDate": "01/01/2025 12:00:00",
    "orderTotal": 2100,
    "orderStatus": 20,
    "orderBy": "Cat"
  },
  {
    "orderId": "ORD003", 
    "orderDate": "01/01/2025 13:00:00", 
    "orderTotal": 1500, 
    "orderStatus": 10,
    "orderBy": "Fox"
  },
];

app.get('/orders/:ordid', (req, res) => { 
  let orderId = req.params.ordid;
  const result = myOrder.filter((objOrd, index) => { 
    return objOrd.orderId == orderId
  })
    res.send(result[0]);
})

app.get('/orders', (req, res) => {
  res.send(myOrder);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/toDoLists/:userId/:orderId', (req, res) => {
  let myData = "<h1>My Profile</h1>";
  myData += "<strong>User ID: </strong>  " + req.params.userId + "<br/>";
  myData += "<strong>Order ID: </strong> " + req.params.orderId + "<br/>";
  res.set('Content-type', 'text/html');
  res.send(myData);
});

app.post('/', (req, res) => {
  res.send('Hello World in POST method!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});