import { yearOnList } from "./yearonlist";

describe('yearonlist', ()=>{
  test('Year on the List at index 0', ()=>{
    expect(yearOnList(0)).toBe(2021);
  })
  test('Year on the List at index 1', ()=>{
    expect(yearOnList(1)).toBe(2020);
  })
  test('Year on the List at index 3', ()=>{
    expect(yearOnList(3)).toBe(2018);
  })
})