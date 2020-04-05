// const countObjectProperties = object => typeof object === 'object' ? Object.keys(object).length : 0

// const status = status => (status == 1) ? 'open' : (status == 2) ? 'inprogress' : (status == 3) ? 'closed' : 'none'

// date
const monthToWords = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const transformMonthToWord = (month) => monthToWords[month]

const appendLeadingZeroes = n => n <= 9 ? '0' + n : n

const formattedDate = date => appendLeadingZeroes(date.getDate()) + '/' + appendLeadingZeroes(date.getMonth() + 1) + '/' + date.getFullYear()

export {
    // countObjectProperties,

    // status
    transformMonthToWord,
    formattedDate
}


