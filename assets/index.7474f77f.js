var vt=Object.defineProperty,bt=Object.defineProperties;var gt=Object.getOwnPropertyDescriptors;var q=Object.getOwnPropertySymbols;var St=Object.prototype.hasOwnProperty,wt=Object.prototype.propertyIsEnumerable;var tt=(t,e,n)=>e in t?vt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,I=(t,e)=>{for(var n in e||(e={}))St.call(e,n)&&tt(t,n,e[n]);if(q)for(var n of q(e))wt.call(e,n)&&tt(t,n,e[n]);return t},k=(t,e)=>bt(t,gt(e));const xt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}};xt();var Tt="/axew-toast/assets/success.5613b058.svg",Et="/axew-toast/assets/error.16ba084b.svg",Pt="/axew-toast/assets/warning.ebf1bcef.svg";const At=500,v="axew-toast",jt=v+"-content",kt=v+"-hide",Mt=v+"-text",Nt=v+"-modal",Dt=v+"-container",Ct=v+"-root",Ht=v+"-spin",Lt=v+"-icon",Zt={loading:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=",success:Tt,error:Et,warning:Pt};function E(){}const J=typeof window!="undefined";function M(t,e){return I({timeout:e},typeof t=="string"?{text:t}:t)}function Bt(t,e,n){typeof e!="object"&&(e={text:e||""});const r=k(I(I({text:"",asHtml:!1,className:"",isModal:!1,icon:"",iconSpin:!1,iconSize:36,onClick:E,onClose:E},t),e),{timeout:n||e.timeout||t.timeout||2500});return r.icon==="loading"&&(r.iconSpin=!0),typeof r.onClick!="function"&&(r.onClick=E),k(I({},r),{text:String(r.text||"")})}function et(...t){const e=new Set;for(let n=t.length-1;n>=0;n--){const r=t[n];!r||(typeof r=="string"?e.add(r):typeof r=="object"&&Object.keys(r).forEach(o=>{r[o]&&e.add(o)}))}return Array.from(e).join(" ")}function nt(t){return(typeof t=="number"?`${t}px`:t)||""}var Ut=`.axew-toast-root{position:fixed;z-index:99999;width:100%;left:0;top:53%;transform:translateY(-50%);pointer-events:none;touch-action:none}.axew-toast-container{font-size:0;text-align:center}.axew-toast-content{text-align:center;font-size:0;background-color:#3a3a3ae6;display:inline-block;border-radius:6px;max-width:80%;pointer-events:auto;touch-action:auto;overflow:hidden;opacity:0;max-height:0;margin-bottom:0;padding:0;transform:translate3d(0,100%,0) scale(0);animation:axewToastFadeInUp .5s cubic-bezier(.68,-.55,.265,1.55) 1 normal forwards}.axew-toast-modal{position:fixed;top:0;left:0;right:0;bottom:0;width:100%;height:100%;z-index:9999}.axew-toast-text{font-size:14px;line-height:20px;word-break:break-all;white-space:pre-line;color:#fff;padding:6px;margin:0}.axew-toast-hide{animation-name:axewToastFadeOutDown}.axew-toast-icon{display:block;background-color:transparent;background-repeat:no-repeat;background-size:100%;margin:0 auto}.axew-toast-spin{animation:axewToastLoading 1s steps(12,end) infinite}@keyframes axewToastFadeInUp{0%{opacity:0;max-height:0;margin-bottom:0;padding:0;transform:translate3d(0,100%,0) scale(0)}to{opacity:1;transform:translateZ(0) scale(1);max-height:150px;padding:6px;margin-bottom:8px}}@keyframes axewToastFadeOutDown{0%{opacity:1;transform:translateZ(0) scale(1);max-height:150px;padding:6px;margin-bottom:8px}to{opacity:0;max-height:0;margin-bottom:0;padding:0;transform:translate3d(0,100%,0) scale(0)}}@keyframes axewToastLoading{0%{transform:rotate3d(0,0,1,0)}to{transform:rotate3d(0,0,1,360deg)}}
`;if(J){const t=document.createElement("style");t.innerHTML=Ut,document.head.insertAdjacentElement("afterbegin",t)}let U=0,b;function Ot(){!J||(b||(b=document.createElement("div"),b.setAttribute("class",Nt),document.body.appendChild(b)),b.style.display="block",U++)}function Gt(){U--,b&&U<=0&&(b.style.display="none")}let g;function Rt(t){g||(g=document.createElement("div"),g.setAttribute("class",Ct),document.body.appendChild(g)),g.appendChild(t)}function Jt(t){try{g&&g.removeChild(t)}catch{}}function rt(t){const e=document.createElement("div");return e.setAttribute("class",t),e}function Qt(t,e,n){let r=!1;const o=()=>{r||(r=!0,Jt(e),n==null||n())};t.classList.add(kt),t.addEventListener("animationend",o),setTimeout(o,At)}function Wt(t){const{text:e,className:n,onClick:r,icon:o,iconSpin:i,iconSize:c,asHtml:s}=t,u=rt(et(Dt,n)),a=rt(jt);r!==E&&a.addEventListener("click",r,r.options);let l="";const h=Zt[o]||o;if(h&&(l+=`<i class="${et(Lt,{[Ht]:i})}" style="background-image:url(${h});width:${nt(c)};height:${nt(c)}"></i>`),e){const f=s?e:(a.textContent=e,a.innerHTML);l+=`<div class="${Mt}">${f}</div>`}return a.innerHTML=l,l&&u.appendChild(a),{container:u,content:a}}function Yt(t){let e=new Set,n=I({},t);const r=(u,a)=>{if(!J)return E;const l=Bt(n,u,a),h=Wt(l);Rt(h.container),l.isModal&&Ot();const f=m=>{Qt(h.content,h.container,()=>{Gt(),l.onClose(m)})},p=()=>{f("cancel"),e.delete(p)};return e.add(p),l.timeout&&typeof l.timeout=="number"&&setTimeout(()=>{f("auto")},l.timeout),()=>f("cancel")};return{show:r,success:(u,a)=>r(I({icon:"success"},M(u,a))),error:(u,a)=>r(I({icon:"error"},M(u,a))),warning:(u,a)=>r(I({icon:"warning"},M(u,a))),loading:(u,a)=>r(I({icon:"loading"},M(u,a))),destroyAll:()=>{e.forEach(u=>{u()}),e=new Set},config:u=>{n=u}}}const Q=Yt();var O=function(t,e){return O=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])},O(t,e)};function W(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");O(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}function Ft(t,e,n,r){function o(i){return i instanceof n?i:new n(function(c){c(i)})}return new(n||(n=Promise))(function(i,c){function s(l){try{a(r.next(l))}catch(h){c(h)}}function u(l){try{a(r.throw(l))}catch(h){c(h)}}function a(l){l.done?i(l.value):o(l.value).then(s,u)}a((r=r.apply(t,e||[])).next())})}function st(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,c;return c={next:s(0),throw:s(1),return:s(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function s(a){return function(l){return u([a,l])}}function u(a){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,o&&(i=a[0]&2?o.return:a[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,a[1])).done)return i;switch(o=0,i&&(a=[a[0]&2,i.value]),a[0]){case 0:case 1:i=a;break;case 4:return n.label++,{value:a[1],done:!1};case 5:n.label++,o=a[1],a=[0];continue;case 7:a=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(a[0]===6||a[0]===2)){n=0;continue}if(a[0]===3&&(!i||a[1]>i[0]&&a[1]<i[3])){n.label=a[1];break}if(a[0]===6&&n.label<i[1]){n.label=i[1],i=a;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(a);break}i[2]&&n.ops.pop(),n.trys.pop();continue}a=e.call(t,n)}catch(l){a=[6,l],o=0}finally{r=i=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}}function P(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function x(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),o,i=[],c;try{for(;(e===void 0||e-- >0)&&!(o=r.next()).done;)i.push(o.value)}catch(s){c={error:s}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(c)throw c.error}}return i}function A(t,e,n){if(n||arguments.length===2)for(var r=0,o=e.length,i;r<o;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return t.concat(i||Array.prototype.slice.call(e))}function w(t){return this instanceof w?(this.v=t,this):new w(t)}function zt(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),o,i=[];return o={},c("next"),c("throw"),c("return"),o[Symbol.asyncIterator]=function(){return this},o;function c(f){r[f]&&(o[f]=function(p){return new Promise(function(m,y){i.push([f,p,m,y])>1||s(f,p)})})}function s(f,p){try{u(r[f](p))}catch(m){h(i[0][3],m)}}function u(f){f.value instanceof w?Promise.resolve(f.value.v).then(a,l):h(i[0][2],f)}function a(f){s("next",f)}function l(f){s("throw",f)}function h(f,p){f(p),i.shift(),i.length&&s(i[0][0],i[0][1])}}function _t(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],n;return e?e.call(t):(t=typeof P=="function"?P(t):t[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(i){n[i]=t[i]&&function(c){return new Promise(function(s,u){c=t[i](c),o(s,u,c.done,c.value)})}}function o(i,c,s,u){Promise.resolve(u).then(function(a){i({value:a,done:s})},c)}}function d(t){return typeof t=="function"}function Vt(t){var e=function(r){Error.call(r),r.stack=new Error().stack},n=t(e);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var L=Vt(function(t){return function(n){t(this),this.message=n?n.length+` errors occurred during unsubscription:
`+n.map(function(r,o){return o+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=n}});function it(t,e){if(t){var n=t.indexOf(e);0<=n&&t.splice(n,1)}}var lt=function(){function t(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var e,n,r,o,i;if(!this.closed){this.closed=!0;var c=this._parentage;if(c)if(this._parentage=null,Array.isArray(c))try{for(var s=P(c),u=s.next();!u.done;u=s.next()){var a=u.value;a.remove(this)}}catch(y){e={error:y}}finally{try{u&&!u.done&&(n=s.return)&&n.call(s)}finally{if(e)throw e.error}}else c.remove(this);var l=this.initialTeardown;if(d(l))try{l()}catch(y){i=y instanceof L?y.errors:[y]}var h=this._finalizers;if(h){this._finalizers=null;try{for(var f=P(h),p=f.next();!p.done;p=f.next()){var m=p.value;try{ot(m)}catch(y){i=i!=null?i:[],y instanceof L?i=A(A([],x(i)),x(y.errors)):i.push(y)}}}catch(y){r={error:y}}finally{try{p&&!p.done&&(o=f.return)&&o.call(f)}finally{if(r)throw r.error}}}if(i)throw new L(i)}},t.prototype.add=function(e){var n;if(e&&e!==this)if(this.closed)ot(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(e)}},t.prototype._hasParent=function(e){var n=this._parentage;return n===e||Array.isArray(n)&&n.includes(e)},t.prototype._addParent=function(e){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(e),n):n?[n,e]:e},t.prototype._removeParent=function(e){var n=this._parentage;n===e?this._parentage=null:Array.isArray(n)&&it(n,e)},t.prototype.remove=function(e){var n=this._finalizers;n&&it(n,e),e instanceof t&&e._removeParent(this)},t.EMPTY=function(){var e=new t;return e.closed=!0,e}(),t}();function ft(t){return t instanceof lt||t&&"closed"in t&&d(t.remove)&&d(t.add)&&d(t.unsubscribe)}function ot(t){d(t)?t():t.unsubscribe()}var Y={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},C={setTimeout:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var o=C.delegate;return o!=null&&o.setTimeout?o.setTimeout.apply(o,A([t,e],x(n))):setTimeout.apply(void 0,A([t,e],x(n)))},clearTimeout:function(t){var e=C.delegate;return((e==null?void 0:e.clearTimeout)||clearTimeout)(t)},delegate:void 0};function dt(t){C.setTimeout(function(){throw t})}function ct(){}var $t=function(){return F("C",void 0,void 0)}();function Kt(t){return F("E",void 0,t)}function Xt(t){return F("N",t,void 0)}function F(t,e,n){return{kind:t,value:e,error:n}}function qt(t){t()}var z=function(t){W(e,t);function e(n){var r=t.call(this)||this;return r.isStopped=!1,n?(r.destination=n,ft(n)&&n.add(r)):r.destination=re,r}return e.create=function(n,r,o){return new G(n,r,o)},e.prototype.next=function(n){this.isStopped?B(Xt(n),this):this._next(n)},e.prototype.error=function(n){this.isStopped?B(Kt(n),this):(this.isStopped=!0,this._error(n))},e.prototype.complete=function(){this.isStopped?B($t,this):(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(n){this.destination.next(n)},e.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e}(lt),te=Function.prototype.bind;function Z(t,e){return te.call(t,e)}var ee=function(){function t(e){this.partialObserver=e}return t.prototype.next=function(e){var n=this.partialObserver;if(n.next)try{n.next(e)}catch(r){N(r)}},t.prototype.error=function(e){var n=this.partialObserver;if(n.error)try{n.error(e)}catch(r){N(r)}else N(e)},t.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(n){N(n)}},t}(),G=function(t){W(e,t);function e(n,r,o){var i=t.call(this)||this,c;if(d(n)||!n)c={next:n!=null?n:void 0,error:r!=null?r:void 0,complete:o!=null?o:void 0};else{var s;i&&Y.useDeprecatedNextContext?(s=Object.create(n),s.unsubscribe=function(){return i.unsubscribe()},c={next:n.next&&Z(n.next,s),error:n.error&&Z(n.error,s),complete:n.complete&&Z(n.complete,s)}):c=n}return i.destination=new ee(c),i}return e}(z);function N(t){dt(t)}function ne(t){throw t}function B(t,e){var n=Y.onStoppedNotification;n&&C.setTimeout(function(){return n(t,e)})}var re={closed:!0,next:ct,error:ne,complete:ct},_=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function ie(t){return t}function oe(t){return t.length===0?ie:t.length===1?t[0]:function(n){return t.reduce(function(r,o){return o(r)},n)}}var S=function(){function t(e){e&&(this._subscribe=e)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(e,n,r){var o=this,i=ae(e)?e:new G(e,n,r);return qt(function(){var c=o,s=c.operator,u=c.source;i.add(s?s.call(i,u):u?o._subscribe(i):o._trySubscribe(i))}),i},t.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(n){e.error(n)}},t.prototype.forEach=function(e,n){var r=this;return n=at(n),new n(function(o,i){var c=new G({next:function(s){try{e(s)}catch(u){i(u),c.unsubscribe()}},error:i,complete:o});r.subscribe(c)})},t.prototype._subscribe=function(e){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(e)},t.prototype[_]=function(){return this},t.prototype.pipe=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return oe(e)(this)},t.prototype.toPromise=function(e){var n=this;return e=at(e),new e(function(r,o){var i;n.subscribe(function(c){return i=c},function(c){return o(c)},function(){return r(i)})})},t.create=function(e){return new t(e)},t}();function at(t){var e;return(e=t!=null?t:Y.Promise)!==null&&e!==void 0?e:Promise}function ce(t){return t&&d(t.next)&&d(t.error)&&d(t.complete)}function ae(t){return t&&t instanceof z||ce(t)&&ft(t)}function ue(t){return d(t==null?void 0:t.lift)}function V(t){return function(e){if(ue(e))return e.lift(function(n){try{return t(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function H(t,e,n,r,o){return new se(t,e,n,r,o)}var se=function(t){W(e,t);function e(n,r,o,i,c,s){var u=t.call(this,n)||this;return u.onFinalize=c,u.shouldUnsubscribe=s,u._next=r?function(a){try{r(a)}catch(l){n.error(l)}}:t.prototype._next,u._error=i?function(a){try{i(a)}catch(l){n.error(l)}finally{this.unsubscribe()}}:t.prototype._error,u._complete=o?function(){try{o()}catch(a){n.error(a)}finally{this.unsubscribe()}}:t.prototype._complete,u}return e.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;t.prototype.unsubscribe.call(this),!r&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},e}(z),ht=function(t){return t&&typeof t.length=="number"&&typeof t!="function"};function le(t){return d(t==null?void 0:t.then)}function fe(t){return d(t[_])}function de(t){return Symbol.asyncIterator&&d(t==null?void 0:t[Symbol.asyncIterator])}function he(t){return new TypeError("You provided "+(t!==null&&typeof t=="object"?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function ye(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var pe=ye();function me(t){return d(t==null?void 0:t[pe])}function Ie(t){return zt(this,arguments,function(){var n,r,o,i;return st(this,function(c){switch(c.label){case 0:n=t.getReader(),c.label=1;case 1:c.trys.push([1,,9,10]),c.label=2;case 2:return[4,w(n.read())];case 3:return r=c.sent(),o=r.value,i=r.done,i?[4,w(void 0)]:[3,5];case 4:return[2,c.sent()];case 5:return[4,w(o)];case 6:return[4,c.sent()];case 7:return c.sent(),[3,2];case 8:return[3,10];case 9:return n.releaseLock(),[7];case 10:return[2]}})})}function ve(t){return d(t==null?void 0:t.getReader)}function $(t){if(t instanceof S)return t;if(t!=null){if(fe(t))return be(t);if(ht(t))return ge(t);if(le(t))return Se(t);if(de(t))return yt(t);if(me(t))return we(t);if(ve(t))return xe(t)}throw he(t)}function be(t){return new S(function(e){var n=t[_]();if(d(n.subscribe))return n.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function ge(t){return new S(function(e){for(var n=0;n<t.length&&!e.closed;n++)e.next(t[n]);e.complete()})}function Se(t){return new S(function(e){t.then(function(n){e.closed||(e.next(n),e.complete())},function(n){return e.error(n)}).then(null,dt)})}function we(t){return new S(function(e){var n,r;try{for(var o=P(t),i=o.next();!i.done;i=o.next()){var c=i.value;if(e.next(c),e.closed)return}}catch(s){n={error:s}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}e.complete()})}function yt(t){return new S(function(e){Te(t,e).catch(function(n){return e.error(n)})})}function xe(t){return yt(Ie(t))}function Te(t,e){var n,r,o,i;return Ft(this,void 0,void 0,function(){var c,s;return st(this,function(u){switch(u.label){case 0:u.trys.push([0,5,6,11]),n=_t(t),u.label=1;case 1:return[4,n.next()];case 2:if(r=u.sent(),!!r.done)return[3,4];if(c=r.value,e.next(c),e.closed)return[2];u.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return s=u.sent(),o={error:s},[3,11];case 6:return u.trys.push([6,,9,10]),r&&!r.done&&(i=n.return)?[4,i.call(n)]:[3,8];case 7:u.sent(),u.label=8;case 8:return[3,10];case 9:if(o)throw o.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}})})}function Ee(t,e,n,r,o){r===void 0&&(r=0),o===void 0&&(o=!1);var i=e.schedule(function(){n(),o?t.add(this.schedule(null,r)):this.unsubscribe()},r);if(t.add(i),!o)return i}function K(t,e){return V(function(n,r){var o=0;n.subscribe(H(r,function(i){r.next(t.call(e,i,o++))}))})}var Pe=Array.isArray;function Ae(t,e){return Pe(e)?t.apply(void 0,A([],x(e))):t(e)}function je(t){return K(function(e){return Ae(t,e)})}function ke(t,e,n,r,o,i,c,s){var u=[],a=0,l=0,h=!1,f=function(){h&&!u.length&&!a&&e.complete()},p=function(y){return a<r?m(y):u.push(y)},m=function(y){i&&e.next(y),a++;var X=!1;$(n(y,l++)).subscribe(H(e,function(T){o==null||o(T),i?p(T):e.next(T)},function(){X=!0},void 0,function(){if(X)try{a--;for(var T=function(){var j=u.shift();c?Ee(e,c,function(){return m(j)}):m(j)};u.length&&a<r;)T();f()}catch(j){e.error(j)}}))};return t.subscribe(H(e,p,function(){h=!0,f()})),function(){s==null||s()}}function pt(t,e,n){return n===void 0&&(n=1/0),d(e)?pt(function(r,o){return K(function(i,c){return e(r,i,o,c)})($(t(r,o)))},n):(typeof e=="number"&&(n=e),V(function(r,o){return ke(r,o,t,n)}))}var Me=["addListener","removeListener"],Ne=["addEventListener","removeEventListener"],De=["on","off"];function R(t,e,n,r){if(d(n)&&(r=n,n=void 0),r)return R(t,e,n).pipe(je(r));var o=x(Le(t)?Ne.map(function(s){return function(u){return t[s](e,u,n)}}):Ce(t)?Me.map(ut(t,e)):He(t)?De.map(ut(t,e)):[],2),i=o[0],c=o[1];if(!i&&ht(t))return pt(function(s){return R(s,e,n)})($(t));if(!i)throw new TypeError("Invalid event target");return new S(function(s){var u=function(){for(var a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];return s.next(1<a.length?a:a[0])};return i(u),function(){return c(u)}})}function ut(t,e){return function(n){return function(r){return t[n](e,r)}}}function Ce(t){return d(t.addListener)&&d(t.removeListener)}function He(t){return d(t.on)&&d(t.off)}function Le(t){return d(t.addEventListener)&&d(t.removeEventListener)}function Ze(t,e,n,r,o){return function(i,c){var s=n,u=e,a=0;i.subscribe(H(c,function(l){var h=a++;u=s?t(u,l,h):(s=!0,l),r&&c.next(u)},o&&function(){s&&c.next(u),c.complete()}))}}function Be(t,e){return V(Ze(t,e,arguments.length>=2,!0))}window.toast=Q;const mt=t=>document.querySelector(t),D=t=>mt(t).value||"",It=t=>R(mt(t),"click");It("#toast").pipe(Be(()=>({text:D("[name=text]"),icon:D("[name=icon]"),timeout:+D("[name=timeout]")||2500,isModal:D("[name=isModal]:checked")==="true"}),{}),K(t=>Q.show(k(I({},t),{onClick:()=>{alert(`Clicked: ${t.text}`)}})))).subscribe(()=>{});It("#closeAll").subscribe(()=>{Q.destroyAll()});
