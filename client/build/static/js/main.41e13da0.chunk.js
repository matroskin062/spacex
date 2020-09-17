(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{119:function(e,n,t){"use strict";t.r(n);var a=t(2),c=t.n(a),r=t(47),l=t.n(r),o=(t(92),t(10)),u=(t(93),t(76)),i=t(54),s=t(55);function m(){var e=Object(i.a)(["\n  query getUpcomingLaunches {\n    getUpcomingLaunches {\n      flight_number\n      mission_name\n      launch_date_utc\n      is_tentative\n      tentative_max_precision\n      launch_success\n      upcoming\n      links {\n        mission_patch\n      }\n      rocket {\n        second_stage {\n          payloads {\n            payload_id\n            payload_type\n            manufacturer\n          }\n        }\n      }\n    }\n  }\n"]);return m=function(){return e},e}var E=Object(s.a)(m()),f=t(27),g=t(80),A=t.n(g),B=t(33),d=function(){var e=Object(f.useQuery)(E),n=e.data,t=e.loading&&!n?c.a.createElement(B.a,null):c.a.createElement(u.a,{data:n.getUpcomingLaunches});return c.a.createElement("div",{className:A.a.Home},c.a.createElement("h1",null,c.a.createElement("span",{role:"img","aria-label":"rocket-emoji"},"\ud83d\ude80"),"Upcoming Launches",c.a.createElement("span",{role:"img","aria-label":"rocket-emoji"},"\ud83d\ude80")),t)},p=t(83),_=t.n(p),h=t(19),w=t(53),O=t.n(w),b=t(49),v=t(44),T=t.n(v),y=t(84),k=t(85),L=t.n(k),J=t(86),C=t.n(J),S=function(){var e=c.a.useState(!1),n=Object(b.a)(e,2),t=n[0],a=n[1],r=c.a.useState(0),l=Object(b.a)(r,2),o=l[0],u=l[1],i=function(){a(!1)};return c.a.createElement("div",{className:T.a.BurgerMenu},c.a.createElement(y.slide,{customBurgerIcon:c.a.createElement("img",{src:L.a,alt:"menu-icon"}),customCrossIcon:c.a.createElement("img",{src:C.a,alt:"close-icon"}),burgerButtonClassName:t?T.a.hidden:"",onOpen:function(){a(!0)},isOpen:t,onClose:i},[{text:"Home",link:"/"},{text:"Rockets",link:"/rockets"},{text:"Launches",link:"/launches"}].map((function(e,n){return c.a.createElement(h.b,{key:e.link+n,to:e.link,onClick:function(){i(),u(n)},className:n===o?T.a.Active:""},e.text)}))))},K=function(){return c.a.createElement("div",null,c.a.createElement("div",{className:O.a.Header},c.a.createElement(h.b,{to:"/",className:O.a.Logo},c.a.createElement("img",{src:_.a,alt:"logo"})),c.a.createElement("ul",null,c.a.createElement(h.b,{to:"/"},c.a.createElement("li",null,"Home")),c.a.createElement(h.b,{to:"/rockets"},c.a.createElement("li",null,"Rockets")),c.a.createElement(h.b,{to:"/launches"},c.a.createElement("li",null,"Launches")))),c.a.createElement(S,null))},x=c.a.lazy((function(){return t.e(5).then(t.bind(null,124))})),F=c.a.lazy((function(){return t.e(4).then(t.bind(null,125))})),H=c.a.lazy((function(){return t.e(3).then(t.bind(null,126))}));var X=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(K,null),c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/rockets",component:F}),c.a.createElement(o.a,{path:"/mission/:flight",component:H}),c.a.createElement(o.a,{path:"/launches",component:x}),c.a.createElement(o.a,{exact:!0,path:"/",component:d}),c.a.createElement(o.a,{render:function(){return c.a.createElement("h1",null,"Not Found")}})))},D=new f.ApolloClient({uri:"http://localhost:3001/",cache:new f.InMemoryCache});l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(c.a.Suspense,{fallback:c.a.createElement(B.a,null)},c.a.createElement(h.a,null,c.a.createElement(f.ApolloProvider,{client:D},c.a.createElement(X,null))))),document.getElementById("root"))},32:function(e,n,t){e.exports={Launch:"Launch_Launch__1TOfV",Flex:"Launch_Flex__2PP8g",Succces:"Launch_Succces__2OiPd",Fail:"Launch_Fail__x4VOH"}},33:function(e,n,t){"use strict";var a=t(2),c=t.n(a),r=t(81),l=t.n(r),o=t(82),u=t.n(o);n.a=function(){return c.a.createElement("div",{className:u.a.Preloader},c.a.createElement("img",{src:l.a,alt:"preloader"}))}},44:function(e,n,t){e.exports={BurgerMenu:"Burger_BurgerMenu__3bg2-","bm-item":"Burger_bm-item__3JQlf",Active:"Burger_Active__2GpuR",hidden:"Burger_hidden__2aqCt","bm-burger-bars":"Burger_bm-burger-bars__2pq8B","bm-cross-button":"Burger_bm-cross-button__hsQsr","bm-cross":"Burger_bm-cross__3hFLN","bm-menu":"Burger_bm-menu__1u1cf","bm-morph-shape":"Burger_bm-morph-shape__3GRpf","bm-item-list":"Burger_bm-item-list__5m2vY","bm-overlay":"Burger_bm-overlay__TXgRh"}},53:function(e,n,t){e.exports={Header:"Header_Header__NBEZ7",Logo:"Header_Logo__3HylU",BurgerMenu:"Header_BurgerMenu__2UXUm"}},58:function(e,n,t){e.exports=t.p+"static/media/no-image.5a3cdc8f.png"},76:function(e,n,t){"use strict";var a=t(2),c=t.n(a),r=t(19),l=t(32),o=t.n(l),u=t(58),i=t.n(u),s=t(39),m=t.n(s),E=function(e){var n=e.l,t=n.rocket.second_stage.payloads;return c.a.createElement("div",{key:n.mission_name,className:o.a.Launch},c.a.createElement("h2",{className:n.upcoming?null:n.launch_success?o.a.Succces:o.a.Fail},n.mission_name),c.a.createElement("div",{className:o.a.Flex},c.a.createElement("div",null,c.a.createElement("p",null,"Launch Date:"," ","month"===n.tentative_max_precision?m()(n.launch_date_utc).format("MMM YYYY"):"quarter"===n.tentative_max_precision||"year"===n.tentative_max_precision?m()(n.launch_date_utc).format("YYYY"):m()(n.launch_date_utc).local().format("D MMM YYYY, HH:mm:ss")),t.map((function(e){return c.a.createElement("p",{key:e.payload_id+e.manufacturer},e.payload_id," ",e.payload_type,e.manufacturer&&" by "+e.manufacturer)}))),c.a.createElement("div",null,c.a.createElement("img",{src:n.links.mission_patch?n.links.mission_patch:i.a,alt:"".concat(n.mission_name," patch")}))),c.a.createElement(r.b,{to:"/mission/".concat(n.flight_number)},"Details..."))};n.a=function(e){var n=e.data;return c.a.createElement("div",null,n.map((function(e){return c.a.createElement(E,{key:e.mission_name,l:e})})))}},80:function(e,n,t){e.exports={Home:"Home_Home__k5tEf"}},81:function(e,n,t){e.exports=t.p+"static/media/rocketImg.092c45a2.svg"},82:function(e,n,t){e.exports={Preloader:"Preloader_Preloader__2edEo"}},83:function(e,n,t){e.exports=t.p+"static/media/Logo.950ba665.png"},85:function(e,n,t){e.exports=t.p+"static/media/burger.b4f35a59.png"},86:function(e,n){e.exports="data:image/png;base64,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"},87:function(e,n,t){e.exports=t(119)},92:function(e,n,t){},93:function(e,n,t){}},[[87,1,2]]]);
//# sourceMappingURL=main.41e13da0.chunk.js.map