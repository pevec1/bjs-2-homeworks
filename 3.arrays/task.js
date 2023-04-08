function compareArrays(arr1, arr2) {
    return (arr1.length === arr2.length) && arr1.every((elem, index) => elem == arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
    return users.filter((users) => gender === users.gender).map(users => users.age).reduce((acc, item) => acc + item, 0) / users.filter((users) => gender === users.gender).map(users => users.gender).reduce((acc, item, index) => {
        return Math.max(index) + 1
    }, 1);

}