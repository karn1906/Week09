import React, { useState, useEffect } from "react";
import { useParams } from "@remix-run/react";
import MyMenu from "./templates/mymenu";
import MyFooter from "./templates/myfooter";

function Order() {
  const [order, setOrder] = useState([]); 
  const [isLoading, setIsLoading] = useState(true);
  const { ordid } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const respData = await fetch(`http://localhost:3000/orders/${ordid}`); 
        if (!respData.ok) {
          throw new Error("Network response was not ok.");
        }
        const respJson = await respData.json();
        console.log(respJson);
        setOrder(respJson); 
      } catch (error) {
        alert("Error fetching data: " + error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  },[]);

  if (isLoading){ 
    return (
      <p className="m-5">Loading...</p>
    );
  }

  return (
    <div className="m-0 text-black">
      <MyMenu />
      <div className="m-5">
        <h1 className="text-xl font-bold p-2 mb-5 text-black border-s-8 border-teal-600">รายการคำสั่งซื้อ</h1> 
        <div className="flex flex-row justify-center">
          <div className="m-3 p-5 border border-green-600 bg-green-800 text-white rounded">
            รหัสคำสั่งซื้อ: {order.orderId} <br />
            วันที่: {order.orderDate} <br />
            ราคารวม: {order.orderTotal} <br />
            สถานะ: {order.orderStatus} <br />
            ผู้สั่งซื้อ: {order.orderBy} <br />
          </div>
        </div>
        <div className="mt-3 p-5 bg-green-600 border border-green-100 rounded  w-40 text-center">
          <a href="/orders" className="text-White"> 
            ย้อนกลับ
          </a>
        </div>
      </div>
      <MyFooter />
    </div>
  );
}

export default Order;