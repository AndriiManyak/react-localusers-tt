(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{27:function(e,t,s){},28:function(e,t,s){},29:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){"use strict";s.r(t);var c=s(0),r=s(1),n=s.n(r),a=s(19),i=s.n(a),o=(s(27),s(6)),j=s(3),u=(s(28),s(7)),b=s(2),l=s(5),d=(s(29),{selectedUser:"",password:""}),O=function(){var e=Object(j.f)(),t=Object(r.useState)([]),s=Object(l.a)(t,2),n=s[0],a=s[1],i=Object(r.useState)(d),O=Object(l.a)(i,2),m=O[0],p=O[1],x=Object(r.useState)({}),h=Object(l.a)(x,2),f=h[0],g=h[1];Object(r.useEffect)((function(){var e=Object.keys(localStorage).filter((function(e){return"loggedUser"!==e}));a(e)}),[]);var v=function(e){var t=e.target,s=t.name,c=t.value;p((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(u.a)({},s,c))})),g((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(u.a)({},s,""))}))},_=function(){var e=!0;if(!m.selectedUser)return e=!1,g((function(e){return Object(b.a)(Object(b.a)({},e),{},{selectedUser:"You need to chose user"})})),e;var t=JSON.parse(localStorage.getItem(m.selectedUser));return m.password!==t.password&&(g((function(e){return Object(b.a)(Object(b.a)({},e),{},{password:"Incorect password"})})),e=!1),e};return Object(c.jsx)("div",{className:"Login",children:n.length>0?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{children:"Log In"}),Object(c.jsxs)("form",{className:"Login__Form Form",onSubmit:function(t){t.preventDefault(),_()&&(localStorage.setItem("loggedUser",m.selectedUser),e.push("/users"))},children:[Object(c.jsxs)("select",{className:"Form__input",name:"selectedUser",value:m.selectedUser,onChange:v,children:[Object(c.jsx)("option",{value:"",children:"Choose user"}),n.map((function(e){return Object(c.jsx)("option",{value:e,children:e},e)}))]}),f.selectedUser&&Object(c.jsx)("span",{className:"Form__error",children:f.selectedUser}),Object(c.jsx)("input",{className:"Form__input",type:"password",name:"password",value:m.password,placeholder:"password",onChange:v}),f.password&&Object(c.jsx)("span",{className:"Form__error",children:f.password}),Object(c.jsx)("button",{className:"Form__submit-button",type:"submit",children:"Lon In"})]})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{children:"There are no users in database. Please sign up"}),Object(c.jsx)("div",{className:"Login__signup",children:Object(c.jsx)(o.b,{to:"/signup",children:"Sign up"})})]})})},m=s(21),p=s(13),x=s.n(p),h={name:"",surname:"",middleName:"",position:"",phoneNumber:"",login:"",password:"",confirmPassword:""},f={name:{text:"Name",isRequired:!0,type:"text"},surname:{text:"Surname",isRequired:!0,type:"text"},login:{text:"Login",isRequired:!0,type:"text"},middleName:{text:"Middle name",isRequired:!1,type:"text"},position:{text:"Position",isRequired:!1,type:"text"},phoneNumber:{text:"Phone number",isRequired:!1,type:"tel"},password:{text:"Password",isRequired:!0,type:"password"},confirmPassword:{text:"Confirm password",isRequired:!0,type:"password"}},g=function(){var e=Object(j.f)(),t=Object(r.useState)(h),s=Object(l.a)(t,2),a=s[0],i=s[1],d=Object(r.useState)({}),O=Object(l.a)(d,2),p=O[0],g=O[1],v=function(e){var t=e.target,s=t.name,c=t.value;i((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(u.a)({},s,c))})),g((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(u.a)({},s,""))}))},_=function(){var e=!0;return Object.keys(a).forEach((function(t){!a[t]&&f[t].isRequired&&(e=!1,g((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(u.a)({},t,"".concat(f[t].text," is required")))})))})),a.password!==a.confirmPassword&&(e=!1,g((function(e){return Object(b.a)(Object(b.a)({},e),{},{passwordNotConfirmed:!0})}))),e},N=function(){a.confirmPassword;var e=Object(m.a)(a,["confirmPassword"]);localStorage.setItem("".concat(e.login),JSON.stringify(e))};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("h2",{children:[Object(c.jsx)(o.b,{to:"/",children:"\u2190"}),"Sign Up"]}),Object(c.jsxs)("form",{className:"Form",onSubmit:function(t){t.preventDefault(),_()&&(N(),e.push("/"))},children:[Object.keys(f).map((function(e){return Object(c.jsxs)(n.a.Fragment,{children:[Object(c.jsx)("input",{className:x()({Form__input:!0},{"Form__input--error":p[e]}),type:f[e].type,name:e,value:a[e],placeholder:f[e].text,onChange:v}),Object(c.jsx)("span",{className:"Form__error",children:p[e]})]},e)})),p.passwordNotConfirmed&&Object(c.jsx)("span",{className:"Form__error",children:"Passwords must be equal"}),Object(c.jsx)("button",{className:"Form__submit-button",type:"submit",children:"Submit"})]})]})},v=function(){var e=Object(j.f)(),t=Object(r.useState)(null),s=Object(l.a)(t,2),a=s[0],i=s[1],o=Object(r.useState)({}),d=Object(l.a)(o,2),O=d[0],m=d[1],p=Object(r.useState)(!1),h=Object(l.a)(p,2),g=h[0],v=h[1];Object(r.useEffect)((function(){var t=localStorage.getItem("loggedUser");t||e.push("/");var s=JSON.parse(localStorage.getItem(t));i(Object(b.a)(Object(b.a)({},s),{},{confirmPassword:""}))}),[]);var _=function(){var e=!0;return Object.keys(a).forEach((function(t){!a[t]&&f[t].isRequired&&(e=!1,m((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(u.a)({},t,"".concat(f[t].text," is required")))})))})),a.password!==a.confirmPassword&&(e=!1,m((function(e){return Object(b.a)(Object(b.a)({},e),{},{passwordNotConfirmed:!0})}))),e},N=function(){localStorage.setItem(a.login,JSON.stringify(a))},S=function(e){var t=e.target,s=t.name,c=t.value;i((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(u.a)({},s,c))})),m((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(u.a)({},s,""))}))};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{children:"Edit user"}),a&&Object(c.jsxs)("form",{className:"Form",onSubmit:function(e){e.preventDefault(),_()&&(N(),v(!0))},children:[Object.keys(f).map((function(e){return Object(c.jsxs)(n.a.Fragment,{children:[Object(c.jsx)("input",{className:x()({Form__input:!0},{"Form__input--error":O[e]}),type:f[e].type,name:e,value:a[e],placeholder:f[e].text,onChange:S}),Object(c.jsx)("span",{className:"Form__error",children:O[e]})]},e)})),O.passwordNotConfirmed&&Object(c.jsx)("span",{className:"Form__error",children:"Passwords must be equal"}),Object(c.jsx)("button",{className:"Form__submit-button",type:"submit",children:"Save"}),g&&Object(c.jsx)("h2",{children:"Changes is saved"})]})]})},_=(s(35),function(){return Object(c.jsx)("div",{className:"Header",children:Object(c.jsxs)("nav",{className:"Header__nav",children:[Object(c.jsx)(o.c,{to:"/users/edit",activeClassName:"Header__link--active",children:"Edit user"}),Object(c.jsx)(o.c,{to:"/users/list",activeClassName:"Header__link--active",children:"List of users"}),Object(c.jsx)(o.c,{to:"/users/text",activeClassName:"Header__link--active",children:"Text form"}),Object(c.jsx)(o.c,{to:"/signup",activeClassName:"Header__link--active",children:"New user"})]})})}),N=(s(36),function(e){var t=e.name,s=e.surname,r=e.login,n=e.position;return Object(c.jsxs)("div",{className:"User",children:[Object(c.jsx)("h3",{children:"".concat(t," ").concat(s)}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{children:"Login: "}),r]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{children:"Position: "}),n]})]})}),S=(s(37),function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),s=t[0],n=t[1];return Object(r.useEffect)((function(){var e=[];Object.keys(localStorage).forEach((function(t){"loggedUser"!==t&&e.push(JSON.parse(localStorage.getItem(t)))})),n(e)}),[]),Object(c.jsx)("div",{className:"UserList",children:s.map((function(e){return Object(c.jsx)("div",{className:"UserList__element",children:Object(c.jsx)(N,Object(b.a)({},e))},e.login)}))})}),w=(s(38),function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),s=t[0],n=t[1],a=Object(r.useState)(""),i=Object(l.a)(a,2),o=i[0],j=i[1];return Object(c.jsxs)("div",{className:"Text",children:[Object(c.jsx)("h2",{className:"Text__header",children:"Enter text"}),Object(c.jsxs)("form",{className:"Form",onSubmit:function(e){e.preventDefault(),n(o)},children:[Object(c.jsx)("textarea",{type:"text",name:"text",className:"Form__textarea",value:o,onChange:function(e){j(e.target.value)}}),Object(c.jsx)("button",{type:"submit",className:"Form__submit-button",children:"Save"})]}),Object(c.jsx)("p",{className:"Text__output",children:s})]})}),F=function(){return Object(c.jsxs)("div",{className:"Users",children:[Object(c.jsx)(_,{}),Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{exact:!0,path:["/users","/users/edit"],children:Object(c.jsx)(v,{})}),Object(c.jsx)(j.a,{path:"/users/list",children:Object(c.jsx)(S,{})}),Object(c.jsx)(j.a,{path:"/users/text",children:Object(c.jsx)(w,{})})]})]})},y=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(j.c,{children:[Object(c.jsx)(j.a,{exact:!0,path:"/",children:Object(c.jsx)(O,{})}),Object(c.jsx)(j.a,{path:"/signup",children:Object(c.jsx)(g,{})}),Object(c.jsx)(j.a,{path:"/users",children:Object(c.jsx)(F,{})})]})})};i.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(o.a,{children:Object(c.jsx)(y,{})})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.6e031252.chunk.js.map