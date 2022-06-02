(function(){"use strict";var e={1578:function(e,n,t){var i=t(9242),s=t(3396);function o(e,n){const t=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(t)}var r=t(89);const a={},u=(0,r.Z)(a,[["render",o]]);var d=u,l=t(678);const c={class:"home"};function g(e,n,t,i,o,r){const a=(0,s.up)("stopwatch");return(0,s.wg)(),(0,s.iD)("div",c,[(0,s.Wm)(a)])}var p=t(7139);const h={id:"app"},w={class:"grid h-screen"},m={class:"flex py-5 space-x-4 justify-center flex-row ..."},b={class:"flex py-5 space-x-4 justify-center flex-row ..."},f={class:"bg-white px-8 space-x-2"},v={class:"bg-white space-x-2 px-8"},x={class:"bg-white px-8 space-x-2"};function y(e,n,t,o,r,a){const u=(0,s.up)("CueCards");return(0,s.wg)(),(0,s.iD)("div",h,[(0,s._)("div",w,[(0,s._)("p",{class:(0,p.C_)("grid bg-white-600 place-items-center text-5xl ... text-"+a.textColor)},[(0,s._)("span",null,(0,p.zw)(r.minutes)+":"+(0,p.zw)(r.seconds),1)],2),(0,s._)("div",m,[(0,s._)("div",null,[(0,s._)("button",{class:"bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full",onClick:n[0]||(n[0]=(...e)=>a.start&&a.start(...e))},"Start ")]),(0,s._)("div",null,[(0,s._)("button",{class:"bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full",onClick:n[1]||(n[1]=(...e)=>a.stop&&a.stop(...e))},"Stop ")]),(0,s._)("div",null,[(0,s._)("button",{class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",onClick:n[2]||(n[2]=(...e)=>a.reset&&a.reset(...e))},"Reset ")])]),(0,s._)("div",b,[(0,s._)("form",f,[(0,s.wy)((0,s._)("input",{type:"number",class:"shadow appearance-none border rounded w-25 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline","onUpdate:modelValue":n[3]||(n[3]=e=>r.minutes=e),name:"time_m",id:"min",min:"0",max:"59"},null,512),[[i.nr,r.minutes]]),(0,s.wy)((0,s._)("input",{type:"number",class:"shadow appearance-none border rounded w-25 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline","onUpdate:modelValue":n[4]||(n[4]=e=>r.seconds=e),name:"time_s",id:"sec",max:"59",min:"0"},null,512),[[i.nr,r.seconds]]),(0,s._)("button",{type:"button",class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded",onClick:n[5]||(n[5]=(...e)=>a.sendTime&&a.sendTime(...e))},"Set time ")]),(0,s._)("form",v,[(0,s.wy)((0,s._)("input",{type:"number",class:"shadow appearance-none border rounded w-25 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline","onUpdate:modelValue":n[6]||(n[6]=e=>r.nonActiveWarningMinutesOrange=e),name:"time_m",id:"minWarnOrange",min:"0",max:"59"},null,512),[[i.nr,r.nonActiveWarningMinutesOrange]]),(0,s.wy)((0,s._)("input",{type:"number",class:"shadow appearance-none border rounded w-25 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline","onUpdate:modelValue":n[7]||(n[7]=e=>r.nonActiveWarningSecondsOrange=e),name:"time_s",id:"secWarnOrange",max:"59",min:"0"},null,512),[[i.nr,r.nonActiveWarningSecondsOrange]]),(0,s._)("button",{type:"button",class:"bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-3 rounded",onClick:n[8]||(n[8]=(...e)=>a.updateWarningOrange&&a.updateWarningOrange(...e))},"Set warning orange ")]),(0,s._)("form",x,[(0,s.wy)((0,s._)("input",{type:"number",class:"shadow appearance-none border rounded w-25 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline","onUpdate:modelValue":n[9]||(n[9]=e=>r.nonActiveWarningMinutesRed=e),name:"time_m1",id:"minWarnRed",min:"0",max:"59"},null,512),[[i.nr,r.nonActiveWarningMinutesRed]]),(0,s.wy)((0,s._)("input",{type:"number",class:"shadow appearance-none border rounded w-25 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline","onUpdate:modelValue":n[10]||(n[10]=e=>r.nonActiveWarningSecondsRed=e),name:"time_s1",id:"secWarnRed",max:"59",min:"0"},null,512),[[i.nr,r.nonActiveWarningSecondsRed]]),(0,s._)("button",{type:"button",class:"bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-3 rounded",onClick:n[11]||(n[11]=(...e)=>a.updateWarningRed&&a.updateWarningRed(...e))},"Set warning Red ")])])]),(0,s.Wm)(u)])}const _={id:"app"},S={class:"container"},C=(0,s._)("h1",null,"CueCards",-1),O={class:"pol"},W={class:"addBtn"},R={class:"section"},M={key:0,class:"queS"},q=["onClick"],k=["onUpdate:modelValue"],A=["value"],D={key:1};function I(e,n,t,o,r,a){return(0,s.wg)(),(0,s.iD)("div",_,[(0,s._)("div",S,[C,(0,s._)("div",O,[(0,s.wy)((0,s._)("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=e=>r.que=e),class:"inputCls",autofocus:""},null,512),[[i.nr,r.que]]),(0,s._)("span",W,[e.showIcon?((0,s.wg)(),(0,s.iD)("button",{key:1,onClick:n[2]||(n[2]=(...e)=>a.addqueS&&a.addqueS(...e)),class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"},"Add")):((0,s.wg)(),(0,s.iD)("button",{key:0,onClick:n[1]||(n[1]=e=>r.inputCls="inputbox extend"),class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"},"Add Cue"))])]),(0,s._)("div",R,[r.queS.length>0?((0,s.wg)(),(0,s.iD)("ul",M,[(0,s.Wm)(i.W3,{name:"list"},{default:(0,s.w5)((()=>[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.queS,((e,n)=>((0,s.wg)(),(0,s.iD)("li",{class:(0,p.C_)(e.bgColour),key:n},[(0,s._)("span",null,(0,p.zw)(e.task),1),(0,s._)("span",null,[(0,s._)("button",{onClick:e=>a.deleteque(n),class:"bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"},"Delete",8,q),(0,s.wy)((0,s._)("select",{class:"bg-red-500","onUpdate:modelValue":n=>e.bgColour=n},[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.classes,((e,n)=>((0,s.wg)(),(0,s.iD)("option",{key:n,value:e},(0,p.zw)(e),9,A)))),128))],8,k),[[i.bM,e.bgColour]])])],2)))),128))])),_:1})])):((0,s.wg)(),(0,s.iD)("h3",D,"no CueCards to be shown."))])])])}var T={name:"cuecards-comp",data(){return{que:"",queS:[],inputCls:"inputbox",bgColour:"white",classes:["Select Color","Blue","Red","Green","Orange","Gray","Magenta","Cyan"]}},watch:{que(e){e.length>2?this.showIcon=!0:this.showIcon=!1}},methods:{addqueS(){this.inputCls="inputbox",this.queS.unshift({task:this.que,completed:!1}),this.que="",setTimeout((()=>{this.showIcon=!1}),1e3)},deleteque(e){this.queS.splice(e,1)}}};const U=(0,r.Z)(T,[["render",I]]);var V=U,j={name:"App",components:{CueCards:V},data(){return{startbtn:!1,stopbtn:!1,resetbtn:!1,que:"",queS:[],inputCls:"inputbox",bgColour:"white",classes:["Blue","Red","Green","Orange","Gray","Magenta","Cyan"],elapsedTime:0,timer:void 0,time:0,minutes:0,seconds:0,setMinutes:0,setSeconds:0,nonActiveWarningMinutesRed:0,nonActiveWarningSecondsRed:0,nonActiveWarningMinutesOrange:0,nonActiveWarningSecondsOrange:0,warningMinutesRed:void 0,warningSecondsRed:void 0,warningMinutesOrange:void 0,warningSecondsOrange:void 0}},watch:{que(e){e.length>2?this.showIcon=!0:this.showIcon=!1}},methods:{addqueS(){this.inputCls="inputbox",this.queS.unshift({task:this.que,completed:!1}),this.que="",setTimeout((()=>{this.showIcon=!1}),1e3)},deleteque(e){this.queS.splice(e,1)},sendTime(){this.minutes=document.getElementById("min").value,this.seconds=document.getElementById("sec").value},updateWarningRed(){console.log(this.nonActiveWarningSecondsRed&&this.nonActiveWarningMinutesRed),this.warningMinutesRed=this.nonActiveWarningMinutesRed,this.warningSecondsRed=this.nonActiveWarningSecondsRed},updateWarningOrange(){console.log(this.nonActiveWarningSecondsOrange),this.warningMinutesOrange=this.nonActiveWarningMinutesOrange,this.warningSecondsOrange=this.nonActiveWarningSecondsOrange},start(){this.startbtn||(this.timer=setInterval((()=>{this.seconds>58?(this.seconds=1,this.minutes=parseInt(this.minutes)+1):this.seconds++}),1e3),this.startbtn=!0)},stop(){clearInterval(this.timer),this.startbtn=!1},reset(){this.minutes=0,this.seconds=0,this.warningMinutesRed=void 0,this.warningSecondsRed=void 0,this.warningMinutesOrange=void 0,this.warningSecondsOrange=void 0}},computed:{formattedElapsedTime(){const e=new Date(null);e.setSeconds(this.seconds),e.setMinutes(this.minutes);const n=e.toUTCString();return n.substr(n.indexOf(":")-2,8)},textColor(){return null!=this.warningSecondsRed&&null!=this.warningMinutesRed&&this.seconds+60*this.minutes>=this.warningSecondsRed+60*this.warningMinutesRed&&this.minutes>=this.warningMinutesRed?"red":null!=this.warningSecondsOrange&&null!=this.warningMinutesOrange&&this.seconds+60*this.minutes>=this.warningSecondsOrange+60*this.warningMinutesOrange&&this.minutes>=this.warningMinutesOrange?"orange":"black"}}};const B=(0,r.Z)(j,[["render",y]]);var z=B,E={name:"HomeView",components:{stopwatch:z}};const G=(0,r.Z)(E,[["render",g]]);var Z=G;const H=[{path:"/",name:"home",component:Z}],K=(0,l.p7)({history:(0,l.r5)(),routes:H});var P=K;(0,i.ri)(d).use(P).mount("#app")}},n={};function t(i){var s=n[i];if(void 0!==s)return s.exports;var o=n[i]={exports:{}};return e[i](o,o.exports,t),o.exports}t.m=e,function(){var e=[];t.O=function(n,i,s,o){if(!i){var r=1/0;for(l=0;l<e.length;l++){i=e[l][0],s=e[l][1],o=e[l][2];for(var a=!0,u=0;u<i.length;u++)(!1&o||r>=o)&&Object.keys(t.O).every((function(e){return t.O[e](i[u])}))?i.splice(u--,1):(a=!1,o<r&&(r=o));if(a){e.splice(l--,1);var d=s();void 0!==d&&(n=d)}}return n}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[i,s,o]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,i){var s,o,r=i[0],a=i[1],u=i[2],d=0;if(r.some((function(n){return 0!==e[n]}))){for(s in a)t.o(a,s)&&(t.m[s]=a[s]);if(u)var l=u(t)}for(n&&n(i);d<r.length;d++)o=r[d],t.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return t.O(l)},i=self["webpackChunkvue_stopwatch_app"]=self["webpackChunkvue_stopwatch_app"]||[];i.forEach(n.bind(null,0)),i.push=n.bind(null,i.push.bind(i))}();var i=t.O(void 0,[998],(function(){return t(1578)}));i=t.O(i)})();
//# sourceMappingURL=app.01b494cc.js.map