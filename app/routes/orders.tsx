import React, { useState, useEffect } from "react"; 
import MyMenu from "./templates/mymenu";
import MyFooter from "./templates/myfooter";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const respData = await fetch('http://localhost:3000/orders'); 
        if (!respData.ok) {
          throw new Error("Network response was not ok.");
        }
        const respJson = await respData.json();
        setOrders(respJson); 
      } catch (error) {
        alert("Error fetching data: " + error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <p className="m-5 text-black">Loading...</p>
    );
  }
  return (
    <div className="m-0">
      <MyMenu />
      <div className="m-5">
        <h1 className="text-xl font-bold p-2 mb-5 text-black border-l-8 border-teal-600">รายการคำสั่งซื้อ</h1> 
        <div className="flex flex-row justify-center">
          {orders.map((item, index) =>
            <div className ="m-3 p-5 border border-green-600 bg-green-800 text-white rounded" key={index}> 
            รหัสคำสั่งซื้อ : {item.orderId} <br /> 
            วันที่ : {item.orderDate} <br />
            สถานะ : {item.orderStatus} <br />
              <div className="mt-1 p-3 bg-green-900 border border-green-600 rounded text-center">
                <a href={`/order/${item.orderId}`} className="text-white"> 
                รายละเอียด
                </a>
              </div>
            </div>
            )
          }
        </div>
      </div>
      <MyFooter />
    </div>
  );
}
export default Orders;
