import{a as y,t as R,d as oe,n as K,c as X}from"../chunks/disclose-version.DdPyK4vj.js";import{m as Ve,a4 as je,Y as ta,s as Se,k as Ee,o as He,q as ke,r as ra,b as na,as as Ue,h as U,x as he,B as sa,O as l,a5 as ia,a6 as Le,w as be,c as ie,at as de,a7 as ze,a as Fe,a8 as la,I as qe,ao as oa,au as ye,av as Te,aw as we,ax as ca,G as va,ay as fa,d as ua,y as da,aj as ma,C as _a,az as ga,al as ha,_ as Ae,aA as ba,v as pa,aB as ka,aC as xa,aD as ya,f as wa,an as Na,am as We,p as Q,S as A,i as Z,U as w,V as x,W as I,Q as z,g as q,u as Je,a0 as G,ar as ee,n as Ca,aE as Sa,aF as Be}from"../chunks/runtime.Duwihz22.js";import{d as Ne,s as F,a as Ea}from"../chunks/render.Cmt2yZHH.js";import{b as La,p as V,i as M,c as Ta,a as me}from"../chunks/props.DGlbZnCR.js";import{g as Aa}from"../chunks/entry.CRdhCK-c.js";import{s as Ba}from"../chunks/snippet.7uiNMHAO.js";const Pa=[];function Ia(a,e=!1){return _e(a,new Map,"",Pa)}function _e(a,e,t,r,n=null){if(typeof a=="object"&&a!==null){var o=e.get(a);if(o!==void 0)return o;if(a instanceof Map)return new Map(a);if(a instanceof Set)return new Set(a);if(Ve(a)){var s=Array(a.length);e.set(a,s),n!==null&&e.set(n,s);for(var g=0;g<a.length;g+=1){var b=a[g];g in a&&(s[g]=_e(b,e,t,r))}return s}if(je(a)===ta){s={},e.set(a,s),n!==null&&e.set(n,s);for(var m in a)s[m]=_e(a[m],e,t,r);return s}if(a instanceof Date)return structuredClone(a);if(typeof a.toJSON=="function")return _e(a.toJSON(),e,t,r,a)}if(a instanceof EventTarget)return a;try{return structuredClone(a)}catch{return a}}let Pe=!1;function Ye(){Pe||(Pe=!0,document.addEventListener("reset",a=>{Promise.resolve().then(()=>{var e;if(!a.defaultPrevented)for(const t of a.target.elements)(e=t.__on_r)==null||e.call(t)})},{capture:!0}))}function Ra(a){var e=He,t=ke;Se(null),Ee(null);try{return a()}finally{Se(e),Ee(t)}}function Xe(a,e,t,r=t){a.addEventListener(e,()=>Ra(t));const n=a.__on_r;n?a.__on_r=()=>{n(),r(!0)}:a.__on_r=()=>r(!0),Ye()}function ae(a,e){return e}function Ma(a,e,t,r){for(var n=[],o=e.length,s=0;s<o;s++)ca(e[s].e,n,!0);var g=o>0&&n.length===0&&t!==null;if(g){var b=t.parentNode;va(b),b.append(t),r.clear(),W(a,e[0].prev,e[o-1].next)}fa(n,()=>{for(var m=0;m<o;m++){var c=e[m];g||(r.delete(c.k),W(a,c.prev,c.next)),ua(c.e,!g)}})}function te(a,e,t,r,n,o=null){var s=a,g={flags:e,items:new Map,first:null},b=(e&Ue)!==0;if(b){var m=a;s=U?he(da(m)):m.appendChild(ra())}U&&sa();var c=null,d=!1,p=ma(()=>{var i=t();return Ve(i)?i:i==null?[]:qe(i)});na(()=>{var i=l(p),v=i.length;if(d&&v===0)return;d=v===0;let u=!1;if(U){var T=s.data===ia;T!==(v===0)&&(s=Le(),he(s),be(!1),u=!0)}if(U){for(var S=null,f,_=0;_<v;_++){if(ie.nodeType===8&&ie.data===_a){s=ie,u=!0,be(!1);break}var E=i[_],h=r(E,_);f=Ge(ie,g,S,null,E,h,_,n,e),g.items.set(h,f),S=f}v>0&&he(Le())}if(!U){var k=He;Da(i,g,s,n,e,(k.f&de)!==0,r)}o!==null&&(v===0?c?ze(c):c=Fe(()=>o(s)):c!==null&&la(c,()=>{c=null})),u&&be(!0),l(p)}),U&&(s=ie)}function Da(a,e,t,r,n,o,s,g){var ve,fe,N,L;var b=(n&ga)!==0,m=(n&(ye|we))!==0,c=a.length,d=e.items,p=e.first,i=p,v,u=null,T,S=[],f=[],_,E,h,k;if(b)for(k=0;k<c;k+=1)_=a[k],E=s(_,k),h=d.get(E),h!==void 0&&((ve=h.a)==null||ve.measure(),(T??(T=new Set)).add(h));for(k=0;k<c;k+=1){if(_=a[k],E=s(_,k),h=d.get(E),h===void 0){var C=i?i.e.nodes_start:t;u=Ge(C,e,u,u===null?e.first:u.next,_,E,k,r,n),d.set(E,u),S=[],f=[],i=u.next;continue}if(m&&Oa(h,_,k,n),h.e.f&de&&(ze(h.e),b&&((fe=h.a)==null||fe.unfix(),(T??(T=new Set)).delete(h))),h!==i){if(v!==void 0&&v.has(h)){if(S.length<f.length){var P=f[0],D;u=P.prev;var j=S[0],J=S[S.length-1];for(D=0;D<S.length;D+=1)Ie(S[D],P,t);for(D=0;D<f.length;D+=1)v.delete(f[D]);W(e,j.prev,J.next),W(e,u,j),W(e,J,P),i=P,u=J,k-=1,S=[],f=[]}else v.delete(h),Ie(h,i,t),W(e,h.prev,h.next),W(e,h,u===null?e.first:u.next),W(e,u,h),u=h;continue}for(S=[],f=[];i!==null&&i.k!==E;)(o||!(i.e.f&de))&&(v??(v=new Set)).add(i),f.push(i),i=i.next;if(i===null)continue;h=i}S.push(h),u=h,i=h.next}if(i!==null||v!==void 0){for(var Y=v===void 0?[]:qe(v);i!==null;)(o||!(i.e.f&de))&&Y.push(i),i=i.next;var re=Y.length;if(re>0){var ce=n&Ue&&c===0?t:null;if(b){for(k=0;k<re;k+=1)(N=Y[k].a)==null||N.measure();for(k=0;k<re;k+=1)(L=Y[k].a)==null||L.fix()}Ma(e,Y,ce,d)}}b&&oa(()=>{var B;if(T!==void 0)for(h of T)(B=h.a)==null||B.apply()}),ke.first=e.first&&e.first.e,ke.last=u&&u.e}function Oa(a,e,t,r){r&ye&&Te(a.v,e),r&we?Te(a.i,t):a.i=t}function Ge(a,e,t,r,n,o,s,g,b,m){var c=(b&ye)!==0,d=(b&ba)===0,p=c?d?ha(n):Ae(n):n,i=b&we?Ae(s):s,v={i,v:p,k:o,a:null,e:null,prev:t,next:r};try{return v.e=Fe(()=>g(a,p,i),U),v.e.prev=t&&t.e,v.e.next=r&&r.e,t===null?e.first=v:(t.next=v,t.e.next=v.e),r!==null&&(r.prev=v,r.e.prev=v.e),v}finally{}}function Ie(a,e,t){for(var r=a.next?a.next.e.nodes_start:t,n=e?e.e.nodes_start:t,o=a.e.nodes_start;o!==r;){var s=pa(o);n.before(o),o=s}}function W(a,e,t){e===null?a.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function Ke(a){var e,t,r="";if(typeof a=="string"||typeof a=="number")r+=a;else if(typeof a=="object")if(Array.isArray(a)){var n=a.length;for(e=0;e<n;e++)a[e]&&(t=Ke(a[e]))&&(r&&(r+=" "),r+=t)}else for(t in a)a[t]&&(r&&(r+=" "),r+=t);return r}function Va(){for(var a,e,t=0,r="",n=arguments.length;t<n;t++)(a=arguments[t])&&(e=Ke(a))&&(r&&(r+=" "),r+=e);return r}function $(a){return typeof a=="object"?Va(a):a??""}function Re(a){if(U){var e=!1,t=()=>{if(!e){if(e=!0,a.hasAttribute("value")){var r=a.value;O(a,"value",null),a.value=r}if(a.hasAttribute("checked")){var n=a.checked;O(a,"checked",null),a.checked=n}}};a.__on_r=t,ka(t),Ye()}}function O(a,e,t,r){var n=a.__attributes??(a.__attributes={});U&&(n[e]=a.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&a.nodeName==="LINK")||n[e]!==(n[e]=t)&&(e==="style"&&"__styles"in a&&(a.__styles={}),e==="loading"&&(a[xa]=t),t==null?a.removeAttribute(e):typeof t!="string"&&ja(a).includes(e)?a[e]=t:a.setAttribute(e,t))}var Me=new Map;function ja(a){var e=Me.get(a.nodeName);if(e)return e;Me.set(a.nodeName,e=[]);for(var t,r=a,n=Element.prototype;n!==r;){t=ya(r);for(var o in t)t[o].set&&e.push(o);r=je(r)}return e}function H(a,e,t){var r=a.__className,n=Ha(e,t);U&&a.className===n?a.__className=n:(r!==n||U&&a.className!==n)&&(e==null&&!t?a.removeAttribute("class"):a.className=n,a.__className=n)}function Ha(a,e){return(a??"")+(e?" "+e:"")}function pe(a,e,t){if(t){if(a.classList.contains(e))return;a.classList.add(e)}else{if(!a.classList.contains(e))return;a.classList.remove(e)}}function De(a,e,t=e){Xe(a,"change",r=>{var n=r?a.defaultChecked:a.checked;t(n)}),(U&&a.defaultChecked!==a.checked||wa(e)==null)&&t(a.checked),Na(()=>{var r=e();a.checked=!!r})}function Qe(a,e,t){if(a.multiple)return Fa(a,e);for(var r of a.options){var n=le(r);if(La(n,e)){r.selected=!0;return}}(!t||e!==void 0)&&(a.selectedIndex=-1)}function Ua(a,e){We(()=>{var t=new MutationObserver(()=>{var r=a.__value;Qe(a,r)});return t.observe(a,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{t.disconnect()}})}function za(a,e,t=e){var r=!0;Xe(a,"change",n=>{var o=n?"[selected]":":checked",s;if(a.multiple)s=[].map.call(a.querySelectorAll(o),le);else{var g=a.querySelector(o)??a.querySelector("option:not([disabled])");s=g&&le(g)}t(s)}),We(()=>{var n=e();if(Qe(a,n,r),r&&n===void 0){var o=a.querySelector(":checked");o!==null&&(n=le(o),t(n))}a.__value=n,r=!1}),Ua(a)}function Fa(a,e){for(var t of a.options)t.selected=~e.indexOf(le(t))}function le(a){return"__value"in a?a.__value:a.value}function qa(a){const e=["sm","md","lg","xl","xxl","xxxl"],t=e.length-1;let r=-1,n=null;for(const o of a){if(!o.breakpoint)continue;const s=e.indexOf(o.breakpoint);if(s>r&&(r=s,n=o),s===t)break}return n==null?void 0:n.breakpoint}function Ze(a,e){let t=(e?a.thClass:a.tdClass)||"";return a.breakpoint&&(t+=` d-none d-${a.breakpoint}-table-cell`),t}function Wa(a){const e=a.split(".");let t="";for(const r of e)t+=`[${r}]`;return t}function xe(a,e){const t=a.split(".");let r=e;for(const n of t)if(r=r[n],r===null)return"";return r}function Ja(a,e,t){for(const o of a)if(o[0].startsWith("sort[")){e=e.toSorted(Ya(o[0],o[1]));break}const r=+(a.get("page")??1),n=+(a.get("limit")??t);return{pages:Math.ceil(e.length/n),page:r,params:Object.fromEntries(a),limit:n,items:e.slice((r-1)*n,n*r),error:""}}function Ya(a,e){const t=Xa(a);return(r,n)=>{const o=xe(t,e==="asc"?r:n),s=xe(t,e==="asc"?n:r);return o<s?-1:o>s?1:0}}function Xa(a){let e=a.replaceAll("][",".");return e=e.replaceAll("sort[",""),e.replaceAll("]","")}const Ga=[{id:132,itemName:"Dark Chocolate",purchaser:"Bob Smith",bankName:"Smalltown Bank",office:"Main Office - 123 Test Ave",amount:8.99,invoiceNum:"923485",lastEvent:{id:1,status:"Emailed",color:"chocolate",details:"",date:"2024-04-26T14:05:00-0500"}},{id:149,itemName:"Soft Pillows",purchaser:"Maria Johnson",bankName:"Alliance Credit Union",office:"St. Cloud - 28 Test Blvd",amount:19.99,invoiceNum:"912348",lastEvent:{id:5,status:"Error",color:"var(--bs-danger)",details:"Invalid account number",date:"2024-05-10T12:12:12-0500"}},{id:237,itemName:"250 Pizzas",purchaser:"Jane Doe",bankName:"Premier Capital",office:"Palm Springs - 400 Tusk Blvd",amount:2284,invoiceNum:"956240",lastEvent:{id:3,status:"Submitted",color:"dodgerblue",details:"Estimated Settle Date: 2024-05-13",date:"2024-05-10T08:40:00-0500"}},{id:354,itemName:"New Car",purchaser:"Brian Bandy",bankName:"Building and Loan",office:"Branch Office - 169 3rd St",amount:33270,invoiceNum:"931732",lastEvent:{id:4,status:"Complete",color:"var(--bs-primary)",details:"",date:"2024-05-17T06:00:00-0500"}},{id:446,itemName:"Tennis Racket",purchaser:"Matt Muffalo",bankName:"Cyberbank LLC",office:"Transylvania - 999 Yorktown Road",amount:110,invoiceNum:"935886",lastEvent:{id:12,status:"Expired",color:"blueviolet",details:null,date:"2024-05-25T23:31:00-0500"}},{id:502,itemName:"Porch Swing",purchaser:"Daniel Mario",bankName:"Midwest Trust",office:"Edina - 48 West Circle Dr",amount:825,invoiceNum:"935418",lastEvent:{id:11,status:"Canceled",color:"var(--bs-danger)",details:"Reason: Wrong payment method",date:"2024-05-16T19:26:00-0500"}},{id:557,itemName:"Off Brand Shoes",purchaser:"Susan Savvy",bankName:"Flagstaff Bank",office:"Pine Park - 20 Wide Drive",amount:69.99,invoiceNum:"946578",lastEvent:{id:8,status:"Refund Submitted",color:"dodgerblue",details:"Estimated Settle Date: 2024-06-03",date:"2024-06-01T09:29:30-0500"}},{id:602,itemName:"Bad Checks",purchaser:"Frank Abagnale",bankName:"Federal Reserve",office:"Bronx - 25 Fraud Lane",amount:1500,invoiceNum:"987654",lastEvent:{id:10,status:"Voided",color:"var(--bs-danger)",details:null,date:"2024-06-02T12:27:42-0500"}},{id:658,itemName:"Pet Rock",purchaser:"Andy Samson",bankName:"Whoville Securities",office:"Whoville - 1 Little Circle",amount:4.49,invoiceNum:"904129",lastEvent:{id:2,status:"Form Opened",color:"chocolate",details:"",date:"2024-06-25T19:16:00-0500"}},{id:719,itemName:"4K Television",purchaser:"Jim Peterson",bankName:"Johnson Financial",office:"New Office - 234 5th Ave",amount:2500,invoiceNum:"940367",lastEvent:{id:9,status:"Refund Complete",color:"var(--bs-primary)",details:"",date:"2024-07-09T12:35:48-0500"}},{id:795,itemName:"Park Place",purchaser:"Lori Greene",bankName:"California Bank",office:"Only Office - 677 Boardwalk Ave",amount:7500,invoiceNum:"903784",lastEvent:{date:"2024-07-07T06:54:00-0500",id:6,status:"Returned",color:"var(--bs-danger)",details:"Reason: Not worth it"}}];async function Ka({url:a}){return Ja(a.searchParams,Ga,5)}const Mt=Object.freeze(Object.defineProperty({__proto__:null,load:Ka},Symbol.toStringTag,{value:"Module"}));var Qa=K('<svg xmlns="http://www.w3.org/2000/svg" class="pg-img svelte-1v313bx" height="1em" viewBox="0 0 320 512" fill="currentColor"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path></svg>'),Za=R('<li class="page-item"><a class="page-link"> </a></li>'),$a=K('<svg xmlns="http://www.w3.org/2000/svg" class="pg-img svelte-1v313bx" height="1em" viewBox="0 0 320 512" fill="currentColor"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path></svg>'),et=(a,e,t)=>e.limitChanged(t()),at=R("<option> </option>"),tt=R('<select class="form-select float-sm-end w-auto"><option disabled> </option><!></select>'),rt=R('<nav><div class="row justify-content-evenly g-3 mb-3"><div class="col-sm-9"><ul class="pagination mb-0"><li class="page-item"><a class="page-link"><!></a></li> <!> <li class="page-item"><a class="page-link"><!></a></li></ul></div> <div class="col-sm-3"><!></div></div></nav>');function nt(a,e){Q(e,!0);let t=V(e,"params",19,()=>({})),r=V(e,"label",3,"Table page navigation"),n=V(e,"paramName",3,"page"),o=V(e,"prevName",3,"Previous"),s=V(e,"nextName",3,"Next"),g=V(e,"useIcons",3,!1),b=V(e,"limitLabel",3,"Page size"),m=V(e,"limit",15,25),c=V(e,"limits",19,()=>[10,25,50,100,200]),d=z(()=>e.page>e.pages?e.pages:e.page),p=z(()=>[...Array(e.pages).keys()].map(N=>N+1)),i=z(()=>{if(e.pages>5){let N=l(d)-3,L=l(d)+2;N<0?(L+=0-N,N=0):L>=e.pages&&(N-=L-e.pages);let B=l(p).slice(N,L);return B[0]=1,B[B.length-1]=e.pages,B}else return l(p)});function v(N,L){const B=new URLSearchParams(L);return B.set(n(),N.toString()),"?"+B.toString()}var u=rt(),T=w(u),S=w(T),f=w(S),_=w(f),E=w(_);A(()=>O(E,"href",v(l(d)-1,t())));var h=w(E);{var k=N=>{var L=Qa();y(N,L)},C=N=>{var L=oe();A(()=>F(L,o())),y(N,L)};M(h,N=>{g()?N(k):N(C,!1)})}x(E),x(_);var P=I(_,2);te(P,17,()=>l(i),ae,(N,L)=>{var B=Za(),ne=w(B);A(()=>O(ne,"href",v(l(L),t())));var ge=w(ne,!0);x(ne),x(B),A(()=>{pe(B,"active",l(L)===l(d)),F(ge,l(L))}),y(N,B)});var D=I(P,2),j=w(D);A(()=>O(j,"href",v(l(d)+1,t())));var J=w(j);{var Y=N=>{var L=$a();y(N,L)},re=N=>{var L=oe();A(()=>F(L,s())),y(N,L)};M(J,N=>{g()?N(Y):N(re,!1)})}x(j),x(D),x(f),x(S);var ce=I(S,2),ve=w(ce);{var fe=N=>{var L=tt();L.__change=[et,e,m];var B=w(L);B.value=((B.__value="")==null,"");var ne=w(B,!0);x(B);var ge=I(B);te(ge,17,c,ae,(ea,ue)=>{var se=at(),Ce={},aa=w(se,!0);x(se),A(()=>{Ce!==(Ce=l(ue))&&(se.value=(se.__value=l(ue))==null?"":l(ue)),F(aa,l(ue))}),y(ea,se)}),x(L),A(()=>{O(L,"aria-label",b()),F(ne,b())}),za(L,m),y(N,L)};M(ve,N=>{c().length>0&&N(fe)})}x(ce),x(T),x(u),A(()=>{O(u,"aria-label",r()),pe(_,"disabled",l(d)<2),O(E,"tabindex",l(d)<2?-1:null),O(E,"aria-label",o()),pe(D,"disabled",l(d)===e.pages),O(j,"tabindex",l(d)===e.pages?-1:null),O(j,"aria-label",s())}),y(a,u),Z()}Ne(["change"]);function Oe(a,e){Q(e,!0);var t=X(),r=q(t);{var n=s=>{var g=X(),b=q(g);Ta(b,()=>e.col.component,(m,c)=>{c(m,{get record(){return e.record},get updateRecord(){return e.updateRecord}})}),y(s,g)},o=s=>{var g=X(),b=q(g);{var m=d=>{var p=oe();A(()=>F(p,e.col.getValue(e.record))),y(d,p)},c=d=>{var p=X(),i=q(p);{var v=u=>{var T=oe();A(()=>F(T,xe(e.col.property,e.record))),y(u,T)};M(i,u=>{e.col.property&&u(v)},!0)}y(d,p)};M(b,d=>{e.col.getValue?d(m):d(c,!1)},!0)}y(s,g)};M(r,s=>{e.col.component?s(n):s(o,!1)})}y(a,t),Z()}var st=K('<path d="M182.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"></path>'),it=K('<path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"></path>'),lt=K('<svg class="bi" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!></svg>'),ot=R('<a class="icon-link icon-link-hover svelte-q869va"> <!></a>');function $e(a,e){Q(e,!0);let t=ee(""),r=ee("");Je(()=>{if(e.col.property){let b=Object.fromEntries(Object.entries(e.params).filter(([d])=>d!=="page"&&!d.startsWith("sort["))),m=new URLSearchParams(b),c="sort"+Wa(e.col.property);G(r,me(e.params[c])),l(r)?l(r)==="asc"&&m.set(c,"desc"):m.set(c,"asc"),G(t,"?"+m.toString())}});var n=X(),o=q(n);{var s=b=>{var m=ot(),c=w(m),d=I(c);{var p=i=>{var v=lt(),u=w(v);{var T=f=>{var _=st();y(f,_)},S=f=>{var _=X(),E=q(_);{var h=k=>{var C=it();y(k,C)};M(E,k=>{l(r)==="desc"&&k(h)},!0)}y(f,_)};M(u,f=>{l(r)==="asc"?f(T):f(S,!1)})}x(v),y(i,v)};M(d,i=>{(l(r)==="asc"||l(r)==="desc")&&i(p)})}x(m),A(()=>{O(m,"href",l(t)),F(c,`${e.col.name??""} `)}),y(b,m)},g=b=>{var m=oe();A(()=>F(m,e.col.name)),y(b,m)};M(o,b=>{e.col.property?b(s):b(g,!1)})}y(a,n),Z()}var ct=(a,e)=>G(e,!l(e)),vt=K('<svg xmlns="http://www.w3.org/2000/svg" class="d-block" width="20" height="20" viewBox="0 0 488 488" fill="currentColor"><path d="M 69.136963,200 H 418.86304 C 437.22091,200 452,214.77909 452,233.13696 v 21.72608 C 452,273.22091 437.22091,288 418.86304,288 H 69.136963 C 50.779085,288 36,273.22091 36,254.86304 V 233.13696 C 36,214.77909 50.779085,200 69.136963,200 Z"></path></svg>'),ft=K('<svg xmlns="http://www.w3.org/2000/svg" class="d-block" width="20" height="20" viewBox="0 0 488 488" fill="currentColor"><path d="M 233.13672 36 C 214.77886 36 200 50.77886 200 69.136719 L 200 200 L 69.136719 200 C 50.77886 200 36 214.77886 36 233.13672 L 36 254.86328 C 36 273.22114 50.77886 288 69.136719 288 L 200 288 L 200 418.86328 C 200 437.22114 214.77886 452 233.13672 452 L 254.86328 452 C 273.22114 452 288 437.22114 288 418.86328 L 288 288 L 418.86328 288 C 437.22114 288 452 273.22114 452 254.86328 L 452 233.13672 C 452 214.77886 437.22114 200 418.86328 200 L 288 200 L 288 69.136719 C 288 50.77886 273.22114 36 254.86328 36 L 233.13672 36 z "></path></svg>'),ut=R('<td><button type="button" class="btn btn-link p-0"><!></button></td>'),dt=R("<td><!></td>"),mt=R("<tr><th><!></th><td><!></td></tr>"),_t=R('<tr><td class="svelte-gsjt0f"><table><tbody class="svelte-gsjt0f"></tbody></table></td></tr>'),gt=R("<tr><!><!></tr> <!>",1);function ht(a,e){Q(e,!0);let t=ee(!1),r=z(()=>l(t)?"Hide Details":"Show Details");function n(p){e.replace(e.index,p)}var o=gt(),s=q(o),g=w(s);{var b=p=>{var i=ut(),v=w(i);v.__click=[ct,t];var u=w(v);{var T=f=>{var _=vt();y(f,_)},S=f=>{var _=ft();y(f,_)};M(u,f=>{l(t)?f(T):f(S,!1)})}x(v),x(i),A(()=>{H(i,`d-${e.maxBreakpoint??""}-none d-print-none px-0 svelte-gsjt0f`),O(v,"title",l(r)),O(v,"aria-label",l(r))}),y(p,i)};M(g,p=>{e.maxBreakpoint&&p(b)})}var m=I(g);te(m,17,()=>e.columns,ae,(p,i)=>{var v=dt();const u=z(()=>$(Ze(l(i),!1)));var T=w(v);Oe(T,{get col(){return l(i)},get record(){return e.record},updateRecord:n}),x(v),A(()=>H(v,l(u),"svelte-gsjt0f")),y(p,v)}),x(s);var c=I(s,2);{var d=p=>{var i=_t(),v=w(i),u=w(v),T=w(u);te(T,21,()=>e.columns,ae,(S,f)=>{var _=X(),E=q(_);{var h=k=>{var C=mt(),P=w(C),D=w(P);$e(D,{get col(){return l(f)},get params(){return e.params}}),x(P);var j=I(P),J=w(j);Oe(J,{get col(){return l(f)},get record(){return e.record},updateRecord:n}),x(j),x(C),A(()=>{H(C,`d-${l(f).breakpoint??""}-none svelte-gsjt0f`),H(P,`${l(f).thClass??""??""} bg-transparent svelte-gsjt0f`),H(j,`${l(f).tdClass??""??""} bg-transparent svelte-gsjt0f`)}),y(k,C)};M(E,k=>{l(f).breakpoint&&k(h)})}y(S,_)}),x(T),x(u),x(v),x(i),A(()=>{H(i,`d-${e.maxBreakpoint??""}-none`),O(v,"colspan",e.columns.length),H(u,$(e.detailsClass),"svelte-gsjt0f")}),y(p,i)};M(c,p=>{l(t)&&p(d)})}y(a,o),Z()}Ne(["click"]);var bt=R("<th></th>"),pt=R("<th><!></th>"),kt=R("<table><!><thead><tr><!><!></tr></thead><tbody></tbody></table>");function xt(a,e){Q(e,!0);let t=V(e,"class",3,"trestable table"),r=V(e,"data",15),n=V(e,"theadTrClass",3,"table-primary"),o=V(e,"tbodyClass",3,""),s=V(e,"detailsClass",3,"table table-sm mb-0 no-bottom-border"),g=V(e,"params",19,()=>({}));function b(f,_){r(r()[f]=_,!0)}let m=z(()=>qa(e.columns));var c=kt(),d=w(c);Ba(d,()=>e.children??Ca);var p=I(d),i=w(p),v=w(i);{var u=f=>{var _=bt();A(()=>H(_,`d-${l(m)??""}-none d-print-none`)),y(f,_)};M(v,f=>{l(m)&&f(u)})}var T=I(v);te(T,17,()=>e.columns,ae,(f,_)=>{var E=pt();const h=z(()=>$(Ze(l(_),!0)));var k=w(E);$e(k,{get col(){return l(_)},get params(){return g()}}),x(E),A(()=>H(E,l(h))),y(f,E)}),x(i),x(p);var S=I(p);te(S,21,r,ae,(f,_,E)=>{ht(f,{get columns(){return e.columns},get maxBreakpoint(){return l(m)},get record(){return l(_)},index:E,replace:b,get detailsClass(){return s()},get params(){return g()}})}),x(S),x(c),A(()=>{H(c,$(t())),H(i,$(n())),H(S,$(o()))}),y(a,c),Z()}var yt=R('<br> <em class="small"> </em>',1),wt=R('<button class="btn btn-sm btn-outline-primary ms-1">Change</button>'),Nt=R("<span> </span> <!> <!>",1);function Ct(a,e){Q(e,!0);function t(){const c=Ia(e.record);c.lastEvent={...c.lastEvent,status:"Updated",color:"magenta",details:"New description"},e.updateRecord(c)}var r=Nt(),n=q(r),o=w(n,!0);x(n);var s=I(n,2);{var g=c=>{var d=yt(),p=I(q(d),2),i=w(p,!0);x(p),A(()=>F(i,e.record.lastEvent.details)),y(c,d)};M(s,c=>{e.record.lastEvent.details&&c(g)})}var b=I(s,2);{var m=c=>{var d=wt();d.__click=t,y(c,d)};M(b,c=>{e.record.lastEvent.details==="Reason: Not worth it"&&c(m)})}A(()=>{O(n,"style",`color: ${e.record.lastEvent.color??""}`),F(o,e.record.lastEvent.status)}),y(a,r),Z()}Ne(["click"]);var St=R("<caption>Payments</caption>"),Et=R('<main class="flex-shrink-0"><div class="bg-primary-subtle py-3"><div class="container-lg"><h1 class="display-2"><img src="logo.svg" alt="Trestable Logo" width="60"> Trestable</h1> <p class="lead mt-3">A responsive data table component built with Svelte and Bootstrap 5.</p> <p><a href="https://github.com/theodorejb/trestable" class="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github svelte-4f9ueg" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg> View Readme</a></p></div></div> <div class="container-lg"><h2 class="mt-3">Demo</h2> <!> <!> <div class="form-check mb-2"><input class="form-check-input" type="checkbox" id="paginationIcons"> <label class="form-check-label" for="paginationIcons">Use icons for pagination</label></div> <div class="form-check mb-3"><input class="form-check-input" type="checkbox" id="includeXxxlCol"> <label class="form-check-label" for="includeXxxlCol">Include always-hidden column</label></div></div></main>');function Dt(a,e){Q(e,!0);let t=z(()=>e.data.pages),r=z(()=>e.data.page),n=z(()=>e.data.params),o=z(()=>e.data.limit),s=ee(me(e.data.items));Je(()=>{G(s,me(e.data.items))});const g=[{name:"ID",property:"id",breakpoint:"md"},{name:"Item",property:"itemName",breakpoint:"lg"},{name:"Purchaser",property:"purchaser"},{name:"Amount",property:"amount",getValue:C=>p(C.amount),breakpoint:"sm"},{name:"Status",property:"lastEvent.status",component:Ct},{name:"Latest Activity",property:"lastEvent.date",getValue:C=>i(new Date(C.lastEvent.date)),breakpoint:"md",thClass:"text-nowrap"},{name:"Bank Name",property:"bankName",breakpoint:"xl"},{name:"Office",property:"office",breakpoint:"xxxl"},{name:"Invoice #",property:"invoiceNum",breakpoint:"xxl"}],b=[5,10,50,100,200];let m=ee(!1),c=ee(!1),d=z(()=>l(c)?g:g.filter(C=>C.breakpoint!=="xxxl"));function p(C){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(C)}function i(C){return new Intl.DateTimeFormat("en-US",{dateStyle:"medium",timeStyle:"short"}).format(C)}function v(C){const P=new URLSearchParams(l(n));P.set("limit",C.toString()),P.delete("page"),Aa("?"+P.toString())}var u=Et();Ea(C=>{Sa.title="Trestable"});var T=I(w(u),2),S=I(w(T),2);xt(S,{class:"table caption-top mb-4",get columns(){return l(d)},get params(){return l(n)},get data(){return l(s)},set data(C){G(s,me(C))},children:(C,P)=>{var D=St();y(C,D)},$$slots:{default:!0}});var f=I(S,2);nt(f,{get pages(){return l(t)},get page(){return l(r)},get params(){return l(n)},get useIcons(){return l(m)},get limit(){return l(o)},limits:b,limitChanged:v});var _=I(f,2),E=w(_);Re(E),Be(2),x(_);var h=I(_,2),k=w(h);Re(k),Be(2),x(h),x(T),x(u),De(E,()=>l(m),C=>G(m,C)),De(k,()=>l(c),C=>G(c,C)),y(a,u),Z()}export{Dt as component,Mt as universal};
