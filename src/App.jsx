import './App.css'
import Greeting from './components/Greetings'
import Animals from './components/Animals'
import Button from './components/Button'

const handleButtonClick = (url) => {
  window.location.href = url;
};

function App() {
  return (
   <>
    <Greeting/>
    <Animals />
    <Button text="don't click me" color={'red'} fontSize={20}/>
    <Button text="click me" color={'green'} fontSize={18}/>
    <Button />
    <Button text="Google" handleClick={() => handleButtonClick("https://www.google.com")}/>
   </>
  )
}

export default App
