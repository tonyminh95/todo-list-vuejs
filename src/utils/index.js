const countObjectProperties = object => typeof object === 'object' ? Object.keys(object).length : 0

const appendLeadingZeroes = n => n <= 9 ? '0' + n : n

const formattedDate = date => date.getFullYear() + '/' + appendLeadingZeroes(date.getMonth() + 1) + '/' + appendLeadingZeroes(date.getDate())

export {
    countObjectProperties,
    formattedDate
}


