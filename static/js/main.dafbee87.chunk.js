(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{1:function(t,e,n){t.exports={title:"AddedBtn_title__iluox",btnContainer:"AddedBtn_btnContainer__3pqI-",btnOn:"AddedBtn_btnOn__90rTJ",valueName:"AddedBtn_valueName__1ZsDp",valueNumber:"AddedBtn_valueNumber__gimil",inputName:"AddedBtn_inputName__1KEXv",inputNumber:"AddedBtn_inputNumber__54eet"}},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(2),c=n.n(a),s=n(3),r=n.n(s),o=n(8),i=n(6),l=n(7),u=n(10),d=n(9),m=n(19),b=n(1),j=n.n(b),h=n(0),v=function(t){var e=t.valueName,n=t.valueNumber,a=t.addNameContact;return Object(h.jsxs)("div",{className:j.a.btnContainer,children:[Object(h.jsx)("h1",{className:j.a.title,children:"PhoneBook"}),Object(h.jsxs)("label",{className:j.a.valueName,children:["Name",Object(h.jsx)("input",{className:j.a.inputName,id:"valueName",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:e})]}),Object(h.jsxs)("label",{className:j.a.valueNumber,children:["Number",Object(h.jsx)("input",{className:j.a.inputNumber,id:"valueNumber",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:n})]}),Object(h.jsx)("button",{className:j.a.btnOn,type:"button",onClick:a,children:"Add Contact"})]})},p=n(4),N=n.n(p),C=function(t){var e=t.valueFilter;return Object(h.jsxs)("div",{className:N.a.container,children:[Object(h.jsx)("h2",{className:N.a.title,children:"Contacts Filter"}),Object(h.jsxs)("label",{className:N.a.text,children:["Find Contact by name",Object(h.jsx)("input",{className:N.a.input,type:"text",onChange:e})]}),Object(h.jsx)("ul",{className:N.a.contacts,id:"Contacts"})]})},f=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],name:"",number:"",filter:""},t.valueName=function(e){t.setState({name:e.target.value})},t.valueNumber=function(e){t.setState({number:e.target.value})},t.valueFilter=function(e){t.setState({filter:e.target.value}),t.filterContacts()},t.addNameContact=function(){t.clear(),null===t.state.contacts||void 0===t.state.contacts.find((function(e){return e.name.toLowerCase()===t.state.name.toLowerCase()}))?(t.setState((function(e,n){return{contacts:[].concat(Object(o.a)(t.state.contacts),[{idCont:Object(m.a)(),name:t.state.name,number:t.state.number}])}})),setTimeout((function(){localStorage.setItem("contacts",JSON.stringify(t.state.contacts))}),2e3),t.renderContacts()):alert("Its name never used")},t.clear=function(){var t=document.getElementById("valueName"),e=document.getElementById("valueNumber");t.value="",e.value=""},t.filterContacts=function(){if(1!==t.state.filter.length){var e=t.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.state.filter.toLowerCase())}));r.a.render(e.map((function(e){return Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:e.name}),": ",e.number," ",Object(h.jsx)("button",{type:"button",id:e.idCont,onClick:t.deleteContact,children:"Delete"})]})})),document.getElementById("Contacts"))}else t.renderContacts()},t.deleteContact=function(e){t.setState({contacts:t.state.contacts.filter((function(t){return t.idCont!==e.target.id}))}),setTimeout((function(){t.renderContacts()}),250)},t.renderContacts=function(){r.a.render(null===t.state.contacts?null:t.state.contacts.map((function(e){return Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:e.name}),": ",e.number," ",Object(h.jsx)("button",{type:"button",id:e.idCont,onClick:t.deleteContact,children:"Delete"})]})})),document.getElementById("Contacts"))},t}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(t,e,n){var a=this;e.contacts!==localStorage.getItem("contacts")&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts)),r.a.render(null===this.state.contacts?null:this.state.contacts.map((function(t){return Object(h.jsxs)("li",{children:[Object(h.jsx)("span",{children:t.name}),": ",t.number," ",Object(h.jsx)("button",{type:"button",id:t.idCont,onClick:a.deleteContact,children:"Delete"})]})})),document.getElementById("Contacts"))}},{key:"componentDidMount",value:function(){var t=this;this.setState({contacts:JSON.parse(localStorage.getItem("contacts"))}),setTimeout((function(){t.renderContacts()}),1e3)}},{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(v,{valueName:this.valueName,valueNumber:this.valueNumber,addNameContact:this.addNameContact}),Object(h.jsx)(C,{valueFilter:this.valueFilter})]})}}]),n}(c.a.Component);n(16);r.a.render(Object(h.jsx)(f,{}),document.getElementById("root"))},4:function(t,e,n){t.exports={container:"Filter_container__3yzXF",text:"Filter_text__3YvrJ",title:"Filter_title__2jsgL",input:"Filter_input__38TxV",contacts:"Filter_contacts__1xqKR"}}},[[17,1,2]]]);
//# sourceMappingURL=main.dafbee87.chunk.js.map