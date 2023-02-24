(()=>{"use strict";var n={786:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,".cards {\n  display: grid;\n  grid-template-columns: repeat( auto-fill, minmax(250px, 1fr) );\n  gap: 50px;\n}\n\nfigure img {\n  width: 100%;\n  height: 320px;\n  object-fit: cover;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n\n.card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background-color: var(--card-background);\n  border-radius: 10px;\n  box-shadow: 2px 2px 5px #999;\n}\n\n.card-title {\n  text-align: center;\n  margin-top: 10px;\n  text-transform: capitalize;\n  font-size: 1.6em;\n  padding: 0 15px;\n}\n\n.card-meta {\n  list-style-type: none;\n  margin: 0;\n  padding: 15px;\n}\n\n.card-meta li {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin: 4px 0;\n  padding: 4px 0;\n}\n\n.card-meta li:not(:last-child) {\n  border-bottom: 1px dashed var(--subtle-gray);\n}\n\n.card-meta i {\n  font-size: 1.1em;\n  padding: 5px;\n  border-radius: 50%;\n  margin-right: 8px;\n  color: #fff;\n  background-color: var(--header-background);\n}\n\n.card-meta span {\n  font-size: 0.9em;\n  text-transform: capitalize;\n}\n\n/* Delete icon for card */\n.card .icon-close {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  padding: 5px;\n  background-color: var(--accent);\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.1s ease-in-out;\n}\n\n.card .icon-close:hover {\n  background-color: var(--accent-hover);\n}\n\n/* Is Read toogle */\n.card .isread-toggle {\n  position: absolute;\n  bottom: 6px;\n  right: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n}\n\n.card .isread-toggle small {\n  font-size: 0.7em;\n  text-transform: uppercase;\n  color: var(--secondary);\n}",""]);const c=i},414:(n,e,t)=>{t.d(e,{Z:()=>m});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),c=t(667),l=t.n(c),s=new URL(t(138),t.b),d=new URL(t(530),t.b),p=new URL(t(598),t.b),u=new URL(t(895),t.b),g=i()(r()),f=l()(s),A=l()(d),h=l()(p),b=l()(u);g.push([n.id,"@font-face {\n  font-family: 'Ubuntu';\n  src: url("+f+") format('truetype');\n  font-weight: 400;\n  font-display: swap;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'Ubuntu';\n  src: url("+A+") format('truetype');\n  font-weight: 700;\n  font-display: swap;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'PlayfairDisplay';\n  src: url("+h+") format('truetype');\n  font-weight: 600;\n}\n@font-face {\n  font-family: 'icomoon';\n  src: url("+b+') format(\'truetype\');\n  font-weight: normal;\n  font-style: normal;\n  font-display: block;\n}\n\nh1, h2, h3, h4, h5, h6 {\n  font-family: \'PlayfairDisplay\', serif;\n  margin: 0;\n  padding: 0;\n}\n\n[class^="icon-"], [class*=" icon-"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \'icomoon\' !important;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n\n.icon-menu:before {\n  content: "\\e903";\n}\n.icon-close:before {\n  content: "\\e900";\n}\n.icon-chevron-left:before {\n  content: "\\e904";\n}\n.icon-chevron-right:before {\n  content: "\\e905";\n}\n.icon-chevron-down:before {\n  content: "\\e906";\n}\n.icon-chevron-up:before {\n  content: "\\e90c";\n}\n.icon-circle-small:before {\n  content: "\\e907";\n}\n.icon-eye-outline:before {\n  content: "\\e90d";\n}\n.icon-loupe:before {\n  content: "\\e90e";\n}\n.icon-linkedin-1:before {\n  content: "\\e908";\n}\n.icon-facebook:before {\n  content: "\\e910";\n}\n.icon-instagram:before {\n  content: "\\e90a";\n}\n.icon-pinterest:before {\n  content: "\\e90b";\n}\n.icon-plus:before {\n  content: "\\e909";\n}\n.icon-plus-box:before {\n  content: "\\e90f";\n}\n.icon-account-edit:before {\n  content: "\\e911";\n}\n.icon-pages:before {\n  content: "\\e912";\n}\n.icon-translate:before {\n  content: "\\e913";\n}\n.icon-calendar-clock:before {\n  content: "\\e914";\n}',""]);const m=g},568:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,'.add-form {\n  background-color: var(--modal-content-background);\n  padding: 0;\n}\n\n.form-inner {\n  padding: 20px 20px 0 20px;\n}\n\n.input-fields {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 30px;\n  margin: 30px 0;\n}\n\n.two-col-inputs {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n\ninput, label, select {\n  display: block;\n}\n\nlabel {\n  color: var(--secondary);\n  text-transform: uppercase;\n  font-size: 0.70rem;\n  font-weight: 600;\n  padding-bottom: 3px;\n}\n\ninput, select {\n  color: var(--secondary);\n  border: 1px solid var(--input-border-color);\n  border-radius: 5px;\n  width: 96%;\n  padding: 8px;\n}\n\nselect {\n  width: 100%;\n}\n\n#publishDate {\n  width: 92%;\n}\n\ninput::placeholder, textarea::placeholder {\n  color: var(--subtle-gray);\n}\n\n.input-group {\n  position: relative;  \n}\n\nimg.check {\n  position: absolute;\n  bottom: 10px;\n  right: 20px;\n  z-index: 1;\n  width: 13px;\n  height: 13px;\n  opacity: 0;\n}\n\n.incorrect {\n  position: absolute;\n  font-size: 0.75em;\n  color: red;\n  padding-top: 4px;\n  opacity: 0;\n}\n\ninput:focus, textarea:focus {\n  box-shadow: 0 0 0 1px blue;\n}\n\ninput:not(:placeholder-shown):not(#publishDate):invalid {\n  box-shadow: 0 0 0 1px red;\n}\n\ninput:not(:placeholder-shown):not(#publishDate):not(#book-cover-file):valid {\n  box-shadow: 0 0 0 1px green;\n}\n\ninput:not(:placeholder-shown):valid +img.check {\n  opacity: 1;\n}\n\ninput[type="text"]:not(:placeholder-shown):invalid ~.incorrect {\n  opacity: 1;\n}\n\ninput[type="email"]:not(:placeholder-shown):not(:focus):invalid ~.incorrect, input[type="tel"]:not(:placeholder-shown):not(:focus):invalid ~.incorrect {\n  opacity: 1;\n}\n\n.switch-field {\n\tdisplay: flex;\n\toverflow: hidden;\n}\n\n.switch-field input {\n\tposition: absolute !important;\n\tclip: rect(0, 0, 0, 0);\n\theight: 1px;\n\twidth: 1px;\n\tborder: 0;\n\toverflow: hidden;\n}\n\n.switch-field label {\n\tbackground-color: #e4e4e4;\n\tcolor: var(--btn-text-color);\n\tfont-size: 12px;\n  font-weight: 400;\n\tline-height: 1;\n\ttext-align: center;\n\tpadding: 8px 16px 6px;\n\tborder: 1px solid rgba(0, 0, 0, 0.3);\n\ttransition: all 0.1s ease-in-out;\n}\n\n.switch-field label:first-of-type {\n  border-right: 0;\n}\n\n.switch-field label:hover {\n\tcursor: pointer;\n}\n\n.switch-field input:checked + label {\n\tbackground-color: var(--accent);\n\tbox-shadow: none;\n}\n\n.switch-field label:first-of-type {\n\tborder-radius: 4px 0 0 4px;\n}\n\n.switch-field label:last-of-type {\n\tborder-radius: 0 4px 4px 0;\n}\n\n.book-cover-preview {\n  width: 100%;\n  max-width: 220px;\n  height: 120px;\n  object-fit: cover;\n  object-position: center;\n  border-radius: 4px;\n}\n\n.modal-footer {\n  background-color: var(--header-background);\n  padding: 8px 0 10px 0;\n}\n\n.submit-btn {\n  margin: 0 auto;\n}',""]);const c=i},399:(n,e,t)=>{t.d(e,{Z:()=>c});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,".modal {\n  display: none;\n  position: fixed;\n  z-index: 999;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  overflow-y: auto;\n  background-color: var(--modal-background);\n  padding: 0;\n  margin: 0;\n}\n\n.modal-content {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 90%;\n  max-width: 480px;\n  margin: 2vw auto;\n}\n\n.close-container {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  text-align: right;\n}\n\n.modal .icon-close {\n  color: #222;\n  font-size: 1.4em;\n  border: 1px solid #222;\n  cursor: pointer;\n  opacity: 0.7;\n  transition: opacity 0.25s ease-in-out;\n}\n\n.modal .icon-close:hover {\n  opacity: 1;\n}\n",""]);const c=i},402:(n,e,t)=>{t.d(e,{Z:()=>p});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),c=t(414),l=t(568),s=t(786),d=i()(r());d.i(c.Z),d.i(l.Z),d.i(s.Z),d.push([n.id,":root {\n  --accent: #FFD300;\n  --accent-hover: #FEDD3C;\n  --secondary: #606569;\n  --logo-color: #fff;\n  --btn-text-color: #222;\n  --modal-background: rgba(0,0,0,0.7);\n  --modal-content-background: #fff;\n  --header-background: #708090;\n  --card-background: #f5f5f5;\n  --card-border-color: #bbb;\n  --input-border-color: #bbb;\n  --subtle-gray: #bbb;\n  scroll-behavior: smooth;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 1fr 40px;\n  margin: 0;\n  padding: 0;\n  font-family: 'Ubuntu', sans-serif;\n  background: linear-gradient(135deg, #f5f5f5, #bbb);\n  height: 100%;\n  min-height: 100vh;\n}\n\n\nheader, main, footer {\n  padding: 0 40px;\n}\n\nfigure {\n  padding: 0;\n  margin: 0;\n}\n\na {\n  color: inherit;\n  text-decoration: initial;\n}\n\nheader {\n  position: fixed;\n  align-self: start;\n  z-index: 99;\n  top: 0;\n  left: 0;\n  right: 0;\n  display: grid;\n  grid-template-columns: auto max-content max-content;\n  gap: 15px;\n  align-items: center;\n  background-color: var(--header-background);\n  min-height: 70px;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.3);\n}\n\n.logo {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  white-space: nowrap;\n  font-size: 20px;\n  margin-left: -7px;\n}\n\n.logo svg {\n  fill: var(--logo-color);\n  height: 60px;\n  width: auto;\n  transition: fill 0.2s ease-in-out;\n}\n\n.home-link:hover svg {\n  fill: var(--accent);\n}\n\n.logo h1 {\n  color: var(--logo-color);\n}\n\nmain {\n  margin: 100px 0 40px 0;\n}\n\n.btn {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  padding: 8px 16px;\n  color: var(--btn-text-color);\n  background-color: var(--accent);\n  border: none;\n  border-radius: 4px;\n  font-size: 0.9em;\n  font-weight: 400;\n  cursor: pointer;\n  transition: all 0.1s ease-in-out;\n}\n\n.btn:hover {\n  background-color: var(--accent-hover);\n}\n\n.btn span {\n  padding-left: 8px;\n  padding-right: 8px;\n  line-height: 1.8;\n}\n\n.btn i {\n  font-size: 1.8em;\n  transition: transform 0.3s ease-in-out;\n}\n\n.btn:hover i{\n  transform: rotate(90deg);\n}\n\n.add-btn {\n  padding: 12px!important;\n}\n\nfooter {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #333;\n  color: #fff;\n  font-size: 0.9em;\n}\n\n\n/* MOBILE */\n@media (max-width: 529px) {\n  .logo svg {\n    height: 50px;\n  }\n  .logo h1{\n    display: none;\n  }\n}",""]);const p=d},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var l=n[c],s=o.base?l[0]+o.base:l[0],d=a[s]||0,p="".concat(s," ").concat(d);a[s]=d+1;var u=t(p),g={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)e[u].references++,e[u].updater(g);else{var f=r(g,o);o.byIndex=c,e.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var l=o(n,r),s=0;s<a.length;s++){var d=t(a[s]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=l}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},598:(n,e,t)=>{n.exports=t.p+"93cdecc21109a014b86b.ttf"},530:(n,e,t)=>{n.exports=t.p+"fec2d0f1431a6114a6ce.ttf"},138:(n,e,t)=>{n.exports=t.p+"1cbb1b79a23478cc89ad.ttf"},895:(n,e,t)=>{n.exports=t.p+"135453429547dad392e4.ttf"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var o={};(()=>{t.d(o,{kO:()=>I,UY:()=>S,rs:()=>B});var n=t(379),e=t.n(n),r=t(795),a=t.n(r),i=t(569),c=t.n(i),l=t(565),s=t.n(l),d=t(216),p=t.n(d),u=t(589),g=t.n(u),f=t(399),A={};A.styleTagTransform=g(),A.setAttributes=s(),A.insert=c().bind(null,"head"),A.domAPI=a(),A.insertStyleElement=p(),e()(f.Z,A),f.Z&&f.Z.locals&&f.Z.locals;const h=document.querySelector(".modal"),b=document.querySelector(".modal-content"),m=document.querySelector(".icon-close"),x=n=>{n.target&&!n.currentTarget.classList.contains("modal-content")&&(document.body.style.overflow="auto",h.style.display="none"),n.stopPropagation()};m&&m.addEventListener("click",x),b&&b.addEventListener("click",x),h&&h.addEventListener("click",x),document.addEventListener("keydown",(function(n){"Escape"===n.key&&(document.body.style.overflow="auto",h.style.display="none")}));const v=function(){switch(B.value){case"title":I.sort((function(n,e){return n.title.localeCompare(e.title)}));break;case"author":I.sort((function(n,e){return n.author.localeCompare(e.author)}));break;case"language":I.sort((function(n,e){return n.language.localeCompare(e.language)}));break;case"pages":I.sort((function(n,e){return parseInt(n.pages)-parseInt(e.pages)}));break;case"isRead":I.sort((function(n,e){return e.isRead-n.isRead}));break;default:I.sort((function(n,e){return Date.parse(n.dateOfAdd)-Date.parse(e.dateOfAdd)})),console.log(I)}S(I)};var y=t(402),w={};w.styleTagTransform=g(),w.setAttributes=s(),w.insert=c().bind(null,"head"),w.domAPI=a(),w.insertStyleElement=p(),e()(y.Z,w),y.Z&&y.Z.locals&&y.Z.locals,t.p,t.p,t.p;const k=document.querySelector(".add-btn"),E=document.querySelector(".add-form"),L=document.querySelector(".cards"),B=document.querySelector("#sort-selection");let I=localStorage.getItem("myLibrary")?JSON.parse(localStorage.getItem("myLibrary")):[];function Q(){localStorage.setItem("myLibrary",JSON.stringify(I))}function S(n){L.replaceChildren();let e=I;n&&(e=n),e.length?e.forEach((({title:n,author:e,pages:t,language:o,publishDate:r,isRead:a,bookcover:i},c)=>{const l=function(n){let e=document.createElement("template");return e.innerHTML=n,e.content.childNodes}(`<article class="card" data-id="${c}">\n        <figure>\n          <img src="${i||"./images/placeholder.jpg"}" alt="${n}">\n          <figcaption><h2 class="card-title">${n}</h2></figcaption>\n        </figure>\n        <ul class="card-meta">\n          <li><i class="icon-account-edit" aria-label="Author" title="Author"></i><span>By ${e}</span></li>\n          <li><i class="icon-pages" aria-label="Number of pages" title="Number of pages"></i><span>${t} pages</span></li>\n          <li><i class="icon-translate" aria-label="Language" title="Language"></i><span>${o}</span></li>\n          <li><i class="icon-calendar-clock" aria-label="Publish date" title="Publish date"></i><span>${new Date(r).toLocaleDateString("en-GB")}</span></li>\n        </ul>\n        <div class="isread-toggle">\n          <small>Is Read?</small>\n          <div class="switch-field">\n            <input type="radio" id="toggle-radio-${c}-yes" name="isreadradio-${c}" value="yes" ${a?"checked":""} onInput="handleToggleRead({item: ${c}, value: true})">\n            <label for="toggle-radio-${c}-yes">Yes</label>\n            <input type="radio" id="toggle-radio-${c}-no" name="isreadradio-${c}" value="no" ${a?"":"checked"} onInput="handleToggleRead({item: ${c}, value: false})">\n            <label for="toggle-radio-${c}-no">No</label>\n          </div>\n        </div>\n        <i class="icon-close" aria-label="Delete book" onClick="handleDelete(this.parentNode.getAttribute('data-id'))"></i>\n      </article>`);L.appendChild(l[0])})):L.textContent="No books present in the library."}v(),S();window.handleDelete=n=>{I.splice(n,1),Q(),S()},window.handleToggleRead=({item:n,value:e})=>{I[n].isRead=e,Q()},window.previewFile=()=>{const n=document.querySelector(".book-cover-preview"),e=document.querySelector("input[type=file]").files[0],t=document.querySelector(".bookcover"),o=new FileReader;o.addEventListener("load",(()=>{n.src=o.result,t.value=o.result}),!1),e&&o.readAsDataURL(e)},k&&k.addEventListener("click",(()=>{document.querySelector(".bookcover").value="",E.reset(),document.querySelector(".book-cover-preview").src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQYGBgYICQgJCAwLCgoLDBINDg0ODRIbERQRERQRGxgdGBYYHRgrIh4eIisyKigqMjw2NjxMSExkZIYBBQUFBQUFBgYGBggJCAkIDAsKCgsMEg0ODQ4NEhsRFBERFBEbGB0YFhgdGCsiHh4iKzIqKCoyPDY2PExITGRkhv/CABEIAMgAyAMBIgACEQEDEQH/xAAcAAEBAQEAAwEBAAAAAAAAAAAAAQYHAgQFAwj/2gAIAQEAAAAA/rMAAAFgAAALAAAAWAAAAsAAABYAAACwAAAFgAAALAMl4gHuaMFgGL2gBi9oCwDF7QOF9H1rF7QFgGL2gc22H2WL2gLAMXtMhkuuHh63uYvaAsAxf68L/LpPX/DiPxu+ZnaAsA47z78jpPzcQ+70noQLAP5i9QA2HeAWAZP1gD633wWAAAAsAAABYAAACwAAAFgAAALAAAAWAAAAsAAABf/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/2gAIAQIQAAAA0AAAAAAAABQQCxZYBbcakA10S55gKIAAAAAAAAAf/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//aAAgBAxAAAADIAAAAAAAAAJQBLKAzN5tAzzWa6AIKAAAAAAAAAf/EAD0QAAECAwIIDAQFBQAAAAAAAAECAwQFBgAxEhYgMEBBUpMQESEiNDZRVWJ0dbETFHHCByNDc7JCYZHB0f/aAAgBAQABPwDSBeNJF40kXjSReNJF40kXjSReNJF4zDlXMfHfbhpbMIlLThbU4y1hIwk3i2Ni+4ZvuLY2L7hm+4tjYvuGb7i2Ni+4ZvuLY2L7hm+4tjYvuGb7i2Ni+4ZvuLY2L7hm+4tjYvuGb7i0tqSGmEb8kuEi4Z8t4aEPt4GGB2ZYvGYojoUz9Te9k5qN68SvyTn3ZYvGYojoUz9Te9k5U6rGcRUe78rFLYYbcIbSjk5BrVaj55ETuXLVFcReZcwFKA4sIXg8Mb14lfkXPuyxeMxRHQpn6m97Jypv+HyY2OciYOLS0l1eEttSOMJJvKbSKSQ8hgRCsqKyVYbiz/UrhjevEr8i592WLxmKI6FM/U3vZPBVNUsyNksMFK4xaeanUgbSrUrWjrb3yc2eKkOK5j6r0E6leHIccbabW44tKUJSVKUo8QAGs2gJhBzOHTEwbyXGiSOMdo1EG7gjevEr8i592WLxmKI6FM/U3vZNqpqlmRslhgpXGLTzU6kDaVZ992JeW88tS3FqJUpV5J4KQrAwnw5dMnPybmnj+n4VeG19nHG2W1uOLSlCUlSlKPEABrNqsqxycrMJCFSINJ+hdI1nw9gtIJ9FSGL+K1zmlcjrWpQ/7aXTGEmkI3FQrmE2r/IPYew2jevEr8i592WLxmIOp25FK5kyyAqLdmL5QDcgcQGEbPvvRLy3nnFLcWrjUpXKScikKwEIG5dMnPyLmXj+n4VeG1WVWucOGEhFFMGlX0LpGs+HsHDIZ9FyGLDrRwmlcjrRuWP9HsNm5jCTSrpPFQrmEhUC59UnnchyxeMxH9Oi/wB9z+WaoXrHDftufxyxeMxGUVIY2JdiFsuJW4oqVgLIBJtiBT2w/vLYgU9sP7y2IFPbD+8tiBT2w/vLYgU9sP7y2IFPbD+8tiBT2w/vLYgU9sP7y2IFPbD+8tKaZlEmeU/CtK+IU4OGtWEQP7ZYvGki8aSLxpIvGki8aSLxpIvGki8aSLxb/8QAHxEAAQMFAQEBAAAAAAAAAAAAAQARUQIQITBBUBIx/9oACAECAQE/APXCxCxCxCxCxGjhvS3Uf1DRwqml1VTFvnCHdFIe7B3sR3S5lOZTmU5lOfZ//8QAHhEAAQMFAQEAAAAAAAAAAAAAAAERUQIQITBBUBL/2gAIAQMBAT8A9jMmZMyZkzo7ep+CC6OlVTFNU2+si6Kla7qzWReaWSBkgZIGSBk9n//Z",document.body.style.overflow="hidden",h.style.display="block"})),E&&E.addEventListener("submit",(n=>{n.preventDefault(),x(n);const e=new FormData(n.target);(({title:n,author:e,pages:t,language:o,publishDate:r,isreadradio:a,bookcover:i})=>{let c=!1;"yes"===a&&(c=!0);const l=new class{constructor(n,e,t,o,r,a,i){this.title=n,this.author=e,this.pages=t,this.language=o,this.publishDate=r,this.isRead=a,this.bookcover=i,this.dateOfAdd=new Date}toggleRead=function(){this.isRead=!this.isRead,console.log("Read status: "+this.isRead)}}(n,e,t,o,r,c,i);I.push(l),Q(),S()})(Object.fromEntries(e))})),B&&B.addEventListener("change",v)})()})();