(window.webpackJsonp=window.webpackJsonp||[]).push([[205],{1037:function(t,e,a){"use strict";a.r(e);var s=a(9),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",[t._v("\n     Schedule\n")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"io.kestra.core.models.triggers.types.Schedule"')]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("Schedule a flow based on cron date")])]),t._v(" "),a("p",[t._v("Kestra is able to trigger flow based on Schedule (aka the time). If you need to wait another system to be ready and can't use any event mechanism, you can schedule 1 or more time for the current flow.")]),t._v(" "),a("p",[t._v("The scheduler will keep the last execution date for this schedule based on the id. This allow you to change the cron expression without restart all the past execution (if backfill exists)"),a("br"),t._v("\nIf you changed the current id, the scheduler will think it's a new schedule and will start with a fresh date and replay the all backfill date (if backfill exists)")]),t._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("blockquote",[a("p",[t._v("A schedule with a backfill")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("triggers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" schedule\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" io.kestra.core.models.triggers.types.Schedule\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cron")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"*/15 * * * *"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("backfill")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("start")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token datetime number"}},[t._v("2020-06-25T14:00:00Z")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("A schedule that run only the first monday on every month at 11 AM")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("triggers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" schedule\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cron")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0 11 * * 1"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("scheduleConditions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" monday\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(' "'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" trigger.date "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v('"        dayOfWeek'),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MONDAY"')]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dayInMonth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FIRST"')]),t._v("\n")])])]),a("h2",{attrs:{id:"properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),a("h3",{attrs:{id:"backfill"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backfill"}},[t._v("#")]),t._v(" "),a("code",[t._v("backfill")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[a("a",{attrs:{href:"#schedulebackfill"}},[t._v("ScheduleBackfill")])])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("Backfill options in order to fill missing previous past date")])]),t._v(" "),a("p",[t._v("Kestra will handle optionnaly a backfill. The concept of backfill is the replay the missing schedule because we create the flow later.")]),t._v(" "),a("p",[t._v("Backfill will do all schedules between define date & current date and will start after the normal schedule.")]),t._v(" "),a("h3",{attrs:{id:"cron"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cron"}},[t._v("#")]),t._v(" "),a("code",[t._v("cron")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ✔️")])]),t._v(" "),a("blockquote",[a("p",[t._v("the cron expression you need tyo")])]),t._v(" "),a("p",[t._v("a standard "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Cron",target:"_blank",rel:"noopener noreferrer"}},[t._v("unix cron expression"),a("OutboundLink")],1),t._v(" without second.")]),t._v(" "),a("h3",{attrs:{id:"inputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[t._v("#")]),t._v(" "),a("code",[t._v("inputs")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("object")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The input to pass to the triggered flow")])]),t._v(" "),a("h3",{attrs:{id:"interval"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interval"}},[t._v("#")]),t._v(" "),a("code",[t._v("interval")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Default:")]),t._v(" "),a("code",[t._v("PT1S")])]),t._v(" "),a("li",[a("strong",[t._v("Format:")]),t._v(" "),a("code",[t._v("duration")])])]),t._v(" "),a("blockquote",[a("p",[t._v("Interval between polling")])]),t._v(" "),a("p",[t._v("The interval between 2 different test of schedule, this can avoid to overload the remote system with too many call. For most of trigger that depend on external system, a minimal interval must be at least PT30S.")]),t._v(" "),a("h3",{attrs:{id:"scheduleconditions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scheduleconditions"}},[t._v("#")]),t._v(" "),a("code",[t._v("scheduleConditions")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("array")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[a("a",{attrs:{href:"#schedulecondition-2"}},[t._v("ScheduleCondition-2")])])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("List of schedule Conditions in order to limit schedule date.")])]),t._v(" "),a("h2",{attrs:{id:"outputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[t._v("#")]),t._v(" Outputs")]),t._v(" "),a("h3",{attrs:{id:"date"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#date"}},[t._v("#")]),t._v(" "),a("code",[t._v("date")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])])]),t._v(" "),a("blockquote",[a("p",[t._v("The date of current schedule")])]),t._v(" "),a("h3",{attrs:{id:"next"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next"}},[t._v("#")]),t._v(" "),a("code",[t._v("next")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])])]),t._v(" "),a("blockquote",[a("p",[t._v("The date of next schedule")])]),t._v(" "),a("h3",{attrs:{id:"previous"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#previous"}},[t._v("#")]),t._v(" "),a("code",[t._v("previous")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])])]),t._v(" "),a("blockquote",[a("p",[t._v("The date of previous schedule")])]),t._v(" "),a("h2",{attrs:{id:"definitions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#definitions"}},[t._v("#")]),t._v(" Definitions")]),t._v(" "),a("h3",{attrs:{id:"schedulebackfill"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#schedulebackfill"}},[t._v("#")]),t._v(" "),a("code",[t._v("ScheduleBackfill")])]),t._v(" "),a("h4",{attrs:{id:"start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start"}},[t._v("#")]),t._v(" "),a("code",[t._v("start")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The first start date")])])])}),[],!1,null,null,null);e.default=r.exports}}]);