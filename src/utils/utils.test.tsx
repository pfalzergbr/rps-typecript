import { capitalize } from './capitalize';

describe('Capitalize', () => {
  test('should return a capitalized string', () => {
    const capitalizedWord = capitalize('rock');
    expect(capitalizedWord).toBe('Rock');
    const capitalizedPaper = capitalize('paper');
    expect(capitalizedPaper).toBe('Paper');
  });
});
