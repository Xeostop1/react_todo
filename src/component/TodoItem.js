const TodoItem=({data})=>{
    return(
        <div className="TodoItem">
            <ul>
                {data.map((it,i)=> <li key={i}>{it}</li>)}
            </ul>
        </div>
    )
}
export default TodoItem;