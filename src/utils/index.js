const countObjectProperties = object => typeof object === 'object' ? Object.keys(object).length : 0

const appendLeadingZeroes = n => n <= 9 ? '0' + n : n

const formattedDate = date => date.getFullYear() + '/' + appendLeadingZeroes(date.getMonth() + 1) + '/' + appendLeadingZeroes(date.getDate())

const status = status => (status == 1) ? 'open' : (status == 2) ? 'inprogress' : (status == 3) ? 'closed' : 'none'


const textReplace = text => text.replace(' ', '-')

export {
    countObjectProperties,
    formattedDate,

    status,



    textReplace
}


