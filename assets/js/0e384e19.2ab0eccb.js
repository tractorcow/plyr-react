"use strict";(self.webpackChunkplyr_react=self.webpackChunkplyr_react||[]).push([[671],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9881:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={sidebar_position:1},s="Introduction",p={unversionedId:"intro",id:"intro",title:"Introduction",description:"<img",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",editUrl:"https://github.com/chintan9/plyr-react/tree/docs/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Extra",permalink:"/docs/extra"}},c={},u=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Ready to use <code>&lt;Plyr /&gt;</code> component",id:"ready-to-use-plyr--component",level:3},{value:"Old version 4 plyr-react",id:"old-version-4-plyr-react",level:4}],d={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("img",{src:"https://user-images.githubusercontent.com/23579958/143738613-d374adcf-24b8-4f44-8e75-673d5681c1a5.png",title:"plyr-react",width:"450",alt:"plyr-react logo"}),(0,o.kt)("p",null,"A responsive media player that is simple, easy to use, and customizable\nfor video, audio, YouTube, and Vimeo.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/Tree%20Shakeable-d4e157",alt:"tree-shakeable"})," ",(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/Side%20Effect%20Free-ffeb3b",alt:"side-effect free"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/chintan9/plyr-react/blob/master/LICENSE"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/License-MIT-yellow.svg",alt:"license"}))," ",(0,o.kt)("a",{parentName:"p",href:"https://npmjs.org/package/plyr-react"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/npm/dt/plyr-react.svg",alt:"downloads"}))," ",(0,o.kt)("a",{parentName:"p",href:"https://bundlephobia.com/result?p=plyr-react"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/bundlephobia/minzip/plyr-react.svg",alt:"bundle size"}))," ",(0,o.kt)("a",{parentName:"p",href:"https://lgtm.com/projects/g/chintan9/plyr-react/context:javascript"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/lgtm/grade/javascript/g/chintan9/plyr-react.svg?logo=lgtm&logoWidth=18",alt:"Language\ngrade: JavaScript"}))," ",(0,o.kt)("a",{parentName:"p",href:"#contributors"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/all_contributors-3-orange.svg",alt:"contributors badge"}))),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# NPM\nnpm install plyr-react\n\n# Yarn\nyarn add plyr-react\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"ready-to-use-plyr--component"},"Ready to use ",(0,o.kt)("inlineCode",{parentName:"h3"},"<Plyr />")," component"),(0,o.kt)("p",null,"The simplest form of react integration with the plyr is to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Plyr />")," component, it is best for the static\nvideos."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import Plyr from "plyr-react"\nimport "plyr-react/plyr.css"\n\nconst plyrProps = {\n  source: undefined, // https://github.com/sampotts/plyr#the-source-setter\n  options: undefined, // https://github.com/sampotts/plyr#options\n  // Direct props for inner video tag (mdn.io/video)\n}\n\nfunction MyPlyrVideo() {\n  return <Plyr {...plyrProps} />\n}\n')),(0,o.kt)("hr",null),(0,o.kt)("h4",{id:"old-version-4-plyr-react"},"Old version 4 plyr-react"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The path for an import of css styles has been changed in version 5, if you are using the version 4, apply following change in the above code")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'- import "plyr-react/plyr.css"\n+ import "plyr-react/dist/plyr.css"\n')))}m.isMDXComponent=!0}}]);