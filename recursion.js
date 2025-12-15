/*
Calculate the months and years, from a given integer.
Examples:
input: 15
output: 1 year and 3 months

input: 100
output: 8 years and 4 months
*/

// day momdule 12
// the number of times that the module recurses, 
// is the number of years

function calcDaysAndMonthsFromMonths(months) {
  const info = modDivision(months, 12)
  return {
    years: info.multiplier,
    months: info.remainder,
    meaning: `${info.multiplier} years and ${info.remainder} months`,
    reason: `${months} months = (${info.multiplier} years * ${info.divider} months in a year) + ${info.remainder} months`
  }
  
}


function modDivision(num, divider) {
  let multiplier = 0
  
  function calc(x, d) {
     if (x-d < 0) {
        return x
    }
    multiplier += 1
     return calc(x-d, d)
  }

  let remainder = calc(num, divider)
  
  return {
    divider,
    remainder,
    multiplier,
    formula: `${num} = (${multiplier} * ${divider}) + ${remainder}`
  }
}





// console.log(modDivision(100, 12))

console.log(calcDaysAndMonthsFromMonths(25))
