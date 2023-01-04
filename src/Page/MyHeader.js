import { useState } from 'react';
const MyHeader=({text})=>{

    const [data, setData]=useState(" ");
    const [todoList, setTodoList]=useState([]);
    const onChange=(e)=>{
        setData(e.target.value);
        console.log(data);
    }
    const onSumit=(e)=>{
        e.preventDefault();
        if(data===""){
            alert("할일을 적어주세요");
            return;
        }
        setTodoList(curArr=>[data, ...curArr])
    }

return (
    <div className="MyHeader">
        <form onSubmit={onSumit}>
            <input
                onChange={onChange}
            ></input>
            <button>{text}</button>
        </form>
    </div>

)

}
export default MyHeader;
