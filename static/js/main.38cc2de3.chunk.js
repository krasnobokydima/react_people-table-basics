(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{18:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var c=n(7),r=n(10),j=n.n(r),s=n(0),a=n(2),b=(n(18),n(1)),i=function(){return Object(b.jsx)("h1",{children:"HomePage"})},o=function(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("h1",{children:"Page not found"})})},l=n(13),d=n(12),h=n(4),u=n(11),O=n(9),x=n.n(O),p=function(){var e=Object(u.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-academy.github.io/react_people-table/api/people.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Error: ".concat(t.status));case 5:return e.abrupt("return",t.json());case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(e){var t=e.person,n=t.name,c=t.sex,r=t.born,j=t.died,s=t.motherName,a=t.fatherName;return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:n}),Object(b.jsx)("td",{children:c}),Object(b.jsx)("td",{children:r}),Object(b.jsx)("td",{children:j}),Object(b.jsx)("td",{children:s}),Object(b.jsx)("td",{children:a})]})},m=function(e){var t=e.peopleFromServer;return Object(b.jsxs)("table",{style:{borderCollapse:"collapse"},children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:"Name"}),Object(b.jsx)("td",{children:"Sex"}),Object(b.jsx)("td",{children:"born"}),Object(b.jsx)("td",{children:"died"}),Object(b.jsx)("td",{children:"mother"}),Object(b.jsx)("td",{children:"father"})]})}),Object(b.jsx)("tbody",{children:t.map((function(e){return Object(b.jsx)(f,{person:e},e.slug)}))})]})},v=function(){var e=Object(s.useState)([]),t=Object(h.a)(e,2),n=t[0],c=t[1];return Object(s.useEffect)((function(){p().then((function(e){var t=Object(d.a)(e).map((function(t){var n=Object(l.a)({},t),c=t.fatherName,r=t.motherName,j=e.find((function(e){return e.name===c}))||c,s=e.find((function(e){return e.name===r}))||c;return n.father=j,n.mother=s,n}));return c(t)}))}),[]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{children:"PeoplePage"}),Object(b.jsx)(m,{peopleFromServer:n})]})},g=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("header",{children:Object(b.jsx)("div",{children:Object(b.jsxs)("nav",{children:[Object(b.jsx)(c.b,{to:"/",children:Object(b.jsx)("button",{type:"button",className:"waves-effect waves-light btn",children:"Home"})}),Object(b.jsx)(c.b,{to:"/table",children:Object(b.jsx)("button",{type:"button",className:"waves-effect waves-light btn",children:"table"})})]})})}),Object(b.jsxs)(a.d,{children:[Object(b.jsx)(a.b,{path:"/home",element:Object(b.jsx)(i,{})}),Object(b.jsx)(a.b,{path:"/",element:Object(b.jsx)(a.a,{replace:!0,to:"/home"})}),Object(b.jsx)(a.b,{path:"table",element:Object(b.jsx)(v,{})}),Object(b.jsx)(a.b,{path:"*",element:Object(b.jsx)(o,{})})]})]})};j.a.render(Object(b.jsx)(c.a,{children:Object(b.jsx)(g,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.38cc2de3.chunk.js.map