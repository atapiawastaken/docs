(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{430:function(t,e,a){"use strict";a.r(e);var s=a(18),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#load"}},[t._v("#")]),t._v(" Load")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.kestra.task.gcp.bigquery.Load"')]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("Load data from local file to BigQuery")])]),t._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("blockquote",[a("p",[t._v("Load an csv file from an input file")])]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"load"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.kestra.task.gcp.bigquery.Load"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("from")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{ inputs.file }}"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("destinationTable")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"my_project.my_dataset.my_table"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("format")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" CSV\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("csvOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fieldDelimiter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('";"')]),t._v("\n")])])]),a("h2",{attrs:{id:"inputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[t._v("#")]),t._v(" Inputs")]),t._v(" "),a("h3",{attrs:{id:"autodetect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#autodetect"}},[t._v("#")]),t._v(" "),a("code",[t._v("autodetect")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("boolean")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("[Experimental] Automatic inference of the options and schema for CSV and JSON sources")])]),t._v(" "),a("h3",{attrs:{id:"avrooptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#avrooptions"}},[t._v("#")]),t._v(" "),a("code",[t._v("avroOptions")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("object")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("Avro parsing options")])]),t._v(" "),a("h3",{attrs:{id:"avrooptions-useavrologicaltypes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#avrooptions-useavrologicaltypes"}},[t._v("#")]),t._v(" "),a("code",[t._v("avroOptions.useAvroLogicalTypes")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("boolean")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("If Format option is set to AVRO, you can interpret logical types into their corresponding"),a("br"),t._v("\ntypes (such as TIMESTAMP) instead of only using their raw types (such as INTEGER)")])]),t._v(" "),a("p",[t._v("The value may be null.")]),t._v(" "),a("h3",{attrs:{id:"clusteringfields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clusteringfields"}},[t._v("#")]),t._v(" "),a("code",[t._v("clusteringFields")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("array")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The clustering specification for the destination table")])]),t._v(" "),a("h3",{attrs:{id:"createdisposition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#createdisposition"}},[t._v("#")]),t._v(" "),a("code",[t._v("createDisposition")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("Whether the job is allowed to create tables")])]),t._v(" "),a("h3",{attrs:{id:"csvoptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csvoptions"}},[t._v("#")]),t._v(" "),a("code",[t._v("csvOptions")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("object")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("Csv parsing options")])]),t._v(" "),a("h3",{attrs:{id:"csvoptions-allowjaggedrows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csvoptions-allowjaggedrows"}},[t._v("#")]),t._v(" "),a("code",[t._v("csvOptions.allowJaggedRows")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("boolean")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("Whether BigQuery should accept rows that are missing trailing optional columns")])]),t._v(" "),a("p",[t._v("If true, BigQuery treats missing trailing columns as null values. If {@code false}, records"),a("br"),t._v("\nwith missing trailing columns are treated as bad records, and if there are too many bad"),a("br"),t._v("\nrecords, an invalid error is returned in the job result. By default, rows with missing"),a("br"),t._v("\ntrailing columns are considered bad records.")]),t._v(" "),a("h3",{attrs:{id:"csvoptions-allowquotednewlines"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csvoptions-allowquotednewlines"}},[t._v("#")]),t._v(" "),a("code",[t._v("csvOptions.allowQuotedNewLines")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("boolean")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("Whether BigQuery should allow quoted data sections that contain newline characters in a CSV file")])]),t._v(" "),a("p",[t._v("By default quoted newline are not allowed.")]),t._v(" "),a("h3",{attrs:{id:"csvoptions-encoding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csvoptions-encoding"}},[t._v("#")]),t._v(" "),a("code",[t._v("csvOptions.encoding")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The character encoding of the data")])]),t._v(" "),a("p",[t._v("The supported values are UTF-8 or ISO-8859-1. The"),a("br"),t._v("\ndefault value is UTF-8. BigQuery decodes the data after the raw, binary data has been split"),a("br"),t._v("\nusing the values set in {@link #setQuote(String)} and {@link #setFieldDelimiter(String)}.")]),t._v(" "),a("h3",{attrs:{id:"csvoptions-fielddelimiter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csvoptions-fielddelimiter"}},[t._v("#")]),t._v(" "),a("code",[t._v("csvOptions.fieldDelimiter")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The separator for fields in a CSV file")])]),t._v(" "),a("p",[t._v("BigQuery converts the string to ISO-8859-1"),a("br"),t._v("\nencoding, and then uses the first byte of the encoded string to split the data in its raw,"),a("br"),t._v('\nbinary state. BigQuery also supports the escape sequence "\\t" to specify a tab separator. The'),a("br"),t._v("\ndefault value is a comma (',').")]),t._v(" "),a("h3",{attrs:{id:"csvoptions-quote"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csvoptions-quote"}},[t._v("#")]),t._v(" "),a("code",[t._v("csvOptions.quote")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The value that is used to quote data sections in a CSV file")])]),t._v(" "),a("p",[t._v("BigQuery converts the"),a("br"),t._v("\nstring to ISO-8859-1 encoding, and then uses the first byte of the encoded string to split"),a("br"),t._v("\nthe data in its raw, binary state. The default value is a double-quote ('\"'). If your data"),a("br"),t._v("\ndoes not contain quoted sections, set the property value to an empty string. If your data"),a("br"),t._v("\ncontains quoted newline characters, you must also set {@link"),a("br"),t._v("\n#setAllowQuotedNewLines(boolean)} property to {@code true}.")]),t._v(" "),a("h3",{attrs:{id:"csvoptions-skipleadingrows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csvoptions-skipleadingrows"}},[t._v("#")]),t._v(" "),a("code",[t._v("csvOptions.skipLeadingRows")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("integer")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The number of rows at the top of a CSV file that BigQuery will skip when reading the data")])]),t._v(" "),a("p",[t._v("The default value is 0. This property is useful if you have header rows in the file"),a("br"),t._v("\nthat should be skipped.")]),t._v(" "),a("h3",{attrs:{id:"destinationtable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#destinationtable"}},[t._v("#")]),t._v(" "),a("code",[t._v("destinationTable")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The table where to put query results")])]),t._v(" "),a("p",[t._v("If not provided a new table is created.")]),t._v(" "),a("h3",{attrs:{id:"format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#format"}},[t._v("#")]),t._v(" "),a("code",[t._v("format")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The source format, and possibly some parsing options, of the external data")])]),t._v(" "),a("h3",{attrs:{id:"from"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#from"}},[t._v("#")]),t._v(" "),a("code",[t._v("from")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The fully-qualified URIs that point to source data")])]),t._v(" "),a("h3",{attrs:{id:"ignoreunknownvalues"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ignoreunknownvalues"}},[t._v("#")]),t._v(" "),a("code",[t._v("ignoreUnknownValues")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("boolean")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("Whether BigQuery should allow extra values that are not represented in the table schema")])]),t._v(" "),a("p",[t._v("If true, the extra values are ignored. If false, records with extra columns"),a("br"),t._v("\nare treated as bad records, and if there are too many bad records, an invalid error is"),a("br"),t._v("\nreturned in the job result. By default unknown values are not allowed.")]),t._v(" "),a("h3",{attrs:{id:"location"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#location"}},[t._v("#")]),t._v(" "),a("code",[t._v("location")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The geographic location where the dataset should reside")])]),t._v(" "),a("p",[t._v("This property is experimental"),a("br"),t._v("\nand might be subject to change or removed.")]),t._v(" "),a("p",[t._v("See "),a("a",{attrs:{href:"https://cloud.google.com/bigquery/docs/reference/v2/datasets#location"}},[t._v("Dataset Location")])]),t._v(" "),a("h3",{attrs:{id:"maxbadrecords"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maxbadrecords"}},[t._v("#")]),t._v(" "),a("code",[t._v("maxBadRecords")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("integer")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The maximum number of bad records that BigQuery can ignore when running the job")])]),t._v(" "),a("p",[t._v("If the number of bad records exceeds this value, an invalid error is returned in the job result."),a("br"),t._v("\nBy default no bad record is ignored.")]),t._v(" "),a("h3",{attrs:{id:"projectid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#projectid"}},[t._v("#")]),t._v(" "),a("code",[t._v("projectId")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The GCP project id")])]),t._v(" "),a("h3",{attrs:{id:"retryauto"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#retryauto"}},[t._v("#")]),t._v(" "),a("code",[t._v("retryAuto")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" ====")]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("h3",{attrs:{id:"retrymessages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#retrymessages"}},[t._v("#")]),t._v(" "),a("code",[t._v("retryMessages")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("array")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Default:")]),t._v(" "),a("code",[t._v("[due to concurrent update]")])])]),t._v(" "),a("blockquote",[a("p",[t._v("The message that are valid for a automatic retry.")])]),t._v(" "),a("p",[t._v("Message is tested as a substring of the full message and case insensitive")]),t._v(" "),a("h3",{attrs:{id:"retryreasons"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#retryreasons"}},[t._v("#")]),t._v(" "),a("code",[t._v("retryReasons")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("array")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Default:")]),t._v(" "),a("code",[t._v("[rateLimitExceeded, jobBackendError]")])])]),t._v(" "),a("blockquote",[a("p",[t._v("The reason that are valid for a automatic retry.")])]),t._v(" "),a("h3",{attrs:{id:"schema"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#schema"}},[t._v("#")]),t._v(" "),a("code",[t._v("schema")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("object")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The schema for the destination table")])]),t._v(" "),a("p",[t._v("The schema can be omitted if the destination table"),a("br"),t._v("\nalready exists, or if you're loading data from a Google Cloud Datastore backup (i.e."),a("br"),t._v("\nDATASTORE_BACKUP format option).")]),t._v(" "),a("h3",{attrs:{id:"schemaupdateoptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#schemaupdateoptions"}},[t._v("#")]),t._v(" "),a("code",[t._v("schemaUpdateOptions")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("array")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("[Experimental] Options allowing the schema of the destination table to be updated as a side effect of the query job")])]),t._v(" "),a("p",[t._v("Schema update options are supported in two cases: when"),a("br"),t._v("\nwriteDisposition is WRITE_APPEND; when writeDisposition is WRITE_TRUNCATE and the destination"),a("br"),t._v("\ntable is a partition of a table, specified by partition decorators. For normal tables,"),a("br"),t._v("\nWRITE_TRUNCATE will always overwrite the schema.")]),t._v(" "),a("h3",{attrs:{id:"scopes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scopes"}},[t._v("#")]),t._v(" "),a("code",[t._v("scopes")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("array")])]),t._v(" "),a("li",[a("strong",[t._v("SubType:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Default:")]),t._v(" "),a("code",[t._v("[https://www.googleapis.com/auth/cloud-platform]")])])]),t._v(" "),a("blockquote",[a("p",[t._v("The GCP scopes to used")])]),t._v(" "),a("h3",{attrs:{id:"serviceaccount"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serviceaccount"}},[t._v("#")]),t._v(" "),a("code",[t._v("serviceAccount")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The GCP service account key")])]),t._v(" "),a("h3",{attrs:{id:"timepartitioningfield"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#timepartitioningfield"}},[t._v("#")]),t._v(" "),a("code",[t._v("timePartitioningField")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The time partitioning specification for the destination table")])]),t._v(" "),a("h3",{attrs:{id:"writedisposition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#writedisposition"}},[t._v("#")]),t._v(" "),a("code",[t._v("writeDisposition")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])]),t._v(" "),a("li",[a("strong",[t._v("Dynamic:")]),t._v(" ❌")]),t._v(" "),a("li",[a("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),a("blockquote",[a("p",[t._v("The action that should occur if the destination table already exists")])]),t._v(" "),a("h2",{attrs:{id:"outputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[t._v("#")]),t._v(" Outputs")]),t._v(" "),a("h3",{attrs:{id:"destinationtable-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#destinationtable-2"}},[t._v("#")]),t._v(" "),a("code",[t._v("destinationTable")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])])]),t._v(" "),a("blockquote",[a("p",[t._v("Destination table")])]),t._v(" "),a("h3",{attrs:{id:"jobid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jobid"}},[t._v("#")]),t._v(" "),a("code",[t._v("jobId")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("string")])])]),t._v(" "),a("blockquote",[a("p",[t._v("The job id")])]),t._v(" "),a("h3",{attrs:{id:"rows"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rows"}},[t._v("#")]),t._v(" "),a("code",[t._v("rows")])]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Type:")]),t._v(" "),a("mark",[t._v("integer")])])]),t._v(" "),a("blockquote",[a("p",[t._v("Output rows count")])])])}),[],!1,null,null,null);e.default=r.exports}}]);