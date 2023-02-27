function formatDate(value){
    const date = new Date(value);
    return `${date.getFullYear()}, ${date.getMonth()+1}, ${date.getDate()}`;
}

function ReviewListItem({item}){
    return (
        <div className="ReviewListItem">
            <img className="ReviewListItem_img" src={item.imgUrl} alt={item.title}/>
            <div>
                <h1>{item.title}</h1>
                <p>{item.rating}</p>
                <p>{formatDate(item.createdAt)}</p>
                <p>{item.content}</p>
            </div>
        </div>
    );
}

function ReviewList({items}) { // items라는 배열을 prop으로 받음 -> items에 있는 각 요소를 리액트로 렌더링할 것임!
  return <ul>{items.map((item)=>{
        return <li><ReviewListItem item={item}/></li>;
    })}
    </ul>;
}

export default ReviewList;
