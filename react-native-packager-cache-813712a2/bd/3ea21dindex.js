var _react=require('react');var _react2=babelHelpers.interopRequireDefault(_react);
var _reactNative=require('react-native');






var styles=require('./styles');var _React$PropTypes=

_react2.default.PropTypes,bool=_React$PropTypes.bool,func=_React$PropTypes.func,number=_React$PropTypes.number,string=_React$PropTypes.string;

var window=_reactNative.Dimensions.get('window');

var SCROLLVIEW_REF='ScrollView';

var pivotPoint=function pivotPoint(a,b){return a-b;};

var renderEmpty=function renderEmpty(){return _react2.default.createElement(_reactNative.View,null);};




var interpolate=function interpolate(value,opts){
var x=value.interpolate(opts);
x.toJSON=function(){return x.__getValue();};
return x;
};


var IPropTypes={
backgroundColor:string,
backgroundScrollSpeed:number,
fadeOutForeground:bool,
fadeOutBackground:bool,
contentBackgroundColor:string,
onChangeHeaderVisibility:func,
parallaxHeaderHeight:number.isRequired,
renderBackground:func,
renderFixedHeader:func,
renderForeground:func,
renderScrollComponent:func,
renderStickyHeader:func,
stickyHeaderHeight:number,
contentContainerStyle:_reactNative.View.propTypes.style};var


ParallaxScrollView=function(_Component){babelHelpers.inherits(ParallaxScrollView,_Component);
function ParallaxScrollView(props){babelHelpers.classCallCheck(this,ParallaxScrollView);var _this=babelHelpers.possibleConstructorReturn(this,(ParallaxScrollView.__proto__||Object.getPrototypeOf(ParallaxScrollView)).call(this,
props));
if(props.renderStickyHeader&&!props.stickyHeaderHeight){
console.warn('Property `stickyHeaderHeight` must be set if `renderStickyHeader` is used.');
}
if(props.renderParallaxHeader!==renderEmpty&&!props.renderForeground){
console.warn('Property `renderParallaxHeader` is deprecated. Use `renderForeground` instead.');
}
_this.state={
scrollY:new _reactNative.Animated.Value(0),
viewHeight:window.height,
viewWidth:window.width};

_this._footerComponent={setNativeProps:function setNativeProps(){}};
_this._footerHeight=0;return _this;
}babelHelpers.createClass(ParallaxScrollView,[{key:'render',value:function render()

{var _this2=this;var _props=


















this.props,backgroundColor=_props.backgroundColor,backgroundScrollSpeed=_props.backgroundScrollSpeed,children=_props.children,contentBackgroundColor=_props.contentBackgroundColor,fadeOutForeground=_props.fadeOutForeground,fadeOutBackground=_props.fadeOutBackground,parallaxHeaderHeight=_props.parallaxHeaderHeight,renderBackground=_props.renderBackground,renderFixedHeader=_props.renderFixedHeader,renderForeground=_props.renderForeground,renderParallaxHeader=_props.renderParallaxHeader,renderScrollComponent=_props.renderScrollComponent,renderStickyHeader=_props.renderStickyHeader,stickyHeaderHeight=_props.stickyHeaderHeight,style=_props.style,contentContainerStyle=_props.contentContainerStyle,scrollViewProps=babelHelpers.objectWithoutProperties(_props,['backgroundColor','backgroundScrollSpeed','children','contentBackgroundColor','fadeOutForeground','fadeOutBackground','parallaxHeaderHeight','renderBackground','renderFixedHeader','renderForeground','renderParallaxHeader','renderScrollComponent','renderStickyHeader','stickyHeaderHeight','style','contentContainerStyle']);

var background=this._renderBackground({fadeOutBackground:fadeOutBackground,backgroundScrollSpeed:backgroundScrollSpeed,backgroundColor:backgroundColor,parallaxHeaderHeight:parallaxHeaderHeight,stickyHeaderHeight:stickyHeaderHeight,renderBackground:renderBackground});
var foreground=this._renderForeground({fadeOutForeground:fadeOutForeground,parallaxHeaderHeight:parallaxHeaderHeight,stickyHeaderHeight:stickyHeaderHeight,renderForeground:renderForeground||renderParallaxHeader});
var bodyComponent=this._wrapChildren(children,{contentBackgroundColor:contentBackgroundColor,stickyHeaderHeight:stickyHeaderHeight,contentContainerStyle:contentContainerStyle});
var footerSpacer=this._renderFooterSpacer({contentBackgroundColor:contentBackgroundColor});
var maybeStickyHeader=this._maybeRenderStickyHeader({parallaxHeaderHeight:parallaxHeaderHeight,stickyHeaderHeight:stickyHeaderHeight,backgroundColor:backgroundColor,renderFixedHeader:renderFixedHeader,renderStickyHeader:renderStickyHeader});
var scrollElement=renderScrollComponent(scrollViewProps);

return(
_react2.default.createElement(_reactNative.View,{style:[style,styles.container],
onLayout:function onLayout(e){return _this2._maybeUpdateViewDimensions(e);}},
background,

_react2.default.cloneElement(scrollElement,{
ref:SCROLLVIEW_REF,
style:[styles.scrollView,scrollElement.props.style],
scrollEventThrottle:16,
onScroll:this._onScroll.bind(this)},

foreground,
bodyComponent,
footerSpacer),


maybeStickyHeader));


}},{key:'getScrollResponder',value:function getScrollResponder()




{
return this.refs[SCROLLVIEW_REF].getScrollResponder();
}},{key:'getScrollableNode',value:function getScrollableNode()
{
return this.getScrollResponder().getScrollableNode();
}},{key:'getInnerViewNode',value:function getInnerViewNode()
{
return this.getScrollResponder().getInnerViewNode();
}},{key:'scrollTo',value:function scrollTo()
{var _getScrollResponder;
(_getScrollResponder=this.getScrollResponder()).scrollTo.apply(_getScrollResponder,arguments);
}},{key:'setNativeProps',value:function setNativeProps(
props){
this.refs[SCROLLVIEW_REF].setNativeProps(props);
}},{key:'_onScroll',value:function _onScroll(





e){var _props2=





this.props,parallaxHeaderHeight=_props2.parallaxHeaderHeight,stickyHeaderHeight=_props2.stickyHeaderHeight,onChangeHeaderVisibility=_props2.onChangeHeaderVisibility,_props2$onScroll=_props2.onScroll,prevOnScroll=_props2$onScroll===undefined?function(){}:_props2$onScroll;

var p=pivotPoint(parallaxHeaderHeight,stickyHeaderHeight);

this._maybeUpdateScrollPosition(e);

if(e.nativeEvent.contentOffset.y>=p){
onChangeHeaderVisibility(false);
}else{
onChangeHeaderVisibility(true);
}

prevOnScroll(e);
}},{key:'_maybeUpdateScrollPosition',value:function _maybeUpdateScrollPosition(



e){var _props3=
this.props,parallaxHeaderHeight=_props3.parallaxHeaderHeight,stickyHeaderHeight=_props3.stickyHeaderHeight;var
scrollY=this.state.scrollY;var
offsetY=e.nativeEvent.contentOffset.y;
var p=pivotPoint(parallaxHeaderHeight,stickyHeaderHeight);

if(offsetY<=p||scrollY._value<=p){
scrollY.setValue(offsetY);
}
}},{key:'_maybeUpdateViewDimensions',value:function _maybeUpdateViewDimensions(

e){var _e$nativeEvent$layout=
e.nativeEvent.layout,width=_e$nativeEvent$layout.width,height=_e$nativeEvent$layout.height;

if(width!==this.state.viewWidth||height!==this.state.viewHeight){
this.setState({
viewWidth:width,
viewHeight:height});

}
}},{key:'_renderBackground',value:function _renderBackground(_ref)

{var fadeOutBackground=_ref.fadeOutBackground,backgroundScrollSpeed=_ref.backgroundScrollSpeed,backgroundColor=_ref.backgroundColor,parallaxHeaderHeight=_ref.parallaxHeaderHeight,stickyHeaderHeight=_ref.stickyHeaderHeight,renderBackground=_ref.renderBackground;var _state=
this.state,viewWidth=_state.viewWidth,viewHeight=_state.viewHeight,scrollY=_state.scrollY;
var p=pivotPoint(parallaxHeaderHeight,stickyHeaderHeight);
return(
_react2.default.createElement(_reactNative.Animated.View,{
style:[styles.backgroundImage,{
backgroundColor:backgroundColor,
height:parallaxHeaderHeight,
width:viewWidth,
opacity:fadeOutBackground?
interpolate(scrollY,{
inputRange:[0,p*(1/2),p*(3/4),p],
outputRange:[1,0.3,0.1,0],
extrapolate:'clamp'}):

1,
transform:[{
translateY:interpolate(scrollY,{
inputRange:[0,p],
outputRange:[0,-(p/backgroundScrollSpeed)],
extrapolateRight:'extend',
extrapolateLeft:'clamp'})},

{
scale:interpolate(scrollY,{
inputRange:[-viewHeight,0],
outputRange:[5,1],
extrapolate:'clamp'})}]}]},



_react2.default.createElement(_reactNative.View,null,
renderBackground())));



}},{key:'_renderForeground',value:function _renderForeground(_ref2)

{var fadeOutForeground=_ref2.fadeOutForeground,parallaxHeaderHeight=_ref2.parallaxHeaderHeight,stickyHeaderHeight=_ref2.stickyHeaderHeight,renderForeground=_ref2.renderForeground;var
scrollY=this.state.scrollY;
var p=pivotPoint(parallaxHeaderHeight,stickyHeaderHeight);
return(
_react2.default.createElement(_reactNative.View,{style:styles.parallaxHeaderContainer},
_react2.default.createElement(_reactNative.Animated.View,{
style:[styles.parallaxHeader,{
height:parallaxHeaderHeight,
opacity:fadeOutForeground?
interpolate(scrollY,{
inputRange:[0,p*(1/2),p*(3/4),p],
outputRange:[1,0.3,0.1,0],
extrapolate:'clamp'}):

1}]},

_react2.default.createElement(_reactNative.View,{style:{height:parallaxHeaderHeight}},
renderForeground()))));




}},{key:'_wrapChildren',value:function _wrapChildren(

children,_ref3){var _this3=this;var contentBackgroundColor=_ref3.contentBackgroundColor,stickyHeaderHeight=_ref3.stickyHeaderHeight,contentContainerStyle=_ref3.contentContainerStyle;var
viewHeight=this.state.viewHeight;
var containerStyles=[{backgroundColor:contentBackgroundColor}];

if(contentContainerStyle)
containerStyles.push(contentContainerStyle);

return(
_react2.default.createElement(_reactNative.View,{
style:containerStyles,
onLayout:function onLayout(e){var

height=e.nativeEvent.layout.height;
var footerHeight=Math.max(0,viewHeight-height-stickyHeaderHeight);
if(_this3._footerHeight!==footerHeight){
_this3._footerComponent.setNativeProps({style:{height:footerHeight}});
_this3._footerHeight=footerHeight;
}
}},
children));


}},{key:'_renderFooterSpacer',value:function _renderFooterSpacer(_ref4)

{var _this4=this;var contentBackgroundColor=_ref4.contentBackgroundColor;
return(
_react2.default.createElement(_reactNative.View,{ref:function ref(_ref5){return _this4._footerComponent=_ref5;},style:{backgroundColor:contentBackgroundColor}}));

}},{key:'_maybeRenderStickyHeader',value:function _maybeRenderStickyHeader(_ref6)

{var parallaxHeaderHeight=_ref6.parallaxHeaderHeight,stickyHeaderHeight=_ref6.stickyHeaderHeight,backgroundColor=_ref6.backgroundColor,renderFixedHeader=_ref6.renderFixedHeader,renderStickyHeader=_ref6.renderStickyHeader;var _state2=
this.state,viewWidth=_state2.viewWidth,scrollY=_state2.scrollY;
if(renderStickyHeader||renderFixedHeader){
var p=pivotPoint(parallaxHeaderHeight,stickyHeaderHeight);
return(
_react2.default.createElement(_reactNative.View,{style:[styles.stickyHeader,babelHelpers.extends({width:viewWidth},stickyHeaderHeight?{height:stickyHeaderHeight}:null)]},

renderStickyHeader?

_react2.default.createElement(_reactNative.Animated.View,{
style:{
backgroundColor:backgroundColor,
height:stickyHeaderHeight,
opacity:interpolate(scrollY,{
inputRange:[0,p],
outputRange:[0,1],
extrapolate:'clamp'})}},


_react2.default.createElement(_reactNative.Animated.View,{
style:{
transform:[{
translateY:interpolate(scrollY,{
inputRange:[0,p],
outputRange:[stickyHeaderHeight,0],
extrapolate:'clamp'})}]}},



renderStickyHeader())):



null,

renderFixedHeader&&renderFixedHeader()));


}else{
return null;
}
}}]);return ParallaxScrollView;}(_react.Component);


ParallaxScrollView.propTypes=IPropTypes;

ParallaxScrollView.defaultProps={
backgroundScrollSpeed:5,
backgroundColor:'#000',
contentBackgroundColor:'#fff',
fadeOutForeground:true,
onChangeHeaderVisibility:function onChangeHeaderVisibility(){},
renderScrollComponent:function renderScrollComponent(props){return _react2.default.createElement(_reactNative.ScrollView,props);},
renderBackground:renderEmpty,
renderParallaxHeader:renderEmpty,
renderForeground:null,
stickyHeaderHeight:0,
contentContainerStyle:null};


module.exports=ParallaxScrollView;