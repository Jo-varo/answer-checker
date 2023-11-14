export function getGrade(studentAnswers = '', teacherAnswers = '') {
  const result = { score: 0, error: '' };

  const arrAnswers = studentAnswers
    .toLocaleUpperCase()
    .split('\n')
    .filter((e) => e !== '')
    .map((e) => {
      const chars = e.match(/[A-Z]/g);
      return chars !== null ? chars[0] : '';
    });

  //throw error
  if (teacherAnswers.length !== arrAnswers.length) {
    result['error'] = ` ${
      teacherAnswers.length > arrAnswers.length ? 'tested' : 'real'
    }`;
    return result;
  }

  // console.log(
  //   `Testing the next answers:\n${arrAnswers
  //     .map((a, i) => `${i + 1}. ${a}`)
  //     .join('  ')}`
  // );

  teacherAnswers
    .toLocaleUpperCase()
    .split('')
    .map((a, i) => {
      if (a === arrAnswers[i]) result.score++;
    });
  console.log(`The grade is: ${result.score}`);
  return result;
}
