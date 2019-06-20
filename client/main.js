// import defaultVal, {
//   greetUser,
//   name
// } from './../imports/utils'
// console.log(`Log from client side /client/main.js`)
// console.log(`greetUser = ${greetUser()} ${name}`)
// console.log(`exportu cu default este = ${defaultVal}`)

import React from 'react'
import ReactDOM from 'react-dom'
import {Meteor} from 'meteor/meteor'
import {Tracker} from 'meteor/tracker'
import {Players, calculatePlayerposition} from './../imports/api/players'
import App from '../imports/ui/App'

Meteor.startup(() => {

  Tracker.autorun(() => {
    let players = Players.find({},{sort: {score: -1}}).fetch()
    let positionedPlayers = calculatePlayerposition(players)
    let title = "Score Keep"
    let subtitle = "Created by Ciu"
 
    ReactDOM.render(<App title={title} subtitle={subtitle} players={positionedPlayers}/>, document.getElementById('app'))
  })


})