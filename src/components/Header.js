import React from 'react'
import { useState } from 'react'
import '../index.css'
import image from './cookie.png'
import { motion } from "framer-motion"

const Header = () => {
    //let i = 1;
    let m = 1;
    const [i,setI]=useState(1);
    const [counter,setCounter] = useState(0);
    const handleClick = ()=> {
        setCounter(counter+i);
        setMoney(money+i)
    }
    
    
      
    const [money, setMoney] = useState(0)
    const handleMoney = ()=>{
      
      setMoney(money-5);
      seI(i+1);
     }
    
     
  
    
    
    
      return (
        <div className='button'>
            <h1> Cookies {counter}</h1>
            <h2>${money}</h2>
            <motion.div
            onClick={handleClick}
            
            className="pic"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            ><img className='pic' src={image} alt='pic' /></motion.div>
            {money>=5  && <button onClick={handleMoney}>Buy Me</button>}
        </div>
      )
}

export default Header;