import ReviewList from "./ReviewList";
//import mockItems from "../mock.json"; // items라는 이름으로 mock.json파일을 import함
import { useEffect, useState } from "react";
import { getReviews } from "../api";

const LIMIT = 6;

function App() {
  // 프로젝트의 최상위 컴포넌트
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const [offset, setOffset] = useState(0);
  const sortedItems = items.sort((a, b) => b[order] - a[order]); //order State값이 createdAt에 있을 때는 최신순으로 정렬되고, rating일 때는 평점이 높은 베스트순으로 정렬이 됨
  const [hasNext, setHasNext] = useState(false); //초기값은 일단 false

  const handleNewClick = () => setOrder("createdAt");
  const handleBestClick = () => setOrder("rating");
  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id); // id를 바탕으로 filter 함수로 걸러낸 배열이 새로운 State값으로 변경됨
    setItems(nextItems);
  };

  const handleLoad = async (options) => {
    const { reviews, paging } = await getReviews(options); // response body에 있는 reviews라는 값을 Destructuring 하고
    if (options.offset === 0) {
      setItems(reviews); // offset값이 0일 때 items 전체를 바꾸고
    } else {
      setItems([...items, ...reviews]); // offset값이 0이 아닐 때는 spread문법으로 요소가 추가된 배열을 만들어 줌
    }
    setOffset(options.offset + reviews.length); // offset값 변경
    setHasNext(paging.hasNext);
  };

  // 다음페이지를 불러올 함수
  const handleLoadMore = () => {
    handleLoad({ order, offset, limit: LIMIT });
  }

  useEffect(() => {
    handleLoad({ order, offset: 0, limit: LIMIT });
  }, [order]);

  return (
    <div>
      <button onClick={handleNewClick}>최신순</button>
      <button onClick={handleBestClick}>추천순</button>
      <ReviewList items={sortedItems} onDelete={handleDelete} />
      <button disabled={!hasNext} onClick={handleLoadMore}>더 보기</button>
    </div>
  );
}

export default App;
