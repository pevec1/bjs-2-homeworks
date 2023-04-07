

function compareArrays(arr1, arr2) {
        let l = false;
        if (arr1.length === arr2.length) {
            l = true;
        } else if(arr1.length < arr2.length) {
            l = false;
        }else if(arr1.length > arr2.length) {
            l = false;
        }

        return l && arr1.every((elem, index) => elem == arr2[index]);
}

function getUsersNamesInAgeRange(users, gender) {
  
}