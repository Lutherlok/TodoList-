import React,{useState} from "react"
import Addlist  from './component/Addlist';
import Delete from "./component/Delete"

function App() {
  const[rows,setRows]= useState([])

  function handleClick(task){
    setRows((prevValue) => {
        return([...prevValue,task])
    })
  };   

  function deleteRow(id){
    setRows((prevValue)=>{
      return prevValue.filter((item,index) =>{
        return index !== id
      })
    })
  }

  return (
    <div>
      <Addlist add={handleClick} />
      {rows.map((row,index)=>{return (<Delete key={index} id={index} delete={deleteRow} row={row} />) })}
    </div>
  );
}

export default App;
