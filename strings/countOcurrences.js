function countOccurrences(arr,target){
    let freq = {};
    let count = 0; 
    for(let i=0; i<arr.length; i++){
        if(freq[arr[i]]){
            freq[arr[i]]++;
        } else{ 
            freq[arr[i]] = 1;
        }
        if(arr[i]=== target){
            count++;
        }
    }
    return count;
}
console.log(countOccurrences([1,2,2,3,2], 2));