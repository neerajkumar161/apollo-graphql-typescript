import sum from './sum';
// import {} from 'jest';
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Check object value is equal or not', () => {
  const obj = { val1: 1, val2: 2 };
  expect(obj).toEqual({ val1: 1, val2: 2 });
});

test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

test('null', () => {
    expect(null).toBeNull();
    expect(undefined).toBeUndefined();
    expect(true).toBeTruthy()
    expect(false).not.toBeTruthy()
})