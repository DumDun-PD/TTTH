import React from 'react';

const MealsContext = React.createContext();
// tạo 1 context làm kênh truyền tải cho các component con mà không cần phải truyền props

const todaysMeals = ["Baked Beans", "Baked Potatoes", "Baked Sweet Potatoes"]
// mảng chứa các chuỗi tên thức ăn làm dữ liệu

const MealsProvider = ({ children }) => {

  const [meals, setMealsList] = React.useState(todaysMeals);

  return (
    <MealsContext.Provider value={{ meals }}>
      {children}
    </MealsContext.Provider>
    // nguồn cấp phát dùng để chia sẻ state cho bất kì component con nào nằm ở bền trong nó
  )
}
// State meals quản lý danh sách món ăn

export const useMealsListContext = () => React.useContext(MealsContext);
// Custom  Hook giúp các component khác gọi nhanh hơn gọn hơn thay vì phải hỏi trực tiếp ở nhiều nơi
export default MealsProvider;
// Xuất provider chính để bọc lấy các component cấp cao hơn trong App.js