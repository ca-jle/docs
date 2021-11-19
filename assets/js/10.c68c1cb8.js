(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{436:function(i,s,e){},731:function(i,s,e){"use strict";e(436)},744:function(i,s,e){"use strict";e.r(s);e(66),e(31),e(20),e(145),e(147),e(148),e(36),e(21),e(235),e(96);var n={components:{},computed:{plugins:function(){var i=[{name:"Bash",icon:"mdi mdi-bash",href:"core/tasks/scripts/io.kestra.core.tasks.scripts.Bash"},{name:"Python",icon:"mdi mdi-language-python",href:"core/tasks/scripts/io.kestra.core.tasks.scripts.Python"},{name:"Node",icon:"mdi mdi-nodejs",href:"core/tasks/scripts/io.kestra.core.tasks.scripts.Node"},{name:"Amazon S3",icon:"csicon csicon-s3",href:"plugin-aws",section:"#s3"},{name:"Http",icon:"mdi mdi-api",href:"plugin-fs",section:"http"},{name:"SFTP",icon:"mdi mdi-network",href:"plugin-fs",section:"sftp"},{name:"Google Cloud Storage",icon:"csicon csicon-gcs",href:"plugin-gcp",section:"gcs"},{name:"Big Query",icon:"csicon csicon-bigquery",href:"plugin-gcp",section:"bigquery"},{name:"Google Sheets",icon:"csicon csicon-sheets",href:"plugin-googleworkspace",section:"sheets"},{name:"Google Drive",icon:"csicon csicon-drive",href:"plugin-googleworkspace",section:"drive"},{name:"Open PGP",icon:"mdi mdi-lock",href:"plugin-crypto",section:"openpgp"},{name:"ClickHouse",icon:"csicon csicon-clickhouse",href:"plugin-jdbc-clickhouse"},{name:"MySQL",icon:"csicon csicon-mysql",href:"plugin-jdbc-mysql"},{name:"Oracle",icon:"csicon csicon-oracle",href:"plugin-jdbc-oracle"},{name:"Postgres",icon:"csicon csicon-postgres",href:"plugin-jdbc-postgres"},{name:"Vertica",icon:"csicon csicon-vertica",href:"plugin-jdbc-vertica"},{name:"Kubernetes",icon:"mdi mdi-kubernetes",href:"plugin-kubernetes"},{name:"Slack",icon:"csicon csicon-slack",href:"plugin-notifications",section:"slack"},{name:"Singer",icon:"csicon csicon-singer",href:"plugin-singer"},{name:"Email",icon:"mdi mdi-email",href:"plugin-notifications",section:"mail"},{name:"Avro",icon:"csicon csicon-avro",href:"plugin-serdes",section:"avro"},{name:"JSON",icon:"mdi mdi-code-json",href:"plugin-serdes",section:"json"},{name:"CSV",icon:"mdi mdi-file-delimited",href:"plugin-serdes",section:"csv"},{name:"Nashorn",icon:"csicon csicon-nashorn",href:"plugin-scripts-nashorn"},{name:"Groovy",icon:"csicon csicon-groovy",href:"plugin-scripts-groovy"},{name:"Jython",icon:"csicon csicon-jython",href:"plugin-scripts-jython"},{name:"XML",icon:"mdi mdi-file-code",href:"plugin-serdes",section:"xml"}];return i=i.concat(this.$site.pages.filter((function(i){return i.path.startsWith("/plugins/plugin-singer/tasks/")})).filter((function(i){return!(i.path.includes("Postgres")||i.path.includes("Mysql")||i.path.includes("BigQuery")||i.path.includes("Csv")||i.path.includes("Json"))})).map((function(i){return{name:i.title.replace("Pipelinewise","").replace("Meltano",""),icon:"csicon",image:i.frontmatter&&i.frontmatter.icon?i.frontmatter.icon:null,href:i.path.replace("/plugins/","")}}))),i.sort((function(i,s){return i.name>s.name?1:-1}))}}},t=(e(731),e(2)),c=Object(t.a)(n,(function(){var i=this,s=i.$createElement,e=i._self._c||s;return e("div",[e("section",{staticClass:"section"},[e("div",{staticClass:"container"},[i._m(0),i._v(" "),e("div",{staticClass:"row"},[i._l(i.plugins,(function(s){return e("div",{staticClass:"col-lg-4 col-md-6 mt-4 pt-2"},[e("a",{staticClass:"media key-feature align-items-center p-3 rounded-md shadow",attrs:{href:"plugins/"+s.href+(s.section?"#"+s.section:"")}},[e("div",{staticClass:"icon text-center rounded-circle mr-3 text-primary"},[s.icon?e("i",{class:s.icon},[s.image?e("img",{attrs:{src:"data:image/svg+xml;base64,"+s.image,alt:s.name}}):i._e()]):i._e()]),i._v(" "),e("div",{staticClass:"media-body"},[e("h4",{staticClass:"title mb-0"},[i._v(i._s(s.name))])])])])})),i._v(" "),i._m(1)],2)])])])}),[function(){var i=this.$createElement,s=this._self._c||i;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"section-title text-center pb-2"},[s("h4",{staticClass:"title mb-4"},[this._v("Discover plugins or build yours !")]),this._v(" "),s("p",{staticClass:"text-muted para-desc mb-0 mx-auto"},[s("span",{staticClass:"text-primary mb-0 font-weight-bold"},[this._v("Kestra")]),this._v(" is build upon a plugins\n                            systems.\n                            Find your plugin to interact with your provider or develop easily yours.\n\n                            Here is the official plugins available :\n                        ")])])])])},function(){var i=this.$createElement,s=this._self._c||i;return s("div",{staticClass:"col-12 mt-4 pt-2 text-center"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-md-6 text-md-right"},[s("a",{staticClass:"btn btn-primary",attrs:{href:"/plugins/"}},[s("i",{staticClass:"mdi mdi-text-box-multiple"}),this._v("\n                                Plugins documentation\n                                "),s("i",{staticClass:"mdi mdi-arrow-right"})])]),this._v(" "),s("div",{staticClass:"col-12 col-md-6 text-md-left mt-4 mt-md-0"},[s("a",{staticClass:"btn btn-primary",attrs:{href:"/docs/plugin-developer-guide/"}},[s("i",{staticClass:"mdi mdi-language-java"}),this._v("\n                                Create a plugin\n                                "),s("i",{staticClass:"mdi mdi-arrow-right"})])])])])}],!1,null,null,null);s.default=c.exports}}]);