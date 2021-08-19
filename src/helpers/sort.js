const sortByAZ = (array, column) => {
    return array.sort(function (a, b) {

        if (a[column] < b[column]) {
            return -1
        }
        if (a[column] > b[column]) {
            return 1
        }
        return 0
    })
}

const sortByZA = (array, column) => {
    return array.sort(function (a, b) {

        if (a[column] > b[column]) {
            return -1
        }
        if (a[column] < b[column]) {
            return 1
        }
        return 0
    })
}

export { sortByAZ, sortByZA }
