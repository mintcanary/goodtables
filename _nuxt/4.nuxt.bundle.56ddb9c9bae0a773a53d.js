webpackJsonp([4],{168:function(t,s,e){var a=e(10)(e(200),e(225),null,null);t.exports=a.exports},173:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(176),i=e.n(a);s.default={props:["title","integration","jobnumber","jobid","status","time","source","job"],components:{SourceItemContent:i.a}}},174:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={props:["title","integration","jobnumber","jobid","status","time","source","job"]}},175:function(t,s,e){var a=e(10)(e(173),e(177),null,null);t.exports=a.exports},176:function(t,s,e){var a=e(10)(e(174),e(178),null,null);t.exports=a.exports},177:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"source-item"},["valid"===t.status?e("div",{staticClass:"panel panel-success",class:[t.source,t.job]},[e("SourceItemContent",{attrs:{title:t.title,integration:t.integration,jobnumber:t.jobnumber,jobid:t.jobid,status:"valid",time:t.time,source:t.source,job:t.job}})],1):"invalid"===t.status?e("div",{staticClass:"panel panel-danger",class:[t.source,t.job]},[e("SourceItemContent",{attrs:{title:t.title,integration:t.integration,jobnumber:t.jobnumber,jobid:t.jobid,status:"invalid",time:t.time,source:t.source,job:t.job}})],1):e("div",{staticClass:"panel panel-warning",class:[t.source,t.job]},[e("SourceItemContent",{attrs:{title:t.title,integration:t.integration,jobnumber:t.jobnumber,jobid:t.jobid,status:"...",time:t.time,source:t.source,job:t.job}})],1)])},staticRenderFns:[]}},178:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{class:t.integration},[e("router-link",{staticClass:"source",class:{active:t.source},attrs:{to:"/jobs/report"}},[e("span",{staticClass:"status"},[t._v(t._s(t.status)+" ")]),"valid"===t.status?e("span",{staticClass:"label label-success"},[e("span",{staticClass:"icon-checkmark"},[e("i",[t._v("Valid")])])]):"invalid"===t.status?e("span",{staticClass:"label label-danger"},[e("span",{staticClass:"icon-cross"},[e("i",[t._v("Invalid")])])]):t._e(),e("h3",{staticClass:"panel-title"},[t._v(t._s(t.integration)+"/"+t._s(t.title)),e("span",{staticClass:"jobnumber"},[t._v("#"+t._s(t.jobnumber))])])]),e("router-link",{staticClass:"job",class:{active:t.job},attrs:{to:"/jobs/report"}},[e("span",{staticClass:"jobcount"},[e("span",{staticClass:"jobnumber"},[t._v(" #"+t._s(t.jobnumber))]),e("span",{staticClass:"jobid"},[t._v(" ("+t._s(t.jobid)+")")])]),e("span",{staticClass:"icon-clock"}),e("span",{staticClass:"time"},[t._v(" "+t._s(t.time))])]),"github"===t.integration?e("router-link",{staticClass:"integration icon-github",attrs:{to:"/jobs/report"}}):"aws"===t.integration?e("router-link",{staticClass:"integration icon-amazon",attrs:{to:"/jobs/report"}}):t._e()],1)},staticRenderFns:[]}},200:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(175),i=e.n(a);s.default={layout:"app",components:{SourceItem:i.a},head:function(){return{title:"Goodtables Jobs"}}}},225:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"only jobs"},[e("h1",[t._v("Jobs")]),t._m(0),e("div",{staticClass:"source-list"},[e("source-item",{attrs:{title:"okfn/my-data",integration:"github",jobnumber:"77",jobid:"2928dd",status:"valid",time:"7 minutes ago"}}),e("source-item",{attrs:{title:"okfn/some-data",integration:"aws",jobnumber:"2",jobid:"2928dd",status:"valid",time:"20 minutes ago"}}),e("source-item",{attrs:{title:"okfn/test-data",integration:"github",jobnumber:"8",jobid:"2928dd",status:"invalid",time:"1 day ago"}}),e("source-item",{attrs:{title:"okfn/more-data",integration:"aws",jobnumber:"1",jobid:"2928dd",status:"invalid",time:"2 days ago"}})],1)])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"filter form-group"},[e("label",{staticClass:"sr-only",attrs:{for:"keyword"}},[t._v("Filter by keyword")]),e("div",{staticClass:"input-group"},[e("input",{staticClass:"form-control input-lg",attrs:{type:"text",id:"keyword",placeholder:"Filter by keyword"}}),e("div",{staticClass:"input-group-addon"},[e("button",[e("span",{staticClass:"icon-search"},[e("i",[t._v("Search")])])])])])])}]}}});