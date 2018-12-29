import React from 'react';

class RecentGameList extends React.Component {
  render() {
    console.log(this.props);
    const {Games} = this.props;

    const rows = Games.map((game) => 
        <tr>
          <td>{game.datePlayed.toString()}</td>
          <td>{game.winner}</td>
          <td><a href={"/game/" + game.game_id}>Details</a></td>
        </tr>
    );

    return (
      <table>
        {rows}
      </table>
    );
  }
}

export default RecentGameList;