import React from 'react'

function Mediacard(props)
{
    return(
    <div align = "center">
        <h2>This is the title</h2>
        <h2> {props.title}</h2>
        <p>This is the body<br/>My cat name is {props.body} 
        
            
        </p>
    </div>
    );
}
//<img src = {props.imageurl} alt = {props.alt} width = {props.width} height = {props.height} ></img>
export default Mediacard;