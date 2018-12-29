import React from 'react';
import PlayerList from './PlayerList';
import AddPlayerForm from './AddPlayerForm';

class PlayerSelector extends React.Component {
  constructor(props) {
    const initialState = {
      showNewPlayerForm: false
    }

    this.state = initialState;
  }

  addPlayer = event => {
    this.state.showNewPlayerForm = true;
  }

  render() {
    return(
      <div>
        <PlayerList/>
        <div>
          <button onClick={this.addPlayer}>Add new player</button>
          {
            this.state.showNewPlayerForm
            ? <AddPlayerForm addPlayerHandler={this.props.addPlayerHandler}/>
            : null
          }
        </div>
      </div>
    )
  }
}

export default PlayerSelector;