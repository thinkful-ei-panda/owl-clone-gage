import React from 'react';

export default function User(props){

      
            return (<div key={props.id} className="contact-on-stage">
                <div>
                    <h6>{props.name}</h6>
                </div>
                <div>
                   <img src={props.avatar} className="user-img" alt={props.name}/> 
                </div>
            </div>)   
        
};
