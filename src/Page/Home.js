import { useState } from "react";

import MyHeader from './MyHeader';
import TodoItem from "../component/TodoItem";



const Home=()=>{
    const [data, setData]=useState();
 const onSubmit=(e)=>{
    e.preventDefault();
    //  if(content===""){
    //    console.log("리스트를 작성해주세요");
    //     return;}
    }
     


 return (
   <div className="App">
     <h1>Hello</h1>
     <form onSubmit={onSubmit}>
        <MyHeader 
            text={"+"}
        />
        <TodoItem data={data}/>
     </form>

   </div>
 );
}

export default Home;