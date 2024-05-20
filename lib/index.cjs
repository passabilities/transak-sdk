"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; } var _class;var _events = require('events'); var _events2 = _interopRequireDefault(_events);var E=(t=>(t.DEVELOPMENT="DEVELOPMENT",t.STAGING="STAGING",t.PRODUCTION="PRODUCTION",t))(E||{});var s=(o=>(o.TRANSAK_WIDGET_INITIALISED="TRANSAK_WIDGET_INITIALISED",o.TRANSAK_ORDER_CREATED="TRANSAK_ORDER_CREATED",o.TRANSAK_ORDER_SUCCESSFUL="TRANSAK_ORDER_SUCCESSFUL",o.TRANSAK_ORDER_CANCELLED="TRANSAK_ORDER_CANCELLED",o.TRANSAK_ORDER_FAILED="TRANSAK_ORDER_FAILED",o.TRANSAK_WALLET_REDIRECTION="TRANSAK_WALLET_REDIRECTION",o.TRANSAK_WIDGET_CLOSE_REQUEST="TRANSAK_WIDGET_CLOSE_REQUEST",o.TRANSAK_WIDGET_CLOSE="TRANSAK_WIDGET_CLOSE",o.TRANSAK_USER_INFO_RECEIVED="TRANSAK_USER_INFO_RECEIVED",o.TRANSAK_GET_USER_REQUEST="TRANSAK_GET_USER_REQUEST",o.TRANSAK_LOGOUT_USER_REQUEST="TRANSAK_LOGOUT_USER_REQUEST",o.TRANSAK_KYC_COMPLETE="TRANSAK_KYC_COMPLETE",o))(s||{});var _querystring = require('query-string'); var _querystring2 = _interopRequireDefault(_querystring);var _pako = require('pako'); var _pako2 = _interopRequireDefault(_pako);var d={DEVELOPMENT:"https://localhost:5005/",STAGING:"https://global-stg.transak.com",PRODUCTION:"https://global.transak.com"};function m(e){let{environment:r="STAGING"}=e,a={},t="";return Object.keys(e).forEach(n=>{if(!["environment","widgetWidth","widgetHeight"].includes(n)){if(["walletAddressesData","userData"].includes(n)){try{a[n]=JSON.stringify(e[n])}catch (e2){}return}if(["nftData","sourceTokenData","cryptoCurrencyData","tokenData"].includes(n)){try{a[n]=btoa(JSON.stringify(e[n]))}catch (e3){}return}if(["calldata"].includes(n)){try{a[n]=btoa(String.fromCharCode.apply(null,_pako2.default.deflate(e[n])))}catch (e4){}return}a[n]=e[n]}}),t=_querystring2.default.stringify(a,{arrayFormat:"comma"}),`${d[r]}?${t}`}function T(e){let r=document.createElement("iframe");return Object.assign(r,{id:"transakIframe",allow:"camera;microphone;payment",src:e}),r}function A(){return`
    #transakIframe{
      width: 100%;
      height: 100%;
      border: none;
    }
  `}function R(){let e=document.createElement("style");return e.innerHTML=A(),_optionalChain([document, 'access', _2 => _2.getElementsByTagName, 'call', _3 => _3("head"), 'access', _4 => _4[0], 'optionalAccess', _5 => _5.appendChild, 'call', _6 => _6(e)]),e}function _(e){let r=R(),a=T(m(e));if(e.containerId){let t=document.getElementById(e.containerId);if(t)t.appendChild(a);else throw new Error("[Transak SDK] => Please enter a valid containerId")}return{styleElement:r,iframeElement:a}}function S(e,r){return function(t){if(_optionalChain([t, 'optionalAccess', _7 => _7.data, 'optionalAccess', _8 => _8.event_id]))switch(t.data.event_id){case"TRANSAK_WIDGET_INITIALISED":{e.emit("TRANSAK_WIDGET_INITIALISED",{eventName:"TRANSAK_WIDGET_INITIALISED",status:!0});break}case"TRANSAK_ORDER_CREATED":{e.emit("TRANSAK_ORDER_CREATED",{eventName:"TRANSAK_ORDER_CREATED",status:t.data.data});break}case"TRANSAK_ORDER_SUCCESSFUL":{e.emit("TRANSAK_ORDER_SUCCESSFUL",{eventName:"TRANSAK_ORDER_SUCCESSFUL",status:t.data.data});break}case"TRANSAK_ORDER_CANCELLED":{e.emit("TRANSAK_ORDER_CANCELLED",{eventName:"TRANSAK_ORDER_CANCELLED",status:t.data.data});break}case"TRANSAK_ORDER_FAILED":{e.emit("TRANSAK_ORDER_FAILED",{eventName:"TRANSAK_ORDER_FAILED",status:t.data.data});break}case"TRANSAK_WALLET_REDIRECTION":{e.emit("TRANSAK_WALLET_REDIRECTION",{eventName:"TRANSAK_WALLET_REDIRECTION",status:t.data.data});break}case"TRANSAK_WIDGET_CLOSE":{e.emit("TRANSAK_WIDGET_CLOSE",{eventName:"TRANSAK_WIDGET_CLOSE",status:!0}),r();break}case"TRANSAK_USER_INFO_RECEIVED":{e.emit("TRANSAK_USER_INFO_RECEIVED",{eventName:"TRANSAK_USER_INFO_RECEIVED",status:t.data.data});break}case"TRANSAK_KYC_COMPLETE":{e.emit("TRANSAK_KYC_COMPLETE",{eventName:"TRANSAK_KYC_COMPLETE",status:t.data.data});break}}}}var I=`
  <svg id="transakCloseIcon" viewBox="0 0 612 612" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M306,0C136.992,0,0,136.992,0,306s136.992,306,306,306c168.988,0,306-137.012,306-306S475.008,0,306,0z M414.19,387.147
    c7.478,7.478,7.478,19.584,0,27.043c-7.479,7.478-19.584,7.478-27.043,0l-81.032-81.033l-81.588,81.588
    c-7.535,7.516-19.737,7.516-27.253,0c-7.535-7.535-7.535-19.737,0-27.254l81.587-81.587l-81.033-81.033
    c-7.478-7.478-7.478-19.584,0-27.042c7.478-7.478,19.584-7.478,27.042,0l81.033,81.033l82.181-82.18
    c7.535-7.535,19.736-7.535,27.253,0c7.535,7.535,7.535,19.737,0,27.253l-82.181,82.181L414.19,387.147z" />
  </svg>
`;function N(e,r,a){return`
    #transakRoot {
      z-index: 9997;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.6);
    }

    #transakModal {
      z-index: 9998;
      position: fixed;
      width: ${r};
      height: calc(${a} - 24px);
      top: 50%;
      left: 50%;
      transform: translate(-50%, calc(-50% - 12px));
      margin-top: 24px;
    }

    #transakCloseIcon {
      z-index: 9999;
      position: absolute;
      width: 36px;
      height: 36px;
      top: -24px;
      right: 0;
      transition: 0.5s;
      color: #${e};
      background: white;
      border-radius: 50%;
    }

    #transakCloseIcon:hover,
    #transakCloseIcon:focus {
      color: white;
      background: #${e};
      cursor: pointer;
    }

    #transakIframe{
      width: 100%;
      height: 100%;
      border: none;
      border-radius: 10px;
      background: white;
    }

    @media screen and (max-width: 600px) {
      #transakModal {
        width: 100%;
        height: calc(100% - 24px);
      }

      #transakIframe{
        border-radius: 10px 10px 0 0;
      }
    }
  `}function f(e){let{themeColor:r="1461db",widgetWidth:a="480px",widgetHeight:t="650px"}=e,n=document.createElement("style");return n.innerHTML=N(r,a,t),_optionalChain([document, 'access', _9 => _9.getElementsByTagName, 'call', _10 => _10("head"), 'access', _11 => _11[0], 'optionalAccess', _12 => _12.appendChild, 'call', _13 => _13(n)]),n}function C(e,r){let a=f(e),t=document.createElement("div"),n=document.createElement("div"),i=T(m(e));return Object.assign(n,{id:"transakModal",innerHTML:I}),n.appendChild(i),Object.assign(t,{id:"transakRoot",onclick:()=>r()}),t.appendChild(n),document.getElementsByTagName("body")[0].appendChild(t),_optionalChain([document, 'access', _14 => _14.getElementById, 'call', _15 => _15("transakCloseIcon"), 'optionalAccess', _16 => _16.addEventListener, 'call', _17 => _17("click",()=>r())]),{styleElement:a,rootElement:t,iframeElement:i}}var l=new _events2.default.EventEmitter,c= exports.Transak = (_class =class{#t;#r;#o;#e;#n;#a=!1;static __initStatic() {this.ENVIRONMENTS=E}static __initStatic2() {this.EVENTS=s}constructor(r){;_class.prototype.__init.call(this);_class.prototype.__init2.call(this);_class.prototype.__init3.call(this);_class.prototype.__init4.call(this);_class.prototype.__init5.call(this);if(!_optionalChain([r, 'optionalAccess', _38 => _38.apiKey]))throw new Error("[Transak SDK] => Please enter your API Key");this.#t=r,this.#n=S(l,this.close)}static __initStatic3() {this.on=(r,a)=>{r==="*"?Object.keys(s).forEach(t=>{l.on(s[t],a)}):s[r]&&l.on(r,a)}}__init() {this.init=()=>{this.#a||(this.#i(),this.#a=!0)}}__init2() {this.cleanup=()=>{_optionalChain([this, 'access', _39 => _39.#r, 'optionalAccess', _40 => _40.remove, 'call', _41 => _41()]),this.#s(),_optionalChain([this, 'access', _42 => _42.#e, 'optionalAccess', _43 => _43.remove, 'call', _44 => _44()]),this.#a=!1}}__init3() {this.close=()=>{_optionalChain([this, 'access', _45 => _45.#r, 'optionalAccess', _46 => _46.remove, 'call', _47 => _47()]),_optionalChain([this, 'access', _48 => _48.#o, 'optionalAccess', _49 => _49.remove, 'call', _50 => _50()]),this.#s(),this.#e=void 0,this.#a=!1}}__init4() {this.getUser=()=>{_optionalChain([this, 'access', _51 => _51.#e, 'optionalAccess', _52 => _52.contentWindow, 'optionalAccess', _53 => _53.postMessage, 'call', _54 => _54({event_id:"TRANSAK_GET_USER_REQUEST"},"*")])}}__init5() {this.logoutUser=()=>{_optionalChain([this, 'access', _55 => _55.#e, 'optionalAccess', _56 => _56.contentWindow, 'optionalAccess', _57 => _57.postMessage, 'call', _58 => _58({event_id:"TRANSAK_LOGOUT_USER_REQUEST"},"*")])}}#i=()=>{if(window.addEventListener("message",this.#n),this.#t.containerId){let{styleElement:r,iframeElement:a}=_(this.#t);this.#r=r,this.#e=a}else{let{styleElement:r,rootElement:a,iframeElement:t}=C(this.#t,this.#E);this.#r=r,this.#o=a,this.#e=t}};#E=()=>{_optionalChain([this, 'access', _59 => _59.#e, 'optionalAccess', _60 => _60.contentWindow, 'optionalAccess', _61 => _61.postMessage, 'call', _62 => _62({event_id:"TRANSAK_WIDGET_CLOSE_REQUEST"},"*")])};#s=()=>{l.removeAllListeners(),window.removeEventListener("message",this.#n)}}, _class.__initStatic(), _class.__initStatic2(), _class.__initStatic3(), _class);exports.Transak = c;
//# sourceMappingURL=index.cjs.map