(this["webpackJsonpcontact-manager"]=this["webpackJsonpcontact-manager"]||[]).push([[0],{37:function(e,a,t){e.exports=t(67)},48:function(e,a,t){},67:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(32),o=t.n(c),l=t(5),s=t(6),i=t(8),m=t(7),u=t(9),p=t(14),h=t(15),d=function(e){var a=e.branding;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{href:"/",className:"navbar-brand"},a),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"})," Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/contacts/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"})," Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.b,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"})," About"))))))};d.defaultProps={branding:"My App"};var b=d,f=(t(47),t(48),t(2)),E=t.n(f),v=t(36),y=t(10),g=t(13),C=t.n(g),N=r.a.createContext(),O=function(e,a){switch(a.type){case"DELETE_CONTACT":return Object(y.a)({},e,{contacts:e.contacts.filter((function(e){return e.id!==a.payload}))});case"ADD_CONTACT":return Object(y.a)({},e,{contacts:[].concat(Object(v.a)(e.contacts),[a.payload])});case"EDIT_CONTACT":return Object(y.a)({},e,{contacts:e.contacts.map((function(e){return e.id===a.payload.id?e=a.payload:e}))});default:return e}},j=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){t.setState((function(a){return O(a,e)}))}},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e;return E.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,E.a.awrap(C.a.get("https://jsonplaceholder.typicode.com/users"));case 2:e=a.sent,this.setState({contacts:e.data});case 4:case"end":return a.stop()}}),null,this)}},{key:"render",value:function(){return r.a.createElement(N.Provider,{value:this.state},this.props.children)}}]),a}(n.Component),k=N.Consumer,w=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},t.onShowClick=function(){t.setState((function(e){return{showContactInfo:!e.showContactInfo}}))},t.onDeleteClick=function(e,a){return E.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.a.awrap(C.a.delete("https://jsonplaceholder.typicode.com/users/".concat(e)));case 2:a({type:"DELETE_CONTACT",payload:e});case 3:case"end":return t.stop()}}))},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.props.contact,t=a.id,n=a.name,c=a.email,o=a.phone,l=this.state.showContactInfo;return r.a.createElement(k,null,(function(a){var s=a.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",null,n," ",r.a.createElement("i",{onClick:e.onShowClick,className:"fas fa-sort-down",style:{cursor:"pointer"}}),r.a.createElement("i",{onClick:function(){return e.onDeleteClick(t,s)},className:"fas fa-times",style:{cursor:"pointer",float:"right",color:"red"}}),r.a.createElement(p.b,{to:"contacts/edit/".concat(t)},r.a.createElement("i",{className:"fas fa-pencil-alt",style:{cursor:"pointer",float:"right",color:"black",marginRight:"1rem"}}))),l&&r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email: ",c),r.a.createElement("li",{className:"list-group-item"},"Phone: ",o)))}))}}]),a}(n.Component),x=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(k,null,(function(e){var a=e.contacts;return r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-3"},r.a.createElement("span",{className:"text-danger"},"Contacts")),a.map((function(e){return r.a.createElement(w,{key:e.id,contact:e})})))}))}}]),a}(n.Component),S=t(17),A=t(35),T=t.n(A),I=function(e){var a=e.name,t=e.type,n=e.label,c=e.value,o=e.placeholder,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a},n),r.a.createElement("input",{name:a,type:t,className:T()("form-control from-control-lg",{"is-invalid":s}),placeholder:o,value:c,onChange:l}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))},D=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.onFormSubmit=function(e,a){var n,r,c,o,l,s;return E.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:if(a.preventDefault(),n=t.state,r=n.name,c=n.email,o=n.phone,""!==r){i.next=5;break}return t.setState({errors:Object(y.a)({},t.state.errors,{name:"Name is required"})}),i.abrupt("return");case 5:if(""!==o){i.next=8;break}return t.setState({errors:Object(y.a)({},t.state.errors,{phone:"Phone is required"})}),i.abrupt("return");case 8:if(""!==c){i.next=11;break}return t.setState({errors:Object(y.a)({},t.state.errors,{email:"Email is required"})}),i.abrupt("return");case 11:return l={name:r,email:c,phone:o},i.next=14,E.a.awrap(C.a.post("https://jsonplaceholder.typicode.com/users/",l));case 14:s=i.sent,e({type:"ADD_CONTACT",payload:s.data}),t.setState({name:"",email:"",phone:""}),t.props.history.push("/");case 18:case"end":return i.stop()}}))},t.onInputChange=function(e){var a=e.target,n=a.name,r=a.value;t.setState(Object(S.a)({},n,r))},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.errors;return r.a.createElement(k,null,(function(a){var l=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:function(a){return e.onFormSubmit(l,a)}},r.a.createElement(I,{name:"name",type:"text",label:"Name",placeholder:"Enter name...",value:t,onChange:e.onInputChange,error:o.name}),r.a.createElement(I,{name:"email",type:"email",label:"Email",placeholder:"Enter email...",value:n,onChange:e.onInputChange,error:o.email}),r.a.createElement(I,{name:"phone",type:"text",label:"Phone",placeholder:"Enter phone...",value:c,onChange:e.onInputChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"}))))}))}}]),a}(n.Component),P=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"About Contact Manager"),r.a.createElement("p",{className:"lead"},"Simple app to manage contacts"),r.a.createElement("p",{className:"text-secondary"},"v.alpha"))},q=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},"404 Page Not Found"),r.a.createElement("p",{className:"lead"},"Sorry, that page doesn't exist"))},F=function(e){function a(){var e,t;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(i.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},t.onFormSubmit=function(e,a){var n,r,c,o,l,s,i;return E.a.async((function(m){for(;;)switch(m.prev=m.next){case 0:if(a.preventDefault(),n=t.state,r=n.name,c=n.email,o=n.phone,""!==r){m.next=5;break}return t.setState({errors:Object(y.a)({},t.state.errors,{name:"Name is required"})}),m.abrupt("return");case 5:if(""!==o){m.next=8;break}return t.setState({errors:Object(y.a)({},t.state.errors,{phone:"Phone is required"})}),m.abrupt("return");case 8:if(""!==c){m.next=11;break}return t.setState({errors:Object(y.a)({},t.state.errors,{email:"Email is required"})}),m.abrupt("return");case 11:return l={name:r,email:c,phone:o},s=t.props.match.params.id,m.next=15,E.a.awrap(C.a.put("https://jsonplaceholder.typicode.com/users/".concat(s),l));case 15:i=m.sent,e({type:"EDIT_CONTACT",payload:i.data}),t.setState({name:"",email:"",phone:""}),t.props.history.push("/");case 19:case"end":return m.stop()}}))},t.onInputChange=function(e){var a=e.target,n=a.name,r=a.value;t.setState(Object(S.a)({},n,r))},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e,a,t;return E.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e=this.props.match.params.id,n.next=3,E.a.awrap(C.a.get("https://jsonplaceholder.typicode.com/users/".concat(e)));case 3:a=n.sent,t=a.data,this.setState({name:t.name,email:t.email,phone:t.phone});case 6:case"end":return n.stop()}}),null,this)}},{key:"render",value:function(){var e=this,a=this.state,t=a.name,n=a.email,c=a.phone,o=a.errors;return r.a.createElement(k,null,(function(a){var l=a.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:function(a){return e.onFormSubmit(l,a)}},r.a.createElement(I,{name:"name",type:"text",label:"Name",placeholder:"Enter name...",value:t,onChange:e.onInputChange,error:o.name}),r.a.createElement(I,{name:"email",type:"email",label:"Email",placeholder:"Enter email...",value:n,onChange:e.onInputChange,error:o.email}),r.a.createElement(I,{name:"phone",type:"text",label:"Phone",placeholder:"Enter phone...",value:c,onChange:e.onInputChange,error:o.phone}),r.a.createElement("input",{type:"submit",value:"Edit Contact",className:"btn btn-light btn-block"}))))}))}}]),a}(n.Component),_=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(j,null,r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(b,{branding:"Contact Manager"}),r.a.createElement("div",{className:"container"},r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:x}),r.a.createElement(h.a,{exact:!0,path:"/contacts/add",component:D}),r.a.createElement(h.a,{exact:!0,path:"/contacts/edit/:id",component:F}),r.a.createElement(h.a,{exact:!0,path:"/about",component:P}),r.a.createElement(h.a,{component:q}))))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.827a582a.chunk.js.map