Object.defineProperty(exports,"__esModule",{value:true});





var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');









var _FontAwesome=require('react-native-vector-icons/FontAwesome');var _FontAwesome2=babelHelpers.interopRequireDefault(_FontAwesome);
var _nativeBase=require('native-base');var


Experience=function(_Component){babelHelpers.inherits(Experience,_Component);function Experience(){babelHelpers.classCallCheck(this,Experience);return babelHelpers.possibleConstructorReturn(this,(Experience.__proto__||Object.getPrototypeOf(Experience)).apply(this,arguments));}babelHelpers.createClass(Experience,[{key:'render',value:function render()
{
return(
_react2.default.createElement(_nativeBase.Container,{style:styles.contentBox},
_react2.default.createElement(_nativeBase.Content,null,
_react2.default.createElement(_nativeBase.Card,{style:styles.boxShadow},
_react2.default.createElement(_nativeBase.CardItem,null,
_react2.default.createElement(_reactNative.View,{style:styles.row},
_react2.default.createElement(_reactNative.View,{style:styles.timeContainer},
_react2.default.createElement(_nativeBase.Text,{style:styles.timeText},'2017'),
_react2.default.createElement(_reactNative.View,{style:[styles.circle]})),

_react2.default.createElement(_reactNative.View,{style:styles.details},

_react2.default.createElement(_reactNative.Image,{style:styles.speakerAvatar,source:require('../../assets/img/xys.png')}),
_react2.default.createElement(_reactNative.View,{style:styles.speakerInfo},
_react2.default.createElement(_reactNative.View,{style:styles.speakerDescription},
_react2.default.createElement(_nativeBase.Text,{style:styles.title},'Analista Desenvolvedor PHP S\xEAnior'),
_react2.default.createElement(_nativeBase.Text,{style:styles.speakerName},'Desenvolvimento de sistemas web em PHP utilizando symfony 2 e angular bem como desenvolvimento mobile da plataforma na xys.com.br.'))),


_react2.default.createElement(_reactNative.View,{style:styles.separator}))),



_react2.default.createElement(_reactNative.View,{style:styles.row},
_react2.default.createElement(_reactNative.View,{style:styles.timeContainer},
_react2.default.createElement(_nativeBase.Text,{style:styles.timeText},'2012'),
_react2.default.createElement(_reactNative.View,{style:[styles.circle]})),

_react2.default.createElement(_reactNative.View,{style:styles.details},

_react2.default.createElement(_reactNative.Image,{style:styles.speakerAvatarCtis,source:require('../../assets/img/ctis.png')}),
_react2.default.createElement(_reactNative.View,{style:styles.speakerInfo},
_react2.default.createElement(_reactNative.View,{style:styles.speakerDescription},
_react2.default.createElement(_nativeBase.Text,{style:styles.title},'Analista Desenvolvedor PHP'),
_react2.default.createElement(_nativeBase.Text,{style:styles.speakerName},'Desenvolvendo sistemas web PHP em ZendFramework integrando framework PhpExt com doctrine 2 atuando nos principais projetos em php da empresa CTIS.'))),


_react2.default.createElement(_reactNative.View,{style:styles.separator}))),


_react2.default.createElement(_reactNative.View,{style:styles.row},
_react2.default.createElement(_reactNative.View,{style:styles.timeContainer},
_react2.default.createElement(_nativeBase.Text,{style:styles.timeText},'2008'),
_react2.default.createElement(_reactNative.View,{style:[styles.circle]})),

_react2.default.createElement(_reactNative.View,{style:styles.details},

_react2.default.createElement(_reactNative.Image,{style:styles.speakerAvatarInnovix,source:require('../../assets/img/innovix.png')}),
_react2.default.createElement(_reactNative.View,{style:styles.speakerInfo},
_react2.default.createElement(_reactNative.View,{style:styles.speakerDescription},
_react2.default.createElement(_nativeBase.Text,{style:styles.title},'Analista desenvolvedor (estagiario)'),
_react2.default.createElement(_nativeBase.Text,{style:styles.speakerName},'Desenvolvimento de sistemas Web em PHP com banco de dados MySQL e SQL Server, Aplicativos Java (APPLETS) de comunica\xE7\xE3o com leitora RFID, e comunica\xE7\xE3o com Webcam, fui incumbido do desenvolvimento do portal da empresa. da empresa de automa\xE7\xE3o INNOVIX.'))),


_react2.default.createElement(_reactNative.View,{style:styles.separator}))))))));







}}]);return Experience;}(_react.Component);exports.default=Experience;


var styles=_reactNative.StyleSheet.create({
contentBox:{
backgroundColor:'#EFEFF7',
padding:15,
borderWidth:0},

boxShadow:{
borderWidth:.5,
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
color:'#666666'},

container:{
flex:1},


list:{
flex:1},


sectionHeader:{
marginBottom:15,
backgroundColor:'#05A9D6',
height:30,
justifyContent:'center'},

sectionHeaderText:{
color:'#FFF',
fontSize:18,
alignSelf:'center'},


row:{
flexDirection:'row',
flex:1,
alignItems:'stretch',
justifyContent:'center',
paddingLeft:15,
paddingRight:15},

timeContainer:{
width:40},

timeText:{
color:'#AAA',
textAlign:'right'},

circle:{
width:10,
height:10,
borderRadius:5,
backgroundColor:'#88C057',
position:'absolute',
right:-25,
zIndex:20,
flex:1,
top:0},

details:{
borderColor:'#AAA',
borderLeftWidth:1,
flexDirection:'column',
flex:1,
zIndex:10,
marginLeft:20,
paddingLeft:20},

title:{
fontSize:15,
fontWeight:'600',
color:'#3B3738',
marginBottom:6},

speakerName:{
fontSize:12},

titleSingle:{
marginBottom:0},

speakerInfo:{
flexDirection:'row'},

speakerAvatar:{
width:50,
height:20,
marginRight:15},

peakerAvatarCtis:{
width:30,
height:30,
marginRight:15},

peakerAvatarCtis:{
width:60,
height:30,
marginRight:15},

speakerDescription:{
flex:1},

separator:{
height:.5,
backgroundColor:'#AAA',
zIndex:10,
marginTop:15,
marginBottom:15}});