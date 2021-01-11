import React, { useState, useContext } from 'react'
import { ThemeContext } from './App';

export default function CounterHooks({initialCount}) {
    const [count, setCount] = useState(initialCount);
    const style = useContext(ThemeContext)

    const additionHandler = () => {
        setCount(prevCount=> prevCount + 1)
    };
    return (
        <div>
                <button style={style} onClick={() => setCount(prevCount => prevCount -1)}>-</button>
                <span>{count}</span>
                <button style={style} onClick={additionHandler}>+</button>
            </div>
    )
}
 
const fruits = ['mango', 'banana', 'pawpaw', 'orange']
  fruits.forEach(f => (
      console.log(f)
  ));

const Churches = ['JW', 'Redeem', 'MFM', 'CAC']
    Churches.map(fruit => (
        console.log(fruit)
    ));