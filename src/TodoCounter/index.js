import './TodoCounter.css';
import React from 'react';
import {TodoContext} from '../TodoContext';
function TodoCounter(){
const {
    completedTodos,
    totalTodos,
} = React.useContext(TodoContext);
    

return(
    <>
    
  
 <h1>Felicitaciones ....</h1>      

<h1  className="TodoCounter">
    Has Completado <span> {completedTodos} </span> 
    de <span> {totalTodos} </span> TODOS
</h1>

</>
);

}
export{TodoCounter};