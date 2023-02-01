import{s as ie,r as ge,k as Ge,b as Ie,c as fe,h as Ve,j as Z,a as p,l as Je,m as Ke,n as Fe,o as Ee,p as We,q as Qe,t as Ze,v as et,w as tt,x as ze}from"./index.69fccaa7.js";import{B as rt,c as nt}from"./iconBase.8a0b8599.js";import{b as ot,c as it}from"./index.esm.44afc6f1.js";const at=ie.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 500px;
  color: white;
  .favourite {
    position: absolute;
    right: 0.1rem;
    top: 0.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    border: none;
    background-color: transparent;
    background-color: rgba(255, 255, 255, 0.2);
    // margin-left: 0.2rem;
    height: 20px;
    width: 20px;
    border-radius: 50%;

    .heart {
      // color: #ef4444;
      color: rgba(255, 255, 255, 0.8);
    }
    .liked {
      color: #ef4444;
    }
  }
  .item {
    margin-left: 0.5rem;
    margin-top: 0.2rem;
  }
  .price {
    margin-top: 0.2rem;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.8);
  }
  img {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 1200px) {
    height: 250px;
  }
  @media (min-width: 1201px) {
    height: 400px;
  }
  @media (max-width: 450px) {
    .item {
      font-size: 10px;
    }
    .price {
      font-size: 8px;
    }
    .heart,
    .liked {
      transform: scale(0.8);
    }
  }

  @media (max-width: 300px) {
    height: 200px;
  }
`,st=ie.div`

 position: absolute;
   height:30%;
   
  bottom: 0;
  left: 0;
  right:0;
  display: flex;
  flex-direction: column;
  justify-items:stretch; 
  justify-content:flex-start;
  
  background-image: linear-gradient(to right, black, rgb(0, 0, 0, 0.1));

    .cardbtn {
      // width:100%;
      display:block;
      position:absolute;
      bottom:0.2rem;
      right:0;
      
      color: white;
      border: 0;
      background-image: linear-gradient(to right, black, rgb(0, 0, 0, 0.7)); 

      &:hover{
        color:white;
        background-image: linear-gradient(to right, black, rgb(0, 0, 0, 0.1));
        background-color:none;
        cursor:pointer;
      }
    }
    @media (min-width:1200px){
      height:17%;
    }
  }
`,ct=new Intl.NumberFormat(void 0,{currency:"CAD",style:"currency"});function lt(j){return ct.format(j)}var $e={exports:{}};(()=>{var j={296:(l,u,a)=>{var Y=/^\s+|\s+$/g,W=/^[-+]0x[0-9a-f]+$/i,$=/^0b[01]+$/i,w=/^0o[0-7]+$/i,D=parseInt,ae=typeof a.g=="object"&&a.g&&a.g.Object===Object&&a.g,pe=typeof self=="object"&&self&&self.Object===Object&&self,le=ae||pe||Function("return this")(),de=Object.prototype.toString,ce=Math.max,ye=Math.min,X=function(){return le.Date.now()};function M(h){var f=typeof h;return!!h&&(f=="object"||f=="function")}function te(h){if(typeof h=="number")return h;if(function(k){return typeof k=="symbol"||function(L){return!!L&&typeof L=="object"}(k)&&de.call(k)=="[object Symbol]"}(h))return NaN;if(M(h)){var f=typeof h.valueOf=="function"?h.valueOf():h;h=M(f)?f+"":f}if(typeof h!="string")return h===0?h:+h;h=h.replace(Y,"");var S=$.test(h);return S||w.test(h)?D(h.slice(2),S?2:8):W.test(h)?NaN:+h}l.exports=function(h,f,S){var k,L,z,G,T,N,V=0,J=!1,U=!1,H=!0;if(typeof h!="function")throw new TypeError("Expected a function");function I(x){var F=k,Q=L;return k=L=void 0,V=x,G=h.apply(Q,F)}function q(x){return V=x,T=setTimeout(re,f),J?I(x):G}function K(x){var F=x-N;return N===void 0||F>=f||F<0||U&&x-V>=z}function re(){var x=X();if(K(x))return ne(x);T=setTimeout(re,function(F){var Q=f-(F-N);return U?ye(Q,z-(F-V)):Q}(x))}function ne(x){return T=void 0,H&&k?I(x):(k=L=void 0,G)}function se(){var x=X(),F=K(x);if(k=arguments,L=this,N=x,F){if(T===void 0)return q(N);if(U)return T=setTimeout(re,f),I(N)}return T===void 0&&(T=setTimeout(re,f)),G}return f=te(f)||0,M(S)&&(J=!!S.leading,z=(U="maxWait"in S)?ce(te(S.maxWait)||0,f):z,H="trailing"in S?!!S.trailing:H),se.cancel=function(){T!==void 0&&clearTimeout(T),V=0,k=N=L=T=void 0},se.flush=function(){return T===void 0?G:ne(X())},se}},96:(l,u,a)=>{var Y="Expected a function",W=/^\s+|\s+$/g,$=/^[-+]0x[0-9a-f]+$/i,w=/^0b[01]+$/i,D=/^0o[0-7]+$/i,ae=parseInt,pe=typeof a.g=="object"&&a.g&&a.g.Object===Object&&a.g,le=typeof self=="object"&&self&&self.Object===Object&&self,de=pe||le||Function("return this")(),ce=Object.prototype.toString,ye=Math.max,X=Math.min,M=function(){return de.Date.now()};function te(f){var S=typeof f;return!!f&&(S=="object"||S=="function")}function h(f){if(typeof f=="number")return f;if(function(L){return typeof L=="symbol"||function(z){return!!z&&typeof z=="object"}(L)&&ce.call(L)=="[object Symbol]"}(f))return NaN;if(te(f)){var S=typeof f.valueOf=="function"?f.valueOf():f;f=te(S)?S+"":S}if(typeof f!="string")return f===0?f:+f;f=f.replace(W,"");var k=w.test(f);return k||D.test(f)?ae(f.slice(2),k?2:8):$.test(f)?NaN:+f}l.exports=function(f,S,k){var L=!0,z=!0;if(typeof f!="function")throw new TypeError(Y);return te(k)&&(L="leading"in k?!!k.leading:L,z="trailing"in k?!!k.trailing:z),function(G,T,N){var V,J,U,H,I,q,K=0,re=!1,ne=!1,se=!0;if(typeof G!="function")throw new TypeError(Y);function x(C){var A=V,be=J;return V=J=void 0,K=C,H=G.apply(be,A)}function F(C){return K=C,I=setTimeout(me,T),re?x(C):H}function Q(C){var A=C-q;return q===void 0||A>=T||A<0||ne&&C-K>=U}function me(){var C=M();if(Q(C))return we(C);I=setTimeout(me,function(A){var be=T-(A-q);return ne?X(be,U-(A-K)):be}(C))}function we(C){return I=void 0,se&&V?x(C):(V=J=void 0,H)}function he(){var C=M(),A=Q(C);if(V=arguments,J=this,q=C,A){if(I===void 0)return F(q);if(ne)return I=setTimeout(me,T),x(q)}return I===void 0&&(I=setTimeout(me,T)),H}return T=h(T)||0,te(N)&&(re=!!N.leading,U=(ne="maxWait"in N)?ye(h(N.maxWait)||0,T):U,se="trailing"in N?!!N.trailing:se),he.cancel=function(){I!==void 0&&clearTimeout(I),K=0,V=q=J=I=void 0},he.flush=function(){return I===void 0?H:we(M())},he}(f,S,{leading:L,maxWait:S,trailing:z})}},703:(l,u,a)=>{var Y=a(414);function W(){}function $(){}$.resetWarningCache=W,l.exports=function(){function w(pe,le,de,ce,ye,X){if(X!==Y){var M=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw M.name="Invariant Violation",M}}function D(){return w}w.isRequired=w;var ae={array:w,bool:w,func:w,number:w,object:w,string:w,symbol:w,any:w,arrayOf:D,element:w,elementType:w,instanceOf:D,node:w,objectOf:D,oneOf:D,oneOfType:D,shape:D,exact:D,checkPropTypes:$,resetWarningCache:W};return ae.PropTypes=ae,ae}},697:(l,u,a)=>{l.exports=a(703)()},414:l=>{l.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},y={};function m(l){var u=y[l];if(u!==void 0)return u.exports;var a=y[l]={exports:{}};return j[l](a,a.exports,m),a.exports}m.n=l=>{var u=l&&l.__esModule?()=>l.default:()=>l;return m.d(u,{a:u}),u},m.d=(l,u)=>{for(var a in u)m.o(u,a)&&!m.o(l,a)&&Object.defineProperty(l,a,{enumerable:!0,get:u[a]})},m.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch{if(typeof window=="object")return window}}(),m.o=(l,u)=>Object.prototype.hasOwnProperty.call(l,u),m.r=l=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})};var ee={};(()=>{m.r(ee),m.d(ee,{LazyLoadComponent:()=>Ce,LazyLoadImage:()=>Xe,trackWindowScroll:()=>re});const l=ge.exports;var u=m.n(l),a=m(697);const Y=Ge.exports;var W=m.n(Y);function $(){return typeof window<"u"&&"IntersectionObserver"in window&&"isIntersecting"in window.IntersectionObserverEntry.prototype}function w(r){return(w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(r)}function D(r,e){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);e&&(o=o.filter(function(_){return Object.getOwnPropertyDescriptor(r,_).enumerable})),i.push.apply(i,o)}return i}function ae(r,e,i){return e in r?Object.defineProperty(r,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[e]=i,r}function pe(r,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,o.key,o)}}function le(r,e){return(le=Object.setPrototypeOf||function(i,o){return i.__proto__=o,i})(r,e)}function de(r,e){if(e&&(w(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}(r)}function ce(r){return(ce=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(r)}var ye=function(r){r.forEach(function(e){e.isIntersecting&&e.target.onVisible()})},X={},M=function(r){(function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&le(t,n)})(v,r);var e,i,o,_,oe=(o=v,_=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var t,n=ce(o);if(_){var s=ce(this).constructor;t=Reflect.construct(n,arguments,s)}else t=n.apply(this,arguments);return de(this,t)});function v(t){var n;if(function(c,d){if(!(c instanceof d))throw new TypeError("Cannot call a class as a function")}(this,v),(n=oe.call(this,t)).supportsObserver=!t.scrollPosition&&t.useIntersectionObserver&&$(),n.supportsObserver){var s=t.threshold;n.observer=function(c){return X[c]=X[c]||new IntersectionObserver(ye,{rootMargin:c+"px"}),X[c]}(s)}return n}return e=v,(i=[{key:"componentDidMount",value:function(){this.placeholder&&this.observer&&(this.placeholder.onVisible=this.props.onVisible,this.observer.observe(this.placeholder)),this.supportsObserver||this.updateVisibility()}},{key:"componentWillUnmount",value:function(){this.observer&&this.placeholder&&this.observer.unobserve(this.placeholder)}},{key:"componentDidUpdate",value:function(){this.supportsObserver||this.updateVisibility()}},{key:"getPlaceholderBoundingBox",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.props.scrollPosition,n=this.placeholder.getBoundingClientRect(),s=W().findDOMNode(this.placeholder).style,c={left:parseInt(s.getPropertyValue("margin-left"),10)||0,top:parseInt(s.getPropertyValue("margin-top"),10)||0};return{bottom:t.y+n.bottom+c.top,left:t.x+n.left+c.left,right:t.x+n.right+c.left,top:t.y+n.top+c.top}}},{key:"isPlaceholderInViewport",value:function(){if(typeof window>"u"||!this.placeholder)return!1;var t=this.props,n=t.scrollPosition,s=t.threshold,c=this.getPlaceholderBoundingBox(n),d=n.y+window.innerHeight,b=n.x,O=n.x+window.innerWidth,P=n.y;return Boolean(P-s<=c.bottom&&d+s>=c.top&&b-s<=c.right&&O+s>=c.left)}},{key:"updateVisibility",value:function(){this.isPlaceholderInViewport()&&this.props.onVisible()}},{key:"render",value:function(){var t=this,n=this.props,s=n.className,c=n.height,d=n.placeholder,b=n.style,O=n.width;if(d&&typeof d.type!="function")return u().cloneElement(d,{ref:function(g){return t.placeholder=g}});var P=function(g){for(var R=1;R<arguments.length;R++){var E=arguments[R]!=null?arguments[R]:{};R%2?D(Object(E),!0).forEach(function(B){ae(g,B,E[B])}):Object.getOwnPropertyDescriptors?Object.defineProperties(g,Object.getOwnPropertyDescriptors(E)):D(Object(E)).forEach(function(B){Object.defineProperty(g,B,Object.getOwnPropertyDescriptor(E,B))})}return g}({display:"inline-block"},b);return O!==void 0&&(P.width=O),c!==void 0&&(P.height=c),u().createElement("span",{className:s,ref:function(g){return t.placeholder=g},style:P},d)}}])&&pe(e.prototype,i),v}(u().Component);M.propTypes={onVisible:a.PropTypes.func.isRequired,className:a.PropTypes.string,height:a.PropTypes.oneOfType([a.PropTypes.number,a.PropTypes.string]),placeholder:a.PropTypes.element,threshold:a.PropTypes.number,useIntersectionObserver:a.PropTypes.bool,scrollPosition:a.PropTypes.shape({x:a.PropTypes.number.isRequired,y:a.PropTypes.number.isRequired}),width:a.PropTypes.oneOfType([a.PropTypes.number,a.PropTypes.string])},M.defaultProps={className:"",placeholder:null,threshold:100,useIntersectionObserver:!0};const te=M;var h=m(296),f=m.n(h),S=m(96),k=m.n(S),L=function(r){var e=getComputedStyle(r,null);return e.getPropertyValue("overflow")+e.getPropertyValue("overflow-y")+e.getPropertyValue("overflow-x")};const z=function(r){if(!(r instanceof HTMLElement))return window;for(var e=r;e&&e instanceof HTMLElement;){if(/(scroll|auto)/.test(L(e)))return e;e=e.parentNode}return window};function G(r){return(G=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(r)}var T=["delayMethod","delayTime"];function N(){return(N=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])}return r}).apply(this,arguments)}function V(r,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,o.key,o)}}function J(r,e){return(J=Object.setPrototypeOf||function(i,o){return i.__proto__=o,i})(r,e)}function U(r,e){if(e&&(G(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return H(r)}function H(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function I(r){return(I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(r)}var q=function(){return typeof window>"u"?0:window.scrollX||window.pageXOffset},K=function(){return typeof window>"u"?0:window.scrollY||window.pageYOffset};const re=function(r){var e=function(i){(function(s,c){if(typeof c!="function"&&c!==null)throw new TypeError("Super expression must either be null or a function");s.prototype=Object.create(c&&c.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),c&&J(s,c)})(n,i);var o,_,oe,v,t=(oe=n,v=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var s,c=I(oe);if(v){var d=I(this).constructor;s=Reflect.construct(c,arguments,d)}else s=c.apply(this,arguments);return U(this,s)});function n(s){var c;if(function(b,O){if(!(b instanceof O))throw new TypeError("Cannot call a class as a function")}(this,n),(c=t.call(this,s)).useIntersectionObserver=s.useIntersectionObserver&&$(),c.useIntersectionObserver)return U(c);var d=c.onChangeScroll.bind(H(c));return s.delayMethod==="debounce"?c.delayedScroll=f()(d,s.delayTime):s.delayMethod==="throttle"&&(c.delayedScroll=k()(d,s.delayTime)),c.state={scrollPosition:{x:q(),y:K()}},c.baseComponentRef=u().createRef(),c}return o=n,(_=[{key:"componentDidMount",value:function(){this.addListeners()}},{key:"componentWillUnmount",value:function(){this.removeListeners()}},{key:"componentDidUpdate",value:function(){typeof window>"u"||this.useIntersectionObserver||z(W().findDOMNode(this.baseComponentRef.current))!==this.scrollElement&&(this.removeListeners(),this.addListeners())}},{key:"addListeners",value:function(){typeof window>"u"||this.useIntersectionObserver||(this.scrollElement=z(W().findDOMNode(this.baseComponentRef.current)),this.scrollElement.addEventListener("scroll",this.delayedScroll,{passive:!0}),window.addEventListener("resize",this.delayedScroll,{passive:!0}),this.scrollElement!==window&&window.addEventListener("scroll",this.delayedScroll,{passive:!0}))}},{key:"removeListeners",value:function(){typeof window>"u"||this.useIntersectionObserver||(this.scrollElement.removeEventListener("scroll",this.delayedScroll),window.removeEventListener("resize",this.delayedScroll),this.scrollElement!==window&&window.removeEventListener("scroll",this.delayedScroll))}},{key:"onChangeScroll",value:function(){this.useIntersectionObserver||this.setState({scrollPosition:{x:q(),y:K()}})}},{key:"render",value:function(){var s=this.props,c=(s.delayMethod,s.delayTime,function(b,O){if(b==null)return{};var P,g,R=function(B,ve){if(B==null)return{};var ue,xe,Be={},Me=Object.keys(B);for(xe=0;xe<Me.length;xe++)ue=Me[xe],ve.indexOf(ue)>=0||(Be[ue]=B[ue]);return Be}(b,O);if(Object.getOwnPropertySymbols){var E=Object.getOwnPropertySymbols(b);for(g=0;g<E.length;g++)P=E[g],O.indexOf(P)>=0||Object.prototype.propertyIsEnumerable.call(b,P)&&(R[P]=b[P])}return R}(s,T)),d=this.useIntersectionObserver?null:this.state.scrollPosition;return u().createElement(r,N({forwardRef:this.baseComponentRef,scrollPosition:d},c))}}])&&V(o.prototype,_),n}(u().Component);return e.propTypes={delayMethod:a.PropTypes.oneOf(["debounce","throttle"]),delayTime:a.PropTypes.number,useIntersectionObserver:a.PropTypes.bool},e.defaultProps={delayMethod:"throttle",delayTime:300,useIntersectionObserver:!0},e};function ne(r){return(ne=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(r)}function se(r,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,o.key,o)}}function x(r,e){return(x=Object.setPrototypeOf||function(i,o){return i.__proto__=o,i})(r,e)}function F(r,e){if(e&&(ne(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}(r)}function Q(r){return(Q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(r)}var me=function(r){(function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&x(t,n)})(v,r);var e,i,o,_,oe=(o=v,_=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var t,n=Q(o);if(_){var s=Q(this).constructor;t=Reflect.construct(n,arguments,s)}else t=n.apply(this,arguments);return F(this,t)});function v(t){return function(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}(this,v),oe.call(this,t)}return e=v,(i=[{key:"render",value:function(){return u().createElement(te,this.props)}}])&&se(e.prototype,i),v}(u().Component);const we=re(me);function he(r){return(he=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(r)}function C(r,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,o.key,o)}}function A(r,e){return(A=Object.setPrototypeOf||function(i,o){return i.__proto__=o,i})(r,e)}function be(r,e){if(e&&(he(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Le(r)}function Le(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Pe(r){return(Pe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(r)}var je=function(r){(function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&A(t,n)})(v,r);var e,i,o,_,oe=(o=v,_=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var t,n=Pe(o);if(_){var s=Pe(this).constructor;t=Reflect.construct(n,arguments,s)}else t=n.apply(this,arguments);return be(this,t)});function v(t){var n;(function(O,P){if(!(O instanceof P))throw new TypeError("Cannot call a class as a function")})(this,v),n=oe.call(this,t);var s=t.afterLoad,c=t.beforeLoad,d=t.scrollPosition,b=t.visibleByDefault;return n.state={visible:b},b&&(c(),s()),n.onVisible=n.onVisible.bind(Le(n)),n.isScrollTracked=Boolean(d&&Number.isFinite(d.x)&&d.x>=0&&Number.isFinite(d.y)&&d.y>=0),n}return e=v,(i=[{key:"componentDidUpdate",value:function(t,n){n.visible!==this.state.visible&&this.props.afterLoad()}},{key:"onVisible",value:function(){this.props.beforeLoad(),this.setState({visible:!0})}},{key:"render",value:function(){if(this.state.visible)return this.props.children;var t=this.props,n=t.className,s=t.delayMethod,c=t.delayTime,d=t.height,b=t.placeholder,O=t.scrollPosition,P=t.style,g=t.threshold,R=t.useIntersectionObserver,E=t.width;return this.isScrollTracked||R&&$()?u().createElement(te,{className:n,height:d,onVisible:this.onVisible,placeholder:b,scrollPosition:O,style:P,threshold:g,useIntersectionObserver:R,width:E}):u().createElement(we,{className:n,delayMethod:s,delayTime:c,height:d,onVisible:this.onVisible,placeholder:b,style:P,threshold:g,width:E})}}])&&C(e.prototype,i),v}(u().Component);je.propTypes={afterLoad:a.PropTypes.func,beforeLoad:a.PropTypes.func,useIntersectionObserver:a.PropTypes.bool,visibleByDefault:a.PropTypes.bool},je.defaultProps={afterLoad:function(){return{}},beforeLoad:function(){return{}},useIntersectionObserver:!0,visibleByDefault:!1};const Ce=je;function _e(r){return(_e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(r)}var He=["afterLoad","beforeLoad","delayMethod","delayTime","effect","placeholder","placeholderSrc","scrollPosition","threshold","useIntersectionObserver","visibleByDefault","wrapperClassName","wrapperProps"];function Ne(r,e){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);e&&(o=o.filter(function(_){return Object.getOwnPropertyDescriptor(r,_).enumerable})),i.push.apply(i,o)}return i}function Re(r){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?Ne(Object(i),!0).forEach(function(o){qe(r,o,i[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):Ne(Object(i)).forEach(function(o){Object.defineProperty(r,o,Object.getOwnPropertyDescriptor(i,o))})}return r}function qe(r,e,i){return e in r?Object.defineProperty(r,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[e]=i,r}function Te(){return(Te=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(r[o]=i[o])}return r}).apply(this,arguments)}function Ae(r,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(r,o.key,o)}}function De(r,e){return(De=Object.setPrototypeOf||function(i,o){return i.__proto__=o,i})(r,e)}function Ye(r,e){if(e&&(_e(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return function(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}(r)}function Se(r){return(Se=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(r)}var ke=function(r){(function(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&De(t,n)})(v,r);var e,i,o,_,oe=(o=v,_=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}(),function(){var t,n=Se(o);if(_){var s=Se(this).constructor;t=Reflect.construct(n,arguments,s)}else t=n.apply(this,arguments);return Ye(this,t)});function v(t){var n;return function(s,c){if(!(s instanceof c))throw new TypeError("Cannot call a class as a function")}(this,v),(n=oe.call(this,t)).state={loaded:!1},n}return e=v,(i=[{key:"onImageLoad",value:function(){var t=this;return this.state.loaded?null:function(){t.props.afterLoad(),t.setState({loaded:!0})}}},{key:"getImg",value:function(){var t=this.props,n=(t.afterLoad,t.beforeLoad,t.delayMethod,t.delayTime,t.effect,t.placeholder,t.placeholderSrc,t.scrollPosition,t.threshold,t.useIntersectionObserver,t.visibleByDefault,t.wrapperClassName,t.wrapperProps,function(s,c){if(s==null)return{};var d,b,O=function(g,R){if(g==null)return{};var E,B,ve={},ue=Object.keys(g);for(B=0;B<ue.length;B++)E=ue[B],R.indexOf(E)>=0||(ve[E]=g[E]);return ve}(s,c);if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(s);for(b=0;b<P.length;b++)d=P[b],c.indexOf(d)>=0||Object.prototype.propertyIsEnumerable.call(s,d)&&(O[d]=s[d])}return O}(t,He));return u().createElement("img",Te({onLoad:this.onImageLoad()},n))}},{key:"getLazyLoadImage",value:function(){var t=this.props,n=t.beforeLoad,s=t.className,c=t.delayMethod,d=t.delayTime,b=t.height,O=t.placeholder,P=t.scrollPosition,g=t.style,R=t.threshold,E=t.useIntersectionObserver,B=t.visibleByDefault,ve=t.width;return u().createElement(Ce,{beforeLoad:n,className:s,delayMethod:c,delayTime:d,height:b,placeholder:O,scrollPosition:P,style:g,threshold:R,useIntersectionObserver:E,visibleByDefault:B,width:ve},this.getImg())}},{key:"getWrappedLazyLoadImage",value:function(t){var n=this.props,s=n.effect,c=n.height,d=n.placeholderSrc,b=n.width,O=n.wrapperClassName,P=n.wrapperProps,g=this.state.loaded,R=g?" lazy-load-image-loaded":"",E=g||!d?{}:{backgroundImage:"url(".concat(d,")"),backgroundSize:"100% 100%"};return u().createElement("span",Te({className:O+" lazy-load-image-background "+s+R,style:Re(Re({},E),{},{color:"transparent",display:"inline-block",height:c,width:b})},P),t)}},{key:"render",value:function(){var t=this.props,n=t.effect,s=t.placeholderSrc,c=t.visibleByDefault,d=t.wrapperClassName,b=t.wrapperProps,O=this.getLazyLoadImage();return(n||s)&&!c||d||b?this.getWrappedLazyLoadImage(O):O}}])&&Ae(e.prototype,i),v}(u().Component);ke.propTypes={afterLoad:a.PropTypes.func,beforeLoad:a.PropTypes.func,delayMethod:a.PropTypes.string,delayTime:a.PropTypes.number,effect:a.PropTypes.string,placeholderSrc:a.PropTypes.string,threshold:a.PropTypes.number,useIntersectionObserver:a.PropTypes.bool,visibleByDefault:a.PropTypes.bool,wrapperClassName:a.PropTypes.string,wrapperProps:a.PropTypes.object},ke.defaultProps={afterLoad:function(){return{}},beforeLoad:function(){return{}},delayMethod:"throttle",delayTime:300,effect:"",placeholderSrc:null,threshold:100,useIntersectionObserver:!0,visibleByDefault:!1,wrapperClassName:""};const Xe=ke})(),$e.exports=ee})();const Ue=({product:j})=>{const y=Ie(),{name:m,price:ee,imageUrl:l}=j,u=fe(Ve),{currentUser:a}=fe(D=>D.user),[Y,W]=ge.exports.useState(!1),$=()=>{!a||y(Je(Ke(u,j)))},w=()=>{!a||W(!Y)};return Z(at,{children:[p($e.exports.LazyLoadImage,{effect:"blur",src:l,alt:m,width:"100%",height:"100%",threshold:.1,useIntersectionObserver:!0,visibleByDefault:!1,style:{objectFit:"cover"}}),Z(st,{children:[p("span",{className:"item",children:m}),p("span",{className:"item price",children:lt(ee)}),p("button",{className:"favourite",onClick:w,children:Y?p(ot,{className:"liked"}):p(it,{className:"heart"})}),p("div",{className:"bgtag",children:p(rt,{buttonType:nt.inverted,onClick:$,className:"cardbtn",children:"Add"})})]})]})},ut=ie.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 1rem 3rem 1rem;
  width: 100%;
  padding: 0 1rem;
  h2 {
    margin-bottom: 2rem;
  }
  .title {
    font-size: 28px;
    color: #059669;
    margin-bottom: 25px;
    cursor: pointer;
    @media (max-width: 500px) {
      font-size: 20px;
    }
  }
  @media (max-width: 800px) {
    margin: 1rem 0rem 2rem 0rem;
  }
  @media (min-width: 801px) {
    padding: 0;
  }
  .preview {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    @media (max-width: 800px) {
      grid-template-columns: repeat(2, 1fr);
      margin-top: 2.5rem;
    }
    @media (max-width: 370px) {
      grid-template-columns: minMax(200px, 1fr);
      padding: 0;
      font-size: 15px;
      margin-top: 1rem;
    }
  }
`,Oe=({products:j})=>p(ut,{children:p("div",{className:"preview",children:j.map((y,m)=>p(Ue,{product:y},y.id))})}),ft=ie.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 1rem 7rem 30px 5rem;
  padding-top: 4rem;

  .filter {
    display: flex;
  }

  @media screen and (max-width: 800px) {
    align-items: center;

    .filter {
      position: absolute;
      left: 1rem;
      font-size: 12px;
    }
  }
  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
  @media screen and (max-width: 1200px) {
    margin: 1rem 3rem 30px 3rem;
  }

  @media (max-width: 500px) {
    margin: 0 0rem 30px 0rem;

    .filter {
      font-size: 12px;
    }
  }
  @media (max-width: 370px) {
    .filter {
      display: flex;
      justify-content: space-between;
    }
  } ;
`,pt=ie.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 370px) {
    margin-top: 1.3rem;
  }
`,dt=ie.div`
  display: flex;

  // flex-wrap: wrap;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  select.decorated option:hover {
    box-shadow: 0 0 10px 100px black inset;
  }

  .fav {
    margin-left: 1rem;
  }
  .pri {
    margin-left: 1rem;
  }
  #category,
  #favour,
  #price {
    margin-left: 0.2rem;
    border: none;
    color: white;
    background-color: #0d9488;
    // appearance: none;
    border-radius: 3px;
    margin-bottom: 0.5rem;
    // box-shadow: 0px 2px 2px #10b981;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
  }

  #price:focus,
  #favour:focus,
  #category:focus {
    outline: none;
    border-radius: 3px;
    border: 2px solid #0d9488;
    box-shadow: 0 0 0px 4px solid #0d9488;
    border: none;
  }

  @media (max-width: 500px) {
    #category {
      font-size: 10px;
      margin-left: 0;
    }
    #favour {
      font-size: 10px;
      margin-left: 0;
    }
    #price {
      font-size: 10px;
      margin-left: 0;
    }
  }
  @media (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
    gap: 1rem;
    padding-right: 1rem;

    #category {
      width: 120px;
      padding: 0.2rem 0.5rem;
      margin-top: 0.6rem;
    }
    #favour {
      width: 120px;
      padding: 0.2rem 0.5rem;
      margin-top: 0.5rem;
    }
    #price {
      width: 120px;
      padding: 0.2rem 0.5rem;
      margin-top: 0.5rem;
    }

    .fav {
      margin-left: 0;
      display: flex;
      flex-direction: column;
    }
    .cat {
      display: flex;
      flex-direction: column;
    }
    .pri {
      margin-left: 0;
      display: flex;
      flex-direction: column;
    }
  }
  @media (max-width: 380px) {
    // transform: translateX(-0.8rem);
    // justify-content: center;
  }
`;ie.div`
  display: flex;
  flex-direction: column;
`;const yt=()=>{const j=Ie(),y=fe(Fe);return Z(dt,{children:[Z("div",{className:"cat",children:[p("label",{htmlFor:"category",children:"category"}),Z("select",{name:"category",id:"category",className:"decorated",onChange:m=>j(Ee({...y,category:m.target.value})),children:[p("option",{value:"any",children:"any"}),p("option",{value:"hats",children:"hats"}),p("option",{value:"jackets",children:"jackets"}),p("option",{value:"mens",children:"mens"}),p("option",{value:"sneakers",children:"sneakers"}),p("option",{value:"womens",children:"womens"})]})]}),Z("div",{className:"fav",children:[p("label",{htmlFor:"favour",children:"favourite"}),Z("select",{name:"favour",id:"favour",className:"decorated",onChange:m=>j(Ee({...y,isFavoured:m.target.value})),children:[p("option",{value:"any",children:"any"}),p("option",{value:"favoured",children:"favoured"}),p("option",{value:"notfavoured",children:"not favoured"})]})]}),Z("div",{className:"pri",children:[p("label",{htmlFor:"price",children:"price"}),Z("select",{name:"price",id:"price",className:"decorated",onChange:m=>j(Ee({...y,price:m.target.value})),children:[p("option",{value:"any",children:"any"}),p("option",{value:"20",children:"< $20"}),p("option",{value:"50",children:"< $50"}),p("option",{value:"100",children:"< $100"}),p("option",{value:"200",children:"< $200"})]})]})]})},mt=()=>{const j=fe(We),y=fe(Fe),m=y.category==="any"?j:j[y.category],ee=[...Object.values(m).flatMap(a=>a)];let l=y.category==="any"?[...ee]:[...m],u;return y.category!=="any"&&(y.price!=="any"&&(l=l.filter(a=>a.price<=Number(y.price))),u=p(Oe,{products:l,title:y.category},y.category)),y.isFavoured!=="any"&&(l=l.filter(a=>a.isFavoured===(y.isFavoured==="favoured")),u=p(Oe,{products:l})),y.price!=="any"&&(y.category==="any"&&(l=l.filter(a=>a.price<=Number(y.price))),u=p(Oe,{products:l})),y.category==="any"&&y.isFavoured==="any"&&y.price==="any"&&(u=p(Oe,{products:l,title:y.category},y.category)),Z(ft,{children:[p("div",{className:"filter",children:p(yt,{})}),p(pt,{children:u})]})},ht=ie.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;
  margin: 1rem 4rem 3rem 4rem;
  @media (min-width: 1200px) {
    margin: 1rem 6rem 3rem 6rem;
  }
  @media (max-width: 750px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 1rem 2rem 3rem 2rem;
  }
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
    margin: 1rem 4rem 3rem 4rem;
  }
`;ie.div`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;
  color: #059669;
  @media (max-width: 800px) {
    margin-top: 1rem;
    font-size: 25px;
  }
  @media (max-width: 500px) {
    margin-top: 1rem;
    font-size: 20px;
  }
`;const bt=ie.div`
  padding-top: 4rem;
`,vt=()=>{const{category:j}=Qe(),y=fe(We),m=fe(a=>Ve(a)),[ee,l]=ge.exports.useState(y[j]);ge.exports.useEffect(()=>{l(y[j])},[j,y]);let u;return Ze?u=p(ht,{children:ee&&ee.map(a=>p(Ue,{product:a,cartItems:m},a.id))}):u=p("p",{children:'"Loading..."'}),p(bt,{children:u})},Ot=()=>{const j=Ie();return ge.exports.useEffect(()=>{j(et())},[j]),Z(tt,{children:[p(ze,{index:!0,element:p(mt,{})}),p(ze,{path:"/:category",element:p(vt,{})})]})};export{Ot as default};
