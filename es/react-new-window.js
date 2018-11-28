import React from"react";import ReactDOM from"react-dom";function createCommonjsModule(e,t){return e(t={exports:{}},t.exports),t.exports}var getOwnPropertySymbols=Object.getOwnPropertySymbols,hasOwnProperty=Object.prototype.hasOwnProperty,propIsEnumerable=Object.prototype.propertyIsEnumerable;function toObject(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function shouldUseNative(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(e){o[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}var objectAssign=shouldUseNative()?Object.assign:function(e,t){for(var n,o,r=toObject(e),i=1;i<arguments.length;i++){for(var s in n=Object(arguments[i]))hasOwnProperty.call(n,s)&&(r[s]=n[s]);if(getOwnPropertySymbols){o=getOwnPropertySymbols(n);for(var c=0;c<o.length;c++)propIsEnumerable.call(n,o[c])&&(r[o[c]]=n[o[c]])}}return r},ReactPropTypesSecret="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ReactPropTypesSecret_1=ReactPropTypesSecret;function emptyFunction(){}var factoryWithThrowingShims=function(){function e(e,t,n,o,r,i){if(i!==ReactPropTypesSecret_1){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=emptyFunction,n.PropTypes=n,n},propTypes=createCommonjsModule(function(e){e.exports=factoryWithThrowingShims()}),classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},createClass=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),inherits=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},possibleConstructorReturn=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},NewWindow=function(e){function t(e){classCallCheck(this,t);var n=possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.container=document.createElement("div"),n.window=null,n.windowCheckerInterval=null,n.released=!1,n.state={mounted:!1},n}return inherits(t,e),createClass(t,[{key:"render",value:function(){return this.state.mounted?ReactDOM.createPortal(this.props.children,this.container):null}},{key:"componentDidMount",value:function(){this.openChild(),this.setState({mounted:!0})}},{key:"openChild",value:function(){var e=this,t=this.props,n=t.url,o=t.title,r=t.name,i=t.features,s=t.onBlock,c=t.center;if("string"!=typeof c||void 0!==i.width&&void 0!==i.height){if("parent"===c)i.left=window.top.outerWidth/2+window.top.screenX-i.width/2,i.top=window.top.outerHeight/2+window.top.screenY-i.height/2;else if("screen"===c){var a=void 0!==window.screenLeft?window.screenLeft:screen.left,p=void 0!==window.screenTop?window.screenTop:screen.top,l=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width,u=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height;i.left=l/2-i.width/2+a,i.top=u/2-i.height/2+p}}else console.warn("width and height window features must be present when a center prop is provided");this.window=window.open(n,r,toWindowFeatures(i)),this.windowCheckerInterval=setInterval(function(){e.window&&!e.window.closed||e.release()},50),this.window?(this.window.document.title=o,this.window.document.body.appendChild(this.container),this.props.className&&this.container.classList.add(this.props.className),this.props.copyStyles&&setTimeout(function(){return copyStyles(document,e.window.document)},0),this.window.addEventListener("beforeunload",function(){return e.release()})):"function"==typeof s?s.call(null):console.warn("A new window could not be opened. Maybe it was blocked.")}},{key:"componentWillUnmount",value:function(){this.window&&this.window.close()}},{key:"release",value:function(){if(!this.released){this.released=!0,clearInterval(this.windowCheckerInterval);var e=this.props.onUnload;"function"==typeof e&&e.call(null)}}}]),t}(React.PureComponent);function copyStyles(e,t){Array.from(e.styleSheets).forEach(function(n){var o=void 0;try{o=n.cssRules}catch(e){console.error(e)}if(o){var r=e.createElement("style");Array.from(n.cssRules).forEach(function(t){var n=t.cssText,o=t.type,i=n;[3,5].includes(o)&&(i=n.split("url(").map(function(e){return"/"===e[1]?""+e.slice(0,1)+window.location.origin+e.slice(1):e}).join("url(")),r.appendChild(e.createTextNode(i))}),t.head.appendChild(r)}else if(n.href){var i=e.createElement("link");i.rel="stylesheet",i.href=n.href,t.head.appendChild(i)}})}function toWindowFeatures(e){return Object.keys(e).reduce(function(t,n){var o=e[n];return"boolean"==typeof o?t.push(n+"="+(o?"yes":"no")):t.push(n+"="+o),t},[]).join(",")}NewWindow.defaultProps={url:"",name:"",title:"",features:{width:"600px",height:"640px"},onBlock:null,onUnload:null,center:"parent",copyStyles:!0},NewWindow.propTypes={children:propTypes.node,url:propTypes.string,name:propTypes.string,title:propTypes.string,features:propTypes.object,onUnload:propTypes.func,onBlock:propTypes.func,center:propTypes.oneOf(["parent","screen"]),copyStyles:propTypes.bool,className:propTypes.string};export default NewWindow;
//# sourceMappingURL=react-new-window.js.map
