import React from "react";

const Score = ({date, score}) => {
    return (
      <>
        <p>Date: <br />{date}</p>
        <p>Score: <br />{score}</p>
      </>
    )
}

export default Score