Object.defineProperty(exports,"__esModule",{value:true});





var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');



var _FontAwesome=require('react-native-vector-icons/FontAwesome');var _FontAwesome2=babelHelpers.interopRequireDefault(_FontAwesome);
var _nativeBase=require('native-base');var


Overview=function(_Component){babelHelpers.inherits(Overview,_Component);function Overview(){babelHelpers.classCallCheck(this,Overview);return babelHelpers.possibleConstructorReturn(this,(Overview.__proto__||Object.getPrototypeOf(Overview)).apply(this,arguments));}babelHelpers.createClass(Overview,[{key:'render',value:function render()
{
return(
_react2.default.createElement(_nativeBase.Container,{style:styles.contentBox},
_react2.default.createElement(_nativeBase.Content,null,
_react2.default.createElement(_nativeBase.Card,{style:styles.boxShadow},
_react2.default.createElement(_nativeBase.CardItem,null,
_react2.default.createElement(_nativeBase.Text,{style:styles.title},'Resumo'),
_react2.default.createElement(_nativeBase.Text,null,'\xA0\xA0\xA0 Ofere\xE7o \xE0s empresas um profissional n\xE3o s\xF3 preparado para atuar de acordo com as tend\xEAncias atuais de mercado, mas tamb\xE9m qualificado para o desenvolvimento sistemas web e mobile, com objetivo de superar novos desafios e adquirir experi\xEAncia.')),






_react2.default.createElement(_nativeBase.CardItem,null,
_react2.default.createElement(_nativeBase.Text,{style:styles.ajusteText},_react2.default.createElement(_FontAwesome2.default,{name:'calendar',style:{color:'#DD5044'}}),'  Data de nascimento: 15/04/1991')),

_react2.default.createElement(_nativeBase.CardItem,null,
_react2.default.createElement(_nativeBase.Text,{style:styles.ajusteText},_react2.default.createElement(_FontAwesome2.default,{name:'user-circle',style:{color:'#DD5044'}}),'  Estado civil: Casado'))))));





}}]);return Overview;}(_react.Component);exports.default=Overview;


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