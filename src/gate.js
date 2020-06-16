import React from 'react'

const Gate = ({isOpen}) =>(
    
    <div>
        The gate is :  
        <strong style = {{color:"red"}}> {isOpen === true ? "Open" : "Closed"}  </strong>
    </div>
)

export default Gate;