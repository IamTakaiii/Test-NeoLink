const numMapObject = {
    A: 1,
    B: 5,
    Z: 10,
    L: 50,
    C: 100,
    D: 500,
    R: 1000
}

const convertToNumber = (str) => {
    let splited_nums = str.split('').map(char => numMapObject[char])

    if (!str) {
      return "Invalid Param"
    }

    return splited_nums.reduce((total, current, index) => {
        const prev = splited_nums[index - 1]
        const next = splited_nums[index + 1]
        console.log(prev)
        console.log(current)
        console.log(next)
        console.log("-------------------")
        if (next && current < next) {
          return total + (next - current)
        } else if (index > 0 && prev < current) {
          return total
        } else {
          return total + current
        }
    }, 0)
}

console.log(convertToNumber("BA"))
console.log(convertToNumber(""))
console.log(convertToNumber("AAA"))
console.log(convertToNumber("RCRZCAB"))
console.log(convertToNumber("LBAAA"))