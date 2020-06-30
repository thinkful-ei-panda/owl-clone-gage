import React, { Component } from 'react';

class ChatLog extends Component {

    static defaultProps = {
        participantId: 0,
        type: 'opps',
        timestamp: 0
      };
  
    render(props) {
      const { store } = this.props;

        return (
            <div className='messages'>
                
            </div>
        )

      }

    }
}