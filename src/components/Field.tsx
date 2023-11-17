import { ChangeEvent, KeyboardEvent } from 'react';

interface Props {
  variant: 'textarea' | 'input';
  label: string;
  error?: string;
  answer: string;
  setAnswer: (value: string) => void;
}

export const Field = ({ variant, answer, error, label, setAnswer }: Props) => {
  const borderStyle = `${
    error
      ? 'border-red-400 focus:border-red-700'
      : 'border-indigo-300 focus:border-indigo-600'
  }`;
  const fieldStyle = `border-2 ${borderStyle} rounded p-4 w-full focus:outline-none`;

  const preventSpaceKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ' ') {
      e.preventDefault();
      return;
    }
  };

  const setAnswerValue = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setAnswer(e.target.value);
  };

  return (
    <div className="input-group">
      <h3 className="font-medium text-start text-lg">{label}</h3>
      {variant === 'textarea' && (
        <textarea
          className={`${fieldStyle} mb-[-8px] resize-none`}
          placeholder={`Paste the ${label.toLocaleLowerCase()}`}
          rows={8}
          value={answer}
          onChange={setAnswerValue}
        />
      )}
      {variant === 'input' && (
        <input
          className={fieldStyle}
          placeholder={`Write the ${label.toLocaleLowerCase()}`}
          maxLength={10}
          type="text"
          value={answer}
          onKeyDown={preventSpaceKey}
          onChange={setAnswerValue}
        />
      )}
      {error && (
        <p className="text-red-600 text-start text-sm mb-[-20px]">{error}</p>
      )}
    </div>
  );
};
