import { fireEvent, render, screen } from '@testing-library/react';
import Main from './Main';
import {
  potentialAnswerPlaceholder,
  realAnswerPlaceholder,
} from '../helpers/data';

const setup = () => {
  const textarea = screen.getByPlaceholderText('Paste the student answers');
  const input = screen.getByPlaceholderText(
    'Write the teacher answers'
  ) as HTMLInputElement;
  const checkButton = screen.getByText(/check answers/i);

  return { textarea, input, checkButton };
};

describe('Main', () => {
  beforeEach(() => {
    render(<Main />);
  });

  test('Should render first result', async () => {
    const { textarea, input, checkButton } = setup();
    const textareaValue = textarea.innerHTML;
    const inputValue = input.value;

    expect(textareaValue === potentialAnswerPlaceholder).toBe(true);
    expect(inputValue === realAnswerPlaceholder).toBe(true);

    fireEvent.click(checkButton);
    const resultBox = await screen.findByText((content, element) => {
      return element?.tagName.toLowerCase() === 'span' && content === '2';
    });
    expect(resultBox).toBeDefined();
  });

  test('Should render correct result', async () => {
    // Result 3
    const testAnswers = [
      `
      1. C
      2. A
      3. A
      4. C
      5. B
      6. C
      7. D
      8. B`,
      'AAADDCBA',
    ];

    const { textarea, input, checkButton } = setup();

    fireEvent.change(textarea, { target: { value: testAnswers[0] } });
    fireEvent.change(input, { target: { value: testAnswers[1] } });

    await screen.findByText('2');
    fireEvent.click(checkButton);
    const resultBox = await screen.findByText((content, element) => {
      return element?.tagName.toLowerCase() === 'span' && content === '3';
    });
    expect(resultBox).toBeDefined();
  });

  test('Should not display a result', async () => {
    const testAnswers = [
      `
      1. C
      2. A
      3. A
      4. C
      5. B
      6. C
      7. D`,
      'AAADDCBA',
    ];

    const { textarea, input, checkButton } = setup();

    fireEvent.change(textarea, { target: { value: testAnswers[0] } });
    fireEvent.change(input, { target: { value: testAnswers[1] } });

    await screen.findByText('2');
    fireEvent.click(checkButton);
    const resultBox = await screen.findByText((content, element) => {
      return element?.tagName.toLowerCase() === 'span' && content === '-';
    });
    expect(resultBox).toBeDefined();
  });
});
