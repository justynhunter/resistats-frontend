import React from 'react';

class PlayerList extends React.Component {
  render() {
    const {players} = this.props;

    const items = players.map((item, index) => {
      return (
        <li key={index}>{item.name}</li>
      )
    });
  
    return <ul>{items}</ul>;
  }
}

export default PlayerList;