import { useState } from "react";
import Header from "./components/Header/Header"
import UserInput from "./components/UserInput/UserInput"
import Results from "./components/Header/Results/Results";

function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestemnt: 1200,
    expectedReturn: 6,
    duration: 10
  });


  const handleChange = (inputIdentifier, newValue) => {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue
      }
    })
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleChange} userInput={userInput}/>
      <Results input={userInput}/>
    </>
  )
}

export default App
