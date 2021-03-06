/**
 * @license
 * lodash 4.11.2 (Custom Build) <https://lodash.com/>
 * Build: `lodash -d -o ./foo/lodash.js`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
;(function(){


var undefined;


var VERSION='4.11.2';


var LARGE_ARRAY_SIZE=200;


var FUNC_ERROR_TEXT='Expected a function';


var HASH_UNDEFINED='__lodash_hash_undefined__';


var PLACEHOLDER='__lodash_placeholder__';


var BIND_FLAG=1,
BIND_KEY_FLAG=2,
CURRY_BOUND_FLAG=4,
CURRY_FLAG=8,
CURRY_RIGHT_FLAG=16,
PARTIAL_FLAG=32,
PARTIAL_RIGHT_FLAG=64,
ARY_FLAG=128,
REARG_FLAG=256,
FLIP_FLAG=512;


var UNORDERED_COMPARE_FLAG=1,
PARTIAL_COMPARE_FLAG=2;


var DEFAULT_TRUNC_LENGTH=30,
DEFAULT_TRUNC_OMISSION='...';


var HOT_COUNT=150,
HOT_SPAN=16;


var LAZY_FILTER_FLAG=1,
LAZY_MAP_FLAG=2,
LAZY_WHILE_FLAG=3;


var INFINITY=1/0,
MAX_SAFE_INTEGER=9007199254740991,
MAX_INTEGER=1.7976931348623157e+308,
NAN=0/0;


var MAX_ARRAY_LENGTH=4294967295,
MAX_ARRAY_INDEX=MAX_ARRAY_LENGTH-1,
HALF_MAX_ARRAY_LENGTH=MAX_ARRAY_LENGTH>>>1;


var argsTag='[object Arguments]',
arrayTag='[object Array]',
boolTag='[object Boolean]',
dateTag='[object Date]',
errorTag='[object Error]',
funcTag='[object Function]',
genTag='[object GeneratorFunction]',
mapTag='[object Map]',
numberTag='[object Number]',
objectTag='[object Object]',
promiseTag='[object Promise]',
regexpTag='[object RegExp]',
setTag='[object Set]',
stringTag='[object String]',
symbolTag='[object Symbol]',
weakMapTag='[object WeakMap]',
weakSetTag='[object WeakSet]';

var arrayBufferTag='[object ArrayBuffer]',
dataViewTag='[object DataView]',
float32Tag='[object Float32Array]',
float64Tag='[object Float64Array]',
int8Tag='[object Int8Array]',
int16Tag='[object Int16Array]',
int32Tag='[object Int32Array]',
uint8Tag='[object Uint8Array]',
uint8ClampedTag='[object Uint8ClampedArray]',
uint16Tag='[object Uint16Array]',
uint32Tag='[object Uint32Array]';


var reEmptyStringLeading=/\b__p \+= '';/g,
reEmptyStringMiddle=/\b(__p \+=) '' \+/g,
reEmptyStringTrailing=/(__e\(.*?\)|\b__t\)) \+\n'';/g;


var reEscapedHtml=/&(?:amp|lt|gt|quot|#39|#96);/g,
reUnescapedHtml=/[&<>"'`]/g,
reHasEscapedHtml=RegExp(reEscapedHtml.source),
reHasUnescapedHtml=RegExp(reUnescapedHtml.source);


var reEscape=/<%-([\s\S]+?)%>/g,
reEvaluate=/<%([\s\S]+?)%>/g,
reInterpolate=/<%=([\s\S]+?)%>/g;


var reIsDeepProp=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
reIsPlainProp=/^\w*$/,
rePropName=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g;





var reRegExpChar=/[\\^$.*+?()[\]{}|]/g,
reHasRegExpChar=RegExp(reRegExpChar.source);


var reTrim=/^\s+|\s+$/g,
reTrimStart=/^\s+/,
reTrimEnd=/\s+$/;


var reBasicWord=/[a-zA-Z0-9]+/g;


var reEscapeChar=/\\(\\)?/g;





var reEsTemplate=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;


var reFlags=/\w*$/;


var reHasHexPrefix=/^0x/i;


var reIsBadHex=/^[-+]0x[0-9a-f]+$/i;


var reIsBinary=/^0b[01]+$/i;


var reIsHostCtor=/^\[object .+?Constructor\]$/;


var reIsOctal=/^0o[0-7]+$/i;


var reIsUint=/^(?:0|[1-9]\d*)$/;


var reLatin1=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g;


var reNoMatch=/($^)/;


var reUnescapedString=/['\n\r\u2028\u2029\\]/g;


var rsAstralRange='\\ud800-\\udfff',
rsComboMarksRange='\\u0300-\\u036f\\ufe20-\\ufe23',
rsComboSymbolsRange='\\u20d0-\\u20f0',
rsDingbatRange='\\u2700-\\u27bf',
rsLowerRange='a-z\\xdf-\\xf6\\xf8-\\xff',
rsMathOpRange='\\xac\\xb1\\xd7\\xf7',
rsNonCharRange='\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
rsPunctuationRange='\\u2000-\\u206f',
rsSpaceRange=' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
rsUpperRange='A-Z\\xc0-\\xd6\\xd8-\\xde',
rsVarRange='\\ufe0e\\ufe0f',
rsBreakRange=rsMathOpRange+rsNonCharRange+rsPunctuationRange+rsSpaceRange;


var rsApos='[\'\u2019]',
rsAstral='['+rsAstralRange+']',
rsBreak='['+rsBreakRange+']',
rsCombo='['+rsComboMarksRange+rsComboSymbolsRange+']',
rsDigits='\\d+',
rsDingbat='['+rsDingbatRange+']',
rsLower='['+rsLowerRange+']',
rsMisc='[^'+rsAstralRange+rsBreakRange+rsDigits+rsDingbatRange+rsLowerRange+rsUpperRange+']',
rsFitz='\\ud83c[\\udffb-\\udfff]',
rsModifier='(?:'+rsCombo+'|'+rsFitz+')',
rsNonAstral='[^'+rsAstralRange+']',
rsRegional='(?:\\ud83c[\\udde6-\\uddff]){2}',
rsSurrPair='[\\ud800-\\udbff][\\udc00-\\udfff]',
rsUpper='['+rsUpperRange+']',
rsZWJ='\\u200d';


var rsLowerMisc='(?:'+rsLower+'|'+rsMisc+')',
rsUpperMisc='(?:'+rsUpper+'|'+rsMisc+')',
rsOptLowerContr='(?:'+rsApos+'(?:d|ll|m|re|s|t|ve))?',
rsOptUpperContr='(?:'+rsApos+'(?:D|LL|M|RE|S|T|VE))?',
reOptMod=rsModifier+'?',
rsOptVar='['+rsVarRange+']?',
rsOptJoin='(?:'+rsZWJ+'(?:'+[rsNonAstral,rsRegional,rsSurrPair].join('|')+')'+rsOptVar+reOptMod+')*',
rsSeq=rsOptVar+reOptMod+rsOptJoin,
rsEmoji='(?:'+[rsDingbat,rsRegional,rsSurrPair].join('|')+')'+rsSeq,
rsSymbol='(?:'+[rsNonAstral+rsCombo+'?',rsCombo,rsRegional,rsSurrPair,rsAstral].join('|')+')';


var reApos=RegExp(rsApos,'g');





var reComboMark=RegExp(rsCombo,'g');


var reComplexSymbol=RegExp(rsFitz+'(?='+rsFitz+')|'+rsSymbol+rsSeq,'g');


var reComplexWord=RegExp([
rsUpper+'?'+rsLower+'+'+rsOptLowerContr+'(?='+[rsBreak,rsUpper,'$'].join('|')+')',
rsUpperMisc+'+'+rsOptUpperContr+'(?='+[rsBreak,rsUpper+rsLowerMisc,'$'].join('|')+')',
rsUpper+'?'+rsLowerMisc+'+'+rsOptLowerContr,
rsUpper+'+'+rsOptUpperContr,
rsDigits,
rsEmoji].
join('|'),'g');


var reHasComplexSymbol=RegExp('['+rsZWJ+rsAstralRange+rsComboMarksRange+rsComboSymbolsRange+rsVarRange+']');


var reHasComplexWord=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;


var contextProps=[
'Array','Buffer','DataView','Date','Error','Float32Array','Float64Array',
'Function','Int8Array','Int16Array','Int32Array','Map','Math','Object',
'Promise','Reflect','RegExp','Set','String','Symbol','TypeError',
'Uint8Array','Uint8ClampedArray','Uint16Array','Uint32Array','WeakMap',
'_','clearTimeout','isFinite','parseInt','setTimeout'];



var templateCounter=-1;


var typedArrayTags={};
typedArrayTags[float32Tag]=typedArrayTags[float64Tag]=
typedArrayTags[int8Tag]=typedArrayTags[int16Tag]=
typedArrayTags[int32Tag]=typedArrayTags[uint8Tag]=
typedArrayTags[uint8ClampedTag]=typedArrayTags[uint16Tag]=
typedArrayTags[uint32Tag]=true;
typedArrayTags[argsTag]=typedArrayTags[arrayTag]=
typedArrayTags[arrayBufferTag]=typedArrayTags[boolTag]=
typedArrayTags[dataViewTag]=typedArrayTags[dateTag]=
typedArrayTags[errorTag]=typedArrayTags[funcTag]=
typedArrayTags[mapTag]=typedArrayTags[numberTag]=
typedArrayTags[objectTag]=typedArrayTags[regexpTag]=
typedArrayTags[setTag]=typedArrayTags[stringTag]=
typedArrayTags[weakMapTag]=false;


var cloneableTags={};
cloneableTags[argsTag]=cloneableTags[arrayTag]=
cloneableTags[arrayBufferTag]=cloneableTags[dataViewTag]=
cloneableTags[boolTag]=cloneableTags[dateTag]=
cloneableTags[float32Tag]=cloneableTags[float64Tag]=
cloneableTags[int8Tag]=cloneableTags[int16Tag]=
cloneableTags[int32Tag]=cloneableTags[mapTag]=
cloneableTags[numberTag]=cloneableTags[objectTag]=
cloneableTags[regexpTag]=cloneableTags[setTag]=
cloneableTags[stringTag]=cloneableTags[symbolTag]=
cloneableTags[uint8Tag]=cloneableTags[uint8ClampedTag]=
cloneableTags[uint16Tag]=cloneableTags[uint32Tag]=true;
cloneableTags[errorTag]=cloneableTags[funcTag]=
cloneableTags[weakMapTag]=false;


var deburredLetters={
'\xc0':'A','\xc1':'A','\xc2':'A','\xc3':'A','\xc4':'A','\xc5':'A',
'\xe0':'a','\xe1':'a','\xe2':'a','\xe3':'a','\xe4':'a','\xe5':'a',
'\xc7':'C','\xe7':'c',
'\xd0':'D','\xf0':'d',
'\xc8':'E','\xc9':'E','\xca':'E','\xcb':'E',
'\xe8':'e','\xe9':'e','\xea':'e','\xeb':'e',
'\xcC':'I','\xcd':'I','\xce':'I','\xcf':'I',
'\xeC':'i','\xed':'i','\xee':'i','\xef':'i',
'\xd1':'N','\xf1':'n',
'\xd2':'O','\xd3':'O','\xd4':'O','\xd5':'O','\xd6':'O','\xd8':'O',
'\xf2':'o','\xf3':'o','\xf4':'o','\xf5':'o','\xf6':'o','\xf8':'o',
'\xd9':'U','\xda':'U','\xdb':'U','\xdc':'U',
'\xf9':'u','\xfa':'u','\xfb':'u','\xfc':'u',
'\xdd':'Y','\xfd':'y','\xff':'y',
'\xc6':'Ae','\xe6':'ae',
'\xde':'Th','\xfe':'th',
'\xdf':'ss'};



var htmlEscapes={
'&':'&amp;',
'<':'&lt;',
'>':'&gt;',
'"':'&quot;',
"'":'&#39;',
'`':'&#96;'};



var htmlUnescapes={
'&amp;':'&',
'&lt;':'<',
'&gt;':'>',
'&quot;':'"',
'&#39;':"'",
'&#96;':'`'};



var objectTypes={
'function':true,
'object':true};



var stringEscapes={
'\\':'\\',
"'":"'",
'\n':'n',
'\r':'r',
'\u2028':'u2028',
'\u2029':'u2029'};



var freeParseFloat=parseFloat,
freeParseInt=parseInt;


var freeExports=objectTypes[typeof exports]&&exports&&!exports.nodeType?
exports:
undefined;


var freeModule=objectTypes[typeof module]&&module&&!module.nodeType?
module:
undefined;


var moduleExports=freeModule&&freeModule.exports===freeExports?
freeExports:
undefined;


var freeGlobal=checkGlobal(freeExports&&freeModule&&typeof global=='object'&&global);


var freeSelf=checkGlobal(objectTypes[typeof self]&&self);


var freeWindow=checkGlobal(objectTypes[typeof window]&&window);


var thisGlobal=checkGlobal(objectTypes[typeof this]&&this);







var root=freeGlobal||
freeWindow!==(thisGlobal&&thisGlobal.window)&&freeWindow||
freeSelf||thisGlobal||Function('return this')();











function addMapEntry(map,pair){

map.set(pair[0],pair[1]);
return map;
}









function addSetEntry(set,value){
set.add(value);
return set;
}











function apply(func,thisArg,args){
var length=args.length;
switch(length){
case 0:return func.call(thisArg);
case 1:return func.call(thisArg,args[0]);
case 2:return func.call(thisArg,args[0],args[1]);
case 3:return func.call(thisArg,args[0],args[1],args[2]);}

return func.apply(thisArg,args);
}











function arrayAggregator(array,setter,iteratee,accumulator){
var index=-1,
length=array.length;

while(++index<length){
var value=array[index];
setter(accumulator,value,iteratee(value),array);
}
return accumulator;
}









function arrayConcat(array,other){
var index=-1,
length=array.length,
othIndex=-1,
othLength=other.length,
result=Array(length+othLength);

while(++index<length){
result[index]=array[index];
}
while(++othIndex<othLength){
result[index++]=other[othIndex];
}
return result;
}










function arrayEach(array,iteratee){
var index=-1,
length=array.length;

while(++index<length){
if(iteratee(array[index],index,array)===false){
break;
}
}
return array;
}










function arrayEachRight(array,iteratee){
var length=array.length;

while(length--){
if(iteratee(array[length],length,array)===false){
break;
}
}
return array;
}











function arrayEvery(array,predicate){
var index=-1,
length=array.length;

while(++index<length){
if(!predicate(array[index],index,array)){
return false;
}
}
return true;
}










function arrayFilter(array,predicate){
var index=-1,
length=array.length,
resIndex=0,
result=[];

while(++index<length){
var value=array[index];
if(predicate(value,index,array)){
result[resIndex++]=value;
}
}
return result;
}










function arrayIncludes(array,value){
return!!array.length&&baseIndexOf(array,value,0)>-1;
}










function arrayIncludesWith(array,value,comparator){
var index=-1,
length=array.length;

while(++index<length){
if(comparator(value,array[index])){
return true;
}
}
return false;
}










function arrayMap(array,iteratee){
var index=-1,
length=array.length,
result=Array(length);

while(++index<length){
result[index]=iteratee(array[index],index,array);
}
return result;
}









function arrayPush(array,values){
var index=-1,
length=values.length,
offset=array.length;

while(++index<length){
array[offset+index]=values[index];
}
return array;
}













function arrayReduce(array,iteratee,accumulator,initAccum){
var index=-1,
length=array.length;

if(initAccum&&length){
accumulator=array[++index];
}
while(++index<length){
accumulator=iteratee(accumulator,array[index],index,array);
}
return accumulator;
}













function arrayReduceRight(array,iteratee,accumulator,initAccum){
var length=array.length;
if(initAccum&&length){
accumulator=array[--length];
}
while(length--){
accumulator=iteratee(accumulator,array[length],length,array);
}
return accumulator;
}











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














function baseFind(collection,predicate,eachFunc,retKey){
var result;
eachFunc(collection,function(value,key,collection){
if(predicate(value,key,collection)){
result=retKey?key:value;
return false;
}
});
return result;
}











function baseFindIndex(array,predicate,fromRight){
var length=array.length,
index=fromRight?length:-1;

while(fromRight?index--:++index<length){
if(predicate(array[index],index,array)){
return index;
}
}
return-1;
}










function baseIndexOf(array,value,fromIndex){
if(value!==value){
return indexOfNaN(array,fromIndex);
}
var index=fromIndex-1,
length=array.length;

while(++index<length){
if(array[index]===value){
return index;
}
}
return-1;
}











function baseIndexOfWith(array,value,fromIndex,comparator){
var index=fromIndex-1,
length=array.length;

while(++index<length){
if(comparator(array[index],value)){
return index;
}
}
return-1;
}










function baseMean(array,iteratee){
var length=array?array.length:0;
return length?baseSum(array,iteratee)/length:NAN;
}














function baseReduce(collection,iteratee,accumulator,initAccum,eachFunc){
eachFunc(collection,function(value,index,collection){
accumulator=initAccum?(
initAccum=false,value):
iteratee(accumulator,value,index,collection);
});
return accumulator;
}











function baseSortBy(array,comparer){
var length=array.length;

array.sort(comparer);
while(length--){
array[length]=array[length].value;
}
return array;
}










function baseSum(array,iteratee){
var result,
index=-1,
length=array.length;

while(++index<length){
var current=iteratee(array[index]);
if(current!==undefined){
result=result===undefined?current:result+current;
}
}
return result;
}










function baseTimes(n,iteratee){
var index=-1,
result=Array(n);

while(++index<n){
result[index]=iteratee(index);
}
return result;
}










function baseToPairs(object,props){
return arrayMap(props,function(key){
return[key,object[key]];
});
}








function baseUnary(func){
return function(value){
return func(value);
};
}











function baseValues(object,props){
return arrayMap(props,function(key){
return object[key];
});
}










function charsStartIndex(strSymbols,chrSymbols){
var index=-1,
length=strSymbols.length;

while(++index<length&&baseIndexOf(chrSymbols,strSymbols[index],0)>-1){}
return index;
}










function charsEndIndex(strSymbols,chrSymbols){
var index=strSymbols.length;

while(index--&&baseIndexOf(chrSymbols,strSymbols[index],0)>-1){}
return index;
}








function checkGlobal(value){
return value&&value.Object===Object?value:null;
}









function countHolders(array,placeholder){
var length=array.length,
result=0;

while(length--){
if(array[length]===placeholder){
result++;
}
}
return result;
}








function deburrLetter(letter){
return deburredLetters[letter];
}








function escapeHtmlChar(chr){
return htmlEscapes[chr];
}








function escapeStringChar(chr){
return'\\'+stringEscapes[chr];
}










function indexOfNaN(array,fromIndex,fromRight){
var length=array.length,
index=fromIndex+(fromRight?0:-1);

while(fromRight?index--:++index<length){
var other=array[index];
if(other!==other){
return index;
}
}
return-1;
}








function isHostObject(value){


var result=false;
if(value!=null&&typeof value.toString!='function'){
try{
result=!!(value+'');
}catch(e){}
}
return result;
}








function iteratorToArray(iterator){
var data,
result=[];

while(!(data=iterator.next()).done){
result.push(data.value);
}
return result;
}








function mapToArray(map){
var index=-1,
result=Array(map.size);

map.forEach(function(value,key){
result[++index]=[key,value];
});
return result;
}










function replaceHolders(array,placeholder){
var index=-1,
length=array.length,
resIndex=0,
result=[];

while(++index<length){
var value=array[index];
if(value===placeholder||value===PLACEHOLDER){
array[index]=PLACEHOLDER;
result[resIndex++]=index;
}
}
return result;
}








function setToArray(set){
var index=-1,
result=Array(set.size);

set.forEach(function(value){
result[++index]=value;
});
return result;
}








function stringSize(string){
if(!(string&&reHasComplexSymbol.test(string))){
return string.length;
}
var result=reComplexSymbol.lastIndex=0;
while(reComplexSymbol.test(string)){
result++;
}
return result;
}








function stringToArray(string){
return string.match(reComplexSymbol);
}








function unescapeHtmlChar(chr){
return htmlUnescapes[chr];
}







































function runInContext(context){
context=context?_.defaults({},context,_.pick(root,contextProps)):root;


var Date=context.Date,
Error=context.Error,
Math=context.Math,
RegExp=context.RegExp,
TypeError=context.TypeError;


var arrayProto=context.Array.prototype,
objectProto=context.Object.prototype,
stringProto=context.String.prototype;


var funcToString=context.Function.prototype.toString;


var hasOwnProperty=objectProto.hasOwnProperty;


var idCounter=0;


var objectCtorString=funcToString.call(Object);






var objectToString=objectProto.toString;


var oldDash=root._;


var reIsNative=RegExp('^'+
funcToString.call(hasOwnProperty).replace(reRegExpChar,'\\$&').
replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,'$1.*?')+'$');



var Buffer=moduleExports?context.Buffer:undefined,
Reflect=context.Reflect,
Symbol=context.Symbol,
Uint8Array=context.Uint8Array,
clearTimeout=context.clearTimeout,
enumerate=Reflect?Reflect.enumerate:undefined,
getOwnPropertySymbols=Object.getOwnPropertySymbols,
iteratorSymbol=typeof(iteratorSymbol=Symbol&&(typeof Symbol==='function'?Symbol.iterator:'@@iterator'))=='symbol'?iteratorSymbol:undefined,
objectCreate=Object.create,
propertyIsEnumerable=objectProto.propertyIsEnumerable,
setTimeout=context.setTimeout,
splice=arrayProto.splice;


var nativeCeil=Math.ceil,
nativeFloor=Math.floor,
nativeGetPrototype=Object.getPrototypeOf,
nativeIsFinite=context.isFinite,
nativeJoin=arrayProto.join,
nativeKeys=Object.keys,
nativeMax=Math.max,
nativeMin=Math.min,
nativeParseInt=context.parseInt,
nativeRandom=Math.random,
nativeReplace=stringProto.replace,
nativeReverse=arrayProto.reverse,
nativeSplit=stringProto.split;


var DataView=getNative(context,'DataView'),
Map=getNative(context,'Map'),
Promise=getNative(context,'Promise'),
Set=getNative(context,'Set'),
WeakMap=getNative(context,'WeakMap'),
nativeCreate=getNative(Object,'create');


var metaMap=WeakMap&&new WeakMap();


var nonEnumShadows=!propertyIsEnumerable.call({'valueOf':1},'valueOf');


var realNames={};


var dataViewCtorString=toSource(DataView),
mapCtorString=toSource(Map),
promiseCtorString=toSource(Promise),
setCtorString=toSource(Set),
weakMapCtorString=toSource(WeakMap);


var symbolProto=Symbol?typeof Symbol==='function'?Symbol.prototype:'@@prototype':undefined,
symbolValueOf=symbolProto?symbolProto.valueOf:undefined,
symbolToString=symbolProto?symbolProto.toString:undefined;






















































































































function lodash(value){
if(isObjectLike(value)&&!isArray(value)&&!(value instanceof LazyWrapper)){
if(value instanceof LodashWrapper){
return value;
}
if(hasOwnProperty.call(value,'__wrapped__')){
return wrapperClone(value);
}
}
return new LodashWrapper(value);
}






function baseLodash(){

}








function LodashWrapper(value,chainAll){
this.__wrapped__=value;
this.__actions__=[];
this.__chain__=!!chainAll;
this.__index__=0;
this.__values__=undefined;
}










lodash.templateSettings={







'escape':reEscape,







'evaluate':reEvaluate,







'interpolate':reInterpolate,







'variable':'',







'imports':{







'_':lodash}};




lodash.prototype=baseLodash.prototype;
lodash.prototype.constructor=lodash;

LodashWrapper.prototype=baseCreate(baseLodash.prototype);
LodashWrapper.prototype.constructor=LodashWrapper;










function LazyWrapper(value){
this.__wrapped__=value;
this.__actions__=[];
this.__dir__=1;
this.__filtered__=false;
this.__iteratees__=[];
this.__takeCount__=MAX_ARRAY_LENGTH;
this.__views__=[];
}









function lazyClone(){
var result=new LazyWrapper(this.__wrapped__);
result.__actions__=copyArray(this.__actions__);
result.__dir__=this.__dir__;
result.__filtered__=this.__filtered__;
result.__iteratees__=copyArray(this.__iteratees__);
result.__takeCount__=this.__takeCount__;
result.__views__=copyArray(this.__views__);
return result;
}









function lazyReverse(){
if(this.__filtered__){
var result=new LazyWrapper(this);
result.__dir__=-1;
result.__filtered__=true;
}else{
result=this.clone();
result.__dir__*=-1;
}
return result;
}









function lazyValue(){
var array=this.__wrapped__.value(),
dir=this.__dir__,
isArr=isArray(array),
isRight=dir<0,
arrLength=isArr?array.length:0,
view=getView(0,arrLength,this.__views__),
start=view.start,
end=view.end,
length=end-start,
index=isRight?end:start-1,
iteratees=this.__iteratees__,
iterLength=iteratees.length,
resIndex=0,
takeCount=nativeMin(length,this.__takeCount__);

if(!isArr||arrLength<LARGE_ARRAY_SIZE||
arrLength==length&&takeCount==length){
return baseWrapperValue(array,this.__actions__);
}
var result=[];

outer:
while(length--&&resIndex<takeCount){
index+=dir;

var iterIndex=-1,
value=array[index];

while(++iterIndex<iterLength){
var data=iteratees[iterIndex],
iteratee=data.iteratee,
type=data.type,
computed=iteratee(value);

if(type==LAZY_MAP_FLAG){
value=computed;
}else if(!computed){
if(type==LAZY_FILTER_FLAG){
continue outer;
}else{
break outer;
}
}
}
result[resIndex++]=value;
}
return result;
}


LazyWrapper.prototype=baseCreate(baseLodash.prototype);
LazyWrapper.prototype.constructor=LazyWrapper;










function Hash(){}









function hashDelete(hash,key){
return hashHas(hash,key)&&delete hash[key];
}









function hashGet(hash,key){
if(nativeCreate){
var result=hash[key];
return result===HASH_UNDEFINED?undefined:result;
}
return hasOwnProperty.call(hash,key)?hash[key]:undefined;
}









function hashHas(hash,key){
return nativeCreate?hash[key]!==undefined:hasOwnProperty.call(hash,key);
}









function hashSet(hash,key,value){
hash[key]=nativeCreate&&value===undefined?HASH_UNDEFINED:value;
}


Hash.prototype=nativeCreate?nativeCreate(null):objectProto;










function MapCache(values){
var index=-1,
length=values?values.length:0;

this.clear();
while(++index<length){
var entry=values[index];
this.set(entry[0],entry[1]);
}
}








function mapClear(){
this.__data__={
'hash':new Hash(),
'map':Map?new Map():[],
'string':new Hash()};

}










function mapDelete(key){
var data=this.__data__;
if(isKeyable(key)){
return hashDelete(typeof key=='string'?data.string:data.hash,key);
}
return Map?data.map['delete'](key):assocDelete(data.map,key);
}










function mapGet(key){
var data=this.__data__;
if(isKeyable(key)){
return hashGet(typeof key=='string'?data.string:data.hash,key);
}
return Map?data.map.get(key):assocGet(data.map,key);
}










function mapHas(key){
var data=this.__data__;
if(isKeyable(key)){
return hashHas(typeof key=='string'?data.string:data.hash,key);
}
return Map?data.map.has(key):assocHas(data.map,key);
}











function mapSet(key,value){
var data=this.__data__;
if(isKeyable(key)){
hashSet(typeof key=='string'?data.string:data.hash,key,value);
}else if(Map){
data.map.set(key,value);
}else{
assocSet(data.map,key,value);
}
return this;
}


MapCache.prototype.clear=mapClear;
MapCache.prototype['delete']=mapDelete;
MapCache.prototype.get=mapGet;
MapCache.prototype.has=mapHas;
MapCache.prototype.set=mapSet;











function SetCache(values){
var index=-1,
length=values?values.length:0;

this.__data__=new MapCache();
while(++index<length){
this.push(values[index]);
}
}









function cacheHas(cache,value){
var map=cache.__data__;
if(isKeyable(value)){
var data=map.__data__,
hash=typeof value=='string'?data.string:data.hash;

return hash[value]===HASH_UNDEFINED;
}
return map.has(value);
}









function cachePush(value){
var map=this.__data__;
if(isKeyable(value)){
var data=map.__data__,
hash=typeof value=='string'?data.string:data.hash;

hash[value]=HASH_UNDEFINED;
}else
{
map.set(value,HASH_UNDEFINED);
}
}


SetCache.prototype.push=cachePush;










function Stack(values){
var index=-1,
length=values?values.length:0;

this.clear();
while(++index<length){
var entry=values[index];
this.set(entry[0],entry[1]);
}
}








function stackClear(){
this.__data__={'array':[],'map':null};
}










function stackDelete(key){
var data=this.__data__,
array=data.array;

return array?assocDelete(array,key):data.map['delete'](key);
}










function stackGet(key){
var data=this.__data__,
array=data.array;

return array?assocGet(array,key):data.map.get(key);
}










function stackHas(key){
var data=this.__data__,
array=data.array;

return array?assocHas(array,key):data.map.has(key);
}











function stackSet(key,value){
var data=this.__data__,
array=data.array;

if(array){
if(array.length<LARGE_ARRAY_SIZE-1){
assocSet(array,key,value);
}else{
data.array=null;
data.map=new MapCache(array);
}
}
var map=data.map;
if(map){
map.set(key,value);
}
return this;
}


Stack.prototype.clear=stackClear;
Stack.prototype['delete']=stackDelete;
Stack.prototype.get=stackGet;
Stack.prototype.has=stackHas;
Stack.prototype.set=stackSet;











function assocDelete(array,key){
var index=assocIndexOf(array,key);
if(index<0){
return false;
}
var lastIndex=array.length-1;
if(index==lastIndex){
array.pop();
}else{
splice.call(array,index,1);
}
return true;
}









function assocGet(array,key){
var index=assocIndexOf(array,key);
return index<0?undefined:array[index][1];
}









function assocHas(array,key){
return assocIndexOf(array,key)>-1;
}









function assocIndexOf(array,key){
var length=array.length;
while(length--){
if(eq(array[length][0],key)){
return length;
}
}
return-1;
}









function assocSet(array,key,value){
var index=assocIndexOf(array,key);
if(index<0){
array.push([key,value]);
}else{
array[index][1]=value;
}
}













function assignInDefaults(objValue,srcValue,key,object){
if(objValue===undefined||
eq(objValue,objectProto[key])&&!hasOwnProperty.call(object,key)){
return srcValue;
}
return objValue;
}










function assignMergeValue(object,key,value){
if(value!==undefined&&!eq(object[key],value)||
typeof key=='number'&&value===undefined&&!(key in object)){
object[key]=value;
}
}











function assignValue(object,key,value){
var objValue=object[key];
if(!(hasOwnProperty.call(object,key)&&eq(objValue,value))||
value===undefined&&!(key in object)){
object[key]=value;
}
}












function baseAggregator(collection,setter,iteratee,accumulator){
baseEach(collection,function(value,key,collection){
setter(accumulator,value,iteratee(value),collection);
});
return accumulator;
}










function baseAssign(object,source){
return object&&copyObject(source,keys(source),object);
}









function baseAt(object,paths){
var index=-1,
isNil=object==null,
length=paths.length,
result=Array(length);

while(++index<length){
result[index]=isNil?undefined:get(object,paths[index]);
}
return result;
}










function baseClamp(number,lower,upper){
if(number===number){
if(upper!==undefined){
number=number<=upper?number:upper;
}
if(lower!==undefined){
number=number>=lower?number:lower;
}
}
return number;
}















function baseClone(value,isDeep,isFull,customizer,key,object,stack){
var result;
if(customizer){
result=object?customizer(value,key,object,stack):customizer(value);
}
if(result!==undefined){
return result;
}
if(!isObject(value)){
return value;
}
var isArr=isArray(value);
if(isArr){
result=initCloneArray(value);
if(!isDeep){
return copyArray(value,result);
}
}else{
var tag=getTag(value),
isFunc=tag==funcTag||tag==genTag;

if(isBuffer(value)){
return cloneBuffer(value,isDeep);
}
if(tag==objectTag||tag==argsTag||isFunc&&!object){
if(isHostObject(value)){
return object?value:{};
}
result=initCloneObject(isFunc?{}:value);
if(!isDeep){
return copySymbols(value,baseAssign(result,value));
}
}else{
if(!cloneableTags[tag]){
return object?value:{};
}
result=initCloneByTag(value,tag,baseClone,isDeep);
}
}

stack||(stack=new Stack());
var stacked=stack.get(value);
if(stacked){
return stacked;
}
stack.set(value,result);

if(!isArr){
var props=isFull?getAllKeys(value):keys(value);
}

arrayEach(props||value,function(subValue,key){
if(props){
key=subValue;
subValue=value[key];
}
assignValue(result,key,baseClone(subValue,isDeep,isFull,customizer,key,value,stack));
});
return result;
}








function baseConforms(source){
var props=keys(source),
length=props.length;

return function(object){
if(object==null){
return!length;
}
var index=length;
while(index--){
var key=props[index],
predicate=source[key],
value=object[key];

if(value===undefined&&
!(key in Object(object))||!predicate(value)){
return false;
}
}
return true;
};
}









function baseCreate(proto){
return isObject(proto)?objectCreate(proto):{};
}











function baseDelay(func,wait,args){
if(typeof func!='function'){
throw new TypeError(FUNC_ERROR_TEXT);
}
return setTimeout(function(){func.apply(undefined,args);},wait);
}












function baseDifference(array,values,iteratee,comparator){
var index=-1,
includes=arrayIncludes,
isCommon=true,
length=array.length,
result=[],
valuesLength=values.length;

if(!length){
return result;
}
if(iteratee){
values=arrayMap(values,baseUnary(iteratee));
}
if(comparator){
includes=arrayIncludesWith;
isCommon=false;
}else
if(values.length>=LARGE_ARRAY_SIZE){
includes=cacheHas;
isCommon=false;
values=new SetCache(values);
}
outer:
while(++index<length){
var value=array[index],
computed=iteratee?iteratee(value):value;

value=comparator||value!==0?value:0;
if(isCommon&&computed===computed){
var valuesIndex=valuesLength;
while(valuesIndex--){
if(values[valuesIndex]===computed){
continue outer;
}
}
result.push(value);
}else
if(!includes(values,computed,comparator)){
result.push(value);
}
}
return result;
}









var baseEach=createBaseEach(baseForOwn);









var baseEachRight=createBaseEach(baseForOwnRight,true);










function baseEvery(collection,predicate){
var result=true;
baseEach(collection,function(value,index,collection){
result=!!predicate(value,index,collection);
return result;
});
return result;
}











function baseExtremum(array,iteratee,comparator){
var index=-1,
length=array.length;

while(++index<length){
var value=array[index],
current=iteratee(value);

if(current!=null&&(computed===undefined?
current===current&&!isSymbol(current):
comparator(current,computed)))
{
var computed=current,
result=value;
}
}
return result;
}











function baseFill(array,value,start,end){
var length=array.length;

start=toInteger(start);
if(start<0){
start=-start>length?0:length+start;
}
end=end===undefined||end>length?length:toInteger(end);
if(end<0){
end+=length;
}
end=start>end?0:toLength(end);
while(start<end){
array[start++]=value;
}
return array;
}









function baseFilter(collection,predicate){
var result=[];
baseEach(collection,function(value,index,collection){
if(predicate(value,index,collection)){
result.push(value);
}
});
return result;
}












function baseFlatten(array,depth,predicate,isStrict,result){
var index=-1,
length=array.length;

predicate||(predicate=isFlattenable);
result||(result=[]);

while(++index<length){
var value=array[index];
if(depth>0&&predicate(value)){
if(depth>1){

baseFlatten(value,depth-1,predicate,isStrict,result);
}else{
arrayPush(result,value);
}
}else if(!isStrict){
result[result.length]=value;
}
}
return result;
}












var baseFor=createBaseFor();











var baseForRight=createBaseFor(true);









function baseForOwn(object,iteratee){
return object&&baseFor(object,iteratee,keys);
}









function baseForOwnRight(object,iteratee){
return object&&baseForRight(object,iteratee,keys);
}










function baseFunctions(object,props){
return arrayFilter(props,function(key){
return isFunction(object[key]);
});
}









function baseGet(object,path){
path=isKey(path,object)?[path]:castPath(path);

var index=0,
length=path.length;

while(object!=null&&index<length){
object=object[toKey(path[index++])];
}
return index&&index==length?object:undefined;
}












function baseGetAllKeys(object,keysFunc,symbolsFunc){
var result=keysFunc(object);
return isArray(object)?
result:
arrayPush(result,symbolsFunc(object));
}










function baseGt(value,other){
return value>other;
}









function baseHas(object,key){



return hasOwnProperty.call(object,key)||
typeof object=='object'&&key in object&&getPrototype(object)===null;
}









function baseHasIn(object,key){
return key in Object(object);
}










function baseInRange(number,start,end){
return number>=nativeMin(start,end)&&number<nativeMax(start,end);
}











function baseIntersection(arrays,iteratee,comparator){
var includes=comparator?arrayIncludesWith:arrayIncludes,
length=arrays[0].length,
othLength=arrays.length,
othIndex=othLength,
caches=Array(othLength),
maxLength=Infinity,
result=[];

while(othIndex--){
var array=arrays[othIndex];
if(othIndex&&iteratee){
array=arrayMap(array,baseUnary(iteratee));
}
maxLength=nativeMin(array.length,maxLength);
caches[othIndex]=!comparator&&(iteratee||length>=120&&array.length>=120)?
new SetCache(othIndex&&array):
undefined;
}
array=arrays[0];

var index=-1,
seen=caches[0];

outer:
while(++index<length&&result.length<maxLength){
var value=array[index],
computed=iteratee?iteratee(value):value;

value=comparator||value!==0?value:0;
if(!(seen?
cacheHas(seen,computed):
includes(result,computed,comparator)))
{
othIndex=othLength;
while(--othIndex){
var cache=caches[othIndex];
if(!(cache?
cacheHas(cache,computed):
includes(arrays[othIndex],computed,comparator)))
{
continue outer;
}
}
if(seen){
seen.push(computed);
}
result.push(value);
}
}
return result;
}












function baseInverter(object,setter,iteratee,accumulator){
baseForOwn(object,function(value,key,object){
setter(accumulator,iteratee(value),key,object);
});
return accumulator;
}











function baseInvoke(object,path,args){
if(!isKey(path,object)){
path=castPath(path);
object=parent(object,path);
path=last(path);
}
var func=object==null?object:object[toKey(path)];
return func==null?undefined:apply(func,object,args);
}
















function baseIsEqual(value,other,customizer,bitmask,stack){
if(value===other){
return true;
}
if(value==null||other==null||!isObject(value)&&!isObjectLike(other)){
return value!==value&&other!==other;
}
return baseIsEqualDeep(value,other,baseIsEqual,customizer,bitmask,stack);
}
















function baseIsEqualDeep(object,other,equalFunc,customizer,bitmask,stack){
var objIsArr=isArray(object),
othIsArr=isArray(other),
objTag=arrayTag,
othTag=arrayTag;

if(!objIsArr){
objTag=getTag(object);
objTag=objTag==argsTag?objectTag:objTag;
}
if(!othIsArr){
othTag=getTag(other);
othTag=othTag==argsTag?objectTag:othTag;
}
var objIsObj=objTag==objectTag&&!isHostObject(object),
othIsObj=othTag==objectTag&&!isHostObject(other),
isSameTag=objTag==othTag;

if(isSameTag&&!objIsObj){
stack||(stack=new Stack());
return objIsArr||isTypedArray(object)?
equalArrays(object,other,equalFunc,customizer,bitmask,stack):
equalByTag(object,other,objTag,equalFunc,customizer,bitmask,stack);
}
if(!(bitmask&PARTIAL_COMPARE_FLAG)){
var objIsWrapped=objIsObj&&hasOwnProperty.call(object,'__wrapped__'),
othIsWrapped=othIsObj&&hasOwnProperty.call(other,'__wrapped__');

if(objIsWrapped||othIsWrapped){
var objUnwrapped=objIsWrapped?object.value():object,
othUnwrapped=othIsWrapped?other.value():other;

stack||(stack=new Stack());
return equalFunc(objUnwrapped,othUnwrapped,customizer,bitmask,stack);
}
}
if(!isSameTag){
return false;
}
stack||(stack=new Stack());
return equalObjects(object,other,equalFunc,customizer,bitmask,stack);
}











function baseIsMatch(object,source,matchData,customizer){
var index=matchData.length,
length=index,
noCustomizer=!customizer;

if(object==null){
return!length;
}
object=Object(object);
while(index--){
var data=matchData[index];
if(noCustomizer&&data[2]?
data[1]!==object[data[0]]:
!(data[0]in object))
{
return false;
}
}
while(++index<length){
data=matchData[index];
var key=data[0],
objValue=object[key],
srcValue=data[1];

if(noCustomizer&&data[2]){
if(objValue===undefined&&!(key in object)){
return false;
}
}else{
var stack=new Stack();
if(customizer){
var result=customizer(objValue,srcValue,key,object,source,stack);
}
if(!(result===undefined?
baseIsEqual(srcValue,objValue,customizer,UNORDERED_COMPARE_FLAG|PARTIAL_COMPARE_FLAG,stack):
result))
{
return false;
}
}
}
return true;
}








function baseIteratee(value){


if(typeof value=='function'){
return value;
}
if(value==null){
return identity;
}
if(typeof value=='object'){
return isArray(value)?
baseMatchesProperty(value[0],value[1]):
baseMatches(value);
}
return property(value);
}









function baseKeys(object){
return nativeKeys(Object(object));
}









function baseKeysIn(object){
object=object==null?object:Object(object);

var result=[];
for(var key in object){
result.push(key);
}
return result;
}


if(enumerate&&!propertyIsEnumerable.call({'valueOf':1},'valueOf')){
baseKeysIn=function baseKeysIn(object){
return iteratorToArray(enumerate(object));
};
}










function baseLt(value,other){
return value<other;
}









function baseMap(collection,iteratee){
var index=-1,
result=isArrayLike(collection)?Array(collection.length):[];

baseEach(collection,function(value,key,collection){
result[++index]=iteratee(value,key,collection);
});
return result;
}








function baseMatches(source){
var matchData=getMatchData(source);
if(matchData.length==1&&matchData[0][2]){
return matchesStrictComparable(matchData[0][0],matchData[0][1]);
}
return function(object){
return object===source||baseIsMatch(object,source,matchData);
};
}









function baseMatchesProperty(path,srcValue){
if(isKey(path)&&isStrictComparable(srcValue)){
return matchesStrictComparable(toKey(path),srcValue);
}
return function(object){
var objValue=get(object,path);
return objValue===undefined&&objValue===srcValue?
hasIn(object,path):
baseIsEqual(srcValue,objValue,undefined,UNORDERED_COMPARE_FLAG|PARTIAL_COMPARE_FLAG);
};
}












function baseMerge(object,source,srcIndex,customizer,stack){
if(object===source){
return;
}
if(!(isArray(source)||isTypedArray(source))){
var props=keysIn(source);
}
arrayEach(props||source,function(srcValue,key){
if(props){
key=srcValue;
srcValue=source[key];
}
if(isObject(srcValue)){
stack||(stack=new Stack());
baseMergeDeep(object,source,key,srcIndex,baseMerge,customizer,stack);
}else
{
var newValue=customizer?
customizer(object[key],srcValue,key+'',object,source,stack):
undefined;

if(newValue===undefined){
newValue=srcValue;
}
assignMergeValue(object,key,newValue);
}
});
}
















function baseMergeDeep(object,source,key,srcIndex,mergeFunc,customizer,stack){
var objValue=object[key],
srcValue=source[key],
stacked=stack.get(srcValue);

if(stacked){
assignMergeValue(object,key,stacked);
return;
}
var newValue=customizer?
customizer(objValue,srcValue,key+'',object,source,stack):
undefined;

var isCommon=newValue===undefined;

if(isCommon){
newValue=srcValue;
if(isArray(srcValue)||isTypedArray(srcValue)){
if(isArray(objValue)){
newValue=objValue;
}else
if(isArrayLikeObject(objValue)){
newValue=copyArray(objValue);
}else
{
isCommon=false;
newValue=baseClone(srcValue,true);
}
}else
if(isPlainObject(srcValue)||isArguments(srcValue)){
if(isArguments(objValue)){
newValue=toPlainObject(objValue);
}else
if(!isObject(objValue)||srcIndex&&isFunction(objValue)){
isCommon=false;
newValue=baseClone(srcValue,true);
}else
{
newValue=objValue;
}
}else
{
isCommon=false;
}
}
stack.set(srcValue,newValue);

if(isCommon){

mergeFunc(newValue,srcValue,srcIndex,customizer,stack);
}
stack['delete'](srcValue);
assignMergeValue(object,key,newValue);
}









function baseNth(array,n){
var length=array.length;
if(!length){
return;
}
n+=n<0?length:0;
return isIndex(n,length)?array[n]:undefined;
}










function baseOrderBy(collection,iteratees,orders){
var index=-1;
iteratees=arrayMap(iteratees.length?iteratees:[identity],baseUnary(getIteratee()));

var result=baseMap(collection,function(value,key,collection){
var criteria=arrayMap(iteratees,function(iteratee){
return iteratee(value);
});
return{'criteria':criteria,'index':++index,'value':value};
});

return baseSortBy(result,function(object,other){
return compareMultiple(object,other,orders);
});
}










function basePick(object,props){
object=Object(object);
return arrayReduce(props,function(result,key){
if(key in object){
result[key]=object[key];
}
return result;
},{});
}









function basePickBy(object,predicate){
var index=-1,
props=getAllKeysIn(object),
length=props.length,
result={};

while(++index<length){
var key=props[index],
value=object[key];

if(predicate(value,key)){
result[key]=value;
}
}
return result;
}








function baseProperty(key){
return function(object){
return object==null?undefined:object[key];
};
}








function basePropertyDeep(path){
return function(object){
return baseGet(object,path);
};
}












function basePullAll(array,values,iteratee,comparator){
var indexOf=comparator?baseIndexOfWith:baseIndexOf,
index=-1,
length=values.length,
seen=array;

if(iteratee){
seen=arrayMap(array,baseUnary(iteratee));
}
while(++index<length){
var fromIndex=0,
value=values[index],
computed=iteratee?iteratee(value):value;

while((fromIndex=indexOf(seen,computed,fromIndex,comparator))>-1){
if(seen!==array){
splice.call(seen,fromIndex,1);
}
splice.call(array,fromIndex,1);
}
}
return array;
}










function basePullAt(array,indexes){
var length=array?indexes.length:0,
lastIndex=length-1;

while(length--){
var index=indexes[length];
if(length==lastIndex||index!==previous){
var previous=index;
if(isIndex(index)){
splice.call(array,index,1);
}else
if(!isKey(index,array)){
var path=castPath(index),
object=parent(array,path);

if(object!=null){
delete object[toKey(last(path))];
}
}else
{
delete array[toKey(index)];
}
}
}
return array;
}










function baseRandom(lower,upper){
return lower+nativeFloor(nativeRandom()*(upper-lower+1));
}












function baseRange(start,end,step,fromRight){
var index=-1,
length=nativeMax(nativeCeil((end-start)/(step||1)),0),
result=Array(length);

while(length--){
result[fromRight?length:++index]=start;
start+=step;
}
return result;
}









function baseRepeat(string,n){
var result='';
if(!string||n<1||n>MAX_SAFE_INTEGER){
return result;
}


do{
if(n%2){
result+=string;
}
n=nativeFloor(n/2);
if(n){
string+=string;
}
}while(n);

return result;
}











function baseSet(object,path,value,customizer){
path=isKey(path,object)?[path]:castPath(path);

var index=-1,
length=path.length,
lastIndex=length-1,
nested=object;

while(nested!=null&&++index<length){
var key=toKey(path[index]);
if(isObject(nested)){
var newValue=value;
if(index!=lastIndex){
var objValue=nested[key];
newValue=customizer?customizer(objValue,key,nested):undefined;
if(newValue===undefined){
newValue=objValue==null?
isIndex(path[index+1])?[]:{}:
objValue;
}
}
assignValue(nested,key,newValue);
}
nested=nested[key];
}
return object;
}









var baseSetData=!metaMap?identity:function(func,data){
metaMap.set(func,data);
return func;
};










function baseSlice(array,start,end){
var index=-1,
length=array.length;

if(start<0){
start=-start>length?0:length+start;
}
end=end>length?length:end;
if(end<0){
end+=length;
}
length=start>end?0:end-start>>>0;
start>>>=0;

var result=Array(length);
while(++index<length){
result[index]=array[index+start];
}
return result;
}










function baseSome(collection,predicate){
var result;

baseEach(collection,function(value,index,collection){
result=predicate(value,index,collection);
return!result;
});
return!!result;
}













function baseSortedIndex(array,value,retHighest){
var low=0,
high=array?array.length:low;

if(typeof value=='number'&&value===value&&high<=HALF_MAX_ARRAY_LENGTH){
while(low<high){
var mid=low+high>>>1,
computed=array[mid];

if(computed!==null&&!isSymbol(computed)&&(
retHighest?computed<=value:computed<value)){
low=mid+1;
}else{
high=mid;
}
}
return high;
}
return baseSortedIndexBy(array,value,identity,retHighest);
}














function baseSortedIndexBy(array,value,iteratee,retHighest){
value=iteratee(value);

var low=0,
high=array?array.length:0,
valIsNaN=value!==value,
valIsNull=value===null,
valIsSymbol=isSymbol(value),
valIsUndefined=value===undefined;

while(low<high){
var mid=nativeFloor((low+high)/2),
computed=iteratee(array[mid]),
othIsDefined=computed!==undefined,
othIsNull=computed===null,
othIsReflexive=computed===computed,
othIsSymbol=isSymbol(computed);

if(valIsNaN){
var setLow=retHighest||othIsReflexive;
}else if(valIsUndefined){
setLow=othIsReflexive&&(retHighest||othIsDefined);
}else if(valIsNull){
setLow=othIsReflexive&&othIsDefined&&(retHighest||!othIsNull);
}else if(valIsSymbol){
setLow=othIsReflexive&&othIsDefined&&!othIsNull&&(retHighest||!othIsSymbol);
}else if(othIsNull||othIsSymbol){
setLow=false;
}else{
setLow=retHighest?computed<=value:computed<value;
}
if(setLow){
low=mid+1;
}else{
high=mid;
}
}
return nativeMin(high,MAX_ARRAY_INDEX);
}










function baseSortedUniq(array,iteratee){
var index=-1,
length=array.length,
resIndex=0,
result=[];

while(++index<length){
var value=array[index],
computed=iteratee?iteratee(value):value;

if(!index||!eq(computed,seen)){
var seen=computed;
result[resIndex++]=value===0?0:value;
}
}
return result;
}









function baseToNumber(value){
if(typeof value=='number'){
return value;
}
if(isSymbol(value)){
return NAN;
}
return+value;
}









function baseToString(value){

if(typeof value=='string'){
return value;
}
if(isSymbol(value)){
return symbolToString?symbolToString.call(value):'';
}
var result=value+'';
return result=='0'&&1/value==-INFINITY?'-0':result;
}










function baseUniq(array,iteratee,comparator){
var index=-1,
includes=arrayIncludes,
length=array.length,
isCommon=true,
result=[],
seen=result;

if(comparator){
isCommon=false;
includes=arrayIncludesWith;
}else
if(length>=LARGE_ARRAY_SIZE){
var set=iteratee?null:createSet(array);
if(set){
return setToArray(set);
}
isCommon=false;
includes=cacheHas;
seen=new SetCache();
}else
{
seen=iteratee?[]:result;
}
outer:
while(++index<length){
var value=array[index],
computed=iteratee?iteratee(value):value;

value=comparator||value!==0?value:0;
if(isCommon&&computed===computed){
var seenIndex=seen.length;
while(seenIndex--){
if(seen[seenIndex]===computed){
continue outer;
}
}
if(iteratee){
seen.push(computed);
}
result.push(value);
}else
if(!includes(seen,computed,comparator)){
if(seen!==result){
seen.push(computed);
}
result.push(value);
}
}
return result;
}









function baseUnset(object,path){
path=isKey(path,object)?[path]:castPath(path);
object=parent(object,path);

var key=toKey(last(path));
return!(object!=null&&baseHas(object,key))||delete object[key];
}











function baseUpdate(object,path,updater,customizer){
return baseSet(object,path,updater(baseGet(object,path)),customizer);
}












function baseWhile(array,predicate,isDrop,fromRight){
var length=array.length,
index=fromRight?length:-1;

while((fromRight?index--:++index<length)&&
predicate(array[index],index,array)){}

return isDrop?
baseSlice(array,fromRight?0:index,fromRight?index+1:length):
baseSlice(array,fromRight?index+1:0,fromRight?length:index);
}











function baseWrapperValue(value,actions){
var result=value;
if(result instanceof LazyWrapper){
result=result.value();
}
return arrayReduce(actions,function(result,action){
return action.func.apply(action.thisArg,arrayPush([result],action.args));
},result);
}











function baseXor(arrays,iteratee,comparator){
var index=-1,
length=arrays.length;

while(++index<length){
var result=result?
arrayPush(
baseDifference(result,arrays[index],iteratee,comparator),
baseDifference(arrays[index],result,iteratee,comparator)):

arrays[index];
}
return result&&result.length?baseUniq(result,iteratee,comparator):[];
}










function baseZipObject(props,values,assignFunc){
var index=-1,
length=props.length,
valsLength=values.length,
result={};

while(++index<length){
var value=index<valsLength?values[index]:undefined;
assignFunc(result,props[index],value);
}
return result;
}








function castArrayLikeObject(value){
return isArrayLikeObject(value)?value:[];
}








function castFunction(value){
return typeof value=='function'?value:identity;
}








function castPath(value){
return isArray(value)?value:stringToPath(value);
}










function castSlice(array,start,end){
var length=array.length;
end=end===undefined?length:end;
return!start&&end>=length?array:baseSlice(array,start,end);
}









function cloneBuffer(buffer,isDeep){
if(isDeep){
return buffer.slice();
}
var result=new buffer.constructor(buffer.length);
buffer.copy(result);
return result;
}








function cloneArrayBuffer(arrayBuffer){
var result=new arrayBuffer.constructor(arrayBuffer.byteLength);
new Uint8Array(result).set(new Uint8Array(arrayBuffer));
return result;
}









function cloneDataView(dataView,isDeep){
var buffer=isDeep?cloneArrayBuffer(dataView.buffer):dataView.buffer;
return new dataView.constructor(buffer,dataView.byteOffset,dataView.byteLength);
}










function cloneMap(map,isDeep,cloneFunc){
var array=isDeep?cloneFunc(mapToArray(map),true):mapToArray(map);
return arrayReduce(array,addMapEntry,new map.constructor());
}








function cloneRegExp(regexp){
var result=new regexp.constructor(regexp.source,reFlags.exec(regexp));
result.lastIndex=regexp.lastIndex;
return result;
}










function cloneSet(set,isDeep,cloneFunc){
var array=isDeep?cloneFunc(setToArray(set),true):setToArray(set);
return arrayReduce(array,addSetEntry,new set.constructor());
}








function cloneSymbol(symbol){
return symbolValueOf?Object(symbolValueOf.call(symbol)):{};
}









function cloneTypedArray(typedArray,isDeep){
var buffer=isDeep?cloneArrayBuffer(typedArray.buffer):typedArray.buffer;
return new typedArray.constructor(buffer,typedArray.byteOffset,typedArray.length);
}









function compareAscending(value,other){
if(value!==other){
var valIsDefined=value!==undefined,
valIsNull=value===null,
valIsReflexive=value===value,
valIsSymbol=isSymbol(value);

var othIsDefined=other!==undefined,
othIsNull=other===null,
othIsReflexive=other===other,
othIsSymbol=isSymbol(other);

if(!othIsNull&&!othIsSymbol&&!valIsSymbol&&value>other||
valIsSymbol&&othIsDefined&&othIsReflexive&&!othIsNull&&!othIsSymbol||
valIsNull&&othIsDefined&&othIsReflexive||
!valIsDefined&&othIsReflexive||
!valIsReflexive){
return 1;
}
if(!valIsNull&&!valIsSymbol&&!othIsSymbol&&value<other||
othIsSymbol&&valIsDefined&&valIsReflexive&&!valIsNull&&!valIsSymbol||
othIsNull&&valIsDefined&&valIsReflexive||
!othIsDefined&&valIsReflexive||
!othIsReflexive){
return-1;
}
}
return 0;
}















function compareMultiple(object,other,orders){
var index=-1,
objCriteria=object.criteria,
othCriteria=other.criteria,
length=objCriteria.length,
ordersLength=orders.length;

while(++index<length){
var result=compareAscending(objCriteria[index],othCriteria[index]);
if(result){
if(index>=ordersLength){
return result;
}
var order=orders[index];
return result*(order=='desc'?-1:1);
}
}







return object.index-other.index;
}












function composeArgs(args,partials,holders,isCurried){
var argsIndex=-1,
argsLength=args.length,
holdersLength=holders.length,
leftIndex=-1,
leftLength=partials.length,
rangeLength=nativeMax(argsLength-holdersLength,0),
result=Array(leftLength+rangeLength),
isUncurried=!isCurried;

while(++leftIndex<leftLength){
result[leftIndex]=partials[leftIndex];
}
while(++argsIndex<holdersLength){
if(isUncurried||argsIndex<argsLength){
result[holders[argsIndex]]=args[argsIndex];
}
}
while(rangeLength--){
result[leftIndex++]=args[argsIndex++];
}
return result;
}












function composeArgsRight(args,partials,holders,isCurried){
var argsIndex=-1,
argsLength=args.length,
holdersIndex=-1,
holdersLength=holders.length,
rightIndex=-1,
rightLength=partials.length,
rangeLength=nativeMax(argsLength-holdersLength,0),
result=Array(rangeLength+rightLength),
isUncurried=!isCurried;

while(++argsIndex<rangeLength){
result[argsIndex]=args[argsIndex];
}
var offset=argsIndex;
while(++rightIndex<rightLength){
result[offset+rightIndex]=partials[rightIndex];
}
while(++holdersIndex<holdersLength){
if(isUncurried||argsIndex<argsLength){
result[offset+holders[holdersIndex]]=args[argsIndex++];
}
}
return result;
}









function copyArray(source,array){
var index=-1,
length=source.length;

array||(array=Array(length));
while(++index<length){
array[index]=source[index];
}
return array;
}











function copyObject(source,props,object,customizer){
object||(object={});

var index=-1,
length=props.length;

while(++index<length){
var key=props[index];

var newValue=customizer?
customizer(object[key],source[key],key,object,source):
source[key];

assignValue(object,key,newValue);
}
return object;
}









function copySymbols(source,object){
return copyObject(source,getSymbols(source),object);
}









function createAggregator(setter,initializer){
return function(collection,iteratee){
var func=isArray(collection)?arrayAggregator:baseAggregator,
accumulator=initializer?initializer():{};

return func(collection,setter,getIteratee(iteratee),accumulator);
};
}








function createAssigner(assigner){
return rest(function(object,sources){
var index=-1,
length=sources.length,
customizer=length>1?sources[length-1]:undefined,
guard=length>2?sources[2]:undefined;

customizer=typeof customizer=='function'?(
length--,customizer):
undefined;

if(guard&&isIterateeCall(sources[0],sources[1],guard)){
customizer=length<3?undefined:customizer;
length=1;
}
object=Object(object);
while(++index<length){
var source=sources[index];
if(source){
assigner(object,source,index,customizer);
}
}
return object;
});
}









function createBaseEach(eachFunc,fromRight){
return function(collection,iteratee){
if(collection==null){
return collection;
}
if(!isArrayLike(collection)){
return eachFunc(collection,iteratee);
}
var length=collection.length,
index=fromRight?length:-1,
iterable=Object(collection);

while(fromRight?index--:++index<length){
if(iteratee(iterable[index],index,iterable)===false){
break;
}
}
return collection;
};
}








function createBaseFor(fromRight){
return function(object,iteratee,keysFunc){
var index=-1,
iterable=Object(object),
props=keysFunc(object),
length=props.length;

while(length--){
var key=props[fromRight?length:++index];
if(iteratee(iterable[key],key,iterable)===false){
break;
}
}
return object;
};
}












function createBaseWrapper(func,bitmask,thisArg){
var isBind=bitmask&BIND_FLAG,
Ctor=createCtorWrapper(func);

function wrapper(){
var fn=this&&this!==root&&this instanceof wrapper?Ctor:func;
return fn.apply(isBind?thisArg:this,arguments);
}
return wrapper;
}








function createCaseFirst(methodName){
return function(string){
string=toString(string);

var strSymbols=reHasComplexSymbol.test(string)?
stringToArray(string):
undefined;

var chr=strSymbols?
strSymbols[0]:
string.charAt(0);

var trailing=strSymbols?
castSlice(strSymbols,1).join(''):
string.slice(1);

return chr[methodName]()+trailing;
};
}








function createCompounder(callback){
return function(string){
return arrayReduce(words(deburr(string).replace(reApos,'')),callback,'');
};
}









function createCtorWrapper(Ctor){
return function(){



var args=arguments;
switch(args.length){
case 0:return new Ctor();
case 1:return new Ctor(args[0]);
case 2:return new Ctor(args[0],args[1]);
case 3:return new Ctor(args[0],args[1],args[2]);
case 4:return new Ctor(args[0],args[1],args[2],args[3]);
case 5:return new Ctor(args[0],args[1],args[2],args[3],args[4]);
case 6:return new Ctor(args[0],args[1],args[2],args[3],args[4],args[5]);
case 7:return new Ctor(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);}

var thisBinding=baseCreate(Ctor.prototype),
result=Ctor.apply(thisBinding,args);



return isObject(result)?result:thisBinding;
};
}











function createCurryWrapper(func,bitmask,arity){
var Ctor=createCtorWrapper(func);

function wrapper(){
var length=arguments.length,
args=Array(length),
index=length,
placeholder=getPlaceholder(wrapper);

while(index--){
args[index]=arguments[index];
}
var holders=length<3&&args[0]!==placeholder&&args[length-1]!==placeholder?
[]:
replaceHolders(args,placeholder);

length-=holders.length;
if(length<arity){
return createRecurryWrapper(
func,bitmask,createHybridWrapper,wrapper.placeholder,undefined,
args,holders,undefined,undefined,arity-length);
}
var fn=this&&this!==root&&this instanceof wrapper?Ctor:func;
return apply(fn,this,args);
}
return wrapper;
}








function createFlow(fromRight){
return rest(function(funcs){
funcs=baseFlatten(funcs,1);

var length=funcs.length,
index=length,
prereq=LodashWrapper.prototype.thru;

if(fromRight){
funcs.reverse();
}
while(index--){
var func=funcs[index];
if(typeof func!='function'){
throw new TypeError(FUNC_ERROR_TEXT);
}
if(prereq&&!wrapper&&getFuncName(func)=='wrapper'){
var wrapper=new LodashWrapper([],true);
}
}
index=wrapper?index:length;
while(++index<length){
func=funcs[index];

var funcName=getFuncName(func),
data=funcName=='wrapper'?getData(func):undefined;

if(data&&isLaziable(data[0])&&
data[1]==(ARY_FLAG|CURRY_FLAG|PARTIAL_FLAG|REARG_FLAG)&&
!data[4].length&&data[9]==1)
{
wrapper=wrapper[getFuncName(data[0])].apply(wrapper,data[3]);
}else{
wrapper=func.length==1&&isLaziable(func)?
wrapper[funcName]():
wrapper.thru(func);
}
}
return function(){
var args=arguments,
value=args[0];

if(wrapper&&args.length==1&&
isArray(value)&&value.length>=LARGE_ARRAY_SIZE){
return wrapper.plant(value).value();
}
var index=0,
result=length?funcs[index].apply(this,args):value;

while(++index<length){
result=funcs[index].call(this,result);
}
return result;
};
});
}





















function createHybridWrapper(func,bitmask,thisArg,partials,holders,partialsRight,holdersRight,argPos,ary,arity){
var isAry=bitmask&ARY_FLAG,
isBind=bitmask&BIND_FLAG,
isBindKey=bitmask&BIND_KEY_FLAG,
isCurried=bitmask&(CURRY_FLAG|CURRY_RIGHT_FLAG),
isFlip=bitmask&FLIP_FLAG,
Ctor=isBindKey?undefined:createCtorWrapper(func);

function wrapper(){
var length=arguments.length,
index=length,
args=Array(length);

while(index--){
args[index]=arguments[index];
}
if(isCurried){
var placeholder=getPlaceholder(wrapper),
holdersCount=countHolders(args,placeholder);
}
if(partials){
args=composeArgs(args,partials,holders,isCurried);
}
if(partialsRight){
args=composeArgsRight(args,partialsRight,holdersRight,isCurried);
}
length-=holdersCount;
if(isCurried&&length<arity){
var newHolders=replaceHolders(args,placeholder);
return createRecurryWrapper(
func,bitmask,createHybridWrapper,wrapper.placeholder,thisArg,
args,newHolders,argPos,ary,arity-length);

}
var thisBinding=isBind?thisArg:this,
fn=isBindKey?thisBinding[func]:func;

length=args.length;
if(argPos){
args=reorder(args,argPos);
}else if(isFlip&&length>1){
args.reverse();
}
if(isAry&&ary<length){
args.length=ary;
}
if(this&&this!==root&&this instanceof wrapper){
fn=Ctor||createCtorWrapper(fn);
}
return fn.apply(thisBinding,args);
}
return wrapper;
}









function createInverter(setter,toIteratee){
return function(object,iteratee){
return baseInverter(object,setter,toIteratee(iteratee),{});
};
}








function createMathOperation(operator){
return function(value,other){
var result;
if(value===undefined&&other===undefined){
return 0;
}
if(value!==undefined){
result=value;
}
if(other!==undefined){
if(result===undefined){
return other;
}
if(typeof value=='string'||typeof other=='string'){
value=baseToString(value);
other=baseToString(other);
}else{
value=baseToNumber(value);
other=baseToNumber(other);
}
result=operator(value,other);
}
return result;
};
}








function createOver(arrayFunc){
return rest(function(iteratees){
iteratees=iteratees.length==1&&isArray(iteratees[0])?
arrayMap(iteratees[0],baseUnary(getIteratee())):
arrayMap(baseFlatten(iteratees,1,isFlattenableIteratee),baseUnary(getIteratee()));

return rest(function(args){
var thisArg=this;
return arrayFunc(iteratees,function(iteratee){
return apply(iteratee,thisArg,args);
});
});
});
}










function createPadding(length,chars){
chars=chars===undefined?' ':baseToString(chars);

var charsLength=chars.length;
if(charsLength<2){
return charsLength?baseRepeat(chars,length):chars;
}
var result=baseRepeat(chars,nativeCeil(length/stringSize(chars)));
return reHasComplexSymbol.test(chars)?
castSlice(stringToArray(result),0,length).join(''):
result.slice(0,length);
}














function createPartialWrapper(func,bitmask,thisArg,partials){
var isBind=bitmask&BIND_FLAG,
Ctor=createCtorWrapper(func);

function wrapper(){
var argsIndex=-1,
argsLength=arguments.length,
leftIndex=-1,
leftLength=partials.length,
args=Array(leftLength+argsLength),
fn=this&&this!==root&&this instanceof wrapper?Ctor:func;

while(++leftIndex<leftLength){
args[leftIndex]=partials[leftIndex];
}
while(argsLength--){
args[leftIndex++]=arguments[++argsIndex];
}
return apply(fn,isBind?thisArg:this,args);
}
return wrapper;
}








function createRange(fromRight){
return function(start,end,step){
if(step&&typeof step!='number'&&isIterateeCall(start,end,step)){
end=step=undefined;
}

start=toNumber(start);
start=start===start?start:0;
if(end===undefined){
end=start;
start=0;
}else{
end=toNumber(end)||0;
}
step=step===undefined?start<end?1:-1:toNumber(step)||0;
return baseRange(start,end,step,fromRight);
};
}








function createRelationalOperation(operator){
return function(value,other){
if(!(typeof value=='string'&&typeof other=='string')){
value=toNumber(value);
other=toNumber(other);
}
return operator(value,other);
};
}



















function createRecurryWrapper(func,bitmask,wrapFunc,placeholder,thisArg,partials,holders,argPos,ary,arity){
var isCurry=bitmask&CURRY_FLAG,
newHolders=isCurry?holders:undefined,
newHoldersRight=isCurry?undefined:holders,
newPartials=isCurry?partials:undefined,
newPartialsRight=isCurry?undefined:partials;

bitmask|=isCurry?PARTIAL_FLAG:PARTIAL_RIGHT_FLAG;
bitmask&=~(isCurry?PARTIAL_RIGHT_FLAG:PARTIAL_FLAG);

if(!(bitmask&CURRY_BOUND_FLAG)){
bitmask&=~(BIND_FLAG|BIND_KEY_FLAG);
}
var newData=[
func,bitmask,thisArg,newPartials,newHolders,newPartialsRight,
newHoldersRight,argPos,ary,arity];


var result=wrapFunc.apply(undefined,newData);
if(isLaziable(func)){
setData(result,newData);
}
result.placeholder=placeholder;
return result;
}








function createRound(methodName){
var func=Math[methodName];
return function(number,precision){
number=toNumber(number);
precision=toInteger(precision);
if(precision){


var pair=(toString(number)+'e').split('e'),
value=func(pair[0]+'e'+(+pair[1]+precision));

pair=(toString(value)+'e').split('e');
return+(pair[0]+'e'+(+pair[1]-precision));
}
return func(number);
};
}








var createSet=!(Set&&1/setToArray(new Set([,-0]))[1]==INFINITY)?noop:function(values){
return new Set(values);
};


























function createWrapper(func,bitmask,thisArg,partials,holders,argPos,ary,arity){
var isBindKey=bitmask&BIND_KEY_FLAG;
if(!isBindKey&&typeof func!='function'){
throw new TypeError(FUNC_ERROR_TEXT);
}
var length=partials?partials.length:0;
if(!length){
bitmask&=~(PARTIAL_FLAG|PARTIAL_RIGHT_FLAG);
partials=holders=undefined;
}
ary=ary===undefined?ary:nativeMax(toInteger(ary),0);
arity=arity===undefined?arity:toInteger(arity);
length-=holders?holders.length:0;

if(bitmask&PARTIAL_RIGHT_FLAG){
var partialsRight=partials,
holdersRight=holders;

partials=holders=undefined;
}
var data=isBindKey?undefined:getData(func);

var newData=[
func,bitmask,thisArg,partials,holders,partialsRight,holdersRight,
argPos,ary,arity];


if(data){
mergeData(newData,data);
}
func=newData[0];
bitmask=newData[1];
thisArg=newData[2];
partials=newData[3];
holders=newData[4];
arity=newData[9]=newData[9]==null?
isBindKey?0:func.length:
nativeMax(newData[9]-length,0);

if(!arity&&bitmask&(CURRY_FLAG|CURRY_RIGHT_FLAG)){
bitmask&=~(CURRY_FLAG|CURRY_RIGHT_FLAG);
}
if(!bitmask||bitmask==BIND_FLAG){
var result=createBaseWrapper(func,bitmask,thisArg);
}else if(bitmask==CURRY_FLAG||bitmask==CURRY_RIGHT_FLAG){
result=createCurryWrapper(func,bitmask,arity);
}else if((bitmask==PARTIAL_FLAG||bitmask==(BIND_FLAG|PARTIAL_FLAG))&&!holders.length){
result=createPartialWrapper(func,bitmask,thisArg,partials);
}else{
result=createHybridWrapper.apply(undefined,newData);
}
var setter=data?baseSetData:setData;
return setter(result,newData);
}















function equalArrays(array,other,equalFunc,customizer,bitmask,stack){
var index=-1,
isPartial=bitmask&PARTIAL_COMPARE_FLAG,
isUnordered=bitmask&UNORDERED_COMPARE_FLAG,
arrLength=array.length,
othLength=other.length;

if(arrLength!=othLength&&!(isPartial&&othLength>arrLength)){
return false;
}

var stacked=stack.get(array);
if(stacked){
return stacked==other;
}
var result=true;
stack.set(array,other);


while(++index<arrLength){
var arrValue=array[index],
othValue=other[index];

if(customizer){
var compared=isPartial?
customizer(othValue,arrValue,index,other,array,stack):
customizer(arrValue,othValue,index,array,other,stack);
}
if(compared!==undefined){
if(compared){
continue;
}
result=false;
break;
}

if(isUnordered){
if(!arraySome(other,function(othValue){
return arrValue===othValue||
equalFunc(arrValue,othValue,customizer,bitmask,stack);
})){
result=false;
break;
}
}else if(!(
arrValue===othValue||
equalFunc(arrValue,othValue,customizer,bitmask,stack)))
{
result=false;
break;
}
}
stack['delete'](array);
return result;
}



















function equalByTag(object,other,tag,equalFunc,customizer,bitmask,stack){
switch(tag){
case dataViewTag:
if(object.byteLength!=other.byteLength||
object.byteOffset!=other.byteOffset){
return false;
}
object=object.buffer;
other=other.buffer;

case arrayBufferTag:
if(object.byteLength!=other.byteLength||
!equalFunc(new Uint8Array(object),new Uint8Array(other))){
return false;
}
return true;

case boolTag:
case dateTag:



return+object==+other;

case errorTag:
return object.name==other.name&&object.message==other.message;

case numberTag:

return object!=+object?other!=+other:object==+other;

case regexpTag:
case stringTag:



return object==other+'';

case mapTag:
var convert=mapToArray;

case setTag:
var isPartial=bitmask&PARTIAL_COMPARE_FLAG;
convert||(convert=setToArray);

if(object.size!=other.size&&!isPartial){
return false;
}

var stacked=stack.get(object);
if(stacked){
return stacked==other;
}
bitmask|=UNORDERED_COMPARE_FLAG;
stack.set(object,other);


return equalArrays(convert(object),convert(other),equalFunc,customizer,bitmask,stack);

case symbolTag:
if(symbolValueOf){
return symbolValueOf.call(object)==symbolValueOf.call(other);
}}

return false;
}















function equalObjects(object,other,equalFunc,customizer,bitmask,stack){
var isPartial=bitmask&PARTIAL_COMPARE_FLAG,
objProps=keys(object),
objLength=objProps.length,
othProps=keys(other),
othLength=othProps.length;

if(objLength!=othLength&&!isPartial){
return false;
}
var index=objLength;
while(index--){
var key=objProps[index];
if(!(isPartial?key in other:baseHas(other,key))){
return false;
}
}

var stacked=stack.get(object);
if(stacked){
return stacked==other;
}
var result=true;
stack.set(object,other);

var skipCtor=isPartial;
while(++index<objLength){
key=objProps[index];
var objValue=object[key],
othValue=other[key];

if(customizer){
var compared=isPartial?
customizer(othValue,objValue,key,other,object,stack):
customizer(objValue,othValue,key,object,other,stack);
}

if(!(compared===undefined?
objValue===othValue||equalFunc(objValue,othValue,customizer,bitmask,stack):
compared))
{
result=false;
break;
}
skipCtor||(skipCtor=key=='constructor');
}
if(result&&!skipCtor){
var objCtor=object.constructor,
othCtor=other.constructor;


if(objCtor!=othCtor&&
'constructor'in object&&'constructor'in other&&
!(typeof objCtor=='function'&&objCtor instanceof objCtor&&
typeof othCtor=='function'&&othCtor instanceof othCtor)){
result=false;
}
}
stack['delete'](object);
return result;
}








function getAllKeys(object){
return baseGetAllKeys(object,keys,getSymbols);
}









function getAllKeysIn(object){
return baseGetAllKeys(object,keysIn,getSymbolsIn);
}








var getData=!metaMap?noop:function(func){
return metaMap.get(func);
};








function getFuncName(func){
var result=func.name+'',
array=realNames[result],
length=hasOwnProperty.call(realNames,result)?array.length:0;

while(length--){
var data=array[length],
otherFunc=data.func;
if(otherFunc==null||otherFunc==func){
return data.name;
}
}
return result;
}












function getIteratee(){
var result=lodash.iteratee||iteratee;
result=result===iteratee?baseIteratee:result;
return arguments.length?result(arguments[0],arguments[1]):result;
}












var getLength=baseProperty('length');








function getMatchData(object){
var result=toPairs(object),
length=result.length;

while(length--){
result[length][2]=isStrictComparable(result[length][1]);
}
return result;
}









function getNative(object,key){
var value=object[key];
return isNative(value)?value:undefined;
}








function getPlaceholder(func){
var object=hasOwnProperty.call(lodash,'placeholder')?lodash:func;
return object.placeholder;
}








function getPrototype(value){
return nativeGetPrototype(Object(value));
}








function getSymbols(object){


return getOwnPropertySymbols(Object(object));
}


if(!getOwnPropertySymbols){
getSymbols=function getSymbols(){
return[];
};
}









var getSymbolsIn=!getOwnPropertySymbols?getSymbols:function(object){
var result=[];
while(object){
arrayPush(result,getSymbols(object));
object=getPrototype(object);
}
return result;
};








function getTag(value){
return objectToString.call(value);
}



if(DataView&&getTag(new DataView(new ArrayBuffer(1)))!=dataViewTag||
Map&&getTag(new Map())!=mapTag||
Promise&&getTag(Promise.resolve())!=promiseTag||
Set&&getTag(new Set())!=setTag||
WeakMap&&getTag(new WeakMap())!=weakMapTag){
getTag=function getTag(value){
var result=objectToString.call(value),
Ctor=result==objectTag?value.constructor:undefined,
ctorString=Ctor?toSource(Ctor):undefined;

if(ctorString){
switch(ctorString){
case dataViewCtorString:return dataViewTag;
case mapCtorString:return mapTag;
case promiseCtorString:return promiseTag;
case setCtorString:return setTag;
case weakMapCtorString:return weakMapTag;}

}
return result;
};
}











function getView(start,end,transforms){
var index=-1,
length=transforms.length;

while(++index<length){
var data=transforms[index],
size=data.size;

switch(data.type){
case'drop':start+=size;break;
case'dropRight':end-=size;break;
case'take':end=nativeMin(end,start+size);break;
case'takeRight':start=nativeMax(start,end-size);break;}

}
return{'start':start,'end':end};
}










function hasPath(object,path,hasFunc){
path=isKey(path,object)?[path]:castPath(path);

var result,
index=-1,
length=path.length;

while(++index<length){
var key=toKey(path[index]);
if(!(result=object!=null&&hasFunc(object,key))){
break;
}
object=object[key];
}
if(result){
return result;
}
var length=object?object.length:0;
return!!length&&isLength(length)&&isIndex(key,length)&&(
isArray(object)||isString(object)||isArguments(object));
}








function initCloneArray(array){
var length=array.length,
result=array.constructor(length);


if(length&&typeof array[0]=='string'&&hasOwnProperty.call(array,'index')){
result.index=array.index;
result.input=array.input;
}
return result;
}








function initCloneObject(object){
return typeof object.constructor=='function'&&!isPrototype(object)?
baseCreate(getPrototype(object)):
{};
}














function initCloneByTag(object,tag,cloneFunc,isDeep){
var Ctor=object.constructor;
switch(tag){
case arrayBufferTag:
return cloneArrayBuffer(object);

case boolTag:
case dateTag:
return new Ctor(+object);

case dataViewTag:
return cloneDataView(object,isDeep);

case float32Tag:case float64Tag:
case int8Tag:case int16Tag:case int32Tag:
case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:
return cloneTypedArray(object,isDeep);

case mapTag:
return cloneMap(object,isDeep,cloneFunc);

case numberTag:
case stringTag:
return new Ctor(object);

case regexpTag:
return cloneRegExp(object);

case setTag:
return cloneSet(object,isDeep,cloneFunc);

case symbolTag:
return cloneSymbol(object);}

}









function indexKeys(object){
var length=object?object.length:undefined;
if(isLength(length)&&(
isArray(object)||isString(object)||isArguments(object))){
return baseTimes(length,String);
}
return null;
}








function isFlattenable(value){
return isArrayLikeObject(value)&&(isArray(value)||isArguments(value));
}









function isFlattenableIteratee(value){
return isArray(value)&&!(value.length==2&&!isFunction(value[0]));
}









function isIndex(value,length){
length=length==null?MAX_SAFE_INTEGER:length;
return!!length&&(
typeof value=='number'||reIsUint.test(value))&&
value>-1&&value%1==0&&value<length;
}











function isIterateeCall(value,index,object){
if(!isObject(object)){
return false;
}
var type=typeof index;
if(type=='number'?
isArrayLike(object)&&isIndex(index,object.length):
type=='string'&&index in object)
{
return eq(object[index],value);
}
return false;
}









function isKey(value,object){
if(isArray(value)){
return false;
}
var type=typeof value;
if(type=='number'||type=='symbol'||type=='boolean'||
value==null||isSymbol(value)){
return true;
}
return reIsPlainProp.test(value)||!reIsDeepProp.test(value)||
object!=null&&value in Object(object);
}








function isKeyable(value){
var type=typeof value;
return type=='string'||type=='number'||type=='symbol'||type=='boolean'?
value!=='__proto__':
value===null;
}









function isLaziable(func){
var funcName=getFuncName(func),
other=lodash[funcName];

if(typeof other!='function'||!(funcName in LazyWrapper.prototype)){
return false;
}
if(func===other){
return true;
}
var data=getData(other);
return!!data&&func===data[0];
}








function isPrototype(value){
var Ctor=value&&value.constructor,
proto=typeof Ctor=='function'&&Ctor.prototype||objectProto;

return value===proto;
}









function isStrictComparable(value){
return value===value&&!isObject(value);
}










function matchesStrictComparable(key,srcValue){
return function(object){
if(object==null){
return false;
}
return object[key]===srcValue&&(
srcValue!==undefined||key in Object(object));
};
}

















function mergeData(data,source){
var bitmask=data[1],
srcBitmask=source[1],
newBitmask=bitmask|srcBitmask,
isCommon=newBitmask<(BIND_FLAG|BIND_KEY_FLAG|ARY_FLAG);

var isCombo=
srcBitmask==ARY_FLAG&&bitmask==CURRY_FLAG||
srcBitmask==ARY_FLAG&&bitmask==REARG_FLAG&&data[7].length<=source[8]||
srcBitmask==(ARY_FLAG|REARG_FLAG)&&source[7].length<=source[8]&&bitmask==CURRY_FLAG;


if(!(isCommon||isCombo)){
return data;
}

if(srcBitmask&BIND_FLAG){
data[2]=source[2];

newBitmask|=bitmask&BIND_FLAG?0:CURRY_BOUND_FLAG;
}

var value=source[3];
if(value){
var partials=data[3];
data[3]=partials?composeArgs(partials,value,source[4]):value;
data[4]=partials?replaceHolders(data[3],PLACEHOLDER):source[4];
}

value=source[5];
if(value){
partials=data[5];
data[5]=partials?composeArgsRight(partials,value,source[6]):value;
data[6]=partials?replaceHolders(data[5],PLACEHOLDER):source[6];
}

value=source[7];
if(value){
data[7]=value;
}

if(srcBitmask&ARY_FLAG){
data[8]=data[8]==null?source[8]:nativeMin(data[8],source[8]);
}

if(data[9]==null){
data[9]=source[9];
}

data[0]=source[0];
data[1]=newBitmask;

return data;
}














function mergeDefaults(objValue,srcValue,key,object,source,stack){
if(isObject(objValue)&&isObject(srcValue)){
baseMerge(objValue,srcValue,undefined,mergeDefaults,stack.set(srcValue,objValue));
}
return objValue;
}









function parent(object,path){
return path.length==1?object:baseGet(object,baseSlice(path,0,-1));
}











function reorder(array,indexes){
var arrLength=array.length,
length=nativeMin(indexes.length,arrLength),
oldArray=copyArray(array);

while(length--){
var index=indexes[length];
array[length]=isIndex(index,arrLength)?oldArray[index]:undefined;
}
return array;
}















var setData=function(){
var count=0,
lastCalled=0;

return function(key,value){
var stamp=now(),
remaining=HOT_SPAN-(stamp-lastCalled);

lastCalled=stamp;
if(remaining>0){
if(++count>=HOT_COUNT){
return key;
}
}else{
count=0;
}
return baseSetData(key,value);
};
}();








var stringToPath=memoize(function(string){
var result=[];
toString(string).replace(rePropName,function(match,number,quote,string){
result.push(quote?string.replace(reEscapeChar,'$1'):number||match);
});
return result;
});








function toKey(value){
if(typeof value=='string'||isSymbol(value)){
return value;
}
var result=value+'';
return result=='0'&&1/value==-INFINITY?'-0':result;
}








function toSource(func){
if(func!=null){
try{
return funcToString.call(func);
}catch(e){}
try{
return func+'';
}catch(e){}
}
return'';
}








function wrapperClone(wrapper){
if(wrapper instanceof LazyWrapper){
return wrapper.clone();
}
var result=new LodashWrapper(wrapper.__wrapped__,wrapper.__chain__);
result.__actions__=copyArray(wrapper.__actions__);
result.__index__=wrapper.__index__;
result.__values__=wrapper.__values__;
return result;
}
























function chunk(array,size,guard){
if(guard?isIterateeCall(array,size,guard):size===undefined){
size=1;
}else{
size=nativeMax(toInteger(size),0);
}
var length=array?array.length:0;
if(!length||size<1){
return[];
}
var index=0,
resIndex=0,
result=Array(nativeCeil(length/size));

while(index<length){
result[resIndex++]=baseSlice(array,index,index+=size);
}
return result;
}
















function compact(array){
var index=-1,
length=array?array.length:0,
resIndex=0,
result=[];

while(++index<length){
var value=array[index];
if(value){
result[resIndex++]=value;
}
}
return result;
}























function concat(){
var length=arguments.length,
array=castArray(arguments[0]);

if(length<2){
return length?copyArray(array):[];
}
var args=Array(length-1);
while(length--){
args[length-1]=arguments[length];
}
return arrayConcat(array,baseFlatten(args,1));
}




















var difference=rest(function(array,values){
return isArrayLikeObject(array)?
baseDifference(array,baseFlatten(values,1,isArrayLikeObject,true)):
[];
});

























var differenceBy=rest(function(array,values){
var iteratee=last(values);
if(isArrayLikeObject(iteratee)){
iteratee=undefined;
}
return isArrayLikeObject(array)?
baseDifference(array,baseFlatten(values,1,isArrayLikeObject,true),getIteratee(iteratee)):
[];
});






















var differenceWith=rest(function(array,values){
var comparator=last(values);
if(isArrayLikeObject(comparator)){
comparator=undefined;
}
return isArrayLikeObject(array)?
baseDifference(array,baseFlatten(values,1,isArrayLikeObject,true),undefined,comparator):
[];
});


























function drop(array,n,guard){
var length=array?array.length:0;
if(!length){
return[];
}
n=guard||n===undefined?1:toInteger(n);
return baseSlice(array,n<0?0:n,length);
}


























function dropRight(array,n,guard){
var length=array?array.length:0;
if(!length){
return[];
}
n=guard||n===undefined?1:toInteger(n);
n=length-n;
return baseSlice(array,0,n<0?0:n);
}





































function dropRightWhile(array,predicate){
return array&&array.length?
baseWhile(array,getIteratee(predicate,3),true,true):
[];
}





































function dropWhile(array,predicate){
return array&&array.length?
baseWhile(array,getIteratee(predicate,3),true):
[];
}






























function fill(array,value,start,end){
var length=array?array.length:0;
if(!length){
return[];
}
if(start&&typeof start!='number'&&isIterateeCall(array,value,start)){
start=0;
end=length;
}
return baseFill(array,value,start,end);
}




































function findIndex(array,predicate){
return array&&array.length?
baseFindIndex(array,getIteratee(predicate,3)):
-1;
}




































function findLastIndex(array,predicate){
return array&&array.length?
baseFindIndex(array,getIteratee(predicate,3),true):
-1;
}















function flatten(array){
var length=array?array.length:0;
return length?baseFlatten(array,1):[];
}















function flattenDeep(array){
var length=array?array.length:0;
return length?baseFlatten(array,INFINITY):[];
}





















function flattenDepth(array,depth){
var length=array?array.length:0;
if(!length){
return[];
}
depth=depth===undefined?1:toInteger(depth);
return baseFlatten(array,depth);
}
















function fromPairs(pairs){
var index=-1,
length=pairs?pairs.length:0,
result={};

while(++index<length){
var pair=pairs[index];
result[pair[0]]=pair[1];
}
return result;
}



















function head(array){
return array&&array.length?array[0]:undefined;
}
























function indexOf(array,value,fromIndex){
var length=array?array.length:0;
if(!length){
return-1;
}
fromIndex=toInteger(fromIndex);
if(fromIndex<0){
fromIndex=nativeMax(length+fromIndex,0);
}
return baseIndexOf(array,value,fromIndex);
}















function initial(array){
return dropRight(array,1);
}


















var intersection=rest(function(arrays){
var mapped=arrayMap(arrays,castArrayLikeObject);
return mapped.length&&mapped[0]===arrays[0]?
baseIntersection(mapped):
[];
});
























var intersectionBy=rest(function(arrays){
var iteratee=last(arrays),
mapped=arrayMap(arrays,castArrayLikeObject);

if(iteratee===last(mapped)){
iteratee=undefined;
}else{
mapped.pop();
}
return mapped.length&&mapped[0]===arrays[0]?
baseIntersection(mapped,getIteratee(iteratee)):
[];
});






















var intersectionWith=rest(function(arrays){
var comparator=last(arrays),
mapped=arrayMap(arrays,castArrayLikeObject);

if(comparator===last(mapped)){
comparator=undefined;
}else{
mapped.pop();
}
return mapped.length&&mapped[0]===arrays[0]?
baseIntersection(mapped,undefined,comparator):
[];
});
















function join(array,separator){
return array?nativeJoin.call(array,separator):'';
}















function last(array){
var length=array?array.length:0;
return length?array[length-1]:undefined;
}






















function lastIndexOf(array,value,fromIndex){
var length=array?array.length:0;
if(!length){
return-1;
}
var index=length;
if(fromIndex!==undefined){
index=toInteger(fromIndex);
index=(
index<0?
nativeMax(length+index,0):
nativeMin(index,length-1))+
1;
}
if(value!==value){
return indexOfNaN(array,index,true);
}
while(index--){
if(array[index]===value){
return index;
}
}
return-1;
}






















function nth(array,n){
return array&&array.length?baseNth(array,toInteger(n)):undefined;
}
























var pull=rest(pullAll);





















function pullAll(array,values){
return array&&array.length&&values&&values.length?
basePullAll(array,values):
array;
}

























function pullAllBy(array,values,iteratee){
return array&&array.length&&values&&values.length?
basePullAll(array,values,getIteratee(iteratee)):
array;
}
























function pullAllWith(array,values,comparator){
return array&&array.length&&values&&values.length?
basePullAll(array,values,undefined,comparator):
array;
}

























var pullAt=rest(function(array,indexes){
indexes=baseFlatten(indexes,1);

var length=array?array.length:0,
result=baseAt(array,indexes);

basePullAt(array,arrayMap(indexes,function(index){
return isIndex(index,length)?+index:index;
}).sort(compareAscending));

return result;
});






























function remove(array,predicate){
var result=[];
if(!(array&&array.length)){
return result;
}
var index=-1,
indexes=[],
length=array.length;

predicate=getIteratee(predicate,3);
while(++index<length){
var value=array[index];
if(predicate(value,index,array)){
result.push(value);
indexes.push(index);
}
}
basePullAt(array,indexes);
return result;
}
























function reverse(array){
return array?nativeReverse.call(array):array;
}

















function slice(array,start,end){
var length=array?array.length:0;
if(!length){
return[];
}
if(end&&typeof end!='number'&&isIterateeCall(array,start,end)){
start=0;
end=length;
}else
{
start=start==null?0:toInteger(start);
end=end===undefined?length:toInteger(end);
}
return baseSlice(array,start,end);
}





















function sortedIndex(array,value){
return baseSortedIndex(array,value);
}



























function sortedIndexBy(array,value,iteratee){
return baseSortedIndexBy(array,value,getIteratee(iteratee));
}

















function sortedIndexOf(array,value){
var length=array?array.length:0;
if(length){
var index=baseSortedIndex(array,value);
if(index<length&&eq(array[index],value)){
return index;
}
}
return-1;
}



















function sortedLastIndex(array,value){
return baseSortedIndex(array,value,true);
}






















function sortedLastIndexBy(array,value,iteratee){
return baseSortedIndexBy(array,value,getIteratee(iteratee),true);
}

















function sortedLastIndexOf(array,value){
var length=array?array.length:0;
if(length){
var index=baseSortedIndex(array,value,true)-1;
if(eq(array[index],value)){
return index;
}
}
return-1;
}
















function sortedUniq(array){
return array&&array.length?
baseSortedUniq(array):
[];
}

















function sortedUniqBy(array,iteratee){
return array&&array.length?
baseSortedUniq(array,getIteratee(iteratee)):
[];
}















function tail(array){
return drop(array,1);
}


























function take(array,n,guard){
if(!(array&&array.length)){
return[];
}
n=guard||n===undefined?1:toInteger(n);
return baseSlice(array,0,n<0?0:n);
}


























function takeRight(array,n,guard){
var length=array?array.length:0;
if(!length){
return[];
}
n=guard||n===undefined?1:toInteger(n);
n=length-n;
return baseSlice(array,n<0?0:n,length);
}





































function takeRightWhile(array,predicate){
return array&&array.length?
baseWhile(array,getIteratee(predicate,3),false,true):
[];
}





































function takeWhile(array,predicate){
return array&&array.length?
baseWhile(array,getIteratee(predicate,3)):
[];
}

















var union=rest(function(arrays){
return baseUniq(baseFlatten(arrays,1,isArrayLikeObject,true));
});
























var unionBy=rest(function(arrays){
var iteratee=last(arrays);
if(isArrayLikeObject(iteratee)){
iteratee=undefined;
}
return baseUniq(baseFlatten(arrays,1,isArrayLikeObject,true),getIteratee(iteratee));
});





















var unionWith=rest(function(arrays){
var comparator=last(arrays);
if(isArrayLikeObject(comparator)){
comparator=undefined;
}
return baseUniq(baseFlatten(arrays,1,isArrayLikeObject,true),undefined,comparator);
});


















function uniq(array){
return array&&array.length?
baseUniq(array):
[];
}























function uniqBy(array,iteratee){
return array&&array.length?
baseUniq(array,getIteratee(iteratee)):
[];
}




















function uniqWith(array,comparator){
return array&&array.length?
baseUniq(array,undefined,comparator):
[];
}




















function unzip(array){
if(!(array&&array.length)){
return[];
}
var length=0;
array=arrayFilter(array,function(group){
if(isArrayLikeObject(group)){
length=nativeMax(group.length,length);
return true;
}
});
return baseTimes(length,function(index){
return arrayMap(array,baseProperty(index));
});
}






















function unzipWith(array,iteratee){
if(!(array&&array.length)){
return[];
}
var result=unzip(array);
if(iteratee==null){
return result;
}
return arrayMap(result,function(group){
return apply(iteratee,undefined,group);
});
}



















var without=rest(function(array,values){
return isArrayLikeObject(array)?
baseDifference(array,values):
[];
});



















var xor=rest(function(arrays){
return baseXor(arrayFilter(arrays,isArrayLikeObject));
});
























var xorBy=rest(function(arrays){
var iteratee=last(arrays);
if(isArrayLikeObject(iteratee)){
iteratee=undefined;
}
return baseXor(arrayFilter(arrays,isArrayLikeObject),getIteratee(iteratee));
});





















var xorWith=rest(function(arrays){
var comparator=last(arrays);
if(isArrayLikeObject(comparator)){
comparator=undefined;
}
return baseXor(arrayFilter(arrays,isArrayLikeObject),undefined,comparator);
});

















var zip=rest(unzip);

















function zipObject(props,values){
return baseZipObject(props||[],values||[],assignValue);
}
















function zipObjectDeep(props,values){
return baseZipObject(props||[],values||[],baseSet);
}




















var zipWith=rest(function(arrays){
var length=arrays.length,
iteratee=length>1?arrays[length-1]:undefined;

iteratee=typeof iteratee=='function'?(arrays.pop(),iteratee):undefined;
return unzipWith(arrays,iteratee);
});
































function chain(value){
var result=lodash(value);
result.__chain__=true;
return result;
}
























function tap(value,interceptor){
interceptor(value);
return value;
}
























function thru(value,interceptor){
return interceptor(value);
}




















var wrapperAt=rest(function(paths){
paths=baseFlatten(paths,1);
var length=paths.length,
start=length?paths[0]:0,
value=this.__wrapped__,
interceptor=function interceptor(object){return baseAt(object,paths);};

if(length>1||this.__actions__.length||
!(value instanceof LazyWrapper)||!isIndex(start)){
return this.thru(interceptor);
}
value=value.slice(start,+start+(length?1:0));
value.__actions__.push({
'func':thru,
'args':[interceptor],
'thisArg':undefined});

return new LodashWrapper(value,this.__chain__).thru(function(array){
if(length&&!array.length){
array.push(undefined);
}
return array;
});
});




























function wrapperChain(){
return chain(this);
}



























function wrapperCommit(){
return new LodashWrapper(this.value(),this.__chain__);
}























function wrapperNext(){
if(this.__values__===undefined){
this.__values__=toArray(this.value());
}
var done=this.__index__>=this.__values__.length,
value=done?undefined:this.__values__[this.__index__++];

return{'done':done,'value':value};
}



















function wrapperToIterator(){
return this;
}

























function wrapperPlant(value){
var result,
parent=this;

while(parent instanceof baseLodash){
var clone=wrapperClone(parent);
clone.__index__=0;
clone.__values__=undefined;
if(result){
previous.__wrapped__=clone;
}else{
result=clone;
}
var previous=clone;
parent=parent.__wrapped__;
}
previous.__wrapped__=value;
return result;
}





















function wrapperReverse(){
var value=this.__wrapped__;
if(value instanceof LazyWrapper){
var wrapped=value;
if(this.__actions__.length){
wrapped=new LazyWrapper(this);
}
wrapped=wrapped.reverse();
wrapped.__actions__.push({
'func':thru,
'args':[reverse],
'thisArg':undefined});

return new LodashWrapper(wrapped,this.__chain__);
}
return this.thru(reverse);
}















function wrapperValue(){
return baseWrapperValue(this.__wrapped__,this.__actions__);
}

























var countBy=createAggregator(function(result,value,key){
hasOwnProperty.call(result,key)?++result[key]:result[key]=1;
});






































function every(collection,predicate,guard){
var func=isArray(collection)?arrayEvery:baseEvery;
if(guard&&isIterateeCall(collection,predicate,guard)){
predicate=undefined;
}
return func(collection,getIteratee(predicate,3));
}





































function filter(collection,predicate){
var func=isArray(collection)?arrayFilter:baseFilter;
return func(collection,getIteratee(predicate,3));
}





































function find(collection,predicate){
predicate=getIteratee(predicate,3);
if(isArray(collection)){
var index=baseFindIndex(collection,predicate);
return index>-1?collection[index]:undefined;
}
return baseFind(collection,predicate,baseEach);
}




















function findLast(collection,predicate){
predicate=getIteratee(predicate,3);
if(isArray(collection)){
var index=baseFindIndex(collection,predicate,true);
return index>-1?collection[index]:undefined;
}
return baseFind(collection,predicate,baseEachRight);
}























function flatMap(collection,iteratee){
return baseFlatten(map(collection,iteratee),1);
}






















function flatMapDeep(collection,iteratee){
return baseFlatten(map(collection,iteratee),INFINITY);
}























function flatMapDepth(collection,iteratee,depth){
depth=depth===undefined?1:toInteger(depth);
return baseFlatten(map(collection,iteratee),depth);
}































function forEach(collection,iteratee){
return typeof iteratee=='function'&&isArray(collection)?
arrayEach(collection,iteratee):
baseEach(collection,getIteratee(iteratee));
}





















function forEachRight(collection,iteratee){
return typeof iteratee=='function'&&isArray(collection)?
arrayEachRight(collection,iteratee):
baseEachRight(collection,getIteratee(iteratee));
}

























var groupBy=createAggregator(function(result,value,key){
if(hasOwnProperty.call(result,key)){
result[key].push(value);
}else{
result[key]=[value];
}
});































function includes(collection,value,fromIndex,guard){
collection=isArrayLike(collection)?collection:values(collection);
fromIndex=fromIndex&&!guard?toInteger(fromIndex):0;

var length=collection.length;
if(fromIndex<0){
fromIndex=nativeMax(length+fromIndex,0);
}
return isString(collection)?
fromIndex<=length&&collection.indexOf(value,fromIndex)>-1:
!!length&&baseIndexOf(collection,value,fromIndex)>-1;
}
























var invokeMap=rest(function(collection,path,args){
var index=-1,
isFunc=typeof path=='function',
isProp=isKey(path),
result=isArrayLike(collection)?Array(collection.length):[];

baseEach(collection,function(value){
var func=isFunc?path:isProp&&value!=null?value[path]:undefined;
result[++index]=func?apply(func,value,args):baseInvoke(value,path,args);
});
return result;
});






























var keyBy=createAggregator(function(result,value,key){
result[key]=value;
});












































function map(collection,iteratee){
var func=isArray(collection)?arrayMap:baseMap;
return func(collection,getIteratee(iteratee,3));
}






























function orderBy(collection,iteratees,orders,guard){
if(collection==null){
return[];
}
if(!isArray(iteratees)){
iteratees=iteratees==null?[]:[iteratees];
}
orders=guard?undefined:orders;
if(!isArray(orders)){
orders=orders==null?[]:[orders];
}
return baseOrderBy(collection,iteratees,orders);
}






































var partition=createAggregator(function(result,value,key){
result[key?0:1].push(value);
},function(){return[[],[]];});






































function reduce(collection,iteratee,accumulator){
var func=isArray(collection)?arrayReduce:baseReduce,
initAccum=arguments.length<3;

return func(collection,getIteratee(iteratee,4),accumulator,initAccum,baseEach);
}























function reduceRight(collection,iteratee,accumulator){
var func=isArray(collection)?arrayReduceRight:baseReduce,
initAccum=arguments.length<3;

return func(collection,getIteratee(iteratee,4),accumulator,initAccum,baseEachRight);
}




































function reject(collection,predicate){
var func=isArray(collection)?arrayFilter:baseFilter;
predicate=getIteratee(predicate,3);
return func(collection,function(value,index,collection){
return!predicate(value,index,collection);
});
}















function sample(collection){
var array=isArrayLike(collection)?collection:values(collection),
length=array.length;

return length>0?array[baseRandom(0,length-1)]:undefined;
}





















function sampleSize(collection,n,guard){
var index=-1,
result=toArray(collection),
length=result.length,
lastIndex=length-1;

if(guard?isIterateeCall(collection,n,guard):n===undefined){
n=1;
}else{
n=baseClamp(toInteger(n),0,length);
}
while(++index<n){
var rand=baseRandom(index,lastIndex),
value=result[rand];

result[rand]=result[index];
result[index]=value;
}
result.length=n;
return result;
}
















function shuffle(collection){
return sampleSize(collection,MAX_ARRAY_LENGTH);
}






















function size(collection){
if(collection==null){
return 0;
}
if(isArrayLike(collection)){
var result=collection.length;
return result&&isString(collection)?stringSize(collection):result;
}
if(isObjectLike(collection)){
var tag=getTag(collection);
if(tag==mapTag||tag==setTag){
return collection.size;
}
}
return keys(collection).length;
}






































function some(collection,predicate,guard){
var func=isArray(collection)?arraySome:baseSome;
if(guard&&isIterateeCall(collection,predicate,guard)){
predicate=undefined;
}
return func(collection,getIteratee(predicate,3));
}



































var sortBy=rest(function(collection,iteratees){
if(collection==null){
return[];
}
var length=iteratees.length;
if(length>1&&isIterateeCall(collection,iteratees[0],iteratees[1])){
iteratees=[];
}else if(length>2&&isIterateeCall(iteratees[0],iteratees[1],iteratees[2])){
iteratees=[iteratees[0]];
}
iteratees=iteratees.length==1&&isArray(iteratees[0])?
iteratees[0]:
baseFlatten(iteratees,1,isFlattenableIteratee);

return baseOrderBy(collection,iteratees,[]);
});




















var now=Date.now;



























function after(n,func){
if(typeof func!='function'){
throw new TypeError(FUNC_ERROR_TEXT);
}
n=toInteger(n);
return function(){
if(--n<1){
return func.apply(this,arguments);
}
};
}


















function ary(func,n,guard){
n=guard?undefined:n;
n=func&&n==null?func.length:n;
return createWrapper(func,ARY_FLAG,undefined,undefined,undefined,undefined,n);
}


















function before(n,func){
var result;
if(typeof func!='function'){
throw new TypeError(FUNC_ERROR_TEXT);
}
n=toInteger(n);
return function(){
if(--n>0){
result=func.apply(this,arguments);
}
if(n<=1){
func=undefined;
}
return result;
};
}




































var bind=rest(function(func,thisArg,partials){
var bitmask=BIND_FLAG;
if(partials.length){
var holders=replaceHolders(partials,getPlaceholder(bind));
bitmask|=PARTIAL_FLAG;
}
return createWrapper(func,bitmask,thisArg,partials,holders);
});














































var bindKey=rest(function(object,key,partials){
var bitmask=BIND_FLAG|BIND_KEY_FLAG;
if(partials.length){
var holders=replaceHolders(partials,getPlaceholder(bindKey));
bitmask|=PARTIAL_FLAG;
}
return createWrapper(key,bitmask,object,partials,holders);
});










































function curry(func,arity,guard){
arity=guard?undefined:arity;
var result=createWrapper(func,CURRY_FLAG,undefined,undefined,undefined,undefined,undefined,arity);
result.placeholder=curry.placeholder;
return result;
}







































function curryRight(func,arity,guard){
arity=guard?undefined:arity;
var result=createWrapper(func,CURRY_RIGHT_FLAG,undefined,undefined,undefined,undefined,undefined,arity);
result.placeholder=curryRight.placeholder;
return result;
}



















































function debounce(func,wait,options){
var lastArgs,
lastThis,
maxWait,
result,
timerId,
lastCallTime=0,
lastInvokeTime=0,
leading=false,
maxing=false,
trailing=true;

if(typeof func!='function'){
throw new TypeError(FUNC_ERROR_TEXT);
}
wait=toNumber(wait)||0;
if(isObject(options)){
leading=!!options.leading;
maxing='maxWait'in options;
maxWait=maxing?nativeMax(toNumber(options.maxWait)||0,wait):maxWait;
trailing='trailing'in options?!!options.trailing:trailing;
}

function invokeFunc(time){
var args=lastArgs,
thisArg=lastThis;

lastArgs=lastThis=undefined;
lastInvokeTime=time;
result=func.apply(thisArg,args);
return result;
}

function leadingEdge(time){

lastInvokeTime=time;

timerId=setTimeout(timerExpired,wait);

return leading?invokeFunc(time):result;
}

function remainingWait(time){
var timeSinceLastCall=time-lastCallTime,
timeSinceLastInvoke=time-lastInvokeTime,
result=wait-timeSinceLastCall;

return maxing?nativeMin(result,maxWait-timeSinceLastInvoke):result;
}

function shouldInvoke(time){
var timeSinceLastCall=time-lastCallTime,
timeSinceLastInvoke=time-lastInvokeTime;




return!lastCallTime||timeSinceLastCall>=wait||
timeSinceLastCall<0||maxing&&timeSinceLastInvoke>=maxWait;
}

function timerExpired(){
var time=now();
if(shouldInvoke(time)){
return trailingEdge(time);
}

timerId=setTimeout(timerExpired,remainingWait(time));
}

function trailingEdge(time){
clearTimeout(timerId);
timerId=undefined;



if(trailing&&lastArgs){
return invokeFunc(time);
}
lastArgs=lastThis=undefined;
return result;
}

function cancel(){
if(timerId!==undefined){
clearTimeout(timerId);
}
lastCallTime=lastInvokeTime=0;
lastArgs=lastThis=timerId=undefined;
}

function flush(){
return timerId===undefined?result:trailingEdge(now());
}

function debounced(){
var time=now(),
isInvoking=shouldInvoke(time);

lastArgs=arguments;
lastThis=this;
lastCallTime=time;

if(isInvoking){
if(timerId===undefined){
return leadingEdge(lastCallTime);
}
if(maxing){

clearTimeout(timerId);
timerId=setTimeout(timerExpired,wait);
return invokeFunc(lastCallTime);
}
}
if(timerId===undefined){
timerId=setTimeout(timerExpired,wait);
}
return result;
}
debounced.cancel=cancel;
debounced.flush=flush;
return debounced;
}



















var defer=rest(function(func,args){
return baseDelay(func,1,args);
});




















var delay=rest(function(func,wait,args){
return baseDelay(func,toNumber(wait)||0,args);
});



















function flip(func){
return createWrapper(func,FLIP_FLAG);
}













































function memoize(func,resolver){
if(typeof func!='function'||resolver&&typeof resolver!='function'){
throw new TypeError(FUNC_ERROR_TEXT);
}
var memoized=function memoized(){
var args=arguments,
key=resolver?resolver.apply(this,args):args[0],
cache=memoized.cache;

if(cache.has(key)){
return cache.get(key);
}
var result=func.apply(this,args);
memoized.cache=cache.set(key,result);
return result;
};
memoized.cache=new(memoize.Cache||MapCache)();
return memoized;
}


memoize.Cache=MapCache;





















function negate(predicate){
if(typeof predicate!='function'){
throw new TypeError(FUNC_ERROR_TEXT);
}
return function(){
return!predicate.apply(this,arguments);
};
}



















function once(func){
return before(2,func);
}

































var overArgs=rest(function(func,transforms){
transforms=transforms.length==1&&isArray(transforms[0])?
arrayMap(transforms[0],baseUnary(getIteratee())):
arrayMap(baseFlatten(transforms,1,isFlattenableIteratee),baseUnary(getIteratee()));

var funcsLength=transforms.length;
return rest(function(args){
var index=-1,
length=nativeMin(args.length,funcsLength);

while(++index<length){
args[index]=transforms[index].call(this,args[index]);
}
return apply(func,this,args);
});
});


































var partial=rest(function(func,partials){
var holders=replaceHolders(partials,getPlaceholder(partial));
return createWrapper(func,PARTIAL_FLAG,undefined,partials,holders);
});

































var partialRight=rest(function(func,partials){
var holders=replaceHolders(partials,getPlaceholder(partialRight));
return createWrapper(func,PARTIAL_RIGHT_FLAG,undefined,partials,holders);
});























var rearg=rest(function(func,indexes){
return createWrapper(func,REARG_FLAG,undefined,undefined,undefined,baseFlatten(indexes,1));
});


























function rest(func,start){
if(typeof func!='function'){
throw new TypeError(FUNC_ERROR_TEXT);
}
start=nativeMax(start===undefined?func.length-1:toInteger(start),0);
return function(){
var args=arguments,
index=-1,
length=nativeMax(args.length-start,0),
array=Array(length);

while(++index<length){
array[index]=args[start+index];
}
switch(start){
case 0:return func.call(this,array);
case 1:return func.call(this,args[0],array);
case 2:return func.call(this,args[0],args[1],array);}

var otherArgs=Array(start+1);
index=-1;
while(++index<start){
otherArgs[index]=args[index];
}
otherArgs[start]=array;
return apply(func,this,otherArgs);
};
}



































function spread(func,start){
if(typeof func!='function'){
throw new TypeError(FUNC_ERROR_TEXT);
}
start=start===undefined?0:nativeMax(toInteger(start),0);
return rest(function(args){
var array=args[start],
otherArgs=castSlice(args,0,start);

if(array){
arrayPush(otherArgs,array);
}
return apply(func,this,otherArgs);
});
}










































function throttle(func,wait,options){
var leading=true,
trailing=true;

if(typeof func!='function'){
throw new TypeError(FUNC_ERROR_TEXT);
}
if(isObject(options)){
leading='leading'in options?!!options.leading:leading;
trailing='trailing'in options?!!options.trailing:trailing;
}
return debounce(func,wait,{
'leading':leading,
'maxWait':wait,
'trailing':trailing});

}
















function unary(func){
return ary(func,1);
}























function wrap(value,wrapper){
wrapper=wrapper==null?identity:wrapper;
return partial(wrapper,value);
}




































function castArray(){
if(!arguments.length){
return[];
}
var value=arguments[0];
return isArray(value)?value:[value];
}



























function clone(value){
return baseClone(value,false,true);
}
































function cloneWith(value,customizer){
return baseClone(value,false,true,customizer);
}



















function cloneDeep(value){
return baseClone(value,true,true);
}





























function cloneDeepWith(value,customizer){
return baseClone(value,true,true,customizer);
}

































function eq(value,other){
return value===other||value!==value&&other!==other;
}
























var gt=createRelationalOperation(baseGt);
























var gte=createRelationalOperation(function(value,other){
return value>=other;
});



















function isArguments(value){

return isArrayLikeObject(value)&&hasOwnProperty.call(value,'callee')&&(
!propertyIsEnumerable.call(value,'callee')||objectToString.call(value)==argsTag);
}


























var isArray=Array.isArray;



















function isArrayBuffer(value){
return isObjectLike(value)&&objectToString.call(value)==arrayBufferTag;
}


























function isArrayLike(value){
return value!=null&&isLength(getLength(value))&&!isFunction(value);
}


























function isArrayLikeObject(value){
return isObjectLike(value)&&isArrayLike(value);
}



















function isBoolean(value){
return value===true||value===false||
isObjectLike(value)&&objectToString.call(value)==boolTag;
}


















var isBuffer=!Buffer?constant(false):function(value){
return value instanceof Buffer;
};



















function isDate(value){
return isObjectLike(value)&&objectToString.call(value)==dateTag;
}



















function isElement(value){
return!!value&&value.nodeType===1&&isObjectLike(value)&&!isPlainObject(value);
}


































function isEmpty(value){
if(isArrayLike(value)&&(
isArray(value)||isString(value)||isFunction(value.splice)||
isArguments(value)||isBuffer(value))){
return!value.length;
}
if(isObjectLike(value)){
var tag=getTag(value);
if(tag==mapTag||tag==setTag){
return!value.size;
}
}
for(var key in value){
if(hasOwnProperty.call(value,key)){
return false;
}
}
return!(nonEnumShadows&&keys(value).length);
}






























function isEqual(value,other){
return baseIsEqual(value,other);
}


































function isEqualWith(value,other,customizer){
customizer=typeof customizer=='function'?customizer:undefined;
var result=customizer?customizer(value,other):undefined;
return result===undefined?baseIsEqual(value,other,customizer):!!result;
}




















function isError(value){
if(!isObjectLike(value)){
return false;
}
return objectToString.call(value)==errorTag||
typeof value.message=='string'&&typeof value.name=='string';
}




























function isFinite(value){
return typeof value=='number'&&nativeIsFinite(value);
}



















function isFunction(value){



var tag=isObject(value)?objectToString.call(value):'';
return tag==funcTag||tag==genTag;
}



























function isInteger(value){
return typeof value=='number'&&value==toInteger(value);
}




























function isLength(value){
return typeof value=='number'&&
value>-1&&value%1==0&&value<=MAX_SAFE_INTEGER;
}


























function isObject(value){
var type=typeof value;
return!!value&&(type=='object'||type=='function');
}

























function isObjectLike(value){
return!!value&&typeof value=='object';
}



















function isMap(value){
return isObjectLike(value)&&getTag(value)==mapTag;
}

























function isMatch(object,source){
return object===source||baseIsMatch(object,source,getMatchData(source));
}

































function isMatchWith(object,source,customizer){
customizer=typeof customizer=='function'?customizer:undefined;
return baseIsMatch(object,source,getMatchData(source),customizer);
}





























function isNaN(value){



return isNumber(value)&&value!=+value;
}



















function isNative(value){
if(!isObject(value)){
return false;
}
var pattern=isFunction(value)||isHostObject(value)?reIsNative:reIsHostCtor;
return pattern.test(toSource(value));
}


















function isNull(value){
return value===null;
}





















function isNil(value){
return value==null;
}




























function isNumber(value){
return typeof value=='number'||
isObjectLike(value)&&objectToString.call(value)==numberTag;
}






























function isPlainObject(value){
if(!isObjectLike(value)||
objectToString.call(value)!=objectTag||isHostObject(value)){
return false;
}
var proto=getPrototype(value);
if(proto===null){
return true;
}
var Ctor=hasOwnProperty.call(proto,'constructor')&&proto.constructor;
return typeof Ctor=='function'&&
Ctor instanceof Ctor&&funcToString.call(Ctor)==objectCtorString;
}



















function isRegExp(value){
return isObject(value)&&objectToString.call(value)==regexpTag;
}





























function isSafeInteger(value){
return isInteger(value)&&value>=-MAX_SAFE_INTEGER&&value<=MAX_SAFE_INTEGER;
}



















function isSet(value){
return isObjectLike(value)&&getTag(value)==setTag;
}



















function isString(value){
return typeof value=='string'||
!isArray(value)&&isObjectLike(value)&&objectToString.call(value)==stringTag;
}



















function isSymbol(value){
return typeof value=='symbol'||
isObjectLike(value)&&objectToString.call(value)==symbolTag;
}



















function isTypedArray(value){
return isObjectLike(value)&&
isLength(value.length)&&!!typedArrayTags[objectToString.call(value)];
}


















function isUndefined(value){
return value===undefined;
}



















function isWeakMap(value){
return isObjectLike(value)&&getTag(value)==weakMapTag;
}



















function isWeakSet(value){
return isObjectLike(value)&&objectToString.call(value)==weakSetTag;
}
























var lt=createRelationalOperation(baseLt);
























var lte=createRelationalOperation(function(value,other){
return value<=other;
});
























function toArray(value){
if(!value){
return[];
}
if(isArrayLike(value)){
return isString(value)?stringToArray(value):copyArray(value);
}
if(iteratorSymbol&&value[iteratorSymbol]){
return iteratorToArray(value[iteratorSymbol]());
}
var tag=getTag(value),
func=tag==mapTag?mapToArray:tag==setTag?setToArray:values;

return func(value);
}



























function toInteger(value){
if(!value){
return value===0?value:0;
}
value=toNumber(value);
if(value===INFINITY||value===-INFINITY){
var sign=value<0?-1:1;
return sign*MAX_INTEGER;
}
var remainder=value%1;
return value===value?remainder?value-remainder:value:0;
}




























function toLength(value){
return value?baseClamp(toInteger(value),0,MAX_ARRAY_LENGTH):0;
}
























function toNumber(value){
if(typeof value=='number'){
return value;
}
if(isSymbol(value)){
return NAN;
}
if(isObject(value)){
var other=isFunction(value.valueOf)?value.valueOf():value;
value=isObject(other)?other+'':other;
}
if(typeof value!='string'){
return value===0?value:+value;
}
value=value.replace(reTrim,'');
var isBinary=reIsBinary.test(value);
return isBinary||reIsOctal.test(value)?
freeParseInt(value.slice(2),isBinary?2:8):
reIsBadHex.test(value)?NAN:+value;
}

























function toPlainObject(value){
return copyObject(value,keysIn(value));
}

























function toSafeInteger(value){
return baseClamp(toInteger(value),-MAX_SAFE_INTEGER,MAX_SAFE_INTEGER);
}






















function toString(value){
return value==null?'':baseToString(value);
}



































var assign=createAssigner(function(object,source){
if(nonEnumShadows||isPrototype(source)||isArrayLike(source)){
copyObject(source,keys(source),object);
return;
}
for(var key in source){
if(hasOwnProperty.call(source,key)){
assignValue(object,key,source[key]);
}
}
});
































var assignIn=createAssigner(function(object,source){
if(nonEnumShadows||isPrototype(source)||isArrayLike(source)){
copyObject(source,keysIn(source),object);
return;
}
for(var key in source){
assignValue(object,key,source[key]);
}
});






























var assignInWith=createAssigner(function(object,source,srcIndex,customizer){
copyObject(source,keysIn(source),object,customizer);
});





























var assignWith=createAssigner(function(object,source,srcIndex,customizer){
copyObject(source,keys(source),object,customizer);
});





















var at=rest(function(object,paths){
return baseAt(object,baseFlatten(paths,1));
});



































function create(prototype,properties){
var result=baseCreate(prototype);
return properties?baseAssign(result,properties):result;
}






















var defaults=rest(function(args){
args.push(undefined,assignInDefaults);
return apply(assignInWith,undefined,args);
});





















var defaultsDeep=rest(function(args){
args.push(undefined,mergeDefaults);
return apply(mergeWith,undefined,args);
});





































function findKey(object,predicate){
return baseFind(object,getIteratee(predicate,3),baseForOwn,true);
}





































function findLastKey(object,predicate){
return baseFind(object,getIteratee(predicate,3),baseForOwnRight,true);
}





























function forIn(object,iteratee){
return object==null?
object:
baseFor(object,getIteratee(iteratee),keysIn);
}



























function forInRight(object,iteratee){
return object==null?
object:
baseForRight(object,getIteratee(iteratee),keysIn);
}





























function forOwn(object,iteratee){
return object&&baseForOwn(object,getIteratee(iteratee));
}



























function forOwnRight(object,iteratee){
return object&&baseForOwnRight(object,getIteratee(iteratee));
}
























function functions(object){
return object==null?[]:baseFunctions(object,keys(object));
}
























function functionsIn(object){
return object==null?[]:baseFunctions(object,keysIn(object));
}


























function get(object,path,defaultValue){
var result=object==null?undefined:baseGet(object,path);
return result===undefined?defaultValue:result;
}




























function has(object,path){
return object!=null&&hasPath(object,path,baseHas);
}



























function hasIn(object,path){
return object!=null&&hasPath(object,path,baseHasIn);
}



















var invert=createInverter(function(result,value,key){
result[value]=key;
},constant(identity));




























var invertBy=createInverter(function(result,value,key){
if(hasOwnProperty.call(result,value)){
result[value].push(key);
}else{
result[value]=[key];
}
},getIteratee);



















var invoke=rest(baseInvoke);





























function keys(object){
var isProto=isPrototype(object);
if(!(isProto||isArrayLike(object))){
return baseKeys(object);
}
var indexes=indexKeys(object),
skipIndexes=!!indexes,
result=indexes||[],
length=result.length;

for(var key in object){
if(baseHas(object,key)&&
!(skipIndexes&&(key=='length'||isIndex(key,length)))&&
!(isProto&&key=='constructor')){
result.push(key);
}
}
return result;
}
























function keysIn(object){
var index=-1,
isProto=isPrototype(object),
props=baseKeysIn(object),
propsLength=props.length,
indexes=indexKeys(object),
skipIndexes=!!indexes,
result=indexes||[],
length=result.length;

while(++index<propsLength){
var key=props[index];
if(!(skipIndexes&&(key=='length'||isIndex(key,length)))&&
!(key=='constructor'&&(isProto||!hasOwnProperty.call(object,key)))){
result.push(key);
}
}
return result;
}























function mapKeys(object,iteratee){
var result={};
iteratee=getIteratee(iteratee,3);

baseForOwn(object,function(value,key,object){
result[iteratee(value,key,object)]=value;
});
return result;
}






























function mapValues(object,iteratee){
var result={};
iteratee=getIteratee(iteratee,3);

baseForOwn(object,function(value,key,object){
result[key]=iteratee(value,key,object);
});
return result;
}
































var merge=createAssigner(function(object,source,srcIndex){
baseMerge(object,source,srcIndex);
});







































var mergeWith=createAssigner(function(object,source,srcIndex,customizer){
baseMerge(object,source,srcIndex,customizer);
});




















var omit=rest(function(object,props){
if(object==null){
return{};
}
props=arrayMap(baseFlatten(props,1),toKey);
return basePick(object,baseDifference(getAllKeysIn(object),props));
});






















function omitBy(object,predicate){
predicate=getIteratee(predicate);
return basePickBy(object,function(value,key){
return!predicate(value,key);
});
}


















var pick=rest(function(object,props){
return object==null?{}:basePick(object,arrayMap(baseFlatten(props,1),toKey));
});




















function pickBy(object,predicate){
return object==null?{}:basePickBy(object,getIteratee(predicate));
}






























function result(object,path,defaultValue){
path=isKey(path,object)?[path]:castPath(path);

var index=-1,
length=path.length;


if(!length){
object=undefined;
length=1;
}
while(++index<length){
var value=object==null?undefined:object[toKey(path[index])];
if(value===undefined){
index=length;
value=defaultValue;
}
object=isFunction(value)?value.call(object):value;
}
return object;
}





























function set(object,path,value){
return object==null?object:baseSet(object,path,value);
}

























function setWith(object,path,value,customizer){
customizer=typeof customizer=='function'?customizer:undefined;
return object==null?object:baseSet(object,path,value,customizer);
}
























function toPairs(object){
return baseToPairs(object,keys(object));
}
























function toPairsIn(object){
return baseToPairs(object,keysIn(object));
}






























function transform(object,iteratee,accumulator){
var isArr=isArray(object)||isTypedArray(object);
iteratee=getIteratee(iteratee,4);

if(accumulator==null){
if(isArr||isObject(object)){
var Ctor=object.constructor;
if(isArr){
accumulator=isArray(object)?new Ctor():[];
}else{
accumulator=isFunction(Ctor)?baseCreate(getPrototype(object)):{};
}
}else{
accumulator={};
}
}
(isArr?arrayEach:baseForOwn)(object,function(value,index,object){
return iteratee(accumulator,value,index,object);
});
return accumulator;
}




























function unset(object,path){
return object==null?true:baseUnset(object,path);
}




























function update(object,path,updater){
return object==null?object:baseUpdate(object,path,castFunction(updater));
}

























function updateWith(object,path,updater,customizer){
customizer=typeof customizer=='function'?customizer:undefined;
return object==null?object:baseUpdate(object,path,castFunction(updater),customizer);
}



























function values(object){
return object?baseValues(object,keys(object)):[];
}

























function valuesIn(object){
return object==null?[]:baseValues(object,keysIn(object));
}






















function clamp(number,lower,upper){
if(upper===undefined){
upper=lower;
lower=undefined;
}
if(upper!==undefined){
upper=toNumber(upper);
upper=upper===upper?upper:0;
}
if(lower!==undefined){
lower=toNumber(lower);
lower=lower===lower?lower:0;
}
return baseClamp(toNumber(number),lower,upper);
}







































function inRange(number,start,end){
start=toNumber(start)||0;
if(end===undefined){
end=start;
start=0;
}else{
end=toNumber(end)||0;
}
number=toNumber(number);
return baseInRange(number,start,end);
}
































function random(lower,upper,floating){
if(floating&&typeof floating!='boolean'&&isIterateeCall(lower,upper,floating)){
upper=floating=undefined;
}
if(floating===undefined){
if(typeof upper=='boolean'){
floating=upper;
upper=undefined;
}else
if(typeof lower=='boolean'){
floating=lower;
lower=undefined;
}
}
if(lower===undefined&&upper===undefined){
lower=0;
upper=1;
}else
{
lower=toNumber(lower)||0;
if(upper===undefined){
upper=lower;
lower=0;
}else{
upper=toNumber(upper)||0;
}
}
if(lower>upper){
var temp=lower;
lower=upper;
upper=temp;
}
if(floating||lower%1||upper%1){
var rand=nativeRandom();
return nativeMin(lower+rand*(upper-lower+freeParseFloat('1e-'+((rand+'').length-1))),upper);
}
return baseRandom(lower,upper);
}























var camelCase=createCompounder(function(result,word,index){
word=word.toLowerCase();
return result+(index?capitalize(word):word);
});
















function capitalize(string){
return upperFirst(toString(string).toLowerCase());
}


















function deburr(string){
string=toString(string);
return string&&string.replace(reLatin1,deburrLetter).replace(reComboMark,'');
}
























function endsWith(string,target,position){
string=toString(string);
target=baseToString(target);

var length=string.length;
position=position===undefined?
length:
baseClamp(toInteger(position),0,length);

position-=target.length;
return position>=0&&string.indexOf(target,position)==position;
}



































function escape(string){
string=toString(string);
return string&&reHasUnescapedHtml.test(string)?
string.replace(reUnescapedHtml,escapeHtmlChar):
string;
}
















function escapeRegExp(string){
string=toString(string);
return string&&reHasRegExpChar.test(string)?
string.replace(reRegExpChar,'\\$&'):
string;
}






















var kebabCase=createCompounder(function(result,word,index){
return result+(index?'-':'')+word.toLowerCase();
});





















var lowerCase=createCompounder(function(result,word,index){
return result+(index?' ':'')+word.toLowerCase();
});


















var lowerFirst=createCaseFirst('toLowerCase');
























function pad(string,length,chars){
string=toString(string);
length=toInteger(length);

var strLength=length?stringSize(string):0;
if(!length||strLength>=length){
return string;
}
var mid=(length-strLength)/2;
return(
createPadding(nativeFloor(mid),chars)+
string+
createPadding(nativeCeil(mid),chars));

}
























function padEnd(string,length,chars){
string=toString(string);
length=toInteger(length);

var strLength=length?stringSize(string):0;
return length&&strLength<length?
string+createPadding(length-strLength,chars):
string;
}
























function padStart(string,length,chars){
string=toString(string);
length=toInteger(length);

var strLength=length?stringSize(string):0;
return length&&strLength<length?
createPadding(length-strLength,chars)+string:
string;
}

























function parseInt(string,radix,guard){


if(guard||radix==null){
radix=0;
}else if(radix){
radix=+radix;
}
string=toString(string).replace(reTrim,'');
return nativeParseInt(string,radix||(reHasHexPrefix.test(string)?16:10));
}























function repeat(string,n,guard){
if(guard?isIterateeCall(string,n,guard):n===undefined){
n=1;
}else{
n=toInteger(n);
}
return baseRepeat(toString(string),n);
}




















function replace(){
var args=arguments,
string=toString(args[0]);

return args.length<3?string:nativeReplace.call(string,args[1],args[2]);
}






















var snakeCase=createCompounder(function(result,word,index){
return result+(index?'_':'')+word.toLowerCase();
});




















function split(string,separator,limit){
if(limit&&typeof limit!='number'&&isIterateeCall(string,separator,limit)){
separator=limit=undefined;
}
limit=limit===undefined?MAX_ARRAY_LENGTH:limit>>>0;
if(!limit){
return[];
}
string=toString(string);
if(string&&(
typeof separator=='string'||
separator!=null&&!isRegExp(separator)))
{
separator=baseToString(separator);
if(separator==''&&reHasComplexSymbol.test(string)){
return castSlice(stringToArray(string),0,limit);
}
}
return nativeSplit.call(string,separator,limit);
}






















var startCase=createCompounder(function(result,word,index){
return result+(index?' ':'')+upperFirst(word);
});
























function startsWith(string,target,position){
string=toString(string);
position=baseClamp(toInteger(position),0,string.length);
return string.lastIndexOf(baseToString(target),position)==position;
}








































































































function template(string,options,guard){



var settings=lodash.templateSettings;

if(guard&&isIterateeCall(string,options,guard)){
options=undefined;
}
string=toString(string);
options=assignInWith({},options,settings,assignInDefaults);

var imports=assignInWith({},options.imports,settings.imports,assignInDefaults),
importsKeys=keys(imports),
importsValues=baseValues(imports,importsKeys);

var isEscaping,
isEvaluating,
index=0,
interpolate=options.interpolate||reNoMatch,
source="__p += '";


var reDelimiters=RegExp(
(options.escape||reNoMatch).source+'|'+
interpolate.source+'|'+
(interpolate===reInterpolate?reEsTemplate:reNoMatch).source+'|'+
(options.evaluate||reNoMatch).source+'|$',
'g');


var sourceURL='//# sourceURL='+(
'sourceURL'in options?
options.sourceURL:
'lodash.templateSources['+ ++templateCounter+']')+
'\n';

string.replace(reDelimiters,function(match,escapeValue,interpolateValue,esTemplateValue,evaluateValue,offset){
interpolateValue||(interpolateValue=esTemplateValue);


source+=string.slice(index,offset).replace(reUnescapedString,escapeStringChar);


if(escapeValue){
isEscaping=true;
source+="' +\n__e("+escapeValue+") +\n'";
}
if(evaluateValue){
isEvaluating=true;
source+="';\n"+evaluateValue+";\n__p += '";
}
if(interpolateValue){
source+="' +\n((__t = ("+interpolateValue+")) == null ? '' : __t) +\n'";
}
index=offset+match.length;



return match;
});

source+="';\n";



var variable=options.variable;
if(!variable){
source='with (obj) {\n'+source+'\n}\n';
}

source=(isEvaluating?source.replace(reEmptyStringLeading,''):source).
replace(reEmptyStringMiddle,'$1').
replace(reEmptyStringTrailing,'$1;');


source='function('+(variable||'obj')+') {\n'+(
variable?
'':
'obj || (obj = {});\n')+

"var __t, __p = ''"+(
isEscaping?
', __e = _.escape':
'')+(

isEvaluating?
', __j = Array.prototype.join;\n'+
"function print() { __p += __j.call(arguments, '') }\n":
';\n')+

source+
'return __p\n}';

var result=attempt(function(){
return Function(importsKeys,sourceURL+'return '+source).
apply(undefined,importsValues);
});



result.source=source;
if(isError(result)){
throw result;
}
return result;
}






















function toLower(value){
return toString(value).toLowerCase();
}






















function toUpper(value){
return toString(value).toUpperCase();
}























function trim(string,chars,guard){
string=toString(string);
if(string&&(guard||chars===undefined)){
return string.replace(reTrim,'');
}
if(!string||!(chars=baseToString(chars))){
return string;
}
var strSymbols=stringToArray(string),
chrSymbols=stringToArray(chars),
start=charsStartIndex(strSymbols,chrSymbols),
end=charsEndIndex(strSymbols,chrSymbols)+1;

return castSlice(strSymbols,start,end).join('');
}




















function trimEnd(string,chars,guard){
string=toString(string);
if(string&&(guard||chars===undefined)){
return string.replace(reTrimEnd,'');
}
if(!string||!(chars=baseToString(chars))){
return string;
}
var strSymbols=stringToArray(string),
end=charsEndIndex(strSymbols,stringToArray(chars))+1;

return castSlice(strSymbols,0,end).join('');
}




















function trimStart(string,chars,guard){
string=toString(string);
if(string&&(guard||chars===undefined)){
return string.replace(reTrimStart,'');
}
if(!string||!(chars=baseToString(chars))){
return string;
}
var strSymbols=stringToArray(string),
start=charsStartIndex(strSymbols,stringToArray(chars));

return castSlice(strSymbols,start).join('');
}






































function truncate(string,options){
var length=DEFAULT_TRUNC_LENGTH,
omission=DEFAULT_TRUNC_OMISSION;

if(isObject(options)){
var separator='separator'in options?options.separator:separator;
length='length'in options?toInteger(options.length):length;
omission='omission'in options?baseToString(options.omission):omission;
}
string=toString(string);

var strLength=string.length;
if(reHasComplexSymbol.test(string)){
var strSymbols=stringToArray(string);
strLength=strSymbols.length;
}
if(length>=strLength){
return string;
}
var end=length-stringSize(omission);
if(end<1){
return omission;
}
var result=strSymbols?
castSlice(strSymbols,0,end).join(''):
string.slice(0,end);

if(separator===undefined){
return result+omission;
}
if(strSymbols){
end+=result.length-end;
}
if(isRegExp(separator)){
if(string.slice(end).search(separator)){
var match,
substring=result;

if(!separator.global){
separator=RegExp(separator.source,toString(reFlags.exec(separator))+'g');
}
separator.lastIndex=0;
while(match=separator.exec(substring)){
var newEnd=match.index;
}
result=result.slice(0,newEnd===undefined?end:newEnd);
}
}else if(string.indexOf(baseToString(separator),end)!=end){
var index=result.lastIndexOf(separator);
if(index>-1){
result=result.slice(0,index);
}
}
return result+omission;
}




















function unescape(string){
string=toString(string);
return string&&reHasEscapedHtml.test(string)?
string.replace(reEscapedHtml,unescapeHtmlChar):
string;
}





















var upperCase=createCompounder(function(result,word,index){
return result+(index?' ':'')+word.toUpperCase();
});


















var upperFirst=createCaseFirst('toUpperCase');




















function words(string,pattern,guard){
string=toString(string);
pattern=guard?undefined:pattern;

if(pattern===undefined){
pattern=reHasComplexWord.test(string)?reComplexWord:reBasicWord;
}
return string.match(pattern)||[];
}

























var attempt=rest(function(func,args){
try{
return apply(func,undefined,args);
}catch(e){
return isError(e)?e:new Error(e);
}
});



























var bindAll=rest(function(object,methodNames){
arrayEach(baseFlatten(methodNames,1),function(key){
key=toKey(key);
object[key]=bind(object[key],object);
});
return object;
});






























function cond(pairs){
var length=pairs?pairs.length:0,
toIteratee=getIteratee();

pairs=!length?[]:arrayMap(pairs,function(pair){
if(typeof pair[1]!='function'){
throw new TypeError(FUNC_ERROR_TEXT);
}
return[toIteratee(pair[0]),pair[1]];
});

return rest(function(args){
var index=-1;
while(++index<length){
var pair=pairs[index];
if(apply(pair[0],this,args)){
return apply(pair[1],this,args);
}
}
});
}






















function conforms(source){
return baseConforms(baseClone(source,true));
}


















function constant(value){
return function(){
return value;
};
}























var flow=createFlow();






















var flowRight=createFlow(true);

















function identity(value){
return value;
}











































function iteratee(func){
return baseIteratee(typeof func=='function'?func:baseClone(func,true));
}

























function matches(source){
return baseMatches(baseClone(source,true));
}

























function matchesProperty(path,srcValue){
return baseMatchesProperty(path,baseClone(srcValue,true));
}

























var method=rest(function(path,args){
return function(object){
return baseInvoke(object,path,args);
};
});
























var methodOf=rest(function(object,args){
return function(path){
return baseInvoke(object,path,args);
};
});





































function mixin(object,source,options){
var props=keys(source),
methodNames=baseFunctions(source,props);

if(options==null&&
!(isObject(source)&&(methodNames.length||!props.length))){
options=source;
source=object;
object=this;
methodNames=baseFunctions(source,keys(source));
}
var chain=!(isObject(options)&&'chain'in options)||!!options.chain,
isFunc=isFunction(object);

arrayEach(methodNames,function(methodName){
var func=source[methodName];
object[methodName]=func;
if(isFunc){
object.prototype[methodName]=function(){
var chainAll=this.__chain__;
if(chain||chainAll){
var result=object(this.__wrapped__),
actions=result.__actions__=copyArray(this.__actions__);

actions.push({'func':func,'args':arguments,'thisArg':object});
result.__chain__=chainAll;
return result;
}
return func.apply(object,arrayPush([this.value()],arguments));
};
}
});

return object;
}














function noConflict(){
if(root._===this){
root._=oldDash;
}
return this;
}
















function noop(){

}





















function nthArg(n){
n=toInteger(n);
return rest(function(args){
return baseNth(args,n);
});
}



















var over=createOver(arrayMap);

























var overEvery=createOver(arrayEvery);

























var overSome=createOver(arraySome);























function property(path){
return isKey(path)?baseProperty(toKey(path)):basePropertyDeep(path);
}






















function propertyOf(object){
return function(path){
return object==null?undefined:baseGet(object,path);
};
}










































var range=createRange();





































var rangeRight=createRange(true);




















function times(n,iteratee){
n=toInteger(n);
if(n<1||n>MAX_SAFE_INTEGER){
return[];
}
var index=MAX_ARRAY_LENGTH,
length=nativeMin(n,MAX_ARRAY_LENGTH);

iteratee=getIteratee(iteratee);
n-=MAX_ARRAY_LENGTH;

var result=baseTimes(length,iteratee);
while(++index<n){
iteratee(index);
}
return result;
}



























function toPath(value){
if(isArray(value)){
return arrayMap(value,toKey);
}
return isSymbol(value)?[value]:copyArray(stringToPath(value));
}


















function uniqueId(prefix){
var id=++idCounter;
return toString(prefix)+id;
}


















var add=createMathOperation(function(augend,addend){
return augend+addend;
});






















var ceil=createRound('ceil');
















var divide=createMathOperation(function(dividend,divisor){
return dividend/divisor;
});






















var floor=createRound('floor');



















function max(array){
return array&&array.length?
baseExtremum(array,identity,baseGt):
undefined;
}

























function maxBy(array,iteratee){
return array&&array.length?
baseExtremum(array,getIteratee(iteratee),baseGt):
undefined;
}















function mean(array){
return baseMean(array,identity);
}

























function meanBy(array,iteratee){
return baseMean(array,getIteratee(iteratee));
}



















function min(array){
return array&&array.length?
baseExtremum(array,identity,baseLt):
undefined;
}

























function minBy(array,iteratee){
return array&&array.length?
baseExtremum(array,getIteratee(iteratee),baseLt):
undefined;
}
















var multiply=createMathOperation(function(multiplier,multiplicand){
return multiplier*multiplicand;
});






















var round=createRound('round');
















var subtract=createMathOperation(function(minuend,subtrahend){
return minuend-subtrahend;
});















function sum(array){
return array&&array.length?
baseSum(array,identity):
0;
}

























function sumBy(array,iteratee){
return array&&array.length?
baseSum(array,getIteratee(iteratee)):
0;
}




lodash.after=after;
lodash.ary=ary;
lodash.assign=assign;
lodash.assignIn=assignIn;
lodash.assignInWith=assignInWith;
lodash.assignWith=assignWith;
lodash.at=at;
lodash.before=before;
lodash.bind=bind;
lodash.bindAll=bindAll;
lodash.bindKey=bindKey;
lodash.castArray=castArray;
lodash.chain=chain;
lodash.chunk=chunk;
lodash.compact=compact;
lodash.concat=concat;
lodash.cond=cond;
lodash.conforms=conforms;
lodash.constant=constant;
lodash.countBy=countBy;
lodash.create=create;
lodash.curry=curry;
lodash.curryRight=curryRight;
lodash.debounce=debounce;
lodash.defaults=defaults;
lodash.defaultsDeep=defaultsDeep;
lodash.defer=defer;
lodash.delay=delay;
lodash.difference=difference;
lodash.differenceBy=differenceBy;
lodash.differenceWith=differenceWith;
lodash.drop=drop;
lodash.dropRight=dropRight;
lodash.dropRightWhile=dropRightWhile;
lodash.dropWhile=dropWhile;
lodash.fill=fill;
lodash.filter=filter;
lodash.flatMap=flatMap;
lodash.flatMapDeep=flatMapDeep;
lodash.flatMapDepth=flatMapDepth;
lodash.flatten=flatten;
lodash.flattenDeep=flattenDeep;
lodash.flattenDepth=flattenDepth;
lodash.flip=flip;
lodash.flow=flow;
lodash.flowRight=flowRight;
lodash.fromPairs=fromPairs;
lodash.functions=functions;
lodash.functionsIn=functionsIn;
lodash.groupBy=groupBy;
lodash.initial=initial;
lodash.intersection=intersection;
lodash.intersectionBy=intersectionBy;
lodash.intersectionWith=intersectionWith;
lodash.invert=invert;
lodash.invertBy=invertBy;
lodash.invokeMap=invokeMap;
lodash.iteratee=iteratee;
lodash.keyBy=keyBy;
lodash.keys=keys;
lodash.keysIn=keysIn;
lodash.map=map;
lodash.mapKeys=mapKeys;
lodash.mapValues=mapValues;
lodash.matches=matches;
lodash.matchesProperty=matchesProperty;
lodash.memoize=memoize;
lodash.merge=merge;
lodash.mergeWith=mergeWith;
lodash.method=method;
lodash.methodOf=methodOf;
lodash.mixin=mixin;
lodash.negate=negate;
lodash.nthArg=nthArg;
lodash.omit=omit;
lodash.omitBy=omitBy;
lodash.once=once;
lodash.orderBy=orderBy;
lodash.over=over;
lodash.overArgs=overArgs;
lodash.overEvery=overEvery;
lodash.overSome=overSome;
lodash.partial=partial;
lodash.partialRight=partialRight;
lodash.partition=partition;
lodash.pick=pick;
lodash.pickBy=pickBy;
lodash.property=property;
lodash.propertyOf=propertyOf;
lodash.pull=pull;
lodash.pullAll=pullAll;
lodash.pullAllBy=pullAllBy;
lodash.pullAllWith=pullAllWith;
lodash.pullAt=pullAt;
lodash.range=range;
lodash.rangeRight=rangeRight;
lodash.rearg=rearg;
lodash.reject=reject;
lodash.remove=remove;
lodash.rest=rest;
lodash.reverse=reverse;
lodash.sampleSize=sampleSize;
lodash.set=set;
lodash.setWith=setWith;
lodash.shuffle=shuffle;
lodash.slice=slice;
lodash.sortBy=sortBy;
lodash.sortedUniq=sortedUniq;
lodash.sortedUniqBy=sortedUniqBy;
lodash.split=split;
lodash.spread=spread;
lodash.tail=tail;
lodash.take=take;
lodash.takeRight=takeRight;
lodash.takeRightWhile=takeRightWhile;
lodash.takeWhile=takeWhile;
lodash.tap=tap;
lodash.throttle=throttle;
lodash.thru=thru;
lodash.toArray=toArray;
lodash.toPairs=toPairs;
lodash.toPairsIn=toPairsIn;
lodash.toPath=toPath;
lodash.toPlainObject=toPlainObject;
lodash.transform=transform;
lodash.unary=unary;
lodash.union=union;
lodash.unionBy=unionBy;
lodash.unionWith=unionWith;
lodash.uniq=uniq;
lodash.uniqBy=uniqBy;
lodash.uniqWith=uniqWith;
lodash.unset=unset;
lodash.unzip=unzip;
lodash.unzipWith=unzipWith;
lodash.update=update;
lodash.updateWith=updateWith;
lodash.values=values;
lodash.valuesIn=valuesIn;
lodash.without=without;
lodash.words=words;
lodash.wrap=wrap;
lodash.xor=xor;
lodash.xorBy=xorBy;
lodash.xorWith=xorWith;
lodash.zip=zip;
lodash.zipObject=zipObject;
lodash.zipObjectDeep=zipObjectDeep;
lodash.zipWith=zipWith;


lodash.entries=toPairs;
lodash.entriesIn=toPairsIn;
lodash.extend=assignIn;
lodash.extendWith=assignInWith;


mixin(lodash,lodash);




lodash.add=add;
lodash.attempt=attempt;
lodash.camelCase=camelCase;
lodash.capitalize=capitalize;
lodash.ceil=ceil;
lodash.clamp=clamp;
lodash.clone=clone;
lodash.cloneDeep=cloneDeep;
lodash.cloneDeepWith=cloneDeepWith;
lodash.cloneWith=cloneWith;
lodash.deburr=deburr;
lodash.divide=divide;
lodash.endsWith=endsWith;
lodash.eq=eq;
lodash.escape=escape;
lodash.escapeRegExp=escapeRegExp;
lodash.every=every;
lodash.find=find;
lodash.findIndex=findIndex;
lodash.findKey=findKey;
lodash.findLast=findLast;
lodash.findLastIndex=findLastIndex;
lodash.findLastKey=findLastKey;
lodash.floor=floor;
lodash.forEach=forEach;
lodash.forEachRight=forEachRight;
lodash.forIn=forIn;
lodash.forInRight=forInRight;
lodash.forOwn=forOwn;
lodash.forOwnRight=forOwnRight;
lodash.get=get;
lodash.gt=gt;
lodash.gte=gte;
lodash.has=has;
lodash.hasIn=hasIn;
lodash.head=head;
lodash.identity=identity;
lodash.includes=includes;
lodash.indexOf=indexOf;
lodash.inRange=inRange;
lodash.invoke=invoke;
lodash.isArguments=isArguments;
lodash.isArray=isArray;
lodash.isArrayBuffer=isArrayBuffer;
lodash.isArrayLike=isArrayLike;
lodash.isArrayLikeObject=isArrayLikeObject;
lodash.isBoolean=isBoolean;
lodash.isBuffer=isBuffer;
lodash.isDate=isDate;
lodash.isElement=isElement;
lodash.isEmpty=isEmpty;
lodash.isEqual=isEqual;
lodash.isEqualWith=isEqualWith;
lodash.isError=isError;
lodash.isFinite=isFinite;
lodash.isFunction=isFunction;
lodash.isInteger=isInteger;
lodash.isLength=isLength;
lodash.isMap=isMap;
lodash.isMatch=isMatch;
lodash.isMatchWith=isMatchWith;
lodash.isNaN=isNaN;
lodash.isNative=isNative;
lodash.isNil=isNil;
lodash.isNull=isNull;
lodash.isNumber=isNumber;
lodash.isObject=isObject;
lodash.isObjectLike=isObjectLike;
lodash.isPlainObject=isPlainObject;
lodash.isRegExp=isRegExp;
lodash.isSafeInteger=isSafeInteger;
lodash.isSet=isSet;
lodash.isString=isString;
lodash.isSymbol=isSymbol;
lodash.isTypedArray=isTypedArray;
lodash.isUndefined=isUndefined;
lodash.isWeakMap=isWeakMap;
lodash.isWeakSet=isWeakSet;
lodash.join=join;
lodash.kebabCase=kebabCase;
lodash.last=last;
lodash.lastIndexOf=lastIndexOf;
lodash.lowerCase=lowerCase;
lodash.lowerFirst=lowerFirst;
lodash.lt=lt;
lodash.lte=lte;
lodash.max=max;
lodash.maxBy=maxBy;
lodash.mean=mean;
lodash.meanBy=meanBy;
lodash.min=min;
lodash.minBy=minBy;
lodash.multiply=multiply;
lodash.nth=nth;
lodash.noConflict=noConflict;
lodash.noop=noop;
lodash.now=now;
lodash.pad=pad;
lodash.padEnd=padEnd;
lodash.padStart=padStart;
lodash.parseInt=parseInt;
lodash.random=random;
lodash.reduce=reduce;
lodash.reduceRight=reduceRight;
lodash.repeat=repeat;
lodash.replace=replace;
lodash.result=result;
lodash.round=round;
lodash.runInContext=runInContext;
lodash.sample=sample;
lodash.size=size;
lodash.snakeCase=snakeCase;
lodash.some=some;
lodash.sortedIndex=sortedIndex;
lodash.sortedIndexBy=sortedIndexBy;
lodash.sortedIndexOf=sortedIndexOf;
lodash.sortedLastIndex=sortedLastIndex;
lodash.sortedLastIndexBy=sortedLastIndexBy;
lodash.sortedLastIndexOf=sortedLastIndexOf;
lodash.startCase=startCase;
lodash.startsWith=startsWith;
lodash.subtract=subtract;
lodash.sum=sum;
lodash.sumBy=sumBy;
lodash.template=template;
lodash.times=times;
lodash.toInteger=toInteger;
lodash.toLength=toLength;
lodash.toLower=toLower;
lodash.toNumber=toNumber;
lodash.toSafeInteger=toSafeInteger;
lodash.toString=toString;
lodash.toUpper=toUpper;
lodash.trim=trim;
lodash.trimEnd=trimEnd;
lodash.trimStart=trimStart;
lodash.truncate=truncate;
lodash.unescape=unescape;
lodash.uniqueId=uniqueId;
lodash.upperCase=upperCase;
lodash.upperFirst=upperFirst;


lodash.each=forEach;
lodash.eachRight=forEachRight;
lodash.first=head;

mixin(lodash,function(){
var source={};
baseForOwn(lodash,function(func,methodName){
if(!hasOwnProperty.call(lodash.prototype,methodName)){
source[methodName]=func;
}
});
return source;
}(),{'chain':false});










lodash.VERSION=VERSION;


arrayEach(['bind','bindKey','curry','curryRight','partial','partialRight'],function(methodName){
lodash[methodName].placeholder=lodash;
});


arrayEach(['drop','take'],function(methodName,index){
LazyWrapper.prototype[methodName]=function(n){
var filtered=this.__filtered__;
if(filtered&&!index){
return new LazyWrapper(this);
}
n=n===undefined?1:nativeMax(toInteger(n),0);

var result=this.clone();
if(filtered){
result.__takeCount__=nativeMin(n,result.__takeCount__);
}else{
result.__views__.push({
'size':nativeMin(n,MAX_ARRAY_LENGTH),
'type':methodName+(result.__dir__<0?'Right':'')});

}
return result;
};

LazyWrapper.prototype[methodName+'Right']=function(n){
return this.reverse()[methodName](n).reverse();
};
});


arrayEach(['filter','map','takeWhile'],function(methodName,index){
var type=index+1,
isFilter=type==LAZY_FILTER_FLAG||type==LAZY_WHILE_FLAG;

LazyWrapper.prototype[methodName]=function(iteratee){
var result=this.clone();
result.__iteratees__.push({
'iteratee':getIteratee(iteratee,3),
'type':type});

result.__filtered__=result.__filtered__||isFilter;
return result;
};
});


arrayEach(['head','last'],function(methodName,index){
var takeName='take'+(index?'Right':'');

LazyWrapper.prototype[methodName]=function(){
return this[takeName](1).value()[0];
};
});


arrayEach(['initial','tail'],function(methodName,index){
var dropName='drop'+(index?'':'Right');

LazyWrapper.prototype[methodName]=function(){
return this.__filtered__?new LazyWrapper(this):this[dropName](1);
};
});

LazyWrapper.prototype.compact=function(){
return this.filter(identity);
};

LazyWrapper.prototype.find=function(predicate){
return this.filter(predicate).head();
};

LazyWrapper.prototype.findLast=function(predicate){
return this.reverse().find(predicate);
};

LazyWrapper.prototype.invokeMap=rest(function(path,args){
if(typeof path=='function'){
return new LazyWrapper(this);
}
return this.map(function(value){
return baseInvoke(value,path,args);
});
});

LazyWrapper.prototype.reject=function(predicate){
predicate=getIteratee(predicate,3);
return this.filter(function(value){
return!predicate(value);
});
};

LazyWrapper.prototype.slice=function(start,end){
start=toInteger(start);

var result=this;
if(result.__filtered__&&(start>0||end<0)){
return new LazyWrapper(result);
}
if(start<0){
result=result.takeRight(-start);
}else if(start){
result=result.drop(start);
}
if(end!==undefined){
end=toInteger(end);
result=end<0?result.dropRight(-end):result.take(end-start);
}
return result;
};

LazyWrapper.prototype.takeRightWhile=function(predicate){
return this.reverse().takeWhile(predicate).reverse();
};

LazyWrapper.prototype.toArray=function(){
return this.take(MAX_ARRAY_LENGTH);
};


baseForOwn(LazyWrapper.prototype,function(func,methodName){
var checkIteratee=/^(?:filter|find|map|reject)|While$/.test(methodName),
isTaker=/^(?:head|last)$/.test(methodName),
lodashFunc=lodash[isTaker?'take'+(methodName=='last'?'Right':''):methodName],
retUnwrapped=isTaker||/^find/.test(methodName);

if(!lodashFunc){
return;
}
lodash.prototype[methodName]=function(){
var value=this.__wrapped__,
args=isTaker?[1]:arguments,
isLazy=value instanceof LazyWrapper,
iteratee=args[0],
useLazy=isLazy||isArray(value);

var interceptor=function interceptor(value){
var result=lodashFunc.apply(lodash,arrayPush([value],args));
return isTaker&&chainAll?result[0]:result;
};

if(useLazy&&checkIteratee&&typeof iteratee=='function'&&iteratee.length!=1){

isLazy=useLazy=false;
}
var chainAll=this.__chain__,
isHybrid=!!this.__actions__.length,
isUnwrapped=retUnwrapped&&!chainAll,
onlyLazy=isLazy&&!isHybrid;

if(!retUnwrapped&&useLazy){
value=onlyLazy?value:new LazyWrapper(this);
var result=func.apply(value,args);
result.__actions__.push({'func':thru,'args':[interceptor],'thisArg':undefined});
return new LodashWrapper(result,chainAll);
}
if(isUnwrapped&&onlyLazy){
return func.apply(this,args);
}
result=this.thru(interceptor);
return isUnwrapped?isTaker?result.value()[0]:result.value():result;
};
});


arrayEach(['pop','push','shift','sort','splice','unshift'],function(methodName){
var func=arrayProto[methodName],
chainName=/^(?:push|sort|unshift)$/.test(methodName)?'tap':'thru',
retUnwrapped=/^(?:pop|shift)$/.test(methodName);

lodash.prototype[methodName]=function(){
var args=arguments;
if(retUnwrapped&&!this.__chain__){
var value=this.value();
return func.apply(isArray(value)?value:[],args);
}
return this[chainName](function(value){
return func.apply(isArray(value)?value:[],args);
});
};
});


baseForOwn(LazyWrapper.prototype,function(func,methodName){
var lodashFunc=lodash[methodName];
if(lodashFunc){
var key=lodashFunc.name+'',
names=realNames[key]||(realNames[key]=[]);

names.push({'name':methodName,'func':lodashFunc});
}
});

realNames[createHybridWrapper(undefined,BIND_KEY_FLAG).name]=[{
'name':'wrapper',
'func':undefined}];



LazyWrapper.prototype.clone=lazyClone;
LazyWrapper.prototype.reverse=lazyReverse;
LazyWrapper.prototype.value=lazyValue;


lodash.prototype.at=wrapperAt;
lodash.prototype.chain=wrapperChain;
lodash.prototype.commit=wrapperCommit;
lodash.prototype.next=wrapperNext;
lodash.prototype.plant=wrapperPlant;
lodash.prototype.reverse=wrapperReverse;
lodash.prototype.toJSON=lodash.prototype.valueOf=lodash.prototype.value=wrapperValue;

if(iteratorSymbol){
lodash.prototype[iteratorSymbol]=wrapperToIterator;
}
return lodash;
}




var _=runInContext();






(freeWindow||freeSelf||{})._=_;


if(typeof define=='function'&&typeof define.amd=='object'&&define.amd){


define(function(){
return _;
});
}else

if(freeExports&&freeModule){

if(moduleExports){
(freeModule.exports=_)._=_;
}

freeExports._=_;
}else
{

root._=_;
}
}).call(this);