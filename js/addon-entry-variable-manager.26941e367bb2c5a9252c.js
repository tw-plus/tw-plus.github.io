(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([[54],{1924:function(e,t,a){var n=a(214);(e.exports=a(9)(!1)).push([e.i,'/* Change z-indexes to allow more than 3 tabs */\n[class*="gui_tab_"][class*="gui_is-selected_"] {\n  z-index: 10 !important;\n}\n[class*="gui_tab_"]:nth-of-type(1) {\n  z-index: 9;\n}\n[class*="gui_tab_"]:nth-of-type(2) {\n  z-index: 8;\n}\n[class*="gui_tab_"]:nth-of-type(3) {\n  z-index: 7;\n}\n[class*="gui_tab_"]:nth-of-type(4) {\n  z-index: 6;\n}\n\n.sa-var-manager {\n  display: block;\n  padding: 18px;\n  /* weird hack to fix scrolling??? */\n  height: 50px;\n  overflow-y: auto;\n}\n\n.sa-var-manager-searchbox {\n  background-image: url('+n(a(1925))+');\n  width: 25%;\n  margin-bottom: 4px;\n  padding: 8px;\n  padding-right: 32px; /* for the text to not overlap the image */\n  border-radius: 4px;\n  background-repeat: no-repeat;\n  background-size: 18px 18px;\n  background-position: calc(100% - 7px) center;\n  font-size: 0.75rem;\n}\n[theme="dark"] .sa-var-manager-searchbox {\n  border-color: #333;\n}\n\n[dir="rtl"] .sa-var-manager-searchbox {\n  padding-right: 8px;\n  padding-left: 32px;\n  background-position: 7px center;\n}\n\n.sa-var-manager.freeze .sa-var-manager-value *,\n.sa-var-manager.freeze .sa-var-manager-name * {\n  opacity: 0.5;\n}\n\n.sa-var-manager.freeze input:focus,\n.sa-var-manager.freeze textarea:focus {\n  opacity: 1;\n}\n\n.sa-var-manager-heading {\n  display: block;\n  font-weight: bold;\n  font-size: large;\n  margin-top: 6px;\n  margin-bottom: 6px;\n}\n\n.sa-var-manager-name {\n  word-break: break-word;\n}\n\n.sa-var-manager .sa-var-manager-value {\n  width: 75%;\n}\n\n.sa-var-manager * > input {\n  background: none;\n  border: none;\n  padding: 8px;\n  width: 100%;\n  height: 100%;\n}\n\n.sa-var-manager-value > textarea {\n  background: none;\n  border: none;\n  padding: 8px;\n  width: 100%;\n  height: 100%;\n  line-height: 2em;\n  resize: none;\n}\n\n.sa-var-manager-too-big {\n  display: none;\n  cursor: pointer;\n  font: inherit;\n  font-style: italic;\n  color: inherit;\n  background: none;\n  border: none;\n  margin: 0;\n  padding: 8px;\n  opacity: 0.8;\n  width: 100%;\n  text-align: left;\n}\n.sa-var-manager-too-big:hover {\n  text-decoration: underline;\n}\n[data-too-big="true"] .sa-var-manager-too-big {\n  display: block;\n}\n[data-too-big="true"] .sa-var-manager-value-input {\n  display: none;\n}\n\n.sa-var-manager table {\n  border-radius: 5px;\n  border-collapse: collapse;\n  width: 100%;\n}\n\n.sa-var-manager td {\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  text-align: left;\n}\n[theme="dark"] .sa-var-manager td {\n  border-color: #333;\n}\n\n/* tr:nth-child(even) {\n    background-color: #dddddd;\n} */\n',""])},1925:function(e,t,a){e.exports=a.p+"static/assets/1821649bb254ff5d93bb397ad646a23f.svg"},1964:function(e,t,a){"use strict";a.r(t),a.d(t,"resources",(function(){return i}));var n=a(1924);const i={"userscript.js":async function({addon:e,console:t,msg:a}){const n=e.tab.traps.vm;let i=[],s=[],r=!1;const o=document.createElement("div");o.classList.add(e.tab.scratchClass("asset-panel_wrapper"),"sa-var-manager");const c=document.createElement("input");c.placeholder=a("search"),c.className=e.tab.scratchClass("input_input-form",{others:"sa-var-manager-searchbox"}),c.addEventListener("input",e=>{for(const e of i)e.handleSearch(c.value);for(const e of s)e.handleSearch(c.value);M()}),o.appendChild(c);const l=document.createElement("div"),d=document.createElement("span"),u=document.createElement("table");d.className="sa-var-manager-heading",d.innerText=a("for-this-sprite"),l.appendChild(d),l.appendChild(u);const g=document.createElement("div"),h=document.createElement("span"),p=document.createElement("table");h.className="sa-var-manager-heading",h.innerText=a("for-all-sprites"),g.appendChild(h),g.appendChild(p),o.appendChild(l),o.appendChild(g);const b=document.createElement("li");e.tab.displayNoneWhileDisabled(b,{display:"flex"}),b.classList.add(e.tab.scratchClass("react-tabs_react-tabs__tab"),e.tab.scratchClass("gui_tab")),b.id="react-tabs-sa-variable-manager";const m=document.createElement("img");m.draggable=!1,m.src=e.self.getResource("/icon.svg");const v=document.createElement("span");function M(){let e=i.filter(e=>"none"!==e.row.style.display),t=s.filter(e=>"none"!==e.row.style.display);d.style.display=0===e.length?"none":"",h.style.display=0===t.length?"none":""}v.innerText=a("variables"),b.appendChild(m),b.appendChild(v);const I=new WeakMap,x=new IntersectionObserver(e=>{for(const t of e){I.get(t.target).setVisible(t.isIntersecting)}},{rootMargin:"100px"});class E{constructor(e,t){this.scratchVariable=e,this.target=t,this.visible=!1,this.ignoreTooBig=!1,this.buildDOM()}updateValue(e){if(!this.visible&&!e)return;let t,a;if("list"===this.scratchVariable.type?(t=this.scratchVariable.value.join("\n"),a=5e6):(t=this.scratchVariable.value,a=1e6),!this.ignoreTooBig&&t.length>a)return this.input.value="",void(this.row.dataset.tooBig=!0);this.row.dataset.tooBig=!1,t!==this.input.value&&(this.input.disabled=!1,this.input.value=t)}handleSearch(e){this.scratchVariable.name.toLowerCase().includes(e.toLowerCase())||!e?(this.row.style.display="",this.updateValue(!0)):this.row.style.display="none"}resizeInputIfList(){if("list"===this.scratchVariable.type){this.input.style.height="auto";const e=Math.min(1e3,this.input.scrollHeight);e>0&&(this.input.style.height=e+"px")}}setVisible(e){this.visible!==e&&(this.visible=e,e&&this.updateValue())}buildDOM(){const e="sa-variable-manager-".concat(this.scratchVariable.id),t=document.createElement("tr");this.row=t;const i=document.createElement("td");i.className="sa-var-manager-name";const s=document.createElement("input");s.value=this.scratchVariable.name,s.htmlFor=e;s.addEventListener("keydown",e=>{"Enter"===e.key&&e.target.blur()}),s.addEventListener("focusout",e=>{e.preventDefault();const t=Blockly.getMainWorkspace();let a=s.value;if(a===this.scratchVariable.name)return;this.scratchVariable.isCloud&&(a.startsWith("☁")?a.startsWith("☁ ")||(a=a.substring(0,1)+" "+a.substring(1)):a="☁ "+a);let i=!1;if(this.target.isStage){i=n.runtime.getAllVarNamesOfType(this.scratchVariable.type).includes(a)}else i=!!t.getVariable(a,this.scratchVariable.type);!a.trim()||i?s.value=this.scratchVariable.name:(t.renameVariableById(this.scratchVariable.id,a),s.value!==a&&(s.value=a))}),s.addEventListener("focus",e=>{r=!0,o.classList.add("freeze")}),s.addEventListener("blur",e=>{r=!1,o.classList.remove("freeze")}),i.appendChild(s),I.set(t,this),x.observe(t);const l=document.createElement("td");l.className="sa-var-manager-value";const d=document.createElement("button");let u;this.tooBigElement=d,d.textContent=a("too-big"),d.className="sa-var-manager-too-big",d.addEventListener("click",()=>{this.ignoreTooBig=!0,this.updateValue(!0)}),u="list"===this.scratchVariable.type?document.createElement("textarea"):document.createElement("input"),u.className="sa-var-manager-value-input",u.id=e,this.input=u,this.updateValue(!0),"list"===this.scratchVariable.type&&this.input.addEventListener("input",()=>this.resizeInputIfList(),!1);u.addEventListener("keydown",e=>{"INPUT"===e.target.nodeName&&"Enter"===e.key&&e.target.blur()}),u.addEventListener("focusout",e=>{e.preventDefault(),"list"===this.scratchVariable.type?n.setVariableValue(this.target.id,this.scratchVariable.id,u.value.split("\n")):n.setVariableValue(this.target.id,this.scratchVariable.id,u.value),u.blur()}),u.addEventListener("focus",e=>{r=!0,o.classList.add("freeze")}),u.addEventListener("blur",e=>{r=!1,o.classList.remove("freeze")}),l.appendChild(u),l.appendChild(d),t.appendChild(i),t.appendChild(l),this.handleSearch(c.value)}}function A(){var t,a,o;if(3!==(null===(t=e.tab.redux.state)||void 0===t||null===(a=t.scratchGui)||void 0===a||null===(o=a.editorTab)||void 0===o?void 0:o.activeTabIndex)||r)return;const c=n.runtime.getEditingTarget(),l=n.runtime.getTargetForStage();for(i=c.isStage?[]:Object.values(c.variables).filter(e=>""===e.type||"list"===e.type).map(e=>new E(e,c)),s=Object.values(l.variables).filter(e=>""===e.type||"list"===e.type).map(e=>new E(e,l)),M();u.firstChild;)u.removeChild(u.firstChild);for(;p.firstChild;)p.removeChild(p.firstChild);for(const e of i)u.appendChild(e.row),e.resizeInputIfList();for(const e of s)p.appendChild(e.row),e.resizeInputIfList()}function y(t){if(t){b.classList.add(e.tab.scratchClass("react-tabs_react-tabs__tab--selected"),e.tab.scratchClass("gui_is-selected"));document.querySelector("[class^=gui_tabs]").insertAdjacentElement("beforeend",o),A()}else b.classList.remove(e.tab.scratchClass("react-tabs_react-tabs__tab--selected"),e.tab.scratchClass("gui_is-selected")),o.remove(),i=[],s=[]}b.addEventListener("click",t=>{e.tab.redux.dispatch({type:"scratch-gui/navigation/ACTIVATE_TAB",activeTabIndex:3})}),e.tab.redux.initialize(),e.tab.redux.addEventListener("statechanged",({detail:t})=>{"scratch-gui/navigation/ACTIVATE_TAB"===t.action.type?y(3===t.action.activeTabIndex):"scratch-gui/mode/SET_PLAYER"===t.action.type&&(t.action.isPlayerOnly||3!==e.tab.redux.state.scratchGui.editorTab.activeTabIndex||queueMicrotask(()=>y(!0)))}),n.runtime.on("PROJECT_LOADED",()=>{try{A()}catch(e){t.error(e)}}),n.runtime.on("TOOLBOX_EXTENSIONS_NEED_UPDATE",()=>{try{A()}catch(e){t.error(e)}});const f=n.runtime._step;for(n.runtime._step=function(...a){const n=f.call(this,...a);try{!function(){var t,a,n;if(3===(null===(t=e.tab.redux.state)||void 0===t||null===(a=t.scratchGui)||void 0===a||null===(n=a.editorTab)||void 0===n?void 0:n.activeTabIndex)&&!r){for(const e of i)e.updateValue();for(const e of s)e.updateValue()}}()}catch(e){t.error(e)}return n},e.self.addEventListener("disabled",()=>{3===e.tab.redux.state.scratchGui.editorTab.activeTabIndex&&e.tab.redux.dispatch({type:"scratch-gui/navigation/ACTIVATE_TAB",activeTabIndex:2})});;)await e.tab.waitForElement("[class^='react-tabs_react-tabs__tab-list']",{markAsSeen:!0,reduxEvents:["scratch-gui/mode/SET_PLAYER","fontsLoaded/SET_FONTS_LOADED","scratch-gui/locales/SELECT_LOCALE"],reduxCondition:e=>!e.scratchGui.mode.isPlayerOnly}),e.tab.appendToSharedSpace({space:"afterSoundTab",element:b,order:3})},"style.css":a.n(n).a,"icon.svg":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0iI0ZGNEM0QyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC42NDkgMy4wODRBMSAxIDAgMCAxIDUuMTYzIDQuNCAxMy45NSAxMy45NSAwIDAgMCA0IDEwYzAgMS45OTMuNDE2IDMuODg2IDEuMTY0IDUuNmExIDEgMCAwIDEtMS44MzIuOEExNS45NSAxNS45NSAwIDAgMSAyIDEwYzAtMi4yNzQuNDc1LTQuNDQgMS4zMzItNi40YTEgMSAwIDAgMSAxLjMxNy0uNTE2ek0xMi45NiA3YTMgMyAwIDAgMC0yLjM0MiAxLjEyNmwtLjMyOC40MS0uMTExLS4yNzlBMiAyIDAgMCAwIDguMzIzIDdIOGExIDEgMCAwIDAgMCAyaC4zMjNsLjUzMiAxLjMzLTEuMDM1IDEuMjk1YTEgMSAwIDAgMS0uNzgxLjM3NUg3YTEgMSAwIDEgMCAwIDJoLjAzOWEzIDMgMCAwIDAgMi4zNDItMS4xMjZsLjMyOC0uNDEuMTExLjI3OUEyIDIgMCAwIDAgMTEuNjc3IDE0SDEyYTEgMSAwIDEgMCAwLTJoLS4zMjNsLS41MzItMS4zMyAxLjAzNS0xLjI5NUExIDEgMCAwIDEgMTIuOTYxIDlIMTNhMSAxIDAgMSAwIDAtMmgtLjAzOXptMS44NzQtMi42YTEgMSAwIDAgMSAxLjgzMy0uOEExNS45NSAxNS45NSAwIDAgMSAxOCAxMGMwIDIuMjc0LS40NzUgNC40NC0xLjMzMiA2LjRhMSAxIDAgMSAxLTEuODMyLS44QTEzLjk0OSAxMy45NDkgMCAwIDAgMTYgMTBjMC0xLjk5My0uNDE2LTMuODg2LTEuMTY1LTUuNnoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPgo=","search.svg":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTE1LjUgMTRoLS43OWwtLjI4LS4yN0E2LjQ3MSA2LjQ3MSAwIDAgMCAxNiA5LjUgNi41IDYuNSAwIDEgMCA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0eiIgZmlsbD0iI0QzRDNEMyIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4="}}}]);