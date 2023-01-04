import './App.css';
import Home from './Page/Home';





function App() {
 return(<Home/>);
  
}

export default App;

//인풋의 변화가 있었을때 무엇인가 하고 싶다면
//input에 onChange 함수를 걸어주고
//벨류값을 가지고 click후 뭔가 일어났으면 onclick을 걸어준다
//onInputChange의 값을 확인 하고 싶다?? → 그러면 useState 상태 값 저장 변수(앞쪽에 쓰여져 있는)을 콘솔에 찍어보자
//이걸 인풋에 넣지말고!!! ul, li, 또는 sapn으로 넣어도 되고!  수정하는거는 innerText로 수정하면 된다~~ 