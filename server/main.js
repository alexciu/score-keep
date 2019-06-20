import {Meteor} from 'meteor/meteor'
import {Players} from './../imports/api/players'

Meteor.startup(() => {

  //console.log(Players.find().fetch()) 

  // class Person {
  //   constructor (name = 'Anonymous', age = 0){
  //     this.name = name
  //     this.age = age
  //   }
  //   getGreeting(){
  //     return `Hi! my name is ${this.name}.`
  //   }
  //   getPersonDescription(){
  //     return `${this.name} is ${this.age} year(s) old.`
  //   }
  // }


  // class Employee extends Person {
  //   constructor(name, age, title) {
  //     super(name, age)
  //     this.title = title
  //   }
  //   getGreeting(){
  //     if (this.title) {
  //       return `Hi! my name is ${this.name}. I work as a ${this.title}.`
  //     } else {
  //       return super.getGreeting()
  //     }
  //   }
  //   hasJob(){
  //     return !!this.title
  //   }
  // }

  // class Programmer extends Person {
  //   constructor(name, age, preferredLanguage = 'assembly') {
  //     super(name, age)
  //     this.preferredLanguage = preferredLanguage
  //   }
  //   getGreeting(){
  //     if (this.preferredLanguage) {
  //       return `Hi! my name is ${this.name}. I am a ${this.preferredLanguage} developer.`
  //     } else {
  //       return super.getGreeting()
  //     }
  //   }
  // }

  // let me = new Employee('Alex',32,'db admin')

  // console.log(me.getPersonDescription())
  // console.log(me.getGreeting())
  // console.log(me.hasJob())

  // let ciu = new Programmer('Ciu',32,'javascript')

  // console.log(ciu.getPersonDescription())
  // console.log(ciu.getGreeting())


})