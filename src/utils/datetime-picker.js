const monthToWords = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const transformMonthToWord = (month) => monthToWords[month - 1]

export {
    transformMonthToWord
}

