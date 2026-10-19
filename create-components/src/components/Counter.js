import { useMealsListContext } from "../providers/MealsProvider";

const Counter = () => {
  const { meals } = useMealsListContext();
  // khai báo function component và sử dụng destructuring để lấy mảng
  return (
    <div>
      <h3>Number of meals today: {meals.length}</h3>
    </div>
  )
  // đếm số phần tử có trong mảng
}
export default Counter