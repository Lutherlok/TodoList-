import React,{useState} from "react"
import Addlist  from './component/Addlist';
import Delete from "./component/Delete"
import Header from "./component/Header"
import Footer from "./component/Footer"



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
    <div className="container">
      <Header />
      <div className="form">
        <Addlist add={handleClick} />
        {rows.map((row,index)=>{return (<Delete key={index} id={index} delete={deleteRow} row={row} />) })}
      </div>
    </div>
  );
}

export default App;
