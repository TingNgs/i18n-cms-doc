"use strict";(self.webpackChunki_18_n_cms_doc=self.webpackChunki_18_n_cms_doc||[]).push([[196],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,g=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9326:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={sidebar_position:3},i="Configuration",o={unversionedId:"configuration",id:"configuration",title:"Configuration",description:"All configuration files are located in .i18n-cms folder in root",source:"@site/docs/configuration.mdx",sourceDirName:".",slug:"/configuration",permalink:"/i18n-cms-doc/docs/configuration",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/configuration.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Import existing repository",permalink:"/i18n-cms-doc/docs/add-repository/existing-repo"},next:{title:"Guilds",permalink:"/i18n-cms-doc/docs/category/guilds"}},u={},s=[{value:"config.json",id:"configjson",level:2},{value:"getCustomPath.js",id:"getcustompathjs",level:2},{value:"Example",id:"example",level:2},{value:"Example with default file structure",id:"example-with-default-file-structure",level:3},{value:"Example with custom file structure",id:"example-with-custom-file-structure",level:3}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"All configuration files are located in ",(0,r.kt)("inlineCode",{parentName:"p"},".i18n-cms")," folder in root"),(0,r.kt)("h2",{id:"configjson"},"config.json"),(0,r.kt)("p",null,"Required"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fileType"),(0,r.kt)("td",{parentName:"tr",align:null},"*"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"json"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fileStructure"),(0,r.kt)("td",{parentName:"tr",align:null},"*"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"{lng}/{ns}"),"|",(0,r.kt)("inlineCode",{parentName:"td"},"{ns}/{lng}"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"basePath"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"defaultLanguage"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"useCustomPath"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"namespaces"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string[]")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"languages"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"string[]")))),(0,r.kt)("p",null,"We will load your namespaces and languages from ",(0,r.kt)("inlineCode",{parentName:"p"},"${basePath}/${fileStructure}.${fileType}")," by default."),(0,r.kt)("p",null,"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"basePath")," directory, these file / directory will be ignored."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"any file without a directory"),(0,r.kt)("li",{parentName:"ul"},"directory starting with ",(0,r.kt)("inlineCode",{parentName:"li"},".")," ")),(0,r.kt)("p",null,"If your translation files are not structured as ",(0,r.kt)("inlineCode",{parentName:"p"},"${basePath}/${fileStructure}.${fileType}"),", you can "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"set ",(0,r.kt)("inlineCode",{parentName:"li"},"useCustomPath")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},"define ",(0,r.kt)("inlineCode",{parentName:"li"},"namespaces")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"languages"))),(0,r.kt)("p",null,"And add ",(0,r.kt)("inlineCode",{parentName:"p"},".i18n-cms/getCustomPath.js")),(0,r.kt)("h2",{id:"getcustompathjs"},"getCustomPath.js"),(0,r.kt)("p",null,"Not required by default. Only needed when"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"useCustomPath")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"true")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"namespaces")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"languages")," is defined")),(0,r.kt)("p",null,"in ",(0,r.kt)("inlineCode",{parentName:"p"},".i18n-cms/config.json")),(0,r.kt)("p",null,"Export a function to get the path of translation file by language and namespace"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='.i18n-cms/getCustomPath.js'",title:"'.i18n-cms/getCustomPath.js'"},"/** \n * Get the path of translation file by language and namespace\n * @param {Object} data\n * @param {string} data.namespace - The namespace of translation file\n * @param {string} data.language - The language of translation file\n * @param {Object} data.repoConfig - config defined in `.i18n-cms/config.json`\n * @return {string} path of translation file\n */\n\nexport default function getCustomPath({ namespace, language, repoConfig }) {\n  const { fileStructure, fileType, basePath, useCustomPath } = repoConfig;\n  const filePath = fileStructure\n          .replace('{lng}', language)\n          .replace('{ns}', namespace)\n          .concat(`.${fileType}`);\n\n  const fullPath = `${basePath ? `${basePath}/` : ''}${filePath}`;\n  return fullPath;\n}\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("h3",{id:"example-with-default-file-structure"},"Example with default file structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".i18n-cms/config.json"',title:'".i18n-cms/config.json"'},'{\n  "fileStructure": "{lng}/{ns}",\n  "fileType": "json",\n  "basePath": "public/locales",\n  "defaultLanguage": "en",\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="File structure:"',title:'"File','structure:"':!0},"- public\n  - locales\n    - en\n      - translationA.json\n      - translationB.json\n    - zh\n      - translationA.json\n      - translationB.json\n    - abc.json  <-- ignored\n    - .xxxx/config.json  <-- ignored\n\n")),(0,r.kt)("h3",{id:"example-with-custom-file-structure"},"Example with custom file structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".i18n-cms/config.json"',title:'".i18n-cms/config.json"'},'{\n  "fileStructure": "{lng}/{ns}",\n  "fileType": "json",\n  "defaultLanguage": "en",\n  "useCustomPath": true,\n  "namespaces": [\n    "common",\n    "featureA",\n    "featureB",\n  ],\n  "languages": [\n    "en",\n    "zh"\n  ]\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-md",metastring:'title="File structure:"',title:'"File','structure:"':!0},"- locales\n  - en.json\n  - zh.json\n- feature\n  - featureA\n    - locales\n      - en.json\n      - zh.json\n  - featureB\n    - locales\n      - en.json\n      - zh.json\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='.i18n-cms/getCustomPath.js'",title:"'.i18n-cms/getCustomPath.js'"},"/** \n * Get the path of translation file by language and namespace\n * @param {Object} data\n * @param {string} data.namespace - The namespace of translation file\n * @param {string} data.language - The language of translation file\n * @param {Object} data.repoConfig - config defined in `.i18n-cms/config.json`\n * @return {string} path of translation file\n */\nexport default function getCustomPath({ namespace, language, repoConfig }) {\n  switch (namespace) {\n    case \"common\":\n      return `locales/${language}.${repoConfig.fileType}`;\n    default:\n      // Define a generic default return value, \n      // so you don't need to change any code if you're adding any new feature\n      return `feature/${namespace}/locales/${language}.${repoConfig.fileType}`;\n  }\n}\n")))}c.isMDXComponent=!0}}]);