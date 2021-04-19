(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{804:function(t,a,s){"use strict";s.r(a);var e=s(9),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("Most of kestra ressource need to be described as Yaml like "),s("RouterLink",{attrs:{to:"/docs/terraform/resources/flow.html"}},[t._v("kestra_flow")]),t._v(" & "),s("RouterLink",{attrs:{to:"/docs/terraform/resources/template.html"}},[t._v("kestra_template")]),t._v(".")],1),t._v(" "),s("p",[t._v("We have chosen to use a full yaml in terraform definition since the structure is recursive and dynamic, so it can't be described using terraform internal schema.")]),t._v(" "),s("p",[t._v("There is in terraform a lot of function that allow to work properly with this yaml content :")]),t._v(" "),s("h2",{attrs:{id:"simple-multiline-string-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#simple-multiline-string-example"}},[t._v("#")]),t._v(" Simple multiline string example")]),t._v(" "),s("p",[t._v("You can use simple terraform multiline string with "),s("a",{attrs:{href:"https://www.terraform.io/docs/language/expressions/strings.html#heredoc-strings",target:"_blank",rel:"noopener noreferrer"}},[t._v("Heredoc String"),s("OutboundLink")],1),t._v(" :")]),t._v(" "),s("div",{staticClass:"language-hcl extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hcl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("resource "),s("span",{pre:!0,attrs:{class:"token type variable"}},[t._v('"kestra_flow"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"example"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("namespace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"io.kestra.mynamespace"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flow_id")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my-flow"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token heredoc string"}},[t._v("<<EOT\ninputs:\n  - name: my-value\n    type: STRING\n    required: true\n\ntasks:\n  - id: t2\n    type: io.kestra.core.tasks.debugs.Echo\n    format: first {{task.id}}\n    level: TRACE\nEOT")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"external-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#external-files"}},[t._v("#")]),t._v(" External files")]),t._v(" "),s("p",[t._v("Better will be to use a "),s("a",{attrs:{href:"https://www.terraform.io/docs/language/functions/file.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("file function"),s("OutboundLink")],1),t._v(". Just create a file "),s("code",[t._v(".yml")]),t._v(" near your terraform "),s("code",[t._v(".tf")]),t._v(" and include the whole file in your resource:")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("inputs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" my"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("value\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" STRING\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("required")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tasks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" t2\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.core.tasks.debugs.Echo\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" first "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("task.id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("level")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TRACE\nEOT\n")])])]),s("div",{staticClass:"language-hcl extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hcl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("resource "),s("span",{pre:!0,attrs:{class:"token type variable"}},[t._v('"kestra_flow"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"example"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("namespace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"io.kestra.mynamespace"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flow_id")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my-flow"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" file("),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my-flow.yml"')]),t._v(")\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"external-files-with-template"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#external-files-with-template"}},[t._v("#")]),t._v(" External files with template")]),t._v(" "),s("p",[t._v("Even better will be to use a "),s("a",{attrs:{href:"https://www.terraform.io/docs/language/functions/templatefile.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("templatefile function"),s("OutboundLink")],1),t._v(" that will allow more complex flows to be more readable. You can include some external external and this one can also include other file.")]),t._v(" "),s("p",[t._v("!> Take care about the indent functon that need to fit your actual flow ident. Terraform don't know anything about your yaml (it's a simple string), so you need to handle properly the indent count by yourself using the "),s("a",{attrs:{href:"https://www.terraform.io/docs/language/functions/indent.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("indent function"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"dealing-with-included-yaml-string"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dealing-with-included-yaml-string"}},[t._v("#")]),t._v(" Dealing with included yaml string")]),t._v(" "),s("p",[t._v("Imagine a flow that will query an external database. Embedding the full query can lead to very long flow definition. In the case you can use "),s("code",[t._v("templatefile")]),t._v(" to allow inclusion of an external files from the yaml.")]),t._v(" "),s("p",[t._v("Create a sql file:")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])]),s("p",[t._v("Create the yaml file for the flow:")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tasks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"query"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"io.kestra.plugin.jdbc.mysql.Query"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" jdbc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("postgresql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//127.0.0.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("56982/\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" postgres\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pg_passwd\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sql")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v('\n      ${indent(6, file("my-query.sql"))}')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fetchOne")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])])]),s("p",[t._v("And finaly create the resource invoking the "),s("code",[t._v("templatefile")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language-hcl extra-class"},[s("pre",{pre:!0,attrs:{class:"language-hcl"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("resource "),s("span",{pre:!0,attrs:{class:"token type variable"}},[t._v('"kestra_flow"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"example"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("namespace")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"io.kestra.mynamespace"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("flow_id")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my-flow"')]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" templatefile("),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my-flow.yaml"')]),t._v(", "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(")\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("The "),s("code",[t._v("tf")]),t._v(" files will required the "),s("code",[t._v("yaml")]),t._v(" files that will require the "),s("code",[t._v("sql")]),t._v(" files and the final flow will be:")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tasks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"query"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"io.kestra.plugin.jdbc.mysql.Query"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("url")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" jdbc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("postgresql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//127.0.0.1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("56982/\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" postgres\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pg_passwd\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("sql")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n      SELECT * \n      FROM ....")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fetchOne")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n")])])]),s("h3",{attrs:{id:"include-full-yaml-part"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#include-full-yaml-part"}},[t._v("#")]),t._v(" Include full yaml part")]),t._v(" "),s("p",[t._v("By the same way, you can also include a full yaml specs inside anothers one.")]),t._v(" "),s("p",[t._v("Create 2 yaml files:")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" t1\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.core.tasks.debugs.Echo\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" first "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("task.id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("level")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TRACE\n")])])]),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" t2\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.core.tasks.debugs.Echo\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" second "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("task.id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("level")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TRACE\n")])])]),s("p",[t._v("Create the yaml file for the flow:")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tasks")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("indent(4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(' file("t1.yml"))'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" $"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("indent(4"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(' file("t2.yml"))'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);