!function(e){var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,r){!function(e,n){if(!g[e]||!O[e])return;for(var r in O[e]=!1,n)Object.prototype.hasOwnProperty.call(n,r)&&(y[r]=n[r]);0==--b&&0===m&&E()}(e,r),n&&n(e,r)};var r,t=!0,o="94b4e86d80e438005ef2",c=1e4,i={},d=[],a=[];function l(e){var n=P[e];if(!n)return x;var t=function(t){return n.hot.active?(P[t]?-1===P[t].parents.indexOf(e)&&P[t].parents.push(e):(d=[e],r=t),-1===n.children.indexOf(t)&&n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),d=[]),x(t)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return x[e]},set:function(n){x[e]=n}}};for(var c in x)Object.prototype.hasOwnProperty.call(x,c)&&"e"!==c&&"t"!==c&&Object.defineProperty(t,c,o(c));return t.e=function(e){return"ready"===p&&f("prepare"),m++,x.e(e).then(n,(function(e){throw n(),e}));function n(){m--,"prepare"===p&&(w[e]||j(e),0===m&&0===b&&E())}},t.t=function(e,n){return 1&n&&(e=t(e)),x.t(e,-2&n)},t}function u(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:r!==e,active:!0,accept:function(e,r){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._acceptedDependencies[e[t]]=r||function(){};else n._acceptedDependencies[e]=r||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._declinedDependencies[e[r]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=n._disposeHandlers.indexOf(e);r>=0&&n._disposeHandlers.splice(r,1)},check:D,apply:H,status:function(e){if(!e)return p;s.push(e)},addStatusHandler:function(e){s.push(e)},removeStatusHandler:function(e){var n=s.indexOf(e);n>=0&&s.splice(n,1)},data:i[e]};return r=void 0,n}var s=[],p="idle";function f(e){p=e;for(var n=0;n<s.length;n++)s[n].call(null,e)}var h,y,v,b=0,m=0,w={},O={},g={};function _(e){return+e+""===e?+e:e}function D(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return t=e,f("check"),(n=c,n=n||1e4,new Promise((function(e,r){if("undefined"==typeof XMLHttpRequest)return r(new Error("No browser support"));try{var t=new XMLHttpRequest,c=x.p+""+o+".hot-update.json";t.open("GET",c,!0),t.timeout=n,t.send(null)}catch(e){return r(e)}t.onreadystatechange=function(){if(4===t.readyState)if(0===t.status)r(new Error("Manifest request to "+c+" timed out."));else if(404===t.status)e();else if(200!==t.status&&304!==t.status)r(new Error("Manifest request to "+c+" failed."));else{try{var n=JSON.parse(t.responseText)}catch(e){return void r(e)}e(n)}}}))).then((function(e){if(!e)return f("idle"),null;O={},w={},g=e.c,v=e.h,f("prepare");var n=new Promise((function(e,n){h={resolve:e,reject:n}}));y={};return j(0),"prepare"===p&&0===m&&0===b&&E(),n}));var n}function j(e){g[e]?(O[e]=!0,b++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=x.p+""+e+"."+o+".hot-update.js",document.head.appendChild(n)}(e)):w[e]=!0}function E(){f("ready");var e=h;if(h=null,e)if(t)Promise.resolve().then((function(){return H(t)})).then((function(n){e.resolve(n)}),(function(n){e.reject(n)}));else{var n=[];for(var r in y)Object.prototype.hasOwnProperty.call(y,r)&&n.push(_(r));e.resolve(n)}}function H(n){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var r,t,c,a,l;function u(e){for(var n=[e],r={},t=n.map((function(e){return{chain:[e],id:e}}));t.length>0;){var o=t.pop(),c=o.id,i=o.chain;if((a=P[c])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:c};if(a.hot._main)return{type:"unaccepted",chain:i,moduleId:c};for(var d=0;d<a.parents.length;d++){var l=a.parents[d],u=P[l];if(u){if(u.hot._declinedDependencies[c])return{type:"declined",chain:i.concat([l]),moduleId:c,parentId:l};-1===n.indexOf(l)&&(u.hot._acceptedDependencies[c]?(r[l]||(r[l]=[]),s(r[l],[c])):(delete r[l],n.push(l),t.push({chain:i.concat([l]),id:l})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}function s(e,n){for(var r=0;r<n.length;r++){var t=n[r];-1===e.indexOf(t)&&e.push(t)}}n=n||{};var h={},b=[],m={},w=function(){console.warn("[HMR] unexpected require("+D.moduleId+") to disposed module")};for(var O in y)if(Object.prototype.hasOwnProperty.call(y,O)){var D;l=_(O);var j=!1,E=!1,H=!1,I="";switch((D=y[O]?u(l):{type:"disposed",moduleId:O}).chain&&(I="\nUpdate propagation: "+D.chain.join(" -> ")),D.type){case"self-declined":n.onDeclined&&n.onDeclined(D),n.ignoreDeclined||(j=new Error("Aborted because of self decline: "+D.moduleId+I));break;case"declined":n.onDeclined&&n.onDeclined(D),n.ignoreDeclined||(j=new Error("Aborted because of declined dependency: "+D.moduleId+" in "+D.parentId+I));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(D),n.ignoreUnaccepted||(j=new Error("Aborted because "+l+" is not accepted"+I));break;case"accepted":n.onAccepted&&n.onAccepted(D),E=!0;break;case"disposed":n.onDisposed&&n.onDisposed(D),H=!0;break;default:throw new Error("Unexception type "+D.type)}if(j)return f("abort"),Promise.reject(j);if(E)for(l in m[l]=y[l],s(b,D.outdatedModules),D.outdatedDependencies)Object.prototype.hasOwnProperty.call(D.outdatedDependencies,l)&&(h[l]||(h[l]=[]),s(h[l],D.outdatedDependencies[l]));H&&(s(b,[D.moduleId]),m[l]=w)}var k,M=[];for(t=0;t<b.length;t++)l=b[t],P[l]&&P[l].hot._selfAccepted&&m[l]!==w&&M.push({module:l,errorHandler:P[l].hot._selfAccepted});f("dispose"),Object.keys(g).forEach((function(e){!1===g[e]&&function(e){delete installedChunks[e]}(e)}));for(var A,S,U=b.slice();U.length>0;)if(l=U.pop(),a=P[l]){var q={},R=a.hot._disposeHandlers;for(c=0;c<R.length;c++)(r=R[c])(q);for(i[l]=q,a.hot.active=!1,delete P[l],delete h[l],c=0;c<a.children.length;c++){var T=P[a.children[c]];T&&((k=T.parents.indexOf(l))>=0&&T.parents.splice(k,1))}}for(l in h)if(Object.prototype.hasOwnProperty.call(h,l)&&(a=P[l]))for(S=h[l],c=0;c<S.length;c++)A=S[c],(k=a.children.indexOf(A))>=0&&a.children.splice(k,1);for(l in f("apply"),o=v,m)Object.prototype.hasOwnProperty.call(m,l)&&(e[l]=m[l]);var C=null;for(l in h)if(Object.prototype.hasOwnProperty.call(h,l)&&(a=P[l])){S=h[l];var J=[];for(t=0;t<S.length;t++)if(A=S[t],r=a.hot._acceptedDependencies[A]){if(-1!==J.indexOf(r))continue;J.push(r)}for(t=0;t<J.length;t++){r=J[t];try{r(S)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:l,dependencyId:S[t],error:e}),n.ignoreErrored||C||(C=e)}}}for(t=0;t<M.length;t++){var L=M[t];l=L.module,d=[l];try{x(l)}catch(e){if("function"==typeof L.errorHandler)try{L.errorHandler(e)}catch(r){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:r,originalError:e}),n.ignoreErrored||C||(C=r),C||(C=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:l,error:e}),n.ignoreErrored||C||(C=e)}}return C?(f("fail"),Promise.reject(C)):(f("idle"),new Promise((function(e){e(b)})))}var P={};function x(n){if(P[n])return P[n].exports;var r=P[n]={i:n,l:!1,exports:{},hot:u(n),parents:(a=d,d=[],a),children:[]};return e[n].call(r.exports,r,r.exports,l(n)),r.l=!0,r.exports}x.m=e,x.c=P,x.d=function(e,n,r){x.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},x.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},x.t=function(e,n){if(1&n&&(e=x(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(x.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)x.d(r,t,function(n){return e[n]}.bind(null,t));return r},x.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return x.d(n,"a",n),n},x.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},x.p="",x.h=function(){return o},l(1)(x.s=1)}([function(e,n,r){},function(e,n,r){"use strict";r.r(n);r(0);var t=function(e){return console.log("Devine log: ".concat(e))};t("Hey, ik ben een JS file");t.apply(void 0,["Ik kan ES6 stuff aan"].concat([1,2,3]))}]);