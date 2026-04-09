
let inventory = [];
function findProductIndex(productName){
  let pn = productName.toLowerCase(); 
  for (let i=0; i<inventory.length; i++){
    if(inventory[i].name === pn){
         return i;
    }

  }
  return -1;
}

function addProduct(productObject){
   productObject.name = productObject.name.toLowerCase()
   let found = false; 
    for (let i=0; i<inventory.length; i++){
      if(inventory[i].name === productObject.name ){
        inventory[i].quantity += productObject.quantity;
        console.log( inventory[i].name + " quantity updated");
        found = true;
        break;
      }
}
if(!found){
inventory.push(productObject);
console.log(productObject.name + " added to inventory")
}
}


function removeProduct(productName, quantity){
 productName = productName.toLowerCase();
  let found = false;
     for (let i=0; i<inventory.length; i++){
    if(inventory[i].name === productName){
            found = true;
  
            if(quantity > inventory[i].quantity){
      console.log("Not enough " + productName + " available, remaining pieces" + ": " + inventory[i].quantity);
            }else {
              
      inventory[i].quantity -= quantity;
      let remaining = inventory[i].quantity;
      
      if(remaining === 0){
         inventory.splice(i,1);
            }
      console.log("Remaining " + productName + " pieces" + ": " + remaining);
 }
 break;
}
   
}  if(!found){
      console.log(productName + " not found");
    }
}
