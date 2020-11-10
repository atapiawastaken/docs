(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{428:function(e,t,a){"use strict";a.r(t);var r=a(18),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"updatedataset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updatedataset"}},[e._v("#")]),e._v(" UpdateDataset")]),e._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"org.kestra.task.gcp.bigquery.UpdateDataset"')]),e._v("\n")])])]),a("blockquote",[a("p",[e._v("Update a dataset.")])]),e._v(" "),a("h2",{attrs:{id:"inputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[e._v("#")]),e._v(" Inputs")]),e._v(" "),a("h3",{attrs:{id:"acl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#acl"}},[e._v("#")]),e._v(" "),a("code",[e._v("acl")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("mark",[e._v("array")])]),e._v(" "),a("li",[a("strong",[e._v("SubType:")]),e._v(" "),a("mark",[e._v("object")])]),e._v(" "),a("li",[a("strong",[e._v("Dynamic:")]),e._v(" ❓")]),e._v(" "),a("li",[a("strong",[e._v("Required:")]),e._v(" ❌")])]),e._v(" "),a("blockquote",[a("p",[e._v("The dataset's access control configuration")])]),e._v(" "),a("h3",{attrs:{id:"defaultencryptionconfiguration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defaultencryptionconfiguration"}},[e._v("#")]),e._v(" "),a("code",[e._v("defaultEncryptionConfiguration")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("mark",[e._v("object")])]),e._v(" "),a("li",[a("strong",[e._v("Dynamic:")]),e._v(" ❓")]),e._v(" "),a("li",[a("strong",[e._v("Required:")]),e._v(" ❌")])]),e._v(" "),a("blockquote",[a("p",[e._v("The default encryption key for all tables in the dataset")])]),e._v(" "),a("p",[e._v("Once this property is set, all"),a("br"),e._v("\nnewly-created partitioned tables in the dataset will have encryption key set to this value,"),a("br"),e._v("\nunless table creation request (or query) overrides the key.")]),e._v(" "),a("h3",{attrs:{id:"defaultencryptionconfiguration-kmskeyname"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defaultencryptionconfiguration-kmskeyname"}},[e._v("#")]),e._v(" "),a("code",[e._v("defaultEncryptionConfiguration.kmsKeyName")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("mark",[e._v("string")])]),e._v(" "),a("li",[a("strong",[e._v("Dynamic:")]),e._v(" ❓")]),e._v(" "),a("li",[a("strong",[e._v("Required:")]),e._v(" ❌")])]),e._v(" "),a("h3",{attrs:{id:"defaultpartitionexpirationms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defaultpartitionexpirationms"}},[e._v("#")]),e._v(" "),a("code",[e._v("defaultPartitionExpirationMs")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("mark",[e._v("integer")])]),e._v(" "),a("li",[a("strong",[e._v("Dynamic:")]),e._v(" ❓")]),e._v(" "),a("li",[a("strong",[e._v("Required:")]),e._v(" ❌")])]),e._v(" "),a("blockquote",[a("p",[e._v("[Optional] The default partition expiration time for all partitioned tables in the dataset, in milliseconds")])]),e._v(" "),a("p",[e._v("Once this property is set, all newly-created partitioned tables in the"),a("br"),e._v("\ndataset will has an expirationMs property in the timePartitioning settings set to this value."),a("br"),e._v("\nChanging the value only affect new tables, not existing ones. The storage in a partition will"),a("br"),e._v("\nhave an expiration time of its partition time plus this value. Setting this property"),a("br"),e._v("\noverrides the use of defaultTableExpirationMs for partitioned tables: only one of"),a("br"),e._v("\ndefaultTableExpirationMs and defaultPartitionExpirationMs will be used for any new"),a("br"),e._v("\npartitioned table. If you provide an explicit timePartitioning.expirationMs when creating or"),a("br"),e._v("\nupdating a partitioned table, that value takes precedence over the default partition"),a("br"),e._v("\nexpiration time indicated by this property. The value may be null.")]),e._v(" "),a("h3",{attrs:{id:"defaulttablelifetime"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#defaulttablelifetime"}},[e._v("#")]),e._v(" "),a("code",[e._v("defaultTableLifetime")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("mark",[e._v("integer")])]),e._v(" "),a("li",[a("strong",[e._v("Dynamic:")]),e._v(" ❓")]),e._v(" "),a("li",[a("strong",[e._v("Required:")]),e._v(" ❌")])]),e._v(" "),a("blockquote",[a("p",[e._v("The default lifetime of all tables in the dataset, in milliseconds")])]),e._v(" "),a("p",[e._v("The minimum value is"),a("br"),e._v("\n3600000 milliseconds (one hour). Once this property is set, all newly-created tables in the"),a("br"),e._v("\ndataset will have an expirationTime property set to the creation time plus the value in this"),a("br"),e._v("\nproperty, and changing the value will only affect new tables, not existing ones. When the"),a("br"),e._v("\nexpirationTime for a given table is reached, that table will be deleted automatically. If a"),a("br"),e._v("\ntable's expirationTime is modified or removed before the table expires, or if you provide an"),a("br"),e._v("\nexplicit expirationTime when creating a table, that value takes precedence over the default"),a("br"),e._v("\nexpiration time indicated by this property. This property is experimental and might be"),a("br"),e._v("\nsubject to change or removed.")]),e._v(" "),a("h3",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[e._v("#")]),e._v(" "),a("code",[e._v("description")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("mark",[e._v("string")])]),e._v(" "),a("li",[a("strong",[e._v("Dynamic:")]),e._v(" ✔️")]),e._v(" "),a("li",[a("strong",[e._v("Required:")]),e._v(" ❌")])]),e._v(" "),a("blockquote",[a("p",[e._v("Description")])]),e._v(" "),a("p",[e._v("A user-friendly description for the dataset.")]),e._v(" "),a("h3",{attrs:{id:"friendlyname"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#friendlyname"}},[e._v("#")]),e._v(" "),a("code",[e._v("friendlyName")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("mark",[e._v("string")])]),e._v(" "),a("li",[a("strong",[e._v("Dynamic:")]),e._v(" ✔️")]),e._v(" "),a("li",[a("strong",[e._v("Required:")]),e._v(" ❌")])]),e._v(" "),a("blockquote",[a("p",[e._v("A user-friendly name for the dataset")])]),e._v(" "),a("h3",{attrs:{id:"labels"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#labels"}},[e._v("#")]),e._v(" "),a("code",[e._v("labels")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("mark",[e._v("object")])]),e._v(" "),a("li",[a("strong",[e._v("Dynamic:")]),e._v(" ❓")]),e._v(" "),a("li",[a("strong",[e._v("Required:")]),e._v(" ❌")])]),e._v(" "),a("blockquote",[a("p",[e._v("The dataset's labels")])]),e._v(" "),a("h3",{attrs:{id:"location"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#location"}},[e._v("#")]),e._v(" "),a("code",[e._v("location")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("mark",[e._v("string")])]),e._v(" "),a("li",[a("strong",[e._v("Dynamic:")]),e._v(" ✔️")]),e._v(" "),a("li",[a("strong",[e._v("Required:")]),e._v(" ❌")])]),e._v(" "),a("blockquote",[a("p",[e._v("The geographic location where the dataset should reside")])]),e._v(" "),a("p",[e._v("This property is experimental"),a("br"),e._v("\nand might be subject to change or removed.")]),e._v(" "),a("p",[e._v("See "),a("a",{attrs:{href:"https://cloud.google.com/bigquery/docs/reference/v2/datasets#location"}},[e._v("Dataset"),a("br"),e._v("\nLocation")])]),e._v(" "),a("h3",{attrs:{id:"name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[e._v("#")]),e._v(" "),a("code",[e._v("name")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("mark",[e._v("string")])]),e._v(" "),a("li",[a("strong",[e._v("Dynamic:")]),e._v(" ✔️")]),e._v(" "),a("li",[a("strong",[e._v("Required:")]),e._v(" ✔️")])]),e._v(" "),a("blockquote",[a("p",[e._v("The dataset's user-defined id")])]),e._v(" "),a("h3",{attrs:{id:"projectid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#projectid"}},[e._v("#")]),e._v(" "),a("code",[e._v("projectId")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("mark",[e._v("string")])]),e._v(" "),a("li",[a("strong",[e._v("Dynamic:")]),e._v(" ✔️")]),e._v(" "),a("li",[a("strong",[e._v("Required:")]),e._v(" ❌")])]),e._v(" "),a("blockquote",[a("p",[e._v("The GCP project id")])]),e._v(" "),a("h3",{attrs:{id:"retryauto"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#retryauto"}},[e._v("#")]),e._v(" "),a("code",[e._v("retryAuto")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" ====")]),e._v(" "),a("li",[a("strong",[e._v("Dynamic:")]),e._v(" ❓")]),e._v(" "),a("li",[a("strong",[e._v("Required:")]),e._v(" ❌")])]),e._v(" "),a("h3",{attrs:{id:"retrymessages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#retrymessages"}},[e._v("#")]),e._v(" "),a("code",[e._v("retryMessages")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("mark",[e._v("array")])]),e._v(" "),a("li",[a("strong",[e._v("SubType:")]),e._v(" "),a("mark",[e._v("string")])]),e._v(" "),a("li",[a("strong",[e._v("Dynamic:")]),e._v(" ✔️")]),e._v(" "),a("li",[a("strong",[e._v("Required:")]),e._v(" ❌")]),e._v(" "),a("li",[a("strong",[e._v("Default:")]),e._v(" "),a("code",[e._v("[due to concurrent update]")])])]),e._v(" "),a("blockquote",[a("p",[e._v("The message that are valid for a automatic retry.")])]),e._v(" "),a("p",[e._v("Message is tested as a substring of the full message and case insensitive")]),e._v(" "),a("h3",{attrs:{id:"retryreasons"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#retryreasons"}},[e._v("#")]),e._v(" "),a("code",[e._v("retryReasons")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("mark",[e._v("array")])]),e._v(" "),a("li",[a("strong",[e._v("SubType:")]),e._v(" "),a("mark",[e._v("string")])]),e._v(" "),a("li",[a("strong",[e._v("Dynamic:")]),e._v(" ✔️")]),e._v(" "),a("li",[a("strong",[e._v("Required:")]),e._v(" ❌")]),e._v(" "),a("li",[a("strong",[e._v("Default:")]),e._v(" "),a("code",[e._v("[rateLimitExceeded, jobBackendError]")])])]),e._v(" "),a("blockquote",[a("p",[e._v("The reason that are valid for a automatic retry.")])]),e._v(" "),a("h2",{attrs:{id:"outputs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[e._v("#")]),e._v(" Outputs")]),e._v(" "),a("h3",{attrs:{id:"dataset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dataset"}},[e._v("#")]),e._v(" "),a("code",[e._v("dataset")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("mark",[e._v("string")])])]),e._v(" "),a("blockquote",[a("p",[e._v("The dataset's user-defined id")])]),e._v(" "),a("h3",{attrs:{id:"description-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description-2"}},[e._v("#")]),e._v(" "),a("code",[e._v("description")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("mark",[e._v("string")])])]),e._v(" "),a("blockquote",[a("p",[e._v("A user-friendly description for the dataset")])]),e._v(" "),a("h3",{attrs:{id:"friendlyname-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#friendlyname-2"}},[e._v("#")]),e._v(" "),a("code",[e._v("friendlyName")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("mark",[e._v("string")])])]),e._v(" "),a("blockquote",[a("p",[e._v("A user-friendly name for the dataset")])]),e._v(" "),a("h3",{attrs:{id:"location-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#location-2"}},[e._v("#")]),e._v(" "),a("code",[e._v("location")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("mark",[e._v("string")])])]),e._v(" "),a("blockquote",[a("p",[e._v("The geographic location where the dataset should reside")])]),e._v(" "),a("p",[e._v("This property is experimental"),a("br"),e._v("\nand might be subject to change or removed.")]),e._v(" "),a("p",[e._v("See "),a("a",{attrs:{href:"https://cloud.google.com/bigquery/docs/reference/v2/datasets#location"}},[e._v("Dataset"),a("br"),e._v("\nLocation")])]),e._v(" "),a("h3",{attrs:{id:"project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#project"}},[e._v("#")]),e._v(" "),a("code",[e._v("project")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Type:")]),e._v(" "),a("mark",[e._v("string")])])]),e._v(" "),a("blockquote",[a("p",[e._v("The GCP project id")])])])}),[],!1,null,null,null);t.default=i.exports}}]);