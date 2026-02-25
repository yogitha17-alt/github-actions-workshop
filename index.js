/* global addTwoNumbers */

document.addEventListener('DOMContentLoaded', () => {
  let currentFirst = parseInt(document.getElementById('first').value)
  let currentSecond = parseInt(document.getElementById('second').value)

  /**
     * Perform the maths once at the start before
     * any changes are made
     */
  performMaths(currentFirst, currentSecond)

  /**
     * On change listener for first value,
     * when it changes new math is performed
     */
  document.getElementById('first').addEventListener('change', (event) => {
    console.log('first changesd: ' + event.target.value)
    currentFirst = parseInt(event.target.value)
    performMaths(currentFirst, currentSecond)
  })

  /**
     * On change listener for second value,
     * when it changes new math is performed
     */
  document.getElementById('second').addEventListener('change', (event) => {
    console.log('second changesd: ' + event.target.value)
    currentSecond = parseInt(event.target.value)
    performMaths(currentFirst, currentSecond)
  })
})

/**
 * Simple function that does the maths and then displays it into result element
 * @param {*} first (Int)
 * @param {*} second (Int)
 */
function performMaths (first, second) {
  const ans = addTwoNumbers(first, second)
  document.getElementById('result').innerHTML = ans
}
