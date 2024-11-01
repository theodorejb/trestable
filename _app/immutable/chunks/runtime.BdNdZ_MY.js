var Dn=Array.isArray,Rn=Array.from,Sn=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,$t=Object.getOwnPropertyDescriptors,On=Object.prototype,xn=Array.prototype,Gt=Object.getPrototypeOf;const gn=()=>{};function Cn(t){return t()}function vt(t){for(var n=0;n<t.length;n++)t[n]()}const m=2,pt=4,M=8,rt=16,y=32,Z=64,S=128,U=256,p=512,I=1024,H=2048,N=4096,Y=8192,Kt=16384,ht=32768,Nn=65536,Zt=1<<18,dt=1<<19,it=Symbol("$state"),qn=Symbol("");function Et(t){return t===this.v}function zt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function yt(t){return!zt(t,this.v)}function Wt(t){throw new Error("effect_in_teardown")}function Xt(){throw new Error("effect_in_unowned_derived")}function Jt(t){throw new Error("effect_orphan")}function Qt(){throw new Error("effect_update_depth_exceeded")}function bn(){throw new Error("hydration_failed")}function Pn(t){throw new Error("props_invalid_value")}function Fn(){throw new Error("state_descriptors_fixed")}function Ln(){throw new Error("state_prototype_fixed")}function tn(){throw new Error("state_unsafe_local_read")}function nn(){throw new Error("state_unsafe_mutation")}function et(t){return{f:0,v:t,reactions:null,equals:Et,version:0}}function Mn(t){return rn(et(t))}function Hn(t,n=!1){var e;const r=et(t);return n||(r.equals=yt),f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function rn(t){return o!==null&&o.f&m&&(E===null?yn([t]):E.push(t)),t}function Yn(t,n){return o!==null&&lt()&&o.f&(m|rt)&&(E===null||!E.includes(t))&&nn(),en(t,n)}function en(t,n){return t.equals(n)||(t.v=n,t.version=Ht(),wt(t,I),lt()&&u!==null&&u.f&p&&!(u.f&y)&&(_!==null&&_.includes(t)?(w(u,I),W(u)):k===null?wn([t]):k.push(t))),n}function wt(t,n){var r=t.reactions;if(r!==null)for(var e=lt(),s=r.length,a=0;a<s;a++){var l=r[a],i=l.f;i&I||!e&&l===u||(w(l,n),i&(p|S)&&(i&m?wt(l,H):W(l)))}}const jn=1,Bn=2,Un=4,Vn=8,$n=16,Gn=1,Kn=2,Zn=4,zn=8,Wn=16,Xn=1,Jn=2,sn="[",an="[!",ln="]",Tt={},Qn=Symbol();function mt(t){console.warn("hydration_mismatch")}let R=!1;function tr(t){R=t}let d;function P(t){if(t===null)throw mt(),Tt;return d=t}function nr(){return P(O(d))}function rr(t){if(R){if(O(d)!==null)throw mt(),Tt;d=t}}function er(t=1){if(R){for(var n=t,r=d;n--;)r=O(r);d=r}}function sr(){for(var t=0,n=d;;){if(n.nodeType===8){var r=n.data;if(r===ln){if(t===0)return n;t-=1}else(r===sn||r===an)&&(t+=1)}var e=O(n);n.remove(),n=e}}var ft,un,At,kt;function ar(){if(ft===void 0){ft=window,un=document;var t=Element.prototype,n=Node.prototype;At=ot(n,"firstChild").get,kt=ot(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function X(t=""){return document.createTextNode(t)}function J(t){return At.call(t)}function O(t){return kt.call(t)}function lr(t,n){if(!R)return J(t);var r=J(d);if(r===null)r=d.appendChild(X());else if(n&&r.nodeType!==3){var e=X();return r==null||r.before(e),P(e),e}return P(r),r}function ur(t,n){if(!R){var r=J(t);return r instanceof Comment&&r.data===""?O(r):r}return d}function or(t,n=1,r=!1){let e=R?d:t;for(;n--;)e=O(e);if(!R)return e;var s=e.nodeType;if(r&&s!==3){var a=X();return e==null||e.before(a),P(a),a}return P(e),e}function ir(t){t.textContent=""}function on(t){var n=m|I;u===null?n|=S:u.f|=dt;const r={children:null,ctx:f,deps:null,equals:Et,f:n,fn:t,reactions:null,v:null,version:0,parent:u};if(o!==null&&o.f&m){var e=o;(e.children??(e.children=[])).push(r)}return r}function fr(t){const n=on(t);return n.equals=yt,n}function It(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&m?st(e):b(e)}}}function Dt(t){var n,r=u;K(t.parent);try{It(t),n=Yt(t)}finally{K(r)}return n}function Rt(t){var n=Dt(t),r=(x||t.f&S)&&t.deps!==null?H:p;w(t,r),t.equals(n)||(t.v=n,t.version=Ht())}function st(t){It(t),L(t,0),w(t,Y),t.v=t.children=t.deps=t.ctx=t.reactions=null}function St(t){u===null&&o===null&&Jt(),o!==null&&o.f&S&&Xt(),at&&Wt()}function fn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function q(t,n,r,e=!0){var s=(t&Z)!==0,a=u,l={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|I,first:null,fn:n,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var i=g;try{_t(!0),z(l),l.f|=Kt}catch(c){throw b(l),c}finally{_t(i)}}else n!==null&&W(l);var T=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&dt)===0;if(!T&&!s&&e&&(a!==null&&fn(l,a),o!==null&&o.f&m)){var A=o;(A.children??(A.children=[])).push(l)}return l}function _r(t){const n=q(M,null,!1);return w(n,p),n.teardown=t,n}function cr(t){St();var n=u!==null&&(u.f&y)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:o})}else{var e=Ot(t);return e}}function vr(t){return St(),_n(t)}function pr(t){const n=q(Z,t,!0);return()=>{b(n)}}function Ot(t){return q(pt,t,!1)}function _n(t){return q(M,t,!0)}function hr(t){return cn(t)}function cn(t,n=0){return q(M|rt|n,t,!0)}function dr(t,n=!0){return q(M|y,t,!0,n)}function xt(t){var n=t.teardown;if(n!==null){const r=at,e=o;ct(!0),G(null);try{n.call(null)}finally{ct(r),G(e)}}}function gt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)st(n[r])}}function Ct(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;b(r,n),r=e}}function vn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&y||b(n),n=r}}function b(t,n=!0){var r=!1;if((n||t.f&Zt)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var a=e===s?null:O(e);e.remove(),e=a}r=!0}Ct(t,n&&!r),gt(t),L(t,0),w(t,Y);var l=t.transitions;if(l!==null)for(const T of l)T.stop();xt(t);var i=t.parent;i!==null&&i.first!==null&&Nt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Nt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Er(t,n){var r=[];qt(t,r,!0),pn(r,()=>{b(t),n&&n()})}function pn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function qt(t,n,r){if(!(t.f&N)){if(t.f^=N,t.transitions!==null)for(const l of t.transitions)(l.is_global||r)&&n.push(l);for(var e=t.first;e!==null;){var s=e.next,a=(e.f&ht)!==0||(e.f&y)!==0;qt(e,n,a?r:!1),e=s}}}function yr(t){bt(t,!0)}function bt(t,n){if(t.f&N){j(t)&&z(t),t.f^=N;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&ht)!==0||(r.f&y)!==0;bt(r,s?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}const hn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let V=!1,$=!1,Q=[],tt=[];function Pt(){V=!1;const t=Q.slice();Q=[],vt(t)}function Ft(){$=!1;const t=tt.slice();tt=[],vt(t)}function wr(t){V||(V=!0,queueMicrotask(Pt)),Q.push(t)}function Tr(t){$||($=!0,hn(Ft)),tt.push(t)}function dn(){V&&Pt(),$&&Ft()}const Lt=0,En=1;let B=Lt,F=!1,g=!1,at=!1;function _t(t){g=t}function ct(t){at=t}let D=[],C=0;let o=null;function G(t){o=t}let u=null;function K(t){u=t}let E=null;function yn(t){E=t}let _=null,h=0,k=null;function wn(t){k=t}let Mt=0,x=!1,f=null;function Ht(){return++Mt}function lt(){return f!==null&&f.l===null}function j(t){var l,i;var n=t.f;if(n&I)return!0;if(n&H){var r=t.deps,e=(n&S)!==0;if(r!==null){var s;if(n&U){for(s=0;s<r.length;s++)((l=r[s]).reactions??(l.reactions=[])).push(t);t.f^=U}for(s=0;s<r.length;s++){var a=r[s];if(j(a)&&Rt(a),e&&u!==null&&!x&&!((i=a==null?void 0:a.reactions)!=null&&i.includes(t))&&(a.reactions??(a.reactions=[])).push(t),a.version>t.version)return!0}}e||w(t,p)}return!1}function Tn(t,n,r){throw t}function Yt(t){var ut;var n=_,r=h,e=k,s=o,a=x,l=E,i=f,T=t.f;_=null,h=0,k=null,o=T&(y|Z)?null:t,x=!g&&(T&S)!==0,E=null,f=t.ctx;try{var A=(0,t.fn)(),c=t.deps;if(_!==null){var v;if(L(t,h),c!==null&&h>0)for(c.length=h+_.length,v=0;v<_.length;v++)c[h+v]=_[v];else t.deps=c=_;if(!x)for(v=h;v<c.length;v++)((ut=c[v]).reactions??(ut.reactions=[])).push(t)}else c!==null&&h<c.length&&(L(t,h),c.length=h);return A}finally{_=n,h=r,k=e,o=s,x=a,E=l,f=i}}function mn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&m&&(_===null||!_.includes(n))&&(w(n,H),n.f&(S|U)||(n.f^=U),L(n,0))}function L(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)mn(t,r[e])}function z(t){var n=t.f;if(!(n&Y)){w(t,p);var r=u;u=t;try{n&rt?vn(t):Ct(t),gt(t),xt(t);var e=Yt(t);t.teardown=typeof e=="function"?e:null,t.version=Mt}catch(s){Tn(s)}finally{u=r}}}function jt(){C>1e3&&(C=0,Qt()),C++}function Bt(t){var n=t.length;if(n!==0){jt();var r=g;g=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&p||(s.f^=p);var a=[];Ut(s,a),An(a)}}finally{g=r}}}function An(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];!(e.f&(Y|N))&&j(e)&&(z(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Nt(e):e.fn=null))}}function kn(){if(F=!1,C>1001)return;const t=D;D=[],Bt(t),F||(C=0)}function W(t){B===Lt&&(F||(F=!0,queueMicrotask(kn)));for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(Z|y)){if(!(r&p))return;n.f^=p}}D.push(n)}function Ut(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,a=(s&y)!==0,l=a&&(s&p)!==0;if(!l&&!(s&N))if(s&M){a?r.f^=p:j(r)&&z(r);var i=r.first;if(i!==null){r=i;continue}}else s&pt&&e.push(r);var T=r.next;if(T===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var A=v.next;if(A!==null){r=A;continue t}v=v.parent}}r=T}for(var c=0;c<e.length;c++)i=e[c],n.push(i),Ut(i,n)}function Vt(t){var n=B,r=D;try{jt();const s=[];B=En,D=s,F=!1,Bt(r);var e=t==null?void 0:t();return dn(),(D.length>0||s.length>0)&&Vt(),C=0,e}finally{B=n,D=r}}async function mr(){await Promise.resolve(),Vt()}function Ar(t){var i;var n=t.f,r=(n&m)!==0;if(r&&n&Y){var e=Dt(t);return st(t),e}if(o!==null){E!==null&&E.includes(t)&&tn();var s=o.deps;_===null&&s!==null&&s[h]===t?h++:_===null?_=[t]:_.push(t),k!==null&&u!==null&&u.f&p&&!(u.f&y)&&k.includes(t)&&(w(u,I),W(u))}else if(r&&t.deps===null){var a=t,l=a.parent;l!==null&&!((i=l.deriveds)!=null&&i.includes(a))&&(l.deriveds??(l.deriveds=[])).push(a)}return r&&(a=t,j(a)&&Rt(a)),t.v}function kr(t){const n=o;try{return o=null,t()}finally{o=n}}const In=~(I|H|p);function w(t,n){t.f=t.f&In|n}function Ir(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},n||(f.l={s:null,u:null,r1:[],r2:et(!1)})}function Dr(t){const n=f;if(n!==null){const l=n.e;if(l!==null){var r=u,e=o;n.e=null;try{for(var s=0;s<l.length;s++){var a=l[s];K(a.effect),G(a.reaction),Ot(a.fn)}}finally{K(r),G(e)}}f=n.p,n.m=!0}return{}}function Rr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(it in t)nt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&it in r&&nt(r)}}}function nt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{nt(t[e],n)}catch{}const r=Gt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=$t(r);for(let s in e){const a=e[s].get;if(a)try{a.call(t)}catch{}}}}}export{Wn as $,Yn as A,ot as B,u as C,Ln as D,ht as E,Gt as F,Dn as G,yr as H,Er as I,nr as J,an as K,sr as L,P as M,tr as N,Pn as O,Nn as P,Zn as Q,yt as R,it as S,y as T,Qn as U,Z as V,K as W,Gn as X,Kn as Y,zn as Z,fr as _,dr as a,Hn as a0,X as a1,J as a2,Xn as a3,Jn as a4,Sn as a5,G as a6,o as a7,Zt as a8,sn as a9,qn as aA,$t as aB,un as aC,er as aD,zt as aE,O as aa,ar as ab,Tt as ac,ln as ad,mt as ae,bn as af,ir as ag,Rn as ah,pr as ai,_r as aj,Ot as ak,_n as al,wr as am,Vt as an,mr as ao,Mn as ap,Un as aq,N as ar,jn as as,en as at,Bn as au,$n as av,qt as aw,pn as ax,Vn as ay,Tr as az,cn as b,d as c,b as d,Dr as e,ur as f,cr as g,R as h,f as i,kr as j,vt as k,Ar as l,Rr as m,gn as n,on as o,Ir as p,lr as q,Cn as r,rr as s,hr as t,vr as u,or as v,On as w,xn as x,et as y,Fn as z};
