import { useState, useRef } from "react";

function App() {
  const [todoList, setTodoList] = useState([])
  let todoComponentList = todoList?.map((todo) => <TodoComponent todo={todo} remove = {removeTodoComponent} ></TodoComponent> )

  const [input, setInput] = useState("")
  const [id,setId] = useState(1)
  const onChange = (event) => {
    const value = event.target.value;
    setInput(value)
  };
  function addTodoComponent(newTodo) {
    setTodoList([...todoList,newTodo])
  }
  function removeTodoComponent(id) {
    setTodoList([...todoList.filter((todo)=> todo.id !== id)])
  }
  return (
    <div className="App">
      {todoComponentList}
      <MyInput onChange = {onChange} input={input}></MyInput>
      <AddButton add={()=>{
        let newTodo = {id:id, name:input}
        setId(id+1)
        addTodoComponent(newTodo)
        setInput("")
      }}></AddButton>
    </div>
  );
}

// 투두 id
// 투두 내용

function MyInput(props) {
  return (
    <input
      type="text"
      placeholder="글을 쓰세요"
      value={props.input}
      onChange={props.onChange}
    ></input>
  );
}
function TodoComponent(props) {
  return (
   <div>
    <tr>
      <td><h1>{props.todo.name}</h1></td>
      <td><button onClick={()=>{
        props.remove(props.todo.id)
        console.log(props.todo.id)
      }}>삭제</button></td>
    </tr>
   </div> 
  );
}
function AddButton(props) {
  return (
    <div>
      <button onClick={props.add}> 추가하기 </button>
    </div>
  );
}

export default App;
