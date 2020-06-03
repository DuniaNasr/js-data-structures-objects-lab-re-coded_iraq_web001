// Write your solution in this file!

let driver ={
  key :"driver"
};

function updateDriverWithKeyAndValue(driver, key, value){
  let newDriver ={driver};
  newDriver[key]=value;
  return newDriver;
}
function  destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  dri[key]=value;
  return dri;
}
function  deleteFromDriverByKey(driver, key){
    let newDriver ={driver};
 delete newDriver[key];
  return newDriver;
}