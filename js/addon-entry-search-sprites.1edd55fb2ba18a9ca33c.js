(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([[45],{1926:function(e,n,s){(e.exports=s(9)(!1)).push([e.i,'.sa-search-sprites-container {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n\ninput.sa-search-sprites-box {\n  width: 100%;\n  box-sizing: border-box;\n  background-color: transparent;\n  border: 0px;\n  border-bottom: 1px solid hsla(0, 0%, 1%, 0.15);\n  outline: none;\n  padding: 5px 20px 5px 10px;\n}\n[theme="dark"] input.sa-search-sprites-box {\n  border-color: var(--ui-black-transparent);\n}\n\n.sa-search-sprites-reset {\n  display: none;\n  margin: 0;\n  padding: 0;\n  background: none;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  position: absolute;\n  right: 0;\n  padding-right: 5px;\n  font-size: 25px;\n}\n\n.sa-search-sprites-box:not(:placeholder-shown) ~ .sa-search-sprites-reset {\n  display: block;\n}\n',""])},1990:function(e,n,s){"use strict";s.r(n),s.d(n,"resources",(function(){return t}));var r=s(1926);const t={"userscript.js":async function({addon:e,console:n,msg:s}){let r,t;const o=document.createElement("div");o.className="sa-search-sprites-container",e.tab.displayNoneWhileDisabled(o,{display:"flex"});const a=document.createElement("input");a.className="sa-search-sprites-box",a.placeholder=s("placeholder"),a.autocomplete="off",a.type="text";const i=e=>{if(!r)return;e=e.toLowerCase();const n=n=>n.toLowerCase().includes(e);for(const s of r.children){const r=!e||n(s.children[0].children[1].innerText)||n(s.children[0].children[2].children[0].innerText)&&s.children[0].classList.contains("sa-folders-folder");s.style.display=r?"":"none"}};a.addEventListener("input",e=>{i(e.target.value)});const c=()=>{i(""),a.value=""},l=document.createElement("button");for(l.className="sa-search-sprites-reset",l.addEventListener("click",c),l.textContent="×",e.self.addEventListener("disabled",c),o.appendChild(a),o.appendChild(l);;)await e.tab.waitForElement("div[class^='sprite-selector_items-wrapper']",{markAsSeen:!0,reduxEvents:["scratch-gui/mode/SET_PLAYER","fontsLoaded/SET_FONTS_LOADED","scratch-gui/locales/SELECT_LOCALE"],reduxCondition:e=>!e.scratchGui.mode.isPlayerOnly}),r=document.querySelector('[class^="sprite-selector_items-wrapper"]'),t=document.querySelector('[class^="sprite-selector_scroll-wrapper"]'),t.insertBefore(o,r),c()},"search-bar.css":s.n(r).a}}}]);