import React, { Component } from 'react';

class Participant extends Component {

  static defaultProps = {
    id: 0,
    name: 'defaultName',
    avatar: 'some.image',
    inSession: true,
    onStage: false
  };

  render() {
    const store = this.props;

    const status  = this.props.statusS ? 'on stage'
                      : this.props.online ? 'in session'
                        : 'left session' ;

    return (
      <div className='session-participant'>
        <img src={store.src} alt={store.name} className="user-avatar" />
        <div className="participant-info">
          <h6 className="participant-name">{store.name}</h6>
            <div className="participant-status participant-status__green">
            {status}
          </div>
        </div>
      </div>
    )
  }
}

export default Participant;