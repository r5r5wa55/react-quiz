import React, { useContext } from 'react'
import { DateContext } from '../../App'
import QuestionsData from '../../data/QuestionsData'




export default function Score() {
  
  const {setAppState ,score,setScore} = useContext(DateContext)

  const setAppStateOne =()=>{
    setAppState("quiz")
    setScore(0)
  }
  return (
    <div className='score'>
        <h1>ได้คะแนนทั้งหมด</h1>
        <h1>{`${score}/${QuestionsData.length}`}</h1>
        <button onClick={()=>{setAppStateOne()}}>ทำแบบทดสอบอีกครั้ง</button>
    </div>
  )
}
