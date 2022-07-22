(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-57eea83c"],{"0798":function(t,e,i){"use strict";var n=i("5530"),s=i("ade3"),a=(i("caad"),i("0c18"),i("10d2")),o=i("afdd"),r=i("9d26"),c=i("f2e7"),u=i("7560"),h=i("f40d"),l=i("58df"),d=i("d9bd");e["a"]=Object(l["a"])(a["a"],c["a"],h["a"]).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"===typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var t={staticClass:"v-alert__border",class:Object(s["a"])({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&(t=this.setBackgroundColor(this.computedColor,t),t.class["v-alert__border--has-color"]=!0),this.$createElement("div",t)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(o["a"],{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(r["a"],{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(r["a"],{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=Object(n["a"])(Object(n["a"])({},a["a"].options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||u["a"].options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(d["a"])("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],e={staticClass:"v-alert__wrapper"};return this.$createElement("div",e,t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var t={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){var e=this.hasText?this.setTextColor:this.setBackgroundColor;t=e(this.computedColor,t)}return this.$createElement("div",t,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},"0a19":function(t,e,i){},"0c18":function(t,e,i){},"0e8f":function(t,e,i){"use strict";i("20f6");var n=i("e8f2");e["a"]=Object(n["a"])("flex")},"1f4f":function(t,e,i){"use strict";var n=i("5530"),s=(i("a9e3"),i("8b37"),i("80d2")),a=i("7560"),o=i("58df");e["a"]=Object(o["a"])(a["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(n["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(s["g"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},"20f6":function(t,e,i){},"2fa4":function(t,e,i){"use strict";i("20f6");var n=i("80d2");e["a"]=Object(n["i"])("spacer","div","v-spacer")},"3a2f":function(t,e,i){"use strict";var n=i("ade3"),s=(i("a9e3"),i("9734"),i("4ad4")),a=i("a9ad"),o=i("16b7"),r=i("b848"),c=i("f573"),u=i("f2e7"),h=i("80d2"),l=i("d9bd"),d=i("58df");e["a"]=Object(d["a"])(a["a"],o["a"],r["a"],c["a"],u["a"]).extend({name:"v-tooltip",props:{closeDelay:{type:[Number,String],default:0},disabled:Boolean,fixed:{type:Boolean,default:!0},openDelay:{type:[Number,String],default:0},openOnHover:{type:Boolean,default:!0},tag:{type:String,default:"span"},transition:String},data:function(){return{calculatedMinWidth:0,closeDependents:!1}},computed:{calculatedLeft:function(){var t=this.dimensions,e=t.activator,i=t.content,n=!this.bottom&&!this.left&&!this.top&&!this.right,s=!1!==this.attach?e.offsetLeft:e.left,a=0;return this.top||this.bottom||n?a=s+e.width/2-i.width/2:(this.left||this.right)&&(a=s+(this.right?e.width:-i.width)+(this.right?10:-10)),this.nudgeLeft&&(a-=parseInt(this.nudgeLeft)),this.nudgeRight&&(a+=parseInt(this.nudgeRight)),"".concat(this.calcXOverflow(a,this.dimensions.content.width),"px")},calculatedTop:function(){var t=this.dimensions,e=t.activator,i=t.content,n=!1!==this.attach?e.offsetTop:e.top,s=0;return this.top||this.bottom?s=n+(this.bottom?e.height:-i.height)+(this.bottom?10:-10):(this.left||this.right)&&(s=n+e.height/2-i.height/2),this.nudgeTop&&(s-=parseInt(this.nudgeTop)),this.nudgeBottom&&(s+=parseInt(this.nudgeBottom)),"".concat(this.calcYOverflow(s+this.pageYOffset),"px")},classes:function(){return{"v-tooltip--top":this.top,"v-tooltip--right":this.right,"v-tooltip--bottom":this.bottom,"v-tooltip--left":this.left,"v-tooltip--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},computedTransition:function(){return this.transition?this.transition:this.isActive?"scale-transition":"fade-transition"},offsetY:function(){return this.top||this.bottom},offsetX:function(){return this.left||this.right},styles:function(){return{left:this.calculatedLeft,maxWidth:Object(h["g"])(this.maxWidth),minWidth:Object(h["g"])(this.minWidth),opacity:this.isActive?.9:0,top:this.calculatedTop,zIndex:this.zIndex||this.activeZIndex}}},beforeMount:function(){var t=this;this.$nextTick((function(){t.value&&t.callActivate()}))},mounted:function(){"v-slot"===Object(h["t"])(this,"activator",!0)&&Object(l["b"])("v-tooltip's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},methods:{activate:function(){this.updateDimensions(),requestAnimationFrame(this.startTransition)},deactivate:function(){this.runDelay("close")},genActivatorListeners:function(){var t=this,e=s["a"].options.methods.genActivatorListeners.call(this);return e.focus=function(e){t.getActivator(e),t.runDelay("open")},e.blur=function(e){t.getActivator(e),t.runDelay("close")},e.keydown=function(e){e.keyCode===h["y"].esc&&(t.getActivator(e),t.runDelay("close"))},e},genActivatorAttributes:function(){return{"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genTransition:function(){var t=this.genContent();return this.computedTransition?this.$createElement("transition",{props:{name:this.computedTransition}},[t]):t},genContent:function(){var t;return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-tooltip__content",class:(t={},Object(n["a"])(t,this.contentClass,!0),Object(n["a"])(t,"menuable__content__active",this.isActive),Object(n["a"])(t,"v-tooltip__content--fixed",this.activatorFixed),t),style:this.styles,attrs:this.getScopeIdAttrs(),directives:[{name:"show",value:this.isContentActive}],ref:"content"}),this.getContentSlot())}},render:function(t){var e=this;return t(this.tag,{staticClass:"v-tooltip",class:this.classes},[this.showLazyContent((function(){return[e.genTransition()]})),this.genActivator()])}})},"549b":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-dialog",{staticClass:"my-0 py-0",attrs:{persistent:"","max-width":"500"},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[i("v-alert",{staticClass:"my-0",attrs:{prominent:"",type:t.type}},t._l(t.texts,(function(e){return i("div",{key:e,staticClass:"text-button",domProps:{innerHTML:t._s(e)}})})),0)],1)},s=[],a={data:function(){return{texts:[""],title:"",type:"",timeout:3e3,status:!1}},methods:{showAlert:function(t){this.texts=Array.isArray(t.text)?t.text:[void 0==t.text?"":t.text],this.title=t.title,this.type=t.type,this.timeout="undefined"==typeof t.timeout?3e3:t.timeout,this.status=!0;var e=this;setTimeout((function(){e.status=!1}),this.timeout)}}},o=a,r=i("2877"),c=i("6544"),u=i.n(c),h=i("0798"),l=i("169a"),d=Object(r["a"])(o,n,s,!1,null,null,null);e["a"]=d.exports;u()(d,{VAlert:h["a"],VDialog:l["a"]})},"8b37":function(t,e,i){},9734:function(t,e,i){},"99d9":function(t,e,i){"use strict";i.d(e,"a",(function(){return a})),i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return c}));var n=i("b0af"),s=i("80d2"),a=Object(s["i"])("v-card__actions"),o=Object(s["i"])("v-card__subtitle"),r=Object(s["i"])("v-card__text"),c=Object(s["i"])("v-card__title");n["a"]},a2b4:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"grey"},[i("SPAlert",{ref:"alert"}),i("v-card",{staticClass:"pa-3 bordered",attrs:{flat:""}},[i("p",{staticClass:"text-overline ma-0 ml-3"},[t._v("OFFICIAL BUSINESS TRIP")]),i("v-flex",{staticClass:"ma-3",attrs:{xs12:"",md12:""}},[i("v-overlay",{attrs:{absolute:"",value:t.busy}},[i("v-progress-circular",{attrs:{size:60,width:5,color:"primary",indeterminate:""}})],1),i("v-flex",{staticClass:"my-2 text-right",attrs:{xs12:"",md12:""}},[i("v-btn",{staticClass:"mx-1",attrs:{rounded:"",color:"primary",small:""},on:{click:function(e){return t.saveOBTP()}}},[t._v(" Save ")]),i("v-btn",{staticClass:"mx-1",attrs:{rounded:"",color:"success",small:""}},[t._v(" Refresh ")])],1),i("v-simple-table",{attrs:{dense:""}},[i("thead",[i("tr",[i("th",{staticClass:"text-center primary white--text border-bottom",attrs:{colspan:"3"}}),i("th",{staticClass:"text-center primary white--text border-bottom",attrs:{colspan:t.showLunch()?4:2}},[t._v("Original Schedule")]),i("th",{staticClass:"text-center primary white--text border-bottom",attrs:{colspan:t.showLunch()?4:2}},[t._v("Actual Time")]),i("th",{staticClass:"text-center primary white--text border-bottom",attrs:{colspan:"5"}},[t._v("Official Business Trip")])]),i("tr",[i("th",{staticClass:"text-center primary white--text px-2"},[t._v("Date")]),i("th",{staticClass:"text-center primary white--text px-2"},[t._v("Day")]),i("th",{staticClass:"text-center primary white--text px-2 border-right"},[t._v("Type")]),t.showLunch()?i("th",{staticClass:"text-center primary white--text px-2"},[t._v("AM In")]):t._e(),t.showLunch()?i("th",{staticClass:"text-center primary white--text px-2"},[t._v("AM Out")]):t._e(),i("th",{staticClass:"text-center primary white--text px-2"},[t._v("PM In")]),i("th",{staticClass:"text-center primary white--text px-2 border-right"},[t._v("PM Out")]),i("th",{staticClass:"text-center primary white--text px-2"},[t._v("AM In")]),t.showLunch()?i("th",{staticClass:"text-center primary white--text px-2"},[t._v("AM Out")]):t._e(),t.showLunch()?i("th",{staticClass:"text-center primary white--text px-2"},[t._v("PM In")]):t._e(),i("th",{staticClass:"text-center primary white--text px-2 border-right"},[t._v("PM Out")]),i("th",{staticClass:"text-center primary white--text px-2"},[t._v("Actions")]),i("th",{staticClass:"text-center primary white--text px-2"},[t._v("Departure")]),i("th",{staticClass:"text-center primary white--text px-2"},[t._v("Next Day?")]),i("th",{staticClass:"text-center primary white--text px-2"},[t._v("Arrival")]),i("th",{staticClass:"text-center primary white--text px-2"},[t._v("Next Day?")])])]),i("tbody",t._l(t.dates,(function(e,n){return i("tr",{key:n},[i("td",{staticClass:"fields text-center px-2"},[t._v(t._s(e.shiftDate_format))]),i("td",{staticClass:"fields text-center px-2"},[t._v(t._s(e.shiftDay_format))]),i("td",{staticClass:"fields text-center px-2"},[t._v(t._s(e.shiftDayCode))]),i("td",{staticClass:"fields text-center px-2"},[t._v(t._s(""!=t.cws.timein[e.shiftDate]?t.cws.timein[e.shiftDate].substr(0,5):e.timeIn.substr(0,5)))]),t.showLunch()?i("td",{staticClass:"fields text-center px-2"},[t._v(t._s(""!=t.cws.lunchin[e.shiftDate]?t.cws.lunchin[e.shiftDate].substr(0,5)+("1"==t.cws.lunchin_nextday[e.shiftDate]?"+":""):e.lunchIn.substr(0,5)+("1"==e.lunchInNDay?"+":"")))]):t._e(),t.showLunch()?i("td",{staticClass:"fields text-center px-2"},[t._v(t._s(""!=t.cws.lunchout[e.shiftDate]?t.cws.lunchout[e.shiftDate].substr(0,5)+("1"==t.cws.lunchout_nextday[e.shiftDate]?"+":""):e.lunchOut.substr(0,5)+("1"==e.lunchOutNDay?"+":"")))]):t._e(),i("td",{staticClass:"fields text-center px-2"},[t._v(t._s(""!=t.cws.timeout[e.shiftDate]?t.cws.timeout[e.shiftDate].substr(0,5)+("1"==t.cws.timeout_nextday[e.shiftDate]?"+":""):e.timeOut.substr(0,5)+("1"==e.timeoutNDay?"+":"")))]),i("td",{class:["fields text-center px-2 font-weight-bold",""!=t.dtr.timein[e.shiftDate]?"success--text":""]},[t._v(t._s(""!=t.dtr.timein[e.shiftDate]?t.dtr.timein[e.shiftDate]:t.attlog.timein[e.shiftDate]))]),t.showLunch()?i("td",{class:["fields text-center px-2 font-weight-bold",""!=t.dtr.timein[e.shiftDate]?"success--text":""]},[t._v(t._s(""!=t.dtr.lunchin[e.shiftDate]?t.dtr.lunchin[e.shiftDate]:t.attlog.lunchin[e.shiftDate])+t._s(1==t.dtr.lunchin_nextday[e.shiftDate]?"+":""))]):t._e(),t.showLunch()?i("td",{class:["fields text-center px-2 font-weight-bold",""!=t.dtr.timein[e.shiftDate]?"success--text":""]},[t._v(t._s(""!=t.dtr.lunchout[e.shiftDate]?t.dtr.lunchout[e.shiftDate]:t.attlog.lunchout[e.shiftDate])+t._s(1==t.dtr.lunchout_nextday[e.shiftDate]?"+":""))]):t._e(),i("td",{class:["fields text-center px-2 font-weight-bold",""!=t.dtr.timein[e.shiftDate]?"success--text":""]},[t._v(t._s(""!=t.dtr.timeout[e.shiftDate]?t.dtr.timeout[e.shiftDate]:t.attlog.timeout[e.shiftDate])+t._s(1==t.dtr.timeout_nextday[e.shiftDate]?"+":""))]),i("td",{staticClass:"fields text-center px-1"},[i("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(n){var s=n.on;return[i("v-btn",t._g({attrs:{disabled:""==t.obtp.timestart[e.shiftDate]||""==t.obtp.timeend[e.shiftDate],"x-small":"",icon:"",color:"error"},on:{click:function(i){t.deleteIndex=e.shiftDate,t.confirmdialog=!0}}},s),[i("v-icon",{attrs:{small:""}},[t._v("mdi-delete")])],1)]}}],null,!0)},[i("span",[t._v("Delete entry")])])],1),i("td",{staticClass:"fields text-center px-1"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.obtp.timestart[e.shiftDate],expression:"obtp.timestart[item.shiftDate]"},{name:"mask",rawName:"v-mask",value:t.timeMask,expression:"timeMask"}],staticClass:"form-control",attrs:{type:"text",placeholder:"HH:mm"},domProps:{value:t.obtp.timestart[e.shiftDate]},on:{input:function(i){i.target.composing||t.$set(t.obtp.timestart,e.shiftDate,i.target.value)}}})]),i("td",{staticClass:"fields text-center px-1"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.obtp.timestart_nextday[e.shiftDate],expression:"obtp.timestart_nextday[item.shiftDate]"}],attrs:{"true-value":"1","false-value":"0",type:"checkbox"},domProps:{checked:Array.isArray(t.obtp.timestart_nextday[e.shiftDate])?t._i(t.obtp.timestart_nextday[e.shiftDate],null)>-1:t._q(t.obtp.timestart_nextday[e.shiftDate],"1")},on:{change:function(i){var n=t.obtp.timestart_nextday[e.shiftDate],s=i.target,a=s.checked?"1":"0";if(Array.isArray(n)){var o=null,r=t._i(n,o);s.checked?r<0&&t.$set(t.obtp.timestart_nextday,e.shiftDate,n.concat([o])):r>-1&&t.$set(t.obtp.timestart_nextday,e.shiftDate,n.slice(0,r).concat(n.slice(r+1)))}else t.$set(t.obtp.timestart_nextday,e.shiftDate,a)}}})]),i("td",{staticClass:"fields text-center px-1"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.obtp.timeend[e.shiftDate],expression:"obtp.timeend[item.shiftDate]"},{name:"mask",rawName:"v-mask",value:t.timeMask,expression:"timeMask"}],staticClass:"form-control",attrs:{type:"text",placeholder:"HH:mm"},domProps:{value:t.obtp.timeend[e.shiftDate]},on:{input:function(i){i.target.composing||t.$set(t.obtp.timeend,e.shiftDate,i.target.value)}}})]),i("td",{staticClass:"fields text-center px-1"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.obtp.timeend_nextday[e.shiftDate],expression:"obtp.timeend_nextday[item.shiftDate]"}],attrs:{"true-value":"1","false-value":"0",type:"checkbox"},domProps:{checked:Array.isArray(t.obtp.timeend_nextday[e.shiftDate])?t._i(t.obtp.timeend_nextday[e.shiftDate],null)>-1:t._q(t.obtp.timeend_nextday[e.shiftDate],"1")},on:{change:function(i){var n=t.obtp.timeend_nextday[e.shiftDate],s=i.target,a=s.checked?"1":"0";if(Array.isArray(n)){var o=null,r=t._i(n,o);s.checked?r<0&&t.$set(t.obtp.timeend_nextday,e.shiftDate,n.concat([o])):r>-1&&t.$set(t.obtp.timeend_nextday,e.shiftDate,n.slice(0,r).concat(n.slice(r+1)))}else t.$set(t.obtp.timeend_nextday,e.shiftDate,a)}}})])])})),0)])],1)],1),i("v-dialog",{attrs:{persistent:"","max-width":"500"},model:{value:t.confirmdialog,callback:function(e){t.confirmdialog=e},expression:"confirmdialog"}},[i("v-card",[i("v-card-title",{staticClass:"text-headline"},[t._v(" Notice ")]),i("v-card-text",[i("p",{staticClass:"text-subtitle black--text"},[t._v(" Are you sure you want to delete this row?")])]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{rounded:"",small:"",color:"primary"},on:{click:function(e){return t.proceedDelete()}}},[t._v("Proceed")]),i("v-btn",{attrs:{rounded:"",small:"",text:"",color:"primary"},on:{click:function(e){t.confirmdialog=!1}}},[t._v("Cancel")])],1)],1)],1)],1)},s=[],a=i("1da1"),o=(i("96cf"),i("99af"),i("e9c4"),i("d3b7"),i("159b"),i("7db0"),i("549b")),r={components:{SPAlert:o["a"]},props:["empDetails","tkDetails","ppDetails","dates"],data:function(){return{dtr:{timein:{},timeout:{},timeout_nextday:{},lunchin:{},lunchin_nextday:{},lunchout:{},lunchout_nextday:{},remarks:{}},attlog:{timein:{},timeout:{},lunchin:{},lunchout:{}},obtp:{timestart:{},timestart_nextday:{},timeend:{},timeend_nextday:{}},cws:{timein:{},timeout:{},timeout_nextday:{},lunchin:{},lunchin_nextday:{},lunchout:{},lunchout_nextday:{}},busy:!1,nvalue:[null,"00:00:00"],deleteIndex:"",confirmdialog:!1}},methods:{timeMask:function(t){var e=[/[0-2]/,"2"===t.charAt(0)?/[0-3]/:/[0-9]/],i=[/[0-5]/,/[0-9]/];return t.length>2?[].concat(e,[":"],i):e},getDTR:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var i,n,s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.busy=!0,e.next=3,t.$api.getTKEntries({table_name:"hris_timekeeping.dtr",filters:JSON.stringify({employeeID:atob(t.$route.query.ID)}),cutoffFrom:t.ppDetails.cutoffFrom,cutoffTo:t.ppDetails.cutoffTo});case 3:i=e.sent,n=i.data,s={timein:{},timeout:{},timeout_nextday:{},lunchin:{},lunchin_nextday:{},lunchout:{},lunchout_nextday:{},remarks:{}},a={timein:{},timeout:{},lunchin:{},lunchout:{}},t.dates.forEach((function(e){var i=n.find((function(t){return t.trxDate==e.shiftDate}));void 0!=i?(a.timein[e.shiftDate]=-1!=t.nvalue.indexOf(i.actualTimeIn)?"":i.actualTimeIn.substr(0,5),a.timeout[e.shiftDate]=-1!=t.nvalue.indexOf(i.actualTimeOut)?"":i.actualTimeOut.substr(0,5),a.lunchin[e.shiftDate]=-1!=t.nvalue.indexOf(i.actualLunchIn)?"":i.actualLunchIn.substr(0,5),a.lunchout[e.shiftDate]=-1!=t.nvalue.indexOf(i.actualLunchOut)?"":i.actualTimeOut.substr(0,5),s.timein[e.shiftDate]=-1!=t.nvalue.indexOf(i.encodedTimeIn)?"":i.encodedTimeIn.substr(0,5),s.timeout[e.shiftDate]=-1!=t.nvalue.indexOf(i.encodedTimeOut)&&1!=i.encodedTimeOutNDay?"":i.encodedTimeOut.substr(0,5),s.timeout_nextday[e.shiftDate]=null==i.encodedTimeOutNDay?0:i.encodedTimeOutNDay,s.lunchin[e.shiftDate]=-1!=t.nvalue.indexOf(i.encodedLunchIn)&&1!=i.encodedLunchInNDay?"":i.encodedLunchIn.substr(0,5),s.lunchin_nextday[e.shiftDate]=null==i.encodedLunchInNDay?0:i.encodedLunchInNDay,s.lunchout[e.shiftDate]=-1!=t.nvalue.indexOf(i.encodedLunchOut)&&1!=i.encodedLunchOutNDay?"":i.encodedLunchOut.substr(0,5),s.lunchout_nextday[e.shiftDate]=null==i.encodedLunchOutNDay?0:i.encodedLunchOutNDay,s.remarks[e.shiftDate]=null==i.remarks?"":i.remarks):(a.timein[e.shiftDate]="",a.timeout[e.shiftDate]="",a.lunchin[e.shiftDate]="",a.lunchout[e.shiftDate]="",s.timein[e.shiftDate]="",s.timeout[e.shiftDate]="",s.timeout_nextday[e.shiftDate]=0,s.lunchin[e.shiftDate]="",s.lunchin_nextday[e.shiftDate]=0,s.lunchout[e.shiftDate]="",s.lunchout_nextday[e.shiftDate]=0,s.remarks[e.shiftDate]="")})),t.dtr=s,t.attlog=a,t.busy=!1;case 11:case"end":return e.stop()}}),e)})))()},getOBTP:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var i,n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.busy=!0,e.next=3,t.$api.getTKEntries({table_name:"hris_timekeeping.obtp",filters:JSON.stringify({employeeID:atob(t.$route.query.ID)}),cutoffFrom:t.ppDetails.cutoffFrom,cutoffTo:t.ppDetails.cutoffTo});case 3:i=e.sent,n=i.data,s={timestart:{},timestart_nextday:{},timeend:{},timeend_nextday:{}},t.dates.forEach((function(e){var i=n.find((function(t){return t.trxDate==e.shiftDate}));void 0!=i?(s.timestart[e.shiftDate]=-1!=t.nvalue.indexOf(i.timeStart)&&1!=i.timeStartNDay?"":i.timeStart.substr(0,5),s.timestart_nextday[e.shiftDate]=null==i.timeStartNDay?0:i.timeStartNDay,s.timeend[e.shiftDate]=-1!=t.nvalue.indexOf(i.timeEnd)&&1!=i.timeEndNDay?"":i.timeEnd.substr(0,5),s.timeend_nextday[e.shiftDate]=null==i.timeEndNDay?0:i.timeEndNDay):(s.timestart[e.shiftDate]="",s.timestart_nextday[e.shiftDate]=0,s.timeend[e.shiftDate]="",s.timeend_nextday[e.shiftDate]=0)})),t.obtp=s;case 8:case"end":return e.stop()}}),e)})))()},getCWS:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var i,n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.busy=!0,e.next=3,t.$api.getTKEntries({table_name:"hris_timekeeping.cws",filters:JSON.stringify({employeeID:atob(t.$route.query.ID)}),cutoffFrom:t.ppDetails.cutoffFrom,cutoffTo:t.ppDetails.cutoffTo});case 3:i=e.sent,n={timein:{},timeout:{},timeout_nextday:{},lunchin:{},lunchin_nextday:{},lunchout:{},lunchout_nextday:{}},s=i.data,t.dates.forEach((function(e){var i=s.find((function(t){return t.trxDate==e.shiftDate}));void 0!=i?(n.timein[e.shiftDate]=-1!=t.nvalue.indexOf(i.timeIn)?"":i.timeIn.substr(0,5),n.timeout[e.shiftDate]=-1!=t.nvalue.indexOf(i.timeOut)&&1!=i.timeOutNDay?"":i.timeOut.substr(0,5),n.timeout_nextday[e.shiftDate]=null==i.timeOutNDay?0:i.timeOutNDay,n.lunchin[e.shiftDate]=-1!=t.nvalue.indexOf(i.lunchIn)&&1!=i.lunchInNDay?"":i.lunchIn.substr(0,5),n.lunchin_nextday[e.shiftDate]=null==i.lunchInNDay?0:i.lunchInNDay,n.lunchout[e.shiftDate]=-1!=t.nvalue.indexOf(i.lunchOut)&&1!=i.lunchOutNDay?"":i.lunchOut.substr(0,5),n.lunchout_nextday[e.shiftDate]=null==i.lunchOutNDay?0:i.lunchOutNDay):(n.timein[e.shiftDate]="",n.timeout[e.shiftDate]="",n.timeout_nextday[e.shiftDate]=0,n.lunchin[e.shiftDate]="",n.lunchin_nextday[e.shiftDate]=0,n.lunchout[e.shiftDate]="",n.lunchout_nextday[e.shiftDate]=0)})),t.cws=n,t.busy=!1;case 9:case"end":return e.stop()}}),e)})))()},saveOBTP:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var i,n,s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t.obtp),t.busy=!0,i=[],t.dates.forEach((function(e){var n={};n.employeeID=atob(t.$route.query.ID),n.trxDate=e.shiftDate,n.timeStart=t.obtp.timestart[e.shiftDate]+(""!=t.obtp.timestart[e.shiftDate]?":00":""),n.timeStartNDay=t.obtp.timestart_nextday[e.shiftDate],n.timeEnd=t.obtp.timeend[e.shiftDate]+(""!=t.obtp.timeend[e.shiftDate]?":00":""),n.timeEndNDay=t.obtp.timeend_nextday[e.shiftDate],""==n.timeStart&&"0"==n.timeStartNDay&&""==n.timeEnd&&"0"==n.timeEndNDay?n={}:i.push(n)})),e.next=6,t.$api.saveTKEntries({table_name:"hris_timekeeping.obtp",keys:JSON.stringify(["employeeID","trxDate"]),tkentries:JSON.stringify(i)});case 6:n=e.sent,1==n.data.status?(s={text:"OBTP saved successfully!",title:"INFO",type:"info"},t.$refs.alert.showAlert(s)):(a={text:"OBTP saved failed!",title:"ERROR",type:"error"},t.$refs.alert.showAlert(a)),t.busy=!1;case 9:case"end":return e.stop()}}),e)})))()},showLunch:function(){var t=0;return this.dates.forEach((function(e){"00:00:00"!=e.lunchIn&&"00:00:00"!=e.lunchOut&&(t+=1)})),t>1},proceedDelete:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var i,n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.deleteTKEntry({table_name:"hris_timekeeping.obtp",filters:JSON.stringify({trxDate:t.deleteIndex,employeeID:atob(t.$route.query.ID)})});case 2:i=e.sent,1==i.data.result?(t.obtp.timestart[t.deleteIndex]="",t.obtp.timestart_nextday[t.deleteIndex]="",t.obtp.timeend[t.deleteIndex]="",t.obtp.timeend_nextday[t.deleteIndex]="",n={text:"OBTP entry deleted successfully!",type:"info"},t.$refs.alert.showAlert(n)):(s={text:"OBTP entry deletion failed!",type:"error"},t.$refs.alert.showAlert(s)),t.confirmdialog=!1;case 5:case"end":return e.stop()}}),e)})))()}},watch:{trigger:{handler:function(t){t.ppDetails&&t.dates.length>0&&(this.getDTR(),this.getOBTP(),this.getCWS())},immediate:!0}},computed:{trigger:function(){return{ppDetails:this.ppDetails,dates:this.dates}}}},c=r,u=(i("dac6"),i("2877")),h=i("6544"),l=i.n(h),d=i("8336"),f=i("b0af"),m=i("99d9"),p=i("169a"),v=i("0e8f"),x=i("132d"),b=i("a797"),y=i("490a"),g=i("1f4f"),D=i("2fa4"),_=i("3a2f"),w=Object(u["a"])(c,n,s,!1,null,"7350b9e5",null);e["default"]=w.exports;l()(w,{VBtn:d["a"],VCard:f["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:m["c"],VDialog:p["a"],VFlex:v["a"],VIcon:x["a"],VOverlay:b["a"],VProgressCircular:y["a"],VSimpleTable:g["a"],VSpacer:D["a"],VTooltip:_["a"]})},dac6:function(t,e,i){"use strict";i("0a19")},e8f2:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));i("498a"),i("99af"),i("4de4"),i("d3b7"),i("b64b"),i("2ca0"),i("a15b");var n=i("2b0e");function s(t){return n["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,i){var n=i.props,s=i.data,a=i.children;s.staticClass="".concat(t," ").concat(s.staticClass||"").trim();var o=s.attrs;if(o){s.attrs={};var r=Object.keys(o).filter((function(t){if("slot"===t)return!1;var e=o[t];return t.startsWith("data-")?(s.attrs[t]=e,!1):e||"string"===typeof e}));r.length&&(s.staticClass+=" ".concat(r.join(" ")))}return n.id&&(s.domProps=s.domProps||{},s.domProps.id=n.id),e(n.tag,s,a)}})}},f40d:function(t,e,i){"use strict";var n=i("2b0e");e["a"]=n["a"].extend({name:"transitionable",props:{mode:String,origin:String,transition:String}})},f573:function(t,e,i){"use strict";var n=i("5530"),s=(i("a9e3"),i("d3b7"),i("fe6c")),a=i("21be"),o=i("4ad4"),r=i("75eb"),c=i("58df"),u=i("80d2"),h=Object(c["a"])(a["a"],s["a"],o["a"],r["a"]);e["a"]=h.extend().extend({name:"menuable",props:{allowOverflow:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[Number,String],default:"auto"},minWidth:[Number,String],nudgeBottom:{type:[Number,String],default:0},nudgeLeft:{type:[Number,String],default:0},nudgeRight:{type:[Number,String],default:0},nudgeTop:{type:[Number,String],default:0},nudgeWidth:{type:[Number,String],default:0},offsetOverflow:Boolean,openOnClick:Boolean,positionX:{type:Number,default:null},positionY:{type:Number,default:null},zIndex:{type:[Number,String],default:null}},data:function(){return{activatorNode:[],absoluteX:0,absoluteY:0,activatedBy:null,activatorFixed:!1,dimensions:{activator:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0,offsetLeft:0},content:{top:0,left:0,bottom:0,right:0,width:0,height:0,offsetTop:0,scrollHeight:0}},relativeYOffset:0,hasJustFocused:!1,hasWindow:!1,inputActivator:!1,isContentActive:!1,pageWidth:0,pageYOffset:0,stackClass:"v-menu__content--active",stackMinZIndex:6}},computed:{computedLeft:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=(!1!==this.attach?t.offsetLeft:t.left)||0,n=Math.max(t.width,e.width),s=0;if(s+=this.left?i-(n-t.width):i,this.offsetX){var a=isNaN(Number(this.maxWidth))?t.width:Math.min(t.width,Number(this.maxWidth));s+=this.left?-a:t.width}return this.nudgeLeft&&(s-=parseInt(this.nudgeLeft)),this.nudgeRight&&(s+=parseInt(this.nudgeRight)),s},computedTop:function(){var t=this.dimensions.activator,e=this.dimensions.content,i=0;return this.top&&(i+=t.height-e.height),!1!==this.attach?i+=t.offsetTop:i+=t.top+this.pageYOffset,this.offsetY&&(i+=this.top?-t.height:t.height),this.nudgeTop&&(i-=parseInt(this.nudgeTop)),this.nudgeBottom&&(i+=parseInt(this.nudgeBottom)),i},hasActivator:function(){return!!this.$slots.activator||!!this.$scopedSlots.activator||!!this.activator||!!this.inputActivator},absoluteYOffset:function(){return this.pageYOffset-this.relativeYOffset}},watch:{disabled:function(t){t&&this.callDeactivate()},isActive:function(t){this.disabled||(t?this.callActivate():this.callDeactivate())},positionX:"updateDimensions",positionY:"updateDimensions"},beforeMount:function(){this.hasWindow="undefined"!==typeof window,this.hasWindow&&window.addEventListener("resize",this.updateDimensions,!1)},beforeDestroy:function(){this.hasWindow&&window.removeEventListener("resize",this.updateDimensions,!1)},methods:{absolutePosition:function(){return{offsetTop:0,offsetLeft:0,scrollHeight:0,top:this.positionY||this.absoluteY,bottom:this.positionY||this.absoluteY,left:this.positionX||this.absoluteX,right:this.positionX||this.absoluteX,height:0,width:0}},activate:function(){},calcLeft:function(t){return Object(u["g"])(!1!==this.attach?this.computedLeft:this.calcXOverflow(this.computedLeft,t))},calcTop:function(){return Object(u["g"])(!1!==this.attach?this.computedTop:this.calcYOverflow(this.computedTop))},calcXOverflow:function(t,e){var i=t+e-this.pageWidth+12;return t=(!this.left||this.right)&&i>0?Math.max(t-i,0):Math.max(t,12),t+this.getOffsetLeft()},calcYOverflow:function(t){var e=this.getInnerHeight(),i=this.absoluteYOffset+e,n=this.dimensions.activator,s=this.dimensions.content.height,a=t+s,o=i<a;return o&&this.offsetOverflow&&n.top>s?t=this.pageYOffset+(n.top-s):o&&!this.allowOverflow?t=i-s-12:t<this.absoluteYOffset&&!this.allowOverflow&&(t=this.absoluteYOffset+12),t<12?12:t},callActivate:function(){this.hasWindow&&this.activate()},callDeactivate:function(){this.isContentActive=!1,this.deactivate()},checkForPageYOffset:function(){this.hasWindow&&(this.pageYOffset=this.activatorFixed?0:this.getOffsetTop())},checkActivatorFixed:function(){if(!1===this.attach){var t=this.getActivator();while(t){if("fixed"===window.getComputedStyle(t).position)return void(this.activatorFixed=!0);t=t.offsetParent}this.activatorFixed=!1}},deactivate:function(){},genActivatorListeners:function(){var t=this,e=o["a"].options.methods.genActivatorListeners.call(this),i=e.click;return e.click=function(e){t.openOnClick&&i&&i(e),t.absoluteX=e.clientX,t.absoluteY=e.clientY},e},getInnerHeight:function(){return this.hasWindow?window.innerHeight||document.documentElement.clientHeight:0},getOffsetLeft:function(){return this.hasWindow?window.pageXOffset||document.documentElement.scrollLeft:0},getOffsetTop:function(){return this.hasWindow?window.pageYOffset||document.documentElement.scrollTop:0},getRoundedBoundedClientRect:function(t){var e=t.getBoundingClientRect();return{top:Math.round(e.top),left:Math.round(e.left),bottom:Math.round(e.bottom),right:Math.round(e.right),width:Math.round(e.width),height:Math.round(e.height)}},measure:function(t){if(!t||!this.hasWindow)return null;var e=this.getRoundedBoundedClientRect(t);if(!1!==this.attach){var i=window.getComputedStyle(t);e.left=parseInt(i.marginLeft),e.top=parseInt(i.marginTop)}return e},sneakPeek:function(t){var e=this;requestAnimationFrame((function(){var i=e.$refs.content;i&&"none"===i.style.display?(i.style.display="inline-block",t(),i.style.display="none"):t()}))},startTransition:function(){var t=this;return new Promise((function(e){return requestAnimationFrame((function(){t.isContentActive=t.hasJustFocused=t.isActive,e()}))}))},updateDimensions:function(){var t=this;this.hasWindow="undefined"!==typeof window,this.checkActivatorFixed(),this.checkForPageYOffset(),this.pageWidth=document.documentElement.clientWidth;var e={activator:Object(n["a"])({},this.dimensions.activator),content:Object(n["a"])({},this.dimensions.content)};if(!this.hasActivator||this.absolute)e.activator=this.absolutePosition();else{var i=this.getActivator();if(!i)return;e.activator=this.measure(i),e.activator.offsetLeft=i.offsetLeft,!1!==this.attach?e.activator.offsetTop=i.offsetTop:e.activator.offsetTop=0}this.sneakPeek((function(){if(t.$refs.content){if(t.$refs.content.offsetParent){var i=t.getRoundedBoundedClientRect(t.$refs.content.offsetParent);t.relativeYOffset=window.pageYOffset+i.top,e.activator.top-=t.relativeYOffset,e.activator.left-=window.pageXOffset+i.left}e.content=t.measure(t.$refs.content)}t.dimensions=e}))}}})}}]);