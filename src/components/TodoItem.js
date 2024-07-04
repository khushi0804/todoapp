import React from 'react';
import '../App.css';

function TodoItem({ task, deleteTask, toggleCompleted }) {
function handleChange() {
 toggleCompleted(task.id);
 }
 
 return (
    <div>
        <h5>Task Added</h5>
 <div className="todo-item">
 <input 
 type="checkbox"
 checked={task.completed}
 onChange={handleChange}
 />
<p>{task.text}</p>
<button onClick={() => deleteTask(task.id)}>
 X
 </button>
 </div>
 </div>
 );
}
export default TodoItem;