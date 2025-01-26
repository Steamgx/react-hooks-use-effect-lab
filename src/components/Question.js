// Question.js
import { useEffect, useState } from "react";

function Question({ question, onAnswered }) {
  const { prompt, answers, correctIndex } = question;
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    if (timeLeft === 0) {
      onAnswered(false);
      return;
    }
    
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, onAnswered]);

  return (
    <div>
      <h2>{prompt}</h2>
      <p>{timeLeft} seconds remaining</p>
      <ul>
        {answers.map((answer, index) => (
          <li key={index}>{answer}</li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
