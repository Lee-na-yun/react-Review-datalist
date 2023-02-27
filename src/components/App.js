import ReviewList from "./ReviewList";
import items from "../mock.json"; // items라는 이름으로 mock.json파일을 import함

function App() { // 프로젝트의 최상위 컴포넌트
    const sortedItems = items.sort((a,b)=>b.rating - a.rating); //내림차순

    return <div><ReviewList items={sortedItems}/></div>
}

export default App;