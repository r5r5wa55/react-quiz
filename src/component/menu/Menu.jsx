import React, { useContext } from 'react'
import { DateContext } from '../../App'

export default function Menu() {

    const {setAppState} = useContext(DateContext)

  return (
    <div className='menu'>
      <h1>menu</h1>
      <button onClick={()=>setAppState("quiz")}>กดเพิ่อเรื่ม</button>
    </div>
  )
}
