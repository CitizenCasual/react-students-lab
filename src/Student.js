import React from 'react'
import Score from './Score'

const Student = (props) => {
  const {name, bio, scores} = props.student
  return (
    <div className='student'>
      <h1>{name}</h1>
      <p>{bio}</p>
      <h2>Score</h2>
      {scores.map((studentScore, index) => {
        return (
          <Score date={studentScore.date} score={studentScore.score} key={index}/>
        )
      })}
    </div>
  )
}

export default Student