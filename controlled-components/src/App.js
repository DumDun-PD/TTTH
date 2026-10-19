import { useState } from 'react';
// Khai báo State
import './App.css';

function App() {
  const [name, setName] = useState("");
  // Sử dụng react hook tạo biến state tên là name với một chuỗi rỗng ("").
  // setName: hàm cập nhật gtri cho biến name 

  const handleSubmit = (e) => {
    e.preventDefault();
    // ngăn chặn hành vi reload khi submit form

    setName("")
    // reset lại ô input về trạng thái trống sau khi submit

    console.log("Form submit!");
    // In ra thông báo console
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        {/* Hàm sử lý sự kiện handleSubmit khi người dùng bấm submit form */}
        <fieldset>
          <div className="Field">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              // Giá trị hiển thị trong ô input được đồng bộ hóa với toàn bộ biến name

              onChange={(e) => setName(e.target.value)}
            // Khi thay đổi ký tự trong ô input
            // sự kiện onChange kích hoạt
            // Lấy giá trị mới (e.target.value)
            // Gọi setName để cập nhật lại state
            />
            {/* controller Input */}
          </div>
          <button disabled={!name} type='submit'>
            Submit
          </button>
          {/* Thuộc tính disabled={!name} 
              có nghĩa là nút Submit sẽ bị vô hiệu hóa (không bấm được)
              nếu biến name đang rỗng ("").
              Ngay khi người dùng gõ chữ vào ô input,
              nút sẽ tự động sáng lên và cho phép bấm.
           */}
        </fieldset>
      </form>
    </div>
  );
}

export default App;
