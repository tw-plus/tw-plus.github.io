(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([[56],{1912:function(e,t,r){(e.exports=r(9)(!1)).push([e.i,':root {\n  --zebraStriping-percent: calc(var(--zebraStriping-shadeNumber) * var(--zebraStriping-intensity) / 100);\n  --zebraStriping-bright: calc(1 + var(--zebraStriping-percent));\n  --zebraStriping-saturate: calc(1 - var(--zebraStriping-percent));\n  --zebraStriping-filter: brightness(var(--zebraStriping-bright)) saturate(var(--zebraStriping-saturate));\n  /* "Temporary" value, gets replaced by userscript */\n  --zebraStriping-replacementGlow: url(#blocklyReplacementGlowFilter);\n}\n\n.sa-zebra-stripe {\n  filter: var(--zebraStriping-filter);\n}\n\n.sa-zebra-stripe[filter*="#blocklyReplacementGlowFilter"] {\n  filter: var(--zebraStriping-filter) var(--zebraStriping-replacementGlow);\n}\n\n/* editor-stepping and debugger compatibility */\n/* this is pretty horrible */\n.sa-zebra-stripe[style*="#sa_glower_filter0"] {\n  /* !important because editor-stepping Highlighter uses inline styles */\n  filter: var(--zebraStriping-filter) url("#sa_glower_filter0") !important;\n}\n.sa-zebra-stripe[style*="#sa_glower_filter1"] {\n  filter: var(--zebraStriping-filter) url("#sa_glower_filter1") !important;\n}\n',""])},1986:function(e,t,r){"use strict";r.r(t),r.d(t,"resources",(function(){return n}));var i=r(1912);const n={"userscript.js":async function({addon:e,msg:t,console:r}){const i=e.tab.traps.vm,n=await e.tab.traps.getBlockly(),a=n.BlockSvg.prototype.render;for(n.BlockSvg.prototype.render=function(e){if(!this.isInFlyout&&!this.isShadow()&&null===this.getParent()){const e=new Map;for(const t of this.getDescendants()){const r=t.getSurroundParent();let i=!1;r&&(t.isShadow()?i=!!e.get(r):r.getColour()===t.getColour()&&(i=!e.get(r))),e.set(t,i);const n=[t.svgPath_];for(const e of t.inputList){e.outlinePath&&n.push(e.outlinePath);for(const t of e.fieldRow)t.fieldGroup_&&n.push(t.fieldGroup_)}for(const e of n)e.classList.toggle("sa-zebra-stripe",i)}}return a.call(this,e)},i.editingTarget&&i.emitWorkspaceUpdate();;){const t=await e.tab.waitForElement('filter[id*="blocklyReplacementGlowFilter"]',{markAsSeen:!0,reduxEvents:["scratch-gui/mode/SET_PLAYER","fontsLoaded/SET_FONTS_LOADED","scratch-gui/locales/SELECT_LOCALE"],reduxCondition:e=>!e.scratchGui.mode.isPlayerOnly});document.documentElement.style.setProperty("--zebraStriping-replacementGlow","url(#".concat(t.id,")"))}},"userstyle.css":r.n(i).a}}}]);