import { Link, useParams } from "react-router-dom";  // เพิ่ม Link ให้ถูกต้อง
import { books } from "./bookData";  // นำเข้าไฟล์ที่มีข้อมูลหนังสือ
import MyMenu from "./templates/mymenu";
import MyFooter from "./templates/myfooter";

// คอมโพเนนต์รายละเอียดหนังสือ
function BookDetail() {
  const { tid } = useParams(); // ใช้ useParams เพื่อดึง id ของหนังสือ
  const bookItem = books.find((book) => book.id.toString() === tid); // แปลง id เป็น string เพื่อเปรียบเทียบ

  if (!bookItem) {
    return <div>ไม่พบข้อมูลหนังสือนี้</div>;
  }

  return (
    <div className="m-0 bg-green-100 min-h-screen">
      <MyMenu />
      <div className="m-5">
        <h1 className="text-xl font-bold text-green-800">
          รายละเอียดหนังสือ
        </h1>
        <div className="p-5 flex flex-col justify-start">
          <img
            src={bookItem.imageUrl}  // ใช้ URL ของภาพหนังสือ
            alt={bookItem.title}
            className="w-48 h-72 object-cover mb-4 rounded"
          />
          <h3 className="text-2xl font-bold text-green-800">{bookItem.title}</h3>
          <p className="text-green-700 mt-2">รหัสหนังสือ: {bookItem.id}</p>
          <p className="text-green-700">ราคา: {bookItem.price} บาท</p>
          <p className="text-green-700 mt-2">คำอธิบาย: {bookItem.description}</p>
          <p className="text-green-700 mt-2">ผู้เขียน: {bookItem.Author}</p>
          <p className="text-green-700 mt-2">สำนักพิมพ์: {bookItem.Publishing}</p>
          <p className="text-green-700 mt-2">วันที่เพิ่ม: {bookItem.created}</p>
        </div>
        <div className="mt-3">
          <Link
            to="/bookStore"  // ลิงก์กลับไปยังหน้ารายการหนังสือ
            className="text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-green-900"
          >
            ย้อนกลับ
          </Link>
        </div>
      </div>
      <MyFooter />
    </div>
  );
}

export default BookDetail;
