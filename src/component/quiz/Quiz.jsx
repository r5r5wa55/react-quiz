import React, { useContext, useEffect, useState } from 'react'
import QuestionsData from '../../data/QuestionsData'
import { DateContext } from '../../App';


export default function Quiz() {

  const [curren, setCurren] = useState(0);
  const [question, setQuestion] = useState("");
  const {score,setScore,setAppState} = useContext(DateContext)

  useEffect(()=>{
      checkAnswer()
  })
 
  const checkAnswer =()=>{
    if(question !==""){
      if(question === QuestionsData[curren].answer){
        setScore(score+1)
        nextQuestion()
      }else{
        nextQuestion()
      }
    }
  }
  const nextQuestion =()=>{
    if(curren === QuestionsData.length-1){
      setAppState("score")
    }
    setCurren(curren+1);
    setQuestion("");


  }


  console.log(question);
  return (
    <div className='quiz'>
      <h1>{QuestionsData[curren].question}</h1>
      <button onClick={()=>setQuestion("A")}>{QuestionsData[curren].A}</button>
      <button onClick={()=>setQuestion("B")}>{QuestionsData[curren].B}</button>
      <button onClick={()=>setQuestion("C")}>{QuestionsData[curren].C}</button>
      <button onClick={()=>setQuestion("D")}>{QuestionsData[curren].D}</button>
      <p>{`${curren+1}/${QuestionsData.length}`}</p>
    </div>

  )
}
