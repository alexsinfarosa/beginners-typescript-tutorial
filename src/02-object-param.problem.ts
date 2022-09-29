import {expect, it} from 'vitest'

// Option 1:
// export const addTwoNumbers = (params: {first: number; second: number}) => {
//   return params.first + params.second
// }

// Option 2:
// type Params = {first: number; second: number}
// export const addTwoNumbers = (params: Params) => {
//   return params.first + params.second
// }

// Option 3:
interface Params {
  first: number
  second: number
}
export const addTwoNumbers = (params: Params) => {
  return params.first + params.second
}

it('Should add the two numbers together', () => {
  expect(
    addTwoNumbers({
      first: 2,
      second: 4,
    }),
  ).toEqual(6)

  expect(
    addTwoNumbers({
      first: 10,
      second: 20,
    }),
  ).toEqual(30)
})
