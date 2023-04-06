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

  test('calculates modulo correctly', () => {
    expect(operate('10', '3', '%')).toBe('1');
    expect(operate('10', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  test('subtracts two numbers', () => {
    expect(operate('10', '5', '-')).toBe('5');
    expect(operate('-0.1', '-0.2', '-')).toBe('0.1');
  });

  test('multiply two numbers', () => {
    expect(operate('10', '5', 'x')).toBe('50');
    expect(operate('20', '15', 'x')).toBe('300');
  });
});
