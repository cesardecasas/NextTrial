import styles from '../styles/Home.module.css'
import React,{useState} from 'react'

const counter=()=> {
  const [number, setNum] = useState(0)

  const increment =()=>{
    setNum(number+1)
  }

  return (
    <div className={styles.container}>
      <h2>Hello world</h2>
      <p>{number}</p>

      <button onClick={increment}>+</button>
    </div>
  )
}

export default counter