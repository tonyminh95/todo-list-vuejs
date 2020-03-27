// const countObjectProperties = object => typeof object === 'object' ? Object.keys(object).length : 0

const appendLeadingZeroes = n => n <= 9 ? '0' + n : n

const formattedDate = date => appendLeadingZeroes(date.getDate()) + '/' + appendLeadingZeroes(date.getMonth() + 1) + '/' + date.getFullYear()

// const status = status => (status == 1) ? 'open' : (status == 2) ? 'inprogress' : (status == 3) ? 'closed' : 'none'


export {
    // countObjectProperties,
    formattedDate,

    // status
}


