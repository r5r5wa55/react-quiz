import { createContext, useState } from "react";
import Menu from "./component/menu/Menu";
import Quiz from "./component/quiz/Quiz";
import Score from "./component/score/Score";
import "./app.css"

export const  DateContext = createContext()

function App() {

  const [appState,setAppState]=useState("menu")


  return (
    <DateContext.Provider value={{appState,setAppState}}>
     <div className="app">
        <h1>werapol</h1>
        {appState === "menu" && <Menu />}
        {appState === "quiz" && <Quiz />}
        {appState === "score" && <Score />}
      </div>
    </DateContext.Provider>
  );
}

export default App;
