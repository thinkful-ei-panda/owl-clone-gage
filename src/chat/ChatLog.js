import React from 'react';
import Chat from './Chat'


export default function Log(props) {
    const names = [];
    props.participants.forEach( o => names.push(o.name))

        const e = props.chatEvents

    return(
        <div>
            {e.map((o) => 
            <Chat
            name={names[o.participantId - 1]}
            type={o.type}
            message={o.message}
            time={o.time}
            timestamp={o.timestamp}
            />
        )}
        </div>
        
            
    )
}

