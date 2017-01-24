Object.defineProperty(exports,"__esModule",{value:true});





var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');





var _FontAwesome=require('react-native-vector-icons/FontAwesome');var _FontAwesome2=babelHelpers.interopRequireDefault(_FontAwesome);
var _nativeBase=require('native-base');
var _reactNativeProgressBarClassic=require('react-native-progress-bar-classic');var _reactNativeProgressBarClassic2=babelHelpers.interopRequireDefault(_reactNativeProgressBarClassic);var


Skills=function(_Component){babelHelpers.inherits(Skills,_Component);function Skills(){babelHelpers.classCallCheck(this,Skills);return babelHelpers.possibleConstructorReturn(this,(Skills.__proto__||Object.getPrototypeOf(Skills)).apply(this,arguments));}babelHelpers.createClass(Skills,[{key:'render',value:function render()
{
return(
_react2.default.createElement(_nativeBase.Container,{style:styles.contentBox},
_react2.default.createElement(_nativeBase.Content,null,
_react2.default.createElement(_nativeBase.Card,{style:styles.boxShadow},
_react2.default.createElement(_nativeBase.CardItem,null,
_react2.default.createElement(_nativeBase.Text,{style:styles.title},'Nivel de conhecimento')),

_react2.default.createElement(_nativeBase.CardItem,null,
_react2.default.createElement(_reactNative.Image,{style:styles.speakerAvatar,source:require('../../assets/img/php-7.png')}),
_react2.default.createElement(_reactNativeProgressBarClassic2.default,{
progress:100,
valueStyle:'default'}))))));







}}]);return Skills;}(_react.Component);exports.default=Skills;


var styles=_reactNative.StyleSheet.create({
contentBox:{
backgroundColor:'#EFEFF7',
padding:15,
borderWidth:0},

title:{
margin:10,
fontSize:18,
fontWeight:'bold',
color:'#666666'},

speakerAvatar:{
resizeMode:'contain',
width:35,
height:50},

boxShadow:{
borderWidth:.5,
paddingLeft:15,
paddingRight:15,
flex:1,
borderRadius:5,
borderTopLeftRadius:5,
borderTopRightRadius:5,
borderBottomLeftRadius:5,
borderBottomRightRadius:5,
shadowColor:'#000',
shadowOffset:{width:2,height:2},
shadowOpacity:1,
shadowRadius:5,
elevation:10},

ajusteText:{
textAlign:'justify',
color:'#666666'},

colorText:{
color:'#666666'}});