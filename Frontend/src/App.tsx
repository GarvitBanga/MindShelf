import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "./components/ui/Button";
import { PlusIcon } from './icons/PlusIcon';
import { ShareIcon } from './icons/ShareIcon';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Button startIcon={<PlusIcon size='lg'/>} endIcon={<ShareIcon size='lg'/>} variant="primary" size="lg" text="Share" onClick={()=>{alert("clicked")}}/>
      <Button startIcon={<PlusIcon size='lg'/>} endIcon={<ShareIcon size='lg'/>} variant="secondary" size="lg" text="Sharesec" onClick={()=>{alert("clicked")}}/>
      <Button startIcon={<PlusIcon size='sm'/>} endIcon={<ShareIcon size='sm'/>} variant="secondary" size="sm" text="share" onClick={()=>{alert("clicked")}}/>
      <Button startIcon={<PlusIcon size='md'/>} endIcon={<ShareIcon size='md'/>} variant="secondary" size="md" text="share" onClick={()=>{alert("clicked")}}/>

      {/* <PlusIcon size="sm"/>
      <PlusIcon size="md"/>
      <PlusIcon size="lg"/> */}
    </>
  )
}

export default App
