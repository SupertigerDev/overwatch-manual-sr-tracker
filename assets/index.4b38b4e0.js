var Be=Object.defineProperty;var te=Object.getOwnPropertySymbols;var Fe=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable;var ne=(e,t,n)=>t in e?Be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,oe=(e,t)=>{for(var n in t||(t={}))Fe.call(t,n)&&ne(e,n,t[n]);if(te)for(var n of te(t))je.call(t,n)&&ne(e,n,t[n]);return e};const qe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))_(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&_(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function _(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}};qe();var w,s,ve,ye,M,ge,_e,be,H={},ke=[],ze=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function C(e,t){for(var n in t)e[n]=t[n];return e}function Se(e){var t=e.parentNode;t&&t.removeChild(e)}function q(e,t,n){var _,r,o,c={};for(o in t)o=="key"?_=t[o]:o=="ref"?r=t[o]:c[o]=t[o];if(arguments.length>2&&(c.children=arguments.length>3?w.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)c[o]===void 0&&(c[o]=e.defaultProps[o]);return P(e,c,_,r,null)}function P(e,t,n,_,r){var o={type:e,props:t,key:n,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:r==null?++ve:r};return r==null&&s.vnode!=null&&s.vnode(o),o}function Ge(){return{current:null}}function D(e){return e.children}function E(e,t){this.props=e,this.context=t}function x(e,t){if(t==null)return e.__?x(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?x(e):null}function Ce(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return Ce(e)}}function z(e){(!e.__d&&(e.__d=!0)&&M.push(e)&&!W.__r++||_e!==s.debounceRendering)&&((_e=s.debounceRendering)||ge)(W)}function W(){for(var e;W.__r=M.length;)e=M.sort(function(t,n){return t.__v.__b-n.__v.__b}),M=[],e.some(function(t){var n,_,r,o,c,a;t.__d&&(c=(o=(n=t).__v).__e,(a=n.__P)&&(_=[],(r=C({},o)).__v=o.__v+1,Y(a,o,r,n.__n,a.ownerSVGElement!==void 0,o.__h!=null?[c]:null,_,c==null?x(o):c,o.__h),Re(_,o),o.__e!=c&&Ce(o)))})}function Ne(e,t,n,_,r,o,c,a,d,m){var l,p,u,i,f,$,v,y=_&&_.__k||ke,b=y.length;for(n.__k=[],l=0;l<t.length;l++)if((i=n.__k[l]=(i=t[l])==null||typeof i=="boolean"?null:typeof i=="string"||typeof i=="number"||typeof i=="bigint"?P(null,i,null,null,i):Array.isArray(i)?P(D,{children:i},null,null,null):i.__b>0?P(i.type,i.props,i.key,null,i.__v):i)!=null){if(i.__=n,i.__b=n.__b+1,(u=y[l])===null||u&&i.key==u.key&&i.type===u.type)y[l]=void 0;else for(p=0;p<b;p++){if((u=y[p])&&i.key==u.key&&i.type===u.type){y[p]=void 0;break}u=null}Y(e,i,u=u||H,r,o,c,a,d,m),f=i.__e,(p=i.ref)&&u.ref!=p&&(v||(v=[]),u.ref&&v.push(u.ref,null,i),v.push(p,i.__c||f,i)),f!=null?($==null&&($=f),typeof i.type=="function"&&i.__k===u.__k?i.__d=d=Ae(i,d,e):d=$e(e,i,u,y,f,d),typeof n.type=="function"&&(n.__d=d)):d&&u.__e==d&&d.parentNode!=e&&(d=x(u))}for(n.__e=$,l=b;l--;)y[l]!=null&&(typeof n.type=="function"&&y[l].__e!=null&&y[l].__e==n.__d&&(n.__d=x(_,l+1)),Me(y[l],y[l]));if(v)for(l=0;l<v.length;l++)xe(v[l],v[++l],v[++l])}function Ae(e,t,n){for(var _,r=e.__k,o=0;r&&o<r.length;o++)(_=r[o])&&(_.__=e,t=typeof _.type=="function"?Ae(_,t,n):$e(n,_,_,r,_.__e,t));return t}function Te(e,t){return t=t||[],e==null||typeof e=="boolean"||(Array.isArray(e)?e.some(function(n){Te(n,t)}):t.push(e)),t}function $e(e,t,n,_,r,o){var c,a,d;if(t.__d!==void 0)c=t.__d,t.__d=void 0;else if(n==null||r!=o||r.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(r),c=null;else{for(a=o,d=0;(a=a.nextSibling)&&d<_.length;d+=2)if(a==r)break e;e.insertBefore(r,o),c=o}return c!==void 0?c:r.nextSibling}function Ke(e,t,n,_,r){var o;for(o in n)o==="children"||o==="key"||o in t||U(e,o,null,n[o],_);for(o in t)r&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===t[o]||U(e,o,t[o],n[o],_)}function re(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||ze.test(t)?n:n+"px"}function U(e,t,n,_,r){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof _=="string"&&(e.style.cssText=_=""),_)for(t in _)n&&t in n||re(e.style,t,"");if(n)for(t in n)_&&n[t]===_[t]||re(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?_||e.addEventListener(t,o?ce:le,o):e.removeEventListener(t,o?ce:le,o);else if(t!=="dangerouslySetInnerHTML"){if(r)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n==null?"":n;break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function le(e){this.l[e.type+!1](s.event?s.event(e):e)}function ce(e){this.l[e.type+!0](s.event?s.event(e):e)}function Y(e,t,n,_,r,o,c,a,d){var m,l,p,u,i,f,$,v,y,b,I,k=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(d=n.__h,a=t.__e=n.__e,t.__h=null,o=[a]),(m=s.__b)&&m(t);try{e:if(typeof k=="function"){if(v=t.props,y=(m=k.contextType)&&_[m.__c],b=m?y?y.props.value:m.__:_,n.__c?$=(l=t.__c=n.__c).__=l.__E:("prototype"in k&&k.prototype.render?t.__c=l=new k(v,b):(t.__c=l=new E(v,b),l.constructor=k,l.render=Ve),y&&y.sub(l),l.props=v,l.state||(l.state={}),l.context=b,l.__n=_,p=l.__d=!0,l.__h=[]),l.__s==null&&(l.__s=l.state),k.getDerivedStateFromProps!=null&&(l.__s==l.state&&(l.__s=C({},l.__s)),C(l.__s,k.getDerivedStateFromProps(v,l.__s))),u=l.props,i=l.state,p)k.getDerivedStateFromProps==null&&l.componentWillMount!=null&&l.componentWillMount(),l.componentDidMount!=null&&l.__h.push(l.componentDidMount);else{if(k.getDerivedStateFromProps==null&&v!==u&&l.componentWillReceiveProps!=null&&l.componentWillReceiveProps(v,b),!l.__e&&l.shouldComponentUpdate!=null&&l.shouldComponentUpdate(v,l.__s,b)===!1||t.__v===n.__v){l.props=v,l.state=l.__s,t.__v!==n.__v&&(l.__d=!1),l.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(L){L&&(L.__=t)}),l.__h.length&&c.push(l);break e}l.componentWillUpdate!=null&&l.componentWillUpdate(v,l.__s,b),l.componentDidUpdate!=null&&l.__h.push(function(){l.componentDidUpdate(u,i,f)})}l.context=b,l.props=v,l.state=l.__s,(m=s.__r)&&m(t),l.__d=!1,l.__v=t,l.__P=e,m=l.render(l.props,l.state,l.context),l.state=l.__s,l.getChildContext!=null&&(_=C(C({},_),l.getChildContext())),p||l.getSnapshotBeforeUpdate==null||(f=l.getSnapshotBeforeUpdate(u,i)),I=m!=null&&m.type===D&&m.key==null?m.props.children:m,Ne(e,Array.isArray(I)?I:[I],t,n,_,r,o,c,a,d),l.base=t.__e,t.__h=null,l.__h.length&&c.push(l),$&&(l.__E=l.__=null),l.__e=!1}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=Je(n.__e,t,n,_,r,o,c,d);(m=s.diffed)&&m(t)}catch(L){t.__v=null,(d||o!=null)&&(t.__e=a,t.__h=!!d,o[o.indexOf(a)]=null),s.__e(L,t,n)}}function Re(e,t){s.__c&&s.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(_){_.call(n)})}catch(_){s.__e(_,n.__v)}})}function Je(e,t,n,_,r,o,c,a){var d,m,l,p=n.props,u=t.props,i=t.type,f=0;if(i==="svg"&&(r=!0),o!=null){for(;f<o.length;f++)if((d=o[f])&&"setAttribute"in d==!!i&&(i?d.localName===i:d.nodeType===3)){e=d,o[f]=null;break}}if(e==null){if(i===null)return document.createTextNode(u);e=r?document.createElementNS("http://www.w3.org/2000/svg",i):document.createElement(i,u.is&&u),o=null,a=!1}if(i===null)p===u||a&&e.data===u||(e.data=u);else{if(o=o&&w.call(e.childNodes),m=(p=n.props||H).dangerouslySetInnerHTML,l=u.dangerouslySetInnerHTML,!a){if(o!=null)for(p={},f=0;f<e.attributes.length;f++)p[e.attributes[f].name]=e.attributes[f].value;(l||m)&&(l&&(m&&l.__html==m.__html||l.__html===e.innerHTML)||(e.innerHTML=l&&l.__html||""))}if(Ke(e,u,p,r,a),l)t.__k=[];else if(f=t.props.children,Ne(e,Array.isArray(f)?f:[f],t,n,_,r&&i!=="foreignObject",o,c,o?o[0]:n.__k&&x(n,0),a),o!=null)for(f=o.length;f--;)o[f]!=null&&Se(o[f]);a||("value"in u&&(f=u.value)!==void 0&&(f!==e.value||i==="progress"&&!f||i==="option"&&f!==p.value)&&U(e,"value",f,p.value,!1),"checked"in u&&(f=u.checked)!==void 0&&f!==e.checked&&U(e,"checked",f,p.checked,!1))}return e}function xe(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(_){s.__e(_,n)}}function Me(e,t,n){var _,r;if(s.unmount&&s.unmount(e),(_=e.ref)&&(_.current&&_.current!==e.__e||xe(_,null,t)),(_=e.__c)!=null){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(o){s.__e(o,t)}_.base=_.__P=null}if(_=e.__k)for(r=0;r<_.length;r++)_[r]&&Me(_[r],t,typeof e.type!="function");n||e.__e==null||Se(e.__e),e.__e=e.__d=void 0}function Ve(e,t,n){return this.constructor(e,n)}function Z(e,t,n){var _,r,o;s.__&&s.__(e,t),r=(_=typeof n=="function")?null:n&&n.__k||t.__k,o=[],Y(t,e=(!_&&n||t).__k=q(D,null,[e]),r||H,H,t.ownerSVGElement!==void 0,!_&&n?[n]:r?null:t.firstChild?w.call(t.childNodes):null,o,!_&&n?n:r?r.__e:t.firstChild,_),Re(o,e)}function Pe(e,t){Z(e,t,Pe)}function Qe(e,t,n){var _,r,o,c=C({},e.props);for(o in t)o=="key"?_=t[o]:o=="ref"?r=t[o]:c[o]=t[o];return arguments.length>2&&(c.children=arguments.length>3?w.call(arguments,2):n),P(e.type,c,_||e.key,r||e.ref,null)}function Xe(e,t){var n={__c:t="__cC"+be++,__:e,Consumer:function(_,r){return _.children(r)},Provider:function(_){var r,o;return this.getChildContext||(r=[],(o={})[t]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(c){this.props.value!==c.value&&r.some(z)},this.sub=function(c){r.push(c);var a=c.componentWillUnmount;c.componentWillUnmount=function(){r.splice(r.indexOf(c),1),a&&a.call(c)}}),_.children}};return n.Provider.__=n.Consumer.contextType=n}w=ke.slice,s={__e:function(e,t,n,_){for(var r,o,c;t=t.__;)if((r=t.__c)&&!r.__)try{if((o=r.constructor)&&o.getDerivedStateFromError!=null&&(r.setState(o.getDerivedStateFromError(e)),c=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(e,_||{}),c=r.__d),c)return r.__E=r}catch(a){e=a}throw e}},ve=0,ye=function(e){return e!=null&&e.constructor===void 0},E.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=C({},this.state),typeof e=="function"&&(e=e(C({},n),this.props)),e&&C(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),z(this))},E.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),z(this))},E.prototype.render=D,M=[],ge=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,W.__r=0,be=0;var Ye=Object.freeze(Object.defineProperty({__proto__:null,render:Z,hydrate:Pe,createElement:q,h:q,Fragment:D,createRef:Ge,get isValidElement(){return ye},Component:E,cloneElement:Qe,createContext:Xe,toChildArray:Te,get options(){return s}},Symbol.toStringTag,{value:"Module"}));const Ze="_button_1kkb8_1",et="_title_1kkb8_19";var ie={button:Ze,title:et};function tt(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach(function(n){var _=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(t,n,_.get?_:{enumerable:!0,get:function(){return e[n]}})}),t}var nt=tt(Ye),Ee,we,De,G=nt,ot=0;function se(e,t,n,_,r){var o,c,a={};for(c in t)c=="ref"?o=t[c]:a[c]=t[c];var d={type:e,props:a,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--ot,__source:r,__self:_};if(typeof e=="function"&&(o=e.defaultProps))for(c in o)a[c]===void 0&&(a[c]=o[c]);return G.options.vnode&&G.options.vnode(d),d}De=G.Fragment,we=se,Ee=se;const h=we,S=Ee,Ie=De;function K(e){return S("div",{className:ie.button,style:oe({background:e.color},e.styles),onClick:e.onClick,children:[e.icon,h("div",{className:ie.title,children:e.title})]})}const _t="_roleTabs_nbaq4_1",rt="_tab_nbaq4_17",lt="_tabTitle_nbaq4_31";var J={roleTabs:_t,tab:rt,tabTitle:lt},ee,g,ae,V=0,Le=[],ue=s.__b,fe=s.__r,de=s.diffed,he=s.__c,me=s.unmount;function Oe(e,t){s.__h&&s.__h(g,e,V||t),V=0;var n=g.__H||(g.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function R(e){return V=1,ct(We,e)}function ct(e,t,n){var _=Oe(ee++,2);return _.t=e,_.__c||(_.__=[n?n(t):We(void 0,t),function(r){var o=_.t(_.__[0],r);_.__[0]!==o&&(_.__=[o,_.__[1]],_.__c.setState({}))}],_.__c=g),_.__}function He(e,t){var n=Oe(ee++,3);!s.__s&&st(n.__H,t)&&(n.__=e,n.__H=t,g.__H.__h.push(n))}function it(){for(var e;e=Le.shift();)if(e.__P)try{e.__H.__h.forEach(O),e.__H.__h.forEach(Q),e.__H.__h=[]}catch(t){e.__H.__h=[],s.__e(t,e.__v)}}s.__b=function(e){g=null,ue&&ue(e)},s.__r=function(e){fe&&fe(e),ee=0;var t=(g=e.__c).__H;t&&(t.__h.forEach(O),t.__h.forEach(Q),t.__h=[])},s.diffed=function(e){de&&de(e);var t=e.__c;t&&t.__H&&t.__H.__h.length&&(Le.push(t)!==1&&ae===s.requestAnimationFrame||((ae=s.requestAnimationFrame)||function(n){var _,r=function(){clearTimeout(o),pe&&cancelAnimationFrame(_),setTimeout(n)},o=setTimeout(r,100);pe&&(_=requestAnimationFrame(r))})(it)),g=null},s.__c=function(e,t){t.some(function(n){try{n.__h.forEach(O),n.__h=n.__h.filter(function(_){return!_.__||Q(_)})}catch(_){t.some(function(r){r.__h&&(r.__h=[])}),t=[],s.__e(_,n.__v)}}),he&&he(e,t)},s.unmount=function(e){me&&me(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(_){try{O(_)}catch(r){t=r}}),t&&s.__e(t,n.__v))};var pe=typeof requestAnimationFrame=="function";function O(e){var t=g,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),g=t}function Q(e){var t=g;e.__c=e.__(),g=t}function st(e,t){return!e||e.length!==t.length||t.some(function(n,_){return n!==e[_]})}function We(e,t){return typeof t=="function"?t(e):t}var A=(e=>(e.TANK="TANK",e.DAMAGE="DAMAGE",e.SUPPORT="SUPPORT",e))(A||{});function T(e){const t=localStorage[e];return t?JSON.parse(t):[]}function at(e){const t=T(e);return t[0]?t[0].sr:null}function ut(e,t){const n=T(t);n.unshift({sr:e,timestamp:Date.now(),matchResult:ht(e,t),difference:dt(e,t)}),localStorage[t]=JSON.stringify(n)}function ft(e,t){const n=T(e);n.splice(t,1),localStorage[e]=JSON.stringify(n)}function dt(e,t){var c;const n=T(t),_=e,r=(c=n==null?void 0:n[0])==null?void 0:c.sr;return _-r}function ht(e,t){var o;const n=T(t);if(!n.length)return"INIT";const _=e,r=(o=n==null?void 0:n[0])==null?void 0:o.sr;return r!==void 0?r>_?"LOSS":r<_?"WIN":"DRAW":"WIN"}function mt(e){const t=new Date(e),_=new Date().getTime()-t.getTime(),r=Math.floor(_/(1e3*60)),o=Math.floor(_/(1e3*60*60)),c=Math.floor(_/(1e3*60*60*24)),a=Math.floor(_/(1e3*60*60*24*30)),d=Math.floor(_/(1e3*60*60*24*30*12));return r<60?`${r} minutes ago`:o<24?`${o} hours ago`:c<30?`${c} days ago`:a<12?`${a} months ago`:`${d} years ago`}function Ue(e){const[t,n]=R(e.defaultSelectedRole||"Tank"),_=r=>{var o;n(r),(o=e.onRoleClicked)==null||o.call(e,r)};return S("div",{className:J.roleTabs,children:[h(B,{title:A.TANK,onClicked:_,selected:t===A.TANK}),h(B,{title:A.DAMAGE,onClicked:_,selected:t===A.DAMAGE}),h(B,{title:A.SUPPORT,onClicked:_,selected:t===A.SUPPORT})]})}function B(e){return h("div",{className:J.tab,selected:e.selected,onClick:()=>{var t;return(t=e.onClicked)==null?void 0:t.call(e,e.title)},children:h("div",{className:J.tabTitle,children:e.title})})}const pt="_background_t42ob_1",vt="_addModal_t42ob_19",yt="_buttons_t42ob_35";var F={background:pt,addModal:vt,buttons:yt};const gt="_inputBox_1mzno_1",bt="_title_1mzno_11",kt="_input_1mzno_1";var j={inputBox:gt,title:bt,input:kt};function St(e){return S("div",{className:j.inputBox,children:[S("div",{className:j.title,children:[e.title,":"]}),h("input",{className:j.input,value:e.value,onChange:t=>e.onInput(t.target.value)})]})}function X(e){return h("img",{src:`./${e.name}.svg`,alt:""})}function Ct(e){if(!e.show)return h(Ie,{});const[t,n]=R(""),[_,r]=R(e.defaultRole);He(()=>{const c=at(_);if(c===null){n("");return}n(c.toString())},[]);const o=()=>{const c=parseInt(t);if(isNaN(c)){alert("Invalid SR");return}ut(c,_),e.onCancelClicked()};return h("div",{className:F.background,children:S("div",{className:F.addModal,children:[h(Ue,{defaultSelectedRole:_,onRoleClicked:r}),h(St,{title:"SR",onInput:n,value:t}),S("div",{className:F.buttons,children:[h(K,{title:"Cancel",color:"#f54242",onClick:e.onCancelClicked,icon:h(X,{name:"cancel"})}),h(K,{title:"Add",color:"#2B92E1",onClick:o,icon:h(X,{name:"add"})})]})]})})}const Nt="_matchList_1i198_1",At="_match_1i198_1",Tt="_matchTimeAgo_1i198_31",$t="_matchResult_1i198_41",Rt="_deleteButton_1i198_49",xt="_WIN_1i198_61",Mt="_INIT_1i198_69",Pt="_LOSS_1i198_81",Et="_DRAW_1i198_87";var N={matchList:Nt,match:At,matchTimeAgo:Tt,matchResult:$t,deleteButton:Rt,WIN:xt,INIT:Mt,LOSS:Pt,DRAW:Et};function wt(e){return h("div",{className:N.matchList,children:e.matches.map((t,n)=>h(Dt,{deleteClicked:()=>e.deleteClicked(n),matchIndex:n,matches:e.matches},n))})}function Dt(e){const t=e.matches[e.matchIndex],n=`${t.difference>0?"+":""}${t.difference}`;return S("div",{className:N.match,children:[h("div",{className:N.matchResult+" "+N[t.matchResult],children:t.matchResult}),S("div",{className:N.matchSr,children:[t.sr," SR"]}),!!t.difference&&S("div",{className:N.matchDifference,children:["(",n,")"]}),h("div",{className:N.matchTimeAgo,children:mt(t.timestamp)}),h("div",{className:N.deleteButton,onClick:e.deleteClicked,children:"DELETE"})]})}function It(){const[e,t]=R(!1),[n,_]=R(A.TANK),[r,o]=R([]);He(()=>{e||o(T(n))},[n,e]);const c=a=>{ft(n,a),o(T(n))};return S(Ie,{children:[h(Ue,{defaultSelectedRole:n,onRoleClicked:_}),h(K,{styles:{marginLeft:"20px"},title:"Add",color:"#2B92E1",icon:h(X,{name:"add"}),onClick:()=>t(!0)}),h(wt,{matches:r,deleteClicked:c}),h(Ct,{defaultRole:n,onCancelClicked:()=>t(!1),show:e})]})}Z(h(It,{}),document.getElementById("app"));
