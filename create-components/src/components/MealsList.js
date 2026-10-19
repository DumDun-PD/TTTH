import { useMealsListContext } from "../providers/MealsProvider";
// Hook chứa danh sách dữ liệu bữa ăn mà các component khác có thể chia sẻ chung.  

const MealsList = () => {
  const { meals } = useMealsListContext();

  // Hàm khai báo một functional Component để lấy ra một mảng dữ liệu từ context được cung cấp cao hơn

  return (
    <div>
      <h1>Meals List using context API</h1>
      {meals.map((meal, index) => (
        <h2 key={index}>{meal}</h2>
      ))}
    </div>
  );
}

// Hàm map() duyệt qua mảng dữ liệu  meals  để lấy món ăn
// thuộc tính key={index} nhận diện từng phần tử riêng biệt khi render danh sách 
// và mỗi món ăn được bọc trong 1 thẻ h2

export default MealsList;