/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../simple-els/dist/simple-els.min.js"
/*!********************************************!*\
  !*** ../simple-els/dist/simple-els.min.js ***!
  \********************************************/
(module) {

/*! For license information please see simple-els.min.js.LICENSE.txt */
!function(e,t){ true?module.exports=t():0}(this,()=>(()=>{"use strict";var e={"./src/combine.js"(e,t,n){n.r(t),n.d(t,{combineState:()=>l,combineTemplates:()=>E});var r=n("./src/consts.js"),s=n("./src/state.js"),o=n("./src/helpers.js"),c=n("./src/html.js"),i=n("./src/index.js");function E(e,t){const n={},r=a.bind(null,n,t),s=e.call(null,r);return[(0,c.cloneHTMLMarkup)(s),n]}function a(e,t,...n){const[s,c]=n,[E,a]=function(e,t){if(e.markup)return[e,!1];return[(0,i.default)(e,{},void 0,t),!0]}(s,t),l=Object.keys(e).length,S=`${r.UTIL_KEYS.CHILDREN}${l}`,p=(0,o.isFunction)(c)&&c,_=p&&(0,o.getParamNames)(c)||[];return e[`${S}`]={createComponent:E,[r.UTIL_KEYS.CHILDREN]:[],[r.UTIL_KEYS.ON_CHANGE]:[],[r.UTIL_KEYS.DEPENDANTS]:[],[r.UTIL_KEYS.ON_CHANGE]:[],[r.UTIL_KEYS.IS_RENDERED]:!1,[r.UTIL_KEYS.IS_ANONYMOUS]:a,[r.UTIL_KEYS.VALUE]:{value:!p&&u(c),computeFn:p,dependencies:_}},`<span ${r.BINDING_SIGN.COMPONENT}${S}></span>`}function l(e,t){Object.assign(e,t),(0,o.forEach)(t,(t,n)=>{const{dependencies:c,computeFn:i,value:E}=n[r.UTIL_KEYS.VALUE];c.forEach(n=>{(0,o.set)(e,[n,r.UTIL_KEYS.DEPENDANTS,t],[r.UTIL_KEYS.VALUE])}),e[r.UTIL_KEYS.HAS_ANONYMOUS_CHILDREN]=n.createComponent[r.UTIL_KEYS.IS_ANONYMOUS];const a=i&&function(e,t){const n=i.apply(null,(0,s.getArguments)(e,t));return n?u(n):[]};n[r.UTIL_KEYS.VALUE].computeFn=a,n[r.UTIL_KEYS.VALUE].value=a?a(c,e):E})}function u(e){return(0,o.isArray)(e)?e[0]&&!(0,o.isArray)(e[0])?e.map(e=>[e]):e:[[e||{}]]}},"./src/consts.js"(e,t,n){n.r(t),n.d(t,{BINDING_SIGN:()=>o,CHILDREN_LIST_OPERATIONS:()=>S,COMPONENT_PREFIX:()=>i,DEFAULT_CONTAINER:()=>l,DESTROY_OP:()=>E,EMPTY_FN:()=>u,FORM_TAGS:()=>p,NOT_BINDING_PREFIX:()=>s,REACTIVE_TYPES:()=>a,STATE_BEHAVIOUR_DELIMITER:()=>r,UTIL_KEYS:()=>c});const r="_",s=" ",o={BEHAVIOR:"@",CLASS:".",COMPONENT:"&"},c={VALUE:r,DEPENDENCIES:"dependencies",DEPENDANTS:"dependants",ON_CHANGE:"onChange",LISTENERS:"listeners",MARKUP:"el",EVENT_LISTENERS:"eventListeners",CHILDREN:"children",TEMPLATE:"template",IS_RENDERED:"isRendered",ON_MESSAGE:"onMessage",ON_MESSAGE_COMPONENT:s+"onMessage",PARENT_STATE:s+"parentState",ON_CHANGE_COMPONENT:s+"onChange",CHILDREN_DATA:s+"childrenData",MARKUP_COMPONENT:s+"el",IS_RENDERED_COMPONENT:s+"isRendered",IS_SAME_VALUE:"isSame",IS_ANONYMOUS:"isAnonymous",HAS_ANONYMOUS_CHILDREN:s+"isAnonymousChildren",IS_STATELESS:"isStateless",IS_FAST_APPLY:"isFastApply"},i="component",E="destroy",a=["html","value","style","text","attrs","class","onChange",c.VALUE,void 0],l="div",u=()=>{},S=[E,"set","insert","push"],p=["INPUT","SELECT","TEXTAREA"]},"./src/error.js"(e,t,n){n.r(t),n.d(t,{throwIllegalBindingNameError:()=>o,throwNoDeclaredDependencyError:()=>c});var r=n("./src/consts.js"),s=n("./src/helpers.js");function o(e){i(`Binding @${e} can't be added in the markup, because this name is reserved by the library.\nOther reserved names: ${(0,s.map)(r.UTIL_KEYS,(e,t)=>t)}`)}function c(e,t){i(`Dependency '${e}' is used for '${t}', but is not declared as a state value of the component.`)}function i(e){throw new Error(e)}},"./src/helpers.js"(e,t,n){n.r(t),n.d(t,{addEnding:()=>_,copy:()=>I,default:()=>d,filter:()=>O,forEach:()=>U,get:()=>Y,getFilteredKeys:()=>K,getParamNames:()=>l,isArray:()=>A,isDOMElement:()=>f,isFunction:()=>i,isHTMLString:()=>o,isNumber:()=>T,isObject:()=>E,isString:()=>c,isUndefined:()=>L,map:()=>u,set:()=>h,toCamelCase:()=>p,toDashCase:()=>S,uid:()=>m});const r=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,s=/([^\s,]+)/g;function o(e){return c(e)&&0===e.indexOf("<")}function c(e){return"[object String]"===a(e)}function i(e){return"[object Function]"===a(e)}function E(e){return"[object Object]"===a(e)}function a(e){return Object.prototype.toString.call(e)}function l(e){const t=e.toString().replace(r,"").split("=>")[0],n=t.slice(t.indexOf("(")+1,t.indexOf(")")).match(s);return null===n?[]:n}function u(e,t){const n=Object.entries(e).map(([e,n])=>t(e,n));return 2===n[0]?.length?Object.fromEntries(n):n}function S(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function p(e){return e.replace(/-([a-z])/gi,(e,t)=>t.toUpperCase())}function _(e,t,n){return`${e}${n&&t||""}`}function T(e){return"[object Number]"===a(e)&&e==e}const d=I;function I(e,t){if(!e)return I({},t);for(let n in t)L(t[n])||(t.hasOwnProperty(n)&&E(t[n])?(e[n]||(e[n]={}),I(e[n],t[n])):A(t[n])?(e[n]||(e[n]=[]),N(e[n],t[n])):f(t[n])?e[n]=t[n].cloneNode(!0):e[n]=t[n]);return e}function N(e,t){for(let n=0;n<t.length;n++)E(t[n])?(e[n]=e[n]||{},I(e[n],t[n])):A(t[n])?(e[n]=e[n]||[],N(e[n],t[n])):e[n]=t[n];return e}function f(e){return e&&void 0!==e.tagName}function L(e){return void 0===e}function A(e){return"[object Array]"===a(e)}function U(e,t){Object.entries(e||{}).forEach(([e,n])=>t(e,n))}function h(e,t,n){if(!t.length)return E(n)?Object.assign(e,n):n;let r=e;for(var s=0;s<t.length-1;s++)r=r[t[s]]?r[t[s]]:r[t[s]]={};return E(n)?(r[t[s]]=r[t[s]]||{},Object.assign(r[t[s]],n)):r[t[s]]=n,e}function O(e,t){return Object.fromEntries(Object.entries(e).filter(([e,n])=>!0===t(e,n)))}function m(){return Date.now().toString(36)+Math.random().toString(36).substr(2)}function Y(e,t,n){let r=e;for(let e=0;e<t.length;e++)try{r=r[t[e]]}catch{return n}return L(r)?n:r}function K(e,t){return u(O(e,(e,n)=>t(e,n)),e=>e)}},"./src/html.js"(e,t,n){n.r(t),n.d(t,{MARKUP_ACTIONS:()=>i,addChildMarkup:()=>T,applyToMarkup:()=>S,cloneHTMLMarkup:()=>E,gatherBindings:()=>a,removeChildMarkup:()=>_,setupEventListener:()=>p,walkNodes:()=>u});var r=n("./src/helpers.js"),s=n("./src/consts.js"),o=n("./src/popup.js"),c=n("./src/error.js");const i={[s.UTIL_KEYS.VALUE]:({el:e,[s.UTIL_KEYS.IS_FAST_APPLY]:t},n)=>t&&function(e,t=""){s.FORM_TAGS.includes(e.tagName)?e.value=t:e.textContent=t}(e,n),value:({el:e},t)=>e.value=t,text:({el:e},t)=>e.textContent=t,html:({el:e},t)=>e.innerHTML=t,attrs:({el:e,attrs:t},n)=>function(e,t){for(const n of e.getAttributeNames())t[n]||e.removeAttribute(n);Object.entries(t).forEach(([t,n])=>e.setAttribute(t,n))}(e,{...t,...n,class:e.className}),style:({el:e},t)=>function(e,t){(0,r.forEach)(t,(t,n)=>{e.style[(0,r.toDashCase)(t)]=(0,r.addEnding)(n,"px",(0,r.isNumber)(n))})}(e,t),class:({el:e,classes:t,templateId:n},r)=>function(e,t){e.classList.value=t.join(" ")}(e,r.map(e=>`${n}${e}`).concat(t))};function E(e){return function(e){const t=new DOMParser;return t.parseFromString(e,"text/html").body.firstElementChild}((0,r.isHTMLString)(e.trim())?e:document.querySelector(e).innerHTML)}function a(e,t,n){const r={};return u(e,e=>{const{name:o,el:i,classes:E,attrs:a,isComponent:u,placeholder:S}=function(e,t,n){let r={};const o={},i=[],E=e.getAttributeNames();for(const a of E)if(a.startsWith(s.BINDING_SIGN.CLASS))n&&(o[a]=!0)||e.removeAttribute(a),l(e,t,a.slice(s.BINDING_SIGN.CLASS.length),i);else{if(a.startsWith(s.BINDING_SIGN.BEHAVIOR)){const E=a.slice(s.BINDING_SIGN.BEHAVIOR.length);Object.values(s.UTIL_KEYS).includes(E)&&(0,c.throwIllegalBindingNameError)(E),n&&(o[a]=!0)||e.removeAttribute(a),r={name:E,el:e},l(e,t,E,i);continue}a.startsWith(s.BINDING_SIGN.COMPONENT)?(n&&(o[a]=!0)||e.removeAttribute(a),r={name:a.slice(s.BINDING_SIGN.COMPONENT.length),el:e,placeholder:e,isComponent:!0}):o[a]=e.getAttribute(a)}return{...r,classes:i,attrs:o}}(e,t,n);o&&(r[o]={el:i,classes:E,attrs:a,isComponent:u,placeholder:S,templateId:t})}),r}function l(e,t,n,r){const o=n.split(s.BINDING_SIGN.CLASS).map(e=>`${t}${e}`),c=e.classList;c.add.apply(c,o),r.push.apply(r,o)}function u(e,t){t(e),Array.prototype.slice.call(e.children).forEach(e=>u(e,t))}function S(e,t,n){e&&i[t]&&i[t](e,n)}function p(e,t,n,r){e.addEventListener(t,e=>n(e,r))}function _(e,t){const{children:n,[s.UTIL_KEYS.MARKUP]:r}=e[s.UTIL_KEYS.CHILDREN_DATA],o=e[s.UTIL_KEYS.MARKUP_COMPONENT];if(1===n.length)return o.parentNode.replaceChild(r.placeholder,o),void(r.el=r.placeholder);0===t&&(r.el=o.nextSibling),o.parentNode.removeChild(o)}function T(e,t,n){const{markup:r,styles:s,id:c}=t,{isNoShadow:i,nextNode:E,placeholder:a,isPopup:l}=n;let u;if(i)u=r;else{u=document.createElement("div");const e=u.attachShadow({mode:"open"});e.adoptedStyleSheets=s,e.appendChild(r)}a?e.replaceChild(u,a):E?e.insertBefore(u,E):e.appendChild(u),l&&(0,o.addPopupLogic)(r,{...n,id:c})}},"./src/index.js"(e,t,n){n.r(t),n.d(t,{append:()=>u,default:()=>S});var r=n("./src/state.js"),s=n("./src/html.js"),o=n("./src/styles.js"),c=n("./src/helpers.js"),i=n("./src/combine.js"),E=n("./src/consts.js"),a=n("./src/lifecycle.js");function l(e,...t){(0,c.isDOMElement)(t[0])&&t.unshift({});const[n,o,i]=t;e[E.UTIL_KEYS.IS_STATELESS]&&(Object.assign(e.state,(0,r.prepareStateSettings)(n,!0)),e[E.UTIL_KEYS.IS_STATELESS]=!1);const a=e.markup.cloneNode(!0),l=(0,c.copy)({},e.state);l[E.UTIL_KEYS.PARENT_STATE]=i?.[E.UTIL_KEYS.PARENT_STATE],l[E.UTIL_KEYS.CHILDREN_DATA]=i?.[E.UTIL_KEYS.CHILDREN_DATA],l[E.UTIL_KEYS.MARKUP_COMPONENT]=a;const S=(0,s.gatherBindings)(a,e.id),p={api:l&&(0,r.setupComponentMarkup)(S,l,e[E.UTIL_KEYS.IS_ANONYMOUS]?(0,r.getValues)((0,r.prepareStateSettings)(n)):n),...e,markup:a,state:l};return o?u(o,p,i):Object.assign((e,t)=>u(e,p,t),{asPopup:e=>u(document.body,p,{...e,isPopup:!0})})}function u(e,t,n={}){(0,s.addChildMarkup)(e,t,n);const{state:r}=t;return r[E.UTIL_KEYS.IS_RENDERED_COMPONENT]=!0,(0,a.runStateChangeListeners)(!0,r)}const S=function(e,t,n,a){const u=a||(0,c.uid)(),[S,p]=(0,c.isFunction)(e)?(0,i.combineTemplates)(e,u):[(0,s.cloneHTMLMarkup)(e),{}],[_,T]=(0,c.isObject)(t)?[(0,r.prepareStateSettings)(t),(0,o.prepareStyles)(u,n)]:[{},(0,o.prepareStyles)(u,t)],d=!Object.keys(_).length||!!a;(0,i.combineState)(_,p);const I=(0,s.gatherBindings)(S,u,!0);(0,r.updateTemplateMarkup)(I,_);const N={id:u,markup:S,state:_,styles:(0,c.map)(p,(e,t)=>t).map(e=>e.createComponent.styles).reduce((e,t)=>e.concat(t),[]).concat(T),[E.UTIL_KEYS.IS_STATELESS]:d,[E.UTIL_KEYS.IS_ANONYMOUS]:d};return Object.assign((...e)=>l(N,...e),{...N,asPopup:e=>l(N,{},document.body,{...e,isPopup:!0})})}},"./src/lifecycle.js"(e,t,n){n.r(t),n.d(t,{runStateChangeListeners:()=>c});var r=n("./src/consts.js"),s=n("./src/helpers.js"),o=n("./src/state.js");function c(e,t){const{[r.UTIL_KEYS.ON_CHANGE_COMPONENT]:n,[r.UTIL_KEYS.MARKUP_COMPONENT]:c}=t,i=(0,o.getStateBindings)(t),E=(0,o.createStateApi)(t);return(0,s.forEach)(i,(t,{[r.UTIL_KEYS.ON_CHANGE]:n,[r.UTIL_KEYS.MARKUP]:o})=>{if((0,s.isArray)(e)&&!e.includes(t))return;const c=(0,s.isArray)(e)?[t]:e;n?.forEach(e=>e(c,E,o?.el))}),n(e,E,c),E}},"./src/popup.js"(e,t,n){n.r(t),n.d(t,{addPopupLogic:()=>i});n("./src/consts.js");var r=n("./src/helpers.js"),s=n("./src/styles.js");const o={left:"X",top:"Y"},c=["left","top","bottom","right"];function i(e,t){const{handle:n,closeButton:i,id:E}=t;i&&e.parentNode.querySelector((0,s.addClassPrefix)(i,E))?.addEventListener("click",()=>e.parentNode.removeChild(e)),n&&e.parentNode.querySelector((0,s.addClassPrefix)(n,E))?.addEventListener("mousedown",t=>{const n=t.target,r=t.clientX-e.getBoundingClientRect().left,s=t.clientY-e.getBoundingClientRect().top;function o(t){requestAnimationFrame(()=>{e.style.left=t.clientX-r+"px",e.style.top=t.clientY-s+"px",e.style.transform="none"})}function c(e){document.removeEventListener("mousemove",o),document.removeEventListener("mouseup",c),n.removeEventListener("mouseup",c)}document.addEventListener("mouseup",c),n.addEventListener("mouseup",c),document.addEventListener("mousemove",o)}),function(e,t){const{left:n,top:s,bottom:i,right:E}=t;e.style.position="fixed";const{width:a,height:l}=e.getBoundingClientRect();n||E||(t.left="center");s||i||(t.top="center");E&&!n&&(delete t.right,t.left=document.body.clientWidth-a-E);i&&!s&&(delete t.bottom,t.top=window.innerHeight-l-i);const u=[];(0,r.forEach)(t,(e,t)=>{if(c.includes(e)){if("center"===t)return u.push(`${e}: 50%`,`transform: translate${o[e]}(-50%)`);u.push(`${e}: ${(0,r.addEnding)(t,"px",(0,r.isNumber)(t))}`)}}),"center"===t.left&&"center"===t.top&&u.push("transform: translate(-50%, -50%)"),e.style=`${e.style.cssText}; ${u.join(";")}`}(e,t)}},"./src/state.js"(e,t,n){n.r(t),n.d(t,{createChildrenApi:()=>U,createStateApi:()=>f,getArguments:()=>u,getStateBindings:()=>L,getValues:()=>S,prepareStateSettings:()=>i,setupComponentMarkup:()=>a,updateTemplateMarkup:()=>E});var r=n("./src/html.js"),s=n("./src/helpers.js"),o=n("./src/consts.js"),c=n("./src/lifecycle.js");function i(e={},t){const n={[o.UTIL_KEYS.ON_MESSAGE_COMPONENT]:e[o.UTIL_KEYS.ON_MESSAGE]||o.EMPTY_FN,[o.UTIL_KEYS.ON_CHANGE_COMPONENT]:e[o.UTIL_KEYS.ON_CHANGE]||o.EMPTY_FN};return(0,s.map)(o.UTIL_KEYS,(e,t)=>t).forEach(t=>delete e[t]),(0,s.forEach)(e,(e,r)=>{const[c,i]=function(e){const t=e.split(o.STATE_BEHAVIOUR_DELIMITER);if(1===t.length)return[t[0]];const n=t.slice(0,-1).join(o.STATE_BEHAVIOUR_DELIMITER),r=t.slice(-1)[0];return[n,r]}(e);if(n[c]||(n[c]={[o.UTIL_KEYS.VALUE]:{},[o.UTIL_KEYS.IS_FAST_APPLY]:!i&&!(0,s.isObject)(r),[o.UTIL_KEYS.DEPENDANTS]:{},[o.UTIL_KEYS.ON_CHANGE]:[]}),(0,s.isObject)(r))return(0,s.forEach)(r,(e,r)=>{n[c][e]=l(c,e,r,n,t)});n[c][i||o.UTIL_KEYS.VALUE]=l(c,i,r,n,t)}),n}function E(e,t){(0,s.forEach)(e,(e,n)=>{const c=t[(0,s.toCamelCase)(e)];n[o.UTIL_KEYS.IS_FAST_APPLY]=c?.[o.UTIL_KEYS.IS_FAST_APPLY],(0,s.forEach)(c,(e,t)=>(0,r.applyToMarkup)(n,e,t?.value))})}function a(e,t,n){return(0,s.forEach)(e,(e,n)=>{const r=t[(0,s.toCamelCase)(e)];n[o.UTIL_KEYS.IS_FAST_APPLY]=!r||r?.[o.UTIL_KEYS.IS_FAST_APPLY],(0,s.set)(t,[(0,s.toCamelCase)(e),o.UTIL_KEYS.MARKUP],n)}),p(t,n),(0,s.forEach)((0,s.filter)(t,e=>!e.startsWith(o.NOT_BINDING_PREFIX)),(e,n)=>{const{[o.UTIL_KEYS.MARKUP]:c,[o.UTIL_KEYS.IS_RENDERED]:i,[o.UTIL_KEYS.VALUE]:E}=n;if(n.createComponent){if(!i){const e=U(n),r=O(E.value,[]);for(let t of o.CHILDREN_LIST_OPERATIONS)r[t].forEach(n=>e[t].apply(null,n));m(t)}return void(n[o.UTIL_KEYS.PARENT_STATE]=t)}const a=(0,s.filter)(n,(e,t)=>function(e,t){return(0,s.isFunction)(t)&&!o.REACTIVE_TYPES.includes(e)}(e,t.value));(0,s.forEach)(a,(e,n)=>(0,r.setupEventListener)(c?.el,e,n.value,f(t)))}),f(t)}function l(e,t,n,r,c){if(t===o.UTIL_KEYS.ON_CHANGE)return[n];const i=function(e,t){return(0,s.isFunction)(t)&&o.REACTIVE_TYPES.includes(e)}(t,n),E=i&&(0,s.getParamNames)(n);E&&E.forEach(n=>{(0,s.get)(r,[n,o.UTIL_KEYS.DEPENDANTS,e])||(0,s.set)(r,[n,o.UTIL_KEYS.DEPENDANTS,e],[]),r[n][o.UTIL_KEYS.DEPENDANTS][e].push(t||o.UTIL_KEYS.VALUE)});const a=i&&function(e,t){return n.apply(null,u(e,t))};return{value:c?void 0:i?a(E,r):n,computeFn:a,dependencies:E}}function u(e,t){const n=S(t);return e.map(e=>n[e])}function S(e){return(0,s.map)(L(e),(e,t)=>[e,t[o.UTIL_KEYS.VALUE]?.value])}function p(e,t){const n={};for(let[r,s]of Object.entries(t))_(r,s,e,n,t);!function(e,t){(0,s.forEach)(t,(t,n)=>{const i=e[t],{[o.UTIL_KEYS.MARKUP]:E,[o.UTIL_KEYS.CHILDREN]:a}=i;if(a){const{newValue:e,prevValue:t}=n[o.UTIL_KEYS.VALUE],r=U(i),s=O(e,t);for(let e of o.CHILDREN_LIST_OPERATIONS){s[e].forEach(t=>{e===o.DESTROY_OP&&a.length&&(0,c.runStateChangeListeners)(!1,a[t[0]].state),r[e].apply(null,t)})}return void(i[o.UTIL_KEYS.IS_RENDERED]=!0)}(0,s.forEach)(n,(e,t)=>!t[o.UTIL_KEYS.IS_SAME_VALUE]&&(0,r.applyToMarkup)(E,e,t.newValue))}),m(e);const n=(0,s.getFilteredKeys)(t,(t,n)=>!!n[o.UTIL_KEYS.VALUE]&&!n[o.UTIL_KEYS.VALUE][o.UTIL_KEYS.IS_SAME_VALUE]&&!e[t][o.UTIL_KEYS.CHILDREN]);e[o.UTIL_KEYS.IS_RENDERED_COMPONENT]&&n.length&&(0,c.runStateChangeListeners)(n,e)}(e,n)}function _(e,t,n,r,c){const i=(0,s.get)(n,[e,o.UTIL_KEYS.VALUE,"value"]);i!==t?((0,s.set)(n,[e,o.UTIL_KEYS.VALUE,"value"],t),(0,s.set)(r,[e,o.UTIL_KEYS.VALUE],{newValue:t,prevValue:i})):(0,s.set)(r,[e,o.UTIL_KEYS.VALUE],{[o.UTIL_KEYS.IS_SAME_VALUE]:!0}),T(e,n,r,c)}function T(e,t,n,r){const c=(0,s.get)(t,[e,o.UTIL_KEYS.DEPENDANTS],{});for(let[e,i]of Object.entries(c))i.forEach(c=>{const{computeFn:i,dependencies:E}=t[e][c],a=(0,s.getFilteredKeys)(n,(e,t)=>!!t[o.UTIL_KEYS.VALUE]),l=Object.keys(r),u=(0,s.get)(n,[e,c]);if(!E.every(e=>l.includes(e)&&a.includes(e)||!l.includes(e))||u)return;const S=t[e][c].value,p=i(E,t);S!==p&&(t[e][c].value=p,(0,s.set)(n,[e,c],{newValue:p,prevValue:S}),c===o.UTIL_KEYS.VALUE&&T(e,t,n,r))})}function d(e,t,n){t.forEach(t=>e[t][o.UTIL_KEYS.ON_CHANGE].push(n))}function I(e,t,n){t.forEach(t=>{const r=e[t][o.UTIL_KEYS.ON_CHANGE],s=r.findIndex(e=>e===n);r.splice(s,1)})}function N(e,t){let n=e[o.UTIL_KEYS.PARENT_STATE];const r=e[o.UTIL_KEYS.CHILDREN_DATA],s=r.children.findIndex(t=>t.state===e),c=()=>n={};for(;n;)n[o.UTIL_KEYS.ON_MESSAGE_COMPONENT](t,{stop:c,...f(n)},{index:s,...U(r,!0)}),n=n[o.UTIL_KEYS.PARENT_STATE]}function f(e){return{get:S.bind(null,e),set:p.bind(null,e),children:h.bind(null,e),send:N.bind(null,e),onChange:d.bind(null,e),removeListener:I.bind(null,e),[o.DESTROY_OP]:r.removeChildMarkup.bind(null,e),markup:A(e),state:e}}function L(e){return(0,s.filter)(e,(e,t)=>!!t?.[o.UTIL_KEYS.VALUE]&&!t?.[o.UTIL_KEYS.CHILDREN])}function A(e){return(0,s.map)((0,s.filter)(e,(e,t)=>!!t?.[o.UTIL_KEYS.MARKUP]?.el&&!t?.[o.UTIL_KEYS.CHILDREN]),(e,t)=>[e,t?.[o.UTIL_KEYS.MARKUP]?.el])}function U(e,t){const{createComponent:n,[o.UTIL_KEYS.PARENT_STATE]:r,[o.UTIL_KEYS.CHILDREN]:s,[o.UTIL_KEYS.VALUE]:c}=e,E=(t,s,c)=>{const{[o.UTIL_KEYS.MARKUP]:i}=e,E=n(t,i.el.parentNode,{isNoShadow:!0,placeholder:c&&i.el,nextNode:s,[o.UTIL_KEYS.CHILDREN_DATA]:e,[o.UTIL_KEYS.PARENT_STATE]:r});return c&&(i.el=E.state[o.UTIL_KEYS.MARKUP_COMPONENT]),E};return{[o.DESTROY_OP]:e=>{s[e][o.DESTROY_OP](e),s.splice(e,1),t&&c.value.splice(e,1)},push:e=>{const n=s.length&&s[s.length-1].state[o.UTIL_KEYS.MARKUP_COMPONENT].nextSibling;s.push(E(e,n,!s.length)),t&&c.value.push(e)},insert:(e,n=0)=>{const r=s[n].state[o.UTIL_KEYS.MARKUP_COMPONENT];s.splice(n,0,E(e,r)),t&&e.value.splice(n,0,e)},set:(e,t)=>{if(t||0===t)return s[t].set(n[o.UTIL_KEYS.IS_ANONYMOUS]?S(i(e)):e)},get:e=>e||0===e?s[e].get():s.map(({get:e})=>e()),forEach:e=>s.forEach(e)}}function h(e,t){return(0,s.map)((0,s.filter)(e,(e,t)=>!!t?.[o.UTIL_KEYS.CHILDREN]),(e,t)=>[e,U(t)])}function O(e,t){const n=[],r=[],s=[],c=[],i={},E={};let a=0;t.forEach(([t,s],o)=>{const c=E[s]>=0?E[s]+1:0,l=e.slice(c).findIndex(([e,t])=>t===s),u=o-a;-1===l?(n.push([u]),a++):(E[s]=c+l,r.push([e[E[s]][0],u]),i[E[s]]=u)});let l=0,u=0;return e.forEach(([e],n)=>{const r=i[n];r>=0?u=r+1+l:u>=t.length+l?c.push([e]):(s.push([e,u]),u++,l++)}),{[o.DESTROY_OP]:n,set:r,insert:s,push:c}}function m(e){e[o.UTIL_KEYS.HAS_ANONYMOUS_CHILDREN]&&(0,s.forEach)(e,(t,n)=>{if(n?.[o.UTIL_KEYS.IS_ANONYMOUS]){U(n).forEach(({set:t})=>t(S(e)))}})}},"./src/styles.js"(e,t,n){function r(e,t){const n=new CSSStyleSheet;n.replaceSync(t);for(let t=0;t<n.rules.length;t++){const{selectorText:r}=n.rules[t];n.rules[t].selectorText=s(r,e)}return[n]}function s(e,t){return e.replaceAll(".",`.${t}`)}n.r(t),n.d(t,{addClassPrefix:()=>s,prepareStyles:()=>r})}};const t={};function n(r){const s=t[r];if(void 0!==s)return s.exports;const o=t[r]={exports:{}};if(!(r in e)){delete t[r];const e=new Error("Cannot find module '"+r+"'");throw e.code="MODULE_NOT_FOUND",e}return e[r](o,o.exports,n),o.exports}n.d=(e,t)=>{if(Array.isArray(t))for(var r=0;r<t.length;){var s=t[r++],o=t[r++];n.o(e,s)?0===o&&r++:0===o?Object.defineProperty(e,s,{enumerable:!0,value:t[r++]}):Object.defineProperty(e,s,{enumerable:!0,get:o})}else for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};let r=n("./src/index.js");return r=r.default,r})());

/***/ },

/***/ "../varstor/dist/varstor.js"
/*!**********************************!*\
  !*** ../varstor/dist/varstor.js ***!
  \**********************************/
(module) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else // removed by dead control flow
{}
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/helpers.js"
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_625__) {

__nested_webpack_require_625__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_625__.d(__nested_webpack_exports__, {
/* harmony export */   getKeys: () => (/* binding */ getKeys),
/* harmony export */   getParamNames: () => (/* binding */ getParamNames),
/* harmony export */   isArray: () => (/* binding */ isArray),
/* harmony export */   isFunction: () => (/* binding */ isFunction),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   isString: () => (/* binding */ isString),
/* harmony export */   toCamelCase: () => (/* binding */ toCamelCase)
/* harmony export */ });
const STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
const ARGUMENT_NAMES = /([^\s,]+)/g;

function isFunction(x) {
  return typeof x === "function";
}

function isObject(x) {
  return Object.prototype.toString.call(x) === "[object Object]";
}

function isString(x) {
  return typeof x === "string";
}

function isArray(x) {
  return Array.isArray(x);
}

function getParamNames(fn) {
  const fnStr = fn.toString().replace(STRIP_COMMENTS, "").split("=>")[0];
  const names = fnStr
    .slice(fnStr.indexOf("(") + 1, fnStr.indexOf(")"))
    .match(ARGUMENT_NAMES);

  if (names === null) {
    return [];
  }

  return names;
}

function getKeys(obj, key) {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [k, v[key]]));
}

function toCamelCase(str, delimiter) {
  const strArr = str.split(delimiter);
  return `${strArr[0]}${strArr.slice(1).reduce((a, c) => `${a}${c.charAt(0).toUpperCase()}${c.slice(1)}`, "")}`;
}


/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_2396__) {

__nested_webpack_require_2396__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_2396__.d(__nested_webpack_exports__, {
/* harmony export */   ACCESSORS: () => (/* binding */ ACCESSORS),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_2396__(/*! ./storage */ "./src/storage.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_2396__(/*! ./helpers */ "./src/helpers.js");
/* harmony import */ var _namespace__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_2396__(/*! ./namespace */ "./src/namespace.js");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_2396__(/*! ./validation */ "./src/validation.js");








const STATE = {};
const ACCESSORS = {};
const COMPUTED_DEPENDENCIES = {};
const COMPUTED_ARGUMENTS = {};

const STORAGE = {
  GET_TYPE: null,
  IS_AVAILABE: null,
  UPDATE_STATE: null,
  SET_VALUE: null
};

setStorageUtils(_storage__WEBPACK_IMPORTED_MODULE_0__["default"]);

async function addState (namespace, initialState, isPersistent) {
  const storageType = STORAGE.GET_TYPE(isPersistent);
  const defaultValues = Object.assign({}, initialState);
  const namespacedValues = (0,_namespace__WEBPACK_IMPORTED_MODULE_2__.namespacify)(namespace(), initialState);

  if (STORAGE.IS_AVAILABE(storageType)) {
    await STORAGE.UPDATE_STATE(namespacedValues, storageType);
  }

  const accessors = {};
  for (const key in initialState) {
    _validation__WEBPACK_IMPORTED_MODULE_3__.isValid.Defining(namespace(key));
    accessors[namespace(key)] = setupValue(
      namespace(key),
      namespacedValues[namespace(key)],
      defaultValues[key],
      storageType,
    );
  }

  Object.assign(ACCESSORS, accessors);
  return createStore(namespace());
}

function setupValue (key, value, defaultValue, storageType) {
  const isComputedValue = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value);

  if (isComputedValue) {
    setupDependencies(key, value);
  }

  STATE[key] = {
    value: isComputedValue ? value.apply(null, getArguments(key)) : value,
    computeFn: value,
    listeners: [],
    defaultValue,
  };

  return createAccessor(key, storageType);
}

function setupDependencies(computedValueName, computeFn) {
  const [, namespace] = (0,_namespace__WEBPACK_IMPORTED_MODULE_2__.splitFullKey)(computedValueName);
  const paramNames = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getParamNames)(computeFn).map((name) => (0,_namespace__WEBPACK_IMPORTED_MODULE_2__.addNamespace)(namespace, name));
  COMPUTED_ARGUMENTS[computedValueName] = paramNames;

  paramNames.forEach((param) => {
    if (COMPUTED_DEPENDENCIES[param]) {
      COMPUTED_DEPENDENCIES[param].push(computedValueName);
    } else {
      COMPUTED_DEPENDENCIES[param] = [computedValueName];
    }
  });
}

function getArguments(computedName) {
  const values = getNamespaceValues(computedName);
  
  return COMPUTED_ARGUMENTS[computedName]
    .map((name) => values[(0,_namespace__WEBPACK_IMPORTED_MODULE_2__.splitFullKey)(name)[0]])
    .concat(values);
}

function createAccessor(key, storageType) {
  const accessor = () => STATE[key].value;

  Object.assign(accessor, {
    valueOf: () => STATE[key].value,
    toString: () => STATE[key].value,
    set: async (value) => await setValue(key, value, storageType),
    onChange: (cb) => STATE[key].listeners.push(cb),
    removeListener: (removeCb) =>
      (STATE[key].listeners = STATE[key].listeners.filter(
        (cb) => cb !== removeCb,
      )),
    reset: () => setValue(key, STATE[key].defaultValue, storageType),
  });

  return new Proxy(accessor, {
    get: (target, prop) => {
      if (Object.keys(accessor).includes(prop)) {
        return target[prop];
      }

      return STATE[key].value[prop];
    },
  });
}

async function setValue (key, value, storageType) {
  if (STORAGE.IS_AVAILABE(storageType)) {
    const isAutoUpdate = await STORAGE.SET_VALUE(storageType, key, value);
    if (isAutoUpdate) {
      return;
    }
  }

  onStateChange({ [key]: { newValue: value } });
}

function onStateChange (changes) {
  const realChanges = {};

  for (const key in changes) {
    const prevValue = STATE[key].value;
    const newValue = changes[key].newValue;

    if (prevValue !== newValue) {
      STATE[key].value = newValue;
      realChanges[key] = { newValue, prevValue };

      updateDependencies(key, realChanges);
    }
  }

  for (const key in realChanges) {
    STATE[key].listeners.forEach(async (cb) => await cb(STATE[key].value, getNamespaceValues(key), realChanges[key]));
  }
}

function updateDependencies (key, realChanges) {
  const computedDependencies = COMPUTED_DEPENDENCIES[key];
  if (computedDependencies) {
    computedDependencies.forEach((name) => {
      const prevValue = STATE[name].value;
      const newValue = STATE[name].computeFn.apply(null, getArguments(name));
      if (prevValue !== newValue) {
        STATE[name].value = newValue;
        realChanges[name] = { newValue, prevValue };
        updateDependencies(name, realChanges);
      }
    });
  }
}

function getState(namespace, arg) {
  if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isString)(arg)) {
    return createStore(arg);
  }

  if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isFunction)(arg)) {
    return getNamespaceAccessors(namespace(""), arg);
  }

  return getNamespaceValues(namespace(""));
}

function getNamespaceValues(namespace) {
  return recreateStructure((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getKeys)((0,_namespace__WEBPACK_IMPORTED_MODULE_2__.getByNamespace)(namespace, STATE), "value"));
}

function getNamespaceAccessors (namespace, cb) {
  const accessors = (0,_namespace__WEBPACK_IMPORTED_MODULE_2__.getByNamespace)(namespace, ACCESSORS);
  return cb.call(null, accessors, createStore(namespace()));
}

async function setState (namespace, changes) {
  const noKeys = !Object.keys(changes).length;

  if (noKeys) {
    resetAllState();
  } else {
    for (const [k,v] of Object.entries(changes)) {
      _validation__WEBPACK_IMPORTED_MODULE_3__.isValid.Setting(namespace(k));
      await ACCESSORS[namespace(k)].set(v);
    };
  }

  return createStore(namespace());
}

function resetAllState (namespace) {
  Object.entries(ACCESSORS)
    .filter(([k]) => k.startsWith(namespace()))
    .forEach((k, { reset }) => reset());

  return createStore(namespace());
}

function addStateLitener (namespace, observables, cb) {
  observables.forEach((key) => ACCESSORS[namespace(key)].onChange(cb));

  return createStore(namespace());
}

function removeStateListener(namespace, observables, cb) {
  observables.forEach((key) =>
    ACCESSORS[namespace(key)].removeListener(cb),
  );

  return createStore(namespace());
}

function recreateStructure (value) {
  let newValue = value;

  if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isArray)(value)) {
    newValue = [];
    value.forEach((v) => newValue.push(recreateStructure(v)));
    return newValue;
  }

  if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isObject)(value)) {
    newValue = {};
    for (let key in value) {
      newValue[key] = recreateStructure(value[key]);
    }
    return newValue;
  }

  return newValue;
}

function main () {
  const arg1 = arguments[1];

  if (!arg1 || (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isFunction)(arg1) || (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isString)(arg1)) {
    return getState.apply(null, arguments);
  }

  if (Array.isArray(arg1)) {
    return addStateLitener.apply(null, arguments);
  }

  if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.isObject)(arg1)) {
    return setState.apply(null, arguments);
  }
}

function setStorageUtils(storageUtils) {
  Object.assign(STORAGE, storageUtils);
}

function createStore (_namespace) {
  const namespace = (key) => (0,_namespace__WEBPACK_IMPORTED_MODULE_2__.addNamespace)(_namespace, key);

  return Object.assign(main.bind(null, namespace), {
    add: (state) => addState(namespace, state, false),
    addPersistent: (state) => addState(namespace, state, true),
    get: (arg) => getState(namespace, arg),
    set: async (changes) => await setState(namespace, changes),
    resetAll: () => resetAllState(namespace),
    onChange: (keys, cb) => addStateLitener(namespace, keys, cb),
    removeListener: (keys, cb) => removeStateListener(namespace, keys, cb),
    setStorageUtils,
    onStateChange,
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createStore(""));


/***/ },

/***/ "./src/namespace.js"
/*!**************************!*\
  !*** ./src/namespace.js ***!
  \**************************/
(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_11368__) {

__nested_webpack_require_11368__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_11368__.d(__nested_webpack_exports__, {
/* harmony export */   addNamespace: () => (/* binding */ addNamespace),
/* harmony export */   getByNamespace: () => (/* binding */ getByNamespace),
/* harmony export */   namespacify: () => (/* binding */ namespacify),
/* harmony export */   splitFullKey: () => (/* binding */ splitFullKey)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_11368__(/*! ./helpers */ "./src/helpers.js");


const NAMESPACE_DELIMITER = "::";

function addNamespace(namespace, str) {
  return `${namespace}${(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.isString)(str) && NAMESPACE_DELIMITER || ""}${str || ""}`;
}

function splitFullKey (str) {
  const segments = str.split(NAMESPACE_DELIMITER);

  return [
    segments.slice(-1)[0],
    segments.slice(0, -1).join(NAMESPACE_DELIMITER),
  ];
}

function getByNamespace(str, obj) {
  const namespace = splitFullKey(str)[1] + NAMESPACE_DELIMITER;

  return Object.fromEntries(
    Object.entries(obj)
      .filter(([k, v]) => k.startsWith(namespace))
      .map(([k, v]) => [k.slice(namespace.length), v]),
  );
}

function namespacify (namespace, obj) {
  return Object.fromEntries(
    Object.entries(obj)
      .map(([k,v]) => [addNamespace(namespace, k), v]
  ));
}


/***/ },

/***/ "./src/storage.js"
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_12958__) {

__nested_webpack_require_12958__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_12958__.d(__nested_webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function updateFromLocalStorage(state) {
  const stored = {};
  for (const key in state) {
    const value = localStorage.getItem(key);
    if (value !== null) {
      stored[key] = value;
    }
  }

  return Object.assign(state, stored);
}

function getStorageType(isPersistent) {
  return isPersistent && "localStorage";
}

function isStorageAvailable(storageType) {
  return storageType;
}

async function setStorageValue(storageType, key, value) {
  await window.localStorage.setItem(key, value);
  return false;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  GET_TYPE: getStorageType,
  IS_AVAILABE: isStorageAvailable,
  UPDATE_STATE: updateFromLocalStorage,
  SET_VALUE: setStorageValue,
});


/***/ },

/***/ "./src/validation.js"
/*!***************************!*\
  !*** ./src/validation.js ***!
  \***************************/
(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_14126__) {

__nested_webpack_require_14126__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_14126__.d(__nested_webpack_exports__, {
/* harmony export */   isValid: () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_14126__(/*! . */ "./src/index.js");
/* harmony import */ var _namespace__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_14126__(/*! ./namespace */ "./src/namespace.js");




const isValid = {
  Setting: (fullKey) => {
    if (!___WEBPACK_IMPORTED_MODULE_0__.ACCESSORS[fullKey]) {
      const [key, namespace] = (0,_namespace__WEBPACK_IMPORTED_MODULE_1__.splitFullKey)(fullKey);
      throw new Error(
        `Setting "${key}" key in "${namespace}" namespace. DOES NOT EXIST`,
      );
    }

    return true;
  },

  Defining: (fullKey) => {
    if (___WEBPACK_IMPORTED_MODULE_0__.ACCESSORS[fullKey]) {
      const [key, namespace] = (0,_namespace__WEBPACK_IMPORTED_MODULE_1__.splitFullKey)(fullKey);
      throw new Error(
        `Redefining "${key}" key in "${namespace}" namespace. ALREADY DEFINED`,
      );
    }

    return true;
  }

};


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_15518__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_15518__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__nested_webpack_require_15518__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__nested_webpack_require_15518__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__nested_webpack_require_15518__.o(definition, key) && !__nested_webpack_require_15518__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_15518__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_15518__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	let __nested_webpack_exports__ = __nested_webpack_require_15518__("./src/index.js");
/******/ 	__nested_webpack_exports__ = __nested_webpack_exports__["default"];
/******/ 	
/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});

/***/ },

/***/ "../webextension-messages/dist/webextension-messages.js"
/*!**************************************************************!*\
  !*** ../webextension-messages/dist/webextension-messages.js ***!
  \**************************************************************/
(module) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else // removed by dead control flow
{}
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/webextension-polyfill/dist/browser-polyfill.min.js"
/*!*************************************************************************!*\
  !*** ./node_modules/webextension-polyfill/dist/browser-polyfill.min.js ***!
  \*************************************************************************/
(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(a,b){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [module], __WEBPACK_AMD_DEFINE_FACTORY__ = (b),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else // removed by dead control flow
// removed by dead control flow
{ var c; }})("undefined"==typeof globalThis?"undefined"==typeof self?this:self:globalThis,function(a){"use strict";if(!(globalThis.chrome&&globalThis.chrome.runtime&&globalThis.chrome.runtime.id))throw new Error("This script should only be loaded in a browser extension.");if(!(globalThis.browser&&globalThis.browser.runtime&&globalThis.browser.runtime.id)){a.exports=(a=>{const b={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0},elements:{createSidebarPane:{minArgs:1,maxArgs:1}}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},goBack:{minArgs:0,maxArgs:1},goForward:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(0===Object.keys(b).length)throw new Error("api-metadata.json has not been included in browser-polyfill");class c extends WeakMap{constructor(a,b=void 0){super(b),this.createItem=a}get(a){return this.has(a)||this.set(a,this.createItem(a)),super.get(a)}}const d=a=>a&&"object"==typeof a&&"function"==typeof a.then,e=(b,c)=>(...d)=>{a.runtime.lastError?b.reject(new Error(a.runtime.lastError.message)):c.singleCallbackArg||1>=d.length&&!1!==c.singleCallbackArg?b.resolve(d[0]):b.resolve(d)},f=a=>1==a?"argument":"arguments",g=(a,b)=>function(c,...d){if(d.length<b.minArgs)throw new Error(`Expected at least ${b.minArgs} ${f(b.minArgs)} for ${a}(), got ${d.length}`);if(d.length>b.maxArgs)throw new Error(`Expected at most ${b.maxArgs} ${f(b.maxArgs)} for ${a}(), got ${d.length}`);return new Promise((f,g)=>{if(b.fallbackToNoCallback)try{c[a](...d,e({resolve:f,reject:g},b))}catch(e){console.warn(`${a} API method doesn't seem to support the callback parameter, `+"falling back to call it without a callback: ",e),c[a](...d),b.fallbackToNoCallback=!1,b.noCallback=!0,f()}else b.noCallback?(c[a](...d),f()):c[a](...d,e({resolve:f,reject:g},b))})},h=(a,b,c)=>new Proxy(b,{apply(b,d,e){return c.call(d,a,...e)}});let i=Function.call.bind(Object.prototype.hasOwnProperty);const j=(a,b={},c={})=>{let d=Object.create(null),e=Object.create(a);return new Proxy(e,{has(b,c){return c in a||c in d},get(e,f){if(f in d)return d[f];if(!(f in a))return;let k=a[f];if("function"==typeof k){if("function"==typeof b[f])k=h(a,a[f],b[f]);else if(i(c,f)){let b=g(f,c[f]);k=h(a,a[f],b)}else k=k.bind(a);}else if("object"==typeof k&&null!==k&&(i(b,f)||i(c,f)))k=j(k,b[f],c[f]);else if(i(c,"*"))k=j(k,b[f],c["*"]);else return Object.defineProperty(d,f,{configurable:!0,enumerable:!0,get(){return a[f]},set(b){a[f]=b}}),k;return d[f]=k,k},set(b,c,e){return c in d?d[c]=e:a[c]=e,!0},defineProperty(a,b,c){return Reflect.defineProperty(d,b,c)},deleteProperty(a,b){return Reflect.deleteProperty(d,b)}})},k=a=>({addListener(b,c,...d){b.addListener(a.get(c),...d)},hasListener(b,c){return b.hasListener(a.get(c))},removeListener(b,c){b.removeListener(a.get(c))}}),l=new c(a=>"function"==typeof a?function(b){const c=j(b,{},{getContent:{minArgs:0,maxArgs:0}});a(c)}:a),m=new c(a=>"function"==typeof a?function(b,c,e){let f,g,h=!1,i=new Promise(a=>{f=function(b){h=!0,a(b)}});try{g=a(b,c,f)}catch(a){g=Promise.reject(a)}const j=!0!==g&&d(g);if(!0!==g&&!j&&!h)return!1;const k=a=>{a.then(a=>{e(a)},a=>{let b;b=a&&(a instanceof Error||"string"==typeof a.message)?a.message:"An unexpected error occurred",e({__mozWebExtensionPolyfillReject__:!0,message:b})}).catch(a=>{console.error("Failed to send onMessage rejected reply",a)})};return j?k(g):k(i),!0}:a),n=({reject:b,resolve:c},d)=>{a.runtime.lastError?a.runtime.lastError.message==="The message port closed before a response was received."?c():b(new Error(a.runtime.lastError.message)):d&&d.__mozWebExtensionPolyfillReject__?b(new Error(d.message)):c(d)},o=(a,b,c,...d)=>{if(d.length<b.minArgs)throw new Error(`Expected at least ${b.minArgs} ${f(b.minArgs)} for ${a}(), got ${d.length}`);if(d.length>b.maxArgs)throw new Error(`Expected at most ${b.maxArgs} ${f(b.maxArgs)} for ${a}(), got ${d.length}`);return new Promise((a,b)=>{const e=n.bind(null,{resolve:a,reject:b});d.push(e),c.sendMessage(...d)})},p={devtools:{network:{onRequestFinished:k(l)}},runtime:{onMessage:k(m),onMessageExternal:k(m),sendMessage:o.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:o.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},q={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return b.privacy={network:{"*":q},services:{"*":q},websites:{"*":q}},j(a,p,b)})(chrome)}else a.exports=globalThis.browser});
//# sourceMappingURL=browser-polyfill.min.js.map

// webextension-polyfill v.0.12.0 (https://github.com/mozilla/webextension-polyfill)

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_11497__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_11497__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__nested_webpack_require_11497__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__nested_webpack_require_11497__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__nested_webpack_require_11497__.o(definition, key) && !__nested_webpack_require_11497__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_11497__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_11497__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
let __nested_webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__nested_webpack_require_11497__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_11497__.d(__nested_webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const browser = __nested_webpack_require_11497__(/*! webextension-polyfill/dist/browser-polyfill.min */ "./node_modules/webextension-polyfill/dist/browser-polyfill.min.js");

const STOP_ACTION = `WEBEXTENSION_MESSAGES_STOP_COMMUNICATION`;
const RESUME_ACTION = `WEBEXTENSION_MESSAGES_RESUME_COMMUNICATION`;
const EMPTY_FN = () => {};
const RESULT_PROMISES = {};
const ACTIONS = {};

browser.runtime.onMessage.addListener((message) => {
  if (message.action === STOP_ACTION) {
    stopListening(message.payload);
  }
  if (message.action === RESUME_ACTION) {
    resumeListening(message.payload);
  }
});

function setupCommunication (actions, messagesId = generateId()) {
  const answers = Object.fromEntries(actions.map((action) => [action, EMPTY_FN]));
  const messages = Object.fromEntries(
    actions.map((action) => [
      action,
      (payload, isRemoving) => {
        if (isFunction(payload)) {
          return addAnswer(payload, isRemoving, action, answers);
        }
        return sendMessageForResult(action, payload, messagesId);
      },
    ]),
  );

  ACTIONS[messagesId] = (message) => onMessage(message, answers);

  browser.runtime.onMessage.addListener(ACTIONS[messagesId]);

  return {
    ...messages,
    stop: () => stopListening(messagesId, true),
    resume: () => resumeListening(messagesId, true),
  };
}

function addAnswer (cb, isRemoving, action, answers) {
  if (isRemoving !== null) {
    return answers[action] = cb;
  }

  delete answers[action];
}

async function onMessage (message, actions = {}) {
  if (RESULT_PROMISES[message.resultId]) {
    RESULT_PROMISES[message.resultId](message.payload);
    delete RESULT_PROMISES[message.resultId];
    return;
  }

  if (message.isAnswer) {
    return;
  }

  if (actions[message.action]) {
    const payload = await actions[message.action](message.payload);
    sendMessage(message.action, payload, message.resultId, true);
  }
}

function sendMessageForResult(action, payload, messagesId) {
  if (!isListening(messagesId)) {
    return Promise.resolve();
  }
  const { resultId, promise } = createResultPromise();
  sendMessage(action, payload, resultId);
  return promise;
}

async function sendMessage (action, payload, resultId, isAnswer) {
  const message = { action, payload, resultId, isAnswer };

  if (isBackgroundScript()) {
    const [tab] = await getCurrentTab();
    if(isTabHostedByExtension(tab)) {
      browser.runtime.sendMessage(message);
    } else {
      browser.tabs.sendMessage(tab.id, message);
    }
  } else {
    browser.runtime.sendMessage(message);
  }
}

function createResultPromise () {
  const resultId = generateId();

  return {
    promise: new Promise((res) => (RESULT_PROMISES[resultId] = res)),
    resultId,
  };
}

function isBackgroundScript () {
  return (
    window.location.protocol === "chrome-extension:" ||
    window.location.protocol === "moz-extension:"
  );
}

function isTabHostedByExtension (tab) {
  return window.location.href === tab.url;
}

function isListening (messagesId) {
  return browser.runtime.onMessage.hasListener(ACTIONS[messagesId]);
}

function generateId () {
  return `${Date.now()}-${Math.random()}`;
}

function getCurrentTab () {
  return browser.tabs.query({ active: true, currentWindow: true });
}

function stopListening(messagesId, sendToReceiver) {
  browser.runtime.onMessage.removeListener(ACTIONS[messagesId]);

  if (sendToReceiver) {
    sendMessage(STOP_ACTION, messagesId);
  }
}

function resumeListening(messagesId, sendToReceiver) {
  if (!isListening(messagesId)) {
    browser.runtime.onMessage.addListener(ACTIONS[messagesId]);
  }

  if (sendToReceiver) {
    sendMessage(RESUME_ACTION, messagesId);
  }
}

function isFunction(x) {
  return typeof x === "function";
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setupCommunication);

})();

__nested_webpack_exports__ = __nested_webpack_exports__["default"];
/******/ 	return __nested_webpack_exports__;
/******/ })()
;
});

/***/ },

/***/ "./src/page/ui/components/Controls/styles.css"
/*!****************************************************!*\
  !*** ./src/page/ui/components/Controls/styles.css ***!
  \****************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.container {
  font-size: 15px;
  box-sizing: border-box;
  font-family: sans-serif;
  width: 390px;
  margin: 18px 10px 14px;
  color: black;
  line-height: normal;
}

button {
  background: none;
  font-size: 15px;
  appearance: none;
  border: 2px solid black;
  cursor: pointer;
  color: black;
  font-weight: 400;
  font-family: sans-serif;
  padding: 0 8px;
  line-height: normal;
  word-wrap: normal;
  border-radius: 0px;
  height: 24px;
  min-height: auto;
  box-shadow: none;
}

input {
  font-family: sans-serif;
  line-height: normal;
  padding: 1px 1px !important;
  font-size: 15px;
  height: 24px;
}

button:hover {
  color: DarkGreen;
  border-color: LimeGreen;
  background-color: transparent;
  box-shadow: none;
}

button:focus {
  outline: none;
}

button:active {
  outline: 1px solid LimeGreen;
}

.upper-buttons {
  float: right;
  display: flex;
  align-items: center;
  gap: 3px;
}

.search-strings {
  list-style: none;
  margin: 0px;
  padding: 0px;
  display: inline-block;
  width: 245px;
}

.search-string:first-child {
  margin-left: 0px;
}

.search-button {
  width: 50px;
}

.case-button {
  width: 22px;
  margin-left: 2px;
  padding-left: 0px;
  padding-right: 1px;
}

.search-constrols {
  display: inline-block;
  position: relative;
}

.search-id {
  width: 22px;
  padding-left: 1px;
  padding-right: 1px;
}

.remove-search {
  position: absolute;
  padding: 0px;
  width: 14px;
  height: 14px;
  top: -16px;
  right: -5px;
}

.remove-search::before, .remove-search::after {
  content: '';
  display: block;
  position: absolute;
  background: black;
  width: 100%;
  height: 2px;
  top: 4px;
  cursor: pointer;
}

.remove-search:hover {
  border-color: OrangeRed;
}

.remove-search:hover::before, .remove-search:hover::after {
  background: DarkRed;
}

.remove-search::before {
  transform: rotate(45deg);
}

.remove-search::after {
  transform: rotate(-45deg);
}

.search-id:focus {
  color: DarkGreen;
  border-color: LimeGreen;
  outline: 1px solid LimeGreen;
  animation: outline_blinker 1.3s linear infinite;
}

.hidden {
  display: none !important;
}

.results {
  overflow: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 18px;
  gap: 5px;
  height: 26px;
}

.controls {
  display: flex;
  gap: 5px;
}

.highlight-position {
  display: inline-block;
  padding-left: 5px;
  padding-top: 3px;
  vertical-align: middle;
}

.blink {
  height: 23px;
  vertical-align: bottom;
}

.move-up, .move-down {
  width: 32px;
  height: 23px;
  position: relative;
}

.move-up::before, .move-up::after, .move-down::before, .move-down::after {
  content: '';
  display: block;
  position: absolute;
  background: black;
  width: 13px;
  height: 3px;
  top: 8px;
}

.move-up:hover::before, .move-up:hover::after, .move-down:hover::before, .move-down:hover::after {
  background: DarkGreen;
}

.move-up::before, .move-down::before {
  left: 4px;
}

.move-up::after, .move-down::after {
  right: 4px;
}

.move-down::before  {
  transform: rotate(45deg);
}

.move-down::after  {
  transform: rotate(-45deg);
}

.move-up::before  {
  transform: rotate(-45deg);
}

.move-up::after  {
  transform: rotate(45deg);
}

.move-left:hover {
  border-top-color: transparent;
  border-bottom-color: transparent;
}

.move-right:hover {
  border-top-color: transparent;
  border-bottom-color: transparent;
  border-right-color: transparent;
}

.move-left, .move-right {
  padding: 0px;
  vertical-align: top;
  margin-top: 5px;
  height: 14px;
  border: none;
  border-top: 7px solid transparent;
  border-right: 7px solid black;
  border-bottom: 7px solid transparent;
}

.move-right {
  border-right: 0px solid transparent;
  border-left: 7px solid black;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./src/page/ui/components/Popup/styles.css"
/*!*************************************************!*\
  !*** ./src/page/ui/components/Popup/styles.css ***!
  \*************************************************/
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.container {
  background: white;
  border: 3px solid black;
  box-sizing: border-box;
  padding: 0;
  z-index: 2147483645;
}

.topbar {
  height: 15px;
  border-bottom: 1px solid black;
  cursor: grab;
  position: relative;
  background: #d6f5d6;
  box-sizing: border-box;
}

.tabs {
  margin: 0;
  padding: 0;
  list-style: none;
}

.close {
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  width: 32px;
  cursor: pointer;
  border-left: 1px solid black;
  background:rgba(255, 79, 43, 0.85);
}

.close:hover {
  background: rgb(255, 79, 43)
}

.close::before, .close::after {
  content: '';
  display: block;
  position: absolute;
  background: black;
  width: 11px;
  height: 2px;
  top: 6px;
  left: 11px;
  cursor: pointer;
}

.close::before {
  transform: rotate(45deg);
}

.close::after {
  transform: rotate(-45deg);
}
`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ },

/***/ "./src/common/constants.js"
/*!*********************************!*\
  !*** ./src/common/constants.js ***!
  \*********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COLORS: () => (/* binding */ COLORS),
/* harmony export */   EXTENSION_ID: () => (/* binding */ EXTENSION_ID),
/* harmony export */   FIND_HELPER_CLASS: () => (/* binding */ FIND_HELPER_CLASS),
/* harmony export */   FIND_SUGGESTION: () => (/* binding */ FIND_SUGGESTION),
/* harmony export */   FLAT_STRING_DELIMITER: () => (/* binding */ FLAT_STRING_DELIMITER),
/* harmony export */   KEYBOARD_KEYS: () => (/* binding */ KEYBOARD_KEYS),
/* harmony export */   PAGE_URLS: () => (/* binding */ PAGE_URLS),
/* harmony export */   RECENT_SEARCHES_LIMIT: () => (/* binding */ RECENT_SEARCHES_LIMIT)
/* harmony export */ });
const EXTENSION_ID = 'multi-word-searcher-webextension-unique-id';
const FIND_HELPER_CLASS = EXTENSION_ID + '-find-helper';

const FLAT_STRING_DELIMITER = "~";

const RECENT_SEARCHES_LIMIT = 15;

const PAGE_URLS = {
  SETTINGS: "/options/options.html",
  HOW_TO_USE: "/options/howtouse.html",
};

const COLORS = [
  "60, 180, 75",
  "230, 25, 75",
  "0, 130, 200",
  "245, 130, 48",
  "145, 30, 180",
  "240, 50, 230",
  "128, 128, 128",
  "210, 245, 60",
  "250, 190, 190",
  "255, 255, 25",
];

const FIND_SUGGESTION = 'Find text on page';

const DIGIT_KEYS = Array(10).fill(48).reduce((a , v, i) => (a[i] = 48 + i) && a , {});

const KEYBOARD_KEYS = {
  ...DIGIT_KEYS,
  ESC: 27,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  DELETE: 46,
  BACKSPACE: 8,
  w: 87,
  e: 69,
  r: 82,
  a: 65,
  s: 83,
  d: 68,
  f: 70,
  c: 67,
  b: 66,
  UP: 38,
  LEFT: 37,
  DOWN: 40,
  RIGHT: 39,
};


/***/ },

/***/ "./src/common/helpers.js"
/*!*******************************!*\
  !*** ./src/common/helpers.js ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   adjustNumberToBoundaries: () => (/* binding */ adjustNumberToBoundaries),
/* harmony export */   fromFlatStringToStructure: () => (/* binding */ fromFlatStringToStructure),
/* harmony export */   fromStructureToFlatString: () => (/* binding */ fromStructureToFlatString),
/* harmony export */   getAllTextNodes: () => (/* binding */ getAllTextNodes),
/* harmony export */   toNumberOrZero: () => (/* binding */ toNumberOrZero)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/common/constants.js");


function toNumberOrZero(str) {
  return +str || 0;
}

function adjustNumberToBoundaries(num, min, max, def) {
  switch (num) {
    case min - 1:
      return max;

    case undefined:
      return def;

    case max + 1:
      return min;
  }

  return num;
}

function getAllTextNodes() {
  const allTextNodes = [];
  const walker = document.createTreeWalker(
    document,
    window.NodeFilter.SHOW_TEXT,
    null,
    false,
  );
  let node;
  while ((node = walker.nextNode())) {
    allTextNodes.push(node);
  }
  return allTextNodes;
}

function fromFlatStringToStructure (flatString) {
  const searchStrings = [];
  const segments = flatString.split(_constants__WEBPACK_IMPORTED_MODULE_0__.FLAT_STRING_DELIMITER);
  for (let i = -1; i < segments.length; i+=2) {
    const isFirst = i === -1;
    searchStrings.push({
      string: segments[i + 1],
      distance: +segments[i] || null,
      first: isFirst,
      focus: isFirst
    }); 
  }

  return searchStrings;
}

function fromStructureToFlatString (searchStrings) {
  return searchStrings.map(({ distance, string }) => `${distance ? distance + _constants__WEBPACK_IMPORTED_MODULE_0__.FLAT_STRING_DELIMITER : ''}${string}`).join(_constants__WEBPACK_IMPORTED_MODULE_0__.FLAT_STRING_DELIMITER);
}


/***/ },

/***/ "./src/common/messages.js"
/*!********************************!*\
  !*** ./src/common/messages.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var webextension_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webextension-messages */ "../webextension-messages/dist/webextension-messages.js");
/* harmony import */ var webextension_messages__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webextension_messages__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (webextension_messages__WEBPACK_IMPORTED_MODULE_0___default()([
  "openSearchGroup",
  "closingPopup",
  "addSearchToContextMenu",
  "popupState",
  "saveTabData",
  "removeSearch",
  "closingTab",
  "getData",
  "addToRecent",
  "removeRecentSearch",
  "addFavoriteSearch",
  "removeFavoriteSearch",
  "setColors",
  "closingWarning"
]));

/***/ },

/***/ "./src/page/find.js"
/*!**************************!*\
  !*** ./src/page/find.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (find);

function find(searchStrings, caseSensitive) {
  const allTextNodes = getAllTextNodes();

  return filterRanges(
    findStartRanges(searchStrings[0].string, caseSensitive, allTextNodes),
    searchStrings.slice(1),
    caseSensitive,
    allTextNodes,
  );
}

function findStartRanges (string, caseSensitive, allTextNodes) {
  const ranges = [];

  for (let i = 0; i < allTextNodes.length; i++) {
    const textNode = allTextNodes[i];
    let textContent = textNode.textContent;
    let searchString = string;

    if (!caseSensitive) {
      textContent = textContent.toLowerCase();
      searchString = searchString.toLowerCase();
    }

    let startOffset = -1;
    let endOffset = 0;
    do {
      startOffset = textContent.indexOf(searchString, endOffset);
      endOffset = startOffset + string.length;
    
      if (startOffset >= 0) {
        ranges.push({
          startTextNodePos: i,
          startOffset,
          endTextNodePos: i,
          endOffset,
        });
      }
    } while (startOffset >= 0)
    
  }

  return ranges;
}

function getAllTextNodes() {
  const allTextNodes = [];
  const walker = document.createTreeWalker(
    document,
    window.NodeFilter.SHOW_TEXT,
    null,
    false,
  );
  let node;
  while ((node = walker.nextNode())) {
    allTextNodes.push(node);
  }
  return allTextNodes;
}

function filterRanges(
  startStringRanges,
  searchRefinements,
  caseSensitive,
  allTextNodes,
) {
  const finalRanges = [];
  startStringRanges.forEach((startRange) => {
    let endNodePos = startRange.endTextNodePos;
    let endNode = allTextNodes[startRange.endTextNodePos];
    let endOffset = startRange.endOffset;

    for (let i = 0; i < searchRefinements.length; i++) {
      const refinement = searchRefinements[i];

      let nextNode = endNode;
      const searchDistance = +refinement.distance + refinement.string.length;
      let remainingSearchDistance = searchDistance + endOffset;
      let nextOffset = remainingSearchDistance;
      let success = false;
      let prevNodesLength = 0;

      do {
        let nodeValueLength = nextNode.nodeValue.length;
        if (nextOffset > nodeValueLength) {
          nextOffset = nodeValueLength;
        }

        const matchPos = isStringInRange(
          endNode,
          endOffset,
          nextNode,
          nextOffset,
          refinement.string,
          caseSensitive,
        );

        if (matchPos >= 0) {
          success = true;
          endNode = nextNode;
          endOffset =
            endOffset + matchPos - prevNodesLength + refinement.string.length;
          break;
        }

        remainingSearchDistance = remainingSearchDistance - nodeValueLength;
        nextOffset = remainingSearchDistance;
        prevNodesLength += nodeValueLength;
        nextNode = allTextNodes[++endNodePos];
      } while (remainingSearchDistance > 0 && !success && nextNode);

      if (!success) {
        return;
      }
    }

    try {
      const startNode = allTextNodes[startRange.startTextNodePos];
      const range = new Range();
      range.setStart(startNode, startRange.startOffset);
      range.setEnd(endNode, endOffset);

      finalRanges.push(range);
    } catch (e) {}
  });

  return finalRanges;
}

function isStringInRange(
  startNode,
  startOffset,
  endNode,
  endOffset,
  string,
  caseSensitive,
) {
  const range = new Range();
  range.setStart(startNode, startOffset);
  range.setEnd(endNode, endOffset);
  let rangeText = range.toString();

  if (!caseSensitive) {
    string = string.toLowerCase();
    rangeText = rangeText.toLowerCase();
  }

  const matchPos = rangeText.indexOf(string);
  return matchPos;
}


/***/ },

/***/ "./src/page/highlightings.js"
/*!***********************************!*\
  !*** ./src/page/highlightings.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/page/store.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/constants */ "./src/common/constants.js");
/* harmony import */ var _ui_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/index */ "./src/page/ui/index.js");
/* harmony import */ var _ui_components_highlighting_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui/components/highlighting/styles */ "./src/page/ui/components/highlighting/styles.js");
/* harmony import */ var _ui_components_scrollbarMark_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/components/scrollbarMark/styles */ "./src/page/ui/components/scrollbarMark/styles.js");







const HIGHLIGHTINGS_POSITIONS = [];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  create: createHighlightings,
  remove: removeHighlightings,
  moveTo: jumpTo,
  switchBlinking,
  appendBlinkingStyles,
});

function createHighlightings(stringPositions, data) {
  removeHighlightings(data.searchId);

  const doc = document.documentElement;
  const scrollLeft =
    (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
  const scrollTop =
    (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

  stringPositions.forEach((stringPositions, stringIdx) => {
    const topPosition = scrollTop + stringPositions[0].top;

    const highlightData = {
      els: [],
      top: topPosition,
      left: scrollLeft + stringPositions[0].left,
    };

    for (let i = 0; i < stringPositions.length; i++) {
      const rect = stringPositions[i];

      const highlightElement = createHightlightElement(
        rect,
        scrollTop,
        scrollLeft,
        data,
      );
      document.body.appendChild(highlightElement);

      highlightData.els.push(highlightElement);
    }

    const scrollBarMark = createScrollbarMark(topPosition, data, stringIdx);
    document.body.appendChild(scrollBarMark);

    HIGHLIGHTINGS_POSITIONS[data.searchId].push(highlightData);
  });
}

function createHightlightElement(rect, scrollTop, scrollLeft, data) {
  const highlight = (0,_ui_index__WEBPACK_IMPORTED_MODULE_2__.createElement)(
    "span",
    (0,_ui_components_highlighting_styles__WEBPACK_IMPORTED_MODULE_3__["default"])({ scrollTop, scrollLeft, rect, ...data }),
  );

  highlight.classList.add(_common_constants__WEBPACK_IMPORTED_MODULE_1__.EXTENSION_ID + data.searchId);

  return highlight;
}

function createScrollbarMark(topPosition, data, rangeIdx) {
  const scrollBarMark = (0,_ui_index__WEBPACK_IMPORTED_MODULE_2__.createElement)(
    "span",
    (0,_ui_components_scrollbarMark_styles__WEBPACK_IMPORTED_MODULE_4__["default"])({ topPosition, ...data }),
  );

  scrollBarMark.title = data.searchString;
  scrollBarMark.onclick = () => {
    _store__WEBPACK_IMPORTED_MODULE_0__["default"].setCurrentSearch(data.searchId, true);
    jumpTo(data.searchId, rangeIdx);
  };
  scrollBarMark.classList.add(_common_constants__WEBPACK_IMPORTED_MODULE_1__.EXTENSION_ID + data.searchId);

  return scrollBarMark;
}

function jumpTo(searchId, id) {
  const highlightPosition = HIGHLIGHTINGS_POSITIONS[searchId][id];
  const centerHeight = window.innerHeight / 2;
  const centerWidth = window.innerWidth / 2;
  window.scrollTo(
    highlightPosition.left - centerWidth,
    highlightPosition.top - centerHeight,
  );
}

function removeHighlightings(searchId) {
  document
    .querySelectorAll("." + _common_constants__WEBPACK_IMPORTED_MODULE_1__.EXTENSION_ID + searchId)
    .forEach((el) => el.parentNode.removeChild(el));

  HIGHLIGHTINGS_POSITIONS[searchId] = [];
}

function switchBlinking(searchId, operation) {
  HIGHLIGHTINGS_POSITIONS[searchId].forEach((highlightData) =>
    highlightData.els.forEach((el) =>
      el.classList[operation](`${_common_constants__WEBPACK_IMPORTED_MODULE_1__.FIND_HELPER_CLASS}${searchId}`),
    ),
  );
}

function generateBlinkingStyles(colors) {
  let stylesString = colors
    .map(
      (color, idx) => `
    @keyframes ${_common_constants__WEBPACK_IMPORTED_MODULE_1__.FIND_HELPER_CLASS}${idx} {
      0% {
        outline-color: rgba(${color}, 1);
      }

      100% {
        outline-color: rgba(${color}, 0);
      }
    }

    .${_common_constants__WEBPACK_IMPORTED_MODULE_1__.FIND_HELPER_CLASS}${idx} {
      animation-name: '${_common_constants__WEBPACK_IMPORTED_MODULE_1__.FIND_HELPER_CLASS}${idx}';
      outline-style: solid;
      animation-duration: 1.3s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }
  `,
    )
    .join("");

  stylesString += `
    @keyframes outline_blinker {
      50% {
        outline-color: rgba(0, 0, 0, 0);
      }
    }
  `;

  return stylesString;
}

function appendBlinkingStyles (colors) {
  (0,_ui_index__WEBPACK_IMPORTED_MODULE_2__.appendStyles)(generateBlinkingStyles(colors));
}


/***/ },

/***/ "./src/page/message-answers.js"
/*!*************************************!*\
  !*** ./src/page/message-answers.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ "./src/page/store.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common/messages */ "./src/common/messages.js");



_common_messages__WEBPACK_IMPORTED_MODULE_1__["default"].saveTabData(({ tabId, colors }) => {
  _store__WEBPACK_IMPORTED_MODULE_0__["default"].set({ tabId });
  _store__WEBPACK_IMPORTED_MODULE_0__["default"].updateColors(colors);
});

_common_messages__WEBPACK_IMPORTED_MODULE_1__["default"].popupState(({ open }) => _store__WEBPACK_IMPORTED_MODULE_0__["default"].setPopupState(open));

_common_messages__WEBPACK_IMPORTED_MODULE_1__["default"].openSearchGroup(({ idx, searchString }) => {
  _store__WEBPACK_IMPORTED_MODULE_0__["default"].setCurrentSearch(idx);
  if (searchString) {
    _store__WEBPACK_IMPORTED_MODULE_0__["default"].updateCurrentSearch(searchString);
    _store__WEBPACK_IMPORTED_MODULE_0__["default"].startSearch();
  }
});

_common_messages__WEBPACK_IMPORTED_MODULE_1__["default"].removeSearch(({ idx }) => {
  if (idx === -1) {
    _store__WEBPACK_IMPORTED_MODULE_0__["default"].removeSearch({ all: true });
    return;
  }
  _store__WEBPACK_IMPORTED_MODULE_0__["default"].removeSearch({ idx, fromBackground: true })
});

/***/ },

/***/ "./src/page/store.js"
/*!***************************!*\
  !*** ./src/page/store.js ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var varstor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! varstor */ "../varstor/dist/varstor.js");
/* harmony import */ var varstor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(varstor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _highlightings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./highlightings */ "./src/page/highlightings.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/messages */ "./src/common/messages.js");
/* harmony import */ var _find__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./find */ "./src/page/find.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @common/constants */ "./src/common/constants.js");
/* harmony import */ var _common_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @common/helpers */ "./src/common/helpers.js");







varstor__WEBPACK_IMPORTED_MODULE_0___default().add({
  popupOpen: false,
  tabId: null,
  searchId: 0,
  colors: _common_constants__WEBPACK_IMPORTED_MODULE_4__.COLORS,
  searchIdEl: null,
});

varstor__WEBPACK_IMPORTED_MODULE_0___default().add({
  searches: _common_constants__WEBPACK_IMPORTED_MODULE_4__.COLORS.map((c, i) => initiateSearchOpts(i, "")),
  currentSearch: (searches, searchId) => searches[searchId],
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  ...(varstor__WEBPACK_IMPORTED_MODULE_0___default()),
  startSearch,
  removeSearch,
  switchCaseSensitivity,
  switchBlink,
  getPopupData,
  setPopupState,
  closePopup,
  setCurrentSearch,
  updateCurrentSearch,
  setCurrentHighlight,
  handleSearchStringInput,
  changeSearchStringFocus,
  removeSearchString,
  addNewSearchString,
  updateStringDistance,
  updateColors,
});

function initiateSearchOpts (i, string) {
  const { colors } = varstor__WEBPACK_IMPORTED_MODULE_0___default().get();

  return {
    searchStrings: (0,_common_helpers__WEBPACK_IMPORTED_MODULE_5__.fromFlatStringToStructure)(string),
    foundResults: 0,
    lastFocused: 0,
    searchHappened: false,
    highlightPosition: 0,
    color: colors[i],
    id: i,
    caseSensitive: false,
  };
}

function setCurrentSearch (i, noMove) {
  varstor__WEBPACK_IMPORTED_MODULE_0___default().set({ searchId: +i });

  const { highlightPosition } = varstor__WEBPACK_IMPORTED_MODULE_0___default().get().searches[i];
  !noMove &&
    highlightPosition &&
    _highlightings__WEBPACK_IMPORTED_MODULE_1__["default"].moveTo(+i, highlightPosition - 1);
}

function updateCurrentSearch (searchString) {
  const { searches, searchId } = varstor__WEBPACK_IMPORTED_MODULE_0___default().get();
  searches[searchId] = initiateSearchOpts(searchId, searchString);

  varstor__WEBPACK_IMPORTED_MODULE_0___default().set({ searches });
}

function setCurrentHighlight (i) {
  const { searches, searchId } = varstor__WEBPACK_IMPORTED_MODULE_0___default().get();
  const currentSearch = searches[searchId];

  currentSearch.highlightPosition = i;
  _highlightings__WEBPACK_IMPORTED_MODULE_1__["default"].moveTo(searchId, i - 1);

  varstor__WEBPACK_IMPORTED_MODULE_0___default().set({ searches });
}

function startSearch () {
  const { searches, searchId, tabId } = varstor__WEBPACK_IMPORTED_MODULE_0___default().get();
  const currentSearch = searches[searchId];
  const { id, color, caseSensitive, searchStrings } = currentSearch;
  const searchString = (0,_common_helpers__WEBPACK_IMPORTED_MODULE_5__.fromStructureToFlatString)(searchStrings);

  _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].addSearchToContextMenu({ tabId, idx: searchId, string: searchString });

  const foundRanges = (0,_find__WEBPACK_IMPORTED_MODULE_3__["default"])(searchStrings, caseSensitive);
  const visibleResults = foundRanges.map((r) => r.getClientRects()).filter((r) => r.length);
  _highlightings__WEBPACK_IMPORTED_MODULE_1__["default"].create(visibleResults, { searchId: id, color, searchString });

  Object.assign(currentSearch, {
    foundResults: visibleResults.length,
    searchHappened: true,
    blinkSet: false,
  });

  if (visibleResults.length) {
    currentSearch.highlightPosition = 1;
    _highlightings__WEBPACK_IMPORTED_MODULE_1__["default"].moveTo(id, 0);
  }

  varstor__WEBPACK_IMPORTED_MODULE_0___default().set({ searches });
}

function removeSearch ({ all, idx, fromBackground }) {
  const { searchId, tabId } = varstor__WEBPACK_IMPORTED_MODULE_0___default().get();

  if (all) {
    removeAllSearches(tabId);
  } else {
    const searchIdx = typeof idx === 'undefined' ? searchId : idx;
    removeSearchByIdx(tabId, searchIdx, fromBackground);
  }
}

function removeSearchByIdx(tabId, idx, fromBackground) {
  const { searches } = varstor__WEBPACK_IMPORTED_MODULE_0___default().get();
  searches[idx] = initiateSearchOpts(idx, "");
  !fromBackground && _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].addSearchToContextMenu({
    tabId,
    idx,
    string: undefined,
  });
  varstor__WEBPACK_IMPORTED_MODULE_0___default().set({ searches });
  _highlightings__WEBPACK_IMPORTED_MODULE_1__["default"].remove(idx);
}

function removeAllSearches (tabId) {
  _common_constants__WEBPACK_IMPORTED_MODULE_4__.COLORS.forEach((c, idx) => removeSearchByIdx(tabId, idx));
}

function switchBlink () {
  const { searches, searchId } = varstor__WEBPACK_IMPORTED_MODULE_0___default().get();
  const currentSearch = searches[searchId];

  if (!currentSearch.foundResults) {
    return;
  }

  const operation = currentSearch.blinkSet ? 'remove' : 'add';

  _highlightings__WEBPACK_IMPORTED_MODULE_1__["default"].switchBlinking(currentSearch.id, operation);

  currentSearch.blinkSet = !currentSearch.blinkSet;
  varstor__WEBPACK_IMPORTED_MODULE_0___default().set({ searches });
}

function switchCaseSensitivity () {
  const { searches, searchId } = varstor__WEBPACK_IMPORTED_MODULE_0___default().get();
  const currentSearch = searches[searchId];
  currentSearch.caseSensitive = !currentSearch.caseSensitive;
  varstor__WEBPACK_IMPORTED_MODULE_0___default().set({ searches });
}

function getPopupData () {
  const { popupOpen, searches } = varstor__WEBPACK_IMPORTED_MODULE_0___default().get();
  return {
    open: popupOpen,
    searches: searches.filter((el) => el.searchHappened).map((el) => ({
      color: el.color,
      string: el.searchStrings.map((string) => string.string).join(' '),
      idx: el.id,
    }))
  }
}

function closePopup () {
  const { tabId } = varstor__WEBPACK_IMPORTED_MODULE_0___default().get();
  _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].closingPopup({ tabId });
  setPopupState(false);
}

function setPopupState (open) {
  varstor__WEBPACK_IMPORTED_MODULE_0___default().set({ popupOpen: open });
}

function handleSearchStringInput (e) {
  const { searchIdEl, searches, searchId } = varstor__WEBPACK_IMPORTED_MODULE_0___default().get();
  const currentSearch = searches[searchId];
  const { searchStrings, lastFocused } = currentSearch;
  const currentString = searchStrings[lastFocused];

  if (e.keyCode === _common_constants__WEBPACK_IMPORTED_MODULE_4__.KEYBOARD_KEYS.ENTER) {
    if (e.shiftKey) {
      return addNewSearchString();
    }

    if (e.ctrlKey) {
      return splitSearchString();
    }

    if (e.altKey) {
      return searchIdEl.focus();
    }

    return startSearch();
  }

  if (
    e.keyCode === _common_constants__WEBPACK_IMPORTED_MODULE_4__.KEYBOARD_KEYS.BACKSPACE &&
    !currentString.string.length &&
    searchStrings.length > 1
  ) {
    return removeSearchString();
  }

  currentString.string = e.target.value;
  varstor__WEBPACK_IMPORTED_MODULE_0___default().set({ searches });
}

function removeSearchString () {
  const { searches, searchId } = varstor__WEBPACK_IMPORTED_MODULE_0___default().get();
  const currentSearch = searches[searchId];
  const { searchStrings, lastFocused } = currentSearch;

  searchStrings[ lastFocused - 1 ].focus = true;
  currentSearch.lastFocused = lastFocused - 1;
  searchStrings.splice(lastFocused, 1);

  varstor__WEBPACK_IMPORTED_MODULE_0___default().set({ searches });
}

function addNewSearchString () {
  const { searchId, searches } = varstor__WEBPACK_IMPORTED_MODULE_0___default().get();
  const currentSearch = searches[searchId];
  const { searchStrings, lastFocused } = currentSearch;
  const currentString = searchStrings[lastFocused];

  if (!currentString.string) {
    return;
  }

  searchStrings[ lastFocused ].focus = false;
  searchStrings.splice(lastFocused + 1, 0, { string: '', focus: true, distance: 1 });
  currentSearch.lastFocused = lastFocused + 1;

  varstor__WEBPACK_IMPORTED_MODULE_0___default().set({ searches });
}

function updateStringDistance (distance, idx) {
  const { searches, searchId } = varstor__WEBPACK_IMPORTED_MODULE_0___default().get();
  const currentSearch = searches[searchId];

  currentSearch.searchStrings[idx].distance = (0,_common_helpers__WEBPACK_IMPORTED_MODULE_5__.toNumberOrZero)(distance);

  varstor__WEBPACK_IMPORTED_MODULE_0___default().set({ searches });
}

function splitSearchString () {
  const { searches, searchId } = varstor__WEBPACK_IMPORTED_MODULE_0___default().get();
  const currentSearch = searches[searchId];
  const { searchStrings, lastFocused } = currentSearch;
  const currentString = searchStrings[lastFocused];

  const words = currentString.string.split(' ');

  const newSearchStrings =
    words.length === 1
      ? [currentString]
      : words.map((string, i) => ({
          string,
          distance: 1,
          focus: false,
        }));

  if (lastFocused === 0) {
    newSearchStrings[0].first = true;
    newSearchStrings[0].distance = null;
  }

  newSearchStrings.slice(-1)[0].focus = true;

  searchStrings.splice.apply(
    searchStrings,
    [lastFocused, 1].concat(newSearchStrings),
  );
  currentSearch.lastFocused = lastFocused + newSearchStrings.length - 1;

  varstor__WEBPACK_IMPORTED_MODULE_0___default().set({ searches });
}

function changeSearchStringFocus(idx) {
  const { searches, searchId } = varstor__WEBPACK_IMPORTED_MODULE_0___default().get();
  const currentSearch = searches[searchId];
  const { searchStrings, lastFocused } = currentSearch;
  const currentString = searchStrings[lastFocused];

  if (!currentString.string && lastFocused !== 0) {
    searchStrings.splice(lastFocused, 1);
  }

  currentString.focus = false;
  searchStrings[idx].focus = true;
  currentSearch.lastFocused = idx;

  varstor__WEBPACK_IMPORTED_MODULE_0___default().set({ searches });
}

function updateColors (colors) {
  const { searches } = varstor__WEBPACK_IMPORTED_MODULE_0___default().get();

  _highlightings__WEBPACK_IMPORTED_MODULE_1__["default"].appendBlinkingStyles(colors);

  varstor__WEBPACK_IMPORTED_MODULE_0___default().set({
    searches: searches.map((s, i) => ({ ...s, color: colors[i] })),
    colors,
  });
}

/***/ },

/***/ "./src/page/ui/components/Controls/index.js"
/*!**************************************************!*\
  !*** ./src/page/ui/components/Controls/index.js ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var simple_els_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-els/min */ "../simple-els/dist/simple-els.min.js");
/* harmony import */ var simple_els_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(simple_els_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @page/store */ "./src/page/store.js");
/* harmony import */ var _common_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/helpers */ "./src/common/helpers.js");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @common/constants */ "./src/common/constants.js");
/* harmony import */ var _page_highlightings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @page/highlightings */ "./src/page/highlightings.js");
/* harmony import */ var _markup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./markup */ "./src/page/ui/components/Controls/markup.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles.css */ "./src/page/ui/components/Controls/styles.css");








function focusInput (markup, num) {
  const childNum = num || 0;
  setTimeout(() => markup.searchStrings.children[childNum].firstElementChild.focus());
}

function getNextSearchId (curId, nextNum) {
  return (0,_common_helpers__WEBPACK_IMPORTED_MODULE_2__.adjustNumberToBoundaries)(+curId + nextNum, 0, _common_constants__WEBPACK_IMPORTED_MODULE_3__.COLORS.length - 1);
}

function getNextHighlightPosition (curPos, nextNum, foundResults) {
  return (0,_common_helpers__WEBPACK_IMPORTED_MODULE_2__.adjustNumberToBoundaries)(+curPos + nextNum, 1, foundResults);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (simple_els_min__WEBPACK_IMPORTED_MODULE_0___default()(
  _markup__WEBPACK_IMPORTED_MODULE_5__["default"],
  {
    searchStrings: { _: [] },
    searchHappened: { _:null },
    highlightPosition: { _:0 },
    foundResults: { _:0 },
    caseSensitive: { _:false },
    color: { _:null },
    blinkSet: { _:null },

    unfocusedInputs: (searchStrings) =>
      searchStrings.filter((input) => !input.focus),

    foundResults: {
      text: (searchHappened, foundResults) => {
        if (!searchHappened) {
          return;
        }

        return `${foundResults > 0 ? " of " : ""}${foundResults} results`;
      },
    },

    searchButton_click: (_, { markup }) => {
      _page_store__WEBPACK_IMPORTED_MODULE_1__["default"].startSearch();
    },

    searchId: {
      text: (id) => (+id < _common_constants__WEBPACK_IMPORTED_MODULE_3__.COLORS.length - 1 ? +id + 1 : 0),

      click: (e, { get }) => {
        const { id, highlightPosition } = get();
        highlightPosition && _page_highlightings__WEBPACK_IMPORTED_MODULE_4__["default"].moveTo(id, highlightPosition - 1);
      },

      contextmenu: (e, { markup }) => {
        e.preventDefault();
        _page_store__WEBPACK_IMPORTED_MODULE_1__["default"].removeSearch({ all: e.shiftKey });
      },

      keyup: (e, { get, markup }) => {
        const { id, highlightPosition, foundResults } = get();
        const { SHIFT, CTRL, ALT, BACKSPACE } = _common_constants__WEBPACK_IMPORTED_MODULE_3__.KEYBOARD_KEYS;
        if (
          Object.values(_common_constants__WEBPACK_IMPORTED_MODULE_3__.KEYBOARD_KEYS).indexOf(e.keyCode) < 0 ||
          [SHIFT, CTRL, ALT, BACKSPACE].includes(e.keyCode)
        ) {
          return;
        }

        switch (e.keyCode) {
          case _common_constants__WEBPACK_IMPORTED_MODULE_3__.KEYBOARD_KEYS.UP:
          case _common_constants__WEBPACK_IMPORTED_MODULE_3__.KEYBOARD_KEYS.s:
            _page_store__WEBPACK_IMPORTED_MODULE_1__["default"].setCurrentHighlight(
              getNextHighlightPosition(highlightPosition, -1, foundResults),
            );
            return;

          case _common_constants__WEBPACK_IMPORTED_MODULE_3__.KEYBOARD_KEYS.DOWN:
          case _common_constants__WEBPACK_IMPORTED_MODULE_3__.KEYBOARD_KEYS.d:
            _page_store__WEBPACK_IMPORTED_MODULE_1__["default"].setCurrentHighlight(
              getNextHighlightPosition(highlightPosition, 1, foundResults),
            );
            return;

          case _common_constants__WEBPACK_IMPORTED_MODULE_3__.KEYBOARD_KEYS.ENTER:
          case _common_constants__WEBPACK_IMPORTED_MODULE_3__.KEYBOARD_KEYS.e:
            _page_store__WEBPACK_IMPORTED_MODULE_1__["default"].startSearch();
            return;

          case _common_constants__WEBPACK_IMPORTED_MODULE_3__.KEYBOARD_KEYS.DELETE:
          case _common_constants__WEBPACK_IMPORTED_MODULE_3__.KEYBOARD_KEYS.r:
            _page_store__WEBPACK_IMPORTED_MODULE_1__["default"].removeSearch({ all: e.shiftKey });
            return;

          case _common_constants__WEBPACK_IMPORTED_MODULE_3__.KEYBOARD_KEYS.w:
            focusInput(markup);
            return;

          case _common_constants__WEBPACK_IMPORTED_MODULE_3__.KEYBOARD_KEYS.LEFT:
          case _common_constants__WEBPACK_IMPORTED_MODULE_3__.KEYBOARD_KEYS.a:
            _page_store__WEBPACK_IMPORTED_MODULE_1__["default"].setCurrentSearch(getNextSearchId(id, -1));
            return;

          case _common_constants__WEBPACK_IMPORTED_MODULE_3__.KEYBOARD_KEYS.RIGHT:
          case _common_constants__WEBPACK_IMPORTED_MODULE_3__.KEYBOARD_KEYS.f:
            _page_store__WEBPACK_IMPORTED_MODULE_1__["default"].setCurrentSearch(getNextSearchId(id, 1));
            return;

          case _common_constants__WEBPACK_IMPORTED_MODULE_3__.KEYBOARD_KEYS.c:
            _page_store__WEBPACK_IMPORTED_MODULE_1__["default"].switchCaseSensitivity();
            return;

          case _common_constants__WEBPACK_IMPORTED_MODULE_3__.KEYBOARD_KEYS.b:
            _page_store__WEBPACK_IMPORTED_MODULE_1__["default"].switchBlink();
            return;

          case _common_constants__WEBPACK_IMPORTED_MODULE_3__.KEYBOARD_KEYS.ESC:
            _page_store__WEBPACK_IMPORTED_MODULE_1__["default"].closePopup();
            return;

          default:
            _page_store__WEBPACK_IMPORTED_MODULE_1__["default"].setCurrentSearch(e.keyCode - 48);
        }
      },
      style: (color) => ({
        backgroundColor: "rgba(" + color + ", 0.35)",
      }),
    },

    moveLeft_click: (_, { get }) =>
      _page_store__WEBPACK_IMPORTED_MODULE_1__["default"].setCurrentSearch(getNextSearchId(get().id, -1)),

    moveRight_click: (_, { get }) =>
      _page_store__WEBPACK_IMPORTED_MODULE_1__["default"].setCurrentSearch(getNextSearchId(get().id, 1)),

    removeSearch_click: (e, { markup }) =>
      _page_store__WEBPACK_IMPORTED_MODULE_1__["default"].removeSearch({ all: e.shiftKey }),

    removeSearch_class: (searchStrings, searchHappened) =>
      searchStrings.length === 1 &&
      !searchStrings[0].string.length &&
      !searchHappened
        ? ["hidden"]
        : [],

    caseButton_click: () => _page_store__WEBPACK_IMPORTED_MODULE_1__["default"].switchCaseSensitivity(),
    caseButton_style: (caseSensitive, color) => ({
      backgroundColor: caseSensitive ? `rgba(${color}, 0.35)` : "white",
    }),

    results_class: (searchHappened) => (!searchHappened ? ["hidden"] : []),
    controls_class: (foundResults) => (!foundResults ? ["hidden"] : []),

    highlightPosition_text: (highlightPosition) => highlightPosition,

    moveUp_click: (e, { get }) => {
      const { highlightPosition, foundResults } = get();
      _page_store__WEBPACK_IMPORTED_MODULE_1__["default"].setCurrentHighlight(
        getNextHighlightPosition(highlightPosition, -1, foundResults),
      );
    },

    moveDown_click: (e, { get }) => {
      const { highlightPosition, foundResults } = get();
      _page_store__WEBPACK_IMPORTED_MODULE_1__["default"].setCurrentHighlight(
        getNextHighlightPosition(highlightPosition, 1, foundResults),
      );
    },

    blink_click: () => _page_store__WEBPACK_IMPORTED_MODULE_1__["default"].switchBlink(),
    blink_style: (blinkSet, color) => ({
      backgroundColor: blinkSet ? `rgba(${color}, 0.35)` : "white",
    }),

    lastFocused_onChange: (lastFocused, { get, markup }) =>
      focusInput(markup, get()[lastFocused]),
    foundResults_onChange: (_, { markup }) => {
      setTimeout(() => markup.searchId.focus());
    },

    onChange: (changes, { set, markup }) => {
      if (changes > 0) {
        const { currentSearch } = _page_store__WEBPACK_IMPORTED_MODULE_1__["default"].get();
        if (currentSearch) {
          set(currentSearch);
        }

        _page_store__WEBPACK_IMPORTED_MODULE_1__["default"].set({ searchIdEl: markup.searchId });
        _page_store__WEBPACK_IMPORTED_MODULE_1__["default"].onChange(["currentSearch"], (currentSearch) =>
          set(currentSearch),
        );
        _page_store__WEBPACK_IMPORTED_MODULE_1__["default"].onChange(
          ["popupOpen"],
          (popupOpen) => {
            popupOpen && focusInput(markup)
          },
        );
      }
    },
  },
  _styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].toString(),
));


/***/ },

/***/ "./src/page/ui/components/Controls/markup.js"
/*!***************************************************!*\
  !*** ./src/page/ui/components/Controls/markup.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SearchString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../SearchString */ "./src/page/ui/components/SearchString/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_) => `
  <div .container>
    <ul @search-strings>
      ${_(_SearchString__WEBPACK_IMPORTED_MODULE_0__["default"], (searchStrings, unfocusedInputs) =>
        searchStrings.map((str, i) => ({
          ...str,
          length: searchStrings.length,
          index: i,
          unfocusedInputs
        })))}
    </ul>
    <div .upper-buttons>
      <button @search-button>Find</button>
      <button @case-button title="Case-sensitive on/off">C</button>
      <div .search-constrols>
        <button @move-left tabindex="-1"></button>
        <button @search-id tabindex="0"></button>
        <button @remove-search tabindex="-1" title="Remove current search"></button>
        <button @move-right tabindex="-1"></button>
      </div>
    </div>

    <div @results >
      <div @controls>
        <button @blink title="Get findings to blink">Blink</button>
        <button @move-up></button>
        <button @move-down></button>
        <span @highlight-position></span>
      </div>
      <span @found-results></span>
    </div>
  </div>
`);
__webpack_require__.dn(__WEBPACK_DEFAULT_EXPORT__);

/***/ },

/***/ "./src/page/ui/components/Popup/index.js"
/*!***********************************************!*\
  !*** ./src/page/ui/components/Popup/index.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var simple_els_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-els/min */ "../simple-els/dist/simple-els.min.js");
/* harmony import */ var simple_els_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(simple_els_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @page/store */ "./src/page/store.js");
/* harmony import */ var _SearchTab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../SearchTab */ "./src/page/ui/components/SearchTab.js");
/* harmony import */ var _Controls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Controls */ "./src/page/ui/components/Controls/index.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ "./src/page/ui/components/Popup/styles.css");








/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (simple_els_min__WEBPACK_IMPORTED_MODULE_0___default()(
  (_) => `<div @container>
    <div .topbar>
      <ul .tabs>
        ${_(_SearchTab__WEBPACK_IMPORTED_MODULE_2__["default"], (searches) => searches)}
      </ul>
      <div @close></div>
    </div>
    ${_(_Controls__WEBPACK_IMPORTED_MODULE_3__["default"])}
  </div>`,
  {
    open: false,
    searches: [],
    container_style: (open) => ({ display: open ? "block" : "none" }),
    close_click: () => _page_store__WEBPACK_IMPORTED_MODULE_1__["default"].closePopup(),
    onChange: (changes, { set }) => {
      if (changes > 0) {
        set(_page_store__WEBPACK_IMPORTED_MODULE_1__["default"].getPopupData());

        _page_store__WEBPACK_IMPORTED_MODULE_1__["default"].onChange(["searches", "popupOpen"], () => {
          set(_page_store__WEBPACK_IMPORTED_MODULE_1__["default"].getPopupData());
        });
      }
    },
  },
  _styles_css__WEBPACK_IMPORTED_MODULE_4__["default"].toString(),
));

/***/ },

/***/ "./src/page/ui/components/SearchString/index.js"
/*!******************************************************!*\
  !*** ./src/page/ui/components/SearchString/index.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var simple_els_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-els/min */ "../simple-els/dist/simple-els.min.js");
/* harmony import */ var simple_els_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(simple_els_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @page/store */ "./src/page/store.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/page/ui/components/SearchString/styles.js");





const ACTIVE_SEARCH_INPUT_LENGTH = 150;
const MAX_INPUT_WIDTH = 255;
const MIN_INPUT_WIDTH = 110;
const SPACE_BETWEEN_INPUTS = 34;
const LETTER_WIDTH = 11;
const UNFOCUSED_INPUT_PADDING = 14;
const ADD_SIGN_PADDING = 12;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (simple_els_min__WEBPACK_IMPORTED_MODULE_0___default()(
  `
  <li @container>
    <input @string type="text">
    <input @distance type="text" title="Distance between substrings">
    <button @remove tabindex="-1" title="Remove substring"></button>
    <button @add-new tabindex="-1" title="Add new substring"></button>
  </li>
`,
  {
    first: { _: false },
    focus: { _: false },
    index: { _: null },
    unfocusedInputs: { _: [] },

    container_style: (index, length) => {
      const style = {};

      if (index > 0 && length > 2) {
        style.marginTop = 20;
      }

      return style;
    },

    string: {
      _: "",
      value: (string) => string,
      keyup: (e) => {
        e.stopPropagation();
        _page_store__WEBPACK_IMPORTED_MODULE_1__["default"].handleSearchStringInput(e);
      },
      click: (e, { get }) => _page_store__WEBPACK_IMPORTED_MODULE_1__["default"].changeSearchStringFocus(get().index),

      style: (focus, string, unfocusedInputs, length, index) => {
        const style = {};

        if (length < 2) {
          style.width = MAX_INPUT_WIDTH - ADD_SIGN_PADDING;
          return style;
        }

        let width;

        if (!focus) {
          width = string.length * LETTER_WIDTH + UNFOCUSED_INPUT_PADDING;
        } else {
          width = unfocusedInputs.reduce((focusedInputLength, input) => {
            return (
              focusedInputLength -
              input.string.length * LETTER_WIDTH -
              UNFOCUSED_INPUT_PADDING -
              SPACE_BETWEEN_INPUTS
            );
          }, MAX_INPUT_WIDTH);

          if (width < MIN_INPUT_WIDTH) {
            width = MAX_INPUT_WIDTH;
          }

          width = width - ADD_SIGN_PADDING;
        }

        style.width = width;

        return style;
      },
    },

    distance: {
      value: (distance) => distance,
      class: (distance) => (distance === null ? ["hidden"] : []),
      keyup: (e, { get }) =>
        _page_store__WEBPACK_IMPORTED_MODULE_1__["default"].updateStringDistance(e.target.value, get().index),
    },

    remove: {
      click: () => _page_store__WEBPACK_IMPORTED_MODULE_1__["default"].removeSearchString(),
      class: (first, focus) => (first || !focus ? ["hidden"] : []),
    },

    addNew: {
      click: () => _page_store__WEBPACK_IMPORTED_MODULE_1__["default"].addNewSearchString(),
      class: (focus) => (!focus ? ["hidden"] : []),
    },

    focus_onChange: (change, { markup, get }) => {
      if (get()[change]) {
        setTimeout(() => markup.string.focus(), 0);
      }
    },
  },
  (0,_styles__WEBPACK_IMPORTED_MODULE_2__["default"])({ SPACE_BETWEEN_INPUTS, ACTIVE_SEARCH_INPUT_LENGTH }),
));

/***/ },

/***/ "./src/page/ui/components/SearchString/styles.js"
/*!*******************************************************!*\
  !*** ./src/page/ui/components/SearchString/styles.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((vars) => `

  .container {
    position: relative;
    display: inline-block;
    margin-left: ${vars.SPACE_BETWEEN_INPUTS}px;
    margin-top: 20px;
  }

  .container:first-child {
    margin-left: 0;
    margin-top: 0;
  }

  .container:nth-child(-n + 2) {
    margin-top: 0;
  }

  .string {
    box-sizing: border-box;
    font-size: 15px;
    width: ${vars.ACTIVE_SEARCH_INPUT_LENGTH}px;
    -webkit-appearance: none;
    border-width: 0px;
    border-bottom: 2px solid black;
    background: white;
    color: black;
    padding: 1px;
  }

  .string:focus {
    outline: none;
    border-color: LimeGreen;
  }

  .distance {
    width: ${vars.SPACE_BETWEEN_INPUTS - 10}px;
    position: absolute;
    left: -30px;
    top: -17px;
    -webkit-appearance: none;
    border-width: 0px;
    border-bottom: 1px solid black;
    background: white;
    color: black;
    font-size: 13px;
    height: 16px;
  }

  .distance:focus {
    outline: none;
    border-color: LimeGreen;
  }

  .hidden {
    display: none;
  }

  .add-new, .remove {
    width: 10px;
    height: 10px;
    padding: 0px;
    position: absolute;
    border: none;
  }

  .add-new {
    right: -14px;
    bottom: 7px;
  }

  .remove {
    left: -14px;
    bottom: 4px;
  }

  .add-new::before, .add-new::after, .remove::before, .remove::after {
    content: '';
    display: block;
    position: absolute;
    background: black;
    cursor: pointer;
    width: 100%;
  }

  .add-new::before, .add-new::after {
    background: DarkGreen;
    height: 2px;
    top: 5px;
  }

  .add-new:hover::before, .add-new:hover::after {
    background: LimeGreen;
  }

  .remove::before, .remove::after {
    background: DarkRed;
    height: 2px;
    top: 5px;
  }

  .remove:hover::before, .remove:hover::after {
    background: OrangeRed;
  }

  .add-new::before {
    transform: rotate(90deg);
  }

  .remove::before {
    transform: rotate(45deg);
  }

  .remove::after {
    transform: rotate(-45deg);
  }

`);
__webpack_require__.dn(__WEBPACK_DEFAULT_EXPORT__);


/***/ },

/***/ "./src/page/ui/components/SearchTab.js"
/*!*********************************************!*\
  !*** ./src/page/ui/components/SearchTab.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var simple_els_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simple-els/min */ "../simple-els/dist/simple-els.min.js");
/* harmony import */ var simple_els_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(simple_els_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @page/store */ "./src/page/store.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (simple_els_min__WEBPACK_IMPORTED_MODULE_0___default()(
  `
  <li @tab></li>  
`,
  {
    title: "",
    color: "",
    tab: {
      attrs: (title) => ({ title }),
      style: (color) => ({ backgroundColor: "rgba(" + color + ", 0.5)" }),
      click: (e, { get }) =>
        _page_store__WEBPACK_IMPORTED_MODULE_1__["default"].setCurrentSearch(get().idx),
      contextmenu: async (e, { get }) => {
        e.preventDefault();
        _page_store__WEBPACK_IMPORTED_MODULE_1__["default"].removeSearch({ all: e.shiftKey, idx: get().idx });
      },
    },
  },
  `
  .tab {
    float: left;
    width: 27px;
    height: 15px;
    borderRight: 1px solid black;
    cursor: pointer;
  }
`,
));

/***/ },

/***/ "./src/page/ui/components/highlighting/styles.js"
/*!*******************************************************!*\
  !*** ./src/page/ui/components/highlighting/styles.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((vars) => ({
  position: 'absolute',
  height: vars.rect.height + 'px',
  width: vars.rect.width + 'px',
  top: vars.scrollTop + vars.rect.y + 'px',
  left: vars.scrollLeft + vars.rect.x + 'px',
  'z-index': 2147483644,
  'pointer-events': 'none',
  background: 'rgba(' +  vars.color + ', 0.25)',
  'outline-width': '3px',
}));
__webpack_require__.dn(__WEBPACK_DEFAULT_EXPORT__);


/***/ },

/***/ "./src/page/ui/components/scrollbarMark/styles.js"
/*!********************************************************!*\
  !*** ./src/page/ui/components/scrollbarMark/styles.js ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((vars) => ({
  position: 'fixed',
  height: '5px',
  width: '15px',
  top: window.innerHeight / document.body.scrollHeight * vars.topPosition + 'px',
  right: '0px',
  'z-index': 2147483645,
  cursor: 'pointer',
  background: 'rgba(' +  vars.color + ', 0.5)',
}));
__webpack_require__.dn(__WEBPACK_DEFAULT_EXPORT__);


/***/ },

/***/ "./src/page/ui/index.js"
/*!******************************!*\
  !*** ./src/page/ui/index.js ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendStyles: () => (/* binding */ appendStyles),
/* harmony export */   createElement: () => (/* binding */ createElement)
/* harmony export */ });
function createElement (type, styles) {
  const el = document.createElement(type);

  for (let attr in styles) {
    el.style.setProperty(attr, styles[attr], 'important');
  }

  return el;
}

function appendStyles(styleStr) {
  const styleEl = document.createElement("style");
  styleEl.appendChild(document.createTextNode(styleStr));
  document.head.appendChild(styleEl);
}


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/set anonymous default export name */
/******/ 	(() => {
/******/ 		// set .name for anonymous default exports per ES spec
/******/ 		__webpack_require__.dn = (x) => {
/******/ 			(Object.getOwnPropertyDescriptor(x, "name") || {}).writable || Object.defineProperty(x, "name", { value: "default", configurable: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!****************************!*\
  !*** ./src/page-script.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @page/store */ "./src/page/store.js");
/* harmony import */ var _page_ui_components_Popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @page/ui/components/Popup */ "./src/page/ui/components/Popup/index.js");
/* harmony import */ var _common_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @common/messages */ "./src/common/messages.js");
/* harmony import */ var _page_message_answers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @page/message-answers */ "./src/page/message-answers.js");





window.onunload = () => {
  const { tabId } = _page_store__WEBPACK_IMPORTED_MODULE_0__["default"].get();
  _common_messages__WEBPACK_IMPORTED_MODULE_2__["default"].closingTab({ tabId });
};

_page_ui_components_Popup__WEBPACK_IMPORTED_MODULE_1__["default"].asPopup({
  handle: ".topbar",
  left: 20,
  top: 20,
});

})();

/******/ })()
;