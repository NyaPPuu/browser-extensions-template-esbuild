"use strict";(()=>{var $r={black:"#000",white:"#fff"},Y=$r;var Sr={50:"#ffebee",100:"#ffcdd2",200:"#ef9a9a",300:"#e57373",400:"#ef5350",500:"#f44336",600:"#e53935",700:"#d32f2f",800:"#c62828",900:"#b71c1c",A100:"#ff8a80",A200:"#ff5252",A400:"#ff1744",A700:"#d50000"},z=Sr;var _r={50:"#f3e5f5",100:"#e1bee7",200:"#ce93d8",300:"#ba68c8",400:"#ab47bc",500:"#9c27b0",600:"#8e24aa",700:"#7b1fa2",800:"#6a1b9a",900:"#4a148c",A100:"#ea80fc",A200:"#e040fb",A400:"#d500f9",A700:"#aa00ff"},B=_r;var Ar={50:"#e3f2fd",100:"#bbdefb",200:"#90caf9",300:"#64b5f6",400:"#42a5f5",500:"#2196f3",600:"#1e88e5",700:"#1976d2",800:"#1565c0",900:"#0d47a1",A100:"#82b1ff",A200:"#448aff",A400:"#2979ff",A700:"#2962ff"},L=Ar;var Nr={50:"#e1f5fe",100:"#b3e5fc",200:"#81d4fa",300:"#4fc3f7",400:"#29b6f6",500:"#03a9f4",600:"#039be5",700:"#0288d1",800:"#0277bd",900:"#01579b",A100:"#80d8ff",A200:"#40c4ff",A400:"#00b0ff",A700:"#0091ea"},W=Nr;var Mr={50:"#e8f5e9",100:"#c8e6c9",200:"#a5d6a7",300:"#81c784",400:"#66bb6a",500:"#4caf50",600:"#43a047",700:"#388e3c",800:"#2e7d32",900:"#1b5e20",A100:"#b9f6ca",A200:"#69f0ae",A400:"#00e676",A700:"#00c853"},K=Mr;var Pr={50:"#fff3e0",100:"#ffe0b2",200:"#ffcc80",300:"#ffb74d",400:"#ffa726",500:"#ff9800",600:"#fb8c00",700:"#f57c00",800:"#ef6c00",900:"#e65100",A100:"#ffd180",A200:"#ffab40",A400:"#ff9100",A700:"#ff6d00"},H=Pr;var Ir={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},Re=Ir;function x(){return x=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},x.apply(this,arguments)}function P(e,r){if(e==null)return{};var t={},o=Object.keys(e),n,a;for(a=0;a<o.length;a++)n=o[a],!(r.indexOf(n)>=0)&&(t[n]=e[n]);return t}function Cr(e){if(e.sheet)return e.sheet;for(var r=0;r<document.styleSheets.length;r++)if(document.styleSheets[r].ownerNode===e)return document.styleSheets[r]}function Rr(e){var r=document.createElement("style");return r.setAttribute("data-emotion",e.key),e.nonce!==void 0&&r.setAttribute("nonce",e.nonce),r.appendChild(document.createTextNode("")),r.setAttribute("data-s",""),r}var je=function(){function e(t){var o=this;this._insertTag=function(n){var a;o.tags.length===0?o.insertionPoint?a=o.insertionPoint.nextSibling:o.prepend?a=o.container.firstChild:a=o.before:a=o.tags[o.tags.length-1].nextSibling,o.container.insertBefore(n,a),o.tags.push(n)},this.isSpeedy=t.speedy===void 0?!0:t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var r=e.prototype;return r.hydrate=function(o){o.forEach(this._insertTag)},r.insert=function(o){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Rr(this));var n=this.tags[this.tags.length-1];if(!1)var a;if(this.isSpeedy){var s=Cr(n);try{s.insertRule(o,s.cssRules.length)}catch(c){}}else n.appendChild(document.createTextNode(o));this.ctr++},r.flush=function(){this.tags.forEach(function(o){return o.parentNode&&o.parentNode.removeChild(o)}),this.tags=[],this.ctr=0},e}();var $="-ms-",ae="-moz-",m="-webkit-",fe="comm",q="rule",G="decl";var Ue="@import";var ue="@keyframes";var De=Math.abs,F=String.fromCharCode,ze=Object.assign;function Be(e,r){return T(e,0)^45?(((r<<2^T(e,0))<<2^T(e,1))<<2^T(e,2))<<2^T(e,3):0}function pe(e){return e.trim()}function be(e,r){return(e=r.exec(e))?e[0]:e}function l(e,r,t){return e.replace(r,t)}function se(e,r){return e.indexOf(r)}function T(e,r){return e.charCodeAt(r)|0}function U(e,r,t){return e.slice(r,t)}function _(e){return e.length}function J(e){return e.length}function X(e,r){return r.push(e),e}function ye(e,r){return e.map(r).join("")}var de=1,Z=1,Le=0,A=0,k=0,ee="";function ie(e,r,t,o,n,a,s){return{value:e,root:r,parent:t,type:o,props:n,children:a,line:de,column:Z,length:s,return:""}}function re(e,r){return ze(ie("",null,null,"",null,null,0),e,{length:-e.length},r)}function We(){return k}function Ke(){return k=A>0?T(ee,--A):0,Z--,k===10&&(Z=1,de--),k}function N(){return k=A<Le?T(ee,A++):0,Z++,k===10&&(Z=1,de++),k}function I(){return T(ee,A)}function ce(){return A}function te(e,r){return U(ee,e,r)}function Q(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function le(e){return de=Z=1,Le=_(ee=e),A=0,[]}function me(e){return ee="",e}function oe(e){return pe(te(A-1,ve(e===91?e+2:e===40?e+1:e)))}function Fe(e){for(;(k=I())&&k<33;)N();return Q(e)>2||Q(k)>3?"":" "}function Ve(e,r){for(;--r&&N()&&!(k<48||k>102||k>57&&k<65||k>70&&k<97););return te(e,ce()+(r<6&&I()==32&&N()==32))}function ve(e){for(;N();)switch(k){case e:return A;case 34:case 39:e!==34&&e!==39&&ve(k);break;case 40:e===41&&ve(e);break;case 92:N();break}return A}function Ye(e,r){for(;N()&&e+k!==47+10;)if(e+k===42+42&&I()===47)break;return"/*"+te(r,A-1)+"*"+F(e===47?e:N())}function He(e){for(;!Q(I());)N();return te(e,A)}function Je(e){return me(he("",null,null,null,[""],e=le(e),0,[0],e))}function he(e,r,t,o,n,a,s,c,u){for(var p=0,d=0,h=s,f=0,y=0,E=0,i=1,v=1,g=1,w=0,M="",D=n,C=a,R=o,O=M;v;)switch(E=w,w=N()){case 40:if(E!=108&&T(O,h-1)==58){se(O+=l(oe(w),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:O+=oe(w);break;case 9:case 10:case 13:case 32:O+=Fe(E);break;case 92:O+=Ve(ce()-1,7);continue;case 47:switch(I()){case 42:case 47:X(jr(Ye(N(),ce()),r,t),u);break;default:O+="/"}break;case 123*i:c[p++]=_(O)*g;case 125*i:case 59:case 0:switch(w){case 0:case 125:v=0;case 59+d:y>0&&_(O)-h&&X(y>32?Ge(O+";",o,t,h-1):Ge(l(O," ","")+";",o,t,h-2),u);break;case 59:O+=";";default:if(X(R=qe(O,r,t,p,d,n,c,M,D=[],C=[],h),a),w===123)if(d===0)he(O,r,R,R,D,a,h,c,C);else switch(f===99&&T(O,3)===110?100:f){case 100:case 109:case 115:he(e,R,R,o&&X(qe(e,R,R,0,0,n,c,M,n,D=[],h),C),n,C,h,c,o?D:C);break;default:he(O,R,R,R,[""],C,0,c,C)}}p=d=y=0,i=g=1,M=O="",h=s;break;case 58:h=1+_(O),y=E;default:if(i<1){if(w==123)--i;else if(w==125&&i++==0&&Ke()==125)continue}switch(O+=F(w),w*i){case 38:g=d>0?1:(O+="\f",-1);break;case 44:c[p++]=(_(O)-1)*g,g=1;break;case 64:I()===45&&(O+=oe(N())),f=I(),d=h=_(M=O+=He(ce())),w++;break;case 45:E===45&&_(O)==2&&(i=0)}}return a}function qe(e,r,t,o,n,a,s,c,u,p,d){for(var h=n-1,f=n===0?a:[""],y=J(f),E=0,i=0,v=0;E<o;++E)for(var g=0,w=U(e,h+1,h=De(i=s[E])),M=e;g<y;++g)(M=pe(i>0?f[g]+" "+w:l(w,/&\f/g,f[g])))&&(u[v++]=M);return ie(e,r,t,n===0?q:c,u,p,d)}function jr(e,r,t){return ie(e,r,t,fe,F(We()),U(e,2,-2),0)}function Ge(e,r,t,o){return ie(e,r,t,G,U(e,0,o),U(e,o+1,-1),o)}function V(e,r){for(var t="",o=J(e),n=0;n<o;n++)t+=r(e[n],n,e,r)||"";return t}function Xe(e,r,t,o){switch(e.type){case Ue:case G:return e.return=e.return||e.value;case fe:return"";case ue:return e.return=e.value+"{"+V(e.children,o)+"}";case q:e.value=e.props.join(",")}return _(t=V(e.children,o))?e.return=e.value+"{"+t+"}":""}function Ze(e){var r=J(e);return function(t,o,n,a){for(var s="",c=0;c<r;c++)s+=e[c](t,o,n,a)||"";return s}}function Qe(e){return function(r){r.root||(r=r.return)&&e(r)}}var Ur=function(r,t,o){for(var n=0,a=0;n=a,a=I(),n===38&&a===12&&(t[o]=1),!Q(a);)N();return te(r,A)},Dr=function(r,t){var o=-1,n=44;do switch(Q(n)){case 0:n===38&&I()===12&&(t[o]=1),r[o]+=Ur(A-1,t,o);break;case 2:r[o]+=oe(n);break;case 4:if(n===44){r[++o]=I()===58?"&\f":"",t[o]=r[o].length;break}default:r[o]+=F(n)}while(n=N());return r},zr=function(r,t){return me(Dr(le(r),t))},er=new WeakMap,Br=function(r){if(!(r.type!=="rule"||!r.parent||r.length<1)){for(var t=r.value,o=r.parent,n=r.column===o.column&&r.line===o.line;o.type!=="rule";)if(o=o.parent,!o)return;if(!(r.props.length===1&&t.charCodeAt(0)!==58&&!er.get(o))&&!n){er.set(r,!0);for(var a=[],s=zr(t,a),c=o.props,u=0,p=0;u<s.length;u++)for(var d=0;d<c.length;d++,p++)r.props[p]=a[u]?s[u].replace(/&\f/g,c[d]):c[d]+" "+s[u]}}},Lr=function(r){if(r.type==="decl"){var t=r.value;t.charCodeAt(0)===108&&t.charCodeAt(2)===98&&(r.return="",r.value="")}};function rr(e,r){switch(Be(e,r)){case 5103:return m+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return m+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return m+e+ae+e+$+e+e;case 6828:case 4268:return m+e+$+e+e;case 6165:return m+e+$+"flex-"+e+e;case 5187:return m+e+l(e,/(\w+).+(:[^]+)/,m+"box-$1$2"+$+"flex-$1$2")+e;case 5443:return m+e+$+"flex-item-"+l(e,/flex-|-self/,"")+e;case 4675:return m+e+$+"flex-line-pack"+l(e,/align-content|flex-|-self/,"")+e;case 5548:return m+e+$+l(e,"shrink","negative")+e;case 5292:return m+e+$+l(e,"basis","preferred-size")+e;case 6060:return m+"box-"+l(e,"-grow","")+m+e+$+l(e,"grow","positive")+e;case 4554:return m+l(e,/([^-])(transform)/g,"$1"+m+"$2")+e;case 6187:return l(l(l(e,/(zoom-|grab)/,m+"$1"),/(image-set)/,m+"$1"),e,"")+e;case 5495:case 3959:return l(e,/(image-set\([^]*)/,m+"$1$`$1");case 4968:return l(l(e,/(.+:)(flex-)?(.*)/,m+"box-pack:$3"+$+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+m+e+e;case 4095:case 3583:case 4068:case 2532:return l(e,/(.+)-inline(.+)/,m+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_(e)-1-r>6)switch(T(e,r+1)){case 109:if(T(e,r+4)!==45)break;case 102:return l(e,/(.+:)(.+)-([^]+)/,"$1"+m+"$2-$3$1"+ae+(T(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~se(e,"stretch")?rr(l(e,"stretch","fill-available"),r)+e:e}break;case 4949:if(T(e,r+1)!==115)break;case 6444:switch(T(e,_(e)-3-(~se(e,"!important")&&10))){case 107:return l(e,":",":"+m)+e;case 101:return l(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+m+(T(e,14)===45?"inline-":"")+"box$3$1"+m+"$2$3$1"+$+"$2box$3")+e}break;case 5936:switch(T(e,r+11)){case 114:return m+e+$+l(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return m+e+$+l(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return m+e+$+l(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return m+e+$+e+e}return e}var Wr=function(r,t,o,n){if(r.length>-1&&!r.return)switch(r.type){case G:r.return=rr(r.value,r.length);break;case ue:return V([re(r,{value:l(r.value,"@","@"+m)})],n);case q:if(r.length)return ye(r.props,function(a){switch(be(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return V([re(r,{props:[l(a,/:(read-\w+)/,":"+ae+"$1")]})],n);case"::placeholder":return V([re(r,{props:[l(a,/:(plac\w+)/,":"+m+"input-$1")]}),re(r,{props:[l(a,/:(plac\w+)/,":"+ae+"$1")]}),re(r,{props:[l(a,/:(plac\w+)/,$+"input-$1")]})],n)}return""})}},Kr=[Wr],Fr=function(r){var t=r.key;if(t==="css"){var o=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(o,function(i){var v=i.getAttribute("data-emotion");v.indexOf(" ")!==-1&&(document.head.appendChild(i),i.setAttribute("data-s",""))})}var n=r.stylisPlugins||Kr,a={},s,c=[];s=r.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),function(i){for(var v=i.getAttribute("data-emotion").split(" "),g=1;g<v.length;g++)a[v[g]]=!0;c.push(i)});var u,p=[Br,Lr];{var d,h=[Xe,Qe(function(i){d.insert(i)})],f=Ze(p.concat(n,h)),y=function(v){return V(Je(v),f)};u=function(v,g,w,M){d=w,y(v?v+"{"+g.styles+"}":g.styles),M&&(E.inserted[g.name]=!0)}}var E={key:t,sheet:new je({key:t,container:s,nonce:r.nonce,speedy:r.speedy,prepend:r.prepend,insertionPoint:r.insertionPoint}),nonce:r.nonce,inserted:a,registered:{},insert:u};return E.sheet.hydrate(c),E},tr=Fr;function ge(e){return e!==null&&typeof e=="object"&&e.constructor===Object}function S(e,r,t={clone:!0}){let o=t.clone?x({},e):e;return ge(e)&&ge(r)&&Object.keys(r).forEach(n=>{n!=="__proto__"&&(ge(r[n])&&n in e&&ge(e[n])?o[n]=S(e[n],r[n],t):o[n]=r[n])}),o}function j(e){let r="https://mui.com/production-error/?code="+e;for(let t=1;t<arguments.length;t+=1)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified MUI error #"+e+"; visit "+r+" for the full message."}function Vr(e,r){return r?S(e,r,{clone:!1}):e}var or=Vr;var ar={xs:0,sm:600,md:900,lg:1200,xl:1536},nr={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${ar[e]}px)`};function sr(e,r,t){let o=e.theme||{};if(Array.isArray(r)){let a=o.breakpoints||nr;return r.reduce((s,c,u)=>(s[a.up(a.keys[u])]=t(r[u]),s),{})}if(typeof r=="object"){let a=o.breakpoints||nr;return Object.keys(r).reduce((s,c)=>{if(Object.keys(a.values||ar).indexOf(c)!==-1){let u=a.up(c);s[u]=t(r[c],c)}else{let u=c;s[u]=r[u]}return s},{})}return t(r)}function ir(e,r,t=!0){if(!r||typeof r!="string")return null;if(e&&e.vars&&t){let o=`vars.${r}`.split(".").reduce((n,a)=>n&&n[a]?n[a]:null,e);if(o!=null)return o}return r.split(".").reduce((o,n)=>o&&o[n]!=null?o[n]:null,e)}function Oe(e){let r={};return t=>(r[t]===void 0&&(r[t]=e(t)),r[t])}var Yr={m:"margin",p:"padding"},Hr={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},cr={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},qr=Oe(e=>{if(e.length>2)if(cr[e])e=cr[e];else return[e];let[r,t]=e.split(""),o=Yr[r],n=Hr[t]||"";return Array.isArray(n)?n.map(a=>o+a):[o+n]}),Ee=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],we=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"],fr=[...Ee,...we];function Gr(e,r,t,o){var n;let a=(n=ir(e,r,!1))!=null?n:t;return typeof a=="number"?s=>typeof s=="string"?s:a*s:Array.isArray(a)?s=>typeof s=="string"?s:a[s]:typeof a=="function"?a:()=>{}}function Te(e){return Gr(e,"spacing",8,"spacing")}function Jr(e,r){if(typeof r=="string"||r==null)return r;let t=Math.abs(r),o=e(t);return r>=0?o:typeof o=="number"?-o:`-${o}`}function Xr(e,r){return t=>e.reduce((o,n)=>(o[n]=Jr(r,t),o),{})}function Zr(e,r,t,o){if(r.indexOf(t)===-1)return null;let n=qr(t),a=Xr(n,o),s=e[t];return sr(e,s,a)}function ke(e,r){let t=Te(e.theme);return Object.keys(e).map(o=>Zr(e,r,o,t)).reduce(or,{})}function ur(e){return ke(e,Ee)}ur.propTypes={};ur.filterProps=Ee;function pr(e){return ke(e,we)}pr.propTypes={};pr.filterProps=we;function dr(e){return ke(e,fr)}dr.propTypes={};dr.filterProps=fr;var Qr=["values","unit","step"];var et=e=>{let r=Object.keys(e).map(t=>({key:t,val:e[t]}))||[];return r.sort((t,o)=>t.val-o.val),r.reduce((t,o)=>x({},t,{[o.key]:o.val}),{})};function $e(e){let{values:r={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:t="px",step:o=5}=e,n=P(e,Qr),a=et(r),s=Object.keys(a);function c(f){return`@media (min-width:${typeof r[f]=="number"?r[f]:f}${t})`}function u(f){return`@media (max-width:${(typeof r[f]=="number"?r[f]:f)-o/100}${t})`}function p(f,y){let E=s.indexOf(y);return`@media (min-width:${typeof r[f]=="number"?r[f]:f}${t}) and (max-width:${(E!==-1&&typeof r[s[E]]=="number"?r[s[E]]:y)-o/100}${t})`}function d(f){return s.indexOf(f)+1<s.length?p(f,s[s.indexOf(f)+1]):c(f)}function h(f){let y=s.indexOf(f);return y===0?c(s[1]):y===s.length-1?u(s[y]):p(f,s[s.indexOf(f)+1]).replace("@media","@media not all and")}return x({keys:s,values:a,up:c,down:u,between:p,only:d,not:h,unit:t},n)}var rt={borderRadius:4},lr=rt;function Se(e=8){if(e.mui)return e;let r=Te({spacing:e}),t=(...o)=>(o.length===0?[1]:o).map(a=>{let s=r(a);return typeof s=="number"?`${s}px`:s}).join(" ");return t.mui=!0,t}var tt=["breakpoints","palette","spacing","shape"];function ot(e={},...r){let{breakpoints:t={},palette:o={},spacing:n,shape:a={}}=e,s=P(e,tt),c=$e(t),u=Se(n),p=S({breakpoints:c,direction:"ltr",components:{},palette:x({mode:"light"},o),spacing:u,shape:x({},lr,a)},s);return p=r.reduce((d,h)=>S(d,h),p),p}var xe=ot;function hr(e,r=0,t=1){return Math.min(Math.max(r,e),t)}function nt(e){e=e.slice(1);let r=new RegExp(`.{1,${e.length>=6?2:1}}`,"g"),t=e.match(r);return t&&t[0].length===1&&(t=t.map(o=>o+o)),t?`rgb${t.length===4?"a":""}(${t.map((o,n)=>n<3?parseInt(o,16):Math.round(parseInt(o,16)/255*1e3)/1e3).join(", ")})`:""}function ne(e){if(e.type)return e;if(e.charAt(0)==="#")return ne(nt(e));let r=e.indexOf("("),t=e.substring(0,r);if(["rgb","rgba","hsl","hsla","color"].indexOf(t)===-1)throw new Error(j(9,e));let o=e.substring(r+1,e.length-1),n;if(t==="color"){if(o=o.split(" "),n=o.shift(),o.length===4&&o[3].charAt(0)==="/"&&(o[3]=o[3].slice(1)),["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(n)===-1)throw new Error(j(10,n))}else o=o.split(",");return o=o.map(a=>parseFloat(a)),{type:t,values:o,colorSpace:n}}function _e(e){let{type:r,colorSpace:t}=e,{values:o}=e;return r.indexOf("rgb")!==-1?o=o.map((n,a)=>a<3?parseInt(n,10):n):r.indexOf("hsl")!==-1&&(o[1]=`${o[1]}%`,o[2]=`${o[2]}%`),r.indexOf("color")!==-1?o=`${t} ${o.join(" ")}`:o=`${o.join(", ")}`,`${r}(${o})`}function at(e){e=ne(e);let{values:r}=e,t=r[0],o=r[1]/100,n=r[2]/100,a=o*Math.min(n,1-n),s=(p,d=(p+t/30)%12)=>n-a*Math.max(Math.min(d-3,9-d,1),-1),c="rgb",u=[Math.round(s(0)*255),Math.round(s(8)*255),Math.round(s(4)*255)];return e.type==="hsla"&&(c+="a",u.push(r[3])),_e({type:c,values:u})}function mr(e){e=ne(e);let r=e.type==="hsl"||e.type==="hsla"?ne(at(e)).values:e.values;return r=r.map(t=>(e.type!=="color"&&(t/=255),t<=.03928?t/12.92:((t+.055)/1.055)**2.4)),Number((.2126*r[0]+.7152*r[1]+.0722*r[2]).toFixed(3))}function gr(e,r){let t=mr(e),o=mr(r);return(Math.max(t,o)+.05)/(Math.min(t,o)+.05)}function xr(e,r){if(e=ne(e),r=hr(r),e.type.indexOf("hsl")!==-1)e.values[2]*=1-r;else if(e.type.indexOf("rgb")!==-1||e.type.indexOf("color")!==-1)for(let t=0;t<3;t+=1)e.values[t]*=1-r;return _e(e)}function br(e,r){if(e=ne(e),r=hr(r),e.type.indexOf("hsl")!==-1)e.values[2]+=(100-e.values[2])*r;else if(e.type.indexOf("rgb")!==-1)for(let t=0;t<3;t+=1)e.values[t]+=(255-e.values[t])*r;else if(e.type.indexOf("color")!==-1)for(let t=0;t<3;t+=1)e.values[t]+=(1-e.values[t])*r;return _e(e)}function Ae(e,r){return x({toolbar:{minHeight:56,[e.up("xs")]:{"@media (orientation: landscape)":{minHeight:48}},[e.up("sm")]:{minHeight:64}}},r)}var st=["mode","contrastThreshold","tonalOffset"],yr={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:Y.white,default:Y.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},Ne={text:{primary:Y.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:Y.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function vr(e,r,t,o){let n=o.light||o,a=o.dark||o*1.5;e[r]||(e.hasOwnProperty(t)?e[r]=e[t]:r==="light"?e.light=br(e.main,n):r==="dark"&&(e.dark=xr(e.main,a)))}function it(e="light"){return e==="dark"?{main:L[200],light:L[50],dark:L[400]}:{main:L[700],light:L[400],dark:L[800]}}function ct(e="light"){return e==="dark"?{main:B[200],light:B[50],dark:B[400]}:{main:B[500],light:B[300],dark:B[700]}}function ft(e="light"){return e==="dark"?{main:z[500],light:z[300],dark:z[700]}:{main:z[700],light:z[400],dark:z[800]}}function ut(e="light"){return e==="dark"?{main:W[400],light:W[300],dark:W[700]}:{main:W[700],light:W[500],dark:W[900]}}function pt(e="light"){return e==="dark"?{main:K[400],light:K[300],dark:K[700]}:{main:K[800],light:K[500],dark:K[900]}}function dt(e="light"){return e==="dark"?{main:H[400],light:H[300],dark:H[700]}:{main:"#ed6c02",light:H[500],dark:H[900]}}function Me(e){let{mode:r="light",contrastThreshold:t=3,tonalOffset:o=.2}=e,n=P(e,st),a=e.primary||it(r),s=e.secondary||ct(r),c=e.error||ft(r),u=e.info||ut(r),p=e.success||pt(r),d=e.warning||dt(r);function h(i){return gr(i,Ne.text.primary)>=t?Ne.text.primary:yr.text.primary}let f=({color:i,name:v,mainShade:g=500,lightShade:w=300,darkShade:M=700})=>{if(i=x({},i),!i.main&&i[g]&&(i.main=i[g]),!i.hasOwnProperty("main"))throw new Error(j(11,v?` (${v})`:"",g));if(typeof i.main!="string")throw new Error(j(12,v?` (${v})`:"",JSON.stringify(i.main)));return vr(i,"light",w,o),vr(i,"dark",M,o),i.contrastText||(i.contrastText=h(i.main)),i},y={dark:Ne,light:yr};return S(x({common:x({},Y),mode:r,primary:f({color:a,name:"primary"}),secondary:f({color:s,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:f({color:c,name:"error"}),warning:f({color:d,name:"warning"}),info:f({color:u,name:"info"}),success:f({color:p,name:"success"}),grey:Re,contrastThreshold:t,getContrastText:h,augmentColor:f,tonalOffset:o},y[r]),n)}var lt=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"];function mt(e){return Math.round(e*1e5)/1e5}var Or={textTransform:"uppercase"},Er='"Roboto", "Helvetica", "Arial", sans-serif';function Pe(e,r){let t=typeof r=="function"?r(e):r,{fontFamily:o=Er,fontSize:n=14,fontWeightLight:a=300,fontWeightRegular:s=400,fontWeightMedium:c=500,fontWeightBold:u=700,htmlFontSize:p=16,allVariants:d,pxToRem:h}=t,f=P(t,lt),y=n/14,E=h||(g=>`${g/p*y}rem`),i=(g,w,M,D,C)=>x({fontFamily:o,fontWeight:g,fontSize:E(w),lineHeight:M},o===Er?{letterSpacing:`${mt(D/w)}em`}:{},C,d),v={h1:i(a,96,1.167,-1.5),h2:i(a,60,1.2,-.5),h3:i(s,48,1.167,0),h4:i(s,34,1.235,.25),h5:i(s,24,1.334,0),h6:i(c,20,1.6,.15),subtitle1:i(s,16,1.75,.15),subtitle2:i(c,14,1.57,.1),body1:i(s,16,1.5,.15),body2:i(s,14,1.43,.15),button:i(c,14,1.75,.4,Or),caption:i(s,12,1.66,.4),overline:i(s,12,2.66,1,Or)};return S(x({htmlFontSize:p,pxToRem:E,fontFamily:o,fontSize:n,fontWeightLight:a,fontWeightRegular:s,fontWeightMedium:c,fontWeightBold:u},v),f,{clone:!1})}function b(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${.2})`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${.14})`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${.12})`].join(",")}var ht=["none",b(0,2,1,-1,0,1,1,0,0,1,3,0),b(0,3,1,-2,0,2,2,0,0,1,5,0),b(0,3,3,-2,0,3,4,0,0,1,8,0),b(0,2,4,-1,0,4,5,0,0,1,10,0),b(0,3,5,-1,0,5,8,0,0,1,14,0),b(0,3,5,-1,0,6,10,0,0,1,18,0),b(0,4,5,-2,0,7,10,1,0,2,16,1),b(0,5,5,-3,0,8,10,1,0,3,14,2),b(0,5,6,-3,0,9,12,1,0,3,16,2),b(0,6,6,-3,0,10,14,1,0,4,18,3),b(0,6,7,-4,0,11,15,1,0,4,20,3),b(0,7,8,-4,0,12,17,2,0,5,22,4),b(0,7,8,-4,0,13,19,2,0,5,24,4),b(0,7,9,-4,0,14,21,2,0,5,26,4),b(0,8,9,-5,0,15,22,2,0,6,28,5),b(0,8,10,-5,0,16,24,2,0,6,30,5),b(0,8,11,-5,0,17,26,2,0,6,32,5),b(0,9,11,-5,0,18,28,2,0,7,34,6),b(0,9,12,-6,0,19,29,2,0,7,36,6),b(0,10,13,-6,0,20,31,3,0,8,38,7),b(0,10,13,-6,0,21,33,3,0,8,40,7),b(0,10,14,-6,0,22,35,3,0,8,42,7),b(0,11,14,-7,0,23,36,3,0,9,44,8),b(0,11,15,-7,0,24,38,3,0,9,46,8)],wr=ht;var gt=["duration","easing","delay"],xt={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},bt={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function Tr(e){return`${Math.round(e)}ms`}function yt(e){if(!e)return 0;let r=e/36;return Math.round((4+15*r**.25+r/5)*10)}function Ie(e){let r=x({},xt,e.easing),t=x({},bt,e.duration);return x({getAutoHeightDuration:yt,create:(n=["all"],a={})=>{let{duration:s=t.standard,easing:c=r.easeInOut,delay:u=0}=a,p=P(a,gt);return(Array.isArray(n)?n:[n]).map(d=>`${d} ${typeof s=="string"?s:Tr(s)} ${c} ${typeof u=="string"?u:Tr(u)}`).join(",")}},e,{easing:r,duration:t})}var vt={mobileStepper:1e3,fab:1050,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},kr=vt;var Ot=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];function Et(e={},...r){let{mixins:t={},palette:o={},transitions:n={},typography:a={}}=e,s=P(e,Ot);if(e.vars)throw new Error(j(18));let c=Me(o),u=xe(e),p=S(u,{mixins:Ae(u.breakpoints,t),palette:c,shadows:wr.slice(),typography:Pe(c,a),transitions:Ie(n),zIndex:x({},kr)});return p=S(p,s),p=r.reduce((d,h)=>S(d,h),p),p}var Ce=Et;var wt=Ce({shape:{borderRadius:0}}),Kn=function(){return tr({key:"css",prepend:!0})},Fn=wt;})();
