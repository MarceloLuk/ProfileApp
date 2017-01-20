Object.defineProperty(exports,"__esModule",{value:true});





var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');






var _nativeBase=require('native-base');
var _reactNativeParallaxScrollView=require('react-native-parallax-scroll-view');var _reactNativeParallaxScrollView2=babelHelpers.interopRequireDefault(_reactNativeParallaxScrollView);
var _reactNativeScrollableTabView=require('react-native-scrollable-tab-view');var _reactNativeScrollableTabView2=babelHelpers.interopRequireDefault(_reactNativeScrollableTabView);var


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
_react2.default.createElement(_reactNative.Text,{style:styles.title},'Perfil'),

_react2.default.createElement(_reactNative.Image,{source:require('../assets/img/imageproxy.jpg'),style:styles.bgImage}),
_react2.default.createElement(_reactNative.Image,{source:require('../assets/img/eu.jpeg'),style:styles.avatar})),

_react2.default.createElement(_reactNative.View,{style:styles.bgProfile},
_react2.default.createElement(_reactNative.Text,{style:styles.name},'Marcelo Oliveira'))));},






renderFixedHeader:function renderFixedHeader(){return(
_react2.default.createElement(_reactNative.View,null,
_react2.default.createElement(_reactNative.Text,null,'ASUDHASUDH UASHDUASDH HASDUHA UASHDASHUDSAD')));},




renderStickyHeader:function renderStickyHeader(){return(
_react2.default.createElement(_reactNative.View,{style:styles.bgProfileMin},
_react2.default.createElement(_reactNative.Image,{source:require('../assets/img/eu.jpeg'),style:styles.avatarMin}),
_react2.default.createElement(_reactNative.Text,{style:styles.nameMin},'Marcelo Oliveira')));}},




_react2.default.createElement(_reactNative.View,{style:{height:500}},
_react2.default.createElement(_reactNativeScrollableTabView2.default,{
style:{marginTop:0,overflow:'hidden'},
renderTabBar:function renderTabBar(){return _react2.default.createElement(_reactNativeScrollableTabView.DefaultTabBar,null);}},

_react2.default.createElement(_reactNative.Text,{tabLabel:'Tab #1'},'My'),
_react2.default.createElement(_reactNative.Text,{tabLabel:'Tab #2 '},'favorite '),
_react2.default.createElement(_reactNative.Text,{tabLabel:'Tab #3'},'project ')))));




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

name:{
flex:1,
width:100,
fontSize:18,
textAlign:'left',
marginTop:5,
marginBottom:30,
fontWeight:'bold',
margin:10,
left:90},

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
flexDirection:'row',
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
resizeMode:'cover'}});