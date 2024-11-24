import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ListGroup from './ListGroup';


function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
      <ListGroup />
      
      <p>The youtube video for this <a href='https://www.youtube.com/watch?v=SqcY0GlETPk' target='_blank'>tut</a></p>
    </div>
  )
}

export default App;
