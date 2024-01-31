import React from "react";
//crear funcion para manejar localStorage
function useLocalStorage(itemName, initialValue){
  const[item, setItem] = React.useState(initialValue);
 //estado para detectar  carga
  const[loading, setLoading] = React.useState(true);
    
   //estado para detectar  error
   const[error, setError] = React.useState(false);
    
    //useEfect
    React.useEffect(()=>{
      setTimeout(()=>{
        try{
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
    
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
                
          }
          else{
            parsedItem =JSON.parse(localStorageItem);
            setItem(parsedItem);
        
          } 
           setLoading(false)
    
        } catch(error){
          setLoading(false);
          setError(true+"error 1");
        }

      },2000);
    
  },[] );
  
    
    
  
    //actualiza estado y localstorage
    const saveItem = (newItem) =>{
      localStorage.setItem(itemName, JSON.
      stringify(newItem));
  
      setItem(newItem);
  
    };
    return {
      item, 
      saveItem, 
      loading, 
      error,
    };
  
  }

  export{useLocalStorage};