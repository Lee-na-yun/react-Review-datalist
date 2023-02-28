import "./ReviewList.css";

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}, ${date.getMonth() + 1}, ${date.getDate()}`;
}

function ReviewListItem({ item, onDelete }) {
  const handleDeleteClick = () => onDelete(item.id); // onDelete 함수를 item의 id값으로 실행함

  return (
    <div className="ReviewListItem">
      <img className="ReviewListItem_img" src={item.imgUrl} alt={item.title} />
      <div>
        <h1>{item.title}</h1>
        <p>{item.rating}</p>
        <p>{formatDate(item.createdAt)}</p>{" "}
        {/* createdAt이 숫자형이라 값을 formatDate함수로 만들어줌*/}
        <p>{item.content}</p>
        <button onClick={handleDeleteClick}>삭제</button>
      </div>
    </div>
  );
}

function ReviewList({ items, onDelete }) {
  // items라는 배열을 prop으로 받음 -> items에 있는 각 요소를 리액트로 렌더링할 것임!
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <ReviewListItem item={item} onDelete={onDelete} />
          </li>
        ); //ReviewListItem 컴포넌트 추가
      })}
    </ul>
  );
}

export default ReviewList;
