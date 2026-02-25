/// <reference types="@types/jest" />

const fs = require('fs')
const path = require('path')
const code = fs.readFileSync(path.resolve(__dirname, '../math.js'), 'utf8')

describe('Math js file tests: addTwoNumbers function', () => {
  let addTwoNumbers
  /**
     * Ignore this weird beforeAll body as its a none-usual way
     * to get the math functions due to us not really using node
     * and modules, to keep the code and env super simple
     */
  beforeAll(() => {
    const tempModule = { exports: {} }
    // eslint-disable-next-line no-new-func
    const wrapper = new Function('module', code + '\nmodule.exports = { addTwoNumbers };')
    wrapper(tempModule)
    addTwoNumbers = tempModule.exports.addTwoNumbers
  })

  test('should return 2 when numbers 1 and 1 are provided', () => {
    const ans = addTwoNumbers(1, 1)
    expect(ans).toBe(2)
    expect(ans).not.toBe(1)
  })

  test('should return 22 when numbers 11 and 11 are provided', () => {
    const ans = addTwoNumbers(11, 11)
    expect(ans).toBe(22)
    expect(ans).not.toBe(1111)
  })

  test('should return 22 when numbers 11 and 11 are provided', () => {
    const ans = addTwoNumbers('abc', 'def')
    expect(ans).toBe('abcdef')
    expect(ans).not.toBe(1)
  })
})
