(this["webpackJsonpreact-hooks-bank-of-flatiron-code-challenge"]=this["webpackJsonpreact-hooks-bank-of-flatiron-code-challenge"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n(6),i=n.n(r),s=n(2),o=n(5),l=n(3);var d=function(e){var t=e.date,n=e.description,a=e.category,r=e.amount;return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t}),Object(c.jsx)("td",{children:n}),Object(c.jsx)("td",{children:a}),Object(c.jsx)("td",{children:r})]})};var j=function(e){var t=e.transactionsObj.map((function(e){return Object(c.jsx)(d,{date:e.date,description:e.description,category:e.category,amount:e.amount},e.id)}));return Object(c.jsx)("table",{className:"ui celled striped padded table",children:Object(c.jsxs)("tbody",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:Object(c.jsx)("h3",{className:"ui center aligned header",children:"Date"})}),Object(c.jsx)("th",{children:Object(c.jsx)("h3",{className:"ui center aligned header",children:"Description"})}),Object(c.jsx)("th",{children:Object(c.jsx)("h3",{className:"ui center aligned header",children:"Category"})}),Object(c.jsx)("th",{children:Object(c.jsx)("h3",{className:"ui center aligned header",children:"Amount"})})]}),t]})})};var u=function(e){var t=e.handleSearch;return Object(c.jsxs)("div",{className:"ui large fluid icon input",children:[Object(c.jsx)("input",{type:"text",placeholder:"Search your Recent Transactions",onChange:t}),Object(c.jsx)("i",{className:"circular search link icon"})]})};var h=function(e){var t=e.handleChange,n=e.handleSubmit,a=e.transactionForm;return Object(c.jsx)("div",{className:"ui segment",children:Object(c.jsxs)("form",{className:"ui form",onSubmit:n,children:[Object(c.jsxs)("div",{className:"inline fields",children:[Object(c.jsx)("input",{onChange:t,type:"date",name:"date",value:a.date}),Object(c.jsx)("input",{onChange:t,type:"text",name:"description",placeholder:"Description",value:a.description}),Object(c.jsx)("input",{onChange:t,type:"text",name:"category",placeholder:"Category",value:a.category}),Object(c.jsx)("input",{onChange:t,type:"number",name:"amount",placeholder:"Amount",step:"0.01",value:a.amount})]}),Object(c.jsx)("button",{className:"ui button",type:"submit",children:"Add Transaction"})]})})};var b=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(""),d=Object(l.a)(i,2),b=d[0],O=d[1],m=Object(a.useState)({id:0,date:"",description:"",category:"",amount:""}),x=Object(l.a)(m,2),p=x[0],f=x[1],g=function(){return fetch("http://localhost:8001/transactions?q="+b).then((function(e){return e.json()})).then((function(e){r(e)})).catch((function(e){return console.log(e+" Run server first")}))};return Object(a.useEffect)(g,[b]),Object(c.jsxs)("div",{children:[Object(c.jsx)(u,{handleSearch:function(e){O((function(t){return e.target.value}))}}),Object(c.jsx)(h,{handleChange:function(e){var t=e.target,n=t.name,c=t.value;f((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(s.a)({},n,c))}))},handleSubmit:function(e){e.preventDefault(),fetch("http://localhost:8001/transactions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)}).then((function(){g()})).catch((function(e){return console.log(e+" Run server first")}))},transactionForm:p}),Object(c.jsx)(j,{transactionsObj:n})]})};var O=function(){return Object(c.jsxs)("div",{className:"ui raised segment",children:[Object(c.jsx)("div",{className:"ui segment violet inverted",children:Object(c.jsx)("h2",{children:"The Royal Bank of Flatiron"})}),Object(c.jsx)(b,{})]})};n(12),n(13);i.a.render(Object(c.jsx)(O,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.0ec5f2e4.chunk.js.map