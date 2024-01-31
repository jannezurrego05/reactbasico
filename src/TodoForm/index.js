import React from 'react';
import {TodoContext} from '../TodoContext';
import './TodoForm.css'
function TodoForm(){
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);
    
    //actualizar estado en el textarea
    const [newTodoValue, setNewTodoValue] = React.useState('');

    //evento boton
    const validar = (newTodoValue.length>=2) ? true : false;
    
    const onSubmit =(event)=>{
        event.preventDefault();
        if(!validar) return;        
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancel =()=>{
       setOpenModal(false);
    };

    const onChange =(event)=>{
    setNewTodoValue(event.target.value);
    };

return(
<form onSubmit={onSubmit}>
    <label> Escribe tu nuevo TODO </label>
    <textarea placeholder='Agregar productos'
     value={newTodoValue} 
     onChange={onChange}
     required />   
    
    <div className='TodoForm-buttonContainer'>
    <button type='button' onClick={onCancel}
    className='TodoForm-button
    TodoForm-button--cancel'>Cancelar
    </button >
    <button type='submit'
    className='TodoForm-button
    TodoForm-button--add'>Añadir
    </button>

    </div>

</form>


);

}

export{TodoForm};