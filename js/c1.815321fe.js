(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["c1"],{1276:function(t,r,n){"use strict";var a=n("d784"),e=n("44e7"),i=n("825a"),s=n("1d80"),o=n("4840"),u=n("8aa5"),l=n("50c4"),f=n("14c3"),c=n("9263"),p=n("d039"),d=[].push,g=Math.min,v=4294967295,h=!p((function(){return!RegExp(v,"y")}));a("split",2,(function(t,r,n){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var a=String(s(this)),i=void 0===n?v:n>>>0;if(0===i)return[];if(void 0===t)return[a];if(!e(t))return r.call(a,t,i);var o,u,l,f=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),g=0,h=new RegExp(t.source,p+"g");while(o=c.call(h,a)){if(u=h.lastIndex,u>g&&(f.push(a.slice(g,o.index)),o.length>1&&o.index<a.length&&d.apply(f,o.slice(1)),l=o[0].length,g=u,f.length>=i))break;h.lastIndex===o.index&&h.lastIndex++}return g===a.length?!l&&h.test("")||f.push(""):f.push(a.slice(g)),f.length>i?f.slice(0,i):f}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:r.call(this,t,n)}:r,[function(r,n){var e=s(this),i=void 0==r?void 0:r[t];return void 0!==i?i.call(r,e,n):a.call(String(e),r,n)},function(t,e){var s=n(a,t,this,e,a!==r);if(s.done)return s.value;var c=i(t),p=String(this),d=o(c,RegExp),b=c.unicode,x=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(h?"y":"g"),m=new d(h?c:"^(?:"+c.source+")",x),w=void 0===e?v:e>>>0;if(0===w)return[];if(0===p.length)return null===f(m,p)?[p]:[];var y=0,_=0,C=[];while(_<p.length){m.lastIndex=h?_:0;var R,E=f(m,h?p:p.slice(_));if(null===E||(R=g(l(m.lastIndex+(h?0:_)),p.length))===y)_=u(p,_,b);else{if(C.push(p.slice(y,_)),C.length===w)return C;for(var M=1;M<=E.length-1;M++)if(C.push(E[M]),C.length===w)return C;_=y=R}}return C.push(p.slice(y)),C}]}),!h)},"14c3":function(t,r,n){var a=n("c6b6"),e=n("9263");t.exports=function(t,r){var n=t.exec;if("function"===typeof n){var i=n.call(t,r);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==a(t))throw TypeError("RegExp#exec called on incompatible receiver");return e.call(t,r)}},"14d0":function(t,r,n){"use strict";n("d3b7"),n("25f0");var a=n("d4ec");function e(t,r){for(var n=0;n<r.length;n++){var a=r[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function i(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}var s=function(t,r){var n;while(0!==r)n=t%r,t=r,r=n;return t},o=function(){function t(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;Object(a["a"])(this,t),this.tu=r,this.mau=n}return i(t,[{key:"init",value:function(){this.tu=0,this.mau=1}},{key:"RutGon",value:function(){var t=s(this.tu,this.mau);this.tu/=t,this.mau/=t}},{key:"giatri",get:function(){return this.tu/this.mau}},{key:"Xuat",get:function(){var t="";return this.tu/this.mau===0?"0":(this.tu/this.mau<0&&(t+="-"),t+=Math.abs(this.tu).toString(),1!==this.mau&&(t+="/"+Math.abs(this.mau).toString()),t)}},{key:"Xuat_duong",get:function(){var t="";return this.tu/this.mau===0?"0":(t+=Math.abs(this.tu).toString(),1!==this.mau&&(t+="/"+Math.abs(this.mau).toString()),t)}}]),t}();r["a"]=o},"25f0":function(t,r,n){"use strict";var a=n("6eeb"),e=n("825a"),i=n("d039"),s=n("ad6d"),o="toString",u=RegExp.prototype,l=u[o],f=i((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),c=l.name!=o;(f||c)&&a(RegExp.prototype,o,(function(){var t=e(this),r=String(t.source),n=t.flags,a=String(void 0===n&&t instanceof RegExp&&!("flags"in u)?s.call(t):n);return"/"+r+"/"+a}),{unsafe:!0})},"44e7":function(t,r,n){var a=n("861d"),e=n("c6b6"),i=n("b622"),s=i("match");t.exports=function(t){var r;return a(t)&&(void 0!==(r=t[s])?!!r:"RegExp"==e(t))}},"498a":function(t,r,n){"use strict";var a=n("23e7"),e=n("58a8").trim,i=n("c8d2");a({target:"String",proto:!0,forced:i("trim")},{trim:function(){return e(this)}})},5014:function(t,r,n){"use strict";n.r(r);var a=function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("div",[n("h2",{staticClass:"text-2xl font-semibold text-center md:text-left"},[t._v("Chương 1")]),n("p",{staticClass:"text-gray-700 text-center md:text-left"},[t._v("Bài toán quy hoạch tuyến tính")]),n("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6"},[n("div",{staticClass:"bg-white shadow-md p-5"},[n("div",{staticClass:"flex mb-4"},[n("label",{staticClass:"text-gray-700 font-bold my-auto",attrs:{for:"fx"}},[t._v(" F(x) ")]),n("div",{staticClass:"flex-1 mx-2"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.input.fx,expression:"input.fx"}],staticClass:"appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow",attrs:{id:"fx",type:"text",placeholder:"Phương trình F(x) ...",title:"Phương trình F(x)"},domProps:{value:t.input.fx},on:{input:function(r){r.target.composing||t.$set(t.input,"fx",r.target.value)}}})]),n("div",{staticClass:"relative"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.input.type,expression:"input.type"}],staticClass:"block appearance-none w-full bg-white border border-gray-400 hover:border-gray-400 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500 focus:shadow",attrs:{title:"Bài toán",id:"cbValue"},on:{change:function(r){var n=Array.prototype.filter.call(r.target.options,(function(t){return t.selected})).map((function(t){var r="_value"in t?t._value:t.value;return r}));t.$set(t.input,"type",r.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"min"}},[t._v("Min")]),n("option",{attrs:{value:"max"}},[t._v("Max")])]),n("div",{staticClass:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},[n("svg",{staticClass:"fill-current h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])])])]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.input.matrix,expression:"input.matrix"}],staticClass:"block appearance-none border border-gray-400 rounded w-full text-gray-700 py-2 px-3 focus:outline-none focus:border-blue-500 focus:shadow mb-4",attrs:{placeholder:"Ma trận ...",title:"Ma trận",id:"matriX",rows:"4"},domProps:{value:t.input.matrix},on:{input:function(r){r.target.composing||t.$set(t.input,"matrix",r.target.value)}}}),n("div",{staticClass:"flex mb-4"},[n("label",{staticClass:"text-gray-700 font-bold my-auto mr-2",attrs:{id:"rangBuoc",for:"fxRB"}},[t._v(" Rằng buộc ")]),n("div",{staticClass:"flex-1"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.input.fxRB,expression:"input.fxRB"}],staticClass:"appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow",attrs:{id:"fxRB",type:"text",placeholder:"Rằng buộc đề bài ...",title:"Rằng buộc ..."},domProps:{value:t.input.fxRB},on:{input:function(r){r.target.composing||t.$set(t.input,"fxRB",r.target.value)}}})])]),n("div",{staticClass:"text-center md:text-left"},[n("button",{staticClass:"bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:shadow-outline rounded px-5 py-2 mr-2",attrs:{id:"btnCalc"},on:{click:t.submit}},[t._v(" Thực hiện ")]),n("button",{staticClass:"bg-gray-500 text-white hover:bg-gray-600 focus:outline-none rounded px-4 py-2",attrs:{id:"btnDel"},on:{click:t.reset}},[t._v(" Xóa ")])])]),t.hasSubmit?n("div",{staticClass:"grid grid-cols-1 gap-4 lg:col-span-2"},[n("div",{staticClass:"bg-white shadow-md p-5 whitespace-pre-line",domProps:{innerHTML:t._s(t.outputPrint)}}),n("div",{staticClass:"bg-white shadow-md p-5"},[t.output.answer.success?[n("h1",{staticClass:"text-lg font-semibold"},[t._v("Bài toán có lời giải")]),n("hr",{staticClass:"my-4"}),n("p",{staticClass:"mb-3"},[t._v("Bảng đơn hình")]),n("div",{staticClass:"overflow-auto"},[n("table",{staticClass:"table-auto text-center w-full mb-5"},[n("thead",[n("tr",[t._m(0),n("th",{staticClass:"border py-3"},[t._v("Ẩn cơ sở")]),n("th",{staticClass:"border py-3"},[t._v("Phương án")]),t._l(t.output.nX,(function(r){return[n("th",{key:"th"+r,staticClass:"border px-4 py-2"},[t._v("x"),n("sub",[t._v(t._s(r))])])]}))],2)]),t._l(t.output.steps,(function(r,a){return[n("tbody",{key:a,staticClass:"border"},[t._l(r,(function(r,a){return[n("tr",{key:"row"+a},[a<t.output.nLine?[t._l(r,(function(r,e){return[n("td",{key:"td"+e+"-"+a,staticClass:"border-l border-r px-4 py-2"},[n("div",1===e?[t._v(" x"),n("sub",[t._v(t._s(r))])]:[t._v(" "+t._s(r)+" ")])])]}))]:[n("td",{staticClass:"border px-4 py-2"}),n("td",{staticClass:"border px-4 py-2"}),n("td",{staticClass:"border px-4 py-2"}),t._l(r,(function(r,e){return[n("td",{key:"td_"+e+"-"+a,staticClass:"border-l border-r border py-3"},[t._v(t._s(r))])]}))]],2)]}))],2)]}))],2),n("div",[n("p",{staticClass:"mb-3 font-semibold"},[t._v("Bài toán có phần tử tối ưu là:")]),n("div",{staticClass:"grid grid-cols-1 md:grid-cols-2 gap-2"},[n("p",[n("span",{staticClass:"font-semibold"},[t._v("F(X*)")]),t._v(" = "+t._s(t.output.answer.result.fx))]),n("p",[n("span",{staticClass:"font-semibold"},[t._v("X*")]),t._v(" = ("+t._s(t.output.answer.result.x.join(", "))+")")])])])])]:[t._m(1),n("hr",{staticClass:"my-4"}),n("p",{staticClass:"mb-3"},[t._v("Bảng đơn hình")]),n("div",{staticClass:"overflow-auto"},[n("table",{staticClass:"table-auto text-center w-full mb-5"},[n("thead",[n("tr",[t._m(2),n("th",{staticClass:"border py-3"},[t._v("Ẩn cơ sở")]),n("th",{staticClass:"border py-3"},[t._v("Phương án")]),t._l(t.output.nX,(function(r){return[n("th",{key:"th"+r,staticClass:"border px-4 py-2"},[t._v("x"),n("sub",[t._v(t._s(r))])])]}))],2)]),t._l(t.output.steps,(function(r,a){return[n("tbody",{key:a,staticClass:"border"},[t._l(r,(function(r,a){return[n("tr",{key:"row"+a},[a<t.output.nLine?[t._l(r,(function(r,e){return[n("td",{key:"td"+e+"-"+a,staticClass:"border-l border-r px-4 py-2"},[n("div",1===e?[t._v(" x"),n("sub",[t._v(t._s(r))])]:[t._v(" "+t._s(r)+" ")])])]}))]:[n("td",{staticClass:"border px-4 py-2"}),n("td",{staticClass:"border px-4 py-2"}),n("td",{staticClass:"border px-4 py-2"}),t._l(r,(function(r,e){return[n("td",{key:"td_"+e+"-"+a,staticClass:"border-l border-r border py-3"},[t._v(t._s(r))])]}))]],2)]}))],2)]}))],2),n("div")])]],2)]):t._e()]),n("div",{staticClass:"text-center md:text-left"},[n("router-link",{staticClass:"align-baseline font-bold text-sm text-gray-500 hover:text-gray-700 mr-5",attrs:{to:{name:"home"}}},[t._v(" ← Về trang chủ ")]),n("router-link",{staticClass:"align-baseline font-bold text-sm text-blue-500 hover:text-blue-700",attrs:{to:{name:"c2"}}},[t._v(" Chương kế → ")])],1)])},e=[function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("th",{staticClass:"border py-3"},[t._v("Hệ số C"),n("sub",[t._v("i")])])},function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("h1",{staticClass:"text-lg font-semibold"},[t._v("Bài toán không có phương án tối ưu do tồn tại Δ"),n("sub",[t._v("k")]),t._v(" > 0, mà a"),n("sub",[t._v("ik")]),t._v(" ≤ 0, ∀i")])},function(){var t=this,r=t.$createElement,n=t._self._c||r;return n("th",{staticClass:"border py-3"},[t._v("Hệ số C"),n("sub",[t._v("i")])])}],i=(n("498a"),n("d3b7"),n("ac1f"),n("25f0"),n("1276"),n("d4ec")),s=n("14d0"),o=function t(){Object(i["a"])(this,t),this.fx=[],this.rb=[],this.rbdau=[],this.n=0,this.m=0,this.orginN=0,this.pa=[],this.hsM=[],this.d=[],this.subVar=[],this.fakeVar=[],this.freeVar=[],this.type=""};function u(t,r){var n=new s["a"];return n.tu=t.tu*r.mau+r.tu*t.mau,n.mau=t.mau*r.mau,n.RutGon(),n}function l(t,r){var n=new s["a"];return n.tu=t.tu*r.mau-r.tu*t.mau,n.mau=t.mau*r.mau,n.RutGon(),n}function f(t,r){var n=new s["a"];return n.tu=t.tu*r.tu,n.mau=t.mau*r.mau,n.RutGon(),n}function c(t,r){var n=new s["a"];return n.tu=t.tu*r.mau,n.mau=t.mau*r.tu,n.RutGon(),n}function p(t,r,n,a){for(var e=new o,i=t.trim(),u=i.split(" "),l=0;l<u.length;l++){var f=u[l].split("/");2===f.length?e.fx[l]=new s["a"](parseFloat(f[0]),parseFloat(f[1])):e.fx[l]=new s["a"](parseFloat(f[0]))}e.n=u.length,e.orginN=e.n;var c=r,p=c.split("\n");e.m=p.length;var d=0,g=n.trim();g=g.split(";");for(var v=0;v<g.length;v++){g[v]=g[v].trim();for(var h=g[v].split(" "),b=h.length-2,x=0;x<b;x++){var m=parseInt(h[x])-1;e.rbdau[m]=1,"<="===h[b]&&(e.rbdau[m]=-1)}}for(var w=0;w<e.m;w++){p[w]=p[w].trim();var y=p[w].split(" ");d=Math.max(d,y.length-2),e.rb[w]=[];for(var _=0;_<y.length-2;_++){var C=y[_].split("/");2===C.length?e.rb[w][_]=new s["a"](parseFloat(C[0]),parseFloat(C[1])):e.rb[w][_]=new s["a"](parseFloat(C[0]))}e.d[w]=y[y.length-2];var R=y[y.length-1].split("/");2===R.length?e.pa[w]=new s["a"](parseFloat(R[0]),parseFloat(R[1])):e.pa[w]=new s["a"](parseFloat(R[0]))}e.n=d;for(var E=0;E<e.n;E++)void 0===e.fx[E]&&(e.fx[E]=new s["a"]);return e.type=a.trim(),e}function d(t){for(var r=Object.assign(new o,t),n=0;n<r.n;n++)-1===r.rbdau[n]&&(r.fx[n].tu*=-1);for(var a=0;a<r.m;a++)if(r.pa[a].giatri<0){r.pa[a].tu*=-1,r.d[a]=">="===r.d[a]?"<=":">=";for(var e=0;e<r.n;e++)r.rb[a][e].tu*=-1}for(var i=0,u=0;u<r.n;u++){for(var l=0,f=0;f<r.m;f++)-1===r.rbdau[u]&&(r.rb[f][u].tu*=-1),void 0===r.rbdau[u]&&(l=1,void 0===r.fx[r.n+i]&&(r.fx[r.n+i]=new s["a"](-1*r.fx[u].tu)),r.rb[f][r.n+i]=new s["a"](-1*r.rb[f][u].tu));void 0===r.rbdau[u]&&r.freeVar.push(r.n+i),1===l&&(i+=1)}if(r.n=r.n+i,"max"===r.type)for(var c=0;c<r.n;c++)r.fx[c].tu*=-1;for(var p=0;p<r.n;p++)void 0===r.fx[p]&&(r.fx[p]=new s["a"]);return r.rb[r.m]=[],r}function g(t){for(var r=0;r<t.m;r++)for(var n=0;n<t.n;n++)t.rb[t.m][n]=new s["a"],t.hsM[n]=new s["a"],void 0===t.fx[n]&&(t.fx[n]=new s["a"]),void 0===t.rb[r][n]&&(t.rb[r][n]=new s["a"]);return t}function v(t,r){for(var n=0,a=0;a<t.n;a++){for(var e=new s["a"],i=new s["a"],o=0;o<t.m;o++)99999999!==t.fx[r[o]].giatri?i=u(i,f(t.fx[r[o]],t.rb[o][a])):e=u(e,t.rb[o][a]);t.rb[t.m][a]=99999999!==t.fx[a].giatri?l(i,t.fx[a]):i;var c=new s["a"](1);t.hsM[a]=99999999!==t.fx[a].giatri?e:l(e,c),(t.hsM[a].giatri>t.hsM[n].giatri||t.hsM[a].giatri===t.hsM[n].giatri&&t.rb[t.m][n].giatri<t.rb[t.m][a].giatri)&&(n=a)}return n}function h(t,r){for(var n=0;n<r.length;n++){for(var a=0,e=0;e<t.m;e++)t.rb[e][r[n]].giatri<=0&&++a;if(a===t.m)return!1}return!0}function b(t){for(var r=1,n=[],a=0;a<t.n;a++)(t.hsM[a].giatri>0||!t.hsM[a].giatri&&t.rb[t.m][a].giatri>0)&&(r=0,n.push(a));return r?1:h(t,n)?2:0}function x(t){for(var r=[],n=0;n<t.m;n++)r[n]=-1,">="===t.d[n]?(t.subVar.push(n),t.rb[n][t.n++]=new s["a"](parseFloat(-1))):"<="===t.d[n]&&(t.subVar.push(n),t.rb[n][t.n++]=new s["a"](parseFloat(1)));t=g(t);for(var a=0,e=0;e<t.n;e++){for(var i=0,o=0,u=0,l=0;l<t.m;l++)1===t.rb[l][e].giatri?(u=l,++i):0===t.rb[l][e].giatri&&++o;1===i&&o===t.m-1&&(r[u]=e,a+=1)}if(a<t.m)for(var f=0;f<t.m;f++)-1===r[f]&&(t.fakeVar.push(t.n),t.fx[t.n]=new s["a"](parseFloat(99999999)),r[f]=t.n,t.rb[f][t.n++]=new s["a"](parseFloat(1)));return t=g(t),r}function m(t,r){for(var n=parseFloat(1e4),a=0,e=0;e<t.m;e++)t.rb[e][r].giatri>0&&t.pa[e].giatri/t.rb[e][r].giatri<n&&(n=t.pa[e].giatri/t.rb[e][r].giatri,a=e);return a}function w(t,r){for(var n=new s["a"],a=0;a<r.orginN;a++)n=u(n,f(r.fx[a],t[a]));return n.RutGon(),n}function y(t,r,n,a,e){for(var i=[],s=0;s<r.m+1;s++){var o=[];if(s<r.m&&(99999999!==r.fx[t[s]].giatri?o.push(r.fx[t[s]].giatri):o.push("M"),o.push(t[s]+1),o.push(r.pa[s].Xuat)),s===r.m)for(var u=0;u<r.n;u++){var l="";0!==r.hsM[u].giatri?(1===r.hsM[u].giatri?l="M":-1===r.hsM[u].giatri?l="-M":0!==r.hsM[u].giatri&&(l=r.hsM[u].Xuat+"M"),0===r.hsM[u].giatri||0!==r.rb[s][u].giatri?(l+=r.rb[s][u].giatri<0?"-":"+",l+=r.rb[s][u].Xuat_duong,-1!==n&&u===n&&(l="("+l+")"),o.push(l)):(u===n&&(l="("+l+")"),o.push(l))):(l=r.rb[s][u].Xuat,u===n&&(l="("+l+")"),o.push(l))}else for(var f=0;f<r.n;f++){var c=r.rb[s][f].Xuat;(-1!==n&&s===a||0===e)&&f===n&&(c="["+c+"]"),o.push(c)}i.push(o)}return i}function _(t,r,n){for(var a=[],e=0;e<n.n;e++)a[e]=new s["a"];for(var i=0;i<n.m;i++)a[t[i]].tu=n.pa[i].tu,a[t[i]].mau=n.pa[i].mau;for(var o=0;o<n.n;o++)-1===n.rbdau[o]&&(a[o].tu*=-1,n.fx[o].tu*=-1);var l={success:!0,result:{fx:0,x:[]}},c=w(a,n);if("max"===n.type){for(var p=0;p<n.n;p++)n.fx[p].tu*=-1;c.tu*=-1}if(0!==n.freeVar.length)for(var d=0;d<n.freeVar.length;d++)c=u(c,f(n.fx[n.freeVar[d]],a[n.freeVar[d]]));l.result.fx=c.Xuat;for(var g=0;g<n.n;g++)l.result.x.push(a[g].Xuat);return l}function C(t,r,n,a){var e=p(t,r,n,a);e=d(e);for(var i=x(e),s=[],o=[],u="",g=0;g<e.m;g++)u+=i[g].toString();void 0===o[u]&&(o[u]=0),o[u]+=1;var h={nX:e.n,nLine:e.m,steps:[],answer:{}};while(1){var w=v(e,i),C=m(e,w);u="";for(var R=0;R<e.m;R++)u+=R===C?w.toString():i[R].toString();if(void 0===o[u]&&(o[u]=0),o[u]+=1,1!==o[u]){w=0;for(var E=0;E<e.n;++E)(e.hsM[E].giatri<e.hsM[w].giatri||e.hsM[E].giatri===e.hsM[w].giatri&&e.rb[e.m][w].giatri>e.rb[e.m][E].giatri&&e.rb[e.m][E].giatri>0)&&(w=E);C=m(e,w)}var M=b(e);if(1===M&&(w=-1),s.push(y(i,e,w,C,M)),0===M)return h.steps=s,h.answer=!1,h;if(1===M)return h.steps=s,h.answer=_(i,a,e),h;-1!==w&&(i[C]=w);for(var k=e.rb[C][w],S=0;S<e.m;S++)if(S!==C){e.pa[S]=c(l(f(e.pa[S],k),f(e.pa[C],e.rb[S][w])),k);for(var F=0;F<e.n;F++)F!==w&&(e.rb[S][F]=c(l(f(e.rb[S][F],k),f(e.rb[C][F],e.rb[S][w])),k))}for(var B=0;B<e.m;B++)B!==C&&e.rb[B][w].init();e.pa[C]=c(e.pa[C],e.rb[C][w]);for(var X=0;X<e.n;++X)e.rb[C][X]=c(e.rb[C][X],k)}}var R=C,E=function t(){Object(i["a"])(this,t),this.fx=[],this.rb=[],this.rbdau=[],this.n=0,this.m=0,this.orginN=0,this.pa=[],this.hsM=[],this.d=[],this.subVar=[],this.fakeVar=[],this.freeVar=[],this.type=""};function M(t,r,n,a){for(var e=new E,i=t.trim(),o=i.split(" "),u=0;u<o.length;u++){var l=o[u].split("/");2===l.length?e.fx[u]=new s["a"](parseFloat(l[0]),parseFloat(l[1])):e.fx[u]=new s["a"](parseFloat(l[0]))}e.n=o.length,e.orginN=e.n;var f=r,c=f.split("\n");e.m=c.length;var p=0,d=n.trim();d=d.split(";");for(var g=0;g<d.length;g++){d[g]=d[g].trim();for(var v=d[g].split(" "),h=v.length-2,b=0;b<h;b++){var x=parseInt(v[b])-1;e.rbdau[x]=1,"<="===v[h]&&(e.rbdau[x]=-1)}}for(var m=0;m<e.m;m++){c[m]=c[m].trim();var w=c[m].split(" ");p=Math.max(p,w.length-2),e.rb[m]=[];for(var y=0;y<w.length-2;y++){var _=w[y].split("/");2===_.length?e.rb[m][y]=new s["a"](parseFloat(_[0]),parseFloat(_[1])):e.rb[m][y]=new s["a"](parseFloat(_[0]))}e.d[m]=w[w.length-2];var C=w[w.length-1].split("/");2===C.length?e.pa[m]=new s["a"](parseFloat(C[0]),parseFloat(C[1])):e.pa[m]=new s["a"](parseFloat(C[0]))}e.n=p;for(var R=0;R<e.n;R++)void 0===e.fx[R]&&(e.fx[R]=new s["a"]);return e.type=a.trim(),e}function k(t){for(var r=Object.assign(new E,t),n=0;n<r.n;n++)-1===r.rbdau[n]&&(r.fx[n].tu*=-1);for(var a=0;a<r.m;a++)if(r.pa[a].giatri<0){r.pa[a].tu*=-1,r.d[a]=">="===r.d[a]?"<=":">=";for(var e=0;e<r.n;e++)r.rb[a][e].tu*=-1}for(var i=0,o=0;o<r.n;o++){for(var u=0,l=0;l<r.m;l++)-1===r.rbdau[o]&&(r.rb[l][o].tu*=-1),void 0===r.rbdau[o]&&(u=1,void 0===r.fx[r.n+i]&&(r.fx[r.n+i]=new s["a"](-1*r.fx[o].tu)),r.rb[l][r.n+i]=new s["a"](-1*r.rb[l][o].tu));void 0===r.rbdau[o]&&r.freeVar.push(r.n+i),1===u&&(i+=1)}if(r.n=r.n+i,"max"===r.type){for(var f=0;f<r.n;f++)r.fx[f].tu*=-1;r.type="min"}for(var c=0;c<r.n;c++)void 0===r.fx[c]&&(r.fx[c]=new s["a"]);return r.rb[r.m]=[],r}function S(t){for(var r=0;r<t.m;r++)for(var n=0;n<t.n;n++)t.rb[t.m][n]=new s["a"],t.hsM[n]=new s["a"],void 0===t.fx[n]&&(t.fx[n]=new s["a"]),void 0===t.rb[r][n]&&(t.rb[r][n]=new s["a"]);return t}function F(t){for(var r=[],n=0;n<t.m;n++)r[n]=-1,">="===t.d[n]?(t.subVar.push(n),t.rbdau[t.n]=1,t.rb[n][t.n++]=new s["a"](parseFloat(-1))):"<="===t.d[n]&&(t.subVar.push(n),t.rbdau[t.n]=1,t.rb[n][t.n++]=new s["a"](parseFloat(1)));t=S(t);for(var a=0,e=0;e<t.n;e++){for(var i=0,o=0,u=0,l=0;l<t.m;l++)1===t.rb[l][e].giatri?(u=l,++i):0===t.rb[l][e].giatri&&++o;1===i&&o===t.m-1&&(r[u]=e,a+=1)}if(a<t.m)for(var f=0;f<t.m;f++)-1===r[f]&&(t.fakeVar.push(t.n),t.fx[t.n]=new s["a"](parseFloat(99999999)),r[f]=t.n,t.rbdau[t.n]=1,t.rb[f][t.n++]=new s["a"](parseFloat(1)));return t=S(t),t}function B(t,r,n,a){var e=M(t,r,n,a),i="";i='<div class="overflow-auto"><p class="text-lg font-semibold">Bài toán</p><hr class="my-4"><table class="table-auto w-full mb-5"><tr><td><strong>Dạng chính tắc</strong></td><td></td><td><strong>Dạng chuẩn</strong></td></tr><tr><td nowrap="nowrap"><strong><font color = "DodgerBlue">F(x):</font></strong>  ';for(var s=0,o=0;o<e.fx.length;o++)0!==e.fx[o].giatri&&(0!==s?i+=e.fx[o].giatri>0?" + ":" &#8722; ":e.fx[o].giatri<0&&(i+="&#8722;"),1!==e.fx[o].giatri&&-1!==e.fx[o].giatri&&(i+=e.fx[o].Xuat_duong),i+="x<sub>"+(o+1).toString()+"</sub>",s+=1);i+=' &rarr; <font color = "Tomato"><strong>'+e.type+"</strong></font><br><strong>Ràng buộc:</strong>&emsp;&emsp; <table>";for(var u=0;u<e.m;u++){i+="<tr>";for(var l=0,f=0;f<e.n;f++){var c=e.rb[u][f].giatri;0!==c?(i+="<td>",0!==l?i+=c>0?" + ":" &#8722; ":c<0&&(i+="&#8722;"),1!==c&&-1!==c&&(i+=e.rb[u][f].Xuat_duong),i+="x<sub>"+(f+1).toString()+"</sub></td>",l+=1):i+="<td></td>"}i+="<td>",">="===e.d[u]?i+="  &ge; ":"<="===e.d[u]?i+="  &le; ":i+=" = ",i+="</td><td>"+e.pa[u].Xuat+"</td></tr>"}i+='</table><font color = "DodgerBlue"><strong>Với:</strong></font><br>';for(var p=0;p<e.n;p++)void 0!==e.rbdau[p]?(i+="x<sub>"+(p+1).toString()+"</sub> ",1===e.rbdau[p]?i+=" &ge; ":i+=" &le; ",i+="0",p!==e.n-1&&(i+=" , ")):(i+="x<sub>"+(p+1).toString()+"</sub> tùy ý",p!==e.n-1&&(i+=" , "));i+="</td>",e=k(e),e=F(e),i+='<td><font size = "25" color = "DodgerBlue">&rarr;</font></td><td nowrap="nowrap"><strong><font color = "DodgerBlue">F(x):</font></strong>  ',s=0;for(var d=0;d<e.fx.length;d++)0!==s?i+=e.fx[d].giatri>=0?" + ":" &#8722; ":e.fx[d].giatri<0&&(i+="&#8722;"),1!==e.fx[d].giatri&&-1!==e.fx[d].giatri&&(99999999===e.fx[d].giatri?i+="M":i+=e.fx[d].Xuat_duong),i+="x<sub>"+(d+1).toString()+"</sub>",s+=1;i+=' &rarr; <font color = "Tomato"><strong>'+e.type+"</strong></font><br><strong>Ràng buộc:</strong>&emsp;&emsp; <table>";for(var g=0;g<e.m;g++){i+="<tr>";for(var v=0,h=0;h<e.n;h++){var b=e.rb[g][h].giatri;0!==b?(i+="<td>",0!==v?i+=b>=0?" + ":" &#8722; ":b<0&&(i+="&#8722;"),1!==b&&-1!==b&&(i+=e.rb[g][h].Xuat_duong),i+="x<sub>"+(h+1).toString()+"</sub></td>",v+=1):i+="<td></td>"}i+="<td>=</td><td>"+e.pa[g].Xuat+"</td>"}i+='</table><font color = "DodgerBlue"><strong>Với:</strong></font><br>';for(var x=0;x<e.n;x++)void 0!==e.rbdau[x]?(i+="x<sub>"+(x+1).toString()+"</sub> ",1===e.rbdau[x]?i+=" &ge; ":i+=" &le; ",i+="0",x!==e.n-1&&(i+=" , ")):(i+="x<sub>"+(x+1).toString()+"</sub> tùy ý",x!==e.n-1&&(i+=" , "));return i+="</td></tr></table></div>",i}var X=B,I={name:"C1Index",data:function(){return{input:{fx:"",matrix:"",fxRB:"",type:"min"},hasSubmit:!1,output:{},outputPrint:""}},methods:{submit:function(){""!==this.input.fx.trim()&&""!==this.input.matrix.trim()&&""!==this.input.fxRB.trim()?(this.hasSubmit=!0,this.output=R(this.input.fx,this.input.matrix,this.input.fxRB,this.input.type),this.outputPrint=X(this.input.fx,this.input.matrix,this.input.fxRB,this.input.type)):this.$toasted.show("Không đủ dữ kiện đầu vào!")},reset:function(){this.input.fx=this.input.matrix=this.input.fxRB="",this.input.type="min"}}},V=I,P=n("2877"),$=Object(P["a"])(V,a,e,!1,null,null,null);r["default"]=$.exports},5899:function(t,r){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,r,n){var a=n("1d80"),e=n("5899"),i="["+e+"]",s=RegExp("^"+i+i+"*"),o=RegExp(i+i+"*$"),u=function(t){return function(r){var n=String(a(r));return 1&t&&(n=n.replace(s,"")),2&t&&(n=n.replace(o,"")),n}};t.exports={start:u(1),end:u(2),trim:u(3)}},6547:function(t,r,n){var a=n("a691"),e=n("1d80"),i=function(t){return function(r,n){var i,s,o=String(e(r)),u=a(n),l=o.length;return u<0||u>=l?t?"":void 0:(i=o.charCodeAt(u),i<55296||i>56319||u+1===l||(s=o.charCodeAt(u+1))<56320||s>57343?t?o.charAt(u):i:t?o.slice(u,u+2):s-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(!1),charAt:i(!0)}},"8aa5":function(t,r,n){"use strict";var a=n("6547").charAt;t.exports=function(t,r,n){return r+(n?a(t,r).length:1)}},9263:function(t,r,n){"use strict";var a=n("ad6d"),e=n("9f7f"),i=RegExp.prototype.exec,s=String.prototype.replace,o=i,u=function(){var t=/a/,r=/b*/g;return i.call(t,"a"),i.call(r,"a"),0!==t.lastIndex||0!==r.lastIndex}(),l=e.UNSUPPORTED_Y||e.BROKEN_CARET,f=void 0!==/()??/.exec("")[1],c=u||f||l;c&&(o=function(t){var r,n,e,o,c=this,p=l&&c.sticky,d=a.call(c),g=c.source,v=0,h=t;return p&&(d=d.replace("y",""),-1===d.indexOf("g")&&(d+="g"),h=String(t).slice(c.lastIndex),c.lastIndex>0&&(!c.multiline||c.multiline&&"\n"!==t[c.lastIndex-1])&&(g="(?: "+g+")",h=" "+h,v++),n=new RegExp("^(?:"+g+")",d)),f&&(n=new RegExp("^"+g+"$(?!\\s)",d)),u&&(r=c.lastIndex),e=i.call(p?n:c,h),p?e?(e.input=e.input.slice(v),e[0]=e[0].slice(v),e.index=c.lastIndex,c.lastIndex+=e[0].length):c.lastIndex=0:u&&e&&(c.lastIndex=c.global?e.index+e[0].length:r),f&&e&&e.length>1&&s.call(e[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(e[o]=void 0)})),e}),t.exports=o},"9f7f":function(t,r,n){"use strict";var a=n("d039");function e(t,r){return RegExp(t,r)}r.UNSUPPORTED_Y=a((function(){var t=e("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),r.BROKEN_CARET=a((function(){var t=e("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ac1f:function(t,r,n){"use strict";var a=n("23e7"),e=n("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==e},{exec:e})},ad6d:function(t,r,n){"use strict";var a=n("825a");t.exports=function(){var t=a(this),r="";return t.global&&(r+="g"),t.ignoreCase&&(r+="i"),t.multiline&&(r+="m"),t.dotAll&&(r+="s"),t.unicode&&(r+="u"),t.sticky&&(r+="y"),r}},c8d2:function(t,r,n){var a=n("d039"),e=n("5899"),i="​᠎";t.exports=function(t){return a((function(){return!!e[t]()||i[t]()!=i||e[t].name!==t}))}},d4ec:function(t,r,n){"use strict";function a(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}n.d(r,"a",(function(){return a}))},d784:function(t,r,n){"use strict";n("ac1f");var a=n("6eeb"),e=n("d039"),i=n("b622"),s=n("9263"),o=n("9112"),u=i("species"),l=!e((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=function(){return"$0"==="a".replace(/./,"$0")}(),c=i("replace"),p=function(){return!!/./[c]&&""===/./[c]("a","$0")}(),d=!e((function(){var t=/(?:)/,r=t.exec;t.exec=function(){return r.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,r,n,c){var g=i(t),v=!e((function(){var r={};return r[g]=function(){return 7},7!=""[t](r)})),h=v&&!e((function(){var r=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[g]=/./[g]),n.exec=function(){return r=!0,null},n[g](""),!r}));if(!v||!h||"replace"===t&&(!l||!f||p)||"split"===t&&!d){var b=/./[g],x=n(g,""[t],(function(t,r,n,a,e){return r.exec===s?v&&!e?{done:!0,value:b.call(r,n,a)}:{done:!0,value:t.call(n,r,a)}:{done:!1}}),{REPLACE_KEEPS_$0:f,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),m=x[0],w=x[1];a(String.prototype,t,m),a(RegExp.prototype,g,2==r?function(t,r){return w.call(t,this,r)}:function(t){return w.call(t,this)})}c&&o(RegExp.prototype[g],"sham",!0)}}}]);