import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuestionForm = ({ userData, onAnswer }) => {
  const [questionData, setQuestionData] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [error, setError] = useState('');
  const [apiError, setApiError] = useState('');

  useEffect(() => {
    axios
      .get(
        `https://opentdb.com/api.php?amount=1&category=${userData.category}&difficulty=${userData.difficulty}&type=multiple`
      )
      .then((response) => {
        const results = response.data.results;
        if (results.length) {
          const question = results[0];
          question.answers = [...question.incorrect_answers, question.correct_answer].sort();
          setQuestionData(question);
        } else {
          setApiError('No questions available. Try again later.');
        }
      })
      .catch(() => setApiError('Error fetching question.'));
  }, [userData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedAnswer) {
      setError('Please select an answer.');
      return;
    }
    setError('');
    onAnswer(selectedAnswer === questionData.correct_answer, questionData.correct_answer);
  };

  if (apiError) return <p>{apiError}</p>;
  if (!questionData) return <p>Loading question...</p>;

  return (
    <div className="container">
      <h2>{questionData.question}</h2>
      <form onSubmit={handleSubmit}>
        <div className="radio-group">
          {questionData.answers.map((answer, index) => (
            <label key={index}>
              <input
                type="radio"
                name="answer"
                value={answer}
                onChange={(e) => setSelectedAnswer(e.target.value)}
              />
              {answer}
            </label>
          ))}
        </div>
        <button type="submit">Submit Answer</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default QuestionForm;