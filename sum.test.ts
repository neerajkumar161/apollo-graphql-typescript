import sum from './sum';
// import {} from 'jest';
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Check object value is equal or not', () => {
  const obj = { val1: 1, val2: 2 };
  expect(obj).toEqual({ val1: 1, val2: 2 });
});
