import { render, renderHook, screen } from '@testing-library/react';
import Form from './Form';
import { useAnswers } from '../hooks/useAnswers';
import {
  potentialAnswerPlaceholder,
  realAnswerPlaceholder,
} from '../helpers/data';

describe('Form', () => {
  beforeEach(() => {
    const {
      result: {
        current: { poteAnswers, realAnswers, error, isLoading, renderScore },
      },
    } = renderHook(() => useAnswers());
    render(
      <Form
        poteAnswers={poteAnswers}
        realAnswers={realAnswers}
        error={error}
        isLoading={isLoading}
        renderScore={renderScore}
      />
    );
  });

  test('Should render textarea', () => {
    expect(
      screen.getByPlaceholderText('Paste the student answers')
    ).toBeDefined();
  });

  test('Should render input', () => {
    expect(
      screen.getByPlaceholderText('Write the teacher answers')
    ).toBeDefined();
  });

  test('Should have first render data', () => {
    const textareaValue = screen.getByPlaceholderText(
      'Paste the student answers'
    ).innerHTML;
    const inputValue = (
      screen.getByPlaceholderText(
        'Write the teacher answers'
      ) as HTMLInputElement
    ).value;

    expect(textareaValue === potentialAnswerPlaceholder).toBe(true);
    expect(inputValue === realAnswerPlaceholder).toBe(true);
  });
});
