import { useEffect, useState } from 'react';
import './App.css';
import {
  potentialAnswerPlaceholder,
  realAnswerPlaceholder,
} from './helpers/data';
import { getGrade } from './helpers/functions';
import { Field } from './components/Field';

function App() {
  const [potentialAnswer, setPotentialAnswer] = useState<string>(
    potentialAnswerPlaceholder
  );
  const [realAnswer, setRealAnswer] = useState<string>(realAnswerPlaceholder);
  const [score, setScore] = useState<number>(0);
  const [error, setError] = useState<string>('');

  const renderScore = () => {
    const { score, error } = getGrade(potentialAnswer, realAnswer);
    setScore(score);
    setError(error);
  };

  useEffect(() => {
    renderScore();
  }, []);

  return (
    <>
      <div className="header mb-4">
        <h1 className="text-3xl font-medium">Answer Checker</h1>
        <p className="text-center text-sm italic">Max 10 questions/answers</p>
      </div>
      <div className="flex flex-col gap-4 mb-2">
        <Field
          label="Student answers"
          answer={potentialAnswer}
          setAnswer={setPotentialAnswer}
          variant="textarea"
          error={error}
        />
        <Field
          label="Teacher answers"
          answer={realAnswer}
          setAnswer={setRealAnswer}
          variant="input"
          error={error}
        />
        <button
          type="button"
          onClick={renderScore}
          className="mt-6 bg-amber-200 border-2 border-amber-400 focus:outline-none focus:border-yellow-800 focus:border-dashed hover:bg-amber-300 text-black"
        >
          Check answers
        </button>
      </div>
      <div className="result">
        <h3 className="text-xl">
          The score is <br />
          <span className="text-3xl font-semibold">{error ? '-' : score}</span>
        </h3>
      </div>
    </>
  );
}

export default App;
