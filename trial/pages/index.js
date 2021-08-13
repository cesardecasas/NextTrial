import styles from '../styles/Home.module.css'
import React,{useState} from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'

const Home=()=> {
  const [number, setNum] = useState(0)
  const router = useRouter()

  const increment =()=>{
    setNum(number+1)
  }

  return (
    <div className={styles.container}>
      <h2>Hello world</h2>
      <Link href='/counter'>
        <a>
          Counter
        </a>
      </Link>

      <button onClick={() => router.push('/counter')}>Press me</button>
     
    </div>
  )
}

export default Home
