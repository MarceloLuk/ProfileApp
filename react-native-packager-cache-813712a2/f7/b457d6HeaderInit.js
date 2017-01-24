Object.defineProperty(exports,"__esModule",{value:true});





var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');






var _FontAwesome=require('react-native-vector-icons/FontAwesome');var _FontAwesome2=babelHelpers.interopRequireDefault(_FontAwesome);
var _nativeBase=require('native-base');
var _reactNativeParallaxScrollView=require('react-native-parallax-scroll-view');var _reactNativeParallaxScrollView2=babelHelpers.interopRequireDefault(_reactNativeParallaxScrollView);
var _reactNativeScrollableTabView=require('react-native-scrollable-tab-view');var _reactNativeScrollableTabView2=babelHelpers.interopRequireDefault(_reactNativeScrollableTabView);
var _Overview=require('./pages/Overview');var _Overview2=babelHelpers.interopRequireDefault(_Overview);
var _Experience=require('./pages/Experience');var _Experience2=babelHelpers.interopRequireDefault(_Experience);
var _Skills=require('./pages/Skills');var _Skills2=babelHelpers.interopRequireDefault(_Skills);var


HeaderInit=function(_Component){babelHelpers.inherits(HeaderInit,_Component);function HeaderInit(){babelHelpers.classCallCheck(this,HeaderInit);return babelHelpers.possibleConstructorReturn(this,(HeaderInit.__proto__||Object.getPrototypeOf(HeaderInit)).apply(this,arguments));}babelHelpers.createClass(HeaderInit,[{key:'render',value:function render()
{
return(
_react2.default.createElement(_reactNativeParallaxScrollView2.default,{
backgroundColor:'white',
contentBackgroundColor:'white',
stickyHeaderHeight:70,
parallaxHeaderHeight:179,
renderForeground:function renderForeground(){return(
_react2.default.createElement(_reactNative.View,{style:{height:90,flex:1}},
_react2.default.createElement(_reactNative.View,{style:styles.bgImageWrapper},
_react2.default.createElement(_nativeBase.Button,{style:styles.buttonsFlaotRight},_react2.default.createElement(_FontAwesome2.default,{name:'plus',style:{color:'#FFFFFF'}})),
_react2.default.createElement(_nativeBase.Button,{style:styles.buttonsFlaotLeft},_react2.default.createElement(_FontAwesome2.default,{name:'envelope',style:{color:'#FFFFFF'}})),
_react2.default.createElement(_reactNative.Image,{source:require('../assets/img/coffee.jpg'),style:styles.bgImage}),
_react2.default.createElement(_reactNative.Image,{source:require('../assets/img/eu.jpeg'),style:styles.avatar})),

_react2.default.createElement(_reactNative.View,{style:styles.bgProfile},
_react2.default.createElement(_reactNative.Text,{style:styles.name},'Marcelo Oliveira'),


_react2.default.createElement(_reactNative.Text,{style:styles.noteName,note:true},'Desenvolvedor'))));},




renderStickyHeader:function renderStickyHeader(){return(
_react2.default.createElement(_reactNative.View,{style:styles.bgProfileMin},
_react2.default.createElement(_reactNative.Image,{source:require('../assets/img/eu.jpeg'),style:styles.avatarMin}),
_react2.default.createElement(_reactNative.Text,{style:styles.nameMin},'Marcelo Oliveira'),


_react2.default.createElement(_nativeBase.Button,{style:styles.buttonsFlaotRightMin},_react2.default.createElement(_FontAwesome2.default,{name:'plus',style:{color:'#FFFFFF'}})),
_react2.default.createElement(_nativeBase.Button,{style:styles.buttonsFlaotLeftMin},_react2.default.createElement(_FontAwesome2.default,{name:'envelope',style:{color:'#FFFFFF'}}))));}},


_react2.default.createElement(_reactNative.View,{style:{minHeight:500}},
_react2.default.createElement(_reactNativeScrollableTabView2.default,{
renderTabBar:function renderTabBar(){return _react2.default.createElement(_reactNativeScrollableTabView.ScrollableTabBar,{
style:styles.tabs});},
tabBarTextStyle:{
color:'#000000'},

tabBarUnderlineStyle:styles.underlineTabs},

_react2.default.createElement(_Overview2.default,{tabLabel:'Perfil'}),
_react2.default.createElement(_Experience2.default,{tabLabel:'Experi\xEAncia'}),
_react2.default.createElement(_Skills2.default,{tabLabel:'Compet\xEAncias'}),
_react2.default.createElement(_reactNative.Text,{tabLabel:'Tab #3 word word word'},'project'),
_react2.default.createElement(_reactNative.Text,{tabLabel:'Tab #4 word word word word'},'favorite'),
_react2.default.createElement(_reactNative.Text,{tabLabel:'Tab #5'},'project')))));




}}]);return HeaderInit;}(_react.Component);exports.default=HeaderInit;


var styles=_reactNative.StyleSheet.create({
container:{
flex:1,
width:undefined,
height:undefined,
backgroundColor:'transparent',
justifyContent:'center',
alignItems:'center'},

title:{
position:'absolute',
alignSelf:'center',
zIndex:10,
color:'#FFFFFF',
flex:1,
left:20,
fontSize:30,
flexDirection:'column',
justifyContent:'center',
alignItems:'center',
justifyContent:'center',
textAlign:'center',
fontWeight:'bold'},

avatar:{
width:80,
height:80,
borderRadius:40,
bottom:0,
top:90,
zIndex:10,
position:'absolute',
margin:0,
left:10,
marginRight:10},

buttonsFlaotLeft:{
position:'absolute',
width:50,
height:50,
borderRadius:25,
backgroundColor:'#2A83F2',
shadowColor:'#000000',
top:10,
right:80},

buttonsFlaotRight:{
position:'absolute',
width:50,
height:50,
backgroundColor:'#72AE4A',
borderRadius:25,
top:10,
right:20},

buttonsFlaotLeftMin:{
position:'absolute',
width:40,
height:40,
borderRadius:20,
backgroundColor:'#2A83F2',
shadowColor:'#000000',
top:10,
right:70},

buttonsFlaotRightMin:{
position:'absolute',
width:40,
height:40,
backgroundColor:'#72AE4A',
borderRadius:20,
top:10,
right:20},

name:{
fontSize:18,
textAlign:'left',
marginTop:5,
fontWeight:'bold',
left:100},

noteName:{
textAlign:'left',
left:100,
marginBottom:20},

avatarMin:{
width:40,
height:40,
borderRadius:20,
bottom:0,
margin:10},

nameMin:{
flex:1,
width:100,
fontSize:15,
textAlign:'left',
fontWeight:'bold',
marginTop:20,
margin:10},

bgProfile:{
marginTop:120,
backgroundColor:'#FFFFFF'},

bgProfileMin:{
flexDirection:'row',
backgroundColor:'#FFFFFF'},

welcome:{
fontSize:20,
textAlign:'center',
margin:10},

instructions:{
textAlign:'center',
color:'#333333',
marginBottom:5},

bgImageWrapper:{
position:'absolute',
top:0,
bottom:0,
left:0,
right:0},

bgImage:{
flex:1,
width:null,
height:null,
resizeMode:'cover'},

tabs:{
borderBottomWidth:0,
marginLeft:10,
marginRight:10,
borderBottomColor:'#34CCFE'},

underlineTabs:{
backgroundColor:'#90BCEB'}});