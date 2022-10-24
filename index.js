//preparation func
//params = itemname, callback func (will resolve once item is prepared)
//if / else for menu items - only if item is on menu
function preparation(itemName, callback){
  let prepTime;
  switch (itemName) {
    case 'Coffee':
      prepTime = 4000;
      break;
    case 'Chips':
      prepTime = 1000;
      break;
    case 'Burger':
      prepTime = 10000;
      break;
     case 'Juice':
      prepTime = 500;
      break;
     default:
      console.log('do not have that');
      return;      
  }
  //tell js to wait - once time has finished, run order
  setTimeout(() => {
    console.log(`food is prepped: ${itemName} `)
    callback(itemName)
  }, prepTime);
}

//take order func
//params = itemname
function takeOrder(itemName){
  console.log(`${itemName}: is that correct?`);
  submitOrder(itemName)
}

//submit order func
//params = itemname
function submitOrder(itemName){
  console.log(`taking ${itemName} to kitchen`)
  //serve func being passed as a callback function
  preparation(itemName, serve)
}

//serve food func
//params = itemname, take back to table
function serve(itemName){ 
  console.log(itemName);
}

takeOrder('Coffee')
takeOrder('Juice')