interface Props {
  variant: 'textarea' | 'input';
  label: string;
  error?: string;
  answer: string;
  setAnswer: (value: string) => void;
}

export const Field = ({ variant, answer, error, label, setAnswer }: Props) => {
  const fieldStyle = `border-2 border-indigo-300 rounded p-4 w-full focus:border-indigo-600 focus:outline-none ${
    variant === 'textarea' ? ' resize-none' : ''
  }`;

  return (
    <div>
      <h3 className="font-medium text-start text-lg">{label}</h3>
      {variant === 'textarea' && (
        <textarea
          className={`${fieldStyle} mb-[-10px]`}
          placeholder={`Paste the ${label.toLocaleLowerCase()}`}
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
          placeholder={`Write the ${label.toLocaleLowerCase()}`}
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
