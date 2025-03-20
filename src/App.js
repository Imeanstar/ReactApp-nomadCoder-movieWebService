//실행시 npm start 를 cmd에 입력
import { useState, useEffect } from "react";


function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((val) => val + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  const iRunOnlyOnce = () => {
    console.log("i run only once");
  }
  useEffect(() => {
    if(keyword !== ""){
      console.log("SEARTCH FOR", keyword);
    }
  }, [keyword]);
  useEffect(iRunOnlyOnce, []);
  return (
    <div>
      <h1>Welcome back</h1>
      <input value={keyword} onChange={onChange} type="text" placeholder="Searching..." />
      <h3>the num is {counter}</h3>
      <button onClick={onClick}>Click Me!</button>
    </div>
  );
}

export default App;
