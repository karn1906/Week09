import { books } from "./bookData"; // นำเข้าไฟล์ที่มีข้อมูลหนังสือ
import MyMenu from "./templates/mymenu";
import MyFooter from "./templates/myfooter";

// แสดงสถานะการขายของหนังสือ
function AvailableCheck({ c }: { c: boolean }) {
  return (
    <span>
      {c ? `✔️` : `❌`} 
    </span>
  );
}
// แสดงรายการหนังสือ
export default function BookStore() {
  const availableBooks = books.filter((book) => book.available === true);
  const bookItems = availableBooks.map((book, index) => (
    <div className="m-3" key={index}>
 <a href={`/Detail/${book.id}`}
        className="block max-w-sm p-6 bg-green-50 border border-green-300 rounded-lg shadow hover:bg-green-100"
      >
        <img
          src={book.imageUrl}
          alt={book.title}
          className="w-full h-40 object-cover mb-4 rounded"
        />
        <b className="text-base text-green-700">
          <AvailableCheck c={book.available} />
        </b>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-800">
          {book.title }
        </h5>
        <p className="font-normal text-green-700">ราคา: {book.price} บาท</p>
      </a>
    </div>
  ));

  return (
    <div className="bg-green-100 min-h-screen">
      <MyMenu />
      <div className="m-5">
        <h1 className="text-xl font-bold text-green-800">หนังสือที่มีจำหน่าย</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {bookItems}
        </div>
      </div>
      <MyFooter />
    </div>
  );
}
