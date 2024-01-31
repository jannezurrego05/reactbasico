import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({children}){
 //estado para agregar el arreglo
 const {
    item : todos, 
    saveItem : saveTodos,
    loading,
    error,  
  }=useLocalStorage('V1',[]);
  
  //estado para buscar
  const [searchValue, setSearchValue]= React.useState('');

  //
  const [openModal, setOpenModal]= React.useState(true);
//contante para filtrar los completados 
  const completedTodos = todos.filter(todo =>
    !!todo.completed).length;

    //console.log('log 1');
    React.useEffect(()=>{
      //console.log('log dos 2');
    },[]);

   // console.log('log 3');

    


    //contante para totalizar el arreglo
    const totalTodos =todos.length;
    // filta lo de searchValue , para minusculas toLowerCase
    const searchedTodos =todos.filter((todo)=>{
      const todoText=todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  //console.log("escribiendo a : "+searchValue);  
  
  //addTodo
  const addTodo= (text)=>{
    const newTodos =[...todos];
    newTodos.push({
      text,
      completed:false,
    });
    saveTodos(newTodos);

  };
  
  //constante para completar 
  const completeTodo =(text)=>{
    //crear una nueva copia
    const newTodos =[...todos];
    const todoIndex = newTodos.findIndex(      
      (todo)=>todo.text ===text);
      newTodos[todoIndex].completed =true;
      saveTodos(newTodos);
  };
  

  //constante para eliminar 
  const deleteTodo =(text)=>{
    //crear una nueva copia
    const newTodos =[...todos];
    const todoIndex = newTodos.findIndex(      
      (todo)=>todo.text ===text);
      newTodos.splice(todoIndex,1);
      saveTodos(newTodos);
  };


    return(
    <TodoContext.Provider value={
{
  loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    addTodo,
    deleteTodo,
    openModal, 
    setOpenModal,
  
}

    }>
      {children}

    </TodoContext.Provider>


    );
}

export {TodoContext, TodoProvider};