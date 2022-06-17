import { testYear } from "./math";

// Simple first test Jest
describe('math', ()=> {
  test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });

  test('Three plus two is four', () => {
    expect(3 + 2).toBe(5);
  });
});

// Simple Second test Jest with a function
describe('math', ()=> {
  test('How many years from independence for each test year', () => {
    expect(testYear(1963)).toBe(0);
  });
  test('How many years from independence for each test year', () => {
    expect(testYear(1973)).toBe(10);
  });
  test('How many years from independence for each test year', () => {
    expect(testYear(2014)).toBe(51);
  });
});



