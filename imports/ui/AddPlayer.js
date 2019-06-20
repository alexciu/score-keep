import React from 'react'
import {Players} from './../api/players'

//https://docs.mongodb.com/manual/reference/operator/update/
//,$currentDate: {modified: { $type: "date" }}

export default class AddPlayer extends React.Component {
    handleSubmit(e){
      e.preventDefault();
      let playerName = e.target.playerName.value

      if (playerName){
        e.target.playerName.value = ''
        Players.insert({
          name: playerName,
          score: 0, //this.props.score .bind(this)
        }
        )
      }
    }
    render(){
      return (
        <div className="item">
        <form className="form" onSubmit={this.handleSubmit}> 
          <input className="form__input" type="text" name="playerName" placeholder="Player name"></input>
          <button className="button">Add player</button>
        </form>
        </div>
      )
    }
  }