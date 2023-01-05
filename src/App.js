import './App.css';
import { useState } from 'react';
import TodoBoard from './component/TodoBoard';





function App() {
    const [data, setData]=useState(" ");
    const [list, setList]=useState([]);

    const onChang=(e)=>{
        setData(e.target.value)
    }
    const addItem=()=>{
        setList([data, ...list ]);
        // console.log(list);
    }
   
    return (
    <div className="App">
        <input value={data} onChange={onChang}/>
        <button onClick={addItem}>+</button>
        <TodoBoard content={list}/>
    </div>
    );
}

export default App;
//삭제를 위해서 매칭할 수 있는 인덱스나 키를 먼저 줘야 하나봐!

//인풋의 변화가 있었을때 무엇인가 하고 싶다면
//input에 onChange 함수를 걸어주고
//벨류값을 가지고 click후 뭔가 일어났으면 onclick을 걸어준다
//onInputChange의 값을 확인 하고 싶다?? → 그러면 useState 상태 값 저장 변수(앞쪽에 쓰여져 있는)을 콘솔에 찍어보자
//이걸 인풋에 넣지말고!!! ul, li, 또는 sapn으로 넣어도 되고!  수정하는거는 innerText로 수정하면 된다~~ 