let entries = ['open', 'in progress', 'closed']

function changeStatus (index) {
    return entries.map((entry, key) => key == index - 1 ? entry : 'default')
}

console.log(changeStatus(2))