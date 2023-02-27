import ReviewList from "./ReviewList";
import items from "../mock.json"; // items라는 이름으로 mock.json파일을 import함

function App() { // 프로젝트의 최상위 컴포넌트
    return <div><ReviewList items={items}/></div>
}

export default App;