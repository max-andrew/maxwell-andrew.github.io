(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{160:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(20),i=a.n(l),r=(a(71),a(56)),s=a(57),c=a(64),m=a(58),u=a(65),d=a(21),h=a(59),p=a.n(h),y=a(63),w=a(35),b=a.n(w),g=a(8),f=a.n(g),E=a(5),v=a.n(E),x=a(62),O=a.n(x),C=a(61),k=a.n(C),N=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={showRow2:!1,showRow3:!1,selected:[1,2,3]},a.changeScreenTo=function(e){return function(t){"two"===e?a.setState({showRow2:!0}):"three"===e&&a.setState({showRow3:!0})}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"buttonBorder",value:function(e,t){return this.state.selected[e]===t?"borderColor: '#0062cc'":null}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state.showRow3?o.a.createElement("div",null,o.a.createElement("p",{style:{fontFamily:"Optima",color:"#1a1a1a",fontWeight:600,textAlign:"left"}},"3. How much gray hair do you have?"),o.a.createElement("div",{style:{lineHeight:"1.6",textAlign:"left"}},o.a.createElement("p",{className:t.bodyText},"When your hair color grows out, how much gray do you see? Base your selection on where you have the most amount of gray (if applicable).")),o.a.createElement("div",{style:{padding:"1%"}}),o.a.createElement(f.a,{item:!0,xs:12},o.a.createElement(v.a,{variant:"outlined",className:t.button,style:{borderColor:1===this.state.selected[2]?"#0062cc":null}},"Option 1"),o.a.createElement(v.a,{variant:"outlined",className:t.button,style:{borderColor:2===this.state.selected[2]?"#0062cc":null}},"Option 2")),o.a.createElement(f.a,{item:!0,xs:12},o.a.createElement(v.a,{variant:"outlined",className:t.button,style:{borderColor:3===this.state.selected[2]?"#0062cc":null}},"Option 3"),o.a.createElement(v.a,{variant:"outlined",className:t.button,style:{borderColor:4===this.state.selected[2]?"#0062cc":null}},"Option 4")),o.a.createElement("div",{style:{padding:"1.5%"}})):null,n=this.state.showRow2?o.a.createElement("div",null,o.a.createElement("p",{style:{fontFamily:"Optima",color:"#1a1a1a",fontWeight:600,textAlign:"left"}},"2. How would you describe the texture of your hair?"),o.a.createElement("div",{style:{lineHeight:"1.6",textAlign:"left"}},o.a.createElement("p",{className:t.bodyText},"Pro tip: Our gentle hair color is safe to use on all hair types.")),o.a.createElement("div",{style:{padding:"1%"}}),o.a.createElement(f.a,{item:!0,xs:12},o.a.createElement(v.a,{variant:"outlined",className:t.button,style:{borderColor:1===this.state.selected[1]?"#0062cc":null},onClick:function(){e.setState({showRow3:!0})}},"Option 1"),o.a.createElement(v.a,{variant:"outlined",className:t.button,style:{borderColor:2===this.state.selected[1]?"#0062cc":null},onClick:function(){e.setState({showRow3:!0})}},"Option 2")),o.a.createElement(f.a,{item:!0,xs:12},o.a.createElement(v.a,{variant:"outlined",className:t.button,style:{borderColor:3===this.state.selected[1]?"#0062cc":null},onClick:function(){e.setState({showRow3:!0})}},"Option 3"),o.a.createElement(v.a,{variant:"outlined",className:t.button,style:{borderColor:4===this.state.selected[1]?"#0062cc":null},onClick:function(){e.setState({showRow3:!0})}},"Option 4")),o.a.createElement("div",{style:{padding:"1.5%"}})):null;return o.a.createElement("div",{className:t.root},o.a.createElement(f.a,{container:!0,alignItems:"center",justify:"center",spacing:40},o.a.createElement(f.a,{item:!0,xs:3},o.a.createElement("div",null,o.a.createElement("p",{style:{fontFamily:"Futura",color:"#1a1a1a",textAlign:"center"},className:t.wordMark,onClick:this.changeScreenTo("home")},"Conductor")))),o.a.createElement("div",null,o.a.createElement(f.a,{container:!0,alignItems:"center",className:t.body,spacing:40},o.a.createElement(f.a,{item:!0,xs:12,md:6},o.a.createElement(k.a,{className:t.card},o.a.createElement(O.a,{component:"img",alt:"Scientist",className:t.media,image:p.a,title:"Scientist",width:"5%"}))),o.a.createElement(f.a,{item:!0,xs:12,md:6},o.a.createElement(b.a,{className:t.paper},o.a.createElement("p",{style:{fontFamily:"Optima",color:"#1a1a1a",fontWeight:600,textAlign:"left"}},"1. Let\u2019s start with the end result. What look are you hoping to achieve?"),o.a.createElement("div",{style:{lineHeight:"1.6",textAlign:"left"}},o.a.createElement("p",{className:t.bodyText},"Why we\u2019re asking: The more you can tell us about what you want, the better we can help. And no matter what you select, you\u2019ll be able to view our full range of colors and products.")),o.a.createElement("div",{style:{padding:"1%"}}),o.a.createElement(f.a,{item:!0,xs:12},o.a.createElement(v.a,{variant:"outlined",className:t.button,style:{borderColor:1===this.state.selected[0]?"#0062cc":null},value:1,onClick:function(){e.setState({showRow2:!0})}},"Option 1"),o.a.createElement(v.a,{variant:"outlined",className:t.button,style:{borderColor:2===this.state.selected[0]?"#0062cc":null},value:2,onClick:function(){e.setState({showRow2:!0})}},"Option 2")),o.a.createElement(f.a,{item:!0,xs:12},o.a.createElement(v.a,{variant:"outlined",className:t.button,style:{borderColor:3===this.state.selected[0]?"#0062cc":null},value:3,onClick:function(){e.setState({showRow2:!0})}},"Option 3"),o.a.createElement(v.a,{variant:"outlined",className:t.button,style:{borderColor:4===this.state.selected[0]?"#0062cc":null},value:4,onClick:function(){e.setState({showRow2:!0})}},"Option 4")),o.a.createElement("div",{style:{padding:"1.5%"}}),n,a)))))}}]),t}(n.Component),S=Object(y.withStyles)(function(e){var t,a;return{root:(t={flexGrow:1},Object(d.a)(t,e.breakpoints.down("xs"),{padding:"2.5% 10% 7.5%"}),Object(d.a)(t,e.breakpoints.up("sm"),{padding:"1% 10%"}),t),form:(a={},Object(d.a)(a,e.breakpoints.down("xs"),{padding:"1% 17.5%"}),Object(d.a)(a,e.breakpoints.up("sm"),{padding:"2.5% 27.5%"}),a),paper:{padding:2*e.spacing.unit,textAlign:"center",color:e.palette.text.secondary},body:{padding:"1%"},button:{fontFamily:"Futura",margin:"2%"},buttonBorder:{borderColor:"#0062cc"},bodyText:{fontFamily:"Optima"},headerText:{fontFamily:"Optima",color:"#1a1a1a",fontWeight:800,fontSize:"18px",textAlign:"left"},wordMark:{cursor:"pointer"},a:{color:"#757575"},formControl:{margin:e.spacing.unit},textField:{fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")}}})(N);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},59:function(e,t,a){e.exports=a.p+"static/media/scientist.cc71a665.jpeg"},66:function(e,t,a){e.exports=a(160)},71:function(e,t,a){}},[[66,1,2]]]);
//# sourceMappingURL=main.73c8ee88.chunk.js.map