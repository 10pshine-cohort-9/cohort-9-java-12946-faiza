var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,a)=>(a=n==null?{}:e(i(n)),c(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function D(e,t){return E(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ee(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var k=/\/+/g;function A(e,t){return typeof e==`object`&&e&&e.key!=null?ee(``+e.key):t.toString(36)}function te(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function ne(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,ne(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+A(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(k,`$&/`)+`/`),ne(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=D(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(k,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+A(a,u),c+=ne(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+A(a,u++),c+=ne(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return ne(te(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function re(e,t,n){if(e==null)return e;var r=[],i=0;return ne(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ie(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var j=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},M={map:re,forEach:function(e,t,n){re(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return re(e,function(){t++}),t},toArray:function(e){return re(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=M,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ie}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,j)}catch(e){j(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.8`})),d=o(((e,t)=>{t.exports=u()})),f=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&A(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&A(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var ee=new MessageChannel,k=ee.port2;ee.port1.onmessage=D,O=function(){k.postMessage(null)}}else O=function(){_(D,0)};function A(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,A(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),p=o(((e,t)=>{t.exports=f()})),m=o((e=>{var t=d();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.8`})),h=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=m()})),g=o((e=>{var t=p(),n=d(),r=h();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function u(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function f(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=f(e),t!==null)return t;e=e.sibling}return null}var m=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),D=Symbol.for(`react.memo`),O=Symbol.for(`react.lazy`),ee=Symbol.for(`react.activity`),k=Symbol.for(`react.memo_cache_sentinel`),A=Symbol.iterator;function te(e){return typeof e!=`object`||!e?null:(e=A&&e[A]||e[`@@iterator`],typeof e==`function`?e:null)}var ne=Symbol.for(`react.client.reference`);function re(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===ne?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case ee:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case D:return t=e.displayName||null,t===null?re(e.type)||`Memo`:t;case O:t=e._payload,e=e._init;try{return re(e(t))}catch{}}return null}var ie=Array.isArray,j=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},oe=[],se=-1;function ce(e){return{current:e}}function le(e){0>se||(e.current=oe[se],oe[se]=null,se--)}function ue(e,t){se++,oe[se]=e.current,e.current=t}var de=ce(null),fe=ce(null),pe=ce(null),me=ce(null);function he(e,t){switch(ue(pe,t),ue(fe,e),ue(de,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}le(de),ue(de,e)}function ge(){le(de),le(fe),le(pe)}function _e(e){e.memoizedState!==null&&ue(me,e);var t=de.current,n=Hd(t,e.type);t!==n&&(ue(fe,e),ue(de,n))}function ve(e){fe.current===e&&(le(de),le(fe)),me.current===e&&(le(me),Qf._currentValue=ae)}var ye,be;function xe(e){if(ye===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);ye=t&&t[1]||``,be=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+ye+e+be}var Se=!1;function Ce(e,t){if(!e||Se)return``;Se=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Se=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?xe(n):``}function we(e,t){switch(e.tag){case 26:case 27:case 5:return xe(e.type);case 16:return xe(`Lazy`);case 13:return e.child!==t&&t!==null?xe(`Suspense Fallback`):xe(`Suspense`);case 19:return xe(`SuspenseList`);case 0:case 15:return Ce(e.type,!1);case 11:return Ce(e.type.render,!1);case 1:return Ce(e.type,!0);case 31:return xe(`Activity`);default:return``}}function Te(e){try{var t=``,n=null;do t+=we(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ee=Object.prototype.hasOwnProperty,De=t.unstable_scheduleCallback,Oe=t.unstable_cancelCallback,ke=t.unstable_shouldYield,Ae=t.unstable_requestPaint,je=t.unstable_now,Me=t.unstable_getCurrentPriorityLevel,Ne=t.unstable_ImmediatePriority,Pe=t.unstable_UserBlockingPriority,Fe=t.unstable_NormalPriority,Ie=t.unstable_LowPriority,Le=t.unstable_IdlePriority,Re=t.log,ze=t.unstable_setDisableYieldValue,Be=null,Ve=null;function He(e){if(typeof Re==`function`&&ze(e),Ve&&typeof Ve.setStrictMode==`function`)try{Ve.setStrictMode(Be,e)}catch{}}var Ue=Math.clz32?Math.clz32:Ke,We=Math.log,Ge=Math.LN2;function Ke(e){return e>>>=0,e===0?32:31-(We(e)/Ge|0)|0}var qe=256,Je=262144,Ye=4194304;function Xe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ze(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Xe(n))):i=Xe(o):i=Xe(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Xe(n))):i=Xe(o)):i=Xe(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Qe(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function $e(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function et(){var e=Ye;return Ye<<=1,!(Ye&62914560)&&(Ye=4194304),e}function tt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function nt(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function rt(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ue(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&it(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function it(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ue(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function at(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ue(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function ot(e,t){var n=t&-t;return n=n&42?1:st(n),(n&(e.suspendedLanes|t))===0?n:0}function st(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ct(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function lt(){var e=M.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function ut(e,t){var n=M.p;try{return M.p=e,t()}finally{M.p=n}}var dt=Math.random().toString(36).slice(2),ft=`__reactFiber$`+dt,pt=`__reactProps$`+dt,mt=`__reactContainer$`+dt,ht=`__reactEvents$`+dt,gt=`__reactListeners$`+dt,_t=`__reactHandles$`+dt,vt=`__reactResources$`+dt,yt=`__reactMarker$`+dt;function bt(e){delete e[ft],delete e[pt],delete e[ht],delete e[gt],delete e[_t]}function xt(e){var t=e[ft];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mt]||n[ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[ft])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function St(e){if(e=e[ft]||e[mt]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Ct(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function wt(e){var t=e[vt];return t||=e[vt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Tt(e){e[yt]=!0}var Et=new Set,Dt={};function Ot(e,t){kt(e,t),kt(e+`Capture`,t)}function kt(e,t){for(Dt[e]=t,e=0;e<t.length;e++)Et.add(t[e])}var At=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),jt={},Mt={};function Nt(e){return Ee.call(Mt,e)?!0:Ee.call(jt,e)?!1:At.test(e)?Mt[e]=!0:(jt[e]=!0,!1)}function Pt(e,t,n){if(Nt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function Ft(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function It(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Lt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Rt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function zt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Bt(e){if(!e._valueTracker){var t=Rt(e)?`checked`:`value`;e._valueTracker=zt(e,t,``+e[t])}}function Vt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Rt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Ht(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var Ut=/[\n"\\]/g;function Wt(e){return e.replace(Ut,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Gt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Lt(t)):e.value!==``+Lt(t)&&(e.value=``+Lt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):qt(e,o,Lt(n)):qt(e,o,Lt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Lt(s):e.removeAttribute(`name`)}function Kt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Bt(e);return}n=n==null?``:``+Lt(n),t=t==null?n:``+Lt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Bt(e)}function qt(e,t,n){t===`number`&&Ht(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Jt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Lt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Yt(e,t,n){if(t!=null&&(t=``+Lt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Lt(n)}function Xt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ie(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Lt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Bt(e)}function Zt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Qt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function $t(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Qt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function en(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&$t(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&$t(e,o,t[o])}function tn(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var nn=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),rn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function an(e){return rn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function on(){}var sn=null;function cn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ln=null,un=null;function dn(e){var t=St(e);if(t&&(e=t.stateNode)){var n=e[pt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Gt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Wt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[pt]||null;if(!a)throw Error(i(90));Gt(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Vt(r)}break a;case`textarea`:Yt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Jt(e,!!n.multiple,t,!1)}}}var fn=!1;function pn(e,t,n){if(fn)return e(t,n);fn=!0;try{return e(t)}finally{if(fn=!1,(ln!==null||un!==null)&&(bu(),ln&&(t=ln,e=un,un=ln=null,dn(t),e)))for(t=0;t<e.length;t++)dn(e[t])}}function mn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[pt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var hn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),gn=!1;if(hn)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){gn=!0}}),window.addEventListener(`test`,_n,_n),window.removeEventListener(`test`,_n,_n)}catch{gn=!1}var vn=null,yn=null,bn=null;function xn(){if(bn)return bn;var e,t=yn,n=t.length,r,i=`value`in vn?vn.value:vn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return bn=i.slice(e,1<r?1-r:void 0)}function Sn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Cn(){return!0}function wn(){return!1}function Tn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Cn:wn,this.isPropagationStopped=wn,this}return m(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Cn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Cn)},persist:function(){},isPersistent:Cn}),t}var En={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dn=Tn(En),On=m({},En,{view:0,detail:0}),kn=Tn(On),An,jn,Mn,Nn=m({},On,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Mn&&(Mn&&e.type===`mousemove`?(An=e.screenX-Mn.screenX,jn=e.screenY-Mn.screenY):jn=An=0,Mn=e),An)},movementY:function(e){return`movementY`in e?e.movementY:jn}}),Pn=Tn(Nn),Fn=Tn(m({},Nn,{dataTransfer:0})),In=Tn(m({},On,{relatedTarget:0})),Ln=Tn(m({},En,{animationName:0,elapsedTime:0,pseudoElement:0})),Rn=Tn(m({},En,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),zn=Tn(m({},En,{data:0})),Bn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Vn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Hn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Un(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Hn[e])?!!t[e]:!1}function Wn(){return Un}var Gn=Tn(m({},On,{key:function(e){if(e.key){var t=Bn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Sn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Vn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wn,charCode:function(e){return e.type===`keypress`?Sn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Sn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Kn=Tn(m({},Nn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),qn=Tn(m({},On,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wn})),Jn=Tn(m({},En,{propertyName:0,elapsedTime:0,pseudoElement:0})),Yn=Tn(m({},Nn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Xn=Tn(m({},En,{newState:0,oldState:0})),Zn=[9,13,27,32],Qn=hn&&`CompositionEvent`in window,$n=null;hn&&`documentMode`in document&&($n=document.documentMode);var er=hn&&`TextEvent`in window&&!$n,tr=hn&&(!Qn||$n&&8<$n&&11>=$n),nr=` `,rr=!1;function ir(e,t){switch(e){case`keyup`:return Zn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function ar(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var or=!1;function sr(e,t){switch(e){case`compositionend`:return ar(t);case`keypress`:return t.which===32?(rr=!0,nr):null;case`textInput`:return e=t.data,e===nr&&rr?null:e;default:return null}}function cr(e,t){if(or)return e===`compositionend`||!Qn&&ir(e,t)?(e=xn(),bn=yn=vn=null,or=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return tr&&t.locale!==`ko`?null:t.data;default:return null}}var lr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ur(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!lr[e.type]:t===`textarea`}function dr(e,t,n,r){ln?un?un.push(r):un=[r]:ln=r,t=Ed(t,`onChange`),0<t.length&&(n=new Dn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var fr=null,pr=null;function mr(e){yd(e,0)}function hr(e){if(Vt(Ct(e)))return e}function gr(e,t){if(e===`change`)return t}var _r=!1;if(hn){var vr;if(hn){var yr=`oninput`in document;if(!yr){var br=document.createElement(`div`);br.setAttribute(`oninput`,`return;`),yr=typeof br.oninput==`function`}vr=yr}else vr=!1;_r=vr&&(!document.documentMode||9<document.documentMode)}function xr(){fr&&(fr.detachEvent(`onpropertychange`,Sr),pr=fr=null)}function Sr(e){if(e.propertyName===`value`&&hr(pr)){var t=[];dr(t,pr,e,cn(e)),pn(mr,t)}}function Cr(e,t,n){e===`focusin`?(xr(),fr=t,pr=n,fr.attachEvent(`onpropertychange`,Sr)):e===`focusout`&&xr()}function wr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return hr(pr)}function Tr(e,t){if(e===`click`)return hr(t)}function Er(e,t){if(e===`input`||e===`change`)return hr(t)}function Dr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Or=typeof Object.is==`function`?Object.is:Dr;function kr(e,t){if(Or(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ee.call(t,i)||!Or(e[i],t[i]))return!1}return!0}function Ar(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jr(e,t){var n=Ar(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Ar(n)}}function Mr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ht(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ht(e.document)}return t}function Pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Fr=hn&&`documentMode`in document&&11>=document.documentMode,Ir=null,Lr=null,Rr=null,zr=!1;function Br(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zr||Ir==null||Ir!==Ht(r)||(r=Ir,`selectionStart`in r&&Pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rr&&kr(Rr,r)||(Rr=r,r=Ed(Lr,`onSelect`),0<r.length&&(t=new Dn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Ir)))}function Vr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Hr={animationend:Vr(`Animation`,`AnimationEnd`),animationiteration:Vr(`Animation`,`AnimationIteration`),animationstart:Vr(`Animation`,`AnimationStart`),transitionrun:Vr(`Transition`,`TransitionRun`),transitionstart:Vr(`Transition`,`TransitionStart`),transitioncancel:Vr(`Transition`,`TransitionCancel`),transitionend:Vr(`Transition`,`TransitionEnd`)},Ur={},Wr={};hn&&(Wr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Hr.animationend.animation,delete Hr.animationiteration.animation,delete Hr.animationstart.animation),`TransitionEvent`in window||delete Hr.transitionend.transition);function Gr(e){if(Ur[e])return Ur[e];if(!Hr[e])return e;var t=Hr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wr)return Ur[e]=t[n];return e}var Kr=Gr(`animationend`),qr=Gr(`animationiteration`),Jr=Gr(`animationstart`),Yr=Gr(`transitionrun`),Xr=Gr(`transitionstart`),Zr=Gr(`transitioncancel`),Qr=Gr(`transitionend`),$r=new Map,ei=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);ei.push(`scrollEnd`);function ti(e,t){$r.set(e,t),Ot(t,[e])}var ni=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},ri=[],ii=0,ai=0;function oi(){for(var e=ii,t=ai=ii=0;t<e;){var n=ri[t];ri[t++]=null;var r=ri[t];ri[t++]=null;var i=ri[t];ri[t++]=null;var a=ri[t];if(ri[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ui(n,i,a)}}function si(e,t,n,r){ri[ii++]=e,ri[ii++]=t,ri[ii++]=n,ri[ii++]=r,ai|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ci(e,t,n,r){return si(e,t,n,r),di(e)}function li(e,t){return si(e,null,null,t),di(e)}function ui(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ue(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function di(e){if(50<du)throw du=0,fu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var fi={};function pi(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mi(e,t,n,r){return new pi(e,t,n,r)}function N(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hi(e,t){var n=e.alternate;return n===null?(n=mi(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function gi(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function _i(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)N(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,de.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ee:return e=mi(31,n,t,a),e.elementType=ee,e.lanes=o,e;case y:return vi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=mi(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=mi(13,n,t,a),e.elementType=T,e.lanes=o,e;case E:return e=mi(19,n,t,a),e.elementType=E,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case D:s=14;break a;case O:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=mi(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function vi(e,t,n,r){return e=mi(7,e,r,t),e.lanes=n,e}function yi(e,t,n){return e=mi(6,e,null,t),e.lanes=n,e}function bi(e){var t=mi(18,null,null,0);return t.stateNode=e,t}function xi(e,t,n){return t=mi(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Si=new WeakMap;function Ci(e,t){if(typeof e==`object`&&e){var n=Si.get(e);return n===void 0?(t={value:e,source:t,stack:Te(t)},Si.set(e,t),t):n}return{value:e,source:t,stack:Te(t)}}var wi=[],Ti=0,Ei=null,Di=0,Oi=[],ki=0,Ai=null,ji=1,Mi=``;function Ni(e,t){wi[Ti++]=Di,wi[Ti++]=Ei,Ei=e,Di=t}function Pi(e,t,n){Oi[ki++]=ji,Oi[ki++]=Mi,Oi[ki++]=Ai,Ai=e;var r=ji;e=Mi;var i=32-Ue(r)-1;r&=~(1<<i),n+=1;var a=32-Ue(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ji=1<<32-Ue(t)+i|n<<i|r,Mi=a+e}else ji=1<<a|n<<i|r,Mi=e}function Fi(e){e.return!==null&&(Ni(e,1),Pi(e,1,0))}function P(e){for(;e===Ei;)Ei=wi[--Ti],wi[Ti]=null,Di=wi[--Ti],wi[Ti]=null;for(;e===Ai;)Ai=Oi[--ki],Oi[ki]=null,Mi=Oi[--ki],Oi[ki]=null,ji=Oi[--ki],Oi[ki]=null}function Ii(e,t){Oi[ki++]=ji,Oi[ki++]=Mi,Oi[ki++]=Ai,ji=t.id,Mi=t.overflow,Ai=e}var Li=null,Ri=null,F=!1,zi=null,Bi=!1,Vi=Error(i(519));function Hi(e){throw Ji(Ci(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Vi}function Ui(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[ft]=e,t[pt]=r,n){case`dialog`:Q(`cancel`,t),Q(`close`,t);break;case`iframe`:case`object`:case`embed`:Q(`load`,t);break;case`video`:case`audio`:for(n=0;n<_d.length;n++)Q(_d[n],t);break;case`source`:Q(`error`,t);break;case`img`:case`image`:case`link`:Q(`error`,t),Q(`load`,t);break;case`details`:Q(`toggle`,t);break;case`input`:Q(`invalid`,t),Kt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:Q(`invalid`,t);break;case`textarea`:Q(`invalid`,t),Xt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||Md(t.textContent,n)?(r.popover!=null&&(Q(`beforetoggle`,t),Q(`toggle`,t)),r.onScroll!=null&&Q(`scroll`,t),r.onScrollEnd!=null&&Q(`scrollend`,t),r.onClick!=null&&(t.onclick=on),t=!0):t=!1,t||Hi(e,!0)}function Wi(e){for(Li=e.return;Li;)switch(Li.tag){case 5:case 31:case 13:Bi=!1;return;case 27:case 3:Bi=!0;return;default:Li=Li.return}}function Gi(e){if(e!==Li)return!1;if(!F)return Wi(e),F=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&Ri&&Hi(e),Wi(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Ri=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Ri=uf(e)}else t===27?(t=Ri,Zd(e.type)?(e=lf,lf=null,Ri=e):Ri=t):Ri=Li?cf(e.stateNode.nextSibling):null;return!0}function Ki(){Ri=Li=null,F=!1}function qi(){var e=zi;return e!==null&&(Zl===null?Zl=e:Zl.push.apply(Zl,e),zi=null),e}function Ji(e){zi===null?zi=[e]:zi.push(e)}var Yi=ce(null),Xi=null,Zi=null;function Qi(e,t,n){ue(Yi,t._currentValue),t._currentValue=n}function $i(e){e._currentValue=Yi.current,le(Yi)}function ea(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function ta(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ea(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),ea(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function na(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;Or(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===me.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&ta(t,e,n,r),t.flags|=262144}function ra(e){for(e=e.firstContext;e!==null;){if(!Or(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ia(e){Xi=e,Zi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function aa(e){return sa(Xi,e)}function oa(e,t){return Xi===null&&ia(e),sa(e,t)}function sa(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Zi===null){if(e===null)throw Error(i(308));Zi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Zi=Zi.next=t;return n}var ca=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},la=t.unstable_scheduleCallback,ua=t.unstable_NormalPriority,da={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fa(){return{controller:new ca,data:new Map,refCount:0}}function pa(e){e.refCount--,e.refCount===0&&la(ua,function(){e.controller.abort()})}var ma=null,ha=0,ga=0,_a=null;function va(e,t){if(ma===null){var n=ma=[];ha=0,ga=dd(),_a={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ha++,t.then(ya,ya),t}function ya(){if(--ha===0&&ma!==null){_a!==null&&(_a.status=`fulfilled`);var e=ma;ma=null,ga=0,_a=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function ba(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var xa=j.S;j.S=function(e,t){eu=je(),typeof t==`object`&&t&&typeof t.then==`function`&&va(e,t),xa!==null&&xa(e,t)};var Sa=ce(null);function Ca(){var e=Sa.current;return e===null?Rl.pooledCache:e}function wa(e,t){t===null?ue(Sa,Sa.current):ue(Sa,t.pool)}function Ta(){var e=Ca();return e===null?null:{parent:da._currentValue,pool:e}}var Ea=Error(i(460)),Da=Error(i(474)),Oa=Error(i(542)),ka={then:function(){}};function Aa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function ja(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(on,on),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Fa(e),e;default:if(typeof t.status==`string`)t.then(on,on);else{if(e=Rl,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Fa(e),e}throw Na=t,Ea}}function Ma(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Na=e,Ea):e}}var Na=null;function Pa(){if(Na===null)throw Error(i(459));var e=Na;return Na=null,e}function Fa(e){if(e===Ea||e===Oa)throw Error(i(483))}var Ia=null,La=0;function Ra(e){var t=La;return La+=1,Ia===null&&(Ia=[]),ja(Ia,e,t)}function za(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ba(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Va(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=hi(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=yi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===O&&Ma(i)===t.type)?(t=a(t,n.props),za(t,n),t.return=e,t):(t=_i(n.type,n.key,n.props,null,e.mode,r),za(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=xi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=vi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=yi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=_i(t.type,t.key,t.props,null,e.mode,n),za(n,t),n.return=e,n;case v:return t=xi(t,e.mode,n),t.return=e,t;case O:return t=Ma(t),f(e,t,n)}if(ie(t)||te(t))return t=vi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Ra(t),n);if(t.$$typeof===C)return f(e,oa(e,t),n);Ba(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case O:return n=Ma(n),p(e,t,n,r)}if(ie(n)||te(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Ra(n),r);if(n.$$typeof===C)return p(e,t,oa(e,n),r);Ba(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case O:return r=Ma(r),m(e,t,n,r,i)}if(ie(r)||te(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Ra(r),i);if(r.$$typeof===C)return m(e,t,n,oa(t,r),i);Ba(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),F&&Ni(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return F&&Ni(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),F&&Ni(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),F&&Ni(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return F&&Ni(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),F&&Ni(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===O&&Ma(l)===r.type){n(e,r.sibling),c=a(r,o.props),za(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=vi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=_i(o.type,o.key,o.props,null,e.mode,c),za(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=xi(o,e.mode,c),c.return=e,e=c}return s(e);case O:return o=Ma(o),b(e,r,o,c)}if(ie(o))return h(e,r,o,c);if(te(o)){if(l=te(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Ra(o),c);if(o.$$typeof===C)return b(e,r,oa(e,o),c);Ba(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=yi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{La=0;var i=b(e,t,n,r);return Ia=null,i}catch(t){if(t===Ea||t===Oa)throw t;var a=mi(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Ha=Va(!0),Ua=Va(!1),Wa=!1;function Ga(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ka(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function qa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ja(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=di(e),ui(e,null,n),t}return si(e,r,t,n),di(e)}function Ya(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,at(e,n)}}function Xa(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Za=!1;function Qa(){if(Za){var e=_a;if(e!==null)throw e}}function $a(e,t,n,r){Za=!1;var i=e.updateQueue;Wa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Y&f)===f:(r&f)===f){f!==0&&f===ga&&(Za=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var h=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(h=g.payload,typeof h==`function`){d=h.call(_,d,f);break a}d=h;break a;case 3:h.flags=h.flags&-65537|128;case 0:if(h=g.payload,f=typeof h==`function`?h.call(_,d,f):h,f==null)break a;d=m({},d,f);break a;case 2:Wa=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Gl|=o,e.lanes=o,e.memoizedState=d}}function eo(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function to(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)eo(n[e],t)}var no=ce(null),ro=ce(0);function io(e,t){e=Ul,ue(ro,e),ue(no,t),Ul=e|t.baseLanes}function ao(){ue(ro,Ul),ue(no,no.current)}function oo(){Ul=ro.current,le(no),le(ro)}var so=ce(null),co=null;function lo(e){var t=e.alternate;ue(mo,mo.current&1),ue(so,e),co===null&&(t===null||no.current!==null||t.memoizedState!==null)&&(co=e)}function uo(e){ue(mo,mo.current),ue(so,e),co===null&&(co=e)}function fo(e){e.tag===22?(ue(mo,mo.current),ue(so,e),co===null&&(co=e)):po(e)}function po(){ue(mo,mo.current),ue(so,so.current)}function I(e){le(so),co===e&&(co=null),le(mo)}var mo=ce(0);function ho(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var go=0,L=null,R=null,_o=null,vo=!1,yo=!1,bo=!1,z=0,xo=0,So=null,Co=0;function wo(){throw Error(i(321))}function To(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Or(e[n],t[n]))return!1;return!0}function Eo(e,t,n,r,i,a){return go=a,L=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,j.H=e===null||e.memoizedState===null?Rs:zs,bo=!1,a=n(r,i),bo=!1,yo&&(a=Oo(t,n,r,i)),Do(e),a}function Do(e){j.H=Ls;var t=R!==null&&R.next!==null;if(go=0,_o=R=L=null,vo=!1,xo=0,So=null,t)throw Error(i(300));e===null||tc||(e=e.dependencies,e!==null&&ra(e)&&(tc=!0))}function Oo(e,t,n,r){L=e;var a=0;do{if(yo&&(So=null),xo=0,yo=!1,25<=a)throw Error(i(301));if(a+=1,_o=R=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}j.H=Bs,o=t(n,r)}while(yo);return o}function ko(){var e=j.H,t=e.useState()[0];return t=typeof t.then==`function`?Io(t):t,e=e.useState()[0],(R===null?null:R.memoizedState)!==e&&(L.flags|=1024),t}function Ao(){var e=z!==0;return z=0,e}function jo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Mo(e){if(vo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}vo=!1}go=0,_o=R=L=null,yo=!1,xo=z=0,So=null}function No(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _o===null?L.memoizedState=_o=e:_o=_o.next=e,_o}function Po(){if(R===null){var e=L.alternate;e=e===null?null:e.memoizedState}else e=R.next;var t=_o===null?L.memoizedState:_o.next;if(t!==null)_o=t,R=e;else{if(e===null)throw L.alternate===null?Error(i(467)):Error(i(310));R=e,e={memoizedState:R.memoizedState,baseState:R.baseState,baseQueue:R.baseQueue,queue:R.queue,next:null},_o===null?L.memoizedState=_o=e:_o=_o.next=e}return _o}function Fo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Io(e){var t=xo;return xo+=1,So===null&&(So=[]),e=ja(So,e,t),t=L,(_o===null?t.memoizedState:_o.next)===null&&(t=t.alternate,j.H=t===null||t.memoizedState===null?Rs:zs),e}function Lo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return Io(e);if(e.$$typeof===C)return aa(e)}throw Error(i(438,String(e)))}function Ro(e){var t=null,n=L.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=L.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Fo(),L.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=k;return t.index++,n}function zo(e,t){return typeof t==`function`?t(e):t}function Bo(e){return Vo(Po(),R,e)}function Vo(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(go&f)===f:(Y&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ga&&(d=!0);else if((go&p)===p){u=u.next,p===ga&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,L.lanes|=p,Gl|=p;f=u.action,bo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,L.lanes|=f,Gl|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!Or(o,e.memoizedState)&&(tc=!0,d&&(n=_a,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ho(e){var t=Po(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Or(o,t.memoizedState)||(tc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Uo(e,t,n){var r=L,a=Po(),o=F;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!Or((R||a).memoizedState,n);if(s&&(a.memoizedState=n,tc=!0),a=a.queue,ms(Ko.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||_o!==null&&_o.memoizedState.tag&1){if(r.flags|=2048,ls(9,{destroy:void 0},Go.bind(null,r,a,n,t),null),Rl===null)throw Error(i(349));o||go&127||Wo(r,t,n)}return n}function Wo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=L.updateQueue,t===null?(t=Fo(),L.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Go(e,t,n,r){t.value=n,t.getSnapshot=r,qo(t)&&Jo(e)}function Ko(e,t,n){return n(function(){qo(t)&&Jo(e)})}function qo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Or(e,n)}catch{return!0}}function Jo(e){var t=li(e,2);t!==null&&hu(t,e,2)}function Yo(e){var t=No();if(typeof e==`function`){var n=e;if(e=n(),bo){He(!0);try{n()}finally{He(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:e},t}function Xo(e,t,n,r){return e.baseState=n,Vo(e,R,typeof r==`function`?r:zo)}function Zo(e,t,n,r,a){if(Ps(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};j.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,Qo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function Qo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=j.T,o={};j.T=o;try{var s=n(i,r),c=j.S;c!==null&&c(o,s),$o(e,t,s)}catch(n){ts(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),j.T=a}}else try{a=n(i,r),$o(e,t,a)}catch(n){ts(e,t,n)}}function $o(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){es(e,t,n)},function(n){return ts(e,t,n)}):es(e,t,n)}function es(e,t,n){t.status=`fulfilled`,t.value=n,ns(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Qo(e,n)))}function ts(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,ns(t),t=t.next;while(t!==r)}e.action=null}function ns(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function rs(e,t){return t}function is(e,t){if(F){var n=Rl.formState;if(n!==null){a:{var r=L;if(F){if(Ri){b:{for(var i=Ri,a=Bi;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Ri=cf(i.nextSibling),r=i.data===`F!`;break a}}Hi(r)}r=!1}r&&(t=n[0])}}return n=No(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rs,lastRenderedState:t},n.queue=r,n=Ns.bind(null,L,r),r.dispatch=n,r=Yo(!1),a=W.bind(null,L,!1,r.queue),r=No(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Zo.bind(null,L,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function as(e){return os(Po(),R,e)}function os(e,t,n){if(t=Vo(e,t,rs)[0],e=Bo(zo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=Io(t)}catch(e){throw e===Ea?Oa:e}else r=t;t=Po();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(L.flags|=2048,ls(9,{destroy:void 0},ss.bind(null,i,n),null)),[r,a,e]}function ss(e,t){e.action=t}function cs(e){var t=Po(),n=R;if(n!==null)return os(t,n,e);Po(),t=t.memoizedState,n=Po();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ls(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=L.updateQueue,t===null&&(t=Fo(),L.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function us(){return Po().memoizedState}function ds(e,t,n,r){var i=No();L.flags|=e,i.memoizedState=ls(1|t,{destroy:void 0},n,r===void 0?null:r)}function fs(e,t,n,r){var i=Po();r=r===void 0?null:r;var a=i.memoizedState.inst;R!==null&&r!==null&&To(r,R.memoizedState.deps)?i.memoizedState=ls(t,a,n,r):(L.flags|=e,i.memoizedState=ls(1|t,a,n,r))}function ps(e,t){ds(8390656,8,e,t)}function ms(e,t){fs(2048,8,e,t)}function hs(e){L.flags|=4;var t=L.updateQueue;if(t===null)t=Fo(),L.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function gs(e){var t=Po().memoizedState;return hs({ref:t,nextImpl:e}),function(){if(q&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function _s(e,t){return fs(4,2,e,t)}function vs(e,t){return fs(4,4,e,t)}function ys(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function bs(e,t,n){n=n==null?null:n.concat([e]),fs(4,4,ys.bind(null,t,e),n)}function xs(){}function Ss(e,t){var n=Po();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&To(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Cs(e,t){var n=Po();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&To(t,r[1]))return r[0];if(r=e(),bo){He(!0);try{e()}finally{He(!1)}}return n.memoizedState=[r,t],r}function ws(e,t,n){return n===void 0||go&1073741824&&!(Y&261930)?e.memoizedState=t:(e.memoizedState=n,e=mu(),L.lanes|=e,Gl|=e,n)}function Ts(e,t,n,r){return Or(n,t)?n:no.current===null?!(go&42)||go&1073741824&&!(Y&261930)?(tc=!0,e.memoizedState=n):(e=mu(),L.lanes|=e,Gl|=e,t):(e=ws(e,n,r),Or(e,t)||(tc=!0),e)}function Es(e,t,n,r,i){var a=M.p;M.p=a!==0&&8>a?a:8;var o=j.T,s={};j.T=s,W(e,!1,t,n);try{var c=i(),l=j.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?U(e,t,ba(c,r),pu(e)):U(e,t,r,pu(e))}catch(n){U(e,t,{then:function(){},status:`rejected`,reason:n},pu())}finally{M.p=a,o!==null&&s.types!==null&&(o.types=s.types),j.T=o}}function Ds(){}function Os(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=B(e).queue;Es(e,a,t,ae,n===null?Ds:function(){return ks(e),n(r)})}function B(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:ae},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ks(e){var t=B(e);t.next===null&&(t=e.alternate.memoizedState),U(e,t.next.queue,{},pu())}function V(){return aa(Qf)}function As(){return Po().memoizedState}function js(){return Po().memoizedState}function H(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=pu();e=qa(n);var r=Ja(t,e,n);r!==null&&(hu(r,t,n),Ya(r,t,n)),t={cache:fa()},e.payload=t;return}t=t.return}}function Ms(e,t,n){var r=pu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ps(e)?Fs(t,n):(n=ci(e,t,n,r),n!==null&&(hu(n,e,r),Is(n,t,r)))}function Ns(e,t,n){U(e,t,n,pu())}function U(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ps(e))Fs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Or(s,o))return si(e,t,i,0),Rl===null&&oi(),!1}catch{}if(n=ci(e,t,i,r),n!==null)return hu(n,e,r),Is(n,t,r),!0}return!1}function W(e,t,n,r){if(r={lane:2,revertLane:dd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ps(e)){if(t)throw Error(i(479))}else t=ci(e,n,r,2),t!==null&&hu(t,e,2)}function Ps(e){var t=e.alternate;return e===L||t!==null&&t===L}function Fs(e,t){yo=vo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Is(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,at(e,n)}}var Ls={readContext:aa,use:Lo,useCallback:wo,useContext:wo,useEffect:wo,useImperativeHandle:wo,useLayoutEffect:wo,useInsertionEffect:wo,useMemo:wo,useReducer:wo,useRef:wo,useState:wo,useDebugValue:wo,useDeferredValue:wo,useTransition:wo,useSyncExternalStore:wo,useId:wo,useHostTransitionStatus:wo,useFormState:wo,useActionState:wo,useOptimistic:wo,useMemoCache:wo,useCacheRefresh:wo};Ls.useEffectEvent=wo;var Rs={readContext:aa,use:Lo,useCallback:function(e,t){return No().memoizedState=[e,t===void 0?null:t],e},useContext:aa,useEffect:ps,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),ds(4194308,4,ys.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ds(4194308,4,e,t)},useInsertionEffect:function(e,t){ds(4,2,e,t)},useMemo:function(e,t){var n=No();t=t===void 0?null:t;var r=e();if(bo){He(!0);try{e()}finally{He(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=No();if(n!==void 0){var i=n(t);if(bo){He(!0);try{n(t)}finally{He(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=Ms.bind(null,L,e),[r.memoizedState,e]},useRef:function(e){var t=No();return e={current:e},t.memoizedState=e},useState:function(e){e=Yo(e);var t=e.queue,n=Ns.bind(null,L,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:xs,useDeferredValue:function(e,t){return ws(No(),e,t)},useTransition:function(){var e=Yo(!1);return e=Es.bind(null,L,e.queue,!0,!1),No().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=L,a=No();if(F){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),Rl===null)throw Error(i(349));Y&127||Wo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ps(Ko.bind(null,r,o,e),[e]),r.flags|=2048,ls(9,{destroy:void 0},Go.bind(null,r,o,n,t),null),n},useId:function(){var e=No(),t=Rl.identifierPrefix;if(F){var n=Mi,r=ji;n=(r&~(1<<32-Ue(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=z++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=Co++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:V,useFormState:is,useActionState:is,useOptimistic:function(e){var t=No();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=W.bind(null,L,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ro,useCacheRefresh:function(){return No().memoizedState=H.bind(null,L)},useEffectEvent:function(e){var t=No(),n={impl:e};return t.memoizedState=n,function(){if(q&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},zs={readContext:aa,use:Lo,useCallback:Ss,useContext:aa,useEffect:ms,useImperativeHandle:bs,useInsertionEffect:_s,useLayoutEffect:vs,useMemo:Cs,useReducer:Bo,useRef:us,useState:function(){return Bo(zo)},useDebugValue:xs,useDeferredValue:function(e,t){return Ts(Po(),R.memoizedState,e,t)},useTransition:function(){var e=Bo(zo)[0],t=Po().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:As,useHostTransitionStatus:V,useFormState:as,useActionState:as,useOptimistic:function(e,t){return Xo(Po(),R,e,t)},useMemoCache:Ro,useCacheRefresh:js};zs.useEffectEvent=gs;var Bs={readContext:aa,use:Lo,useCallback:Ss,useContext:aa,useEffect:ms,useImperativeHandle:bs,useInsertionEffect:_s,useLayoutEffect:vs,useMemo:Cs,useReducer:Ho,useRef:us,useState:function(){return Ho(zo)},useDebugValue:xs,useDeferredValue:function(e,t){var n=Po();return R===null?ws(n,e,t):Ts(n,R.memoizedState,e,t)},useTransition:function(){var e=Ho(zo)[0],t=Po().memoizedState;return[typeof e==`boolean`?e:Io(e),t]},useSyncExternalStore:Uo,useId:As,useHostTransitionStatus:V,useFormState:cs,useActionState:cs,useOptimistic:function(e,t){var n=Po();return R===null?(n.baseState=e,[e,n.queue.dispatch]):Xo(n,R,e,t)},useMemoCache:Ro,useCacheRefresh:js};Bs.useEffectEvent=gs;function Vs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:m({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Hs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=pu(),i=qa(r);i.payload=t,n!=null&&(i.callback=n),t=Ja(e,i,r),t!==null&&(hu(t,e,r),Ya(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=pu(),i=qa(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ja(e,i,r),t!==null&&(hu(t,e,r),Ya(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=pu(),r=qa(n);r.tag=2,t!=null&&(r.callback=t),t=Ja(e,r,n),t!==null&&(hu(t,e,n),Ya(t,e,n))}};function Us(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!kr(n,r)||!kr(i,a):!0}function Ws(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Hs.enqueueReplaceState(t,t.state,null)}function Gs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=m({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Ks(e){ni(e)}function qs(e){console.error(e)}function Js(e){ni(e)}function Ys(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function G(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Xs(e,t,n){return n=qa(n),n.tag=3,n.payload={element:null},n.callback=function(){Ys(e,t)},n}function Zs(e){return e=qa(e),e.tag=3,e}function Qs(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){G(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){G(t,n,r),typeof i!=`function`&&(ru===null?ru=new Set([this]):ru.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function $s(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&na(t,n,a,!0),n=so.current,n!==null){switch(n.tag){case 31:case 13:return co===null?Du():n.alternate===null&&Wl===0&&(Wl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===ka?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Gu(e,r,a)),!1;case 22:return n.flags|=65536,r===ka?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Gu(e,r,a)),!1}throw Error(i(435,n.tag))}return Gu(e,r,a),Du(),!1}if(F)return t=so.current,t===null?(r!==Vi&&(t=Error(i(423),{cause:r}),Ji(Ci(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=Ci(r,n),a=Xs(e.stateNode,r,a),Xa(e,a),Wl!==4&&(Wl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Vi&&(e=Error(i(422),{cause:r}),Ji(Ci(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=Ci(o,n),Xl===null?Xl=[o]:Xl.push(o),Wl!==4&&(Wl=2),t===null)return!0;r=Ci(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Xs(n.stateNode,r,e),Xa(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(ru===null||!ru.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Zs(a),Qs(a,e,n,r),Xa(n,a),!1}n=n.return}while(n!==null);return!1}var ec=Error(i(461)),tc=!1;function nc(e,t,n,r){t.child=e===null?Ua(t,null,n,r):Ha(t,e.child,n,r)}function rc(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return ia(t),r=Eo(e,t,n,o,a,i),s=Ao(),e!==null&&!tc?(jo(e,t,i),Dc(e,t,i)):(F&&s&&Fi(t),t.flags|=1,nc(e,t,r,i),t.child)}function ic(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!N(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,ac(e,t,a,r,i)):(e=_i(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Oc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?kr:n,n(o,r)&&e.ref===t.ref)return Dc(e,t,i)}return t.flags|=1,e=hi(a,r),e.ref=t.ref,e.return=t,t.child=e}function ac(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(kr(a,r)&&e.ref===t.ref)if(tc=!1,t.pendingProps=r=a,Oc(e,i))e.flags&131072&&(tc=!0);else return t.lanes=e.lanes,Dc(e,t,i)}return pc(e,t,n,r,i)}function oc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return cc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&wa(t,a===null?null:a.cachePool),a===null?ao():io(t,a),fo(t);else return r=t.lanes=536870912,cc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&wa(t,null),ao(),po(t)):(wa(t,a.cachePool),io(t,a),po(t),t.memoizedState=null);return nc(e,t,i,n),t.child}function sc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function cc(e,t,n,r,i){var a=Ca();return a=a===null?null:{parent:da._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&wa(t,null),ao(),fo(t),e!==null&&na(e,t,r,!0),t.childLanes=i,null}function lc(e,t){return t=Sc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function uc(e,t,n){return Ha(t,e.child,null,n),e=lc(t,t.pendingProps),e.flags|=2,I(t),t.memoizedState=null,e}function dc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(F){if(r.mode===`hidden`)return e=lc(t,r),t.lanes=536870912,sc(null,e);if(uo(t),(e=Ri)?(e=rf(e,Bi),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ai===null?null:{id:ji,overflow:Mi},retryLane:536870912,hydrationErrors:null},n=bi(e),n.return=t,t.child=n,Li=t,Ri=null)):e=null,e===null)throw Hi(t);return t.lanes=536870912,null}return lc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(uo(t),a)if(t.flags&256)t.flags&=-257,t=uc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(tc||na(e,t,n,!1),a=(n&e.childLanes)!==0,tc||a){if(r=Rl,r!==null&&(s=ot(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,li(e,s),hu(r,e,s),ec;Du(),t=uc(e,t,n)}else e=o.treeContext,Ri=cf(s.nextSibling),Li=t,F=!0,zi=null,Bi=!1,e!==null&&Ii(t,e),t=lc(t,r),t.flags|=4096;return t}return e=hi(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function fc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function pc(e,t,n,r,i){return ia(t),n=Eo(e,t,n,r,void 0,i),r=Ao(),e!==null&&!tc?(jo(e,t,i),Dc(e,t,i)):(F&&r&&Fi(t),t.flags|=1,nc(e,t,n,i),t.child)}function mc(e,t,n,r,i,a){return ia(t),t.updateQueue=null,n=Oo(t,r,n,i),Do(e),r=Ao(),e!==null&&!tc?(jo(e,t,a),Dc(e,t,a)):(F&&r&&Fi(t),t.flags|=1,nc(e,t,n,a),t.child)}function hc(e,t,n,r,i){if(ia(t),t.stateNode===null){var a=fi,o=n.contextType;typeof o==`object`&&o&&(a=aa(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Hs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},Ga(t),o=n.contextType,a.context=typeof o==`object`&&o?aa(o):fi,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Vs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Hs.enqueueReplaceState(a,a.state,null),$a(t,r,a,i),Qa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Gs(n,s);a.props=c;var l=a.context,u=n.contextType;o=fi,typeof u==`object`&&u&&(o=aa(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ws(t,a,r,o),Wa=!1;var f=t.memoizedState;a.state=f,$a(t,r,a,i),Qa(),l=t.memoizedState,s||f!==l||Wa?(typeof d==`function`&&(Vs(t,n,d,r),l=t.memoizedState),(c=Wa||Us(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ka(e,t),o=t.memoizedProps,u=Gs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=fi,typeof l==`object`&&l&&(c=aa(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ws(t,a,r,c),Wa=!1,f=t.memoizedState,a.state=f,$a(t,r,a,i),Qa();var p=t.memoizedState;o!==d||f!==p||Wa||e!==null&&e.dependencies!==null&&ra(e.dependencies)?(typeof s==`function`&&(Vs(t,n,s,r),p=t.memoizedState),(u=Wa||Us(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&ra(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,fc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Ha(t,e.child,null,i),t.child=Ha(t,null,n,i)):nc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Dc(e,t,i),e}function gc(e,t,n,r){return Ki(),t.flags|=256,nc(e,t,n,r),t.child}var _c={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function vc(e){return{baseLanes:e,cachePool:Ta()}}function yc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Jl),e}function bc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(mo.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(F){if(a?lo(t):po(t),(e=Ri)?(e=rf(e,Bi),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ai===null?null:{id:ji,overflow:Mi},retryLane:536870912,hydrationErrors:null},n=bi(e),n.return=t,t.child=n,Li=t,Ri=null)):e=null,e===null)throw Hi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(po(t),a=t.mode,c=Sc({mode:`hidden`,children:c},a),r=vi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=vc(n),r.childLanes=yc(e,s,n),t.memoizedState=_c,sc(null,r)):(lo(t),xc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(lo(t),t.flags&=-257,t=Cc(e,t,n)):t.memoizedState===null?(po(t),c=r.fallback,a=t.mode,r=Sc({mode:`visible`,children:r.children},a),c=vi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Ha(t,e.child,null,n),r=t.child,r.memoizedState=vc(n),r.childLanes=yc(e,s,n),t.memoizedState=_c,t=sc(null,r)):(po(t),t.child=e.child,t.flags|=128,t=null);else if(lo(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Ji({value:r,source:null,stack:null}),t=Cc(e,t,n)}else if(tc||na(e,t,n,!1),s=(n&e.childLanes)!==0,tc||s){if(s=Rl,s!==null&&(r=ot(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,li(e,r),hu(s,e,r),ec;af(c)||Du(),t=Cc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Ri=cf(c.nextSibling),Li=t,F=!0,zi=null,Bi=!1,e!==null&&Ii(t,e),t=xc(t,r.children),t.flags|=4096);return t}return a?(po(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=hi(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=vi(c,a,n,null),c.flags|=2):c=hi(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,sc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=vc(n):(a=c.cachePool,a===null?a=Ta():(l=da._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=yc(e,s,n),t.memoizedState=_c,sc(e.child,r)):(lo(t),n=e.child,e=n.sibling,n=hi(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function xc(e,t){return t=Sc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Sc(e,t){return e=mi(22,e,null,t),e.lanes=0,e}function Cc(e,t,n){return Ha(t,e.child,null,n),e=xc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ea(e.return,t,n)}function Tc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Ec(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=mo.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,ue(mo,o),nc(e,t,r,n),r=F?Di:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wc(e,n,t);else if(e.tag===19)wc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ho(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Tc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ho(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Tc(t,!0,n,null,a,r);break;case`together`:Tc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Dc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Gl|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(na(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=hi(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=hi(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Oc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&ra(e))):!0}function kc(e,t,n){switch(t.tag){case 3:he(t,t.stateNode.containerInfo),Qi(t,da,e.memoizedState.cache),Ki();break;case 27:case 5:_e(t);break;case 4:he(t,t.stateNode.containerInfo);break;case 10:Qi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,uo(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(lo(t),e=Dc(e,t,n),e===null?null:e.sibling):bc(e,t,n):(lo(t),t.flags|=128,null);lo(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(na(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Ec(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ue(mo,mo.current),r)break;return null;case 22:return t.lanes=0,oc(e,t,n,t.pendingProps);case 24:Qi(t,da,e.memoizedState.cache)}return Dc(e,t,n)}function Ac(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)tc=!0;else{if(!Oc(e,n)&&!(t.flags&128))return tc=!1,kc(e,t,n);tc=!!(e.flags&131072)}else tc=!1,F&&t.flags&1048576&&Pi(t,Di,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=Ma(t.elementType),t.type=e,typeof e==`function`)N(e)?(r=Gs(e,r),t.tag=1,t=hc(null,t,e,r,n)):(t.tag=0,t=pc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=rc(null,t,e,r,n);break a}else if(a===D){t.tag=14,t=ic(null,t,e,r,n);break a}}throw t=re(e)||e,Error(i(306,t,``))}}return t;case 0:return pc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Gs(r,t.pendingProps),hc(e,t,r,a,n);case 3:a:{if(he(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ka(e,t),$a(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Qi(t,da,r),r!==o.cache&&ta(t,[da],n,!0),Qa(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=gc(e,t,r,n);break a}else if(r!==a){a=Ci(Error(i(424)),t),Ji(a),t=gc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Ri=cf(e.firstChild),Li=t,F=!0,zi=null,Bi=!0,n=Ua(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ki(),r===a){t=Dc(e,t,n);break a}nc(e,t,r,n)}t=t.child}return t;case 26:return fc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:F||(n=t.type,e=t.pendingProps,r=Bd(pe.current).createElement(n),r[ft]=t,r[pt]=e,Pd(r,n,e),Tt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return _e(t),e===null&&F&&(r=t.stateNode=ff(t.type,t.pendingProps,pe.current),Li=t,Bi=!0,a=Ri,Zd(t.type)?(lf=a,Ri=cf(r.firstChild)):Ri=a),nc(e,t,t.pendingProps.children,n),fc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&F&&((a=r=Ri)&&(r=tf(r,t.type,t.pendingProps,Bi),r===null?a=!1:(t.stateNode=r,Li=t,Ri=cf(r.firstChild),Bi=!1,a=!0)),a||Hi(t)),_e(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=Eo(e,t,ko,null,null,n),Qf._currentValue=a),fc(e,t),nc(e,t,r,n),t.child;case 6:return e===null&&F&&((e=n=Ri)&&(n=nf(n,t.pendingProps,Bi),n===null?e=!1:(t.stateNode=n,Li=t,Ri=null,e=!0)),e||Hi(t)),null;case 13:return bc(e,t,n);case 4:return he(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ha(t,null,r,n):nc(e,t,r,n),t.child;case 11:return rc(e,t,t.type,t.pendingProps,n);case 7:return nc(e,t,t.pendingProps,n),t.child;case 8:return nc(e,t,t.pendingProps.children,n),t.child;case 12:return nc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Qi(t,t.type,r.value),nc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,ia(t),a=aa(a),r=r(a),t.flags|=1,nc(e,t,r,n),t.child;case 14:return ic(e,t,t.type,t.pendingProps,n);case 15:return ac(e,t,t.type,t.pendingProps,n);case 19:return Ec(e,t,n);case 31:return dc(e,t,n);case 22:return oc(e,t,n,t.pendingProps);case 24:return ia(t),r=aa(da),e===null?(a=Ca(),a===null&&(a=Rl,o=fa(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},Ga(t),Qi(t,da,a)):((e.lanes&n)!==0&&(Ka(e,t),$a(t,null,null,n),Qa()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Qi(t,da,r),r!==a.cache&&ta(t,[da],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Qi(t,da,r))),nc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function jc(e){e.flags|=4}function Mc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(wu())e.flags|=8192;else throw Na=ka,Da}else e.flags&=-16777217}function Nc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(wu())e.flags|=8192;else throw Na=ka,Da}function Pc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:et(),e.lanes|=t,Yl|=t)}function Fc(e,t){if(!F)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ic(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Lc(e,t,n){var r=t.pendingProps;switch(P(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ic(t),null;case 1:return Ic(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),$i(da),ge(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Gi(t)?jc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,qi())),Ic(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(jc(t),o===null?(Ic(t),Mc(t,a,null,r,n)):(Ic(t),Nc(t,o))):o?o===e.memoizedState?(Ic(t),t.flags&=-16777217):(jc(t),Ic(t),Nc(t,o)):(e=e.memoizedProps,e!==r&&jc(t),Ic(t),Mc(t,a,e,r,n)),null;case 27:if(ve(t),n=pe.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&jc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Ic(t),null}e=de.current,Gi(t)?Ui(t,e):(e=ff(a,r,n),t.stateNode=e,jc(t))}return Ic(t),null;case 5:if(ve(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&jc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Ic(t),null}if(o=de.current,Gi(t))Ui(t,o);else{var s=Bd(pe.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[ft]=t,o[pt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&jc(t)}}return Ic(t),Mc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&jc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=pe.current,Gi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Li,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[ft]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||Md(e.nodeValue,n)),e||Hi(t,!0)}else e=Bd(e).createTextNode(r),e[ft]=t,t.stateNode=e}return Ic(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Gi(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[ft]=t}else Ki(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ic(t),e=!1}else n=qi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(I(t),t):(I(t),null);if(t.flags&128)throw Error(i(558))}return Ic(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Gi(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[ft]=t}else Ki(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ic(t),a=!1}else a=qi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(I(t),t):(I(t),null)}return I(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Pc(t,t.updateQueue),Ic(t),null);case 4:return ge(),e===null&&Sd(t.stateNode.containerInfo),Ic(t),null;case 10:return $i(t.type),Ic(t),null;case 19:if(le(mo),r=t.memoizedState,r===null)return Ic(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Fc(r,!1);else{if(Wl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ho(e),o!==null){for(t.flags|=128,Fc(r,!1),e=o.updateQueue,t.updateQueue=e,Pc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)gi(n,e),n=n.sibling;return ue(mo,mo.current&1|2),F&&Ni(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&je()>tu&&(t.flags|=128,a=!0,Fc(r,!1),t.lanes=4194304)}else{if(!a)if(e=ho(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Pc(t,e),Fc(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!F)return Ic(t),null}else 2*je()-r.renderingStartTime>tu&&n!==536870912&&(t.flags|=128,a=!0,Fc(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Ic(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=je(),e.sibling=null,n=mo.current,ue(mo,a?n&1|2:n&1),F&&Ni(t,r.treeForkCount),e);case 22:case 23:return I(t),oo(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Ic(t),t.subtreeFlags&6&&(t.flags|=8192)):Ic(t),n=t.updateQueue,n!==null&&Pc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&le(Sa),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),$i(da),Ic(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function Rc(e,t){switch(P(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return $i(da),ge(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return ve(t),null;case 31:if(t.memoizedState!==null){if(I(t),t.alternate===null)throw Error(i(340));Ki()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(I(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));Ki()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return le(mo),null;case 4:return ge(),null;case 10:return $i(t.type),null;case 22:case 23:return I(t),oo(),e!==null&&le(Sa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return $i(da),null;case 25:return null;default:return null}}function zc(e,t){switch(P(t),t.tag){case 3:$i(da),ge();break;case 26:case 27:case 5:ve(t);break;case 4:ge();break;case 31:t.memoizedState!==null&&I(t);break;case 13:I(t);break;case 19:le(mo);break;case 10:$i(t.type);break;case 22:case 23:I(t),oo(),e!==null&&le(Sa);break;case 24:$i(da)}}function Bc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Z(t,t.return,e)}}function Vc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Z(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Z(t,t.return,e)}}function Hc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{to(t,n)}catch(t){Z(e,e.return,t)}}}function Uc(e,t,n){n.props=Gs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Z(e,t,n)}}function Wc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Z(e,t,n)}}function Gc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Z(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Z(e,t,n)}else n.current=null}function Kc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Z(e,e.return,t)}}function qc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[pt]=t}catch(t){Z(e,e.return,t)}}function Jc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Yc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Jc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=on));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Xc(e,t,n),e=e.sibling;e!==null;)Xc(e,t,n),e=e.sibling}function Zc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Zc(e,t,n),e=e.sibling;e!==null;)Zc(e,t,n),e=e.sibling}function Qc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[ft]=e,t[pt]=n}catch(t){Z(e,e.return,t)}}var $c=!1,el=!1,tl=!1,nl=typeof WeakSet==`function`?WeakSet:Set,rl=null;function il(e,t){if(e=e.containerInfo,Rd=sp,e=Nr(e),Pr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,rl=t;rl!==null;)if(t=rl,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,rl=e;else for(;rl!==null;){switch(t=rl,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Gs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Z(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,rl=e;break}rl=t.return}}function al(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:yl(e,n),r&4&&Bc(5,n);break;case 1:if(yl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Z(n,n.return,e)}else{var i=Gs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Z(n,n.return,e)}}r&64&&Hc(n),r&512&&Wc(n,n.return);break;case 3:if(yl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{to(e,t)}catch(e){Z(n,n.return,e)}}break;case 27:t===null&&r&4&&Qc(n);case 26:case 5:yl(e,n),t===null&&r&4&&Kc(n),r&512&&Wc(n,n.return);break;case 12:yl(e,n);break;case 31:yl(e,n),r&4&&ul(e,n);break;case 13:yl(e,n),r&4&&dl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ju.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||$c,!r){t=t!==null&&t.memoizedState!==null||el,i=$c;var a=el;$c=r,(el=t)&&!a?xl(e,n,(n.subtreeFlags&8772)!=0):yl(e,n),$c=i,el=a}break;case 30:break;default:yl(e,n)}}function ol(e){var t=e.alternate;t!==null&&(e.alternate=null,ol(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&bt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var K=null,sl=!1;function cl(e,t,n){for(n=n.child;n!==null;)ll(e,t,n),n=n.sibling}function ll(e,t,n){if(Ve&&typeof Ve.onCommitFiberUnmount==`function`)try{Ve.onCommitFiberUnmount(Be,n)}catch{}switch(n.tag){case 26:el||Gc(n,t),cl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:el||Gc(n,t);var r=K,i=sl;Zd(n.type)&&(K=n.stateNode,sl=!1),cl(e,t,n),pf(n.stateNode),K=r,sl=i;break;case 5:el||Gc(n,t);case 6:if(r=K,i=sl,K=null,cl(e,t,n),K=r,sl=i,K!==null)if(sl)try{(K.nodeType===9?K.body:K.nodeName===`HTML`?K.ownerDocument.body:K).removeChild(n.stateNode)}catch(e){Z(n,t,e)}else try{K.removeChild(n.stateNode)}catch(e){Z(n,t,e)}break;case 18:K!==null&&(sl?(e=K,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(K,n.stateNode));break;case 4:r=K,i=sl,K=n.stateNode.containerInfo,sl=!0,cl(e,t,n),K=r,sl=i;break;case 0:case 11:case 14:case 15:Vc(2,n,t),el||Vc(4,n,t),cl(e,t,n);break;case 1:el||(Gc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Uc(n,t,r)),cl(e,t,n);break;case 21:cl(e,t,n);break;case 22:el=(r=el)||n.memoizedState!==null,cl(e,t,n),el=r;break;default:cl(e,t,n)}}function ul(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Z(t,t.return,e)}}}function dl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Z(t,t.return,e)}}function fl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new nl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new nl),t;default:throw Error(i(435,e.tag))}}function pl(e,t){var n=fl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Yu.bind(null,e,t);t.then(r,r)}})}function ml(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){K=c.stateNode,sl=!1;break a}break;case 5:K=c.stateNode,sl=!1;break a;case 3:case 4:K=c.stateNode.containerInfo,sl=!0;break a}c=c.return}if(K===null)throw Error(i(160));ll(o,s,a),K=null,sl=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)gl(t,e),t=t.sibling}var hl=null;function gl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ml(t,e),_l(e),r&4&&(Vc(3,e,e.return),Bc(3,e),Vc(5,e,e.return));break;case 1:ml(t,e),_l(e),r&512&&(el||n===null||Gc(n,n.return)),r&64&&$c&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=hl;if(ml(t,e),_l(e),r&512&&(el||n===null||Gc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[yt]||o[ft]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[ft]=e,Tt(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[ft]=e,Tt(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&qc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:ml(t,e),_l(e),r&512&&(el||n===null||Gc(n,n.return)),n!==null&&r&4&&qc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(ml(t,e),_l(e),r&512&&(el||n===null||Gc(n,n.return)),e.flags&32){a=e.stateNode;try{Zt(a,``)}catch(t){Z(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,qc(e,a,n===null?a:n.memoizedProps)),r&1024&&(tl=!0);break;case 6:if(ml(t,e),_l(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Z(e,e.return,t)}}break;case 3:if(Bf=null,a=hl,hl=gf(t.containerInfo),ml(t,e),hl=a,_l(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Z(e,e.return,t)}tl&&(tl=!1,vl(e));break;case 4:r=hl,hl=gf(e.stateNode.containerInfo),ml(t,e),_l(e),hl=r;break;case 12:ml(t,e),_l(e);break;case 31:ml(t,e),_l(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,pl(e,r)));break;case 13:ml(t,e),_l(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&($l=je()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,pl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=$c,d=el;if($c=u||a,el=d||l,ml(t,e),el=d,$c=u,_l(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||$c||el||bl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Z(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){Z(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){Z(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,pl(e,n))));break;case 19:ml(t,e),_l(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,pl(e,r)));break;case 30:break;case 21:break;default:ml(t,e),_l(e)}}function _l(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Jc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Zc(e,Yc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Zt(o,``),n.flags&=-33),Zc(e,Yc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Xc(e,Yc(e),s);break;default:throw Error(i(161))}}catch(t){Z(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;vl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function yl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)al(e,t.alternate,t),t=t.sibling}function bl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Vc(4,t,t.return),bl(t);break;case 1:Gc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Uc(t,t.return,n),bl(t);break;case 27:pf(t.stateNode);case 26:case 5:Gc(t,t.return),bl(t);break;case 22:t.memoizedState===null&&bl(t);break;case 30:bl(t);break;default:bl(t)}e=e.sibling}}function xl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:xl(i,a,n),Bc(4,a);break;case 1:if(xl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Z(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)eo(c[i],s)}catch(e){Z(r,r.return,e)}}n&&o&64&&Hc(a),Wc(a,a.return);break;case 27:Qc(a);case 26:case 5:xl(i,a,n),n&&r===null&&o&4&&Kc(a),Wc(a,a.return);break;case 12:xl(i,a,n);break;case 31:xl(i,a,n),n&&o&4&&ul(i,a);break;case 13:xl(i,a,n),n&&o&4&&dl(i,a);break;case 22:a.memoizedState===null&&xl(i,a,n),Wc(a,a.return);break;case 30:break;default:xl(i,a,n)}t=t.sibling}}function Sl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&pa(n))}function Cl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pa(e))}function wl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Tl(e,t,n,r),t=t.sibling}function Tl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:wl(e,t,n,r),i&2048&&Bc(9,t);break;case 1:wl(e,t,n,r);break;case 3:wl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&pa(e)));break;case 12:if(i&2048){wl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Z(t,t.return,e)}}else wl(e,t,n,r);break;case 31:wl(e,t,n,r);break;case 13:wl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?wl(e,t,n,r):(a._visibility|=2,El(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?wl(e,t,n,r):Dl(e,t),i&2048&&Sl(o,t);break;case 24:wl(e,t,n,r),i&2048&&Cl(t.alternate,t);break;default:wl(e,t,n,r)}}function El(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:El(a,o,s,c,i),Bc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,El(a,o,s,c,i)):u._visibility&2?El(a,o,s,c,i):Dl(a,o),i&&l&2048&&Sl(o.alternate,o);break;case 24:El(a,o,s,c,i),i&&l&2048&&Cl(o.alternate,o);break;default:El(a,o,s,c,i)}t=t.sibling}}function Dl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Dl(n,r),i&2048&&Sl(r.alternate,r);break;case 24:Dl(n,r),i&2048&&Cl(r.alternate,r);break;default:Dl(n,r)}t=t.sibling}}var Ol=8192;function kl(e,t,n){if(e.subtreeFlags&Ol)for(e=e.child;e!==null;)Al(e,t,n),e=e.sibling}function Al(e,t,n){switch(e.tag){case 26:kl(e,t,n),e.flags&Ol&&e.memoizedState!==null&&Gf(n,hl,e.memoizedState,e.memoizedProps);break;case 5:kl(e,t,n);break;case 3:case 4:var r=hl;hl=gf(e.stateNode.containerInfo),kl(e,t,n),hl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Ol,Ol=16777216,kl(e,t,n),Ol=r):kl(e,t,n));break;default:kl(e,t,n)}}function jl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ml(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];rl=r,Fl(r,e)}jl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Nl(e),e=e.sibling}function Nl(e){switch(e.tag){case 0:case 11:case 15:Ml(e),e.flags&2048&&Vc(9,e,e.return);break;case 3:Ml(e);break;case 12:Ml(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Pl(e)):Ml(e);break;default:Ml(e)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];rl=r,Fl(r,e)}jl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Vc(8,t,t.return),Pl(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Pl(t));break;default:Pl(t)}e=e.sibling}}function Fl(e,t){for(;rl!==null;){var n=rl;switch(n.tag){case 0:case 11:case 15:Vc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:pa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,rl=r;else a:for(n=e;rl!==null;){r=rl;var i=r.sibling,a=r.return;if(ol(r),r===n){rl=null;break a}if(i!==null){i.return=a,rl=i;break a}rl=a}}}var Il={getCacheForType:function(e){var t=aa(da),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return aa(da).controller.signal}},Ll=typeof WeakMap==`function`?WeakMap:Map,q=0,Rl=null,J=null,Y=0,X=0,zl=null,Bl=!1,Vl=!1,Hl=!1,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=null,Zl=null,Ql=!1,$l=0,eu=0,tu=1/0,nu=null,ru=null,iu=0,au=null,ou=null,su=0,cu=0,lu=null,uu=null,du=0,fu=null;function pu(){return q&2&&Y!==0?Y&-Y:j.T===null?lt():dd()}function mu(){if(Jl===0)if(!(Y&536870912)||F){var e=Je;Je<<=1,!(Je&3932160)&&(Je=262144),Jl=e}else Jl=536870912;return e=so.current,e!==null&&(e.flags|=32),Jl}function hu(e,t,n){(e===Rl&&(X===2||X===9)||e.cancelPendingCommit!==null)&&(Su(e,0),yu(e,Y,Jl,!1)),nt(e,n),(!(q&2)||e!==Rl)&&(e===Rl&&(!(q&2)&&(Kl|=n),Wl===4&&yu(e,Y,Jl,!1)),rd(e))}function gu(e,t,n){if(q&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||Qe(e,t),a=r?Au(e,t):Ou(e,t,!0),o=r;do{if(a===0){Vl&&!r&&yu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!vu(n)){a=Ou(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Xl;var l=c.current.memoizedState.isDehydrated;if(l&&(Su(c,s).flags|=256),s=Ou(c,s,!1),s!==2){if(Hl&&!l){c.errorRecoveryDisabledLanes|=o,Kl|=o,a=4;break a}o=Zl,Zl=a,o!==null&&(Zl===null?Zl=o:Zl.push.apply(Zl,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){Su(e,0),yu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:yu(r,t,Jl,!Bl);break a;case 2:Zl=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=$l+300-je(),10<a)){if(yu(r,t,Jl,!Bl),Ze(r,0,!0)!==0)break a;su=t,r.timeoutHandle=Kd(_u.bind(null,r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,`Throttled`,-0,0),a);break a}_u(r,n,Zl,nu,Ql,t,Jl,Kl,Yl,Bl,o,null,-0,0)}}break}while(1);rd(e)}function _u(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:on},Al(t,a,d);var m=(a&62914560)===a?$l-je():(a&4194048)===a?eu-je():0;if(m=qf(d,m),m!==null){su=a,e.cancelPendingCommit=m(Lu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),yu(e,a,o,!l);return}}Lu(e,t,a,n,r,i,o,s,c)}function vu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Or(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yu(e,t,n,r){t&=~ql,t&=~Kl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ue(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&it(e,n,t)}function bu(){return q&6?!0:(id(0,!1),!1)}function xu(){if(J!==null){if(X===0)var e=J.return;else e=J,Zi=Xi=null,Mo(e),Ia=null,La=0,e=J;for(;e!==null;)zc(e.alternate,e),e=e.return;J=null}}function Su(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),su=0,xu(),Rl=e,J=n=hi(e.current,null),Y=t,X=0,zl=null,Bl=!1,Vl=Qe(e,t),Hl=!1,Yl=Jl=ql=Kl=Gl=Wl=0,Zl=Xl=null,Ql=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ue(r),a=1<<i;t|=e[i],r&=~a}return Ul=t,oi(),n}function Cu(e,t){L=null,j.H=Ls,t===Ea||t===Oa?(t=Pa(),X=3):t===Da?(t=Pa(),X=4):X=t===ec?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,zl=t,J===null&&(Wl=1,Ys(e,Ci(t,e.current)))}function wu(){var e=so.current;return e===null?!0:(Y&4194048)===Y?co===null:(Y&62914560)===Y||Y&536870912?e===co:!1}function Tu(){var e=j.H;return j.H=Ls,e===null?Ls:e}function Eu(){var e=j.A;return j.A=Il,e}function Du(){Wl=4,Bl||(Y&4194048)!==Y&&so.current!==null||(Vl=!0),!(Gl&134217727)&&!(Kl&134217727)||Rl===null||yu(Rl,Y,Jl,!1)}function Ou(e,t,n){var r=q;q|=2;var i=Tu(),a=Eu();(Rl!==e||Y!==t)&&(nu=null,Su(e,t)),t=!1;var o=Wl;a:do try{if(X!==0&&J!==null){var s=J,c=zl;switch(X){case 8:xu(),o=6;break a;case 3:case 2:case 9:case 6:so.current===null&&(t=!0);var l=X;if(X=0,zl=null,Pu(e,s,c,l),n&&Vl){o=0;break a}break;default:l=X,X=0,zl=null,Pu(e,s,c,l)}}ku(),o=Wl;break}catch(t){Cu(e,t)}while(1);return t&&e.shellSuspendCounter++,Zi=Xi=null,q=r,j.H=i,j.A=a,J===null&&(Rl=null,Y=0,oi()),o}function ku(){for(;J!==null;)Mu(J)}function Au(e,t){var n=q;q|=2;var r=Tu(),a=Eu();Rl!==e||Y!==t?(nu=null,tu=je()+500,Su(e,t)):Vl=Qe(e,t);a:do try{if(X!==0&&J!==null){t=J;var o=zl;b:switch(X){case 1:X=0,zl=null,Pu(e,t,o,1);break;case 2:case 9:if(Aa(o)){X=0,zl=null,Nu(t);break}t=function(){X!==2&&X!==9||Rl!==e||(X=7),rd(e)},o.then(t,t);break a;case 3:X=7;break a;case 4:X=5;break a;case 7:Aa(o)?(X=0,zl=null,Nu(t)):(X=0,zl=null,Pu(e,t,o,7));break;case 5:var s=null;switch(J.tag){case 26:s=J.memoizedState;case 5:case 27:var c=J;if(s?Wf(s):c.stateNode.complete){X=0,zl=null;var l=c.sibling;if(l!==null)J=l;else{var u=c.return;u===null?J=null:(J=u,Fu(u))}break b}}X=0,zl=null,Pu(e,t,o,5);break;case 6:X=0,zl=null,Pu(e,t,o,6);break;case 8:xu(),Wl=6;break a;default:throw Error(i(462))}}ju();break}catch(t){Cu(e,t)}while(1);return Zi=Xi=null,j.H=r,j.A=a,q=n,J===null?(Rl=null,Y=0,oi(),Wl):0}function ju(){for(;J!==null&&!ke();)Mu(J)}function Mu(e){var t=Ac(e.alternate,e,Ul);e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Nu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=mc(n,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=mc(n,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:Mo(t);default:zc(n,t),t=J=gi(t,Ul),t=Ac(n,t,Ul)}e.memoizedProps=e.pendingProps,t===null?Fu(e):J=t}function Pu(e,t,n,r){Zi=Xi=null,Mo(t),Ia=null,La=0;var i=t.return;try{if($s(e,i,t,n,Y)){Wl=1,Ys(e,Ci(n,e.current)),J=null;return}}catch(t){if(i!==null)throw J=i,t;Wl=1,Ys(e,Ci(n,e.current)),J=null;return}t.flags&32768?(F||r===1?e=!0:Vl||Y&536870912?e=!1:(Bl=e=!0,(r===2||r===9||r===3||r===6)&&(r=so.current,r!==null&&r.tag===13&&(r.flags|=16384))),Iu(t,e)):Fu(t)}function Fu(e){var t=e;do{if(t.flags&32768){Iu(t,Bl);return}e=t.return;var n=Lc(t.alternate,t,Ul);if(n!==null){J=n;return}if(t=t.sibling,t!==null){J=t;return}J=t=e}while(t!==null);Wl===0&&(Wl=5)}function Iu(e,t){do{var n=Rc(e.alternate,e);if(n!==null){n.flags&=32767,J=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){J=e;return}J=e=n}while(e!==null);Wl=6,J=null}function Lu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Hu();while(iu!==0);if(q&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ai,rt(e,n,o,s,c,l),e===Rl&&(J=Rl=null,Y=0),ou=t,au=e,su=n,cu=o,lu=a,uu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Xu(Fe,function(){return Uu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=j.T,j.T=null,a=M.p,M.p=2,s=q,q|=4;try{il(e,t,n)}finally{q=s,M.p=a,j.T=r}}iu=1,Ru(),zu(),Bu()}}function Ru(){if(iu===1){iu=0;var e=au,t=ou,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=j.T,j.T=null;var r=M.p;M.p=2;var i=q;q|=4;try{gl(t,e);var a=zd,o=Nr(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Mr(s.ownerDocument.documentElement,s)){if(c!==null&&Pr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=jr(s,h),v=jr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{q=i,M.p=r,j.T=n}}e.current=t,iu=2}}function zu(){if(iu===2){iu=0;var e=au,t=ou,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=j.T,j.T=null;var r=M.p;M.p=2;var i=q;q|=4;try{al(e,t.alternate,t)}finally{q=i,M.p=r,j.T=n}}iu=3}}function Bu(){if(iu===4||iu===3){iu=0,Ae();var e=au,t=ou,n=su,r=uu;t.subtreeFlags&10256||t.flags&10256?iu=5:(iu=0,ou=au=null,Vu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ru=null),ct(n),t=t.stateNode,Ve&&typeof Ve.onCommitFiberRoot==`function`)try{Ve.onCommitFiberRoot(Be,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=j.T,i=M.p,M.p=2,j.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{j.T=t,M.p=i}}su&3&&Hu(),rd(e),i=e.pendingLanes,n&261930&&i&42?e===fu?du++:(du=0,fu=e):du=0,id(0,!1)}}function Vu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,pa(t)))}function Hu(){return Ru(),zu(),Bu(),Uu()}function Uu(){if(iu!==5)return!1;var e=au,t=cu;cu=0;var n=ct(su),r=j.T,a=M.p;try{M.p=32>n?32:n,j.T=null,n=lu,lu=null;var o=au,s=su;if(iu=0,ou=au=null,su=0,q&6)throw Error(i(331));var c=q;if(q|=4,Nl(o.current),Tl(o,o.current,s,n),q=c,id(0,!1),Ve&&typeof Ve.onPostCommitFiberRoot==`function`)try{Ve.onPostCommitFiberRoot(Be,o)}catch{}return!0}finally{M.p=a,j.T=r,Vu(e,t)}}function Wu(e,t,n){t=Ci(n,t),t=Xs(e.stateNode,t,2),e=Ja(e,t,2),e!==null&&(nt(e,2),rd(e))}function Z(e,t,n){if(e.tag===3)Wu(e,e,n);else for(;t!==null;){if(t.tag===3){Wu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ru===null||!ru.has(r))){e=Ci(n,e),n=Zs(2),r=Ja(t,n,2),r!==null&&(Qs(n,r,t,e),nt(r,2),rd(r));break}}t=t.return}}function Gu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ll;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Hl=!0,i.add(n),e=Ku.bind(null,e,t,n),t.then(e,e))}function Ku(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Rl===e&&(Y&n)===n&&(Wl===4||Wl===3&&(Y&62914560)===Y&&300>je()-$l?!(q&2)&&Su(e,0):ql|=n,Yl===Y&&(Yl=0)),rd(e)}function qu(e,t){t===0&&(t=et()),e=li(e,t),e!==null&&(nt(e,t),rd(e))}function Ju(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qu(e,n)}function Yu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),qu(e,n)}function Xu(e,t){return De(e,t)}var Zu=null,Qu=null,$u=!1,ed=!1,td=!1,nd=0;function rd(e){e!==Qu&&e.next===null&&(Qu===null?Zu=Qu=e:Qu=Qu.next=e),ed=!0,$u||($u=!0,ud())}function id(e,t){if(!td&&ed){td=!0;do for(var n=!1,r=Zu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ue(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ld(r,a))}else a=Y,a=Ze(r,r===Rl?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Qe(r,a)||(n=!0,ld(r,a));r=r.next}while(n);td=!1}}function ad(){od()}function od(){ed=$u=!1;var e=0;nd!==0&&Gd()&&(e=nd);for(var t=je(),n=null,r=Zu;r!==null;){var i=r.next,a=sd(r,t);a===0?(r.next=null,n===null?Zu=i:n.next=i,i===null&&(Qu=n)):(n=r,(e!==0||a&3)&&(ed=!0)),r=i}iu!==0&&iu!==5||id(e,!1),nd!==0&&(nd=0)}function sd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ue(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=$e(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Rl,n=Y,n=Ze(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(X===2||X===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Oe(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Qe(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&Oe(r),ct(n)){case 2:case 8:n=Pe;break;case 32:n=Fe;break;case 268435456:n=Le;break;default:n=Fe}return r=cd.bind(null,e),n=De(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&Oe(r),e.callbackPriority=2,e.callbackNode=null,2}function cd(e,t){if(iu!==0&&iu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Hu()&&e.callbackNode!==n)return null;var r=Y;return r=Ze(e,e===Rl?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(gu(e,r,t),sd(e,je()),e.callbackNode!=null&&e.callbackNode===n?cd.bind(null,e):null)}function ld(e,t){if(Hu())return null;gu(e,t,!0)}function ud(){Yd(function(){q&6?De(Ne,ad):od()})}function dd(){if(nd===0){var e=ga;e===0&&(e=qe,qe<<=1,!(qe&261888)&&(qe=256)),nd=e}return nd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:an(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[pt]||null).action),o=r.submitter;o&&(t=(t=o[pt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new Dn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(nd!==0){var e=o?pd(i,o):new FormData(i);Os(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Os(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<ei.length;hd++){var gd=ei[hd];ti(gd.toLowerCase(),`on`+(gd[0].toUpperCase()+gd.slice(1)))}ti(Kr,`onAnimationEnd`),ti(qr,`onAnimationIteration`),ti(Jr,`onAnimationStart`),ti(`dblclick`,`onDoubleClick`),ti(`focusin`,`onFocus`),ti(`focusout`,`onBlur`),ti(Yr,`onTransitionRun`),ti(Xr,`onTransitionStart`),ti(Zr,`onTransitionCancel`),ti(Qr,`onTransitionEnd`),kt(`onMouseEnter`,[`mouseout`,`mouseover`]),kt(`onMouseLeave`,[`mouseout`,`mouseover`]),kt(`onPointerEnter`,[`pointerout`,`pointerover`]),kt(`onPointerLeave`,[`pointerout`,`pointerover`]),Ot(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),Ot(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),Ot(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),Ot(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),Ot(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),Ot(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var _d=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),vd=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(_d));function yd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ni(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){ni(e)}i.currentTarget=null,a=c}}}}function Q(e,t){var n=t[ht];n===void 0&&(n=t[ht]=new Set);var r=e+`__bubble`;n.has(r)||(Cd(t,e,2,!1),n.add(r))}function bd(e,t,n){var r=0;t&&(r|=4),Cd(n,e,r,t)}var xd=`_reactListening`+Math.random().toString(36).slice(2);function Sd(e){if(!e[xd]){e[xd]=!0,Et.forEach(function(t){t!==`selectionchange`&&(vd.has(t)||bd(t,!1,e),bd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[xd]||(t[xd]=!0,bd(`selectionchange`,!1,t))}}function Cd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!gn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function wd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=xt(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}pn(function(){var r=a,i=cn(n),s=[];a:{var c=$r.get(e);if(c!==void 0){var l=Dn,u=e;switch(e){case`keypress`:if(Sn(n)===0)break a;case`keydown`:case`keyup`:l=Gn;break;case`focusin`:u=`focus`,l=In;break;case`focusout`:u=`blur`,l=In;break;case`beforeblur`:case`afterblur`:l=In;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=Pn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Fn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=qn;break;case Kr:case qr:case Jr:l=Ln;break;case Qr:l=Jn;break;case`scroll`:case`scrollend`:l=kn;break;case`wheel`:l=Yn;break;case`copy`:case`cut`:case`paste`:l=Rn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Kn;break;case`toggle`:case`beforetoggle`:l=Xn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=mn(m,p),g!=null&&d.push(Td(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==sn&&(u=n.relatedTarget||n.fromElement)&&(xt(u)||u[mt]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?xt(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=Pn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Kn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:Ct(l),h=u==null?c:Ct(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,xt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Dd,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Od(s,c,l,d,!1),u!==null&&f!==null&&Od(s,f,u,d,!0)}}a:{if(c=r?Ct(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=gr;else if(ur(c))if(_r)v=Er;else{v=wr;var y=Cr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&tn(r.elementType)&&(v=gr):v=Tr;if(v&&=v(e,r)){dr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&qt(c,`number`,c.value)}switch(y=r?Ct(r):window,e){case`focusin`:(ur(y)||y.contentEditable===`true`)&&(Ir=y,Lr=r,Rr=null);break;case`focusout`:Rr=Lr=Ir=null;break;case`mousedown`:zr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:zr=!1,Br(s,n,i);break;case`selectionchange`:if(Fr)break;case`keydown`:case`keyup`:Br(s,n,i)}var b;if(Qn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else or?ir(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(tr&&n.locale!==`ko`&&(or||x!==`onCompositionStart`?x===`onCompositionEnd`&&or&&(b=xn()):(vn=i,yn=`value`in vn?vn.value:vn.textContent,or=!0)),y=Ed(r,x),0<y.length&&(x=new zn(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=ar(n),b!==null&&(x.data=b)))),(b=er?sr(e,n):cr(e,n))&&(x=Ed(r,`onBeforeInput`),0<x.length&&(y=new zn(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}yd(s,t)})}function Td(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ed(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=mn(e,n),i!=null&&r.unshift(Td(e,i,a)),i=mn(e,t),i!=null&&r.push(Td(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Dd(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Od(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=mn(n,a),l!=null&&o.unshift(Td(n,l,c))):i||(l=mn(n,a),l!=null&&o.push(Td(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var kd=/\r\n?/g,Ad=/\u0000|\uFFFD/g;function jd(e){return(typeof e==`string`?e:``+e).replace(kd,`
`).replace(Ad,``)}function Md(e,t){return t=jd(t),jd(e)===t}function $(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Zt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Zt(e,``+r);break;case`className`:Ft(e,`class`,r);break;case`tabIndex`:Ft(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:Ft(e,n,r);break;case`style`:en(e,r,o);break;case`data`:if(t!==`object`){Ft(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=an(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&$(e,t,`name`,a.name,a,null),$(e,t,`formEncType`,a.formEncType,a,null),$(e,t,`formMethod`,a.formMethod,a,null),$(e,t,`formTarget`,a.formTarget,a,null)):($(e,t,`encType`,a.encType,a,null),$(e,t,`method`,a.method,a,null),$(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=an(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=on);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=an(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:Q(`beforetoggle`,e),Q(`toggle`,e),Pt(e,`popover`,r);break;case`xlinkActuate`:It(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:It(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:It(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:It(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:It(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:It(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:It(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:It(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:It(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Pt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=nn.get(n)||n,Pt(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:en(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Zt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Zt(e,``+r);break;case`onScroll`:r!=null&&Q(`scroll`,e);break;case`onScrollEnd`:r!=null&&Q(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=on);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Dt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[pt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Pt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:Q(`error`,e),Q(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,o,s,n,null)}}a&&$(e,t,`srcSet`,n.srcSet,n,null),r&&$(e,t,`src`,n.src,n,null);return;case`input`:Q(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:$(e,t,r,d,n,null)}}Kt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in Q(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:$(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Jt(e,!!r,n,!0):Jt(e,!!r,t,!1);return;case`textarea`:for(s in Q(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:$(e,t,s,c,n,null)}Xt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:$(e,t,l,r,n,null)}return;case`dialog`:Q(`beforetoggle`,e),Q(`toggle`,e),Q(`cancel`,e),Q(`close`,e);break;case`iframe`:case`object`:Q(`load`,e);break;case`video`:case`audio`:for(r=0;r<_d.length;r++)Q(_d[r],e);break;case`image`:Q(`error`,e),Q(`load`,e);break;case`details`:Q(`toggle`,e);break;case`embed`:case`source`:case`link`:Q(`error`,e),Q(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:$(e,t,u,r,n,null)}return;default:if(tn(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&$(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||$(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&$(e,t,p,m,r,f)}}Gt(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||$(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&$(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Jt(e,!!n,n?[]:``,!1):Jt(e,!!n,t,!0)):Jt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:$(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&$(e,t,s,a,r,o)}Yt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:$(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:$(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&$(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:$(e,t,u,p,r,m)}return;default:if(tn(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&$(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||$(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[yt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),bt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[yt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);bt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=M.d;M.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=bu();return e||t}function yf(e){var t=St(e);t!==null&&t.tag===5&&t.type===`form`?ks(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Wt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Tt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Wt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Wt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Wt(n.imageSizes)+`"]`)):i+=`[href="`+Wt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=m({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Tt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Wt(r)+`"][href="`+Wt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=m({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Tt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=wt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=m({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Tt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=wt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=m({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Tt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=wt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=m({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Tt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=pe.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=wt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=wt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=wt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Wt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return m({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Tt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Wt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Wt(n.href)+`"]`);if(r)return t.instance=r,Tt(r),r;var a=m({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Tt(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,Tt(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),Tt(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,Tt(a),a):(r=n,(a=mf.get(o))&&(r=m({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Tt(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[yt]||a[ft]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Tt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Tt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=tt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tt(0),this.hiddenUpdates=tt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=mi(3,null,null,t),e.current=a,a.stateNode=e,t=fa(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},Ga(a),e}function tp(e){return e?(e=fi,e):fi}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=qa(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ja(e,r,t),n!==null&&(hu(n,e,t),Ya(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=li(e,67108864);t!==null&&hu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=pu();t=st(t);var n=li(e,t);n!==null&&hu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=j.T;j.T=null;var a=M.p;try{M.p=2,up(e,t,n,r)}finally{M.p=a,j.T=i}}function lp(e,t,n,r){var i=j.T;j.T=null;var a=M.p;try{M.p=8,up(e,t,n,r)}finally{M.p=a,j.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)wd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=St(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Xe(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ue(o);s.entanglements[1]|=c,o&=~c}rd(a),!(q&6)&&(tu=je()+500,id(0,!1))}}break;case 31:case 13:s=li(a,2),s!==null&&hu(s,a,2),bu(),ip(a,2)}if(a=dp(r),a===null&&wd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else wd(e,t,r,null,n)}}function dp(e){return e=cn(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=xt(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Me()){case Ne:return 2;case Pe:return 8;case Fe:case Ie:return 32;case Le:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=St(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=xt(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,ut(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,ut(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);sn=r,n.target.dispatchEvent(r),sn=null}else return t=St(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=St(n);a!==null&&(e.splice(t,3),t-=3,Os(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[pt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[pt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,pu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),bu(),t[mt]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=lt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.8`)throw Error(i(527,Lp,`19.2.8`));M.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=u(t),e=e===null?null:f(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.8`,rendererPackageName:`react-dom`,currentDispatcherRef:j,reconcilerVersion:`19.2.8`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Be=zp.inject(Rp),Ve=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Ks,s=qs,c=Js;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[mt]=t.current,Sd(e),new Fp(t)}})),_=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=g()})),v=l(d(),1),y=_(),b=`modulepreload`,x=function(e){return`/`+e},S={},C=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?import.meta.resolve(e):new URL(e,import.meta.url).href}r=o(t.map(t=>{if(t=x(t,n),t=s(t),t in S)return;S[t]=!0;let r=t.endsWith(`.css`);for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}let i=document.createElement(`link`);if(i.rel=r?`stylesheet`:b,r||(i.as=`script`),i.crossOrigin=``,i.href=t,a&&i.setAttribute(`nonce`,a),document.head.appendChild(i),r)return new Promise((e,n)=>{i.addEventListener(`load`,e),i.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},w=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,T=/^[\\/]{2}/;function E(e,t){return t+e.replace(/\\/g,`/`)}var D=`popstate`;function O(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function ee(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return re(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:ie(t)}return M(t,n,null,e)}function k(e,t){if(e===!1||e==null)throw Error(t)}function A(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function te(){return Math.random().toString(36).substring(2,10)}function ne(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function re(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?j(t):t,state:n,key:t&&t.key||r||te(),mask:i}}function ie({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function j(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function M(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=O(e)?e:re(h.location,e,t);n&&n(r,e),l=u()+1;let d=ne(r,l),f=h.createHref(r.mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=O(e)?e:re(h.location,e,t);n&&n(r,e),l=u();let i=ne(r,l),d=h.createHref(r.mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return ae(i,e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(D,d),c=e,()=>{i.removeEventListener(D,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function ae(e,t,n=!1){let r=`http://localhost`;e&&(r=e.location.origin===`null`?e.location.href:e.location.origin),k(r,`No window.location.(origin|href) available to create URL`);let i=typeof t==`string`?t:ie(t);return i=i.replace(/ $/,`%20`),!n&&T.test(i)&&(i=r+i),new URL(i,r)}function oe(e,t,n=`/`){return se(e,t,n,!1)}function se(e,t,n,r,i){let a=De((typeof t==`string`?j(t):t).pathname||`/`,n);if(a==null)return null;let o=i??le(e),s=null,c=Ee(a);for(let e=0;s==null&&e<o.length;++e)s=Se(o[e],c,r);return s}function ce(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function le(e){let t=ue(e);return fe(t),t}function ue(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;k(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Fe([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(k(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),ue(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:be(l,e.index),routesMeta:u.map((e,t)=>{let[n,r]=Te(e.relativePath,e.caseSensitive,t===u.length-1);return{...e,matcher:n,compiledParams:r}})})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of de(e.path))a(e,t,!0,n)}),t}function de(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=de(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function fe(e){e.sort((e,t)=>e.score===t.score?xe(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var pe=/^:[\w-]+$/,me=3,he=2,ge=1,_e=10,ve=-2,ye=e=>e===`*`;function be(e,t){let n=e.split(`/`),r=n.length;return n.some(ye)&&(r+=ve),t&&(r+=he),n.filter(e=>!ye(e)).reduce((e,t)=>e+(pe.test(t)?me:t===``?ge:_e),r)}function xe(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function Se(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u={path:s.relativePath,caseSensitive:s.caseSensitive,end:c},d=s.matcher&&s.compiledParams?we(u,l,s.matcher,s.compiledParams):Ce(u,l),f=s.route;if(!d&&c&&n&&!r[r.length-1].route.index&&(d=Ce({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!d)return null;Object.assign(i,d.params),o.push({params:i,pathname:Fe([a,d.pathname]),pathnameBase:Le(Fe([a,d.pathnameBase])),route:f}),d.pathnameBase!==`/`&&(a=Fe([a,d.pathnameBase]))}return o}function Ce(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Te(e.path,e.caseSensitive,e.end);return we(e,t,n,r)}function we(e,t,n,r){let i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function Te(e,t=!1,n=!0){A(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function Ee(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return A(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function De(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}function Oe(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?j(e):e,a;return n?(n=Pe(n),a=n.startsWith(`/`)?ke(n.substring(1),`/`):ke(n,t)):a=t,{pathname:a,search:Re(r),hash:ze(i)}}function ke(e,t){let n=Ie(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Ae(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function je(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Me(e){let t=je(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Ne(e,t,n,r=!1){let i;typeof e==`string`?i=j(e):(i={...e},k(!i.pathname||!i.pathname.includes(`?`),Ae(`?`,`pathname`,`search`,i)),k(!i.pathname||!i.pathname.includes(`#`),Ae(`#`,`pathname`,`hash`,i)),k(!i.search||!i.search.includes(`#`),Ae(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=Oe(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Pe=e=>e.replace(/[\\/]{2,}/g,`/`),Fe=e=>Pe(e.join(`/`)),Ie=e=>e.replace(/\/+$/,``),Le=e=>Ie(e).replace(/^\/*/,`/`),Re=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,ze=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,Be=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Ve(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function He(e){return Fe(e.map(e=>e.route.path).filter(Boolean))||`/`}var Ue=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function We(e,t){let n=e;if(typeof n!=`string`||!w.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(Ue)try{let e=new URL(window.location.href),r=T.test(n)?new URL(E(n,e.protocol)):new URL(n),a=De(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{A(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var Ge=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(Ge);var Ke=[`GET`,...Ge];new Set(Ke);var qe=[`about:`,`blob:`,`chrome:`,`chrome-untrusted:`,`content:`,`data:`,`devtools:`,`file:`,`filesystem:`,`javascript:`];function Je(e){try{return qe.includes(new URL(e).protocol)}catch{return!1}}var Ye=v.createContext(null);Ye.displayName=`DataRouter`;var Xe=v.createContext(null);Xe.displayName=`DataRouterState`;var Ze=v.createContext(!1);function Qe(){return v.useContext(Ze)}var $e=v.createContext({isTransitioning:!1});$e.displayName=`ViewTransition`;var et=v.createContext(new Map);et.displayName=`Fetchers`;var tt=v.createContext(null);tt.displayName=`Await`;var nt=v.createContext(null);nt.displayName=`Navigation`;var rt=v.createContext(null);rt.displayName=`Location`;var it=v.createContext({outlet:null,matches:[],isDataRoute:!1});it.displayName=`Route`;var at=v.createContext(null);at.displayName=`RouteError`;var ot=`REACT_ROUTER_ERROR`,st=`REDIRECT`,ct=`ROUTE_ERROR_RESPONSE`;function lt(e){if(e.startsWith(`${ot}:${st}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function ut(e){if(e.startsWith(`${ot}:${ct}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new Be(t.status,t.statusText,t.data)}catch{}}function dt(e,{relative:t}={}){k(ft(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=v.useContext(nt),{hash:i,pathname:a,search:o}=yt(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Fe([n,a])),r.createHref({pathname:s,search:o,hash:i})}function ft(){return v.useContext(rt)!=null}function pt(){return k(ft(),`useLocation() may be used only in the context of a <Router> component.`),v.useContext(rt).location}var mt=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function ht(e){v.useContext(nt).static||v.useLayoutEffect(e)}function gt(){let{isDataRoute:e}=v.useContext(it);return e?Rt():_t()}function _t(){k(ft(),`useNavigate() may be used only in the context of a <Router> component.`);let e=v.useContext(Ye),{basename:t,navigator:n}=v.useContext(nt),{matches:r}=v.useContext(it),{pathname:i}=pt(),a=JSON.stringify(Me(r)),o=v.useRef(!1);return ht(()=>{o.current=!0}),v.useCallback((r,s={})=>{if(A(o.current,mt),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Ne(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Fe([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}v.createContext(null);function vt(){let{matches:e}=v.useContext(it);return e[e.length-1]?.params??{}}function yt(e,{relative:t}={}){let{matches:n}=v.useContext(it),{pathname:r}=pt(),i=JSON.stringify(Me(n));return v.useMemo(()=>Ne(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function bt(e,t){return xt(e,t)}function xt(e,t,n){k(ft(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=v.useContext(nt),{matches:i}=v.useContext(it),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Bt(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=pt(),d;if(t){let e=typeof t==`string`?j(t):t;k(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=n&&n.state.matches.length?n.state.matches.map(e=>Object.assign(e,{route:n.manifest[e.route.id]||e.route})):oe(e,{pathname:p});A(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),A(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=Ot(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Fe([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Fe([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?v.createElement(rt.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,mask:void 0,...d},navigationType:`POP`}},h):h}function St(){let e=Lt(),t=Ve(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=v.createElement(v.Fragment,null,v.createElement(`p`,null,`💿 Hey developer 👋`),v.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,v.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,v.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),v.createElement(v.Fragment,null,v.createElement(`h2`,null,`Unexpected Application Error!`),v.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?v.createElement(`pre`,{style:i},n):null,o)}var Ct=v.createElement(St,null),wt=class extends v.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=ut(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:v.createElement(it.Provider,{value:this.props.routeContext},v.createElement(at.Provider,{value:e,children:this.props.component}));return this.context?v.createElement(Et,{error:e},t):t}};wt.contextType=Ze;var Tt=new WeakMap;function Et({children:e,error:t}){let{basename:n}=v.useContext(nt);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=lt(t.digest);if(e){let r=Tt.get(t);if(r)throw r;let i=We(e.location,n),a=i.absoluteURL||i.to;if(Je(a))throw Error(`Invalid redirect location`);if(Ue&&!Tt.get(t))if(i.isExternal||e.reloadDocument)window.location.href=a;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw Tt.set(t,n),n}return v.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${a}`})}}return e}function Dt({routeContext:e,match:t,children:n}){let r=v.useContext(Ye);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),v.createElement(it.Provider,{value:e},n)}function Ot(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);k(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},pattern:He(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||Ct,o&&(s<0&&c===0?(Bt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?v.createElement(n.route.Component,null):n.route.element?n.route.element:e,v.createElement(Dt,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?v.createElement(wt,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function kt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function At(e){let t=v.useContext(Ye);return k(t,kt(e)),t}function jt(e){let t=v.useContext(Xe);return k(t,kt(e)),t}function Mt(e){let t=v.useContext(it);return k(t,kt(e)),t}function Nt(e){let t=Mt(e),n=t.matches[t.matches.length-1];return k(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Pt(){return Nt(`useRouteId`)}function Ft(){let e=jt(`useNavigation`);return v.useMemo(()=>{let{matches:t,historyAction:n,...r}=e.navigation;return r},[e.navigation])}function It(){let{matches:e,loaderData:t}=jt(`useMatches`);return v.useMemo(()=>e.map(e=>ce(e,t)),[e,t])}function Lt(){let e=v.useContext(at),t=jt(`useRouteError`),n=Nt(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Rt(){let{router:e}=At(`useNavigate`),t=Nt(`useNavigate`),n=v.useRef(!1);return ht(()=>{n.current=!0}),v.useCallback(async(r,i={})=>{A(n.current,mt),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var zt={};function Bt(e,t,n){!t&&!zt[e]&&(zt[e]=!0,A(!1,n))}v.memo(Vt);function Vt({routes:e,manifest:t,future:n,state:r,isStatic:i,onError:a}){return xt(e,void 0,{manifest:t,state:r,isStatic:i,onError:a,future:n})}function Ht({to:e,replace:t,state:n,relative:r}){k(ft(),`<Navigate> may be used only in the context of a <Router> component.`);let{static:i}=v.useContext(nt);A(!i,`<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`);let{matches:a}=v.useContext(it),{pathname:o}=pt(),s=gt(),c=Ne(e,Me(a),o,r===`path`),l=JSON.stringify(c);return v.useEffect(()=>{s(JSON.parse(l),{replace:t,state:n,relative:r})},[s,l,r,t,n]),null}function Ut(e){k(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function Wt({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,useTransitions:o}){k(!ft(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=v.useMemo(()=>({basename:s,navigator:i,static:a,useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=j(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,mask:m}=n,h=v.useMemo(()=>{let e=De(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return A(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:v.createElement(nt.Provider,{value:c},v.createElement(rt.Provider,{children:t,value:h}))}function Gt({children:e,location:t}){return bt(Kt(e),t)}v.Component;function Kt(e,t=[]){let n=[];return v.Children.forEach(e,(e,r)=>{if(!v.isValidElement(e))return;let i=[...t,r];if(e.type===v.Fragment){n.push.apply(n,Kt(e.props.children,i));return}k(e.type===Ut,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),k(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Kt(e.props.children,i)),n.push(a)}),n}var qt=`get`,Jt=`application/x-www-form-urlencoded`;function Yt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Xt(e){return Yt(e)&&e.tagName.toLowerCase()===`button`}function Zt(e){return Yt(e)&&e.tagName.toLowerCase()===`form`}function Qt(e){return Yt(e)&&e.tagName.toLowerCase()===`input`}function $t(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function en(e,t){return e.button===0&&(!t||t===`_self`)&&!$t(e)}var tn=null;function nn(){if(tn===null)try{new FormData(document.createElement(`form`),0),tn=!1}catch{tn=!0}return tn}var rn=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function an(e){return e!=null&&!rn.has(e)?(A(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Jt}"`),null):e}function on(e,t){let n,r,i,a,o;if(Zt(e)){let o=e.getAttribute(`action`);r=o?De(o,t):null,n=e.getAttribute(`method`)||qt,i=an(e.getAttribute(`enctype`))||Jt,a=new FormData(e)}else if(Xt(e)||Qt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?De(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||qt,i=an(e.getAttribute(`formenctype`))||an(o.getAttribute(`enctype`))||Jt,a=new FormData(o,e),!nn()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Yt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=qt,r=null,i=Jt,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var sn={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},cn=/[&><\u2028\u2029]/g;function ln(e){return e.replace(cn,e=>sn[e])}function un(e,t){if(e===!1||e==null)throw Error(t)}function dn(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&De(i.pathname,t)===`/`?i.pathname=`${Ie(t)}/_root.${r}`:i.pathname=`${Ie(i.pathname)}.${r}`,i}async function fn(e,t){if(e.id in t)return t[e.id];try{let n=await C(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function pn(e){return e!=null&&typeof e.page==`string`}function mn(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function hn(e,t,n){return bn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await fn(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(mn).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function gn(e,t,n,r,i,a){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function _n(e,t,{includeHydrateFallback:n}={}){return vn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function vn(e){return[...new Set(e)]}function yn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function bn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!pn(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(yn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function xn(){let e=v.useContext(Ye);return un(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function Sn(){let e=v.useContext(Xe);return un(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var Cn=v.createContext(void 0);Cn.displayName=`FrameworkContext`;function wn(){let e=v.useContext(Cn);return un(e,`You must render this element inside a <HydratedRouter> element`),e}function Tn(e,t){let n=v.useContext(Cn),[r,i]=v.useState(!1),[a,o]=v.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=v.useRef(null);v.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),v.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:En(s,p),onBlur:En(c,m),onMouseEnter:En(l,p),onMouseLeave:En(u,m),onTouchStart:En(d,p)}]:[a,f,{}]:[!1,f,{}]}function En(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Dn({page:e,...t}){let n=Qe(),{nonce:r}=wn(),{router:i}=xn(),a=v.useMemo(()=>oe(i.routes,e,i.basename),[i.routes,e,i.basename]);return a?(t.nonce==null&&r&&(t={...t,nonce:r}),n?v.createElement(kn,{page:e,matches:a,...t}):v.createElement(An,{page:e,matches:a,...t})):null}function On(e){let{manifest:t,routeModules:n}=wn(),[r,i]=v.useState([]);return v.useEffect(()=>{let r=!1;return hn(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function kn({page:e,matches:t,...n}){let r=pt(),{future:i}=wn(),{basename:a}=xn(),o=v.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=dn(e,a,i.v8_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.v8_trailingSlashAwareDataRequests,e,r,t]);return v.createElement(v.Fragment,null,o.map(e=>v.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function An({page:e,matches:t,...n}){let r=pt(),{future:i,manifest:a,routeModules:o}=wn(),{basename:s}=xn(),{loaderData:c,matches:l}=Sn(),u=v.useMemo(()=>gn(e,t,l,a,r,`data`),[e,t,l,a,r]),d=v.useMemo(()=>gn(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=v.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=dn(e,s,i.v8_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.v8_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=v.useMemo(()=>_n(d,a),[d,a]),m=On(d);return v.createElement(v.Fragment,null,f.map(e=>v.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>v.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>v.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function jn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}v.Component;var Mn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{Mn&&(window.__reactRouterVersion=`7.18.1`)}catch{}function Nn({basename:e,children:t,useTransitions:n,window:r}){let i=v.useRef();i.current??=ee({window:r,v5Compat:!0});let a=i.current,[o,s]=v.useState({action:a.action,location:a.location}),c=v.useCallback(e=>{n===!1?s(e):v.startTransition(()=>s(e))},[n]);return v.useLayoutEffect(()=>a.listen(c),[a,c]),v.createElement(Wt,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,useTransitions:n})}function Pn({basename:e,children:t,history:n,useTransitions:r}){let[i,a]=v.useState({action:n.action,location:n.location}),o=v.useCallback(e=>{r===!1?a(e):v.startTransition(()=>a(e))},[r]);return v.useLayoutEffect(()=>n.listen(o),[n,o]),v.createElement(Wt,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,useTransitions:r})}Pn.displayName=`unstable_HistoryRouter`;var Fn=v.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,useTransitions:_}=v.useContext(nt),y=typeof l==`string`&&w.test(l),b=We(l,h);l=b.to;let x=dt(l,{relative:r}),S=pt(),C=null;if(o){let e=Ne(o,[],S.mask?S.mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Fe([h,e.pathname])),C=g.createHref(e)}let[T,E,D]=Tn(n,p),O=Hn(l,{replace:a,mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,defaultShouldRevalidate:f,useTransitions:_});function ee(t){e&&e(t),t.defaultPrevented||O(t)}let k=!(b.isExternal||i),A=v.createElement(`a`,{...p,...D,href:(k?C:void 0)||b.absoluteURL||x,onClick:k?ee:e,ref:jn(m,E),target:c,"data-discover":!y&&t===`render`?`true`:void 0});return T&&!y?v.createElement(v.Fragment,null,A,v.createElement(Dn,{page:x})):A});Fn.displayName=`Link`;var In=v.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=yt(a,{relative:c.relative}),d=pt(),f=v.useContext(Xe),{navigator:p,basename:m}=v.useContext(nt),h=f!=null&&Qn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,y=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),y=y?y.toLowerCase():null,g=g.toLowerCase()),y&&m&&(y=De(y,m)||y);let b=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,x=_===g||!r&&_.startsWith(g)&&_.charAt(b)===`/`,S=y!=null&&(y===g||!r&&y.startsWith(g)&&y.charAt(g.length)===`/`),C={isActive:x,isPending:S,isTransitioning:h},w=x?e:void 0,T;T=typeof n==`function`?n(C):[n,x?`active`:null,S?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let E=typeof i==`function`?i(C):i;return v.createElement(Fn,{...c,"aria-current":w,className:T,ref:l,style:E,to:a,viewTransition:o},typeof s==`function`?s(C):s)});In.displayName=`NavLink`;var Ln=v.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=qt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f,...p},m)=>{let{useTransitions:h}=v.useContext(nt),g=Gn(),_=Kn(s,{relative:l}),y=o.toLowerCase()===`get`?`get`:`post`,b=typeof s==`string`&&w.test(s);return v.createElement(`form`,{ref:m,method:y,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,defaultShouldRevalidate:f});h&&n!==!1?v.startTransition(()=>p()):p()},...p,"data-discover":!b&&e===`render`?`true`:void 0})});Ln.displayName=`Form`;function Rn({getKey:e,storageKey:t,...n}){let r=v.useContext(Cn),{basename:i}=v.useContext(nt),a=pt(),o=It();Xn({getKey:e,storageKey:t});let s=v.useMemo(()=>{if(!r||!e)return null;let t=Yn(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return n.nonce==null&&r?.nonce&&(n.nonce=r.nonce),v.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${ln(JSON.stringify(t||qn))}, ${ln(JSON.stringify(s))})`}})}Rn.displayName=`ScrollRestoration`;function zn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Bn(e){let t=v.useContext(Ye);return k(t,zn(e)),t}function Vn(e){let t=v.useContext(Xe);return k(t,zn(e)),t}function Hn(e,{target:t,replace:n,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c,useTransitions:l}={}){let u=gt(),d=pt(),f=yt(e,{relative:o});return v.useCallback(p=>{if(en(p,t)){p.preventDefault();let t=n===void 0?ie(d)===ie(f):n,m=()=>u(e,{replace:t,mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,defaultShouldRevalidate:c});l?v.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var Un=0,Wn=()=>`__${String(++Un)}__`;function Gn(){let{router:e}=Bn(`useSubmit`),{basename:t}=v.useContext(nt),n=Pt(),r=e.fetch,i=e.navigate;return v.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=on(e,t);if(a.navigate===!1){let e=a.fetcherKey||Wn();await r(e,n,a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync})}else await i(a.action||o,{defaultShouldRevalidate:a.defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Kn(e,{relative:t}={}){let{basename:n}=v.useContext(nt),r=v.useContext(it);k(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...yt(e||`.`,{relative:t})},o=pt();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Fe([n,a.pathname])),ie(a)}var qn=`react-router-scroll-positions`,Jn={};function Yn(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:De(e.pathname,n)||e.pathname},t)),i??=e.key,i}function Xn({getKey:e,storageKey:t}={}){let{router:n}=Bn(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=Vn(`useScrollRestoration`),{basename:a}=v.useContext(nt),o=pt(),s=It(),c=Ft();v.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),Zn(v.useCallback(()=>{if(c.state===`idle`){let t=Yn(o,s,a,e);Jn[t]=window.scrollY}try{sessionStorage.setItem(t||qn,JSON.stringify(Jn))}catch(e){A(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(v.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||qn);e&&(Jn=JSON.parse(e))}catch{}},[t]),v.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(Jn,()=>window.scrollY,e?(t,n)=>Yn(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),v.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{A(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function Zn(e,t){let{capture:n}=t||{};v.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function Qn(e,{relative:t}={}){let n=v.useContext($e);k(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Bn(`useViewTransitionState`),i=yt(e,{relative:t});if(!n.isTransitioning)return!1;let a=De(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=De(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Ce(i.pathname,o)!=null||Ce(i.pathname,a)!=null}function $n(e,t){return function(){return e.apply(t,arguments)}}var{toString:er}=Object.prototype,{getPrototypeOf:tr}=Object,{iterator:nr,toStringTag:rr}=Symbol,ir=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),ar=(e,t)=>{let n=e,r=[];for(;n!=null&&n!==Object.prototype;){if(r.indexOf(n)!==-1)return!1;if(r.push(n),ir(n,t))return!0;n=tr(n)}return!1},or=(e,t)=>e!=null&&ar(e,t)?e[t]:void 0,sr=(e=>t=>{let n=er.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),cr=e=>(e=e.toLowerCase(),t=>sr(t)===e),lr=e=>t=>typeof t===e,{isArray:ur}=Array,dr=lr(`undefined`);function fr(e){return e!==null&&!dr(e)&&e.constructor!==null&&!dr(e.constructor)&&gr(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}var pr=cr(`ArrayBuffer`);function mr(e){let t;return t=typeof ArrayBuffer<`u`&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&pr(e.buffer),t}var hr=lr(`string`),gr=lr(`function`),_r=lr(`number`),vr=e=>typeof e==`object`&&!!e,yr=e=>e===!0||e===!1,br=e=>{if(!vr(e))return!1;let t=tr(e);return(t===null||t===Object.prototype||tr(t)===null)&&!ar(e,rr)&&!ar(e,nr)},xr=e=>{if(!vr(e)||fr(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},Sr=cr(`Date`),Cr=cr(`File`),wr=e=>!!(e&&e.uri!==void 0),Tr=e=>e&&e.getParts!==void 0,Er=cr(`Blob`),Dr=cr(`FileList`),Or=e=>vr(e)&&gr(e.pipe);function kr(){return typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:typeof global<`u`?global:{}}var Ar=kr(),jr=Ar.FormData===void 0?void 0:Ar.FormData,Mr=e=>{if(!e)return!1;if(jr&&e instanceof jr)return!0;let t=tr(e);if(!t||t===Object.prototype||!gr(e.append))return!1;let n=sr(e);return n===`formdata`||n===`object`&&gr(e.toString)&&e.toString()===`[object FormData]`},Nr=cr(`URLSearchParams`),[Pr,Fr,Ir,Lr]=[`ReadableStream`,`Request`,`Response`,`Headers`].map(cr),Rr=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,``);function zr(e,t,{allOwnKeys:n=!1}={}){if(e==null)return;let r,i;if(typeof e!=`object`&&(e=[e]),ur(e))for(r=0,i=e.length;r<i;r++)t.call(null,e[r],r,e);else{if(fr(e))return;let i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length,o;for(r=0;r<a;r++)o=i[r],t.call(null,e[o],o,e)}}function Br(e,t){if(fr(e))return null;t=t.toLowerCase();let n=Object.keys(e),r=n.length,i;for(;r-->0;)if(i=n[r],t===i.toLowerCase())return i;return null}var Vr=typeof globalThis<`u`?globalThis:typeof self<`u`?self:typeof window<`u`?window:global,Hr=e=>!dr(e)&&e!==Vr;function Ur(...e){let{caseless:t,skipUndefined:n}=Hr(this)&&this||{},r={},i=(e,i)=>{if(i===`__proto__`||i===`constructor`||i===`prototype`)return;let a=t&&typeof i==`string`&&Br(r,i)||i,o=ir(r,a)?r[a]:void 0;br(o)&&br(e)?r[a]=Ur(o,e):br(e)?r[a]=Ur({},e):ur(e)?r[a]=e.slice():(!n||!dr(e))&&(r[a]=e)};for(let t=0,n=e.length;t<n;t++){let n=e[t];if(!n||fr(n)||(zr(n,i),typeof n!=`object`||ur(n)))continue;let r=Object.getOwnPropertySymbols(n);for(let e=0;e<r.length;e++){let t=r[e];ti.call(n,t)&&i(n[t],t)}}return r}var Wr=(e,t,n,{allOwnKeys:r}={})=>(zr(t,(t,r)=>{n&&gr(t)?Object.defineProperty(e,r,{__proto__:null,value:$n(t,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,r,{__proto__:null,value:t,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),e),Gr=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Kr=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),Object.defineProperty(e.prototype,"constructor",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{__proto__:null,value:t.prototype}),n&&Object.assign(e.prototype,n)},qr=(e,t,n,r)=>{let i,a,o,s={};if(t||={},e==null)return t;do{for(i=Object.getOwnPropertyNames(e),a=i.length;a-->0;)o=i[a],(!r||r(o,e,t))&&!s[o]&&(t[o]=e[o],s[o]=!0);e=n!==!1&&tr(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Jr=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;let r=e.indexOf(t,n);return r!==-1&&r===n},Yr=e=>{if(!e)return null;if(ur(e))return e;let t=e.length;if(!_r(t))return null;let n=Array(t);for(;t-->0;)n[t]=e[t];return n},Xr=(e=>t=>e&&t instanceof e)(typeof Uint8Array<`u`&&tr(Uint8Array)),Zr=(e,t)=>{let n=(e&&e[nr]).call(e),r;for(;(r=n.next())&&!r.done;){let n=r.value;t.call(e,n[0],n[1])}},Qr=(e,t)=>{let n,r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},$r=cr(`HTMLFormElement`),ei=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,n){return t.toUpperCase()+n}),{propertyIsEnumerable:ti}=Object.prototype,ni=cr(`RegExp`),ri=(e,t)=>{let n=Object.getOwnPropertyDescriptors(e),r={};zr(n,(n,i)=>{let a;(a=t(n,i,e))!==!1&&(r[i]=a||n)}),Object.defineProperties(e,r)},ii=e=>{ri(e,(t,n)=>{if(gr(e)&&[`arguments`,`caller`,`callee`].includes(n))return!1;let r=e[n];if(gr(r)){if(t.enumerable=!1,`writable`in t){t.writable=!1;return}t.set||=()=>{throw Error(`Can not rewrite read-only method '`+n+`'`)}}})},ai=(e,t)=>{let n={},r=e=>{e.forEach(e=>{n[e]=!0})};return ur(e)?r(e):r(String(e).split(t)),n},oi=()=>{},si=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function ci(e){return!!(e&&gr(e.append)&&e[rr]===`FormData`&&e[nr])}var li=e=>{let t=new WeakSet,n=e=>{if(vr(e)){if(t.has(e))return;if(fr(e))return e;if(!(`toJSON`in e)){t.add(e);let r=ur(e)?[]:{};return zr(e,(e,t)=>{let i=n(e);!dr(i)&&(r[t]=i)}),t.delete(e),r}}return e};return n(e)},ui=cr(`AsyncFunction`),di=e=>e&&(vr(e)||gr(e))&&gr(e.then)&&gr(e.catch),fi=((e,t)=>e?setImmediate:t?((e,t)=>(Vr.addEventListener(`message`,({source:n,data:r})=>{n===Vr&&r===e&&t.length&&t.shift()()},!1),n=>{t.push(n),Vr.postMessage(e,`*`)}))(`axios@${Math.random()}`,[]):e=>setTimeout(e))(typeof setImmediate==`function`,gr(Vr.postMessage)),pi=typeof queueMicrotask<`u`?queueMicrotask.bind(Vr):typeof process<`u`&&process.nextTick||fi,mi=e=>e!=null&&gr(e[nr]),N={isArray:ur,isArrayBuffer:pr,isBuffer:fr,isFormData:Mr,isArrayBufferView:mr,isString:hr,isNumber:_r,isBoolean:yr,isObject:vr,isPlainObject:br,isEmptyObject:xr,isReadableStream:Pr,isRequest:Fr,isResponse:Ir,isHeaders:Lr,isUndefined:dr,isDate:Sr,isFile:Cr,isReactNativeBlob:wr,isReactNative:Tr,isBlob:Er,isRegExp:ni,isFunction:gr,isStream:Or,isURLSearchParams:Nr,isTypedArray:Xr,isFileList:Dr,forEach:zr,merge:Ur,extend:Wr,trim:Rr,stripBOM:Gr,inherits:Kr,toFlatObject:qr,kindOf:sr,kindOfTest:cr,endsWith:Jr,toArray:Yr,forEachEntry:Zr,matchAll:Qr,isHTMLForm:$r,hasOwnProperty:ir,hasOwnProp:ir,hasOwnInPrototypeChain:ar,getSafeProp:or,reduceDescriptors:ri,freezeMethods:ii,toObjectSet:ai,toCamelCase:ei,noop:oi,toFiniteNumber:si,findKey:Br,global:Vr,isContextDefined:Hr,isSpecCompliantForm:ci,toJSONObject:li,isAsyncFn:ui,isThenable:di,setImmediate:fi,asap:pi,isIterable:mi,isSafeIterable:e=>e!=null&&ar(e,nr)&&mi(e)},hi=N.toObjectSet([`age`,`authorization`,`content-length`,`content-type`,`etag`,`expires`,`from`,`host`,`if-modified-since`,`if-unmodified-since`,`last-modified`,`location`,`max-forwards`,`proxy-authorization`,`referer`,`retry-after`,`user-agent`]),gi=e=>{let t={},n,r,i;return e&&e.split(`
`).forEach(function(e){i=e.indexOf(`:`),n=e.substring(0,i).trim().toLowerCase(),r=e.substring(i+1).trim(),!(!n||t[n]&&hi[n])&&(n===`set-cookie`?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+`, `+r:r)}),t};function _i(e){let t=0,n=e.length;for(;t<n;){let n=e.charCodeAt(t);if(n!==9&&n!==32)break;t+=1}for(;n>t;){let t=e.charCodeAt(n-1);if(t!==9&&t!==32)break;--n}return t===0&&n===e.length?e:e.slice(t,n)}var vi=RegExp(`[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+`,`g`),yi=RegExp(`[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+`,`g`);function bi(e,t){return N.isArray(e)?e.map(e=>bi(e,t)):_i(String(e).replace(t,``))}var xi=e=>bi(e,vi),Si=e=>bi(e,yi);function Ci(e){let t=Object.create(null);return N.forEach(e.toJSON(),(e,n)=>{t[n]=Si(e)}),t}var wi=Symbol(`internals`);function Ti(e){return e&&String(e).trim().toLowerCase()}function Ei(e){return e===!1||e==null?e:N.isArray(e)?e.map(Ei):xi(String(e))}function Di(e){let t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}var Oi=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ki(e,t,n,r,i){if(N.isFunction(r))return r.call(this,t,n);if(i&&(t=n),N.isString(t)){if(N.isString(r))return t.indexOf(r)!==-1;if(N.isRegExp(r))return r.test(t)}}function Ai(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,n)=>t.toUpperCase()+n)}function ji(e,t){let n=N.toCamelCase(` `+t);[`get`,`set`,`has`].forEach(r=>{Object.defineProperty(e,r+n,{__proto__:null,value:function(e,n,i){return this[r].call(this,t,e,n,i)},configurable:!0})})}var Mi=class{constructor(e){e&&this.set(e)}set(e,t,n){let r=this;function i(e,t,n){let i=Ti(t);if(!i)return;let a=N.findKey(r,i);(!a||r[a]===void 0||n===!0||n===void 0&&r[a]!==!1)&&(r[a||t]=Ei(e))}let a=(e,t)=>N.forEach(e,(e,n)=>i(e,n,t));if(N.isPlainObject(e)||e instanceof this.constructor)a(e,t);else if(N.isString(e)&&(e=e.trim())&&!Oi(e))a(gi(e),t);else if(N.isObject(e)&&N.isSafeIterable(e)){let n=Object.create(null),r,i;for(let t of e){if(!N.isArray(t))throw TypeError(`Object iterator must return a key-value pair`);i=t[0],N.hasOwnProp(n,i)?(r=n[i],n[i]=N.isArray(r)?[...r,t[1]]:[r,t[1]]):n[i]=t[1]}a(n,t)}else e!=null&&i(t,e,n);return this}get(e,t){if(e=Ti(e),e){let n=N.findKey(this,e);if(n){let e=this[n];if(!t)return e;if(t===!0)return Di(e);if(N.isFunction(t))return t.call(this,e,n);if(N.isRegExp(t))return t.exec(e);throw TypeError(`parser must be boolean|regexp|function`)}}}has(e,t){if(e=Ti(e),e){let n=N.findKey(this,e);return!!(n&&this[n]!==void 0&&(!t||ki(this,this[n],n,t)))}return!1}delete(e,t){let n=this,r=!1;function i(e){if(e=Ti(e),e){let i=N.findKey(n,e);i&&(!t||ki(n,n[i],i,t))&&(delete n[i],r=!0)}}return N.isArray(e)?e.forEach(i):i(e),r}clear(e){let t=Object.keys(this),n=t.length,r=!1;for(;n--;){let i=t[n];(!e||ki(this,this[i],i,e,!0))&&(delete this[i],r=!0)}return r}normalize(e){let t=this,n={};return N.forEach(this,(r,i)=>{let a=N.findKey(n,i);if(a){t[a]=Ei(r),delete t[i];return}let o=e?Ai(i):String(i).trim();o!==i&&delete t[i],t[o]=Ei(r),n[o]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){let t=Object.create(null);return N.forEach(this,(n,r)=>{n!=null&&n!==!1&&(t[r]=e&&N.isArray(n)?n.join(`, `):n)}),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+`: `+t).join(`
`)}getSetCookie(){return this.get(`set-cookie`)||[]}get[Symbol.toStringTag](){return`AxiosHeaders`}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){let n=new this(e);return t.forEach(e=>n.set(e)),n}static accessor(e){let t=(this[wi]=this[wi]={accessors:{}}).accessors,n=this.prototype;function r(e){let r=Ti(e);t[r]||(ji(n,e),t[r]=!0)}return N.isArray(e)?e.forEach(r):r(e),this}};Mi.accessor([`Content-Type`,`Content-Length`,`Accept`,`Accept-Encoding`,`User-Agent`,`Authorization`]),N.reduceDescriptors(Mi.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[n]=e}}}),N.freezeMethods(Mi);var Ni=`[REDACTED ****]`;function Pi(e){if(N.hasOwnProp(e,`toJSON`))return!0;let t=Object.getPrototypeOf(e);for(;t&&t!==Object.prototype;){if(N.hasOwnProp(t,`toJSON`))return!0;t=Object.getPrototypeOf(t)}return!1}function Fi(e,t){let n=new Set(t.map(e=>String(e).toLowerCase())),r=[],i=e=>{if(typeof e!=`object`||!e||N.isBuffer(e))return e;if(r.indexOf(e)!==-1)return;e instanceof Mi&&(e=e.toJSON()),r.push(e);let t;if(N.isArray(e))t=[],e.forEach((e,n)=>{let r=i(e);N.isUndefined(r)||(t[n]=r)});else{if(!N.isPlainObject(e)&&Pi(e))return r.pop(),e;t=Object.create(null);for(let[r,a]of Object.entries(e)){let e=n.has(r.toLowerCase())?Ni:i(a);N.isUndefined(e)||(t[r]=e)}}return r.pop(),t};return i(e)}var P=class e extends Error{static from(t,n,r,i,a,o){let s=new e(t.message,n||t.code,r,i,a);return Object.defineProperty(s,"cause",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),s.name=t.name,t.status!=null&&s.status==null&&(s.status=t.status),o&&Object.assign(s,o),s}constructor(e,t,n,r,i){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name=`AxiosError`,this.isAxiosError=!0,t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status)}toJSON(){let e=this.config,t=e&&N.hasOwnProp(e,`redact`)?e.redact:void 0,n=N.isArray(t)&&t.length>0?Fi(e,t):N.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:n,code:this.code,status:this.status}}};P.ERR_BAD_OPTION_VALUE=`ERR_BAD_OPTION_VALUE`,P.ERR_BAD_OPTION=`ERR_BAD_OPTION`,P.ECONNABORTED=`ECONNABORTED`,P.ETIMEDOUT=`ETIMEDOUT`,P.ECONNREFUSED=`ECONNREFUSED`,P.ERR_NETWORK=`ERR_NETWORK`,P.ERR_FR_TOO_MANY_REDIRECTS=`ERR_FR_TOO_MANY_REDIRECTS`,P.ERR_DEPRECATED=`ERR_DEPRECATED`,P.ERR_BAD_RESPONSE=`ERR_BAD_RESPONSE`,P.ERR_BAD_REQUEST=`ERR_BAD_REQUEST`,P.ERR_CANCELED=`ERR_CANCELED`,P.ERR_NOT_SUPPORT=`ERR_NOT_SUPPORT`,P.ERR_INVALID_URL=`ERR_INVALID_URL`,P.ERR_FORM_DATA_DEPTH_EXCEEDED=`ERR_FORM_DATA_DEPTH_EXCEEDED`;function Ii(e){return N.isPlainObject(e)||N.isArray(e)}function Li(e){return N.endsWith(e,`[]`)?e.slice(0,-2):e}function Ri(e,t,n){return e?e.concat(t).map(function(e,t){return e=Li(e),!n&&t?`[`+e+`]`:e}).join(n?`.`:``):t}function F(e){return N.isArray(e)&&!e.some(Ii)}var zi=N.toFlatObject(N,{},null,function(e){return/^is[A-Z]/.test(e)});function Bi(e,t,n){if(!N.isObject(e))throw TypeError(`target must be an object`);t||=new FormData,n=N.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){return!N.isUndefined(t[e])});let r=n.metaTokens,i=n.visitor||m,a=n.dots,o=n.indexes,s=n.Blob||typeof Blob<`u`&&Blob,c=n.maxDepth===void 0?100:n.maxDepth,l=s&&N.isSpecCompliantForm(t),u=[];if(!N.isFunction(i))throw TypeError(`visitor must be a function`);function d(e){if(e===null)return``;if(N.isDate(e))return e.toISOString();if(N.isBoolean(e))return e.toString();if(!l&&N.isBlob(e))throw new P(`Blob is not supported. Use a Buffer instead.`);if(N.isArrayBuffer(e)||N.isTypedArray(e)){if(l&&typeof s==`function`)return new s([e]);if(typeof Buffer<`u`)return Buffer.from(e);throw new P(`Blob is not supported. Use a Buffer instead.`,P.ERR_NOT_SUPPORT)}return e}function f(e){if(e>c)throw new P(`Object is too deeply nested (`+e+` levels). Max depth: `+c,P.ERR_FORM_DATA_DEPTH_EXCEEDED)}function p(e,t){if(c===1/0)return JSON.stringify(e);let n=[];return JSON.stringify(e,function(e,r){if(!N.isObject(r))return r;for(;n.length&&n[n.length-1]!==this;)n.pop();return n.push(r),f(t+n.length-1),r})}function m(e,n,i){let s=e;if(N.isReactNative(t)&&N.isReactNativeBlob(e))return t.append(Ri(i,n,a),d(e)),!1;if(e&&!i&&typeof e==`object`){if(N.endsWith(n,`{}`))n=r?n:n.slice(0,-2),e=p(e,1);else if(N.isArray(e)&&F(e)||(N.isFileList(e)||N.endsWith(n,`[]`))&&(s=N.toArray(e)))return n=Li(n),s.forEach(function(e,r){!(N.isUndefined(e)||e===null)&&t.append(o===!0?Ri([n],r,a):o===null?n:n+`[]`,d(e))}),!1}return Ii(e)?!0:(t.append(Ri(i,n,a),d(e)),!1)}let h=Object.assign(zi,{defaultVisitor:m,convertValue:d,isVisitable:Ii});function g(e,n,r=0){if(!N.isUndefined(e)){if(f(r),u.indexOf(e)!==-1)throw Error(`Circular reference detected in `+n.join(`.`));u.push(e),N.forEach(e,function(e,a){(!(N.isUndefined(e)||e===null)&&i.call(t,e,N.isString(a)?a.trim():a,n,h))===!0&&g(e,n?n.concat(a):[a],r+1)}),u.pop()}}if(!N.isObject(e))throw TypeError(`data must be an object`);return g(e),t}function Vi(e){let t={"!":`%21`,"'":`%27`,"(":`%28`,")":`%29`,"~":`%7E`,"%20":`+`};return encodeURIComponent(e).replace(/[!'()~]|%20/g,function(e){return t[e]})}function Hi(e,t){this._pairs=[],e&&Bi(e,this,t)}var Ui=Hi.prototype;Ui.append=function(e,t){this._pairs.push([e,t])},Ui.toString=function(e){let t=e?t=>e.call(this,t,Vi):Vi;return this._pairs.map(function(e){return t(e[0])+`=`+t(e[1])},``).join(`&`)};function Wi(e){return encodeURIComponent(e).replace(/%3A/gi,`:`).replace(/%24/g,`$`).replace(/%2C/gi,`,`).replace(/%20/g,`+`)}function Gi(e,t,n){if(!t)return e;e||=``;let r=N.isFunction(n)?{serialize:n}:n,i=N.getSafeProp(r,`encode`)||Wi,a=N.getSafeProp(r,`serialize`),o;if(o=a?a(t,r):N.isURLSearchParams(t)?t.toString():new Hi(t,r).toString(i),o){let t=e.indexOf(`#`);t!==-1&&(e=e.slice(0,t)),e+=(e.indexOf(`?`)===-1?`?`:`&`)+o}return e}var Ki=class{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&=[]}forEach(e){N.forEach(this.handlers,function(t){t!==null&&e(t)})}},qi={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},Ji={isBrowser:!0,classes:{URLSearchParams:typeof URLSearchParams<`u`?URLSearchParams:Hi,FormData:typeof FormData<`u`?FormData:null,Blob:typeof Blob<`u`?Blob:null},protocols:[`http`,`https`,`file`,`blob`,`url`,`data`]},Yi=s({hasBrowserEnv:()=>Xi,hasStandardBrowserEnv:()=>Qi,hasStandardBrowserWebWorkerEnv:()=>$i,navigator:()=>Zi,origin:()=>ea}),Xi=typeof window<`u`&&typeof document<`u`,Zi=typeof navigator==`object`&&navigator||void 0,Qi=Xi&&(!Zi||[`ReactNative`,`NativeScript`,`NS`].indexOf(Zi.product)<0),$i=typeof WorkerGlobalScope<`u`&&self instanceof WorkerGlobalScope&&typeof self.importScripts==`function`,ea=Xi&&window.location.href||`http://localhost`,ta={...Yi,...Ji};function na(e,t){return Bi(e,new ta.classes.URLSearchParams,{visitor:function(e,t,n,r){return ta.isNode&&N.isBuffer(e)?(this.append(t,e.toString(`base64`)),!1):r.defaultVisitor.apply(this,arguments)},...t})}var ra=100;function ia(e){if(e>ra)throw new P(`FormData field is too deeply nested (`+e+` levels). Max depth: `+ra,P.ERR_FORM_DATA_DEPTH_EXCEEDED)}function aa(e){let t=[],n=/\w+|\[(\w*)]/g,r;for(;(r=n.exec(e))!==null;)ia(t.length),t.push(r[0]===`[]`?``:r[1]||r[0]);return t}function oa(e){let t={},n=Object.keys(e),r,i=n.length,a;for(r=0;r<i;r++)a=n[r],t[a]=e[a];return t}function sa(e){function t(e,n,r,i){ia(i);let a=e[i++];if(a===`__proto__`)return!0;let o=Number.isFinite(+a),s=i>=e.length;return a=!a&&N.isArray(r)?r.length:a,s?(N.hasOwnProp(r,a)?r[a]=N.isArray(r[a])?r[a].concat(n):[r[a],n]:r[a]=n,!o):((!N.hasOwnProp(r,a)||!N.isObject(r[a]))&&(r[a]=[]),t(e,n,r[a],i)&&N.isArray(r[a])&&(r[a]=oa(r[a])),!o)}if(N.isFormData(e)&&N.isFunction(e.entries)){let n={};return N.forEachEntry(e,(e,r)=>{t(aa(e),r,n,0)}),n}return null}var ca=(e,t)=>e!=null&&N.hasOwnProp(e,t)?e[t]:void 0;function la(e,t,n){if(N.isString(e))try{return(t||JSON.parse)(e),N.trim(e)}catch(e){if(e.name!==`SyntaxError`)throw e}return(n||JSON.stringify)(e)}var ua={transitional:qi,adapter:[`xhr`,`http`,`fetch`],transformRequest:[function(e,t){let n=t.getContentType()||``,r=n.indexOf(`application/json`)>-1,i=N.isObject(e);if(i&&N.isHTMLForm(e)&&(e=new FormData(e)),N.isFormData(e))return r?JSON.stringify(sa(e)):e;if(N.isArrayBuffer(e)||N.isBuffer(e)||N.isStream(e)||N.isFile(e)||N.isBlob(e)||N.isReadableStream(e))return e;if(N.isArrayBufferView(e))return e.buffer;if(N.isURLSearchParams(e))return t.setContentType(`application/x-www-form-urlencoded;charset=utf-8`,!1),e.toString();let a;if(i){let t=ca(this,`formSerializer`);if(n.indexOf(`application/x-www-form-urlencoded`)>-1)return na(e,t).toString();if((a=N.isFileList(e))||n.indexOf(`multipart/form-data`)>-1){let n=ca(this,`env`),r=n&&n.FormData;return Bi(a?{"files[]":e}:e,r&&new r,t)}}return i||r?(t.setContentType(`application/json`,!1),la(e)):e}],transformResponse:[function(e){let t=ca(this,`transitional`)||ua.transitional,n=t&&t.forcedJSONParsing,r=ca(this,`responseType`),i=r===`json`;if(N.isResponse(e)||N.isReadableStream(e))return e;if(e&&N.isString(e)&&(n&&!r||i)){let n=!(t&&t.silentJSONParsing)&&i;try{return JSON.parse(e,ca(this,`parseReviver`))}catch(e){if(n)throw e.name===`SyntaxError`?P.from(e,P.ERR_BAD_RESPONSE,this,null,ca(this,`response`)):e}}return e}],timeout:0,xsrfCookieName:`XSRF-TOKEN`,xsrfHeaderName:`X-XSRF-TOKEN`,maxContentLength:-1,maxBodyLength:-1,env:{FormData:ta.classes.FormData,Blob:ta.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:`application/json, text/plain, */*`,"Content-Type":void 0}}};N.forEach([`delete`,`get`,`head`,`post`,`put`,`patch`,`query`],e=>{ua.headers[e]={}});function da(e,t){let n=this||ua,r=t||n,i=Mi.from(r.headers),a=r.data;return N.forEach(e,function(e){a=e.call(n,a,i.normalize(),t?t.status:void 0)}),i.normalize(),a}function fa(e){return!!(e&&e.__CANCEL__)}var pa=class extends P{constructor(e,t,n){super(e??`canceled`,P.ERR_CANCELED,t,n),this.name=`CanceledError`,this.__CANCEL__=!0}};function ma(e,t,n){let r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new P(`Request failed with status code `+n.status,n.status>=400&&n.status<500?P.ERR_BAD_REQUEST:P.ERR_BAD_RESPONSE,n.config,n.request,n))}function ha(e){let t=/^([-+\w]{1,25}):(?:\/\/)?/.exec(e);return t&&t[1]||``}function ga(e,t){e||=10;let n=Array(e),r=Array(e),i=0,a=0,o;return t=t===void 0?1e3:t,function(s){let c=Date.now(),l=r[a];o||=c,n[i]=s,r[i]=c;let u=a,d=0;for(;u!==i;)d+=n[u++],u%=e;if(i=(i+1)%e,i===a&&(a=(a+1)%e),c-o<t)return;let f=l&&c-l;return f?Math.round(d*1e3/f):void 0}}function _a(e,t){let n=0,r=1e3/t,i,a,o=(t,r=Date.now())=>{n=r,i=null,a&&=(clearTimeout(a),null),e(...t)};return[(...e)=>{let t=Date.now(),s=t-n;s>=r?o(e,t):(i=e,a||=setTimeout(()=>{a=null,o(i)},r-s))},()=>i&&o(i)]}var va=(e,t,n=3)=>{let r=0,i=ga(50,250);return _a(n=>{if(!n||typeof n.loaded!=`number`)return;let a=n.loaded,o=n.lengthComputable?n.total:void 0,s=o==null?a:Math.min(a,o),c=Math.max(0,s-r),l=i(c);r=Math.max(r,s),e({loaded:s,total:o,progress:o?s/o:void 0,bytes:c,rate:l||void 0,estimated:l&&o?(o-s)/l:void 0,event:n,lengthComputable:o!=null,[t?`download`:`upload`]:!0})},n)},ya=(e,t)=>{let n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},ba=e=>(...t)=>N.asap(()=>e(...t)),xa=ta.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,ta.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(ta.origin),ta.navigator&&/(msie|trident)/i.test(ta.navigator.userAgent)):()=>!0,Sa=ta.hasStandardBrowserEnv?{write(e,t,n,r,i,a,o){if(typeof document>`u`)return;let s=[`${e}=${encodeURIComponent(t)}`];N.isNumber(n)&&s.push(`expires=${new Date(n).toUTCString()}`),N.isString(r)&&s.push(`path=${r}`),N.isString(i)&&s.push(`domain=${i}`),a===!0&&s.push(`secure`),N.isString(o)&&s.push(`SameSite=${o}`),document.cookie=s.join(`; `)},read(e){if(typeof document>`u`)return null;let t=document.cookie.split(`;`);for(let n=0;n<t.length;n++){let r=t[n].replace(/^\s+/,``),i=r.indexOf(`=`);if(i!==-1&&r.slice(0,i)===e)try{return decodeURIComponent(r.slice(i+1))}catch{return r.slice(i+1)}}return null},remove(e){this.write(e,``,Date.now()-864e5,`/`)}}:{write(){},read(){return null},remove(){}};function Ca(e){return typeof e==`string`&&/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function wa(e,t){return t?e.replace(/\/?\/$/,``)+`/`+t.replace(/^\/+/,``):e}var Ta=/^https?:(?!\/\/)/i,Ea=/[\t\n\r]/g;function Da(e){let t=0;for(;t<e.length&&e.charCodeAt(t)<=32;)t++;return e.slice(t)}function Oa(e){return Da(e).replace(Ea,``)}function ka(e,t){if(typeof e==`string`&&Ta.test(Oa(e)))throw new P(`Invalid URL: missing "//" after protocol`,P.ERR_INVALID_URL,t)}function Aa(e,t,n,r){ka(t,r);let i=!Ca(t);return e&&(i||n===!1)?(ka(e,r),wa(e,t)):t}var ja=e=>e instanceof Mi?{...e}:e;function Ma(e,t){e||={},t||={};let n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function r(e,t,n,r){return N.isPlainObject(e)&&N.isPlainObject(t)?N.merge.call({caseless:r},e,t):N.isPlainObject(t)?N.merge({},t):N.isArray(t)?t.slice():t}function i(e,t,n,i){if(!N.isUndefined(t))return r(e,t,n,i);if(!N.isUndefined(e))return r(void 0,e,n,i)}function a(e,t){if(!N.isUndefined(t))return r(void 0,t)}function o(e,t){if(!N.isUndefined(t))return r(void 0,t);if(!N.isUndefined(e))return r(void 0,e)}function s(n){let r=N.hasOwnProp(t,`transitional`)?t.transitional:void 0;if(!N.isUndefined(r))if(N.isPlainObject(r)){if(N.hasOwnProp(r,n))return r[n]}else return;let i=N.hasOwnProp(e,`transitional`)?e.transitional:void 0;if(N.isPlainObject(i)&&N.hasOwnProp(i,n))return i[n]}function c(n,i,a){if(N.hasOwnProp(t,a))return r(n,i);if(N.hasOwnProp(e,a))return r(void 0,n)}let l={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:c,headers:(e,t,n)=>i(ja(e),ja(t),n,!0)};return N.forEach(Object.keys({...e,...t}),function(r){if(r===`__proto__`||r===`constructor`||r===`prototype`)return;let a=N.hasOwnProp(l,r)?l[r]:i,o=a(N.hasOwnProp(e,r)?e[r]:void 0,N.hasOwnProp(t,r)?t[r]:void 0,r);N.isUndefined(o)&&a!==c||(n[r]=o)}),N.hasOwnProp(t,`validateStatus`)&&N.isUndefined(t.validateStatus)&&s(`validateStatusUndefinedResolves`)===!1&&(N.hasOwnProp(e,`validateStatus`)?n.validateStatus=r(void 0,e.validateStatus):delete n.validateStatus),n}var Na=[`content-type`,`content-length`];function Pa(e,t,n){if(n!==`content-only`){e.set(t);return}Object.entries(t||{}).forEach(([t,n])=>{Na.includes(t.toLowerCase())&&e.set(t,n)})}var Fa=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(e,t)=>String.fromCharCode(parseInt(t,16)));function Ia(e){let t=Ma({},e),n=e=>N.hasOwnProp(t,e)?t[e]:void 0,r=n(`data`),i=n(`withXSRFToken`),a=n(`xsrfHeaderName`),o=n(`xsrfCookieName`),s=n(`headers`),c=n(`auth`),l=n(`baseURL`),u=n(`allowAbsoluteUrls`),d=n(`url`);if(t.headers=s=Mi.from(s),t.url=Gi(Aa(l,d,u,t),n(`params`),n(`paramsSerializer`)),c){let t=N.getSafeProp(c,`username`)||``,n=N.getSafeProp(c,`password`)||``;try{s.set(`Authorization`,`Basic `+btoa(t+`:`+(n?Fa(n):``)))}catch(t){throw P.from(t,P.ERR_BAD_OPTION_VALUE,e)}}if(N.isFormData(r)&&(ta.hasStandardBrowserEnv||ta.hasStandardBrowserWebWorkerEnv||N.isReactNative(r)?s.setContentType(void 0):N.isFunction(r.getHeaders)&&Pa(s,r.getHeaders(),n(`formDataHeaderPolicy`))),ta.hasStandardBrowserEnv&&(N.isFunction(i)&&(i=i(t)),i===!0||i==null&&xa(t.url))){let e=a&&o&&Sa.read(o);e&&s.set(a,e)}return t}var La=typeof XMLHttpRequest<`u`&&function(e){return new Promise(function(t,n){let r=Ia(e),i=r.data,a=Mi.from(r.headers).normalize(),{responseType:o,onUploadProgress:s,onDownloadProgress:c}=r,l,u,d,f,p;function m(){f&&f(),p&&p(),r.cancelToken&&r.cancelToken.unsubscribe(l),r.signal&&r.signal.removeEventListener(`abort`,l)}let h=new XMLHttpRequest;h.open(r.method.toUpperCase(),r.url,!0),h.timeout=r.timeout;function g(){if(!h)return;let r=Mi.from(`getAllResponseHeaders`in h&&h.getAllResponseHeaders());ma(function(e){t(e),m()},function(e){n(e),m()},{data:!o||o===`text`||o===`json`?h.responseText:h.response,status:h.status,statusText:h.statusText,headers:r,config:e,request:h}),h=null}`onloadend`in h?h.onloadend=g:h.onreadystatechange=function(){!h||h.readyState!==4||h.status===0&&!(h.responseURL&&h.responseURL.startsWith(`file:`))||setTimeout(g)},h.onabort=function(){h&&=(n(new P(`Request aborted`,P.ECONNABORTED,e,h)),m(),null)},h.onerror=function(t){let r=new P(t&&t.message?t.message:`Network Error`,P.ERR_NETWORK,e,h);r.event=t||null,n(r),m(),h=null},h.ontimeout=function(){let t=r.timeout?`timeout of `+r.timeout+`ms exceeded`:`timeout exceeded`,i=r.transitional||qi;r.timeoutErrorMessage&&(t=r.timeoutErrorMessage),n(new P(t,i.clarifyTimeoutError?P.ETIMEDOUT:P.ECONNABORTED,e,h)),m(),h=null},i===void 0&&a.setContentType(null),`setRequestHeader`in h&&N.forEach(Ci(a),function(e,t){h.setRequestHeader(t,e)}),N.isUndefined(r.withCredentials)||(h.withCredentials=!!r.withCredentials),o&&o!==`json`&&(h.responseType=r.responseType),c&&([d,p]=va(c,!0),h.addEventListener(`progress`,d)),s&&h.upload&&([u,f]=va(s),h.upload.addEventListener(`progress`,u),h.upload.addEventListener(`loadend`,f)),(r.cancelToken||r.signal)&&(l=t=>{h&&=(n(!t||t.type?new pa(null,e,h):t),h.abort(),m(),null)},r.cancelToken&&r.cancelToken.subscribe(l),r.signal&&(r.signal.aborted?l():r.signal.addEventListener(`abort`,l)));let _=ha(r.url);if(_&&!ta.protocols.includes(_)){n(new P(`Unsupported protocol `+_+`:`,P.ERR_BAD_REQUEST,e)),m();return}h.send(i||null)})},Ra=(e,t)=>{if(e=e?e.filter(Boolean):[],!t&&!e.length)return;let n=new AbortController,r=!1,i=function(e){if(!r){r=!0,o();let t=e instanceof Error?e:this.reason;n.abort(t instanceof P?t:new pa(t instanceof Error?t.message:t))}},a=t&&setTimeout(()=>{a=null,i(new P(`timeout of ${t}ms exceeded`,P.ETIMEDOUT))},t),o=()=>{e&&=(a&&clearTimeout(a),a=null,e.forEach(e=>{e.unsubscribe?e.unsubscribe(i):e.removeEventListener(`abort`,i)}),null)};e.forEach(e=>e.addEventListener(`abort`,i,{once:!0}));let{signal:s}=n;return s.unsubscribe=()=>N.asap(o),s},za=function*(e,t){let n=e.byteLength;if(!t||n<t){yield e;return}let r=0,i;for(;r<n;)i=r+t,yield e.slice(r,i),r=i},Ba=async function*(e,t){for await(let n of Va(e))yield*za(n,t)},Va=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}let t=e.getReader();try{for(;;){let{done:e,value:n}=await t.read();if(e)break;yield n}}finally{await t.cancel()}},Ha=(e,t,n,r)=>{let i=Ba(e,t),a=0,o,s=e=>{o||(o=!0,r&&r(e))};return new ReadableStream({async pull(e){try{let{done:t,value:r}=await i.next();if(t){s(),e.close();return}let o=r.byteLength;n&&n(a+=o),e.enqueue(new Uint8Array(r))}catch(e){throw s(e),e}},cancel(e){return s(e),i.return()}},{highWaterMark:2})},Ua=e=>e>=48&&e<=57||e>=65&&e<=70||e>=97&&e<=102,Wa=(e,t,n)=>t+2<n&&Ua(e.charCodeAt(t+1))&&Ua(e.charCodeAt(t+2));function Ga(e){if(!e||typeof e!=`string`||!e.startsWith(`data:`))return 0;let t=e.indexOf(`,`);if(t<0)return 0;let n=e.slice(5,t),r=e.slice(t+1);if(/;base64/i.test(n)){let e=r.length,t=r.length;for(let n=0;n<t;n++)if(r.charCodeAt(n)===37&&n+2<t){let t=r.charCodeAt(n+1),i=r.charCodeAt(n+2);Ua(t)&&Ua(i)&&(e-=2,n+=2)}let n=0,i=t-1,a=e=>e>=2&&r.charCodeAt(e-2)===37&&r.charCodeAt(e-1)===51&&(r.charCodeAt(e)===68||r.charCodeAt(e)===100);i>=0&&(r.charCodeAt(i)===61?(n++,i--):a(i)&&(n++,i-=3)),n===1&&i>=0&&(r.charCodeAt(i)===61||a(i))&&n++;let o=Math.floor(e/4)*3-(n||0);return o>0?o:0}let i=0;for(let e=0,t=r.length;e<t;e++){let n=r.charCodeAt(e);if(n===37&&Wa(r,e,t))i+=1,e+=2;else if(n<128)i+=1;else if(n<2048)i+=2;else if(n>=55296&&n<=56319&&e+1<t){let t=r.charCodeAt(e+1);t>=56320&&t<=57343?(i+=4,e++):i+=3}else i+=3}return i}var Ka=`1.18.1`,qa=64*1024,{isFunction:Ja}=N,Ya=e=>encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi,(e,t)=>String.fromCharCode(parseInt(t,16))),Xa=e=>{if(!N.isString(e))return e;try{return decodeURIComponent(e)}catch{return e}},Za=(e,...t)=>{try{return!!e(...t)}catch{return!1}},Qa=e=>{let t=e.indexOf(`://`),n=e;return t!==-1&&(n=n.slice(t+3)),n.includes(`@`)||n.includes(`:`)},$a=e=>{let t=N.global!==void 0&&N.global!==null?N.global:globalThis,{ReadableStream:n,TextEncoder:r}=t;e=N.merge.call({skipUndefined:!0},{Request:t.Request,Response:t.Response},e);let{fetch:i,Request:a,Response:o}=e,s=i?Ja(i):typeof fetch==`function`,c=Ja(a),l=Ja(o);if(!s)return!1;let u=s&&Ja(n),d=s&&(typeof r==`function`?(e=>t=>e.encode(t))(new r):async e=>new Uint8Array(await new a(e).arrayBuffer())),f=c&&u&&Za(()=>{let e=!1,t=new a(ta.origin,{body:new n,method:`POST`,get duplex(){return e=!0,`half`}}),r=t.headers.has(`Content-Type`);return t.body!=null&&t.body.cancel(),e&&!r}),p=l&&u&&Za(()=>N.isReadableStream(new o(``).body)),m={stream:p&&(e=>e.body)};s&&[`text`,`arrayBuffer`,`blob`,`formData`,`stream`].forEach(e=>{!m[e]&&(m[e]=(t,n)=>{let r=t&&t[e];if(r)return r.call(t);throw new P(`Response type '${e}' is not supported`,P.ERR_NOT_SUPPORT,n)})});let h=async e=>{if(e==null)return 0;if(N.isBlob(e))return e.size;if(N.isSpecCompliantForm(e))return(await new a(ta.origin,{method:`POST`,body:e}).arrayBuffer()).byteLength;if(N.isArrayBufferView(e)||N.isArrayBuffer(e))return e.byteLength;if(N.isURLSearchParams(e)&&(e+=``),N.isString(e))return(await d(e)).byteLength},g=async(e,t)=>N.toFiniteNumber(e.getContentLength())??h(t);return async e=>{let{url:t,method:n,data:s,signal:l,cancelToken:d,timeout:_,onDownloadProgress:v,onUploadProgress:y,responseType:b,headers:x,withCredentials:S=`same-origin`,fetchOptions:C,maxContentLength:w,maxBodyLength:T}=Ia(e),E=N.isNumber(w)&&w>-1,D=N.isNumber(T)&&T>-1,O=t=>N.hasOwnProp(e,t)?e[t]:void 0,ee=i||fetch;b=b?(b+``).toLowerCase():`text`;let k=Ra([l,d&&d.toAbortSignal()],_),A=null,te=k&&k.unsubscribe&&(()=>{k.unsubscribe()}),ne,re=null,ie=()=>new P(`Request body larger than maxBodyLength limit`,P.ERR_BAD_REQUEST,e,A);try{let i,l=O(`auth`);if(l&&(i={username:N.getSafeProp(l,`username`)||``,password:N.getSafeProp(l,`password`)||``}),Qa(t)){let e=new URL(t,ta.origin);!i&&(e.username||e.password)&&(i={username:Xa(e.username),password:Xa(e.password)}),(e.username||e.password)&&(e.username=``,e.password=``,t=e.href)}if(i&&(x.delete(`authorization`),x.set(`Authorization`,`Basic `+btoa(Ya((i.username||``)+`:`+(i.password||``))))),E&&typeof t==`string`&&t.startsWith(`data:`)&&Ga(t)>w)throw new P(`maxContentLength size of `+w+` exceeded`,P.ERR_BAD_RESPONSE,e,A);if(D&&n!==`get`&&n!==`head`){let e=await h(s);if(typeof e==`number`&&isFinite(e)&&(ne=e,e>T))throw ie()}let d=D&&(N.isReadableStream(s)||N.isStream(s)),_=(e,t,n)=>Ha(e,qa,e=>{if(D&&e>T)throw re=ie();t&&t(e)},n);if(f&&n!==`get`&&n!==`head`&&(y||d)){if(ne??=await g(x,s),ne!==0||d){let e=new a(t,{method:`POST`,body:s,duplex:`half`}),n;if(N.isFormData(s)&&(n=e.headers.get(`content-type`))&&x.setContentType(n),e.body){let[t,n]=y&&ya(ne,va(ba(y)))||[];s=_(e.body,t,n)}}}else if(d&&!c&&u&&n!==`get`&&n!==`head`)s=_(s);else if(d&&c&&!f&&n!==`get`&&n!==`head`)throw new P(`Stream request bodies are not supported by the current fetch implementation`,P.ERR_NOT_SUPPORT,e,A);N.isString(S)||(S=S?`include`:`omit`);let j=c&&`credentials`in a.prototype;if(N.isFormData(s)){let e=x.getContentType();e&&/^multipart\/form-data/i.test(e)&&!/boundary=/i.test(e)&&x.delete(`content-type`)}x.set(`User-Agent`,`axios/`+Ka,!1);let M={...C,signal:k,method:n.toUpperCase(),headers:Ci(x.normalize()),body:s,duplex:`half`,credentials:j?S:void 0};A=c&&new a(t,M);let ae=await(c?ee(A,C):ee(t,M)),oe=Mi.from(ae.headers);if(E){let t=N.toFiniteNumber(oe.getContentLength());if(t!=null&&t>w)throw new P(`maxContentLength size of `+w+` exceeded`,P.ERR_BAD_RESPONSE,e,A)}let se=p&&(b===`stream`||b===`response`);if(p&&ae.body&&(v||E||se&&te)){let t={};[`status`,`statusText`,`headers`].forEach(e=>{t[e]=ae[e]});let n=N.toFiniteNumber(oe.getContentLength()),[r,i]=v&&ya(n,va(ba(v),!0))||[],a=0;ae=new o(Ha(ae.body,qa,t=>{if(E&&(a=t,a>w))throw new P(`maxContentLength size of `+w+` exceeded`,P.ERR_BAD_RESPONSE,e,A);r&&r(t)},()=>{i&&i(),te&&te()}),t)}b||=`text`;let ce=await m[N.findKey(m,b)||`text`](ae,e);if(E&&!p&&!se){let t;if(ce!=null&&(typeof ce.byteLength==`number`?t=ce.byteLength:typeof ce.size==`number`?t=ce.size:typeof ce==`string`&&(t=typeof r==`function`?new r().encode(ce).byteLength:ce.length)),typeof t==`number`&&t>w)throw new P(`maxContentLength size of `+w+` exceeded`,P.ERR_BAD_RESPONSE,e,A)}return!se&&te&&te(),await new Promise((t,n)=>{ma(t,n,{data:ce,headers:Mi.from(ae.headers),status:ae.status,statusText:ae.statusText,config:e,request:A})})}catch(t){if(te&&te(),k&&k.aborted&&k.reason instanceof P){let n=k.reason;throw n.config=e,A&&(n.request=A),t!==n&&Object.defineProperty(n,"cause",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),n}if(re)throw A&&!re.request&&(re.request=A),re;if(t instanceof P)throw A&&!t.request&&(t.request=A),t;if(t&&t.name===`TypeError`&&/Load failed|fetch/i.test(t.message)){let n=new P(`Network Error`,P.ERR_NETWORK,e,A,t&&t.response);throw Object.defineProperty(n,"cause",{__proto__:null,value:t.cause||t,writable:!0,enumerable:!1,configurable:!0}),n}throw P.from(t,t&&t.code,e,A,t&&t.response)}}},eo=new Map,to=e=>{let t=e&&e.env||{},{fetch:n,Request:r,Response:i}=t,a=[r,i,n],o=a.length,s,c,l=eo;for(;o--;)s=a[o],c=l.get(s),c===void 0&&l.set(s,c=o?new Map:$a(t)),l=c;return c};to();var no={http:null,xhr:La,fetch:{get:to}};N.forEach(no,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{__proto__:null,value:t})}catch{}Object.defineProperty(e,"adapterName",{__proto__:null,value:t})}});var ro=e=>`- ${e}`,io=e=>N.isFunction(e)||e===null||e===!1;function ao(e,t){e=N.isArray(e)?e:[e];let{length:n}=e,r,i,a={};for(let o=0;o<n;o++){r=e[o];let n;if(i=r,!io(r)&&(i=no[(n=String(r)).toLowerCase()],i===void 0))throw new P(`Unknown adapter '${n}'`);if(i&&(N.isFunction(i)||(i=i.get(t))))break;a[n||`#`+o]=i}if(!i){let e=Object.entries(a).map(([e,t])=>`adapter ${e} `+(t===!1?`is not supported by the environment`:`is not available in the build`));throw new P(`There is no suitable adapter to dispatch the request `+(n?e.length>1?`since :
`+e.map(ro).join(`
`):` `+ro(e[0]):`as no adapter specified`),P.ERR_NOT_SUPPORT)}return i}var oo={getAdapter:ao,adapters:no};function so(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new pa(null,e)}function co(e){return so(e),e.headers=Mi.from(e.headers),e.data=da.call(e,e.transformRequest),[`post`,`put`,`patch`].indexOf(e.method)!==-1&&e.headers.setContentType(`application/x-www-form-urlencoded`,!1),oo.getAdapter(e.adapter||ua.adapter,e)(e).then(function(t){so(e),e.response=t;try{t.data=da.call(e,e.transformResponse,t)}finally{delete e.response}return t.headers=Mi.from(t.headers),t},function(t){if(!fa(t)&&(so(e),t&&t.response)){e.response=t.response;try{t.response.data=da.call(e,e.transformResponse,t.response)}finally{delete e.response}t.response.headers=Mi.from(t.response.headers)}return Promise.reject(t)})}var lo={};[`object`,`boolean`,`number`,`function`,`string`,`symbol`].forEach((e,t)=>{lo[e]=function(n){return typeof n===e||`a`+(t<1?`n `:` `)+e}});var uo={};lo.transitional=function(e,t,n){function r(e,t){return`[Axios v`+Ka+`] Transitional option '`+e+`'`+t+(n?`. `+n:``)}return(n,i,a)=>{if(e===!1)throw new P(r(i,` has been removed`+(t?` in `+t:``)),P.ERR_DEPRECATED);return t&&!uo[i]&&(uo[i]=!0,console.warn(r(i,` has been deprecated since v`+t+` and will be removed in the near future`))),!e||e(n,i,a)}},lo.spelling=function(e){return(t,n)=>(console.warn(`${n} is likely a misspelling of ${e}`),!0)};function fo(e,t,n){if(typeof e!=`object`||!e)throw new P(`options must be an object`,P.ERR_BAD_OPTION_VALUE);let r=Object.keys(e),i=r.length;for(;i-->0;){let a=r[i],o=Object.prototype.hasOwnProperty.call(t,a)?t[a]:void 0;if(o){let t=e[a],n=t===void 0||o(t,a,e);if(n!==!0)throw new P(`option `+a+` must be `+n,P.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new P(`Unknown option `+a,P.ERR_BAD_OPTION)}}var po={assertOptions:fo,validators:lo},I=po.validators,mo=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Ki,response:new Ki}}async request(e,t){try{return await this._request(e,t)}catch(e){if(e instanceof Error){let t={};Error.captureStackTrace?Error.captureStackTrace(t):t=Error();let n=(()=>{if(!t.stack)return``;let e=t.stack.indexOf(`
`);return e===-1?``:t.stack.slice(e+1)})();try{if(!e.stack)e.stack=n;else if(n){let t=n.indexOf(`
`),r=t===-1?-1:n.indexOf(`
`,t+1),i=r===-1?``:n.slice(r+1);String(e.stack).endsWith(i)||(e.stack+=`
`+n)}}catch{}}throw e}}_request(e,t){typeof e==`string`?(t||={},t.url=e):t=e||{},t=Ma(this.defaults,t);let{transitional:n,paramsSerializer:r,headers:i}=t;n!==void 0&&po.assertOptions(n,{silentJSONParsing:I.transitional(I.boolean),forcedJSONParsing:I.transitional(I.boolean),clarifyTimeoutError:I.transitional(I.boolean),legacyInterceptorReqResOrdering:I.transitional(I.boolean),advertiseZstdAcceptEncoding:I.transitional(I.boolean),validateStatusUndefinedResolves:I.transitional(I.boolean)},!1),r!=null&&(N.isFunction(r)?t.paramsSerializer={serialize:r}:po.assertOptions(r,{encode:I.function,serialize:I.function},!0)),t.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls===void 0?t.allowAbsoluteUrls=!0:t.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls),po.assertOptions(t,{baseUrl:I.spelling(`baseURL`),withXsrfToken:I.spelling(`withXSRFToken`)},!0),t.method=(t.method||this.defaults.method||`get`).toLowerCase();let a=i&&N.merge(i.common,i[t.method]);i&&N.forEach([`delete`,`get`,`head`,`post`,`put`,`patch`,`query`,`common`],e=>{delete i[e]}),t.headers=Mi.concat(a,i);let o=[],s=!0;this.interceptors.request.forEach(function(e){if(typeof e.runWhen==`function`&&e.runWhen(t)===!1)return;s&&=e.synchronous;let n=t.transitional||qi;n&&n.legacyInterceptorReqResOrdering?o.unshift(e.fulfilled,e.rejected):o.push(e.fulfilled,e.rejected)});let c=[];this.interceptors.response.forEach(function(e){c.push(e.fulfilled,e.rejected)});let l,u=0,d;if(!s){let e=[co.bind(this),void 0];for(e.unshift(...o),e.push(...c),d=e.length,l=Promise.resolve(t);u<d;)l=l.then(e[u++],e[u++]);return l}d=o.length;let f=t;for(;u<d;){let e=o[u++],t=o[u++];try{f=e(f)}catch(e){t.call(this,e);break}}try{l=co.call(this,f)}catch(e){return Promise.reject(e)}for(u=0,d=c.length;u<d;)l=l.then(c[u++],c[u++]);return l}getUri(e){return e=Ma(this.defaults,e),Gi(Aa(e.baseURL,e.url,e.allowAbsoluteUrls,e),e.params,e.paramsSerializer)}};N.forEach([`delete`,`get`,`head`,`options`],function(e){mo.prototype[e]=function(t,n){return this.request(Ma(n||{},{method:e,url:t,data:n&&N.hasOwnProp(n,`data`)?n.data:void 0}))}}),N.forEach([`post`,`put`,`patch`,`query`],function(e){function t(t){return function(n,r,i){return this.request(Ma(i||{},{method:e,headers:t?{"Content-Type":`multipart/form-data`}:{},url:n,data:r}))}}mo.prototype[e]=t(),e!==`query`&&(mo.prototype[e+`Form`]=t(!0))});var ho=class e{constructor(e){if(typeof e!=`function`)throw TypeError(`executor must be a function.`);let t;this.promise=new Promise(function(e){t=e});let n=this;this.promise.then(e=>{if(!n._listeners)return;let t=n._listeners.length;for(;t-->0;)n._listeners[t](e);n._listeners=null}),this.promise.then=e=>{let t,r=new Promise(e=>{n.subscribe(e),t=e}).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e(function(e,r,i){n.reason||(n.reason=new pa(e,r,i),t(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;let t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}toAbortSignal(){let e=new AbortController,t=t=>{e.abort(t)};return this.subscribe(t),e.signal.unsubscribe=()=>this.unsubscribe(t),e.signal}static source(){let t;return{token:new e(function(e){t=e}),cancel:t}}};function go(e){return function(t){return e.apply(null,t)}}function L(e){return N.isObject(e)&&e.isAxiosError===!0}var R={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(R).forEach(([e,t])=>{R[t]=e});function _o(e){let t=new mo(e),n=$n(mo.prototype.request,t);return N.extend(n,mo.prototype,t,{allOwnKeys:!0}),N.extend(n,t,null,{allOwnKeys:!0}),n.create=function(t){return _o(Ma(e,t))},n}var vo=_o(ua);vo.Axios=mo,vo.CanceledError=pa,vo.CancelToken=ho,vo.isCancel=fa,vo.VERSION=Ka,vo.toFormData=Bi,vo.AxiosError=P,vo.Cancel=vo.CanceledError,vo.all=function(e){return Promise.all(e)},vo.spread=go,vo.isAxiosError=L,vo.mergeConfig=Ma,vo.AxiosHeaders=Mi,vo.formToJSON=e=>sa(N.isHTMLForm(e)?new FormData(e):e),vo.getAdapter=oo.getAdapter,vo.HttpStatusCode=R,vo.default=vo;var yo=vo.create({baseURL:`http://localhost:8080/api`,withCredentials:!0,timeout:1e4}),bo=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),z=o(((e,t)=>{t.exports=bo()}))(),xo=()=>(0,z.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,z.jsx)(`polyline`,{points:`20 6 9 17 4 12`})}),So=()=>(0,z.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,z.jsx)(`path`,{d:`M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z`}),(0,z.jsx)(`polyline`,{points:`22,6 12,13 2,6`})]}),Co=()=>(0,z.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,z.jsx)(`rect`,{x:`3`,y:`11`,width:`18`,height:`11`,rx:`2`,ry:`2`}),(0,z.jsx)(`path`,{d:`M7 11V7a5 5 0 0 1 10 0v4`})]}),wo=()=>(0,z.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,z.jsx)(`line`,{x1:`5`,y1:`12`,x2:`19`,y2:`12`}),(0,z.jsx)(`polyline`,{points:`12 5 19 12 12 19`})]}),To=()=>(0,z.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,z.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,z.jsx)(`line`,{x1:`12`,y1:`8`,x2:`12`,y2:`12`}),(0,z.jsx)(`line`,{x1:`12`,y1:`16`,x2:`12.01`,y2:`16`})]});function Eo(){let e=gt(),[t,n]=(0,v.useState)({identifier:``,password:``}),[r,i]=(0,v.useState)(``),[a,o]=(0,v.useState)(!1),s=e=>{n({...t,[e.target.name]:e.target.value})};return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700;800&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                  background: #F7F9FB;
          overflow: hidden;
        }

        /* ===== Animations ===== */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-24px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(24px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes floatBlob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -24px) scale(1.06); }
        }

        @keyframes floatBlob2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-24px, 30px) scale(1.08); }
        }

        @keyframes pulseDot {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.15); }
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-6px); }
          40% { transform: translateX(6px); }
          60% { transform: translateX(-4px); }
          80% { transform: translateX(4px); }
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* ===== Container ===== */
        .auth-split {
          display: grid;
          grid-template-columns: 1fr 1.05fr;
          min-height: 100vh;
          background: #F7F9FB;
          overflow: hidden;
        }

        /* ===== LEFT PANEL - PASTEL BRAND ===== */
       .auth-brand {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 56px;
  background: linear-gradient(155deg, #1E3A5F 0%, #12323f 55%);
  color: #fff;
}

.brand-logo-wrapper span {
  color: #fff;
}

.brand-content h1 {
  color: #fff;
}

.brand-content .subtitle {
  color: rgba(255, 255, 255, 0.85);
}

        .auth-brand .orb-1 {
          position: absolute;
          width: 560px;
          height: 560px;
          background: radial-gradient(circle, rgba(20,184,166,0.22) 0%, transparent 70%);
          top: -240px;
          right: -180px;
          animation: floatBlob 16s ease-in-out infinite;
        }

        .auth-brand .orb-2 {
          position: absolute;
          width: 460px;
          height: 460px;
          background: radial-gradient(circle, rgba(30,58,95,0.16) 0%, transparent 70%);
          bottom: -180px;
          left: -140px;
          animation: floatBlob2 20s ease-in-out infinite;
        }

        .auth-brand .grid-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(20,184,166, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(20,184,166, 0.03) 1px, transparent 1px);
          background-size: 44px 44px;
        }

        .brand-content {
          position: relative;
          z-index: 2;
          max-width: 420px;
          width: 100%;
          animation: fadeInLeft 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .brand-logo-wrapper {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 44px;
        }

        .brand-logo {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
          font-family: 'Fraunces', serif;
          font-weight: 600;
          font-size: 18px;
          color: #ffffff;
          box-shadow: 0 8px 28px rgba(18,40,48,0.08);
        }

        .brand-logo-wrapper span {
          font-size: 20px;
          font-weight: 600;
          letter-spacing: -0.01em;
          color: #241f4d;
        }

        .brand-content h1 {
          font-family: 'Fraunces', serif;
          font-size: 42px;
          font-weight: 600;
          font-style: italic;
          line-height: 1.12;
          margin-bottom: 18px;
          letter-spacing: -0.01em;
          color: #201b47;
        }

        .brand-content .subtitle {
          color: #504a72;
          font-size: 15.5px;
          line-height: 1.7;
          margin-bottom: 40px;
          max-width: 370px;
        }

        .brand-features {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .brand-features li {
          display: flex;
          align-items: center;
          gap: 14px;
          font-size: 14px;
          font-weight: 500;
          color: #322c5c;
          padding: 12px 18px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.55);
          border: 1px solid rgba(255, 255, 255, 0.7);
          transition: all 0.25s ease;
        }

        .brand-features li:hover {
          background: rgba(255, 255, 255, 0.85);
          border-color: rgba(20,184,166,0.18);
        }

        .feature-icon {
          width: 26px;
          height: 26px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(20,184,166,0.10);
          color: #1E3A5F;
        }

        /* ===== RIGHT PANEL - FORM ===== */
        .auth-form {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 30px;
                  background: #F7F9FB;
        }

        .auth-card {
          width: 100%;
          max-width: 410px;
          background: #ffffff;
          padding: 48px 42px 40px;
          border-radius: 20px;
          box-shadow: 
                    0 1px 3px rgba(18, 40, 48, 0.02),
                    0 4px 16px rgba(18, 40, 48, 0.04),
                    0 8px 44px rgba(18, 40, 48, 0.04);
          border: 1px solid rgba(226,232,240, 0.6);
          animation: fadeInRight 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.08s backwards;
        }

        /* Header */
        .auth-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .auth-header .welcome-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: 100px;
                  background: rgba(20,184,166,0.12);
                  color: #1E3A5F;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.01em;
          margin-bottom: 18px;
        }

        .auth-header .welcome-badge::before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
                  background: #14B8A6;
          animation: pulseDot 2s ease-in-out infinite;
        }

        .auth-header h1 {
          font-family: 'Fraunces', serif;
          font-size: 30px;
          font-weight: 600;
          color: #201b47;
          letter-spacing: -0.01em;
        }

        .auth-header p {
          margin-top: 8px;
          color: #6b6389;
          font-size: 14px;
        }

        /* Error Message */
        .error-message {
          padding: 13px 16px;
          border-radius: 12px;
          margin-bottom: 20px;
          font-size: 13px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 10px;
          background: #fef2f2;
          color: #991b1b;
          border: 1px solid #fecaca;
          animation: shake 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* ===== FIXED FORM FIELDS ===== */
        .form-group {
          position: relative;
          margin-bottom: 20px;
        }

        .form-group .input-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #9ca3af;
          z-index: 2;
          transition: color 0.25s ease;
          pointer-events: none;
        }

        .form-group input {
          width: 100%;
          padding: 0 14px 0 46px;
          border: 1.5px solid #e5e7eb;
          border-radius: 12px;
          font-size: 14px;
          background: #fafbfc;
          color: #1e1b4b;
          transition: all 0.25s ease;
          height: 56px;
          outline: none;
          font-family: 'Inter', sans-serif;
        }

        .form-group input::placeholder {
          color: #b8b0cc;
          font-weight: 400;
        }

        .form-group input:hover {
          border-color: #c4b5fd;
          background: #ffffff;
        }

        .form-group input:focus {
          border-color: #818cf8;
          background: #ffffff;
          box-shadow: 0 0 0 4px rgba(129, 140, 248, 0.1);
        }

        .form-group input:focus ~ .input-icon {
          color: #818cf8;
        }

        /* ===== FLOATING LABEL - FIXED ===== */
        .form-group.floating input {
          padding: 22px 14px 6px 46px;
          height: 58px;
        }

        .form-group.floating label {
          position: absolute;
          left: 46px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 14px;
          font-weight: 500;
          color: #9ca3af;
          pointer-events: none;
          transition: all 0.22s cubic-bezier(0.22, 1, 0.36, 1);
          z-index: 1;
          background: transparent;
          padding: 0 2px;
        }

        .form-group.floating input:focus + label,
        .form-group.floating input:not(:placeholder-shown) + label {
          top: 9px;
          transform: scale(0.8);
          transform-origin: left center;
          color: #818cf8;
          font-weight: 600;
          background: #ffffff;
          padding: 0 4px;
        }

        .form-group.floating input:focus + label {
          color: #818cf8;
        }

        /* Submit Button */
        .auth-button {
          width: 100%;
                  padding: 14px 20px;
          margin-top: 8px;
          border: none;
          border-radius: 12px;
                  background: var(--primary);
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.01em;
                  box-shadow: 0 4px 16px rgba(var(--primary-rgb), 0.18);
          height: 56px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
                  transition: all 0.2s var(--ease);
          font-family: 'Inter', sans-serif;
          cursor: pointer;
        }

        .auth-button:hover:not(:disabled) {
          transform: translateY(-2px);
                  box-shadow: 0 8px 26px rgba(var(--primary-rgb), 0.22);
        }

        .auth-button:active:not(:disabled) {
          transform: scale(0.98);
        }

        .auth-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none !important;
        }

        .auth-button .spinner {
          width: 20px;
          height: 20px;
          border: 2.5px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }

        /* Footer */
        .auth-footer {
          margin-top: 26px;
          text-align: center;
          color: #6b6389;
          font-size: 14px;
        }

        .auth-footer a {
          color: #818cf8;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .auth-footer a:hover {
          color: #6366f1;
          text-decoration: underline;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .brand-content h1 { font-size: 34px; }
        }

        @media (max-width: 900px) {
          .auth-split { grid-template-columns: 1fr; }
          .auth-brand { padding: 46px 30px; min-height: 260px; }
          .brand-content { max-width: 100%; text-align: center; }
          .brand-logo-wrapper { justify-content: center; }
          .brand-content .subtitle { margin-left: auto; margin-right: auto; }
          .brand-features { max-width: 400px; margin: 0 auto; }
          .brand-features li { justify-content: center; }
          .auth-form { padding: 30px 20px; }
          .auth-card { padding: 34px 26px 30px; }
        }

        @media (max-width: 480px) {
          .auth-brand { padding: 28px 20px; min-height: 190px; }
          .brand-content h1 { font-size: 25px; }
          .brand-logo-wrapper span { font-size: 17px; }
          .brand-features li { padding: 10px 14px; font-size: 13px; }
          .auth-card { padding: 26px 18px 22px; }
          .auth-header h1 { font-size: 22px; }
          .form-group.floating input { height: 52px; padding: 20px 12px 6px 40px; }
          .form-group.floating label { left: 40px; font-size: 13px; }
          .auth-button { height: 50px; font-size: 14px; }
          .auth-header .welcome-badge { font-size: 11px; padding: 4px 14px; }
        }

        @media (max-width: 380px) {
          .auth-card { padding: 20px 14px 20px; }
          .brand-features { display: none; }
        }
      `}),(0,z.jsxs)(`div`,{className:`auth-split`,children:[(0,z.jsxs)(`div`,{className:`auth-brand`,children:[(0,z.jsx)(`div`,{className:`grid-pattern`}),(0,z.jsx)(`div`,{className:`orb-1`}),(0,z.jsx)(`div`,{className:`orb-2`}),(0,z.jsxs)(`div`,{className:`brand-content`,children:[(0,z.jsxs)(`div`,{className:`brand-logo-wrapper`,children:[(0,z.jsx)(`div`,{className:`brand-logo`,children:`CM`}),(0,z.jsx)(`span`,{children:`Contact Manager`})]}),(0,z.jsxs)(`h1`,{children:[`Manage your`,(0,z.jsx)(`br`,{}),`contacts, smarter`]}),(0,z.jsx)(`p`,{className:`subtitle`,children:`One clean, secure place to organize every personal and professional contact you care about.`}),(0,z.jsxs)(`ul`,{className:`brand-features`,children:[(0,z.jsxs)(`li`,{children:[(0,z.jsx)(`span`,{className:`feature-icon`,children:(0,z.jsx)(xo,{})}),`Fast search across all your contacts`]}),(0,z.jsxs)(`li`,{children:[(0,z.jsx)(`span`,{className:`feature-icon`,children:(0,z.jsx)(xo,{})}),`Work, home & personal details in one card`]}),(0,z.jsxs)(`li`,{children:[(0,z.jsx)(`span`,{className:`feature-icon`,children:(0,z.jsx)(xo,{})}),`Your data stays private and secure`]})]})]})]}),(0,z.jsx)(`div`,{className:`auth-form`,children:(0,z.jsxs)(`div`,{className:`auth-card`,children:[(0,z.jsxs)(`div`,{className:`auth-header`,children:[(0,z.jsx)(`div`,{className:`welcome-badge`,children:`Welcome back`}),(0,z.jsx)(`h1`,{children:`Sign in`}),(0,z.jsx)(`p`,{children:`Login to manage your contacts securely`})]}),r&&(0,z.jsxs)(`div`,{className:`error-message`,children:[(0,z.jsx)(To,{}),r]}),(0,z.jsxs)(`form`,{onSubmit:async n=>{n.preventDefault(),i(``),o(!0);try{let n=await yo.post(`/auth/login`,t);localStorage.setItem(`user`,JSON.stringify(n.data)),e(`/dashboard`)}catch(e){i(e.response?.data?.error||`Login failed. Please check your credentials.`)}finally{o(!1)}},children:[(0,z.jsxs)(`div`,{className:`form-group floating`,children:[(0,z.jsx)(`input`,{type:`text`,name:`identifier`,value:t.identifier,onChange:s,placeholder:` `,autoComplete:`username`,required:!0}),(0,z.jsx)(`label`,{children:`Email or Phone`}),(0,z.jsx)(`span`,{className:`input-icon`,children:(0,z.jsx)(So,{})})]}),(0,z.jsxs)(`div`,{className:`form-group floating`,children:[(0,z.jsx)(`input`,{type:`password`,name:`password`,value:t.password,onChange:s,placeholder:` `,autoComplete:`current-password`,required:!0}),(0,z.jsx)(`label`,{children:`Password`}),(0,z.jsx)(`span`,{className:`input-icon`,children:(0,z.jsx)(Co,{})})]}),(0,z.jsx)(`button`,{type:`submit`,className:`auth-button`,disabled:a,children:a?(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(`span`,{className:`spinner`}),`Signing in...`]}):(0,z.jsxs)(z.Fragment,{children:[`Get started`,(0,z.jsx)(wo,{})]})})]}),(0,z.jsxs)(`p`,{className:`auth-footer`,children:[`Don't have an account?`,` `,(0,z.jsx)(Fn,{to:`/register`,children:`Create Account`})]})]})})]})]})}var Do={fill:`none`,stroke:`currentColor`,strokeWidth:1.8,strokeLinecap:`round`,strokeLinejoin:`round`};function Oo(e){return(0,z.jsxs)(`svg`,{viewBox:`0 0 24 24`,width:`18`,height:`18`,...Do,...e,children:[(0,z.jsx)(`circle`,{cx:`12`,cy:`8`,r:`3.5`}),(0,z.jsx)(`path`,{d:`M4.5 20c1.4-3.6 4.4-5.5 7.5-5.5s6.1 1.9 7.5 5.5`})]})}function ko(e){return(0,z.jsxs)(`svg`,{viewBox:`0 0 24 24`,width:`15`,height:`15`,...Do,...e,children:[(0,z.jsx)(`rect`,{x:`2.5`,y:`4.5`,width:`19`,height:`15`,rx:`2.5`}),(0,z.jsx)(`path`,{d:`m3 6.5 9 6.5 9-6.5`})]})}function Ao(e){return(0,z.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`15`,height:`15`,...Do,...e,children:(0,z.jsx)(`path`,{d:`M4.5 4h3l1.5 5-2.3 1.6a12 12 0 0 0 6.7 6.7l1.6-2.3 5 1.5v3a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 2.5 6.2 2 2 0 0 1 4.5 4Z`})})}function jo(e){return(0,z.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`13`,height:`13`,...Do,strokeWidth:`2.4`,...e,children:(0,z.jsx)(`polyline`,{points:`20 6 9 17 4 12`})})}function Mo(e){return(0,z.jsxs)(`svg`,{viewBox:`0 0 24 24`,width:`18`,height:`18`,...Do,...e,children:[(0,z.jsx)(`rect`,{x:`3`,y:`11`,width:`18`,height:`10`,rx:`2`}),(0,z.jsx)(`path`,{d:`M7 11V8a5 5 0 0 1 10 0v3`})]})}function No(e){return(0,z.jsxs)(`svg`,{viewBox:`0 0 24 24`,width:`18`,height:`18`,...Do,strokeWidth:`2.4`,...e,children:[(0,z.jsx)(`line`,{x1:`5`,y1:`12`,x2:`19`,y2:`12`}),(0,z.jsx)(`polyline`,{points:`12 5 19 12 12 19`})]})}function Po(e){return(0,z.jsxs)(`svg`,{viewBox:`0 0 24 24`,width:`18`,height:`18`,...Do,...e,children:[(0,z.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,z.jsx)(`line`,{x1:`12`,y1:`8`,x2:`12`,y2:`12`}),(0,z.jsx)(`circle`,{cx:`12`,cy:`16.5`,r:`0.5`,fill:`currentColor`,stroke:`none`})]})}function Fo(){let e=gt(),[t,n]=(0,v.useState)({firstName:``,lastName:``,email:``,phone:``,password:``}),[r,i]=(0,v.useState)(``),[a,o]=(0,v.useState)(!1),s=e=>{n({...t,[e.target.name]:e.target.value})};return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700;800&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
                  background: #F7F9FB;
          overflow: hidden;
        }

        /* ===== Animations ===== */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-24px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(24px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes floatBlob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -24px) scale(1.06); }
        }

        @keyframes floatBlob2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-24px, 30px) scale(1.08); }
        }

        @keyframes pulseDot {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.15); }
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-6px); }
          40% { transform: translateX(6px); }
          60% { transform: translateX(-4px); }
          80% { transform: translateX(4px); }
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* ===== Container ===== */
        .auth-split {
          display: grid;
          grid-template-columns: 1fr 1.05fr;
          min-height: 100vh;
          background: #F7F9FB;
          overflow: hidden;
        }

        /* ===== LEFT PANEL ===== */
        .auth-brand {
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 60px 56px;
          background: linear-gradient(155deg, #1E3A5F 0%, #12323f 55%);
          color: #fff;
        }

        .auth-brand .orb-1 {
          position: absolute;
          width: 560px;
          height: 560px;
          background: radial-gradient(circle, rgba(20,184,166,0.22) 0%, transparent 70%);
          top: -240px;
          right: -180px;
          animation: floatBlob 16s ease-in-out infinite;
        }

        .auth-brand .orb-2 {
          position: absolute;
          width: 460px;
          height: 460px;
          background: radial-gradient(circle, rgba(30,58,95,0.16) 0%, transparent 70%);
          bottom: -180px;
          left: -140px;
          animation: floatBlob2 20s ease-in-out infinite;
        }

        .auth-brand .grid-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(20,184,166, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(20,184,166, 0.03) 1px, transparent 1px);
          background-size: 44px 44px;
        }

        .brand-content {
          position: relative;
          z-index: 2;
          max-width: 420px;
          width: 100%;
          animation: fadeInLeft 0.7s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .brand-logo-wrapper {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 44px;
        }

        .brand-logo {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.08);
          font-family: 'Fraunces', serif;
          font-weight: 600;
          font-size: 18px;
          color: #ffffff;
          box-shadow: 0 8px 28px rgba(18,40,48,0.08);
        }

        .brand-logo-wrapper span {
          font-size: 20px;
          font-weight: 600;
          letter-spacing: -0.01em;
          color: #241f4d;
        }

        .brand-content h1 {
          font-family: 'Fraunces', serif;
          font-size: 38px;
          font-weight: 600;
          font-style: italic;
          line-height: 1.12;
          margin-bottom: 18px;
          letter-spacing: -0.01em;
          color: #201b47;
        }

        .brand-content .subtitle {
          color: #504a72;
          font-size: 15.5px;
          line-height: 1.7;
          margin-bottom: 40px;
          max-width: 370px;
        }

        .brand-features {
          list-style: none;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .brand-features li {
          display: flex;
          align-items: center;
          gap: 14px;
          font-size: 14px;
          font-weight: 500;
          color: #322c5c;
          padding: 12px 18px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.55);
          border: 1px solid rgba(255, 255, 255, 0.7);
          transition: all 0.25s ease;
        }

        .brand-features li:hover {
          background: rgba(255, 255, 255, 0.85);
          border-color: rgba(20,184,166,0.18);
        }

        .feature-icon {
          width: 26px;
          height: 26px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(20,184,166,0.10);
          color: #1E3A5F;
        }

        /* ===== RIGHT PANEL ===== */
        .auth-form {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 30px;
                  background: #F7F9FB;
        }

        .auth-card {
          width: 100%;
          max-width: 440px;
          background: #ffffff;
          padding: 44px 40px 36px;
          border-radius: 20px;
          box-shadow: 
            0 1px 3px rgba(18, 40, 48, 0.02),
            0 4px 16px rgba(18, 40, 48, 0.04),
            0 8px 44px rgba(18, 40, 48, 0.04);
          border: 1px solid rgba(226,232,240, 0.6);
          animation: fadeInRight 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.08s backwards;
        }

        /* Header */
        .auth-header {
          text-align: center;
          margin-bottom: 28px;
        }

        .auth-header .welcome-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: 100px;
                  background: rgba(20,184,166,0.12);
                  color: #1E3A5F;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.01em;
          margin-bottom: 18px;
        }

        .auth-header .welcome-badge::before {
          content: '';
          width: 6px;
          height: 6px;
          border-radius: 50%;
                  background: #14B8A6;
          animation: pulseDot 2s ease-in-out infinite;
        }

        .auth-header h1 {
          font-family: 'Fraunces', serif;
          font-size: 28px;
          font-weight: 600;
          color: #201b47;
          letter-spacing: -0.01em;
        }

        .auth-header p {
          margin-top: 8px;
          color: #6b6389;
          font-size: 14px;
        }

        /* Error Message */
        .error-message {
          padding: 13px 16px;
          border-radius: 12px;
          margin-bottom: 18px;
          font-size: 13px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 10px;
          background: #fef2f2;
          color: #991b1b;
          border: 1px solid #fecaca;
          animation: shake 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* ===== FORM FIELDS ===== */
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .form-group {
          position: relative;
          margin-bottom: 18px;
        }

        .form-group .input-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #9ca3af;
          z-index: 2;
          transition: color 0.25s ease;
          pointer-events: none;
        }

        .form-group input {
          width: 100%;
          padding: 0 14px 0 46px;
          border: 1.5px solid #e5e7eb;
          border-radius: 12px;
          font-size: 14px;
          background: #fafbfc;
          color: #1e1b4b;
          transition: all 0.25s ease;
          height: 52px;
          outline: none;
          font-family: 'Inter', sans-serif;
        }

        .form-group input::placeholder {
          color: #b8b0cc;
          font-weight: 400;
        }

        .form-group input:hover {
          border-color: #c4b5fd;
          background: #ffffff;
        }

        .form-group input:focus {
          border-color: #818cf8;
          background: #ffffff;
          box-shadow: 0 0 0 4px rgba(129, 140, 248, 0.1);
        }

        .form-group input:focus ~ .input-icon {
          color: #818cf8;
        }

        /* ===== FLOATING LABEL ===== */
        .form-group.floating input {
          padding: 22px 14px 6px 46px;
          height: 56px;
        }

        .form-group.floating label {
          position: absolute;
          left: 46px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 14px;
          font-weight: 500;
          color: #9ca3af;
          pointer-events: none;
          transition: all 0.22s cubic-bezier(0.22, 1, 0.36, 1);
          z-index: 1;
          background: transparent;
          padding: 0 2px;
        }

        .form-group.floating input:focus + label,
        .form-group.floating input:not(:placeholder-shown) + label {
          top: 8px;
          transform: scale(0.8);
          transform-origin: left center;
          color: #818cf8;
          font-weight: 600;
          background: #ffffff;
          padding: 0 4px;
        }

        .form-group.floating input:focus + label {
          color: #818cf8;
        }

        /* Submit Button */
        .auth-button {
          width: 100%;
                  padding: 14px 20px;
          margin-top: 6px;
          border: none;
          border-radius: 12px;
                  background: var(--primary);
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          letter-spacing: 0.01em;
                  box-shadow: 0 4px 16px rgba(var(--primary-rgb), 0.18);
          height: 54px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
                  transition: all 0.2s var(--ease);
          font-family: 'Inter', sans-serif;
          cursor: pointer;
        }

        .auth-button:hover:not(:disabled) {
          transform: translateY(-2px);
                  box-shadow: 0 8px 26px rgba(var(--primary-rgb), 0.22);
        }

        .auth-button:active:not(:disabled) {
          transform: scale(0.98);
        }

        .auth-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none !important;
        }

        .auth-button .spinner {
          width: 20px;
          height: 20px;
          border: 2.5px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }

        /* Footer */
        .auth-footer {
          margin-top: 24px;
          text-align: center;
          color: #6b6389;
          font-size: 14px;
        }

        .auth-footer a {
          color: #818cf8;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .auth-footer a:hover {
          color: #6366f1;
          text-decoration: underline;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .brand-content h1 { font-size: 32px; }
        }

        @media (max-width: 900px) {
          .auth-split { grid-template-columns: 1fr; }
          .auth-brand { padding: 46px 30px; min-height: 240px; }
          .brand-content { max-width: 100%; text-align: center; }
          .brand-logo-wrapper { justify-content: center; }
          .brand-content .subtitle { margin-left: auto; margin-right: auto; }
          .brand-features { max-width: 400px; margin: 0 auto; }
          .brand-features li { justify-content: center; }
          .auth-form { padding: 30px 20px; }
          .auth-card { padding: 32px 24px 28px; }
        }

        @media (max-width: 480px) {
          .auth-brand { padding: 28px 20px; min-height: 180px; }
          .brand-content h1 { font-size: 24px; }
          .brand-logo-wrapper span { font-size: 17px; }
          .brand-features li { padding: 10px 14px; font-size: 13px; }
          .auth-card { padding: 24px 16px 20px; }
          .auth-header h1 { font-size: 22px; }
          .form-row { grid-template-columns: 1fr; gap: 0; }
          .form-group.floating input { height: 52px; padding: 20px 12px 6px 40px; }
          .form-group.floating label { left: 40px; font-size: 13px; }
          .auth-button { height: 50px; font-size: 14px; }
          .auth-header .welcome-badge { font-size: 11px; padding: 4px 14px; }
        }

        @media (max-width: 380px) {
          .auth-card { padding: 18px 12px 18px; }
          .brand-features { display: none; }
        }
      `}),(0,z.jsxs)(`div`,{className:`auth-split`,children:[(0,z.jsxs)(`div`,{className:`auth-brand`,children:[(0,z.jsx)(`div`,{className:`grid-pattern`}),(0,z.jsx)(`div`,{className:`orb-1`}),(0,z.jsx)(`div`,{className:`orb-2`}),(0,z.jsxs)(`div`,{className:`brand-content`,children:[(0,z.jsxs)(`div`,{className:`brand-logo-wrapper`,children:[(0,z.jsx)(`div`,{className:`brand-logo`,children:`CM`}),(0,z.jsx)(`span`,{children:`Contact Manager`})]}),(0,z.jsxs)(`h1`,{children:[`Join`,(0,z.jsx)(`br`,{}),`Contact Manager`]}),(0,z.jsx)(`p`,{className:`subtitle`,children:`Create your account and start organizing your contacts in minutes — clean, fast and secure.`}),(0,z.jsxs)(`ul`,{className:`brand-features`,children:[(0,z.jsxs)(`li`,{children:[(0,z.jsx)(`span`,{className:`feature-icon`,children:(0,z.jsx)(jo,{})}),`Free to get started`]}),(0,z.jsxs)(`li`,{children:[(0,z.jsx)(`span`,{className:`feature-icon`,children:(0,z.jsx)(jo,{})}),`Unlimited contacts, organized instantly`]}),(0,z.jsxs)(`li`,{children:[(0,z.jsx)(`span`,{className:`feature-icon`,children:(0,z.jsx)(jo,{})}),`Your information is encrypted & private`]})]})]})]}),(0,z.jsx)(`div`,{className:`auth-form`,children:(0,z.jsxs)(`div`,{className:`auth-card`,children:[(0,z.jsxs)(`div`,{className:`auth-header`,children:[(0,z.jsx)(`div`,{className:`welcome-badge`,children:`Get started`}),(0,z.jsx)(`h1`,{children:`Create Account`}),(0,z.jsx)(`p`,{children:`Join Contact Management System`})]}),r&&(0,z.jsxs)(`div`,{className:`error-message`,role:`alert`,children:[(0,z.jsx)(Po,{}),r]}),(0,z.jsxs)(`form`,{onSubmit:async n=>{n.preventDefault(),i(``),o(!0);try{let{token:n,...r}=(await yo.post(`/auth/register`,t)).data;n&&localStorage.setItem(`token`,n),localStorage.setItem(`user`,JSON.stringify(r)),e(`/dashboard`)}catch(e){i(e.response?.data?.error||`Registration failed. Please try again.`)}finally{o(!1)}},children:[(0,z.jsxs)(`div`,{className:`form-row`,children:[(0,z.jsxs)(`div`,{className:`form-group floating`,children:[(0,z.jsx)(`input`,{id:`firstName`,type:`text`,name:`firstName`,value:t.firstName,onChange:s,placeholder:` `,autoComplete:`given-name`,required:!0}),(0,z.jsx)(`label`,{htmlFor:`firstName`,children:`First Name`}),(0,z.jsx)(`span`,{className:`input-icon`,children:(0,z.jsx)(Oo,{})})]}),(0,z.jsxs)(`div`,{className:`form-group floating`,children:[(0,z.jsx)(`input`,{id:`lastName`,type:`text`,name:`lastName`,value:t.lastName,onChange:s,placeholder:` `,autoComplete:`family-name`,required:!0}),(0,z.jsx)(`label`,{htmlFor:`lastName`,children:`Last Name`}),(0,z.jsx)(`span`,{className:`input-icon`,children:(0,z.jsx)(Oo,{})})]})]}),(0,z.jsxs)(`div`,{className:`form-group floating`,children:[(0,z.jsx)(`input`,{id:`email`,type:`email`,name:`email`,value:t.email,onChange:s,placeholder:` `,autoComplete:`email`,required:!0}),(0,z.jsx)(`label`,{htmlFor:`email`,children:`Email`}),(0,z.jsx)(`span`,{className:`input-icon`,children:(0,z.jsx)(ko,{})})]}),(0,z.jsxs)(`div`,{className:`form-group floating`,children:[(0,z.jsx)(`input`,{id:`phone`,type:`tel`,name:`phone`,value:t.phone,onChange:s,placeholder:` `,autoComplete:`tel`}),(0,z.jsx)(`label`,{htmlFor:`phone`,children:`Phone Number`}),(0,z.jsx)(`span`,{className:`input-icon`,children:(0,z.jsx)(Ao,{})})]}),(0,z.jsxs)(`div`,{className:`form-group floating`,children:[(0,z.jsx)(`input`,{id:`password`,type:`password`,name:`password`,value:t.password,onChange:s,placeholder:` `,autoComplete:`new-password`,required:!0}),(0,z.jsx)(`label`,{htmlFor:`password`,children:`Password`}),(0,z.jsx)(`span`,{className:`input-icon`,children:(0,z.jsx)(Mo,{})})]}),(0,z.jsx)(`button`,{type:`submit`,className:`auth-button`,disabled:a,children:a?(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(`span`,{className:`spinner`}),`Creating Account...`]}):(0,z.jsxs)(z.Fragment,{children:[`Register`,(0,z.jsx)(No,{})]})})]}),(0,z.jsxs)(`p`,{className:`auth-footer`,children:[`Already have an account?`,` `,(0,z.jsx)(Fn,{to:`/login`,children:`Login here`})]})]})})]})]})}function Io(e){return e+.5|0}var Lo=(e,t,n)=>Math.max(Math.min(e,n),t);function Ro(e){return Lo(Io(e*2.55),0,255)}function zo(e){return Lo(Io(e*255),0,255)}function Bo(e){return Lo(Io(e/2.55)/100,0,1)}function Vo(e){return Lo(Io(e*100),0,100)}var Ho={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,A:10,B:11,C:12,D:13,E:14,F:15,a:10,b:11,c:12,d:13,e:14,f:15},Uo=[...`0123456789ABCDEF`],Wo=e=>Uo[e&15],Go=e=>Uo[(e&240)>>4]+Uo[e&15],Ko=e=>(e&240)>>4==(e&15),qo=e=>Ko(e.r)&&Ko(e.g)&&Ko(e.b)&&Ko(e.a);function Jo(e){var t=e.length,n;return e[0]===`#`&&(t===4||t===5?n={r:255&Ho[e[1]]*17,g:255&Ho[e[2]]*17,b:255&Ho[e[3]]*17,a:t===5?Ho[e[4]]*17:255}:(t===7||t===9)&&(n={r:Ho[e[1]]<<4|Ho[e[2]],g:Ho[e[3]]<<4|Ho[e[4]],b:Ho[e[5]]<<4|Ho[e[6]],a:t===9?Ho[e[7]]<<4|Ho[e[8]]:255})),n}var Yo=(e,t)=>e<255?t(e):``;function Xo(e){var t=qo(e)?Wo:Go;return e?`#`+t(e.r)+t(e.g)+t(e.b)+Yo(e.a,t):void 0}var Zo=/^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;function Qo(e,t,n){let r=t*Math.min(n,1-n),i=(t,i=(t+e/30)%12)=>n-r*Math.max(Math.min(i-3,9-i,1),-1);return[i(0),i(8),i(4)]}function $o(e,t,n){let r=(r,i=(r+e/60)%6)=>n-n*t*Math.max(Math.min(i,4-i,1),0);return[r(5),r(3),r(1)]}function es(e,t,n){let r=Qo(e,1,.5),i;for(t+n>1&&(i=1/(t+n),t*=i,n*=i),i=0;i<3;i++)r[i]*=1-t-n,r[i]+=t;return r}function ts(e,t,n,r,i){return e===i?(t-n)/r+(t<n?6:0):t===i?(n-e)/r+2:(e-t)/r+4}function ns(e){let t=e.r/255,n=e.g/255,r=e.b/255,i=Math.max(t,n,r),a=Math.min(t,n,r),o=(i+a)/2,s,c,l;return i!==a&&(l=i-a,c=o>.5?l/(2-i-a):l/(i+a),s=ts(t,n,r,l,i),s=s*60+.5),[s|0,c||0,o]}function rs(e,t,n,r){return(Array.isArray(t)?e(t[0],t[1],t[2]):e(t,n,r)).map(zo)}function is(e,t,n){return rs(Qo,e,t,n)}function as(e,t,n){return rs(es,e,t,n)}function os(e,t,n){return rs($o,e,t,n)}function ss(e){return(e%360+360)%360}function cs(e){let t=Zo.exec(e),n=255,r;if(!t)return;t[5]!==r&&(n=t[6]?Ro(+t[5]):zo(+t[5]));let i=ss(+t[2]),a=t[3]/100,o=t[4]/100;return r=t[1]===`hwb`?as(i,a,o):t[1]===`hsv`?os(i,a,o):is(i,a,o),{r:r[0],g:r[1],b:r[2],a:n}}function ls(e,t){var n=ns(e);n[0]=ss(n[0]+t),n=is(n),e.r=n[0],e.g=n[1],e.b=n[2]}function us(e){if(!e)return;let t=ns(e),n=t[0],r=Vo(t[1]),i=Vo(t[2]);return e.a<255?`hsla(${n}, ${r}%, ${i}%, ${Bo(e.a)})`:`hsl(${n}, ${r}%, ${i}%)`}var ds={x:`dark`,Z:`light`,Y:`re`,X:`blu`,W:`gr`,V:`medium`,U:`slate`,A:`ee`,T:`ol`,S:`or`,B:`ra`,C:`lateg`,D:`ights`,R:`in`,Q:`turquois`,E:`hi`,P:`ro`,O:`al`,N:`le`,M:`de`,L:`yello`,F:`en`,K:`ch`,G:`arks`,H:`ea`,I:`ightg`,J:`wh`},fs={OiceXe:`f0f8ff`,antiquewEte:`faebd7`,aqua:`ffff`,aquamarRe:`7fffd4`,azuY:`f0ffff`,beige:`f5f5dc`,bisque:`ffe4c4`,black:`0`,blanKedOmond:`ffebcd`,Xe:`ff`,XeviTet:`8a2be2`,bPwn:`a52a2a`,burlywood:`deb887`,caMtXe:`5f9ea0`,KartYuse:`7fff00`,KocTate:`d2691e`,cSO:`ff7f50`,cSnflowerXe:`6495ed`,cSnsilk:`fff8dc`,crimson:`dc143c`,cyan:`ffff`,xXe:`8b`,xcyan:`8b8b`,xgTMnPd:`b8860b`,xWay:`a9a9a9`,xgYF:`6400`,xgYy:`a9a9a9`,xkhaki:`bdb76b`,xmagFta:`8b008b`,xTivegYF:`556b2f`,xSange:`ff8c00`,xScEd:`9932cc`,xYd:`8b0000`,xsOmon:`e9967a`,xsHgYF:`8fbc8f`,xUXe:`483d8b`,xUWay:`2f4f4f`,xUgYy:`2f4f4f`,xQe:`ced1`,xviTet:`9400d3`,dAppRk:`ff1493`,dApskyXe:`bfff`,dimWay:`696969`,dimgYy:`696969`,dodgerXe:`1e90ff`,fiYbrick:`b22222`,flSOwEte:`fffaf0`,foYstWAn:`228b22`,fuKsia:`ff00ff`,gaRsbSo:`dcdcdc`,ghostwEte:`f8f8ff`,gTd:`ffd700`,gTMnPd:`daa520`,Way:`808080`,gYF:`8000`,gYFLw:`adff2f`,gYy:`808080`,honeyMw:`f0fff0`,hotpRk:`ff69b4`,RdianYd:`cd5c5c`,Rdigo:`4b0082`,ivSy:`fffff0`,khaki:`f0e68c`,lavFMr:`e6e6fa`,lavFMrXsh:`fff0f5`,lawngYF:`7cfc00`,NmoncEffon:`fffacd`,ZXe:`add8e6`,ZcSO:`f08080`,Zcyan:`e0ffff`,ZgTMnPdLw:`fafad2`,ZWay:`d3d3d3`,ZgYF:`90ee90`,ZgYy:`d3d3d3`,ZpRk:`ffb6c1`,ZsOmon:`ffa07a`,ZsHgYF:`20b2aa`,ZskyXe:`87cefa`,ZUWay:`778899`,ZUgYy:`778899`,ZstAlXe:`b0c4de`,ZLw:`ffffe0`,lime:`ff00`,limegYF:`32cd32`,lRF:`faf0e6`,magFta:`ff00ff`,maPon:`800000`,VaquamarRe:`66cdaa`,VXe:`cd`,VScEd:`ba55d3`,VpurpN:`9370db`,VsHgYF:`3cb371`,VUXe:`7b68ee`,VsprRggYF:`fa9a`,VQe:`48d1cc`,VviTetYd:`c71585`,midnightXe:`191970`,mRtcYam:`f5fffa`,mistyPse:`ffe4e1`,moccasR:`ffe4b5`,navajowEte:`ffdead`,navy:`80`,Tdlace:`fdf5e6`,Tive:`808000`,TivedBb:`6b8e23`,Sange:`ffa500`,SangeYd:`ff4500`,ScEd:`da70d6`,pOegTMnPd:`eee8aa`,pOegYF:`98fb98`,pOeQe:`afeeee`,pOeviTetYd:`db7093`,papayawEp:`ffefd5`,pHKpuff:`ffdab9`,peru:`cd853f`,pRk:`ffc0cb`,plum:`dda0dd`,powMrXe:`b0e0e6`,purpN:`800080`,YbeccapurpN:`663399`,Yd:`ff0000`,Psybrown:`bc8f8f`,PyOXe:`4169e1`,saddNbPwn:`8b4513`,sOmon:`fa8072`,sandybPwn:`f4a460`,sHgYF:`2e8b57`,sHshell:`fff5ee`,siFna:`a0522d`,silver:`c0c0c0`,skyXe:`87ceeb`,UXe:`6a5acd`,UWay:`708090`,UgYy:`708090`,snow:`fffafa`,sprRggYF:`ff7f`,stAlXe:`4682b4`,tan:`d2b48c`,teO:`8080`,tEstN:`d8bfd8`,tomato:`ff6347`,Qe:`40e0d0`,viTet:`ee82ee`,JHt:`f5deb3`,wEte:`ffffff`,wEtesmoke:`f5f5f5`,Lw:`ffff00`,LwgYF:`9acd32`};function ps(){let e={},t=Object.keys(fs),n=Object.keys(ds),r,i,a,o,s;for(r=0;r<t.length;r++){for(o=s=t[r],i=0;i<n.length;i++)a=n[i],s=s.replace(a,ds[a]);a=parseInt(fs[o],16),e[s]=[a>>16&255,a>>8&255,a&255]}return e}var ms;function hs(e){ms||(ms=ps(),ms.transparent=[0,0,0,0]);let t=ms[e.toLowerCase()];return t&&{r:t[0],g:t[1],b:t[2],a:t.length===4?t[3]:255}}var gs=/^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;function _s(e){let t=gs.exec(e),n=255,r,i,a;if(t){if(t[7]!==r){let e=+t[7];n=t[8]?Ro(e):Lo(e*255,0,255)}return r=+t[1],i=+t[3],a=+t[5],r=255&(t[2]?Ro(r):Lo(r,0,255)),i=255&(t[4]?Ro(i):Lo(i,0,255)),a=255&(t[6]?Ro(a):Lo(a,0,255)),{r,g:i,b:a,a:n}}}function vs(e){return e&&(e.a<255?`rgba(${e.r}, ${e.g}, ${e.b}, ${Bo(e.a)})`:`rgb(${e.r}, ${e.g}, ${e.b})`)}var ys=e=>e<=.0031308?e*12.92:e**(1/2.4)*1.055-.055,bs=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function xs(e,t,n){let r=bs(Bo(e.r)),i=bs(Bo(e.g)),a=bs(Bo(e.b));return{r:zo(ys(r+n*(bs(Bo(t.r))-r))),g:zo(ys(i+n*(bs(Bo(t.g))-i))),b:zo(ys(a+n*(bs(Bo(t.b))-a))),a:e.a+n*(t.a-e.a)}}function Ss(e,t,n){if(e){let r=ns(e);r[t]=Math.max(0,Math.min(r[t]+r[t]*n,t===0?360:1)),r=is(r),e.r=r[0],e.g=r[1],e.b=r[2]}}function Cs(e,t){return e&&Object.assign(t||{},e)}function ws(e){var t={r:0,g:0,b:0,a:255};return Array.isArray(e)?e.length>=3&&(t={r:e[0],g:e[1],b:e[2],a:255},e.length>3&&(t.a=zo(e[3]))):(t=Cs(e,{r:0,g:0,b:0,a:1}),t.a=zo(t.a)),t}function Ts(e){return e.charAt(0)===`r`?_s(e):cs(e)}var Es=class e{constructor(t){if(t instanceof e)return t;let n=typeof t,r;n===`object`?r=ws(t):n===`string`&&(r=Jo(t)||hs(t)||Ts(t)),this._rgb=r,this._valid=!!r}get valid(){return this._valid}get rgb(){var e=Cs(this._rgb);return e&&(e.a=Bo(e.a)),e}set rgb(e){this._rgb=ws(e)}rgbString(){return this._valid?vs(this._rgb):void 0}hexString(){return this._valid?Xo(this._rgb):void 0}hslString(){return this._valid?us(this._rgb):void 0}mix(e,t){if(e){let n=this.rgb,r=e.rgb,i,a=t===i?.5:t,o=2*a-1,s=n.a-r.a,c=((o*s===-1?o:(o+s)/(1+o*s))+1)/2;i=1-c,n.r=255&c*n.r+i*r.r+.5,n.g=255&c*n.g+i*r.g+.5,n.b=255&c*n.b+i*r.b+.5,n.a=a*n.a+(1-a)*r.a,this.rgb=n}return this}interpolate(e,t){return e&&(this._rgb=xs(this._rgb,e._rgb,t)),this}clone(){return new e(this.rgb)}alpha(e){return this._rgb.a=zo(e),this}clearer(e){let t=this._rgb;return t.a*=1-e,this}greyscale(){let e=this._rgb;return e.r=e.g=e.b=Io(e.r*.3+e.g*.59+e.b*.11),this}opaquer(e){let t=this._rgb;return t.a*=1+e,this}negate(){let e=this._rgb;return e.r=255-e.r,e.g=255-e.g,e.b=255-e.b,this}lighten(e){return Ss(this._rgb,2,e),this}darken(e){return Ss(this._rgb,2,-e),this}saturate(e){return Ss(this._rgb,1,e),this}desaturate(e){return Ss(this._rgb,1,-e),this}rotate(e){return ls(this._rgb,e),this}};function Ds(){}var Os=(()=>{let e=0;return()=>e++})();function B(e){return e==null}function ks(e){if(Array.isArray&&Array.isArray(e))return!0;let t=Object.prototype.toString.call(e);return t.slice(0,7)===`[object`&&t.slice(-6)===`Array]`}function V(e){return e!==null&&Object.prototype.toString.call(e)===`[object Object]`}function As(e){return(typeof e==`number`||e instanceof Number)&&isFinite(+e)}function js(e,t){return As(e)?e:t}function H(e,t){return e===void 0?t:e}var Ms=(e,t)=>typeof e==`string`&&e.endsWith(`%`)?parseFloat(e)/100:+e/t,Ns=(e,t)=>typeof e==`string`&&e.endsWith(`%`)?parseFloat(e)/100*t:+e;function U(e,t,n){if(e&&typeof e.call==`function`)return e.apply(n,t)}function W(e,t,n,r){let i,a,o;if(ks(e))if(a=e.length,r)for(i=a-1;i>=0;i--)t.call(n,e[i],i);else for(i=0;i<a;i++)t.call(n,e[i],i);else if(V(e))for(o=Object.keys(e),a=o.length,i=0;i<a;i++)t.call(n,e[o[i]],o[i])}function Ps(e,t){let n,r,i,a;if(!e||!t||e.length!==t.length)return!1;for(n=0,r=e.length;n<r;++n)if(i=e[n],a=t[n],i.datasetIndex!==a.datasetIndex||i.index!==a.index)return!1;return!0}function Fs(e){if(ks(e))return e.map(Fs);if(V(e)){let t=Object.create(null),n=Object.keys(e),r=n.length,i=0;for(;i<r;++i)t[n[i]]=Fs(e[n[i]]);return t}return e}function Is(e){return[`__proto__`,`prototype`,`constructor`].indexOf(e)===-1}function Ls(e,t,n,r){if(!Is(e))return;let i=t[e],a=n[e];V(i)&&V(a)?Rs(i,a,r):t[e]=Fs(a)}function Rs(e,t,n){let r=ks(t)?t:[t],i=r.length;if(!V(e))return e;n||={};let a=n.merger||Ls,o;for(let t=0;t<i;++t){if(o=r[t],!V(o))continue;let i=Object.keys(o);for(let t=0,r=i.length;t<r;++t)a(i[t],e,o,n)}return e}function zs(e,t){return Rs(e,t,{merger:Bs})}function Bs(e,t,n){if(!Is(e))return;let r=t[e],i=n[e];V(r)&&V(i)?zs(r,i):Object.prototype.hasOwnProperty.call(t,e)||(t[e]=Fs(i))}var Vs={"":e=>e,x:e=>e.x,y:e=>e.y};function Hs(e){let t=e.split(`.`),n=[],r=``;for(let e of t)r+=e,r.endsWith(`\\`)?r=r.slice(0,-1)+`.`:(n.push(r),r=``);return n}function Us(e){let t=Hs(e);return e=>{for(let n of t){if(n===``)break;e&&=e[n]}return e}}function Ws(e,t){return(Vs[t]||(Vs[t]=Us(t)))(e)}function Gs(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Ks=e=>e!==void 0,qs=e=>typeof e==`function`,Js=(e,t)=>{if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0};function Ys(e){return e.type===`mouseup`||e.type===`click`||e.type===`contextmenu`}var G=Math.PI,Xs=2*G,Zs=Xs+G,Qs=1/0,$s=G/180,ec=G/2,tc=G/4,nc=G*2/3,rc=Math.log10,ic=Math.sign;function ac(e,t,n){return Math.abs(e-t)<n}function oc(e){let t=Math.round(e);e=ac(e,t,e/1e3)?t:e;let n=10**Math.floor(rc(e)),r=e/n;return(r<=1?1:r<=2?2:r<=5?5:10)*n}function sc(e){let t=[],n=Math.sqrt(e),r;for(r=1;r<n;r++)e%r===0&&(t.push(r),t.push(e/r));return n===(n|0)&&t.push(n),t.sort((e,t)=>e-t).pop(),t}function cc(e){return typeof e==`symbol`||typeof e==`object`&&!!e&&!(Symbol.toPrimitive in e||`toString`in e||`valueOf`in e)}function lc(e){return!cc(e)&&!isNaN(parseFloat(e))&&isFinite(e)}function uc(e,t){let n=Math.round(e);return n-t<=e&&n+t>=e}function dc(e,t,n){let r,i,a;for(r=0,i=e.length;r<i;r++)a=e[r][n],isNaN(a)||(t.min=Math.min(t.min,a),t.max=Math.max(t.max,a))}function fc(e){return G/180*e}function pc(e){return 180/G*e}function mc(e){if(!As(e))return;let t=1,n=0;for(;Math.round(e*t)/t!==e;)t*=10,n++;return n}function hc(e,t){let n=t.x-e.x,r=t.y-e.y,i=Math.sqrt(n*n+r*r),a=Math.atan2(r,n);return a<-.5*G&&(a+=Xs),{angle:a,distance:i}}function gc(e,t){return Math.sqrt((t.x-e.x)**2+(t.y-e.y)**2)}function _c(e,t){return(e-t+Zs)%Xs-G}function vc(e){return(e%Xs+Xs)%Xs}function yc(e,t,n,r){let i=vc(e),a=vc(t),o=vc(n),s=vc(a-i),c=vc(o-i),l=vc(i-a),u=vc(i-o);return i===a||i===o||r&&a===o||s>c&&l<u}function bc(e,t,n){return Math.max(t,Math.min(n,e))}function xc(e){return bc(e,-32768,32767)}function Sc(e,t,n,r=1e-6){return e>=Math.min(t,n)-r&&e<=Math.max(t,n)+r}function Cc(e,t,n){n||=(n=>e[n]<t);let r=e.length-1,i=0,a;for(;r-i>1;)a=i+r>>1,n(a)?i=a:r=a;return{lo:i,hi:r}}var wc=(e,t,n,r)=>Cc(e,n,r?r=>{let i=e[r][t];return i<n||i===n&&e[r+1][t]===n}:r=>e[r][t]<n),Tc=(e,t,n)=>Cc(e,n,r=>e[r][t]>=n);function Ec(e,t,n){let r=0,i=e.length;for(;r<i&&e[r]<t;)r++;for(;i>r&&e[i-1]>n;)i--;return r>0||i<e.length?e.slice(r,i):e}var Dc=[`push`,`pop`,`shift`,`splice`,`unshift`];function Oc(e,t){if(e._chartjs){e._chartjs.listeners.push(t);return}Object.defineProperty(e,"_chartjs",{configurable:!0,enumerable:!1,value:{listeners:[t]}}),Dc.forEach(t=>{let n=`_onData`+Gs(t),r=e[t];Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value(...t){let i=r.apply(this,t);return e._chartjs.listeners.forEach(e=>{typeof e[n]==`function`&&e[n](...t)}),i}})})}function kc(e,t){let n=e._chartjs;if(!n)return;let r=n.listeners,i=r.indexOf(t);i!==-1&&r.splice(i,1),!(r.length>0)&&(Dc.forEach(t=>{delete e[t]}),delete e._chartjs)}function Ac(e){let t=new Set(e);return t.size===e.length?e:Array.from(t)}var jc=function(){return typeof window>`u`?function(e){return e()}:window.requestAnimationFrame}();function Mc(e,t){let n=[],r=!1;return function(...i){n=i,r||(r=!0,jc.call(window,()=>{r=!1,e.apply(t,n)}))}}function Nc(e,t){let n;return function(...r){return t?(clearTimeout(n),n=setTimeout(e,t,r)):e.apply(this,r),t}}var Pc=e=>e===`start`?`left`:e===`end`?`right`:`center`,Fc=(e,t,n)=>e===`start`?t:e===`end`?n:(t+n)/2,Ic=(e,t,n,r)=>e===(r?`left`:`right`)?n:e===`center`?(t+n)/2:t;function Lc(e,t,n){let r=t.length,i=0,a=r;if(e._sorted){let{iScale:o,vScale:s,_parsed:c}=e,l=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null,u=o.axis,{min:d,max:f,minDefined:p,maxDefined:m}=o.getUserBounds();if(p){if(i=Math.min(wc(c,u,d).lo,n?r:wc(t,u,o.getPixelForValue(d)).lo),l){let e=c.slice(0,i+1).reverse().findIndex(e=>!B(e[s.axis]));i-=Math.max(0,e)}i=bc(i,0,r-1)}if(m){let e=Math.max(wc(c,o.axis,f,!0).hi+1,n?0:wc(t,u,o.getPixelForValue(f),!0).hi+1);if(l){let t=c.slice(e-1).findIndex(e=>!B(e[s.axis]));e+=Math.max(0,t)}a=bc(e,i,r)-i}else a=r-i}return{start:i,count:a}}function Rc(e){let{xScale:t,yScale:n,_scaleRanges:r}=e,i={xmin:t.min,xmax:t.max,ymin:n.min,ymax:n.max};if(!r)return e._scaleRanges=i,!0;let a=r.xmin!==t.min||r.xmax!==t.max||r.ymin!==n.min||r.ymax!==n.max;return Object.assign(r,i),a}var zc=e=>e===0||e===1,Bc=(e,t,n)=>-(2**(10*--e)*Math.sin((e-t)*Xs/n)),Vc=(e,t,n)=>2**(-10*e)*Math.sin((e-t)*Xs/n)+1,Hc={linear:e=>e,easeInQuad:e=>e*e,easeOutQuad:e=>-e*(e-2),easeInOutQuad:e=>(e/=.5)<1?.5*e*e:-.5*(--e*(e-2)-1),easeInCubic:e=>e*e*e,easeOutCubic:e=>--e*e*e+1,easeInOutCubic:e=>(e/=.5)<1?.5*e*e*e:.5*((e-=2)*e*e+2),easeInQuart:e=>e*e*e*e,easeOutQuart:e=>-(--e*e*e*e-1),easeInOutQuart:e=>(e/=.5)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2),easeInQuint:e=>e*e*e*e*e,easeOutQuint:e=>--e*e*e*e*e+1,easeInOutQuint:e=>(e/=.5)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2),easeInSine:e=>-Math.cos(e*ec)+1,easeOutSine:e=>Math.sin(e*ec),easeInOutSine:e=>-.5*(Math.cos(G*e)-1),easeInExpo:e=>e===0?0:2**(10*(e-1)),easeOutExpo:e=>e===1?1:-(2**(-10*e))+1,easeInOutExpo:e=>zc(e)?e:e<.5?.5*2**(10*(e*2-1)):.5*(-(2**(-10*(e*2-1)))+2),easeInCirc:e=>e>=1?e:-(Math.sqrt(1-e*e)-1),easeOutCirc:e=>Math.sqrt(1- --e*e),easeInOutCirc:e=>(e/=.5)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1),easeInElastic:e=>zc(e)?e:Bc(e,.075,.3),easeOutElastic:e=>zc(e)?e:Vc(e,.075,.3),easeInOutElastic(e){let t=.1125,n=.45;return zc(e)?e:e<.5?.5*Bc(e*2,t,n):.5+.5*Vc(e*2-1,t,n)},easeInBack(e){return e*e*(2.70158*e-1.70158)},easeOutBack(e){return--e*e*(2.70158*e+1.70158)+1},easeInOutBack(e){let t=1.70158;return(e/=.5)<1?.5*(e*e*(((t*=1.525)+1)*e-t)):.5*((e-=2)*e*(((t*=1.525)+1)*e+t)+2)},easeInBounce:e=>1-Hc.easeOutBounce(1-e),easeOutBounce(e){let t=7.5625,n=2.75;return e<1/n?t*e*e:e<2/n?t*(e-=1.5/n)*e+.75:e<2.5/n?t*(e-=2.25/n)*e+.9375:t*(e-=2.625/n)*e+.984375},easeInOutBounce:e=>e<.5?Hc.easeInBounce(e*2)*.5:Hc.easeOutBounce(e*2-1)*.5+.5};function Uc(e){if(e&&typeof e==`object`){let t=e.toString();return t===`[object CanvasPattern]`||t===`[object CanvasGradient]`}return!1}function Wc(e){return Uc(e)?e:new Es(e)}function Gc(e){return Uc(e)?e:new Es(e).saturate(.5).darken(.1).hexString()}var Kc=[`x`,`y`,`borderWidth`,`radius`,`tension`],qc=[`color`,`borderColor`,`backgroundColor`];function Jc(e){e.set(`animation`,{delay:void 0,duration:1e3,easing:`easeOutQuart`,fn:void 0,from:void 0,loop:void 0,to:void 0,type:void 0}),e.describe(`animation`,{_fallback:!1,_indexable:!1,_scriptable:e=>e!==`onProgress`&&e!==`onComplete`&&e!==`fn`}),e.set(`animations`,{colors:{type:`color`,properties:qc},numbers:{type:`number`,properties:Kc}}),e.describe(`animations`,{_fallback:`animation`}),e.set(`transitions`,{active:{animation:{duration:400}},resize:{animation:{duration:0}},show:{animations:{colors:{from:`transparent`},visible:{type:`boolean`,duration:0}}},hide:{animations:{colors:{to:`transparent`},visible:{type:`boolean`,easing:`linear`,fn:e=>e|0}}}})}function Yc(e){e.set(`layout`,{autoPadding:!0,padding:{top:0,right:0,bottom:0,left:0}})}var Xc=new Map;function Zc(e,t){t||={};let n=e+JSON.stringify(t),r=Xc.get(n);return r||(r=new Intl.NumberFormat(e,t),Xc.set(n,r)),r}function Qc(e,t,n){return Zc(t,n).format(e)}var $c={values(e){return ks(e)?e:``+e},numeric(e,t,n){if(e===0)return`0`;let r=this.chart.options.locale,i,a=e;if(n.length>1){let t=Math.max(Math.abs(n[0].value),Math.abs(n[n.length-1].value));(t<1e-4||t>0x38d7ea4c68000)&&(i=`scientific`),a=el(e,n)}let o=rc(Math.abs(a)),s=isNaN(o)?1:Math.max(Math.min(-1*Math.floor(o),20),0),c={notation:i,minimumFractionDigits:s,maximumFractionDigits:s};return Object.assign(c,this.options.ticks.format),Qc(e,r,c)},logarithmic(e,t,n){if(e===0)return`0`;let r=n[t].significand||e/10**Math.floor(rc(e));return[1,2,3,5,10,15].includes(r)||t>.8*n.length?$c.numeric.call(this,e,t,n):``}};function el(e,t){let n=t.length>3?t[2].value-t[1].value:t[1].value-t[0].value;return Math.abs(n)>=1&&e!==Math.floor(e)&&(n=e-Math.floor(e)),n}var tl={formatters:$c};function nl(e){e.set(`scale`,{display:!0,offset:!1,reverse:!1,beginAtZero:!1,bounds:`ticks`,clip:!0,grace:0,grid:{display:!0,lineWidth:1,drawOnChartArea:!0,drawTicks:!0,tickLength:8,tickWidth:(e,t)=>t.lineWidth,tickColor:(e,t)=>t.color,offset:!1},border:{display:!0,dash:[],dashOffset:0,width:1},title:{display:!1,text:``,padding:{top:4,bottom:4}},ticks:{minRotation:0,maxRotation:50,mirror:!1,textStrokeWidth:0,textStrokeColor:``,padding:3,display:!0,autoSkip:!0,autoSkipPadding:3,labelOffset:0,callback:tl.formatters.values,minor:{},major:{},align:`center`,crossAlign:`near`,showLabelBackdrop:!1,backdropColor:`rgba(255, 255, 255, 0.75)`,backdropPadding:2}}),e.route(`scale.ticks`,`color`,``,`color`),e.route(`scale.grid`,`color`,``,`borderColor`),e.route(`scale.border`,`color`,``,`borderColor`),e.route(`scale.title`,`color`,``,`color`),e.describe(`scale`,{_fallback:!1,_scriptable:e=>!e.startsWith(`before`)&&!e.startsWith(`after`)&&e!==`callback`&&e!==`parser`,_indexable:e=>e!==`borderDash`&&e!==`tickBorderDash`&&e!==`dash`}),e.describe(`scales`,{_fallback:`scale`}),e.describe(`scale.ticks`,{_scriptable:e=>e!==`backdropPadding`&&e!==`callback`,_indexable:e=>e!==`backdropPadding`})}var rl=Object.create(null),il=Object.create(null);function al(e,t){if(!t)return e;let n=t.split(`.`);for(let t=0,r=n.length;t<r;++t){let r=n[t];e=e[r]||(e[r]=Object.create(null))}return e}function ol(e,t,n){return typeof t==`string`?Rs(al(e,t),n):Rs(al(e,``),t)}var K=new class{constructor(e,t){this.animation=void 0,this.backgroundColor=`rgba(0,0,0,0.1)`,this.borderColor=`rgba(0,0,0,0.1)`,this.color=`#666`,this.datasets={},this.devicePixelRatio=e=>e.chart.platform.getDevicePixelRatio(),this.elements={},this.events=[`mousemove`,`mouseout`,`click`,`touchstart`,`touchmove`],this.font={family:`'Helvetica Neue', 'Helvetica', 'Arial', sans-serif`,size:12,style:`normal`,lineHeight:1.2,weight:null},this.hover={},this.hoverBackgroundColor=(e,t)=>Gc(t.backgroundColor),this.hoverBorderColor=(e,t)=>Gc(t.borderColor),this.hoverColor=(e,t)=>Gc(t.color),this.indexAxis=`x`,this.interaction={mode:`nearest`,intersect:!0,includeInvisible:!1},this.maintainAspectRatio=!0,this.onHover=null,this.onClick=null,this.parsing=!0,this.plugins={},this.responsive=!0,this.scale=void 0,this.scales={},this.showLine=!0,this.drawActiveElementsOnTop=!0,this.describe(e),this.apply(t)}set(e,t){return ol(this,e,t)}get(e){return al(this,e)}describe(e,t){return ol(il,e,t)}override(e,t){return ol(rl,e,t)}route(e,t,n,r){let i=al(this,e),a=al(this,n),o=`_`+t;Object.defineProperties(i,{[o]:{value:i[t],writable:!0},[t]:{enumerable:!0,get(){let e=this[o],t=a[r];return V(e)?Object.assign({},t,e):H(e,t)},set(e){this[o]=e}}})}apply(e){e.forEach(e=>e(this))}}({_scriptable:e=>!e.startsWith(`on`),_indexable:e=>e!==`events`,hover:{_fallback:`interaction`},interaction:{_scriptable:!1,_indexable:!1}},[Jc,Yc,nl]);function sl(e){return!e||B(e.size)||B(e.family)?null:(e.style?e.style+` `:``)+(e.weight?e.weight+` `:``)+e.size+`px `+e.family}function cl(e,t,n,r,i){let a=t[i];return a||(a=t[i]=e.measureText(i).width,n.push(i)),a>r&&(r=a),r}function ll(e,t,n,r){r||={};let i=r.data=r.data||{},a=r.garbageCollect=r.garbageCollect||[];r.font!==t&&(i=r.data={},a=r.garbageCollect=[],r.font=t),e.save(),e.font=t;let o=0,s=n.length,c,l,u,d,f;for(c=0;c<s;c++)if(d=n[c],d!=null&&!ks(d))o=cl(e,i,a,o,d);else if(ks(d))for(l=0,u=d.length;l<u;l++)f=d[l],f!=null&&!ks(f)&&(o=cl(e,i,a,o,f));e.restore();let p=a.length/2;if(p>n.length){for(c=0;c<p;c++)delete i[a[c]];a.splice(0,p)}return o}function ul(e,t,n){let r=e.currentDevicePixelRatio,i=n===0?0:Math.max(n/2,.5);return Math.round((t-i)*r)/r+i}function dl(e,t){!t&&!e||(t||=e.getContext(`2d`),t.save(),t.resetTransform(),t.clearRect(0,0,e.width,e.height),t.restore())}function fl(e,t,n,r){pl(e,t,n,r,null)}function pl(e,t,n,r,i){let a,o,s,c,l,u,d,f,p=t.pointStyle,m=t.rotation,h=t.radius,g=(m||0)*$s;if(p&&typeof p==`object`&&(a=p.toString(),a===`[object HTMLImageElement]`||a===`[object HTMLCanvasElement]`)){e.save(),e.translate(n,r),e.rotate(g),e.drawImage(p,-p.width/2,-p.height/2,p.width,p.height),e.restore();return}if(!(isNaN(h)||h<=0)){switch(e.beginPath(),p){default:i?e.ellipse(n,r,i/2,h,0,0,Xs):e.arc(n,r,h,0,Xs),e.closePath();break;case`triangle`:u=i?i/2:h,e.moveTo(n+Math.sin(g)*u,r-Math.cos(g)*h),g+=nc,e.lineTo(n+Math.sin(g)*u,r-Math.cos(g)*h),g+=nc,e.lineTo(n+Math.sin(g)*u,r-Math.cos(g)*h),e.closePath();break;case`rectRounded`:l=h*.516,c=h-l,o=Math.cos(g+tc)*c,d=Math.cos(g+tc)*(i?i/2-l:c),s=Math.sin(g+tc)*c,f=Math.sin(g+tc)*(i?i/2-l:c),e.arc(n-d,r-s,l,g-G,g-ec),e.arc(n+f,r-o,l,g-ec,g),e.arc(n+d,r+s,l,g,g+ec),e.arc(n-f,r+o,l,g+ec,g+G),e.closePath();break;case`rect`:if(!m){c=Math.SQRT1_2*h,u=i?i/2:c,e.rect(n-u,r-c,2*u,2*c);break}g+=tc;case`rectRot`:d=Math.cos(g)*(i?i/2:h),o=Math.cos(g)*h,s=Math.sin(g)*h,f=Math.sin(g)*(i?i/2:h),e.moveTo(n-d,r-s),e.lineTo(n+f,r-o),e.lineTo(n+d,r+s),e.lineTo(n-f,r+o),e.closePath();break;case`crossRot`:g+=tc;case`cross`:d=Math.cos(g)*(i?i/2:h),o=Math.cos(g)*h,s=Math.sin(g)*h,f=Math.sin(g)*(i?i/2:h),e.moveTo(n-d,r-s),e.lineTo(n+d,r+s),e.moveTo(n+f,r-o),e.lineTo(n-f,r+o);break;case`star`:d=Math.cos(g)*(i?i/2:h),o=Math.cos(g)*h,s=Math.sin(g)*h,f=Math.sin(g)*(i?i/2:h),e.moveTo(n-d,r-s),e.lineTo(n+d,r+s),e.moveTo(n+f,r-o),e.lineTo(n-f,r+o),g+=tc,d=Math.cos(g)*(i?i/2:h),o=Math.cos(g)*h,s=Math.sin(g)*h,f=Math.sin(g)*(i?i/2:h),e.moveTo(n-d,r-s),e.lineTo(n+d,r+s),e.moveTo(n+f,r-o),e.lineTo(n-f,r+o);break;case`line`:o=i?i/2:Math.cos(g)*h,s=Math.sin(g)*h,e.moveTo(n-o,r-s),e.lineTo(n+o,r+s);break;case`dash`:e.moveTo(n,r),e.lineTo(n+Math.cos(g)*(i?i/2:h),r+Math.sin(g)*h);break;case!1:e.closePath();break}e.fill(),t.borderWidth>0&&e.stroke()}}function ml(e,t,n){return n||=.5,!t||e&&e.x>t.left-n&&e.x<t.right+n&&e.y>t.top-n&&e.y<t.bottom+n}function hl(e,t){e.save(),e.beginPath(),e.rect(t.left,t.top,t.right-t.left,t.bottom-t.top),e.clip()}function gl(e){e.restore()}function _l(e,t,n,r,i){if(!t)return e.lineTo(n.x,n.y);if(i===`middle`){let r=(t.x+n.x)/2;e.lineTo(r,t.y),e.lineTo(r,n.y)}else i===`after`==!!r?e.lineTo(n.x,t.y):e.lineTo(t.x,n.y);e.lineTo(n.x,n.y)}function vl(e,t,n,r){if(!t)return e.lineTo(n.x,n.y);e.bezierCurveTo(r?t.cp1x:t.cp2x,r?t.cp1y:t.cp2y,r?n.cp2x:n.cp1x,r?n.cp2y:n.cp1y,n.x,n.y)}function yl(e,t){t.translation&&e.translate(t.translation[0],t.translation[1]),B(t.rotation)||e.rotate(t.rotation),t.color&&(e.fillStyle=t.color),t.textAlign&&(e.textAlign=t.textAlign),t.textBaseline&&(e.textBaseline=t.textBaseline)}function bl(e,t,n,r,i){if(i.strikethrough||i.underline){let a=e.measureText(r),o=t-a.actualBoundingBoxLeft,s=t+a.actualBoundingBoxRight,c=n-a.actualBoundingBoxAscent,l=n+a.actualBoundingBoxDescent,u=i.strikethrough?(c+l)/2:l;e.strokeStyle=e.fillStyle,e.beginPath(),e.lineWidth=i.decorationWidth||2,e.moveTo(o,u),e.lineTo(s,u),e.stroke()}}function xl(e,t){let n=e.fillStyle;e.fillStyle=t.color,e.fillRect(t.left,t.top,t.width,t.height),e.fillStyle=n}function Sl(e,t,n,r,i,a={}){let o=ks(t)?t:[t],s=a.strokeWidth>0&&a.strokeColor!==``,c,l;for(e.save(),e.font=i.string,yl(e,a),c=0;c<o.length;++c)l=o[c],a.backdrop&&xl(e,a.backdrop),s&&(a.strokeColor&&(e.strokeStyle=a.strokeColor),B(a.strokeWidth)||(e.lineWidth=a.strokeWidth),e.strokeText(l,n,r,a.maxWidth)),e.fillText(l,n,r,a.maxWidth),bl(e,n,r,l,a),r+=Number(i.lineHeight);e.restore()}function Cl(e,t){let{x:n,y:r,w:i,h:a,radius:o}=t;e.arc(n+o.topLeft,r+o.topLeft,o.topLeft,1.5*G,G,!0),e.lineTo(n,r+a-o.bottomLeft),e.arc(n+o.bottomLeft,r+a-o.bottomLeft,o.bottomLeft,G,ec,!0),e.lineTo(n+i-o.bottomRight,r+a),e.arc(n+i-o.bottomRight,r+a-o.bottomRight,o.bottomRight,ec,0,!0),e.lineTo(n+i,r+o.topRight),e.arc(n+i-o.topRight,r+o.topRight,o.topRight,0,-ec,!0),e.lineTo(n+o.topLeft,r)}var wl=/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/,Tl=/^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;function El(e,t){let n=(``+e).match(wl);if(!n||n[1]===`normal`)return t*1.2;switch(e=+n[2],n[3]){case`px`:return e;case`%`:e/=100;break}return t*e}var Dl=e=>+e||0;function Ol(e,t){let n={},r=V(t),i=r?Object.keys(t):t,a=V(e)?r?n=>H(e[n],e[t[n]]):t=>e[t]:()=>e;for(let e of i)n[e]=Dl(a(e));return n}function kl(e){return Ol(e,{top:`y`,right:`x`,bottom:`y`,left:`x`})}function Al(e){return Ol(e,[`topLeft`,`topRight`,`bottomLeft`,`bottomRight`])}function jl(e){let t=kl(e);return t.width=t.left+t.right,t.height=t.top+t.bottom,t}function Ml(e,t){e||={},t||=K.font;let n=H(e.size,t.size);typeof n==`string`&&(n=parseInt(n,10));let r=H(e.style,t.style);r&&!(``+r).match(Tl)&&(console.warn(`Invalid font style specified: "`+r+`"`),r=void 0);let i={family:H(e.family,t.family),lineHeight:El(H(e.lineHeight,t.lineHeight),n),size:n,style:r,weight:H(e.weight,t.weight),string:``};return i.string=sl(i),i}function Nl(e,t,n,r){let i=!0,a,o,s;for(a=0,o=e.length;a<o;++a)if(s=e[a],s!==void 0&&(t!==void 0&&typeof s==`function`&&(s=s(t),i=!1),n!==void 0&&ks(s)&&(s=s[n%s.length],i=!1),s!==void 0))return r&&!i&&(r.cacheable=!1),s}function Pl(e,t,n){let{min:r,max:i}=e,a=Ns(t,(i-r)/2),o=(e,t)=>n&&e===0?0:e+t;return{min:o(r,-Math.abs(a)),max:o(i,a)}}function Fl(e,t){return Object.assign(Object.create(e),t)}function Il(e,t=[``],n,r,i=()=>e[0]){let a=n||e;return r===void 0&&(r=Jl(`_fallback`,e)),new Proxy({[Symbol.toStringTag]:`Object`,_cacheable:!0,_scopes:e,_rootScopes:a,_fallback:r,_getTarget:i,override:n=>Il([n,...e],t,a,r)},{deleteProperty(t,n){return delete t[n],delete t._keys,delete e[0][n],!0},get(n,r){return Y(n,r,()=>ql(r,t,e,n))},getOwnPropertyDescriptor(e,t){return Reflect.getOwnPropertyDescriptor(e._scopes[0],t)},getPrototypeOf(){return Reflect.getPrototypeOf(e[0])},has(e,t){return Yl(e).includes(t)},ownKeys(e){return Yl(e)},set(e,t,n){let r=e._storage||=i();return e[t]=r[t]=n,delete e._keys,!0}})}function Ll(e,t,n,r){let i={_cacheable:!1,_proxy:e,_context:t,_subProxy:n,_stack:new Set,_descriptors:q(e,r),setContext:t=>Ll(e,t,n,r),override:i=>Ll(e.override(i),t,n,r)};return new Proxy(i,{deleteProperty(t,n){return delete t[n],delete e[n],!0},get(e,t,n){return Y(e,t,()=>X(e,t,n))},getOwnPropertyDescriptor(t,n){return t._descriptors.allKeys?Reflect.has(e,n)?{enumerable:!0,configurable:!0}:void 0:Reflect.getOwnPropertyDescriptor(e,n)},getPrototypeOf(){return Reflect.getPrototypeOf(e)},has(t,n){return Reflect.has(e,n)},ownKeys(){return Reflect.ownKeys(e)},set(t,n,r){return e[n]=r,delete t[n],!0}})}function q(e,t={scriptable:!0,indexable:!0}){let{_scriptable:n=t.scriptable,_indexable:r=t.indexable,_allKeys:i=t.allKeys}=e;return{allKeys:i,scriptable:n,indexable:r,isScriptable:qs(n)?n:()=>n,isIndexable:qs(r)?r:()=>r}}var Rl=(e,t)=>e?e+Gs(t):t,J=(e,t)=>V(t)&&e!==`adapters`&&(Object.getPrototypeOf(t)===null||t.constructor===Object);function Y(e,t,n){if(Object.prototype.hasOwnProperty.call(e,t)||t===`constructor`)return e[t];let r=n();return e[t]=r,r}function X(e,t,n){let{_proxy:r,_context:i,_subProxy:a,_descriptors:o}=e,s=r[t];return qs(s)&&o.isScriptable(t)&&(s=zl(t,s,e,n)),ks(s)&&s.length&&(s=Bl(t,s,e,o.isIndexable)),J(t,s)&&(s=Ll(s,i,a&&a[t],o)),s}function zl(e,t,n,r){let{_proxy:i,_context:a,_subProxy:o,_stack:s}=n;if(s.has(e))throw Error(`Recursion detected: `+Array.from(s).join(`->`)+`->`+e);s.add(e);let c=t(a,o||r);return s.delete(e),J(e,c)&&(c=Wl(i._scopes,i,e,c)),c}function Bl(e,t,n,r){let{_proxy:i,_context:a,_subProxy:o,_descriptors:s}=n;if(a.index!==void 0&&r(e))return t[a.index%t.length];if(V(t[0])){let n=t,r=i._scopes.filter(e=>e!==n);t=[];for(let c of n){let n=Wl(r,i,e,c);t.push(Ll(n,a,o&&o[e],s))}}return t}function Vl(e,t,n){return qs(e)?e(t,n):e}var Hl=(e,t)=>e===!0?t:typeof e==`string`?Ws(t,e):void 0;function Ul(e,t,n,r,i){for(let a of t){let t=Hl(n,a);if(t){e.add(t);let a=Vl(t._fallback,n,i);if(a!==void 0&&a!==n&&a!==r)return a}else if(t===!1&&r!==void 0&&n!==r)return null}return!1}function Wl(e,t,n,r){let i=t._rootScopes,a=Vl(t._fallback,n,r),o=[...e,...i],s=new Set;s.add(r);let c=Gl(s,o,n,a||n,r);return c===null||a!==void 0&&a!==n&&(c=Gl(s,o,a,c,r),c===null)?!1:Il(Array.from(s),[``],i,a,()=>Kl(t,n,r))}function Gl(e,t,n,r,i){for(;n;)n=Ul(e,t,n,r,i);return n}function Kl(e,t,n){let r=e._getTarget();t in r||(r[t]={});let i=r[t];return ks(i)&&V(n)?n:i||{}}function ql(e,t,n,r){let i;for(let a of t)if(i=Jl(Rl(a,e),n),i!==void 0)return J(e,i)?Wl(n,r,e,i):i}function Jl(e,t){for(let n of t){if(!n)continue;let t=n[e];if(t!==void 0)return t}}function Yl(e){let t=e._keys;return t||=e._keys=Xl(e._scopes),t}function Xl(e){let t=new Set;for(let n of e)for(let e of Object.keys(n).filter(e=>!e.startsWith(`_`)))t.add(e);return Array.from(t)}function Zl(e,t,n,r){let{iScale:i}=e,{key:a=`r`}=this._parsing,o=Array(r),s,c,l,u;for(s=0,c=r;s<c;++s)l=s+n,u=t[l],o[s]={r:i.parse(Ws(u,a),l)};return o}var Ql=2**-52||1e-14,$l=(e,t)=>t<e.length&&!e[t].skip&&e[t],eu=e=>e===`x`?`y`:`x`;function tu(e,t,n,r){let i=e.skip?t:e,a=t,o=n.skip?t:n,s=gc(a,i),c=gc(o,a),l=s/(s+c),u=c/(s+c);l=isNaN(l)?0:l,u=isNaN(u)?0:u;let d=r*l,f=r*u;return{previous:{x:a.x-d*(o.x-i.x),y:a.y-d*(o.y-i.y)},next:{x:a.x+f*(o.x-i.x),y:a.y+f*(o.y-i.y)}}}function nu(e,t,n){let r=e.length,i,a,o,s,c,l=$l(e,0);for(let u=0;u<r-1;++u)if(c=l,l=$l(e,u+1),!(!c||!l)){if(ac(t[u],0,Ql)){n[u]=n[u+1]=0;continue}i=n[u]/t[u],a=n[u+1]/t[u],s=i**2+a**2,!(s<=9)&&(o=3/Math.sqrt(s),n[u]=i*o*t[u],n[u+1]=a*o*t[u])}}function ru(e,t,n=`x`){let r=eu(n),i=e.length,a,o,s,c=$l(e,0);for(let l=0;l<i;++l){if(o=s,s=c,c=$l(e,l+1),!s)continue;let i=s[n],u=s[r];o&&(a=(i-o[n])/3,s[`cp1${n}`]=i-a,s[`cp1${r}`]=u-a*t[l]),c&&(a=(c[n]-i)/3,s[`cp2${n}`]=i+a,s[`cp2${r}`]=u+a*t[l])}}function iu(e,t=`x`){let n=eu(t),r=e.length,i=Array(r).fill(0),a=Array(r),o,s,c,l=$l(e,0);for(o=0;o<r;++o)if(s=c,c=l,l=$l(e,o+1),c){if(l){let e=l[t]-c[t];i[o]=e===0?0:(l[n]-c[n])/e}a[o]=s?l?ic(i[o-1])===ic(i[o])?(i[o-1]+i[o])/2:0:i[o-1]:i[o]}nu(e,i,a),ru(e,a,t)}function au(e,t,n){return Math.max(Math.min(e,n),t)}function ou(e,t){let n,r,i,a,o,s=ml(e[0],t);for(n=0,r=e.length;n<r;++n)o=a,a=s,s=n<r-1&&ml(e[n+1],t),a&&(i=e[n],o&&(i.cp1x=au(i.cp1x,t.left,t.right),i.cp1y=au(i.cp1y,t.top,t.bottom)),s&&(i.cp2x=au(i.cp2x,t.left,t.right),i.cp2y=au(i.cp2y,t.top,t.bottom)))}function su(e,t,n,r,i){let a,o,s,c;if(t.spanGaps&&(e=e.filter(e=>!e.skip)),t.cubicInterpolationMode===`monotone`)iu(e,i);else{let n=r?e[e.length-1]:e[0];for(a=0,o=e.length;a<o;++a)s=e[a],c=tu(n,s,e[Math.min(a+1,o-+!r)%o],t.tension),s.cp1x=c.previous.x,s.cp1y=c.previous.y,s.cp2x=c.next.x,s.cp2y=c.next.y,n=s}t.capBezierPoints&&ou(e,n)}function cu(){return typeof window<`u`&&typeof document<`u`}function lu(e){let t=e.parentNode;return t&&t.toString()===`[object ShadowRoot]`&&(t=t.host),t}function uu(e,t,n){let r;return typeof e==`string`?(r=parseInt(e,10),e.indexOf(`%`)!==-1&&(r=r/100*t.parentNode[n])):r=e,r}var du=e=>e.ownerDocument.defaultView.getComputedStyle(e,null);function fu(e,t){return du(e).getPropertyValue(t)}var pu=[`top`,`right`,`bottom`,`left`];function mu(e,t,n){let r={};n=n?`-`+n:``;for(let i=0;i<4;i++){let a=pu[i];r[a]=parseFloat(e[t+`-`+a+n])||0}return r.width=r.left+r.right,r.height=r.top+r.bottom,r}var hu=(e,t,n)=>(e>0||t>0)&&(!n||!n.shadowRoot);function gu(e,t){let n=e.touches,r=n&&n.length?n[0]:e,{offsetX:i,offsetY:a}=r,o=!1,s,c;if(hu(i,a,e.target))s=i,c=a;else{let e=t.getBoundingClientRect();s=r.clientX-e.left,c=r.clientY-e.top,o=!0}return{x:s,y:c,box:o}}function _u(e,t){if(`native`in e)return e;let{canvas:n,currentDevicePixelRatio:r}=t,i=du(n),a=i.boxSizing===`border-box`,o=mu(i,`padding`),s=mu(i,`border`,`width`),{x:c,y:l,box:u}=gu(e,n),d=o.left+(u&&s.left),f=o.top+(u&&s.top),{width:p,height:m}=t;return a&&(p-=o.width+s.width,m-=o.height+s.height),{x:Math.round((c-d)/p*n.width/r),y:Math.round((l-f)/m*n.height/r)}}function vu(e,t,n){let r,i;if(t===void 0||n===void 0){let a=e&&lu(e);if(!a)t=e.clientWidth,n=e.clientHeight;else{let e=a.getBoundingClientRect(),o=du(a),s=mu(o,`border`,`width`),c=mu(o,`padding`);t=e.width-c.width-s.width,n=e.height-c.height-s.height,r=uu(o.maxWidth,a,`clientWidth`),i=uu(o.maxHeight,a,`clientHeight`)}}return{width:t,height:n,maxWidth:r||Qs,maxHeight:i||Qs}}var yu=e=>Math.round(e*10)/10;function bu(e,t,n,r){let i=du(e),a=mu(i,`margin`),o=uu(i.maxWidth,e,`clientWidth`)||Qs,s=uu(i.maxHeight,e,`clientHeight`)||Qs,c=vu(e,t,n),{width:l,height:u}=c;if(i.boxSizing===`content-box`){let e=mu(i,`border`,`width`),t=mu(i,`padding`);l-=t.width+e.width,u-=t.height+e.height}return l=Math.max(0,l-a.width),u=Math.max(0,r?l/r:u-a.height),l=yu(Math.min(l,o,c.maxWidth)),u=yu(Math.min(u,s,c.maxHeight)),l&&!u&&(u=yu(l/2)),(t!==void 0||n!==void 0)&&r&&c.height&&u>c.height&&(u=c.height,l=yu(Math.floor(u*r))),{width:l,height:u}}function xu(e,t,n){let r=t||1,i=yu(e.height*r),a=yu(e.width*r);e.height=yu(e.height),e.width=yu(e.width);let o=e.canvas;return o.style&&(n||!o.style.height&&!o.style.width)&&(o.style.height=`${e.height}px`,o.style.width=`${e.width}px`),e.currentDevicePixelRatio!==r||o.height!==i||o.width!==a?(e.currentDevicePixelRatio=r,o.height=i,o.width=a,e.ctx.setTransform(r,0,0,r,0,0),!0):!1}var Su=function(){let e=!1;try{let t={get passive(){return e=!0,!1}};cu()&&(window.addEventListener(`test`,null,t),window.removeEventListener(`test`,null,t))}catch{}return e}();function Cu(e,t){let n=fu(e,t),r=n&&n.match(/^(\d+)(\.\d+)?px$/);return r?+r[1]:void 0}function wu(e,t,n,r){return{x:e.x+n*(t.x-e.x),y:e.y+n*(t.y-e.y)}}function Tu(e,t,n,r){return{x:e.x+n*(t.x-e.x),y:r===`middle`?n<.5?e.y:t.y:r===`after`?n<1?e.y:t.y:n>0?t.y:e.y}}function Eu(e,t,n,r){let i={x:e.cp2x,y:e.cp2y},a={x:t.cp1x,y:t.cp1y},o=wu(e,i,n),s=wu(i,a,n),c=wu(a,t,n);return wu(wu(o,s,n),wu(s,c,n),n)}var Du=function(e,t){return{x(n){return e+e+t-n},setWidth(e){t=e},textAlign(e){return e===`center`?e:e===`right`?`left`:`right`},xPlus(e,t){return e-t},leftForLtr(e,t){return e-t}}},Ou=function(){return{x(e){return e},setWidth(e){},textAlign(e){return e},xPlus(e,t){return e+t},leftForLtr(e,t){return e}}};function ku(e,t,n){return e?Du(t,n):Ou()}function Au(e,t){let n,r;(t===`ltr`||t===`rtl`)&&(n=e.canvas.style,r=[n.getPropertyValue(`direction`),n.getPropertyPriority(`direction`)],n.setProperty(`direction`,t,`important`),e.prevTextDirection=r)}function ju(e,t){t!==void 0&&(delete e.prevTextDirection,e.canvas.style.setProperty(`direction`,t[0],t[1]))}function Mu(e){return e===`angle`?{between:yc,compare:_c,normalize:vc}:{between:Sc,compare:(e,t)=>e-t,normalize:e=>e}}function Nu({start:e,end:t,count:n,loop:r,style:i}){return{start:e%n,end:t%n,loop:r&&(t-e+1)%n===0,style:i}}function Pu(e,t,n){let{property:r,start:i,end:a}=n,{between:o,normalize:s}=Mu(r),c=t.length,{start:l,end:u,loop:d}=e,f,p;if(d){for(l+=c,u+=c,f=0,p=c;f<p&&o(s(t[l%c][r]),i,a);++f)l--,u--;l%=c,u%=c}return u<l&&(u+=c),{start:l,end:u,loop:d,style:e.style}}function Fu(e,t,n){if(!n)return[e];let{property:r,start:i,end:a}=n,o=t.length,{compare:s,between:c,normalize:l}=Mu(r),{start:u,end:d,loop:f,style:p}=Pu(e,t,n),m=[],h=!1,g=null,_,v,y,b=()=>c(i,y,_)&&s(i,y)!==0,x=()=>s(a,_)===0||c(a,y,_),S=()=>h||b(),C=()=>!h||x();for(let e=u,n=u;e<=d;++e)v=t[e%o],!v.skip&&(_=l(v[r]),_!==y&&(h=c(_,i,a),g===null&&S()&&(g=s(_,i)===0?e:n),g!==null&&C()&&(m.push(Nu({start:g,end:e,loop:f,count:o,style:p})),g=null),n=e,y=_));return g!==null&&m.push(Nu({start:g,end:d,loop:f,count:o,style:p})),m}function Iu(e,t){let n=[],r=e.segments;for(let i=0;i<r.length;i++){let a=Fu(r[i],e.points,t);a.length&&n.push(...a)}return n}function Lu(e,t,n,r){let i=0,a=t-1;if(n&&!r)for(;i<t&&!e[i].skip;)i++;for(;i<t&&e[i].skip;)i++;for(i%=t,n&&(a+=i);a>i&&e[a%t].skip;)a--;return a%=t,{start:i,end:a}}function Ru(e,t,n,r){let i=e.length,a=[],o=t,s=e[t],c;for(c=t+1;c<=n;++c){let n=e[c%i];n.skip||n.stop?s.skip||(r=!1,a.push({start:t%i,end:(c-1)%i,loop:r}),t=o=n.stop?c:null):(o=c,s.skip&&(t=c)),s=n}return o!==null&&a.push({start:t%i,end:o%i,loop:r}),a}function zu(e,t){let n=e.points,r=e.options.spanGaps,i=n.length;if(!i)return[];let a=!!e._loop,{start:o,end:s}=Lu(n,i,a,r);return r===!0?Bu(e,[{start:o,end:s,loop:a}],n,t):Bu(e,Ru(n,o,s<o?s+i:s,!!e._fullLoop&&o===0&&s===i-1),n,t)}function Bu(e,t,n,r){return!r||!r.setContext||!n?t:Vu(e,t,n,r)}function Vu(e,t,n,r){let i=e._chart.getContext(),a=Hu(e.options),{_datasetIndex:o,options:{spanGaps:s}}=e,c=n.length,l=[],u=a,d=t[0].start,f=d;function p(e,t,r,i){let a=s?-1:1;if(e!==t){for(e+=c;n[e%c].skip;)e-=a;for(;n[t%c].skip;)t+=a;e%c!==t%c&&(l.push({start:e%c,end:t%c,loop:r,style:i}),u=i,d=t%c)}}for(let e of t){d=s?d:e.start;let t=n[d%c],a;for(f=d+1;f<=e.end;f++){let s=n[f%c];a=Hu(r.setContext(Fl(i,{type:`segment`,p0:t,p1:s,p0DataIndex:(f-1)%c,p1DataIndex:f%c,datasetIndex:o}))),Uu(a,u)&&p(d,f-1,e.loop,u),t=s,u=a}d<f-1&&p(d,f-1,e.loop,u)}return l}function Hu(e){return{backgroundColor:e.backgroundColor,borderCapStyle:e.borderCapStyle,borderDash:e.borderDash,borderDashOffset:e.borderDashOffset,borderJoinStyle:e.borderJoinStyle,borderWidth:e.borderWidth,borderColor:e.borderColor}}function Uu(e,t){if(!t)return!1;let n=[],r=function(e,t){return Uc(t)?(n.includes(t)||n.push(t),n.indexOf(t)):t};return JSON.stringify(e,r)!==JSON.stringify(t,r)}function Wu(e,t,n){return e.options.clip?e[n]:t[n]}function Z(e,t){let{xScale:n,yScale:r}=e;return n&&r?{left:Wu(n,t,`left`),right:Wu(n,t,`right`),top:Wu(r,t,`top`),bottom:Wu(r,t,`bottom`)}:t}function Gu(e,t){let n=t._clip;if(n.disabled)return!1;let r=Z(t,e.chartArea);return{left:n.left===!1?0:r.left-(n.left===!0?0:n.left),right:n.right===!1?e.width:r.right+(n.right===!0?0:n.right),top:n.top===!1?0:r.top-(n.top===!0?0:n.top),bottom:n.bottom===!1?e.height:r.bottom+(n.bottom===!0?0:n.bottom)}}var Ku=new class{constructor(){this._request=null,this._charts=new Map,this._running=!1,this._lastDate=void 0}_notify(e,t,n,r){let i=t.listeners[r],a=t.duration;i.forEach(r=>r({chart:e,initial:t.initial,numSteps:a,currentStep:Math.min(n-t.start,a)}))}_refresh(){this._request||=(this._running=!0,jc.call(window,()=>{this._update(),this._request=null,this._running&&this._refresh()}))}_update(e=Date.now()){let t=0;this._charts.forEach((n,r)=>{if(!n.running||!n.items.length)return;let i=n.items,a=i.length-1,o=!1,s;for(;a>=0;--a)s=i[a],s._active?(s._total>n.duration&&(n.duration=s._total),s.tick(e),o=!0):(i[a]=i[i.length-1],i.pop());o&&(r.draw(),this._notify(r,n,e,`progress`)),i.length||(n.running=!1,this._notify(r,n,e,`complete`),n.initial=!1),t+=i.length}),this._lastDate=e,t===0&&(this._running=!1)}_getAnims(e){let t=this._charts,n=t.get(e);return n||(n={running:!1,initial:!0,items:[],listeners:{complete:[],progress:[]}},t.set(e,n)),n}listen(e,t,n){this._getAnims(e).listeners[t].push(n)}add(e,t){!t||!t.length||this._getAnims(e).items.push(...t)}has(e){return this._getAnims(e).items.length>0}start(e){let t=this._charts.get(e);t&&(t.running=!0,t.start=Date.now(),t.duration=t.items.reduce((e,t)=>Math.max(e,t._duration),0),this._refresh())}running(e){if(!this._running)return!1;let t=this._charts.get(e);return!(!t||!t.running||!t.items.length)}stop(e){let t=this._charts.get(e);if(!t||!t.items.length)return;let n=t.items,r=n.length-1;for(;r>=0;--r)n[r].cancel();t.items=[],this._notify(e,t,Date.now(),`complete`)}remove(e){return this._charts.delete(e)}},qu=`transparent`,Ju={boolean(e,t,n){return n>.5?t:e},color(e,t,n){let r=Wc(e||qu),i=r.valid&&Wc(t||qu);return i&&i.valid?i.mix(r,n).hexString():t},number(e,t,n){return e+(t-e)*n}},Yu=class{constructor(e,t,n,r){let i=t[n];r=Nl([e.to,r,i,e.from]);let a=Nl([e.from,i,r]);this._active=!0,this._fn=e.fn||Ju[e.type||typeof a],this._easing=Hc[e.easing]||Hc.linear,this._start=Math.floor(Date.now()+(e.delay||0)),this._duration=this._total=Math.floor(e.duration),this._loop=!!e.loop,this._target=t,this._prop=n,this._from=a,this._to=r,this._promises=void 0}active(){return this._active}update(e,t,n){if(this._active){this._notify(!1);let r=this._target[this._prop],i=n-this._start,a=this._duration-i;this._start=n,this._duration=Math.floor(Math.max(a,e.duration)),this._total+=i,this._loop=!!e.loop,this._to=Nl([e.to,t,r,e.from]),this._from=Nl([e.from,r,t])}}cancel(){this._active&&(this.tick(Date.now()),this._active=!1,this._notify(!1))}tick(e){let t=e-this._start,n=this._duration,r=this._prop,i=this._from,a=this._loop,o=this._to,s;if(this._active=i!==o&&(a||t<n),!this._active){this._target[r]=o,this._notify(!0);return}if(t<0){this._target[r]=i;return}s=t/n%2,s=a&&s>1?2-s:s,s=this._easing(Math.min(1,Math.max(0,s))),this._target[r]=this._fn(i,o,s)}wait(){let e=this._promises||=[];return new Promise((t,n)=>{e.push({res:t,rej:n})})}_notify(e){let t=e?`res`:`rej`,n=this._promises||[];for(let e=0;e<n.length;e++)n[e][t]()}},Xu=class{constructor(e,t){this._chart=e,this._properties=new Map,this.configure(t)}configure(e){if(!V(e))return;let t=Object.keys(K.animation),n=this._properties;Object.getOwnPropertyNames(e).forEach(r=>{let i=e[r];if(!V(i))return;let a={};for(let e of t)a[e]=i[e];(ks(i.properties)&&i.properties||[r]).forEach(e=>{(e===r||!n.has(e))&&n.set(e,a)})})}_animateOptions(e,t){let n=t.options,r=Qu(e,n);if(!r)return[];let i=this._createAnimations(r,n);return n.$shared&&Zu(e.options.$animations,n).then(()=>{e.options=n},()=>{}),i}_createAnimations(e,t){let n=this._properties,r=[],i=e.$animations||={},a=Object.keys(t),o=Date.now(),s;for(s=a.length-1;s>=0;--s){let c=a[s];if(c.charAt(0)===`$`)continue;if(c===`options`){r.push(...this._animateOptions(e,t));continue}let l=t[c],u=i[c],d=n.get(c);if(u)if(d&&u.active()){u.update(d,l,o);continue}else u.cancel();if(!d||!d.duration){e[c]=l;continue}i[c]=u=new Yu(d,e,c,l),r.push(u)}return r}update(e,t){if(this._properties.size===0){Object.assign(e,t);return}let n=this._createAnimations(e,t);if(n.length)return Ku.add(this._chart,n),!0}};function Zu(e,t){let n=[],r=Object.keys(t);for(let t=0;t<r.length;t++){let i=e[r[t]];i&&i.active()&&n.push(i.wait())}return Promise.all(n)}function Qu(e,t){if(!t)return;let n=e.options;if(!n){e.options=t;return}return n.$shared&&(e.options=n=Object.assign({},n,{$shared:!1,$animations:{}})),n}function $u(e,t){let n=e&&e.options||{},r=n.reverse,i=n.min===void 0?t:0,a=n.max===void 0?t:0;return{start:r?a:i,end:r?i:a}}function ed(e,t,n){if(n===!1)return!1;let r=$u(e,n),i=$u(t,n);return{top:i.end,right:r.end,bottom:i.start,left:r.start}}function td(e){let t,n,r,i;return V(e)?(t=e.top,n=e.right,r=e.bottom,i=e.left):t=n=r=i=e,{top:t,right:n,bottom:r,left:i,disabled:e===!1}}function nd(e,t){let n=[],r=e._getSortedDatasetMetas(t),i,a;for(i=0,a=r.length;i<a;++i)n.push(r[i].index);return n}function rd(e,t,n,r={}){let i=e.keys,a=r.mode===`single`,o,s,c,l;if(t===null)return;let u=!1;for(o=0,s=i.length;o<s;++o){if(c=+i[o],c===n){if(u=!0,r.all)continue;break}l=e.values[c],As(l)&&(a||t===0||ic(t)===ic(l))&&(t+=l)}return!u&&!r.all?0:t}function id(e,t){let{iScale:n,vScale:r}=t,i=n.axis===`x`?`x`:`y`,a=r.axis===`x`?`x`:`y`,o=Object.keys(e),s=Array(o.length),c,l,u;for(c=0,l=o.length;c<l;++c)u=o[c],s[c]={[i]:u,[a]:e[u]};return s}function ad(e,t){let n=e&&e.options.stacked;return n||n===void 0&&t.stack!==void 0}function od(e,t,n){return`${e.id}.${t.id}.${n.stack||n.type}`}function sd(e){let{min:t,max:n,minDefined:r,maxDefined:i}=e.getUserBounds();return{min:r?t:-1/0,max:i?n:1/0}}function cd(e,t,n){let r=e[t]||(e[t]={});return r[n]||(r[n]={})}function ld(e,t,n,r){for(let i of t.getMatchingVisibleMetas(r).reverse()){let t=e[i.index];if(n&&t>0||!n&&t<0)return i.index}return null}function ud(e,t){let{chart:n,_cachedMeta:r}=e,i=n._stacks||={},{iScale:a,vScale:o,index:s}=r,c=a.axis,l=o.axis,u=od(a,o,r),d=t.length,f;for(let e=0;e<d;++e){let n=t[e],{[c]:a,[l]:d}=n,p=n._stacks||={};f=p[l]=cd(i,u,a),f[s]=d,f._top=ld(f,o,!0,r.type),f._bottom=ld(f,o,!1,r.type);let m=f._visualValues||={};m[s]=d}}function dd(e,t){let n=e.scales;return Object.keys(n).filter(e=>n[e].axis===t).shift()}function fd(e,t){return Fl(e,{active:!1,dataset:void 0,datasetIndex:t,index:t,mode:`default`,type:`dataset`})}function pd(e,t,n){return Fl(e,{active:!1,dataIndex:t,parsed:void 0,raw:void 0,element:n,index:t,mode:`default`,type:`data`})}function md(e,t){let n=e.controller.index,r=e.vScale&&e.vScale.axis;if(r){t||=e._parsed;for(let e of t){let t=e._stacks;if(!t||t[r]===void 0||t[r][n]===void 0)return;delete t[r][n],t[r]._visualValues!==void 0&&t[r]._visualValues[n]!==void 0&&delete t[r]._visualValues[n]}}}var hd=e=>e===`reset`||e===`none`,gd=(e,t)=>t?e:Object.assign({},e),_d=(e,t,n)=>e&&!t.hidden&&t._stacked&&{keys:nd(n,!0),values:null},vd=class{static defaults={};static datasetElementType=null;static dataElementType=null;constructor(e,t){this.chart=e,this._ctx=e.ctx,this.index=t,this._cachedDataOpts={},this._cachedMeta=this.getMeta(),this._type=this._cachedMeta.type,this.options=void 0,this._parsing=!1,this._data=void 0,this._objectData=void 0,this._sharedOptions=void 0,this._drawStart=void 0,this._drawCount=void 0,this.enableOptionSharing=!1,this.supportsDecimation=!1,this.$context=void 0,this._syncList=[],this.datasetElementType=new.target.datasetElementType,this.dataElementType=new.target.dataElementType,this.initialize()}initialize(){let e=this._cachedMeta;this.configure(),this.linkScales(),e._stacked=ad(e.vScale,e),this.addElements(),this.options.fill&&!this.chart.isPluginEnabled(`filler`)&&console.warn(`Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options`)}updateIndex(e){this.index!==e&&md(this._cachedMeta),this.index=e}linkScales(){let e=this.chart,t=this._cachedMeta,n=this.getDataset(),r=(e,t,n,r)=>e===`x`?t:e===`r`?r:n,i=t.xAxisID=H(n.xAxisID,dd(e,`x`)),a=t.yAxisID=H(n.yAxisID,dd(e,`y`)),o=t.rAxisID=H(n.rAxisID,dd(e,`r`)),s=t.indexAxis,c=t.iAxisID=r(s,i,a,o),l=t.vAxisID=r(s,a,i,o);t.xScale=this.getScaleForId(i),t.yScale=this.getScaleForId(a),t.rScale=this.getScaleForId(o),t.iScale=this.getScaleForId(c),t.vScale=this.getScaleForId(l)}getDataset(){return this.chart.data.datasets[this.index]}getMeta(){return this.chart.getDatasetMeta(this.index)}getScaleForId(e){return this.chart.scales[e]}_getOtherScale(e){let t=this._cachedMeta;return e===t.iScale?t.vScale:t.iScale}reset(){this._update(`reset`)}_destroy(){let e=this._cachedMeta;this._data&&kc(this._data,this),e._stacked&&md(e)}_dataCheck(){let e=this.getDataset(),t=e.data||=[],n=this._data;if(V(t)){let e=this._cachedMeta;this._data=id(t,e)}else if(n!==t){if(n){kc(n,this);let e=this._cachedMeta;md(e),e._parsed=[]}t&&Object.isExtensible(t)&&Oc(t,this),this._syncList=[],this._data=t}}addElements(){let e=this._cachedMeta;this._dataCheck(),this.datasetElementType&&(e.dataset=new this.datasetElementType)}buildOrUpdateElements(e){let t=this._cachedMeta,n=this.getDataset(),r=!1;this._dataCheck();let i=t._stacked;t._stacked=ad(t.vScale,t),t.stack!==n.stack&&(r=!0,md(t),t.stack=n.stack),this._resyncElements(e),(r||i!==t._stacked)&&(ud(this,t._parsed),t._stacked=ad(t.vScale,t))}configure(){let e=this.chart.config,t=e.datasetScopeKeys(this._type),n=e.getOptionScopes(this.getDataset(),t,!0);this.options=e.createResolver(n,this.getContext()),this._parsing=this.options.parsing,this._cachedDataOpts={}}parse(e,t){let{_cachedMeta:n,_data:r}=this,{iScale:i,_stacked:a}=n,o=i.axis,s=e===0&&t===r.length||n._sorted,c=e>0&&n._parsed[e-1],l,u,d;if(this._parsing===!1)n._parsed=r,n._sorted=!0,d=r;else{d=ks(r[e])?this.parseArrayData(n,r,e,t):V(r[e])?this.parseObjectData(n,r,e,t):this.parsePrimitiveData(n,r,e,t);let i=()=>u[o]===null||c&&u[o]<c[o];for(l=0;l<t;++l)n._parsed[l+e]=u=d[l],s&&(i()&&(s=!1),c=u);n._sorted=s}a&&ud(this,d)}parsePrimitiveData(e,t,n,r){let{iScale:i,vScale:a}=e,o=i.axis,s=a.axis,c=i.getLabels(),l=i===a,u=Array(r),d,f,p;for(d=0,f=r;d<f;++d)p=d+n,u[d]={[o]:l||i.parse(c[p],p),[s]:a.parse(t[p],p)};return u}parseArrayData(e,t,n,r){let{xScale:i,yScale:a}=e,o=Array(r),s,c,l,u;for(s=0,c=r;s<c;++s)l=s+n,u=t[l],o[s]={x:i.parse(u[0],l),y:a.parse(u[1],l)};return o}parseObjectData(e,t,n,r){let{xScale:i,yScale:a}=e,{xAxisKey:o=`x`,yAxisKey:s=`y`}=this._parsing,c=Array(r),l,u,d,f;for(l=0,u=r;l<u;++l)d=l+n,f=t[d],c[l]={x:i.parse(Ws(f,o),d),y:a.parse(Ws(f,s),d)};return c}getParsed(e){return this._cachedMeta._parsed[e]}getDataElement(e){return this._cachedMeta.data[e]}applyStack(e,t,n){let r=this.chart,i=this._cachedMeta,a=t[e.axis];return rd({keys:nd(r,!0),values:t._stacks[e.axis]._visualValues},a,i.index,{mode:n})}updateRangeFromParsed(e,t,n,r){let i=n[t.axis],a=i===null?NaN:i,o=r&&n._stacks[t.axis];r&&o&&(r.values=o,a=rd(r,i,this._cachedMeta.index)),e.min=Math.min(e.min,a),e.max=Math.max(e.max,a)}getMinMax(e,t){let n=this._cachedMeta,r=n._parsed,i=n._sorted&&e===n.iScale,a=r.length,o=this._getOtherScale(e),s=_d(t,n,this.chart),c={min:1/0,max:-1/0},{min:l,max:u}=sd(o),d,f;function p(){f=r[d];let t=f[o.axis];return!As(f[e.axis])||l>t||u<t}for(d=0;d<a&&!(!p()&&(this.updateRangeFromParsed(c,e,f,s),i));++d);if(i){for(d=a-1;d>=0;--d)if(!p()){this.updateRangeFromParsed(c,e,f,s);break}}return c}getAllParsedValues(e){let t=this._cachedMeta._parsed,n=[],r,i,a;for(r=0,i=t.length;r<i;++r)a=t[r][e.axis],As(a)&&n.push(a);return n}getMaxOverflow(){return!1}getLabelAndValue(e){let t=this._cachedMeta,n=t.iScale,r=t.vScale,i=this.getParsed(e);return{label:n?``+n.getLabelForValue(i[n.axis]):``,value:r?``+r.getLabelForValue(i[r.axis]):``}}_update(e){let t=this._cachedMeta;this.update(e||`default`),t._clip=td(H(this.options.clip,ed(t.xScale,t.yScale,this.getMaxOverflow())))}update(e){}draw(){let e=this._ctx,t=this.chart,n=this._cachedMeta,r=n.data||[],i=t.chartArea,a=[],o=this._drawStart||0,s=this._drawCount||r.length-o,c=this.options.drawActiveElementsOnTop,l;for(n.dataset&&n.dataset.draw(e,i,o,s),l=o;l<o+s;++l){let t=r[l];t.hidden||(t.active&&c?a.push(t):t.draw(e,i))}for(l=0;l<a.length;++l)a[l].draw(e,i)}getStyle(e,t){let n=t?`active`:`default`;return e===void 0&&this._cachedMeta.dataset?this.resolveDatasetElementOptions(n):this.resolveDataElementOptions(e||0,n)}getContext(e,t,n){let r=this.getDataset(),i;if(e>=0&&e<this._cachedMeta.data.length){let t=this._cachedMeta.data[e];i=t.$context||=pd(this.getContext(),e,t),i.parsed=this.getParsed(e),i.raw=r.data[e],i.index=i.dataIndex=e}else i=this.$context||=fd(this.chart.getContext(),this.index),i.dataset=r,i.index=i.datasetIndex=this.index;return i.active=!!t,i.mode=n,i}resolveDatasetElementOptions(e){return this._resolveElementOptions(this.datasetElementType.id,e)}resolveDataElementOptions(e,t){return this._resolveElementOptions(this.dataElementType.id,t,e)}_resolveElementOptions(e,t=`default`,n){let r=t===`active`,i=this._cachedDataOpts,a=e+`-`+t,o=i[a],s=this.enableOptionSharing&&Ks(n);if(o)return gd(o,s);let c=this.chart.config,l=c.datasetElementScopeKeys(this._type,e),u=r?[`${e}Hover`,`hover`,e,``]:[e,``],d=c.getOptionScopes(this.getDataset(),l),f=Object.keys(K.elements[e]),p=c.resolveNamedOptions(d,f,()=>this.getContext(n,r,t),u);return p.$shared&&(p.$shared=s,i[a]=Object.freeze(gd(p,s))),p}_resolveAnimations(e,t,n){let r=this.chart,i=this._cachedDataOpts,a=`animation-${t}`,o=i[a];if(o)return o;let s;if(r.options.animation!==!1){let r=this.chart.config,i=r.datasetAnimationScopeKeys(this._type,t),a=r.getOptionScopes(this.getDataset(),i);s=r.createResolver(a,this.getContext(e,n,t))}let c=new Xu(r,s&&s.animations);return s&&s._cacheable&&(i[a]=Object.freeze(c)),c}getSharedOptions(e){if(e.$shared)return this._sharedOptions||=Object.assign({},e)}includeOptions(e,t){return!t||hd(e)||this.chart._animationsDisabled}_getSharedOptions(e,t){let n=this.resolveDataElementOptions(e,t),r=this._sharedOptions,i=this.getSharedOptions(n),a=this.includeOptions(t,i)||i!==r;return this.updateSharedOptions(i,t,n),{sharedOptions:i,includeOptions:a}}updateElement(e,t,n,r){hd(r)?Object.assign(e,n):this._resolveAnimations(t,r).update(e,n)}updateSharedOptions(e,t,n){e&&!hd(t)&&this._resolveAnimations(void 0,t).update(e,n)}_setStyle(e,t,n,r){e.active=r;let i=this.getStyle(t,r);this._resolveAnimations(t,n,r).update(e,{options:!r&&this.getSharedOptions(i)||i})}removeHoverStyle(e,t,n){this._setStyle(e,n,`active`,!1)}setHoverStyle(e,t,n){this._setStyle(e,n,`active`,!0)}_removeDatasetHoverStyle(){let e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,`active`,!1)}_setDatasetHoverStyle(){let e=this._cachedMeta.dataset;e&&this._setStyle(e,void 0,`active`,!0)}_resyncElements(e){let t=this._data,n=this._cachedMeta.data;for(let[e,t,n]of this._syncList)this[e](t,n);this._syncList=[];let r=n.length,i=t.length,a=Math.min(i,r);a&&this.parse(0,a),i>r?this._insertElements(r,i-r,e):i<r&&this._removeElements(i,r-i)}_insertElements(e,t,n=!0){let r=this._cachedMeta,i=r.data,a=e+t,o,s=e=>{for(e.length+=t,o=e.length-1;o>=a;o--)e[o]=e[o-t]};for(s(i),o=e;o<a;++o)i[o]=new this.dataElementType;this._parsing&&s(r._parsed),this.parse(e,t),n&&this.updateElements(i,e,t,`reset`)}updateElements(e,t,n,r){}_removeElements(e,t){let n=this._cachedMeta;if(this._parsing){let r=n._parsed.splice(e,t);n._stacked&&md(n,r)}n.data.splice(e,t)}_sync(e){if(this._parsing)this._syncList.push(e);else{let[t,n,r]=e;this[t](n,r)}this.chart._dataChanges.push([this.index,...e])}_onDataPush(){let e=arguments.length;this._sync([`_insertElements`,this.getDataset().data.length-e,e])}_onDataPop(){this._sync([`_removeElements`,this._cachedMeta.data.length-1,1])}_onDataShift(){this._sync([`_removeElements`,0,1])}_onDataSplice(e,t){t&&this._sync([`_removeElements`,e,t]);let n=arguments.length-2;n&&this._sync([`_insertElements`,e,n])}_onDataUnshift(){this._sync([`_insertElements`,0,arguments.length])}};function yd(e,t){if(!e._cache.$bar){let n=e.getMatchingVisibleMetas(t),r=[];for(let t=0,i=n.length;t<i;t++)r=r.concat(n[t].controller.getAllParsedValues(e));e._cache.$bar=Ac(r.sort((e,t)=>e-t))}return e._cache.$bar}function Q(e){let t=e.iScale,n=yd(t,e.type),r=t._length,i,a,o,s,c=()=>{o===32767||o===-32768||(Ks(s)&&(r=Math.min(r,Math.abs(o-s)||r)),s=o)};for(i=0,a=n.length;i<a;++i)o=t.getPixelForValue(n[i]),c();for(s=void 0,i=0,a=t.ticks.length;i<a;++i)o=t.getPixelForTick(i),c();return r}function bd(e,t,n,r){let i=n.barThickness,a,o;return B(i)?(a=t.min*n.categoryPercentage,o=n.barPercentage):(a=i*r,o=1),{chunk:a/r,ratio:o,start:t.pixels[e]-a/2}}function xd(e,t,n,r){let i=t.pixels,a=i[e],o=e>0?i[e-1]:null,s=e<i.length-1?i[e+1]:null,c=n.categoryPercentage;o===null&&(o=a-(s===null?t.end-t.start:s-a)),s===null&&(s=a+a-o);let l=a-(a-Math.min(o,s))/2*c;return{chunk:Math.abs(s-o)/2*c/r,ratio:n.barPercentage,start:l}}function Sd(e,t,n,r){let i=n.parse(e[0],r),a=n.parse(e[1],r),o=Math.min(i,a),s=Math.max(i,a),c=o,l=s;Math.abs(o)>Math.abs(s)&&(c=s,l=o),t[n.axis]=l,t._custom={barStart:c,barEnd:l,start:i,end:a,min:o,max:s}}function Cd(e,t,n,r){return ks(e)?Sd(e,t,n,r):t[n.axis]=n.parse(e,r),t}function wd(e,t,n,r){let i=e.iScale,a=e.vScale,o=i.getLabels(),s=i===a,c=[],l,u,d,f;for(l=n,u=n+r;l<u;++l)f=t[l],d={},d[i.axis]=s||i.parse(o[l],l),c.push(Cd(f,d,a,l));return c}function Td(e){return e&&e.barStart!==void 0&&e.barEnd!==void 0}function Ed(e,t,n){return e===0?(t.isHorizontal()?1:-1)*(t.min>=n?1:-1):ic(e)}function Dd(e){let t,n,r,i,a;return e.horizontal?(t=e.base>e.x,n=`left`,r=`right`):(t=e.base<e.y,n=`bottom`,r=`top`),t?(i=`end`,a=`start`):(i=`start`,a=`end`),{start:n,end:r,reverse:t,top:i,bottom:a}}function Od(e,t,n,r){let i=t.borderSkipped,a={};if(!i){e.borderSkipped=a;return}if(i===!0){e.borderSkipped={top:!0,right:!0,bottom:!0,left:!0};return}let{start:o,end:s,reverse:c,top:l,bottom:u}=Dd(e);i===`middle`&&n&&(e.enableBorderRadius=!0,(n._top||0)===r?i=l:(n._bottom||0)===r?i=u:(a[kd(u,o,s,c)]=!0,i=l)),a[kd(i,o,s,c)]=!0,e.borderSkipped=a}function kd(e,t,n,r){return r?(e=Ad(e,t,n),e=jd(e,n,t)):e=jd(e,t,n),e}function Ad(e,t,n){return e===t?n:e===n?t:e}function jd(e,t,n){return e===`start`?t:e===`end`?n:e}function Md(e,{inflateAmount:t},n){e.inflateAmount=t===`auto`?n===1?.33:0:t}var $=class extends vd{static id=`bar`;static defaults={datasetElementType:!1,dataElementType:`bar`,categoryPercentage:.8,barPercentage:.9,grouped:!0,animations:{numbers:{type:`number`,properties:[`x`,`y`,`base`,`width`,`height`]}}};static overrides={scales:{_index_:{type:`category`,offset:!0,grid:{offset:!0}},_value_:{type:`linear`,beginAtZero:!0}}};parsePrimitiveData(e,t,n,r){return wd(e,t,n,r)}parseArrayData(e,t,n,r){return wd(e,t,n,r)}parseObjectData(e,t,n,r){let{iScale:i,vScale:a}=e,{xAxisKey:o=`x`,yAxisKey:s=`y`}=this._parsing,c=i.axis===`x`?o:s,l=a.axis===`x`?o:s,u=[],d,f,p,m;for(d=n,f=n+r;d<f;++d)m=t[d],p={},p[i.axis]=i.parse(Ws(m,c),d),u.push(Cd(Ws(m,l),p,a,d));return u}updateRangeFromParsed(e,t,n,r){super.updateRangeFromParsed(e,t,n,r);let i=n._custom;i&&t===this._cachedMeta.vScale&&(e.min=Math.min(e.min,i.min),e.max=Math.max(e.max,i.max))}getMaxOverflow(){return 0}getLabelAndValue(e){let{iScale:t,vScale:n}=this._cachedMeta,r=this.getParsed(e),i=r._custom,a=Td(i)?`[`+i.start+`, `+i.end+`]`:``+n.getLabelForValue(r[n.axis]);return{label:``+t.getLabelForValue(r[t.axis]),value:a}}initialize(){this.enableOptionSharing=!0,super.initialize();let e=this._cachedMeta;e.stack=this.getDataset().stack}update(e){let t=this._cachedMeta;this.updateElements(t.data,0,t.data.length,e)}updateElements(e,t,n,r){let i=r===`reset`,{index:a,_cachedMeta:{vScale:o}}=this,s=o.getBasePixel(),c=o.isHorizontal(),l=this._getRuler(),{sharedOptions:u,includeOptions:d}=this._getSharedOptions(t,r);for(let f=t;f<t+n;f++){let t=this.getParsed(f),n=i||B(t[o.axis])?{base:s,head:s}:this._calculateBarValuePixels(f),p=this._calculateBarIndexPixels(f,l),m=(t._stacks||{})[o.axis],h={horizontal:c,base:n.base,enableBorderRadius:!m||Td(t._custom)||a===m._top||a===m._bottom,x:c?n.head:p.center,y:c?p.center:n.head,height:c?p.size:Math.abs(n.size),width:c?Math.abs(n.size):p.size};d&&(h.options=u||this.resolveDataElementOptions(f,e[f].active?`active`:r));let g=h.options||e[f].options;Od(h,g,m,a),Md(h,g,l.ratio),this.updateElement(e[f],f,h,r)}}_getStacks(e,t){let{iScale:n}=this._cachedMeta,r=n.getMatchingVisibleMetas(this._type).filter(e=>e.controller.options.grouped),i=n.options.stacked,a=[],o=this._cachedMeta.controller.getParsed(t),s=o&&o[n.axis],c=e=>{let t=e._parsed.find(e=>e[n.axis]===s),r=t&&t[e.vScale.axis];if(B(r)||isNaN(r))return!0};for(let n of r)if(!(t!==void 0&&c(n))&&((i===!1||a.indexOf(n.stack)===-1||i===void 0&&n.stack===void 0)&&a.push(n.stack),n.index===e))break;return a.length||a.push(void 0),a}_getStackCount(e){return this._getStacks(void 0,e).length}_getAxisCount(){return this._getAxis().length}getFirstScaleIdForIndexAxis(){let e=this.chart.scales,t=this.chart.options.indexAxis;return Object.keys(e).filter(n=>e[n].axis===t).shift()}_getAxis(){let e={},t=this.getFirstScaleIdForIndexAxis();for(let n of this.chart.data.datasets)e[H(this.chart.options.indexAxis===`x`?n.xAxisID:n.yAxisID,t)]=!0;return Object.keys(e)}_getStackIndex(e,t,n){let r=this._getStacks(e,n),i=t===void 0?-1:r.indexOf(t);return i===-1?r.length-1:i}_getRuler(){let e=this.options,t=this._cachedMeta,n=t.iScale,r=[],i,a;for(i=0,a=t.data.length;i<a;++i)r.push(n.getPixelForValue(this.getParsed(i)[n.axis],i));let o=e.barThickness;return{min:o||Q(t),pixels:r,start:n._startPixel,end:n._endPixel,stackCount:this._getStackCount(),scale:n,grouped:e.grouped,ratio:o?1:e.categoryPercentage*e.barPercentage}}_calculateBarValuePixels(e){let{_cachedMeta:{vScale:t,_stacked:n,index:r},options:{base:i,minBarLength:a}}=this,o=i||0,s=this.getParsed(e),c=s._custom,l=Td(c),u=s[t.axis],d=0,f=n?this.applyStack(t,s,n):u,p,m;f!==u&&(d=f-u,f=u),l&&(u=c.barStart,f=c.barEnd-c.barStart,u!==0&&ic(u)!==ic(c.barEnd)&&(d=0),d+=u);let h=!B(i)&&!l?i:d,g=t.getPixelForValue(h);if(p=this.chart.getDataVisibility(e)?t.getPixelForValue(d+f):g,m=p-g,Math.abs(m)<a){m=Ed(m,t,o)*a,u===o&&(g-=m/2);let e=t.getPixelForDecimal(0),i=t.getPixelForDecimal(1);g=Math.max(Math.min(g,Math.max(e,i)),Math.min(e,i)),p=g+m,n&&!l&&(s._stacks[t.axis]._visualValues[r]=t.getValueForPixel(p)-t.getValueForPixel(g))}if(g===t.getPixelForValue(o)){let e=ic(m)*t.getLineWidthForValue(o)/2;g+=e,m-=e}return{size:m,base:g,head:p,center:p+m/2}}_calculateBarIndexPixels(e,t){let n=t.scale,r=this.options,i=r.skipNull,a=H(r.maxBarThickness,1/0),o,s,c=this._getAxisCount();if(t.grouped){let n=i?this._getStackCount(e):t.stackCount,l=r.barThickness===`flex`?xd(e,t,r,n*c):bd(e,t,r,n*c),u=this.chart.options.indexAxis===`x`?this.getDataset().xAxisID:this.getDataset().yAxisID,d=this._getAxis().indexOf(H(u,this.getFirstScaleIdForIndexAxis())),f=this._getStackIndex(this.index,this._cachedMeta.stack,i?e:void 0)+d;o=l.start+l.chunk*f+l.chunk/2,s=Math.min(a,l.chunk*l.ratio)}else o=n.getPixelForValue(this.getParsed(e)[n.axis],e),s=Math.min(a,t.min*t.ratio);return{base:o-s/2,head:o+s/2,center:o,size:s}}draw(){let e=this._cachedMeta,t=e.vScale,n=e.data,r=n.length,i=0;for(;i<r;++i)this.getParsed(i)[t.axis]!==null&&!n[i].hidden&&n[i].draw(this._ctx)}},Nd=class extends vd{static id=`bubble`;static defaults={datasetElementType:!1,dataElementType:`point`,animations:{numbers:{type:`number`,properties:[`x`,`y`,`borderWidth`,`radius`]}}};static overrides={scales:{x:{type:`linear`},y:{type:`linear`}}};initialize(){this.enableOptionSharing=!0,super.initialize()}parsePrimitiveData(e,t,n,r){let i=super.parsePrimitiveData(e,t,n,r);for(let e=0;e<i.length;e++)i[e]._custom=this.resolveDataElementOptions(e+n).radius;return i}parseArrayData(e,t,n,r){let i=super.parseArrayData(e,t,n,r);for(let e=0;e<i.length;e++){let r=t[n+e];i[e]._custom=H(r[2],this.resolveDataElementOptions(e+n).radius)}return i}parseObjectData(e,t,n,r){let i=super.parseObjectData(e,t,n,r);for(let e=0;e<i.length;e++){let r=t[n+e];i[e]._custom=H(r&&r.r&&+r.r,this.resolveDataElementOptions(e+n).radius)}return i}getMaxOverflow(){let e=this._cachedMeta.data,t=0;for(let n=e.length-1;n>=0;--n)t=Math.max(t,e[n].size(this.resolveDataElementOptions(n))/2);return t>0&&t}getLabelAndValue(e){let t=this._cachedMeta,n=this.chart.data.labels||[],{xScale:r,yScale:i}=t,a=this.getParsed(e),o=r.getLabelForValue(a.x),s=i.getLabelForValue(a.y),c=a._custom;return{label:n[e]||``,value:`(`+o+`, `+s+(c?`, `+c:``)+`)`}}update(e){let t=this._cachedMeta.data;this.updateElements(t,0,t.length,e)}updateElements(e,t,n,r){let i=r===`reset`,{iScale:a,vScale:o}=this._cachedMeta,{sharedOptions:s,includeOptions:c}=this._getSharedOptions(t,r),l=a.axis,u=o.axis;for(let d=t;d<t+n;d++){let t=e[d],n=!i&&this.getParsed(d),f={},p=f[l]=i?a.getPixelForDecimal(.5):a.getPixelForValue(n[l]),m=f[u]=i?o.getBasePixel():o.getPixelForValue(n[u]);f.skip=isNaN(p)||isNaN(m),c&&(f.options=s||this.resolveDataElementOptions(d,t.active?`active`:r),i&&(f.options.radius=0)),this.updateElement(t,d,f,r)}}resolveDataElementOptions(e,t){let n=this.getParsed(e),r=super.resolveDataElementOptions(e,t);r.$shared&&(r=Object.assign({},r,{$shared:!1}));let i=r.radius;return t!==`active`&&(r.radius=0),r.radius+=H(n&&n._custom,i),r}};function Pd(e,t,n){let r=1,i=1,a=0,o=0;if(t<Xs){let s=e,c=s+t,l=Math.cos(s),u=Math.sin(s),d=Math.cos(c),f=Math.sin(c),p=(e,t,r)=>yc(e,s,c,!0)?1:Math.max(t,t*n,r,r*n),m=(e,t,r)=>yc(e,s,c,!0)?-1:Math.min(t,t*n,r,r*n),h=p(0,l,d),g=p(ec,u,f),_=m(G,l,d),v=m(G+ec,u,f);r=(h-_)/2,i=(g-v)/2,a=-(h+_)/2,o=-(g+v)/2}return{ratioX:r,ratioY:i,offsetX:a,offsetY:o}}var Fd=class extends vd{static id=`doughnut`;static defaults={datasetElementType:!1,dataElementType:`arc`,animation:{animateRotate:!0,animateScale:!1},animations:{numbers:{type:`number`,properties:[`circumference`,`endAngle`,`innerRadius`,`outerRadius`,`startAngle`,`x`,`y`,`offset`,`borderWidth`,`spacing`]}},cutout:`50%`,rotation:0,circumference:360,radius:`100%`,spacing:0,indexAxis:`r`};static descriptors={_scriptable:e=>e!==`spacing`,_indexable:e=>e!==`spacing`&&!e.startsWith(`borderDash`)&&!e.startsWith(`hoverBorderDash`)};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(e){let t=e.data,{labels:{pointStyle:n,textAlign:r,color:i,useBorderRadius:a,borderRadius:o}}=e.legend.options;return t.labels.length&&t.datasets.length?t.labels.map((t,s)=>{let c=e.getDatasetMeta(0).controller.getStyle(s);return{text:t,fillStyle:c.backgroundColor,fontColor:i,hidden:!e.getDataVisibility(s),lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:c.borderWidth,strokeStyle:c.borderColor,textAlign:r,pointStyle:n,borderRadius:a&&(o||c.borderRadius),index:s}}):[]}},onClick(e,t,n){n.chart.toggleDataVisibility(t.index),n.chart.update()}}}};constructor(e,t){super(e,t),this.enableOptionSharing=!0,this.innerRadius=void 0,this.outerRadius=void 0,this.offsetX=void 0,this.offsetY=void 0}linkScales(){}parse(e,t){let n=this.getDataset().data,r=this._cachedMeta;if(this._parsing===!1)r._parsed=n;else{let i=e=>+n[e];if(V(n[e])){let{key:e=`value`}=this._parsing;i=t=>+Ws(n[t],e)}let a,o;for(a=e,o=e+t;a<o;++a)r._parsed[a]=i(a)}}_getRotation(){return fc(this.options.rotation-90)}_getCircumference(){return fc(this.options.circumference)}_getRotationExtents(){let e=Xs,t=-Xs;for(let n=0;n<this.chart.data.datasets.length;++n)if(this.chart.isDatasetVisible(n)&&this.chart.getDatasetMeta(n).type===this._type){let r=this.chart.getDatasetMeta(n).controller,i=r._getRotation(),a=r._getCircumference();e=Math.min(e,i),t=Math.max(t,i+a)}return{rotation:e,circumference:t-e}}update(e){let{chartArea:t}=this.chart,n=this._cachedMeta,r=n.data,i=this.getMaxBorderWidth()+this.getMaxOffset(r)+this.options.spacing,a=Math.max((Math.min(t.width,t.height)-i)/2,0),o=Math.min(Ms(this.options.cutout,a),1),s=this._getRingWeight(this.index),{circumference:c,rotation:l}=this._getRotationExtents(),{ratioX:u,ratioY:d,offsetX:f,offsetY:p}=Pd(l,c,o),m=(t.width-i)/u,h=(t.height-i)/d,g=Math.max(Math.min(m,h)/2,0),_=Ns(this.options.radius,g),v=(_-Math.max(_*o,0))/this._getVisibleDatasetWeightTotal();this.offsetX=f*_,this.offsetY=p*_,n.total=this.calculateTotal(),this.outerRadius=_-v*this._getRingWeightOffset(this.index),this.innerRadius=Math.max(this.outerRadius-v*s,0),this.updateElements(r,0,r.length,e)}_circumference(e,t){let n=this.options,r=this._cachedMeta,i=this._getCircumference();return t&&n.animation.animateRotate||!this.chart.getDataVisibility(e)||r._parsed[e]===null||r.data[e].hidden?0:this.calculateCircumference(r._parsed[e]*i/Xs)}updateElements(e,t,n,r){let i=r===`reset`,a=this.chart,o=a.chartArea,s=a.options.animation,c=(o.left+o.right)/2,l=(o.top+o.bottom)/2,u=i&&s.animateScale,d=u?0:this.innerRadius,f=u?0:this.outerRadius,{sharedOptions:p,includeOptions:m}=this._getSharedOptions(t,r),h=this._getRotation(),g;for(g=0;g<t;++g)h+=this._circumference(g,i);for(g=t;g<t+n;++g){let t=this._circumference(g,i),n=e[g],a={x:c+this.offsetX,y:l+this.offsetY,startAngle:h,endAngle:h+t,circumference:t,outerRadius:f,innerRadius:d};m&&(a.options=p||this.resolveDataElementOptions(g,n.active?`active`:r)),h+=t,this.updateElement(n,g,a,r)}}calculateTotal(){let e=this._cachedMeta,t=e.data,n=0,r;for(r=0;r<t.length;r++){let i=e._parsed[r];i!==null&&!isNaN(i)&&this.chart.getDataVisibility(r)&&!t[r].hidden&&(n+=Math.abs(i))}return n}calculateCircumference(e){let t=this._cachedMeta.total;return t>0&&!isNaN(e)?Math.abs(e)/t*Xs:0}getLabelAndValue(e){let t=this._cachedMeta,n=this.chart,r=n.data.labels||[],i=Qc(t._parsed[e],n.options.locale);return{label:r[e]||``,value:i}}getMaxBorderWidth(e){let t=0,n=this.chart,r,i,a,o,s;if(!e){for(r=0,i=n.data.datasets.length;r<i;++r)if(n.isDatasetVisible(r)){a=n.getDatasetMeta(r),e=a.data,o=a.controller;break}}if(!e)return 0;for(r=0,i=e.length;r<i;++r)s=o.resolveDataElementOptions(r),s.borderAlign!==`inner`&&(t=Math.max(t,s.borderWidth||0,s.hoverBorderWidth||0));return t}getMaxOffset(e){let t=0;for(let n=0,r=e.length;n<r;++n){let e=this.resolveDataElementOptions(n);t=Math.max(t,e.offset||0,e.hoverOffset||0)}return t}_getRingWeightOffset(e){let t=0;for(let n=0;n<e;++n)this.chart.isDatasetVisible(n)&&(t+=this._getRingWeight(n));return t}_getRingWeight(e){return Math.max(H(this.chart.data.datasets[e].weight,1),0)}_getVisibleDatasetWeightTotal(){return this._getRingWeightOffset(this.chart.data.datasets.length)||1}},Id=class extends vd{static id=`line`;static defaults={datasetElementType:`line`,dataElementType:`point`,showLine:!0,spanGaps:!1};static overrides={scales:{_index_:{type:`category`},_value_:{type:`linear`}}};initialize(){this.enableOptionSharing=!0,this.supportsDecimation=!0,super.initialize()}update(e){let t=this._cachedMeta,{dataset:n,data:r=[],_dataset:i}=t,a=this.chart._animationsDisabled,{start:o,count:s}=Lc(t,r,a);this._drawStart=o,this._drawCount=s,Rc(t)&&(o=0,s=r.length),n._chart=this.chart,n._datasetIndex=this.index,n._decimated=!!i._decimated,n.points=r;let c=this.resolveDatasetElementOptions(e);this.options.showLine||(c.borderWidth=0),c.segment=this.options.segment,this.updateElement(n,void 0,{animated:!a,options:c},e),this.updateElements(r,o,s,e)}updateElements(e,t,n,r){let i=r===`reset`,{iScale:a,vScale:o,_stacked:s,_dataset:c}=this._cachedMeta,{sharedOptions:l,includeOptions:u}=this._getSharedOptions(t,r),d=a.axis,f=o.axis,{spanGaps:p,segment:m}=this.options,h=lc(p)?p:1/0,g=this.chart._animationsDisabled||i||r===`none`,_=t+n,v=e.length,y=t>0&&this.getParsed(t-1);for(let n=0;n<v;++n){let p=e[n],v=g?p:{};if(n<t||n>=_){v.skip=!0;continue}let b=this.getParsed(n),x=B(b[f]),S=v[d]=a.getPixelForValue(b[d],n),C=v[f]=i||x?o.getBasePixel():o.getPixelForValue(s?this.applyStack(o,b,s):b[f],n);v.skip=isNaN(S)||isNaN(C)||x,v.stop=n>0&&Math.abs(b[d]-y[d])>h,m&&(v.parsed=b,v.raw=c.data[n]),u&&(v.options=l||this.resolveDataElementOptions(n,p.active?`active`:r)),g||this.updateElement(p,n,v,r),y=b}}getMaxOverflow(){let e=this._cachedMeta,t=e.dataset,n=t.options&&t.options.borderWidth||0,r=e.data||[];if(!r.length)return n;let i=r[0].size(this.resolveDataElementOptions(0)),a=r[r.length-1].size(this.resolveDataElementOptions(r.length-1));return Math.max(n,i,a)/2}draw(){let e=this._cachedMeta;e.dataset.updateControlPoints(this.chart.chartArea,e.iScale.axis),super.draw()}},Ld=class extends vd{static id=`polarArea`;static defaults={dataElementType:`arc`,animation:{animateRotate:!0,animateScale:!0},animations:{numbers:{type:`number`,properties:[`x`,`y`,`startAngle`,`endAngle`,`innerRadius`,`outerRadius`]}},indexAxis:`r`,startAngle:0};static overrides={aspectRatio:1,plugins:{legend:{labels:{generateLabels(e){let t=e.data;if(t.labels.length&&t.datasets.length){let{labels:{pointStyle:n,color:r}}=e.legend.options;return t.labels.map((t,i)=>{let a=e.getDatasetMeta(0).controller.getStyle(i);return{text:t,fillStyle:a.backgroundColor,strokeStyle:a.borderColor,fontColor:r,lineWidth:a.borderWidth,pointStyle:n,hidden:!e.getDataVisibility(i),index:i}})}return[]}},onClick(e,t,n){n.chart.toggleDataVisibility(t.index),n.chart.update()}}},scales:{r:{type:`radialLinear`,angleLines:{display:!1},beginAtZero:!0,grid:{circular:!0},pointLabels:{display:!1},startAngle:0}}};constructor(e,t){super(e,t),this.innerRadius=void 0,this.outerRadius=void 0}getLabelAndValue(e){let t=this._cachedMeta,n=this.chart,r=n.data.labels||[],i=Qc(t._parsed[e].r,n.options.locale);return{label:r[e]||``,value:i}}parseObjectData(e,t,n,r){return Zl.bind(this)(e,t,n,r)}update(e){let t=this._cachedMeta.data;this._updateRadius(),this.updateElements(t,0,t.length,e)}getMinMax(){let e=this._cachedMeta,t={min:1/0,max:-1/0};return e.data.forEach((e,n)=>{let r=this.getParsed(n).r;!isNaN(r)&&this.chart.getDataVisibility(n)&&(r<t.min&&(t.min=r),r>t.max&&(t.max=r))}),t}_updateRadius(){let e=this.chart,t=e.chartArea,n=e.options,r=Math.min(t.right-t.left,t.bottom-t.top),i=Math.max(r/2,0),a=(i-Math.max(n.cutoutPercentage?i/100*n.cutoutPercentage:1,0))/e.getVisibleDatasetCount();this.outerRadius=i-a*this.index,this.innerRadius=this.outerRadius-a}updateElements(e,t,n,r){let i=r===`reset`,a=this.chart,o=a.options.animation,s=this._cachedMeta.rScale,c=s.xCenter,l=s.yCenter,u=s.getIndexAngle(0)-.5*G,d=u,f,p=360/this.countVisibleElements();for(f=0;f<t;++f)d+=this._computeAngle(f,r,p);for(f=t;f<t+n;f++){let t=e[f],n=d,m=d+this._computeAngle(f,r,p),h=a.getDataVisibility(f)?s.getDistanceFromCenterForValue(this.getParsed(f).r):0;d=m,i&&(o.animateScale&&(h=0),o.animateRotate&&(n=m=u));let g={x:c,y:l,innerRadius:0,outerRadius:h,startAngle:n,endAngle:m,options:this.resolveDataElementOptions(f,t.active?`active`:r)};this.updateElement(t,f,g,r)}}countVisibleElements(){let e=this._cachedMeta,t=0;return e.data.forEach((e,n)=>{!isNaN(this.getParsed(n).r)&&this.chart.getDataVisibility(n)&&t++}),t}_computeAngle(e,t,n){return this.chart.getDataVisibility(e)?fc(this.resolveDataElementOptions(e,t).angle||n):0}},Rd=Object.freeze({__proto__:null,BarController:$,BubbleController:Nd,DoughnutController:Fd,LineController:Id,PieController:class extends Fd{static id=`pie`;static defaults={cutout:0,rotation:0,circumference:360,radius:`100%`}},PolarAreaController:Ld,RadarController:class extends vd{static id=`radar`;static defaults={datasetElementType:`line`,dataElementType:`point`,indexAxis:`r`,showLine:!0,elements:{line:{fill:`start`}}};static overrides={aspectRatio:1,scales:{r:{type:`radialLinear`}}};getLabelAndValue(e){let t=this._cachedMeta.vScale,n=this.getParsed(e);return{label:t.getLabels()[e],value:``+t.getLabelForValue(n[t.axis])}}parseObjectData(e,t,n,r){return Zl.bind(this)(e,t,n,r)}update(e){let t=this._cachedMeta,n=t.dataset,r=t.data||[],i=t.iScale.getLabels();if(n.points=r,e!==`resize`){let t=this.resolveDatasetElementOptions(e);this.options.showLine||(t.borderWidth=0);let a={_loop:!0,_fullLoop:i.length===r.length,options:t};this.updateElement(n,void 0,a,e)}this.updateElements(r,0,r.length,e)}updateElements(e,t,n,r){let i=this._cachedMeta.rScale,a=r===`reset`;for(let o=t;o<t+n;o++){let t=e[o],n=this.resolveDataElementOptions(o,t.active?`active`:r),s=i.getPointPositionForValue(o,this.getParsed(o).r),c=a?i.xCenter:s.x,l=a?i.yCenter:s.y,u={x:c,y:l,angle:s.angle,skip:isNaN(c)||isNaN(l),options:n};this.updateElement(t,o,u,r)}}},ScatterController:class extends vd{static id=`scatter`;static defaults={datasetElementType:!1,dataElementType:`point`,showLine:!1,fill:!1};static overrides={interaction:{mode:`point`},scales:{x:{type:`linear`},y:{type:`linear`}}};getLabelAndValue(e){let t=this._cachedMeta,n=this.chart.data.labels||[],{xScale:r,yScale:i}=t,a=this.getParsed(e),o=r.getLabelForValue(a.x),s=i.getLabelForValue(a.y);return{label:n[e]||``,value:`(`+o+`, `+s+`)`}}update(e){let t=this._cachedMeta,{data:n=[]}=t,r=this.chart._animationsDisabled,{start:i,count:a}=Lc(t,n,r);if(this._drawStart=i,this._drawCount=a,Rc(t)&&(i=0,a=n.length),this.options.showLine){this.datasetElementType||this.addElements();let{dataset:i,_dataset:a}=t;i._chart=this.chart,i._datasetIndex=this.index,i._decimated=!!a._decimated,i.points=n;let o=this.resolveDatasetElementOptions(e);o.segment=this.options.segment,this.updateElement(i,void 0,{animated:!r,options:o},e)}else this.datasetElementType&&=(delete t.dataset,!1);this.updateElements(n,i,a,e)}addElements(){let{showLine:e}=this.options;!this.datasetElementType&&e&&(this.datasetElementType=this.chart.registry.getElement(`line`)),super.addElements()}updateElements(e,t,n,r){let i=r===`reset`,{iScale:a,vScale:o,_stacked:s,_dataset:c}=this._cachedMeta,l=this.resolveDataElementOptions(t,r),u=this.getSharedOptions(l),d=this.includeOptions(r,u),f=a.axis,p=o.axis,{spanGaps:m,segment:h}=this.options,g=lc(m)?m:1/0,_=this.chart._animationsDisabled||i||r===`none`,v=t>0&&this.getParsed(t-1);for(let l=t;l<t+n;++l){let t=e[l],n=this.getParsed(l),m=_?t:{},y=B(n[p]),b=m[f]=a.getPixelForValue(n[f],l),x=m[p]=i||y?o.getBasePixel():o.getPixelForValue(s?this.applyStack(o,n,s):n[p],l);m.skip=isNaN(b)||isNaN(x)||y,m.stop=l>0&&Math.abs(n[f]-v[f])>g,h&&(m.parsed=n,m.raw=c.data[l]),d&&(m.options=u||this.resolveDataElementOptions(l,t.active?`active`:r)),_||this.updateElement(t,l,m,r),v=n}this.updateSharedOptions(u,r,l)}getMaxOverflow(){let e=this._cachedMeta,t=e.data||[];if(!this.options.showLine){let e=0;for(let n=t.length-1;n>=0;--n)e=Math.max(e,t[n].size(this.resolveDataElementOptions(n))/2);return e>0&&e}let n=e.dataset,r=n.options&&n.options.borderWidth||0;if(!t.length)return r;let i=t[0].size(this.resolveDataElementOptions(0)),a=t[t.length-1].size(this.resolveDataElementOptions(t.length-1));return Math.max(r,i,a)/2}}});function zd(){throw Error(`This method is not implemented: Check that a complete date adapter is provided.`)}var Bd={_date:class e{static override(t){Object.assign(e.prototype,t)}options;constructor(e){this.options=e||{}}init(){}formats(){return zd()}parse(){return zd()}format(){return zd()}add(){return zd()}diff(){return zd()}startOf(){return zd()}endOf(){return zd()}}};function Vd(e,t,n,r){let{controller:i,data:a,_sorted:o}=e,s=i._cachedMeta.iScale,c=e.dataset&&e.dataset.options?e.dataset.options.spanGaps:null;if(s&&t===s.axis&&t!==`r`&&o&&a.length){let o=s._reversePixels?Tc:wc;if(!r){let r=o(a,t,n);if(c){let{vScale:t}=i._cachedMeta,{_parsed:n}=e,a=n.slice(0,r.lo+1).reverse().findIndex(e=>!B(e[t.axis]));r.lo-=Math.max(0,a);let o=n.slice(r.hi).findIndex(e=>!B(e[t.axis]));r.hi+=Math.max(0,o)}return r}else if(i._sharedOptions){let e=a[0],r=typeof e.getRange==`function`&&e.getRange(t);if(r){let e=o(a,t,n-r),i=o(a,t,n+r);return{lo:e.lo,hi:i.hi}}}}return{lo:0,hi:a.length-1}}function Hd(e,t,n,r,i){let a=e.getSortedVisibleDatasetMetas(),o=n[t];for(let e=0,n=a.length;e<n;++e){let{index:n,data:s}=a[e],{lo:c,hi:l}=Vd(a[e],t,o,i);for(let e=c;e<=l;++e){let t=s[e];t.skip||r(t,n,e)}}}function Ud(e){let t=e.indexOf(`x`)!==-1,n=e.indexOf(`y`)!==-1;return function(e,r){let i=t?Math.abs(e.x-r.x):0,a=n?Math.abs(e.y-r.y):0;return Math.sqrt(i**2+a**2)}}function Wd(e,t,n,r,i){let a=[];return!i&&!e.isPointInArea(t)||Hd(e,n,t,function(n,o,s){!i&&!ml(n,e.chartArea,0)||n.inRange(t.x,t.y,r)&&a.push({element:n,datasetIndex:o,index:s})},!0),a}function Gd(e,t,n,r){let i=[];function a(e,n,a){let{startAngle:o,endAngle:s}=e.getProps([`startAngle`,`endAngle`],r),{angle:c}=hc(e,{x:t.x,y:t.y});yc(c,o,s)&&i.push({element:e,datasetIndex:n,index:a})}return Hd(e,n,t,a),i}function Kd(e,t,n,r,i,a){let o=[],s=Ud(n),c=1/0;function l(n,l,u){let d=n.inRange(t.x,t.y,i);if(r&&!d)return;let f=n.getCenterPoint(i);if(!(a||e.isPointInArea(f))&&!d)return;let p=s(t,f);p<c?(o=[{element:n,datasetIndex:l,index:u}],c=p):p===c&&o.push({element:n,datasetIndex:l,index:u})}return Hd(e,n,t,l),o}function qd(e,t,n,r,i,a){return!a&&!e.isPointInArea(t)?[]:n===`r`&&!r?Gd(e,t,n,i):Kd(e,t,n,r,i,a)}function Jd(e,t,n,r,i){let a=[],o=n===`x`?`inXRange`:`inYRange`,s=!1;return Hd(e,n,t,(e,r,c)=>{e[o]&&e[o](t[n],i)&&(a.push({element:e,datasetIndex:r,index:c}),s||=e.inRange(t.x,t.y,i))}),r&&!s?[]:a}var Yd={evaluateInteractionItems:Hd,modes:{index(e,t,n,r){let i=_u(t,e),a=n.axis||`x`,o=n.includeInvisible||!1,s=n.intersect?Wd(e,i,a,r,o):qd(e,i,a,!1,r,o),c=[];return s.length?(e.getSortedVisibleDatasetMetas().forEach(e=>{let t=s[0].index,n=e.data[t];n&&!n.skip&&c.push({element:n,datasetIndex:e.index,index:t})}),c):[]},dataset(e,t,n,r){let i=_u(t,e),a=n.axis||`xy`,o=n.includeInvisible||!1,s=n.intersect?Wd(e,i,a,r,o):qd(e,i,a,!1,r,o);if(s.length>0){let t=s[0].datasetIndex,n=e.getDatasetMeta(t).data;s=[];for(let e=0;e<n.length;++e)s.push({element:n[e],datasetIndex:t,index:e})}return s},point(e,t,n,r){return Wd(e,_u(t,e),n.axis||`xy`,r,n.includeInvisible||!1)},nearest(e,t,n,r){let i=_u(t,e),a=n.axis||`xy`,o=n.includeInvisible||!1;return qd(e,i,a,n.intersect,r,o)},x(e,t,n,r){return Jd(e,_u(t,e),`x`,n.intersect,r)},y(e,t,n,r){return Jd(e,_u(t,e),`y`,n.intersect,r)}}},Xd=[`left`,`top`,`right`,`bottom`];function Zd(e,t){return e.filter(e=>e.pos===t)}function Qd(e,t){return e.filter(e=>Xd.indexOf(e.pos)===-1&&e.box.axis===t)}function $d(e,t){return e.sort((e,n)=>{let r=t?n:e,i=t?e:n;return r.weight===i.weight?r.index-i.index:r.weight-i.weight})}function ef(e){let t=[],n,r,i,a,o,s;for(n=0,r=(e||[]).length;n<r;++n)i=e[n],{position:a,options:{stack:o,stackWeight:s=1}}=i,t.push({index:n,box:i,pos:a,horizontal:i.isHorizontal(),weight:i.weight,stack:o&&a+o,stackWeight:s});return t}function tf(e){let t={};for(let n of e){let{stack:e,pos:r,stackWeight:i}=n;if(!e||!Xd.includes(r))continue;let a=t[e]||(t[e]={count:0,placed:0,weight:0,size:0});a.count++,a.weight+=i}return t}function nf(e,t){let n=tf(e),{vBoxMaxWidth:r,hBoxMaxHeight:i}=t,a,o,s;for(a=0,o=e.length;a<o;++a){s=e[a];let{fullSize:o}=s.box,c=n[s.stack],l=c&&s.stackWeight/c.weight;s.horizontal?(s.width=l?l*r:o&&t.availableWidth,s.height=i):(s.width=r,s.height=l?l*i:o&&t.availableHeight)}return n}function rf(e){let t=ef(e),n=$d(t.filter(e=>e.box.fullSize),!0),r=$d(Zd(t,`left`),!0),i=$d(Zd(t,`right`)),a=$d(Zd(t,`top`),!0),o=$d(Zd(t,`bottom`)),s=Qd(t,`x`),c=Qd(t,`y`);return{fullSize:n,leftAndTop:r.concat(a),rightAndBottom:i.concat(c).concat(o).concat(s),chartArea:Zd(t,`chartArea`),vertical:r.concat(i).concat(c),horizontal:a.concat(o).concat(s)}}function af(e,t,n,r){return Math.max(e[n],t[n])+Math.max(e[r],t[r])}function of(e,t){e.top=Math.max(e.top,t.top),e.left=Math.max(e.left,t.left),e.bottom=Math.max(e.bottom,t.bottom),e.right=Math.max(e.right,t.right)}function sf(e,t,n,r){let{pos:i,box:a}=n,o=e.maxPadding;if(!V(i)){n.size&&(e[i]-=n.size);let t=r[n.stack]||{size:0,count:1};t.size=Math.max(t.size,n.horizontal?a.height:a.width),n.size=t.size/t.count,e[i]+=n.size}a.getPadding&&of(o,a.getPadding());let s=Math.max(0,t.outerWidth-af(o,e,`left`,`right`)),c=Math.max(0,t.outerHeight-af(o,e,`top`,`bottom`)),l=s!==e.w,u=c!==e.h;return e.w=s,e.h=c,n.horizontal?{same:l,other:u}:{same:u,other:l}}function cf(e){let t=e.maxPadding;function n(n){let r=Math.max(t[n]-e[n],0);return e[n]+=r,r}e.y+=n(`top`),e.x+=n(`left`),n(`right`),n(`bottom`)}function lf(e,t){let n=t.maxPadding;function r(e){let r={left:0,top:0,right:0,bottom:0};return e.forEach(e=>{r[e]=Math.max(t[e],n[e])}),r}return r(e?[`left`,`right`]:[`top`,`bottom`])}function uf(e,t,n,r){let i=[],a,o,s,c,l,u;for(a=0,o=e.length,l=0;a<o;++a){s=e[a],c=s.box,c.update(s.width||t.w,s.height||t.h,lf(s.horizontal,t));let{same:o,other:d}=sf(t,n,s,r);l|=o&&i.length,u||=d,c.fullSize||i.push(s)}return l&&uf(i,t,n,r)||u}function df(e,t,n,r,i){e.top=n,e.left=t,e.right=t+r,e.bottom=n+i,e.width=r,e.height=i}function ff(e,t,n,r){let i=n.padding,{x:a,y:o}=t;for(let s of e){let e=s.box,c=r[s.stack]||{count:1,placed:0,weight:1},l=s.stackWeight/c.weight||1;if(s.horizontal){let r=t.w*l,a=c.size||e.height;Ks(c.start)&&(o=c.start),e.fullSize?df(e,i.left,o,n.outerWidth-i.right-i.left,a):df(e,t.left+c.placed,o,r,a),c.start=o,c.placed+=r,o=e.bottom}else{let r=t.h*l,o=c.size||e.width;Ks(c.start)&&(a=c.start),e.fullSize?df(e,a,i.top,o,n.outerHeight-i.bottom-i.top):df(e,a,t.top+c.placed,o,r),c.start=a,c.placed+=r,a=e.right}}t.x=a,t.y=o}var pf={addBox(e,t){e.boxes||=[],t.fullSize=t.fullSize||!1,t.position=t.position||`top`,t.weight=t.weight||0,t._layers=t._layers||function(){return[{z:0,draw(e){t.draw(e)}}]},e.boxes.push(t)},removeBox(e,t){let n=e.boxes?e.boxes.indexOf(t):-1;n!==-1&&e.boxes.splice(n,1)},configure(e,t,n){t.fullSize=n.fullSize,t.position=n.position,t.weight=n.weight},update(e,t,n,r){if(!e)return;let i=jl(e.options.layout.padding),a=Math.max(t-i.width,0),o=Math.max(n-i.height,0),s=rf(e.boxes),c=s.vertical,l=s.horizontal;W(e.boxes,e=>{typeof e.beforeLayout==`function`&&e.beforeLayout()});let u=c.reduce((e,t)=>t.box.options&&t.box.options.display===!1?e:e+1,0)||1,d=Object.freeze({outerWidth:t,outerHeight:n,padding:i,availableWidth:a,availableHeight:o,vBoxMaxWidth:a/2/u,hBoxMaxHeight:o/2}),f=Object.assign({},i);of(f,jl(r));let p=Object.assign({maxPadding:f,w:a,h:o,x:i.left,y:i.top},i),m=nf(c.concat(l),d);uf(s.fullSize,p,d,m),uf(c,p,d,m),uf(l,p,d,m)&&uf(c,p,d,m),cf(p),ff(s.leftAndTop,p,d,m),p.x+=p.w,p.y+=p.h,ff(s.rightAndBottom,p,d,m),e.chartArea={left:p.left,top:p.top,right:p.left+p.w,bottom:p.top+p.h,height:p.h,width:p.w},W(s.chartArea,t=>{let n=t.box;Object.assign(n,e.chartArea),n.update(p.w,p.h,{left:0,top:0,right:0,bottom:0})})}},mf=class{acquireContext(e,t){}releaseContext(e){return!1}addEventListener(e,t,n){}removeEventListener(e,t,n){}getDevicePixelRatio(){return 1}getMaximumSize(e,t,n,r){return t=Math.max(0,t||e.width),n||=e.height,{width:t,height:Math.max(0,r?Math.floor(t/r):n)}}isAttached(e){return!0}updateConfig(e){}},hf=class extends mf{acquireContext(e){return e&&e.getContext&&e.getContext(`2d`)||null}updateConfig(e){e.options.animation=!1}},gf=`$chartjs`,_f={touchstart:`mousedown`,touchmove:`mousemove`,touchend:`mouseup`,pointerenter:`mouseenter`,pointerdown:`mousedown`,pointermove:`mousemove`,pointerup:`mouseup`,pointerleave:`mouseout`,pointerout:`mouseout`},vf=e=>e===null||e===``;function yf(e,t){let n=e.style,r=e.getAttribute(`height`),i=e.getAttribute(`width`);if(e[gf]={initial:{height:r,width:i,style:{display:n.display,height:n.height,width:n.width}}},n.display=n.display||`block`,n.boxSizing=n.boxSizing||`border-box`,vf(i)){let t=Cu(e,`width`);t!==void 0&&(e.width=t)}if(vf(r))if(e.style.height===``)e.height=e.width/(t||2);else{let t=Cu(e,`height`);t!==void 0&&(e.height=t)}return e}var bf=Su?{passive:!0}:!1;function xf(e,t,n){e&&e.addEventListener(t,n,bf)}function Sf(e,t,n){e&&e.canvas&&e.canvas.removeEventListener(t,n,bf)}function Cf(e,t){let n=_f[e.type]||e.type,{x:r,y:i}=_u(e,t);return{type:n,chart:t,native:e,x:r===void 0?null:r,y:i===void 0?null:i}}function wf(e,t){for(let n of e)if(n===t||n.contains(t))return!0}function Tf(e,t,n){let r=e.canvas,i=new MutationObserver(e=>{let t=!1;for(let n of e)t||=wf(n.addedNodes,r),t&&=!wf(n.removedNodes,r);t&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}function Ef(e,t,n){let r=e.canvas,i=new MutationObserver(e=>{let t=!1;for(let n of e)t||=wf(n.removedNodes,r),t&&=!wf(n.addedNodes,r);t&&n()});return i.observe(document,{childList:!0,subtree:!0}),i}var Df=new Map,Of=0;function kf(){let e=window.devicePixelRatio;e!==Of&&(Of=e,Df.forEach((t,n)=>{n.currentDevicePixelRatio!==e&&t()}))}function Af(e,t){Df.size||window.addEventListener(`resize`,kf),Df.set(e,t)}function jf(e){Df.delete(e),Df.size||window.removeEventListener(`resize`,kf)}function Mf(e,t,n){let r=e.canvas,i=r&&lu(r);if(!i)return;let a=Mc((e,t)=>{let r=i.clientWidth;n(e,t),r<i.clientWidth&&n()},window),o=new ResizeObserver(e=>{let t=e[0],n=t.contentRect.width,r=t.contentRect.height;n===0&&r===0||a(n,r)});return o.observe(i),Af(e,a),o}function Nf(e,t,n){n&&n.disconnect(),t===`resize`&&jf(e)}function Pf(e,t,n){let r=e.canvas,i=Mc(t=>{e.ctx!==null&&n(Cf(t,e))},e);return xf(r,t,i),i}var Ff=class extends mf{acquireContext(e,t){let n=e&&e.getContext&&e.getContext(`2d`);return n&&n.canvas===e?(yf(e,t),n):null}releaseContext(e){let t=e.canvas;if(!t[gf])return!1;let n=t[gf].initial;[`height`,`width`].forEach(e=>{let r=n[e];B(r)?t.removeAttribute(e):t.setAttribute(e,r)});let r=n.style||{};return Object.keys(r).forEach(e=>{t.style[e]=r[e]}),t.width=t.width,delete t[gf],!0}addEventListener(e,t,n){this.removeEventListener(e,t);let r=e.$proxies||={};r[t]=({attach:Tf,detach:Ef,resize:Mf}[t]||Pf)(e,t,n)}removeEventListener(e,t){let n=e.$proxies||={},r=n[t];r&&(({attach:Nf,detach:Nf,resize:Nf}[t]||Sf)(e,t,r),n[t]=void 0)}getDevicePixelRatio(){return window.devicePixelRatio}getMaximumSize(e,t,n,r){return bu(e,t,n,r)}isAttached(e){let t=e&&lu(e);return!!(t&&t.isConnected)}};function If(e){return!cu()||typeof OffscreenCanvas<`u`&&e instanceof OffscreenCanvas?hf:Ff}var Lf=class{static defaults={};static defaultRoutes=void 0;x;y;active=!1;options;$animations;tooltipPosition(e){let{x:t,y:n}=this.getProps([`x`,`y`],e);return{x:t,y:n}}hasValue(){return lc(this.x)&&lc(this.y)}getProps(e,t){let n=this.$animations;if(!t||!n)return this;let r={};return e.forEach(e=>{r[e]=n[e]&&n[e].active()?n[e]._to:this[e]}),r}};function Rf(e,t){let n=e.options.ticks,r=zf(e),i=Math.min(n.maxTicksLimit||r,r),a=n.major.enabled?Vf(t):[],o=a.length,s=a[0],c=a[o-1],l=[];if(o>i)return Hf(t,l,a,o/i),l;let u=Bf(a,t,i);if(o>0){let e,n,r=o>1?Math.round((c-s)/(o-1)):null;for(Uf(t,l,u,B(r)?0:s-r,s),e=0,n=o-1;e<n;e++)Uf(t,l,u,a[e],a[e+1]);return Uf(t,l,u,c,B(r)?t.length:c+r),l}return Uf(t,l,u),l}function zf(e){let t=e.options.offset,n=e._tickSize(),r=e._length/n+ +!t,i=e._maxLength/n;return Math.floor(Math.min(r,i))}function Bf(e,t,n){let r=Wf(e),i=t.length/n;if(!r)return Math.max(i,1);let a=sc(r);for(let e=0,t=a.length-1;e<t;e++){let t=a[e];if(t>i)return t}return Math.max(i,1)}function Vf(e){let t=[],n,r;for(n=0,r=e.length;n<r;n++)e[n].major&&t.push(n);return t}function Hf(e,t,n,r){let i=0,a=n[0],o;for(r=Math.ceil(r),o=0;o<e.length;o++)o===a&&(t.push(e[o]),i++,a=n[i*r])}function Uf(e,t,n,r,i){let a=H(r,0),o=Math.min(H(i,e.length),e.length),s=0,c,l,u;for(n=Math.ceil(n),i&&(c=i-r,n=c/Math.floor(c/n)),u=a;u<0;)s++,u=Math.round(a+s*n);for(l=Math.max(a,0);l<o;l++)l===u&&(t.push(e[l]),s++,u=Math.round(a+s*n))}function Wf(e){let t=e.length,n,r;if(t<2)return!1;for(r=e[0],n=1;n<t;++n)if(e[n]-e[n-1]!==r)return!1;return r}var Gf=e=>e===`left`?`right`:e===`right`?`left`:e,Kf=(e,t,n)=>t===`top`||t===`left`?e[t]+n:e[t]-n,qf=(e,t)=>Math.min(t||e,e);function Jf(e,t){let n=[],r=e.length/t,i=e.length,a=0;for(;a<i;a+=r)n.push(e[Math.floor(a)]);return n}function Yf(e,t,n){let r=e.ticks.length,i=Math.min(t,r-1),a=e._startPixel,o=e._endPixel,s=1e-6,c=e.getPixelForTick(i),l;if(!(n&&(l=r===1?Math.max(c-a,o-c):t===0?(e.getPixelForTick(1)-c)/2:(c-e.getPixelForTick(i-1))/2,c+=i<t?l:-l,c<a-s||c>o+s)))return c}function Xf(e,t){W(e,e=>{let n=e.gc,r=n.length/2,i;if(r>t){for(i=0;i<r;++i)delete e.data[n[i]];n.splice(0,r)}})}function Zf(e){return e.drawTicks?e.tickLength:0}function Qf(e,t){if(!e.display)return 0;let n=Ml(e.font,t),r=jl(e.padding);return(ks(e.text)?e.text.length:1)*n.lineHeight+r.height}function $f(e,t){return Fl(e,{scale:t,type:`scale`})}function ep(e,t,n){return Fl(e,{tick:n,index:t,type:`tick`})}function tp(e,t,n){let r=Pc(e);return(n&&t!==`right`||!n&&t===`right`)&&(r=Gf(r)),r}function np(e,t,n,r){let{top:i,left:a,bottom:o,right:s,chart:c}=e,{chartArea:l,scales:u}=c,d=0,f,p,m,h=o-i,g=s-a;if(e.isHorizontal()){if(p=Fc(r,a,s),V(n)){let e=Object.keys(n)[0],r=n[e];m=u[e].getPixelForValue(r)+h-t}else m=n===`center`?(l.bottom+l.top)/2+h-t:Kf(e,n,t);f=s-a}else{if(V(n)){let e=Object.keys(n)[0],r=n[e];p=u[e].getPixelForValue(r)-g+t}else p=n===`center`?(l.left+l.right)/2-g+t:Kf(e,n,t);m=Fc(r,o,i),d=n===`left`?-ec:ec}return{titleX:p,titleY:m,maxWidth:f,rotation:d}}var rp=class e extends Lf{constructor(e){super(),this.id=e.id,this.type=e.type,this.options=void 0,this.ctx=e.ctx,this.chart=e.chart,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this._margins={left:0,right:0,top:0,bottom:0},this.maxWidth=void 0,this.maxHeight=void 0,this.paddingTop=void 0,this.paddingBottom=void 0,this.paddingLeft=void 0,this.paddingRight=void 0,this.axis=void 0,this.labelRotation=void 0,this.min=void 0,this.max=void 0,this._range=void 0,this.ticks=[],this._gridLineItems=null,this._labelItems=null,this._labelSizes=null,this._length=0,this._maxLength=0,this._longestTextCache={},this._startPixel=void 0,this._endPixel=void 0,this._reversePixels=!1,this._userMax=void 0,this._userMin=void 0,this._suggestedMax=void 0,this._suggestedMin=void 0,this._ticksLength=0,this._borderValue=0,this._cache={},this._dataLimitsCached=!1,this.$context=void 0}init(e){this.options=e.setContext(this.getContext()),this.axis=e.axis,this._userMin=this.parse(e.min),this._userMax=this.parse(e.max),this._suggestedMin=this.parse(e.suggestedMin),this._suggestedMax=this.parse(e.suggestedMax)}parse(e,t){return e}getUserBounds(){let{_userMin:e,_userMax:t,_suggestedMin:n,_suggestedMax:r}=this;return e=js(e,1/0),t=js(t,-1/0),n=js(n,1/0),r=js(r,-1/0),{min:js(e,n),max:js(t,r),minDefined:As(e),maxDefined:As(t)}}getMinMax(e){let{min:t,max:n,minDefined:r,maxDefined:i}=this.getUserBounds(),a;if(r&&i)return{min:t,max:n};let o=this.getMatchingVisibleMetas();for(let s=0,c=o.length;s<c;++s)a=o[s].controller.getMinMax(this,e),r||(t=Math.min(t,a.min)),i||(n=Math.max(n,a.max));return t=i&&t>n?n:t,n=r&&t>n?t:n,{min:js(t,js(n,t)),max:js(n,js(t,n))}}getPadding(){return{left:this.paddingLeft||0,top:this.paddingTop||0,right:this.paddingRight||0,bottom:this.paddingBottom||0}}getTicks(){return this.ticks}getLabels(){let e=this.chart.data;return this.options.labels||(this.isHorizontal()?e.xLabels:e.yLabels)||e.labels||[]}getLabelItems(e=this.chart.chartArea){return this._labelItems||=this._computeLabelItems(e)}beforeLayout(){this._cache={},this._dataLimitsCached=!1}beforeUpdate(){U(this.options.beforeUpdate,[this])}update(e,t,n){let{beginAtZero:r,grace:i,ticks:a}=this.options,o=a.sampleSize;this.beforeUpdate(),this.maxWidth=e,this.maxHeight=t,this._margins=n=Object.assign({left:0,right:0,top:0,bottom:0},n),this.ticks=null,this._labelSizes=null,this._gridLineItems=null,this._labelItems=null,this.beforeSetDimensions(),this.setDimensions(),this.afterSetDimensions(),this._maxLength=this.isHorizontal()?this.width+n.left+n.right:this.height+n.top+n.bottom,this._dataLimitsCached||=(this.beforeDataLimits(),this.determineDataLimits(),this.afterDataLimits(),this._range=Pl(this,i,r),!0),this.beforeBuildTicks(),this.ticks=this.buildTicks()||[],this.afterBuildTicks();let s=o<this.ticks.length;this._convertTicksToLabels(s?Jf(this.ticks,o):this.ticks),this.configure(),this.beforeCalculateLabelRotation(),this.calculateLabelRotation(),this.afterCalculateLabelRotation(),a.display&&(a.autoSkip||a.source===`auto`)&&(this.ticks=Rf(this,this.ticks),this._labelSizes=null,this.afterAutoSkip()),s&&this._convertTicksToLabels(this.ticks),this.beforeFit(),this.fit(),this.afterFit(),this.afterUpdate()}configure(){let e=this.options.reverse,t,n;this.isHorizontal()?(t=this.left,n=this.right):(t=this.top,n=this.bottom,e=!e),this._startPixel=t,this._endPixel=n,this._reversePixels=e,this._length=n-t,this._alignToPixels=this.options.alignToPixels}afterUpdate(){U(this.options.afterUpdate,[this])}beforeSetDimensions(){U(this.options.beforeSetDimensions,[this])}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=0,this.right=this.width):(this.height=this.maxHeight,this.top=0,this.bottom=this.height),this.paddingLeft=0,this.paddingTop=0,this.paddingRight=0,this.paddingBottom=0}afterSetDimensions(){U(this.options.afterSetDimensions,[this])}_callHooks(e){this.chart.notifyPlugins(e,this.getContext()),U(this.options[e],[this])}beforeDataLimits(){this._callHooks(`beforeDataLimits`)}determineDataLimits(){}afterDataLimits(){this._callHooks(`afterDataLimits`)}beforeBuildTicks(){this._callHooks(`beforeBuildTicks`)}buildTicks(){return[]}afterBuildTicks(){this._callHooks(`afterBuildTicks`)}beforeTickToLabelConversion(){U(this.options.beforeTickToLabelConversion,[this])}generateTickLabels(e){let t=this.options.ticks,n,r,i;for(n=0,r=e.length;n<r;n++)i=e[n],i.label=U(t.callback,[i.value,n,e],this)}afterTickToLabelConversion(){U(this.options.afterTickToLabelConversion,[this])}beforeCalculateLabelRotation(){U(this.options.beforeCalculateLabelRotation,[this])}calculateLabelRotation(){let e=this.options,t=e.ticks,n=qf(this.ticks.length,e.ticks.maxTicksLimit),r=t.minRotation||0,i=t.maxRotation,a=r,o,s,c;if(!this._isVisible()||!t.display||r>=i||n<=1||!this.isHorizontal()){this.labelRotation=r;return}let l=this._getLabelSizes(),u=l.widest.width,d=l.highest.height,f=bc(this.chart.width-u,0,this.maxWidth);o=e.offset?this.maxWidth/n:f/(n-1),u+6>o&&(o=f/(n-(e.offset?.5:1)),s=this.maxHeight-Zf(e.grid)-t.padding-Qf(e.title,this.chart.options.font),c=Math.sqrt(u*u+d*d),a=pc(Math.min(Math.asin(bc((l.highest.height+6)/o,-1,1)),Math.asin(bc(s/c,-1,1))-Math.asin(bc(d/c,-1,1)))),a=Math.max(r,Math.min(i,a))),this.labelRotation=a}afterCalculateLabelRotation(){U(this.options.afterCalculateLabelRotation,[this])}afterAutoSkip(){}beforeFit(){U(this.options.beforeFit,[this])}fit(){let e={width:0,height:0},{chart:t,options:{ticks:n,title:r,grid:i}}=this,a=this._isVisible(),o=this.isHorizontal();if(a){let a=Qf(r,t.options.font);if(o?(e.width=this.maxWidth,e.height=Zf(i)+a):(e.height=this.maxHeight,e.width=Zf(i)+a),n.display&&this.ticks.length){let{first:t,last:r,widest:i,highest:a}=this._getLabelSizes(),s=n.padding*2,c=fc(this.labelRotation),l=Math.cos(c),u=Math.sin(c);if(o){let t=n.mirror?0:u*i.width+l*a.height;e.height=Math.min(this.maxHeight,e.height+t+s)}else{let t=n.mirror?0:l*i.width+u*a.height;e.width=Math.min(this.maxWidth,e.width+t+s)}this._calculatePadding(t,r,u,l)}}this._handleMargins(),o?(this.width=this._length=t.width-this._margins.left-this._margins.right,this.height=e.height):(this.width=e.width,this.height=this._length=t.height-this._margins.top-this._margins.bottom)}_calculatePadding(e,t,n,r){let{ticks:{align:i,padding:a},position:o}=this.options,s=this.labelRotation!==0,c=o!==`top`&&this.axis===`x`;if(this.isHorizontal()){let o=this.getPixelForTick(0)-this.left,l=this.right-this.getPixelForTick(this.ticks.length-1),u=0,d=0;s?c?(u=r*e.width,d=n*t.height):(u=n*e.height,d=r*t.width):i===`start`?d=t.width:i===`end`?u=e.width:i!==`inner`&&(u=e.width/2,d=t.width/2),this.paddingLeft=Math.max((u-o+a)*this.width/(this.width-o),0),this.paddingRight=Math.max((d-l+a)*this.width/(this.width-l),0)}else{let n=t.height/2,r=e.height/2;i===`start`?(n=0,r=e.height):i===`end`&&(n=t.height,r=0),this.paddingTop=n+a,this.paddingBottom=r+a}}_handleMargins(){this._margins&&(this._margins.left=Math.max(this.paddingLeft,this._margins.left),this._margins.top=Math.max(this.paddingTop,this._margins.top),this._margins.right=Math.max(this.paddingRight,this._margins.right),this._margins.bottom=Math.max(this.paddingBottom,this._margins.bottom))}afterFit(){U(this.options.afterFit,[this])}isHorizontal(){let{axis:e,position:t}=this.options;return t===`top`||t===`bottom`||e===`x`}isFullSize(){return this.options.fullSize}_convertTicksToLabels(e){this.beforeTickToLabelConversion(),this.generateTickLabels(e);let t,n;for(t=0,n=e.length;t<n;t++)B(e[t].label)&&(e.splice(t,1),n--,t--);this.afterTickToLabelConversion()}_getLabelSizes(){let e=this._labelSizes;if(!e){let t=this.options.ticks.sampleSize,n=this.ticks;t<n.length&&(n=Jf(n,t)),this._labelSizes=e=this._computeLabelSizes(n,n.length,this.options.ticks.maxTicksLimit)}return e}_computeLabelSizes(e,t,n){let{ctx:r,_longestTextCache:i}=this,a=[],o=[],s=Math.floor(t/qf(t,n)),c=0,l=0,u,d,f,p,m,h,g,_,v,y,b;for(u=0;u<t;u+=s){if(p=e[u].label,m=this._resolveTickFontOptions(u),r.font=h=m.string,g=i[h]=i[h]||{data:{},gc:[]},_=m.lineHeight,v=y=0,!B(p)&&!ks(p))v=cl(r,g.data,g.gc,v,p),y=_;else if(ks(p))for(d=0,f=p.length;d<f;++d)b=p[d],!B(b)&&!ks(b)&&(v=cl(r,g.data,g.gc,v,b),y+=_);a.push(v),o.push(y),c=Math.max(v,c),l=Math.max(y,l)}Xf(i,t);let x=a.indexOf(c),S=o.indexOf(l),C=e=>({width:a[e]||0,height:o[e]||0});return{first:C(0),last:C(t-1),widest:C(x),highest:C(S),widths:a,heights:o}}getLabelForValue(e){return e}getPixelForValue(e,t){return NaN}getValueForPixel(e){}getPixelForTick(e){let t=this.ticks;return e<0||e>t.length-1?null:this.getPixelForValue(t[e].value)}getPixelForDecimal(e){this._reversePixels&&(e=1-e);let t=this._startPixel+e*this._length;return xc(this._alignToPixels?ul(this.chart,t,0):t)}getDecimalForPixel(e){let t=(e-this._startPixel)/this._length;return this._reversePixels?1-t:t}getBasePixel(){return this.getPixelForValue(this.getBaseValue())}getBaseValue(){let{min:e,max:t}=this;return e<0&&t<0?t:e>0&&t>0?e:0}getContext(e){let t=this.ticks||[];if(e>=0&&e<t.length){let n=t[e];return n.$context||=ep(this.getContext(),e,n)}return this.$context||=$f(this.chart.getContext(),this)}_tickSize(){let e=this.options.ticks,t=fc(this.labelRotation),n=Math.abs(Math.cos(t)),r=Math.abs(Math.sin(t)),i=this._getLabelSizes(),a=e.autoSkipPadding||0,o=i?i.widest.width+a:0,s=i?i.highest.height+a:0;return this.isHorizontal()?s*n>o*r?o/n:s/r:s*r<o*n?s/n:o/r}_isVisible(){let e=this.options.display;return e===`auto`?this.getMatchingVisibleMetas().length>0:!!e}_computeGridLineItems(e){let t=this.axis,n=this.chart,r=this.options,{grid:i,position:a,border:o}=r,s=i.offset,c=this.isHorizontal(),l=this.ticks.length+ +!!s,u=Zf(i),d=[],f=o.setContext(this.getContext()),p=f.display?f.width:0,m=p/2,h=function(e){return ul(n,e,p)},g,_,v,y,b,x,S,C,w,T,E,D;if(a===`top`)g=h(this.bottom),x=this.bottom-u,C=g-m,T=h(e.top)+m,D=e.bottom;else if(a===`bottom`)g=h(this.top),T=e.top,D=h(e.bottom)-m,x=g+m,C=this.top+u;else if(a===`left`)g=h(this.right),b=this.right-u,S=g-m,w=h(e.left)+m,E=e.right;else if(a===`right`)g=h(this.left),w=e.left,E=h(e.right)-m,b=g+m,S=this.left+u;else if(t===`x`){if(a===`center`)g=h((e.top+e.bottom)/2+.5);else if(V(a)){let e=Object.keys(a)[0],t=a[e];g=h(this.chart.scales[e].getPixelForValue(t))}T=e.top,D=e.bottom,x=g+m,C=x+u}else if(t===`y`){if(a===`center`)g=h((e.left+e.right)/2);else if(V(a)){let e=Object.keys(a)[0],t=a[e];g=h(this.chart.scales[e].getPixelForValue(t))}b=g-m,S=b-u,w=e.left,E=e.right}let O=H(r.ticks.maxTicksLimit,l),ee=Math.max(1,Math.ceil(l/O));for(_=0;_<l;_+=ee){let e=this.getContext(_),t=i.setContext(e),r=o.setContext(e),a=t.lineWidth,l=t.color,u=r.dash||[],f=r.dashOffset,p=t.tickWidth,m=t.tickColor,h=t.tickBorderDash||[],g=t.tickBorderDashOffset;v=Yf(this,_,s),v!==void 0&&(y=ul(n,v,a),c?b=S=w=E=y:x=C=T=D=y,d.push({tx1:b,ty1:x,tx2:S,ty2:C,x1:w,y1:T,x2:E,y2:D,width:a,color:l,borderDash:u,borderDashOffset:f,tickWidth:p,tickColor:m,tickBorderDash:h,tickBorderDashOffset:g}))}return this._ticksLength=l,this._borderValue=g,d}_computeLabelItems(e){let t=this.axis,n=this.options,{position:r,ticks:i}=n,a=this.isHorizontal(),o=this.ticks,{align:s,crossAlign:c,padding:l,mirror:u}=i,d=Zf(n.grid),f=d+l,p=u?-l:f,m=-fc(this.labelRotation),h=[],g,_,v,y,b,x,S,C,w,T,E,D,O=`middle`;if(r===`top`)x=this.bottom-p,S=this._getXAxisLabelAlignment();else if(r===`bottom`)x=this.top+p,S=this._getXAxisLabelAlignment();else if(r===`left`){let e=this._getYAxisLabelAlignment(d);S=e.textAlign,b=e.x}else if(r===`right`){let e=this._getYAxisLabelAlignment(d);S=e.textAlign,b=e.x}else if(t===`x`){if(r===`center`)x=(e.top+e.bottom)/2+f;else if(V(r)){let e=Object.keys(r)[0],t=r[e];x=this.chart.scales[e].getPixelForValue(t)+f}S=this._getXAxisLabelAlignment()}else if(t===`y`){if(r===`center`)b=(e.left+e.right)/2-f;else if(V(r)){let e=Object.keys(r)[0],t=r[e];b=this.chart.scales[e].getPixelForValue(t)}S=this._getYAxisLabelAlignment(d).textAlign}t===`y`&&(s===`start`?O=`top`:s===`end`&&(O=`bottom`));let ee=this._getLabelSizes();for(g=0,_=o.length;g<_;++g){v=o[g],y=v.label;let e=i.setContext(this.getContext(g));C=this.getPixelForTick(g)+i.labelOffset,w=this._resolveTickFontOptions(g),T=w.lineHeight,E=ks(y)?y.length:1;let t=E/2,n=e.color,s=e.textStrokeColor,l=e.textStrokeWidth,d=S;a?(b=C,S===`inner`&&(d=g===_-1?this.options.reverse?`left`:`right`:g===0?this.options.reverse?`right`:`left`:`center`),D=r===`top`?c===`near`||m!==0?-E*T+T/2:c===`center`?-ee.highest.height/2-t*T+T:-ee.highest.height+T/2:c===`near`||m!==0?T/2:c===`center`?ee.highest.height/2-t*T:ee.highest.height-E*T,u&&(D*=-1),m!==0&&!e.showLabelBackdrop&&(b+=T/2*Math.sin(m))):(x=C,D=(1-E)*T/2);let f;if(e.showLabelBackdrop){let t=jl(e.backdropPadding),n=ee.heights[g],r=ee.widths[g],i=D-t.top,a=0-t.left;switch(O){case`middle`:i-=n/2;break;case`bottom`:i-=n;break}switch(S){case`center`:a-=r/2;break;case`right`:a-=r;break;case`inner`:g===_-1?a-=r:g>0&&(a-=r/2);break}f={left:a,top:i,width:r+t.width,height:n+t.height,color:e.backdropColor}}h.push({label:y,font:w,textOffset:D,options:{rotation:m,color:n,strokeColor:s,strokeWidth:l,textAlign:d,textBaseline:O,translation:[b,x],backdrop:f}})}return h}_getXAxisLabelAlignment(){let{position:e,ticks:t}=this.options;if(-fc(this.labelRotation))return e===`top`?`left`:`right`;let n=`center`;return t.align===`start`?n=`left`:t.align===`end`?n=`right`:t.align===`inner`&&(n=`inner`),n}_getYAxisLabelAlignment(e){let{position:t,ticks:{crossAlign:n,mirror:r,padding:i}}=this.options,a=this._getLabelSizes(),o=e+i,s=a.widest.width,c,l;return t===`left`?r?(l=this.right+i,n===`near`?c=`left`:n===`center`?(c=`center`,l+=s/2):(c=`right`,l+=s)):(l=this.right-o,n===`near`?c=`right`:n===`center`?(c=`center`,l-=s/2):(c=`left`,l=this.left)):t===`right`?r?(l=this.left+i,n===`near`?c=`right`:n===`center`?(c=`center`,l-=s/2):(c=`left`,l-=s)):(l=this.left+o,n===`near`?c=`left`:n===`center`?(c=`center`,l+=s/2):(c=`right`,l=this.right)):c=`right`,{textAlign:c,x:l}}_computeLabelArea(){if(this.options.ticks.mirror)return;let e=this.chart,t=this.options.position;if(t===`left`||t===`right`)return{top:0,left:this.left,bottom:e.height,right:this.right};if(t===`top`||t===`bottom`)return{top:this.top,left:0,bottom:this.bottom,right:e.width}}drawBackground(){let{ctx:e,options:{backgroundColor:t},left:n,top:r,width:i,height:a}=this;t&&(e.save(),e.fillStyle=t,e.fillRect(n,r,i,a),e.restore())}getLineWidthForValue(e){let t=this.options.grid;if(!this._isVisible()||!t.display)return 0;let n=this.ticks.findIndex(t=>t.value===e);return n>=0?t.setContext(this.getContext(n)).lineWidth:0}drawGrid(e){let t=this.options.grid,n=this.ctx,r=this._gridLineItems||=this._computeGridLineItems(e),i,a,o=(e,t,r)=>{!r.width||!r.color||(n.save(),n.lineWidth=r.width,n.strokeStyle=r.color,n.setLineDash(r.borderDash||[]),n.lineDashOffset=r.borderDashOffset,n.beginPath(),n.moveTo(e.x,e.y),n.lineTo(t.x,t.y),n.stroke(),n.restore())};if(t.display)for(i=0,a=r.length;i<a;++i){let e=r[i];t.drawOnChartArea&&o({x:e.x1,y:e.y1},{x:e.x2,y:e.y2},e),t.drawTicks&&o({x:e.tx1,y:e.ty1},{x:e.tx2,y:e.ty2},{color:e.tickColor,width:e.tickWidth,borderDash:e.tickBorderDash,borderDashOffset:e.tickBorderDashOffset})}}drawBorder(){let{chart:e,ctx:t,options:{border:n,grid:r}}=this,i=n.setContext(this.getContext()),a=n.display?i.width:0;if(!a)return;let o=r.setContext(this.getContext(0)).lineWidth,s=this._borderValue,c,l,u,d;this.isHorizontal()?(c=ul(e,this.left,a)-a/2,l=ul(e,this.right,o)+o/2,u=d=s):(u=ul(e,this.top,a)-a/2,d=ul(e,this.bottom,o)+o/2,c=l=s),t.save(),t.lineWidth=i.width,t.strokeStyle=i.color,t.beginPath(),t.moveTo(c,u),t.lineTo(l,d),t.stroke(),t.restore()}drawLabels(e){if(!this.options.ticks.display)return;let t=this.ctx,n=this._computeLabelArea();n&&hl(t,n);let r=this.getLabelItems(e);for(let e of r){let n=e.options,r=e.font,i=e.label,a=e.textOffset;Sl(t,i,0,a,r,n)}n&&gl(t)}drawTitle(){let{ctx:e,options:{position:t,title:n,reverse:r}}=this;if(!n.display)return;let i=Ml(n.font),a=jl(n.padding),o=n.align,s=i.lineHeight/2;t===`bottom`||t===`center`||V(t)?(s+=a.bottom,ks(n.text)&&(s+=i.lineHeight*(n.text.length-1))):s+=a.top;let{titleX:c,titleY:l,maxWidth:u,rotation:d}=np(this,s,t,o);Sl(e,n.text,0,0,i,{color:n.color,maxWidth:u,rotation:d,textAlign:tp(o,t,r),textBaseline:`middle`,translation:[c,l]})}draw(e){this._isVisible()&&(this.drawBackground(),this.drawGrid(e),this.drawBorder(),this.drawTitle(),this.drawLabels(e))}_layers(){let t=this.options,n=t.ticks&&t.ticks.z||0,r=H(t.grid&&t.grid.z,-1),i=H(t.border&&t.border.z,0);return!this._isVisible()||this.draw!==e.prototype.draw?[{z:n,draw:e=>{this.draw(e)}}]:[{z:r,draw:e=>{this.drawBackground(),this.drawGrid(e),this.drawTitle()}},{z:i,draw:()=>{this.drawBorder()}},{z:n,draw:e=>{this.drawLabels(e)}}]}getMatchingVisibleMetas(e){let t=this.chart.getSortedVisibleDatasetMetas(),n=this.axis+`AxisID`,r=[],i,a;for(i=0,a=t.length;i<a;++i){let a=t[i];a[n]===this.id&&(!e||a.type===e)&&r.push(a)}return r}_resolveTickFontOptions(e){return Ml(this.options.ticks.setContext(this.getContext(e)).font)}_maxDigits(){let e=this._resolveTickFontOptions(0).lineHeight;return(this.isHorizontal()?this.width:this.height)/e}},ip=class{constructor(e,t,n){this.type=e,this.scope=t,this.override=n,this.items=Object.create(null)}isForType(e){return Object.prototype.isPrototypeOf.call(this.type.prototype,e.prototype)}register(e){let t=Object.getPrototypeOf(e),n;sp(t)&&(n=this.register(t));let r=this.items,i=e.id,a=this.scope+`.`+i;if(!i)throw Error(`class does not have id: `+e);return i in r?a:(r[i]=e,ap(e,a,n),this.override&&K.override(e.id,e.overrides),a)}get(e){return this.items[e]}unregister(e){let t=this.items,n=e.id,r=this.scope;n in t&&delete t[n],r&&n in K[r]&&(delete K[r][n],this.override&&delete rl[n])}};function ap(e,t,n){let r=Rs(Object.create(null),[n?K.get(n):{},K.get(t),e.defaults]);K.set(t,r),e.defaultRoutes&&op(t,e.defaultRoutes),e.descriptors&&K.describe(t,e.descriptors)}function op(e,t){Object.keys(t).forEach(n=>{let r=n.split(`.`),i=r.pop(),a=[e].concat(r).join(`.`),o=t[n].split(`.`),s=o.pop(),c=o.join(`.`);K.route(a,i,c,s)})}function sp(e){return`id`in e&&`defaults`in e}var cp=new class{constructor(){this.controllers=new ip(vd,`datasets`,!0),this.elements=new ip(Lf,`elements`),this.plugins=new ip(Object,`plugins`),this.scales=new ip(rp,`scales`),this._typedRegistries=[this.controllers,this.scales,this.elements]}add(...e){this._each(`register`,e)}remove(...e){this._each(`unregister`,e)}addControllers(...e){this._each(`register`,e,this.controllers)}addElements(...e){this._each(`register`,e,this.elements)}addPlugins(...e){this._each(`register`,e,this.plugins)}addScales(...e){this._each(`register`,e,this.scales)}getController(e){return this._get(e,this.controllers,`controller`)}getElement(e){return this._get(e,this.elements,`element`)}getPlugin(e){return this._get(e,this.plugins,`plugin`)}getScale(e){return this._get(e,this.scales,`scale`)}removeControllers(...e){this._each(`unregister`,e,this.controllers)}removeElements(...e){this._each(`unregister`,e,this.elements)}removePlugins(...e){this._each(`unregister`,e,this.plugins)}removeScales(...e){this._each(`unregister`,e,this.scales)}_each(e,t,n){[...t].forEach(t=>{let r=n||this._getRegistryForType(t);n||r.isForType(t)||r===this.plugins&&t.id?this._exec(e,r,t):W(t,t=>{let r=n||this._getRegistryForType(t);this._exec(e,r,t)})})}_exec(e,t,n){let r=Gs(e);U(n[`before`+r],[],n),t[e](n),U(n[`after`+r],[],n)}_getRegistryForType(e){for(let t=0;t<this._typedRegistries.length;t++){let n=this._typedRegistries[t];if(n.isForType(e))return n}return this.plugins}_get(e,t,n){let r=t.get(e);if(r===void 0)throw Error(`"`+e+`" is not a registered `+n+`.`);return r}},lp=class{constructor(){this._init=void 0}notify(e,t,n,r){if(t===`beforeInit`&&(this._init=this._createDescriptors(e,!0),this._notify(this._init,e,`install`)),this._init===void 0)return;let i=r?this._descriptors(e).filter(r):this._descriptors(e),a=this._notify(i,e,t,n);return t===`afterDestroy`&&(this._notify(i,e,`stop`),this._notify(this._init,e,`uninstall`),this._init=void 0),a}_notify(e,t,n,r){r||={};for(let i of e){let e=i.plugin,a=e[n];if(U(a,[t,r,i.options],e)===!1&&r.cancelable)return!1}return!0}invalidate(){B(this._cache)||(this._oldCache=this._cache,this._cache=void 0)}_descriptors(e){if(this._cache)return this._cache;let t=this._cache=this._createDescriptors(e);return this._notifyStateChanges(e),t}_createDescriptors(e,t){let n=e&&e.config,r=H(n.options&&n.options.plugins,{}),i=up(n);return r===!1&&!t?[]:fp(e,i,r,t)}_notifyStateChanges(e){let t=this._oldCache||[],n=this._cache,r=(e,t)=>e.filter(e=>!t.some(t=>e.plugin.id===t.plugin.id));this._notify(r(t,n),e,`stop`),this._notify(r(n,t),e,`start`)}};function up(e){let t={},n=[],r=Object.keys(cp.plugins.items);for(let e=0;e<r.length;e++)n.push(cp.getPlugin(r[e]));let i=e.plugins||[];for(let e=0;e<i.length;e++){let r=i[e];n.indexOf(r)===-1&&(n.push(r),t[r.id]=!0)}return{plugins:n,localIds:t}}function dp(e,t){return!t&&e===!1?null:e===!0?{}:e}function fp(e,{plugins:t,localIds:n},r,i){let a=[],o=e.getContext();for(let s of t){let t=s.id,c=dp(r[t],i);c!==null&&a.push({plugin:s,options:pp(e.config,{plugin:s,local:n[t]},c,o)})}return a}function pp(e,{plugin:t,local:n},r,i){let a=e.pluginScopeKeys(t),o=e.getOptionScopes(r,a);return n&&t.defaults&&o.push(t.defaults),e.createResolver(o,i,[``],{scriptable:!1,indexable:!1,allKeys:!0})}function mp(e,t){let n=K.datasets[e]||{};return((t.datasets||{})[e]||{}).indexAxis||t.indexAxis||n.indexAxis||`x`}function hp(e,t){let n=e;return e===`_index_`?n=t:e===`_value_`&&(n=t===`x`?`y`:`x`),n}function gp(e,t){return e===t?`_index_`:`_value_`}function _p(e){if(e===`x`||e===`y`||e===`r`)return e}function vp(e){if(e===`top`||e===`bottom`)return`x`;if(e===`left`||e===`right`)return`y`}function yp(e,...t){if(_p(e))return e;for(let n of t){let t=n.axis||vp(n.position)||e.length>1&&_p(e[0].toLowerCase());if(t)return t}throw Error(`Cannot determine type of '${e}' axis. Please provide 'axis' or 'position' option.`)}function bp(e,t,n){if(n[t+`AxisID`]===e)return{axis:t}}function xp(e,t){if(t.data&&t.data.datasets){let n=t.data.datasets.filter(t=>t.xAxisID===e||t.yAxisID===e);if(n.length)return bp(e,`x`,n[0])||bp(e,`y`,n[0])}return{}}function Sp(e,t){let n=rl[e.type]||{scales:{}},r=t.scales||{},i=mp(e.type,t),a=Object.create(null);return Object.keys(r).forEach(t=>{let o=r[t];if(!V(o))return console.error(`Invalid scale configuration for scale: ${t}`);if(o._proxy)return console.warn(`Ignoring resolver passed as options for scale: ${t}`);let s=yp(t,o,xp(t,e),K.scales[o.type]),c=gp(s,i),l=n.scales||{};a[t]=zs(Object.create(null),[{axis:s},o,l[s],l[c]])}),e.data.datasets.forEach(n=>{let i=n.type||e.type,o=n.indexAxis||mp(i,t),s=(rl[i]||{}).scales||{};Object.keys(s).forEach(e=>{let t=hp(e,o),i=n[t+`AxisID`]||t;a[i]=a[i]||Object.create(null),zs(a[i],[{axis:t},r[i],s[e]])})}),Object.keys(a).forEach(e=>{let t=a[e];zs(t,[K.scales[t.type],K.scale])}),a}function Cp(e){let t=e.options||={};t.plugins=H(t.plugins,{}),t.scales=Sp(e,t)}function wp(e){return e||={},e.datasets=e.datasets||[],e.labels=e.labels||[],e}function Tp(e){return e||={},e.data=wp(e.data),Cp(e),e}var Ep=new Map,Dp=new Set;function Op(e,t){let n=Ep.get(e);return n||(n=t(),Ep.set(e,n),Dp.add(n)),n}var kp=(e,t,n)=>{let r=Ws(t,n);r!==void 0&&e.add(r)},Ap=class{constructor(e){this._config=Tp(e),this._scopeCache=new Map,this._resolverCache=new Map}get platform(){return this._config.platform}get type(){return this._config.type}set type(e){this._config.type=e}get data(){return this._config.data}set data(e){this._config.data=wp(e)}get options(){return this._config.options}set options(e){this._config.options=e}get plugins(){return this._config.plugins}update(){let e=this._config;this.clearCache(),Cp(e)}clearCache(){this._scopeCache.clear(),this._resolverCache.clear()}datasetScopeKeys(e){return Op(e,()=>[[`datasets.${e}`,``]])}datasetAnimationScopeKeys(e,t){return Op(`${e}.transition.${t}`,()=>[[`datasets.${e}.transitions.${t}`,`transitions.${t}`],[`datasets.${e}`,``]])}datasetElementScopeKeys(e,t){return Op(`${e}-${t}`,()=>[[`datasets.${e}.elements.${t}`,`datasets.${e}`,`elements.${t}`,``]])}pluginScopeKeys(e){let t=e.id,n=this.type;return Op(`${n}-plugin-${t}`,()=>[[`plugins.${t}`,...e.additionalOptionScopes||[]]])}_cachedScopes(e,t){let n=this._scopeCache,r=n.get(e);return(!r||t)&&(r=new Map,n.set(e,r)),r}getOptionScopes(e,t,n){let{options:r,type:i}=this,a=this._cachedScopes(e,n),o=a.get(t);if(o)return o;let s=new Set;t.forEach(t=>{e&&(s.add(e),t.forEach(t=>kp(s,e,t))),t.forEach(e=>kp(s,r,e)),t.forEach(e=>kp(s,rl[i]||{},e)),t.forEach(e=>kp(s,K,e)),t.forEach(e=>kp(s,il,e))});let c=Array.from(s);return c.length===0&&c.push(Object.create(null)),Dp.has(t)&&a.set(t,c),c}chartOptionScopes(){let{options:e,type:t}=this;return[e,rl[t]||{},K.datasets[t]||{},{type:t},K,il]}resolveNamedOptions(e,t,n,r=[``]){let i={$shared:!0},{resolver:a,subPrefixes:o}=jp(this._resolverCache,e,r),s=a;if(Np(a,t)){i.$shared=!1,n=qs(n)?n():n;let t=this.createResolver(e,n,o);s=Ll(a,n,t)}for(let e of t)i[e]=s[e];return i}createResolver(e,t,n=[``],r){let{resolver:i}=jp(this._resolverCache,e,n);return V(t)?Ll(i,t,void 0,r):i}};function jp(e,t,n){let r=e.get(t);r||(r=new Map,e.set(t,r));let i=n.join(),a=r.get(i);return a||(a={resolver:Il(t,n),subPrefixes:n.filter(e=>!e.toLowerCase().includes(`hover`))},r.set(i,a)),a}var Mp=e=>V(e)&&Object.getOwnPropertyNames(e).some(t=>qs(e[t]));function Np(e,t){let{isScriptable:n,isIndexable:r}=q(e);for(let i of t){let t=n(i),a=r(i),o=(a||t)&&e[i];if(t&&(qs(o)||Mp(o))||a&&ks(o))return!0}return!1}var Pp=`4.5.1`,Fp=[`top`,`bottom`,`left`,`right`,`chartArea`];function Ip(e,t){return e===`top`||e===`bottom`||Fp.indexOf(e)===-1&&t===`x`}function Lp(e,t){return function(n,r){return n[e]===r[e]?n[t]-r[t]:n[e]-r[e]}}function Rp(e){let t=e.chart,n=t.options.animation;t.notifyPlugins(`afterRender`),U(n&&n.onComplete,[e],t)}function zp(e){let t=e.chart,n=t.options.animation;U(n&&n.onProgress,[e],t)}function Bp(e){return cu()&&typeof e==`string`?e=document.getElementById(e):e&&e.length&&(e=e[0]),e&&e.canvas&&(e=e.canvas),e}var Vp={},Hp=e=>{let t=Bp(e);return Object.values(Vp).filter(e=>e.canvas===t).pop()};function Up(e,t,n){let r=Object.keys(e);for(let i of r){let r=+i;if(r>=t){let a=e[i];delete e[i],(n>0||r>t)&&(e[r+n]=a)}}}function Wp(e,t,n,r){return!n||e.type===`mouseout`?null:r?t:e}var Gp=class{static defaults=K;static instances=Vp;static overrides=rl;static registry=cp;static version=Pp;static getChart=Hp;static register(...e){cp.add(...e),Kp()}static unregister(...e){cp.remove(...e),Kp()}constructor(e,t){let n=this.config=new Ap(t),r=Bp(e),i=Hp(r);if(i)throw Error(`Canvas is already in use. Chart with ID '`+i.id+`' must be destroyed before the canvas with ID '`+i.canvas.id+`' can be reused.`);let a=n.createResolver(n.chartOptionScopes(),this.getContext());this.platform=new(n.platform||(If(r))),this.platform.updateConfig(n);let o=this.platform.acquireContext(r,a.aspectRatio),s=o&&o.canvas,c=s&&s.height,l=s&&s.width;if(this.id=Os(),this.ctx=o,this.canvas=s,this.width=l,this.height=c,this._options=a,this._aspectRatio=this.aspectRatio,this._layers=[],this._metasets=[],this._stacks=void 0,this.boxes=[],this.currentDevicePixelRatio=void 0,this.chartArea=void 0,this._active=[],this._lastEvent=void 0,this._listeners={},this._responsiveListeners=void 0,this._sortedMetasets=[],this.scales={},this._plugins=new lp,this.$proxies={},this._hiddenIndices={},this.attached=!1,this._animationsDisabled=void 0,this.$context=void 0,this._doResize=Nc(e=>this.update(e),a.resizeDelay||0),this._dataChanges=[],Vp[this.id]=this,!o||!s){console.error(`Failed to create chart: can't acquire context from the given item`);return}Ku.listen(this,`complete`,Rp),Ku.listen(this,`progress`,zp),this._initialize(),this.attached&&this.update()}get aspectRatio(){let{options:{aspectRatio:e,maintainAspectRatio:t},width:n,height:r,_aspectRatio:i}=this;return B(e)?t&&i?i:r?n/r:null:e}get data(){return this.config.data}set data(e){this.config.data=e}get options(){return this._options}set options(e){this.config.options=e}get registry(){return cp}_initialize(){return this.notifyPlugins(`beforeInit`),this.options.responsive?this.resize():xu(this,this.options.devicePixelRatio),this.bindEvents(),this.notifyPlugins(`afterInit`),this}clear(){return dl(this.canvas,this.ctx),this}stop(){return Ku.stop(this),this}resize(e,t){Ku.running(this)?this._resizeBeforeDraw={width:e,height:t}:this._resize(e,t)}_resize(e,t){let n=this.options,r=this.canvas,i=n.maintainAspectRatio&&this.aspectRatio,a=this.platform.getMaximumSize(r,e,t,i),o=n.devicePixelRatio||this.platform.getDevicePixelRatio(),s=this.width?`resize`:`attach`;this.width=a.width,this.height=a.height,this._aspectRatio=this.aspectRatio,xu(this,o,!0)&&(this.notifyPlugins(`resize`,{size:a}),U(n.onResize,[this,a],this),this.attached&&this._doResize(s)&&this.render())}ensureScalesHaveIDs(){W(this.options.scales||{},(e,t)=>{e.id=t})}buildOrUpdateScales(){let e=this.options,t=e.scales,n=this.scales,r=Object.keys(n).reduce((e,t)=>(e[t]=!1,e),{}),i=[];t&&(i=i.concat(Object.keys(t).map(e=>{let n=t[e],r=yp(e,n),i=r===`r`,a=r===`x`;return{options:n,dposition:i?`chartArea`:a?`bottom`:`left`,dtype:i?`radialLinear`:a?`category`:`linear`}}))),W(i,t=>{let i=t.options,a=i.id,o=yp(a,i),s=H(i.type,t.dtype);(i.position===void 0||Ip(i.position,o)!==Ip(t.dposition))&&(i.position=t.dposition),r[a]=!0;let c=null;a in n&&n[a].type===s?c=n[a]:(c=new(cp.getScale(s))({id:a,type:s,ctx:this.ctx,chart:this}),n[c.id]=c),c.init(i,e)}),W(r,(e,t)=>{e||delete n[t]}),W(n,e=>{pf.configure(this,e,e.options),pf.addBox(this,e)})}_updateMetasets(){let e=this._metasets,t=this.data.datasets.length,n=e.length;if(e.sort((e,t)=>e.index-t.index),n>t){for(let e=t;e<n;++e)this._destroyDatasetMeta(e);e.splice(t,n-t)}this._sortedMetasets=e.slice(0).sort(Lp(`order`,`index`))}_removeUnreferencedMetasets(){let{_metasets:e,data:{datasets:t}}=this;e.length>t.length&&delete this._stacks,e.forEach((e,n)=>{t.filter(t=>t===e._dataset).length===0&&this._destroyDatasetMeta(n)})}buildOrUpdateControllers(){let e=[],t=this.data.datasets,n,r;for(this._removeUnreferencedMetasets(),n=0,r=t.length;n<r;n++){let r=t[n],i=this.getDatasetMeta(n),a=r.type||this.config.type;if(i.type&&i.type!==a&&(this._destroyDatasetMeta(n),i=this.getDatasetMeta(n)),i.type=a,i.indexAxis=r.indexAxis||mp(a,this.options),i.order=r.order||0,i.index=n,i.label=``+r.label,i.visible=this.isDatasetVisible(n),i.controller)i.controller.updateIndex(n),i.controller.linkScales();else{let t=cp.getController(a),{datasetElementType:r,dataElementType:o}=K.datasets[a];Object.assign(t,{dataElementType:cp.getElement(o),datasetElementType:r&&cp.getElement(r)}),i.controller=new t(this,n),e.push(i.controller)}}return this._updateMetasets(),e}_resetElements(){W(this.data.datasets,(e,t)=>{this.getDatasetMeta(t).controller.reset()},this)}reset(){this._resetElements(),this.notifyPlugins(`reset`)}update(e){let t=this.config;t.update();let n=this._options=t.createResolver(t.chartOptionScopes(),this.getContext()),r=this._animationsDisabled=!n.animation;if(this._updateScales(),this._checkEventBindings(),this._updateHiddenIndices(),this._plugins.invalidate(),this.notifyPlugins(`beforeUpdate`,{mode:e,cancelable:!0})===!1)return;let i=this.buildOrUpdateControllers();this.notifyPlugins(`beforeElementsUpdate`);let a=0;for(let e=0,t=this.data.datasets.length;e<t;e++){let{controller:t}=this.getDatasetMeta(e),n=!r&&i.indexOf(t)===-1;t.buildOrUpdateElements(n),a=Math.max(+t.getMaxOverflow(),a)}a=this._minPadding=n.layout.autoPadding?a:0,this._updateLayout(a),r||W(i,e=>{e.reset()}),this._updateDatasets(e),this.notifyPlugins(`afterUpdate`,{mode:e}),this._layers.sort(Lp(`z`,`_idx`));let{_active:o,_lastEvent:s}=this;s?this._eventHandler(s,!0):o.length&&this._updateHoverStyles(o,o,!0),this.render()}_updateScales(){W(this.scales,e=>{pf.removeBox(this,e)}),this.ensureScalesHaveIDs(),this.buildOrUpdateScales()}_checkEventBindings(){let e=this.options;(!Js(new Set(Object.keys(this._listeners)),new Set(e.events))||!!this._responsiveListeners!==e.responsive)&&(this.unbindEvents(),this.bindEvents())}_updateHiddenIndices(){let{_hiddenIndices:e}=this,t=this._getUniformDataChanges()||[];for(let{method:n,start:r,count:i}of t)Up(e,r,n===`_removeElements`?-i:i)}_getUniformDataChanges(){let e=this._dataChanges;if(!e||!e.length)return;this._dataChanges=[];let t=this.data.datasets.length,n=t=>new Set(e.filter(e=>e[0]===t).map((e,t)=>t+`,`+e.splice(1).join(`,`))),r=n(0);for(let e=1;e<t;e++)if(!Js(r,n(e)))return;return Array.from(r).map(e=>e.split(`,`)).map(e=>({method:e[1],start:+e[2],count:+e[3]}))}_updateLayout(e){if(this.notifyPlugins(`beforeLayout`,{cancelable:!0})===!1)return;pf.update(this,this.width,this.height,e);let t=this.chartArea,n=t.width<=0||t.height<=0;this._layers=[],W(this.boxes,e=>{n&&e.position===`chartArea`||(e.configure&&e.configure(),this._layers.push(...e._layers()))},this),this._layers.forEach((e,t)=>{e._idx=t}),this.notifyPlugins(`afterLayout`)}_updateDatasets(e){if(this.notifyPlugins(`beforeDatasetsUpdate`,{mode:e,cancelable:!0})!==!1){for(let e=0,t=this.data.datasets.length;e<t;++e)this.getDatasetMeta(e).controller.configure();for(let t=0,n=this.data.datasets.length;t<n;++t)this._updateDataset(t,qs(e)?e({datasetIndex:t}):e);this.notifyPlugins(`afterDatasetsUpdate`,{mode:e})}}_updateDataset(e,t){let n=this.getDatasetMeta(e),r={meta:n,index:e,mode:t,cancelable:!0};this.notifyPlugins(`beforeDatasetUpdate`,r)!==!1&&(n.controller._update(t),r.cancelable=!1,this.notifyPlugins(`afterDatasetUpdate`,r))}render(){this.notifyPlugins(`beforeRender`,{cancelable:!0})!==!1&&(Ku.has(this)?this.attached&&!Ku.running(this)&&Ku.start(this):(this.draw(),Rp({chart:this})))}draw(){let e;if(this._resizeBeforeDraw){let{width:e,height:t}=this._resizeBeforeDraw;this._resizeBeforeDraw=null,this._resize(e,t)}if(this.clear(),this.width<=0||this.height<=0||this.notifyPlugins(`beforeDraw`,{cancelable:!0})===!1)return;let t=this._layers;for(e=0;e<t.length&&t[e].z<=0;++e)t[e].draw(this.chartArea);for(this._drawDatasets();e<t.length;++e)t[e].draw(this.chartArea);this.notifyPlugins(`afterDraw`)}_getSortedDatasetMetas(e){let t=this._sortedMetasets,n=[],r,i;for(r=0,i=t.length;r<i;++r){let i=t[r];(!e||i.visible)&&n.push(i)}return n}getSortedVisibleDatasetMetas(){return this._getSortedDatasetMetas(!0)}_drawDatasets(){if(this.notifyPlugins(`beforeDatasetsDraw`,{cancelable:!0})===!1)return;let e=this.getSortedVisibleDatasetMetas();for(let t=e.length-1;t>=0;--t)this._drawDataset(e[t]);this.notifyPlugins(`afterDatasetsDraw`)}_drawDataset(e){let t=this.ctx,n={meta:e,index:e.index,cancelable:!0},r=Gu(this,e);this.notifyPlugins(`beforeDatasetDraw`,n)!==!1&&(r&&hl(t,r),e.controller.draw(),r&&gl(t),n.cancelable=!1,this.notifyPlugins(`afterDatasetDraw`,n))}isPointInArea(e){return ml(e,this.chartArea,this._minPadding)}getElementsAtEventForMode(e,t,n,r){let i=Yd.modes[t];return typeof i==`function`?i(this,e,n,r):[]}getDatasetMeta(e){let t=this.data.datasets[e],n=this._metasets,r=n.filter(e=>e&&e._dataset===t).pop();return r||(r={type:null,data:[],dataset:null,controller:null,hidden:null,xAxisID:null,yAxisID:null,order:t&&t.order||0,index:e,_dataset:t,_parsed:[],_sorted:!1},n.push(r)),r}getContext(){return this.$context||=Fl(null,{chart:this,type:`chart`})}getVisibleDatasetCount(){return this.getSortedVisibleDatasetMetas().length}isDatasetVisible(e){let t=this.data.datasets[e];if(!t)return!1;let n=this.getDatasetMeta(e);return typeof n.hidden==`boolean`?!n.hidden:!t.hidden}setDatasetVisibility(e,t){let n=this.getDatasetMeta(e);n.hidden=!t}toggleDataVisibility(e){this._hiddenIndices[e]=!this._hiddenIndices[e]}getDataVisibility(e){return!this._hiddenIndices[e]}_updateVisibility(e,t,n){let r=n?`show`:`hide`,i=this.getDatasetMeta(e),a=i.controller._resolveAnimations(void 0,r);Ks(t)?(i.data[t].hidden=!n,this.update()):(this.setDatasetVisibility(e,n),a.update(i,{visible:n}),this.update(t=>t.datasetIndex===e?r:void 0))}hide(e,t){this._updateVisibility(e,t,!1)}show(e,t){this._updateVisibility(e,t,!0)}_destroyDatasetMeta(e){let t=this._metasets[e];t&&t.controller&&t.controller._destroy(),delete this._metasets[e]}_stop(){let e,t;for(this.stop(),Ku.remove(this),e=0,t=this.data.datasets.length;e<t;++e)this._destroyDatasetMeta(e)}destroy(){this.notifyPlugins(`beforeDestroy`);let{canvas:e,ctx:t}=this;this._stop(),this.config.clearCache(),e&&(this.unbindEvents(),dl(e,t),this.platform.releaseContext(t),this.canvas=null,this.ctx=null),delete Vp[this.id],this.notifyPlugins(`afterDestroy`)}toBase64Image(...e){return this.canvas.toDataURL(...e)}bindEvents(){this.bindUserEvents(),this.options.responsive?this.bindResponsiveEvents():this.attached=!0}bindUserEvents(){let e=this._listeners,t=this.platform,n=(n,r)=>{t.addEventListener(this,n,r),e[n]=r},r=(e,t,n)=>{e.offsetX=t,e.offsetY=n,this._eventHandler(e)};W(this.options.events,e=>n(e,r))}bindResponsiveEvents(){this._responsiveListeners||={};let e=this._responsiveListeners,t=this.platform,n=(n,r)=>{t.addEventListener(this,n,r),e[n]=r},r=(n,r)=>{e[n]&&(t.removeEventListener(this,n,r),delete e[n])},i=(e,t)=>{this.canvas&&this.resize(e,t)},a,o=()=>{r(`attach`,o),this.attached=!0,this.resize(),n(`resize`,i),n(`detach`,a)};a=()=>{this.attached=!1,r(`resize`,i),this._stop(),this._resize(0,0),n(`attach`,o)},t.isAttached(this.canvas)?o():a()}unbindEvents(){W(this._listeners,(e,t)=>{this.platform.removeEventListener(this,t,e)}),this._listeners={},W(this._responsiveListeners,(e,t)=>{this.platform.removeEventListener(this,t,e)}),this._responsiveListeners=void 0}updateHoverStyle(e,t,n){let r=n?`set`:`remove`,i,a,o,s;for(t===`dataset`&&(i=this.getDatasetMeta(e[0].datasetIndex),i.controller[`_`+r+`DatasetHoverStyle`]()),o=0,s=e.length;o<s;++o){a=e[o];let t=a&&this.getDatasetMeta(a.datasetIndex).controller;t&&t[r+`HoverStyle`](a.element,a.datasetIndex,a.index)}}getActiveElements(){return this._active||[]}setActiveElements(e){let t=this._active||[],n=e.map(({datasetIndex:e,index:t})=>{let n=this.getDatasetMeta(e);if(!n)throw Error(`No dataset found at index `+e);return{datasetIndex:e,element:n.data[t],index:t}});Ps(n,t)||(this._active=n,this._lastEvent=null,this._updateHoverStyles(n,t))}notifyPlugins(e,t,n){return this._plugins.notify(this,e,t,n)}isPluginEnabled(e){return this._plugins._cache.filter(t=>t.plugin.id===e).length===1}_updateHoverStyles(e,t,n){let r=this.options.hover,i=(e,t)=>e.filter(e=>!t.some(t=>e.datasetIndex===t.datasetIndex&&e.index===t.index)),a=i(t,e),o=n?e:i(e,t);a.length&&this.updateHoverStyle(a,r.mode,!1),o.length&&r.mode&&this.updateHoverStyle(o,r.mode,!0)}_eventHandler(e,t){let n={event:e,replay:t,cancelable:!0,inChartArea:this.isPointInArea(e)},r=t=>(t.options.events||this.options.events).includes(e.native.type);if(this.notifyPlugins(`beforeEvent`,n,r)===!1)return;let i=this._handleEvent(e,t,n.inChartArea);return n.cancelable=!1,this.notifyPlugins(`afterEvent`,n,r),(i||n.changed)&&this.render(),this}_handleEvent(e,t,n){let{_active:r=[],options:i}=this,a=t,o=this._getActiveElements(e,r,n,a),s=Ys(e),c=Wp(e,this._lastEvent,n,s);n&&(this._lastEvent=null,U(i.onHover,[e,o,this],this),s&&U(i.onClick,[e,o,this],this));let l=!Ps(o,r);return(l||t)&&(this._active=o,this._updateHoverStyles(o,r,t)),this._lastEvent=c,l}_getActiveElements(e,t,n,r){if(e.type===`mouseout`)return[];if(!n)return t;let i=this.options.hover;return this.getElementsAtEventForMode(e,i.mode,i,r)}};function Kp(){return W(Gp.instances,e=>e._plugins.invalidate())}function qp(e,t,n){let{startAngle:r,x:i,y:a,outerRadius:o,innerRadius:s,options:c}=t,{borderWidth:l,borderJoinStyle:u}=c,d=Math.min(l/o,vc(r-n));if(e.beginPath(),e.arc(i,a,o-l/2,r+d/2,n-d/2),s>0){let t=Math.min(l/s,vc(r-n));e.arc(i,a,s+l/2,n-t/2,r+t/2,!0)}else{let t=Math.min(l/2,o*vc(r-n));if(u===`round`)e.arc(i,a,t,n-G/2,r+G/2,!0);else if(u===`bevel`){let o=2*t*t,s=-o*Math.cos(n+G/2)+i,c=-o*Math.sin(n+G/2)+a,l=o*Math.cos(r+G/2)+i,u=o*Math.sin(r+G/2)+a;e.lineTo(s,c),e.lineTo(l,u)}}e.closePath(),e.moveTo(0,0),e.rect(0,0,e.canvas.width,e.canvas.height),e.clip(`evenodd`)}function Jp(e,t,n){let{startAngle:r,pixelMargin:i,x:a,y:o,outerRadius:s,innerRadius:c}=t,l=i/s;e.beginPath(),e.arc(a,o,s,r-l,n+l),c>i?(l=i/c,e.arc(a,o,c,n+l,r-l,!0)):e.arc(a,o,i,n+ec,r-ec),e.closePath(),e.clip()}function Yp(e){return Ol(e,[`outerStart`,`outerEnd`,`innerStart`,`innerEnd`])}function Xp(e,t,n,r){let i=Yp(e.options.borderRadius),a=(n-t)/2,o=Math.min(a,r*t/2),s=e=>{let t=(n-Math.min(a,e))*r/2;return bc(e,0,Math.min(a,t))};return{outerStart:s(i.outerStart),outerEnd:s(i.outerEnd),innerStart:bc(i.innerStart,0,o),innerEnd:bc(i.innerEnd,0,o)}}function Zp(e,t,n,r){return{x:n+e*Math.cos(t),y:r+e*Math.sin(t)}}function Qp(e,t,n,r,i,a){let{x:o,y:s,startAngle:c,pixelMargin:l,innerRadius:u}=t,d=Math.max(t.outerRadius+r+n-l,0),f=u>0?u+r+n+l:0,p=0,m=i-c;if(r){let e=((u>0?u-r:0)+(d>0?d-r:0))/2;p=(m-(e===0?m:m*e/(e+r)))/2}let h=(m-Math.max(.001,m*d-n/G)/d)/2,g=c+h+p,_=i-h-p,{outerStart:v,outerEnd:y,innerStart:b,innerEnd:x}=Xp(t,f,d,_-g),S=d-v,C=d-y,w=g+v/S,T=_-y/C,E=f+b,D=f+x,O=g+b/E,ee=_-x/D;if(e.beginPath(),a){let t=(w+T)/2;if(e.arc(o,s,d,w,t),e.arc(o,s,d,t,T),y>0){let t=Zp(C,T,o,s);e.arc(t.x,t.y,y,T,_+ec)}let n=Zp(D,_,o,s);if(e.lineTo(n.x,n.y),x>0){let t=Zp(D,ee,o,s);e.arc(t.x,t.y,x,_+ec,ee+Math.PI)}let r=(_-x/f+(g+b/f))/2;if(e.arc(o,s,f,_-x/f,r,!0),e.arc(o,s,f,r,g+b/f,!0),b>0){let t=Zp(E,O,o,s);e.arc(t.x,t.y,b,O+Math.PI,g-ec)}let i=Zp(S,g,o,s);if(e.lineTo(i.x,i.y),v>0){let t=Zp(S,w,o,s);e.arc(t.x,t.y,v,g-ec,w)}}else{e.moveTo(o,s);let t=Math.cos(w)*d+o,n=Math.sin(w)*d+s;e.lineTo(t,n);let r=Math.cos(T)*d+o,i=Math.sin(T)*d+s;e.lineTo(r,i)}e.closePath()}function $p(e,t,n,r,i){let{fullCircles:a,startAngle:o,circumference:s}=t,c=t.endAngle;if(a){Qp(e,t,n,r,c,i);for(let t=0;t<a;++t)e.fill();isNaN(s)||(c=o+(s%Xs||Xs))}return Qp(e,t,n,r,c,i),e.fill(),c}function em(e,t,n,r,i){let{fullCircles:a,startAngle:o,circumference:s,options:c}=t,{borderWidth:l,borderJoinStyle:u,borderDash:d,borderDashOffset:f,borderRadius:p}=c,m=c.borderAlign===`inner`;if(!l)return;e.setLineDash(d||[]),e.lineDashOffset=f,m?(e.lineWidth=l*2,e.lineJoin=u||`round`):(e.lineWidth=l,e.lineJoin=u||`bevel`);let h=t.endAngle;if(a){Qp(e,t,n,r,h,i);for(let t=0;t<a;++t)e.stroke();isNaN(s)||(h=o+(s%Xs||Xs))}m&&Jp(e,t,h),c.selfJoin&&h-o>=G&&p===0&&u!==`miter`&&qp(e,t,h),a||(Qp(e,t,n,r,h,i),e.stroke())}var tm=class extends Lf{static id=`arc`;static defaults={borderAlign:`center`,borderColor:`#fff`,borderDash:[],borderDashOffset:0,borderJoinStyle:void 0,borderRadius:0,borderWidth:2,offset:0,spacing:0,angle:void 0,circular:!0,selfJoin:!1};static defaultRoutes={backgroundColor:`backgroundColor`};static descriptors={_scriptable:!0,_indexable:e=>e!==`borderDash`};circumference;endAngle;fullCircles;innerRadius;outerRadius;pixelMargin;startAngle;constructor(e){super(),this.options=void 0,this.circumference=void 0,this.startAngle=void 0,this.endAngle=void 0,this.innerRadius=void 0,this.outerRadius=void 0,this.pixelMargin=0,this.fullCircles=0,e&&Object.assign(this,e)}inRange(e,t,n){let{angle:r,distance:i}=hc(this.getProps([`x`,`y`],n),{x:e,y:t}),{startAngle:a,endAngle:o,innerRadius:s,outerRadius:c,circumference:l}=this.getProps([`startAngle`,`endAngle`,`innerRadius`,`outerRadius`,`circumference`],n),u=(this.options.spacing+this.options.borderWidth)/2,d=H(l,o-a),f=yc(r,a,o)&&a!==o,p=d>=Xs||f,m=Sc(i,s+u,c+u);return p&&m}getCenterPoint(e){let{x:t,y:n,startAngle:r,endAngle:i,innerRadius:a,outerRadius:o}=this.getProps([`x`,`y`,`startAngle`,`endAngle`,`innerRadius`,`outerRadius`],e),{offset:s,spacing:c}=this.options,l=(r+i)/2,u=(a+o+c+s)/2;return{x:t+Math.cos(l)*u,y:n+Math.sin(l)*u}}tooltipPosition(e){return this.getCenterPoint(e)}draw(e){let{options:t,circumference:n}=this,r=(t.offset||0)/4,i=(t.spacing||0)/2,a=t.circular;if(this.pixelMargin=t.borderAlign===`inner`?.33:0,this.fullCircles=n>Xs?Math.floor(n/Xs):0,n===0||this.innerRadius<0||this.outerRadius<0)return;e.save();let o=(this.startAngle+this.endAngle)/2;e.translate(Math.cos(o)*r,Math.sin(o)*r);let s=r*(1-Math.sin(Math.min(G,n||0)));e.fillStyle=t.backgroundColor,e.strokeStyle=t.borderColor,$p(e,this,s,i,a),em(e,this,s,i,a),e.restore()}};function nm(e,t,n=t){e.lineCap=H(n.borderCapStyle,t.borderCapStyle),e.setLineDash(H(n.borderDash,t.borderDash)),e.lineDashOffset=H(n.borderDashOffset,t.borderDashOffset),e.lineJoin=H(n.borderJoinStyle,t.borderJoinStyle),e.lineWidth=H(n.borderWidth,t.borderWidth),e.strokeStyle=H(n.borderColor,t.borderColor)}function rm(e,t,n){e.lineTo(n.x,n.y)}function im(e){return e.stepped?_l:e.tension||e.cubicInterpolationMode===`monotone`?vl:rm}function am(e,t,n={}){let r=e.length,{start:i=0,end:a=r-1}=n,{start:o,end:s}=t,c=Math.max(i,o),l=Math.min(a,s),u=i<o&&a<o||i>s&&a>s;return{count:r,start:c,loop:t.loop,ilen:l<c&&!u?r+l-c:l-c}}function om(e,t,n,r){let{points:i,options:a}=t,{count:o,start:s,loop:c,ilen:l}=am(i,n,r),u=im(a),{move:d=!0,reverse:f}=r||{},p,m,h;for(p=0;p<=l;++p)m=i[(s+(f?l-p:p))%o],!m.skip&&(d?(e.moveTo(m.x,m.y),d=!1):u(e,h,m,f,a.stepped),h=m);return c&&(m=i[(s+(f?l:0))%o],u(e,h,m,f,a.stepped)),!!c}function sm(e,t,n,r){let i=t.points,{count:a,start:o,ilen:s}=am(i,n,r),{move:c=!0,reverse:l}=r||{},u=0,d=0,f,p,m,h,g,_,v=e=>(o+(l?s-e:e))%a,y=()=>{h!==g&&(e.lineTo(u,g),e.lineTo(u,h),e.lineTo(u,_))};for(c&&(p=i[v(0)],e.moveTo(p.x,p.y)),f=0;f<=s;++f){if(p=i[v(f)],p.skip)continue;let t=p.x,n=p.y,r=t|0;r===m?(n<h?h=n:n>g&&(g=n),u=(d*u+t)/++d):(y(),e.lineTo(t,n),m=r,d=0,h=g=n),_=n}y()}function cm(e){let t=e.options,n=t.borderDash&&t.borderDash.length;return!e._decimated&&!e._loop&&!t.tension&&t.cubicInterpolationMode!==`monotone`&&!t.stepped&&!n?sm:om}function lm(e){return e.stepped?Tu:e.tension||e.cubicInterpolationMode===`monotone`?Eu:wu}function um(e,t,n,r){let i=t._path;i||(i=t._path=new Path2D,t.path(i,n,r)&&i.closePath()),nm(e,t.options),e.stroke(i)}function dm(e,t,n,r){let{segments:i,options:a}=t,o=cm(t);for(let s of i)nm(e,a,s.style),e.beginPath(),o(e,t,s,{start:n,end:n+r-1})&&e.closePath(),e.stroke()}var fm=typeof Path2D==`function`;function pm(e,t,n,r){fm&&!t.options.segment?um(e,t,n,r):dm(e,t,n,r)}var mm=class extends Lf{static id=`line`;static defaults={borderCapStyle:`butt`,borderDash:[],borderDashOffset:0,borderJoinStyle:`miter`,borderWidth:3,capBezierPoints:!0,cubicInterpolationMode:`default`,fill:!1,spanGaps:!1,stepped:!1,tension:0};static defaultRoutes={backgroundColor:`backgroundColor`,borderColor:`borderColor`};static descriptors={_scriptable:!0,_indexable:e=>e!==`borderDash`&&e!==`fill`};constructor(e){super(),this.animated=!0,this.options=void 0,this._chart=void 0,this._loop=void 0,this._fullLoop=void 0,this._path=void 0,this._points=void 0,this._segments=void 0,this._decimated=!1,this._pointsUpdated=!1,this._datasetIndex=void 0,e&&Object.assign(this,e)}updateControlPoints(e,t){let n=this.options;if((n.tension||n.cubicInterpolationMode===`monotone`)&&!n.stepped&&!this._pointsUpdated){let r=n.spanGaps?this._loop:this._fullLoop;su(this._points,n,e,r,t),this._pointsUpdated=!0}}set points(e){this._points=e,delete this._segments,delete this._path,this._pointsUpdated=!1}get points(){return this._points}get segments(){return this._segments||=zu(this,this.options.segment)}first(){let e=this.segments,t=this.points;return e.length&&t[e[0].start]}last(){let e=this.segments,t=this.points,n=e.length;return n&&t[e[n-1].end]}interpolate(e,t){let n=this.options,r=e[t],i=this.points,a=Iu(this,{property:t,start:r,end:r});if(!a.length)return;let o=[],s=lm(n),c,l;for(c=0,l=a.length;c<l;++c){let{start:l,end:u}=a[c],d=i[l],f=i[u];if(d===f){o.push(d);continue}let p=s(d,f,Math.abs((r-d[t])/(f[t]-d[t])),n.stepped);p[t]=e[t],o.push(p)}return o.length===1?o[0]:o}pathSegment(e,t,n){return cm(this)(e,this,t,n)}path(e,t,n){let r=this.segments,i=cm(this),a=this._loop;t||=0,n||=this.points.length-t;for(let o of r)a&=i(e,this,o,{start:t,end:t+n-1});return!!a}draw(e,t,n,r){let i=this.options||{};(this.points||[]).length&&i.borderWidth&&(e.save(),pm(e,this,n,r),e.restore()),this.animated&&(this._pointsUpdated=!1,this._path=void 0)}};function hm(e,t,n,r){let i=e.options,{[n]:a}=e.getProps([n],r);return Math.abs(t-a)<i.radius+i.hitRadius}var gm=class extends Lf{static id=`point`;parsed;skip;stop;static defaults={borderWidth:1,hitRadius:1,hoverBorderWidth:1,hoverRadius:4,pointStyle:`circle`,radius:3,rotation:0};static defaultRoutes={backgroundColor:`backgroundColor`,borderColor:`borderColor`};constructor(e){super(),this.options=void 0,this.parsed=void 0,this.skip=void 0,this.stop=void 0,e&&Object.assign(this,e)}inRange(e,t,n){let r=this.options,{x:i,y:a}=this.getProps([`x`,`y`],n);return(e-i)**2+(t-a)**2<(r.hitRadius+r.radius)**2}inXRange(e,t){return hm(this,e,`x`,t)}inYRange(e,t){return hm(this,e,`y`,t)}getCenterPoint(e){let{x:t,y:n}=this.getProps([`x`,`y`],e);return{x:t,y:n}}size(e){e=e||this.options||{};let t=e.radius||0;t=Math.max(t,t&&e.hoverRadius||0);let n=t&&e.borderWidth||0;return(t+n)*2}draw(e,t){let n=this.options;this.skip||n.radius<.1||!ml(this,t,this.size(n)/2)||(e.strokeStyle=n.borderColor,e.lineWidth=n.borderWidth,e.fillStyle=n.backgroundColor,fl(e,n,this.x,this.y))}getRange(){let e=this.options||{};return e.radius+e.hitRadius}};function _m(e,t){let{x:n,y:r,base:i,width:a,height:o}=e.getProps([`x`,`y`,`base`,`width`,`height`],t),s,c,l,u,d;return e.horizontal?(d=o/2,s=Math.min(n,i),c=Math.max(n,i),l=r-d,u=r+d):(d=a/2,s=n-d,c=n+d,l=Math.min(r,i),u=Math.max(r,i)),{left:s,top:l,right:c,bottom:u}}function vm(e,t,n,r){return e?0:bc(t,n,r)}function ym(e,t,n){let r=e.options.borderWidth,i=e.borderSkipped,a=kl(r);return{t:vm(i.top,a.top,0,n),r:vm(i.right,a.right,0,t),b:vm(i.bottom,a.bottom,0,n),l:vm(i.left,a.left,0,t)}}function bm(e,t,n){let{enableBorderRadius:r}=e.getProps([`enableBorderRadius`]),i=e.options.borderRadius,a=Al(i),o=Math.min(t,n),s=e.borderSkipped,c=r||V(i);return{topLeft:vm(!c||s.top||s.left,a.topLeft,0,o),topRight:vm(!c||s.top||s.right,a.topRight,0,o),bottomLeft:vm(!c||s.bottom||s.left,a.bottomLeft,0,o),bottomRight:vm(!c||s.bottom||s.right,a.bottomRight,0,o)}}function xm(e){let t=_m(e),n=t.right-t.left,r=t.bottom-t.top,i=ym(e,n/2,r/2),a=bm(e,n/2,r/2);return{outer:{x:t.left,y:t.top,w:n,h:r,radius:a},inner:{x:t.left+i.l,y:t.top+i.t,w:n-i.l-i.r,h:r-i.t-i.b,radius:{topLeft:Math.max(0,a.topLeft-Math.max(i.t,i.l)),topRight:Math.max(0,a.topRight-Math.max(i.t,i.r)),bottomLeft:Math.max(0,a.bottomLeft-Math.max(i.b,i.l)),bottomRight:Math.max(0,a.bottomRight-Math.max(i.b,i.r))}}}}function Sm(e,t,n,r){let i=t===null,a=n===null,o=e&&!(i&&a)&&_m(e,r);return o&&(i||Sc(t,o.left,o.right))&&(a||Sc(n,o.top,o.bottom))}function Cm(e){return e.topLeft||e.topRight||e.bottomLeft||e.bottomRight}function wm(e,t){e.rect(t.x,t.y,t.w,t.h)}function Tm(e,t,n={}){let r=e.x===n.x?0:-t,i=e.y===n.y?0:-t,a=(e.x+e.w===n.x+n.w?0:t)-r,o=(e.y+e.h===n.y+n.h?0:t)-i;return{x:e.x+r,y:e.y+i,w:e.w+a,h:e.h+o,radius:e.radius}}var Em=Object.freeze({__proto__:null,ArcElement:tm,BarElement:class extends Lf{static id=`bar`;static defaults={borderSkipped:`start`,borderWidth:0,borderRadius:0,inflateAmount:`auto`,pointStyle:void 0};static defaultRoutes={backgroundColor:`backgroundColor`,borderColor:`borderColor`};constructor(e){super(),this.options=void 0,this.horizontal=void 0,this.base=void 0,this.width=void 0,this.height=void 0,this.inflateAmount=void 0,e&&Object.assign(this,e)}draw(e){let{inflateAmount:t,options:{borderColor:n,backgroundColor:r}}=this,{inner:i,outer:a}=xm(this),o=Cm(a.radius)?Cl:wm;e.save(),(a.w!==i.w||a.h!==i.h)&&(e.beginPath(),o(e,Tm(a,t,i)),e.clip(),o(e,Tm(i,-t,a)),e.fillStyle=n,e.fill(`evenodd`)),e.beginPath(),o(e,Tm(i,t)),e.fillStyle=r,e.fill(),e.restore()}inRange(e,t,n){return Sm(this,e,t,n)}inXRange(e,t){return Sm(this,e,null,t)}inYRange(e,t){return Sm(this,null,e,t)}getCenterPoint(e){let{x:t,y:n,base:r,horizontal:i}=this.getProps([`x`,`y`,`base`,`horizontal`],e);return{x:i?(t+r)/2:t,y:i?n:(n+r)/2}}getRange(e){return e===`x`?this.width/2:this.height/2}},LineElement:mm,PointElement:gm}),Dm=[`rgb(54, 162, 235)`,`rgb(255, 99, 132)`,`rgb(255, 159, 64)`,`rgb(255, 205, 86)`,`rgb(75, 192, 192)`,`rgb(153, 102, 255)`,`rgb(201, 203, 207)`],Om=Dm.map(e=>e.replace(`rgb(`,`rgba(`).replace(`)`,`, 0.5)`));function km(e){return Dm[e%Dm.length]}function Am(e){return Om[e%Om.length]}function jm(e,t){return e.borderColor=km(t),e.backgroundColor=Am(t),++t}function Mm(e,t){return e.backgroundColor=e.data.map(()=>km(t++)),t}function Nm(e,t){return e.backgroundColor=e.data.map(()=>Am(t++)),t}function Pm(e){let t=0;return(n,r)=>{let i=e.getDatasetMeta(r).controller;i instanceof Fd?t=Mm(n,t):i instanceof Ld?t=Nm(n,t):i&&(t=jm(n,t))}}function Fm(e){let t;for(t in e)if(e[t].borderColor||e[t].backgroundColor)return!0;return!1}function Im(e){return e&&(e.borderColor||e.backgroundColor)}function Lm(){return K.borderColor!==`rgba(0,0,0,0.1)`||K.backgroundColor!==`rgba(0,0,0,0.1)`}var Rm={id:`colors`,defaults:{enabled:!0,forceOverride:!1},beforeLayout(e,t,n){if(!n.enabled)return;let{data:{datasets:r},options:i}=e.config,{elements:a}=i,o=Fm(r)||Im(i)||a&&Fm(a)||Lm();if(!n.forceOverride&&o)return;let s=Pm(e);r.forEach(s)}};function zm(e,t,n,r,i){let a=i.samples||r;if(a>=n)return e.slice(t,t+n);let o=[],s=(n-2)/(a-2),c=0,l=t+n-1,u=t,d,f,p,m,h;for(o[c++]=e[u],d=0;d<a-2;d++){let r=0,i=0,a,l=Math.floor((d+1)*s)+1+t,g=Math.min(Math.floor((d+2)*s)+1,n)+t,_=g-l;for(a=l;a<g;a++)r+=e[a].x,i+=e[a].y;r/=_,i/=_;let v=Math.floor(d*s)+1+t,y=Math.min(Math.floor((d+1)*s)+1,n)+t,{x:b,y:x}=e[u];for(p=m=-1,a=v;a<y;a++)m=.5*Math.abs((b-r)*(e[a].y-x)-(b-e[a].x)*(i-x)),m>p&&(p=m,f=e[a],h=a);o[c++]=f,u=h}return o[c++]=e[l],o}function Bm(e,t,n,r){let i=0,a=0,o,s,c,l,u,d,f,p,m,h,g=[],_=t+n-1,v=e[t].x,y=e[_].x-v;for(o=t;o<t+n;++o){s=e[o],c=(s.x-v)/y*r,l=s.y;let t=c|0;if(t===u)l<m?(m=l,d=o):l>h&&(h=l,f=o),i=(a*i+s.x)/++a;else{let n=o-1;if(!B(d)&&!B(f)){let t=Math.min(d,f),r=Math.max(d,f);t!==p&&t!==n&&g.push({...e[t],x:i}),r!==p&&r!==n&&g.push({...e[r],x:i})}o>0&&n!==p&&g.push(e[n]),g.push(s),u=t,a=0,m=h=l,d=f=p=o}}return g}function Vm(e){if(e._decimated){let t=e._data;delete e._decimated,delete e._data,Object.defineProperty(e,"data",{configurable:!0,enumerable:!0,writable:!0,value:t})}}function Hm(e){e.data.datasets.forEach(e=>{Vm(e)})}function Um(e,t){let n=t.length,r=0,i,{iScale:a}=e,{min:o,max:s,minDefined:c,maxDefined:l}=a.getUserBounds();return c&&(r=bc(wc(t,a.axis,o).lo,0,n-1)),i=l?bc(wc(t,a.axis,s).hi+1,r,n)-r:n-r,{start:r,count:i}}var Wm={id:`decimation`,defaults:{algorithm:`min-max`,enabled:!1},beforeElementsUpdate:(e,t,n)=>{if(!n.enabled){Hm(e);return}let r=e.width;e.data.datasets.forEach((t,i)=>{let{_data:a,indexAxis:o}=t,s=e.getDatasetMeta(i),c=a||t.data;if(Nl([o,e.options.indexAxis])===`y`||!s.controller.supportsDecimation)return;let l=e.scales[s.xAxisID];if(l.type!==`linear`&&l.type!==`time`||e.options.parsing)return;let{start:u,count:d}=Um(s,c);if(d<=(n.threshold||4*r)){Vm(t);return}B(a)&&(t._data=c,delete t.data,Object.defineProperty(t,"data",{configurable:!0,enumerable:!0,get:function(){return this._decimated},set:function(e){this._data=e}}));let f;switch(n.algorithm){case`lttb`:f=zm(c,u,d,r,n);break;case`min-max`:f=Bm(c,u,d,r);break;default:throw Error(`Unsupported decimation algorithm '${n.algorithm}'`)}t._decimated=f})},destroy(e){Hm(e)}};function Gm(e,t,n){let r=e.segments,i=e.points,a=t.points,o=[];for(let e of r){let{start:r,end:s}=e;s=Jm(r,s,i);let c=Km(n,i[r],i[s],e.loop);if(!t.segments){o.push({source:e,target:c,start:i[r],end:i[s]});continue}let l=Iu(t,c);for(let t of l){let r=Km(n,a[t.start],a[t.end],t.loop),s=Fu(e,i,r);for(let e of s)o.push({source:e,target:t,start:{[n]:Ym(c,r,`start`,Math.max)},end:{[n]:Ym(c,r,`end`,Math.min)}})}}return o}function Km(e,t,n,r){if(r)return;let i=t[e],a=n[e];return e===`angle`&&(i=vc(i),a=vc(a)),{property:e,start:i,end:a}}function qm(e,t){let{x:n=null,y:r=null}=e||{},i=t.points,a=[];return t.segments.forEach(({start:e,end:t})=>{t=Jm(e,t,i);let o=i[e],s=i[t];r===null?n!==null&&(a.push({x:n,y:o.y}),a.push({x:n,y:s.y})):(a.push({x:o.x,y:r}),a.push({x:s.x,y:r}))}),a}function Jm(e,t,n){for(;t>e;t--){let e=n[t];if(!isNaN(e.x)&&!isNaN(e.y))break}return t}function Ym(e,t,n,r){return e&&t?r(e[n],t[n]):e?e[n]:t?t[n]:0}function Xm(e,t){let n=[],r=!1;return ks(e)?(r=!0,n=e):n=qm(e,t),n.length?new mm({points:n,options:{tension:0},_loop:r,_fullLoop:r}):null}function Zm(e){return e&&e.fill!==!1}function Qm(e,t,n){let r=e[t].fill,i=[t],a;if(!n)return r;for(;r!==!1&&i.indexOf(r)===-1;){if(!As(r))return r;if(a=e[r],!a)return!1;if(a.visible)return r;i.push(r),r=a.fill}return!1}function $m(e,t,n){let r=rh(e);if(V(r))return!isNaN(r.value)&&r;let i=parseFloat(r);return As(i)&&Math.floor(i)===i?eh(r[0],t,i,n):[`origin`,`start`,`end`,`stack`,`shape`].indexOf(r)>=0&&r}function eh(e,t,n,r){return(e===`-`||e===`+`)&&(n=t+n),n===t||n<0||n>=r?!1:n}function th(e,t){let n=null;return e===`start`?n=t.bottom:e===`end`?n=t.top:V(e)?n=t.getPixelForValue(e.value):t.getBasePixel&&(n=t.getBasePixel()),n}function nh(e,t,n){let r;return r=e===`start`?n:e===`end`?t.options.reverse?t.min:t.max:V(e)?e.value:t.getBaseValue(),r}function rh(e){let t=e.options,n=t.fill,r=H(n&&n.target,n);return r===void 0&&(r=!!t.backgroundColor),r===!1||r===null?!1:r===!0?`origin`:r}function ih(e){let{scale:t,index:n,line:r}=e,i=[],a=r.segments,o=r.points,s=ah(t,n);s.push(Xm({x:null,y:t.bottom},r));for(let e=0;e<a.length;e++){let t=a[e];for(let e=t.start;e<=t.end;e++)oh(i,o[e],s)}return new mm({points:i,options:{}})}function ah(e,t){let n=[],r=e.getMatchingVisibleMetas(`line`);for(let e=0;e<r.length;e++){let i=r[e];if(i.index===t)break;i.hidden||n.unshift(i.dataset)}return n}function oh(e,t,n){let r=[];for(let i=0;i<n.length;i++){let a=n[i],{first:o,last:s,point:c}=sh(a,t,`x`);if(!(!c||o&&s)){if(o)r.unshift(c);else if(e.push(c),!s)break}}e.push(...r)}function sh(e,t,n){let r=e.interpolate(t,n);if(!r)return{};let i=r[n],a=e.segments,o=e.points,s=!1,c=!1;for(let e=0;e<a.length;e++){let t=a[e],r=o[t.start][n],l=o[t.end][n];if(Sc(i,r,l)){s=i===r,c=i===l;break}}return{first:s,last:c,point:r}}var ch=class{constructor(e){this.x=e.x,this.y=e.y,this.radius=e.radius}pathSegment(e,t,n){let{x:r,y:i,radius:a}=this;return t||={start:0,end:Xs},e.arc(r,i,a,t.end,t.start,!0),!n.bounds}interpolate(e){let{x:t,y:n,radius:r}=this,i=e.angle;return{x:t+Math.cos(i)*r,y:n+Math.sin(i)*r,angle:i}}};function lh(e){let{chart:t,fill:n,line:r}=e;if(As(n))return uh(t,n);if(n===`stack`)return ih(e);if(n===`shape`)return!0;let i=dh(e);return i instanceof ch?i:Xm(i,r)}function uh(e,t){let n=e.getDatasetMeta(t);return n&&e.isDatasetVisible(t)?n.dataset:null}function dh(e){return(e.scale||{}).getPointPositionForValue?ph(e):fh(e)}function fh(e){let{scale:t={},fill:n}=e,r=th(n,t);if(As(r)){let e=t.isHorizontal();return{x:e?r:null,y:e?null:r}}return null}function ph(e){let{scale:t,fill:n}=e,r=t.options,i=t.getLabels().length,a=r.reverse?t.max:t.min,o=nh(n,t,a),s=[];if(r.grid.circular){let e=t.getPointPositionForValue(0,a);return new ch({x:e.x,y:e.y,radius:t.getDistanceFromCenterForValue(o)})}for(let e=0;e<i;++e)s.push(t.getPointPositionForValue(e,o));return s}function mh(e,t,n){let r=lh(t),{chart:i,index:a,line:o,scale:s,axis:c}=t,l=o.options,u=l.fill,d=l.backgroundColor,{above:f=d,below:p=d}=u||{},m=Gu(i,i.getDatasetMeta(a));r&&o.points.length&&(hl(e,n),hh(e,{line:o,target:r,above:f,below:p,area:n,scale:s,axis:c,clip:m}),gl(e))}function hh(e,t){let{line:n,target:r,above:i,below:a,area:o,scale:s,clip:c}=t,l=n._loop?`angle`:t.axis;e.save();let u=a;a!==i&&(l===`x`?(gh(e,r,o.top),vh(e,{line:n,target:r,color:i,scale:s,property:l,clip:c}),e.restore(),e.save(),gh(e,r,o.bottom)):l===`y`&&(_h(e,r,o.left),vh(e,{line:n,target:r,color:a,scale:s,property:l,clip:c}),e.restore(),e.save(),_h(e,r,o.right),u=i)),vh(e,{line:n,target:r,color:u,scale:s,property:l,clip:c}),e.restore()}function gh(e,t,n){let{segments:r,points:i}=t,a=!0,o=!1;e.beginPath();for(let s of r){let{start:r,end:c}=s,l=i[r],u=i[Jm(r,c,i)];a?(e.moveTo(l.x,l.y),a=!1):(e.lineTo(l.x,n),e.lineTo(l.x,l.y)),o=!!t.pathSegment(e,s,{move:o}),o?e.closePath():e.lineTo(u.x,n)}e.lineTo(t.first().x,n),e.closePath(),e.clip()}function _h(e,t,n){let{segments:r,points:i}=t,a=!0,o=!1;e.beginPath();for(let s of r){let{start:r,end:c}=s,l=i[r],u=i[Jm(r,c,i)];a?(e.moveTo(l.x,l.y),a=!1):(e.lineTo(n,l.y),e.lineTo(l.x,l.y)),o=!!t.pathSegment(e,s,{move:o}),o?e.closePath():e.lineTo(n,u.y)}e.lineTo(n,t.first().y),e.closePath(),e.clip()}function vh(e,t){let{line:n,target:r,property:i,color:a,scale:o,clip:s}=t,c=Gm(n,r,i);for(let{source:t,target:l,start:u,end:d}of c){let{style:{backgroundColor:c=a}={}}=t,f=r!==!0;e.save(),e.fillStyle=c,yh(e,o,s,f&&Km(i,u,d)),e.beginPath();let p=!!n.pathSegment(e,t),m;if(f){p?e.closePath():bh(e,r,d,i);let t=!!r.pathSegment(e,l,{move:p,reverse:!0});m=p&&t,m||bh(e,r,u,i)}e.closePath(),e.fill(m?`evenodd`:`nonzero`),e.restore()}}function yh(e,t,n,r){let i=t.chart.chartArea,{property:a,start:o,end:s}=r||{};if(a===`x`||a===`y`){let t,r,c,l;a===`x`?(t=o,r=i.top,c=s,l=i.bottom):(t=i.left,r=o,c=i.right,l=s),e.beginPath(),n&&(t=Math.max(t,n.left),c=Math.min(c,n.right),r=Math.max(r,n.top),l=Math.min(l,n.bottom)),e.rect(t,r,c-t,l-r),e.clip()}}function bh(e,t,n,r){let i=t.interpolate(n,r);i&&e.lineTo(i.x,i.y)}var xh={id:`filler`,afterDatasetsUpdate(e,t,n){let r=(e.data.datasets||[]).length,i=[],a,o,s,c;for(o=0;o<r;++o)a=e.getDatasetMeta(o),s=a.dataset,c=null,s&&s.options&&s instanceof mm&&(c={visible:e.isDatasetVisible(o),index:o,fill:$m(s,o,r),chart:e,axis:a.controller.options.indexAxis,scale:a.vScale,line:s}),a.$filler=c,i.push(c);for(o=0;o<r;++o)c=i[o],!(!c||c.fill===!1)&&(c.fill=Qm(i,o,n.propagate))},beforeDraw(e,t,n){let r=n.drawTime===`beforeDraw`,i=e.getSortedVisibleDatasetMetas(),a=e.chartArea;for(let t=i.length-1;t>=0;--t){let n=i[t].$filler;n&&(n.line.updateControlPoints(a,n.axis),r&&n.fill&&mh(e.ctx,n,a))}},beforeDatasetsDraw(e,t,n){if(n.drawTime!==`beforeDatasetsDraw`)return;let r=e.getSortedVisibleDatasetMetas();for(let t=r.length-1;t>=0;--t){let n=r[t].$filler;Zm(n)&&mh(e.ctx,n,e.chartArea)}},beforeDatasetDraw(e,t,n){let r=t.meta.$filler;!Zm(r)||n.drawTime!==`beforeDatasetDraw`||mh(e.ctx,r,e.chartArea)},defaults:{propagate:!0,drawTime:`beforeDatasetDraw`}},Sh=(e,t)=>{let{boxHeight:n=t,boxWidth:r=t}=e;return e.usePointStyle&&(n=Math.min(n,t),r=e.pointStyleWidth||Math.min(r,t)),{boxWidth:r,boxHeight:n,itemHeight:Math.max(t,n)}},Ch=(e,t)=>e!==null&&t!==null&&e.datasetIndex===t.datasetIndex&&e.index===t.index,wh=class extends Lf{constructor(e){super(),this._added=!1,this.legendHitBoxes=[],this._hoveredItem=null,this.doughnutMode=!1,this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this.legendItems=void 0,this.columnSizes=void 0,this.lineWidths=void 0,this.maxHeight=void 0,this.maxWidth=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.height=void 0,this.width=void 0,this._margins=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,t,n){this.maxWidth=e,this.maxHeight=t,this._margins=n,this.setDimensions(),this.buildLabels(),this.fit()}setDimensions(){this.isHorizontal()?(this.width=this.maxWidth,this.left=this._margins.left,this.right=this.width):(this.height=this.maxHeight,this.top=this._margins.top,this.bottom=this.height)}buildLabels(){let e=this.options.labels||{},t=U(e.generateLabels,[this.chart],this)||[];e.filter&&(t=t.filter(t=>e.filter(t,this.chart.data))),e.sort&&(t=t.sort((t,n)=>e.sort(t,n,this.chart.data))),this.options.reverse&&t.reverse(),this.legendItems=t}fit(){let{options:e,ctx:t}=this;if(!e.display){this.width=this.height=0;return}let n=e.labels,r=Ml(n.font),i=r.size,a=this._computeTitleHeight(),{boxWidth:o,itemHeight:s}=Sh(n,i),c,l;t.font=r.string,this.isHorizontal()?(c=this.maxWidth,l=this._fitRows(a,i,o,s)+10):(l=this.maxHeight,c=this._fitCols(a,r,o,s)+10),this.width=Math.min(c,e.maxWidth||this.maxWidth),this.height=Math.min(l,e.maxHeight||this.maxHeight)}_fitRows(e,t,n,r){let{ctx:i,maxWidth:a,options:{labels:{padding:o}}}=this,s=this.legendHitBoxes=[],c=this.lineWidths=[0],l=r+o,u=e;i.textAlign=`left`,i.textBaseline=`middle`;let d=-1,f=-l;return this.legendItems.forEach((e,p)=>{let m=n+t/2+i.measureText(e.text).width;(p===0||c[c.length-1]+m+2*o>a)&&(u+=l,c[c.length-(p>0?0:1)]=0,f+=l,d++),s[p]={left:0,top:f,row:d,width:m,height:r},c[c.length-1]+=m+o}),u}_fitCols(e,t,n,r){let{ctx:i,maxHeight:a,options:{labels:{padding:o}}}=this,s=this.legendHitBoxes=[],c=this.columnSizes=[],l=a-e,u=o,d=0,f=0,p=0,m=0;return this.legendItems.forEach((e,a)=>{let{itemWidth:h,itemHeight:g}=Th(n,t,i,e,r);a>0&&f+g+2*o>l&&(u+=d+o,c.push({width:d,height:f}),p+=d+o,m++,d=f=0),s[a]={left:p,top:f,col:m,width:h,height:g},d=Math.max(d,h),f+=g+o}),u+=d,c.push({width:d,height:f}),u}adjustHitBoxes(){if(!this.options.display)return;let e=this._computeTitleHeight(),{legendHitBoxes:t,options:{align:n,labels:{padding:r},rtl:i}}=this,a=ku(i,this.left,this.width);if(this.isHorizontal()){let i=0,o=Fc(n,this.left+r,this.right-this.lineWidths[i]);for(let s of t)i!==s.row&&(i=s.row,o=Fc(n,this.left+r,this.right-this.lineWidths[i])),s.top+=this.top+e+r,s.left=a.leftForLtr(a.x(o),s.width),o+=s.width+r}else{let i=0,o=Fc(n,this.top+e+r,this.bottom-this.columnSizes[i].height);for(let s of t)s.col!==i&&(i=s.col,o=Fc(n,this.top+e+r,this.bottom-this.columnSizes[i].height)),s.top=o,s.left+=this.left+r,s.left=a.leftForLtr(a.x(s.left),s.width),o+=s.height+r}}isHorizontal(){return this.options.position===`top`||this.options.position===`bottom`}draw(){if(this.options.display){let e=this.ctx;hl(e,this),this._draw(),gl(e)}}_draw(){let{options:e,columnSizes:t,lineWidths:n,ctx:r}=this,{align:i,labels:a}=e,o=K.color,s=ku(e.rtl,this.left,this.width),c=Ml(a.font),{padding:l}=a,u=c.size,d=u/2,f;this.drawTitle(),r.textAlign=s.textAlign(`left`),r.textBaseline=`middle`,r.lineWidth=.5,r.font=c.string;let{boxWidth:p,boxHeight:m,itemHeight:h}=Sh(a,u),g=function(e,t,n){if(isNaN(p)||p<=0||isNaN(m)||m<0)return;r.save();let i=H(n.lineWidth,1);if(r.fillStyle=H(n.fillStyle,o),r.lineCap=H(n.lineCap,`butt`),r.lineDashOffset=H(n.lineDashOffset,0),r.lineJoin=H(n.lineJoin,`miter`),r.lineWidth=i,r.strokeStyle=H(n.strokeStyle,o),r.setLineDash(H(n.lineDash,[])),a.usePointStyle){let o={radius:m*Math.SQRT2/2,pointStyle:n.pointStyle,rotation:n.rotation,borderWidth:i},c=s.xPlus(e,p/2),l=t+d;pl(r,o,c,l,a.pointStyleWidth&&p)}else{let a=t+Math.max((u-m)/2,0),o=s.leftForLtr(e,p),c=Al(n.borderRadius);r.beginPath(),Object.values(c).some(e=>e!==0)?Cl(r,{x:o,y:a,w:p,h:m,radius:c}):r.rect(o,a,p,m),r.fill(),i!==0&&r.stroke()}r.restore()},_=function(e,t,n){Sl(r,n.text,e,t+h/2,c,{strikethrough:n.hidden,textAlign:s.textAlign(n.textAlign)})},v=this.isHorizontal(),y=this._computeTitleHeight();f=v?{x:Fc(i,this.left+l,this.right-n[0]),y:this.top+l+y,line:0}:{x:this.left+l,y:Fc(i,this.top+y+l,this.bottom-t[0].height),line:0},Au(this.ctx,e.textDirection);let b=h+l;this.legendItems.forEach((o,u)=>{r.strokeStyle=o.fontColor,r.fillStyle=o.fontColor;let m=r.measureText(o.text).width,h=s.textAlign(o.textAlign||=a.textAlign),x=p+d+m,S=f.x,C=f.y;s.setWidth(this.width),v?u>0&&S+x+l>this.right&&(C=f.y+=b,f.line++,S=f.x=Fc(i,this.left+l,this.right-n[f.line])):u>0&&C+b>this.bottom&&(S=f.x=S+t[f.line].width+l,f.line++,C=f.y=Fc(i,this.top+y+l,this.bottom-t[f.line].height));let w=s.x(S);if(g(w,C,o),S=Ic(h,S+p+d,v?S+x:this.right,e.rtl),_(s.x(S),C,o),v)f.x+=x+l;else if(typeof o.text!=`string`){let e=c.lineHeight;f.y+=Oh(o,e)+l}else f.y+=b}),ju(this.ctx,e.textDirection)}drawTitle(){let e=this.options,t=e.title,n=Ml(t.font),r=jl(t.padding);if(!t.display)return;let i=ku(e.rtl,this.left,this.width),a=this.ctx,o=t.position,s=n.size/2,c=r.top+s,l,u=this.left,d=this.width;if(this.isHorizontal())d=Math.max(...this.lineWidths),l=this.top+c,u=Fc(e.align,u,this.right-d);else{let t=this.columnSizes.reduce((e,t)=>Math.max(e,t.height),0);l=c+Fc(e.align,this.top,this.bottom-t-e.labels.padding-this._computeTitleHeight())}let f=Fc(o,u,u+d);a.textAlign=i.textAlign(Pc(o)),a.textBaseline=`middle`,a.strokeStyle=t.color,a.fillStyle=t.color,a.font=n.string,Sl(a,t.text,f,l,n)}_computeTitleHeight(){let e=this.options.title,t=Ml(e.font),n=jl(e.padding);return e.display?t.lineHeight+n.height:0}_getLegendItemAt(e,t){let n,r,i;if(Sc(e,this.left,this.right)&&Sc(t,this.top,this.bottom)){for(i=this.legendHitBoxes,n=0;n<i.length;++n)if(r=i[n],Sc(e,r.left,r.left+r.width)&&Sc(t,r.top,r.top+r.height))return this.legendItems[n]}return null}handleEvent(e){let t=this.options;if(!kh(e.type,t))return;let n=this._getLegendItemAt(e.x,e.y);if(e.type===`mousemove`||e.type===`mouseout`){let r=this._hoveredItem,i=Ch(r,n);r&&!i&&U(t.onLeave,[e,r,this],this),this._hoveredItem=n,n&&!i&&U(t.onHover,[e,n,this],this)}else n&&U(t.onClick,[e,n,this],this)}};function Th(e,t,n,r,i){return{itemWidth:Eh(r,e,t,n),itemHeight:Dh(i,r,t.lineHeight)}}function Eh(e,t,n,r){let i=e.text;return i&&typeof i!=`string`&&(i=i.reduce((e,t)=>e.length>t.length?e:t)),t+n.size/2+r.measureText(i).width}function Dh(e,t,n){let r=e;return typeof t.text!=`string`&&(r=Oh(t,n)),r}function Oh(e,t){return t*(e.text?e.text.length:0)}function kh(e,t){return!!((e===`mousemove`||e===`mouseout`)&&(t.onHover||t.onLeave)||t.onClick&&(e===`click`||e===`mouseup`))}var Ah={id:`legend`,_element:wh,start(e,t,n){let r=e.legend=new wh({ctx:e.ctx,options:n,chart:e});pf.configure(e,r,n),pf.addBox(e,r)},stop(e){pf.removeBox(e,e.legend),delete e.legend},beforeUpdate(e,t,n){let r=e.legend;pf.configure(e,r,n),r.options=n},afterUpdate(e){let t=e.legend;t.buildLabels(),t.adjustHitBoxes()},afterEvent(e,t){t.replay||e.legend.handleEvent(t.event)},defaults:{display:!0,position:`top`,align:`center`,fullSize:!0,reverse:!1,weight:1e3,onClick(e,t,n){let r=t.datasetIndex,i=n.chart;i.isDatasetVisible(r)?(i.hide(r),t.hidden=!0):(i.show(r),t.hidden=!1)},onHover:null,onLeave:null,labels:{color:e=>e.chart.options.color,boxWidth:40,padding:10,generateLabels(e){let t=e.data.datasets,{labels:{usePointStyle:n,pointStyle:r,textAlign:i,color:a,useBorderRadius:o,borderRadius:s}}=e.legend.options;return e._getSortedDatasetMetas().map(e=>{let c=e.controller.getStyle(n?0:void 0),l=jl(c.borderWidth);return{text:t[e.index].label,fillStyle:c.backgroundColor,fontColor:a,hidden:!e.visible,lineCap:c.borderCapStyle,lineDash:c.borderDash,lineDashOffset:c.borderDashOffset,lineJoin:c.borderJoinStyle,lineWidth:(l.width+l.height)/4,strokeStyle:c.borderColor,pointStyle:r||c.pointStyle,rotation:c.rotation,textAlign:i||c.textAlign,borderRadius:o&&(s||c.borderRadius),datasetIndex:e.index}},this)}},title:{color:e=>e.chart.options.color,display:!1,position:`center`,text:``}},descriptors:{_scriptable:e=>!e.startsWith(`on`),labels:{_scriptable:e=>![`generateLabels`,`filter`,`sort`].includes(e)}}},jh=class extends Lf{constructor(e){super(),this.chart=e.chart,this.options=e.options,this.ctx=e.ctx,this._padding=void 0,this.top=void 0,this.bottom=void 0,this.left=void 0,this.right=void 0,this.width=void 0,this.height=void 0,this.position=void 0,this.weight=void 0,this.fullSize=void 0}update(e,t){let n=this.options;if(this.left=0,this.top=0,!n.display){this.width=this.height=this.right=this.bottom=0;return}this.width=this.right=e,this.height=this.bottom=t;let r=ks(n.text)?n.text.length:1;this._padding=jl(n.padding);let i=r*Ml(n.font).lineHeight+this._padding.height;this.isHorizontal()?this.height=i:this.width=i}isHorizontal(){let e=this.options.position;return e===`top`||e===`bottom`}_drawArgs(e){let{top:t,left:n,bottom:r,right:i,options:a}=this,o=a.align,s=0,c,l,u;return this.isHorizontal()?(l=Fc(o,n,i),u=t+e,c=i-n):(a.position===`left`?(l=n+e,u=Fc(o,r,t),s=G*-.5):(l=i-e,u=Fc(o,t,r),s=G*.5),c=r-t),{titleX:l,titleY:u,maxWidth:c,rotation:s}}draw(){let e=this.ctx,t=this.options;if(!t.display)return;let n=Ml(t.font),r=n.lineHeight/2+this._padding.top,{titleX:i,titleY:a,maxWidth:o,rotation:s}=this._drawArgs(r);Sl(e,t.text,0,0,n,{color:t.color,maxWidth:o,rotation:s,textAlign:Pc(t.align),textBaseline:`middle`,translation:[i,a]})}};function Mh(e,t){let n=new jh({ctx:e.ctx,options:t,chart:e});pf.configure(e,n,t),pf.addBox(e,n),e.titleBlock=n}var Nh={id:`title`,_element:jh,start(e,t,n){Mh(e,n)},stop(e){let t=e.titleBlock;pf.removeBox(e,t),delete e.titleBlock},beforeUpdate(e,t,n){let r=e.titleBlock;pf.configure(e,r,n),r.options=n},defaults:{align:`center`,display:!1,font:{weight:`bold`},fullSize:!0,padding:10,position:`top`,text:``,weight:2e3},defaultRoutes:{color:`color`},descriptors:{_scriptable:!0,_indexable:!1}},Ph=new WeakMap,Fh={id:`subtitle`,start(e,t,n){let r=new jh({ctx:e.ctx,options:n,chart:e});pf.configure(e,r,n),pf.addBox(e,r),Ph.set(e,r)},stop(e){pf.removeBox(e,Ph.get(e)),Ph.delete(e)},beforeUpdate(e,t,n){let r=Ph.get(e);pf.configure(e,r,n),r.options=n},defaults:{align:`center`,display:!1,font:{weight:`normal`},fullSize:!0,padding:0,position:`top`,text:``,weight:1500},defaultRoutes:{color:`color`},descriptors:{_scriptable:!0,_indexable:!1}},Ih={average(e){if(!e.length)return!1;let t,n,r=new Set,i=0,a=0;for(t=0,n=e.length;t<n;++t){let n=e[t].element;if(n&&n.hasValue()){let e=n.tooltipPosition();r.add(e.x),i+=e.y,++a}}return a===0||r.size===0?!1:{x:[...r].reduce((e,t)=>e+t)/r.size,y:i/a}},nearest(e,t){if(!e.length)return!1;let n=t.x,r=t.y,i=1/0,a,o,s;for(a=0,o=e.length;a<o;++a){let n=e[a].element;if(n&&n.hasValue()){let e=gc(t,n.getCenterPoint());e<i&&(i=e,s=n)}}if(s){let e=s.tooltipPosition();n=e.x,r=e.y}return{x:n,y:r}}};function Lh(e,t){return t&&(ks(t)?Array.prototype.push.apply(e,t):e.push(t)),e}function Rh(e){return(typeof e==`string`||e instanceof String)&&e.indexOf(`
`)>-1?e.split(`
`):e}function zh(e,t){let{element:n,datasetIndex:r,index:i}=t,a=e.getDatasetMeta(r).controller,{label:o,value:s}=a.getLabelAndValue(i);return{chart:e,label:o,parsed:a.getParsed(i),raw:e.data.datasets[r].data[i],formattedValue:s,dataset:a.getDataset(),dataIndex:i,datasetIndex:r,element:n}}function Bh(e,t){let n=e.chart.ctx,{body:r,footer:i,title:a}=e,{boxWidth:o,boxHeight:s}=t,c=Ml(t.bodyFont),l=Ml(t.titleFont),u=Ml(t.footerFont),d=a.length,f=i.length,p=r.length,m=jl(t.padding),h=m.height,g=0,_=r.reduce((e,t)=>e+t.before.length+t.lines.length+t.after.length,0);if(_+=e.beforeBody.length+e.afterBody.length,d&&(h+=d*l.lineHeight+(d-1)*t.titleSpacing+t.titleMarginBottom),_){let e=t.displayColors?Math.max(s,c.lineHeight):c.lineHeight;h+=p*e+(_-p)*c.lineHeight+(_-1)*t.bodySpacing}f&&(h+=t.footerMarginTop+f*u.lineHeight+(f-1)*t.footerSpacing);let v=0,y=function(e){g=Math.max(g,n.measureText(e).width+v)};return n.save(),n.font=l.string,W(e.title,y),n.font=c.string,W(e.beforeBody.concat(e.afterBody),y),v=t.displayColors?o+2+t.boxPadding:0,W(r,e=>{W(e.before,y),W(e.lines,y),W(e.after,y)}),v=0,n.font=u.string,W(e.footer,y),n.restore(),g+=m.width,{width:g,height:h}}function Vh(e,t){let{y:n,height:r}=t;return n<r/2?`top`:n>e.height-r/2?`bottom`:`center`}function Hh(e,t,n,r){let{x:i,width:a}=r,o=n.caretSize+n.caretPadding;if(e===`left`&&i+a+o>t.width||e===`right`&&i-a-o<0)return!0}function Uh(e,t,n,r){let{x:i,width:a}=n,{width:o,chartArea:{left:s,right:c}}=e,l=`center`;return r===`center`?l=i<=(s+c)/2?`left`:`right`:i<=a/2?l=`left`:i>=o-a/2&&(l=`right`),Hh(l,e,t,n)&&(l=`center`),l}function Wh(e,t,n){let r=n.yAlign||t.yAlign||Vh(e,n);return{xAlign:n.xAlign||t.xAlign||Uh(e,t,n,r),yAlign:r}}function Gh(e,t){let{x:n,width:r}=e;return t===`right`?n-=r:t===`center`&&(n-=r/2),n}function Kh(e,t,n){let{y:r,height:i}=e;return t===`top`?r+=n:t===`bottom`?r-=i+n:r-=i/2,r}function qh(e,t,n,r){let{caretSize:i,caretPadding:a,cornerRadius:o}=e,{xAlign:s,yAlign:c}=n,l=i+a,{topLeft:u,topRight:d,bottomLeft:f,bottomRight:p}=Al(o),m=Gh(t,s),h=Kh(t,c,l);return c===`center`?s===`left`?m+=l:s===`right`&&(m-=l):s===`left`?m-=Math.max(u,f)+i:s===`right`&&(m+=Math.max(d,p)+i),{x:bc(m,0,r.width-t.width),y:bc(h,0,r.height-t.height)}}function Jh(e,t,n){let r=jl(n.padding);return t===`center`?e.x+e.width/2:t===`right`?e.x+e.width-r.right:e.x+r.left}function Yh(e){return Lh([],Rh(e))}function Xh(e,t,n){return Fl(e,{tooltip:t,tooltipItems:n,type:`tooltip`})}function Zh(e,t){let n=t&&t.dataset&&t.dataset.tooltip&&t.dataset.tooltip.callbacks;return n?e.override(n):e}var Qh={beforeTitle:Ds,title(e){if(e.length>0){let t=e[0],n=t.chart.data.labels,r=n?n.length:0;if(this&&this.options&&this.options.mode===`dataset`)return t.dataset.label||``;if(t.label)return t.label;if(r>0&&t.dataIndex<r)return n[t.dataIndex]}return``},afterTitle:Ds,beforeBody:Ds,beforeLabel:Ds,label(e){if(this&&this.options&&this.options.mode===`dataset`)return e.label+`: `+e.formattedValue||e.formattedValue;let t=e.dataset.label||``;t&&(t+=`: `);let n=e.formattedValue;return B(n)||(t+=n),t},labelColor(e){let t=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{borderColor:t.borderColor,backgroundColor:t.backgroundColor,borderWidth:t.borderWidth,borderDash:t.borderDash,borderDashOffset:t.borderDashOffset,borderRadius:0}},labelTextColor(){return this.options.bodyColor},labelPointStyle(e){let t=e.chart.getDatasetMeta(e.datasetIndex).controller.getStyle(e.dataIndex);return{pointStyle:t.pointStyle,rotation:t.rotation}},afterLabel:Ds,afterBody:Ds,beforeFooter:Ds,footer:Ds,afterFooter:Ds};function $h(e,t,n,r){let i=e[t].call(n,r);return i===void 0?Qh[t].call(n,r):i}var eg=class extends Lf{static positioners=Ih;constructor(e){super(),this.opacity=0,this._active=[],this._eventPosition=void 0,this._size=void 0,this._cachedAnimations=void 0,this._tooltipItems=[],this.$animations=void 0,this.$context=void 0,this.chart=e.chart,this.options=e.options,this.dataPoints=void 0,this.title=void 0,this.beforeBody=void 0,this.body=void 0,this.afterBody=void 0,this.footer=void 0,this.xAlign=void 0,this.yAlign=void 0,this.x=void 0,this.y=void 0,this.height=void 0,this.width=void 0,this.caretX=void 0,this.caretY=void 0,this.labelColors=void 0,this.labelPointStyles=void 0,this.labelTextColors=void 0}initialize(e){this.options=e,this._cachedAnimations=void 0,this.$context=void 0}_resolveAnimations(){let e=this._cachedAnimations;if(e)return e;let t=this.chart,n=this.options.setContext(this.getContext()),r=n.enabled&&t.options.animation&&n.animations,i=new Xu(this.chart,r);return r._cacheable&&(this._cachedAnimations=Object.freeze(i)),i}getContext(){return this.$context||=Xh(this.chart.getContext(),this,this._tooltipItems)}getTitle(e,t){let{callbacks:n}=t,r=$h(n,`beforeTitle`,this,e),i=$h(n,`title`,this,e),a=$h(n,`afterTitle`,this,e),o=[];return o=Lh(o,Rh(r)),o=Lh(o,Rh(i)),o=Lh(o,Rh(a)),o}getBeforeBody(e,t){return Yh($h(t.callbacks,`beforeBody`,this,e))}getBody(e,t){let{callbacks:n}=t,r=[];return W(e,e=>{let t={before:[],lines:[],after:[]},i=Zh(n,e);Lh(t.before,Rh($h(i,`beforeLabel`,this,e))),Lh(t.lines,$h(i,`label`,this,e)),Lh(t.after,Rh($h(i,`afterLabel`,this,e))),r.push(t)}),r}getAfterBody(e,t){return Yh($h(t.callbacks,`afterBody`,this,e))}getFooter(e,t){let{callbacks:n}=t,r=$h(n,`beforeFooter`,this,e),i=$h(n,`footer`,this,e),a=$h(n,`afterFooter`,this,e),o=[];return o=Lh(o,Rh(r)),o=Lh(o,Rh(i)),o=Lh(o,Rh(a)),o}_createItems(e){let t=this._active,n=this.chart.data,r=[],i=[],a=[],o=[],s,c;for(s=0,c=t.length;s<c;++s)o.push(zh(this.chart,t[s]));return e.filter&&(o=o.filter((t,r,i)=>e.filter(t,r,i,n))),e.itemSort&&(o=o.sort((t,r)=>e.itemSort(t,r,n))),W(o,t=>{let n=Zh(e.callbacks,t);r.push($h(n,`labelColor`,this,t)),i.push($h(n,`labelPointStyle`,this,t)),a.push($h(n,`labelTextColor`,this,t))}),this.labelColors=r,this.labelPointStyles=i,this.labelTextColors=a,this.dataPoints=o,o}update(e,t){let n=this.options.setContext(this.getContext()),r=this._active,i,a=[];if(!r.length)this.opacity!==0&&(i={opacity:0});else{let e=Ih[n.position].call(this,r,this._eventPosition);a=this._createItems(n),this.title=this.getTitle(a,n),this.beforeBody=this.getBeforeBody(a,n),this.body=this.getBody(a,n),this.afterBody=this.getAfterBody(a,n),this.footer=this.getFooter(a,n);let t=this._size=Bh(this,n),o=Object.assign({},e,t),s=Wh(this.chart,n,o),c=qh(n,o,s,this.chart);this.xAlign=s.xAlign,this.yAlign=s.yAlign,i={opacity:1,x:c.x,y:c.y,width:t.width,height:t.height,caretX:e.x,caretY:e.y}}this._tooltipItems=a,this.$context=void 0,i&&this._resolveAnimations().update(this,i),e&&n.external&&n.external.call(this,{chart:this.chart,tooltip:this,replay:t})}drawCaret(e,t,n,r){let i=this.getCaretPosition(e,n,r);t.lineTo(i.x1,i.y1),t.lineTo(i.x2,i.y2),t.lineTo(i.x3,i.y3)}getCaretPosition(e,t,n){let{xAlign:r,yAlign:i}=this,{caretSize:a,cornerRadius:o}=n,{topLeft:s,topRight:c,bottomLeft:l,bottomRight:u}=Al(o),{x:d,y:f}=e,{width:p,height:m}=t,h,g,_,v,y,b;return i===`center`?(y=f+m/2,r===`left`?(h=d,g=h-a,v=y+a,b=y-a):(h=d+p,g=h+a,v=y-a,b=y+a),_=h):(g=r===`left`?d+Math.max(s,l)+a:r===`right`?d+p-Math.max(c,u)-a:this.caretX,i===`top`?(v=f,y=v-a,h=g-a,_=g+a):(v=f+m,y=v+a,h=g+a,_=g-a),b=v),{x1:h,x2:g,x3:_,y1:v,y2:y,y3:b}}drawTitle(e,t,n){let r=this.title,i=r.length,a,o,s;if(i){let c=ku(n.rtl,this.x,this.width);for(e.x=Jh(this,n.titleAlign,n),t.textAlign=c.textAlign(n.titleAlign),t.textBaseline=`middle`,a=Ml(n.titleFont),o=n.titleSpacing,t.fillStyle=n.titleColor,t.font=a.string,s=0;s<i;++s)t.fillText(r[s],c.x(e.x),e.y+a.lineHeight/2),e.y+=a.lineHeight+o,s+1===i&&(e.y+=n.titleMarginBottom-o)}}_drawColorBox(e,t,n,r,i){let a=this.labelColors[n],o=this.labelPointStyles[n],{boxHeight:s,boxWidth:c}=i,l=Ml(i.bodyFont),u=Jh(this,`left`,i),d=r.x(u),f=s<l.lineHeight?(l.lineHeight-s)/2:0,p=t.y+f;if(i.usePointStyle){let t={radius:Math.min(c,s)/2,pointStyle:o.pointStyle,rotation:o.rotation,borderWidth:1},n=r.leftForLtr(d,c)+c/2,l=p+s/2;e.strokeStyle=i.multiKeyBackground,e.fillStyle=i.multiKeyBackground,fl(e,t,n,l),e.strokeStyle=a.borderColor,e.fillStyle=a.backgroundColor,fl(e,t,n,l)}else{e.lineWidth=V(a.borderWidth)?Math.max(...Object.values(a.borderWidth)):a.borderWidth||1,e.strokeStyle=a.borderColor,e.setLineDash(a.borderDash||[]),e.lineDashOffset=a.borderDashOffset||0;let t=r.leftForLtr(d,c),n=r.leftForLtr(r.xPlus(d,1),c-2),o=Al(a.borderRadius);Object.values(o).some(e=>e!==0)?(e.beginPath(),e.fillStyle=i.multiKeyBackground,Cl(e,{x:t,y:p,w:c,h:s,radius:o}),e.fill(),e.stroke(),e.fillStyle=a.backgroundColor,e.beginPath(),Cl(e,{x:n,y:p+1,w:c-2,h:s-2,radius:o}),e.fill()):(e.fillStyle=i.multiKeyBackground,e.fillRect(t,p,c,s),e.strokeRect(t,p,c,s),e.fillStyle=a.backgroundColor,e.fillRect(n,p+1,c-2,s-2))}e.fillStyle=this.labelTextColors[n]}drawBody(e,t,n){let{body:r}=this,{bodySpacing:i,bodyAlign:a,displayColors:o,boxHeight:s,boxWidth:c,boxPadding:l}=n,u=Ml(n.bodyFont),d=u.lineHeight,f=0,p=ku(n.rtl,this.x,this.width),m=function(n){t.fillText(n,p.x(e.x+f),e.y+d/2),e.y+=d+i},h=p.textAlign(a),g,_,v,y,b,x,S;for(t.textAlign=a,t.textBaseline=`middle`,t.font=u.string,e.x=Jh(this,h,n),t.fillStyle=n.bodyColor,W(this.beforeBody,m),f=o&&h!==`right`?a===`center`?c/2+l:c+2+l:0,y=0,x=r.length;y<x;++y){for(g=r[y],_=this.labelTextColors[y],t.fillStyle=_,W(g.before,m),v=g.lines,o&&v.length&&(this._drawColorBox(t,e,y,p,n),d=Math.max(u.lineHeight,s)),b=0,S=v.length;b<S;++b)m(v[b]),d=u.lineHeight;W(g.after,m)}f=0,d=u.lineHeight,W(this.afterBody,m),e.y-=i}drawFooter(e,t,n){let r=this.footer,i=r.length,a,o;if(i){let s=ku(n.rtl,this.x,this.width);for(e.x=Jh(this,n.footerAlign,n),e.y+=n.footerMarginTop,t.textAlign=s.textAlign(n.footerAlign),t.textBaseline=`middle`,a=Ml(n.footerFont),t.fillStyle=n.footerColor,t.font=a.string,o=0;o<i;++o)t.fillText(r[o],s.x(e.x),e.y+a.lineHeight/2),e.y+=a.lineHeight+n.footerSpacing}}drawBackground(e,t,n,r){let{xAlign:i,yAlign:a}=this,{x:o,y:s}=e,{width:c,height:l}=n,{topLeft:u,topRight:d,bottomLeft:f,bottomRight:p}=Al(r.cornerRadius);t.fillStyle=r.backgroundColor,t.strokeStyle=r.borderColor,t.lineWidth=r.borderWidth,t.beginPath(),t.moveTo(o+u,s),a===`top`&&this.drawCaret(e,t,n,r),t.lineTo(o+c-d,s),t.quadraticCurveTo(o+c,s,o+c,s+d),a===`center`&&i===`right`&&this.drawCaret(e,t,n,r),t.lineTo(o+c,s+l-p),t.quadraticCurveTo(o+c,s+l,o+c-p,s+l),a===`bottom`&&this.drawCaret(e,t,n,r),t.lineTo(o+f,s+l),t.quadraticCurveTo(o,s+l,o,s+l-f),a===`center`&&i===`left`&&this.drawCaret(e,t,n,r),t.lineTo(o,s+u),t.quadraticCurveTo(o,s,o+u,s),t.closePath(),t.fill(),r.borderWidth>0&&t.stroke()}_updateAnimationTarget(e){let t=this.chart,n=this.$animations,r=n&&n.x,i=n&&n.y;if(r||i){let n=Ih[e.position].call(this,this._active,this._eventPosition);if(!n)return;let a=this._size=Bh(this,e),o=Object.assign({},n,this._size),s=Wh(t,e,o),c=qh(e,o,s,t);(r._to!==c.x||i._to!==c.y)&&(this.xAlign=s.xAlign,this.yAlign=s.yAlign,this.width=a.width,this.height=a.height,this.caretX=n.x,this.caretY=n.y,this._resolveAnimations().update(this,c))}}_willRender(){return!!this.opacity}draw(e){let t=this.options.setContext(this.getContext()),n=this.opacity;if(!n)return;this._updateAnimationTarget(t);let r={width:this.width,height:this.height},i={x:this.x,y:this.y};n=Math.abs(n)<.001?0:n;let a=jl(t.padding),o=this.title.length||this.beforeBody.length||this.body.length||this.afterBody.length||this.footer.length;t.enabled&&o&&(e.save(),e.globalAlpha=n,this.drawBackground(i,e,r,t),Au(e,t.textDirection),i.y+=a.top,this.drawTitle(i,e,t),this.drawBody(i,e,t),this.drawFooter(i,e,t),ju(e,t.textDirection),e.restore())}getActiveElements(){return this._active||[]}setActiveElements(e,t){let n=this._active,r=e.map(({datasetIndex:e,index:t})=>{let n=this.chart.getDatasetMeta(e);if(!n)throw Error(`Cannot find a dataset at index `+e);return{datasetIndex:e,element:n.data[t],index:t}}),i=!Ps(n,r),a=this._positionChanged(r,t);(i||a)&&(this._active=r,this._eventPosition=t,this._ignoreReplayEvents=!0,this.update(!0))}handleEvent(e,t,n=!0){if(t&&this._ignoreReplayEvents)return!1;this._ignoreReplayEvents=!1;let r=this.options,i=this._active||[],a=this._getActiveElements(e,i,t,n),o=this._positionChanged(a,e),s=t||!Ps(a,i)||o;return s&&(this._active=a,(r.enabled||r.external)&&(this._eventPosition={x:e.x,y:e.y},this.update(!0,t))),s}_getActiveElements(e,t,n,r){let i=this.options;if(e.type===`mouseout`)return[];if(!r)return t.filter(e=>this.chart.data.datasets[e.datasetIndex]&&this.chart.getDatasetMeta(e.datasetIndex).controller.getParsed(e.index)!==void 0);let a=this.chart.getElementsAtEventForMode(e,i.mode,i,n);return i.reverse&&a.reverse(),a}_positionChanged(e,t){let{caretX:n,caretY:r,options:i}=this,a=Ih[i.position].call(this,e,t);return a!==!1&&(n!==a.x||r!==a.y)}},tg=Object.freeze({__proto__:null,Colors:Rm,Decimation:Wm,Filler:xh,Legend:Ah,SubTitle:Fh,Title:Nh,Tooltip:{id:`tooltip`,_element:eg,positioners:Ih,afterInit(e,t,n){n&&(e.tooltip=new eg({chart:e,options:n}))},beforeUpdate(e,t,n){e.tooltip&&e.tooltip.initialize(n)},reset(e,t,n){e.tooltip&&e.tooltip.initialize(n)},afterDraw(e){let t=e.tooltip;if(t&&t._willRender()){let n={tooltip:t};if(e.notifyPlugins(`beforeTooltipDraw`,{...n,cancelable:!0})===!1)return;t.draw(e.ctx),e.notifyPlugins(`afterTooltipDraw`,n)}},afterEvent(e,t){if(e.tooltip){let n=t.replay;e.tooltip.handleEvent(t.event,n,t.inChartArea)&&(t.changed=!0)}},defaults:{enabled:!0,external:null,position:`average`,backgroundColor:`rgba(0,0,0,0.8)`,titleColor:`#fff`,titleFont:{weight:`bold`},titleSpacing:2,titleMarginBottom:6,titleAlign:`left`,bodyColor:`#fff`,bodySpacing:2,bodyFont:{},bodyAlign:`left`,footerColor:`#fff`,footerSpacing:2,footerMarginTop:6,footerFont:{weight:`bold`},footerAlign:`left`,padding:6,caretPadding:2,caretSize:5,cornerRadius:6,boxHeight:(e,t)=>t.bodyFont.size,boxWidth:(e,t)=>t.bodyFont.size,multiKeyBackground:`#fff`,displayColors:!0,boxPadding:0,borderColor:`rgba(0,0,0,0)`,borderWidth:0,animation:{duration:400,easing:`easeOutQuart`},animations:{numbers:{type:`number`,properties:[`x`,`y`,`width`,`height`,`caretX`,`caretY`]},opacity:{easing:`linear`,duration:200}},callbacks:Qh},defaultRoutes:{bodyFont:`font`,footerFont:`font`,titleFont:`font`},descriptors:{_scriptable:e=>e!==`filter`&&e!==`itemSort`&&e!==`external`,_indexable:!1,callbacks:{_scriptable:!1,_indexable:!1},animation:{_fallback:!1},animations:{_fallback:`animation`}},additionalOptionScopes:[`interaction`]}}),ng=(e,t,n,r)=>(typeof t==`string`?(n=e.push(t)-1,r.unshift({index:n,label:t})):isNaN(t)&&(n=null),n);function rg(e,t,n,r){let i=e.indexOf(t);return i===-1?ng(e,t,n,r):i===e.lastIndexOf(t)?i:n}var ig=(e,t)=>e===null?null:bc(Math.round(e),0,t);function ag(e){let t=this.getLabels();return e>=0&&e<t.length?t[e]:e}var og=class extends rp{static id=`category`;static defaults={ticks:{callback:ag}};constructor(e){super(e),this._startValue=void 0,this._valueRange=0,this._addedLabels=[]}init(e){let t=this._addedLabels;if(t.length){let e=this.getLabels();for(let{index:n,label:r}of t)e[n]===r&&e.splice(n,1);this._addedLabels=[]}super.init(e)}parse(e,t){if(B(e))return null;let n=this.getLabels();return t=isFinite(t)&&n[t]===e?t:rg(n,e,H(t,e),this._addedLabels),ig(t,n.length-1)}determineDataLimits(){let{minDefined:e,maxDefined:t}=this.getUserBounds(),{min:n,max:r}=this.getMinMax(!0);this.options.bounds===`ticks`&&(e||(n=0),t||(r=this.getLabels().length-1)),this.min=n,this.max=r}buildTicks(){let e=this.min,t=this.max,n=this.options.offset,r=[],i=this.getLabels();i=e===0&&t===i.length-1?i:i.slice(e,t+1),this._valueRange=Math.max(i.length-+!n,1),this._startValue=this.min-(n?.5:0);for(let n=e;n<=t;n++)r.push({value:n});return r}getLabelForValue(e){return ag.call(this,e)}configure(){super.configure(),this.isHorizontal()||(this._reversePixels=!this._reversePixels)}getPixelForValue(e){return typeof e!=`number`&&(e=this.parse(e)),e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getPixelForTick(e){let t=this.ticks;return e<0||e>t.length-1?null:this.getPixelForValue(t[e].value)}getValueForPixel(e){return Math.round(this._startValue+this.getDecimalForPixel(e)*this._valueRange)}getBasePixel(){return this.bottom}};function sg(e,t){let n=[],{bounds:r,step:i,min:a,max:o,precision:s,count:c,maxTicks:l,maxDigits:u,includeBounds:d}=e,f=i||1,p=l-1,{min:m,max:h}=t,g=!B(a),_=!B(o),v=!B(c),y=(h-m)/(u+1),b=oc((h-m)/p/f)*f,x,S,C,w;if(b<1e-14&&!g&&!_)return[{value:m},{value:h}];w=Math.ceil(h/b)-Math.floor(m/b),w>p&&(b=oc(w*b/p/f)*f),B(s)||(x=10**s,b=Math.ceil(b*x)/x),r===`ticks`?(S=Math.floor(m/b)*b,C=Math.ceil(h/b)*b):(S=m,C=h),g&&_&&i&&uc((o-a)/i,b/1e3)?(w=Math.round(Math.min((o-a)/b,l)),b=(o-a)/w,S=a,C=o):v?(S=g?a:S,C=_?o:C,w=c-1,b=(C-S)/w):(w=(C-S)/b,w=ac(w,Math.round(w),b/1e3)?Math.round(w):Math.ceil(w));let T=Math.max(mc(b),mc(S));x=10**(B(s)?T:s),S=Math.round(S*x)/x,C=Math.round(C*x)/x;let E=0;for(g&&(d&&S!==a?(n.push({value:a}),S<a&&E++,ac(Math.round((S+E*b)*x)/x,a,cg(a,y,e))&&E++):S<a&&E++);E<w;++E){let e=Math.round((S+E*b)*x)/x;if(_&&e>o)break;n.push({value:e})}return _&&d&&C!==o?n.length&&ac(n[n.length-1].value,o,cg(o,y,e))?n[n.length-1].value=o:n.push({value:o}):(!_||C===o)&&n.push({value:C}),n}function cg(e,t,{horizontal:n,minRotation:r}){let i=fc(r),a=(n?Math.sin(i):Math.cos(i))||.001,o=.75*t*(``+e).length;return Math.min(t/a,o)}var lg=class extends rp{constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._endValue=void 0,this._valueRange=0}parse(e,t){return B(e)||(typeof e==`number`||e instanceof Number)&&!isFinite(+e)?null:+e}handleTickRangeOptions(){let{beginAtZero:e}=this.options,{minDefined:t,maxDefined:n}=this.getUserBounds(),{min:r,max:i}=this,a=e=>r=t?r:e,o=e=>i=n?i:e;if(e){let e=ic(r),t=ic(i);e<0&&t<0?o(0):e>0&&t>0&&a(0)}if(r===i){let t=i===0?1:Math.abs(i*.05);o(i+t),e||a(r-t)}this.min=r,this.max=i}getTickLimit(){let{maxTicksLimit:e,stepSize:t}=this.options.ticks,n;return t?(n=Math.ceil(this.max/t)-Math.floor(this.min/t)+1,n>1e3&&(console.warn(`scales.${this.id}.ticks.stepSize: ${t} would result generating up to ${n} ticks. Limiting to 1000.`),n=1e3)):(n=this.computeTickLimit(),e||=11),e&&(n=Math.min(e,n)),n}computeTickLimit(){return 1/0}buildTicks(){let e=this.options,t=e.ticks,n=this.getTickLimit();n=Math.max(2,n);let r=sg({maxTicks:n,bounds:e.bounds,min:e.min,max:e.max,precision:t.precision,step:t.stepSize,count:t.count,maxDigits:this._maxDigits(),horizontal:this.isHorizontal(),minRotation:t.minRotation||0,includeBounds:t.includeBounds!==!1},this._range||this);return e.bounds===`ticks`&&dc(r,this,`value`),e.reverse?(r.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),r}configure(){let e=this.ticks,t=this.min,n=this.max;if(super.configure(),this.options.offset&&e.length){let r=(n-t)/Math.max(e.length-1,1)/2;t-=r,n+=r}this._startValue=t,this._endValue=n,this._valueRange=n-t}getLabelForValue(e){return Qc(e,this.chart.options.locale,this.options.ticks.format)}},ug=class extends lg{static id=`linear`;static defaults={ticks:{callback:tl.formatters.numeric}};determineDataLimits(){let{min:e,max:t}=this.getMinMax(!0);this.min=As(e)?e:0,this.max=As(t)?t:1,this.handleTickRangeOptions()}computeTickLimit(){let e=this.isHorizontal(),t=e?this.width:this.height,n=fc(this.options.ticks.minRotation),r=(e?Math.sin(n):Math.cos(n))||.001,i=this._resolveTickFontOptions(0);return Math.ceil(t/Math.min(40,i.lineHeight/r))}getPixelForValue(e){return e===null?NaN:this.getPixelForDecimal((e-this._startValue)/this._valueRange)}getValueForPixel(e){return this._startValue+this.getDecimalForPixel(e)*this._valueRange}},dg=e=>Math.floor(rc(e)),fg=(e,t)=>10**(dg(e)+t);function pg(e){return e/10**dg(e)==1}function mg(e,t,n){let r=10**n,i=Math.floor(e/r);return Math.ceil(t/r)-i}function hg(e,t){let n=dg(t-e);for(;mg(e,t,n)>10;)n++;for(;mg(e,t,n)<10;)n--;return Math.min(n,dg(e))}function gg(e,{min:t,max:n}){t=js(e.min,t);let r=[],i=dg(t),a=hg(t,n),o=a<0?10**Math.abs(a):1,s=10**a,c=i>a?10**i:0,l=Math.round((t-c)*o)/o,u=Math.floor((t-c)/s/10)*s*10,d=Math.floor((l-u)/10**a),f=js(e.min,Math.round((c+u+d*10**a)*o)/o);for(;f<n;)r.push({value:f,major:pg(f),significand:d}),d>=10?d=d<15?15:20:d++,d>=20&&(a++,d=2,o=a>=0?1:o),f=Math.round((c+u+d*10**a)*o)/o;let p=js(e.max,f);return r.push({value:p,major:pg(p),significand:d}),r}var _g=class extends rp{static id=`logarithmic`;static defaults={ticks:{callback:tl.formatters.logarithmic,major:{enabled:!0}}};constructor(e){super(e),this.start=void 0,this.end=void 0,this._startValue=void 0,this._valueRange=0}parse(e,t){let n=lg.prototype.parse.apply(this,[e,t]);if(n===0){this._zero=!0;return}return As(n)&&n>0?n:null}determineDataLimits(){let{min:e,max:t}=this.getMinMax(!0);this.min=As(e)?Math.max(0,e):null,this.max=As(t)?Math.max(0,t):null,this.options.beginAtZero&&(this._zero=!0),this._zero&&this.min!==this._suggestedMin&&!As(this._userMin)&&(this.min=e===fg(this.min,0)?fg(this.min,-1):fg(this.min,0)),this.handleTickRangeOptions()}handleTickRangeOptions(){let{minDefined:e,maxDefined:t}=this.getUserBounds(),n=this.min,r=this.max,i=t=>n=e?n:t,a=e=>r=t?r:e;n===r&&(n<=0?(i(1),a(10)):(i(fg(n,-1)),a(fg(r,1)))),n<=0&&i(fg(r,-1)),r<=0&&a(fg(n,1)),this.min=n,this.max=r}buildTicks(){let e=this.options,t=gg({min:this._userMin,max:this._userMax},this);return e.bounds===`ticks`&&dc(t,this,`value`),e.reverse?(t.reverse(),this.start=this.max,this.end=this.min):(this.start=this.min,this.end=this.max),t}getLabelForValue(e){return e===void 0?`0`:Qc(e,this.chart.options.locale,this.options.ticks.format)}configure(){let e=this.min;super.configure(),this._startValue=rc(e),this._valueRange=rc(this.max)-rc(e)}getPixelForValue(e){return(e===void 0||e===0)&&(e=this.min),e===null||isNaN(e)?NaN:this.getPixelForDecimal(e===this.min?0:(rc(e)-this._startValue)/this._valueRange)}getValueForPixel(e){let t=this.getDecimalForPixel(e);return 10**(this._startValue+t*this._valueRange)}};function vg(e){let t=e.ticks;if(t.display&&e.display){let e=jl(t.backdropPadding);return H(t.font&&t.font.size,K.font.size)+e.height}return 0}function yg(e,t,n){return n=ks(n)?n:[n],{w:ll(e,t.string,n),h:n.length*t.lineHeight}}function bg(e,t,n,r,i){return e===r||e===i?{start:t-n/2,end:t+n/2}:e<r||e>i?{start:t-n,end:t}:{start:t,end:t+n}}function xg(e){let t={l:e.left+e._padding.left,r:e.right-e._padding.right,t:e.top+e._padding.top,b:e.bottom-e._padding.bottom},n=Object.assign({},t),r=[],i=[],a=e._pointLabels.length,o=e.options.pointLabels,s=o.centerPointLabels?G/a:0;for(let c=0;c<a;c++){let a=o.setContext(e.getPointLabelContext(c));i[c]=a.padding;let l=e.getPointPosition(c,e.drawingArea+i[c],s),u=Ml(a.font),d=yg(e.ctx,u,e._pointLabels[c]);r[c]=d;let f=vc(e.getIndexAngle(c)+s),p=Math.round(pc(f));Sg(n,t,f,bg(p,l.x,d.w,0,180),bg(p,l.y,d.h,90,270))}e.setCenterPoint(t.l-n.l,n.r-t.r,t.t-n.t,n.b-t.b),e._pointLabelItems=Tg(e,r,i)}function Sg(e,t,n,r,i){let a=Math.abs(Math.sin(n)),o=Math.abs(Math.cos(n)),s=0,c=0;r.start<t.l?(s=(t.l-r.start)/a,e.l=Math.min(e.l,t.l-s)):r.end>t.r&&(s=(r.end-t.r)/a,e.r=Math.max(e.r,t.r+s)),i.start<t.t?(c=(t.t-i.start)/o,e.t=Math.min(e.t,t.t-c)):i.end>t.b&&(c=(i.end-t.b)/o,e.b=Math.max(e.b,t.b+c))}function Cg(e,t,n){let r=e.drawingArea,{extra:i,additionalAngle:a,padding:o,size:s}=n,c=e.getPointPosition(t,r+i+o,a),l=Math.round(pc(vc(c.angle+ec))),u=Og(c.y,s.h,l),d=Eg(l),f=Dg(c.x,s.w,d);return{visible:!0,x:c.x,y:u,textAlign:d,left:f,top:u,right:f+s.w,bottom:u+s.h}}function wg(e,t){if(!t)return!0;let{left:n,top:r,right:i,bottom:a}=e;return!(ml({x:n,y:r},t)||ml({x:n,y:a},t)||ml({x:i,y:r},t)||ml({x:i,y:a},t))}function Tg(e,t,n){let r=[],i=e._pointLabels.length,a=e.options,{centerPointLabels:o,display:s}=a.pointLabels,c={extra:vg(a)/2,additionalAngle:o?G/i:0},l;for(let a=0;a<i;a++){c.padding=n[a],c.size=t[a];let i=Cg(e,a,c);r.push(i),s===`auto`&&(i.visible=wg(i,l),i.visible&&(l=i))}return r}function Eg(e){return e===0||e===180?`center`:e<180?`left`:`right`}function Dg(e,t,n){return n===`right`?e-=t:n===`center`&&(e-=t/2),e}function Og(e,t,n){return n===90||n===270?e-=t/2:(n>270||n<90)&&(e-=t),e}function kg(e,t,n){let{left:r,top:i,right:a,bottom:o}=n,{backdropColor:s}=t;if(!B(s)){let n=Al(t.borderRadius),c=jl(t.backdropPadding);e.fillStyle=s;let l=r-c.left,u=i-c.top,d=a-r+c.width,f=o-i+c.height;Object.values(n).some(e=>e!==0)?(e.beginPath(),Cl(e,{x:l,y:u,w:d,h:f,radius:n}),e.fill()):e.fillRect(l,u,d,f)}}function Ag(e,t){let{ctx:n,options:{pointLabels:r}}=e;for(let i=t-1;i>=0;i--){let t=e._pointLabelItems[i];if(!t.visible)continue;let a=r.setContext(e.getPointLabelContext(i));kg(n,a,t);let o=Ml(a.font),{x:s,y:c,textAlign:l}=t;Sl(n,e._pointLabels[i],s,c+o.lineHeight/2,o,{color:a.color,textAlign:l,textBaseline:`middle`})}}function jg(e,t,n,r){let{ctx:i}=e;if(n)i.arc(e.xCenter,e.yCenter,t,0,Xs);else{let n=e.getPointPosition(0,t);i.moveTo(n.x,n.y);for(let a=1;a<r;a++)n=e.getPointPosition(a,t),i.lineTo(n.x,n.y)}}function Mg(e,t,n,r,i){let a=e.ctx,o=t.circular,{color:s,lineWidth:c}=t;!o&&!r||!s||!c||n<0||(a.save(),a.strokeStyle=s,a.lineWidth=c,a.setLineDash(i.dash||[]),a.lineDashOffset=i.dashOffset,a.beginPath(),jg(e,n,o,r),a.closePath(),a.stroke(),a.restore())}function Ng(e,t,n){return Fl(e,{label:n,index:t,type:`pointLabel`})}var Pg=class extends lg{static id=`radialLinear`;static defaults={display:!0,animate:!0,position:`chartArea`,angleLines:{display:!0,lineWidth:1,borderDash:[],borderDashOffset:0},grid:{circular:!1},startAngle:0,ticks:{showLabelBackdrop:!0,callback:tl.formatters.numeric},pointLabels:{backdropColor:void 0,backdropPadding:2,display:!0,font:{size:10},callback(e){return e},padding:5,centerPointLabels:!1}};static defaultRoutes={"angleLines.color":`borderColor`,"pointLabels.color":`color`,"ticks.color":`color`};static descriptors={angleLines:{_fallback:`grid`}};constructor(e){super(e),this.xCenter=void 0,this.yCenter=void 0,this.drawingArea=void 0,this._pointLabels=[],this._pointLabelItems=[]}setDimensions(){let e=this._padding=jl(vg(this.options)/2),t=this.width=this.maxWidth-e.width,n=this.height=this.maxHeight-e.height;this.xCenter=Math.floor(this.left+t/2+e.left),this.yCenter=Math.floor(this.top+n/2+e.top),this.drawingArea=Math.floor(Math.min(t,n)/2)}determineDataLimits(){let{min:e,max:t}=this.getMinMax(!1);this.min=As(e)&&!isNaN(e)?e:0,this.max=As(t)&&!isNaN(t)?t:0,this.handleTickRangeOptions()}computeTickLimit(){return Math.ceil(this.drawingArea/vg(this.options))}generateTickLabels(e){lg.prototype.generateTickLabels.call(this,e),this._pointLabels=this.getLabels().map((e,t)=>{let n=U(this.options.pointLabels.callback,[e,t],this);return n||n===0?n:``}).filter((e,t)=>this.chart.getDataVisibility(t))}fit(){let e=this.options;e.display&&e.pointLabels.display?xg(this):this.setCenterPoint(0,0,0,0)}setCenterPoint(e,t,n,r){this.xCenter+=Math.floor((e-t)/2),this.yCenter+=Math.floor((n-r)/2),this.drawingArea-=Math.min(this.drawingArea/2,Math.max(e,t,n,r))}getIndexAngle(e){let t=Xs/(this._pointLabels.length||1),n=this.options.startAngle||0;return vc(e*t+fc(n))}getDistanceFromCenterForValue(e){if(B(e))return NaN;let t=this.drawingArea/(this.max-this.min);return this.options.reverse?(this.max-e)*t:(e-this.min)*t}getValueForDistanceFromCenter(e){if(B(e))return NaN;let t=e/(this.drawingArea/(this.max-this.min));return this.options.reverse?this.max-t:this.min+t}getPointLabelContext(e){let t=this._pointLabels||[];if(e>=0&&e<t.length){let n=t[e];return Ng(this.getContext(),e,n)}}getPointPosition(e,t,n=0){let r=this.getIndexAngle(e)-ec+n;return{x:Math.cos(r)*t+this.xCenter,y:Math.sin(r)*t+this.yCenter,angle:r}}getPointPositionForValue(e,t){return this.getPointPosition(e,this.getDistanceFromCenterForValue(t))}getBasePosition(e){return this.getPointPositionForValue(e||0,this.getBaseValue())}getPointLabelPosition(e){let{left:t,top:n,right:r,bottom:i}=this._pointLabelItems[e];return{left:t,top:n,right:r,bottom:i}}drawBackground(){let{backgroundColor:e,grid:{circular:t}}=this.options;if(e){let n=this.ctx;n.save(),n.beginPath(),jg(this,this.getDistanceFromCenterForValue(this._endValue),t,this._pointLabels.length),n.closePath(),n.fillStyle=e,n.fill(),n.restore()}}drawGrid(){let e=this.ctx,t=this.options,{angleLines:n,grid:r,border:i}=t,a=this._pointLabels.length,o,s,c;if(t.pointLabels.display&&Ag(this,a),r.display&&this.ticks.forEach((e,t)=>{if(t!==0||t===0&&this.min<0){s=this.getDistanceFromCenterForValue(e.value);let n=this.getContext(t),o=r.setContext(n),c=i.setContext(n);Mg(this,o,s,a,c)}}),n.display){for(e.save(),o=a-1;o>=0;o--){let r=n.setContext(this.getPointLabelContext(o)),{color:i,lineWidth:a}=r;!a||!i||(e.lineWidth=a,e.strokeStyle=i,e.setLineDash(r.borderDash),e.lineDashOffset=r.borderDashOffset,s=this.getDistanceFromCenterForValue(t.reverse?this.min:this.max),c=this.getPointPosition(o,s),e.beginPath(),e.moveTo(this.xCenter,this.yCenter),e.lineTo(c.x,c.y),e.stroke())}e.restore()}}drawBorder(){}drawLabels(){let e=this.ctx,t=this.options,n=t.ticks;if(!n.display)return;let r=this.getIndexAngle(0),i,a;e.save(),e.translate(this.xCenter,this.yCenter),e.rotate(r),e.textAlign=`center`,e.textBaseline=`middle`,this.ticks.forEach((r,o)=>{if(o===0&&this.min>=0&&!t.reverse)return;let s=n.setContext(this.getContext(o)),c=Ml(s.font);if(i=this.getDistanceFromCenterForValue(this.ticks[o].value),s.showLabelBackdrop){e.font=c.string,a=e.measureText(r.label).width,e.fillStyle=s.backdropColor;let t=jl(s.backdropPadding);e.fillRect(-a/2-t.left,-i-c.size/2-t.top,a+t.width,c.size+t.height)}Sl(e,r.label,0,-i,c,{color:s.color,strokeColor:s.textStrokeColor,strokeWidth:s.textStrokeWidth})}),e.restore()}drawTitle(){}},Fg={millisecond:{common:!0,size:1,steps:1e3},second:{common:!0,size:1e3,steps:60},minute:{common:!0,size:6e4,steps:60},hour:{common:!0,size:36e5,steps:24},day:{common:!0,size:864e5,steps:30},week:{common:!1,size:6048e5,steps:4},month:{common:!0,size:2628e6,steps:12},quarter:{common:!1,size:7884e6,steps:4},year:{common:!0,size:3154e7}},Ig=Object.keys(Fg);function Lg(e,t){return e-t}function Rg(e,t){if(B(t))return null;let n=e._adapter,{parser:r,round:i,isoWeekday:a}=e._parseOpts,o=t;return typeof r==`function`&&(o=r(o)),As(o)||(o=typeof r==`string`?n.parse(o,r):n.parse(o)),o===null?null:(i&&(o=i===`week`&&(lc(a)||a===!0)?n.startOf(o,`isoWeek`,a):n.startOf(o,i)),+o)}function zg(e,t,n,r){let i=Ig.length;for(let a=Ig.indexOf(e);a<i-1;++a){let e=Fg[Ig[a]],i=e.steps?e.steps:2**53-1;if(e.common&&Math.ceil((n-t)/(i*e.size))<=r)return Ig[a]}return Ig[i-1]}function Bg(e,t,n,r,i){for(let a=Ig.length-1;a>=Ig.indexOf(n);a--){let n=Ig[a];if(Fg[n].common&&e._adapter.diff(i,r,n)>=t-1)return n}return Ig[n?Ig.indexOf(n):0]}function Vg(e){for(let t=Ig.indexOf(e)+1,n=Ig.length;t<n;++t)if(Fg[Ig[t]].common)return Ig[t]}function Hg(e,t,n){if(!n)e[t]=!0;else if(n.length){let{lo:r,hi:i}=Cc(n,t),a=n[r]>=t?n[r]:n[i];e[a]=!0}}function Ug(e,t,n,r){let i=e._adapter,a=+i.startOf(t[0].value,r),o=t[t.length-1].value,s,c;for(s=a;s<=o;s=+i.add(s,1,r))c=n[s],c>=0&&(t[c].major=!0);return t}function Wg(e,t,n){let r=[],i={},a=t.length,o,s;for(o=0;o<a;++o)s=t[o],i[s]=o,r.push({value:s,major:!1});return a===0||!n?r:Ug(e,r,i,n)}var Gg=class extends rp{static id=`time`;static defaults={bounds:`data`,adapters:{},time:{parser:!1,unit:!1,round:!1,isoWeekday:!1,minUnit:`millisecond`,displayFormats:{}},ticks:{source:`auto`,callback:!1,major:{enabled:!1}}};constructor(e){super(e),this._cache={data:[],labels:[],all:[]},this._unit=`day`,this._majorUnit=void 0,this._offsets={},this._normalized=!1,this._parseOpts=void 0}init(e,t={}){let n=e.time||={},r=this._adapter=new Bd._date(e.adapters.date);r.init(t),zs(n.displayFormats,r.formats()),this._parseOpts={parser:n.parser,round:n.round,isoWeekday:n.isoWeekday},super.init(e),this._normalized=t.normalized}parse(e,t){return e===void 0?null:Rg(this,e)}beforeLayout(){super.beforeLayout(),this._cache={data:[],labels:[],all:[]}}determineDataLimits(){let e=this.options,t=this._adapter,n=e.time.unit||`day`,{min:r,max:i,minDefined:a,maxDefined:o}=this.getUserBounds();function s(e){!a&&!isNaN(e.min)&&(r=Math.min(r,e.min)),!o&&!isNaN(e.max)&&(i=Math.max(i,e.max))}(!a||!o)&&(s(this._getLabelBounds()),(e.bounds!==`ticks`||e.ticks.source!==`labels`)&&s(this.getMinMax(!1))),r=As(r)&&!isNaN(r)?r:+t.startOf(Date.now(),n),i=As(i)&&!isNaN(i)?i:+t.endOf(Date.now(),n)+1,this.min=Math.min(r,i-1),this.max=Math.max(r+1,i)}_getLabelBounds(){let e=this.getLabelTimestamps(),t=1/0,n=-1/0;return e.length&&(t=e[0],n=e[e.length-1]),{min:t,max:n}}buildTicks(){let e=this.options,t=e.time,n=e.ticks,r=n.source===`labels`?this.getLabelTimestamps():this._generate();e.bounds===`ticks`&&r.length&&(this.min=this._userMin||r[0],this.max=this._userMax||r[r.length-1]);let i=this.min,a=this.max,o=Ec(r,i,a);return this._unit=t.unit||(n.autoSkip?zg(t.minUnit,this.min,this.max,this._getLabelCapacity(i)):Bg(this,o.length,t.minUnit,this.min,this.max)),this._majorUnit=!n.major.enabled||this._unit===`year`?void 0:Vg(this._unit),this.initOffsets(r),e.reverse&&o.reverse(),Wg(this,o,this._majorUnit)}afterAutoSkip(){this.options.offsetAfterAutoskip&&this.initOffsets(this.ticks.map(e=>+e.value))}initOffsets(e=[]){let t=0,n=0,r,i;this.options.offset&&e.length&&(r=this.getDecimalForValue(e[0]),t=e.length===1?1-r:(this.getDecimalForValue(e[1])-r)/2,i=this.getDecimalForValue(e[e.length-1]),n=e.length===1?i:(i-this.getDecimalForValue(e[e.length-2]))/2);let a=e.length<3?.5:.25;t=bc(t,0,a),n=bc(n,0,a),this._offsets={start:t,end:n,factor:1/(t+1+n)}}_generate(){let e=this._adapter,t=this.min,n=this.max,r=this.options,i=r.time,a=i.unit||zg(i.minUnit,t,n,this._getLabelCapacity(t)),o=H(r.ticks.stepSize,1),s=a===`week`&&i.isoWeekday,c=lc(s)||s===!0,l={},u=t,d,f;if(c&&(u=+e.startOf(u,`isoWeek`,s)),u=+e.startOf(u,c?`day`:a),e.diff(n,t,a)>1e5*o)throw Error(t+` and `+n+` are too far apart with stepSize of `+o+` `+a);let p=r.ticks.source===`data`&&this.getDataTimestamps();for(d=u,f=0;d<n;d=+e.add(d,o,a),f++)Hg(l,d,p);return(d===n||r.bounds===`ticks`||f===1)&&Hg(l,d,p),Object.keys(l).sort(Lg).map(e=>+e)}getLabelForValue(e){let t=this._adapter,n=this.options.time;return n.tooltipFormat?t.format(e,n.tooltipFormat):t.format(e,n.displayFormats.datetime)}format(e,t){let n=this.options.time.displayFormats,r=this._unit,i=t||n[r];return this._adapter.format(e,i)}_tickFormatFunction(e,t,n,r){let i=this.options,a=i.ticks.callback;if(a)return U(a,[e,t,n],this);let o=i.time.displayFormats,s=this._unit,c=this._majorUnit,l=s&&o[s],u=c&&o[c],d=n[t],f=c&&u&&d&&d.major;return this._adapter.format(e,r||(f?u:l))}generateTickLabels(e){let t,n,r;for(t=0,n=e.length;t<n;++t)r=e[t],r.label=this._tickFormatFunction(r.value,t,e)}getDecimalForValue(e){return e===null?NaN:(e-this.min)/(this.max-this.min)}getPixelForValue(e){let t=this._offsets,n=this.getDecimalForValue(e);return this.getPixelForDecimal((t.start+n)*t.factor)}getValueForPixel(e){let t=this._offsets,n=this.getDecimalForPixel(e)/t.factor-t.end;return this.min+n*(this.max-this.min)}_getLabelSize(e){let t=this.options.ticks,n=this.ctx.measureText(e).width,r=fc(this.isHorizontal()?t.maxRotation:t.minRotation),i=Math.cos(r),a=Math.sin(r),o=this._resolveTickFontOptions(0).size;return{w:n*i+o*a,h:n*a+o*i}}_getLabelCapacity(e){let t=this.options.time,n=t.displayFormats,r=n[t.unit]||n.millisecond,i=this._tickFormatFunction(e,0,Wg(this,[e],this._majorUnit),r),a=this._getLabelSize(i),o=Math.floor(this.isHorizontal()?this.width/a.w:this.height/a.h)-1;return o>0?o:1}getDataTimestamps(){let e=this._cache.data||[],t,n;if(e.length)return e;let r=this.getMatchingVisibleMetas();if(this._normalized&&r.length)return this._cache.data=r[0].controller.getAllParsedValues(this);for(t=0,n=r.length;t<n;++t)e=e.concat(r[t].controller.getAllParsedValues(this));return this._cache.data=this.normalize(e)}getLabelTimestamps(){let e=this._cache.labels||[],t,n;if(e.length)return e;let r=this.getLabels();for(t=0,n=r.length;t<n;++t)e.push(Rg(this,r[t]));return this._cache.labels=this._normalized?e:this.normalize(e)}normalize(e){return Ac(e.sort(Lg))}};function Kg(e,t,n){let r=0,i=e.length-1,a,o,s,c;n?(t>=e[r].pos&&t<=e[i].pos&&({lo:r,hi:i}=wc(e,`pos`,t)),{pos:a,time:s}=e[r],{pos:o,time:c}=e[i]):(t>=e[r].time&&t<=e[i].time&&({lo:r,hi:i}=wc(e,`time`,t)),{time:a,pos:s}=e[r],{time:o,pos:c}=e[i]);let l=o-a;return l?s+(c-s)*(t-a)/l:s}var qg=class extends Gg{static id=`timeseries`;static defaults=Gg.defaults;constructor(e){super(e),this._table=[],this._minPos=void 0,this._tableRange=void 0}initOffsets(){let e=this._getTimestampsForTable(),t=this._table=this.buildLookupTable(e);this._minPos=Kg(t,this.min),this._tableRange=Kg(t,this.max)-this._minPos,super.initOffsets(e)}buildLookupTable(e){let{min:t,max:n}=this,r=[],i=[],a,o,s,c,l;for(a=0,o=e.length;a<o;++a)c=e[a],c>=t&&c<=n&&r.push(c);if(r.length<2)return[{time:t,pos:0},{time:n,pos:1}];for(a=0,o=r.length;a<o;++a)l=r[a+1],s=r[a-1],c=r[a],Math.round((l+s)/2)!==c&&i.push({time:c,pos:a/(o-1)});return i}_generate(){let e=this.min,t=this.max,n=super.getDataTimestamps();return(!n.includes(e)||!n.length)&&n.splice(0,0,e),(!n.includes(t)||n.length===1)&&n.push(t),n.sort((e,t)=>e-t)}_getTimestampsForTable(){let e=this._cache.all||[];if(e.length)return e;let t=this.getDataTimestamps(),n=this.getLabelTimestamps();return e=t.length&&n.length?this.normalize(t.concat(n)):t.length?t:n,e=this._cache.all=e,e}getDecimalForValue(e){return(Kg(this._table,e)-this._minPos)/this._tableRange}getValueForPixel(e){let t=this._offsets,n=this.getDecimalForPixel(e)/t.factor-t.end;return Kg(this._table,n*this._tableRange+this._minPos,!0)}},Jg=[Rd,Em,tg,Object.freeze({__proto__:null,CategoryScale:og,LinearScale:ug,LogarithmicScale:_g,RadialLinearScale:Pg,TimeScale:Gg,TimeSeriesScale:qg})],Yg=`label`;function Xg(e,t){typeof e==`function`?e(t):e&&(e.current=t)}function Zg(e,t){let n=e.options;n&&t&&Object.assign(n,t)}function Qg(e,t){e.labels=t}function $g(e,t,n=Yg){let r=[];e.datasets=t.map(t=>{let i=e.datasets.find(e=>e[n]===t[n]);return!i||!t.data||r.includes(i)?{...t}:(r.push(i),Object.assign(i,t),i)})}function e_(e,t=Yg){let n={labels:[],datasets:[]};return Qg(n,e.labels),$g(n,e.datasets,t),n}function t_(e,t){let{height:n=150,width:r=300,redraw:i=!1,datasetIdKey:a,type:o,data:s,options:c,plugins:l=[],fallbackContent:u,updateMode:d,...f}=e,p=(0,v.useRef)(null),m=(0,v.useRef)(null),h=()=>{p.current&&(m.current=new Gp(p.current,{type:o,data:e_(s,a),options:c&&{...c},plugins:l}),Xg(t,m.current))},g=()=>{Xg(t,null),m.current&&=(m.current.destroy(),null)};return(0,v.useEffect)(()=>{!i&&m.current&&c&&Zg(m.current,c)},[i,c]),(0,v.useEffect)(()=>{!i&&m.current&&Qg(m.current.config.data,s.labels)},[i,s.labels]),(0,v.useEffect)(()=>{!i&&m.current&&s.datasets&&$g(m.current.config.data,s.datasets,a)},[i,s.datasets]),(0,v.useEffect)(()=>{m.current&&(i?(g(),setTimeout(h)):m.current.update(d))},[i,c,s.labels,s.datasets,d]),(0,v.useEffect)(()=>{m.current&&(g(),setTimeout(h))},[o]),(0,v.useEffect)(()=>(h(),()=>g()),[]),(0,z.jsx)(`canvas`,{ref:p,role:`img`,height:n,width:r,...f,children:u})}var n_=(0,v.forwardRef)(t_);function r_(e,t){return Gp.register(t),(0,v.forwardRef)((t,n)=>(0,z.jsx)(n_,{...t,ref:n,type:e}))}var i_=r_(`line`,Id),a_=r_(`bar`,$),o_=r_(`doughnut`,Fd);Gp.register(...Jg);function s_(){let[e,t]=(0,v.useState)(null),[n,r]=(0,v.useState)(!0),[i,a]=(0,v.useState)(``);if((0,v.useEffect)(()=>{let e=!0;async function n(){try{r(!0),a(``);let n=await yo.get(`/analytics`);e&&t(n.data)}catch(t){let n=t?.response?.data??t?.message??`Failed to load analytics`;typeof n==`object`&&(n=n?.error??n?.message??JSON.stringify(n)),e&&a(n)}finally{e&&r(!1)}}return n(),()=>{e=!1}},[]),n)return(0,z.jsx)(`div`,{style:{padding:20},children:`Loading analytics…`});if(i)return(0,z.jsxs)(`div`,{style:{padding:20,color:`var(--danger)`},children:[`Error: `,i]});if(!e)return(0,z.jsx)(`div`,{style:{padding:20},children:`No analytics data available.`});let o=getComputedStyle(document.documentElement),s=o.getPropertyValue(`--primary`).trim()||`#14b8a6`,c=o.getPropertyValue(`--sidebar-bg`).trim()||`#1e3a5f`,l={labels:e.months,datasets:[{label:`Contacts Added`,data:e.monthlyContacts,fill:!0,backgroundColor:`rgba(20,184,166,0.12)`,borderColor:`rgba(20,184,166,0.9)`,tension:.4}]},u={labels:e.recentMonths,datasets:[{label:`Contacts Added`,data:e.recentContacts,backgroundColor:`rgba(30,58,91,0.9)`}]},d={labels:[`Complete Contacts`,`Needs Details`],datasets:[{data:e.contactStatus,backgroundColor:[s,c]}]},f=e.newContactsPercent,p=f>0?`+${f}%`:`${f}%`;return(0,z.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`2fr 1fr`,gap:18},children:[(0,z.jsxs)(`div`,{style:{background:`var(--surface)`,border:`1px solid var(--border)`,borderRadius:16,padding:18,boxShadow:`var(--shadow-xs)`},children:[(0,z.jsx)(`div`,{style:{fontWeight:700,color:`var(--heading-color)`,marginBottom:8},children:`Contact Growth`}),(0,z.jsx)(`div`,{style:{height:220},children:(0,z.jsx)(i_,{data:l,options:{plugins:{legend:{display:!1}},scales:{y:{beginAtZero:!0,grid:{color:`rgba(16,24,40,0.04)`}}}}})})]}),(0,z.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:12},children:[(0,z.jsxs)(`div`,{style:{background:`var(--surface)`,border:`1px solid var(--border)`,borderRadius:12,padding:18,minHeight:120},children:[(0,z.jsx)(`div`,{style:{fontSize:14,color:`var(--heading-color)`,marginBottom:6},children:`TOTAL CONTACTS`}),(0,z.jsx)(`div`,{style:{fontSize:28,fontWeight:800},children:e.totalContacts.toLocaleString()})]}),(0,z.jsxs)(`div`,{style:{background:`var(--surface)`,border:`1px solid var(--border)`,borderRadius:12,padding:18},children:[(0,z.jsx)(`div`,{style:{fontSize:14,color:`var(--heading-color)`,marginBottom:6},children:`CONTACT GROWTH`}),(0,z.jsx)(`div`,{style:{fontSize:22,fontWeight:700},children:p})]}),(0,z.jsxs)(`div`,{style:{background:`var(--surface)`,border:`1px solid var(--border)`,borderRadius:12,padding:18},children:[(0,z.jsx)(`div`,{style:{fontSize:14,color:`var(--heading-color)`,marginBottom:6},children:`CONTACTS WITH TITLE`}),(0,z.jsxs)(`div`,{style:{fontSize:22,fontWeight:700},children:[e.contactsWithTitlePercent,`%`]}),(0,z.jsx)(`div`,{style:{height:8,background:`rgba(16,24,40,0.06)`,borderRadius:8,marginTop:12},children:(0,z.jsx)(`div`,{style:{width:`${e.contactsWithTitlePercent}%`,height:8,background:`var(--primary)`,borderRadius:8}})})]})]}),(0,z.jsxs)(`div`,{style:{gridColumn:`1 / -1`,display:`grid`,gridTemplateColumns:`1fr 1fr 1fr`,gap:18,marginTop:8},children:[(0,z.jsxs)(`div`,{style:{background:`var(--surface)`,border:`1px solid var(--border)`,borderRadius:12,padding:16},children:[(0,z.jsx)(`div`,{style:{fontWeight:700,color:`var(--heading-color)`,marginBottom:8},children:`Recent Contact Activity`}),(0,z.jsx)(`div`,{style:{height:120},children:(0,z.jsx)(a_,{data:u,options:{plugins:{legend:{display:!1}},scales:{y:{beginAtZero:!0}}}})})]}),(0,z.jsxs)(`div`,{style:{background:`var(--surface)`,border:`1px solid var(--border)`,borderRadius:12,padding:16,display:`flex`,flexDirection:`column`,justifyContent:`center`,alignItems:`center`},children:[(0,z.jsx)(`div`,{style:{fontWeight:700,color:`var(--heading-color)`},children:`Contact Completeness`}),(0,z.jsxs)(`div`,{style:{fontSize:36,fontWeight:800,marginTop:8},children:[e.contactsWithTitlePercent,`%`]}),(0,z.jsx)(`div`,{style:{height:8,width:`100%`,marginTop:12,background:`rgba(16,24,40,0.06)`,borderRadius:8},children:(0,z.jsx)(`div`,{style:{width:`${e.contactsWithTitlePercent}%`,height:8,background:`var(--primary)`,borderRadius:8}})})]}),(0,z.jsxs)(`div`,{style:{background:`var(--surface)`,border:`1px solid var(--border)`,borderRadius:12,padding:16,display:`flex`,flexDirection:`column`,justifyContent:`center`,alignItems:`center`},children:[(0,z.jsx)(`div`,{style:{fontWeight:700,color:`var(--heading-color)`},children:`Contact Status`}),(0,z.jsx)(`div`,{style:{width:120,height:120,marginTop:8},children:(0,z.jsx)(o_,{data:d,options:{plugins:{legend:{position:`bottom`}}}})})]})]})]})}var c_=()=>(0,z.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,z.jsx)(`rect`,{x:`3`,y:`3`,width:`7`,height:`7`,rx:`1`}),(0,z.jsx)(`rect`,{x:`14`,y:`3`,width:`7`,height:`7`,rx:`1`}),(0,z.jsx)(`rect`,{x:`3`,y:`14`,width:`7`,height:`7`,rx:`1`}),(0,z.jsx)(`rect`,{x:`14`,y:`14`,width:`7`,height:`7`,rx:`1`})]}),l_=()=>(0,z.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,z.jsx)(`line`,{x1:`12`,y1:`5`,x2:`12`,y2:`19`}),(0,z.jsx)(`line`,{x1:`5`,y1:`12`,x2:`19`,y2:`12`})]}),u_=()=>(0,z.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,z.jsx)(`circle`,{cx:`12`,cy:`8`,r:`4`}),(0,z.jsx)(`path`,{d:`M4 21c0-4 3.5-7 8-7s8 3 8 7`})]}),d_=()=>(0,z.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,z.jsx)(`path`,{d:`M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4`}),(0,z.jsx)(`polyline`,{points:`16 17 21 12 16 7`}),(0,z.jsx)(`line`,{x1:`21`,y1:`12`,x2:`9`,y2:`12`})]}),f_=()=>(0,z.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,z.jsx)(`circle`,{cx:`11`,cy:`11`,r:`7`}),(0,z.jsx)(`line`,{x1:`16.5`,y1:`16.5`,x2:`21`,y2:`21`})]}),p_=()=>(0,z.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,z.jsx)(`rect`,{x:`3`,y:`5`,width:`18`,height:`14`,rx:`2`}),(0,z.jsx)(`polyline`,{points:`3 7 12 13 21 7`})]}),m_=()=>(0,z.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:(0,z.jsx)(`path`,{d:`M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.08 5.18 2 2 0 0 1 5.08 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.62a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.28-1.28a2 2 0 0 1 2.11-.45c.84.29 1.72.5 2.62.62A2 2 0 0 1 22 16.92z`})}),h_=()=>(0,z.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,z.jsx)(`path`,{d:`M12 16V4`}),(0,z.jsx)(`polyline`,{points:`7 9 12 4 17 9`}),(0,z.jsx)(`path`,{d:`M4 20h16`})]}),g_=()=>(0,z.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,z.jsx)(`path`,{d:`M12 4v12`}),(0,z.jsx)(`polyline`,{points:`7 11 12 16 17 11`}),(0,z.jsx)(`path`,{d:`M4 20h16`})]}),__=()=>(0,z.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:[(0,z.jsx)(`rect`,{x:`3`,y:`4`,width:`18`,height:`16`,rx:`3`}),(0,z.jsx)(`circle`,{cx:`9`,cy:`10`,r:`2`}),(0,z.jsx)(`path`,{d:`M5.8 16c.8-2 2-3 3.2-3s2.4 1 3.2 3M15 9h3M15 13h3M15 17h2`})]});function v_(){let e=gt(),t=(0,v.useRef)(null),[n,r]=(0,v.useState)([]),[i,a]=(0,v.useState)(``),[o,s]=(0,v.useState)(0),[c,l]=(0,v.useState)(0),[u,d]=(0,v.useState)(0),[f,p]=(0,v.useState)(!0),[m,h]=(0,v.useState)(``),[g,_]=(0,v.useState)(!1),[y,b]=(0,v.useState)(``),[x,S]=(0,v.useState)(``),[C,w]=(0,v.useState)(`contacts`),T=()=>{try{localStorage.removeItem(`token`)}catch(e){console.error(`Failed to clear stored token.`,e)}try{localStorage.removeItem(`user`)}catch(e){console.error(`Failed to clear stored user.`,e)}},E=(()=>{try{let e=localStorage.getItem(`user`);return e?JSON.parse(e):null}catch(e){try{localStorage.removeItem(`user`)}catch(e){console.error(`Failed to remove invalid stored user.`,e)}return console.error(`Failed to read stored user.`,e),null}})();(0,v.useEffect)(()=>{D()},[o,i]);let D=async()=>{try{p(!0),h(``);let e=await yo.get(`/contacts`,{params:{search:i,page:o,size:6}});r(e.data.content||[]),l(e.data.totalPages||0),d(e.data.totalElements||0)}catch(t){if(t.response?.status===401){T(),e(`/login`);return}h(t.response?.data?.error||`Unable to load contacts.`)}finally{p(!1)}},O=e=>{a(e.target.value),s(0)},ee=()=>{T(),e(`/login`)},k=async()=>{try{let e=await yo.get(`/contacts/export`,{responseType:`blob`}),t=window.URL.createObjectURL(e.data),n=document.createElement(`a`);n.href=t,n.setAttribute(`download`,`contacts.csv`),document.body.appendChild(n),n.click(),n.remove(),window.URL.revokeObjectURL(t)}catch(t){if(t.response?.status===401){T(),e(`/login`);return}alert(`Failed to export contacts.`),console.error(t)}},A=()=>{b(``),S(``),t.current&&t.current.click()},te=async t=>{let n=t.target.files?.[0];if(n){if(b(``),S(``),!n.name.toLowerCase().endsWith(`.csv`)){S(`Please select a CSV file.`),t.target.value=``;return}if(n.size>5*1024*1024){S(`CSV file size must not exceed 5 MB.`),t.target.value=``;return}try{_(!0);let e=new FormData;e.append(`file`,n);let t=await yo.post(`/contacts/import`,e,{timeout:6e4}),r=t.data?.importedCount||0,i=t.data?.skippedCount||0,a=t.data?.errors||[];r>0?(b(`${r} contact${r===1?``:`s`} imported successfully.${i>0?` ${i} row${i===1?``:`s`} skipped.`:``}`),o===0?await D():s(0)):i>0?S(`No contacts were imported. ${i} row${i===1?``:`s`} were skipped.`):b(`CSV import completed. No new contacts were found.`),a.length>0&&console.warn(`CSV import row errors:`,a)}catch(t){if(t.response?.status===401){T(),e(`/login`);return}let n=t.response?.data?.error||t.response?.data?.message;S(n||`Failed to import contacts. Please check your CSV file.`),console.error(`CSV import failed:`,t)}finally{_(!1),t.target&&(t.target.value=``)}}},ne=e=>((e.firstName?.[0]||``)+(e.lastName?.[0]||``)).toUpperCase()||`?`;return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700;800&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background: var(--background);
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }

          100% {
            background-position: 200% 0;
          }
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .app-shell {
                  display: flex;
                  min-height: 100vh;
                  background: var(--background);
                }

                .sidebar {
                  width: 260px;
                  flex-shrink: 0;
                  display: flex;
                  flex-direction: column;
                  background: var(--sidebar-bg);
                  color: #ffffff;
                  padding: 28px 18px;
                  position: sticky;
                  top: 0;
                  height: 100vh;
                  overflow-y: auto;
                }

        .sidebar-logo {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 4px 10px;
          margin-bottom: 36px;
        }

        .sidebar-logo-icon {
                  width: 44px;
                  height: 44px;
                  border-radius: 14px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  background: linear-gradient(135deg, var(--primary), var(--sidebar-bg));
                  color: #fff;
                  font-family: 'Fraunces', serif;
                  font-weight: 700;
                  font-size: 16px;
                  box-shadow: 0 6px 20px rgba(var(--primary-rgb), 0.15);
                }

        .sidebar-logo-text {
          font-weight: 700;
          font-size: 18px;
          color: #4c1d95;
          letter-spacing: -0.01em;
        }

        .sidebar-logo-text small {
          display: block;
          font-size: 11px;
          font-weight: 400;
          color: #8b8a9e;
        }

        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex: 1;
        }

        .sidebar-nav-label {
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
                  color: rgba(255,255,255,0.85);
          padding: 0 12px 8px;
          margin-top: 4px;
        }

        .sidebar-link {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 12px 16px;
          border-radius: 12px;
          background: transparent;
                  color: rgba(255,255,255,0.95);
          font-weight: 500;
          font-size: 14px;
          text-align: left;
                  transition: all 0.18s ease;
          text-decoration: none;
          width: 100%;
          cursor: pointer;
          border: none;
        }

        .sidebar-link:hover {
                  background: rgba(var(--primary-rgb), 0.06);
                  color: #ffffff;
        }

        .sidebar-link.active {
                  background: var(--primary);
                  color: #ffffff;
                  font-weight: 600;
                  box-shadow: 0 6px 20px rgba(var(--primary-rgb), 0.12);
                }

        .sidebar-divider {
                  height: 1px;
                  background: var(--border-strong);
                  margin: 12px 12px 16px;
                }

        .sidebar-logout {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 12px 16px;
          border-radius: 12px;
          background: transparent;
                  color: rgba(255,255,255,0.9);
          font-weight: 500;
          font-size: 14px;
          margin-top: auto;
                  transition: all 0.18s ease;
          cursor: pointer;
          width: 100%;
                  border: 1px solid rgba(255,255,255,0.06);
        }

        .sidebar-logout:hover {
                  background: rgba(255,255,255,0.04);
                  border-color: rgba(255,255,255,0.12);
                  color: #fff;
        }

        .main-panel {
          flex: 1;
          min-width: 0;
        }

        .dashboard-header {
          min-height: 80px;
          padding: 20px 5%;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: sticky;
          top: 0;
          z-index: 20;
          gap: 16px;
        }

        .dashboard-header-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .greeting-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(
            135deg,
            #fbbf24 0%,
            #f59e0b 100%
          );
          font-size: 22px;
          box-shadow: 0 4px 12px rgba(251, 191, 36, 0.25);
        }

        .dashboard-header h1 {
          margin: 0;
          font-size: 20px;
          color: #1e1b4b;
          font-weight: 700;
        }

        .dashboard-header p {
          margin-top: 2px;
          color: #8b8a9e;
          font-size: 13px;
        }

        .dashboard-actions {
          display: flex;
          gap: 10px;
          align-items: center;
          flex-wrap: wrap;
        }

        .profile-button,
        .import-button,
        .export-button,
        .logout-button {
          padding: 10px 18px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 13px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .profile-button {
                  background: rgba(var(--primary-rgb), 0.06);
                  border: 1.5px solid var(--border);
                  color: var(--primary);
        }

        .import-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
                  background: var(--success-light);
                  border: 1.5px solid var(--success);
                  color: var(--success);
        }

        .export-button {
                  background: var(--info-light);
                  border: 1.5px solid var(--info);
                  color: var(--info);
        }

        .logout-button {
                  background: var(--danger-light);
                  border: 1.5px solid rgba(220,34,34,0.12);
                  color: var(--danger);
        }

        .profile-button:hover {
                  background: rgba(var(--primary-rgb), 0.10);
        }

        .import-button:hover {
          background: #d1fae5;
        }

        .export-button:hover {
          background: #dbeafe;
        }

        .logout-button:hover {
          background: #fee2e2;
        }

        .dashboard-content {
          width: 92%;
          max-width: 1280px;
          margin: auto;
          padding: 28px 0 60px;
        }

        .dashboard-stats {
          display: grid;
          grid-template-columns: repeat(
            auto-fit,
            minmax(200px, 1fr)
          );
          gap: 16px;
          margin-bottom: 28px;
        }

        .stat-card {
          padding: 22px 24px;
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: 16px;
        }

        .stat-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--primary-light);
          color: var(--primary);
          margin-bottom: 12px;
          font-size: 20px;
        }

        .stat-card span {
          font-size: 12px;
          font-weight: 600;
          color: #8b8a9e;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .stat-card strong {
          display: block;
          font-size: 32px;
          font-weight: 800;
          color: #1e1b4b;
          margin-top: 4px;
        }

        .contacts-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          flex-wrap: wrap;
          gap: 12px;
        }

        .contacts-header h2 {
          font-size: 24px;
          font-weight: 700;
          color: #1e1b4b;
        }

        .contacts-header p {
          margin-top: 4px;
          color: #8b8a9e;
          font-size: 13.5px;
        }

        .contact-actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .add-contact-button {
                  display: inline-flex;
                  align-items: center;
                  gap: 10px;
                  padding: 12px 24px;
                  border: none;
                  border-radius: 12px;
                  background: var(--primary);
                  color: #fff;
                  font-weight: 600;
                  font-size: 14px;
                  cursor: pointer;
                  box-shadow: 0 4px 16px rgba(var(--primary-rgb), 0.18);
                }

        .add-contact-button:hover {
                  box-shadow: 0 6px 28px rgba(var(--primary-rgb), 0.28);
          transform: translateY(-2px);
        }

        .contacts-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .search-wrapper {
          position: relative;
          flex: 1;
          max-width: 440px;
        }

        .search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #b8b0cc;
          display: flex;
          pointer-events: none;
        }

        .search-input {
          padding: 0 16px 0 48px;
          height: 48px;
          border-radius: 14px;
                  border: 1.5px solid var(--border);
                  background: var(--surface);
          font-size: 14px;
          width: 100%;
          transition: all 0.3s ease;
          font-family: 'Inter', sans-serif;
                  color: var(--text-primary);
          outline: none;
        }

        .search-input:focus {
                  border-color: var(--primary);
                  box-shadow: 0 0 0 4px rgba(var(--primary-rgb), 0.12);
        }

        .contact-count {
          font-weight: 500;
          color: #8b8a9e;
          font-size: 13px;
          white-space: nowrap;
        }

        .contacts-grid {
          display: grid;
          grid-template-columns: repeat(
            auto-fill,
            minmax(280px, 1fr)
          );
          gap: 20px;
        }

        .contact-card {
                  background: var(--surface);
                  border: 1px solid var(--border);
                  border-radius: var(--radius-lg);
          padding: 24px 24px 20px;
                  transition: all 0.25s var(--ease);
                  animation: fadeInUp 0.36s var(--ease);
                  box-shadow: var(--shadow-xs);
                }

                .contact-card:hover {
                  transform: translateY(-4px);
                  border-color: var(--border-strong);
                  box-shadow: var(--shadow-md);
                }

        .contact-card-top {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 16px;
        }

        .contact-avatar {
                  width: 48px;
                  height: 48px;
                  border-radius: 50%;
                  flex-shrink: 0;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-weight: 700;
                  font-size: 16px;
                  background: linear-gradient(135deg, var(--primary), var(--sidebar-bg));
                  color: #ffffff;
                  box-shadow: 0 4px 14px rgba(var(--primary-rgb), 0.12);
                }

        .contact-card-top h3 {
          margin: 0 0 4px;
          font-size: 16px;
          font-weight: 600;
          color: #1e1b4b;
        }

        .contact-title-badge {
          display: inline-block;
          font-size: 11px;
          font-weight: 600;
                  color: var(--primary);
                  background: var(--primary-light);
          padding: 2px 12px;
          border-radius: 100px;
        }

        .contact-chip {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
                  color: var(--text-secondary);
          margin: 8px 0;
        }

        .chip-icon {
          color: #b8b0cc;
          display: flex;
          flex-shrink: 0;
          width: 16px;
        }

        .contact-card button {
                  width: 100%;
                  margin-top: 16px;
                  padding: 10px;
                  border-radius: 12px;
                  border: 1.5px solid var(--border);
                  background: transparent;
                  color: var(--heading-color);
                  font-weight: 600;
                  font-size: 13px;
                  transition: all 0.2s var(--ease);
                  cursor: pointer;
                }

                .contact-card button:hover {
                  background: var(--primary);
                  border-color: var(--primary);
                  color: #fff;
                  box-shadow: 0 6px 20px rgba(var(--primary-rgb), 0.12);
                  transform: translateY(-2px);
                }

        .skeleton-card {
          cursor: default;
          padding: 24px;
        }

        .skeleton {
          background: linear-gradient(
            90deg,
            #f5f0ff 25%,
            #faf5ff 37%,
            #f5f0ff 63%
          );
          background-size: 400% 100%;
          animation: shimmer 1.4s ease infinite;
          border-radius: 10px;
        }

        .skeleton-avatar {
          width: 48px;
          height: 48px;
          border-radius: 14px;
        }

        .skeleton-line {
          height: 12px;
          border-radius: 10px;
          margin: 6px 0;
        }

        .empty-state {
                  background: var(--surface);
                  border: 1.5px dashed var(--border-strong);
                  padding: 56px 32px;
                  border-radius: var(--radius-lg);
                  text-align: center;
                }

                .empty-icon {
                  font-size: 48px;
                  margin-bottom: 16px;
                }

                .empty-state h3 {
                  margin-bottom: 8px;
                  font-size: 18px;
                  font-weight: 600;
                  color: var(--text-primary);
                }

                .empty-state p {
                  font-size: 14px;
                  color: var(--text-secondary);
                }

                .empty-state button {
                  margin-top: 20px;
                  padding: 12px 28px;
                  border-radius: 12px;
                  border: none;
                  background: var(--primary);
                  color: #fff;
                  font-weight: 600;
                  cursor: pointer;
                }

        .pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 16px;
          margin-top: 32px;
        }

        .pagination button {
          padding: 10px 22px;
          border-radius: 12px;
          border: 1.5px solid var(--border);
          background: #ffffff;
          color: #4c1d95;
          font-weight: 600;
          cursor: pointer;
        }

        .pagination button:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .pagination span {
          color: #8b8a9e;
          font-weight: 500;
          font-size: 13px;
        }

        .error-message,
        .import-error,
        .import-success {
          padding: 14px 20px;
          border-radius: 12px;
          font-size: 13px;
          font-weight: 500;
          margin-bottom: 20px;
        }

        .error-message,
        .import-error {
          background: #fef2f2;
          color: #991b1b;
          border: 1px solid #fecaca;
        }

        .import-success {
          background: #ecfdf5;
          color: #065f46;
          border: 1px solid #a7f3d0;
        }

        .import-details {
          margin-top: 8px;
          font-size: 12px;
          opacity: 0.9;
        }

        .import-loading {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .spinner {
          width: 14px;
          height: 14px;
          border: 2px solid currentColor;
          border-top-color: transparent;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }

        .hidden-file-input {
          display: none;
        }

        @media (max-width: 900px) {
          .sidebar {
            display: none;
          }

          .dashboard-header {
            padding: 16px 4%;
            flex-wrap: wrap;
          }

          .dashboard-content {
            width: 95%;
            padding: 20px 0 40px;
          }

          .dashboard-stats {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 480px) {
          .dashboard-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .dashboard-actions {
            width: 100%;
          }

          .dashboard-stats {
            grid-template-columns: 1fr;
          }

          .contacts-grid {
            grid-template-columns: 1fr;
          }

          .contact-actions {
            width: 100%;
          }

          .add-contact-button {
            width: 100%;
            justify-content: center;
          }
        }
      `}),(0,z.jsxs)(`div`,{className:`app-shell`,children:[(0,z.jsx)(`input`,{ref:t,type:`file`,accept:`.csv,text/csv`,className:`hidden-file-input`,onChange:te}),(0,z.jsxs)(`aside`,{className:`sidebar`,children:[(0,z.jsxs)(`div`,{className:`sidebar-logo`,children:[(0,z.jsx)(`div`,{className:`sidebar-logo-icon`,children:`CM`}),(0,z.jsxs)(`div`,{className:`sidebar-logo-text`,children:[`Contact Manager`,(0,z.jsx)(`small`,{children:`Manage your contacts`})]})]}),(0,z.jsxs)(`nav`,{className:`sidebar-nav`,children:[(0,z.jsx)(`div`,{className:`sidebar-nav-label`,children:`Menu`}),(0,z.jsxs)(`button`,{className:`sidebar-link active`,onClick:()=>e(`/dashboard`),children:[(0,z.jsx)(c_,{}),`Dashboard`]}),(0,z.jsxs)(`button`,{className:`sidebar-link`,onClick:()=>e(`/contacts/new`),children:[(0,z.jsx)(l_,{}),`Add Contact`]}),(0,z.jsxs)(`button`,{className:`sidebar-link`,onClick:()=>e(`/profile`),children:[(0,z.jsx)(u_,{}),`My Profile`]}),(0,z.jsxs)(`button`,{className:`sidebar-link`,onClick:A,disabled:g,children:[(0,z.jsx)(h_,{}),g?`Importing...`:`Import Contacts`]}),(0,z.jsxs)(`button`,{className:`sidebar-link`,onClick:k,children:[(0,z.jsx)(g_,{}),`Export Contacts`]})]}),(0,z.jsx)(`div`,{className:`sidebar-divider`}),(0,z.jsxs)(`button`,{className:`sidebar-logout`,onClick:ee,children:[(0,z.jsx)(d_,{}),`Logout`]})]}),(0,z.jsxs)(`div`,{className:`main-panel`,children:[(0,z.jsxs)(`header`,{className:`dashboard-header`,children:[(0,z.jsxs)(`div`,{className:`dashboard-header-left`,children:[(0,z.jsx)(`div`,{className:`greeting-icon`,children:(0,z.jsx)(__,{})}),(0,z.jsxs)(`div`,{children:[(0,z.jsxs)(`h1`,{children:[`Good to see you,`,` `,E?.firstName||`User`]}),(0,z.jsx)(`p`,{children:`Manage your contacts from one place`})]})]}),(0,z.jsxs)(`div`,{className:`dashboard-actions`,children:[(0,z.jsx)(`button`,{className:`profile-button`,onClick:()=>e(`/profile`),children:`My Profile`}),(0,z.jsxs)(`button`,{className:`import-button`,onClick:A,disabled:g,children:[(0,z.jsx)(h_,{}),g?`Importing...`:`Import CSV`]}),(0,z.jsxs)(`button`,{className:`export-button`,onClick:k,children:[(0,z.jsx)(g_,{}),` Export CSV`]}),(0,z.jsx)(`button`,{className:`logout-button`,onClick:ee,children:`Logout`})]})]}),(0,z.jsxs)(`main`,{className:`dashboard-content`,children:[(0,z.jsx)(`div`,{className:`dashboard-stats`,children:(0,z.jsxs)(`div`,{className:`stat-card`,children:[(0,z.jsx)(`div`,{className:`stat-icon`,children:(0,z.jsx)(__,{})}),(0,z.jsx)(`span`,{children:`Total Contacts`}),(0,z.jsx)(`strong`,{children:u})]})}),y&&(0,z.jsxs)(`div`,{className:`import-success`,children:[`✅ `,y]}),x&&(0,z.jsxs)(`div`,{className:`import-error`,children:[`❌ `,x]}),(0,z.jsxs)(`div`,{className:`contacts-header`,children:[(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`h2`,{children:C===`contacts`?`Contacts`:`Analytics`}),(0,z.jsx)(`p`,{children:C===`contacts`?`Manage your personal and professional connections`:`Analytics and insights for your data`})]}),(0,z.jsxs)(`div`,{className:`contact-actions`,children:[(0,z.jsxs)(`div`,{style:{display:`flex`,gap:8,alignItems:`center`},children:[(0,z.jsx)(`button`,{className:`add-contact-button`,onClick:()=>w(`contacts`),style:C===`contacts`?{boxShadow:`0 6px 28px rgba(var(--primary-rgb), 0.28)`,transform:`translateY(-2px)`}:{background:`transparent`,border:`1.5px solid var(--border)`,color:`var(--heading-color)`},children:`Contacts`}),(0,z.jsx)(`button`,{className:`add-contact-button`,onClick:()=>w(`analytics`),style:C===`analytics`?{boxShadow:`0 6px 28px rgba(var(--primary-rgb), 0.28)`,transform:`translateY(-2px)`}:{background:`transparent`,border:`1.5px solid var(--border)`,color:`var(--heading-color)`},children:`Analytics`})]}),C===`contacts`&&(0,z.jsxs)(`button`,{className:`add-contact-button`,onClick:()=>e(`/contacts/new`),children:[(0,z.jsx)(l_,{}),`Add Contact`]})]})]}),C===`contacts`?(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(`div`,{className:`contacts-toolbar`,children:[(0,z.jsxs)(`div`,{className:`search-wrapper`,children:[(0,z.jsx)(`span`,{className:`search-icon`,children:(0,z.jsx)(f_,{})}),(0,z.jsx)(`input`,{className:`search-input`,type:`text`,placeholder:`Search contacts...`,value:i,onChange:O})]}),!f&&!m&&(0,z.jsxs)(`span`,{className:`contact-count`,children:[u,` contacts`]})]}),f&&(0,z.jsx)(`div`,{className:`contacts-grid`,children:Array.from({length:6}).map((e,t)=>(0,z.jsxs)(`div`,{className:`contact-card skeleton-card`,children:[(0,z.jsx)(`div`,{className:`skeleton skeleton-avatar`}),(0,z.jsx)(`div`,{className:`skeleton skeleton-line`,style:{width:`60%`,height:`16px`}}),(0,z.jsx)(`div`,{className:`skeleton skeleton-line`,style:{width:`40%`,height:`12px`}}),(0,z.jsx)(`div`,{className:`skeleton skeleton-line`,style:{width:`80%`,height:`12px`}}),(0,z.jsx)(`div`,{className:`skeleton skeleton-line`,style:{width:`70%`,height:`12px`}}),(0,z.jsx)(`div`,{className:`skeleton skeleton-line`,style:{width:`100%`,height:`40px`,marginTop:`12px`}})]},t))}),m&&(0,z.jsxs)(`div`,{className:`error-message`,children:[`❌ `,m]}),!f&&!m&&n.length===0&&(0,z.jsxs)(`div`,{className:`empty-state`,children:[(0,z.jsx)(`div`,{className:`empty-icon`,children:`📭`}),(0,z.jsx)(`h3`,{children:i?`No Contacts Found`:`No Contacts Yet`}),(0,z.jsx)(`p`,{children:i?`No matching contacts found.`:`Start building your contact list.`}),!i&&(0,z.jsx)(`button`,{onClick:()=>e(`/contacts/new`),children:`✨ Add Your First Contact`})]}),!f&&!m&&n.length>0&&(0,z.jsx)(`div`,{className:`contacts-grid`,children:n.map(t=>(0,z.jsxs)(`div`,{className:`contact-card`,children:[(0,z.jsxs)(`div`,{className:`contact-card-top`,children:[(0,z.jsx)(`div`,{className:`contact-avatar`,children:ne(t)}),(0,z.jsxs)(`div`,{children:[(0,z.jsxs)(`h3`,{children:[t.firstName,` `,` `,t.lastName]}),(0,z.jsx)(`span`,{className:`contact-title-badge`,children:t.title||`No title`})]})]}),(0,z.jsxs)(`div`,{className:`contact-chip`,children:[(0,z.jsx)(`span`,{className:`chip-icon`,children:(0,z.jsx)(p_,{})}),t.workEmail||`N/A`]}),(0,z.jsxs)(`div`,{className:`contact-chip`,children:[(0,z.jsx)(`span`,{className:`chip-icon`,children:(0,z.jsx)(m_,{})}),t.workPhone||`N/A`]}),(0,z.jsx)(`button`,{onClick:()=>e(`/contacts/${t.id}`),children:`View Details →`})]},t.id))}),c>1&&(0,z.jsxs)(`div`,{className:`pagination`,children:[(0,z.jsx)(`button`,{disabled:o===0,onClick:()=>s(o-1),children:`← Previous`}),(0,z.jsxs)(`span`,{children:[`Page `,o+1,` of `,c]}),(0,z.jsx)(`button`,{disabled:o>=c-1,onClick:()=>s(o+1),children:`Next →`})]})]}):(0,z.jsx)(s_,{})]})]})]})]})}var y_=()=>(0,z.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,z.jsx)(`line`,{x1:`19`,y1:`12`,x2:`5`,y2:`12`}),(0,z.jsx)(`polyline`,{points:`12 19 5 12 12 5`})]}),b_=()=>(0,z.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,z.jsx)(`path`,{d:`M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2`}),(0,z.jsx)(`circle`,{cx:`12`,cy:`7`,r:`4`})]}),x_=()=>(0,z.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,z.jsx)(`path`,{d:`M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z`}),(0,z.jsx)(`polyline`,{points:`22,6 12,13 2,6`})]}),S_=()=>(0,z.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,z.jsx)(`path`,{d:`M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z`})}),C_=()=>(0,z.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,z.jsx)(`rect`,{x:`2`,y:`7`,width:`20`,height:`14`,rx:`2`,ry:`2`}),(0,z.jsx)(`path`,{d:`M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16`})]}),w_=()=>(0,z.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,z.jsx)(`line`,{x1:`12`,y1:`5`,x2:`12`,y2:`19`}),(0,z.jsx)(`line`,{x1:`5`,y1:`12`,x2:`19`,y2:`12`})]});function T_(){let e=gt(),[t,n]=(0,v.useState)({firstName:``,lastName:``,title:``,workEmail:``,personalEmail:``,workPhone:``,homePhone:``,personalPhone:``}),[r,i]=(0,v.useState)(``),[a,o]=(0,v.useState)(!1),s=e=>{n({...t,[e.target.name]:e.target.value})};return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700;800&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background: var(--background);
        }

        /* ===== Animations ===== */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* ===== APP CONTAINER ===== */
        .app-container {
          min-height: 100vh;
                  background: var(--background);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
        }

        /* ===== FORM CARD ===== */
        .contact-form-card {
          width: 100%;
          max-width: 680px;
                  background: var(--surface);
                  border: 1px solid var(--border);
                  border-radius: var(--radius-lg);
          padding: 36px 40px;
                  box-shadow: var(--shadow-sm);
                  animation: fadeInUp 0.45s var(--ease);
        }

        /* ===== BACK BUTTON ===== */
        .back-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 12px;
          border: 1.5px solid var(--border);
          background: #ffffff;
          color: var(--heading-color);
          font-weight: 600;
          font-size: 13px;
          transition: all 0.3s ease;
          cursor: pointer;
          margin-bottom: 20px;
        }

        .back-button:hover {
                  border-color: var(--primary);
                  background: var(--primary-light);
          transform: translateX(-4px);
        }

        /* ===== HEADER ===== */
        .auth-header {
          text-align: center;
          margin-bottom: 28px;
        }

        .auth-logo {
          width: 56px;
          height: 56px;
          margin: 0 auto 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
                  background: linear-gradient(135deg, var(--primary), var(--primary-hover));
          color: #fff;
          font-size: 24px;
          font-weight: 700;
                  box-shadow: 0 4px 16px rgba(var(--primary-rgb), 0.18);
        }

        .auth-header h1 {
          font-family: 'Fraunces', serif;
          font-size: 28px;
          font-weight: 600;
          color: #1e1b4b;
          letter-spacing: -0.01em;
        }

        .auth-header .auth-subtitle {
          color: #8b8a9e;
          font-size: 14px;
          margin-top: 4px;
        }

        /* ===== ALERTS ===== */
        .error-message {
          padding: 14px 20px;
          border-radius: 12px;
          font-size: 13px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 10px;
          background: #fef2f2;
          color: #991b1b;
          border: 1px solid #fecaca;
          margin-bottom: 20px;
          animation: slideDown 0.3s ease;
        }

        /* ===== FORM ===== */
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .form-group {
          margin-bottom: 16px;
        }

        .form-group label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: var(--heading-color);
          margin-bottom: 6px;
        }

        .form-group label .label-icon {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .form-group input {
          width: 100%;
          padding: 12px 16px;
          border: 1.5px solid var(--border);
          border-radius: 12px;
          font-size: 14px;
          background: var(--surface);
          color: var(--text-primary);
          transition: all 0.3s ease;
          outline: none;
          font-family: 'Inter', sans-serif;
        }

        .form-group input::placeholder {
          color: #b8b0cc;
        }

        .form-group input:hover {
          border-color: var(--border-strong);
          background: var(--surface);
        }

        .form-group input:focus {
          border-color: var(--border-strong);
          background: #ffffff;
          box-shadow: 0 0 0 4px rgba(167, 139, 250, 0.12);
        }

        /* ===== SECTION HEADERS ===== */
        .form-section-title {
          font-size: 13px;
          font-weight: 700;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin: 24px 0 16px;
          padding-top: 20px;
          border-top: 1px solid var(--border);
        }

        .form-section-title:first-of-type {
          margin-top: 0;
          padding-top: 0;
          border-top: none;
        }

        /* ===== FORM ACTIONS ===== */
        .form-actions {
          display: flex;
          gap: 12px;
          margin-top: 28px;
          padding-top: 24px;
          border-top: 1px solid var(--border);
        }

        .form-actions button {
          flex: 1;
          padding: 13px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.18s ease;
          cursor: pointer;
        }

        .form-actions button[type="button"] {
          background: var(--surface);
          border: 1.5px solid var(--border);
          color: var(--heading-color);
        }

        .form-actions button[type="button"]:hover {
          background: rgba(var(--primary-rgb), 0.06);
          border-color: var(--border-strong);
        }

        .form-actions button[type="submit"] {
          background: linear-gradient(135deg, var(--primary), var(--sidebar-bg));
          border: none;
          color: #fff;
          box-shadow: 0 4px 16px rgba(139, 92, 246, 0.2);
        }

        .form-actions button[type="submit"]:hover:not(:disabled) {
          box-shadow: 0 6px 28px rgba(139, 92, 246, 0.35);
          transform: translateY(-2px);
        }

        .form-actions button[type="submit"]:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none !important;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 768px) {
          .app-container {
            padding: 30px 16px;
          }

          .contact-form-card {
            padding: 24px 20px;
            border-radius: 16px;
          }

          .auth-header h1 {
            font-size: 24px;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .form-actions {
            flex-direction: column;
          }
        }

        @media (max-width: 480px) {
          .contact-form-card {
            padding: 18px 14px;
          }

          .auth-header h1 {
            font-size: 20px;
          }

          .auth-logo {
            width: 48px;
            height: 48px;
            font-size: 20px;
          }

          .back-button {
            padding: 8px 16px;
            font-size: 12px;
          }
        }
      `}),(0,z.jsx)(`div`,{className:`app-container`,children:(0,z.jsxs)(`div`,{className:`contact-form-card`,children:[(0,z.jsxs)(`button`,{className:`back-button`,onClick:()=>e(`/dashboard`),children:[(0,z.jsx)(y_,{}),`Back to Contacts`]}),(0,z.jsxs)(`div`,{className:`auth-header`,children:[(0,z.jsx)(`div`,{className:`auth-logo`,children:(0,z.jsx)(w_,{})}),(0,z.jsx)(`h1`,{children:`Add New Contact`}),(0,z.jsx)(`p`,{className:`auth-subtitle`,children:`Create a new professional contact`})]}),r&&(0,z.jsxs)(`div`,{className:`error-message`,children:[`❌ `,r]}),(0,z.jsxs)(`form`,{onSubmit:async n=>{n.preventDefault(),i(``),o(!0);try{await yo.post(`/contacts`,t),e(`/dashboard`)}catch(t){if(t.response?.status===401){localStorage.removeItem(`token`),localStorage.removeItem(`user`),e(`/login`);return}i(t.response?.data?.error||`Unable to create contact.`)}finally{o(!1)}},children:[(0,z.jsx)(`div`,{className:`form-section-title`,children:`👤 Personal Information`}),(0,z.jsxs)(`div`,{className:`form-row`,children:[(0,z.jsxs)(`div`,{className:`form-group`,children:[(0,z.jsx)(`label`,{children:(0,z.jsxs)(`span`,{className:`label-icon`,children:[(0,z.jsx)(b_,{}),`First Name`]})}),(0,z.jsx)(`input`,{name:`firstName`,value:t.firstName,onChange:s,placeholder:`Enter first name`,required:!0})]}),(0,z.jsxs)(`div`,{className:`form-group`,children:[(0,z.jsx)(`label`,{children:(0,z.jsxs)(`span`,{className:`label-icon`,children:[(0,z.jsx)(b_,{}),`Last Name`]})}),(0,z.jsx)(`input`,{name:`lastName`,value:t.lastName,onChange:s,placeholder:`Enter last name`,required:!0})]})]}),(0,z.jsxs)(`div`,{className:`form-group`,children:[(0,z.jsx)(`label`,{children:(0,z.jsxs)(`span`,{className:`label-icon`,children:[(0,z.jsx)(C_,{}),`Job Title`]})}),(0,z.jsx)(`input`,{name:`title`,value:t.title,onChange:s,placeholder:`Enter job title (e.g. Software Engineer)`})]}),(0,z.jsx)(`div`,{className:`form-section-title`,children:`✉️ Email Addresses`}),(0,z.jsxs)(`div`,{className:`form-row`,children:[(0,z.jsxs)(`div`,{className:`form-group`,children:[(0,z.jsx)(`label`,{children:(0,z.jsxs)(`span`,{className:`label-icon`,children:[(0,z.jsx)(x_,{}),`Work Email`]})}),(0,z.jsx)(`input`,{type:`email`,name:`workEmail`,value:t.workEmail,onChange:s,placeholder:`office@company.com`})]}),(0,z.jsxs)(`div`,{className:`form-group`,children:[(0,z.jsx)(`label`,{children:(0,z.jsxs)(`span`,{className:`label-icon`,children:[(0,z.jsx)(x_,{}),`Personal Email`]})}),(0,z.jsx)(`input`,{type:`email`,name:`personalEmail`,value:t.personalEmail,onChange:s,placeholder:`personal@email.com`})]})]}),(0,z.jsx)(`div`,{className:`form-section-title`,children:`📞 Phone Numbers`}),(0,z.jsxs)(`div`,{className:`form-row`,children:[(0,z.jsxs)(`div`,{className:`form-group`,children:[(0,z.jsx)(`label`,{children:(0,z.jsxs)(`span`,{className:`label-icon`,children:[(0,z.jsx)(S_,{}),`Work Phone`]})}),(0,z.jsx)(`input`,{name:`workPhone`,value:t.workPhone,onChange:s,placeholder:`Enter work number`})]}),(0,z.jsxs)(`div`,{className:`form-group`,children:[(0,z.jsx)(`label`,{children:(0,z.jsxs)(`span`,{className:`label-icon`,children:[(0,z.jsx)(S_,{}),`Home Phone`]})}),(0,z.jsx)(`input`,{name:`homePhone`,value:t.homePhone,onChange:s,placeholder:`Enter home number`})]})]}),(0,z.jsxs)(`div`,{className:`form-group`,children:[(0,z.jsx)(`label`,{children:(0,z.jsxs)(`span`,{className:`label-icon`,children:[(0,z.jsx)(S_,{}),`Personal Phone`]})}),(0,z.jsx)(`input`,{name:`personalPhone`,value:t.personalPhone,onChange:s,placeholder:`Enter personal number`})]}),(0,z.jsxs)(`div`,{className:`form-actions`,children:[(0,z.jsx)(`button`,{type:`button`,onClick:()=>e(`/dashboard`),children:`Cancel`}),(0,z.jsx)(`button`,{type:`submit`,disabled:a,children:a?`Saving...`:`💾 Save Contact`})]})]})]})})]})}var E_=()=>(0,z.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,z.jsx)(`line`,{x1:`19`,y1:`12`,x2:`5`,y2:`12`}),(0,z.jsx)(`polyline`,{points:`12 19 5 12 12 5`})]}),D_=()=>(0,z.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,z.jsx)(`path`,{d:`M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7`}),(0,z.jsx)(`path`,{d:`M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z`})]}),O_=()=>(0,z.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,z.jsx)(`polyline`,{points:`3 6 5 6 21 6`}),(0,z.jsx)(`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`})]}),k_=()=>(0,z.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`28`,height:`28`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,z.jsx)(`path`,{d:`M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z`}),(0,z.jsx)(`line`,{x1:`12`,y1:`9`,x2:`12`,y2:`13`}),(0,z.jsx)(`line`,{x1:`12`,y1:`17`,x2:`12.01`,y2:`17`})]});function A_(){let{id:e}=vt(),t=gt(),[n,r]=(0,v.useState)(null),[i,a]=(0,v.useState)(!0),[o,s]=(0,v.useState)(``),[c,l]=(0,v.useState)(!1),[u,d]=(0,v.useState)(!1);(0,v.useEffect)(()=>{f()},[e]);let f=async()=>{try{a(!0),s(``);let t=await yo.get(`/contacts/${e}`);r(t.data)}catch(e){if(e.response?.status===401){localStorage.removeItem(`token`),localStorage.removeItem(`user`),t(`/login`);return}s(e.response?.data?.error||`Unable to load contact details.`)}finally{a(!1)}},p=async()=>{try{l(!0),s(``),await yo.delete(`/contacts/${e}`),t(`/dashboard`)}catch(e){if(e.response?.status===401){localStorage.removeItem(`token`),localStorage.removeItem(`user`),t(`/login`);return}s(e.response?.data?.error||`Unable to delete contact.`),l(!1),d(!1)}},m=()=>{localStorage.removeItem(`token`),localStorage.removeItem(`user`),t(`/login`)};if(i)return(0,z.jsxs)(`div`,{style:{minHeight:`100vh`,background:`var(--background)`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:[(0,z.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,z.jsx)(`div`,{style:{width:`48px`,height:`48px`,border:`3px solid var(--border)`,borderTopColor:`var(--primary)`,borderRadius:`50%`,margin:`0 auto 16px`,animation:`spin 0.7s linear infinite`}}),(0,z.jsx)(`p`,{style:{color:`var(--text-secondary)`,fontSize:`14px`},children:`Loading contact details...`})]}),(0,z.jsx)(`style`,{children:`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `})]});if(o&&!n)return(0,z.jsx)(`div`,{style:{minHeight:`100vh`,background:`var(--background)`,padding:`40px 5%`},children:(0,z.jsxs)(`div`,{style:{maxWidth:`600px`,margin:`0 auto`},children:[(0,z.jsxs)(`div`,{style:{padding:`14px 20px`,borderRadius:`12px`,background:`var(--danger-light)`,color:`var(--danger)`,border:`1px solid rgba(220,34,34,0.12)`,marginBottom:`20px`},children:[`❌ `,o]}),(0,z.jsx)(`button`,{onClick:()=>t(`/dashboard`),style:{padding:`12px 24px`,borderRadius:`12px`,border:`none`,background:`var(--primary)`,color:`#fff`,fontWeight:600,fontSize:`14px`,cursor:`pointer`,boxShadow:`0 4px 16px rgba(var(--primary-rgb), 0.18)`,transition:`all 0.3s ease`},onMouseEnter:e=>{e.currentTarget.style.boxShadow=`0 6px 28px rgba(var(--primary-rgb), 0.28)`,e.currentTarget.style.transform=`translateY(-2px)`},onMouseLeave:e=>{e.currentTarget.style.boxShadow=`0 4px 16px rgba(var(--primary-rgb), 0.18)`,e.currentTarget.style.transform=`translateY(0)`},children:`← Back to Contacts`})]})});if(!n)return null;let h=((n.firstName?.[0]||``)+(n.lastName?.[0]||``)).toUpperCase()||`?`;return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700;800&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background: var(--background);
        }

        /* ===== Animations ===== */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(24px) scale(0.96); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* ===== APP CONTAINER ===== */
        .app-container {
          min-height: 100vh;
          background: var(--background);
        }

        /* ===== HEADER ===== */
        .dashboard-header {
          min-height: 72px;
          padding: 16px 5%;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: sticky;
          top: 0;
          z-index: 20;
          gap: 16px;
        }

        .dashboard-header h1 {
          margin: 0;
          font-size: 20px;
          color: #1e1b4b;
          font-weight: 700;
          letter-spacing: -0.01em;
        }

        .dashboard-header p {
          margin-top: 2px;
          color: #8b8a9e;
          font-size: 13px;
        }

        .logout-button {
          padding: 10px 20px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 13px;
          transition: all 0.3s ease;
          cursor: pointer;
          background: #fef2f2;
          border: 1.5px solid #fecaca;
          color: #ef4444;
        }

        .logout-button:hover {
          background: #fee2e2;
          border-color: #fca5a5;
        }

        /* ===== CONTENT ===== */
        .dashboard-content {
          width: 92%;
          max-width: 900px;
          margin: 0 auto;
          padding: 28px 0 60px;
        }

        /* ===== BACK BUTTON ===== */
        .back-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 12px;
          border: 1.5px solid var(--border);
          background: var(--surface);
          color: var(--heading-color);
          font-weight: 600;
          font-size: 13px;
          transition: all 0.18s ease;
          cursor: pointer;
          margin-bottom: 20px;
        }

        .back-button:hover {
          border-color: var(--border-strong);
          background: rgba(var(--primary-rgb), 0.06);
          transform: translateX(-4px);
        }

        /* ===== DETAILS CARD ===== */
        .contact-details-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 36px 40px;
          box-shadow: 0 6px 24px rgba(16,24,40,0.04);
          animation: fadeInUp 0.5s ease;
        }

        .contact-details-header {
          padding-bottom: 24px;
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .contact-details-header .avatar-large {
          width: 72px;
          height: 72px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--primary), var(--sidebar-bg));
          color: #ffffff;
          font-weight: 700;
          font-size: 24px;
          flex-shrink: 0;
        }

        .contact-details-header h2 {
          font-size: 24px;
          font-weight: 700;
          color: var(--text-primary);
          letter-spacing: -0.01em;
        }

        .contact-details-header p {
          color: var(--primary);
          font-weight: 600;
          font-size: 14px;
          margin-top: 4px;
        }

        /* ===== SECTIONS ===== */
        .contact-details-section {
          padding: 24px 0;
          border-bottom: 1px solid var(--border);
        }

        .contact-details-section:last-of-type {
          border-bottom: none;
        }

        .contact-details-section h3 {
          font-size: 13px;
          font-weight: 700;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 16px;
        }

        .details-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .detail-item {
          padding: 14px 18px;
          border-radius: 12px;
          background: var(--surface);
          border: 1px solid var(--border);
          transition: all 0.18s ease;
        }

        .detail-item:hover {
          border-color: var(--border-strong);
          background: var(--surface);
        }

        .detail-item span {
          display: block;
          font-size: 11px;
          font-weight: 600;
          color: #8b8a9e;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 4px;
        }

        .detail-item strong {
          font-size: 15px;
          font-weight: 600;
          color: #1e1b4b;
          word-break: break-word;
        }

        /* ===== ACTION BUTTONS ===== */
        .contact-details-actions {
          display: flex;
          gap: 12px;
          margin-top: 28px;
          padding-top: 24px;
          border-top: 1px solid var(--border);
        }

        .edit-contact-button,
        .delete-contact-button {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 13px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.3s ease;
          cursor: pointer;
          border: 1.5px solid transparent;
        }

        .edit-contact-button {
          background: var(--sidebar-bg);
          border-color: transparent;
          color: #fff;
        }

        .edit-contact-button:hover {
          background: var(--heading-color);
          box-shadow: 0 8px 32px rgba(30,58,91,0.12);
          transform: translateY(-2px);
        }

        .delete-contact-button {
          background: var(--danger-light);
          border-color: rgba(220,34,34,0.12);
          color: var(--danger);
        }

        .delete-contact-button:hover:not(:disabled) {
          background: #fee2e2;
          border-color: rgba(220,34,34,0.28);
          transform: translateY(-2px);
        }

        .delete-contact-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* ===== ERROR ===== */
        .error-message {
          padding: 14px 20px;
          border-radius: 12px;
          font-size: 13px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 10px;
          background: #fef2f2;
          color: #991b1b;
          border: 1px solid #fecaca;
          margin-bottom: 20px;
          animation: slideDown 0.3s ease;
        }

        /* ===== MODAL ===== */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(30, 27, 75, 0.5);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
          padding: 20px;
          animation: fadeIn 0.2s ease;
        }

        .modal-box {
          width: 100%;
          max-width: 400px;
          background: var(--surface);
          border-radius: 20px;
          padding: 36px 32px 28px;
          text-align: center;
          box-shadow: 0 20px 60px rgba(16,24,40,0.08);
          animation: modalSlideUp 0.3s ease;
          border: 1px solid var(--border);
        }

        .modal-warning-icon {
          width: 64px;
          height: 64px;
          margin: 0 auto 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #fef2f2;
          color: #ef4444;
        }

        .modal-box h3 {
          font-size: 20px;
          font-weight: 700;
          color: #1e1b4b;
          margin-bottom: 8px;
        }

        .modal-text {
          font-size: 14px;
          color: #6d5a8a;
          line-height: 1.7;
          margin-bottom: 28px;
        }

        .modal-text strong {
          color: #1e1b4b;
        }

        .modal-actions {
          display: flex;
          gap: 10px;
        }

        .modal-cancel-button,
        .modal-confirm-delete-button {
          flex: 1;
          padding: 12px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.3s ease;
          cursor: pointer;
          border: 1.5px solid transparent;
        }

        .modal-cancel-button {
          background: #f5f0ff;
          border-color: var(--border);
          color: #4c1d95;
        }

        .modal-cancel-button:hover:not(:disabled) {
          background: #f3e8ff;
          border-color: #d8b4fe;
        }

        .modal-confirm-delete-button {
          background: #ef4444;
          color: #fff;
          box-shadow: 0 4px 16px rgba(239, 68, 68, 0.2);
        }

        .modal-confirm-delete-button:hover:not(:disabled) {
          background: #dc2626;
          box-shadow: 0 6px 24px rgba(239, 68, 68, 0.3);
          transform: translateY(-2px);
        }

        .modal-cancel-button:disabled,
        .modal-confirm-delete-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 768px) {
          .dashboard-header {
            padding: 14px 4%;
            flex-wrap: wrap;
          }

          .dashboard-header h1 {
            font-size: 18px;
          }

          .dashboard-content {
            width: 95%;
            padding: 20px 0 40px;
          }

          .contact-details-card {
            padding: 24px 20px;
            border-radius: 16px;
          }

          .contact-details-header {
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
          }

          .details-grid {
            grid-template-columns: 1fr;
          }

          .contact-details-actions {
            flex-direction: column;
          }

          .modal-box {
            padding: 28px 20px 24px;
          }
        }

        @media (max-width: 480px) {
          .contact-details-card {
            padding: 18px 14px;
          }

          .contact-details-header .avatar-large {
            width: 60px;
            height: 60px;
            font-size: 20px;
          }

          .contact-details-header h2 {
            font-size: 20px;
          }

          .modal-box {
            padding: 24px 16px 20px;
          }
        }
      `}),(0,z.jsxs)(`div`,{className:`app-container`,children:[(0,z.jsxs)(`header`,{className:`dashboard-header`,children:[(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`h1`,{children:`📇 Contact Details`}),(0,z.jsx)(`p`,{children:`View and manage contact information`})]}),(0,z.jsx)(`button`,{className:`logout-button`,onClick:m,children:`Logout`})]}),(0,z.jsxs)(`main`,{className:`dashboard-content`,children:[(0,z.jsxs)(`button`,{className:`back-button`,onClick:()=>t(`/dashboard`),children:[(0,z.jsx)(E_,{}),`Back to Contacts`]}),(0,z.jsxs)(`div`,{className:`contact-details-card`,children:[(0,z.jsxs)(`div`,{className:`contact-details-header`,children:[(0,z.jsx)(`div`,{className:`avatar-large`,children:h}),(0,z.jsxs)(`div`,{children:[(0,z.jsxs)(`h2`,{children:[n.firstName,` `,n.lastName]}),(0,z.jsx)(`p`,{children:n.title||`No title`})]})]}),o&&(0,z.jsxs)(`div`,{className:`error-message`,children:[`❌ `,o]}),(0,z.jsxs)(`div`,{className:`contact-details-section`,children:[(0,z.jsx)(`h3`,{children:`📋 Contact Information`}),(0,z.jsxs)(`div`,{className:`details-grid`,children:[(0,z.jsxs)(`div`,{className:`detail-item`,children:[(0,z.jsx)(`span`,{children:`First Name`}),(0,z.jsx)(`strong`,{children:n.firstName||`N/A`})]}),(0,z.jsxs)(`div`,{className:`detail-item`,children:[(0,z.jsx)(`span`,{children:`Last Name`}),(0,z.jsx)(`strong`,{children:n.lastName||`N/A`})]}),(0,z.jsxs)(`div`,{className:`detail-item`,children:[(0,z.jsx)(`span`,{children:`Title`}),(0,z.jsx)(`strong`,{children:n.title||`N/A`})]})]})]}),(0,z.jsxs)(`div`,{className:`contact-details-section`,children:[(0,z.jsx)(`h3`,{children:`✉️ Email Addresses`}),(0,z.jsxs)(`div`,{className:`details-grid`,children:[(0,z.jsxs)(`div`,{className:`detail-item`,children:[(0,z.jsx)(`span`,{children:`Work Email`}),(0,z.jsx)(`strong`,{children:n.workEmail||`N/A`})]}),(0,z.jsxs)(`div`,{className:`detail-item`,children:[(0,z.jsx)(`span`,{children:`Personal Email`}),(0,z.jsx)(`strong`,{children:n.personalEmail||`N/A`})]})]})]}),(0,z.jsxs)(`div`,{className:`contact-details-section`,children:[(0,z.jsx)(`h3`,{children:`📞 Phone Numbers`}),(0,z.jsxs)(`div`,{className:`details-grid`,children:[(0,z.jsxs)(`div`,{className:`detail-item`,children:[(0,z.jsx)(`span`,{children:`Work Phone`}),(0,z.jsx)(`strong`,{children:n.workPhone||`N/A`})]}),(0,z.jsxs)(`div`,{className:`detail-item`,children:[(0,z.jsx)(`span`,{children:`Home Phone`}),(0,z.jsx)(`strong`,{children:n.homePhone||`N/A`})]}),(0,z.jsxs)(`div`,{className:`detail-item`,children:[(0,z.jsx)(`span`,{children:`Personal Phone`}),(0,z.jsx)(`strong`,{children:n.personalPhone||`N/A`})]})]})]}),(0,z.jsxs)(`div`,{className:`contact-details-actions`,children:[(0,z.jsxs)(`button`,{className:`edit-contact-button`,onClick:()=>t(`/contacts/${n.id}/edit`),children:[(0,z.jsx)(D_,{}),`Edit Contact`]}),(0,z.jsxs)(`button`,{className:`delete-contact-button`,onClick:()=>d(!0),disabled:c,children:[(0,z.jsx)(O_,{}),c?`Deleting...`:`Delete Contact`]})]})]})]}),u&&(0,z.jsx)(`div`,{className:`modal-overlay`,onClick:()=>!c&&d(!1),children:(0,z.jsxs)(`div`,{className:`modal-box`,onClick:e=>e.stopPropagation(),children:[(0,z.jsx)(`div`,{className:`modal-warning-icon`,children:(0,z.jsx)(k_,{})}),(0,z.jsx)(`h3`,{children:`Delete Contact?`}),(0,z.jsxs)(`p`,{className:`modal-text`,children:[`Are you sure you want to delete`,` `,(0,z.jsxs)(`strong`,{children:[n.firstName,` `,n.lastName]}),`?`,(0,z.jsx)(`br`,{}),`This action cannot be undone.`]}),(0,z.jsxs)(`div`,{className:`modal-actions`,children:[(0,z.jsx)(`button`,{className:`modal-cancel-button`,onClick:()=>d(!1),disabled:c,children:`Cancel`}),(0,z.jsx)(`button`,{className:`modal-confirm-delete-button`,onClick:p,disabled:c,children:c?`Deleting...`:`Yes, Delete`})]})]})})]})]})}var j_=()=>(0,z.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.5`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,z.jsx)(`line`,{x1:`19`,y1:`12`,x2:`5`,y2:`12`}),(0,z.jsx)(`polyline`,{points:`12 19 5 12 12 5`})]}),M_=()=>(0,z.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,z.jsx)(`path`,{d:`M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2`}),(0,z.jsx)(`circle`,{cx:`12`,cy:`7`,r:`4`})]}),N_=()=>(0,z.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,z.jsx)(`path`,{d:`M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z`}),(0,z.jsx)(`polyline`,{points:`22,6 12,13 2,6`})]}),P_=()=>(0,z.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,z.jsx)(`path`,{d:`M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z`})}),F_=()=>(0,z.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,z.jsx)(`rect`,{x:`2`,y:`7`,width:`20`,height:`14`,rx:`2`,ry:`2`}),(0,z.jsx)(`path`,{d:`M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16`})]});function I_(){let{id:e}=vt(),t=gt(),[n,r]=(0,v.useState)({firstName:``,lastName:``,title:``,workEmail:``,personalEmail:``,workPhone:``,homePhone:``,personalPhone:``}),[i,a]=(0,v.useState)(!0),[o,s]=(0,v.useState)(!1),[c,l]=(0,v.useState)(``);(0,v.useEffect)(()=>{u()},[e]);let u=async()=>{try{a(!0),l(``);let t=await yo.get(`/contacts/${e}`);r({firstName:t.data.firstName||``,lastName:t.data.lastName||``,title:t.data.title||``,workEmail:t.data.workEmail||``,personalEmail:t.data.personalEmail||``,workPhone:t.data.workPhone||``,homePhone:t.data.homePhone||``,personalPhone:t.data.personalPhone||``})}catch(e){if(e.response?.status===401){localStorage.removeItem(`token`),localStorage.removeItem(`user`),t(`/login`);return}l(e.response?.data?.error||`Unable to load contact.`)}finally{a(!1)}},d=e=>{r({...n,[e.target.name]:e.target.value})};return i?(0,z.jsxs)(`div`,{style:{minHeight:`100vh`,background:`var(--background)`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:[(0,z.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,z.jsx)(`div`,{style:{width:`48px`,height:`48px`,border:`3px solid var(--border)`,borderTopColor:`var(--primary)`,borderRadius:`50%`,margin:`0 auto 16px`,animation:`spin 0.7s linear infinite`}}),(0,z.jsx)(`p`,{style:{color:`var(--text-secondary)`,fontSize:`14px`},children:`Loading contact...`})]}),(0,z.jsx)(`style`,{children:`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `})]}):(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700;800&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background: var(--background);
        }

        /* ===== Animations ===== */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* ===== APP CONTAINER ===== */
        .app-container {
          min-height: 100vh;
          background: var(--background);
        }

        /* ===== HEADER ===== */
        .dashboard-header {
          min-height: 72px;
          padding: 16px 5%;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: sticky;
          top: 0;
          z-index: 20;
          gap: 16px;
        }

        .dashboard-header h1 {
          margin: 0;
          font-size: 20px;
          color: #1e1b4b;
          font-weight: 700;
          letter-spacing: -0.01em;
        }

        .dashboard-header p {
          margin-top: 2px;
          color: #8b8a9e;
          font-size: 13px;
        }

        .logout-button {
          padding: 10px 20px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 13px;
          transition: all 0.3s ease;
          cursor: pointer;
          background: #fef2f2;
          border: 1.5px solid #fecaca;
          color: #ef4444;
        }

        .logout-button:hover {
          background: #fee2e2;
          border-color: #fca5a5;
        }

        /* ===== CONTENT ===== */
        .dashboard-content {
          width: 92%;
          max-width: 680px;
          margin: 0 auto;
          padding: 28px 0 60px;
        }

        /* ===== BACK BUTTON ===== */
        .back-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 12px;
          border: 1.5px solid var(--border-strong);
          background: var(--surface);
          color: var(--heading-color);
          font-weight: 600;
          font-size: 13px;
          transition: all 0.3s ease;
          cursor: pointer;
          margin-bottom: 20px;
        }

        .back-button:hover {
          border-color: var(--primary-hover);
          background: rgba(var(--primary-rgb), 0.06);
          transform: translateX(-4px);
        }

        /* ===== FORM CARD ===== */
        .contact-form-card {
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 36px 40px;
          box-shadow: 0 4px 20px rgba(139, 92, 246, 0.04);
          animation: fadeInUp 0.5s ease;
        }

        .contact-form-card h1 {
          font-family: 'Fraunces', serif;
          font-size: 28px;
          font-weight: 600;
          color: #1e1b4b;
          letter-spacing: -0.01em;
          margin-bottom: 4px;
        }

        .contact-form-card .auth-subtitle {
          color: #8b8a9e;
          font-size: 14px;
          margin-bottom: 24px;
        }

        /* ===== ALERTS ===== */
        .error-message {
          padding: 14px 20px;
          border-radius: 12px;
          font-size: 13px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 10px;
          background: #fef2f2;
          color: #991b1b;
          border: 1px solid #fecaca;
          margin-bottom: 20px;
          animation: slideDown 0.3s ease;
        }

        /* ===== FORM ===== */
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .form-group {
          margin-bottom: 16px;
        }

        .form-group label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: #4c1d95;
          margin-bottom: 6px;
        }

        .form-group label .label-icon {
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .form-group input {
          width: 100%;
          padding: 12px 16px;
          border: 1.5px solid var(--border);
          border-radius: 12px;
          font-size: 14px;
          background: #faf5ff;
          color: #1e1b4b;
          transition: all 0.3s ease;
          outline: none;
          font-family: 'Inter', sans-serif;
        }

        .form-group input::placeholder {
          color: #b8b0cc;
        }

        .form-group input:hover {
          border-color: #d8b4fe;
          background: #ffffff;
        }

        .form-group input:focus {
          border-color: var(--border-strong);
          background: #ffffff;
          box-shadow: 0 0 0 4px rgba(167, 139, 250, 0.12);
        }

        /* ===== SECTION HEADERS ===== */
        .form-section-title {
          font-size: 13px;
          font-weight: 700;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin: 24px 0 16px;
          padding-top: 20px;
          border-top: 1px solid var(--border);
        }

        .form-section-title:first-of-type {
          margin-top: 0;
          padding-top: 0;
          border-top: none;
        }

        /* ===== FORM ACTIONS ===== */
        .form-actions {
          display: flex;
          gap: 12px;
          margin-top: 28px;
          padding-top: 24px;
          border-top: 1px solid var(--border);
        }

        .form-actions button {
          flex: 1;
          padding: 13px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.18s ease;
          cursor: pointer;
        }

        .form-actions button[type="button"] {
          background: var(--surface);
          border: 1.5px solid var(--border);
          color: var(--heading-color);
        }

        .form-actions button[type="button"]:hover {
          background: #f5f0ff;
          border-color: #d8b4fe;
        }

        .form-actions button[type="submit"] {
          background: linear-gradient(135deg, var(--primary), var(--sidebar-bg));
          border: none;
          color: #fff;
          box-shadow: 0 4px 16px rgba(139, 92, 246, 0.2);
        }

        .form-actions button[type="submit"]:hover:not(:disabled) {
          box-shadow: 0 6px 28px rgba(139, 92, 246, 0.35);
          transform: translateY(-2px);
        }

        .form-actions button[type="submit"]:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none !important;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 768px) {
          .dashboard-header {
            padding: 14px 4%;
            flex-wrap: wrap;
          }

          .dashboard-header h1 {
            font-size: 18px;
          }

          .dashboard-content {
            width: 95%;
            padding: 20px 0 40px;
          }

          .contact-form-card {
            padding: 24px 20px;
            border-radius: 16px;
          }

          .contact-form-card h1 {
            font-size: 24px;
          }

          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .form-actions {
            flex-direction: column;
          }
        }

        @media (max-width: 480px) {
          .contact-form-card {
            padding: 18px 14px;
          }

          .contact-form-card h1 {
            font-size: 20px;
          }

          .dashboard-header {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}),(0,z.jsxs)(`div`,{className:`app-container`,children:[(0,z.jsxs)(`header`,{className:`dashboard-header`,children:[(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`h1`,{children:`✏️ Edit Contact`}),(0,z.jsx)(`p`,{children:`Update your contact information`})]}),(0,z.jsx)(`button`,{className:`logout-button`,onClick:()=>{localStorage.removeItem(`token`),localStorage.removeItem(`user`),t(`/login`)},children:`Logout`})]}),(0,z.jsxs)(`main`,{className:`dashboard-content`,children:[(0,z.jsxs)(`button`,{className:`back-button`,onClick:()=>t(`/contacts/${e}`),children:[(0,z.jsx)(j_,{}),`Back to Contact`]}),(0,z.jsxs)(`div`,{className:`contact-form-card`,children:[(0,z.jsx)(`h1`,{children:`Edit Contact`}),(0,z.jsx)(`p`,{className:`auth-subtitle`,children:`Update your contact information`}),c&&(0,z.jsxs)(`div`,{className:`error-message`,children:[`❌ `,c]}),(0,z.jsxs)(`form`,{onSubmit:async r=>{r.preventDefault();try{s(!0),l(``),await yo.put(`/contacts/${e}`,n),t(`/contacts/${e}`)}catch(e){if(e.response?.status===401){localStorage.removeItem(`token`),localStorage.removeItem(`user`),t(`/login`);return}l(e.response?.data?.error||`Unable to update contact.`)}finally{s(!1)}},children:[(0,z.jsx)(`div`,{className:`form-section-title`,children:`👤 Personal Information`}),(0,z.jsxs)(`div`,{className:`form-row`,children:[(0,z.jsxs)(`div`,{className:`form-group`,children:[(0,z.jsx)(`label`,{children:(0,z.jsxs)(`span`,{className:`label-icon`,children:[(0,z.jsx)(M_,{}),`First Name`]})}),(0,z.jsx)(`input`,{type:`text`,name:`firstName`,value:n.firstName,onChange:d,placeholder:`Enter first name`,required:!0})]}),(0,z.jsxs)(`div`,{className:`form-group`,children:[(0,z.jsx)(`label`,{children:(0,z.jsxs)(`span`,{className:`label-icon`,children:[(0,z.jsx)(M_,{}),`Last Name`]})}),(0,z.jsx)(`input`,{type:`text`,name:`lastName`,value:n.lastName,onChange:d,placeholder:`Enter last name`,required:!0})]})]}),(0,z.jsxs)(`div`,{className:`form-group`,children:[(0,z.jsx)(`label`,{children:(0,z.jsxs)(`span`,{className:`label-icon`,children:[(0,z.jsx)(F_,{}),`Title`]})}),(0,z.jsx)(`input`,{type:`text`,name:`title`,value:n.title,onChange:d,placeholder:`Enter job title`})]}),(0,z.jsx)(`div`,{className:`form-section-title`,children:`✉️ Email Addresses`}),(0,z.jsxs)(`div`,{className:`form-group`,children:[(0,z.jsx)(`label`,{children:(0,z.jsxs)(`span`,{className:`label-icon`,children:[(0,z.jsx)(N_,{}),`Work Email`]})}),(0,z.jsx)(`input`,{type:`email`,name:`workEmail`,value:n.workEmail,onChange:d,placeholder:`Enter work email`})]}),(0,z.jsxs)(`div`,{className:`form-group`,children:[(0,z.jsx)(`label`,{children:(0,z.jsxs)(`span`,{className:`label-icon`,children:[(0,z.jsx)(N_,{}),`Personal Email`]})}),(0,z.jsx)(`input`,{type:`email`,name:`personalEmail`,value:n.personalEmail,onChange:d,placeholder:`Enter personal email`})]}),(0,z.jsx)(`div`,{className:`form-section-title`,children:`📞 Phone Numbers`}),(0,z.jsxs)(`div`,{className:`form-group`,children:[(0,z.jsx)(`label`,{children:(0,z.jsxs)(`span`,{className:`label-icon`,children:[(0,z.jsx)(P_,{}),`Work Phone`]})}),(0,z.jsx)(`input`,{type:`text`,name:`workPhone`,value:n.workPhone,onChange:d,placeholder:`Enter work phone`})]}),(0,z.jsxs)(`div`,{className:`form-group`,children:[(0,z.jsx)(`label`,{children:(0,z.jsxs)(`span`,{className:`label-icon`,children:[(0,z.jsx)(P_,{}),`Home Phone`]})}),(0,z.jsx)(`input`,{type:`text`,name:`homePhone`,value:n.homePhone,onChange:d,placeholder:`Enter home phone`})]}),(0,z.jsxs)(`div`,{className:`form-group`,children:[(0,z.jsx)(`label`,{children:(0,z.jsxs)(`span`,{className:`label-icon`,children:[(0,z.jsx)(P_,{}),`Personal Phone`]})}),(0,z.jsx)(`input`,{type:`text`,name:`personalPhone`,value:n.personalPhone,onChange:d,placeholder:`Enter personal phone`})]}),(0,z.jsxs)(`div`,{className:`form-actions`,children:[(0,z.jsx)(`button`,{type:`button`,onClick:()=>t(`/contacts/${e}`),children:`Cancel`}),(0,z.jsx)(`button`,{type:`submit`,disabled:o,children:o?`Updating...`:`💾 Update Contact`})]})]})]})]})]})]})}var L_=()=>(0,z.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,z.jsx)(`path`,{d:`M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2`}),(0,z.jsx)(`circle`,{cx:`12`,cy:`7`,r:`4`})]}),R_=()=>(0,z.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,z.jsx)(`rect`,{x:`3`,y:`11`,width:`18`,height:`11`,rx:`2`,ry:`2`}),(0,z.jsx)(`path`,{d:`M7 11V7a5 5 0 0 1 10 0v4`})]}),z_=()=>(0,z.jsxs)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,z.jsx)(`path`,{d:`M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z`}),(0,z.jsx)(`polyline`,{points:`22,6 12,13 2,6`})]}),B_=()=>(0,z.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,z.jsx)(`path`,{d:`M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z`})}),V_=()=>(0,z.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`3`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,z.jsx)(`polyline`,{points:`20 6 9 17 4 12`})});function H_(){let e=gt(),[t,n]=(0,v.useState)(null);(0,v.useEffect)(()=>{try{let e=localStorage.getItem(`user`);e&&n(JSON.parse(e))}catch(t){console.error(`Failed to parse user data:`,t),localStorage.removeItem(`user`),e(`/login`,{replace:!0})}},[e]);let[r,i]=(0,v.useState)(!1),[a,o]=(0,v.useState)({currentPassword:``,newPassword:``,confirmPassword:``}),[s,c]=(0,v.useState)(``),[l,u]=(0,v.useState)(``),[d,f]=(0,v.useState)(!1),p=e=>{o({...a,[e.target.name]:e.target.value})};return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700;800&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background: var(--background);
        }

        /* ===== Animations ===== */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }

        /* ===== APP CONTAINER ===== */
        .app-container {
          min-height: 100vh;
          background: var(--background);
        }

        /* ===== HEADER ===== */
        .dashboard-header {
          min-height: 72px;
          padding: 16px 5%;
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: sticky;
          top: 0;
          z-index: 20;
          gap: 16px;
        }

        .dashboard-header h1 {
          margin: 0;
          font-size: 20px;
          color: #1e1b4b;
          font-weight: 700;
          letter-spacing: -0.01em;
        }

        .dashboard-header p {
          margin-top: 2px;
          color: #8b8a9e;
          font-size: 13px;
        }

        .dashboard-actions {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .back-button {
          padding: 10px 20px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 13px;
          transition: all 0.3s ease;
          cursor: pointer;
          background: rgba(var(--primary-rgb), 0.06);
          border: 1.5px solid var(--border-strong);
          color: var(--primary);
        }

        .back-button:hover {
          background: rgba(var(--primary-rgb), 0.10);
          border-color: var(--primary-hover);
        }

        .logout-button {
          padding: 10px 20px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 13px;
          transition: all 0.3s ease;
          cursor: pointer;
          background: #fef2f2;
          border: 1.5px solid #fecaca;
          color: #ef4444;
        }

        .logout-button:hover {
          background: #fee2e2;
          border-color: #fca5a5;
        }

        /* ===== CONTENT ===== */
        .dashboard-content {
          width: 92%;
          max-width: 780px;
          margin: 0 auto;
          padding: 28px 0 60px;
        }

        /* ===== ALERTS ===== */
        .error-message {
          padding: 14px 20px;
          border-radius: 12px;
          font-size: 13px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 10px;
          background: #fef2f2;
          color: #991b1b;
          border: 1px solid #fecaca;
          margin-bottom: 20px;
          animation: slideDown 0.3s ease;
        }

        .success-message {
          padding: 14px 20px;
          border-radius: 12px;
          font-size: 13px;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 10px;
          background: #ecfdf5;
          color: #065f46;
          border: 1px solid #a7f3d0;
          margin-bottom: 20px;
          animation: slideDown 0.3s ease;
        }

        /* ===== PROFILE CARD ===== */
        .profile-card {
          background: #ffffff;
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 36px 40px;
          box-shadow: 0 4px 20px rgba(139, 92, 246, 0.04);
          animation: fadeInUp 0.5s ease;
        }

        /* ===== PROFILE HEADER ===== */
        .profile-header {
          display: flex;
          align-items: center;
          gap: 24px;
          padding-bottom: 28px;
          border-bottom: 1px solid var(--border);
          margin-bottom: 28px;
        }

        .profile-avatar {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, var(--primary), var(--sidebar-bg));
          color: #fff;
          font-size: 30px;
          font-weight: 700;
          flex-shrink: 0;
          box-shadow: 0 6px 20px rgba(var(--primary-rgb), 0.14);
        }

        .profile-header h2 {
          font-size: 24px;
          font-weight: 700;
          color: #1e1b4b;
          letter-spacing: -0.01em;
        }

        .profile-header p {
          color: #8b8a9e;
          font-size: 14px;
          margin-top: 4px;
        }

        /* ===== PROFILE SECTION ===== */
        .profile-section h3 {
          font-size: 13px;
          font-weight: 700;
          color: #8b8a9e;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 16px;
        }

        .details-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          margin-bottom: 24px;
        }

        .detail-item {
          padding: 14px 18px;
          border-radius: 12px;
          background: #faf5ff;
          border: 1px solid var(--border);
          transition: all 0.3s ease;
        }

        .detail-item:hover {
          border-color: var(--border);
          background: #f5f0ff;
        }

        .detail-item .detail-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 600;
          color: #8b8a9e;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 4px;
        }

        .detail-item .detail-label svg {
          opacity: 0.7;
        }

        .detail-item strong {
          display: block;
          font-size: 15px;
          font-weight: 600;
          color: #1e1b4b;
          word-break: break-word;
          margin-top: 2px;
        }

        .status-badge {
          display: inline-block;
          padding: 2px 14px;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 600;
          background: #ecfdf5;
          color: #065f46;
          margin-top: 2px;
        }

        /* ===== CHANGE PASSWORD BUTTON ===== */
        .change-password-btn {
          width: 100%;
          padding: 14px;
          border: 1.5px dashed #d8b4fe;
          border-radius: 12px;
          background: #faf5ff;
          color: #7c3aed;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.3s ease;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .change-password-btn:hover {
          background: var(--primary-light);
          border-color: #c084fc;
          transform: translateY(-2px);
        }

        /* ===== PASSWORD SECTION ===== */
        .password-section {
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid var(--border);
        }

        .password-section h3 {
          font-size: 13px;
          font-weight: 700;
          color: #8b8a9e;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 18px;
        }

        /* ===== FORM ===== */
        .form-group {
          margin-bottom: 16px;
        }

        .form-group label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: #4c1d95;
          margin-bottom: 6px;
        }

        .form-group input {
          width: 100%;
          padding: 12px 16px;
          border: 1.5px solid #e9d5ff;
          border-radius: 12px;
          font-size: 14px;
          background: #faf5ff;
          color: #1e1b4b;
          transition: all 0.3s ease;
          outline: none;
          font-family: 'Inter', sans-serif;
        }

        .form-group input::placeholder {
          color: #b8b0cc;
        }

        .form-group input:hover {
          border-color: #d8b4fe;
          background: #ffffff;
        }

        .form-group input:focus {
          border-color: var(--border-strong);
          background: #ffffff;
          box-shadow: 0 0 0 4px rgba(167, 139, 250, 0.12);
        }

        .form-actions {
          display: flex;
          gap: 12px;
          margin-top: 20px;
        }

        .form-actions button {
          flex: 1;
          padding: 12px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .form-actions button[type="button"] {
          background: #ffffff;
          border: 1.5px solid #e9d5ff;
          color: #4c1d95;
        }

        .form-actions button[type="button"]:hover {
          background: #f5f0ff;
          border-color: #d8b4fe;
        }

        .form-actions button[type="submit"] {
          background: var(--primary);
          border: none;
          color: #fff;
          box-shadow: 0 6px 20px rgba(var(--primary-rgb), 0.12);
        }

        .form-actions button[type="submit"]:hover:not(:disabled) {
          box-shadow: 0 10px 40px rgba(var(--primary-rgb), 0.18);
          transform: translateY(-2px);
        }

        .form-actions button[type="submit"]:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 768px) {
          .dashboard-header {
            padding: 14px 4%;
            flex-wrap: wrap;
          }

          .dashboard-header h1 {
            font-size: 18px;
          }

          .dashboard-content {
            width: 95%;
            padding: 20px 0 40px;
          }

          .profile-card {
            padding: 24px 20px;
            border-radius: 16px;
          }

          .profile-header {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .details-grid {
            grid-template-columns: 1fr;
          }

          .form-actions {
            flex-direction: column;
          }

          .dashboard-actions {
            flex-wrap: wrap;
          }
        }

        @media (max-width: 480px) {
          .profile-card {
            padding: 18px 14px;
          }

          .profile-avatar {
            width: 64px;
            height: 64px;
            font-size: 24px;
          }

          .profile-header h2 {
            font-size: 20px;
          }

          .dashboard-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .dashboard-actions {
            width: 100%;
          }

          .dashboard-actions button {
            flex: 1;
            text-align: center;
          }
        }
      `}),(0,z.jsxs)(`div`,{className:`app-container`,children:[(0,z.jsxs)(`header`,{className:`dashboard-header`,children:[(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`h1`,{children:`👤 My Profile`}),(0,z.jsx)(`p`,{children:`Manage your account and security`})]}),(0,z.jsxs)(`div`,{className:`dashboard-actions`,children:[(0,z.jsx)(`button`,{className:`back-button`,onClick:()=>e(`/dashboard`),children:`← Dashboard`}),(0,z.jsx)(`button`,{className:`logout-button`,onClick:async()=>{try{await yo.post(`/auth/logout`,{},{withCredentials:!0})}catch(e){console.error(`Logout failed:`,e)}finally{localStorage.removeItem(`user`),localStorage.removeItem(`token`),e(`/login`)}},children:`Logout`})]})]}),(0,z.jsxs)(`main`,{className:`dashboard-content`,children:[(s||l)&&(0,z.jsxs)(z.Fragment,{children:[s&&(0,z.jsxs)(`div`,{className:`error-message`,children:[`❌ `,s]}),l&&(0,z.jsxs)(`div`,{className:`success-message`,children:[`✅ `,l]})]}),(0,z.jsxs)(`div`,{className:`profile-card`,children:[(0,z.jsxs)(`div`,{className:`profile-header`,children:[(0,z.jsx)(`div`,{className:`profile-avatar`,children:((t?.firstName?.charAt(0)||`U`)+(t?.lastName?.charAt(0)||``)).toUpperCase()}),(0,z.jsxs)(`div`,{children:[(0,z.jsxs)(`h2`,{children:[t?.firstName||`User`,` `,t?.lastName||``]}),(0,z.jsx)(`p`,{children:`Contact Management User`})]})]}),(0,z.jsxs)(`div`,{className:`profile-section`,children:[(0,z.jsx)(`h3`,{children:`📋 User Information`}),(0,z.jsxs)(`div`,{className:`details-grid`,children:[(0,z.jsxs)(`div`,{className:`detail-item`,children:[(0,z.jsxs)(`div`,{className:`detail-label`,children:[(0,z.jsx)(L_,{}),(0,z.jsx)(`span`,{children:`First Name`})]}),(0,z.jsx)(`strong`,{children:t?.firstName||`N/A`})]}),(0,z.jsxs)(`div`,{className:`detail-item`,children:[(0,z.jsxs)(`div`,{className:`detail-label`,children:[(0,z.jsx)(L_,{}),(0,z.jsx)(`span`,{children:`Last Name`})]}),(0,z.jsx)(`strong`,{children:t?.lastName||`N/A`})]}),(0,z.jsxs)(`div`,{className:`detail-item`,children:[(0,z.jsxs)(`div`,{className:`detail-label`,children:[(0,z.jsx)(z_,{}),(0,z.jsx)(`span`,{children:`Email`})]}),(0,z.jsx)(`strong`,{children:t?.email||`N/A`})]}),(0,z.jsxs)(`div`,{className:`detail-item`,children:[(0,z.jsxs)(`div`,{className:`detail-label`,children:[(0,z.jsx)(B_,{}),(0,z.jsx)(`span`,{children:`Phone`})]}),(0,z.jsx)(`strong`,{children:t?.phone||`N/A`})]}),(0,z.jsxs)(`div`,{className:`detail-item`,children:[(0,z.jsxs)(`div`,{className:`detail-label`,children:[(0,z.jsx)(V_,{}),(0,z.jsx)(`span`,{children:`Account Status`})]}),(0,z.jsx)(`span`,{className:`status-badge`,children:`● Active`})]})]})]}),!r&&(0,z.jsxs)(`button`,{className:`change-password-btn`,onClick:()=>{i(!0),c(``),u(``)},children:[(0,z.jsx)(R_,{}),`Change Password`]}),r&&(0,z.jsxs)(`div`,{className:`password-section`,children:[(0,z.jsx)(`h3`,{children:`🔒 Change Password`}),(0,z.jsxs)(`form`,{onSubmit:async e=>{if(e.preventDefault(),c(``),u(``),a.newPassword!==a.confirmPassword){c(`New password and confirm password do not match.`);return}try{f(!0),await yo.put(`/auth/change-password`,{currentPassword:a.currentPassword,newPassword:a.newPassword}),u(`Password changed successfully.`),o({currentPassword:``,newPassword:``,confirmPassword:``}),i(!1)}catch(e){c(e.response?.data?.error||`Unable to change password.`)}finally{f(!1)}},children:[(0,z.jsxs)(`div`,{className:`form-group`,children:[(0,z.jsx)(`label`,{htmlFor:`currentPassword`,children:`Current Password`}),(0,z.jsx)(`input`,{id:`currentPassword`,type:`password`,name:`currentPassword`,value:a.currentPassword,onChange:p,placeholder:`Enter current password`,required:!0})]}),(0,z.jsxs)(`div`,{className:`form-group`,children:[(0,z.jsx)(`label`,{htmlFor:`newPassword`,children:`New Password`}),(0,z.jsx)(`input`,{id:`newPassword`,type:`password`,name:`newPassword`,value:a.newPassword,onChange:p,placeholder:`Enter new password`,required:!0})]}),(0,z.jsxs)(`div`,{className:`form-group`,children:[(0,z.jsx)(`label`,{htmlFor:`confirmPassword`,children:`Confirm Password`}),(0,z.jsx)(`input`,{id:`confirmPassword`,type:`password`,name:`confirmPassword`,value:a.confirmPassword,onChange:p,placeholder:`Confirm new password`,required:!0})]}),(0,z.jsxs)(`div`,{className:`form-actions`,children:[(0,z.jsx)(`button`,{type:`button`,onClick:()=>{i(!1),c(``),u(``)},children:`Cancel`}),(0,z.jsx)(`button`,{type:`submit`,disabled:d,children:d?`Changing...`:`Update Password`})]})]})]})]})]})]})]})}function U_(){return(0,z.jsx)(Nn,{children:(0,z.jsxs)(Gt,{children:[(0,z.jsx)(Ut,{path:`/`,element:(0,z.jsx)(Ht,{to:`/login`,replace:!0})}),(0,z.jsx)(Ut,{path:`/login`,element:(0,z.jsx)(Eo,{})}),(0,z.jsx)(Ut,{path:`/register`,element:(0,z.jsx)(Fo,{})}),(0,z.jsx)(Ut,{path:`/dashboard`,element:(0,z.jsx)(v_,{})}),(0,z.jsx)(Ut,{path:`/contacts/new`,element:(0,z.jsx)(T_,{})}),(0,z.jsx)(Ut,{path:`/contacts/:id`,element:(0,z.jsx)(A_,{})}),(0,z.jsx)(Ut,{path:`/contacts/:id/edit`,element:(0,z.jsx)(I_,{})}),(0,z.jsx)(Ut,{path:`/profile`,element:(0,z.jsx)(H_,{})}),(0,z.jsx)(Ut,{path:`*`,element:(0,z.jsx)(Ht,{to:`/login`,replace:!0})})]})})}var W_=class extends v.Component{constructor(e){super(e),this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e,t){console.error(`Application rendering error:`,e,t),this.setState({error:e,errorInfo:t})}handleRefresh=()=>{window.location.reload()};render(){return this.state.hasError?(0,z.jsx)(`div`,{style:{minHeight:`100vh`,display:`flex`,alignItems:`center`,justifyContent:`center`,background:`var(--background)`,padding:`20px`},children:(0,z.jsxs)(`div`,{className:`card`,style:{maxWidth:`720px`,padding:`28px`,textAlign:`left`,lineHeight:1.4},children:[(0,z.jsx)(`h1`,{style:{marginBottom:6},children:`Something went wrong`}),(0,z.jsx)(`p`,{style:{marginTop:6},children:`We couldn't load this page. Please refresh and try again.`}),(0,z.jsxs)(`div`,{style:{marginTop:14},children:[(0,z.jsx)(`button`,{className:`auth-button`,style:{marginRight:12},onClick:this.handleRefresh,children:`Refresh Page`}),(0,z.jsx)(`button`,{className:`auth-button`,onClick:async()=>{try{await window.navigator.clipboard?.writeText(JSON.stringify({error:this.state.error?.toString(),stack:this.state.errorInfo?.componentStack}))}catch(e){console.error(`Could not copy error details:`,e)}},children:`Copy error`})]}),this.state.error&&(0,z.jsxs)(`details`,{style:{marginTop:16,whiteSpace:`pre-wrap`,background:`#fff`,padding:12,borderRadius:8,border:`1px solid #eee`},children:[(0,z.jsx)(`summary`,{style:{cursor:`pointer`,fontWeight:600},children:`View error details`}),(0,z.jsxs)(`div`,{style:{marginTop:8,color:`#111`},children:[(0,z.jsxs)(`div`,{children:[(0,z.jsx)(`strong`,{children:`Message:`}),` `,this.state.error?.toString()]}),(0,z.jsxs)(`div`,{style:{marginTop:8},children:[(0,z.jsx)(`strong`,{children:`Stack:`}),(0,z.jsx)(`pre`,{style:{fontSize:12,overflowX:`auto`},children:this.state.errorInfo?.componentStack})]})]})]})]})}):this.props.children}};(0,y.createRoot)(document.getElementById(`root`)).render((0,z.jsx)(v.StrictMode,{children:(0,z.jsx)(W_,{children:(0,z.jsx)(U_,{})})}));