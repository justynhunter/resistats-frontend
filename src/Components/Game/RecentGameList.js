import React from 'react';

class RecentGameList extends React.Component {
  render() {
    const {games} = this.props;

    const items = games.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.datePlayed}</td>
          <td>{item.winner}</td>
          <td><a href={"/game/" + item.game_id}>Details</a></td>
        </tr>
      )
    })
    return (
      <table>
        <thead>
          <tH>Date Played</tH>
          <th>Winner</th>
          <th></th>
        </thead>
        {items}
      </table>
    )
  }
}