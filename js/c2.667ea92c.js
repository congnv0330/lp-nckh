(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["c2"],{1276:function(t,r,a){"use strict";var n=a("d784"),e=a("44e7"),i=a("825a"),o=a("1d80"),s=a("4840"),u=a("8aa5"),l=a("50c4"),f=a("14c3"),p=a("9263"),c=a("d039"),d=[].push,v=Math.min,g=4294967295,h=!c((function(){return!RegExp(g,"y")}));n("split",2,(function(t,r,a){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,a){var n=String(o(this)),i=void 0===a?g:a>>>0;if(0===i)return[];if(void 0===t)return[n];if(!e(t))return r.call(n,t,i);var s,u,l,f=[],c=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,h=new RegExp(t.source,c+"g");while(s=p.call(h,n)){if(u=h.lastIndex,u>v&&(f.push(n.slice(v,s.index)),s.length>1&&s.index<n.length&&d.apply(f,s.slice(1)),l=s[0].length,v=u,f.length>=i))break;h.lastIndex===s.index&&h.lastIndex++}return v===n.length?!l&&h.test("")||f.push(""):f.push(n.slice(v)),f.length>i?f.slice(0,i):f}:"0".split(void 0,0).length?function(t,a){return void 0===t&&0===a?[]:r.call(this,t,a)}:r,[function(r,a){var e=o(this),i=void 0==r?void 0:r[t];return void 0!==i?i.call(r,e,a):n.call(String(e),r,a)},function(t,e){var o=a(n,t,this,e,n!==r);if(o.done)return o.value;var p=i(t),c=String(this),d=s(p,RegExp),b=p.unicode,m=(p.ignoreCase?"i":"")+(p.multiline?"m":"")+(p.unicode?"u":"")+(h?"y":"g"),x=new d(h?p:"^(?:"+p.source+")",m),w=void 0===e?g:e>>>0;if(0===w)return[];if(0===c.length)return null===f(x,c)?[c]:[];var y=0,_=0,C=[];while(_<c.length){x.lastIndex=h?_:0;var F,R=f(x,h?c:c.slice(_));if(null===R||(F=v(l(x.lastIndex+(h?0:_)),c.length))===y)_=u(c,_,b);else{if(C.push(c.slice(y,_)),C.length===w)return C;for(var X=1;X<=R.length-1;X++)if(C.push(R[X]),C.length===w)return C;_=y=F}}return C.push(c.slice(y)),C}]}),!h)},"14c3":function(t,r,a){var n=a("c6b6"),e=a("9263");t.exports=function(t,r){var a=t.exec;if("function"===typeof a){var i=a.call(t,r);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return e.call(t,r)}},"14d0":function(t,r,a){"use strict";a("d3b7"),a("25f0");var n=a("d4ec");function e(t,r){for(var a=0;a<r.length;a++){var n=r[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,r,a){return r&&e(t.prototype,r),a&&e(t,a),t}var o=function(t,r){var a;while(0!==r)a=t%r,t=r,r=a;return t},s=function(){function t(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;Object(n["a"])(this,t),this.tu=r,this.mau=a}return i(t,[{key:"init",value:function(){this.tu=0,this.mau=1}},{key:"RutGon",value:function(){var t=o(this.tu,this.mau);this.tu/=t,this.mau/=t}},{key:"giatri",get:function(){return this.tu/this.mau}},{key:"Xuat",get:function(){var t="";return this.tu/this.mau===0?"0":(this.tu/this.mau<0&&(t+="-"),t+=Math.abs(this.tu).toString(),1!==this.mau&&(t+="/"+Math.abs(this.mau).toString()),t)}},{key:"Xuat_duong",get:function(){var t="";return this.tu/this.mau===0?"0":(t+=Math.abs(this.tu).toString(),1!==this.mau&&(t+="/"+Math.abs(this.mau).toString()),t)}}]),t}();r["a"]=s},"1dde":function(t,r,a){var n=a("d039"),e=a("b622"),i=a("2d00"),o=e("species");t.exports=function(t){return i>=51||!n((function(){var r=[],a=r.constructor={};return a[o]=function(){return{foo:1}},1!==r[t](Boolean).foo}))}},"25f0":function(t,r,a){"use strict";var n=a("6eeb"),e=a("825a"),i=a("d039"),o=a("ad6d"),s="toString",u=RegExp.prototype,l=u[s],f=i((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),p=l.name!=s;(f||p)&&n(RegExp.prototype,s,(function(){var t=e(this),r=String(t.source),a=t.flags,n=String(void 0===a&&t instanceof RegExp&&!("flags"in u)?o.call(t):a);return"/"+r+"/"+n}),{unsafe:!0})},"44e7":function(t,r,a){var n=a("861d"),e=a("c6b6"),i=a("b622"),o=i("match");t.exports=function(t){var r;return n(t)&&(void 0!==(r=t[o])?!!r:"RegExp"==e(t))}},"498a":function(t,r,a){"use strict";var n=a("23e7"),e=a("58a8").trim,i=a("c8d2");n({target:"String",proto:!0,forced:i("trim")},{trim:function(){return e(this)}})},5899:function(t,r){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,r,a){var n=a("1d80"),e=a("5899"),i="["+e+"]",o=RegExp("^"+i+i+"*"),s=RegExp(i+i+"*$"),u=function(t){return function(r){var a=String(n(r));return 1&t&&(a=a.replace(o,"")),2&t&&(a=a.replace(s,"")),a}};t.exports={start:u(1),end:u(2),trim:u(3)}},6547:function(t,r,a){var n=a("a691"),e=a("1d80"),i=function(t){return function(r,a){var i,o,s=String(e(r)),u=n(a),l=s.length;return u<0||u>=l?t?"":void 0:(i=s.charCodeAt(u),i<55296||i>56319||u+1===l||(o=s.charCodeAt(u+1))<56320||o>57343?t?s.charAt(u):i:t?s.slice(u,u+2):o-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(!1),charAt:i(!0)}},"65f0":function(t,r,a){var n=a("861d"),e=a("e8b5"),i=a("b622"),o=i("species");t.exports=function(t,r){var a;return e(t)&&(a=t.constructor,"function"!=typeof a||a!==Array&&!e(a.prototype)?n(a)&&(a=a[o],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===r?0:r)}},8418:function(t,r,a){"use strict";var n=a("c04e"),e=a("9bf2"),i=a("5c6c");t.exports=function(t,r,a){var o=n(r);o in t?e.f(t,o,i(0,a)):t[o]=a}},"8aa5":function(t,r,a){"use strict";var n=a("6547").charAt;t.exports=function(t,r,a){return r+(a?n(t,r).length:1)}},9263:function(t,r,a){"use strict";var n=a("ad6d"),e=a("9f7f"),i=RegExp.prototype.exec,o=String.prototype.replace,s=i,u=function(){var t=/a/,r=/b*/g;return i.call(t,"a"),i.call(r,"a"),0!==t.lastIndex||0!==r.lastIndex}(),l=e.UNSUPPORTED_Y||e.BROKEN_CARET,f=void 0!==/()??/.exec("")[1],p=u||f||l;p&&(s=function(t){var r,a,e,s,p=this,c=l&&p.sticky,d=n.call(p),v=p.source,g=0,h=t;return c&&(d=d.replace("y",""),-1===d.indexOf("g")&&(d+="g"),h=String(t).slice(p.lastIndex),p.lastIndex>0&&(!p.multiline||p.multiline&&"\n"!==t[p.lastIndex-1])&&(v="(?: "+v+")",h=" "+h,g++),a=new RegExp("^(?:"+v+")",d)),f&&(a=new RegExp("^"+v+"$(?!\\s)",d)),u&&(r=p.lastIndex),e=i.call(c?a:p,h),c?e?(e.input=e.input.slice(g),e[0]=e[0].slice(g),e.index=p.lastIndex,p.lastIndex+=e[0].length):p.lastIndex=0:u&&e&&(p.lastIndex=p.global?e.index+e[0].length:r),f&&e&&e.length>1&&o.call(e[0],a,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(e[s]=void 0)})),e}),t.exports=s},"99af":function(t,r,a){"use strict";var n=a("23e7"),e=a("d039"),i=a("e8b5"),o=a("861d"),s=a("7b0b"),u=a("50c4"),l=a("8418"),f=a("65f0"),p=a("1dde"),c=a("b622"),d=a("2d00"),v=c("isConcatSpreadable"),g=9007199254740991,h="Maximum allowed index exceeded",b=d>=51||!e((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),m=p("concat"),x=function(t){if(!o(t))return!1;var r=t[v];return void 0!==r?!!r:i(t)},w=!b||!m;n({target:"Array",proto:!0,forced:w},{concat:function(t){var r,a,n,e,i,o=s(this),p=f(o,0),c=0;for(r=-1,n=arguments.length;r<n;r++)if(i=-1===r?o:arguments[r],x(i)){if(e=u(i.length),c+e>g)throw TypeError(h);for(a=0;a<e;a++,c++)a in i&&l(p,c,i[a])}else{if(c>=g)throw TypeError(h);l(p,c++,i)}return p.length=c,p}})},"9f7f":function(t,r,a){"use strict";var n=a("d039");function e(t,r){return RegExp(t,r)}r.UNSUPPORTED_Y=n((function(){var t=e("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),r.BROKEN_CARET=n((function(){var t=e("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,r,a){"use strict";var n=a("23e7"),e=a("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==e},{exec:e})},ad6d:function(t,r,a){"use strict";var n=a("825a");t.exports=function(){var t=n(this),r="";return t.global&&(r+="g"),t.ignoreCase&&(r+="i"),t.multiline&&(r+="m"),t.dotAll&&(r+="s"),t.unicode&&(r+="u"),t.sticky&&(r+="y"),r}},c8d2:function(t,r,a){var n=a("d039"),e=a("5899"),i="​᠎";t.exports=function(t){return n((function(){return!!e[t]()||i[t]()!=i||e[t].name!==t}))}},d4ec:function(t,r,a){"use strict";function n(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}a.d(r,"a",(function(){return n}))},d784:function(t,r,a){"use strict";a("ac1f");var n=a("6eeb"),e=a("d039"),i=a("b622"),o=a("9263"),s=a("9112"),u=i("species"),l=!e((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=function(){return"$0"==="a".replace(/./,"$0")}(),p=i("replace"),c=function(){return!!/./[p]&&""===/./[p]("a","$0")}(),d=!e((function(){var t=/(?:)/,r=t.exec;t.exec=function(){return r.apply(this,arguments)};var a="ab".split(t);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));t.exports=function(t,r,a,p){var v=i(t),g=!e((function(){var r={};return r[v]=function(){return 7},7!=""[t](r)})),h=g&&!e((function(){var r=!1,a=/a/;return"split"===t&&(a={},a.constructor={},a.constructor[u]=function(){return a},a.flags="",a[v]=/./[v]),a.exec=function(){return r=!0,null},a[v](""),!r}));if(!g||!h||"replace"===t&&(!l||!f||c)||"split"===t&&!d){var b=/./[v],m=a(v,""[t],(function(t,r,a,n,e){return r.exec===o?g&&!e?{done:!0,value:b.call(r,a,n)}:{done:!0,value:t.call(a,r,n)}:{done:!1}}),{REPLACE_KEEPS_$0:f,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:c}),x=m[0],w=m[1];n(String.prototype,t,x),n(RegExp.prototype,v,2==r?function(t,r){return w.call(t,this,r)}:function(t){return w.call(t,this)})}p&&s(RegExp.prototype[v],"sham",!0)}},df8b:function(t,r,a){"use strict";a.r(r);var n=function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("div",[a("h2",{staticClass:"text-2xl font-semibold text-center md:text-left"},[t._v("Chương 2")]),a("p",{staticClass:"text-gray-700 text-center md:text-left"},[t._v("Bài toán đối ngẫu")]),a("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6"},[a("div",{staticClass:"bg-white shadow-md p-5"},[a("div",{staticClass:"flex mb-4"},[a("label",{staticClass:"text-gray-700 font-bold my-auto",attrs:{for:"fx"}},[t._v(" F(x) ")]),a("div",{staticClass:"flex-1 mx-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.input.fx,expression:"input.fx"}],staticClass:"appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow",attrs:{id:"fx",type:"text",placeholder:"Phương trình F(x) ...",title:"Phương trình F(x)"},domProps:{value:t.input.fx},on:{input:function(r){r.target.composing||t.$set(t.input,"fx",r.target.value)}}})]),a("div",{staticClass:"relative"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.input.type,expression:"input.type"}],staticClass:"block appearance-none w-full bg-white border border-gray-400 hover:border-gray-400 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500 focus:shadow",attrs:{title:"Bài toán",id:"cbValue"},on:{change:function(r){var a=Array.prototype.filter.call(r.target.options,(function(t){return t.selected})).map((function(t){var r="_value"in t?t._value:t.value;return r}));t.$set(t.input,"type",r.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"min"}},[t._v("Min")]),a("option",{attrs:{value:"max"}},[t._v("Max")])]),a("div",{staticClass:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},[a("svg",{staticClass:"fill-current h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[a("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])])])]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.input.matrix,expression:"input.matrix"}],staticClass:"block appearance-none border border-gray-400 rounded w-full text-gray-700 py-2 px-3 focus:outline-none focus:border-blue-500 focus:shadow mb-4",attrs:{title:"Ma trận",placeholder:"Ma trận ...",id:"matriX",rows:"4"},domProps:{value:t.input.matrix},on:{input:function(r){r.target.composing||t.$set(t.input,"matrix",r.target.value)}}}),a("div",{staticClass:"flex mb-4"},[a("label",{staticClass:"text-gray-700 font-bold my-auto mr-2",attrs:{for:"fxRB"}},[t._v(" Rằng buộc ")]),a("div",{staticClass:"flex-1"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.input.fxRB,expression:"input.fxRB"}],staticClass:"appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow",attrs:{id:"fxRB",type:"text",placeholder:"Rằng buộc đề bài ...",title:"Rằng buộc ..."},domProps:{value:t.input.fxRB},on:{input:function(r){r.target.composing||t.$set(t.input,"fxRB",r.target.value)}}})])]),t.isHidden?t._e():a("div",{staticClass:"flex mb-4"},[a("label",{staticClass:"text-gray-700 font-bold my-auto mr-2",attrs:{for:"opitmalFx"}},[t._v(" F(X*) ")]),a("div",{staticClass:"flex-1"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.input.opitmalFx,expression:"input.opitmalFx"}],staticClass:"appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow",attrs:{id:"opitmalFx",type:"text",placeholder:"Phương trình F(X*) ...",title:"Giá trị F(X*)"},domProps:{value:t.input.opitmalFx},on:{input:function(r){r.target.composing||t.$set(t.input,"opitmalFx",r.target.value)}}})])]),t.isHidden?t._e():a("div",{staticClass:"flex mb-4"},[a("label",{staticClass:"text-gray-700 font-bold my-auto mr-2",attrs:{for:"opitmalX"}},[t._v(" X* ")]),a("div",{staticClass:"flex-1"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.input.opitmalX,expression:"input.opitmalX"}],staticClass:"appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow",attrs:{id:"opitmalX",type:"text",placeholder:"Phương án tối ưu X* ...",title:"Phương án tối ưu X*"},domProps:{value:t.input.opitmalX},on:{input:function(r){r.target.composing||t.$set(t.input,"opitmalX",r.target.value)}}})])]),t.isHidden?t._e():a("div",{staticClass:"text-center md:text-left"},[a("button",{staticClass:"bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:shadow-outline rounded px-5 py-2 mr-2",attrs:{id:"btnCalc2"},on:{click:t.submitD2}},[t._v(" Thực hiện ")]),a("button",{staticClass:"bg-green-500 text-white hover:bg-green-600 focus:outline-none rounded px-4 py-2 mr-2",on:{click:function(r){t.isHidden=!0}}},[t._v(" Dạng 1 ")]),a("button",{staticClass:"bg-gray-500 text-white hover:bg-gray-600 focus:outline-none rounded px-4 py-2",attrs:{id:"btnDel2"},on:{click:t.reset}},[t._v(" Xóa ")])]),t.isHidden?a("div",{staticClass:"text-center md:text-left"},[a("button",{staticClass:"bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:shadow-outline rounded px-5 py-2 mr-2",attrs:{id:"btnCalc1"},on:{click:t.submitD1}},[t._v(" Thực hiện ")]),a("button",{staticClass:"bg-green-500 text-white hover:bg-green-600 focus:outline-none rounded px-4 py-2 mr-2",on:{click:function(r){t.isHidden=!1}}},[t._v(" Dạng 2 ")]),a("button",{staticClass:"bg-gray-500 text-white hover:bg-gray-600 focus:outline-none rounded px-4 py-2",attrs:{id:"btnDel1"},on:{click:t.reset}},[t._v(" Xóa ")])]):t._e()]),t.hasSubmitD2&&!t.isHidden?a("div",{staticClass:"grid grid-cols-1 gap-4 lg:col-span-2 whitespace-pre-line"},[a("div",{staticClass:"bg-white shadow-md p-5 whitespace-pre-line",domProps:{innerHTML:t._s(t.outputPrintD2)}}),a("div",{staticClass:"bg-white shadow-md p-5 whitespace-pre-line",domProps:{innerHTML:t._s(t.outputD2)}})]):t._e(),t.hasSubmitD1&&t.isHidden?a("div",{staticClass:"grid grid-cols-1 gap-4 lg:col-span-2"},[a("div",{staticClass:"bg-white shadow-md p-5 whitespace-pre-line",domProps:{innerHTML:t._s(t.outputPrint)}}),a("div",{staticClass:"bg-white shadow-md p-5"},[t.output.answer.success?[a("h1",{staticClass:"text-lg font-semibold"},[t._v("Bài toán có lời giải")]),a("hr",{staticClass:"my-4"}),a("p",{staticClass:"mb-3"},[t._v("Bảng đơn hình")]),a("div",{staticClass:"overflow-auto"},[a("table",{staticClass:"table-auto text-center w-full mb-5"},[a("thead",[a("tr",[t._m(0),a("th",{staticClass:"border py-3"},[t._v("Ẩn cơ sở")]),a("th",{staticClass:"border py-3"},[t._v("Phương án")]),t._l(t.output.nX,(function(r){return[a("th",{key:"th"+r,staticClass:"border px-4 py-2"},[t._v("x"),a("sub",[t._v(t._s(r))])])]}))],2)]),t._l(t.output.steps,(function(r,n){return[a("tbody",{key:n,staticClass:"border"},[t._l(r,(function(r,n){return[a("tr",{key:"row"+n},[n<t.output.nLine?[t._l(r,(function(r,e){return[a("td",{key:"td"+e+"-"+n,staticClass:"border-l border-r px-4 py-2"},[a("div",1===e?[t._v(" x"),a("sub",[t._v(t._s(r))])]:[t._v(" "+t._s(r)+" ")])])]}))]:[a("td",{staticClass:"border px-4 py-2"}),a("td",{staticClass:"border px-4 py-2"}),a("td",{staticClass:"border px-4 py-2"}),t._l(r,(function(r,e){return[a("td",{key:"td_"+e+"-"+n,staticClass:"border py-3"},[t._v(t._s(r))])]}))]],2)]}))],2)]}))],2),a("div",[a("p",{staticClass:"mb-3 font-semibold"},[t._v("Bài toán có phương án tối ưu là:")]),a("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 gap-2"},[a("p",[a("span",{staticClass:"font-semibold"},[t._v("F(X*)")]),t._v(" = "+t._s(t.output.answer.result.fx))]),a("p",[a("span",{staticClass:"font-semibold"},[t._v("X*")]),t._v(" = ("+t._s(t.output.answer.result.x.join(", "))+")")])])])])]:[t._m(1),a("hr",{staticClass:"my-4"}),a("p",{staticClass:"mb-3"},[t._v("Bảng đơn hình")]),a("div",{staticClass:"overflow-auto"},[a("table",{staticClass:"table-auto text-center w-full mb-5"},[a("thead",[a("tr",[t._m(2),a("th",{staticClass:"border py-3"},[t._v("Ẩn cơ sở")]),a("th",{staticClass:"border py-3"},[t._v("Phương án")]),t._l(t.output.nX,(function(r){return[a("th",{key:"th"+r,staticClass:"border px-4 py-2"},[t._v("x"),a("sub",[t._v(t._s(r))])])]}))],2)]),t._l(t.output.steps,(function(r,n){return[a("tbody",{key:n,staticClass:"border"},[t._l(r,(function(r,n){return[a("tr",{key:"row"+n},[n<t.output.nLine?[t._l(r,(function(r,e){return[a("td",{key:"td"+e+"-"+n,staticClass:"border-l border-r px-4 py-2"},[a("div",1===e?[t._v(" x"),a("sub",[t._v(t._s(r))])]:[t._v(" "+t._s(r)+" ")])])]}))]:[a("td",{staticClass:"border px-4 py-2"}),a("td",{staticClass:"border px-4 py-2"}),a("td",{staticClass:"border px-4 py-2"}),t._l(r,(function(r,e){return[a("td",{key:"td_"+e+"-"+n,staticClass:"border-l border-r border py-3"},[t._v(t._s(r))])]}))]],2)]}))],2)]}))],2),a("div")])]],2)]):t._e()]),a("div",{staticClass:"text-center md:text-left"},[a("router-link",{staticClass:"align-baseline font-bold text-sm text-gray-500 hover:text-gray-700 mr-5",attrs:{to:{name:"c1"}}},[t._v(" ← Chương trước ")]),a("router-link",{staticClass:"align-baseline font-bold text-sm text-gray-500 hover:text-gray-700 mr-5",attrs:{to:{name:"home"}}},[t._v(" Trang chủ ")]),a("router-link",{staticClass:"align-baseline font-bold text-sm text-blue-500 hover:text-blue-700",attrs:{to:{name:"c3"}}},[t._v(" Chương kế → ")])],1)])},e=[function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("th",{staticClass:"border py-3"},[t._v("Hệ số C"),a("sub",[t._v("i")])])},function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("h1",{staticClass:"text-lg font-semibold"},[t._v("Bài toán không có phương án tối ưu do tồn tại Δ"),a("sub",[t._v("k")]),t._v(" > 0, mà a"),a("sub",[t._v("ik")]),t._v(" ≤ 0, ∀i")])},function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("th",{staticClass:"border py-3"},[t._v("Hệ số C"),a("sub",[t._v("i")])])}],i=(a("498a"),a("99af"),a("d3b7"),a("ac1f"),a("25f0"),a("1276"),a("d4ec")),o=a("14d0"),s=function t(){Object(i["a"])(this,t),this.x=[],this.optimalFx=0},u=function t(){Object(i["a"])(this,t),this.fx=[],this.rb=[],this.rbdau=[],this.n=0,this.m=0,this.orginN=0,this.pa=[],this.hsM=[],this.d=[],this.subVar=[],this.fakeVar=[],this.freeVar=[]};function l(t,r){var a=new o["a"];return a.tu=t.tu*r.mau+r.tu*t.mau,a.mau=t.mau*r.mau,a.RutGon(),a}function f(t,r){var a=new o["a"];return a.tu=t.tu*r.mau-r.tu*t.mau,a.mau=t.mau*r.mau,a.RutGon(),a}function p(t,r){var a=new o["a"];return a.tu=t.tu*r.tu,a.mau=t.mau*r.mau,a.RutGon(),a}function c(t,r){var a=new o["a"];return a.tu=t.tu*r.mau,a.mau=t.mau*r.tu,a.RutGon(),a}function d(t,r,a,n){for(var e=new u,i=t.trim(),s=i.split(" "),l=0;l<s.length;l++){var f=s[l].split("/");2===f.length?e.fx[l]=new o["a"](parseFloat(f[0]),parseFloat(f[1])):e.fx[l]=new o["a"](parseFloat(f[0]))}e.n=s.length,e.orginN=e.n;var p=r.trim(),c=p.split("\n");e.m=c.length;var d=0,v=a.trim();v=v.split(";");for(var g=0;g<v.length;g++){v[g]=v[g].trim();for(var h=v[g].split(" "),b=h.length-2,m=0;m<b;m++){var x=parseInt(h[m])-1;e.rbdau[x]=1,"<="===h[b]&&(e.rbdau[x]=-1)}}for(var w=0;w<e.m;w++){c[w]=c[w].trim();var y=c[w].split(" ");d=Math.max(d,y.length-2),e.rb[w]=[];for(var _=0;_<y.length-2;_++){var C=y[_].split("/");2===C.length?e.rb[w][_]=new o["a"](parseFloat(C[0]),parseFloat(C[1])):e.rb[w][_]=new o["a"](parseFloat(C[0]))}e.d[w]=y[y.length-2];var F=y[y.length-1].split("/");2===F.length?e.pa[w]=new o["a"](parseFloat(F[0]),parseFloat(F[1])):e.pa[w]=new o["a"](parseFloat(F[0]))}e.n=d;for(var R=0;R<e.n;R++)void 0===e.fx[R]&&(e.fx[R]=new o["a"]);return e.type=n.trim(),e}function v(t){var r=new u;if(r.orginN=t.m,"min"===t.type){r.type="max";for(var a=0;a<t.m;a++)"<="===t.d[a]?r.rbdau[a]=-1:">="===t.d[a]&&(r.rbdau[a]=1);for(var n=0;n<t.n;n++)void 0===t.rbdau[n]?r.d[n]="=":1===t.rbdau[n]?r.d[n]="<=":-1===t.rbdau[n]&&(r.d[n]=">=")}else{r.type="min";for(var e=0;e<t.m;e++)"<="===t.d[e]?r.rbdau[e]=1:">="===t.d[e]&&(r.rbdau[e]=-1);for(var i=0;i<t.n;i++)void 0===t.rbdau[i]?r.d[i]="=":1===t.rbdau[i]?r.d[i]=">=":-1===t.rbdau[i]&&(r.d[i]="<=")}r.n=t.m,r.m=t.n;for(var o=0;o<t.m;o++)r.fx[o]=t.pa[o];for(var s=0;s<t.n;s++){r.pa[s]=t.fx[s],r.rb[s]=[];for(var l=0;l<t.m;l++)r.rb[s][l]=t.rb[l][s]}return r}function g(t,r,a,n,e,i,s,u){for(var f=0;f<t.x.length;f++)if(void 0===t.x[f])return'<p class="font-semibold">Không tìm được phương án tối ưu</p><hr class="my-4">';var c='<div class="overflow-auto"><p class="text-lg font-semibold">Phương án tối ưu của bài toán đối ngẫu:</p><hr class="my-4"><table class="table-auto w-full mb-5"><tr><td nowrap="nowrap">';c+="Ta có:<br>";for(var d=0;d<n.length;d++){c+="x<sub>"+(n[d]+1).toString()+"</sub> = "+e.x[n[d]].Xuat+" &ne; 0 &rarr; ";for(var v="",g=0,h=0;h<r.rb[n[d]].length;h++){var b=r.rb[n[d]][h].giatri;0!==b&&(0!==g?v+=b>0?" + ":" - ":b<0&&(v+="-"),1!==b&&-1!==b&&(v+=r.rb[n[d]][h].Xuat_duong.toString()),v+="y<sub>"+(h+1).toString()+"</sub>",g+=1)}v+=" = "+r.pa[n[d]].Xuat+"<br>",c+=v}if(c+="<br>",0!==i.length){c+="\n";for(var m="",x=0;x<i.length;x++)m+="("+(i[x]+1).toString()+")";c+="Thay X* vào ràng buộc "+m+" của bài toán gốc<br>";for(var w=0;w<i.length;w++){for(var y="",_="",C=0,F=0;F<a.n;F++){var R=a.rb[i[w]][F].giatri;0!==R&&(0!==C?(y+=R>0?" + ":" - ",_+=R>0?" + ":" - "):R<0&&(y+="-",_+="-"),1!==R&&-1!==R&&(y+=a.rb[i[w]][F].Xuat_duong.toString(),_+=a.rb[i[w]][F].Xuat_duong.toString()),y+="x<sub>"+(F+1).toString()+"</sub>",_+=(1!==R&&1!==R?".":"")+e.x[F].Xuat.toString(),C+=1)}y+=(a.pa[i[w]].giatri>0?" - ":" + ")+a.pa[i[w]].Xuat_duong+" = ",_+=(a.pa[i[w]].giatri>0?" - ":" + ")+a.pa[i[w]].Xuat_duong+" = ",c+=y+_+s[w].Xuat+"<br>"}c+="<br>Nên:<br>";for(var X=0;X<i.length;X++)c=c+"y<sub>"+(i[X]+1).toString()+"</sub> = 0<br>"}if(0!==u.length){c+="Ta lấy: ";for(var S=0;S<u.length;S++)c+="y<sub>"+(u[S]+1).toString()+"</sub> = 0"}c+="<br>Giải các phương trình ta được: ",c+='<br><span class="font-semibold">Y*</span> = (';for(var k=0;k<t.x.length;k++)c+=t.x[k].Xuat,k!==r.n-1&&(c+=", ");c+=') và <span class="font-semibold">g(Y*)</span> = ';for(var E=new o["a"],M=0;M<r.n;M++)E=l(E,p(r.fx[M],t.x[M]));return c+=E.Xuat+' = <span class = "font-semibold"> f(X*)</span>',c+="</td></tr></table></div>",c}function h(t,r){var a=new s,n=t.trim();a.optimalFx=parseFloat(n);var e=r.trim();e=e.split(" ");for(var i=0;i<e.length;i++){var u=e[i].split("/");2===u.length?a.x.push(new o["a"](parseFloat(u[0]),parseFloat(u[1]))):a.x.push(new o["a"](parseFloat(u[0])))}return a}function b(t,r){for(var a=0;a<t.length;a++)if(a!==r)for(var n=new o["a"](parseFloat(-1)),e=p(c(t[a][r],t[r][r]),n),i=0;i<t[a].length;i++)t[a][i]=l(t[a][i],p(t[r][i],e));return t}function m(t){var r=t.length,a=0;while(r>a)t=b(t,a),a+=1;for(var n=0;n<r;n++)for(var e=t[n][n],i=0;i<t[n].length;i++)t[n][i]=c(t[n][i],e);for(var o=[],s=0;s<r;s++)o.push(t[s][t[s].length-1]);return o}function x(t,r,a,n){for(var e=h(a,n),i=new s,u=0,c=[],d=[],v=[],b=[],x=0;x<t.m;x++){for(var w=new o["a"],y=0;y<t.n;y++)w=l(w,p(t.rb[x][y],e.x[y]));w=f(w,t.pa[x]),0!==w.giatri&&(i.x[x]=new o["a"],u+=1,d.push(x),v.push(w))}for(var _=0;_<t.n;_++)0!==e.x[_].giatri&&c.push(_);for(var C=[],F=0;F<r.m;F++)if(0!==e.x[F].giatri){for(var R=[],X=0;X<r.n;X++)void 0===i.x[X]&&R.push(r.rb[F][X]);R.push(r.pa[F]),C.push(R)}for(var S=[],k=0;k<C.length;k++)for(var E=0;E<C[k].length;E++)if(0!==C[k][E].giatri){var M={key:k,value:E};S.push(M);break}S.sort((function(t,r){return t.value>r.value?1:-1}));for(var B=[].concat(C),P=0;P<C.length;P++)C[P]=B[S[P].key];if(C.length<t.m-u){var D=0,T=t.m-u;while(C.length<T){b.push(D);var V=C.length;C[V]=[],C[V][D]=new o["a"](parseFloat(1));for(var I=0;I<C[0].length;I++)I!==D&&(C[V][I]=new o["a"](parseFloat(0)));D+=1}}for(var N=m(C),A=0,$=0;$<r.n;$++)void 0===i.x[$]&&(i.x[$]=N[A],A+=1);return g(i,r,t,c,e,d,v,b)}function w(t,r,a,n,e,i){var o=d(t,r,a,n),s=v(o);return x(o,s,e,i)}var y=w,_=function t(){Object(i["a"])(this,t),this.fx=[],this.rb=[],this.rbdau=[],this.n=0,this.m=0,this.orginN=0,this.pa=[],this.hsM=[],this.d=[],this.subVar=[],this.fakeVar=[],this.freeVar=[],this.type=""};function C(t,r){var a=new o["a"];return a.tu=t.tu*r.mau+r.tu*t.mau,a.mau=t.mau*r.mau,a.RutGon(),a}function F(t,r){var a=new o["a"];return a.tu=t.tu*r.mau-r.tu*t.mau,a.mau=t.mau*r.mau,a.RutGon(),a}function R(t,r){var a=new o["a"];return a.tu=t.tu*r.tu,a.mau=t.mau*r.mau,a.RutGon(),a}function X(t,r){var a=new o["a"];return a.tu=t.tu*r.mau,a.mau=t.mau*r.tu,a.RutGon(),a}function S(t,r,a,n){for(var e=new _,i=t.trim(),s=i.split(" "),u=0;u<s.length;u++){var l=s[u].split("/");2===l.length?e.fx[u]=new o["a"](parseFloat(l[0]),parseFloat(l[1])):e.fx[u]=new o["a"](parseFloat(l[0]))}e.n=s.length,e.orginN=e.n;var f=r,p=f.split("\n");e.m=p.length;var c=0,d=a.trim();d=d.split(";");for(var v=0;v<d.length;v++){d[v]=d[v].trim();for(var g=d[v].split(" "),h=g.length-2,b=0;b<h;b++){var m=parseInt(g[b])-1;e.rbdau[m]=1,"<="===g[h]&&(e.rbdau[m]=-1)}}for(var x=0;x<e.m;x++){p[x]=p[x].trim();var w=p[x].split(" ");c=Math.max(c,w.length-2),e.rb[x]=[];for(var y=0;y<w.length-2;y++){var C=w[y].split("/");2===C.length?e.rb[x][y]=new o["a"](parseFloat(C[0]),parseFloat(C[1])):e.rb[x][y]=new o["a"](parseFloat(C[0]))}e.d[x]=w[w.length-2];var F=w[w.length-1].split("/");2===F.length?e.pa[x]=new o["a"](parseFloat(F[0]),parseFloat(F[1])):e.pa[x]=new o["a"](parseFloat(F[0]))}e.n=c;for(var R=0;R<e.n;R++)void 0===e.fx[R]&&(e.fx[R]=new o["a"]);return e.type=n.trim(),e}function k(t){for(var r=Object.assign(new _,t),a=0;a<r.n;a++)-1===r.rbdau[a]&&(r.fx[a].tu*=-1);for(var n=0;n<r.m;n++)if(r.pa[n].giatri<0){r.pa[n].tu*=-1,r.d[n]=">="===r.d[n]?"<=":">=";for(var e=0;e<r.n;e++)r.rb[n][e].tu*=-1}for(var i=0,s=0;s<r.n;s++){for(var u=0,l=0;l<r.m;l++)-1===r.rbdau[s]&&(r.rb[l][s].tu*=-1),void 0===r.rbdau[s]&&(u=1,void 0===r.fx[r.n+i]&&(r.fx[r.n+i]=new o["a"](-1*r.fx[s].tu)),r.rb[l][r.n+i]=new o["a"](-1*r.rb[l][s].tu));void 0===r.rbdau[s]&&r.freeVar.push(r.n+i),1===u&&(i+=1)}if(r.n=r.n+i,"max"===r.type)for(var f=0;f<r.n;f++)r.fx[f].tu*=-1;for(var p=0;p<r.n;p++)void 0===r.fx[p]&&(r.fx[p]=new o["a"]);return r.rb[r.m]=[],r}function E(t){var r=new _;if(r.orginN=t.m,"min"===t.type){r.type="max";for(var a=0;a<t.m;a++)"<="===t.d[a]?r.rbdau[a]=-1:">="===t.d[a]&&(r.rbdau[a]=1);for(var n=0;n<t.n;n++)void 0===t.rbdau[n]?r.d[n]="=":1===t.rbdau[n]?r.d[n]="<=":-1===t.rbdau[n]&&(r.d[n]=">=")}else{r.type="min";for(var e=0;e<t.m;e++)"<="===t.d[e]?r.rbdau[e]=1:">="===t.d[e]&&(r.rbdau[e]=-1);for(var i=0;i<t.n;i++)void 0===t.rbdau[i]?r.d[i]="=":1===t.rbdau[i]?r.d[i]=">=":-1===t.rbdau[i]&&(r.d[i]="<=")}r.n=t.m,r.m=t.n;for(var o=0;o<t.m;o++)r.fx[o]=t.pa[o];for(var s=0;s<t.n;s++){r.pa[s]=t.fx[s],r.rb[s]=[];for(var u=0;u<t.m;u++)r.rb[s][u]=t.rb[u][s]}return r}function M(t){for(var r=0;r<t.m;r++)for(var a=0;a<t.n;a++)t.rb[t.m][a]=new o["a"],t.hsM[a]=new o["a"],void 0===t.fx[a]&&(t.fx[a]=new o["a"]),void 0===t.rb[r][a]&&(t.rb[r][a]=new o["a"]);return t}function B(t,r){for(var a=0,n=0;n<t.n;n++){for(var e=new o["a"],i=new o["a"],s=0;s<t.m;s++)99999999!==t.fx[r[s]].giatri?i=C(i,R(t.fx[r[s]],t.rb[s][n])):e=C(e,t.rb[s][n]);t.rb[t.m][n]=99999999!==t.fx[n].giatri?F(i,t.fx[n]):i;var u=new o["a"](1);t.hsM[n]=99999999!==t.fx[n].giatri?e:F(e,u),(t.hsM[n].giatri>t.hsM[a].giatri||t.hsM[n].giatri===t.hsM[a].giatri&&t.rb[t.m][a].giatri<t.rb[t.m][n].giatri)&&(a=n)}return a}function P(t,r){for(var a=0;a<r.length;a++){for(var n=0,e=0;e<t.m;e++)t.rb[e][r[a]].giatri<=0&&++n;if(n===t.m)return!1}return!0}function D(t){for(var r=1,a=[],n=0;n<t.n;n++)(t.hsM[n].giatri>0||!t.hsM[n].giatri&&t.rb[t.m][n].giatri>0)&&(r=0,a.push(n));return r?1:P(t,a)?2:0}function T(t){for(var r=[],a=0;a<t.m;a++)r[a]=-1,">="===t.d[a]?(t.subVar.push(a),t.rb[a][t.n++]=new o["a"](parseFloat(-1))):"<="===t.d[a]&&(t.subVar.push(a),t.rb[a][t.n++]=new o["a"](parseFloat(1)));t=M(t);for(var n=0,e=0;e<t.n;e++){for(var i=0,s=0,u=0,l=0;l<t.m;l++)1===t.rb[l][e].giatri?(u=l,++i):0===t.rb[l][e].giatri&&++s;1===i&&s===t.m-1&&(r[u]=e,n+=1)}if(n<t.m)for(var f=0;f<t.m;f++)-1===r[f]&&(t.fakeVar.push(t.n),t.fx[t.n]=new o["a"](parseFloat(99999999)),r[f]=t.n,t.rb[f][t.n++]=new o["a"](parseFloat(1)));return t=M(t),r}function V(t,r){for(var a=parseFloat(1e4),n=0,e=0;e<t.m;e++)t.rb[e][r].giatri>0&&t.pa[e].giatri/t.rb[e][r].giatri<a&&(a=t.pa[e].giatri/t.rb[e][r].giatri,n=e);return n}function I(t,r){for(var a=new o["a"],n=0;n<r.orginN;n++)a=C(a,R(r.fx[n],t[n]));return a.RutGon(),a}function N(t,r,a,n,e){for(var i=[],o=0;o<r.m+1;o++){var s=[];if(o<r.m&&(99999999!==r.fx[t[o]].giatri?s.push(r.fx[t[o]].giatri):s.push("M"),s.push(t[o]+1),s.push(r.pa[o].Xuat)),o===r.m)for(var u=0;u<r.n;u++){var l="";0!==r.hsM[u].giatri?(1===r.hsM[u].giatri?l="M":-1===r.hsM[u].giatri?l="-M":0!==r.hsM[u].giatri&&(l=r.hsM[u].Xuat+"M"),0===r.hsM[u].giatri||0!==r.rb[o][u].giatri?(l+=r.rb[o][u].giatri<0?"-":"+",l+=r.rb[o][u].Xuat_duong,-1!==a&&u===a&&(l="("+l+")"),s.push(l)):(u===a&&(l="("+l+")"),s.push(l))):(l=r.rb[o][u].Xuat,u===a&&(l="("+l+")"),s.push(l))}else for(var f=0;f<r.n;f++){var p=r.rb[o][f].Xuat;(-1!==a&&o===n||0===e)&&f===a&&(p="["+p+"]"),s.push(p)}i.push(s)}return i}function A(t,r,a){for(var n=[],e=0;e<a.n;e++)n[e]=new o["a"];for(var i=0;i<a.m;i++)n[t[i]].tu=a.pa[i].tu,n[t[i]].mau=a.pa[i].mau;for(var s=0;s<a.n;s++)-1===a.rbdau[s]&&(n[s].tu*=-1,a.fx[s].tu*=-1);var u={success:!0,result:{fx:0,x:[]}},l=I(n,a);if("max"===a.type){for(var f=0;f<a.n;f++)a.fx[f].tu*=-1;l.tu*=-1}if(0!==a.freeVar.length)for(var p=0;p<a.freeVar.length;p++)l=C(l,R(a.fx[a.freeVar[p]],n[a.freeVar[p]]));u.result.fx=l.Xuat;for(var c=0;c<a.n;c++)u.result.x.push(n[c].Xuat);return u}function $(t,r,a,n){var e=S(t,r,a,n),i=E(e);i=k(i);for(var o=T(i),s=[],u=[],l="",f=0;f<i.m;f++)l+=o[f].toString();void 0===u[l]&&(u[l]=0),u[l]+=1;var p={nX:i.n,nLine:i.m,steps:[],answer:{}};while(1){var c=B(i,o),d=V(i,c);l="";for(var v=0;v<i.m;v++)l+=v===d?c.toString():o[v].toString();if(void 0===u[l]&&(u[l]=0),u[l]+=1,1!==u[l]){c=0;for(var g=0;g<i.n;++g)(i.hsM[g].giatri<i.hsM[c].giatri||i.hsM[g].giatri===i.hsM[c].giatri&&i.rb[i.m][c].giatri>i.rb[i.m][g].giatri&&i.rb[i.m][g].giatri>0)&&(c=g);d=V(i,c)}var h=D(i);if(1===h&&(c=-1),s.push(N(o,i,c,d,h)),0===h)return p.steps=s,p.answer=!1,p;if(1===h)return p.steps=s,p.answer=A(o,n,i),p;-1!==c&&(o[d]=c);for(var b=i.rb[d][c],m=0;m<i.m;m++)if(m!==d){i.pa[m]=X(F(R(i.pa[m],b),R(i.pa[d],i.rb[m][c])),b);for(var x=0;x<i.n;x++)x!==c&&(i.rb[m][x]=X(F(R(i.rb[m][x],b),R(i.rb[d][x],i.rb[m][c])),b))}for(var w=0;w<i.m;w++)w!==d&&i.rb[w][c].init();i.pa[d]=X(i.pa[d],i.rb[d][c]);for(var y=0;y<i.n;++y)i.rb[d][y]=X(i.rb[d][y],b)}}var O=$,H=function t(){Object(i["a"])(this,t),this.fx=[],this.rb=[],this.rbdau=[],this.n=0,this.m=0,this.orginN=0,this.pa=[],this.hsM=[],this.d=[],this.subVar=[],this.fakeVar=[],this.freeVar=[],this.type=""};function G(t,r,a,n){for(var e=new H,i=t.trim(),s=i.split(" "),u=0;u<s.length;u++){var l=s[u].split("/");2===l.length?e.fx[u]=new o["a"](parseFloat(l[0]),parseFloat(l[1])):e.fx[u]=new o["a"](parseFloat(l[0]))}e.n=s.length,e.orginN=e.n;var f=r,p=f.split("\n");e.m=p.length;var c=0,d=a.trim();d=d.split(";");for(var v=0;v<d.length;v++){d[v]=d[v].trim();for(var g=d[v].split(" "),h=g.length-2,b=0;b<h;b++){var m=parseInt(g[b])-1;e.rbdau[m]=1,"<="===g[h]&&(e.rbdau[m]=-1)}}for(var x=0;x<e.m;x++){p[x]=p[x].trim();var w=p[x].split(" ");c=Math.max(c,w.length-2),e.rb[x]=[];for(var y=0;y<w.length-2;y++){var _=w[y].split("/");2===_.length?e.rb[x][y]=new o["a"](parseFloat(_[0]),parseFloat(_[1])):e.rb[x][y]=new o["a"](parseFloat(_[0]))}e.d[x]=w[w.length-2];var C=w[w.length-1].split("/");2===C.length?e.pa[x]=new o["a"](parseFloat(C[0]),parseFloat(C[1])):e.pa[x]=new o["a"](parseFloat(C[0]))}e.n=c;for(var F=0;F<e.n;F++)void 0===e.fx[F]&&(e.fx[F]=new o["a"]);return e.type=n.trim(),e}function j(t){for(var r=Object.assign(new H,t),a=0;a<r.n;a++)-1===r.rbdau[a]&&(r.fx[a].tu*=-1);for(var n=0;n<r.m;n++)if(r.pa[n].giatri<0){r.pa[n].tu*=-1,r.d[n]=">="===r.d[n]?"<=":">=";for(var e=0;e<r.n;e++)r.rb[n][e].tu*=-1}for(var i=0,s=0;s<r.n;s++){for(var u=0,l=0;l<r.m;l++)-1===r.rbdau[s]&&(r.rb[l][s].tu*=-1),void 0===r.rbdau[s]&&(u=1,void 0===r.fx[r.n+i]&&(r.fx[r.n+i]=new o["a"](-1*r.fx[s].tu)),r.rb[l][r.n+i]=new o["a"](-1*r.rb[l][s].tu));void 0===r.rbdau[s]&&r.freeVar.push(r.n+i),1===u&&(i+=1)}if(r.n=r.n+i,"max"===r.type){for(var f=0;f<r.n;f++)r.fx[f].tu*=-1;r.type="min"}for(var p=0;p<r.n;p++)void 0===r.fx[p]&&(r.fx[p]=new o["a"]);return r.rb[r.m]=[],r}function L(t){var r=new H;if(r.orginN=t.m,"min"===t.type){r.type="max";for(var a=0;a<t.m;a++)"<="===t.d[a]?r.rbdau[a]=-1:">="===t.d[a]&&(r.rbdau[a]=1);for(var n=0;n<t.n;n++)void 0===t.rbdau[n]?r.d[n]="=":1===t.rbdau[n]?r.d[n]="<=":-1===t.rbdau[n]&&(r.d[n]=">=")}else{r.type="min";for(var e=0;e<t.m;e++)"<="===t.d[e]?r.rbdau[e]=1:">="===t.d[e]&&(r.rbdau[e]=-1);for(var i=0;i<t.n;i++)void 0===t.rbdau[i]?r.d[i]="=":1===t.rbdau[i]?r.d[i]=">=":-1===t.rbdau[i]&&(r.d[i]="<=")}r.n=t.m,r.m=t.n;for(var o=0;o<t.m;o++)r.fx[o]=t.pa[o];for(var s=0;s<t.n;s++){r.pa[s]=t.fx[s],r.rb[s]=[];for(var u=0;u<t.m;u++)r.rb[s][u]=t.rb[u][s]}return r}function U(t){for(var r=0;r<t.m;r++)for(var a=0;a<t.n;a++)t.rb[t.m][a]=new o["a"],t.hsM[a]=new o["a"],void 0===t.fx[a]&&(t.fx[a]=new o["a"]),void 0===t.rb[r][a]&&(t.rb[r][a]=new o["a"]);return t}function K(t){for(var r=[],a=0;a<t.m;a++)r[a]=-1,">="===t.d[a]?(t.subVar.push(a),t.rbdau[t.n]=1,t.rb[a][t.n++]=new o["a"](parseFloat(-1))):"<="===t.d[a]&&(t.subVar.push(a),t.rbdau[t.n]=1,t.rb[a][t.n++]=new o["a"](parseFloat(1)));t=U(t);for(var n=0,e=0;e<t.n;e++){for(var i=0,s=0,u=0,l=0;l<t.m;l++)1===t.rb[l][e].giatri?(u=l,++i):0===t.rb[l][e].giatri&&++s;1===i&&s===t.m-1&&(r[u]=e,n+=1)}if(n<t.m)for(var f=0;f<t.m;f++)-1===r[f]&&(t.fakeVar.push(t.n),t.fx[t.n]=new o["a"](parseFloat(99999999)),r[f]=t.n,t.rbdau[t.n]=1,t.rb[f][t.n++]=new o["a"](parseFloat(1)));return t=U(t),t}function Y(t,r){var a=0;r+='<td style="vertical-align:top" nowrap="nowrap"><strong><font color = "DodgerBlue">F(x):</font></strong> ';for(var n=0;n<t.fx.length;n++)0!==t.fx[n].giatri&&(0!==a?r+=t.fx[n].giatri>0?" + ":" &#8722; ":t.fx[n].giatri<0&&(r+="&#8722;"),1!==t.fx[n].giatri&&-1!==t.fx[n].giatri&&(r+=t.fx[n].Xuat_duong),r+="x<sub>"+(n+1).toString()+"</sub>",a+=1);r+=' &rarr; <font color = "Tomato"><strong>'+t.type+"</strong></font><br><strong>Ràng buộc:</strong>&emsp;&emsp; <table>";for(var e=0;e<t.m;e++){r+="<tr>";for(var i=0,o=0;o<t.n;o++){var s=t.rb[e][o].giatri;0!==s?(r+="<td>",0!==i?r+=s>0?" + ":" &#8722; ":s<0&&(r+="&#8722;"),1!==s&&-1!==s&&(r+=t.rb[e][o].Xuat_duong),r+="x<sub>"+(o+1).toString()+"</sub></td>",i+=1):r+="<td></td>"}r+="<td>",">="===t.d[e]?r+="  &ge; ":"<="===t.d[e]?r+="  &le; ":r+=" = ",r+="</td><td>"+t.pa[e].Xuat+"</td></tr>"}r+='</table><font color = "DodgerBlue"><strong>Với:</strong></font><br>';for(var u=0;u<t.n;u++)void 0!==t.rbdau[u]?(r+="x<sub>"+(u+1).toString()+"</sub> ",1===t.rbdau[u]?r+=" &ge; ":r+=" &le; ",r+="0",u!==t.n-1&&(r+=" , ")):(r+="x<sub>"+(u+1).toString()+"</sub> tùy ý",u!==t.n-1&&(r+=" , "));return r+="</td>",r}function J(t,r,a,n,e){var i=G(t,r,a,n),o="";o='<div class="overflow-auto"><p class="text-lg font-semibold">Bài toán</p><hr class="my-4"><table class="table-auto w-full mb-5"><tr><td class="text-lg"><strong>Dạng chính tắc</strong></td><td class="text-lg"><strong>Dạng đối ngẫu</strong></td></tr><tr>',o=Y(i,o);var s=L(i);if(o=Y(s,o),1===e){s=j(s),s=K(s),o+="</tr></table><br>",o+='<hr class="my-4"><table class="table-auto w-full mb-5><tr><td class="text-lg"><strong>Dạng chuẩn của bài toán đối ngẫu</strong></td></tr><td nowrap="nowrap"><strong><font color = "DodgerBlue">F(x):</font></strong>  ';for(var u=0,l=0;l<s.fx.length;l++)0!==u?o+=s.fx[l].giatri>=0?" + ":" &#8722; ":s.fx[l].giatri<0&&(o+="&#8722;"),1!==s.fx[l].giatri&&-1!==s.fx[l].giatri&&(99999999===s.fx[l].giatri?o+="M":o+=s.fx[l].Xuat_duong),o+="x<sub>"+(l+1).toString()+"</sub>",u+=1;o+=' &rarr; <font color = "Tomato"><strong>'+s.type+"</strong></font><br><strong>Ràng buộc:</strong>&emsp;&emsp; <table>";for(var f=0;f<s.m;f++){o+="<tr>";for(var p=0,c=0;c<s.n;c++){var d=s.rb[f][c].giatri;0!==d?(o+="<td>",0!==p?o+=d>=0?" + ":" &#8722; ":d<0&&(o+="&#8722;"),1!==d&&-1!==d&&(o+=s.rb[f][c].Xuat_duong),o+="x<sub>"+(c+1).toString()+"</sub></td>",p+=1):o+="<td></td>"}o+="<td>=</td><td>"+s.pa[f].Xuat+"</td>"}o+='</table><font color = "DodgerBlue"><strong>Với:</strong></font><br>';for(var v=0;v<s.n;v++)void 0!==s.rbdau[v]?(o+="x<sub>"+(v+1).toString()+"</sub> ",1===s.rbdau[v]?o+=" &ge; ":o+=" &le; ",o+="0",v!==s.n-1&&(o+=" , ")):(o+="x<sub>"+(v+1).toString()+"</sub> tùy ý",v!==s.n-1&&(o+=" , "))}return o+="</td></table></div>",o}var z=J,q={name:"C2Index",data:function(){return{input:{fx:"",matrix:"",fxRB:"",type:"min",opitmalFx:"",opitmalX:""},hasSubmitD2:!1,hasSubmitD1:!1,isHidden:!0,output:""}},methods:{submitD2:function(){""!==this.input.fx.trim()&&""!==this.input.matrix.trim()&&""!==this.input.fxRB.trim()&&""!==this.input.opitmalFx.trim()&&""!==this.input.opitmalX.trim()?(this.hasSubmitD2=!0,this.outputD2=y(this.input.fx,this.input.matrix,this.input.fxRB,this.input.type,this.input.opitmalFx,this.input.opitmalX),this.outputPrintD2=z(this.input.fx,this.input.matrix,this.input.fxRB,this.input.type,2)):this.$toasted.show("Không đủ dữ kiện đầu vào!")},submitD1:function(){""!==this.input.fx.trim()&&""!==this.input.matrix.trim()&&""!==this.input.fxRB.trim()?(this.hasSubmitD1=!0,this.output=O(this.input.fx,this.input.matrix,this.input.fxRB,this.input.type),this.outputPrint=z(this.input.fx,this.input.matrix,this.input.fxRB,this.input.type,1)):this.$toasted.show("Không đủ dữ kiện đầu vào!")},reset:function(){this.input.fx=this.input.matrix=this.input.fxRB=this.input.opitmalFx=this.input.opitmalX="",this.input.type="min"}}},Q=q,W=a("2877"),Z=Object(W["a"])(Q,n,e,!1,null,null,null);r["default"]=Z.exports},e8b5:function(t,r,a){var n=a("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);