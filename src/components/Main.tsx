import { TbLoader2 } from 'react-icons/tb';
import { useAnswers } from "../hooks/useAnswers";
import Form from "./Form";

const Main = () => {
  const { poteAnswers, realAnswers, score, error, isLoading, renderScore } =
    useAnswers();

  return (
    <main className="mb-10">
      <div className="header mb-4">
        <h1 className="text-3xl font-medium">Answer Checker</h1>
        <p className="text-center text-sm italic">Max 10 questions/answers</p>
      </div>
      <Form
        poteAnswers={poteAnswers}
        realAnswers={realAnswers}
        error={error}
        isLoading={isLoading}
        renderScore={renderScore}
      />
      <div className="result">
        <h3 className="text-xl">
          The score is
          <div className="text-3xl font-semibold flex justify-center items-center h-9">
            {isLoading ? (
              <TbLoader2 className="animate-spin w-6 h-6 text-yellow-700" />
            ) : (
              <span>{error ? '-' : score}</span>
            )}
          </div>
        </h3>
      </div>
    </main>
  );
};

export default Main;
