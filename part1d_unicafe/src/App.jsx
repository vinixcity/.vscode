import { useState } from 'react'

const StatisticLine = ({ text, value }) => {
  return (
    <div>
      {text} {value}
    </div>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad
  const average = all === 0 ? 0 : (good - bad) / all
  const positive = all === 0 ? 0 : (good / all) * 100

  if (all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return (
    <div>
      <StatisticLine text="GOOD" value={good} />
      <StatisticLine text="NEUTRAL" value={neutral} />
      <StatisticLine text="BAD" value={bad} />
      <StatisticLine text="ALL" value={all} />
      <StatisticLine text="AVERAGE" value={average.toFixed(2)} />
      <StatisticLine text="POSITIVE" value={positive.toFixed(1) + ' %'} />
    </div>
  )
}

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

export const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleGoodClick} text="GOOD" />
      <Button onClick={handleNeutralClick} text="NEUTRAL" />
      <Button onClick={handleBadClick} text="BAD" />

      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}
export default App