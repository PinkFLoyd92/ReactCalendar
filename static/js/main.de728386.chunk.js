(this.webpackJsonpcalendar=this.webpackJsonpcalendar||[]).push([[0],{189:function(e,t,n){e.exports=n(391)},194:function(e,t,n){},201:function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},202:function(e,t,n){},391:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(10),c=n.n(o),i=(n(194),n(195),n(45)),l=n(53),u=n(61),s=n(178),d=n(447),m=n(35),p=n(32),f=n(168),y=n(120),b=n(64),h="SET_MONTH",O=b().month(),g=function(e){return function(t){t({type:h,payload:e})}};function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return t.payload;default:return e}}var E=n(64),j="SET_YEAR",w=E().year(),D=function(e){return function(t){t({type:j,payload:e})}};function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return t.payload;default:return e}}var k=n(25),x=n(12);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(n,!0).forEach((function(t){Object(x.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S="ADD_REMINDER",N="REMOVE_REMINDER",M="REMOVE_REMINDERS",T="UPDATE_REMINDER",I={},W=function(e,t){return function(n){n({type:S,payload:{date:e,reminder:t}})}},F=function(e,t){return function(n){n({type:T,payload:{date:e,reminder:t}})}},U=function(e){return function(t){t({type:M,payload:{date:e}})}},V=function(e,t){return function(n){n({type:N,payload:{date:e,reminder:t}})}};function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:var n=R({},e);return n[t.payload.date]||(n[t.payload.date]=[]),n[t.payload.date].push(R({},t.payload.reminder)),n;case T:var r=R({},e),a=Object(k.a)(r[t.payload.date]),o=a.findIndex((function(e){return t.payload.reminder.uuid===e.uuid}));return a[o]=R({},t.payload.reminder),r[t.payload.date]=a,r;case N:var c=R({},e),i=Object(k.a)(c[t.payload.date]),l=i.findIndex((function(e){return t.payload.reminder.uuid===e.uuid}));return i.splice(l,1),c[t.payload.date]=i,c;case M:var u=R({},e);return u[t.payload.date]=[],u;default:return e}}var z=function(e){return Object(m.c)({router:Object(u.b)(e),reminders:_,month:v,year:P})},A=Object(p.a)(),B=[],L=m.d.apply(void 0,[Object(m.a)(Object(y.a)(A),f.a)].concat(B));n(201),n(202);var Y=n(431),J=n(113),q=n(112),G=n(177),H=n(26),$=a.a.createContext([{},function(){}]),K=function(e){var t=Object(r.useState)({isOpen:!1,start:"7:30",end:"7:30",date:null,note:"",city:"",color:""}),n=Object(H.a)(t,2),o=n[0],c=n[1],i=e.children;return a.a.createElement($.Provider,{value:[o,c]},i)},Q=n(62),X=n.n(Q),Z=n(111),ee=n(442),te=n(450),ne=n(441),re=n(437),ae=n(438),oe=n(436),ce=n(439),ie=n(170),le=n.n(ie),ue=n(171),se=n(451),de=n(448),me=n(78),pe=n(172),fe=n.n(pe);function ye(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function be(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ye(n,!0).forEach((function(t){Object(x.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ye(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var he="".concat("https://api.openweathermap.org/data/2.5","/"),Oe=fe.a.create({baseURL:he}),ge=function e(){Object(me.a)(this,e)};ge.get=function(e){return Oe.get("/find/",{params:be({},e,{appid:"f92c1f4990b0574d4a4e4d3dd556f388",units:"imperial"})})};n(383);function ve(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ve(n,!0).forEach((function(t){Object(x.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ve(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var je=function(){var e=Object(r.useContext)($),t=Object(H.a)(e,2),n=t[0],a=t[1];return{toggleOpen:function(){a((function(e){return Ee({},e,{isOpen:!e.isOpen})}))},setOpen:function(e){e||a((function(e){return{}})),a((function(t){return Ee({},t,{isOpen:e})}))},setCity:function(e){a((function(t){return Ee({},t,{city:e})}))},setStart:function(e){a((function(t){return Ee({},t,{start:e})}))},setEnd:function(e){a((function(t){return Ee({},t,{end:e})}))},reset:function(){a((function(e){return{}}))},setOpenDate:function(e,t){a((function(n){return Ee({},n,{date:e,isOpen:t})}))},setOpenEditMode:function(e,t){a((function(n){return Ee({},t,{date:e,editMode:!0,isOpen:!0})}))},setNote:function(e){a((function(t){return Ee({},t,{note:e})}))},isOpen:n.isOpen,reminderState:n,city:n.city,note:n.note,date:n.date,start:n.start,end:n.end,editMode:n.editMode,color:n.color,setColor:function(e){a((function(t){return Ee({},t,{color:e})}))}}},we=n(384),De=Object(Y.a)((function(e){return{form:{display:"flex",flexDirection:"column",margin:"auto",width:"fit-content"},formControl:{marginTop:e.spacing(2),minWidth:120},formControlLabel:{marginTop:e.spacing(1)},input:{margin:e.spacing(1)}}})),Pe=a.a.memo((function(e){var t=De(),n=je(),o=n.isOpen,c=n.date,i=n.reset,l=n.city,u=n.start,s=n.end,d=n.note,m=n.reminderState,p=n.setStart,f=n.setEnd,y=n.setCity,b=n.setNote,h=n.setOpen,O=n.editMode,g=n.color,v=n.setColor,E=e.addReminder,j=e.editReminder,w=Object(se.a)(l,1e3),D=Object(H.a)(w,1)[0],P=a.a.useState(!0),k=Object(H.a)(P,1)[0],x=a.a.useState("lg"),C=Object(H.a)(x,1)[0],R=Object(r.useState)(null),S=Object(H.a)(R,2),N=S[0],M=S[1],T=function(){var e=Object(Z.a)(X.a.mark((function e(t){var n;return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ge.get({q:t});case 3:n=e.sent,M(n.data.list[0]),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){D&&""!==D&&T(D)}),[D]);var I=function(){i()},W=function(){var e=Object(Z.a)(X.a.mark((function e(){return X.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(d&&u&&s&&l)||O){e.next=6;break}return e.next=3,E(c,{note:m.note,start:m.start,end:m.end,city:m.city,color:m.color,uuid:we()});case 3:h(!1),e.next=13;break;case 6:if(!(O&&d&&u&&s&&l)){e.next=12;break}return e.next=9,j(c,{note:m.note,start:m.start,end:m.end,city:m.city,uuid:m.uuid,color:m.color});case 9:h(!1),e.next=13;break;case 12:le()("Error","Faltan items por seleccionar","error");case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=(m.note||"").length>30;return a.a.createElement(a.a.Fragment,null,a.a.createElement(te.a,{fullWidth:k,maxWidth:C,open:o,onClose:I,"aria-labelledby":"max-width-dialog-title"},a.a.createElement(oe.a,{id:"max-width-dialog-title"},"Date:",c),a.a.createElement(re.a,null,a.a.createElement(ae.a,null,a.a.createElement("div",null,a.a.createElement(ce.a,{error:F,id:"nota",onChange:function(e){b(e.target.value)},defaultValue:d,className:t.input,inputProps:{"aria-label":"description"},fullWidth:!0,placeholder:"Ingrese el mensaje"})),a.a.createElement("div",null,a.a.createElement(ce.a,{onChange:function(e){y(e.target.value)},defaultValue:l,className:t.input,inputProps:{"aria-label":"description"},fullWidth:!0,placeholder:"Ingrese la ciudad"})),a.a.createElement(de.a,{id:"time",label:"Start",type:"time",defaultValue:u,className:t.textField,InputLabelProps:{shrink:!0},inputProps:{step:300},onChange:function(e){p(e.target.value)}}),a.a.createElement(de.a,{id:"time",label:"End",type:"time",defaultValue:s,className:t.textField,InputLabelProps:{shrink:!0},inputProps:{step:300},onChange:function(e){f(e.target.value)}}),a.a.createElement("div",null,a.a.createElement(ue.TwitterPicker,{color:g,onChangeComplete:function(e){var t=e.hex;v(t)}})),a.a.createElement("div",null,"Weather:"," ",N&&N.main.temp," ",a.a.createElement("br",null),"Descriptions:"," ",N&&N.weather[0].main," ",a.a.createElement("br",null),"Descriptions:"," ",N&&N.weather[0].description," ",a.a.createElement("br",null))),a.a.createElement("form",{className:t.form,noValidate:!0})),a.a.createElement(ne.a,null,a.a.createElement(ee.a,{onClick:W,color:"primary"},"Submit"),a.a.createElement(ee.a,{onClick:I,color:"primary"},"Close"))))})),ke=(n(387).tz.guess(),n(180)),xe=n(443),Ce=n(444),Re=n(445),Se=n(452),Ne=n(175),Me=n.n(Ne),Te=n(173),Ie=n.n(Te),We=n(446),Fe=n(453),Ue=Object(Y.a)({smallLabels:{fontSize:"0.7em"},card:{minWidth:100,maxWidth:200,overflow:"overlay"},cardEmpty:{minWidth:10,filter:"blur(0.7px)"},title:{fontSize:12},pos:{marginBottom:20}}),Ve=function(e){var t=Ue(),n=e.type,r=e.name,o=e.reminders,c=e.date,i=e.keyDate,l=e.month,u=e.removeReminders,s=e.removeReminder,d=je(),m=(d.isOpen,d.setOpenDate),p=d.setOpenEditMode;d.reset;if("header"===n)return a.a.createElement("div",null,r);o.sort((function(e,t){var n=e.start,r=(e.end,t.start),a=(t.end,n.split(":")),o=Object(H.a)(a,2),c=o[0],i=o[1],l=r.split(":"),u=Object(H.a)(l,2),s=u[0],d=u[1];return Number.parseInt(c)>Number.parseInt(s)&&Number.parseInt(i)>Number.parseInt(d)}));var f=o.map((function(e){var t=e.start,n=e.end,r=(e.date,e.note,e.city),o=e.color;return a.a.createElement(Se.a,{styles:{backgroundColor:o},label:"".concat(t," - ").concat(n," / ").concat(r," "),variant:"outlined",onDelete:function(){s(i,e)},onClick:function(){p(i,e)}})}));if(l!==c.getUTCMonth())return a.a.createElement(xe.a,{className:t.cardEmpty},a.a.createElement(Ce.a,null,a.a.createElement(ke.a,{className:t.title,color:"textSecondary",gutterBottom:!0},c.getUTCDate())),a.a.createElement(Re.a,null,a.a.createElement(ee.a,{size:"small"})));return a.a.createElement(xe.a,{className:t.card},a.a.createElement(Ce.a,null,a.a.createElement(ke.a,{className:t.title,color:"textSecondary",gutterBottom:!0},c.getUTCDate()),f),a.a.createElement(Re.a,null,a.a.createElement(We.a,{onClick:function(){m(i,!0)},"aria-label":"add",className:t.margin},a.a.createElement(Ie.a,null)),a.a.createElement(Fe.a,{title:"Remove all the reminders from current date"},a.a.createElement(We.a,{onClick:function(){u(i)},"aria-label":"delete",className:t.margin},a.a.createElement(Me.a,null)))))};Ve.defaultProps={name:null,type:"header",reminders:[],date:null,keyDate:null,month:null};var _e=a.a.memo(Ve),ze=Object(Y.a)((function(){return{root:{flexGrow:1},paperTitle:{height:100,width:100},paper:{height:140,width:100}}})),Ae=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Be=Object(k.a)(new Array(12).fill(1)),Le=a.a.memo((function(e){var t=e.month,n=e.year,r=e.addReminder,o=e.editReminder,c=e.removeReminder,i=e.removeReminders,l=e.setMonth,u=e.reminders,s=(ze(),function(e,t){for(var n=0,r=new Date(Date.UTC(t,e,1)),a=[];r.getUTCMonth()===e;){if(0===n){var o=r.getDay();if(0!==o)for(var c=0;c<o;c++){var i=new Date(r);i.setDate(i.getDate()-o+c),a.push(i)}}a.push(new Date(r)),r.setDate(r.getDate()+1),n++}for(n=0;a.length<35;)r.setDate(r.getDate()+n),a.push(new Date(r)),n++;return a}(t,n)),d=Ae.map((function(e){return a.a.createElement(q.a,{key:e},a.a.createElement(_e,{type:"header",name:e}))})),m=Object(k.a)(new Array(5)).map((function(e,n){var r=s.slice(7*n,7*(n+1)).map((function(e){var n=function(e){var t=new Date(e),n="".concat(t.getUTCMonth()+1),r="".concat(t.getUTCDate()),a=t.getFullYear();return n.length<2&&(n="0".concat(n)),r.length<2&&(r="0".concat(r)),[a,n,r].join("-")}(e),r=u[n]||[];return a.a.createElement(q.a,{key:n},a.a.createElement(_e,{month:t,type:"date",date:e,keyDate:n,reminders:r,removeReminder:c,removeReminders:i}))}));return a.a.createElement(J.a,{key:e},r)})),p=Be.map((function(e,n){return a.a.createElement("option",{key:e,value:n,selected:n.toString()===t.toString()},n+1)}));return a.a.createElement(K,null,a.a.createElement(a.a.Fragment,null,a.a.createElement("label",{htmlFor:"month"},"Select month: "),a.a.createElement("select",{id:"month",onChange:function(e){l(Number.parseInt(e.target.value))}},p),a.a.createElement(G.a,{fluid:!0},a.a.createElement(J.a,null,d),m),a.a.createElement(Pe,{addReminder:r,editReminder:o})))}));var Ye,Je=Object(i.c)((function(e){return{month:e.month,year:e.year,reminders:e.reminders}}),(function(e){return{setMonth:function(t){return e(g(t))},setYear:function(t){return e(D(t))},addReminder:function(t,n){return e(W(t,n))},editReminder:function(t,n){return e(F(t,n))},removeReminder:function(t,n){return e(V(t,n))},removeReminders:function(t){return e(U(t))}}}))(Le),qe=Object(s.a)({typography:{htmlFontSize:10,useNextVariants:!0}}),Ge=(Ye={},Object(m.e)(z(A),Ye,L));var He=function(){return a.a.createElement(d.a,{theme:qe},a.a.createElement(i.a,{store:Ge},a.a.createElement(u.a,{history:A},a.a.createElement(l.a,{path:"/",component:Je}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(He,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[189,1,2]]]);
//# sourceMappingURL=main.de728386.chunk.js.map