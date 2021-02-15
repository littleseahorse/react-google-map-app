(this["webpackJsonpreact-google-map-app"]=this["webpackJsonpreact-google-map-app"]||[]).push([[0],{149:function(e,t,s){},150:function(e,t,s){},350:function(e,t,s){"use strict";s.r(t);var n=s(0),l=s(55),r=s.n(l),i=(s(149),s(56)),o=s(57),c=s(59),a=s(58),h=(s(150),s(85)),p=s.n(h),y=s(142),u=s(30),d=[{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#000000"},{lightness:40}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#000000"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#000000"},{lightness:21}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"},{lightness:17}]}],g=s(1),f=function(e){Object(c.a)(s,e);var t=Object(a.a)(s);function s(){var e;Object(i.a)(this,s);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={users:[],clickedUser:null},e.fetchData=Object(y.a)(p.a.mark((function t(){var s,n=arguments;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=n.length>0&&void 0!==n[0]?n[0]:"",n.length>1&&void 0!==n[1]?n[1]:{},t.next=4,fetch(s,{headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){return e.setState({users:t})})).catch((function(e){return console.log(e)}));case 4:case"end":return t.stop()}}),t)}))),e}return Object(o.a)(s,[{key:"setClickedUser",value:function(e){this.setState({clickedUser:e})}},{key:"escFunction",value:function(e){27===e.keyCode&&this.setState({clickedUser:null})}},{key:"componentDidMount",value:function(){this.fetchData("https://jsonplaceholder.typicode.com/users"),document.addEventListener("keydown",this.escFunction.bind(this),!1)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.escFunction.bind(this),!1)}},{key:"render",value:function(){var e=this;return Object(g.jsxs)(u.GoogleMap,{defaultZoom:1,defaultCenter:{lat:0,lng:0},defaultOptions:{styles:d},children:[this.state.users.map((function(t){return Object(g.jsx)(u.Marker,{position:{lat:parseFloat(t.address.geo.lat),lng:parseFloat(t.address.geo.lng)},onClick:function(){return e.setClickedUser(t)},icon:{url:"logo.svg",scaledSize:new window.google.maps.Size(45,45)}},t.id)})),this.state.clickedUser&&Object(g.jsx)(u.InfoWindow,{position:{lat:parseFloat(this.state.clickedUser.address.geo.lat),lng:parseFloat(this.state.clickedUser.address.geo.lng)},onCloseClick:function(){e.setClickedUser(null)},children:Object(g.jsxs)("div",{style:{textAlign:"left"},children:[Object(g.jsx)("h3",{children:this.state.clickedUser.company.name}),Object(g.jsxs)("p",{children:[Object(g.jsx)("i",{children:"Service:"})," ",this.state.clickedUser.company.catchPhrase]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("i",{children:"Phone:"})," ",this.state.clickedUser.phone]}),Object(g.jsxs)("p",{children:[Object(g.jsx)("i",{children:"Webiste:"})," ",Object(g.jsx)("a",{href:"https://"+this.state.clickedUser.website,children:this.state.clickedUser.website})]})]})})]})}}]),s}(n.Component),m=Object(u.withScriptjs)(Object(u.withGoogleMap)(f)),j=function(e){Object(c.a)(s,e);var t=Object(a.a)(s);function s(){return Object(i.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(g.jsx)("div",{className:"App",style:{width:"100vw",height:"100vh"},children:Object(g.jsx)(m,{googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=".concat("AIzaSyDyOlv1cN4aT_y3XNgj1f2HtDqsKDh5XNw"),loadingElement:Object(g.jsx)("div",{style:{height:"100%"}}),containerElement:Object(g.jsx)("div",{style:{height:"100%"}}),mapElement:Object(g.jsx)("div",{style:{height:"100%"}})})})}}]),s}(n.Component),b=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,351)).then((function(t){var s=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,i=t.getTTFB;s(e),n(e),l(e),r(e),i(e)}))};r.a.render(Object(g.jsx)(j,{}),document.getElementById("root")),b()}},[[350,1,2]]]);
//# sourceMappingURL=main.fb0080a7.chunk.js.map