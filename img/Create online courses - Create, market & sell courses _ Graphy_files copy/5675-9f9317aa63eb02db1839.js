(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5675],{39917:function(t,e,i){"use strict";var k=i(53848),l=i(83115),j=(e.default=function(t){var e=t.src,i=t.sizes,o=t.unoptimized,o=void 0!==o&&o,n=t.priority,n=void 0!==n&&n,r=t.loading,a=t.lazyBoundary,a=void 0===a?"200px":a,c=t.className,s=t.quality,l=t.width,d=t.height,u=t.objectFit,f=t.objectPosition,m=t.onLoadingComplete,g=t.loader,g=void 0===g?D:g,h=t.placeholder,b=void 0===h?"empty":h,h=t.blurDataURL,t=function(t,e){if(null==t)return{};var i,o,n=function(t,e){if(null==t)return{};var i,o,n={},r=Object.keys(t);for(o=0;o<r.length;o++)i=r[o],0<=e.indexOf(i)||(n[i]=t[i]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)i=r[o],0<=e.indexOf(i)||Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}(t,["src","sizes","unoptimized","priority","loading","lazyBoundary","className","quality","width","height","objectFit","objectPosition","onLoadingComplete","loader","placeholder","blurDataURL"]),p=i?"responsive":"intrinsic";"layout"in t&&(t.layout&&(p=t.layout),delete t.layout);var y="";if(function(t){return"object"==typeof t&&(L(t)||void 0!==t.src)}(e)){var v=L(e)?e.default:e;if(!v.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(v)));if(h=h||v.blurDataURL,y=v.src,!(p&&"fill"===p||(d=d||v.height,l=l||v.width,v.height&&v.width)))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(v)))}e="string"==typeof e?e:y;v=q(l),y=q(d),l=q(s),d=!n&&("lazy"===r||void 0===r);(e.startsWith("data:")||e.startsWith("blob:"))&&(d=!(o=!0));P.has(e)&&(d=!1);var w,x,A,s=_.useIntersection({rootMargin:a,disabled:!d}),a=k(s,2),z=a[0],s=a[1],a=!d||s,d={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:u,objectPosition:f},s="blur"===b?{filter:"blur(20px)",backgroundSize:u||"cover",backgroundImage:'url("'.concat(h,'")'),backgroundPosition:f||"0% 0%"}:{};"fill"===p?w={display:"block",overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",margin:0}:void 0!==v&&void 0!==y&&(u=y/v,h=isNaN(u)?"100%":"".concat(100*u,"%"),"responsive"===p?(w={display:"block",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},x={display:"block",boxSizing:"border-box",paddingTop:h}):"intrinsic"===p?(w={display:"inline-block",maxWidth:"100%",overflow:"hidden",position:"relative",boxSizing:"border-box",margin:0},x={boxSizing:"border-box",display:"block",maxWidth:"100%"},A='<svg width="'.concat(v,'" height="').concat(y,'" xmlns="http://www.w3.org/2000/svg" version="1.1"/>')):"fixed"===p&&(w={overflow:"hidden",boxSizing:"border-box",display:"inline-block",position:"relative",width:v,height:y}));f={src:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",srcSet:void 0,sizes:void 0};a&&(f=R({src:e,unoptimized:o,layout:p,width:v,quality:l,sizes:i,loader:g}));var S=e;return j.default.createElement("div",{style:w},x?j.default.createElement("div",{style:x},A?j.default.createElement("img",{style:{maxWidth:"100%",display:"block",margin:0,border:"none",padding:0},alt:"","aria-hidden":!0,src:"data:image/svg+xml;base64,".concat(E.toBase64(A))}):null):null,j.default.createElement("img",Object.assign({},t,f,{decoding:"async","data-nimg":p,className:c,ref:function(t){var i,o,n,r;z(t),o=S,n=b,r=m,(i=t)&&(t=function(){i.src.startsWith("data:")||("decode"in i?i.decode():Promise.resolve()).catch(function(){}).then(function(){var t,e;"blur"===n&&(i.style.filter="none",i.style.backgroundSize="none",i.style.backgroundImage="none"),P.add(o),r&&(t=i.naturalWidth,e=i.naturalHeight,r({naturalWidth:t,naturalHeight:e}))})},i.complete?t():i.onload=t)},style:I({},d,s)})),j.default.createElement("noscript",null,j.default.createElement("img",Object.assign({},t,R({src:e,unoptimized:o,layout:p,width:v,quality:l,sizes:i,loader:g}),{decoding:"async","data-nimg":p,style:d,className:c,loading:r||"lazy"}))),n?j.default.createElement(O.default,null,j.default.createElement("link",{key:"__nimg-"+f.src+f.srcSet+f.sizes,rel:"preload",as:"image",href:f.srcSet?void 0:f.src,imagesrcset:f.srcSet,imagesizes:f.sizes})):null)},n(i(67294))),O=n(i(70639)),E=i(28997),o=i(5809),_=i(7426);function n(t){return t&&t.__esModule?t:{default:t}}function I(o){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},e=Object.keys(n);(e="function"==typeof Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})):e).forEach(function(t){var e,i;e=o,i=n[t=t],t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i})}return o}var P=new Set,r=new Map([["default",function(t){var e=t.root,i=t.src,o=t.width,t=t.quality;return"".concat(e,"?url=").concat(encodeURIComponent(i),"&w=").concat(o,"&q=").concat(t||75)}],["imgix",function(t){var e=t.root,i=t.src,o=t.width,t=t.quality,e=new URL("".concat(e).concat(s(i))),i=e.searchParams;i.set("auto",i.get("auto")||"format"),i.set("fit",i.get("fit")||"max"),i.set("w",i.get("w")||o.toString()),t&&i.set("q",t.toString());return e.href}],["cloudinary",function(t){var e=t.root,i=t.src,o=t.width,t=t.quality,o=["f_auto","c_limit","w_"+o,"q_"+(t||"auto")].join(",")+"/";return"".concat(e).concat(o).concat(s(i))}],["akamai",function(t){var e=t.root,i=t.src,t=t.width;return"".concat(e).concat(s(i),"?imwidth=").concat(t)}],["custom",function(t){t=t.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function L(t){return void 0!==t.default}var e={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default"},d=e.deviceSizes,i=e.imageSizes,a=e.loader,c=e.path,u=[].concat(l(d),l(i));function R(t){var i,o=t.src,e=t.unoptimized,n=t.layout,r=t.width,a=t.quality,c=t.sizes,s=t.loader;return e?{src:o,srcSet:void 0,sizes:void 0}:(e=(t=function(t,e,i){if(!i||"fill"!==e&&"responsive"!==e)return"number"!=typeof t||"fill"===e||"responsive"===e?{widths:d,kind:"w"}:{widths:l(new Set([t,2*t].map(function(e){return u.find(function(t){return e<=t})||u[u.length-1]}))),kind:"x"};for(var o,n,r=/(^|\s)(1?\d?\d)vw/g,a=[];o=r.exec(i);)a.push(parseInt(o[2]));return a.length?(n=.01*Math.min.apply(Math,a),{widths:u.filter(function(t){return t>=d[0]*n}),kind:"w"}):{widths:u,kind:"w"}}(r,n,c)).widths,i=t.kind,r=e.length-1,{sizes:c||"w"!==i?c:"100vw",srcSet:e.map(function(t,e){return"".concat(s({src:o,quality:a,width:t})," ").concat("w"===i?t:e+1).concat(i)}).join(", "),src:s({src:o,quality:a,width:e[r]})})}function q(t){return"number"==typeof t?t:"string"==typeof t?parseInt(t,10):void 0}function D(t){var e=r.get(a);if(e)return e(I({root:c},t));throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(o.VALID_LOADERS.join(", "),". Received: ").concat(a))}function s(t){return"/"===t[0]?t.slice(1):t}d.sort(function(t,e){return t-e}),u.sort(function(t,e){return t-e})},28997:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.toBase64=function(t){return window.btoa(t)}},5809:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.imageConfigDefault=e.VALID_LOADERS=void 0;e.VALID_LOADERS=["default","imgix","cloudinary","akamai","custom"];e.imageConfigDefault={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",domains:[],disableStaticImages:!1,minimumCacheTTL:60}},25675:function(t,e,i){t.exports=i(39917)}}]);