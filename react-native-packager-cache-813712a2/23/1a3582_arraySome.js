









function arraySome(array,predicate){
var index=-1,
length=array.length;

while(++index<length){
if(predicate(array[index],index,array)){
return true;
}
}
return false;
}

module.exports=arraySome;