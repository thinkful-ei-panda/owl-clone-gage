import Participant from './Participant'
import React, { Component } from 'react';
import store from './store'

class ParticipantList extends Component {
  static defaultProps = {
    participants: []
  };

  render() {

    const sorted = store.participantsSort();
    return (
      sorted.map( user => 
        <Participant 
        id={user.id} 
        src={user.avatar} 
        name={user.name} 
        statusS={user.onStage}
        online={user.inSession}
        />
      )
      
    )

  }
}

export default ParticipantList;