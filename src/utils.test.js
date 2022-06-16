import { formatUserName } from "./utils";

describe('utils', ()=> {
  test('formatUserName function adds @ at the begining of the username', ()=> {
    expect(formatUserName('lexa')).toBe('@lexa');
  });
  test('formatUserName does not add @ when a username already has @ at the beginning', () => {
   expect(formatUserName('@lexa')).toBe('@lexa');
  });
});