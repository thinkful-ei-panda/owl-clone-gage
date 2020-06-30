import React from 'react';
import StageUser from './Stageuser';

export default function Stage (props){

    const sorted = props.participantsSort();



    
    return(
       <div>
           {sorted.map(o => {
               if(o.onStage){
                   return <StageUser
                    key={o.id}
                    name={o.name}
                    avatar={o.avatar}
                   />
               }
               }
               )
            }

       </div>
    )
        
    
                
            
}

