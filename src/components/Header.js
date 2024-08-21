import React from 'react'
import { useState } from 'react'
import '../index.css'
import image from './cookie.png'
import { motion } from "framer-motion"

const Header = () => {
    const [counter,setCounter] = useState(0);
    const handleClick = ()=> {
        setCounter(counter+1);
    }
      return (
        <div className='button'>
            <h1> Cookies {counter}</h1>
            
            <motion.div
             onClick={handleClick}
      className="pic"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    ><img className='pic' src={image} alt='pic' /></motion.div>
        </div>
      )
}

export default Header