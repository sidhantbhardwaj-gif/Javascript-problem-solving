function mostFrequent(arr){
    let freq = {};
    let maxCount = 0;
    let result;

    for(let i = 0; i < arr.length; i++){
        if(freq[arr[i]]){
            freq[arr[i]]++;
        } else {
            freq[arr[i]] = 1;
        }

        if(freq[arr[i]] > maxCount){
            maxCount = freq[arr[i]];
            result = arr[i];
        }
    }

    return result;
}
 console.log(mostFrequent([1,2,2,3,3,3,4]))