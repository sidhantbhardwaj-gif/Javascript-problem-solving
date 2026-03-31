
function twoSum(arr, num){
    let seen = new Set();

    for(let i = 0; i < arr.length; i++){
        let needed = num - arr[i];

        if(seen.has(needed)){
            return [needed, arr[i]];
        }

        seen.add(arr[i]);
    }

    return [];
}
twoSum([3,2,4], 6)
