function ReviewList({items}) { // items라는 배열을 prop으로 받음 -> items에 있는 각 요소를 리액트로 렌더링할 것임!
  return <ul>{items.map((item)=>{
        return <li>{item.title}</li>
    })}
    </ul>;
}

export default ReviewList;