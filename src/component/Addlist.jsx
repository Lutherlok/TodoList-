import React, { useState } from "react"

function Addlist(props){

    const[task,setTask] = useState("")
    
    function handleChange(event){
        const newTask = event.target.value;
        setTask(newTask)
    };

    return(<div>
        <input onChange={handleChange} type="text" value={task} />
        <button onClick={()=>{props.add(task); setTask("")}} type="submit"><span>Submit</span></button>
    </div>
    );
}

export default Addlist