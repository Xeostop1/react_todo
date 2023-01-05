
import { useState } from 'react';
function TodoList({item, index}) { 
    const [data, setData]=useState();

    const removeItem=(e)=>{
        
      console.dir(data);
      //console.log("hello",data);
        
    }
    return(
        <div className="TodoList">
            <span>{item}</span>
        <button onClick={removeItem}>x</button>
        </div>
        )
}
export default TodoList;