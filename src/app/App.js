import React from 'react';
import ParticipantList from '../participant/ParticipantList'
import Log from '../chat/ChatLog'
import Stage from '../stage/Stage'
import store from '../store'

function App(props) {
  return (
    <main className='App'>
      <div className="participants-list">
        <ParticipantList
         participants={store.participants}
         participantsSort={store.participantsSort}
          />
        
        <Log
        participants={store.participants}
        chatEvents={store.chatEvents}
        />
        <Stage
        participantsSort={store.participantsSort}
        />
      </div>
    </main>
  );
}

export default App;
