(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{464:function(t,s,a){"use strict";a.r(s);var e=a(25),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"trigger"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#trigger"}},[t._v("#")]),t._v(" Trigger")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.kestra.task.fs.sftp.Trigger"')]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("Wait for files on Google cloud storage")])]),t._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("blockquote",[a("p",[t._v("Wait for a list of file on a GCS bucket and iterate through the files")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gcs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("listen\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" org.kestra.tests\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tasks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" each\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" org.kestra.core.tasks.flows.EachSequential\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tasks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" return\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" org.kestra.core.tasks.debugs.Return\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{taskrun.value}}"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"{{ jq trigger '.files[].uri' true }}\"")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("triggers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" watch\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" org.kestra.task.fs.sftp.Trigger\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" localhost\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6622")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" foo\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pass\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/in/"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("interval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" PT10S\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("action")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MOVE\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("moveDirectory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/archive/"')]),t._v("\n")])])]),a("h2",{attrs:{id:"inputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[t._v("#")]),t._v(" Inputs")]),t._v(" "),a("h3",{attrs:{id:"action"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#action"}},[t._v("#")]),t._v(" "),a("code",[t._v("action")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("Action")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Possible Values:")]),t._v(" "),a("ul",[a("li",[t._v("MOVE")]),t._v(" "),a("li",[t._v("DELETE")])])])]),t._v(" "),a("blockquote",[a("p",[t._v("The action to do on find files")])]),t._v(" "),a("h3",{attrs:{id:"from"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#from"}},[t._v("#")]),t._v(" "),a("code",[t._v("from")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("String")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ✔️")])]),t._v(" "),a("blockquote",[a("p",[t._v("The directory to list")])]),t._v(" "),a("h3",{attrs:{id:"host"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#host"}},[t._v("#")]),t._v(" "),a("code",[t._v("host")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("String")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("Hostname of the remote server")])]),t._v(" "),a("h3",{attrs:{id:"id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#id"}},[t._v("#")]),t._v(" "),a("code",[t._v("id")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("String")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ✔️")])]),t._v(" "),a("h3",{attrs:{id:"interval"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interval"}},[t._v("#")]),t._v(" "),a("code",[t._v("interval")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("java.time.Duration")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The interval between test of triggers")])]),t._v(" "),a("h3",{attrs:{id:"keyfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyfile"}},[t._v("#")]),t._v(" "),a("code",[t._v("keyfile")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("String")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("Private keyfile to login on the source server with ssh")])]),t._v(" "),a("p",[t._v("Must be the ssh key content, not a path")]),t._v(" "),a("h3",{attrs:{id:"movedirectory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#movedirectory"}},[t._v("#")]),t._v(" "),a("code",[t._v("moveDirectory")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("String")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The destination directory in case off "),a("code",[t._v("MOVE")])])]),t._v(" "),a("h3",{attrs:{id:"passphrase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#passphrase"}},[t._v("#")]),t._v(" "),a("code",[t._v("passphrase")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("String")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("Passphrase of the ssh key")])]),t._v(" "),a("h3",{attrs:{id:"password"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#password"}},[t._v("#")]),t._v(" "),a("code",[t._v("password")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("String")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("Password on the remote server")])]),t._v(" "),a("h3",{attrs:{id:"port"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#port"}},[t._v("#")]),t._v(" "),a("code",[t._v("port")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("String")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("Port of the remote server")])]),t._v(" "),a("h3",{attrs:{id:"regexp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#regexp"}},[t._v("#")]),t._v(" "),a("code",[t._v("regExp")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("String")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("A regexp to filter on full path")])]),t._v(" "),a("h3",{attrs:{id:"type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type"}},[t._v("#")]),t._v(" "),a("code",[t._v("type")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("String")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ✔️")])]),t._v(" "),a("h3",{attrs:{id:"username"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#username"}},[t._v("#")]),t._v(" "),a("code",[t._v("username")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("String")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("Username on the remote server")])])])}),[],!1,null,null,null);s.default=r.exports}}]);