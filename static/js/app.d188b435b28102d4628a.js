webpackJsonp([1],{"7zck":function(t,e){},CuRo:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),a=n("3EgV"),s=n.n(a),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",[e("v-content",[e("router-view")],1)],1)},staticRenderFns:[]},o=n("VU/8")({name:"App"},r,!1,null,null,null).exports,l=n("/ocq"),c={name:"output-view",props:{value:String,title:String},data:function(){return{text:null}},watch:{value:function(t){this.text=t},text:function(t){this.$emit("input",t)}},created:function(){this.text=this.value}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("v-subheader",[this._v(this._s(this.title))]),this._v(" "),e("code",{staticClass:"pa-3",staticStyle:{width:"100%"}},[this._v(this._s(this.text||"None"))])],1)},staticRenderFns:[]},v=n("VU/8")(c,u,!1,null,null,null).exports,d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-footer",{attrs:{dark:"",fixed:"",color:"primary"}},[e("v-layout",{attrs:{"justify-center":""}},[e("div",{staticClass:"mono caption"},[this._v("\r\n      © 2018\r\n    ")])])],1)},staticRenderFns:[]},p=n("VU/8")({name:"footer-view"},d,!1,null,null,null).exports,f={name:"infix-view",components:{OutputView:v,FooterView:p},data:function(){return{infix:null,prefix:null,postfix:null}},watch:{infix:function(t){t?(this.prefix=this.$toPrefix(t),this.postfix=this.$toPostfix(t)):this.clear()}},computed:{varHeight:function(){return this.infix?132:94}},mounted:function(){this.$refs.input&&this.$refs.input.focus()},methods:{clear:function(){this.infix=null,this.prefix=null,this.postfix=null,this.$refs.input&&this.$refs.input.focus()}}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-layout",{attrs:{"justify-center":""}},[n("div",{staticStyle:{width:"75%"}},[n("v-layout",{staticClass:"smooth-mtop",style:{"margin-top":"calc(100vh / 2 - "+t.varHeight+"px)"},attrs:{"align-center":""}},[n("h1",{staticClass:"display-3 grey--text text--darken-1 mono"},[n("span",{staticClass:"primary--text"},[t._v("infix")]),t._v(".io")]),t._v(" "),n("v-spacer"),t._v(" "),n("div",{staticClass:"next-btn px-3 py-2",on:{click:function(e){t.$router.push("/tasks")}}},[t._v("view "),n("span",{staticClass:"primary--text text--lighten-1"},[t._v("task manager")]),t._v(" "),n("v-icon",[t._v("arrow_forward")])],1)],1),t._v(" "),n("v-text-field",{ref:"input",attrs:{solo:"",label:"Enter infix expression here","append-icon":t.infix?"close":void 0,"append-icon-cb":t.infix?t.clear:function(){}},model:{value:t.infix,callback:function(e){t.infix=e},expression:"infix"}})],1)]),t._v(" "),t.infix?[n("v-slide-y-transition",[n("v-container",{attrs:{fluid:"","grid-list-lg":""}},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",sm12:"",md6:""}},[n("output-view",{staticClass:"mt-2",attrs:{title:"Prefix"},model:{value:t.prefix,callback:function(e){t.prefix=e},expression:"prefix"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:"",sm12:"",md6:""}},[n("output-view",{staticClass:"mt-2",attrs:{title:"Postfix"},model:{value:t.postfix,callback:function(e){t.postfix=e},expression:"postfix"}})],1)],1)],1)],1)]:t._e(),t._v(" "),n("footer-view")],2)},staticRenderFns:[]},m=n("VU/8")(f,h,!1,null,null,null).exports,x={name:"task-view",props:{value:Object},data:function(){return{task:null}},watch:{value:function(t){this.task=t},task:{deep:!0,handler:function(t){this.$emit("input",t)}}},created:function(){this.task=this.value}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-layout",[n("div",{staticStyle:{width:"24px"},style:{"background-color":t.value.color}}),t._v(" "),n("div",{staticClass:"full-width"},[n("v-text-field",{staticClass:"elevation-0",staticStyle:{"font-weight":"bold"},attrs:{solo:"",placeholder:"Title","prepend-icon":"assignment","append-icon":"close","append-icon-cb":function(){t.$emit("delete")}},model:{value:t.value.title,callback:function(e){t.$set(t.value,"title",e)},expression:"value.title"}}),t._v(" "),n("v-divider"),t._v(" "),n("v-text-field",{staticClass:"elevation-0",attrs:{solo:"",type:"number","prepend-icon":"timer",placeholder:"Duration (hrs)"},model:{value:t.value.duration,callback:function(e){t.$set(t.value,"duration",e)},expression:"value.duration"}})],1)])],1)},staticRenderFns:[]},g=n("VU/8")(x,_,!1,null,null,null).exports,k=n("Ba3q"),w=n.n(k),y={name:"task-bar-view",props:{tasks:Array,isSorted:{type:Boolean,default:!1}},computed:{sorted:function(){var t=this.numberizeTasks();return w()(t,["duration"],["asc"])},totalDuration:function(){return this.tasks.reduce(function(t,e){return t+Number(e.duration)},0)}},methods:{numberizeTasks:function(){return this.tasks.reduce(function(t,e){return e.duration&&(e.duration=Number(e.duration),t.push(e)),t},[])}}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{staticClass:"full-width black"},[t._l(t.isSorted?t.sorted:t.numberizeTasks(),function(e,i){return[n("div",{key:i,staticClass:"smooth-width smooth-bg-color",staticStyle:{height:"26px",display:"block",width:"0%"},style:{width:Number(e.duration)/t.totalDuration*100+"%","background-color":e.color}},[n("v-tooltip",{attrs:{top:""}},[n("v-subheader",{staticClass:"elevation-0 ma-0 pa-0 text-xs-center",staticStyle:{background:"none",height:"26px",overflow:"hidden"},attrs:{slot:"activator",disabled:"",small:""},slot:"activator"},[n("div",{staticClass:"full-width"},[n("span",{staticClass:"pa-2 white--text mono",staticStyle:{"background-color":"rgba(0,0,0,0.2)"}},[t._v(t._s(e.duration))])])]),t._v(" "),n("span",[n("div",[t._v(t._s(e.title))]),t._v(" "),n("div",[t._v(t._s(e.duration)+" hrs")])])],1)],1)]})],2)},staticRenderFns:[]},C={name:"task-manager-view",components:{TaskView:g,TaskBarView:n("VU/8")(y,b,!1,null,null,null).exports,FooterView:p},data:function(){return{tasks:[],varHeight:null,defaultVarHeight:"30px"}},watch:{tasks:function(t){this.setVarHeight()}},created:function(){this.setVarHeight()},methods:{createTask:function(){var t={title:null,duration:null,color:"rgb("+Math.floor(255*Math.random())+","+Math.floor(255*Math.random())+","+Math.floor(255*Math.random())+")"};this.tasks.push(t)},deleteTask:function(t){this.tasks.splice(t,1)},setVarHeight:function(){var t=this;this.$nextTick(function(){var e=document.getElementById("task-container");t.varHeight=e?window.getComputedStyle(e).height:t.defaultVarHeight})}}},$={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-layout",{attrs:{"justify-center":""}},[n("div",{staticStyle:{width:"75%"}},[n("v-layout",{staticClass:"smooth-mtop",style:{"margin-top":"calc(100vh / 2 - (78px + "+t.varHeight+" / 2))"},attrs:{"align-center":""}},[n("h1",{staticClass:"display-3 grey--text text--darken-1 mono"},[n("span",{staticClass:"primary--text"},[t._v("taskmngr")]),t._v(".io")]),t._v(" "),n("v-spacer"),t._v(" "),n("div",{staticClass:"next-btn px-3 py-2",on:{click:function(e){t.$router.push("/infix")}}},[t._v("view "),n("span",{staticClass:"primary--text text--lighten-1"},[t._v("infix converter")]),t._v(" "),n("v-icon",[t._v("arrow_forward")])],1)],1)],1)]),t._v(" "),t.tasks.length?n("v-container",{attrs:{"grid-list-lg":"",id:"task-container"}},[n("v-layout",{attrs:{row:"",wrap:""}},t._l(t.tasks,function(e,i){return n("v-flex",{key:i,attrs:{xs12:"",sm6:"",md4:""}},[n("task-view",{staticClass:"pa-2",on:{delete:function(e){t.deleteTask(i)}},model:{value:t.tasks[i],callback:function(e){t.$set(t.tasks,i,e)},expression:"tasks[i]"}})],1)}))],1):t._e(),t._v(" "),t.tasks.length?n("v-subheader",[t._v("Total tasks: "),n("strong",{domProps:{textContent:t._s(t.tasks.length)}})]):t._e(),t._v(" "),n("v-btn",{attrs:{dark:"",large:"",block:"",color:"primary lighten-1"},on:{click:t.createTask}},[n("v-icon",[t._v("add")]),t._v(" "),n("span",[t._v("Add a task!")])],1),t._v(" "),t.tasks.length?n("div",{staticClass:"mt-3",staticStyle:{"margin-bottom":"80px"}},[n("v-subheader",[t._v("Using "),n("strong",{staticClass:"underline mono"},[t._v("First Come First Serve (FCFS)")]),t._v(":")]),t._v(" "),n("task-bar-view",{attrs:{tasks:t.tasks}}),t._v(" "),n("v-subheader",{staticClass:"mt-2"},[t._v("Using "),n("strong",{staticClass:"underline mono"},[t._v("Shortest Job First (SJF)")]),t._v(":")]),t._v(" "),n("task-bar-view",{attrs:{"is-sorted":"",tasks:t.tasks}})],1):t._e(),t._v(" "),n("footer-view")],1)},staticRenderFns:[]};var V=n("VU/8")(C,$,!1,function(t){n("zgX7")},"data-v-598a8b26",null).exports;i.a.use(l.a);var S=new l.a({routes:[{path:"/",redirect:"/infix"},{path:"/infix",name:"InfixView",component:m,meta:{title:"infix.io"}},{path:"/tasks",name:"TaskManagerView",component:V,meta:{title:"Tasks Manager"}}]}),F=n("IHMs"),T=n.n(F),H=function(t){switch(t){case"^":return 3;case"*":case"/":return 2;case"+":case"-":return 1;case"(":case")":return-1;default:return 0}},E=function(t){var e="",n=[];return(t="("+t+")").split("").forEach(function(t){if(0==H(t))e+=" "+t+" ";else if("("==t)n.push(t);else if(")"==t){for(;n.length&&"("!=n[n.length-1];)e+=" "+n[n.length-1]+" ",n.pop();n.pop()}else if(n.length){var i=n[n.length-1];if(0!=H(i)){for(;n.length&&H(t)<=H(n[n.length-1]);)e+=" "+n[n.length-1]+" ",n.pop();n.push(t)}}}),e};n("7zck"),n("CuRo");i.a.use(s.a,{theme:{primary:T.a.indigo.base,secondary:T.a.indigo.darken1,accent:T.a.pink.accent3,warning:T.a.deepOrange.lighten1}}),i.a.config.productionTip=!1,i.a.prototype.$toPrefix=function(t){t=t.replace(/\s*/g,"").split("").reverse();for(var e=0;e<t.length;e++)"("==t[e]?(t[e]=")",e++):")"==t[e]&&(t[e]="(",e++);return E(t.join("")).split("").reverse().join("").replace(/\s\s+/g," ").trim()},i.a.prototype.$toPostfix=function(t){return t=t.replace(/\s*/g,""),E(t).replace(/\s\s+/g," ").trim()},function(t){t.beforeEach(function(t,e,n){var i=t.meta.title||t.name;document.title=i,n()})}(S),new i.a({el:"#app",router:S,components:{App:o},template:"<App/>"})},zgX7:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d188b435b28102d4628a.js.map