import  { useState } from 'react';
import '../index.css'


const Home = () => {
const [counter,setCounter] = useState(0);
const handleClick = ()=> {
    setCounter(counter+1);
}
  return (
    <div className='button'>
        <h1> Cookies {counter}</h1>
        <button onClick={handleClick} ><img src='cookie.png' alt='pic'/></button>
    </div>
  )
}

export default Home