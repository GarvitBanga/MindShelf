import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "./components/ui/Button";
import { PlusIcon } from './icons/PlusIcon';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Button startIcon={<PlusIcon size='md'/>} variant="primary" size="sm" text="Button" onClick={()=>{alert("clicked")}}/>
      <Button variant="secondary" size="sm" text="Secondary" onClick={()=>{alert("clicked")}}/>
    </div>
  )
}

export default App
