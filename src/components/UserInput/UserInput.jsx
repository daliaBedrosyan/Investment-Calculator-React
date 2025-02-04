import { useState } from "react"

export default function UserInput() {

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

    return <section id="user-input">
        <div className="input-group">
            <p>
                <label htmlFor="">Initial Investemnt</label>
                <input type="number" required value={userInput.initialInvestment} onChange={(e) => handleChange('initialInvestment', e.target.value)}/>
            </p>
            <p>
                <label htmlFor="">Annual  Investemnt</label>
                <input type="number" required value={userInput.annualInvestemnt} onChange={(e) => handleChange('annualInvestemnt', e.target.value)}/>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label htmlFor="">Expected Return</label>
                <input type="number" required value={userInput.expectedReturn} onChange={(e) => handleChange('expectedReturn', e.target.value)}/>
            </p>
            <p>
                <label htmlFor="">Duration</label>
                <input type="number" required value={userInput.duration} onChange={(e) => handleChange('duration', e.target.value)}/>
            </p>
        </div>
    </section>
}