import React, { useState } from 'react';
import Home from './components/Home';
import QuestionForm from './components/QuestionForm';
import Results from './components/Results';

function App() {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState(null);
  const [isCorrect, setIsCorrect] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState('');

  const startQuiz = (data) => {
    setUserData(data);
    setStep(2);
  };

  const handleAnswer = (isCorrect, correctAnswer) => {
    setIsCorrect(isCorrect);
    setCorrectAnswer(correctAnswer);
    setStep(3);
  };

  const restartQuiz = () => {
    setStep(1);
    setUserData(null);
    setCorrectAnswer('');
  };

  return (
    <div>
      {step === 1 && <Home onStart={startQuiz} />}
      {step === 2 && userData && (
        <QuestionForm
          userData={userData}
          onAnswer={(isCorrect, correctAnswer) => handleAnswer(isCorrect, correctAnswer)}
        />
      )}
      {step === 3 && (
        <Results
          isCorrect={isCorrect}
          correctAnswer={correctAnswer}
          userName={userData.name}
          onRestart={restartQuiz}
        />
      )}
    </div>
  );
}

export default App;