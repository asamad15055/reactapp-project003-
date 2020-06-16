import React from 'react' ;

function Felix(props)
{   
    return(
        <div >
            <strong>Receiving time and date from App Component.<br/></strong>
            Time right now is : {props.time} <br/>
                Date is : {props.date}
        </div>
    ) ;

}

export default Felix ;