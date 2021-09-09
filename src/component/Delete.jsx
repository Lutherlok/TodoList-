import React from "react"

function Delete(props){
    return(
    <ul>
        <li onClick={()=>{props.delete(props.id)}}>{props.row}</li>
    </ul>

    )
}

export default Delete