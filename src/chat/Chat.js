import React from 'react';

export default  function Chat(props) {

  const message = props.message ? props.message : '' ;

  const time = props.time ? new Date(props.time) : '' ;

    console.log('props =',props, 'time =', time,'message =' ,message)
  
    return(
      <div key={props.timestamp}>
        {props.time && <h6>{time.toString()}</h6>}
        <h6>{props.name}</h6>
        <p>{props.type}</p>
        {props.message && <p>{message}</p>}
      </div>
    )
    
}