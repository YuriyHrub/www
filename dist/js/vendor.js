!function(a,b){"function"==typeof define&&define.amd?define([],function(){return a.svg4everybody=b()}):"object"==typeof module&&module.exports?module.exports=b():a.svg4everybody=b()}(this,function(){function a(a,b,c){if(c){var d=document.createDocumentFragment(),e=!b.hasAttribute("viewBox")&&c.getAttribute("viewBox");e&&b.setAttribute("viewBox",e);for(var f=c.cloneNode(!0);f.childNodes.length;)d.appendChild(f.firstChild);a.appendChild(d)}}function b(b){b.onreadystatechange=function(){if(4===b.readyState){var c=b._cachedDocument;c||(c=b._cachedDocument=document.implementation.createHTMLDocument(""),c.body.innerHTML=b.responseText,b._cachedTarget={}),b._embeds.splice(0).map(function(d){var e=b._cachedTarget[d.id];e||(e=b._cachedTarget[d.id]=c.getElementById(d.id)),a(d.parent,d.svg,e)})}},b.onreadystatechange()}function c(c){function e(){for(var c=0;c<o.length;){var h=o[c],i=h.parentNode,j=d(i),k=h.getAttribute("xlink:href")||h.getAttribute("href");if(!k&&g.attributeName&&(k=h.getAttribute(g.attributeName)),j&&k){if(f)if(!g.validate||g.validate(k,j,h)){i.removeChild(h);var l=k.split("#"),q=l.shift(),r=l.join("#");if(q.length){var s=m[q];s||(s=m[q]=new XMLHttpRequest,s.open("GET",q),s.send(),s._embeds=[]),s._embeds.push({parent:i,svg:j,id:r}),b(s)}else a(i,j,document.getElementById(r))}else++c,++p}else++c}(!o.length||o.length-p>0)&&n(e,67)}var f,g=Object(c),h=/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,i=/\bAppleWebKit\/(\d+)\b/,j=/\bEdge\/12\.(\d+)\b/,k=/\bEdge\/.(\d+)\b/,l=window.top!==window.self;f="polyfill"in g?g.polyfill:h.test(navigator.userAgent)||(navigator.userAgent.match(j)||[])[1]<10547||(navigator.userAgent.match(i)||[])[1]<537||k.test(navigator.userAgent)&&l;var m={},n=window.requestAnimationFrame||setTimeout,o=document.getElementsByTagName("use"),p=0;f&&e()}function d(a){for(var b=a;"svg"!==b.nodeName.toLowerCase()&&(b=b.parentNode););return b}return c});;
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).IMask={})}(this,(function(t){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=function(t){return t&&t.Math==Math&&t},r=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||function(){return this}()||Function("return this")(),u={},i=function(t){try{return!!t()}catch(t){return!0}},a=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),s={},o={}.propertyIsEnumerable,l=Object.getOwnPropertyDescriptor,h=l&&!o.call({1:2},1);s.f=h?function(t){var e=l(this,t);return!!e&&e.enumerable}:o;var c,f,p=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},d={}.toString,v=function(t){return d.call(t).slice(8,-1)},g="".split,k=i((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==v(t)?g.call(t,""):Object(t)}:Object,y=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},m=k,_=y,b=function(t){return m(_(t))},A=function(t){return"object"==typeof t?null!==t:"function"==typeof t},C=r,E=function(t){return"function"==typeof t?t:void 0},F=function(t,e){return arguments.length<2?E(C[t]):C[t]&&C[t][e]},S=F("navigator","userAgent")||"",D=r,w=S,B=D.process,M=D.Deno,x=B&&B.versions||M&&M.version,P=x&&x.v8;P?f=(c=P.split("."))[0]<4?1:c[0]+c[1]:w&&(!(c=w.match(/Edge\/(\d+)/))||c[1]>=74)&&(c=w.match(/Chrome\/(\d+)/))&&(f=c[1]);var O=f&&+f,T=i,I=!!Object.getOwnPropertySymbols&&!T((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&O&&O<41})),j=I&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,V=F,R=j?function(t){return"symbol"==typeof t}:function(t){var e=V("Symbol");return"function"==typeof e&&Object(t)instanceof e},L=A,N={exports:{}},U=r,z=function(t,e){try{Object.defineProperty(U,t,{value:e,configurable:!0,writable:!0})}catch(n){U[t]=e}return e},H=z,Y="__core-js_shared__",Z=r[Y]||H(Y,{}),K=Z;(N.exports=function(t,e){return K[t]||(K[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.17.3",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"});var G=y,W=function(t){return Object(G(t))},$=W,q={}.hasOwnProperty,X=Object.hasOwn||function(t,e){return q.call($(t),e)},J=0,Q=Math.random(),tt=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++J+Q).toString(36)},et=r,nt=N.exports,rt=X,ut=tt,it=I,at=j,st=nt("wks"),ot=et.Symbol,lt=at?ot:ot&&ot.withoutSetter||ut,ht=A,ct=R,ft=function(t,e){var n,r;if("string"===e&&"function"==typeof(n=t.toString)&&!L(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!L(r=n.call(t)))return r;if("string"!==e&&"function"==typeof(n=t.toString)&&!L(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},pt=function(t){return rt(st,t)&&(it||"string"==typeof st[t])||(it&&rt(ot,t)?st[t]=ot[t]:st[t]=lt("Symbol."+t)),st[t]}("toPrimitive"),dt=function(t,e){if(!ht(t)||ct(t))return t;var n,r=t[pt];if(void 0!==r){if(void 0===e&&(e="default"),n=r.call(t,e),!ht(n)||ct(n))return n;throw TypeError("Can't convert object to primitive value")}return void 0===e&&(e="number"),ft(t,e)},vt=R,gt=function(t){var e=dt(t,"string");return vt(e)?e:String(e)},kt=A,yt=r.document,mt=kt(yt)&&kt(yt.createElement),_t=function(t){return mt?yt.createElement(t):{}},bt=!a&&!i((function(){return 7!=Object.defineProperty(_t("div"),"a",{get:function(){return 7}}).a})),At=a,Ct=s,Et=p,Ft=b,St=gt,Dt=X,wt=bt,Bt=Object.getOwnPropertyDescriptor;u.f=At?Bt:function(t,e){if(t=Ft(t),e=St(e),wt)try{return Bt(t,e)}catch(t){}if(Dt(t,e))return Et(!Ct.f.call(t,e),t[e])};var Mt={},xt=A,Pt=function(t){if(!xt(t))throw TypeError(String(t)+" is not an object");return t},Ot=a,Tt=bt,It=Pt,jt=gt,Vt=Object.defineProperty;Mt.f=Ot?Vt:function(t,e,n){if(It(t),e=jt(e),It(n),Tt)try{return Vt(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t};var Rt=Mt,Lt=p,Nt=a?function(t,e,n){return Rt.f(t,e,Lt(1,n))}:function(t,e,n){return t[e]=n,t},Ut={exports:{}},zt=Z,Ht=Function.toString;"function"!=typeof zt.inspectSource&&(zt.inspectSource=function(t){return Ht.call(t)});var Yt,Zt,Kt,Gt=zt.inspectSource,Wt=Gt,$t=r.WeakMap,qt="function"==typeof $t&&/native code/.test(Wt($t)),Xt=N.exports,Jt=tt,Qt=Xt("keys"),te={},ee=qt,ne=A,re=Nt,ue=X,ie=Z,ae=function(t){return Qt[t]||(Qt[t]=Jt(t))},se=te,oe="Object already initialized",le=r.WeakMap;if(ee||ie.state){var he=ie.state||(ie.state=new le),ce=he.get,fe=he.has,pe=he.set;Yt=function(t,e){if(fe.call(he,t))throw new TypeError(oe);return e.facade=t,pe.call(he,t,e),e},Zt=function(t){return ce.call(he,t)||{}},Kt=function(t){return fe.call(he,t)}}else{var de=ae("state");se[de]=!0,Yt=function(t,e){if(ue(t,de))throw new TypeError(oe);return e.facade=t,re(t,de,e),e},Zt=function(t){return ue(t,de)?t[de]:{}},Kt=function(t){return ue(t,de)}}var ve={set:Yt,get:Zt,has:Kt,enforce:function(t){return Kt(t)?Zt(t):Yt(t,{})},getterFor:function(t){return function(e){var n;if(!ne(e)||(n=Zt(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},ge=r,ke=Nt,ye=X,me=z,_e=Gt,be=ve.get,Ae=ve.enforce,Ce=String(String).split("String");(Ut.exports=function(t,e,n,r){var u,i=!!r&&!!r.unsafe,a=!!r&&!!r.enumerable,s=!!r&&!!r.noTargetGet;"function"==typeof n&&("string"!=typeof e||ye(n,"name")||ke(n,"name",e),(u=Ae(n)).source||(u.source=Ce.join("string"==typeof e?e:""))),t!==ge?(i?!s&&t[e]&&(a=!0):delete t[e],a?t[e]=n:ke(t,e,n)):a?t[e]=n:me(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&be(this).source||_e(this)}));var Ee={},Fe=Math.ceil,Se=Math.floor,De=function(t){return isNaN(t=+t)?0:(t>0?Se:Fe)(t)},we=De,Be=Math.min,Me=function(t){return t>0?Be(we(t),9007199254740991):0},xe=De,Pe=Math.max,Oe=Math.min,Te=b,Ie=Me,je=function(t,e){var n=xe(t);return n<0?Pe(n+e,0):Oe(n,e)},Ve=function(t){return function(e,n,r){var u,i=Te(e),a=Ie(i.length),s=je(r,a);if(t&&n!=n){for(;a>s;)if((u=i[s++])!=u)return!0}else for(;a>s;s++)if((t||s in i)&&i[s]===n)return t||s||0;return!t&&-1}},Re={includes:Ve(!0),indexOf:Ve(!1)},Le=X,Ne=b,Ue=Re.indexOf,ze=te,He=function(t,e){var n,r=Ne(t),u=0,i=[];for(n in r)!Le(ze,n)&&Le(r,n)&&i.push(n);for(;e.length>u;)Le(r,n=e[u++])&&(~Ue(i,n)||i.push(n));return i},Ye=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Ze=He,Ke=Ye.concat("length","prototype");Ee.f=Object.getOwnPropertyNames||function(t){return Ze(t,Ke)};var Ge={};Ge.f=Object.getOwnPropertySymbols;var We=Ee,$e=Ge,qe=Pt,Xe=F("Reflect","ownKeys")||function(t){var e=We.f(qe(t)),n=$e.f;return n?e.concat(n(t)):e},Je=X,Qe=Xe,tn=u,en=Mt,nn=i,rn=/#|\.prototype\./,un=function(t,e){var n=sn[an(t)];return n==ln||n!=on&&("function"==typeof e?nn(e):!!e)},an=un.normalize=function(t){return String(t).replace(rn,".").toLowerCase()},sn=un.data={},on=un.NATIVE="N",ln=un.POLYFILL="P",hn=un,cn=r,fn=u.f,pn=Nt,dn=Ut.exports,vn=z,gn=function(t,e){for(var n=Qe(e),r=en.f,u=tn.f,i=0;i<n.length;i++){var a=n[i];Je(t,a)||r(t,a,u(e,a))}},kn=hn,yn=function(t,e){var n,r,u,i,a,s=t.target,o=t.global,l=t.stat;if(n=o?cn:l?cn[s]||vn(s,{}):(cn[s]||{}).prototype)for(r in e){if(i=e[r],u=t.noTargetGet?(a=fn(n,r))&&a.value:n[r],!kn(o?r:s+(l?".":"#")+r,t.forced)&&void 0!==u){if(typeof i==typeof u)continue;gn(i,u)}(t.sham||u&&u.sham)&&pn(i,"sham",!0),dn(n,r,i,t)}},mn=He,_n=Ye,bn=Object.keys||function(t){return mn(t,_n)},An=a,Cn=i,En=bn,Fn=Ge,Sn=s,Dn=W,wn=k,Bn=Object.assign,Mn=Object.defineProperty,xn=!Bn||Cn((function(){if(An&&1!==Bn({b:1},Bn(Mn({},"a",{enumerable:!0,get:function(){Mn(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},n=Symbol(),r="abcdefghijklmnopqrst";return t[n]=7,r.split("").forEach((function(t){e[t]=t})),7!=Bn({},t)[n]||En(Bn({},e)).join("")!=r}))?function(t,e){for(var n=Dn(t),r=arguments.length,u=1,i=Fn.f,a=Sn.f;r>u;)for(var s,o=wn(arguments[u++]),l=i?En(o).concat(i(o)):En(o),h=l.length,c=0;h>c;)s=l[c++],An&&!a.call(o,s)||(n[s]=o[s]);return n}:Bn,Pn=xn;yn({target:"Object",stat:!0,forced:Object.assign!==Pn},{assign:Pn});var On=R,Tn=function(t){if(On(t))throw TypeError("Cannot convert a Symbol value to a string");return String(t)},In=De,jn=Tn,Vn=y,Rn=function(t){var e=jn(Vn(this)),n="",r=In(t);if(r<0||r==1/0)throw RangeError("Wrong number of repetitions");for(;r>0;(r>>>=1)&&(e+=e))1&r&&(n+=e);return n};yn({target:"String",proto:!0},{repeat:Rn});var Ln=Me,Nn=Tn,Un=Rn,zn=y,Hn=Math.ceil,Yn=function(t){return function(e,n,r){var u,i,a=Nn(zn(e)),s=a.length,o=void 0===r?" ":Nn(r),l=Ln(n);return l<=s||""==o?a:(u=l-s,(i=Un.call(o,Hn(u/o.length))).length>u&&(i=i.slice(0,u)),t?a+i:i+a)}},Zn={start:Yn(!1),end:Yn(!0)},Kn=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(S),Gn=Zn.start;yn({target:"String",proto:!0,forced:Kn},{padStart:function(t){return Gn(this,t,arguments.length>1?arguments[1]:void 0)}});var Wn=Zn.end;function $n(t){return $n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$n(t)}function qn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Xn(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Jn(t,e,n){return e&&Xn(t.prototype,e),n&&Xn(t,n),t}function Qn(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&er(t,e)}function tr(t){return tr=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},tr(t)}function er(t,e){return er=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},er(t,e)}function nr(t,e){if(null==t)return{};var n,r,u=function(t,e){if(null==t)return{};var n,r,u={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(u[n]=t[n]);return u}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(u[n]=t[n])}return u}function rr(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function ur(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=tr(t);if(e){var u=tr(this).constructor;n=Reflect.construct(r,arguments,u)}else n=r.apply(this,arguments);return rr(this,n)}}function ir(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=tr(t)););return t}function ar(t,e,n){return ar="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=ir(t,e);if(r){var u=Object.getOwnPropertyDescriptor(r,e);return u.get?u.get.call(n):u.value}},ar(t,e,n||t)}function sr(t,e,n,r){return sr="undefined"!=typeof Reflect&&Reflect.set?Reflect.set:function(t,e,n,r){var u,i=ir(t,e);if(i){if((u=Object.getOwnPropertyDescriptor(i,e)).set)return u.set.call(r,n),!0;if(!u.writable)return!1}if(u=Object.getOwnPropertyDescriptor(r,e)){if(!u.writable)return!1;u.value=n,Object.defineProperty(r,e,u)}else!function(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n}(r,e,n);return!0},sr(t,e,n,r)}function or(t,e,n,r,u){if(!sr(t,e,n,r||t)&&u)throw new Error("failed to set property");return n}function lr(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,u,i=[],a=!0,s=!1;try{for(n=n.call(t);!(a=(r=n.next()).done)&&(i.push(r.value),!e||i.length!==e);a=!0);}catch(t){s=!0,u=t}finally{try{a||null==n.return||n.return()}finally{if(s)throw u}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return hr(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return hr(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function hr(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function cr(t){return"string"==typeof t||t instanceof String}yn({target:"String",proto:!0,forced:Kn},{padEnd:function(t){return Wn(this,t,arguments.length>1?arguments[1]:void 0)}}),yn({global:!0},{globalThis:r});var fr="NONE",pr="LEFT",dr="FORCE_LEFT",vr="RIGHT",gr="FORCE_RIGHT";function kr(t){switch(t){case pr:return dr;case vr:return gr;default:return t}}function yr(t){return t.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}function mr(t,e){if(e===t)return!0;var n,r=Array.isArray(e),u=Array.isArray(t);if(r&&u){if(e.length!=t.length)return!1;for(n=0;n<e.length;n++)if(!mr(e[n],t[n]))return!1;return!0}if(r!=u)return!1;if(e&&t&&"object"===$n(e)&&"object"===$n(t)){var i=e instanceof Date,a=t instanceof Date;if(i&&a)return e.getTime()==t.getTime();if(i!=a)return!1;var s=e instanceof RegExp,o=t instanceof RegExp;if(s&&o)return e.toString()==t.toString();if(s!=o)return!1;var l=Object.keys(e);for(n=0;n<l.length;n++)if(!Object.prototype.hasOwnProperty.call(t,l[n]))return!1;for(n=0;n<l.length;n++)if(!mr(t[l[n]],e[l[n]]))return!1;return!0}return!(!e||!t||"function"!=typeof e||"function"!=typeof t)&&e.toString()===t.toString()}var _r=function(){function t(e,n,r,u){for(qn(this,t),this.value=e,this.cursorPos=n,this.oldValue=r,this.oldSelection=u;this.value.slice(0,this.startChangePos)!==this.oldValue.slice(0,this.startChangePos);)--this.oldSelection.start}return Jn(t,[{key:"startChangePos",get:function(){return Math.min(this.cursorPos,this.oldSelection.start)}},{key:"insertedCount",get:function(){return this.cursorPos-this.startChangePos}},{key:"inserted",get:function(){return this.value.substr(this.startChangePos,this.insertedCount)}},{key:"removedCount",get:function(){return Math.max(this.oldSelection.end-this.startChangePos||this.oldValue.length-this.value.length,0)}},{key:"removed",get:function(){return this.oldValue.substr(this.startChangePos,this.removedCount)}},{key:"head",get:function(){return this.value.substring(0,this.startChangePos)}},{key:"tail",get:function(){return this.value.substring(this.startChangePos+this.insertedCount)}},{key:"removeDirection",get:function(){return!this.removedCount||this.insertedCount?fr:this.oldSelection.end===this.cursorPos||this.oldSelection.start===this.cursorPos?vr:pr}}]),t}(),br=function(){function t(e){qn(this,t),Object.assign(this,{inserted:"",rawInserted:"",skip:!1,tailShift:0},e)}return Jn(t,[{key:"aggregate",value:function(t){return this.rawInserted+=t.rawInserted,this.skip=this.skip||t.skip,this.inserted+=t.inserted,this.tailShift+=t.tailShift,this}},{key:"offset",get:function(){return this.tailShift+this.inserted.length}}]),t}(),Ar=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2?arguments[2]:void 0;qn(this,t),this.value=e,this.from=n,this.stop=r}return Jn(t,[{key:"toString",value:function(){return this.value}},{key:"extend",value:function(t){this.value+=String(t)}},{key:"appendTo",value:function(t){return t.append(this.toString(),{tail:!0}).aggregate(t._appendPlaceholder())}},{key:"state",get:function(){return{value:this.value,from:this.from,stop:this.stop}},set:function(t){Object.assign(this,t)}},{key:"shiftBefore",value:function(t){if(this.from>=t||!this.value.length)return"";var e=this.value[0];return this.value=this.value.slice(1),e}}]),t}();function Cr(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Cr.InputMask(t,e)}var Er=function(){function t(e){qn(this,t),this._value="",this._update(Object.assign({},t.DEFAULTS,e)),this.isInitialized=!0}return Jn(t,[{key:"updateOptions",value:function(t){Object.keys(t).length&&this.withValueRefresh(this._update.bind(this,t))}},{key:"_update",value:function(t){Object.assign(this,t)}},{key:"state",get:function(){return{_value:this.value}},set:function(t){this._value=t._value}},{key:"reset",value:function(){this._value=""}},{key:"value",get:function(){return this._value},set:function(t){this.resolve(t)}},{key:"resolve",value:function(t){return this.reset(),this.append(t,{input:!0},""),this.doCommit(),this.value}},{key:"unmaskedValue",get:function(){return this.value},set:function(t){this.reset(),this.append(t,{},""),this.doCommit()}},{key:"typedValue",get:function(){return this.doParse(this.value)},set:function(t){this.value=this.doFormat(t)}},{key:"rawInputValue",get:function(){return this.extractInput(0,this.value.length,{raw:!0})},set:function(t){this.reset(),this.append(t,{raw:!0},""),this.doCommit()}},{key:"isComplete",get:function(){return!0}},{key:"nearestInputPos",value:function(t,e){return t}},{key:"extractInput",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length;return this.value.slice(t,e)}},{key:"extractTail",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length;return new Ar(this.extractInput(t,e),t)}},{key:"appendTail",value:function(t){return cr(t)&&(t=new Ar(String(t))),t.appendTo(this)}},{key:"_appendCharRaw",value:function(t){return t?(this._value+=t,new br({inserted:t,rawInserted:t})):new br}},{key:"_appendChar",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,r=this.state,u=this._appendCharRaw(this.doPrepare(t,e),e);if(u.inserted){var i,a=!1!==this.doValidate(e);if(a&&null!=n){var s=this.state;this.overwrite&&(i=n.state,n.shiftBefore(this.value.length));var o=this.appendTail(n);(a=o.rawInserted===n.toString())&&o.inserted&&(this.state=s)}a||(u=new br,this.state=r,n&&i&&(n.state=i))}return u}},{key:"_appendPlaceholder",value:function(){return new br}},{key:"append",value:function(t,e,n){if(!cr(t))throw new Error("value should be string");var r=new br,u=cr(n)?new Ar(String(n)):n;e&&e.tail&&(e._beforeTailState=this.state);for(var i=0;i<t.length;++i)r.aggregate(this._appendChar(t[i],e,u));return null!=u&&(r.tailShift+=this.appendTail(u).tailShift),r}},{key:"remove",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length;return this._value=this.value.slice(0,t)+this.value.slice(e),new br}},{key:"withValueRefresh",value:function(t){if(this._refreshing||!this.isInitialized)return t();this._refreshing=!0;var e=this.rawInputValue,n=this.value,r=t();return this.rawInputValue=e,this.value&&this.value!==n&&0===n.indexOf(this.value)&&this.append(n.slice(this.value.length),{},""),delete this._refreshing,r}},{key:"runIsolated",value:function(t){if(this._isolated||!this.isInitialized)return t(this);this._isolated=!0;var e=this.state,n=t(this);return this.state=e,delete this._isolated,n}},{key:"doPrepare",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.prepare?this.prepare(t,this,e):t}},{key:"doValidate",value:function(t){return(!this.validate||this.validate(this.value,this,t))&&(!this.parent||this.parent.doValidate(t))}},{key:"doCommit",value:function(){this.commit&&this.commit(this.value,this)}},{key:"doFormat",value:function(t){return this.format?this.format(t,this):t}},{key:"doParse",value:function(t){return this.parse?this.parse(t,this):t}},{key:"splice",value:function(t,e,n,r){var u=t+e,i=this.extractTail(u),a=this.nearestInputPos(t,r);return new br({tailShift:a-t}).aggregate(this.remove(a)).aggregate(this.append(n,{input:!0},i))}}]),t}();function Fr(t){if(null==t)throw new Error("mask property should be defined");return t instanceof RegExp?Cr.MaskedRegExp:cr(t)?Cr.MaskedPattern:t instanceof Date||t===Date?Cr.MaskedDate:t instanceof Number||"number"==typeof t||t===Number?Cr.MaskedNumber:Array.isArray(t)||t===Array?Cr.MaskedDynamic:Cr.Masked&&t.prototype instanceof Cr.Masked?t:t instanceof Function?Cr.MaskedFunction:t instanceof Cr.Masked?t.constructor:(console.warn("Mask not found for mask",t),Cr.Masked)}function Sr(t){if(Cr.Masked&&t instanceof Cr.Masked)return t;var e=(t=Object.assign({},t)).mask;if(Cr.Masked&&e instanceof Cr.Masked)return e;var n=Fr(e);if(!n)throw new Error("Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask.");return new n(t)}Er.DEFAULTS={format:function(t){return t},parse:function(t){return t}},Cr.Masked=Er,Cr.createMask=Sr;var Dr=["mask"],wr={0:/\d/,a:/[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,"*":/./},Br=function(){function t(e){qn(this,t);var n=e.mask,r=nr(e,Dr);this.masked=Sr({mask:n}),Object.assign(this,r)}return Jn(t,[{key:"reset",value:function(){this._isFilled=!1,this.masked.reset()}},{key:"remove",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length;return 0===t&&e>=1?(this._isFilled=!1,this.masked.remove(t,e)):new br}},{key:"value",get:function(){return this.masked.value||(this._isFilled&&!this.isOptional?this.placeholderChar:"")}},{key:"unmaskedValue",get:function(){return this.masked.unmaskedValue}},{key:"isComplete",get:function(){return Boolean(this.masked.value)||this.isOptional}},{key:"_appendChar",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this._isFilled)return new br;var n=this.masked.state,r=this.masked._appendChar(t,e);return r.inserted&&!1===this.doValidate(e)&&(r.inserted=r.rawInserted="",this.masked.state=n),r.inserted||this.isOptional||this.lazy||e.input||(r.inserted=this.placeholderChar),r.skip=!r.inserted&&!this.isOptional,this._isFilled=Boolean(r.inserted),r}},{key:"append",value:function(){var t;return(t=this.masked).append.apply(t,arguments)}},{key:"_appendPlaceholder",value:function(){var t=new br;return this._isFilled||this.isOptional||(this._isFilled=!0,t.inserted=this.placeholderChar),t}},{key:"extractTail",value:function(){var t;return(t=this.masked).extractTail.apply(t,arguments)}},{key:"appendTail",value:function(){var t;return(t=this.masked).appendTail.apply(t,arguments)}},{key:"extractInput",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,n=arguments.length>2?arguments[2]:void 0;return this.masked.extractInput(t,e,n)}},{key:"nearestInputPos",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:fr,n=0,r=this.value.length,u=Math.min(Math.max(t,n),r);switch(e){case pr:case dr:return this.isComplete?u:n;case vr:case gr:return this.isComplete?u:r;default:return u}}},{key:"doValidate",value:function(){var t,e;return(t=this.masked).doValidate.apply(t,arguments)&&(!this.parent||(e=this.parent).doValidate.apply(e,arguments))}},{key:"doCommit",value:function(){this.masked.doCommit()}},{key:"state",get:function(){return{masked:this.masked.state,_isFilled:this._isFilled}},set:function(t){this.masked.state=t.masked,this._isFilled=t._isFilled}}]),t}(),Mr=function(){function t(e){qn(this,t),Object.assign(this,e),this._value=""}return Jn(t,[{key:"value",get:function(){return this._value}},{key:"unmaskedValue",get:function(){return this.isUnmasking?this.value:""}},{key:"reset",value:function(){this._isRawInput=!1,this._value=""}},{key:"remove",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._value.length;return this._value=this._value.slice(0,t)+this._value.slice(e),this._value||(this._isRawInput=!1),new br}},{key:"nearestInputPos",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:fr,n=0,r=this._value.length;switch(e){case pr:case dr:return n;default:return r}}},{key:"extractInput",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this._value.length,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n.raw&&this._isRawInput&&this._value.slice(t,e)||""}},{key:"isComplete",get:function(){return!0}},{key:"_appendChar",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=new br;if(this._value)return n;var r=this.char===t[0],u=r&&(this.isUnmasking||e.input||e.raw)&&!e.tail;return u&&(n.rawInserted=this.char),this._value=n.inserted=this.char,this._isRawInput=u&&(e.raw||e.input),n}},{key:"_appendPlaceholder",value:function(){var t=new br;return this._value||(this._value=t.inserted=this.char),t}},{key:"extractTail",value:function(){return arguments.length>1&&void 0!==arguments[1]||this.value.length,new Ar("")}},{key:"appendTail",value:function(t){return cr(t)&&(t=new Ar(String(t))),t.appendTo(this)}},{key:"append",value:function(t,e,n){var r=this._appendChar(t,e);return null!=n&&(r.tailShift+=this.appendTail(n).tailShift),r}},{key:"doCommit",value:function(){}},{key:"state",get:function(){return{_value:this._value,_isRawInput:this._isRawInput}},set:function(t){Object.assign(this,t)}}]),t}(),xr=["chunks"],Pr=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;qn(this,t),this.chunks=e,this.from=n}return Jn(t,[{key:"toString",value:function(){return this.chunks.map(String).join("")}},{key:"extend",value:function(e){if(String(e)){cr(e)&&(e=new Ar(String(e)));var n=this.chunks[this.chunks.length-1],r=n&&(n.stop===e.stop||null==e.stop)&&e.from===n.from+n.toString().length;if(e instanceof Ar)r?n.extend(e.toString()):this.chunks.push(e);else if(e instanceof t){if(null==e.stop)for(var u;e.chunks.length&&null==e.chunks[0].stop;)(u=e.chunks.shift()).from+=e.from,this.extend(u);e.toString()&&(e.stop=e.blockIndex,this.chunks.push(e))}}}},{key:"appendTo",value:function(e){if(!(e instanceof Cr.MaskedPattern))return new Ar(this.toString()).appendTo(e);for(var n=new br,r=0;r<this.chunks.length&&!n.skip;++r){var u=this.chunks[r],i=e._mapPosToBlock(e.value.length),a=u.stop,s=void 0;if(null!=a&&(!i||i.index<=a)&&((u instanceof t||e._stops.indexOf(a)>=0)&&n.aggregate(e._appendPlaceholder(a)),s=u instanceof t&&e._blocks[a]),s){var o=s.appendTail(u);o.skip=!1,n.aggregate(o),e._value+=o.inserted;var l=u.toString().slice(o.rawInserted.length);l&&n.aggregate(e.append(l,{tail:!0}))}else n.aggregate(e.append(u.toString(),{tail:!0}))}return n}},{key:"state",get:function(){return{chunks:this.chunks.map((function(t){return t.state})),from:this.from,stop:this.stop,blockIndex:this.blockIndex}},set:function(e){var n=e.chunks,r=nr(e,xr);Object.assign(this,r),this.chunks=n.map((function(e){var n="chunks"in e?new t:new Ar;return n.state=e,n}))}},{key:"shiftBefore",value:function(t){if(this.from>=t||!this.chunks.length)return"";for(var e=t-this.from,n=0;n<this.chunks.length;){var r=this.chunks[n],u=r.shiftBefore(e);if(r.toString()){if(!u)break;++n}else this.chunks.splice(n,1);if(u)return u}return""}}]),t}(),Or=function(t){Qn(n,t);var e=ur(n);function n(){return qn(this,n),e.apply(this,arguments)}return Jn(n,[{key:"_update",value:function(t){t.mask&&(t.validate=function(e){return e.search(t.mask)>=0}),ar(tr(n.prototype),"_update",this).call(this,t)}}]),n}(Er);Cr.MaskedRegExp=Or;var Tr=["_blocks"],Ir=function(t){Qn(n,t);var e=ur(n);function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return qn(this,n),t.definitions=Object.assign({},wr,t.definitions),e.call(this,Object.assign({},n.DEFAULTS,t))}return Jn(n,[{key:"_update",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};t.definitions=Object.assign({},this.definitions,t.definitions),ar(tr(n.prototype),"_update",this).call(this,t),this._rebuildMask()}},{key:"_rebuildMask",value:function(){var t=this,e=this.definitions;this._blocks=[],this._stops=[],this._maskedBlocks={};var r=this.mask;if(r&&e)for(var u=!1,i=!1,a=0;a<r.length;++a){if(this.blocks)if("continue"===function(){var e=r.slice(a),n=Object.keys(t.blocks).filter((function(t){return 0===e.indexOf(t)}));n.sort((function(t,e){return e.length-t.length}));var u=n[0];if(u){var i=Sr(Object.assign({parent:t,lazy:t.lazy,placeholderChar:t.placeholderChar,overwrite:t.overwrite},t.blocks[u]));return i&&(t._blocks.push(i),t._maskedBlocks[u]||(t._maskedBlocks[u]=[]),t._maskedBlocks[u].push(t._blocks.length-1)),a+=u.length-1,"continue"}}())continue;var s=r[a],o=s in e;if(s!==n.STOP_CHAR)if("{"!==s&&"}"!==s)if("["!==s&&"]"!==s){if(s===n.ESCAPE_CHAR){if(++a,!(s=r[a]))break;o=!1}var l=o?new Br({parent:this,lazy:this.lazy,placeholderChar:this.placeholderChar,mask:e[s],isOptional:i}):new Mr({char:s,isUnmasking:u});this._blocks.push(l)}else i=!i;else u=!u;else this._stops.push(this._blocks.length)}}},{key:"state",get:function(){return Object.assign({},ar(tr(n.prototype),"state",this),{_blocks:this._blocks.map((function(t){return t.state}))})},set:function(t){var e=t._blocks,r=nr(t,Tr);this._blocks.forEach((function(t,n){return t.state=e[n]})),or(tr(n.prototype),"state",r,this,!0)}},{key:"reset",value:function(){ar(tr(n.prototype),"reset",this).call(this),this._blocks.forEach((function(t){return t.reset()}))}},{key:"isComplete",get:function(){return this._blocks.every((function(t){return t.isComplete}))}},{key:"doCommit",value:function(){this._blocks.forEach((function(t){return t.doCommit()})),ar(tr(n.prototype),"doCommit",this).call(this)}},{key:"unmaskedValue",get:function(){return this._blocks.reduce((function(t,e){return t+e.unmaskedValue}),"")},set:function(t){or(tr(n.prototype),"unmaskedValue",t,this,!0)}},{key:"value",get:function(){return this._blocks.reduce((function(t,e){return t+e.value}),"")},set:function(t){or(tr(n.prototype),"value",t,this,!0)}},{key:"appendTail",value:function(t){return ar(tr(n.prototype),"appendTail",this).call(this,t).aggregate(this._appendPlaceholder())}},{key:"_appendCharRaw",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this._mapPosToBlock(this.value.length),r=new br;if(!n)return r;for(var u=n.index;;++u){var i=this._blocks[u];if(!i)break;var a=i._appendChar(t,e),s=a.skip;if(r.aggregate(a),s||a.rawInserted)break}return r}},{key:"extractTail",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,r=new Pr;return e===n||this._forEachBlocksInRange(e,n,(function(e,n,u,i){var a=e.extractTail(u,i);a.stop=t._findStopBefore(n),a.from=t._blockStartPos(n),a instanceof Pr&&(a.blockIndex=n),r.extend(a)})),r}},{key:"extractInput",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(t===e)return"";var r="";return this._forEachBlocksInRange(t,e,(function(t,e,u,i){r+=t.extractInput(u,i,n)})),r}},{key:"_findStopBefore",value:function(t){for(var e,n=0;n<this._stops.length;++n){var r=this._stops[n];if(!(r<=t))break;e=r}return e}},{key:"_appendPlaceholder",value:function(t){var e=this,n=new br;if(this.lazy&&null==t)return n;var r=this._mapPosToBlock(this.value.length);if(!r)return n;var u=r.index,i=null!=t?t:this._blocks.length;return this._blocks.slice(u,i).forEach((function(r){if(!r.lazy||null!=t){var u=null!=r._blocks?[r._blocks.length]:[],i=r._appendPlaceholder.apply(r,u);e._value+=i.inserted,n.aggregate(i)}})),n}},{key:"_mapPosToBlock",value:function(t){for(var e="",n=0;n<this._blocks.length;++n){var r=this._blocks[n],u=e.length;if(t<=(e+=r.value).length)return{index:n,offset:t-u}}}},{key:"_blockStartPos",value:function(t){return this._blocks.slice(0,t).reduce((function(t,e){return t+e.value.length}),0)}},{key:"_forEachBlocksInRange",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,n=arguments.length>2?arguments[2]:void 0,r=this._mapPosToBlock(t);if(r){var u=this._mapPosToBlock(e),i=u&&r.index===u.index,a=r.offset,s=u&&i?u.offset:this._blocks[r.index].value.length;if(n(this._blocks[r.index],r.index,a,s),u&&!i){for(var o=r.index+1;o<u.index;++o)n(this._blocks[o],o,0,this._blocks[o].value.length);n(this._blocks[u.index],u.index,0,u.offset)}}}},{key:"remove",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,r=ar(tr(n.prototype),"remove",this).call(this,t,e);return this._forEachBlocksInRange(t,e,(function(t,e,n,u){r.aggregate(t.remove(n,u))})),r}},{key:"nearestInputPos",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:fr,n=this._mapPosToBlock(t)||{index:0,offset:0},r=n.offset,u=n.index,i=this._blocks[u];if(!i)return t;var a=r;0!==a&&a<i.value.length&&(a=i.nearestInputPos(r,kr(e)));var s=a===i.value.length,o=0===a;if(!o&&!s)return this._blockStartPos(u)+a;var l=s?u+1:u;if(e===fr){if(l>0){var h=l-1,c=this._blocks[h],f=c.nearestInputPos(0,fr);if(!c.value.length||f!==c.value.length)return this._blockStartPos(l)}for(var p=l,d=p;d<this._blocks.length;++d){var v=this._blocks[d],g=v.nearestInputPos(0,fr);if(!v.value.length||g!==v.value.length)return this._blockStartPos(d)+g}for(var k=l-1;k>=0;--k){var y=this._blocks[k],m=y.nearestInputPos(0,fr);if(!y.value.length||m!==y.value.length)return this._blockStartPos(k)+y.value.length}return t}if(e===pr||e===dr){for(var _,b=l;b<this._blocks.length;++b)if(this._blocks[b].value){_=b;break}if(null!=_){var A=this._blocks[_],C=A.nearestInputPos(0,vr);if(0===C&&A.unmaskedValue.length)return this._blockStartPos(_)+C}for(var E,F=-1,S=l-1;S>=0;--S){var D=this._blocks[S],w=D.nearestInputPos(D.value.length,dr);if(D.value&&0===w||(E=S),0!==w){if(w!==D.value.length)return this._blockStartPos(S)+w;F=S;break}}if(e===pr)for(var B=F+1;B<=Math.min(l,this._blocks.length-1);++B){var M=this._blocks[B],x=M.nearestInputPos(0,fr),P=this._blockStartPos(B)+x;if(P>t)break;if(x!==M.value.length)return P}if(F>=0)return this._blockStartPos(F)+this._blocks[F].value.length;if(e===dr||this.lazy&&!this.extractInput()&&!jr(this._blocks[l]))return 0;if(null!=E)return this._blockStartPos(E);for(var O=l;O<this._blocks.length;++O){var T=this._blocks[O],I=T.nearestInputPos(0,fr);if(!T.value.length||I!==T.value.length)return this._blockStartPos(O)+I}return 0}if(e===vr||e===gr){for(var j,V,R=l;R<this._blocks.length;++R){var L=this._blocks[R],N=L.nearestInputPos(0,fr);if(N!==L.value.length){V=this._blockStartPos(R)+N,j=R;break}}if(null!=j&&null!=V){for(var U=j;U<this._blocks.length;++U){var z=this._blocks[U],H=z.nearestInputPos(0,gr);if(H!==z.value.length)return this._blockStartPos(U)+H}return e===gr?this.value.length:V}for(var Y=Math.min(l,this._blocks.length-1);Y>=0;--Y){var Z=this._blocks[Y],K=Z.nearestInputPos(Z.value.length,pr);if(0!==K){var G=this._blockStartPos(Y)+K;if(G>=t)return G;break}}}return t}},{key:"maskedBlock",value:function(t){return this.maskedBlocks(t)[0]}},{key:"maskedBlocks",value:function(t){var e=this,n=this._maskedBlocks[t];return n?n.map((function(t){return e._blocks[t]})):[]}}]),n}(Er);function jr(t){if(!t)return!1;var e=t.value;return!e||t.nearestInputPos(0,fr)!==e.length}Ir.DEFAULTS={lazy:!0,placeholderChar:"_"},Ir.STOP_CHAR="`",Ir.ESCAPE_CHAR="\\",Ir.InputDefinition=Br,Ir.FixedDefinition=Mr,Cr.MaskedPattern=Ir;var Vr=function(t){Qn(n,t);var e=ur(n);function n(){return qn(this,n),e.apply(this,arguments)}return Jn(n,[{key:"_matchFrom",get:function(){return this.maxLength-String(this.from).length}},{key:"_update",value:function(t){t=Object.assign({to:this.to||0,from:this.from||0},t);var e=String(t.to).length;null!=t.maxLength&&(e=Math.max(e,t.maxLength)),t.maxLength=e;for(var r=String(t.from).padStart(e,"0"),u=String(t.to).padStart(e,"0"),i=0;i<u.length&&u[i]===r[i];)++i;t.mask=u.slice(0,i).replace(/0/g,"\\0")+"0".repeat(e-i),ar(tr(n.prototype),"_update",this).call(this,t)}},{key:"isComplete",get:function(){return ar(tr(n.prototype),"isComplete",this)&&Boolean(this.value)}},{key:"boundaries",value:function(t){var e="",n="",r=lr(t.match(/^(\D*)(\d*)(\D*)/)||[],3),u=r[1],i=r[2];return i&&(e="0".repeat(u.length)+i,n="9".repeat(u.length)+i),[e=e.padEnd(this.maxLength,"0"),n=n.padEnd(this.maxLength,"9")]}},{key:"doPrepare",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(t=ar(tr(n.prototype),"doPrepare",this).call(this,t,e).replace(/\D/g,""),!this.autofix)return t;for(var r=String(this.from).padStart(this.maxLength,"0"),u=String(this.to).padStart(this.maxLength,"0"),i=this.value,a="",s=0;s<t.length;++s){var o=i+a+t[s],l=this.boundaries(o),h=lr(l,2),c=h[0],f=h[1];Number(f)<this.from?a+=r[o.length-1]:Number(c)>this.to?a+=u[o.length-1]:a+=t[s]}return a}},{key:"doValidate",value:function(){var t,e=this.value,r=e.search(/[^0]/);if(-1===r&&e.length<=this._matchFrom)return!0;for(var u=this.boundaries(e),i=lr(u,2),a=i[0],s=i[1],o=arguments.length,l=new Array(o),h=0;h<o;h++)l[h]=arguments[h];return this.from<=Number(s)&&Number(a)<=this.to&&(t=ar(tr(n.prototype),"doValidate",this)).call.apply(t,[this].concat(l))}}]),n}(Ir);Cr.MaskedRange=Vr;var Rr=function(t){Qn(n,t);var e=ur(n);function n(t){return qn(this,n),e.call(this,Object.assign({},n.DEFAULTS,t))}return Jn(n,[{key:"_update",value:function(t){t.mask===Date&&delete t.mask,t.pattern&&(t.mask=t.pattern);var e=t.blocks;t.blocks=Object.assign({},n.GET_DEFAULT_BLOCKS()),t.min&&(t.blocks.Y.from=t.min.getFullYear()),t.max&&(t.blocks.Y.to=t.max.getFullYear()),t.min&&t.max&&t.blocks.Y.from===t.blocks.Y.to&&(t.blocks.m.from=t.min.getMonth()+1,t.blocks.m.to=t.max.getMonth()+1,t.blocks.m.from===t.blocks.m.to&&(t.blocks.d.from=t.min.getDate(),t.blocks.d.to=t.max.getDate())),Object.assign(t.blocks,e),Object.keys(t.blocks).forEach((function(e){var n=t.blocks[e];"autofix"in n||(n.autofix=t.autofix)})),ar(tr(n.prototype),"_update",this).call(this,t)}},{key:"doValidate",value:function(){for(var t,e=this.date,r=arguments.length,u=new Array(r),i=0;i<r;i++)u[i]=arguments[i];return(t=ar(tr(n.prototype),"doValidate",this)).call.apply(t,[this].concat(u))&&(!this.isComplete||this.isDateExist(this.value)&&null!=e&&(null==this.min||this.min<=e)&&(null==this.max||e<=this.max))}},{key:"isDateExist",value:function(t){return this.format(this.parse(t,this),this).indexOf(t)>=0}},{key:"date",get:function(){return this.typedValue},set:function(t){this.typedValue=t}},{key:"typedValue",get:function(){return this.isComplete?ar(tr(n.prototype),"typedValue",this):null},set:function(t){or(tr(n.prototype),"typedValue",t,this,!0)}}]),n}(Ir);Rr.DEFAULTS={pattern:"d{.}`m{.}`Y",format:function(t){return[String(t.getDate()).padStart(2,"0"),String(t.getMonth()+1).padStart(2,"0"),t.getFullYear()].join(".")},parse:function(t){var e=lr(t.split("."),3),n=e[0],r=e[1],u=e[2];return new Date(u,r-1,n)}},Rr.GET_DEFAULT_BLOCKS=function(){return{d:{mask:Vr,from:1,to:31,maxLength:2},m:{mask:Vr,from:1,to:12,maxLength:2},Y:{mask:Vr,from:1900,to:9999}}},Cr.MaskedDate=Rr;var Lr=function(){function t(){qn(this,t)}return Jn(t,[{key:"selectionStart",get:function(){var t;try{t=this._unsafeSelectionStart}catch(t){}return null!=t?t:this.value.length}},{key:"selectionEnd",get:function(){var t;try{t=this._unsafeSelectionEnd}catch(t){}return null!=t?t:this.value.length}},{key:"select",value:function(t,e){if(null!=t&&null!=e&&(t!==this.selectionStart||e!==this.selectionEnd))try{this._unsafeSelect(t,e)}catch(t){}}},{key:"_unsafeSelect",value:function(t,e){}},{key:"isActive",get:function(){return!1}},{key:"bindEvents",value:function(t){}},{key:"unbindEvents",value:function(){}}]),t}();Cr.MaskElement=Lr;var Nr=function(t){Qn(n,t);var e=ur(n);function n(t){var r;return qn(this,n),(r=e.call(this)).input=t,r._handlers={},r}return Jn(n,[{key:"rootElement",get:function(){return this.input.getRootNode?this.input.getRootNode():document}},{key:"isActive",get:function(){return this.input===this.rootElement.activeElement}},{key:"_unsafeSelectionStart",get:function(){return this.input.selectionStart}},{key:"_unsafeSelectionEnd",get:function(){return this.input.selectionEnd}},{key:"_unsafeSelect",value:function(t,e){this.input.setSelectionRange(t,e)}},{key:"value",get:function(){return this.input.value},set:function(t){this.input.value=t}},{key:"bindEvents",value:function(t){var e=this;Object.keys(t).forEach((function(r){return e._toggleEventHandler(n.EVENTS_MAP[r],t[r])}))}},{key:"unbindEvents",value:function(){var t=this;Object.keys(this._handlers).forEach((function(e){return t._toggleEventHandler(e)}))}},{key:"_toggleEventHandler",value:function(t,e){this._handlers[t]&&(this.input.removeEventListener(t,this._handlers[t]),delete this._handlers[t]),e&&(this.input.addEventListener(t,e),this._handlers[t]=e)}}]),n}(Lr);Nr.EVENTS_MAP={selectionChange:"keydown",input:"input",drop:"drop",click:"click",focus:"focus",commit:"blur"},Cr.HTMLMaskElement=Nr;var Ur=function(t){Qn(n,t);var e=ur(n);function n(){return qn(this,n),e.apply(this,arguments)}return Jn(n,[{key:"_unsafeSelectionStart",get:function(){var t=this.rootElement,e=t.getSelection&&t.getSelection();return e&&e.anchorOffset}},{key:"_unsafeSelectionEnd",get:function(){var t=this.rootElement,e=t.getSelection&&t.getSelection();return e&&this._unsafeSelectionStart+String(e).length}},{key:"_unsafeSelect",value:function(t,e){if(this.rootElement.createRange){var n=this.rootElement.createRange();n.setStart(this.input.firstChild||this.input,t),n.setEnd(this.input.lastChild||this.input,e);var r=this.rootElement,u=r.getSelection&&r.getSelection();u&&(u.removeAllRanges(),u.addRange(n))}}},{key:"value",get:function(){return this.input.textContent},set:function(t){this.input.textContent=t}}]),n}(Nr);Cr.HTMLContenteditableMaskElement=Ur;var zr=["mask"],Hr=function(){function t(e,n){qn(this,t),this.el=e instanceof Lr?e:e.isContentEditable&&"INPUT"!==e.tagName&&"TEXTAREA"!==e.tagName?new Ur(e):new Nr(e),this.masked=Sr(n),this._listeners={},this._value="",this._unmaskedValue="",this._saveSelection=this._saveSelection.bind(this),this._onInput=this._onInput.bind(this),this._onChange=this._onChange.bind(this),this._onDrop=this._onDrop.bind(this),this._onFocus=this._onFocus.bind(this),this._onClick=this._onClick.bind(this),this.alignCursor=this.alignCursor.bind(this),this.alignCursorFriendly=this.alignCursorFriendly.bind(this),this._bindEvents(),this.updateValue(),this._onChange()}return Jn(t,[{key:"mask",get:function(){return this.masked.mask},set:function(t){if(!this.maskEquals(t))if(t instanceof Cr.Masked||this.masked.constructor!==Fr(t)){var e=Sr({mask:t});e.unmaskedValue=this.masked.unmaskedValue,this.masked=e}else this.masked.updateOptions({mask:t})}},{key:"maskEquals",value:function(t){return null==t||t===this.masked.mask||t===Date&&this.masked instanceof Rr}},{key:"value",get:function(){return this._value},set:function(t){this.masked.value=t,this.updateControl(),this.alignCursor()}},{key:"unmaskedValue",get:function(){return this._unmaskedValue},set:function(t){this.masked.unmaskedValue=t,this.updateControl(),this.alignCursor()}},{key:"typedValue",get:function(){return this.masked.typedValue},set:function(t){this.masked.typedValue=t,this.updateControl(),this.alignCursor()}},{key:"_bindEvents",value:function(){this.el.bindEvents({selectionChange:this._saveSelection,input:this._onInput,drop:this._onDrop,click:this._onClick,focus:this._onFocus,commit:this._onChange})}},{key:"_unbindEvents",value:function(){this.el&&this.el.unbindEvents()}},{key:"_fireEvent",value:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var u=this._listeners[t];u&&u.forEach((function(t){return t.apply(void 0,n)}))}},{key:"selectionStart",get:function(){return this._cursorChanging?this._changingCursorPos:this.el.selectionStart}},{key:"cursorPos",get:function(){return this._cursorChanging?this._changingCursorPos:this.el.selectionEnd},set:function(t){this.el&&this.el.isActive&&(this.el.select(t,t),this._saveSelection())}},{key:"_saveSelection",value:function(){this.value!==this.el.value&&console.warn("Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."),this._selection={start:this.selectionStart,end:this.cursorPos}}},{key:"updateValue",value:function(){this.masked.value=this.el.value,this._value=this.masked.value}},{key:"updateControl",value:function(){var t=this.masked.unmaskedValue,e=this.masked.value,n=this.unmaskedValue!==t||this.value!==e;this._unmaskedValue=t,this._value=e,this.el.value!==e&&(this.el.value=e),n&&this._fireChangeEvents()}},{key:"updateOptions",value:function(t){var e=t.mask,n=nr(t,zr),r=!this.maskEquals(e),u=!mr(this.masked,n);r&&(this.mask=e),u&&this.masked.updateOptions(n),(r||u)&&this.updateControl()}},{key:"updateCursor",value:function(t){null!=t&&(this.cursorPos=t,this._delayUpdateCursor(t))}},{key:"_delayUpdateCursor",value:function(t){var e=this;this._abortUpdateCursor(),this._changingCursorPos=t,this._cursorChanging=setTimeout((function(){e.el&&(e.cursorPos=e._changingCursorPos,e._abortUpdateCursor())}),10)}},{key:"_fireChangeEvents",value:function(){this._fireEvent("accept",this._inputEvent),this.masked.isComplete&&this._fireEvent("complete",this._inputEvent)}},{key:"_abortUpdateCursor",value:function(){this._cursorChanging&&(clearTimeout(this._cursorChanging),delete this._cursorChanging)}},{key:"alignCursor",value:function(){this.cursorPos=this.masked.nearestInputPos(this.cursorPos,pr)}},{key:"alignCursorFriendly",value:function(){this.selectionStart===this.cursorPos&&this.alignCursor()}},{key:"on",value:function(t,e){return this._listeners[t]||(this._listeners[t]=[]),this._listeners[t].push(e),this}},{key:"off",value:function(t,e){if(!this._listeners[t])return this;if(!e)return delete this._listeners[t],this;var n=this._listeners[t].indexOf(e);return n>=0&&this._listeners[t].splice(n,1),this}},{key:"_onInput",value:function(t){if(this._inputEvent=t,this._abortUpdateCursor(),!this._selection)return this.updateValue();var e=new _r(this.el.value,this.cursorPos,this.value,this._selection),n=this.masked.rawInputValue,r=this.masked.splice(e.startChangePos,e.removed.length,e.inserted,e.removeDirection).offset,u=n===this.masked.rawInputValue?e.removeDirection:fr,i=this.masked.nearestInputPos(e.startChangePos+r,u);this.updateControl(),this.updateCursor(i),delete this._inputEvent}},{key:"_onChange",value:function(){this.value!==this.el.value&&this.updateValue(),this.masked.doCommit(),this.updateControl(),this._saveSelection()}},{key:"_onDrop",value:function(t){t.preventDefault(),t.stopPropagation()}},{key:"_onFocus",value:function(t){this.alignCursorFriendly()}},{key:"_onClick",value:function(t){this.alignCursorFriendly()}},{key:"destroy",value:function(){this._unbindEvents(),this._listeners.length=0,delete this.el}}]),t}();Cr.InputMask=Hr;var Yr=function(t){Qn(n,t);var e=ur(n);function n(){return qn(this,n),e.apply(this,arguments)}return Jn(n,[{key:"_update",value:function(t){t.enum&&(t.mask="*".repeat(t.enum[0].length)),ar(tr(n.prototype),"_update",this).call(this,t)}},{key:"doValidate",value:function(){for(var t,e=this,r=arguments.length,u=new Array(r),i=0;i<r;i++)u[i]=arguments[i];return this.enum.some((function(t){return t.indexOf(e.unmaskedValue)>=0}))&&(t=ar(tr(n.prototype),"doValidate",this)).call.apply(t,[this].concat(u))}}]),n}(Ir);Cr.MaskedEnum=Yr;var Zr=function(t){Qn(n,t);var e=ur(n);function n(t){return qn(this,n),e.call(this,Object.assign({},n.DEFAULTS,t))}return Jn(n,[{key:"_update",value:function(t){ar(tr(n.prototype),"_update",this).call(this,t),this._updateRegExps()}},{key:"_updateRegExps",value:function(){var t="^"+(this.allowNegative?"[+|\\-]?":""),e=(this.scale?"("+yr(this.radix)+"\\d{0,"+this.scale+"})?":"")+"$";this._numberRegExpInput=new RegExp(t+"(0|([1-9]+\\d*))?"+e),this._numberRegExp=new RegExp(t+"\\d*"+e),this._mapToRadixRegExp=new RegExp("["+this.mapToRadix.map(yr).join("")+"]","g"),this._thousandsSeparatorRegExp=new RegExp(yr(this.thousandsSeparator),"g")}},{key:"_removeThousandsSeparators",value:function(t){return t.replace(this._thousandsSeparatorRegExp,"")}},{key:"_insertThousandsSeparators",value:function(t){var e=t.split(this.radix);return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,this.thousandsSeparator),e.join(this.radix)}},{key:"doPrepare",value:function(t){for(var e,r=arguments.length,u=new Array(r>1?r-1:0),i=1;i<r;i++)u[i-1]=arguments[i];return(e=ar(tr(n.prototype),"doPrepare",this)).call.apply(e,[this,this._removeThousandsSeparators(t.replace(this._mapToRadixRegExp,this.radix))].concat(u))}},{key:"_separatorsCount",value:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=0,r=0;r<t;++r)this._value.indexOf(this.thousandsSeparator,r)===r&&(++n,e&&(t+=this.thousandsSeparator.length));return n}},{key:"_separatorsCountFromSlice",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this._value;return this._separatorsCount(this._removeThousandsSeparators(t).length,!0)}},{key:"extractInput",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,r=arguments.length>2?arguments[2]:void 0,u=this._adjustRangeWithSeparators(t,e),i=lr(u,2);return t=i[0],e=i[1],this._removeThousandsSeparators(ar(tr(n.prototype),"extractInput",this).call(this,t,e,r))}},{key:"_appendCharRaw",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.thousandsSeparator)return ar(tr(n.prototype),"_appendCharRaw",this).call(this,t,e);var r=e.tail&&e._beforeTailState?e._beforeTailState._value:this._value,u=this._separatorsCountFromSlice(r);this._value=this._removeThousandsSeparators(this.value);var i=ar(tr(n.prototype),"_appendCharRaw",this).call(this,t,e);this._value=this._insertThousandsSeparators(this._value);var a=e.tail&&e._beforeTailState?e._beforeTailState._value:this._value,s=this._separatorsCountFromSlice(a);return i.tailShift+=(s-u)*this.thousandsSeparator.length,i.skip=!i.rawInserted&&t===this.thousandsSeparator,i}},{key:"_findSeparatorAround",value:function(t){if(this.thousandsSeparator){var e=t-this.thousandsSeparator.length+1,n=this.value.indexOf(this.thousandsSeparator,e);if(n<=t)return n}return-1}},{key:"_adjustRangeWithSeparators",value:function(t,e){var n=this._findSeparatorAround(t);n>=0&&(t=n);var r=this._findSeparatorAround(e);return r>=0&&(e=r+this.thousandsSeparator.length),[t,e]}},{key:"remove",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.value.length,n=this._adjustRangeWithSeparators(t,e),r=lr(n,2);t=r[0],e=r[1];var u=this.value.slice(0,t),i=this.value.slice(e),a=this._separatorsCount(u.length);this._value=this._insertThousandsSeparators(this._removeThousandsSeparators(u+i));var s=this._separatorsCountFromSlice(u);return new br({tailShift:(s-a)*this.thousandsSeparator.length})}},{key:"nearestInputPos",value:function(t,e){if(!this.thousandsSeparator)return t;switch(e){case fr:case pr:case dr:var n=this._findSeparatorAround(t-1);if(n>=0){var r=n+this.thousandsSeparator.length;if(t<r||this.value.length<=r||e===dr)return n}break;case vr:case gr:var u=this._findSeparatorAround(t);if(u>=0)return u+this.thousandsSeparator.length}return t}},{key:"doValidate",value:function(t){var e=(t.input?this._numberRegExpInput:this._numberRegExp).test(this._removeThousandsSeparators(this.value));if(e){var r=this.number;e=e&&!isNaN(r)&&(null==this.min||this.min>=0||this.min<=this.number)&&(null==this.max||this.max<=0||this.number<=this.max)}return e&&ar(tr(n.prototype),"doValidate",this).call(this,t)}},{key:"doCommit",value:function(){if(this.value){var t=this.number,e=t;null!=this.min&&(e=Math.max(e,this.min)),null!=this.max&&(e=Math.min(e,this.max)),e!==t&&(this.unmaskedValue=String(e));var r=this.value;this.normalizeZeros&&(r=this._normalizeZeros(r)),this.padFractionalZeros&&(r=this._padFractionalZeros(r)),this._value=r}ar(tr(n.prototype),"doCommit",this).call(this)}},{key:"_normalizeZeros",value:function(t){var e=this._removeThousandsSeparators(t).split(this.radix);return e[0]=e[0].replace(/^(\D*)(0*)(\d*)/,(function(t,e,n,r){return e+r})),t.length&&!/\d$/.test(e[0])&&(e[0]=e[0]+"0"),e.length>1&&(e[1]=e[1].replace(/0*$/,""),e[1].length||(e.length=1)),this._insertThousandsSeparators(e.join(this.radix))}},{key:"_padFractionalZeros",value:function(t){if(!t)return t;var e=t.split(this.radix);return e.length<2&&e.push(""),e[1]=e[1].padEnd(this.scale,"0"),e.join(this.radix)}},{key:"unmaskedValue",get:function(){return this._removeThousandsSeparators(this._normalizeZeros(this.value)).replace(this.radix,".")},set:function(t){or(tr(n.prototype),"unmaskedValue",t.replace(".",this.radix),this,!0)}},{key:"typedValue",get:function(){return Number(this.unmaskedValue)},set:function(t){or(tr(n.prototype),"unmaskedValue",String(t),this,!0)}},{key:"number",get:function(){return this.typedValue},set:function(t){this.typedValue=t}},{key:"allowNegative",get:function(){return this.signed||null!=this.min&&this.min<0||null!=this.max&&this.max<0}}]),n}(Er);Zr.DEFAULTS={radix:",",thousandsSeparator:"",mapToRadix:["."],scale:2,signed:!1,normalizeZeros:!0,padFractionalZeros:!1},Cr.MaskedNumber=Zr;var Kr=function(t){Qn(n,t);var e=ur(n);function n(){return qn(this,n),e.apply(this,arguments)}return Jn(n,[{key:"_update",value:function(t){t.mask&&(t.validate=t.mask),ar(tr(n.prototype),"_update",this).call(this,t)}}]),n}(Er);Cr.MaskedFunction=Kr;var Gr=["compiledMasks","currentMaskRef","currentMask"],Wr=function(t){Qn(n,t);var e=ur(n);function n(t){var r;return qn(this,n),(r=e.call(this,Object.assign({},n.DEFAULTS,t))).currentMask=null,r}return Jn(n,[{key:"_update",value:function(t){ar(tr(n.prototype),"_update",this).call(this,t),"mask"in t&&(this.compiledMasks=Array.isArray(t.mask)?t.mask.map((function(t){return Sr(t)})):[])}},{key:"_appendCharRaw",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this._applyDispatch(t,e);return this.currentMask&&n.aggregate(this.currentMask._appendChar(t,e)),n}},{key:"_applyDispatch",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.tail&&null!=e._beforeTailState?e._beforeTailState._value:this.value,r=this.rawInputValue,u=e.tail&&null!=e._beforeTailState?e._beforeTailState._rawInputValue:r,i=r.slice(u.length),a=this.currentMask,s=new br,o=a&&a.state;if(this.currentMask=this.doDispatch(t,Object.assign({},e)),this.currentMask)if(this.currentMask!==a){if(this.currentMask.reset(),u){var l=this.currentMask.append(u,{raw:!0});s.tailShift=l.inserted.length-n.length}i&&(s.tailShift+=this.currentMask.append(i,{raw:!0,tail:!0}).tailShift)}else this.currentMask.state=o;return s}},{key:"_appendPlaceholder",value:function(){var t=this._applyDispatch.apply(this,arguments);return this.currentMask&&t.aggregate(this.currentMask._appendPlaceholder()),t}},{key:"doDispatch",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.dispatch(t,this,e)}},{key:"doValidate",value:function(){for(var t,e,r=arguments.length,u=new Array(r),i=0;i<r;i++)u[i]=arguments[i];return(t=ar(tr(n.prototype),"doValidate",this)).call.apply(t,[this].concat(u))&&(!this.currentMask||(e=this.currentMask).doValidate.apply(e,u))}},{key:"reset",value:function(){this.currentMask&&this.currentMask.reset(),this.compiledMasks.forEach((function(t){return t.reset()}))}},{key:"value",get:function(){return this.currentMask?this.currentMask.value:""},set:function(t){or(tr(n.prototype),"value",t,this,!0)}},{key:"unmaskedValue",get:function(){return this.currentMask?this.currentMask.unmaskedValue:""},set:function(t){or(tr(n.prototype),"unmaskedValue",t,this,!0)}},{key:"typedValue",get:function(){return this.currentMask?this.currentMask.typedValue:""},set:function(t){var e=String(t);this.currentMask&&(this.currentMask.typedValue=t,e=this.currentMask.unmaskedValue),this.unmaskedValue=e}},{key:"isComplete",get:function(){return!!this.currentMask&&this.currentMask.isComplete}},{key:"remove",value:function(){var t,e=new br;this.currentMask&&e.aggregate((t=this.currentMask).remove.apply(t,arguments)).aggregate(this._applyDispatch());return e}},{key:"state",get:function(){return Object.assign({},ar(tr(n.prototype),"state",this),{_rawInputValue:this.rawInputValue,compiledMasks:this.compiledMasks.map((function(t){return t.state})),currentMaskRef:this.currentMask,currentMask:this.currentMask&&this.currentMask.state})},set:function(t){var e=t.compiledMasks,r=t.currentMaskRef,u=t.currentMask,i=nr(t,Gr);this.compiledMasks.forEach((function(t,n){return t.state=e[n]})),null!=r&&(this.currentMask=r,this.currentMask.state=u),or(tr(n.prototype),"state",i,this,!0)}},{key:"extractInput",value:function(){var t;return this.currentMask?(t=this.currentMask).extractInput.apply(t,arguments):""}},{key:"extractTail",value:function(){for(var t,e,r=arguments.length,u=new Array(r),i=0;i<r;i++)u[i]=arguments[i];return this.currentMask?(t=this.currentMask).extractTail.apply(t,u):(e=ar(tr(n.prototype),"extractTail",this)).call.apply(e,[this].concat(u))}},{key:"doCommit",value:function(){this.currentMask&&this.currentMask.doCommit(),ar(tr(n.prototype),"doCommit",this).call(this)}},{key:"nearestInputPos",value:function(){for(var t,e,r=arguments.length,u=new Array(r),i=0;i<r;i++)u[i]=arguments[i];return this.currentMask?(t=this.currentMask).nearestInputPos.apply(t,u):(e=ar(tr(n.prototype),"nearestInputPos",this)).call.apply(e,[this].concat(u))}},{key:"overwrite",get:function(){return this.currentMask?this.currentMask.overwrite:ar(tr(n.prototype),"overwrite",this)},set:function(t){console.warn('"overwrite" option is not available in dynamic mask, use this option in siblings')}}]),n}(Er);Wr.DEFAULTS={dispatch:function(t,e,n){if(e.compiledMasks.length){var r=e.rawInputValue,u=e.compiledMasks.map((function(e,u){return e.reset(),e.append(r,{raw:!0}),e.append(t,n),{weight:e.rawInputValue.length,index:u}}));return u.sort((function(t,e){return e.weight-t.weight})),e.compiledMasks[u[0].index]}}},Cr.MaskedDynamic=Wr;var $r={MASKED:"value",UNMASKED:"unmaskedValue",TYPED:"typedValue"};function qr(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:$r.MASKED,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:$r.MASKED,r=Sr(t);return function(t){return r.runIsolated((function(r){return r[e]=t,r[n]}))}}function Xr(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return qr.apply(void 0,n)(t)}Cr.PIPE_TYPE=$r,Cr.createPipe=qr,Cr.pipe=Xr;try{globalThis.IMask=Cr}catch(t){}t.HTMLContenteditableMaskElement=Ur,t.HTMLMaskElement=Nr,t.InputMask=Hr,t.MaskElement=Lr,t.Masked=Er,t.MaskedDate=Rr,t.MaskedDynamic=Wr,t.MaskedEnum=Yr,t.MaskedFunction=Kr,t.MaskedNumber=Zr,t.MaskedPattern=Ir,t.MaskedRange=Vr,t.MaskedRegExp=Or,t.PIPE_TYPE=$r,t.createMask=Sr,t.createPipe=qr,t.default=Cr,t.pipe=Xr,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=imask.min.js.map
;
//
// SmoothScroll for websites v1.4.10 (Balazs Galambosi)
// http://www.smoothscroll.net/
//
// Licensed under the terms of the MIT license.
//
// You may use it in your theme if you credit me. 
// It is also free to use on any individual website.
//
// Exception:
// The only restriction is to not publish any  
// extension for browsers or native application
// without getting a written permission first.
//

(function () {
  
// Scroll Variables (tweakable)
var defaultOptions = {

    // Scrolling Core
    frameRate        : 150, // [Hz]
    animationTime    : 400, // [ms]
    stepSize         : 100, // [px]

    // Pulse (less tweakable)
    // ratio of "tail" to "acceleration"
    pulseAlgorithm   : true,
    pulseScale       : 4,
    pulseNormalize   : 1,

    // Acceleration
    accelerationDelta : 50,  // 50
    accelerationMax   : 3,   // 3

    // Keyboard Settings
    keyboardSupport   : true,  // option
    arrowScroll       : 50,    // [px]

    // Other
    fixedBackground   : true, 
    excluded          : ''    
};

var options = defaultOptions;


// Other Variables
var isExcluded = false;
var isFrame = false;
var direction = { x: 0, y: 0 };
var initDone  = false;
var root = document.documentElement;
var activeElement;
var observer;
var refreshSize;
var deltaBuffer = [];
var deltaBufferTimer;
var isMac = /^Mac/.test(navigator.platform);

var key = { left: 37, up: 38, right: 39, down: 40, spacebar: 32, 
            pageup: 33, pagedown: 34, end: 35, home: 36 };
var arrowKeys = { 37: 1, 38: 1, 39: 1, 40: 1 };

/***********************************************
 * INITIALIZE
 ***********************************************/

/**
 * Tests if smooth scrolling is allowed. Shuts down everything if not.
 */
function initTest() {
    if (options.keyboardSupport) {
        addEvent('keydown', keydown);
    }
}

/**
 * Sets up scrolls array, determines if frames are involved.
 */
function init() {
  
    if (initDone || !document.body) return;

    initDone = true;

    var body = document.body;
    var html = document.documentElement;
    var windowHeight = window.innerHeight; 
    var scrollHeight = body.scrollHeight;
    
    // check compat mode for root element
    root = (document.compatMode.indexOf('CSS') >= 0) ? html : body;
    activeElement = body;
    
    initTest();

    // Checks if this script is running in a frame
    if (top != self) {
        isFrame = true;
    }

    /**
     * Safari 10 fixed it, Chrome fixed it in v45:
     * This fixes a bug where the areas left and right to 
     * the content does not trigger the onmousewheel event
     * on some pages. e.g.: html, body { height: 100% }
     */
    else if (isOldSafari &&
             scrollHeight > windowHeight &&
            (body.offsetHeight <= windowHeight || 
             html.offsetHeight <= windowHeight)) {

        var fullPageElem = document.createElement('div');
        fullPageElem.style.cssText = 'position:absolute; z-index:-10000; ' +
                                     'top:0; left:0; right:0; height:' + 
                                      root.scrollHeight + 'px';
        document.body.appendChild(fullPageElem);
        
        // DOM changed (throttled) to fix height
        var pendingRefresh;
        refreshSize = function () {
            if (pendingRefresh) return; // could also be: clearTimeout(pendingRefresh);
            pendingRefresh = setTimeout(function () {
                if (isExcluded) return; // could be running after cleanup
                fullPageElem.style.height = '0';
                fullPageElem.style.height = root.scrollHeight + 'px';
                pendingRefresh = null;
            }, 500); // act rarely to stay fast
        };
  
        setTimeout(refreshSize, 10);

        addEvent('resize', refreshSize);

        // TODO: attributeFilter?
        var config = {
            attributes: true, 
            childList: true, 
            characterData: false 
            // subtree: true
        };

        observer = new MutationObserver(refreshSize);
        observer.observe(body, config);

        if (root.offsetHeight <= windowHeight) {
            var clearfix = document.createElement('div');   
            clearfix.style.clear = 'both';
            body.appendChild(clearfix);
        }
    }

    // disable fixed background
    if (!options.fixedBackground && !isExcluded) {
        body.style.backgroundAttachment = 'scroll';
        html.style.backgroundAttachment = 'scroll';
    }
}

/**
 * Removes event listeners and other traces left on the page.
 */
function cleanup() {
    observer && observer.disconnect();
    removeEvent(wheelEvent, wheel);
    removeEvent('mousedown', mousedown);
    removeEvent('keydown', keydown);
    removeEvent('resize', refreshSize);
    removeEvent('load', init);
}


/************************************************
 * SCROLLING 
 ************************************************/
 
var que = [];
var pending = false;
var lastScroll = Date.now();

/**
 * Pushes scroll actions to the scrolling queue.
 */
function scrollArray(elem, left, top) {
    
    directionCheck(left, top);

    if (options.accelerationMax != 1) {
        var now = Date.now();
        var elapsed = now - lastScroll;
        if (elapsed < options.accelerationDelta) {
            var factor = (1 + (50 / elapsed)) / 2;
            if (factor > 1) {
                factor = Math.min(factor, options.accelerationMax);
                left *= factor;
                top  *= factor;
            }
        }
        lastScroll = Date.now();
    }          
    
    // push a scroll command
    que.push({
        x: left, 
        y: top, 
        lastX: (left < 0) ? 0.99 : -0.99,
        lastY: (top  < 0) ? 0.99 : -0.99, 
        start: Date.now()
    });
        
    // don't act if there's a pending queue
    if (pending) {
        return;
    }  

    var scrollRoot = getScrollRoot();
    var isWindowScroll = (elem === scrollRoot || elem === document.body);
    
    // if we haven't already fixed the behavior, 
    // and it needs fixing for this sesh
    if (elem.$scrollBehavior == null && isScrollBehaviorSmooth(elem)) {
        elem.$scrollBehavior = elem.style.scrollBehavior;
        elem.style.scrollBehavior = 'auto';
    }

    var step = function (time) {
        
        var now = Date.now();
        var scrollX = 0;
        var scrollY = 0; 
    
        for (var i = 0; i < que.length; i++) {
            
            var item = que[i];
            var elapsed  = now - item.start;
            var finished = (elapsed >= options.animationTime);
            
            // scroll position: [0, 1]
            var position = (finished) ? 1 : elapsed / options.animationTime;
            
            // easing [optional]
            if (options.pulseAlgorithm) {
                position = pulse(position);
            }
            
            // only need the difference
            var x = (item.x * position - item.lastX) >> 0;
            var y = (item.y * position - item.lastY) >> 0;
            
            // add this to the total scrolling
            scrollX += x;
            scrollY += y;            
            
            // update last values
            item.lastX += x;
            item.lastY += y;
        
            // delete and step back if it's over
            if (finished) {
                que.splice(i, 1); i--;
            }           
        }

        // scroll left and top
        if (isWindowScroll) {
            window.scrollBy(scrollX, scrollY);
        } 
        else {
            if (scrollX) elem.scrollLeft += scrollX;
            if (scrollY) elem.scrollTop  += scrollY;                    
        }
        
        // clean up if there's nothing left to do
        if (!left && !top) {
            que = [];
        }
        
        if (que.length) { 
            requestFrame(step, elem, (1000 / options.frameRate + 1)); 
        } else { 
            pending = false;
            // restore default behavior at the end of scrolling sesh
            if (elem.$scrollBehavior != null) {
                elem.style.scrollBehavior = elem.$scrollBehavior;
                elem.$scrollBehavior = null;
            }
        }
    };
    
    // start a new queue of actions
    requestFrame(step, elem, 0);
    pending = true;
}


/***********************************************
 * EVENTS
 ***********************************************/

/**
 * Mouse wheel handler.
 * @param {Object} event
 */
function wheel(event) {

    if (!initDone) {
        init();
    }
    
    var target = event.target;

    // leave early if default action is prevented   
    // or it's a zooming event with CTRL 
    if (event.defaultPrevented || event.ctrlKey) {
        return true;
    }
    
    // leave embedded content alone (flash & pdf)
    if (isNodeName(activeElement, 'embed') || 
       (isNodeName(target, 'embed') && /\.pdf/i.test(target.src)) ||
        isNodeName(activeElement, 'object') ||
        target.shadowRoot) {
        return true;
    }

    var deltaX = -event.wheelDeltaX || event.deltaX || 0;
    var deltaY = -event.wheelDeltaY || event.deltaY || 0;
    
    if (isMac) {
        if (event.wheelDeltaX && isDivisible(event.wheelDeltaX, 120)) {
            deltaX = -120 * (event.wheelDeltaX / Math.abs(event.wheelDeltaX));
        }
        if (event.wheelDeltaY && isDivisible(event.wheelDeltaY, 120)) {
            deltaY = -120 * (event.wheelDeltaY / Math.abs(event.wheelDeltaY));
        }
    }
    
    // use wheelDelta if deltaX/Y is not available
    if (!deltaX && !deltaY) {
        deltaY = -event.wheelDelta || 0;
    }

    // line based scrolling (Firefox mostly)
    if (event.deltaMode === 1) {
        deltaX *= 40;
        deltaY *= 40;
    }

    var overflowing = overflowingAncestor(target);

    // nothing to do if there's no element that's scrollable
    if (!overflowing) {
        // except Chrome iframes seem to eat wheel events, which we need to 
        // propagate up, if the iframe has nothing overflowing to scroll
        if (isFrame && isChrome)  {
            // change target to iframe element itself for the parent frame
            Object.defineProperty(event, "target", {value: window.frameElement});
            return parent.wheel(event);
        }
        return true;
    }
    
    // check if it's a touchpad scroll that should be ignored
    if (isTouchpad(deltaY)) {
        return true;
    }

    // scale by step size
    // delta is 120 most of the time
    // synaptics seems to send 1 sometimes
    if (Math.abs(deltaX) > 1.2) {
        deltaX *= options.stepSize / 120;
    }
    if (Math.abs(deltaY) > 1.2) {
        deltaY *= options.stepSize / 120;
    }
    
    scrollArray(overflowing, deltaX, deltaY);
    event.preventDefault();
    scheduleClearCache();
}

/**
 * Keydown event handler.
 * @param {Object} event
 */
function keydown(event) {

    var target   = event.target;
    var modifier = event.ctrlKey || event.altKey || event.metaKey || 
                  (event.shiftKey && event.keyCode !== key.spacebar);
    
    // our own tracked active element could've been removed from the DOM
    if (!document.body.contains(activeElement)) {
        activeElement = document.activeElement;
    }

    // do nothing if user is editing text
    // or using a modifier key (except shift)
    // or in a dropdown
    // or inside interactive elements
    var inputNodeNames = /^(textarea|select|embed|object)$/i;
    var buttonTypes = /^(button|submit|radio|checkbox|file|color|image)$/i;
    if ( event.defaultPrevented ||
         inputNodeNames.test(target.nodeName) ||
         isNodeName(target, 'input') && !buttonTypes.test(target.type) ||
         isNodeName(activeElement, 'video') ||
         isInsideYoutubeVideo(event) ||
         target.isContentEditable || 
         modifier ) {
      return true;
    }

    // [spacebar] should trigger button press, leave it alone
    if ((isNodeName(target, 'button') ||
         isNodeName(target, 'input') && buttonTypes.test(target.type)) &&
        event.keyCode === key.spacebar) {
      return true;
    }

    // [arrwow keys] on radio buttons should be left alone
    if (isNodeName(target, 'input') && target.type == 'radio' &&
        arrowKeys[event.keyCode])  {
      return true;
    }
    
    var shift, x = 0, y = 0;
    var overflowing = overflowingAncestor(activeElement);

    if (!overflowing) {
        // Chrome iframes seem to eat key events, which we need to 
        // propagate up, if the iframe has nothing overflowing to scroll
        return (isFrame && isChrome) ? parent.keydown(event) : true;
    }

    var clientHeight = overflowing.clientHeight; 

    if (overflowing == document.body) {
        clientHeight = window.innerHeight;
    }

    switch (event.keyCode) {
        case key.up:
            y = -options.arrowScroll;
            break;
        case key.down:
            y = options.arrowScroll;
            break;         
        case key.spacebar: // (+ shift)
            shift = event.shiftKey ? 1 : -1;
            y = -shift * clientHeight * 0.9;
            break;
        case key.pageup:
            y = -clientHeight * 0.9;
            break;
        case key.pagedown:
            y = clientHeight * 0.9;
            break;
        case key.home:
            if (overflowing == document.body && document.scrollingElement)
                overflowing = document.scrollingElement;
            y = -overflowing.scrollTop;
            break;
        case key.end:
            var scroll = overflowing.scrollHeight - overflowing.scrollTop;
            var scrollRemaining = scroll - clientHeight;
            y = (scrollRemaining > 0) ? scrollRemaining + 10 : 0;
            break;
        case key.left:
            x = -options.arrowScroll;
            break;
        case key.right:
            x = options.arrowScroll;
            break;            
        default:
            return true; // a key we don't care about
    }

    scrollArray(overflowing, x, y);
    event.preventDefault();
    scheduleClearCache();
}

/**
 * Mousedown event only for updating activeElement
 */
function mousedown(event) {
    activeElement = event.target;
}


/***********************************************
 * OVERFLOW
 ***********************************************/

var uniqueID = (function () {
    var i = 0;
    return function (el) {
        return el.uniqueID || (el.uniqueID = i++);
    };
})();

var cacheX = {}; // cleared out after a scrolling session
var cacheY = {}; // cleared out after a scrolling session
var clearCacheTimer;
var smoothBehaviorForElement = {};

//setInterval(function () { cache = {}; }, 10 * 1000);

function scheduleClearCache() {
    clearTimeout(clearCacheTimer);
    clearCacheTimer = setInterval(function () { 
        cacheX = cacheY = smoothBehaviorForElement = {}; 
    }, 1*1000);
}

function setCache(elems, overflowing, x) {
    var cache = x ? cacheX : cacheY;
    for (var i = elems.length; i--;)
        cache[uniqueID(elems[i])] = overflowing;
    return overflowing;
}

function getCache(el, x) {
    return (x ? cacheX : cacheY)[uniqueID(el)];
}

//  (body)                (root)
//         | hidden | visible | scroll |  auto  |
// hidden  |   no   |    no   |   YES  |   YES  |
// visible |   no   |   YES   |   YES  |   YES  |
// scroll  |   no   |   YES   |   YES  |   YES  |
// auto    |   no   |   YES   |   YES  |   YES  |

function overflowingAncestor(el) {
    var elems = [];
    var body = document.body;
    var rootScrollHeight = root.scrollHeight;
    do {
        var cached = getCache(el, false);
        if (cached) {
            return setCache(elems, cached);
        }
        elems.push(el);
        if (rootScrollHeight === el.scrollHeight) {
            var topOverflowsNotHidden = overflowNotHidden(root) && overflowNotHidden(body);
            var isOverflowCSS = topOverflowsNotHidden || overflowAutoOrScroll(root);
            if (isFrame && isContentOverflowing(root) || 
               !isFrame && isOverflowCSS) {
                return setCache(elems, getScrollRoot()); 
            }
        } else if (isContentOverflowing(el) && overflowAutoOrScroll(el)) {
            return setCache(elems, el);
        }
    } while ((el = el.parentElement));
}

function isContentOverflowing(el) {
    return (el.clientHeight + 10 < el.scrollHeight);
}

// typically for <body> and <html>
function overflowNotHidden(el) {
    var overflow = getComputedStyle(el, '').getPropertyValue('overflow-y');
    return (overflow !== 'hidden');
}

// for all other elements
function overflowAutoOrScroll(el) {
    var overflow = getComputedStyle(el, '').getPropertyValue('overflow-y');
    return (overflow === 'scroll' || overflow === 'auto');
}

// for all other elements
function isScrollBehaviorSmooth(el) {
    var id = uniqueID(el);
    if (smoothBehaviorForElement[id] == null) {
        var scrollBehavior = getComputedStyle(el, '')['scroll-behavior'];
        smoothBehaviorForElement[id] = ('smooth' == scrollBehavior);
    }
    return smoothBehaviorForElement[id];
}


/***********************************************
 * HELPERS
 ***********************************************/

function addEvent(type, fn, arg) {
    window.addEventListener(type, fn, arg || false);
}

function removeEvent(type, fn, arg) {
    window.removeEventListener(type, fn, arg || false);  
}

function isNodeName(el, tag) {
    return el && (el.nodeName||'').toLowerCase() === tag.toLowerCase();
}

function directionCheck(x, y) {
    x = (x > 0) ? 1 : -1;
    y = (y > 0) ? 1 : -1;
    if (direction.x !== x || direction.y !== y) {
        direction.x = x;
        direction.y = y;
        que = [];
        lastScroll = 0;
    }
}

if (window.localStorage && localStorage.SS_deltaBuffer) {
    try { // #46 Safari throws in private browsing for localStorage 
        deltaBuffer = localStorage.SS_deltaBuffer.split(',');
    } catch (e) { } 
}

function isTouchpad(deltaY) {
    if (!deltaY) return;
    if (!deltaBuffer.length) {
        deltaBuffer = [deltaY, deltaY, deltaY];
    }
    deltaY = Math.abs(deltaY);
    deltaBuffer.push(deltaY);
    deltaBuffer.shift();
    clearTimeout(deltaBufferTimer);
    deltaBufferTimer = setTimeout(function () {
        try { // #46 Safari throws in private browsing for localStorage
            localStorage.SS_deltaBuffer = deltaBuffer.join(',');
        } catch (e) { }  
    }, 1000);
    var dpiScaledWheelDelta = deltaY > 120 && allDeltasDivisableBy(deltaY); // win64 
    var tp = !allDeltasDivisableBy(120) && !allDeltasDivisableBy(100) && !dpiScaledWheelDelta;
    if (deltaY < 50) return true;
    return tp;
} 

function isDivisible(n, divisor) {
    return (Math.floor(n / divisor) == n / divisor);
}

function allDeltasDivisableBy(divisor) {
    return (isDivisible(deltaBuffer[0], divisor) &&
            isDivisible(deltaBuffer[1], divisor) &&
            isDivisible(deltaBuffer[2], divisor));
}

function isInsideYoutubeVideo(event) {
    var elem = event.target;
    var isControl = false;
    if (document.URL.indexOf ('www.youtube.com/watch') != -1) {
        do {
            isControl = (elem.classList && 
                         elem.classList.contains('html5-video-controls'));
            if (isControl) break;
        } while ((elem = elem.parentNode));
    }
    return isControl;
}

var requestFrame = (function () {
      return (window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    ||
              function (callback, element, delay) {
                 window.setTimeout(callback, delay || (1000/60));
             });
})();

var MutationObserver = (window.MutationObserver || 
                        window.WebKitMutationObserver ||
                        window.MozMutationObserver);  

var getScrollRoot = (function() {
  var SCROLL_ROOT = document.scrollingElement;
  return function() {
    if (!SCROLL_ROOT) {
      var dummy = document.createElement('div');
      dummy.style.cssText = 'height:10000px;width:1px;';
      document.body.appendChild(dummy);
      var bodyScrollTop  = document.body.scrollTop;
      var docElScrollTop = document.documentElement.scrollTop;
      window.scrollBy(0, 3);
      if (document.body.scrollTop != bodyScrollTop)
        (SCROLL_ROOT = document.body);
      else 
        (SCROLL_ROOT = document.documentElement);
      window.scrollBy(0, -3);
      document.body.removeChild(dummy);
    }
    return SCROLL_ROOT;
  };
})();


/***********************************************
 * PULSE (by Michael Herf)
 ***********************************************/
 
/**
 * Viscous fluid with a pulse for part and decay for the rest.
 * - Applies a fixed force over an interval (a damped acceleration), and
 * - Lets the exponential bleed away the velocity over a longer interval
 * - Michael Herf, http://stereopsis.com/stopping/
 */
function pulse_(x) {
    var val, start, expx;
    // test
    x = x * options.pulseScale;
    if (x < 1) { // acceleartion
        val = x - (1 - Math.exp(-x));
    } else {     // tail
        // the previous animation ended here:
        start = Math.exp(-1);
        // simple viscous drag
        x -= 1;
        expx = 1 - Math.exp(-x);
        val = start + (expx * (1 - start));
    }
    return val * options.pulseNormalize;
}

function pulse(x) {
    if (x >= 1) return 1;
    if (x <= 0) return 0;

    if (options.pulseNormalize == 1) {
        options.pulseNormalize /= pulse_(1);
    }
    return pulse_(x);
}


/***********************************************
 * FIRST RUN
 ***********************************************/

var userAgent = window.navigator.userAgent;
var isEdge    = /Edge/.test(userAgent); // thank you MS
var isChrome  = /chrome/i.test(userAgent) && !isEdge; 
var isSafari  = /safari/i.test(userAgent) && !isEdge; 
var isMobile  = /mobile/i.test(userAgent);
var isIEWin7  = /Windows NT 6.1/i.test(userAgent) && /rv:11/i.test(userAgent);
var isOldSafari = isSafari && (/Version\/8/i.test(userAgent) || /Version\/9/i.test(userAgent));
var isEnabledForBrowser = (isChrome || isSafari || isIEWin7) && !isMobile;

var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () {
            supportsPassive = true;
        } 
    }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel'; 

if (wheelEvent && isEnabledForBrowser) {
    addEvent(wheelEvent, wheel, wheelOpt);
    addEvent('mousedown', mousedown);
    addEvent('load', init);
}


/***********************************************
 * PUBLIC INTERFACE
 ***********************************************/

function SmoothScroll(optionsToSet) {
    for (var key in optionsToSet)
        if (defaultOptions.hasOwnProperty(key)) 
            options[key] = optionsToSet[key];
}
SmoothScroll.destroy = cleanup;

if (window.SmoothScrollOptions) // async API
    SmoothScroll(window.SmoothScrollOptions);

if (typeof define === 'function' && define.amd)
    define(function() {
        return SmoothScroll;
    });
else if ('object' == typeof exports)
    module.exports = SmoothScroll;
else
    window.SmoothScroll = SmoothScroll;

})();
;
/*! lazysizes - v5.3.2 */

!function(e){var t=function(u,D,f){"use strict";var k,H;if(function(){var e;var t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:true,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:true,ricTimeout:0,throttleDelay:125};H=u.lazySizesConfig||u.lazysizesConfig||{};for(e in t){if(!(e in H)){H[e]=t[e]}}}(),!D||!D.getElementsByClassName){return{init:function(){},cfg:H,noSupport:true}}var O=D.documentElement,i=u.HTMLPictureElement,P="addEventListener",$="getAttribute",q=u[P].bind(u),I=u.setTimeout,U=u.requestAnimationFrame||I,o=u.requestIdleCallback,j=/^picture$/i,r=["load","error","lazyincluded","_lazyloaded"],a={},G=Array.prototype.forEach,J=function(e,t){if(!a[t]){a[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")}return a[t].test(e[$]("class")||"")&&a[t]},K=function(e,t){if(!J(e,t)){e.setAttribute("class",(e[$]("class")||"").trim()+" "+t)}},Q=function(e,t){var a;if(a=J(e,t)){e.setAttribute("class",(e[$]("class")||"").replace(a," "))}},V=function(t,a,e){var i=e?P:"removeEventListener";if(e){V(t,a)}r.forEach(function(e){t[i](e,a)})},X=function(e,t,a,i,r){var n=D.createEvent("Event");if(!a){a={}}a.instance=k;n.initEvent(t,!i,!r);n.detail=a;e.dispatchEvent(n);return n},Y=function(e,t){var a;if(!i&&(a=u.picturefill||H.pf)){if(t&&t.src&&!e[$]("srcset")){e.setAttribute("srcset",t.src)}a({reevaluate:true,elements:[e]})}else if(t&&t.src){e.src=t.src}},Z=function(e,t){return(getComputedStyle(e,null)||{})[t]},s=function(e,t,a){a=a||e.offsetWidth;while(a<H.minSize&&t&&!e._lazysizesWidth){a=t.offsetWidth;t=t.parentNode}return a},ee=function(){var a,i;var t=[];var r=[];var n=t;var s=function(){var e=n;n=t.length?r:t;a=true;i=false;while(e.length){e.shift()()}a=false};var e=function(e,t){if(a&&!t){e.apply(this,arguments)}else{n.push(e);if(!i){i=true;(D.hidden?I:U)(s)}}};e._lsFlush=s;return e}(),te=function(a,e){return e?function(){ee(a)}:function(){var e=this;var t=arguments;ee(function(){a.apply(e,t)})}},ae=function(e){var a;var i=0;var r=H.throttleDelay;var n=H.ricTimeout;var t=function(){a=false;i=f.now();e()};var s=o&&n>49?function(){o(t,{timeout:n});if(n!==H.ricTimeout){n=H.ricTimeout}}:te(function(){I(t)},true);return function(e){var t;if(e=e===true){n=33}if(a){return}a=true;t=r-(f.now()-i);if(t<0){t=0}if(e||t<9){s()}else{I(s,t)}}},ie=function(e){var t,a;var i=99;var r=function(){t=null;e()};var n=function(){var e=f.now()-a;if(e<i){I(n,i-e)}else{(o||r)(r)}};return function(){a=f.now();if(!t){t=I(n,i)}}},e=function(){var v,m,c,h,e;var y,z,g,p,C,b,A;var n=/^img$/i;var d=/^iframe$/i;var E="onscroll"in u&&!/(gle|ing)bot/.test(navigator.userAgent);var _=0;var w=0;var M=0;var N=-1;var L=function(e){M--;if(!e||M<0||!e.target){M=0}};var x=function(e){if(A==null){A=Z(D.body,"visibility")=="hidden"}return A||!(Z(e.parentNode,"visibility")=="hidden"&&Z(e,"visibility")=="hidden")};var W=function(e,t){var a;var i=e;var r=x(e);g-=t;b+=t;p-=t;C+=t;while(r&&(i=i.offsetParent)&&i!=D.body&&i!=O){r=(Z(i,"opacity")||1)>0;if(r&&Z(i,"overflow")!="visible"){a=i.getBoundingClientRect();r=C>a.left&&p<a.right&&b>a.top-1&&g<a.bottom+1}}return r};var t=function(){var e,t,a,i,r,n,s,o,l,u,f,c;var d=k.elements;if((h=H.loadMode)&&M<8&&(e=d.length)){t=0;N++;for(;t<e;t++){if(!d[t]||d[t]._lazyRace){continue}if(!E||k.prematureUnveil&&k.prematureUnveil(d[t])){R(d[t]);continue}if(!(o=d[t][$]("data-expand"))||!(n=o*1)){n=w}if(!u){u=!H.expand||H.expand<1?O.clientHeight>500&&O.clientWidth>500?500:370:H.expand;k._defEx=u;f=u*H.expFactor;c=H.hFac;A=null;if(w<f&&M<1&&N>2&&h>2&&!D.hidden){w=f;N=0}else if(h>1&&N>1&&M<6){w=u}else{w=_}}if(l!==n){y=innerWidth+n*c;z=innerHeight+n;s=n*-1;l=n}a=d[t].getBoundingClientRect();if((b=a.bottom)>=s&&(g=a.top)<=z&&(C=a.right)>=s*c&&(p=a.left)<=y&&(b||C||p||g)&&(H.loadHidden||x(d[t]))&&(m&&M<3&&!o&&(h<3||N<4)||W(d[t],n))){R(d[t]);r=true;if(M>9){break}}else if(!r&&m&&!i&&M<4&&N<4&&h>2&&(v[0]||H.preloadAfterLoad)&&(v[0]||!o&&(b||C||p||g||d[t][$](H.sizesAttr)!="auto"))){i=v[0]||d[t]}}if(i&&!r){R(i)}}};var a=ae(t);var S=function(e){var t=e.target;if(t._lazyCache){delete t._lazyCache;return}L(e);K(t,H.loadedClass);Q(t,H.loadingClass);V(t,B);X(t,"lazyloaded")};var i=te(S);var B=function(e){i({target:e.target})};var T=function(e,t){var a=e.getAttribute("data-load-mode")||H.iframeLoadMode;if(a==0){e.contentWindow.location.replace(t)}else if(a==1){e.src=t}};var F=function(e){var t;var a=e[$](H.srcsetAttr);if(t=H.customMedia[e[$]("data-media")||e[$]("media")]){e.setAttribute("media",t)}if(a){e.setAttribute("srcset",a)}};var s=te(function(t,e,a,i,r){var n,s,o,l,u,f;if(!(u=X(t,"lazybeforeunveil",e)).defaultPrevented){if(i){if(a){K(t,H.autosizesClass)}else{t.setAttribute("sizes",i)}}s=t[$](H.srcsetAttr);n=t[$](H.srcAttr);if(r){o=t.parentNode;l=o&&j.test(o.nodeName||"")}f=e.firesLoad||"src"in t&&(s||n||l);u={target:t};K(t,H.loadingClass);if(f){clearTimeout(c);c=I(L,2500);V(t,B,true)}if(l){G.call(o.getElementsByTagName("source"),F)}if(s){t.setAttribute("srcset",s)}else if(n&&!l){if(d.test(t.nodeName)){T(t,n)}else{t.src=n}}if(r&&(s||l)){Y(t,{src:n})}}if(t._lazyRace){delete t._lazyRace}Q(t,H.lazyClass);ee(function(){var e=t.complete&&t.naturalWidth>1;if(!f||e){if(e){K(t,H.fastLoadedClass)}S(u);t._lazyCache=true;I(function(){if("_lazyCache"in t){delete t._lazyCache}},9)}if(t.loading=="lazy"){M--}},true)});var R=function(e){if(e._lazyRace){return}var t;var a=n.test(e.nodeName);var i=a&&(e[$](H.sizesAttr)||e[$]("sizes"));var r=i=="auto";if((r||!m)&&a&&(e[$]("src")||e.srcset)&&!e.complete&&!J(e,H.errorClass)&&J(e,H.lazyClass)){return}t=X(e,"lazyunveilread").detail;if(r){re.updateElem(e,true,e.offsetWidth)}e._lazyRace=true;M++;s(e,t,r,i,a)};var r=ie(function(){H.loadMode=3;a()});var o=function(){if(H.loadMode==3){H.loadMode=2}r()};var l=function(){if(m){return}if(f.now()-e<999){I(l,999);return}m=true;H.loadMode=3;a();q("scroll",o,true)};return{_:function(){e=f.now();k.elements=D.getElementsByClassName(H.lazyClass);v=D.getElementsByClassName(H.lazyClass+" "+H.preloadClass);q("scroll",a,true);q("resize",a,true);q("pageshow",function(e){if(e.persisted){var t=D.querySelectorAll("."+H.loadingClass);if(t.length&&t.forEach){U(function(){t.forEach(function(e){if(e.complete){R(e)}})})}}});if(u.MutationObserver){new MutationObserver(a).observe(O,{childList:true,subtree:true,attributes:true})}else{O[P]("DOMNodeInserted",a,true);O[P]("DOMAttrModified",a,true);setInterval(a,999)}q("hashchange",a,true);["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){D[P](e,a,true)});if(/d$|^c/.test(D.readyState)){l()}else{q("load",l);D[P]("DOMContentLoaded",a);I(l,2e4)}if(k.elements.length){t();ee._lsFlush()}else{a()}},checkElems:a,unveil:R,_aLSL:o}}(),re=function(){var a;var n=te(function(e,t,a,i){var r,n,s;e._lazysizesWidth=i;i+="px";e.setAttribute("sizes",i);if(j.test(t.nodeName||"")){r=t.getElementsByTagName("source");for(n=0,s=r.length;n<s;n++){r[n].setAttribute("sizes",i)}}if(!a.detail.dataAttr){Y(e,a.detail)}});var i=function(e,t,a){var i;var r=e.parentNode;if(r){a=s(e,r,a);i=X(e,"lazybeforesizes",{width:a,dataAttr:!!t});if(!i.defaultPrevented){a=i.detail.width;if(a&&a!==e._lazysizesWidth){n(e,r,i,a)}}}};var e=function(){var e;var t=a.length;if(t){e=0;for(;e<t;e++){i(a[e])}}};var t=ie(e);return{_:function(){a=D.getElementsByClassName(H.autosizesClass);q("resize",t)},checkElems:t,updateElem:i}}(),t=function(){if(!t.i&&D.getElementsByClassName){t.i=true;re._();e._()}};return I(function(){H.init&&t()}),k={cfg:H,autoSizer:re,loader:e,init:t,uP:Y,aC:K,rC:Q,hC:J,fire:X,gW:s,rAF:ee}}(e,e.document,Date);e.lazySizes=t,"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:{});;
/*! lazysizes - v5.3.2 */

!function(t,e){var i;t&&(i=function(){e(t.lazySizes),t.removeEventListener("lazyunveilread",i,!0)},e=e.bind(null,t,t.document),"object"==typeof module&&module.exports?e(require("lazysizes")):"function"==typeof define&&define.amd?define(["lazysizes"],e):t.lazySizes?i():t.addEventListener("lazyunveilread",i,!0))}("undefined"!=typeof window?window:0,function(u,t,i){"use strict";var l,s,d,f,g,o;u.addEventListener&&(l=/\s+(\d+)(w|h)\s+(\d+)(w|h)/,s=/parent-fit["']*\s*:\s*["']*(contain|cover|width)/,d=/parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/,f=/^picture$/i,g=i.cfg,o={getParent:function(t,e){var i=t,a=t.parentNode;return e&&"prev"!=e||!a||!f.test(a.nodeName||"")||(a=a.parentNode),"self"!=e&&(i="prev"==e?t.previousElementSibling:e&&(a.closest||u.jQuery)&&(a.closest?a.closest(e):jQuery(a).closest(e)[0])||a),i},getFit:function(t){var e,i,a=getComputedStyle(t,null)||{},n=a.content||a.fontFamily,r={fit:t._lazysizesParentFit||t.getAttribute("data-parent-fit")};return!r.fit&&n&&(e=n.match(s))&&(r.fit=e[1]),r.fit?(!(i=t._lazysizesParentContainer||t.getAttribute("data-parent-container"))&&n&&(e=n.match(d))&&(i=e[1]),r.parent=o.getParent(t,i)):r.fit=a.objectFit,r},getImageRatio:function(t){for(var e,i,a,n,r,s,d=t.parentNode,o=d&&f.test(d.nodeName||"")?d.querySelectorAll("source, img"):[t],c=0;c<o.length;c++)if(e=(t=o[c]).getAttribute(g.srcsetAttr)||t.getAttribute("srcset")||t.getAttribute("data-pfsrcset")||t.getAttribute("data-risrcset")||"",i=t._lsMedia||t.getAttribute("media"),i=g.customMedia[t.getAttribute("data-media")||i]||i,e&&(!i||(u.matchMedia&&matchMedia(i)||{}).matches)){(a=parseFloat(t.getAttribute("data-aspectratio")))||(s=(n=e.match(l))?"w"==n[2]?(r=n[1],n[3]):(r=n[3],n[1]):(r=t.getAttribute("width"),t.getAttribute("height")),a=r/s);break}return a},calculateSize:function(t,e){var i,a,n,r=this.getFit(t),s=r.fit,d=r.parent;return"width"==s||("contain"==s||"cover"==s)&&(a=this.getImageRatio(t))?(d?e=d.clientWidth:d=t,n=e,"width"==s?n=e:(i=e/d.clientHeight)&&("cover"==s&&i<a||"contain"==s&&a<i)&&(n=e*(a/i)),n):e}},i.parentFit=o,t.addEventListener("lazybeforesizes",function(t){var e;t.defaultPrevented||t.detail.instance!=i||(e=t.target,t.detail.width=o.calculateSize(e,t.detail.width))}))});;
