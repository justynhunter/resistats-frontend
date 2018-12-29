import React from 'react';
import RecentGameList from './Components/Game/RecentGameList'

class App extends React.Component {

  constructor() {
    super();

    // state
    this.state = {
      players: [],
      dateStarted: {},
      games: {}
    };

    // fake data for front end development
    this.state.games = [
      {
        game_id: 1,
        datePlayed: new Date('2018-12-25 12:35 PM'),
        winner: 'spies',
        players: [
          {
            name: 'Jim Halpert',
            team: 'spies'
          },
          {
            name: 'Pam Beasley',
            team: 'spies'
          },
          {
            name: 'Dwight Schrute',
            team: 'resistance'
          },
          {
            name: 'Ryan Howard',
            team: 'resistance'
          },
          {
            name: 'Andy Bernard',
            team: 'resistance'
          }
        ]
      },
      {
        game_id: 2,
        datePlayed: new Date('2018-12-25 12:54 PM'),
        winner: 'spies',
        players: [
          {
            name: 'Jim Halpert',
            team: 'spies'
          },
          {
            name: 'Pam Beasley',
            team: 'spies'
          },
          {
            name: 'Dwight Schrute',
            team: 'resistance'
          },
          {
            name: 'Ryan Howard',
            team: 'resistance'
          },
          {
            name: 'Andy Bernard',
            team: 'resistance'
          }
        ]
      },
      {
        game_id: 3,
        datePlayed: new Date('2018-12-25 01:31 PM'),
        winner: 'resistance',
        players: [
          {
            name: 'Jim Halpert',
            team: 'spies'
          },
          {
            name: 'Pam Beasley',
            team: 'spies'
          },
          {
            name: 'Dwight Schrute',
            team: 'resistance'
          },
          {
            name: 'Ryan Howard',
            team: 'resistance'
          },
          {
            name: 'Andy Bernard',
            team: 'resistance'
          }
        ]
      }
    ];    
  }

  // events

  // render
  render() {
    return ( 
      <div>
        <a href="/game/new">Start a New Game</a>
        <RecentGameList Games={this.state.games} />
      </div>
    );
  }
}

export default App;