import { useState } from 'react'
import './App.css'


function App() {
  const[todos, setTodos] = useState([
    "Go for a walk",
    "Buy groceries",
    "Read a book",
    "Play badminton",
  ]);

  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState("");

  function deleteTodo(ind){
    let newArr = [...todos]; 
    newArr.splice(ind, 1);
    setTodos(newArr);
  }

  function addTodo(e){
  e.preventDefault();

  if(input.trim() == ""){
    return;
  }

  setTodos([...todos, input]);
  setInput("");
}

function getInput(e){
  setInput(e.target.value);
}

function editTodo(ind){
  setInput(todos[ind]);
  setEditIndex(ind);
}

function updateTodo(e){
  e.preventDefault();

  let newArr = [...todos];
  newArr[editIndex] = input;

  setTodos(newArr);
  setInput("");
  setEditIndex(null);
}


  let result = todos.map((todo, index) => {
    return <div key={index} className='todoList'>{todo}
    <button style={{marginLeft:"10px",backgroundColor:"red", padding:"10px",cursor:"pointer", color:"white", border:"none"}} onClick={() => deleteTodo(index)}>Delete</button>
    <button style={{marginLeft:"10px",backgroundColor:"green",padding:"10px",cursor:"pointer",color:"white", border:"none"}} onClick={() => editTodo(index)}>Edit</button>
    </div>
  });

  return (
   <>
    <h1 style={{textAlign:"center"}}>My Todo List</h1>
    <ul>
      <div>
        <form style={{display:"flex", justifyContent:"center", marginBottom:"20px"}}>
          <input type="text" placeholder='Add a new todo' style={{padding:"10px", width:"300px", marginRight:"10px"}} onChange={getInput} value={input}/>
          <button style={{padding:"10px", backgroundColor:"blue", color:"white",cursor:"pointer",border:"none"}} onClick={addTodo}>Add</button>
          <button style={{padding:"10px", backgroundColor:"blue", color:"white",marginLeft:"10px",cursor:"pointer",border:"none"}} onClick={updateTodo}>Update</button>
        </form>
      </div>
      <div>
        {result}
      </div>
      
    </ul>

    </>
  )
}

export default App
