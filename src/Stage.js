import React from 'react';
import User from './Stageuser'

class Stage extends Component {

    static defaultProps = {
        name : '',
        avatar : '',
        inSession : false,
        onStage : false,
    }
            

        render() {

            return (
                <div>
        <div className='big-img'>
            
        </div>
        <div className = small-img>

        </div>
    </div>
            )
    
        
        

        <User
        />
    }
}
    


export default {
    Stage,
}