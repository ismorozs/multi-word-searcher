/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../simple-els/dist/simple-els.min.js"
/*!********************************************!*\
  !*** ../simple-els/dist/simple-els.min.js ***!
  \********************************************/
(module) {

/*! For license information please see simple-els.min.js.LICENSE.txt */
!function(e,t){ true?module.exports=t():0}(this,()=>(()=>{"use strict";var e={"./src/combine.ts"(e,t,n){n.r(t),n.d(t,{combineState:()=>u,combineTemplates:()=>c});var s=n("./src/consts.ts"),r=n("./src/state.ts"),i=n("./src/helpers.ts"),o=n("./src/html.ts"),a=n("./src/index.ts");function c(e,t){const n={},s=l.bind(null,n,t),r=e.call(null,s);return[(0,o.cloneHTMLMarkup)(r),n]}function l(e,t,n,r){const[o,c]=function(e,t){if(e.markup)return[e,!1];return[(0,a.default)(e,{},"",t),!0]}(n,t),l=Object.keys(e).length,u=`${s.UTIL_KEYS.CHILDREN}${l}`,p=(0,i.isFunction)(r)&&r,f=p&&(0,i.getParamNames)(r)||[];return e[u]={createComponent:o,values:{[s.UTIL_KEYS.VALUE]:{value:!p&&d(r),computeFn:p,dependencies:f}},dependants:{},children:[],isRendered:!1,isAnonymous:c,isFastApply:!1,el:{},isParent:!0},`<span ${s.BINDING_SIGN.COMPONENT}${u}></span>`}function u(e,t){Object.assign(e.bindings,t),(0,i.forEach)(t,(t,n)=>{const{dependencies:o,computeFn:a,value:c}=n.values[s.UTIL_KEYS.VALUE];o.forEach(n=>{(0,i.set)(e.bindings,[n,s.UTIL_KEYS.DEPENDANTS,t],[s.UTIL_KEYS.VALUE])});const l=a&&function(e,t){const n=a.apply(null,(0,r.getArguments)(e,t));return n?d(n):[]};n.values[s.UTIL_KEYS.VALUE].computeFn=l,n.values[s.UTIL_KEYS.VALUE].value=l?l(o,e):c})}function d(e){return(0,i.isArray)(e)?e[0]&&!(0,i.isArray)(e[0])?e.map(e=>[e]):e:[[e||{}]]}},"./src/consts.ts"(e,t,n){n.r(t),n.d(t,{BINDING_SIGN:()=>r,CHILDREN_LIST_OPERATIONS:()=>u,DESTROY_OP:()=>o,EMPTY_FN:()=>l,FORM_TAGS:()=>d,NO_EVENT_TYPES:()=>c,REACTIVE_TYPES:()=>a,STATE_BEHAVIOUR_DELIMITER:()=>s,UTIL_KEYS:()=>i});const s="_",r={BEHAVIOR:"@",CLASS:".",COMPONENT:"&"},i={VALUE:s,DEPENDANTS:"dependants",CHILDREN:"children",VALUES:"values",MARKUP:"el",ON_MESSAGE:"onMessage",ON_CHANGE:"onChange"},o="destroy",a=["html","value","style","text","attrs","class",i.VALUE,void 0],c=a.concat([i.ON_CHANGE]),l=()=>{},u=[o,"set","insert","push"],d=["INPUT","SELECT","TEXTAREA"]},"./src/error.ts"(e,t,n){n.r(t),n.d(t,{throwIllegalBindingNameError:()=>i,throwNoDeclaredDependencyError:()=>o});var s=n("./src/consts.ts"),r=n("./src/helpers.ts");function i(e){a(`Binding @${e} can't be added in the markup, because this name is reserved by the library.\nOther reserved names: ${(0,r.map)(s.UTIL_KEYS,(e,t)=>t)}`)}function o(e,t){a(`Dependency '${e}' is used for '${t}', but is not declared as a state value of the component.`)}function a(e){throw new Error(e)}},"./src/helpers.ts"(e,t,n){n.r(t),n.d(t,{addEnding:()=>E,copy:()=>m,default:()=>g,filter:()=>N,forEach:()=>v,get:()=>I,getFilteredKeys:()=>_,getParamNames:()=>u,isArray:()=>b,isDOMElement:()=>L,isFunction:()=>a,isHTMLString:()=>i,isNumber:()=>h,isObject:()=>c,isString:()=>o,isUndefined:()=>T,map:()=>d,set:()=>A,toCamelCase:()=>f,toDashCase:()=>p,uid:()=>y});const s=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,r=/([^\s,]+)/g;function i(e){return o(e)&&0===e.indexOf("<")}function o(e){return"[object String]"===l(e)}function a(e){return"[object Function]"===l(e)}function c(e){return"[object Object]"===l(e)}function l(e){return Object.prototype.toString.call(e)}function u(e){const t=e.toString().replace(s,"").split("=>")[0],n=t.slice(t.indexOf("(")+1,t.indexOf(")")).match(r);return null===n?[]:n}function d(e,t){const n=Object.entries(e).map(([e,n])=>t(e,n));return 2===n[0]?.length?Object.fromEntries(n):n}function p(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function f(e){return e.replace(/-([a-z])/gi,(e,t)=>t.toUpperCase())}function E(e,t,n){return`${e}${n&&t||""}`}function h(e){return"[object Number]"===l(e)&&e==e}const g=m;function m(e,t){if(!e)return m({},t);for(let n in t)T(t[n])||(t.hasOwnProperty(n)&&c(t[n])?(e[n]||(e[n]={}),m(e[n],t[n])):b(t[n])?(e[n]||(e[n]=[]),S(e[n],t[n])):L(t[n])?e[n]=t[n].cloneNode(!0):e[n]=t[n]);return e}function S(e,t){for(let n=0;n<t.length;n++)c(t[n])?(e[n]=e[n]||{},m(e[n],t[n])):b(t[n])?(e[n]=e[n]||[],S(e[n],t[n])):e[n]=t[n];return e}function L(e){return!!e&&void 0!==e.tagName}function T(e){return void 0===e}function b(e){return"[object Array]"===l(e)}function v(e,t){Object.entries(e||{}).forEach(([e,n])=>t(e,n))}function A(e,t,n){if(!t.length)return c(n)?Object.assign(e,n):n;let s=e;for(var r=0;r<t.length-1;r++)s=s[t[r]]?s[t[r]]:s[t[r]]={};return c(n)?(s[t[r]]=s[t[r]]||{},Object.assign(s[t[r]],n)):s[t[r]]=n,e}function N(e,t){return Object.fromEntries(Object.entries(e||{}).filter(([e,n])=>!0===t(e,n)))}function y(){return Date.now().toString(36)+Math.random().toString(36).substr(2)}function I(e,t,n){let s=e;for(let e=0;e<t.length;e++)try{s=s[t[e]]}catch{return n}return T(s)?n:s}function _(e,t){return d(N(e,(e,n)=>t(e,n)),e=>e)}},"./src/html.ts"(e,t,n){n.r(t),n.d(t,{MARKUP_ACTIONS:()=>a,addChildMarkup:()=>h,applyToMarkup:()=>p,cloneHTMLMarkup:()=>c,gatherBindings:()=>l,removeChildMarkup:()=>E,setupEventListener:()=>f,walkNodes:()=>d});var s=n("./src/helpers.ts"),r=n("./src/consts.ts"),i=n("./src/popup.ts"),o=n("./src/error.ts");const a={[r.UTIL_KEYS.VALUE]:({el:e,isFastApply:t},n)=>t&&function(e,t=""){r.FORM_TAGS.includes(e.tagName)?e.value=t:e.textContent=t}(e,n),value:({el:e},t)=>e.value=t,text:({el:e},t)=>e.textContent=t,html:({el:e},t)=>e.innerHTML=t,attrs:({el:e,attrs:t},n)=>function(e,t){for(const n of e.getAttributeNames())t[n]||e.removeAttribute(n);Object.entries(t).forEach(([t,n])=>e.setAttribute(t,n))}(e,{...t,...n,class:e.className}),style:({el:e},t)=>function(e,t){(0,s.forEach)(t,(t,n)=>{e.style.setProperty((0,s.toDashCase)(t),(0,s.addEnding)(n,"px",(0,s.isNumber)(n)))})}(e,t),class:({el:e,classes:t,templateId:n},s)=>function(e,t){e.classList.value=t.join(" ")}(e,s.map(e=>`${n}${e}`).concat(t))};function c(e){return function(e){const t=new DOMParser;return t.parseFromString(e,"text/html").body.firstElementChild}((0,s.isHTMLString)(e.trim())?e:document.querySelector(e)?.innerHTML)}function l(e,t,n){const s={};return d(e,e=>{const{name:i,el:a,classes:c,attrs:l,isComponent:d,placeholder:p}=function(e,t,n){let s={};const i={},a=[],c=e.getAttributeNames();for(const l of c)if(l.startsWith(r.BINDING_SIGN.CLASS))n&&(i[l]=!0)||e.removeAttribute(l),u(e,t,l.slice(r.BINDING_SIGN.CLASS.length),a);else{if(l.startsWith(r.BINDING_SIGN.BEHAVIOR)){const c=l.slice(r.BINDING_SIGN.BEHAVIOR.length);Object.values(r.UTIL_KEYS).includes(c)&&(0,o.throwIllegalBindingNameError)(c),n&&(i[l]=!0)||e.removeAttribute(l),s={name:c,el:e},u(e,t,c,a);continue}l.startsWith(r.BINDING_SIGN.COMPONENT)?(n&&(i[l]=!0)||e.removeAttribute(l),s={name:l.slice(r.BINDING_SIGN.COMPONENT.length),el:e,placeholder:e,isComponent:!0}):i[l]=e.getAttribute(l)}return{...s,classes:a,attrs:i}}(e,t,n);i&&(s[i]={el:a,classes:c,attrs:l,isComponent:d,placeholder:p,templateId:t})}),s}function u(e,t,n,s){const i=n.split(r.BINDING_SIGN.CLASS).map(e=>`${t}${e}`),o=e.classList;o.add.apply(o,i),s.push.apply(s,i)}function d(e,t){t(e),Array.prototype.slice.call(e.children).forEach(e=>d(e,t))}function p(e,t,n){e&&a[t]&&a[t](e,n)}function f(e,t,n,s){e.addEventListener(t,e=>n(e,s))}function E(e,t){const{children:n,el:s}=e.parentBinding,r=e.el;if(1===n.length&&s)return r?.parentNode?.replaceChild(s.placeholder,r),void(s.el=s.placeholder);0===t&&(s.el=r?.nextSibling),r?.parentNode?.removeChild(r)}function h(e,t,n){const{markup:s,styles:r,id:o}=t,{isNoShadow:a,nextNode:c,placeholder:l,isPopup:u}=n;let d;if(a)d=s;else{d=document.createElement("div");const e=d.attachShadow({mode:"open"});e.adoptedStyleSheets=r,e.appendChild(s)}l?e.replaceChild(d,l):c?e.insertBefore(d,c):e.appendChild(d),u&&(0,i.addPopupLogic)(s,{...n,id:o})}},"./src/index.ts"(e,t,n){n.r(t),n.d(t,{append:()=>u,default:()=>d});var s=n("./src/state.ts"),r=n("./src/html.ts"),i=n("./src/styles.ts"),o=n("./src/helpers.ts"),a=n("./src/combine.ts"),c=n("./src/lifecycle.ts");function l(e,t,n,i={}){e.isAnonymous&&(0,o.copy)(e.state,(0,s.prepareStateSettings)(t,!0));const a=e.markup?.cloneNode(!0),c=(0,o.copy)({},e.state);c.parentState=i.parentState,c.parentBinding=i.parentBinding,c.el=a;const l=(0,r.gatherBindings)(a,e.id),d={api:c&&(0,s.setupComponentMarkup)(l,c,e.isAnonymous?(0,s.getValues)((0,s.prepareStateSettings)(t)):t),...e,markup:a,state:c};if(n)return u(n,d,i)}function u(e,t,n={}){(0,r.addChildMarkup)(e,t,n);const{state:s}=t;return s.isRendered=!0,(0,c.runStateChangeListeners)(!0,s)}const d=function(e,t,n,c){const u=c||(0,o.uid)(),[d,p]=(0,o.isFunction)(e)?(0,a.combineTemplates)(e,u):[(0,r.cloneHTMLMarkup)(e),{}],[f,E]=(0,o.isObject)(t)?[(0,s.prepareStateSettings)(t),(0,i.prepareStyles)(u,n)]:[{},(0,i.prepareStyles)(u,t)],h=!Object.keys(f).length||!!c;(0,a.combineState)(f,p);const g=(0,r.gatherBindings)(d,u,!0);(0,s.updateTemplateMarkup)(g,f);const m=(0,o.map)(p,(e,t)=>t).map(e=>e.createComponent?.styles).reduce((e,t)=>e.concat(t),[]).concat(E),S={id:u,markup:d,state:f,styles:m,isAnonymous:h};return Object.assign((e,t,n)=>l(S,e,t,n),{...S,asPopup:e=>l(S,{},document.body,{...e,isPopup:!0})})}},"./src/lifecycle.ts"(e,t,n){n.r(t),n.d(t,{runStateChangeListeners:()=>i});var s=n("./src/helpers.ts"),r=n("./src/state.ts");function i(e,t){const{onChange:n,el:i}=t,o=(0,r.getStateBindings)(t),a=(0,r.createStateApi)(t);return(0,s.forEach)(o,(t,n)=>{if((0,s.isArray)(e)&&!e.includes(t))return;const r=(0,s.isArray)(e)?[t]:e;n?.values?.onChange?.value?.(r,a,n.el?.el)}),n(e,a,i),a}},"./src/popup.ts"(e,t,n){n.r(t),n.d(t,{addPopupLogic:()=>a});var s=n("./src/helpers.ts"),r=n("./src/styles.ts");const i={left:"X",top:"Y"},o=["left","top","bottom","right"];function a(e,t){const{handle:n,closeButton:a,id:c}=t;a&&e?.parentNode?.querySelector((0,r.addClassPrefix)(a,c))?.addEventListener("click",()=>e?.parentNode?.removeChild(e)),n&&e?.parentNode?.querySelector((0,r.addClassPrefix)(n,c))?.addEventListener("mousedown",t=>{const n=t.target,s=t.clientX-e.getBoundingClientRect().left,r=t.clientY-e.getBoundingClientRect().top;function i(t){requestAnimationFrame(()=>{e.style.left=t.clientX-s+"px",e.style.top=t.clientY-r+"px",e.style.transform="none"})}function o(){document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",o),n?.removeEventListener("mouseup",o)}document.addEventListener("mouseup",o),n?.addEventListener("mouseup",o),document.addEventListener("mousemove",i)}),function(e,t){const{left:n,top:r,bottom:a,right:c}=t;e.style.position="fixed";const{width:l,height:u}=e.getBoundingClientRect();n||c||(t.left="center");r||a||(t.top="center");c&&!n&&(delete t.right,t.left=document.body.clientWidth-l-c);a&&!r&&(delete t.bottom,t.top=window.innerHeight-u-a);const d=[];(0,s.forEach)(t,(e,t)=>{if(o.includes(e)){if("center"===t)return d.push(`${e}: 50%`,`transform: translate${i[e]}(-50%)`);d.push(`${e}: ${(0,s.addEnding)(t,"px",(0,s.isNumber)(t))}`)}}),"center"===t.left&&"center"===t.top&&d.push("transform: translate(-50%, -50%)"),e.style=`${e.style.cssText}; ${d.join(";")}`}(e,t)}},"./src/state.ts"(e,t,n){n.r(t),n.d(t,{createChildrenApi:()=>v,createStateApi:()=>S,getArguments:()=>p,getStateBindings:()=>L,getValues:()=>f,prepareStateSettings:()=>a,setupComponentMarkup:()=>l,updateTemplateMarkup:()=>c});var s=n("./src/html.ts"),r=n("./src/helpers.ts"),i=n("./src/consts.ts"),o=n("./src/lifecycle.ts");function a(e={},t){const n={onMessage:e.onMessage||i.EMPTY_FN,onChange:e.onChange||i.EMPTY_FN,bindings:{}};return(0,r.map)(i.UTIL_KEYS,(e,t)=>t).forEach(t=>delete e[t]),(0,r.forEach)(e,(e,s)=>{const[o,a]=function(e){const t=e.split(i.STATE_BEHAVIOUR_DELIMITER);if(1===t.length)return[t[0]];const n=t.slice(0,-1).join(i.STATE_BEHAVIOUR_DELIMITER),s=t.slice(-1)[0];return[n,s]}(e);n.bindings[o]||(n.bindings[o]={values:{[i.UTIL_KEYS.VALUE]:{}},children:[],el:{},isFastApply:!a&&!(0,r.isObject)(s),dependants:{}});const c=n.bindings[o];if((0,r.isObject)(s))return(0,r.forEach)(s,(e,s)=>{c.values[e]=u(o,e,s,n,t)});c.values[a||i.UTIL_KEYS.VALUE]=u(o,a,s,n,t)}),n}function c(e,t){(0,r.forEach)(e,(e,n)=>{const i=t.bindings[(0,r.toCamelCase)(e)];n.isFastApply=i?.isFastApply,i&&(0,r.forEach)(i.values,(e,t)=>(0,s.applyToMarkup)(n,e,t?.value))})}function l(e,t,n){return(0,r.forEach)(e,(e,n)=>{const s=t.bindings[(0,r.toCamelCase)(e)];n.isFastApply=!s||s?.isFastApply,(0,r.set)(t.bindings,[(0,r.toCamelCase)(e),i.UTIL_KEYS.MARKUP],n)}),E(t,n),(0,r.forEach)(t.bindings,(e,n)=>{const{isParent:o,el:a,isRendered:c,values:l}=n,{[i.UTIL_KEYS.VALUE]:u}=l||{};if(o){if(!c){const e=v(n),s=A(u.value,[]);for(let t of i.CHILDREN_LIST_OPERATIONS)s[t].forEach(n=>{e[t].apply(null,[n])});N(t)}return void(n.parentState=t)}const d=(0,r.filter)(n.values,(e,t)=>function(e,t){return(0,r.isFunction)(t)&&!i.NO_EVENT_TYPES.includes(e)}(e,t.value));(0,r.forEach)(d,(e,n)=>(0,s.setupEventListener)(a?.el,e,n.value,S(t)))}),S(t)}function u(e,t,n,s,o){const a=function(e,t){return(0,r.isFunction)(t)&&i.REACTIVE_TYPES.includes(e)}(t,n),c=a?(0,r.getParamNames)(n):[];c&&c.forEach(n=>{(0,r.get)(s.bindings,[n,i.UTIL_KEYS.DEPENDANTS,e])||(0,r.set)(s.bindings,[n,i.UTIL_KEYS.DEPENDANTS,e],[]),s.bindings[n].dependants[e].push(t||i.UTIL_KEYS.VALUE)});const l=a&&function(e,t){return n.apply(null,p(e,t))};return{value:!o||d(t,n)?a?l(c,s):n:void 0,computeFn:l,dependencies:c}}function d(e,t){return(0,r.isFunction)(t)&&!i.REACTIVE_TYPES.includes(e)}function p(e,t){const n=f(t);return e.map(e=>n[e])}function f(e){return(0,r.map)(L(e),(e,t)=>[e,t.values._?.value])}function E(e,t){const n={};for(let[s,r]of Object.entries(t))h(s,r,e,n,t);!function(e,t){(0,r.forEach)(t,(t,n)=>{const a=e.bindings[t],{el:c,children:l,isParent:u}=a;if(u){const{newValue:e,prevValue:t}=n[i.UTIL_KEYS.VALUE],s=v(a),r=A(e,t);for(let e of i.CHILDREN_LIST_OPERATIONS){r[e].forEach(t=>{e===i.DESTROY_OP&&l.length&&(0,o.runStateChangeListeners)(!1,l[t.index].state),s[e].apply(null,[t])})}return void(a.isRendered=!0)}(0,r.forEach)(n,(e,t)=>!t.isSame&&(0,s.applyToMarkup)(c,e,t.newValue))}),N(e);const n=(0,r.getFilteredKeys)(t,(t,n)=>!!n[i.UTIL_KEYS.VALUE]&&!n[i.UTIL_KEYS.VALUE].isSame&&!e.bindings[t].isParent);e.isRendered&&n.length&&(0,o.runStateChangeListeners)(n,e)}(e,n)}function h(e,t,n,s,o){const a=(0,r.get)(n.bindings,[e,i.UTIL_KEYS.VALUES,i.UTIL_KEYS.VALUE,"value"]);a!==t?((0,r.set)(n.bindings,[e,i.UTIL_KEYS.VALUES,i.UTIL_KEYS.VALUE,"value"],t),(0,r.set)(s,[e,i.UTIL_KEYS.VALUE],{newValue:t,prevValue:a})):(0,r.set)(s,[e,i.UTIL_KEYS.VALUE],{isSame:!0}),g(e,n,s,o)}function g(e,t,n,s){const o=(0,r.get)(t.bindings,[e,i.UTIL_KEYS.DEPENDANTS],{});for(let[e,a]of Object.entries(o))a.forEach(o=>{const a=t.bindings[e].values[o],{computeFn:c,dependencies:l}=a,u=(0,r.getFilteredKeys)(n,(e,t)=>!!t[i.UTIL_KEYS.VALUE]),d=Object.keys(s),p=(0,r.get)(n,[e,o]);if(!l.every(e=>d.includes(e)&&u.includes(e)||!d.includes(e))||p)return;const f=a.value,E=c(l,t);f!==E&&(a.value=E,(0,r.set)(n,[e,o],{newValue:E,prevValue:f}),o===i.UTIL_KEYS.VALUE&&g(e,t,n,s))})}function m(e,t){let n=e.parentState||e.parentBinding?.parentState;const s=e.parentBinding,r=s.children.findIndex(t=>t.state===e),i=()=>n={};for(;n;)n.onMessage(t,{stop:i,...S(n)},{index:r,...v(s,!0)}),n=n.parentState||n.parentBinding?.parentState}function S(e){return{get:f.bind(null,e),set:E.bind(null,e),send:m.bind(null,e),children:T.bind(null,e),[i.DESTROY_OP]:s.removeChildMarkup.bind(null,e),markup:b(e),state:e}}function L(e){return(0,r.filter)(e.bindings,(e,t)=>!!t?.values?.[i.UTIL_KEYS.VALUE]&&!t?.isParent)}function T(e){return(0,r.map)((0,r.filter)(e.bindings,(e,t)=>!!t?.isParent),(e,t)=>[e,v(t)])}function b(e){return(0,r.map)((0,r.filter)(e.bindings,(e,t)=>!!t?.el?.el&&!t?.isParent),(e,t)=>[e,t?.el?.el])}function v(e,t){const{createComponent:n,parentState:s,children:r,values:{[i.UTIL_KEYS.VALUE]:o}}=e,c=(t,r,i)=>{const{el:o}=e,a=n?.(t,o?.el.parentNode,{isNoShadow:!0,placeholder:i&&o?.el,nextNode:r,parentBinding:e,parentState:s});return i&&o&&(o.el=a?.state.el),a};return{[i.DESTROY_OP]:({index:e})=>{r[e][i.DESTROY_OP](e),r.splice(e,1),t&&o.value.splice(e,1)},push:({values:e})=>{const n=r&&r.length&&r[r.length-1].state.el?.nextSibling;r.push(c(e,n,!r.length)),t&&o.value.push(e)},insert:({values:e,index:n=0})=>{const s=r[n].state.el;r.splice(n,0,c(e,s)),t&&o.value.splice(n,0,o)},set:({values:e,index:t})=>{if(t||0===t)return r[t].set(n?.isAnonymous?f(a(e)):e)},get:e=>e||0===e?r[e].get():r.map(({get:e})=>e()),forEach:e=>r.forEach(e)}}function A(e,t){const n=[],s=[],r=[],o=[],a={},c={};let l=0;t.forEach(([t,r],i)=>{const o=c[r]>=0?c[r]+1:0,u=e.slice(o).findIndex(([e,t])=>t===r),d=i-l;-1===u?(n.push({index:d,values:t}),l++):(c[r]=o+u,s.push({values:e[c[r]][0],index:d}),a[c[r]]=d)});let u=0,d=0;return e.forEach(([e],n)=>{const s=a[n];s>=0?d=s+1+u:d>=t.length+u?o.push({values:e,index:n}):(r.push({values:e,index:d}),d++,u++)}),{[i.DESTROY_OP]:n,set:s,insert:r,push:o}}function N(e){(0,r.forEach)(e.bindings,(t,n)=>{if(n?.isAnonymous){v(n).forEach(({set:t})=>t(f(e)))}})}},"./src/styles.ts"(e,t,n){function s(e,t){const n=new CSSStyleSheet;n.replaceSync(t);for(let t=0;t<n.cssRules.length;t++){const s=n.cssRules[t];s.selectorText=r(s.selectorText,e)}return[n]}function r(e,t){return e.replaceAll(".",`.${t}`)}n.r(t),n.d(t,{addClassPrefix:()=>r,prepareStyles:()=>s})}};const t={};function n(s){const r=t[s];if(void 0!==r)return r.exports;const i=t[s]={exports:{}};if(!(s in e)){delete t[s];const e=new Error("Cannot find module '"+s+"'");throw e.code="MODULE_NOT_FOUND",e}return e[s](i,i.exports,n),i.exports}n.d=(e,t)=>{if(Array.isArray(t))for(var s=0;s<t.length;){var r=t[s++],i=t[s++];n.o(e,r)?0===i&&s++:0===i?Object.defineProperty(e,r,{enumerable:!0,value:t[s++]}):Object.defineProperty(e,r,{enumerable:!0,get:i})}else for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};let s=n("./src/index.ts");return s=s.default,s})());

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
/******/ 	var __webpack_modules__ = ({

/***/ "./src/types.d.ts"
/*!************************!*\
  !*** ./src/types.d.ts ***!
  \************************/
() {



/***/ },

/***/ "./src/actions.ts"
/*!************************!*\
  !*** ./src/actions.ts ***!
  \************************/
(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_733__) {

"use strict";
__nested_webpack_require_733__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_733__.d(__nested_webpack_exports__, {
/* harmony export */   addStateActions: () => (/* binding */ addStateActions)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_733__(/*! ./types */ "./src/types.d.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_733__.n(_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_733__(/*! . */ "./src/index.ts");


function addStateActions(namespace, actions) {
    for (const [actionName, actionFn] of Object.entries(actions)) {
        ___WEBPACK_IMPORTED_MODULE_1__.STATE[namespace(actionName)] = {
            key: actionName,
            namespace,
            value: actionFn.bind(null, (0,___WEBPACK_IMPORTED_MODULE_1__.createStore)(namespace())),
            isAction: true,
            listeners: [],
        };
    }
    return (0,___WEBPACK_IMPORTED_MODULE_1__.createStore)(namespace());
}


/***/ },

/***/ "./src/constants.ts"
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_2022__) {

"use strict";
__nested_webpack_require_2022__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_2022__.d(__nested_webpack_exports__, {
/* harmony export */   NAMESPACE_DELIMITER: () => (/* binding */ NAMESPACE_DELIMITER)
/* harmony export */ });
const NAMESPACE_DELIMITER = "::";


/***/ },

/***/ "./src/helpers.ts"
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_2488__) {

"use strict";
__nested_webpack_require_2488__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_2488__.d(__nested_webpack_exports__, {
/* harmony export */   filter: () => (/* binding */ filter),
/* harmony export */   forEach: () => (/* binding */ forEach),
/* harmony export */   getParamNames: () => (/* binding */ getParamNames),
/* harmony export */   isArray: () => (/* binding */ isArray),
/* harmony export */   isAsyncFunction: () => (/* binding */ isAsyncFunction),
/* harmony export */   isFunction: () => (/* binding */ isFunction),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   isString: () => (/* binding */ isString),
/* harmony export */   map: () => (/* binding */ map),
/* harmony export */   recreateStructure: () => (/* binding */ recreateStructure),
/* harmony export */   uid: () => (/* binding */ uid)
/* harmony export */ });
const STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm;
const ARGUMENT_NAMES = /([^\s,]+)/g;
function isArray(obj) {
    return getObjectType(obj) === "[object Array]";
}
function isString(obj) {
    return getObjectType(obj) === "[object String]";
}
function isFunction(obj) {
    return getObjectType(obj) === "[object Function]";
}
function isAsyncFunction(obj) {
    return getObjectType(obj) === "[object AsyncFunction]";
}
function isObject(obj) {
    return getObjectType(obj) === "[object Object]";
}
function getObjectType(obj) {
    return Object.prototype.toString.call(obj);
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
function map(obj, cb) {
    const res = Object.entries(obj).map(([k, v]) => cb(k, v));
    if (res[0]?.length === 2) {
        return Object.fromEntries(res);
    }
    return res;
}
function forEach(obj, cb) {
    Object.entries(obj || {}).forEach(([k, v]) => cb(k, v));
}
function filter(obj, cb) {
    return Object.fromEntries(Object.entries(obj || {}).filter(([k, v]) => cb(k, v) === true));
}
function recreateStructure(value) {
    let newValue = value;
    if (isArray(value)) {
        newValue = [];
        value.forEach((v) => newValue.push(recreateStructure(v)));
        return newValue;
    }
    if (isObject(value)) {
        newValue = {};
        for (let key in value) {
            newValue[key] = recreateStructure(value[key]);
        }
        return newValue;
    }
    return newValue;
}
function uid() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}


/***/ },

/***/ "./src/index.ts"
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_5349__) {

"use strict";
__nested_webpack_require_5349__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_5349__.d(__nested_webpack_exports__, {
/* harmony export */   STATE: () => (/* binding */ STATE),
/* harmony export */   createPendingChanges: () => (/* binding */ createPendingChanges),
/* harmony export */   createStore: () => (/* binding */ createStore),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getState: () => (/* binding */ getState),
/* harmony export */   getValues: () => (/* binding */ getValues),
/* harmony export */   joinStateChanges: () => (/* binding */ joinStateChanges),
/* harmony export */   resetState: () => (/* binding */ resetState),
/* harmony export */   setState: () => (/* binding */ setState),
/* harmony export */   setupValue: () => (/* binding */ setupValue)
/* harmony export */ });
/* harmony import */ var _types_d__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_5349__(/*! ./types.d */ "./src/types.d.ts");
/* harmony import */ var _types_d__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_5349__.n(_types_d__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_5349__(/*! ./storage */ "./src/storage.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_5349__(/*! ./helpers */ "./src/helpers.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_5349__(/*! ./actions */ "./src/actions.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __nested_webpack_require_5349__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_5__ = __nested_webpack_require_5349__(/*! ./listeners */ "./src/listeners.ts");






const STATE = {};
const STATE_CHANGED_PIECES = {};
const STATE_PENDING_CHANGES = {};
const STORAGE = {};
setStorageUtils(_storage__WEBPACK_IMPORTED_MODULE_1__["default"]);
async function addState(namespace, initialState, isPersistent) {
    const storageType = STORAGE.GET_TYPE(isPersistent);
    const defaultValues = Object.assign({}, initialState);
    const values = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.map)(initialState, (k, v) => [namespace(k), v]);
    if (STORAGE.IS_AVAILABE(storageType)) {
        await STORAGE.UPDATE_STATE(values, storageType);
    }
    for (const key in initialState) {
        const fullKey = namespace(key);
        STATE[fullKey] = setupValue(key, namespace, values[fullKey], defaultValues[key], storageType);
    }
    return createStore(namespace());
}
function setupValue(key, namespace, value, defaultValue, storageType) {
    const fullKey = namespace(key);
    const isComputedValue = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isFunction)(value);
    const dependencies = isComputedValue
        ? (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getParamNames)(value)
        : [];
    dependencies.forEach((dependency) => {
        const fullDependencyKey = namespace(dependency);
        if (!STATE[fullDependencyKey]) {
            STATE[fullDependencyKey] = {
                dependants: [],
                dependencies: [],
                namespace,
                storageType,
            };
        }
        STATE[fullDependencyKey].dependants?.push(fullKey);
    });
    return {
        key,
        fullKey,
        value: isComputedValue
            ? value.apply(null, getArguments(dependencies, namespace))
            : value,
        computeFn: isComputedValue && value,
        dependencies,
        dependants: [],
        listeners: [],
        defaultValue,
        storageType,
        namespace,
    };
}
function getNamespaceState(namespace) {
    return (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.filter)(STATE, (k, { key }) => k === namespace(key));
}
function getValues(namespace) {
    return (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.map)(getNamespaceState(namespace), (k, { key, value }) => [
        key,
        value,
    ]);
}
function getArguments(dependencies, namespace) {
    const values = getValues(namespace);
    return dependencies.map((name) => values[name]);
}
async function joinStateChanges(changesPiece) {
    for (const [updateId, { storageTypes, readyStorageTypes, changes },] of Object.entries(STATE_CHANGED_PIECES)) {
        if (changesPiece[updateId]) {
            const storageType = changesPiece[updateId].newValue;
            readyStorageTypes[storageType] = true;
            delete changesPiece[updateId];
            Object.assign(changes, changesPiece);
            if (STORAGE.IS_AVAILABE(storageType)) {
                STORAGE.REMOVE_KEY(storageType, updateId);
            }
            for (const key in storageTypes) {
                if (!readyStorageTypes[key]) {
                    return;
                }
            }
            delete STATE_CHANGED_PIECES[updateId];
            await onStateChange(changes);
        }
    }
}
async function onStateChange(changes) {
    const realChanges = {};
    for (const key in changes) {
        const prevValue = STATE[key].value;
        const newValue = changes[key].newValue;
        if (prevValue !== newValue) {
            realChanges[key] = { newValue, prevValue };
            STATE[key].value = newValue;
        }
        else {
            realChanges[key] = { isSame: true };
        }
        updateDependencies(key, changes, realChanges);
    }
    await (0,_listeners__WEBPACK_IMPORTED_MODULE_5__.runStateChangeListeners)((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.filter)(realChanges, (k, v) => !v.isSame));
}
function updateDependencies(key, changes, realChanges) {
    STATE[key].dependants?.forEach((name) => {
        const { dependencies, namespace } = STATE[name];
        if (!isEveryDependencyReady(dependencies, namespace, Object.keys(changes), Object.keys(realChanges)) ||
            realChanges[name]) {
            return;
        }
        const prevValue = STATE[name].value;
        const newValue = STATE[name].computeFn?.apply(null, getArguments(dependencies, namespace));
        if (prevValue !== newValue) {
            realChanges[name] = { newValue, prevValue };
            STATE[name].value = newValue;
            updateDependencies(name, changes, realChanges);
        }
    });
}
function isEveryDependencyReady(dependencies, namespace, changesKeys, realChangesKeys) {
    return dependencies.every((name) => {
        const fullKey = namespace(name);
        return ((changesKeys.includes(fullKey) && realChangesKeys.includes(fullKey)) ||
            !changesKeys.includes(fullKey));
    });
}
function getState(namespace, arg) {
    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isString)(arg)) {
        return createStore(arg);
    }
    return (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.recreateStructure)(getValues(namespace));
}
async function setState(namespace, changes) {
    const storageChanges = {};
    const updateId = (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.uid)();
    const storageTypes = {};
    (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.forEach)(changes, (k, v) => {
        const fullKey = namespace(k);
        const { storageType, computeFn, isAction } = STATE[fullKey];
        if (computeFn || isAction) {
            return;
        }
        if (!storageChanges[storageType]) {
            storageChanges[storageType] = {};
        }
        storageTypes[storageType] = true;
        storageChanges[storageType][fullKey] = v;
    });
    STATE_CHANGED_PIECES[updateId] = {
        storageTypes,
        readyStorageTypes: {},
        changes: {},
    };
    for (let [storageType, changes] of Object.entries(storageChanges)) {
        await setValues(storageType, { ...changes, [updateId]: storageType });
    }
    return createStore(namespace());
}
async function setValues(storageType, changes) {
    if (STORAGE.IS_AVAILABE(storageType)) {
        const isAutoUpdate = await STORAGE.SET_VALUES(storageType, changes);
        if (isAutoUpdate) {
            return;
        }
    }
    joinStateChanges((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.map)(changes, (k, newValue) => [k, { newValue }]));
}
async function resetState(namespace, keys) {
    return setState(namespace, getDefaultValues(namespace, keys));
}
function getDefaultValues(namespace, keys) {
    const namespaceState = getNamespaceState(namespace);
    return (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.map)(keys
        ? (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.filter)(namespaceState, (k, { key }) => keys.includes(key))
        : namespaceState, (k, { key, defaultValue }) => [key, defaultValue]);
}
function createPendingChanges(namespace) {
    const flush = () => {
        const changes = STATE_PENDING_CHANGES[namespace()];
        STATE_PENDING_CHANGES[namespace()] = {};
        return changes;
    };
    return {
        add: (changes) => Object.assign(STATE_PENDING_CHANGES[namespace()], changes),
        reset: (keys) => Object.assign(STATE_PENDING_CHANGES[namespace()], getDefaultValues(namespace, keys)),
        get: () => STATE_PENDING_CHANGES[namespace()],
        flush,
        commit: () => setState(namespace, flush()),
    };
}
function main(namespace) {
    if (!arguments[1] || (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isString)(arguments[1])) {
        return getState.apply(null, arguments);
    }
    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isArray)(arguments[1]) ||
        (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isFunction)(arguments[1]) ||
        (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isAsyncFunction)(arguments[1])) {
        return _listeners__WEBPACK_IMPORTED_MODULE_5__.addStateListener.apply(null, arguments);
    }
    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isObject)(arguments[1])) {
        return setState.apply(null, arguments);
    }
}
function setStorageUtils(storageUtils) {
    Object.assign(STORAGE, storageUtils);
}
function addNamespace(namespace, str) {
    return `${namespace}${((0,_helpers__WEBPACK_IMPORTED_MODULE_2__.isString)(str) && _constants__WEBPACK_IMPORTED_MODULE_4__.NAMESPACE_DELIMITER) || ""}${str || ""}`;
}
function createStore(_namespace) {
    const namespace = ((key) => addNamespace(_namespace, key));
    if (!STATE_PENDING_CHANGES[namespace()]) {
        STATE_PENDING_CHANGES[namespace()] = {};
    }
    if (!_listeners__WEBPACK_IMPORTED_MODULE_5__.LISTENERS[namespace()]) {
        _listeners__WEBPACK_IMPORTED_MODULE_5__.LISTENERS[namespace()] = [];
    }
    return Object.assign(main.bind(null, namespace), {
        add: (state) => addState(namespace, state, false),
        addPersistent: (state) => addState(namespace, state, true),
        get: (newNamespace) => getState(namespace, newNamespace),
        set: (changes) => setState(namespace, changes),
        reset: (keys) => resetState(namespace, keys),
        changes: createPendingChanges(namespace),
        onChange: (keys, cb) => (0,_listeners__WEBPACK_IMPORTED_MODULE_5__.addStateListener)(namespace, keys, cb),
        removeListener: (keys, cb) => (0,_listeners__WEBPACK_IMPORTED_MODULE_5__.removeStateListener)(namespace, keys, cb),
        actions: (actions) => (0,_actions__WEBPACK_IMPORTED_MODULE_3__.addStateActions)(namespace, actions),
        setStorageUtils,
        joinStateChanges,
        namespace,
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createStore(""));


/***/ },

/***/ "./src/listeners.ts"
/*!**************************!*\
  !*** ./src/listeners.ts ***!
  \**************************/
(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_16870__) {

"use strict";
__nested_webpack_require_16870__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_16870__.d(__nested_webpack_exports__, {
/* harmony export */   LISTENERS: () => (/* binding */ LISTENERS),
/* harmony export */   addStateListener: () => (/* binding */ addStateListener),
/* harmony export */   removeStateListener: () => (/* binding */ removeStateListener),
/* harmony export */   runStateChangeListeners: () => (/* binding */ runStateChangeListeners)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_16870__(/*! ./types */ "./src/types.d.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_16870__.n(_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __nested_webpack_require_16870__(/*! . */ "./src/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __nested_webpack_require_16870__(/*! ./constants */ "./src/constants.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __nested_webpack_require_16870__(/*! ./helpers */ "./src/helpers.ts");




const LISTENERS = {};
async function runStateChangeListeners(realChanges) {
    if (Object.keys(realChanges).length) {
        const { namespace } = ___WEBPACK_IMPORTED_MODULE_1__.STATE[Object.keys(realChanges)[0]];
        for (const [changeKey] of Object.entries(realChanges)) {
            const { listeners, key } = ___WEBPACK_IMPORTED_MODULE_1__.STATE[changeKey];
            for (const cb of listeners) {
                const fn = cb.bind(null, [key], (0,___WEBPACK_IMPORTED_MODULE_1__.createStore)(namespace()));
                if ((0,_helpers__WEBPACK_IMPORTED_MODULE_3__.isAsyncFunction)(cb)) {
                    await fn();
                }
                else {
                    fn();
                }
            }
        }
        const namespaceLength = `${namespace()}${_constants__WEBPACK_IMPORTED_MODULE_2__.NAMESPACE_DELIMITER}`.length;
        const readableKeys = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.map)(realChanges, (k) => k.slice(namespaceLength));
        for (const cb of LISTENERS[namespace()]) {
            const fn = cb.bind(null, readableKeys, (0,___WEBPACK_IMPORTED_MODULE_1__.createStore)(namespace()));
            if ((0,_helpers__WEBPACK_IMPORTED_MODULE_3__.isAsyncFunction)(cb)) {
                await fn();
            }
            else {
                fn();
            }
        }
    }
}
function addStateListener(namespace, observables, cb) {
    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_3__.isFunction)(observables) || (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.isAsyncFunction)(observables)) {
        LISTENERS[namespace()].push(observables);
        return (0,___WEBPACK_IMPORTED_MODULE_1__.createStore)(namespace());
    }
    observables.forEach((key) => ___WEBPACK_IMPORTED_MODULE_1__.STATE[namespace(key)].listeners?.push(cb));
    return (0,___WEBPACK_IMPORTED_MODULE_1__.createStore)(namespace());
}
function removeStateListener(namespace, observables, removeCb) {
    if ((0,_helpers__WEBPACK_IMPORTED_MODULE_3__.isFunction)(observables) || (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.isAsyncFunction)(observables)) {
        const removeIdx = LISTENERS[namespace()].findIndex((cb) => cb === observables);
        LISTENERS[namespace()].splice(removeIdx, 1);
        return (0,___WEBPACK_IMPORTED_MODULE_1__.createStore)(namespace());
    }
    observables.forEach((key) => {
        const listeners = ___WEBPACK_IMPORTED_MODULE_1__.STATE[namespace(key)].listeners;
        const removeIdx = listeners?.findIndex((cb) => cb === removeCb);
        listeners?.splice(removeIdx, 1);
    });
    return (0,___WEBPACK_IMPORTED_MODULE_1__.createStore)(namespace());
}


/***/ },

/***/ "./src/storage.ts"
/*!************************!*\
  !*** ./src/storage.ts ***!
  \************************/
(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_20799__) {

"use strict";
__nested_webpack_require_20799__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_20799__.d(__nested_webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_20799__(/*! ./types */ "./src/types.d.ts");
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__nested_webpack_require_20799__.n(_types__WEBPACK_IMPORTED_MODULE_0__);

async function updateFromLocalStorage(state) {
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
    return isPersistent ? "localStorage" : "";
}
function isStorageAvailable(storageType) {
    return !!storageType;
}
async function setStorageValue(storageType, changes) {
    for (let [k, v] of Object.entries(changes)) {
        localStorage.setItem(k, v);
    }
    return false;
}
function removeStorageKey(type, key) {
    if (type) {
        localStorage.removeItem(key);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    GET_TYPE: getStorageType,
    IS_AVAILABE: isStorageAvailable,
    UPDATE_STATE: updateFromLocalStorage,
    SET_VALUES: setStorageValue,
    REMOVE_KEY: removeStorageKey,
});


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_22484__(moduleId) {
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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_22484__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__nested_webpack_require_22484__.n = (module) => {
/******/ 			const getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__nested_webpack_require_22484__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__nested_webpack_require_22484__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__nested_webpack_require_22484__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__nested_webpack_require_22484__.o(definition, key) && !__nested_webpack_require_22484__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nested_webpack_require_22484__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_22484__.r = (exports) => {
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
/******/ 	let __nested_webpack_exports__ = __nested_webpack_require_22484__("./src/index.ts");
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
        if (isFunction(payload) || isAsyncFunction(payload)) {
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
    const answerFunction = actions[message.action].bind(null, message.payload);
    const payload = isAsyncFunction(answerFunction) ? (await answerFunction()) : answerFunction();
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
  return window.location.href === tab?.url;
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

function getObjectType(obj) {
  return Object.prototype.toString.call(obj);
}

function isFunction(obj) {
  return getObjectType(obj) === "[object Function]";
}

function isAsyncFunction(obj) {
  return getObjectType(obj) === "[object AsyncFunction]";
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
  "getData",
  "addToRecent",
  "removeRecentSearch",
  "addFavoriteSearch",
  "removeFavoriteSearch",
  "setColors",
  "closingWarning",
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








function focusInput(markup, num) {
  const childNum = num || 0;
  setTimeout(() =>
    markup.searchStrings.children[childNum].firstElementChild.focus(),
  );
}

function getNextSearchId(curId, nextNum) {
  return (0,_common_helpers__WEBPACK_IMPORTED_MODULE_2__.adjustNumberToBoundaries)(+curId + nextNum, 0, _common_constants__WEBPACK_IMPORTED_MODULE_3__.COLORS.length - 1);
}

function getNextHighlightPosition(curPos, nextNum, foundResults) {
  return (0,_common_helpers__WEBPACK_IMPORTED_MODULE_2__.adjustNumberToBoundaries)(+curPos + nextNum, 1, foundResults);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (simple_els_min__WEBPACK_IMPORTED_MODULE_0___default()(
  _markup__WEBPACK_IMPORTED_MODULE_5__["default"],
  {
    searchStrings: { _: [] },
    searchHappened: { _: null },
    highlightPosition: { _: 0 },
    foundResults: { _: 0 },
    caseSensitive: { _: false },
    color: { _: null },
    blinkSet: { _: null },

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
          set(_page_store__WEBPACK_IMPORTED_MODULE_1__["default"].get()[currentSearch]),
        );
        _page_store__WEBPACK_IMPORTED_MODULE_1__["default"].onChange(
          ["popupOpen"],
          (popupOpen) => _page_store__WEBPACK_IMPORTED_MODULE_1__["default"].get()[popupOpen] && focusInput(markup),
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
/* harmony import */ var _page_ui_components_Popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @page/ui/components/Popup */ "./src/page/ui/components/Popup/index.js");
/* harmony import */ var _page_message_answers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @page/message-answers */ "./src/page/message-answers.js");



_page_ui_components_Popup__WEBPACK_IMPORTED_MODULE_0__["default"].asPopup({
  handle: ".topbar",
  left: 20,
  top: 20,
});

})();

/******/ })()
;