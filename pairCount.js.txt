function pairCount(arr,num){
    let seen = new Set();
    let count = 0;
    for(let i=0; i<arr.length; i++){
        let needed = num - arr[i];
        if(seen.has(needed)){
               
         count++; 
           
        }
        seen.add(arr[i]);
    }
   return count;
}
console.log(pairCount([1,2,3,4,3], 6));