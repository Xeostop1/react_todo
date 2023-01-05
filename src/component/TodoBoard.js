import TodoList from "./TodoList";

function TodoBoard({content}) {
    //  console.log(content);
    return(
        <div className="TodoBoard">
            <h2>해야할일</h2>
            {content.map((it, i)=><TodoList item={it} index={i}/>)}
        </div>
    )
}

export default TodoBoard;
// app에서 배열로 받았으니까 
//여기서 맵핑해줘야함 