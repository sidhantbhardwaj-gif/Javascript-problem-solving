
function titleCase(str){
    let vase = str.split(" ");
    let result = [];
    for(let i=0; i<vase.length; i++){
        let vases = vase[i];
        if(vases){
        result.push(vases[0].toUpperCase() + vases.slice(1)) ;
    }}
 return   result.join(" ") 
}
console.log(titleCase(" hello   world "));