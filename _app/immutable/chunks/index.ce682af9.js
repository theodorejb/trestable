function w(){}function z(t,e){for(const n in e)t[n]=e[n];return t}function D(t){return t()}function M(){return Object.create(null)}function g(t){t.forEach(D)}function q(t){return typeof t=="function"}function at(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function F(t){return Object.keys(t).length===0}function I(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ft(t,e,n){t.$$.on_destroy.push(I(e,n))}function dt(t,e,n,i){if(t){const r=L(t,e,n,i);return t[0](r)}}function L(t,e,n,i){return t[1]&&i?z(n.ctx.slice(),t[1](i(e))):n.ctx}function _t(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],o=Math.max(e.dirty.length,r.length);for(let u=0;u<o;u+=1)s[u]=e.dirty[u]|r[u];return s}return e.dirty|r}return e.dirty}function ht(t,e,n,i,r,s){if(r){const o=L(e,n,i,s);t.p(o,r)}}function mt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function pt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function yt(t){return t??""}const R=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;"WeakMap"in R;let $=!1;function G(){$=!0}function J(){$=!1}function K(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function Q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let c=0;c<e.length;c++){const f=e[c];f.claim_order!==void 0&&l.push(f)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const c=e[l].claim_order,f=(r>0&&e[n[r]].claim_order<=c?r+1:K(1,r,b=>e[n[b]].claim_order,c))-1;i[l]=n[f]+1;const a=f+1;n[a]=l,r=Math.max(a,r)}const s=[],o=[];let u=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(s.push(e[l-1]);u>=l;u--)o.push(e[u]);u--}for(;u>=0;u--)o.push(e[u]);s.reverse(),o.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<o.length;l++){for(;c<s.length&&o[l].claim_order>=s[c].claim_order;)c++;const f=c<s.length?s[c]:null;t.insertBefore(o[l],f)}}function U(t,e){if($){for(Q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function gt(t,e,n){$&&!n?U(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function V(t){t.parentNode&&t.parentNode.removeChild(t)}function bt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function X(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function xt(){return S(" ")}function wt(){return S("")}function $t(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function vt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Z(t){return Array.from(t.childNodes)}function tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function O(t,e,n,i,r=!1){tt(t);const s=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const u=t[o];if(e(u)){const l=n(u);return l===void 0?t.splice(o,1):t[o]=l,r||(t.claim_info.last_index=o),u}}for(let o=t.claim_info.last_index-1;o>=0;o--){const u=t[o];if(e(u)){const l=n(u);return l===void 0?t.splice(o,1):t[o]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,u}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function P(t,e,n,i){return O(t,r=>r.nodeName===e,r=>{const s=[];for(let o=0;o<r.attributes.length;o++){const u=r.attributes[o];n[u.name]||s.push(u.name)}s.forEach(o=>r.removeAttribute(o))},()=>i(e))}function Et(t,e,n){return P(t,e,n,X)}function Nt(t,e,n){return P(t,e,n,Y)}function et(t,e){return O(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>S(e),!0)}function St(t){return et(t," ")}function kt(t,e){e=""+e,t.data!==e&&(t.data=e)}function At(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Ct(t,e,n){for(let i=0;i<t.options.length;i+=1){const r=t.options[i];if(r.__value===e){r.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Mt(t){const e=t.querySelector(":checked");return e&&e.__value}function Tt(t,e,n){t.classList[n?"add":"remove"](e)}function nt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function jt(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const s=r.textContent.trim();s===`HEAD_${t}_END`?(i-=1,n.push(r)):s===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function Dt(t,e){return new t(e)}let y;function p(t){y=t}function k(){if(!y)throw new Error("Function called outside component initialization");return y}function qt(t){k().$$.on_mount.push(t)}function Lt(t){k().$$.after_update.push(t)}function Ot(){const t=k();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const s=nt(e,n,{cancelable:i});return r.slice().forEach(o=>{o.call(t,s)}),!s.defaultPrevented}return!0}}const h=[],T=[];let m=[];const j=[],B=Promise.resolve();let E=!1;function H(){E||(E=!0,B.then(W))}function Pt(){return H(),B}function N(t){m.push(t)}const v=new Set;let _=0;function W(){if(_!==0)return;const t=y;do{try{for(;_<h.length;){const e=h[_];_++,p(e),it(e.$$)}}catch(e){throw h.length=0,_=0,e}for(p(null),h.length=0,_=0;T.length;)T.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];v.has(n)||(v.add(n),n())}m.length=0}while(h.length);for(;j.length;)j.pop()();E=!1,v.clear(),p(t)}function it(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}function rt(t){const e=[],n=[];m.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),m=e}const x=new Set;let d;function Bt(){d={r:0,c:[],p:d}}function Ht(){d.r||g(d.c),d=d.p}function ot(t,e){t&&t.i&&(x.delete(t),t.i(e))}function Wt(t,e,n,i){if(t&&t.o){if(x.has(t))return;x.add(t),d.c.push(()=>{x.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const lt=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...lt];function zt(t){t&&t.c()}function Ft(t,e){t&&t.l(e)}function ct(t,e,n,i){const{fragment:r,after_update:s}=t.$$;r&&r.m(e,n),i||N(()=>{const o=t.$$.on_mount.map(D).filter(q);t.$$.on_destroy?t.$$.on_destroy.push(...o):g(o),t.$$.on_mount=[]}),s.forEach(N)}function st(t,e){const n=t.$$;n.fragment!==null&&(rt(n.after_update),g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ut(t,e){t.$$.dirty[0]===-1&&(h.push(t),H(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function It(t,e,n,i,r,s,o,u=[-1]){const l=y;p(t);const c=t.$$={fragment:null,ctx:[],props:s,update:w,not_equal:r,bound:M(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:M(),dirty:u,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let f=!1;if(c.ctx=n?n(t,e.props||{},(a,b,...A)=>{const C=A.length?A[0]:b;return c.ctx&&r(c.ctx[a],c.ctx[a]=C)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](C),f&&ut(t,a)),b}):[],c.update(),f=!0,g(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){G();const a=Z(e.target);c.fragment&&c.fragment.l(a),a.forEach(V)}else c.fragment&&c.fragment.c();e.intro&&ot(t.$$.fragment),ct(t,e.target,e.anchor,e.customElement),J(),W()}p(l)}class Rt{$destroy(){st(this,1),this.$destroy=w}$on(e,n){if(!q(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!F(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ct as A,st as B,dt as C,ht as D,mt as E,_t as F,U as G,w as H,ft as I,Tt as J,bt as K,Ot as L,N as M,Ct as N,$t as O,g as P,Mt as Q,Y as R,Rt as S,Nt as T,yt as U,z as V,pt as W,jt as X,xt as a,gt as b,St as c,Wt as d,wt as e,Ht as f,ot as g,V as h,It as i,Lt as j,X as k,Et as l,Z as m,vt as n,qt as o,At as p,S as q,et as r,at as s,Pt as t,kt as u,Bt as v,T as w,Dt as x,zt as y,Ft as z};