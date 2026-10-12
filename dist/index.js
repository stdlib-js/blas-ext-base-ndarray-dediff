"use strict";var k=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var j=k(function(C,h){
var u=require('@stdlib/ndarray-base-numel-dimension/dist'),i=require('@stdlib/ndarray-base-stride/dist'),d=require('@stdlib/ndarray-base-offset/dist'),o=require('@stdlib/ndarray-base-data-buffer/dist'),w=require('@stdlib/blas-ext-base-dediff/dist').ndarray;function z(a){var r,e,v,n,s,p,q,x,f,c,g,m,N,D,l,O,S,b,t;return t=a[0],r=a[1],e=a[2],v=a[3],b=u(t,0),D=u(r,0),N=u(e,0),S=o(t),p=o(r),m=o(e),f=o(v),O=i(t,0),s=i(r,0),g=i(e,0),x=i(v,0),l=d(t),n=d(r),c=d(e),q=d(v),w(b,S,O,l,D,p,s,n,N,m,g,c,f,x,q),v}h.exports=z
});var A=j();module.exports=A;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
