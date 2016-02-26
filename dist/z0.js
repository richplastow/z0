!function(G,X,NOP,D) {

  //// Prepare `X` for export. 
  if ('function' === typeof define && define.amd) {
    define(function() { return X; }); // define an AMD module
  } else if ('object' === typeof module && module && module.exports) {
    module.exports = X; // export for CommonJS, for example Node.js
  } else if ('object' === typeof window) {
    X = window; // add each `z0` function to the browser `window`
  } else {
    X = G; // not in a browser, so add each `z0` function to global scope
  }

  //// Initialize the document reference, `d`. If no document exists, make `d`
  //// falsey, but also allow `d.someProp` without error. 
  D = X.document || 0;


  //// z0s() stylesheet injection - see github.com/richplastow/z0/wiki/z0a
  !function(l,h,n,i,e,q){if(!l||!l.length)return X.z0s=NOP;e=l[l.length-1],q=e.
  removeRule;e.d=q||e.deleteRule;z0s=function(s,r){i=h[s];i+9?e.d(i):i=h[s]=n++
  q?e.addRule(s,r,i):e.insertRule(s+'{'+r+'}',i)}}(D.styleSheets,{},0)


}(this,{},function(){return'no-op!'});
