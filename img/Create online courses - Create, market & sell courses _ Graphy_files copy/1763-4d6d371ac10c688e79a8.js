(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1763],{25116:function(d,e,t){"use strict";t.d(e,{Bp:function(){return s},v2:function(){return r},j2:function(){return h},sN:function(){return g},Wd:function(){return c},w8:function(){return P}});var ge=t(67294),M=t(73935),e=t(45697),n=t.n(e);const Ee="rc-menu",L="item",ve=ge.createContext({}),ye=ge.createContext({}),x=ge.createContext({}),I=ge.createContext({}),Ce=ge.createContext({}),B=ge.createContext({}),Oe=Object.freeze({ENTER:"Enter",ESC:"Escape",SPACE:" ",HOME:"Home",END:"End",LEFT:"ArrowLeft",RIGHT:"ArrowRight",UP:"ArrowUp",DOWN:"ArrowDown"}),Re=Object.freeze({RESET:"HOVER_INDEX_RESET",SET:"HOVER_INDEX_SET",UNSET:"HOVER_INDEX_UNSET",INCREASE:"HOVER_INDEX_INCREASE",DECREASE:"HOVER_INDEX_DECREASE",FIRST:"HOVER_INDEX_FIRST",LAST:"HOVER_INDEX_LAST"}),we=Object.freeze({OPEN:"SUBMENU_OPEN",CLOSE:"SUBMENU_CLOSE"}),ke=Object.freeze({CLICK:"click",CANCEL:"cancel",BLUR:"blur",SCROLL:"scroll"}),Me=M.unstable_batchedUpdates||(e=>e()),o=(e,t)=>t?Object.defineProperty(e,"_reactMenu",{value:t,writable:!1}):e,D=e=>e&&e._reactMenu;const Ne=(e,...t)=>"function"==typeof e?e(...t):e,Se=(t,n)=>{const o={};for(const r of Object.keys(t)){const i=t[r],a=n[r];let e;e="function"==typeof a?e=>{a(e),i(e)}:i,o[r]=e}return o},Te=({block:i,element:a,modifiers:s,className:u,externalModifiers:l})=>(0,ge.useMemo)(()=>{var e=a?i+"__"+a:i;let t=e;for(const r of Object.keys(s||{})){var n=s[r];n&&(t=(t+=` ${e}--`)+(!0===n?r:r+"-"+n))}let o="function"==typeof u?u(l||s):u;return"string"==typeof o&&(o=o.trim())&&(t+=" "+o),t},[i,a,s,u,l]),u=e=>e&&"object"==typeof e,l=e=>"$"===e.charAt(0)?e.slice(1):e,xe=(a,s)=>(0,ge.useMemo)(()=>{if("function"==typeof a)return a(s);if(u(a)){if(!s)return a;const o={};for(const r of Object.keys(a)){var e=a[r];if(u(e)){var t=s[l(r)];if("string"==typeof t)for(const i of Object.keys(e)){var n=e[i];u(n)?l(i)===t&&Object.assign(o,n):o[i]=n}else t&&Object.assign(o,e)}else o[r]=e}return o}},[a,s]),Pe=e=>{for(;e&&e!==document.body;){var{overflow:t,overflowX:n,overflowY:o}=getComputedStyle(e);if(/auto|scroll|overlay|hidden/.test(t+o+n))return e;e=e.parentNode}return window},Ie=(e,t,n=1e-4)=>Math.abs(e-t)<n,De=!0,m=(e,t,n)=>!!t&&(!!n.includes(D(t.type))||(De||console.warn(`[react-menu] ${t.type||t} is ignored.
`,`The permitted children inside a ${e} are ${n.join(", ")}.`,"If you create HOC of these components, you can use the applyHOC or applyStatics helper, see more at: https://szhsin.github.io/react-menu/docs#utils-apply-hoc"),!1)),Ae=(e,t=0)=>{let i=t,a=!1;const s=["MenuDivider","MenuGroup","MenuHeader","MenuItem","FocusableItem","MenuRadioGroup","SubMenu"];return{items:ge.Children.map(e,e=>{if(!m("Menu or SubMenu",e,s))return null;switch(D(e.type)){case"MenuDivider":case"MenuHeader":return e;case"MenuRadioGroup":{const s=["MenuItem"],r={type:"radio"};var t=ge.Children.map(e.props.children,e=>m("MenuRadioGroup",e,s)?e.props.disabled?ge.cloneElement(e,r):ge.cloneElement(e,{...r,index:i++}):null);return ge.cloneElement(e,{children:t})}case"MenuGroup":var{items:t,endIndex:n,descendOverflow:o}=Ae(e.props.children,i),n=(i=n,Boolean(e.props.takeOverflow));if(!De&&(a===o?o:n))throw new Error("[react-menu] Only one MenuGroup in a menu is allowed to have takeOverflow prop.");return a=a||o||n,ge.cloneElement(e,{children:t});default:return e.props.disabled?e:ge.cloneElement(e,{index:i++})}}),endIndex:i,descendOverflow:a}};var t=e=>({[e?e+"ClassName":"className"]:n().oneOfType([n().string,n().func]),[e?e+"Styles":"styles"]:n().oneOfType([n().object,n().func])}),e={...t(),...t("arrow"),"aria-label":n().string,arrow:n().bool,offsetX:n().number,offsetY:n().number,align:n().oneOf(["start","center","end"]),direction:n().oneOf(["left","right","top","bottom"]),position:n().oneOf(["auto","anchor","initial"]),overflow:n().oneOf(["auto","visible","hidden"]),children:n().node.isRequired},f={...e,id:n().oneOfType([n().string,n().number]),animation:n().bool,debugging:n().bool,boundingBoxRef:n().object,boundingBoxPadding:n().string,reposition:n().oneOf(["auto","initial"]),repositionFlag:n().oneOfType([n().string,n().number]),viewScroll:n().oneOf(["auto","close","initial"]),submenuOpenDelay:n().number,submenuCloseDelay:n().number,portal:n().bool,theming:n().string,onItemClick:n().func,onClick:n().func},p={offsetX:0,offsetY:0,align:"start",direction:"bottom",position:"auto",overflow:"visible"},b={...p,animation:!0,reposition:"auto",viewScroll:"initial",submenuOpenDelay:300,submenuCloseDelay:150};const A=(t,n,e)=>{const[o,r]=(0,ge.useState)(!1),i=(0,ge.useMemo)(()=>[Oe.SPACE,Oe.ENTER,...e?[e]:[]],[e]);var a=(0,ge.useCallback)(()=>r(!1),[]);return{isActive:o,onPointerDown:(0,ge.useCallback)(()=>{n||r(!0)},[n]),onPointerUp:a,onPointerLeave:a,onKeyDown:(0,ge.useCallback)(e=>{t&&!n&&i.includes(e.key)&&r(!0)},[t,n,i]),onKeyUp:(0,ge.useCallback)(e=>{i.includes(e.key)&&r(!1)},[i]),onBlur:(0,ge.useCallback)(e=>{e.currentTarget.contains(e.relatedTarget)||r(!1)},[])}},j=(e,n)=>{const t=(0,ge.useRef)(null),o=(0,ge.useContext)(B)["submenuCloseDelay"],{isParentOpen:r,hoverIndex:i,isSubmenuOpen:a,dispatch:s}=(0,ge.useContext)(ve),u=i===n,l=(0,ge.useRef)(),c=(0,ge.useCallback)(()=>{e||s({type:Re.SET,index:n})},[e,s,n]);var d=(0,ge.useCallback)(e=>{e.currentTarget.contains(e.relatedTarget)||s({type:Re.UNSET,index:n})},[s,n]),m=(0,ge.useCallback)(()=>{a?l.current=setTimeout(c,o):c()},[a,o,c]),f=(0,ge.useCallback)((e,t)=>{l.current&&clearTimeout(l.current),t||s({type:Re.UNSET,index:n})},[s,n]);return(0,ge.useEffect)(()=>()=>clearTimeout(l.current),[]),(0,ge.useEffect)(()=>{u&&r&&t.current&&t.current.focus()},[u,r]),{ref:t,isHovering:u,setHover:c,onBlur:d,onMouseEnter:m,onMouseLeave:f}},H=(e,t)=>{const n=(0,ge.useRef)(t);(0,ge.useEffect)(()=>{n.current!==t&&Ne(e,{open:t}),n.current=t},[e,t])},Le=Object.freeze({INITIAL:"initial",FIRST:"first",LAST:"last"}),i=Object.freeze({UNMOUNTED:0,CLOSED:1,OPEN:2}),a=Object.freeze({OPEN:0,CLOSE:1,TOGGLE:2}),P=(n=!0)=>{const[e,t]=(0,ge.useState)({position:Le.INITIAL}),[o,r]=(0,ge.useReducer)(function(e,{type:t}){switch(t){case a.OPEN:return i.OPEN;case a.CLOSE:return e===i.OPEN?n?i.CLOSED:i.UNMOUNTED:e;case a.TOGGLE:return e===i.OPEN?n?i.CLOSED:i.UNMOUNTED:i.OPEN;default:throw new Error("menuStateReducer: unknown action type")}},i.UNMOUNTED);return{isMounted:o!==i.UNMOUNTED,isOpen:o===i.OPEN,menuItemFocus:e,openMenu:(0,ge.useCallback)((e=Le.INITIAL)=>{t({position:e}),r({type:a.OPEN})},[]),closeMenu:(0,ge.useCallback)(()=>r({type:a.CLOSE}),[]),toggleMenu:(0,ge.useCallback)((e=Le.INITIAL)=>{t({position:e}),r({type:a.TOGGLE})},[])}},Be="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?ge.useLayoutEffect:ge.useEffect,h=o(ge.memo(ge.forwardRef(function({className:e,styles:t,isOpen:n,disabled:o,children:r,...i},a){var s=(0,ge.useMemo)(()=>Object.freeze({open:n}),[n]);return ge.createElement("button",Object.assign({"aria-haspopup":"true","aria-expanded":n,"aria-disabled":o||void 0,disabled:o},i,{ref:a,className:Te({block:"rc-menu-button",modifiers:s,className:e}),style:xe(t,s)}),r)})),"MenuButton"),U=(h.propTypes={...t(),isOpen:n().bool,disabled:n().bool,children:n().node.isRequired,onClick:n().func,onKeyDown:n().func},o(ge.memo(function({ariaLabel:A,className:j,styles:H,arrowClassName:e,arrowStyles:U,anchorPoint:m,anchorRef:f,containerRef:p,arrow:b,align:h,direction:g,position:E,overflow:v,repositionFlag:t,captureFocus:F=!0,isOpen:i,isDisabled:_,menuItemFocus:n,offsetX:z,offsetY:X,children:G,onClose:K,...Y}){const[V,q]=(0,ge.useState)({x:0,y:0}),[o,W]=(0,ge.useState)({}),[r,y]=(0,ge.useState)(),[a,s]=(0,ge.useState)(!1),[u,$]=(0,ge.useState)(g),{animation:l,boundingBoxRef:C,boundingBoxPadding:J,rootMenuRef:Q,rootAnchorRef:c,scrollingRef:O,anchorScrollingRef:d,reposition:Z,viewScroll:R}=(0,ge.useContext)(Ce),w=(0,ge.useRef)(null),k=(0,ge.useRef)(null),M=(0,ge.useRef)(0),N=(0,ge.useRef)(i),S=(0,ge.useRef)({width:0,height:0}),ee=(0,ge.useRef)(()=>{}),T=(0,ge.useRef)(!1);t=(0,ge.useContext)(ye).reposSubmenu||t;const[te,ne]=(0,ge.useReducer)(e=>e+1,1),[{hoverIndex:oe,openSubmenuCount:re},x]=(0,ge.useReducer)(function({hoverIndex:e,openSubmenuCount:t},n){return{hoverIndex:function(t,{type:e,index:n}){switch(e){case Re.RESET:return-1;case Re.SET:return n;case Re.UNSET:return t===n?-1:t;case Re.DECREASE:{let e=t;return e=--e<0?M.current-1:e}case Re.INCREASE:{let e=t;return e=++e>=M.current?0:e}case Re.FIRST:return 0<M.current?0:-1;case Re.LAST:return 0<M.current?M.current-1:-1;default:return t}}(e,n),openSubmenuCount:function(e,{type:t}){switch(t){case we.OPEN:return e+1;case we.CLOSE:return Math.max(e-1,0);default:return e}}(t,n)}},{hoverIndex:-1,openSubmenuCount:0});var ie=(0,ge.useMemo)(()=>{var{items:e,endIndex:t,descendOverflow:n}=Ae(G);return M.current=t,T.current=n,e},[G]);const ae=(0,ge.useCallback)(()=>{const t=w.current.getBoundingClientRect(),n=p.current.getBoundingClientRect(),o=O.current===window?{left:0,top:0,right:document.documentElement.clientWidth,bottom:window.innerHeight}:O.current.getBoundingClientRect(),r="string"!=typeof(e=J)?{top:0,right:0,bottom:0,left:0}:(e=e.trim().split(/\s+/,4).map(parseFloat),{top:i=isNaN(e[0])?0:e[0],right:a=isNaN(e[1])?i:e[1],bottom:isNaN(e[2])?i:e[2],left:isNaN(e[3])?a:e[3]});var e,i,a;const s=e=>e+n.left-o.left-r.left,u=e=>e+n.left+t.width-o.right+r.right,l=e=>e+n.top-o.top-r.top,c=e=>e+n.top+t.height-o.bottom+r.bottom;return{menuRect:t,containerRect:n,getLeftOverflow:s,getRightOverflow:u,getTopOverflow:l,getBottomOverflow:c,confineHorizontally:e=>{let t=s(e);var n;return t<0?e-=t:0<(n=u(e))&&(e-=n,(t=s(e))<0&&(e-=t)),e},confineVertically:e=>{let t=l(e);var n;return t<0?e-=t:0<(n=c(e))&&(e-=n,(t=l(e))<0&&(e-=t)),e}}},[p,O,J]),se=(0,ge.useCallback)((e,t,n,o)=>{n=t.left-n.left-e+t.width/2,e=1.25*k.current.offsetWidth,n=Math.max(e,n);return Math.min(n,o.width-e)},[]),ue=(0,ge.useCallback)((e,t,n,o)=>{n=t.top-n.top-e+t.height/2,e=1.25*k.current.offsetHeight,n=Math.max(e,n);return Math.min(n,o.height-e)},[]),le=(0,ge.useCallback)(({anchorRect:e,containerRect:t,menuRect:n},{placeLeftorRightY:o,placeLeftX:r,placeRightX:i},{getLeftOverflow:a,getRightOverflow:s,confineHorizontally:u,confineVertically:l})=>{let c=g,d=o;"initial"!==E&&(d=l(d),"anchor"===E&&(d=Math.min(d,e.bottom-t.top),d=Math.max(d,e.top-t.top-n.height)));let m,f,p;return"left"===c?(m=r,"initial"!==E&&(f=a(m))<0&&((p=s(i))<=0||-f>p)&&(m=i,c="right")):(m=i,"initial"!==E&&0<(p=s(m))&&(0<=(f=a(r))||-f<p)&&(m=r,c="left")),"auto"===E&&(m=u(m)),{arrowY:b?ue(d,e,t,n):void 0,x:m,y:d,computedDirection:c}},[ue,b,g,E]),ce=(0,ge.useCallback)(({anchorRect:e,containerRect:t,menuRect:n},{placeToporBottomX:o,placeTopY:r,placeBottomY:i},{getTopOverflow:a,getBottomOverflow:s,confineHorizontally:u,confineVertically:l})=>{let c="top"===g?"top":"bottom",d=o;"initial"!==E&&(d=u(d),"anchor"===E&&(d=Math.min(d,e.right-t.left),d=Math.max(d,e.left-t.left-n.width)));let m,f,p;return"top"===c?(m=r,"initial"!==E&&(f=a(m))<0&&((p=s(i))<=0||-f>p)&&(m=i,c="bottom")):(m=i,"initial"!==E&&0<(p=s(m))&&(0<=(f=a(r))||-f<p)&&(m=r,c="top")),"auto"===E&&(m=l(m)),{arrowX:b?se(d,e,t,n):void 0,x:d,y:m,computedDirection:c}},[se,b,g,E]),de=(0,ge.useCallback)((e,t)=>{const{menuRect:n,containerRect:o,...r}=e;let i=z,a=X;b&&("left"===g||"right"===g?i+=k.current.offsetWidth:a+=k.current.offsetHeight);var e=t.current.getBoundingClientRect(),t=e.left-o.left-n.width-i,s=e.right-o.left+i,u=e.top-o.top-n.height-a,l=e.bottom-o.top+a;let c,d;d="end"===h?(c=e.right-o.left-n.width,e.bottom-o.top-n.height):"center"===h?(c=e.left-o.left-(n.width-e.width)/2,e.top-o.top-(n.height-e.height)/2):(c=e.left-o.left,e.top-o.top),c+=i;var m={anchorRect:e,containerRect:o,menuRect:n},f={placeLeftX:t,placeRightX:s,placeLeftorRightY:d+=a,placeTopY:u,placeBottomY:l,placeToporBottomX:c};switch(g){case"left":case"right":return le(m,f,r);default:return ce(m,f,r)}},[b,h,g,z,X,le,ce]),me=(0,ge.useCallback)((e,t)=>{const{menuRect:n,containerRect:o,getLeftOverflow:r,getRightOverflow:i,getTopOverflow:a,getBottomOverflow:s,confineHorizontally:u,confineVertically:l}=e;let c,d;c=t.x-o.left,d=t.y-o.top;e=i(c);0<e&&(t=c-n.width,(0<=(f=r(t))||-f<e)&&(c=t),c=u(c));let m="bottom";var f=s(d);return 0<f&&(e=d-n.height,(0<=(t=a(e))||-t<f)&&(d=e,m="top"),d=l(d)),{x:c,y:d,computedDirection:m}},[]),I=(0,ge.useCallback)(()=>{if(!p.current){if(De)return;throw new Error("[react-menu] Menu cannot be positioned properly as container ref is null. If you initialise isOpen prop to true for ControlledMenu, please see this link for a solution: https://github.com/szhsin/react-menu/issues/2#issuecomment-719166062")}O.current||(O.current=C?C.current:Pe(Q.current));var n=ae(),e=n["menuRect"];let t={computedDirection:"bottom"},{arrowX:o,arrowY:r,x:i,y:a,computedDirection:s}=(m?t=me(n,m):f&&(t=de(n,f)),t),u=e.height;if("visible"!==v){const{getTopOverflow:c,getBottomOverflow:d}=n;let e,t;var n=S.current.height,l=d(a);0<l||Ie(l,0)&&Ie(u,n)?(e=u-l,t=l):((l=c(a))<0||Ie(l,0)&&Ie(u,n))&&(e=u+l,t=0-l,0<=e&&(a-=l)),0<=e?(u=e,y({height:e,overflowAmt:t})):y()}b&&W({x:o,y:r}),q({x:i,y:a}),$(s),S.current={width:e.width,height:u}},[b,m,f,p,C,Q,O,v,ae,de,me]),fe=(Be(()=>{i&&(I(),N.current&&ne()),ee.current=I},[i,I,t]),Be(()=>{r&&!T.current&&(w.current.scrollTop=0)},[r]),Be(()=>{l&&(i?s(!1):i!==N.current&&s(!0)),N.current=i},[l,i]),(0,ge.useEffect)(()=>{if(i){!d.current&&c&&c.current.tagName&&(d.current=Pe(c.current));var t=O.current,t=t&&t.addEventListener?t:window,n=d.current||t;let e=R;if("initial"!==(e=n!==t&&"initial"===e?"auto":e)){"auto"===e&&"visible"!==v&&(e="close");const o=()=>{"auto"===e?Me(I):Ne(K,{reason:ke.SCROLL})},r=n!==t&&"initial"!==R?[n,t]:[n];return r.forEach(e=>e.addEventListener("scroll",o)),()=>r.forEach(e=>e.removeEventListener("scroll",o))}}},[c,d,O,i,v,K,R,I]),(0,ge.useEffect)(()=>{if("function"==typeof ResizeObserver&&"initial"!==Z){const e=new ResizeObserver(([e])=>{const{borderBoxSize:t,target:n}=e;let o,r;var i;r=t?({inlineSize:e,blockSize:i}=t[0]||t,o=e,i):(e=n.getBoundingClientRect(),o=e.width,e.height),0===o||0===r||Ie(o,S.current.width,1)&&Ie(r,S.current.height,1)||Me(()=>{ee.current(),ne()})}),t=w.current;return e.observe(t,{box:"border-box"}),()=>e.unobserve(t)}},[Z]),(0,ge.useEffect)(()=>{i||(x({type:Re.RESET}),l||y());const e=setTimeout(()=>{i&&w.current&&!w.current.contains(document.activeElement)&&(F&&w.current.focus(),n.position===Le.FIRST?x({type:Re.FIRST}):n.position===Le.LAST&&x({type:Re.LAST}))},l?170:100);return()=>clearTimeout(e)},[l,F,i,n]),0<re);t=(0,ge.useMemo)(()=>({isParentOpen:i,hoverIndex:oe,isSubmenuOpen:fe,dispatch:x}),[i,oe,fe]);let D,L;r&&(T.current?L=r.overflowAmt:D=r.height);var pe=(0,ge.useMemo)(()=>({reposSubmenu:te,overflow:v,overflowAmt:L}),[te,v,L]),be=0<=D?{maxHeight:D,overflow:v}:void 0;const B=(0,ge.useMemo)(()=>({open:i,closing:a,animation:l,dir:l&&u}),[i,a,l,u]);var he=(0,ge.useMemo)(()=>Object.freeze({...B,dir:u}),[B,u]),P=(0,ge.useMemo)(()=>Object.freeze({dir:u}),[u]),e=Te({block:Ee,element:"arrow",modifiers:P,className:e}),U=xe(U,P),P=Se({onKeyDown:e=>{let t=!1;switch(e.key){case Oe.HOME:x({type:Re.FIRST}),t=!0;break;case Oe.END:x({type:Re.LAST}),t=!0;break;case Oe.UP:x({type:Re.DECREASE}),t=!0;break;case Oe.DOWN:x({type:Re.INCREASE}),t=!0;break;case Oe.SPACE:e.target&&e.target.className.includes(Ee)&&e.preventDefault()}t&&(e.preventDefault(),e.stopPropagation())},onAnimationEnd:()=>{a&&(s(!1),y())}},Y);return ge.createElement("ul",Object.assign({role:"menu",tabIndex:"-1","aria-disabled":_||void 0,"aria-label":A},Y,P,{ref:w,className:Te({block:Ee,modifiers:B,className:j,externalModifiers:he}),style:{...xe(H,he),...be,left:V.x+"px",top:V.y+"px"}}),b&&ge.createElement("div",{className:e,style:{...U,left:o.x&&o.x+"px",top:o.y&&o.y+"px"},ref:k}),ge.createElement(ye.Provider,{value:pe},ge.createElement(ve.Provider,{value:t},ie)))}),"MenuList"));const F=(e,{id:t,animation:n,boundingBoxRef:o,boundingBoxPadding:r,debugging:i,reposition:a,submenuOpenDelay:s,submenuCloseDelay:u,viewScroll:l,portal:c,theming:d,isMounted:m,onItemClick:f,onClick:p,onClose:b,skipClick:h})=>{const g=(0,ge.useRef)(null),E=(0,ge.useRef)(null),v=(0,ge.useRef)(null),{anchorRef:y,isOpen:C}=e;var O=(0,ge.useMemo)(()=>({animation:n,boundingBoxRef:o,boundingBoxPadding:r,rootMenuRef:g,rootAnchorRef:y,scrollingRef:E,anchorScrollingRef:v,reposition:a,viewScroll:l}),[n,y,o,r,a,l]),R=(0,ge.useMemo)(()=>({debugging:i,submenuOpenDelay:s,submenuCloseDelay:u}),[i,s,u]),w=(0,ge.useMemo)(()=>({handleClick(e,t,n){t||Ne(f||p,e);let o=e.keepOpen;(o=void 0===o?n&&e.key===Oe.SPACE:o)||Ne(b,{value:e.value,key:e.key,reason:ke.CLICK})},handleClose(e){Ne(b,{key:e,reason:ke.CLICK})}}),[f,p,b]),k=(0,ge.useMemo)(()=>({theme:d}),[d]),t=ge.createElement("div",{id:t,className:Te({block:"rc-menu-container",modifiers:k}),ref:g,onKeyDown:({key:e})=>{e===Oe.ESC&&Ne(b,{key:e,reason:ke.CANCEL})},onBlur:e=>{!C||e.currentTarget.contains(e.relatedTarget||document.activeElement)||i||(Ne(b,{reason:ke.BLUR}),h&&(h.current=!0,setTimeout(()=>h.current=!1,300)))}},m&&ge.createElement(Ce.Provider,{value:O},ge.createElement(B.Provider,{value:R},ge.createElement(x.Provider,{value:w},ge.createElement(U,Object.assign({},e,{containerRef:g,onClose:b}))))));return c?M.createPortal(t,document.body):t},r=ge.memo(function({"aria-label":e,id:t,animation:n,boundingBoxRef:o,boundingBoxPadding:r,captureFocus:i,debugging:a,reposition:s,viewScroll:u,keepMounted:l,menuButton:c,portal:d,submenuOpenDelay:m,submenuCloseDelay:f,theming:p,onItemClick:b,onClick:h,onChange:g,...E}){const{isMounted:v,isOpen:y,menuItemFocus:C,openMenu:O,closeMenu:R}=P(l),w=(0,ge.useRef)(!1),k=(0,ge.useRef)(null),M=(0,ge.useMemo)(()=>Ne(c,{open:y}),[c,y]);if(!M)throw new Error("Menu requires a menuButton prop.");l=(0,ge.useCallback)(e=>{R(),e.key&&k.current.focus()},[R]);const N=(0,ge.useCallback)(e=>{w.current||O(0===e.detail?Le.FIRST:Le.INITIAL)},[O]),S=(0,ge.useCallback)(e=>{let t=!1;switch(e.key){case Oe.UP:O(Le.LAST),t=!0;break;case Oe.DOWN:O(Le.FIRST),t=!0}t&&e.preventDefault()},[O]);var T=(0,ge.useMemo)(()=>{const e={ref:k,...Se({onClick:N,onKeyDown:S},M.props)};return"MenuButton"===D(M.type)&&(e.isOpen=y),ge.cloneElement(M,e)},[M,y,N,S]),E=F({...E,ariaLabel:e||("string"==typeof M.props.children?M.props.children:"Menu"),anchorRef:k,isOpen:y,menuItemFocus:C},{id:t,animation:n,boundingBoxRef:o,boundingBoxPadding:r,debugging:a,reposition:s,submenuOpenDelay:m,submenuCloseDelay:f,viewScroll:u,portal:d,theming:p,isMounted:v,onItemClick:b,onClick:h,onClose:l,skipClick:w});return H(g,y),ge.createElement(ge.Fragment,null,T,E)}),s=(r.propTypes={...f,keepMounted:n().bool,menuButton:n().oneOfType([n().element,n().func]).isRequired,onChange:n().func},r.defaultProps={...b,keepMounted:!0},ge.memo(function({"aria-label":e,id:t,animation:n,boundingBoxRef:o,boundingBoxPadding:r,debugging:i,reposition:a,submenuOpenDelay:s,submenuCloseDelay:u,viewScroll:l,portal:c,theming:d,isMounted:m,onItemClick:f,onClick:p,onClose:b,...h}){return F({...h,ariaLabel:e||"Menu"},{id:t,animation:n,boundingBoxRef:o,boundingBoxPadding:r,debugging:i,reposition:a,submenuOpenDelay:s,submenuCloseDelay:u,viewScroll:l,portal:c,theming:d,isMounted:m,onItemClick:f,onClick:p,onClose:b})})),c=(s.propTypes={...f,anchorPoint:n().exact({x:n().number,y:n().number}),anchorRef:n().object,captureFocus:n().bool,isOpen:n().bool,isMounted:n().bool,menuItemFocus:n().exact({position:n().string}),onClose:n().func},s.defaultProps={...b,captureFocus:!0,isOpen:!1,isMounted:!0,menuItemFocus:{position:Le.INITIAL}},o(ge.memo(function({"aria-label":e,itemClassName:t,itemStyles:n,disabled:o,keepMounted:r,label:i,index:a,onChange:s,captureFocus:u,repositionFlag:l,...c}){const{isMounted:d,isOpen:m,menuItemFocus:f,openMenu:p,closeMenu:b}=P(r),{isParentOpen:h,hoverIndex:g,isSubmenuOpen:E,dispatch:v}=(0,ge.useContext)(ve),{debugging:y,submenuOpenDelay:C,submenuCloseDelay:O}=(0,ge.useContext)(B),R=g===a,w=Boolean(o),{isActive:k,onKeyUp:M,...N}=A(R,w,Oe.RIGHT);r=(0,ge.useRef)(null);const S=(0,ge.useRef)(null),T=(0,ge.useRef)(),x=(0,ge.useCallback)(()=>{b(),S.current.focus()},[b]),I=e=>{v({type:Re.SET,index:a}),T.current=setTimeout(p,Math.max(e,0))};(0,ge.useEffect)(()=>()=>clearTimeout(T.current),[]),(0,ge.useEffect)(()=>{R&&h?S.current.focus():b()},[R,h,b]),(0,ge.useEffect)(()=>{v({type:m?we.OPEN:we.CLOSE})},[v,m]),H(s,m);const D=(0,ge.useMemo)(()=>Object.freeze({open:m,hover:R,active:k,disabled:w}),[m,R,k,w]);return ge.createElement("li",{className:Te({block:Ee,element:"submenu"}),role:"presentation",ref:r,onKeyDown:e=>{let t=!1;switch(e.key){case Oe.LEFT:m&&(x(),t=!0);break;case Oe.RIGHT:m||(t=!0)}t&&(e.preventDefault(),e.stopPropagation())},onBlur:e=>{var t;y||(t=e.relatedTarget||document.activeElement,e.currentTarget.contains(t)||(b(),v({type:Re.UNSET,index:a})))}},ge.createElement("div",Object.assign({className:Te({block:Ee,element:L,modifiers:D,className:t}),style:xe(n,D),role:"menuitem","aria-haspopup":"true","aria-expanded":m,"aria-disabled":w||void 0,tabIndex:R&&!m?0:-1,ref:S,onMouseEnter:()=>{w||m||(E?T.current=setTimeout(()=>I(C-O),O):I(C))},onMouseLeave:()=>{clearTimeout(T.current),m||v({type:Re.UNSET,index:a})},onMouseDown:()=>!R&&v({type:Re.SET,index:a}),onClick:()=>{w||(clearTimeout(T.current),p())},onKeyUp:e=>{if(k)switch(M(e),e.key){case Oe.SPACE:case Oe.ENTER:case Oe.RIGHT:p(Le.FIRST)}}},N),(0,ge.useMemo)(()=>Ne(i,D),[i,D])),d&&ge.createElement(U,Object.assign({},c,{ariaLabel:e||("string"==typeof i?i:"Submenu"),anchorRef:S,containerRef:r,isOpen:m,isDisabled:w,menuItemFocus:f})))}),"SubMenu")),g=(c.propTypes={...e,...t("item"),disabled:n().bool,keepMounted:n().bool,label:n().oneOfType([n().node,n().func]).isRequired,onChange:n().func},c.defaultProps={...p,direction:"right",keepMounted:!0},o(ge.memo(function({className:e,styles:t,value:n,href:o,type:r,checked:i,disabled:a,index:s,children:u,onClick:l,...c}){const d=Boolean(a),{ref:m,isHovering:f,setHover:p,onBlur:b,onMouseEnter:h,onMouseLeave:g}=j(d,s),E=(0,ge.useContext)(x),v=(0,ge.useContext)(I),{isActive:y,onKeyUp:C,onBlur:O,...R}=A(f,d),w="radio"===r,k="checkbox"===r,M=Boolean(o)&&!d&&!w&&!k,N=w?v.value===n:!!k&&Boolean(i),S=e=>{if(!d){const t={value:n,syntheticEvent:e};void 0!==e.key&&(t.key=e.key),w&&(t.name=v.name,Ne(v.onChange,t)),t.checked=!!k&&!N,e=!1===Ne(l,t),E.handleClick(t,e,k||w)}};const T=(0,ge.useMemo)(()=>Object.freeze({type:r,disabled:d,hover:f,active:y,checked:N,anchor:M}),[r,d,f,y,N,M]);a=Se({...R,onMouseEnter:h,onMouseLeave:g,onMouseDown:p,onKeyUp:e=>{if(y)switch(C(e),e.key){case Oe.SPACE:case Oe.ENTER:M?m.current.click():S(e)}},onBlur:e=>{O(e),b(e)},onClick:S},c),s={role:w?"menuitemradio":k?"menuitemcheckbox":"menuitem","aria-checked":w||k?N:void 0,"aria-disabled":d||void 0,tabIndex:f?0:-1,...c,...a,ref:m,className:Te({block:Ee,element:L,modifiers:T,className:e}),style:xe(t,T)},i=(0,ge.useMemo)(()=>Ne(u,T),[u,T]);return M?ge.createElement("li",{role:"presentation"},ge.createElement("a",Object.assign({},s,{href:o}),i)):ge.createElement("li",s,i)}),"MenuItem")),E=(g.propTypes={...t(),value:n().any,href:n().string,type:n().oneOf(["checkbox","radio"]),checked:n().bool,disabled:n().bool,children:n().oneOfType([n().node,n().func]).isRequired,onClick:n().func},o(ge.memo(function({className:e,styles:t,disabled:n,index:o,children:r,...i}){const a=Boolean(n),{ref:s,isHovering:u,setHover:l,onBlur:c,onMouseEnter:d,onMouseLeave:m}=j(a,o),f=(0,ge.useContext)(x)["handleClose"],p=(0,ge.useMemo)(()=>Object.freeze({disabled:a,hover:u,focusable:!0}),[a,u]);n=(0,ge.useMemo)(()=>Ne(r,{...p,ref:s,closeMenu:f}),[s,r,p,f]),o=Se({onMouseEnter:d,onMouseLeave:e=>m(e,!0),onFocus:l,onBlur:c},i);return ge.createElement("li",Object.assign({"aria-disabled":a||void 0,role:"menuitem",tabIndex:"-1"},i,o,{className:Te({block:Ee,element:L,modifiers:p,className:e}),style:xe(t,p)}),n)}),"FocusableItem")),v=(E.propTypes={...t(),disabled:n().bool,children:n().func.isRequired},o(ge.memo(function({className:e,styles:t,...n}){return ge.createElement("li",Object.assign({role:"separator"},n,{className:Te({block:Ee,element:"divider",className:e}),style:xe(t)}))}),"MenuDivider")),y=(v.propTypes={...t()},o(ge.memo(function({className:e,styles:t,...n}){return ge.createElement("li",Object.assign({role:"presentation"},n,{className:Te({block:Ee,element:"header",className:e}),style:xe(t)}))}),"MenuHeader")),C=(y.propTypes={...t()},o(ge.memo(function({className:e,styles:t,takeOverflow:n,...o}){const r=(0,ge.useRef)(null),[i,a]=(0,ge.useState)(),{overflow:s,overflowAmt:u}=(0,ge.useContext)(ye);return Be(()=>{let e;n&&0<=u&&(e=r.current.getBoundingClientRect().height-u)<0&&(e=0),a(0<=e?{maxHeight:e,overflow:s}:void 0)},[n,s,u]),Be(()=>{i&&(r.current.scrollTop=0)},[i]),ge.createElement("div",Object.assign({ref:r},o,{className:Te({block:Ee,element:"group",className:e}),style:{...xe(t),...i}}))}),"MenuGroup")),O=(C.propTypes={...t(),takeOverflow:n().bool},o(ge.memo(function({"aria-label":e,className:t,styles:n,name:o,value:r,children:i,onChange:a,...s}){var u=(0,ge.useMemo)(()=>({name:o,value:r,onChange:a}),[o,r,a]);return ge.createElement("li",{role:"presentation"},ge.createElement("ul",Object.assign({role:"group","aria-label":e||o||"Radio group"},s,{className:Te({block:Ee,element:"radio-group",className:t}),style:xe(n)}),ge.createElement(I.Provider,{value:u},i)))}),"MenuRadioGroup"));O.propTypes={...t(),"aria-label":n().string,name:n().string,value:n().any,children:n().node.isRequired,onChange:n().func}},69401:function(){}}]);