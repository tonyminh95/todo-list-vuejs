// const countObjectProperties = object => typeof object === 'object' ? Object.keys(object).length : 0

// const status = status => (status == 1) ? 'open' : (status == 2) ? 'inprogress' : (status == 3) ? 'closed' : 'none'

// clear object
// const clearObject = object => Object.keys(object).forEach(index => object[index] = null)

// date
const monthToWords = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const transformMonthToWord = (month) => monthToWords[month]

const appendLeadingZeroes = n => n <= 9 ? '0' + n : n

const formattedDate = date => appendLeadingZeroes(date.getDate()) + '/' + appendLeadingZeroes(date.getMonth() + 1) + '/' + date.getFullYear()

const transformMonthBeforeDate = date => {
    const array = date.split("/")

    return array[1] + '/' + array[0] + '/' + array[2]
}

// table type
const TABLE_TYPES = {
    TABLE_TYPE_TEXT: 'text',
    TABLE_TYPE_STATUS: 'status',
    TABLE_TYPE_DATE: 'date'
}

export {
    // countObjectProperties,

    // status
    // clearObject,

    // function
    transformMonthToWord,
    formattedDate,
    transformMonthBeforeDate,

    // variable
    TABLE_TYPES
}


