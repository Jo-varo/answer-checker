import { ERRORS } from './errors';

export async function getGrade(studentAnswers: string, teacherAnswers: string) {
  await sleep(1.8);
  const result = { score: 0, error: '' };

  const cleanStudentAnswers = studentAnswers
    .toLocaleUpperCase()
    .split('\n')
    .filter((e) => e !== '')
    .map((e) => {
      const chars = e.match(/[A-Z]/g);
      return chars !== null ? chars[0] : '';
    });

  const realAnswers = teacherAnswers;

  if (realAnswers.length !== cleanStudentAnswers.length) {
    result['error'] =
      realAnswers.length > cleanStudentAnswers.length ? ERRORS.REAL : ERRORS.STUDENT;

    return result;
  }

  // console.log(
  //   `Testing the next answers:\n${cleanStudentAnswers
  //     .map((a, i) => `${i + 1}. ${a}`)
  //     .join('  ')}`
  // );

  realAnswers
    .toLocaleUpperCase()
    .split('')
    .map((a, i) => {
      if (a === cleanStudentAnswers[i]) result.score++;
    });
  return result;
}

const sleep = async (seconds = 3): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });
};
