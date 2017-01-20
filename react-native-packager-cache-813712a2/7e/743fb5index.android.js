Object.defineProperty(exports,"__esModule",{value:true});





var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');






var _HeaderInit=require('./app/components/HeaderInit');var _HeaderInit2=babelHelpers.interopRequireDefault(_HeaderInit);var

ProfileApp=function(_Component){babelHelpers.inherits(ProfileApp,_Component);function ProfileApp(){babelHelpers.classCallCheck(this,ProfileApp);return babelHelpers.possibleConstructorReturn(this,(ProfileApp.__proto__||Object.getPrototypeOf(ProfileApp)).apply(this,arguments));}babelHelpers.createClass(ProfileApp,[{key:'render',value:function render()
{
return(
_react2.default.createElement(_HeaderInit2.default,null));

}}]);return ProfileApp;}(_react.Component);exports.default=ProfileApp;


_reactNative.AppRegistry.registerComponent('ProfileApp',function(){return ProfileApp;});