import ReviewList from "./ReviewList";
import items from "../mock.json"; // items라는 이름으로 mock.json파일을 import함
import { useState } from "react";

function App() {
  // 프로젝트의 최상위 컴포넌트
  const [order, setOrder] = useState("createdAt");
  const sortedItems = items.sort((a, b) => b[order] - a[order]); //order State값이 createdAt에 있을 때는 최신순으로 정렬되고, rating일 때는 평점이 높은 베스트순으로 정렬이 됨

  return (
    <div>
      <ReviewList items={sortedItems} />
    </div>
  );
}

export default App;
