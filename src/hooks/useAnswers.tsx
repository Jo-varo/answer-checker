import { useEffect, useState } from 'react';
import {
  potentialAnswerPlaceholder,
  realAnswerPlaceholder,
} from '../helpers/data';
import { getGrade } from '../helpers/functions';
import { ERRORS } from '../helpers/errors';

export const useAnswers = () => {
  const [potentialAnswer, setPotentialAnswer] = useState<string>(
    potentialAnswerPlaceholder
  );
  const [realAnswer, setRealAnswer] = useState<string>(realAnswerPlaceholder);
  const [score, setScore] = useState<number>(0);
  const [error, setError] = useState<ERRORS>(ERRORS.NONE);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const renderScore = async () => {
    setIsLoading(true);
    const { score, error } = await getGrade(potentialAnswer, realAnswer);
    setScore(score);
    setError(error);
    setIsLoading(false);
  };

  useEffect(() => {
    renderScore();
  }, []);

  return {
    poteAnswers: { potentialAnswer, setPotentialAnswer },
    realAnswers: { realAnswer, setRealAnswer },
    isLoading,
    score,
    error,
    renderScore,
  };
};
