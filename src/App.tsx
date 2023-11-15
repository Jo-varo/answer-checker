import { TbLoader2 } from 'react-icons/tb';
import './App.css';
import { useAnswers } from './hooks/useAnswers';
import { Field } from './components/Field';
import { ERRORS } from './helpers/errors';

function App() {
  const {
    poteAnswers: { potentialAnswer, setPotentialAnswer },
    realAnswers: { realAnswer, setRealAnswer },
    score,
    error,
    isLoading,
    renderScore,
  } = useAnswers();

  const errorMessage = 'Some answers are missing here';

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
          error={error === ERRORS.REAL ? errorMessage : ''}
        />
        <Field
          label="Teacher answers"
          answer={realAnswer}
          setAnswer={setRealAnswer}
          variant="input"
          error={error === ERRORS.STUDENT ? errorMessage : ''}
        />
        <button
          type="button"
          onClick={renderScore}
          disabled = {isLoading}
          className="mt-4 bg-amber-200 border-2 border-amber-400 focus:outline-none focus:border-yellow-800 focus:border-dashed hover:bg-amber-300 text-black"
        >
          Check answers
        </button>
      </div>
      <div className="result">
        <h3 className="text-xl">
          The score is
          <div className="text-3xl font-semibold flex justify-center items-center h-9">
            {isLoading ? (
              <TbLoader2 className="animate-spin w-6 h-6 text-yellow-700" />
            ) : error ? (
              '-'
            ) : (
              score
            )}
          </div>
        </h3>
      </div>
    </>
  );
}

export default App;
