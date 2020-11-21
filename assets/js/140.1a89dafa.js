(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{627:function(t,a,s){"use strict";s.r(a);var e=s(18),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mailexecution"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mailexecution"}},[t._v("#")]),t._v(" MailExecution")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.kestra.task.notifications.mail.MailExecution"')]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("Task to send a mail with execution information")])]),t._v(" "),s("p",[t._v("Main execution information are provided in the sent mail (id, namespace, flow, state, duration, start date ...).")]),t._v(" "),s("h2",{attrs:{id:"examples"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),s("blockquote",[s("p",[t._v("Send a mail notification on failed flow")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mail\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" org.kestra.tests\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("listeners")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("conditions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" org.kestra.core.models.conditions.types.ExecutionStatusCondition\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("in")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" FAILED\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tasks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mail\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" org.kestra.task.notifications.mail.MailExecution\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("to")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" to@mail.com\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("from")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" from@mail.com\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("subject")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" This is the subject\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nohost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("mail.site\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("465")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" user\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pass\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sessionTimeout")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("transportStrategy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" SMTPS\n\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tasks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ok\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" org.kestra.core.tasks.debugs.Return\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{task.id}} > {{taskrun.startDate}}"')]),t._v("\n")])])]),s("h2",{attrs:{id:"inputs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[t._v("#")]),t._v(" Inputs")]),t._v(" "),s("h3",{attrs:{id:"cc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cc"}},[t._v("#")]),t._v(" "),s("code",[t._v("cc")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("One or more 'Cc' (carbon copy) optional recipient email address. Use semicolon as delimiter to provide several addresses")])]),t._v(" "),s("p",[t._v("Note that each email address must be an RFC2822 format compliant address.")]),t._v(" "),s("h3",{attrs:{id:"from"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#from"}},[t._v("#")]),t._v(" "),s("code",[t._v("from")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("The address of the sender of this email")])]),t._v(" "),s("h3",{attrs:{id:"host"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#host"}},[t._v("#")]),t._v(" "),s("code",[t._v("host")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("The mail server host")])]),t._v(" "),s("h3",{attrs:{id:"htmltextcontent"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#htmltextcontent"}},[t._v("#")]),t._v(" "),s("code",[t._v("htmlTextContent")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("The optional email message body in HTML text")])]),t._v(" "),s("p",[t._v("Both text and HTML can be provided, which will be offered to the email client as alternative content. Email clients that support it, will favor HTML over plain text and ignore the text body completely")]),t._v(" "),s("h3",{attrs:{id:"password"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#password"}},[t._v("#")]),t._v(" "),s("code",[t._v("password")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("The mail server password")])]),t._v(" "),s("h3",{attrs:{id:"port"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#port"}},[t._v("#")]),t._v(" "),s("code",[t._v("port")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("integer")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("The mail server port")])]),t._v(" "),s("h3",{attrs:{id:"sessiontimeout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sessiontimeout"}},[t._v("#")]),t._v(" "),s("code",[t._v("sessionTimeout")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("integer")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),s("li",[s("strong",[t._v("Default:")]),t._v(" "),s("code",[t._v("1000")])])]),t._v(" "),s("blockquote",[s("p",[t._v("Controls the timeout to use when sending emails")])]),t._v(" "),s("p",[t._v("It affects socket connect-, read- and write timeouts")]),t._v(" "),s("h3",{attrs:{id:"subject"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#subject"}},[t._v("#")]),t._v(" "),s("code",[t._v("subject")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("The optional subject of this email")])]),t._v(" "),s("h3",{attrs:{id:"templaterendermap"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#templaterendermap"}},[t._v("#")]),t._v(" "),s("code",[t._v("templateRenderMap")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("object")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("Render map to use for template")])]),t._v(" "),s("h3",{attrs:{id:"templateuri"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#templateuri"}},[t._v("#")]),t._v(" "),s("code",[t._v("templateUri")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("Template to use")])]),t._v(" "),s("h3",{attrs:{id:"to"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#to"}},[t._v("#")]),t._v(" "),s("code",[t._v("to")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("One or more recipient email address. Use semicolon as delimiter to provide several addresses")])]),t._v(" "),s("p",[t._v("Note that each email address must be an RFC2822 format compliant address")]),t._v(" "),s("h3",{attrs:{id:"transportstrategy"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transportstrategy"}},[t._v("#")]),t._v(" "),s("code",[t._v("transportStrategy")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),s("li",[s("strong",[t._v("Default:")]),t._v(" "),s("code",[t._v("SMTPS")])])]),t._v(" "),s("blockquote",[s("p",[t._v("The optional transport strategy")])]),t._v(" "),s("p",[t._v("Will default to SMTPS if left empty.")]),t._v(" "),s("h3",{attrs:{id:"username"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#username"}},[t._v("#")]),t._v(" "),s("code",[t._v("username")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Type:")]),t._v(" "),s("mark",[t._v("string")])]),t._v(" "),s("li",[s("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),s("li",[s("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),s("blockquote",[s("p",[t._v("The mail server username")])])])}),[],!1,null,null,null);a.default=r.exports}}]);