export default function UserInput({ onChange, userInput }) {


    return <section id="user-input">
        <div className="input-group">
            <p>
                <label htmlFor="">Initial Investemnt</label>
                <input type="number" required value={userInput.initialInvestment} onChange={(e) => onChange('initialInvestment', e.target.value)}/>
            </p>
            <p>
                <label htmlFor="">Annual  Investemnt</label>
                <input type="number" required value={userInput.annualInvestemnt} onChange={(e) => onChange('annualInvestemnt', e.target.value)}/>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label htmlFor="">Expected Return</label>
                <input type="number" required value={userInput.expectedReturn} onChange={(e) => onChange('expectedReturn', e.target.value)}/>
            </p>
            <p>
                <label htmlFor="">Duration</label>
                <input type="number" required value={userInput.duration} onChange={(e) => onChange('duration', e.target.value)}/>
            </p>
        </div>
    </section>
}