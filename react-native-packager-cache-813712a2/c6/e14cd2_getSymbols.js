
var getOwnPropertySymbols=Object.getOwnPropertySymbols;








function getSymbols(object){


return getOwnPropertySymbols(Object(object));
}


if(!getOwnPropertySymbols){
getSymbols=function getSymbols(){
return[];
};
}

module.exports=getSymbols;