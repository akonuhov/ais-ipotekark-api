webpackJsonp([5],{"/f2d":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("q47d"),i={name:"PageDocumentCreate",components:{MainLayout:e("RThI").a,Editor:o.a},data:function(){return{templateObject:{name:null,text:null}}}},r=e("XyMi");var s=function(t){e("RD3N")},a=Object(r.a)(i,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("main-layout",{attrs:{title:"Добавить шаблон"}},[e("b-card",[e("b-form",[e("b-form-row",[e("b-form-group",{staticClass:"col-12",attrs:{label:"Наименование шаблона"}},[e("b-input",{attrs:{placeholder:"Наименование шаблона"},model:{value:t.templateObject.name,callback:function(n){t.$set(t.templateObject,"name",n)},expression:"templateObject.name"}})],1),t._v(" "),e("b-form-group",{staticClass:"col-12",attrs:{label:"Содержание шаблона"}},[e("editor",{model:{value:t.templateObject.text,callback:function(n){t.$set(t.templateObject,"text",n)},expression:"templateObject.text"}})],1)],1),t._v(" "),e("b-btn",{attrs:{variant:"secondary",to:"/templates"}},[t._v("Назад")]),t._v(" "),e("b-btn",{staticClass:"ml-2",attrs:{variant:"primary"}},[t._v("Создать")])],1)],1)],1)},[],!1,s,null,null);n.default=a.exports},H7xL:function(t,n,e){"use strict";(function(t){e.d(n,"a",function(){return i});var o=function(){return"undefined"!=typeof window?window:t},i=function(){var t=o();return t&&t.tinymce?t.tinymce:null}}).call(n,e("DuR2"))},RD3N:function(t,n){},q47d:function(t,n,e){"use strict";var o=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],i=function(t){return-1!==o.indexOf(t)},r=function(t,n,e){var o=n.$props.value?n.$props.value:"",r=n.$props.initialValue?n.$props.initialValue:"";e.setContent(o||r),n.$listeners.input&&function(t,n){var e,o=t.$props.modelEvents?t.$props.modelEvents:null,i=Array.isArray(o)?o.join(" "):o;t.$watch("value",function(t,o){n&&"string"==typeof t&&t!==e&&t!==o&&(n.setContent(t),e=t)}),n.on(i||"change keyup undo redo",function(){e=n.getContent(),t.$emit("input",e)})}(n,e),function(t,n,e){Object.keys(n).filter(i).forEach(function(o){var i=n[o];"function"==typeof i&&("onInit"===o?i(t,e):e.on(o.substring(2),function(t){return i(t,e)}))})}(t,n.$listeners,e)},s=0,a=function(t){var n=Date.now();return t+"_"+Math.floor(1e9*Math.random())+ ++s+String(n)},l=function(t){return void 0===t||""===t?[]:Array.isArray(t)?t:t.split(" ")},c=e("H7xL"),u={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],value:String,disabled:Boolean},p=this&&this.__assign||function(){return(p=Object.assign||function(t){for(var n,e=1,o=arguments.length;e<o;e++)for(var i in n=arguments[e])Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t}).apply(this,arguments)},d={listeners:[],scriptId:a("tiny-script"),scriptLoaded:!1},f=function(t){return function(){var n,e,o,i=p({},t.$props.init,{readonly:t.$props.disabled,selector:"#"+t.elementId,plugins:(n=t.$props.init&&t.$props.init.plugins,e=t.$props.plugins,l(n).concat(l(e))),toolbar:t.$props.toolbar||t.$props.init&&t.$props.init.toolbar,inline:t.inlineEditor,setup:function(n){t.editor=n,n.on("init",function(e){return r(e,t,n)}),t.$props.init&&"function"==typeof t.$props.init.setup&&t.$props.init.setup(n)}});null!==(o=t.element)&&"textarea"===o.tagName.toLowerCase()&&(t.element.style.visibility=""),Object(c.a)().init(i)}},m={props:u,created:function(){this.elementId=this.$props.id||a("tiny-vue"),this.inlineEditor=this.$props.init&&this.$props.init.inline||this.$props.inline},watch:{disabled:function(){this.editor.setMode(this.disabled?"readonly":"design")}},mounted:function(){if(this.element=this.$el,null!==Object(c.a)())f(this)();else if(this.element&&this.element.ownerDocument){var t=this.element.ownerDocument,n=this.$props.cloudChannel?this.$props.cloudChannel:"5",e=this.$props.apiKey?this.$props.apiKey:"";!function(t,n,e,o){t.scriptLoaded?o():(t.listeners.push(o),n.getElementById(t.scriptId)||function(t,n,e,o){var i=n.createElement("script");i.type="application/javascript",i.id=t,i.addEventListener("load",o),i.src=e,n.head&&n.head.appendChild(i)}(t.scriptId,n,e,function(){t.listeners.forEach(function(t){return t()}),t.scriptLoaded=!0}))}(d,t,"https://cloud.tinymce.com/"+n+"/tinymce.min.js?apiKey="+e,f(this))}},beforeDestroy:function(){null!==Object(c.a)()&&Object(c.a)().remove(this.editor)},render:function(t){return this.inlineEditor?function(t,n,e){return t(e||"div",{attrs:{id:n}})}(t,this.elementId,this.$props.tagName):function(t,n){return t("textarea",{attrs:{id:n},style:{visibility:"hidden"}})}(t,this.elementId)}};n.a=m}});