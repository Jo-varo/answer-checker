interface Props {
  variant: 'textarea' | 'input';
  error?: string;
  answer: string;
  setAnswer: (value: string) => void;
}

export const Field = ({ variant, answer, error, setAnswer }: Props) => {
  const fieldStyle = `border-2 border-indigo-300 rounded p-4 w-full focus:border-indigo-600 focus:outline-none ${
    variant === 'textarea' ? ' resize-none' : ''
  }`;

  const title = `${variant === 'textarea' ? 'Student' : ''}${
    variant === 'input' ? 'Real' : ''
  } answers`;

  return (
    <div>
      <h3 className="font-medium text-start text-lg">{title}</h3>
      {variant === 'textarea' && (
        <textarea
          className={`${fieldStyle} mb-[-10px]`}
          placeholder={`Paste the ${title.toLocaleLowerCase()}`}
          rows={8}
          value={answer}
          onChange={(e) => {
            setAnswer(e.target.value);
          }}
        />
      )}
      {variant === 'input' && (
        <input
          className={fieldStyle}
          placeholder={`Write the ${title.toLocaleLowerCase()}`}
          maxLength={10}
          type="text"
          value={answer}
          onChange={(e) => {
            setAnswer(e.target.value.toLocaleUpperCase());
          }}
        />
      )}
      {error && <p className="text-red-600 text-start text-sm mt-2">{error}</p>}
    </div>
  );
};
