"use strict";(self.webpackChunkTimTheCat=self.webpackChunkTimTheCat||[]).push([[648],{54648:(e,n,t)=>{t.r(n),t.d(n,{default:()=>W});var r=t(56710);const o=t(36794);var i=function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},e(n,t)};return function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}();const a=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return i(n,e),n}(o);var c=t(40462),s=t.n(c),l=function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},e(n,t)};return function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),u=function(){return u=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},u.apply(this,arguments)},d=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(n){i(n)}}function c(e){try{s(r.throw(e))}catch(n){i(n)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}s((r=r.apply(e,n||[])).next())}))},f=function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(s){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(a=0)),a;)try{if(t=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,r=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=n.call(e,a)}catch(s){c=[6,s],r=0}finally{t=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,s])}}},p=function(e,n){var t="function"===typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,i=t.call(e),a=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(c){o={error:c}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return a};const h=function(e){function n(n,t){var o,i=e.call(this)||this;if(i._handleMessage=function(e){if(i._injectedProvider&&e.source===window||e.origin===i._providerUrl.origin&&e.source===i._popup)if("connected"===e.data.method){var n=new r.PublicKey(e.data.params.publicKey);i._publicKey&&i._publicKey.equals(n)||(i._publicKey&&!i._publicKey.equals(n)&&i._handleDisconnect(),i._publicKey=n,i._autoApprove=!!e.data.params.autoApprove,i.emit("connect",i._publicKey))}else if("disconnected"===e.data.method)i._handleDisconnect();else if((e.data.result||e.data.error)&&i._responsePromises.has(e.data.id)){var t=p(i._responsePromises.get(e.data.id),2),o=t[0],a=t[1];e.data.result?o(e.data.result):a(new Error(e.data.error))}},i._handleConnect=function(){return i._handlerAdded||(i._handlerAdded=!0,window.addEventListener("message",i._handleMessage),window.addEventListener("beforeunload",i.disconnect)),i._injectedProvider?new Promise((function(e){i._sendRequest("connect",{}),e()})):(window.name="parent",i._popup=window.open(i._providerUrl.toString(),"_blank","location,resizable,width=460,height=675"),new Promise((function(e){i.once("connect",e)})))},i._handleDisconnect=function(){i._handlerAdded&&(i._handlerAdded=!1,window.removeEventListener("message",i._handleMessage),window.removeEventListener("beforeunload",i.disconnect)),i._publicKey&&(i._publicKey=null,i.emit("disconnect")),i._responsePromises.forEach((function(e,n){var t=p(e,2),r=(t[0],t[1]);i._responsePromises.delete(n),r("Wallet disconnected")}))},i._sendRequest=function(e,n){return d(i,void 0,void 0,(function(){var t,r=this;return f(this,(function(o){if("connect"!==e&&!this.connected)throw new Error("Wallet not connected");return t=this._nextRequestId,++this._nextRequestId,[2,new Promise((function(o,i){r._responsePromises.set(t,[o,i]),r._injectedProvider?r._injectedProvider.postMessage({jsonrpc:"2.0",id:t,method:e,params:u({network:r._network},n)}):(r._popup.postMessage({jsonrpc:"2.0",id:t,method:e,params:n},r._providerUrl.origin),r.autoApprove||r._popup.focus())}))]}))}))},i.connect=function(){return i._popup&&i._popup.close(),i._handleConnect()},i.disconnect=function(){return d(i,void 0,void 0,(function(){return f(this,(function(e){switch(e.label){case 0:return this._injectedProvider?[4,this._sendRequest("disconnect",{})]:[3,2];case 1:e.sent(),e.label=2;case 2:return this._popup&&this._popup.close(),this._handleDisconnect(),[2]}}))}))},i.sign=function(e,n){return d(i,void 0,void 0,(function(){var t,o,i;return f(this,(function(a){switch(a.label){case 0:if(!(e instanceof Uint8Array))throw new Error("Data must be an instance of Uint8Array");return[4,this._sendRequest("sign",{data:e,display:n})];case 1:return t=a.sent(),o=s().decode(t.signature),i=new r.PublicKey(t.publicKey),[2,{signature:o,publicKey:i}]}}))}))},function(e){return"object"===typeof e&&null!==e}(o=n)&&function(e){return"function"===typeof e}(o.postMessage))i._injectedProvider=n;else{if(!function(e){return"string"===typeof e}(n))throw new Error("provider parameter must be an injected provider or a URL string.");i._providerUrl=new URL(n),i._providerUrl.hash=new URLSearchParams({origin:window.location.origin,network:t}).toString()}return i._network=t,i._publicKey=null,i._autoApprove=!1,i._popup=null,i._handlerAdded=!1,i._nextRequestId=1,i._responsePromises=new Map,i}return l(n,e),Object.defineProperty(n.prototype,"publicKey",{get:function(){return this._publicKey},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"connected",{get:function(){return null!==this._publicKey},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"autoApprove",{get:function(){return this._autoApprove},enumerable:!1,configurable:!0}),n}(o);var v=function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},e(n,t)};return function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),_=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(n){i(n)}}function c(e){try{s(r.throw(e))}catch(n){i(n)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}s((r=r.apply(e,n||[])).next())}))},y=function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(s){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(a=0)),a;)try{if(t=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,r=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=n.call(e,a)}catch(s){c=[6,s],r=0}finally{t=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,s])}}};const m=function(e){function n(n,t,r){var o=e.call(this)||this;return o._instance=null,o.handleMessage=function(e){},o._sendRequest=function(e,n){return _(o,void 0,void 0,(function(){var t,r;return y(this,(function(o){switch(o.label){case 0:return(null===(t=this._instance)||void 0===t?void 0:t.sendRequest)?[4,this._instance.sendRequest(e,n)]:[3,2];case 1:case 3:return[2,o.sent()];case 2:return(null===(r=this._instance)||void 0===r?void 0:r._sendRequest)?[4,this._instance._sendRequest(e,n)]:[3,4];case 4:throw new Error("Unsupported version of `@project-serum/sol-wallet-adapter`")}}))}))},o._handleConnect=function(){o.emit("connect")},o._handleDisconnect=function(){window.clearInterval(o._pollTimer),o.emit("disconnect")},o._network=t,o._provider=r,o}return v(n,e),Object.defineProperty(n.prototype,"publicKey",{get:function(){return this._instance.publicKey||null},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"connected",{get:function(){return this._instance.connected||!1},enumerable:!1,configurable:!0}),n.prototype.connect=function(){return _(this,void 0,void 0,(function(){var e=this;return y(this,(function(n){switch(n.label){case 0:return this._instance=new h(this._provider,this._network),this._instance.on("connect",this._handleConnect),this._instance.on("disconnect",this._handleDisconnect),this._pollTimer=window.setInterval((function(){var n,t;!1!==(null===(t=null===(n=e._instance)||void 0===n?void 0:n._popup)||void 0===t?void 0:t.closed)&&e._handleDisconnect()}),200),[4,this._instance.connect()];case 1:return n.sent(),[2]}}))}))},n.prototype.disconnect=function(){return _(this,void 0,void 0,(function(){return y(this,(function(e){switch(e.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return this._instance.removeAllListeners("connect"),this._instance.removeAllListeners("disconnect"),[4,this._instance.disconnect()];case 1:return e.sent(),[2]}}))}))},n.prototype.signTransaction=function(e){return _(this,void 0,void 0,(function(){var n;return y(this,(function(t){switch(t.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._sendRequest("signTransactionV2",{transaction:s().encode(e)})];case 1:return n=t.sent().transaction,[2,s().decode(n)]}}))}))},n.prototype.signAllTransactions=function(e){return _(this,void 0,void 0,(function(){return y(this,(function(n){switch(n.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._sendRequest("signAllTransactionsV2",{transactions:e.map((function(e){return s().encode(e)}))})];case 1:return[2,n.sent().transactions.map((function(e){return s().decode(e)}))]}}))}))},n.prototype.signAndSendTransaction=function(e,n){return _(this,void 0,void 0,(function(){return y(this,(function(t){switch(t.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._sendRequest("signAndSendTransaction",{transaction:s().encode(e),options:n})];case 1:return[2,t.sent().signature]}}))}))},n.prototype.signMessage=function(e,n){return void 0===n&&(n="hex"),_(this,void 0,void 0,(function(){var t;return y(this,(function(r){switch(r.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._instance.sign(e,n)];case 1:return t=r.sent().signature,[2,Uint8Array.from(t)]}}))}))},n}(a),w={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let b;const g=new Uint8Array(16);function x(){if(!b&&(b="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!b))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return b(g)}const P=[];for(let q=0;q<256;++q)P.push((q+256).toString(16).slice(1));function A(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return P[e[n+0]]+P[e[n+1]]+P[e[n+2]]+P[e[n+3]]+"-"+P[e[n+4]]+P[e[n+5]]+"-"+P[e[n+6]]+P[e[n+7]]+"-"+P[e[n+8]]+P[e[n+9]]+"-"+P[e[n+10]]+P[e[n+11]]+P[e[n+12]]+P[e[n+13]]+P[e[n+14]]+P[e[n+15]]}const j=function(e,n,t){if(w.randomUUID&&!n&&!e)return w.randomUUID();const r=(e=e||{}).random||(e.rng||x)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,n){t=t||0;for(let e=0;e<16;++e)n[t+e]=r[e];return n}return A(r)};var E=function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},e(n,t)};return function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),I=function(){return I=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},I.apply(this,arguments)},O=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(n){i(n)}}function c(e){try{s(r.throw(e))}catch(n){i(n)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}s((r=r.apply(e,n||[])).next())}))},S=function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(s){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(a=0)),a;)try{if(t=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,r=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=n.call(e,a)}catch(s){c=[6,s],r=0}finally{t=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,s])}}},T=function(e){function n(n,t){var o,i=this;return(i=e.call(this)||this)._publicKey=null,i._messageHandlers={},i.handleMessage=function(e){if(i._messageHandlers[e.id]){var n=i._messageHandlers[e.id],t=n.resolve,r=n.reject;delete i._messageHandlers[e.id],e.error?r(e.error):t(e.result)}},i._sendMessage=function(e){if(!i.connected)throw new Error("Wallet not connected");return new Promise((function(n,t){var r,o,a=j();i._messageHandlers[a]={resolve:n,reject:t},null===(o=null===(r=i._iframe)||void 0===r?void 0:r.contentWindow)||void 0===o||o.postMessage({channel:"solflareWalletAdapterToIframe",data:I({id:a},e)},"*")}))},i._iframe=n,i._publicKey=new r.PublicKey(null===(o=null===t||void 0===t?void 0:t.toString)||void 0===o?void 0:o.call(t)),i}return E(n,e),Object.defineProperty(n.prototype,"publicKey",{get:function(){return this._publicKey||null},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"connected",{get:function(){return!0},enumerable:!1,configurable:!0}),n.prototype.connect=function(){return O(this,void 0,void 0,(function(){return S(this,(function(e){return[2]}))}))},n.prototype.disconnect=function(){return O(this,void 0,void 0,(function(){return S(this,(function(e){switch(e.label){case 0:return[4,this._sendMessage({method:"disconnect"})];case 1:return e.sent(),[2]}}))}))},n.prototype.signTransaction=function(e){var n;return O(this,void 0,void 0,(function(){var t,r;return S(this,(function(o){switch(o.label){case 0:if(!this.connected)throw new Error("Wallet not connected");o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this._sendMessage({method:"signTransaction",params:{transaction:s().encode(e)}})];case 2:return t=o.sent(),[2,s().decode(t)];case 3:throw r=o.sent(),new Error((null===(n=null===r||void 0===r?void 0:r.toString)||void 0===n?void 0:n.call(r))||"Failed to sign transaction");case 4:return[2]}}))}))},n.prototype.signAllTransactions=function(e){var n;return O(this,void 0,void 0,(function(){var t;return S(this,(function(r){switch(r.label){case 0:if(!this.connected)throw new Error("Wallet not connected");r.label=1;case 1:return r.trys.push([1,3,,4]),[4,this._sendMessage({method:"signAllTransactions",params:{transactions:e.map((function(e){return s().encode(e)}))}})];case 2:return[2,r.sent().map((function(e){return s().decode(e)}))];case 3:throw t=r.sent(),new Error((null===(n=null===t||void 0===t?void 0:t.toString)||void 0===n?void 0:n.call(t))||"Failed to sign transactions");case 4:return[2]}}))}))},n.prototype.signAndSendTransaction=function(e,n){var t;return O(this,void 0,void 0,(function(){var r;return S(this,(function(o){switch(o.label){case 0:if(!this.connected)throw new Error("Wallet not connected");o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this._sendMessage({method:"signAndSendTransaction",params:{transaction:s().encode(e),options:n}})];case 2:return[2,o.sent()];case 3:throw r=o.sent(),new Error((null===(t=null===r||void 0===r?void 0:r.toString)||void 0===t?void 0:t.call(r))||"Failed to sign and send transaction");case 4:return[2]}}))}))},n.prototype.signMessage=function(e,n){var t;return void 0===n&&(n="hex"),O(this,void 0,void 0,(function(){var r,o;return S(this,(function(i){switch(i.label){case 0:if(!this.connected)throw new Error("Wallet not connected");i.label=1;case 1:return i.trys.push([1,3,,4]),[4,this._sendMessage({method:"signMessage",params:{data:e,display:n}})];case 2:return r=i.sent(),[2,Uint8Array.from(s().decode(r))];case 3:throw o=i.sent(),new Error((null===(t=null===o||void 0===o?void 0:o.toString)||void 0===t?void 0:t.call(o))||"Failed to sign message");case 4:return[2]}}))}))},n}(a);const k=T;function M(e){return void 0===e.version}var K=function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},e(n,t)};return function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),C=function(){return C=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},C.apply(this,arguments)},U=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(n){i(n)}}function c(e){try{s(r.throw(e))}catch(n){i(n)}}function s(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,c)}s((r=r.apply(e,n||[])).next())}))},R=function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(s){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(a=0)),a;)try{if(t=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,r=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=n.call(e,a)}catch(s){c=[6,s],r=0}finally{t=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,s])}}},H=function(e){var n="function"===typeof Symbol&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")};const W=function(e){function n(t){var r=e.call(this)||this;return r._network="mainnet-beta",r._provider=null,r._iframeParams={},r._adapterInstance=null,r._element=null,r._iframe=null,r._connectHandler=null,r._flutterHandlerInterval=null,r._handleEvent=function(e){var n,t,o,i;switch(e.type){case"connect_native_web":return r._collapseIframe(),r._adapterInstance=new m(r._iframe,r._network,(null===(n=e.data)||void 0===n?void 0:n.provider)||r._provider||"https://solflare.com/provider"),r._adapterInstance.on("connect",r._webConnected),r._adapterInstance.on("disconnect",r._webDisconnected),r._adapterInstance.connect(),void r._setPreferredAdapter("native_web");case"connect":return r._collapseIframe(),r._adapterInstance=new k(r._iframe,(null===(t=e.data)||void 0===t?void 0:t.publicKey)||""),r._adapterInstance.connect(),r._setPreferredAdapter(null===(o=e.data)||void 0===o?void 0:o.adapter),r._connectHandler&&(r._connectHandler.resolve(),r._connectHandler=null),void r.emit("connect",r.publicKey);case"disconnect":return r._connectHandler&&(r._connectHandler.reject(),r._connectHandler=null),r._disconnected(),void r.emit("disconnect");case"accountChanged":return void((null===(i=e.data)||void 0===i?void 0:i.publicKey)?(r._adapterInstance=new k(r._iframe,e.data.publicKey),r._adapterInstance.connect(),r.emit("accountChanged",r.publicKey)):r.emit("accountChanged",void 0));case"collapse":return void r._collapseIframe();default:return}},r._handleResize=function(e){"full"===e.resizeMode?"fullscreen"===e.params.mode?r._expandIframe():"hide"===e.params.mode&&r._collapseIframe():"coordinates"===e.resizeMode&&r._iframe&&(r._iframe.style.top=isFinite(e.params.top)?"".concat(e.params.top,"px"):"",r._iframe.style.bottom=isFinite(e.params.bottom)?"".concat(e.params.bottom,"px"):"",r._iframe.style.left=isFinite(e.params.left)?"".concat(e.params.left,"px"):"",r._iframe.style.right=isFinite(e.params.right)?"".concat(e.params.right,"px"):"",r._iframe.style.width=isFinite(e.params.width)?"".concat(e.params.width,"px"):e.params.width,r._iframe.style.height=isFinite(e.params.height)?"".concat(e.params.height,"px"):e.params.height)},r._handleMessage=function(e){var n;if("solflareIframeToWalletAdapter"===(null===(n=e.data)||void 0===n?void 0:n.channel)){var t=e.data.data||{};"event"===t.type?r._handleEvent(t.event):"resize"===t.type?r._handleResize(t):"response"===t.type&&r._adapterInstance&&r._adapterInstance.handleMessage(t)}},r._removeElement=function(){null!==r._flutterHandlerInterval&&(clearInterval(r._flutterHandlerInterval),r._flutterHandlerInterval=null),r._element&&(r._element.remove(),r._element=null)},r._removeDanglingElements=function(){var e,n,t=document.getElementsByClassName("solflare-wallet-adapter-iframe");try{for(var r=H(t),o=r.next();!o.done;o=r.next()){var i=o.value;i.parentElement&&i.remove()}}catch(a){e={error:a}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}},r._injectElement=function(){r._removeElement(),r._removeDanglingElements();var e=C(C({},r._iframeParams),{cluster:r._network||"mainnet-beta",origin:window.location.origin||"",title:document.title||"",version:1,sdkVersion:"1.4.2"}),t=r._getPreferredAdapter();t&&(e.adapter=t),r._provider&&(e.provider=r._provider);var o=Object.keys(e).map((function(n){return"".concat(n,"=").concat(encodeURIComponent(e[n]))})).join("&"),i="".concat(n.IFRAME_URL,"?").concat(o);r._element=document.createElement("div"),r._element.className="solflare-wallet-adapter-iframe",r._element.innerHTML="\n      <iframe src='".concat(i,"' referrerPolicy='strict-origin-when-cross-origin' style='position: fixed; top: 0; bottom: 0; left: 0; right: 0; width: 100%; height: 100%; border: none; border-radius: 0; z-index: 99999; color-scheme: auto;' allowtransparency='true'></iframe>\n    "),document.body.appendChild(r._element),r._iframe=r._element.querySelector("iframe"),window.fromFlutter=r._handleMobileMessage,r._flutterHandlerInterval=setInterval((function(){window.fromFlutter=r._handleMobileMessage}),100),window.addEventListener("message",r._handleMessage,!1)},r._collapseIframe=function(){r._iframe&&(r._iframe.style.top="",r._iframe.style.right="",r._iframe.style.height="2px",r._iframe.style.width="2px")},r._expandIframe=function(){r._iframe&&(r._iframe.style.top="0px",r._iframe.style.bottom="0px",r._iframe.style.left="0px",r._iframe.style.right="0px",r._iframe.style.width="100%",r._iframe.style.height="100%")},r._getPreferredAdapter=function(){return localStorage&&localStorage.getItem("solflarePreferredWalletAdapter")||null},r._setPreferredAdapter=function(e){localStorage&&e&&localStorage.setItem("solflarePreferredWalletAdapter",e)},r._clearPreferredAdapter=function(){localStorage&&localStorage.removeItem("solflarePreferredWalletAdapter")},r._webConnected=function(){r._connectHandler&&(r._connectHandler.resolve(),r._connectHandler=null),r.emit("connect",r.publicKey)},r._webDisconnected=function(){r._connectHandler&&(r._connectHandler.reject(),r._connectHandler=null),r._disconnected(),r.emit("disconnect")},r._disconnected=function(){window.removeEventListener("message",r._handleMessage,!1),r._removeElement(),r._clearPreferredAdapter(),r._adapterInstance=null},r._handleMobileMessage=function(e){var n,t;null===(t=null===(n=r._iframe)||void 0===n?void 0:n.contentWindow)||void 0===t||t.postMessage({channel:"solflareMobileToIframe",data:e},"*")},(null===t||void 0===t?void 0:t.network)&&(r._network=null===t||void 0===t?void 0:t.network),(null===t||void 0===t?void 0:t.provider)&&(r._provider=null===t||void 0===t?void 0:t.provider),(null===t||void 0===t?void 0:t.params)&&(r._iframeParams=C({},null===t||void 0===t?void 0:t.params)),r}return K(n,e),Object.defineProperty(n.prototype,"publicKey",{get:function(){var e;return(null===(e=this._adapterInstance)||void 0===e?void 0:e.publicKey)||null},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"isConnected",{get:function(){var e;return!!(null===(e=this._adapterInstance)||void 0===e?void 0:e.connected)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"connected",{get:function(){return this.isConnected},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"autoApprove",{get:function(){return!1},enumerable:!1,configurable:!0}),n.prototype.connect=function(){return U(this,void 0,void 0,(function(){var e=this;return R(this,(function(n){switch(n.label){case 0:return this.connected?[2]:(this._injectElement(),[4,new Promise((function(n,t){e._connectHandler={resolve:n,reject:t}}))]);case 1:return n.sent(),[2]}}))}))},n.prototype.disconnect=function(){return U(this,void 0,void 0,(function(){return R(this,(function(e){switch(e.label){case 0:return this._adapterInstance?[4,this._adapterInstance.disconnect()]:[2];case 1:return e.sent(),this._disconnected(),this.emit("disconnect"),[2]}}))}))},n.prototype.signTransaction=function(e){return U(this,void 0,void 0,(function(){var n,t;return R(this,(function(o){switch(o.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return n=M(e)?Uint8Array.from(e.serialize({verifySignatures:!1,requireAllSignatures:!1})):e.serialize(),[4,this._adapterInstance.signTransaction(n)];case 1:return t=o.sent(),[2,M(e)?r.Transaction.from(t):r.VersionedTransaction.deserialize(t)]}}))}))},n.prototype.signAllTransactions=function(e){return U(this,void 0,void 0,(function(){var n,t;return R(this,(function(o){switch(o.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return n=e.map((function(e){return M(e)?Uint8Array.from(e.serialize({verifySignatures:!1,requireAllSignatures:!1})):e.serialize()})),[4,this._adapterInstance.signAllTransactions(n)];case 1:if((t=o.sent()).length!==e.length)throw new Error("Failed to sign all transactions");return[2,t.map((function(n,t){return M(e[t])?r.Transaction.from(n):r.VersionedTransaction.deserialize(n)}))]}}))}))},n.prototype.signAndSendTransaction=function(e,n){return U(this,void 0,void 0,(function(){var t;return R(this,(function(r){switch(r.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return t=M(e)?e.serialize({verifySignatures:!1,requireAllSignatures:!1}):e.serialize(),[4,this._adapterInstance.signAndSendTransaction(t,n)];case 1:return[2,r.sent()]}}))}))},n.prototype.signMessage=function(e,n){return void 0===n&&(n="utf8"),U(this,void 0,void 0,(function(){return R(this,(function(t){switch(t.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._adapterInstance.signMessage(e,n)];case 1:return[2,t.sent()]}}))}))},n.prototype.sign=function(e,n){return void 0===n&&(n="utf8"),U(this,void 0,void 0,(function(){return R(this,(function(t){switch(t.label){case 0:return[4,this.signMessage(e,n)];case 1:return[2,t.sent()]}}))}))},n.prototype.detectWallet=function(e){var n;return void 0===e&&(e=10),U(this,void 0,void 0,(function(){return R(this,(function(t){return window.SolflareApp||(null===(n=window.solflare)||void 0===n?void 0:n.isSolflare)?[2,!0]:[2,new Promise((function(n){var t,r;t=setInterval((function(){var e;(window.SolflareApp||(null===(e=window.solflare)||void 0===e?void 0:e.isSolflare))&&(clearInterval(t),clearTimeout(r),n(!0))}),500),r=setTimeout((function(){clearInterval(t),n(!1)}),1e3*e)}))]}))}))},n.IFRAME_URL="https://connect.solflare.com/",n}(o)},36794:e=>{var n=Object.prototype.hasOwnProperty,t="~";function r(){}function o(e,n,t){this.fn=e,this.context=n,this.once=t||!1}function i(e,n,r,i,a){if("function"!==typeof r)throw new TypeError("The listener must be a function");var c=new o(r,i||e,a),s=t?t+n:n;return e._events[s]?e._events[s].fn?e._events[s]=[e._events[s],c]:e._events[s].push(c):(e._events[s]=c,e._eventsCount++),e}function a(e,n){0===--e._eventsCount?e._events=new r:delete e._events[n]}function c(){this._events=new r,this._eventsCount=0}Object.create&&(r.prototype=Object.create(null),(new r).__proto__||(t=!1)),c.prototype.eventNames=function(){var e,r,o=[];if(0===this._eventsCount)return o;for(r in e=this._events)n.call(e,r)&&o.push(t?r.slice(1):r);return Object.getOwnPropertySymbols?o.concat(Object.getOwnPropertySymbols(e)):o},c.prototype.listeners=function(e){var n=t?t+e:e,r=this._events[n];if(!r)return[];if(r.fn)return[r.fn];for(var o=0,i=r.length,a=new Array(i);o<i;o++)a[o]=r[o].fn;return a},c.prototype.listenerCount=function(e){var n=t?t+e:e,r=this._events[n];return r?r.fn?1:r.length:0},c.prototype.emit=function(e,n,r,o,i,a){var c=t?t+e:e;if(!this._events[c])return!1;var s,l,u=this._events[c],d=arguments.length;if(u.fn){switch(u.once&&this.removeListener(e,u.fn,void 0,!0),d){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,n),!0;case 3:return u.fn.call(u.context,n,r),!0;case 4:return u.fn.call(u.context,n,r,o),!0;case 5:return u.fn.call(u.context,n,r,o,i),!0;case 6:return u.fn.call(u.context,n,r,o,i,a),!0}for(l=1,s=new Array(d-1);l<d;l++)s[l-1]=arguments[l];u.fn.apply(u.context,s)}else{var f,p=u.length;for(l=0;l<p;l++)switch(u[l].once&&this.removeListener(e,u[l].fn,void 0,!0),d){case 1:u[l].fn.call(u[l].context);break;case 2:u[l].fn.call(u[l].context,n);break;case 3:u[l].fn.call(u[l].context,n,r);break;case 4:u[l].fn.call(u[l].context,n,r,o);break;default:if(!s)for(f=1,s=new Array(d-1);f<d;f++)s[f-1]=arguments[f];u[l].fn.apply(u[l].context,s)}}return!0},c.prototype.on=function(e,n,t){return i(this,e,n,t,!1)},c.prototype.once=function(e,n,t){return i(this,e,n,t,!0)},c.prototype.removeListener=function(e,n,r,o){var i=t?t+e:e;if(!this._events[i])return this;if(!n)return a(this,i),this;var c=this._events[i];if(c.fn)c.fn!==n||o&&!c.once||r&&c.context!==r||a(this,i);else{for(var s=0,l=[],u=c.length;s<u;s++)(c[s].fn!==n||o&&!c[s].once||r&&c[s].context!==r)&&l.push(c[s]);l.length?this._events[i]=1===l.length?l[0]:l:a(this,i)}return this},c.prototype.removeAllListeners=function(e){var n;return e?(n=t?t+e:e,this._events[n]&&a(this,n)):(this._events=new r,this._eventsCount=0),this},c.prototype.off=c.prototype.removeListener,c.prototype.addListener=c.prototype.on,c.prefixed=t,c.EventEmitter=c,e.exports=c}}]);
//# sourceMappingURL=648.eb38c7ad.chunk.js.map