import { useEffect, useState } from 'react';
import {
  potentialAnswerPlaceholder,
  realAnswerPlaceholder,
} from '../helpers/data';
import { getGrade } from '../helpers/functions';

export const useAnswers = () => {
  const [potentialAnswer, setPotentialAnswer] = useState<string>(
    potentialAnswerPlaceholder
  );
  const [realAnswer, setRealAnswer] = useState<string>(realAnswerPlaceholder);
  const [score, setScore] = useState<number>(0);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const renderScore = () => {
    setIsLoading(true)
    const { score, error } = getGrade(potentialAnswer, realAnswer);
    setScore(score);
    setError(error);
    setIsLoading(false)
  };

  useEffect(() => {
    renderScore();
  }, []);

  return {
    poteAnswers: { potentialAnswer, setPotentialAnswer },
    realAnswers: { realAnswer, setRealAnswer },
    score,
    error,
    isLoading,
    renderScore,
  };
};
