import ReviewList from "./ReviewList";
//import mockItems from "../mock.json"; // items라는 이름으로 mock.json파일을 import함
import { useEffect, useState } from "react";
import { getReviews } from "../api";

function App() {
  // 프로젝트의 최상위 컴포넌트
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const sortedItems = items.sort((a, b) => b[order] - a[order]); //order State값이 createdAt에 있을 때는 최신순으로 정렬되고, rating일 때는 평점이 높은 베스트순으로 정렬이 됨

  const handleNewClick = () => setOrder("createdAt");
  const handleBestClick = () => setOrder("rating");
  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id); // id를 바탕으로 filter 함수로 걸러낸 배열이 새로운 State값으로 변경됨
    setItems(nextItems);
  };

  const handleLoad = async () => {
    const { reviews } = await getReviews(); // response body에 있는 reviews라는 값을 Destructuring 하고
    setItems(reviews); // state 변경
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div>
      <button onClick={handleNewClick}>최신순</button>
      <button onClick={handleBestClick}>추천순</button>
      <ReviewList items={sortedItems} onDelete={handleDelete} />
    </div>
  );
}

export default App;
