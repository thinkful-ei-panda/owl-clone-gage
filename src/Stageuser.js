import React from 'react';

const User = function (props){

      
            return (<div className="contact-on-stage">
                <div>
                    <h6>{props.name}</h6>
                </div>
                <div>
                   <img src={props.img} className="user-img" alt={props.name}/> 
                </div>
            </div>)   
        
};

export default {
    User,
}