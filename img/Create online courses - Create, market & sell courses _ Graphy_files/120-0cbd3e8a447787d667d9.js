"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[120],{37148:function(e,t,n){n.d(t,{Z:function(){return i}});n(67294);var r=n(95477),o=n(85893);function i(e){var t=e.value,e=e.color;return(0,o.jsxs)("div",{className:"relative inline-flex",children:[(0,o.jsx)(r.Z,{variant:"determinate",thickness:3,style:{color:e},size:60,value:t}),(0,o.jsx)("div",{className:"flex inset-0 absolute items-center justify-center",children:(0,o.jsx)("p",{className:"leading-relaxed font-semibold text-xs",style:{color:e},children:"".concat(Math.round(t),"%")})})]})}i.defaultProps={color:"#282828"}},88806:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(92809),U=n(30266),t=n(87757),B=n.n(t),G=n(67294),H=n(41389),Y=n(5434),Z=n(50310),f=n(33275),m=n(44845),h=n(80273);function E(){return(E=(0,U.default)(B().mark(function e(t,n,o){var i,a,s,c,l,u,d=arguments;return B().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:i=3<d.length&&void 0!==d[3]?d[3]:0,e.next=3;var r=t;return new Promise(function(e,t){var n=new Image;n.addEventListener("load",function(){return e(n)}),n.addEventListener("error",function(e){return t(e)}),n.setAttribute("crossOrigin","anonymous"),n.src=r});case 3:return a=e.sent,s=document.createElement("canvas"),c=s.getContext("2d"),l=Math.max(a.width,a.height),l=l/2*Math.sqrt(2)*2,s.width=l,s.height=l,c.translate(l/2,l/2),c.rotate(i*Math.PI/180),c.translate(-l/2,-l/2),c.drawImage(a,l/2-.5*a.width,l/2-.5*a.height),u=c.getImageData(0,0,l,l),s.width=n.width,s.height=n.height,c.putImageData(u,Math.round(0-l/2+.5*a.width-n.x),Math.round(0-l/2+.5*a.height-n.y)),e.abrupt("return",new Promise(function(t){s.toBlob(function(e){t(e)},o)}));case 19:case"end":return e.stop()}},e)}))).apply(this,arguments)}var F=n(85893);var z=function(e){var n=e.image,r=e.onImageCropped,t=e.aspect,o=e.localFileType,i=(e=(0,G.useState)({x:0,y:0}))[0],e=e[1],a=(d=(0,G.useState)(1))[0],s=d[1],c=(d=(0,G.useState)(null))[0],l=d[1],u=((d=(0,G.useState)(null))[0],d[1]),d=(0,G.useCallback)(function(e,t){l(t)},[]),p=(0,G.useCallback)((0,U.default)(B().mark(function e(){var t;return B().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,function(){return E.apply(this,arguments)}(n,c,o);case 3:t=e.sent,u(t),r(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,8]])})),[c]);return(0,F.jsxs)("div",{children:[(0,F.jsx)("div",{className:"relative w-full h-52 bg-graphite02 md:h-96 mt-6",children:(0,F.jsx)(f.Z,{image:n,crop:i,rotation:0,zoom:a,aspect:t||16/9,onCropChange:e,onCropComplete:d,onZoomChange:s})}),(0,F.jsxs)("div",{className:"flex flex-1 items-center mt-4",children:[(0,F.jsx)("h2",{className:"mr-4",children:"Zoom"}),(0,F.jsx)(m.Z,{value:a,min:1,max:3,step:.1,"aria-labelledby":"Zoom",onChange:function(e,t){return s(t)}})]}),(0,F.jsx)(h.Z,{className:"my-6",centered:!0,text:"Done",onButtonClick:function(){return p()}})]})},W=n(48956),X=n(37148),J=n(18568),$=n(9058);function o(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function V(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach(function(e){(0,r.Z)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var K={borderColor:"#2196f3"},q={borderColor:"#00e676"},Q={borderColor:"#ff1744"};function i(e){function d(){N.show("Unsupported file format",J.k.ERROR)}function t(){S(V(V({},g),{},{cropModal:!1}))}var n,r=e.aspect,o=e.contentType,i=e.width,a=e.height,s=e.disabled,p=e.onFileUploadComplete,c=e.children,l=e.preview,u=e.showLoader,u=void 0!==u&&u,f=e.disallowCrop,m=void 0!==f&&f,f=e.isEditAllowed,h=e.top,h=void 0===h?"":h,E=e.isUserAvatar,b=void 0!==E&&E,E=e.subdomain,v=void 0===E?"":E,x=new Z.Z,N=new $.Z,e=(0,G.useState)({cropModal:!1,localFile:null,localFileType:"image/png"}),g=e[0],S=e[1],E=(0,G.useState)(!1),e=E[0],A=E[1],E=(0,G.useState)(0),C=E[0],T=E[1],E=g.cropModal,j=g.localFile,y=g.localFileType,I="image/jpeg, image/png, image/svg, image/jpeg",O="video/avi, video/mov, video/mp4, video/quicktime, video/mpg, video/mpeg, video/flv, video/h264, video/m4v, video/mkv, video/x-matroska, video/x-ms-wmv",M="".concat(I,", ").concat(O,", ").concat(".pdf, .pgn, .zip, .rar",", ").concat("audio/m4a, audio/mp3, audio/wav, audio/x-m4a, audio/mpeg"),k="".concat(I,", ").concat(O),s=(0,H.uI)({maxFiles:1,disabled:s||e,accept:function(){switch(o){case"image":return I;case"video":return O;case"media":return k;default:return M}}(),onDrop:(n=(0,U.default)(B().mark(function e(t){var n,r,o,i,a,s,c,l,u;return B().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(0===t.length)return d(),e.abrupt("return");e.next=3;break;case 3:if(n=t[0].type.split("/")[0],r=t[0].name,o=t[0].name.split(".")[1],i=t[0].type.split("/")[1],"video"===n||"audio"===n)return A(!0),e.next=11,x.uploadAsset(t,n,T,null,b,v);e.next=16;break;case 11:(s=e.sent)||d(),a=s&&URL.createObjectURL(t[0]),p({url:s,type:n,preview:a,name:r}),s?setTimeout(function(){A(!1),T(0)},1200):A(!1);case 16:if("image"!==n)e.next=30;else{if(m)return A(!0),e.next=21,x.uploadAsset(t,"image",T,null,b,v);e.next=28}break;case 21:(a=e.sent)&&setTimeout(function(){A(!1),T(0)},1200),s=a&&URL.createObjectURL(t[0]),p({url:a,type:"image",preview:s,name:t[0].name}),a?setTimeout(function(){A(!1),T(0)},1200):A(!1),e.next=30;break;case 28:t.map(function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})}),S(V(V({},g),{},{localFile:t[0],cropModal:!0,localFileType:t[0].type}));case 30:if("pdf"===i||"zip"===i||"x-rar"===i)return c="x-rar"===i?"rar":i,A(!0),e.next=35,x.uploadAsset(t,c,T,c,b,v);e.next=40;break;case 35:(u=e.sent)||d(),l=URL.createObjectURL(t[0]),p({url:u,type:c,preview:l,name:r}),u&&setTimeout(function(){A(!1),T(0)},1200);case 40:if("pgn"===o)return A(!0),e.next=44,x.uploadAsset(t,"pgn",null,"pgn",b,v);e.next=49;break;case 44:(l=e.sent)||d(),u=URL.createObjectURL(t[0]),p({url:l,type:"pgn",preview:u,name:r}),l&&setTimeout(function(){A(!1),T(0)},1200);case 49:case"end":return e.stop()}},e)})),function(e){return n.apply(this,arguments)})}),P=(s.acceptedFiles,s.getRootProps),L=s.getInputProps,w=s.isDragActive,R=s.isDragAccept,D=s.isDragReject,_=function(){var t=(0,U.default)(B().mark(function e(t){var n,r,o;return B().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=new File([t],j.name,{type:"image/jpeg",lastModified:Date.now()}),A(!0),e.next=4,x.uploadAsset([n],"image",T,null,b,v);case 4:(r=e.sent)&&setTimeout(function(){A(!1),T(0)},1200),o=[n].map(function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})}),p({url:r,type:"image",preview:o[0].preview,name:n.name});case 8:case"end":return e.stop()}},e)}));return function(e){return t.apply(this,arguments)}}(),s=(0,G.useMemo)(function(){return V(V(V({},w?K:{}),R?q:{}),D?Q:{})},[w,D,R]);return(0,F.jsxs)("section",{className:"".concat(i," ").concat(a," ").concat(l?"inset-0 absolute":""),children:[l?(0,F.jsx)("div",{className:"w-full",children:!e&&f&&(0,F.jsxs)("button",V(V({type:"button",className:"absolute opacity-0 group-hover:opacity-100 -right-10 w-8 justify-center flex items-center rounded-sm z-20 border-slate05 ml-2 h-8 px1 top-0 shadow-md"},P({style:s})),{},{children:[(0,F.jsx)(Y.zmo,{size:24}),(0,F.jsx)("input",V({},L()))]}))}):(0,F.jsxs)("div",V(V({},P({style:s})),{},{className:"w-full ".concat(a),children:[(0,F.jsx)("input",V({},L())),c]})),"video"!==o&&(0,F.jsx)(W.Z,{showClose:!0,isCentered:!1,showModal:E,closeModal:t,width:"w-full h-96 w-96",top:h,children:(0,F.jsx)(z,{aspect:r,localFileType:y,onImageCropped:function(e){t(),_(e)},image:j?j.preview:""})}),e&&0<C&&u&&(0,F.jsxs)("div",{className:"flex absolute ".concat(i||"w-full"," inset-0 justify-center items-center bg-opacity-80 bg-slate05 z-30 flex-col"),children:[(0,F.jsx)(X.Z,{value:C}),1!==r&&(0,F.jsx)("p",{className:"text-slate02 text-sm font-bold",children:"Uploading media..."})]})]})}i.defaultProps={contentType:"all",disabled:!1,isEditAllowed:!0,isUserAvatar:!1,subdomain:"",width:"w-full",height:""}},27104:function(e,t,n){var g=n(67294),S=n(30029),A=n(53305),C=n(20661),T=n(13692),j=n(81114),y=n(78934),I=(n(6337),n(85893)),n=g.forwardRef(function(e,t){function n(e){var t;c?c(e):((t={})[j.m.CHANNELS.CHANNELS_EMOJI_TAPPED.PROPERTIES.EMOJI]=e.unified,t[j.m.CHANNELS.CHANNELS_EMOJI_TAPPED.PROPERTIES.EMOJI_SHORT_CODE]=e.colons.replace(/:/g,""),"thread"===r&&h.rootMessageUUID&&(t[j.m.CHANNELS.CHANNELS_EMOJI_TAPPED.PROPERTIES.PARENT_MESSAGE_UUID]=h.rootMessageUUID),t[j.m.CHANNELS.CHANNELS_EMOJI_TAPPED.PROPERTIES.SOURCE]="inline"===l.position?"emoji_list":"root"===l.position?"hover":"emoji_picker",t[j.m.CHANNELS.CHANNELS_EMOJI_TAPPED.PROPERTIES.MESSAGE_UUID]=l.messageUUID,(new y.Z).sendEvent({type:j.m.CHANNELS.CHANNELS_EMOJI_TAPPED.LABEL,properties:t}),u({messageUUID:"",position:"",visible:!1,input:l.input}),"new"===l.messageUUID?d(e.native):E.sendReaction({emojiName:e.colons,messageUUID:l.messageUUID,unicode:e.unified}))}var r=e.source,o=e.isVisible,i=e.position,a=e.onOutsideClick,s=e.setShowChatCardActions,c=e.emojiPickedHandler,l=(0,A.Z)(function(e){return e.showEmojiPicker}),u=(0,A.Z)(function(e){return e.setShowEmojiPicker}),d=(0,A.Z)(function(e){return e.setChatInputEmoji}),p=(0,A.Z)(function(e){return e.showChannelThread}),f=(0,A.Z)(function(e){return e.showAllFilesList}),m=(0,A.Z)(function(e){return e.showAboutPanel}),h=(0,A.Z)(function(e){return e.channelMessageReplies}),E=(0,C.L)(function(e){return e.socketManager}),e=(0,g.useState)(""),b=e[0],v=e[1],x=(0,g.useRef)(null),e=((0,g.useEffect)(function(){var e;b||(e=null==x||null==(e=x.current)?void 0:e.getBoundingClientRect().top,v(e&&e<=0?"top":"bottom"))},[x]),(0,g.useCallback)(function(){u({position:"",visible:!1,messageUUID:"",input:l.input}),s&&s(!1)},[l])),N=(t?(0,T.n)({ref:t,onClick:a||function(){}}):(0,T.n)({ref:x,onClick:e}),(0,g.useCallback)(function(){return""!==i?"absolute ".concat(i):"root"===l.position?"top"===b?"absolute top-9 right-4":"bottom"===b?"absolute bottom-9 right-4":"absolute bottom-9 opacity-0":"input"===l.position?("thread"!==l.input||!p)&&(p||f||m)?"absolute bottom-14 right-96":"absolute bottom-14 right-6":"absolute bottom-0 left-0"},[l,b,i]));return(0,g.useCallback)(function(){return l.visible||o?(0,I.jsx)("div",{ref:t||x,className:N(),style:{zIndex:9999},children:(0,I.jsx)(S.cW,{title:"Pick your emoji",emoji:"point_up",theme:"auto",set:"twitter",include:["search","recent","people","nature","foods","activity","places","objects","symbols"],onSelect:n})}):null},[l,b,o,i,t])()});n.defaultProps={isVisible:void 0,position:""},n.displayName="EmojiPicker",t.Z=n},50310:function(e,t,n){var r=n(30266),o=n(68216),i=n(25997),a=n(87757),d=n.n(a),p=n(53254),a=n(9669),f=n.n(a),m=n(87770),h=n(69075),a=function(){function e(){(0,o.default)(this,e)}var n;return(0,i.default)(e,[{key:"uploadAsset",value:(n=(0,r.default)(d().mark(function e(t,n){var r,o,i,a,s,c,l,u=arguments;return d().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=2<u.length&&void 0!==u[2]?u[2]:null,l=3<u.length&&void 0!==u[3]?u[3]:null,o=4<u.length&&void 0!==u[4]&&u[4],i=5<u.length&&void 0!==u[5]?u[5]:"",a=t[0],"quicktime"===(s=a.type.split("/")[1])?s="mov":l&&(s=l),c=a.type,l=null,i&&(l={"X-FORWARDED-HOST":"".concat(i,".").concat(p.ROOT_HOST)}),e.abrupt("return",(0,h.postAPI)(m.API.presignedUrl,{content_type:"x-rar"===n?"rar":n,extenstion:"".concat(s),source:o?"users":"schools"},null,l).then(function(e){var t=e.data.presigned_url;return f().put(t,a,{headers:{"Content-Type":c},onUploadProgress:function(e){e=Math.round(100*e.loaded/e.total);r&&r(e)}}).then(function(e){return t}).catch(function(e){})}).catch(function(e){return null}));case 11:case"end":return e.stop()}},e)})),function(e,t){return n.apply(this,arguments)})}]),e}();t.Z=a},60847:function(e,t,n){n.d(t,{tx:function(){return r},Td:function(){return i},JB:function(){return a},lv:function(){return s},Tz:function(){return c}});var r,o=n(3913),i=((t=r=r||{}).IMAGE="IMAGE",t.AUDIO="AUDIO",t.DOWNLOAD="DOWNLOAD",function(e){return e===o.v.IMAGE.TYPES.JPEG||e===o.v.IMAGE.TYPES.JPG||e===o.v.IMAGE.TYPES.PNG||e===o.v.IMAGE.TYPES.SVG||e===o.v.IMAGE.TYPES.SVG_XML||e===o.v.IMAGE.TYPES.WEBP||e===o.v.IMAGE.LABEL.toLowerCase()?r.IMAGE:e===o.v.AUDIO.TYPES.M4A||e===o.v.AUDIO.TYPES.MP3||e===o.v.AUDIO.TYPES.MPEG||e===o.v.AUDIO.TYPES.WAV||e===o.v.AUDIO.TYPES.X_M4A?r.AUDIO:r.DOWNLOAD}),a=function(e){return e.replace("application/","").replace("image/","").replace("audio/","").replace("x-chess-pgn","pgn").replace("octet-stream","rar").replace("vnd.openxmlformats-officedocument.presentationml.presentation","pptx")},s=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},c=function(t){t=t.emojiUnicode;try{return String.fromCodePoint(parseInt(t,16))}catch(e){return console.error("ERROR in parsing emoji unicode:",t,e),""}}},67144:function(e,t,n){var r,o,i;n.d(t,{RN:function(){return r},JB:function(){return o},tY:function(){return i}}),(n=r=r||{}).SOLID="solid",n.GHOST="ghost",n.BASE="base",(t=o=o||{}).BUTTON="button",t.SUBMIT="submit",(n=i=i||{}).PRIMARY="primary",n.SECONDARY="secondary",n.GRADIENT="gradient"},14896:function(e,t,n){var r,o;n.d(t,{$X:function(){return r},K$:function(){return o}}),(n=r=r||{}).BLOCK="block",n.BUTTON="button",(t=o=o||{}).INSTRUCTOR="INSTRUCTOR",t.LEARNER="LEARNER"},30855:function(e,t,n){var r;n.d(t,{A:function(){return r}}),(n=r=r||{}).TEXT="text",n.NUMBER="number",n.EMAIL="email",n.LINK="link",n.TEXTAREA="textarea",n.DATE="date",n.TIME="time",n.DATE_TIME="date-time",n.EMOJI_PICKER="emoji-picker",n.FILE_PICKER="file-picker",n.CHECKBOX="checkbox",n.PASSWORD="password"},64609:function(e,t,n){t.Z=function(e){switch(e){case"pink":return"from-pinkGradient-first to-pinkGradient-second";case"purple":return"from-purpleGradient-first to-purpleGradient-second";case"green":return"from-greenGradient-first to-greenGradient-second";case"blue":default:return"from-blueGradient-first to-blueGradient-second";case"blue-yellow":return"from-blueYellowGradient-first to-blueYellowGradient-second";case"blue-pink":return"from-bluePinkGradient-first to-bluePinkGradient-second"}}},7251:function(e,t,n){n(67294);function r(e){var t=e.image,n=e.name,r=e.size,o=e.isRadius,e=e.className;return(0,i.jsx)("div",{style:{width:"".concat(r,"rem"),height:"".concat(r,"rem")},className:"".concat(o?r&&2<r?"rounded-md":"rounded":""," ").concat(e),children:(0,i.jsx)("div",{className:"w-full h-full bg-cover bg-no-repeat bg-center rounded-md flex items-center justify-center ".concat(t?"bg-white":"bg-slate04"),style:{backgroundImage:'url("'.concat(t,'")')},children:t?"":(0,i.jsx)("span",{className:"".concat(r&&6<r?"text-sm":"text-xxs"," font-bold"),children:null==n?void 0:n.substr(0,1)})})})}var i=n(85893);r.defaultProps={image:"/images/avatar-placeholder.png",size:1.25,isCircle:!1,isRadius:!0},r.displayName="UserAvatar",t.Z=r},92610:function(e,t,n){n.d(t,{hc:function(){return r},qP:function(){return o},y7:function(){return i},Io:function(){return a},Hi:function(){return s},Hj:function(){return c},bN:function(){return l},N$:function(){return u},Li:function(){return d},Bf:function(){return p}});var r={DISCUSSION:"Discussion"},o={REPLY:"Reply",REACTION:"Reaction",SHARE:"Share",MORE_ACTIONS:"More Actions"},i={RECENT_FILES:"Your recent files",VIEW_ALL:"View All",UPLOAD_FILES:"Upload files"},a={YOUR_FILES:"Your files"},s={TITLE:"About",EDIT_MODAL_TITLE:"Channel Details"},c={EMPTY_CHAT_LIST:"This is the beginning of your chat history in :channel",NO_PERMISSION:"You don’t have permission to send messages in this channel"},l={MEMBERS:"Stay connected with other members"},u={ERRORS:{ERROR_IN_CHANNEL_UPDATE:"Error in updating channel details, Please try after some time",COULD_NOT_CONNECT:"Oh no! Could not connect. Please refresh the page"},INFO:{IMAGES_UPLOADING:"Please wait for upload to complete"},SUCCESS:{CHANNEL_UPDATE_SUCCESS:"Channel updated successfully"}},d={ADD_EMOJI:"Add emoji",ABOUT_PANEL_TITLE:"About channel",MEMBERS_HEADER_DESC:"All members",SEND_MESSAGE:"Send message",ADD_IMAGE:"Add image"},p={CHANNEL:{TITLE:"channel",INFO:"notify everyone on this channel"},HERE:{TITLE:"here",INFO:"notify everyone online on this channel"}}},3913:function(e,t,n){n.d(t,{v:function(){return r}});var r={PGN:"pgn",PDF:"pdf",ZIP:"zip",PPT:"ppt",PPTX:"pptx",RAR:"rar",TXT:"txt",IMAGE_FILE:"image",AUDIO_FILE:"audio",IMAGE:{LABEL:"IMAGE",TYPES:{JPEG:"jpeg",JPG:"jpg",PNG:"png",SVG:"svg",WEBP:"webp",SVG_XML:"svg+xml"}},AUDIO:{LABEL:"AUDIO",TYPES:{MP3:"mp3",WAV:"wav",M4A:"m4a",X_M4A:"x-m4a",MPEG:"mpeg"}}}},13692:function(e,t,n){n.d(t,{n:function(){return o}});var r=n(67294);function o(e){var t=e.ref,n=e.onClick;(0,r.useEffect)(function(){function e(e){t.current&&!t.current.contains(e.target)&&n()}return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}},[t])}},20661:function(e,t,n){n.d(t,{L:function(){return i}});var r,o=n(18172),i=(0,n(14671).Z)((r=function(e){return{openMainSidebar:!1,openSecondarySidebar:!1,openMainMenu:!1,socketManager:void 0,openSessionModal:!1,sessionUuid:null,openWelcomeModal:!1,openCurrencyModal:!0,setSocketManager:function(t){return e(function(e){e.socketManager=t})},toggleWelcomeModal:function(t){return e(function(e){e.openWelcomeModal=t})},toggleCurrencyModal:function(t,n){return e(function(e){e.openCurrencyModal=t,e.sessionUuid=n||e.sessionUuid,e.openSessionModal=!1})},toggleSessionModal:function(t,n){return e(function(e){e.sessionUuid=n,e.openSessionModal=t&&!!n})},toggleMainSidebar:function(t){return e(function(e){e.openMainSidebar=t,e.openMainMenu=t,e.openSecondarySidebar=t})},toggleMainMenu:function(t){return e(function(e){e.openMainMenu=t})},showMainMenu:function(t){return e(function(e){e.openMainMenu=t,e.openMainSidebar=t,e.openSecondarySidebar=!1})},closeMainMenu:function(){return e(function(e){e.openMainMenu=!1})},showSecondarySidebar:function(t){return e(function(e){e.openSecondarySidebar=t,e.openMainSidebar=t,e.openMainMenu=!1})},hideSecondarySidebar:function(){return e(function(e){e.openSecondarySidebar=!1})}}},function(t,e,n){return r(function(e){return t((0,o.ZP)(e))},e,n)}))},47235:function(e,t,n){n.d(t,{Z:function(){return o}});n(67294);var x={CLASSES:{BASE_PRIMARY:"button-base-primary",BASE_SECONDARY:"button-base-secondary",SOLID_PRIMARY:"button-solid-primary",SOLID_SECONDARY:"button-solid-secondary",SOLID_GRADIENT:"button-solid-gradient",GHOST_PRIMARY:"button-ghost-primary",GHOST_SECONDARY:"button-ghost-secondary",BUTTON_SM:"button-sm",BUTTON_MD:"button-md",BUTTON_LG:"button-lg"}},N=n(51849),g=n(23462),S=n(67144);function r(e){function t(e){var t,n,r,o;t=(t=e).currentTarget,n=document.createElement("span"),r=Math.min(t.clientWidth,t.clientHeight),o=r/2,n.style.width=n.style.height="".concat(r,"px"),n.style.left="".concat(t.clientWidth/2-o,"px"),n.style.top="".concat(0,"px"),n.classList.add("ripple"),(r=t.getElementsByClassName("ripple")[0])&&r.remove(),t.appendChild(n),f&&f(e)}function n(){return(0,y.jsx)("button",{type:i,style:E,onClick:d||p?void 0:t,className:(0,A.Z)("button-base",function(e,t,n){var r="";if(n===N.y["02"]&&(r="theme-02"),e===S.RN.BASE){if(t===S.tY.PRIMARY)return"".concat(x.CLASSES.BASE_PRIMARY," ").concat(r);if(t===S.tY.SECONDARY)return"".concat(x.CLASSES.BASE_SECONDARY," ").concat(r)}if(e===S.RN.SOLID){if(t===S.tY.PRIMARY)return"".concat(x.CLASSES.SOLID_PRIMARY," ").concat(r);if(t===S.tY.SECONDARY)return"".concat(x.CLASSES.SOLID_SECONDARY," ").concat(r);if(t===S.tY.GRADIENT)return"".concat(x.CLASSES.SOLID_GRADIENT," ").concat(r)}if(e===S.RN.GHOST)return t===S.tY.PRIMARY?"".concat(x.CLASSES.GHOST_PRIMARY," ").concat(r):t===S.tY.SECONDARY?"".concat(x.CLASSES.GHOST_SECONDARY," ").concat(r):void 0}(a,s,v),(e=r)===g.L.SM?x.CLASSES.BUTTON_SM:e===g.L.MD?x.CLASSES.BUTTON_MD:e===g.L.LG?x.CLASSES.BUTTON_LG:void 0,c,p?"button-disabled":"button-enabled"),children:d?(0,y.jsx)(T.Z,{color:b}):(0,y.jsxs)(y.Fragment,{children:[m&&(0,y.jsx)("span",{className:"mr-2",children:m}),o,h&&(0,y.jsx)("span",{className:"ml-2",children:h})]})});var e}var r=void 0===(l=e.size)?g.L.MD:l,o=e.children,i=void 0===(l=e.type)?S.JB.BUTTON:l,a=void 0===(l=e.variant)?S.RN.SOLID:l,s=void 0===(l=e.color)?S.tY.PRIMARY:l,c=e.className,l=e.href,u=e.isLoading,d=void 0!==u&&u,p=void 0!==(u=e.disabled)&&u,f=e.onClick,m=e.IconStart,h=e.IconEnd,E=e.style,b=e.loaderColor,v=(0,j.Z)().theme;return l?(0,y.jsx)(C.default,{href:l,children:(0,y.jsx)("a",{children:n()})}):n()}var A=n(86010),C=n(41664),T=n(33957),j=n(9618),y=n(85893),o=(r.defaultProps={loaderColor:""},r.displayName="Button",r)},15838:function(e,t,n){var xe=n(67294),Ne=n(73679),ge=n(56632),Se=n(30855),Ae=n(58385),Ce=n(23462),Te=n(27104),je=n(51649),r=n(84873),ye=n(14896),o=n(88806),Ie=n(5434),Oe=n(18565),Me=n(42916),Pe=n(47235),Le=n(67144),we=n(60847),Re=n(9618),De=n(51849),ke=n(85893),_e=r.Z,Ue=o.Z,n=xe.forwardRef(function(e,t){function n(e){var t=e.currentTarget.value,n=!1;I||se(!0),S&&0<S&&"".concat(t.trim()).length>S&&(t=t.substr(0,S)),(n=a===Se.A.NUMBER&&""!==e.currentTarget.value&&!/^[0-9\.]+$/.test(t)?n:!0)&&(C?(j(t),C):j)(t)}function r(e){var t,n,e=e.currentTarget.value.trim();se(!1),H&&""===e&&(t="Required field"),a===Se.A.LINK&&(n=new RegExp(Ae.m.websiteRegExp,"i"),""===e||n.test(e)||(t="Incorrect Link")),le(t),ne&&ne(e)}function k(){var e;return(u&&null!==u||T&&null!==T)&&(e=u||T),(0,ke.jsxs)("div",{className:w,children:[D(),(0,ke.jsx)(_e,{placeholder:s,calendarColor:"#6A82E3",calendarSize:14,value:e,returnMoment:!0,minDate:null!=ee?ee:new Date,setDate:function(e){(C||j)(e)}}),N&&R]})}function _(){var e=(0,we.Tz)({emojiUnicode:null!=b?b:Oe.$Y});return(0,ke.jsxs)("div",{className:w,children:[D(),(0,ke.jsxs)(Ne.Zb,{className:"border border-slate04 pl-4 pr-1 py-1 flex-center cursor-pointer",isClickable:!0,onClick:function(){return M(!O)},children:[(0,ke.jsx)("div",{className:"flex-1",children:(0,ke.jsx)("span",{className:"text-lg",children:e})}),(0,ke.jsx)(je.OId,{className:"text-slate04",size:20})]}),(0,ke.jsx)(Te.Z,{ref:pe,onOutsideClick:Ee,isVisible:O,emojiPickedHandler:fe,position:z})]})}function U(){return(0,ke.jsxs)("div",{className:"relative ".concat(te),children:[(0,ke.jsxs)("div",{role:"button",tabIndex:0,onClick:me,className:"".concat(w," flex  items-center cursor-pointer").concat(V?" flex-row-reverse":"").concat(K?" justify-between":""),children:[(0,ke.jsx)("div",{className:"graphy-checkbox".concat(be())}),(0,ke.jsx)(Ne.P,{isBold:!0,className:"ml-3",children:c})]}),N&&(0,ke.jsx)("div",{className:"relative top-1 -left-1",children:R})]})}function B(){var e=J===ye.$X.BLOCK;return(0,ke.jsxs)("div",{className:"".concat(w," flex items-center cursor-pointer"),children:[D(),(0,ke.jsxs)(Ue,{aspect:$,top:"top-0",showLoader:!0,contentType:re,preview:"",disabled:A,onFileUploadComplete:he,width:e||"video"===Q?W:"w-auto",height:X,children:[(0,ke.jsxs)(Ne.Zb,{className:"flex-center relative h-full ".concat(ve()).concat(e||u?" border border-slate04":""),children:[u&&"video"===Q?(0,ke.jsx)("div",{className:"w-128 h-auto",children:(0,ke.jsx)(ge.pU,{media:{url:u,content_type:"video"}})}):u?(0,ke.jsx)(Ne.Ee,{width:e?W:"w-full",height:"h-full",isCover:!0,className:"rounded",src:"".concat(u),alt:"".concat(c)}):null,u?null:(0,ke.jsx)("div",{className:"flex-center flex-col",children:e?(0,ke.jsxs)(ke.Fragment,{children:[(0,ke.jsx)(Me.rG,{}),(0,ke.jsx)(Ne.P,{className:"mt-3 text-center",children:Oe.nx})]}):(0,ke.jsx)(ke.Fragment,{children:(0,ke.jsxs)(Pe.Z,{size:Ce.L.SM,className:"flex-center px-3 w-32",variant:Le.RN.GHOST,children:[(0,ke.jsx)("span",{children:"Upload file"}),(0,ke.jsx)(Me.rG,{className:"ml-2"})]})})}),F&&(0,ke.jsx)(Ie.U$P,{size:40,className:"absolute -top-1 bg-white p-3 rounded -right-12 shadow-sm"})]}),N&&R]})]})}var o=e.id,i=e.style,a=e.type,s=e.placeholder,c=e.label,G=e.resize,l=e.icon,H=e.required,u=e.value,d=e.isStickyLabel,p=e.autoFocus,f=e.showPassword,m=e.className,h=e.containerClassName,E=e.containerWidth,b=e.selectedIcon,Y=e.maxHeight,v=e.containerMargin,Z=e.checked,F=e.isFileEditIconVisible,x=e.fixedPrefixValue,z=e.emojiPickerPosition,W=e.filePickerWidth,X=e.filePickerHeight,J=e.filePickerType,$=e.filePickerAspect,V=e.isLabelRight,N=e.errorMessage,K=e.isCheckboxStretched,g=e.showLength,S=e.inputLimit,q=e.textAreaHeight,Q=e.fileType,ee=e.minDate,te=e.checkboxContainerClassName,A=e.disabled,C=e.onChange,ne=e.onBlur,re=e.filePickerContentType,oe=e.onEmojiPickerOutsideClicked,ie=e.labelColor,e=(0,xe.useState)(""),T=e[0],j=e[1],e=(0,xe.useState)(!0),y=e[0],ae=e[1],e=(0,xe.useState)(!1),I=e[0],se=e[1],e=(0,xe.useState)(void 0),ce=e[0],le=e[1],e=(0,xe.useState)(!1),O=e[0],M=e[1],e=(0,xe.useState)(void 0),P=e[0],ue=e[1],L=(0,Re.Z)().theme,de=(0,xe.useMemo)(function(){var e=L===De.y["02"]?"text-sapphire01":"text-slate02";return d&&(e=ie||"text-dash"),L===De.y["02"]?{labelBaseColor:e,isBold:!1}:{labelBaseColor:e,isBold:!0}},[L,ie,d]),pe=(0,xe.useRef)(null),w="".concat(E," relative ").concat(v," ").concat(h),e=(0,xe.useMemo)(function(){var e="".concat(m," w-full text-sm rounded focus:outline-none bg-white");return l||a===Se.A.TEXTAREA?a===Se.A.TEXTAREA?e+=" border border-slate04 focus:ring-0 focus:ring-transparent focus:border-slate01":e+=" border-transparent focus:ring-0 focus:ring-transparent focus:border-transparent":e+=" focus:shadow-none border border-slate04 ".concat(x?"focus:border-slate04":"focus:border-slate01"),e},[m,l,a]),R=(0,ke.jsx)(Ne.P,{size:Ce.L.SM,color:"text-dread",className:"absolute -bottom-6 left-0 ml-1 my-1",children:N}),fe=function(e){M(!1),C&&C({emojiUnicode:e.unified,emojiLabel:e.name})},me=function(){var e=void 0===P?!Z:!P;ue(e),C&&C(e)},he=function(e){C&&C(e)},E=(0,xe.useMemo)(function(){return f?y?Se.A.PASSWORD:Se.A.TEXT:a===Se.A.NUMBER?"tel":a===Se.A.LINK?"text":a},[a,f,y]),D=function(){return c?(0,ke.jsx)(Ne.P,{isBold:de.isBold,color:de.labelBaseColor,size:d?Ce.L.SM:Ce.L.MD,className:"mb-3".concat(d?" absolute -top-2 left-2 mx-0.5 z-10 bg-white":""),children:c}):null},v=(0,xe.useMemo)(function(){return(0,ke.jsxs)("span",{className:"rounded rounded-r-none border-r-0 pr-0 border border-slate04 pl-3 text-sm leading-9 text-slate03",children:[x,"/"]})},[x]),Ee=function(){oe&&O&&(M(!1),oe())},be=function(){return void 0!==P?P?" checked":"":Z?" checked":""},ve=function(){return u?"p-2":J===ye.$X.BUTTON?"":"p-8"};return h=D(),v=(0,ke.jsxs)("div",{className:"".concat(x||f?"flex flex-row items-center":""),children:[x&&v,(0,ke.jsx)("input",{id:o,ref:t,style:i,type:E,value:"".concat(u||T),autoFocus:p,onChange:n,onBlur:r,disabled:A,placeholder:s,className:"input-mol ".concat(x?"border-l-0 rounded-l-none focus:outline-none focus:ring-0":""," ").concat(e).concat(l?" px-1":"")}),f&&(0,ke.jsx)("button",{onClick:function(){return ae(!1)},type:"button",className:"border-none ".concat(y?"block":"hidden"," p-0 right-4 absolute cursor-pointer bg-transparent"),children:(0,ke.jsx)(Ne.Ee,{src:"/images/fa/eye.svg",width:"w-4",height:"h-5",alt:"Show password"})}),f&&(0,ke.jsx)("button",{onClick:function(){return ae(!0)},type:"button",className:"border-none ".concat(y?"hidden":"block"," p-0 right-4 absolute cursor-pointer bg-transparent"),children:(0,ke.jsx)(Ne.Ee,{src:"/images/fa/eye-slash.svg",width:"w-4",height:"h-5",alt:"Hide password"})}),ce&&(0,ke.jsx)(Ne.P,{size:Ce.L.SM,className:"text-dread mt-1",children:ce})]}),i=(0,ke.jsxs)("div",{className:"absolute ".concat(a===Se.A.TEXTAREA?"bottom-1 right-1":"bottom-0.5 right-1"," text-xs text-slate03"),children:[(0,ke.jsx)("span",{children:"".concat(u).length}),"/",(0,ke.jsx)("span",{children:S})]}),a===Se.A.TEXTAREA?(0,ke.jsxs)("div",{className:w,children:[h,(0,ke.jsx)("textarea",{id:o,ref:t,value:"".concat(u||T),onChange:n,onBlur:r,autoFocus:p,disabled:A,className:"input-mol ".concat(q," ").concat(Y," ").concat(e).concat(G?"":" resize-none"),placeholder:s}),N&&R,g&&I&&i]}):a===Se.A.DATE?k():a===Se.A.EMOJI_PICKER?_():a===Se.A.CHECKBOX?U():a===Se.A.FILE_PICKER?B():l?(0,ke.jsxs)("div",{className:w,children:[h,(0,ke.jsxs)("div",{className:"flex items-center border border-slate04 rounded px-2 focus-within:border focus-within:border-black",children:[l,v]}),N&&R,g&&I&&i]}):(0,ke.jsxs)("div",{className:w,children:[h,v,N&&R,g&&I&&i]})});n.defaultProps={label:void 0,style:{},showPassword:!1,placeholder:"",isStickyLabel:!1,icon:null,resize:!1,required:!1,className:"",containerClassName:"",containerWidth:"w-full",autoFocus:!1,id:void 0,selectedIcon:"",selectedEmojiLabel:"",maxHeight:"max-h-32",containerMargin:"mt-6",checked:!1,isFileEditIconVisible:!1,filePickerWidth:"w-5/6",filePickerHeight:"h-full",filePickerType:ye.$X.BLOCK,isLabelRight:!1,isCheckboxStretched:!1,filePickerContentType:"image/*",filePickerAspect:16/9,textAreaHeight:"h-32",fileType:"image",disabled:!1,checkboxContainerClassName:""},n.displayName="Input",t.Z=n},56632:function(e,t,n){n.d(t,{zx:function(){return S.Z},JD:function(){return g},TM:function(){return P},dy:function(){return A},II:function(){return l.Z},pU:function(){return c},$e:function(){return R},E2:function(){return u}});function r(e){var t,n=e.media,r=e.link,o=e.alternateTxt,e=e.noDefault;return(0,f.jsx)("div",{children:"video"===(null==n?void 0:n.content_type)?(0,f.jsx)(s.Z,{width:"100%",height:"100%",className:"w-full relative bg-selectBlack rounded-sm overflow-hidden",style:{paddingTop:"56.25%"},controls:!0,url:n.url,config:{file:{attributes:{controlsList:"nodownload",className:"absolute left-0 top-0",disablepictureinpicture:"true"}}},playbackRate:1,onContextMenu:function(e){return e.preventDefault()}}):(null!=n&&n.url?t=(0,f.jsx)("img",{src:null==n?void 0:n.url,alt:o||"Graphy",className:"rounded-t-sm h-full w-full object-cover transform transition-all duration-300  shadow-inner top-0 left-0 absolute"}):e||(t=(0,f.jsx)("img",{src:"/images/courseCardPlaceholder.png",alt:"Graphy Course",className:"absolute w-full h-full top-0 left-0 object-cover"})),t=(0,f.jsx)("div",{className:"relative",style:null!=n&&n.url||!e?{paddingTop:"56.25%"}:{},children:t}),r?(0,f.jsx)(a.default,{href:r,children:(0,f.jsx)("a",{children:t})}):t)})}function o(e){var t=e.user,o=e.source,e=(0,v.Z)(function(e){return e.schoolInfo}),i=(0,h.Z)(function(e){return e.setChannelMentions}),a=(0,h.Z)(function(e){return e.channelMentions}),n=(0,p.useCallback)(function(e){var t={},n=b.m.CHANNELS.CHANNELS_MENTION_SELECTED.MENTION_TYPES,r="",r=e.isEducator?n.IS_INSTRUCTOR:e.firstName===E.Bf.CHANNEL.TITLE?n.CHANNEL:e.firstName===E.Bf.HERE.TITLE?n.HERE:n.IS_MEMBER;t[b.m.CHANNELS.CHANNELS_MENTION_SELECTED.PROPERTIES.MENTION_TYPE]=r,t[b.m.CHANNELS.CHANNELS_MENTION_SELECTED.PROPERTIES.MENTION_UUID]=e.uuid,(new N.Z).sendEvent({type:b.m.CHANNELS.CHANNELS_MENTION_SELECTED.LABEL,properties:t}),"root"===o?((r=null!=(n=null==a?void 0:a.root)?n:[]).push({uuid:e.uuid}),i({root:r,thread:null==a?void 0:a.thread})):((n=null!=(t=null==a?void 0:a.thread)?t:[]).push({uuid:e.uuid}),i({thread:n,root:null==a?void 0:a.root}))},[t,a]),r=(0,p.useCallback)(function(){return t.firstName?t.firstName===E.Bf.CHANNEL.TITLE||t.firstName===E.Bf.HERE.TITLE?(0,f.jsxs)("span",{className:"font-bold",children:["@",t.firstName]}):(0,f.jsx)("span",{className:"font-bold",children:t.firstName}):null},[t]),s=(0,p.useCallback)(function(){return t.lastName?t.firstName===E.Bf.CHANNEL.TITLE||t.firstName===E.Bf.HERE.TITLE?(0,f.jsxs)("span",{className:"text-slate03",children:[" ",t.lastName]}):(0,f.jsxs)("span",{children:[" ",t.lastName]}):null},[t]);return(0,f.jsxs)(d.Zb,{isRounded:!1,className:"flex items-center py-2 px-3 cursor-pointer hover:bg-slate04 hover:bg-opacity-40",onClick:function(){return n(t)},children:[(0,f.jsx)(m.Z,{size:1.5,image:(0,x.D)({avatar:"".concat(null==t?void 0:t.avatar),isEducator:null==t?void 0:t.isEducator,schoolCover:null==e?void 0:e.cover}),name:t.firstName}),(0,f.jsxs)(d.P,{className:"ml-2",children:[r(),s()]})]})}function i(e){var t=e.emoji,e=e.fontSize;return(0,f.jsx)("span",{className:e,children:t})}var p=n(67294),a=n(41664),s=n(22004),f=n(85893),c=(r.defaultProps={noDefault:!1},r.displayName="Media",r),l=n(15838),u=function(e){var t=e.options,n=e.selectedOption,r=e.optionClicked,e=t.txt,o=t.icon,i=t.filter;return(0,f.jsx)("div",{children:(0,f.jsx)("button",{className:"focus:outline-none",onClick:function(){return null==r?void 0:r.call(null,i,t)},children:(0,f.jsxs)("div",{className:"flex py-3 px-4 border rounded items-center text-sm text-slate02 transition duration-150 ease-linear ".concat(n===i?"bg-spinach font-bold border-spinach":"border-slate02"),children:[Boolean(o)&&(0,f.jsx)(o,{className:"mr-2 font-normal"}),(0,f.jsx)("span",{className:"leading-none",children:e})]})})})},d=n(73679),m=n(7251),h=n(53305),E=n(92610),b=n(81114),v=n(95253),x=n(60326),N=n(78934),g=(o.displayName="ChannelMentionCard",o),S=n(47235),A=(i.defaultProps={fontSize:"text-lg"},i.displayName="Emoji",i),C=n(92809),t=n(74855),T=n(82318),j=n(89583);function y(t,e){var n,r=Object.keys(t);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(t),e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)),r}function I(e){var t=e.margin,n=e.courseSlug,r=(0,v.Z)(function(e){return e.schoolInfo}),o=(e=(0,p.useState)(!1))[0],i=e[1],a=(e=(0,p.useState)(!1))[0],s=e[1],c=(e=(0,p.useState)(void 0))[0],l=e[1],e=(0,p.useMemo)(function(){var e=null!=r&&r.subdomain?"".concat(r.subdomain,".").concat(T.$$):T.$$;return e=n?"".concat(e,"/courses/").concat(n):e},[function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?y(Object(n),!0).forEach(function(e){(0,C.Z)(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}({},r)]),u=(0,p.useCallback)(function(){s(!0),c&&(clearTimeout(c),l(void 0));var e=setTimeout(function(){s(!1),i(!1)},2e3);l(e)},[c]),d=(0,p.useCallback)(function(){a||i(!1)},[a]);return(0,f.jsxs)("p",{className:"text-slate03 flex items-center text-xs relative z-20 cursor-pointer transition-all ".concat(t),onMouseEnter:function(){return i(!0)},onMouseLeave:d,children:[(0,f.jsxs)("span",{className:"max-w-38 whitespace-nowrap overflow-ellipsis text-left break-words ml-1 overflow-hidden",children:[null!=r&&r.subdomain?"".concat(null==r?void 0:r.subdomain,".").concat(T.$$):T.$$," "]}),a?(0,f.jsx)("span",{className:"ml-1 mr-1 px-2 py-1 bg-green rounded-sm text-white",children:"Copied!"}):(0,f.jsx)(M,{text:e,onCopy:u,className:"flex items-center bg-slate05 text-slate02 mr-2 rounded-sm",children:(0,f.jsxs)("span",{children:[(0,f.jsx)(j.Dup,{color:"#A8A8A8",className:"mx-2 my-1",size:14}),o&&(0,f.jsx)("span",{className:"mr-2",children:"Copy"})]})})]})}function O(e){return e=e.margin,(0,f.jsx)(d.P,{color:"text-slate01",size:L.L.BASE,className:"rounded px-1 py-0.5 bg-gradient-to-r ".concat((0,w.Z)("blue-pink")," ").concat(e),children:"New"})}var M=t.CopyToClipboard,P=(I.defaultProps={margin:"ml-12 -mt-2 mb-4",courseSlug:""},I.displayName="CopyWebsiteLink",I),L=n(23462),w=n(64609),R=(O.defaultProps={margin:"ml-3"},O.displayName="NewChip",O)},60326:function(e,t,n){n.d(t,{D:function(){return o}});var r=n(53254),o=function(e){var t=e.avatar,n=e.isEducator,e=e.schoolCover;return t&&"null"!==t?t.includes("http")?t:"".concat(r.ASSETS_LINK,"/").concat(t):n&&e?e:r.USER_DEFAULT_AVATAR}}}]);