function frankenSplice(arr, arr1, index){
    let copy = arr.slice();
    let copy1 = arr1.slice();
    copy1.splice(index, 0, ...copy);
    return copy1;
}

console.log(frankenSplice([1, 2, 3], [4, 5], 1));