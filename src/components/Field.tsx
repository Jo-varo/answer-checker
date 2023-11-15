interface Props {
  variant: 'textarea' | 'input';
  label: string;
  error?: string;
  answer: string;
  setAnswer: (value: string) => void;
}

export const Field = ({ variant, answer, error, label, setAnswer }: Props) => {
  const borderStyle = `${error ? 'border-red-400' : 'border-indigo-300'}`;

  const fieldStyle = `border-2 ${borderStyle} rounded p-4 w-full focus:border-indigo-600 focus:outline-none ${
    variant === 'textarea' ? ' resize-none' : ''
  }`;

  const formatRealAnswers = (char: string) => {
    return char.toLocaleUpperCase().trim();
  };

  return (
    <div>
      <h3 className="font-medium text-start text-lg">{label}</h3>
      {variant === 'textarea' && (
        <textarea
          className={`${fieldStyle} mb-[-8px]`}
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
          onKeyDown={(e)=>{console.log(e)}}
          onChange={(e) => {
            setAnswer(formatRealAnswers(e.target.value));
          }}
        />
      )}
      {error && (
        <p className="text-red-600 text-start text-sm mb-[-20px]">{error}</p>
      )}
    </div>
  );
};
