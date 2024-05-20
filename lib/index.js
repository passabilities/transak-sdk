import u from"events";var E=(t=>(t.DEVELOPMENT="DEVELOPMENT",t.STAGING="STAGING",t.PRODUCTION="PRODUCTION",t))(E||{});var s=(o=>(o.TRANSAK_WIDGET_INITIALISED="TRANSAK_WIDGET_INITIALISED",o.TRANSAK_ORDER_CREATED="TRANSAK_ORDER_CREATED",o.TRANSAK_ORDER_SUCCESSFUL="TRANSAK_ORDER_SUCCESSFUL",o.TRANSAK_ORDER_CANCELLED="TRANSAK_ORDER_CANCELLED",o.TRANSAK_ORDER_FAILED="TRANSAK_ORDER_FAILED",o.TRANSAK_WALLET_REDIRECTION="TRANSAK_WALLET_REDIRECTION",o.TRANSAK_WIDGET_CLOSE_REQUEST="TRANSAK_WIDGET_CLOSE_REQUEST",o.TRANSAK_WIDGET_CLOSE="TRANSAK_WIDGET_CLOSE",o.TRANSAK_USER_INFO_RECEIVED="TRANSAK_USER_INFO_RECEIVED",o.TRANSAK_GET_USER_REQUEST="TRANSAK_GET_USER_REQUEST",o.TRANSAK_LOGOUT_USER_REQUEST="TRANSAK_LOGOUT_USER_REQUEST",o.TRANSAK_KYC_COMPLETE="TRANSAK_KYC_COMPLETE",o))(s||{});import p from"query-string";import h from"pako";var d={DEVELOPMENT:"https://localhost:5005/",STAGING:"https://global-stg.transak.com",PRODUCTION:"https://global.transak.com"};function m(e){let{environment:r="STAGING"}=e,a={},t="";return Object.keys(e).forEach(n=>{if(!["environment","widgetWidth","widgetHeight"].includes(n)){if(["walletAddressesData","userData"].includes(n)){try{a[n]=JSON.stringify(e[n])}catch{}return}if(["nftData","sourceTokenData","cryptoCurrencyData","tokenData"].includes(n)){try{a[n]=btoa(JSON.stringify(e[n]))}catch{}return}if(["calldata"].includes(n)){try{a[n]=btoa(String.fromCharCode.apply(null,h.deflate(e[n])))}catch{}return}a[n]=e[n]}}),t=p.stringify(a,{arrayFormat:"comma"}),`${d[r]}?${t}`}function T(e){let r=document.createElement("iframe");return Object.assign(r,{id:"transakIframe",allow:"camera;microphone;payment",src:e}),r}function A(){return`
    #transakIframe{
      width: 100%;
      height: 100%;
      border: none;
    }
  `}function R(){let e=document.createElement("style");return e.innerHTML=A(),document.getElementsByTagName("head")[0]?.appendChild(e),e}function _(e){let r=R(),a=T(m(e));if(e.containerId){let t=document.getElementById(e.containerId);if(t)t.appendChild(a);else throw new Error("[Transak SDK] => Please enter a valid containerId")}return{styleElement:r,iframeElement:a}}function S(e,r){return function(t){if(t?.data?.event_id)switch(t.data.event_id){case"TRANSAK_WIDGET_INITIALISED":{e.emit("TRANSAK_WIDGET_INITIALISED",{eventName:"TRANSAK_WIDGET_INITIALISED",status:!0});break}case"TRANSAK_ORDER_CREATED":{e.emit("TRANSAK_ORDER_CREATED",{eventName:"TRANSAK_ORDER_CREATED",status:t.data.data});break}case"TRANSAK_ORDER_SUCCESSFUL":{e.emit("TRANSAK_ORDER_SUCCESSFUL",{eventName:"TRANSAK_ORDER_SUCCESSFUL",status:t.data.data});break}case"TRANSAK_ORDER_CANCELLED":{e.emit("TRANSAK_ORDER_CANCELLED",{eventName:"TRANSAK_ORDER_CANCELLED",status:t.data.data});break}case"TRANSAK_ORDER_FAILED":{e.emit("TRANSAK_ORDER_FAILED",{eventName:"TRANSAK_ORDER_FAILED",status:t.data.data});break}case"TRANSAK_WALLET_REDIRECTION":{e.emit("TRANSAK_WALLET_REDIRECTION",{eventName:"TRANSAK_WALLET_REDIRECTION",status:t.data.data});break}case"TRANSAK_WIDGET_CLOSE":{e.emit("TRANSAK_WIDGET_CLOSE",{eventName:"TRANSAK_WIDGET_CLOSE",status:!0}),r();break}case"TRANSAK_USER_INFO_RECEIVED":{e.emit("TRANSAK_USER_INFO_RECEIVED",{eventName:"TRANSAK_USER_INFO_RECEIVED",status:t.data.data});break}case"TRANSAK_KYC_COMPLETE":{e.emit("TRANSAK_KYC_COMPLETE",{eventName:"TRANSAK_KYC_COMPLETE",status:t.data.data});break}}}}var I=`
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
  `}function f(e){let{themeColor:r="1461db",widgetWidth:a="480px",widgetHeight:t="650px"}=e,n=document.createElement("style");return n.innerHTML=N(r,a,t),document.getElementsByTagName("head")[0]?.appendChild(n),n}function C(e,r){let a=f(e),t=document.createElement("div"),n=document.createElement("div"),i=T(m(e));return Object.assign(n,{id:"transakModal",innerHTML:I}),n.appendChild(i),Object.assign(t,{id:"transakRoot",onclick:()=>r()}),t.appendChild(n),document.getElementsByTagName("body")[0].appendChild(t),document.getElementById("transakCloseIcon")?.addEventListener("click",()=>r()),{styleElement:a,rootElement:t,iframeElement:i}}var l=new u.EventEmitter,c=class{#t;#r;#o;#e;#n;#a=!1;static ENVIRONMENTS=E;static EVENTS=s;constructor(r){if(!r?.apiKey)throw new Error("[Transak SDK] => Please enter your API Key");this.#t=r,this.#n=S(l,this.close)}static on=(r,a)=>{r==="*"?Object.keys(s).forEach(t=>{l.on(s[t],a)}):s[r]&&l.on(r,a)};init=()=>{this.#a||(this.#i(),this.#a=!0)};cleanup=()=>{this.#r?.remove(),this.#s(),this.#e?.remove(),this.#a=!1};close=()=>{this.#r?.remove(),this.#o?.remove(),this.#s(),this.#e=void 0,this.#a=!1};getUser=()=>{this.#e?.contentWindow?.postMessage({event_id:"TRANSAK_GET_USER_REQUEST"},"*")};logoutUser=()=>{this.#e?.contentWindow?.postMessage({event_id:"TRANSAK_LOGOUT_USER_REQUEST"},"*")};#i=()=>{if(window.addEventListener("message",this.#n),this.#t.containerId){let{styleElement:r,iframeElement:a}=_(this.#t);this.#r=r,this.#e=a}else{let{styleElement:r,rootElement:a,iframeElement:t}=C(this.#t,this.#E);this.#r=r,this.#o=a,this.#e=t}};#E=()=>{this.#e?.contentWindow?.postMessage({event_id:"TRANSAK_WIDGET_CLOSE_REQUEST"},"*")};#s=()=>{l.removeAllListeners(),window.removeEventListener("message",this.#n)}};export{c as Transak};
//# sourceMappingURL=index.js.map