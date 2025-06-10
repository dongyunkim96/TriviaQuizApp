import React from 'react';

const Results = ({ isCorrect, correctAnswer, userName, onRestart }) => {
  return (
    <div className="container">
      <h2>
        {isCorrect
          ? `Great job, ${userName}!`
          : `Better luck next time, ${userName}.`}
      </h2>
      {!isCorrect && <p className="result-message">The correct answer was: {correctAnswer}</p>}
      <button onClick={onRestart}>Try Another Question</button>
    </div>
  );
};

export default Results;