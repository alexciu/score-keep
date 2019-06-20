import React from 'react'
import PropTypes from 'prop-types';
import {Players} from './../api/players'

export default class Player extends React.Component {
    render(){
      let itemClassName=`item item--position-${this.props.player.rank}`
      return (
        <div key={this.props.player._id} className={itemClassName}>
          <div className="player">
            <div className="">
              <h3 className="player__name">{this.props.player.name}</h3>
              <p className="player__stats"> {this.props.player.position} place - {this.props.player.score} point(s).</p>
            </div>
            <div className="player_actions">
              <button className="button botton--round" onClick={() => Players.update({_id: this.props.player._id} , {$set:{score:this.props.player.score-1}})}>-1</button>
              <button className="button botton--round" onClick={() => Players.update(this.props.player._id , {$inc:{score: 1}})}>+1</button>
              <button className="button botton--round" onClick={() => Players.remove({_id: this.props.player._id})}>X</button>
            </div>
          </div>
        </div>
      )
    }
  }


  Player.propTypes = {
    player: PropTypes.object.isRequired,

  }

    // (
  // <p key={player._id}>
  // {player.name} has {player.score} points(s)
  // <button onClick={() => Players.update({_id: player._id} , {$set:{score:player.score-1}})}>-1</button>
  // <button onClick={() => Players.update(player._id , {$inc:{score: 1}})}>+1</button>
  // <button onClick={() => Players.remove({_id: player._id})}>X</button>
  // </p>)