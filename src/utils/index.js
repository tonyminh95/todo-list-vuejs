const countObjectProperties = object => typeof object === 'object' ? Object.keys(object).length : 0

export {
    countObjectProperties
}