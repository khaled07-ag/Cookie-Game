import React from 'react'
import { useState } from 'react'
import '../index.css'
import image from './cookie.png'

const Header = () => {
    const [counter,setCounter] = useState(0);
    const handleClick = ()=> {
        setCounter(counter+1);
    }
      return (
        <div className='button'>
            <h1> Cookies {counter}</h1>
            <button className='pic' onClick={handleClick}  ><img className='pic' src={image} alt='pic' /></button>
        </div>
      )
}

export default Header