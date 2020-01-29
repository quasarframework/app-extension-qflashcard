(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[27],{2514:function(a,t,n){"use strict";var s=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("div",[n("section",{staticClass:"page-header"},[n("div",{staticClass:"donate"},[n("a",{attrs:{href:a.donateUrl,target:"_blank",title:"Donate"}},[n("i",{staticClass:"fas fa-heart",staticStyle:{color:"red"}})])]),n("div",{staticClass:"text-h1 project-name"},[a._v(a._s(a.title))]),n("div",{staticClass:"text-h2 project-tagline"},[a._v(a._s(a.tagline))]),n("q-btn",{staticClass:"btn",attrs:{type:"a",href:a.locationUrl,target:"_blank",label:"View on GitHub","no-caps":"",flat:""}}),n("q-btn",{staticClass:"btn",attrs:{to:"/docs",label:"Docs","no-caps":"",flat:""}}),n("q-btn",{staticClass:"btn",attrs:{to:"/examples",label:"Examples","no-caps":"",flat:""}}),a.hasInteractiveDemo?n("q-btn",{staticClass:"btn",attrs:{to:"/demo",label:"Interactive Demo","no-caps":"",flat:""}}):a._e(),n("q-btn",{staticClass:"btn",attrs:{type:"a",href:a.donateUrl,target:"_blank",label:"Donate","no-caps":"",flat:""}}),n("div",{staticClass:"row justify-evenly items-center q-ma-sm"},[n("div",{staticClass:"quasar"},[a._v(a._s(a.quasarDesc))]),n("div",{staticClass:"byline"},[a._v(a._s(a.byline)),n("a",{attrs:{href:a.bylineTwitter,target:"_blank",title:"Twitter"}},[n("i",{staticClass:"fab fa-twitter"})])])])],1),n("main",{staticClass:"flex flex-start justify-center inset-shadow"},[n("div",{staticClass:"q-pa-md col-12-sm col-8-md col-6-lg inset-shadow",staticStyle:{width:"100%",height:"3px"}}),n("div",{staticClass:"q-pa-md col-12-sm col-8-md col-6-lg shadow-1",staticStyle:{"max-width":"800px",width:"100%"}},[a._t("default")],2)])])},e=[],r={name:"Hero",data:function(){return{title:"QFlashcard",tagline:"Add css mashups and transitions for your Quasar App",byline:"Created and maintained by Jeff Galbraith",bylineTwitter:"https://twitter.com/jgalbraith64",quasarDesc:"A Quasar Framework Component and App Extension",locationUrl:"https://github.com/quasarframework/quasar-ui-qflashcard",donateUrl:"https://github.com/sponsors/hawkeye64",hasInteractiveDemo:!1}}},o=r,i=n("2877"),l=Object(i["a"])(o,s,e,!1,null,null,null);t["a"]=l.exports},"8b24":function(a,t,n){"use strict";n.r(t);var s=function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("hero",[n("q-markdown",{attrs:{src:a.markdown,toc:""},on:{data:a.onToc}}),n("json-api-viewer",{attrs:{title:"QFlashcard API",json:a.json,"starting-tab":"slots"}}),n("json-api-viewer",{attrs:{title:"QFlashcardSection API",json:a.json2}}),n("q-markdown",[a._v("\n# Donate\nIf you appreciate the work that went into this, please consider donating to [Quasar](https://donate.quasar.dev) or [Jeff](https://github.com/sponsors/hawkeye64).\n\n---\n\nThis page created with [QMarkdown](https://quasarframework.github.io/quasar-ui-qmarkdown), another great Quasar App Extension.\n    ")]),n("q-page-scroller",{attrs:{position:"bottom-right","scroll-offset":150,offset:[18,18]}},[n("q-btn",{class:{"text-black bg-grey-4":a.$q.dark.isActive,"text-white bg-primary":!a.$q.dark.isActive},attrs:{fab:"",icon:"keyboard_arrow_up"}})],1)],1)},e=[],r=n("2514"),o='QFlashcard\n===\n\n**QFlashcard** adds css mashups and transitions to your Quasar apps.\n\n# Features\n- Loads of transitions\n- Combine transitions for combos and mashups\n- Easily modifiable\n\n# Installation Types\n\n## Quasar CLI\n\n**App Extension**\n\n:::\n#### Install\n\nTo add as an App Extension to your Quasar application, run the following (in your Quasar app folder):\n```\nquasar ext add @quasar/qflashcard\n```\n\n#### Uninstall\n\nTo remove as an App Extension from your Quasar application, run the following (in your Quasar app folder):\n```\nquasar ext remove @quasar/qflashcard\n```\n\n#### Describe\nWhen installed as an App Extension, you can use `quasar describe QFlashcard` and `quasar describe QFlashcardSection`\n:::\n\n**OR**:\n\n:::\nCreate and register a boot file:\n\n```js\nimport Vue from \'vue\'\nimport Plugin from \'@quasar/quasar-ui-qflashcard\'\nimport \'@quasar/quasar-ui-qflashcard/dist/index.css\'\n\nVue.use(Plugin)\n```\n:::\n\n**OR**:\n\n:::\n```html\n<style src="@quasar/quasar-ui-qflashcard/dist/index.css"></style>\n\n<script>\nimport { QFlashcard } from \'@quasar/quasar-ui-qflashcard\'\n\nexport default {\n  components: {\n    QFlashcard\n  }\n}\n<\/script>\n```\n:::\n\n## Vue CLI project\n\n:::\n```js\nimport Vue from \'vue\'\nimport Plugin from \'@quasar/quasar-ui-qflashcard\'\nimport \'@quasar/quasar-ui-qflashcard/dist/index.css\'\n\nVue.use(Plugin)\n```\n:::\n\n**OR**:\n\n:::\n```html\n<style src="@quasar/quasar-ui-qflashcard/dist/index.css"></style>\n\n<script>\nimport { QFlashcard } from \'@quasar/quasar-ui-qflashcard\'\n\nexport default {\n  components: {\n    QFlashcard\n  }\n}\n<\/script>\n```\n:::\n\n## UMD variant\n\nExports `window.QFlashcard`.\n\nAdd the following tag(s) after the Quasar ones:\n\n:::\n```html\n<head>\n  \x3c!-- AFTER the Quasar stylesheet tags: --\x3e\n  <link href="https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qflashcard/dist/index.min.css" rel="stylesheet" type="text/css">\n</head>\n<body>\n  \x3c!-- at end of body, AFTER Quasar script(s): --\x3e\n  <script src="https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qflashcard/dist/index.umd.min.js"><\/script>\n</body>\n```\nIf you need the RTL variant of the CSS, then go for the following (instead of the above stylesheet link):\n```html\n<link href="https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qflashcard/dist/index.rtl.min.css" rel="stylesheet" type="text/css">\n```\n:::\n\n## Testing on Codepen\n[UMD Example on Codepen](https://codepen.io/Hawkeye64/pen/qBEPVEG)\n\n# Docs\nCan be found [here](https://quasarframework.github.io/quasar-ui-qflashcard).\n\n# Examples\nCan be found [here](https://quasarframework.github.io/quasar-ui-qflashcard/examples).\n\n# Demo (source) Project\nCan be found [here](https://github.com/quasarframework/quasar-ui-qflashcard/tree/master/demo).\n\n~~~\n',i=n("8e96"),l=n("d6d9"),c={name:"PageIndex",components:{Hero:r["a"]},data:function(){return{markdown:o,json:i,json2:l}},computed:{toc:{get:function(){return this.$store.state.common.toc},set:function(a){this.$store.commit("common/toc",a)}}},methods:{onToc:function(a){a.push({id:"QFlashcard-API",label:"QFlashcard API",level:1,children:Array(0)}),a.push({id:"QFlashcardSection-API",label:"QFlashcardSection API",level:1,children:Array(0)}),a.push({id:"Donate",label:"Donate",level:1,children:Array(0)}),this.toc=a}}},d=c,u=n("2877"),h=Object(u["a"])(d,s,e,!1,null,null,null);t["default"]=h.exports},"8e96":function(a){a.exports=JSON.parse('{"type":"component","meta":{"docsUrl":"https://quasarframework.github.io/quasar-ui-qflashcard/docs"},"props":{"no-hover":{"type":"Boolean","desc":"Turns off mouse hover/touch support. In this case, use the `active` property to control resting/active state","category":"behavior"}},"slots":{"default":{"desc":"Anything can go into this slot, but one or more QFlashcardSection components are expected"}}}')},d6d9:function(a){a.exports=JSON.parse('{"type":"component","meta":{"docsUrl":"https://quasarframework.github.io/quasar-ui-qflashcard/docs"},"props":{"transition":{"type":["String","Array"],"desc":"One or more transitions to be used","examples":["fade-in","fade-in flip-left-in","[\'fade-in\', \'flip-left-in\']"],"category":"behavior"},"active":{"type":"Boolean","desc":"Use along with `no-hover` property to control the non-active/active state","category":"model"}},"slots":{"default":{"desc":"Anything can go into this slot"}}}')}}]);