import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function Card(props){
  const name = props.data.name;
  const role = props.data.role; 
  return (
    <div>
      <h1>{name}</h1>
      <h2>{role}</h2>
    </div>
  );
}


function App() {
  // const [count, setCount] = useState(0)
  const user = { name: "Sarah", role: "Engineer" }; 
  return (
    <>
      <Card data={user} />
    </>
  )
}

export default App
