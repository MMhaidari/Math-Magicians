import operate from '../logic/operate';

describe('operate', () => {
  test('divides two numbers', () => {
    expect(operate('10', '5', '÷')).toBe('2');
    expect(operate('10', '0', '÷')).toBe("Can't divide by 0.");
  });

  test('adds two numbers', () => {
    expect(operate('10', '5', '+')).toBe('15');
    expect(operate('0.1', '0.2', '+')).toBe('0.3');
  });

  test('subtracts two numbers', () => {
    expect(operate('10', '5', '-')).toBe('5');
    expect(operate('-0.1', '-0.2', '-')).toBe('0.1');
  });
});
