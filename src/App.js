import React from 'react';
import ParticipantList from './ParticipantList'

function App(props) {
  return (
    <main className='App'>
      <div className="participants-list">
        <ParticipantList participants={props.participants} />
      </div>
    </main>
  );
}

export default App;
