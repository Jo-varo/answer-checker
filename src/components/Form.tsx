import { FormEvent } from 'react';
import { ERRORS } from '../helpers/errors';
import { Field } from './Field';

interface Props {
  poteAnswers: {
    potentialAnswer: string;
    setPotentialAnswer: (value: string) => void;
  };
  realAnswers: { realAnswer: string; setRealAnswer: (value: string) => void };
  error: ERRORS;
  isLoading: boolean;
  renderScore: () => Promise<void>;
}

const Form = ({
  poteAnswers: { potentialAnswer, setPotentialAnswer },
  realAnswers: { realAnswer, setRealAnswer },
  error,
  isLoading,
  renderScore,
}: Props) => {
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await renderScore();
  };

  const errorMessage = 'Some answers are missing here';

  return (
    <form className="flex flex-col gap-6 mb-2" onSubmit={handleSubmit}>
      <Field
        label="Student answers"
        answer={potentialAnswer}
        setAnswer={setPotentialAnswer}
        variant="textarea"
        error={error === ERRORS.STUDENT ? errorMessage : ''}
      />
      <Field
        label="Teacher answers"
        answer={realAnswer}
        setAnswer={setRealAnswer}
        variant="input"
        error={error === ERRORS.REAL ? errorMessage : ''}
      />
      <button
        type="submit"
        disabled={isLoading}
        className="form-button"
      >
        Check answers
      </button>
    </form>
  );
};

export default Form;
