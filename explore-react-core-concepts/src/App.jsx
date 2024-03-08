import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from '../todo'
import Actor from './Actor'
import Singer from './Singers'
import BookStore from './BookStore'

function App() {

  const actors = ['Sakib', 'raj', 'Salman ka'];

  const singers =[
    {id: 1, name: 'Dr. Mahfuzur Rahman', age: 68},
    {id: 2, name: 'Eva Rahman', age: 58},
    {id: 3, name: 'pritom', age: 28},
  ]
  
  return (
    <>
      <h1>Vite + React</h1>
      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }

      <Actor name ={"Bappa Raz"}></Actor>
      {
        actors.map(actor =><Actor name={actor}></Actor>)
      }
      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Core concepts"isDone={false}></Todo> */}
      {/* <Device name="Laptop" price="55"></Device>
      <Device name="mobile" price="17"></Device>
      <Person></Person>
      <Student grade="7" score="99"></Student>
      <Student grade={12} score="85"></Student>
      <Student grade={20} score="90"></Student>
      <Developer></Developer> */}
    </>
  )
}

function Device(props){
 console.log(props)
 return <h2>This device: {props.name} price{props.price}</h2>
}

function Person(){
  const age = 25;
  const person = {name: 'sharif', age :12}
  return <h3> I am a {person.name} with age: {age}</h3>
}

const {grade, score} = {grade:'7', score: '99'};

function Student({grade, score}){
  console.log(grade, score);
  return <div>
    <h3>This is a student</h3>
   <p>Class: {grade}</p>
   <p>score: {score}</p>
  </div>
}
function Developer(){
  const developerStyle ={
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px',

  }
  return(
    <div style={developerStyle}>
      <h5>devo devo</h5>
      <p>Coding</p>
    </div>
  )
}
export default App
