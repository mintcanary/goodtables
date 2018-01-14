webpackJsonp([10],{166:function(t,a,e){var s=e(10)(e(198),e(236),null,null);t.exports=s.exports},198:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(212),o=e.n(s);a.default={layout:"app-not-logged-in",components:{DemoForm:o.a},head:function(){return{title:"Goodtables One-time"}}}},212:function(t,a,e){var s=e(10)(null,e(229),null,null);t.exports=s.exports},229:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"form"}},[e("form",[e("fieldset",{staticClass:"source"},[e("legend",[t._v("Data source "),e("small",[t._v("(required)")])]),e("div",{staticClass:"inline-items"},[e("label",{attrs:{for:"source"}},[t._v("Source")]),e("div",{staticClass:"radio-inline"},[e("input",{staticClass:"data-field-url",attrs:{type:"radio",name:"data-field",id:"data-field-1",value:"option1",checked:""}}),e("label",{attrs:{for:"data-field-1"}},[t._v("\n            URL\n          ")])]),e("span",[t._v("\n          or\n        ")]),e("div",{staticClass:"radio-inline"},[e("input",{staticClass:"data-field-file",attrs:{type:"radio",name:"data-field",id:"data-field-2",value:"option2"}}),e("label",{attrs:{for:"data-field-2"}},[t._v("\n            File\n          ")])])]),e("input",{staticClass:"form-control input-lg",attrs:{name:"source",type:"text",placeholder:"http://data.source/url"}}),e("input",{staticClass:"form-control input-lg hidden",attrs:{name:"source",type:"file"}}),e("small",[t._v("Add a data table to validate.")])]),e("fieldset",{staticClass:"optional"},[e("legend",[t._v("Additional fields "),e("small",[t._v("(optional)")])]),e("div",{staticClass:"schema"},[e("div",{staticClass:"row"},[e("div",{staticClass:"form-group col-md-8"},[e("div",{staticClass:"inline-items"},[e("label",{attrs:{for:"schema"}},[t._v("Schema")]),e("div",{staticClass:"radio-inline"},[e("input",{staticClass:"schema-field-url",attrs:{type:"radio",name:"schema-field",id:"schema-field-1",value:"option1",checked:""}}),e("label",{attrs:{for:"schema-field-1"}},[t._v("\n                  URL\n                ")])]),e("span",[t._v("\n                or\n              ")]),e("div",{staticClass:"radio-inline"},[e("input",{staticClass:"schema-field-file",attrs:{type:"radio",name:"schema-field",id:"schema-field-2",value:"option2"}}),e("label",{attrs:{for:"schema-field-2"}},[t._v("\n                  File\n                ")])])]),e("input",{staticClass:"form-control",attrs:{type:"text",name:"schema",placeholder:"http://table.schema/url"}}),e("input",{staticClass:"form-control hidden",attrs:{type:"file",name:"schema"}}),e("small",[t._v("\n              Select to validate this data against a Table Schema ("),e("a",{attrs:{href:"http://specs.frictionlessdata.io/table-schema/",target:"_blank",rel:"noopener noreferrer"}},[t._v("What is it?")]),t._v(").\n            ")])]),e("div",{staticClass:"form-group col-md-2"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"format"}},[t._v("Format")]),e("select",{staticClass:"form-control",attrs:{name:"format"}},[e("option",{attrs:{value:""}},[t._v("Auto")]),e("option",{attrs:{value:"csv"}},[t._v("CSV")]),e("option",{attrs:{value:"gsheet"}},[t._v("Google Sheet")]),e("option",{attrs:{value:"json"}},[t._v("JSON")]),e("option",{attrs:{value:"ndjson"}},[t._v("NDJSON")]),e("option",{attrs:{value:"ods"}},[t._v("ODS")]),e("option",{attrs:{value:"tsv"}},[t._v("TSV")]),e("option",{attrs:{value:"xls"}},[t._v("XLS")]),e("option",{attrs:{value:"xlsx"}},[t._v("XLSX")])])])]),e("div",{staticClass:"col-md-2"},[e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"encoding"}},[t._v("Encoding")]),e("select",{staticClass:"form-control",attrs:{name:"encoding"}},[e("option",{attrs:{value:""}},[t._v("Auto")]),e("option",{attrs:{value:"utf-8"}},[t._v("UTF-8")]),e("option",{attrs:{value:"ascii"}},[t._v("ASCII")]),e("option",{attrs:{value:"iso-8859-2"}},[t._v("ISO-8859-2")])])])])])]),e("div",{staticClass:"row-flags"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"checkbox"},[e("label",{attrs:{for:"errorLimit"}},[e("input",{attrs:{name:"errorLimit",type:"checkbox"}}),t._v("Stop on first error\n              ")])]),e("small",[t._v("Indicate whether validation should stop on the first error, or attempt to collect all errors.")])]),e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"checkbox"},[e("label",{attrs:{for:"ignoreBlankRows"}},[e("input",{attrs:{name:"ignoreBlankRows",type:"checkbox"}}),t._v("Ignore blank rows\n              ")])]),e("small",[t._v("Indicate whether blank rows should be considered as errors, or simply ignored.")])]),e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"checkbox"},[e("label",{attrs:{for:"ignoreDuplicateRows"}},[e("input",{attrs:{name:"ignoreDuplicateRows",type:"checkbox"}}),t._v("Ignore duplicate rows\n              ")])]),e("small",[t._v("Indicate whether duplicate rows should be considered as errors, or simply ignored.")])])])])]),e("button",{staticClass:"btn btn-success btn-lg"},[t._v("Validate")])])])}]}},236:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"primary-secondary"},[e("h1",[t._v("One-time validation")]),e("div",[e("section",{staticClass:"main"},[e("DemoForm")],1),t._m(0)])])])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"aside"},[e("div",[e("h3",{staticClass:"aside-title"},[t._v("How to use this page")]),e("p",[t._v("There are several ways to use goodtables.io. On this page you can try goodtables.io out by manually adding data sources you would like to validate.")]),e("h4",[t._v("Other ways to use goodtables.io")]),e("p",[t._v("\n            Create a user account to configure goodtables.io for "),e("a",{attrs:{href:"https://goodtables.io"}},[t._v("goodtables.io")]),t._v(" continuous data validation from GitHub or Amazon S3.\n          ")]),e("p",[t._v("\n            Developers can also look at the open source "),e("a",{attrs:{href:"https://github.com/frictionlessdata/goodtables-py",target:"_blank"}},[t._v("python library that provides all the data validation logic")]),t._v(", or the "),e("a",{attrs:{href:"https://github.com/frictionlessdata/goodtables-js",target:"_blank"}},[t._v("goodtables.io javascript client")]),t._v(" for use in 3rd party applications.\n          ")])])])}]}}});