import Participant from './Participant'
import React from 'react';

export default function ParticipantList(props){

    const sorted = props.participantsSort();
    
    return (
      <div>
       {sorted.map( user => 
        <Participant 
        id={user.id} 
        src={user.avatar} 
        name={user.name} 
        statusS={user.onStage}
        online={user.inSession}
        />
      )} 
      </div>
      
      
    )

}