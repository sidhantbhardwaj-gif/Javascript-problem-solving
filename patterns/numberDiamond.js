

function numberDiamond(n){
    let result = "\n";
    for(let i=1; i<=n; i++){
        let space = n - i;
        let line = " ".repeat(space);

        for(let j=1; j<=i; j++){
            line += j;
        }  
          for(let j=i - 1; j>=1; j--){
            line +=j;
        }
        
        result += line + "\n";
    }

        for(let i=n - 1; i>=1; i--){
        let space = n - i;
        let line = " ".repeat(space);
        
        for(let j=1; j<=i; j++){
            line += j;
        }
        for(let j=i-1; j>=1; j--){
            line +=j;
        }
       
        result += line + "\n";
    
}
return result;
}
console.log(numberDiamond(4));
