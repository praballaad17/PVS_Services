/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://new.modernizr.com/download/?-appearance-backdropfilter-backgroundblendmode-backgroundcliptext-backgroundsize-bgpositionshorthand-bgpositionxy-bgrepeatspace_bgrepeatround-bgsizecover-borderimage-borderradius-boxshadow-boxsizing-checked-cssall-cssanimations-csscalc-csschunit-csscolumns-cssescape-cssexunit-cssfilters-cssgradients-csshairline-csshyphens_softhyphens_softhyphensfind-cssinvalid-cssmask-csspointerevents-csspositionsticky-csspseudoanimations-csspseudotransitions-cssreflections-cssremunit-cssresize-cssscrollbar-csstransforms-csstransforms3d-csstransitions-cssvalid-cssvhunit-cssvmaxunit-cssvminunit-cssvwunit-cubicbezierrange-display_runin-displaytable-ellipsis-flexbox-flexboxlegacy-flexboxtweener-flexwrap-fontface-generatedcontent-hsla-lastchild-mediaqueries-multiplebgs-nthchild-objectfit-opacity-overflowscrolling-preserve3d-regions-rgba-shapes-siblinggeneral-subpixelfont-supports-target-textalignlast-textshadow-userselect-wrapflow-domprefixes-prefixed-prefixedcss-prefixes-printshiv-setclasses !*/

 !function(e,t,n){function r(e,t){return typeof e===t}
 function i(){var e,t,n,i,o,a,s;for(var d in w)if(w.hasOwnProperty(d)){if(e=[],t=w[d],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(i=r(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)a=e[o],s=a.split("."),1===s.length?Modernizr[s[0]]=i:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=i),T.push((i?"":"no-")+s.join("-"))}
}
 function o(e){var t=_.className,n=Modernizr._config.classPrefix||"";if(j&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}
 Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),j?_.className.baseVal=t:_.className=t)}
 function a(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}
 ).replace(/^-/,"")}
 function s(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}
 ).replace(/^ms-/,"-ms-")}
 function d(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):j?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}
 function l(e,t){return!!~(""+e).indexOf(t)}
 function u(t,n,r){var i;if("getComputedStyle"in e){i=getComputedStyle.call(e,t,n);var o=e.console;if(null!==i)r&&(i=i.getPropertyValue(r));else if(o){var a=o.error?"error":"log";o[a].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}
}
 else i=!n&&t.currentStyle&&t.currentStyle[r];return i}
 function c(e,t){return e-1===t||e===t||e+1===t}
 function f(e,t){if("object"==typeof e)for(var n in e)W(e,n)&&f(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),i=Modernizr[r[0]];if(2==r.length&&(i=i[r[1]]),"undefined"!=typeof i)return Modernizr;t="function"==typeof t?t():t,1==r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),o([(t&&0!=t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}
 return Modernizr}
 function p(e,t){return function(){return e.apply(t,arguments)}
}
 function h(e,t,n){var i;for(var o in e)if(e[o]in t)return n===!1?e[o]:(i=t[e[o]],r(i,"function")?p(i,n||t):i);return!1}
 function m(){var e=t.body;return e||(e=d(j?"svg":"body"),e.fake=!0),e}
 function g(e,n,r,i){var o,a,s,l,u="modernizr",c=d("div"),f=m();if(parseInt(r,10))for(;r--;)s=d("div"),s.id=i?i[r]:u+(r+1),c.appendChild(s);return o=d("style"),o.type="text/css",o.id="s"+u,(f.fake?f:c).appendChild(o),f.appendChild(c),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(t.createTextNode(e)),c.id=u,f.fake&&(f.style.background="",f.style.overflow="hidden",l=_.style.overflow,_.style.overflow="hidden",_.appendChild(f)),a=n(c,e),f.fake?(f.parentNode.removeChild(f),_.style.overflow=l,_.offsetHeight):c.parentNode.removeChild(c),!!a}
 function b(t,r){var i=t.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(s(t[i]),r))return!0;return!1}
 if("CSSSupportsRule"in e){for(var o=[];i--;)o.push("("+s(t[i])+":"+r+")");return o=o.join(" or "),g("@supports ("+o+") { #modernizr { position: absolute; }}",function(e){return"absolute"==u(e,null,"position")})}
 return n}
 function v(e,t,i,o){function s(){c&&(delete L.style,delete L.modElem)}
 if(o=r(o,"undefined")?!1:o,!r(i,"undefined")){var u=b(e,i);if(!r(u,"undefined"))return u}
 for(var c,f,p,h,m,g=["modernizr","tspan","samp"];!L.style&&g.length;)c=!0,L.modElem=d(g.shift()),L.style=L.modElem.style;for(p=e.length,f=0;p>f;f++)if(h=e[f],m=L.style[h],l(h,"-")&&(h=a(h)),L.style[h]!==n){if(o||r(i,"undefined"))return s(),"pfx"==t?h:!0;try{L.style[h]=i}
 catch(v){}
 if(L.style[h]!=m)return s(),"pfx"==t?h:!0}
 return s(),!1}
 function y(e,t,n,i,o){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+P.join(a+" ")+a).split(" ");return r(t,"string")||r(t,"undefined")?v(s,t,i,o):(s=(e+" "+R.join(a+" ")+a).split(" "),h(s,t,n))}
 function x(e,t,r){return y(e,n,n,t,r)}
 var T=[],w=[],k={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0}
 ,_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])}
 ,0)}
 ,addTest:function(e,t,n){w.push({name:e,fn:t,options:n}
 )}
 ,addAsyncTest:function(e){w.push({name:null,fn:e}
 )}
}
 ,Modernizr=function(){}
 ;Modernizr.prototype=k,Modernizr=new Modernizr;var C=e.CSS;Modernizr.addTest("cssescape",C?"function"==typeof C.escape:!1);var S="CSS"in e&&"supports"in e.CSS,z="supportsCSS"in e;Modernizr.addTest("supports",S||z),Modernizr.addTest("target",function(){var t=e.document;if(!("querySelectorAll"in t))return!1;try{return t.querySelectorAll(":target"),!0}
 catch(n){return!1}
}
 );var E=k._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];k._prefixes=E;var _=t.documentElement;Modernizr.addTest("cssall","all"in _.style);var j="svg"===_.nodeName.toLowerCase();j||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}
 function r(){var e=C.elements;return"string"==typeof e?e.split(" "):e}
 function i(e,t){var n=C.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),C.elements=n+" "+e,l(t)}
 function o(e){var t=k[e[T]];return t||(t={}
 ,w++,e[T]=w,k[w]=t),t}
 function a(e,n,r){if(n||(n=t),g)return n.createElement(e);r||(r=o(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():x.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!i.canHaveChildren||y.test(e)||i.tagUrn?i:r.frag.appendChild(i)}
 function s(e,n){if(e||(e=t),g)return e.createDocumentFragment();n=n||o(e);for(var i=n.frag.cloneNode(),a=0,s=r(),d=s.length;d>a;a++)i.createElement(s[a]);return i}
 function d(e,t){t.cache||(t.cache={}
 ,t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return C.shivMethods?a(n,e,t):t.createElem(n)}
 ,e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'}
 )+");return n")(C,t.frag)}
 function l(e){e||(e=t);var r=o(e);return!C.shivCSS||m||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),g||d(e,r),e}
 function u(e){for(var t,n=e.getElementsByTagName("*"),i=n.length,o=RegExp("^(?:"+r().join("|")+")$","i"),a=[];i--;)t=n[i],o.test(t.nodeName)&&a.push(t.applyElement(c(t)));return a}
 function c(e){for(var t,n=e.attributes,r=n.length,i=e.ownerDocument.createElement(z+":"+e.nodeName);r--;)t=n[r],t.specified&&i.setAttribute(t.nodeName,t.nodeValue);return i.style.cssText=e.style.cssText,i}
 function f(e){for(var t,n=e.split("{"),i=n.length,o=RegExp("(^|[\\s,>+~])("+r().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),a="$1"+z+"\\:$2";i--;)t=n[i]=n[i].split("}"),t[t.length-1]=t[t.length-1].replace(o,a),n[i]=t.join("}");return n.join("{")}
 function p(e){for(var t=e.length;t--;)e[t].removeNode()}
 function h(e){function t(){clearTimeout(a._removeSheetTimer),r&&r.removeNode(!0),r=null}
 var r,i,a=o(e),s=e.namespaces,d=e.parentWindow;return!E||e.printShived?e:("undefined"==typeof s[z]&&s.add(z),d.attachEvent("onbeforeprint",function(){t();for(var o,a,s,d=e.styleSheets,l=[],c=d.length,p=Array(c);c--;)p[c]=d[c];for(;s=p.pop();)if(!s.disabled&&S.test(s.media)){try{o=s.imports,a=o.length}
 catch(h){a=0}
 for(c=0;a>c;c++)p.push(o[c]);try{l.push(s.cssText)}
 catch(h){}
}
 l=f(l.reverse().join("")),i=u(e),r=n(e,l)}
 ),d.attachEvent("onafterprint",function(){p(i),clearTimeout(a._removeSheetTimer),a._removeSheetTimer=setTimeout(t,500)}
 ),e.printShived=!0,e)}
 var m,g,b="3.7.3",v=e.html5||{}
 ,y=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,x=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,T="_html5shiv",w=0,k={}
 ;!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",m="hidden"in e,g=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}
 ()}
 catch(n){m=!0,g=!0}
}
 ();var C={elements:v.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:b,shivCSS:v.shivCSS!==!1,supportsUnknownElements:g,shivMethods:v.shivMethods!==!1,type:"default",shivDocument:l,createElement:a,createDocumentFragment:s,addElements:i}
 ;e.html5=C,l(t);var S=/^$|\b(?:all|print)\b/,z="html5shiv",E=!g&&function(){var n=t.documentElement;return!("undefined"==typeof t.namespaces||"undefined"==typeof t.parentWindow||"undefined"==typeof n.applyElement||"undefined"==typeof n.removeNode||"undefined"==typeof e.attachEvent)}
 ();C.type+=" print",C.shivPrint=h,h(t),"object"==typeof module&&module.exports&&(module.exports=C)}
 ("undefined"!=typeof e?e:this,t);var N="Moz O ms Webkit",R=k._config.usePrefixes?N.toLowerCase().split(" "):[];k._domPrefixes=R,Modernizr.addTest("bgpositionshorthand",function(){var e=d("a"),t=e.style,n="right 10px bottom 10px";return t.cssText="background-position: "+n+";",t.backgroundPosition===n}
 ),Modernizr.addTest("csscalc",function(){var e="width:",t="calc(10px);",n=d("a");return n.style.cssText=e+E.join(t+e),!!n.style.length}
 ),Modernizr.addTest("cubicbezierrange",function(){var e=d("a");return e.style.cssText=E.join("transition-timing-function:cubic-bezier(1,0,0,1.1); "),!!e.style.length}
 ),Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",n="gradient(linear,left top,right bottom,from(#9f9),to(white));",r="",i=0,o=E.length-1;o>i;i++)e=0===i?"to ":"",r+=t+E[i]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(r+=t+"-webkit-"+n);var a=d("a"),s=a.style;return s.cssText=r,(""+s.backgroundImage).indexOf("gradient")>-1}
 ),Modernizr.addTest("multiplebgs",function(){var e=d("a").style;return e.cssText="background:url(https://),url(https://),red url(https://)",/(url\s*\(.*?){3}/.test(e.background)}
 ),Modernizr.addTest("opacity",function(){var e=d("a").style;return e.cssText=E.join("opacity:.55;"),/^0.55$/.test(e.opacity)}
 ),Modernizr.addTest("csspointerevents",function(){var e=d("a").style;return e.cssText="pointer-events:auto","auto"===e.pointerEvents}
 ),Modernizr.addTest("csspositionsticky",function(){var e="position:",t="sticky",n=d("a"),r=n.style;return r.cssText=e+E.join(t+";"+e).slice(0,-e.length),-1!==r.position.indexOf(t)}
 ),Modernizr.addTest("regions",function(){if(j)return!1;var e=Modernizr.prefixed("flowFrom"),t=Modernizr.prefixed("flowInto"),r=!1;if(!e||!t)return r;var i=d("iframe"),o=d("div"),a=d("div"),s=d("div"),l="modernizr_flow_for_regions_check";a.innerText="M",o.style.cssText="top: 150px; left: 150px; padding: 0px;",s.style.cssText="width: 50px; height: 50px; padding: 42px;",s.style[e]=l,o.appendChild(a),o.appendChild(s),_.appendChild(o);var u,c,f=a.getBoundingClientRect();return a.style[t]=l,u=a.getBoundingClientRect(),c=parseInt(u.left-f.left,10),_.removeChild(o),42==c?r=!0:(_.appendChild(i),f=i.getBoundingClientRect(),i.style[t]=l,u=i.getBoundingClientRect(),f.height>0&&f.height!==u.height&&0===u.height&&(r=!0)),a=s=o=i=n,r}
 ),Modernizr.addTest("cssremunit",function(){var e=d("a").style;try{e.fontSize="3rem"}
 catch(t){}
 return/rem/.test(e.fontSize)}
 ),Modernizr.addTest("rgba",function(){var e=d("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1}
 ),Modernizr.addTest("preserve3d",function(){var t,n,r=e.CSS,i=!1;return r&&r.supports&&r.supports("(transform-style: preserve-3d)")?!0:(t=d("a"),n=d("a"),t.style.cssText="display: block; transform-style: preserve-3d; transform-origin: right; transform: rotateY(40deg);",n.style.cssText="display: block; width: 9px; height: 1px; background: #000; transform-origin: right; transform: rotateY(40deg);",t.appendChild(n),_.appendChild(t),i=n.getBoundingClientRect(),_.removeChild(t),i=i.width&&i.width<4)}
 );var B={elem:d("modernizr")}
 ;Modernizr._q.push(function(){delete B.elem}
 ),Modernizr.addTest("csschunit",function(){var e,t=B.elem.style;try{t.fontSize="3ch",e=-1!==t.fontSize.indexOf("ch")}
 catch(n){e=!1}
 return e}
 ),Modernizr.addTest("cssexunit",function(){var e,t=B.elem.style;try{t.fontSize="3ex",e=-1!==t.fontSize.indexOf("ex")}
 catch(n){e=!1}
 return e}
 ),Modernizr.addTest("hsla",function(){var e=d("a").style;return e.cssText="background-color:hsla(120,40%,100%,.5)",l(e.backgroundColor,"rgba")||l(e.backgroundColor,"hsla")}
 );var P=k._config.usePrefixes?N.split(" "):[];k._cssomPrefixes=P;var M=function(t){var r,i=E.length,o=e.CSSRule;if("undefined"==typeof o)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in o)return"@"+t;for(var a=0;i>a;a++){var s=E[a],d=s.toUpperCase()+"_"+r;if(d in o)return"@-"+s.toLowerCase()+"-"+t}
 return!1}
 ;k.atRule=M;var W;!function(){var e={}
 .hasOwnProperty;W=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}
 :function(t,n){return e.call(t,n)}
}
 (),k._l={}
 ,k.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])}
 ,0)}
 ,k._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)}
 ,0),delete this._l[e]}
}
 ,Modernizr._q.push(function(){k.addTest=f}
 );var L={style:B.elem.style}
 ;Modernizr._q.unshift(function(){delete L.style}
 );var q=k.testStyles=g;Modernizr.addTest("checked",function(){return q("#modernizr {position:absolute}#modernizr input {margin-left:10px}#modernizr :checked {margin-left:20px;display:block}",function(e){var t=d("input");return t.setAttribute("type","checkbox"),t.setAttribute("checked","checked"),e.appendChild(t),20===t.offsetLeft}
 )}
 ),q("#modernizr{display: table; direction: ltr}#modernizr div{display: table-cell; padding: 10px}",function(e){var t,n=e.childNodes;t=n[0].offsetLeft<n[1].offsetLeft,Modernizr.addTest("displaytable",t,{aliases:["display-table"]}
 )}
 ,2);var A=function(){var e=navigator.userAgent,t=e.match(/applewebkit\/([0-9]+)/gi)&&parseFloat(RegExp.$1),n=e.match(/w(eb)?osbrowser/gi),r=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9,i=533>t&&e.match(/android/gi);return n||i||r}
 ();A?Modernizr.addTest("fontface",!1):q('@font-face {font-family:"font";src:url("https://")}',function(e,n){var r=t.getElementById("smodernizr"),i=r.sheet||r.styleSheet,o=i?i.cssRules&&i.cssRules[0]?i.cssRules[0].cssText:i.cssText||"":"",a=/src/i.test(o)&&0===o.indexOf(n.split(" ")[0]);Modernizr.addTest("fontface",a)}
 ),q('#modernizr{font:0/0 a}#modernizr:after{content:":)";visibility:hidden;font:7px/1 a}',function(e){Modernizr.addTest("generatedcontent",e.offsetHeight>=6)}
 ),Modernizr.addTest("hairline",function(){return q("#modernizr {border:.5px solid transparent}",function(e){return 1===e.offsetHeight}
 )}
 ),Modernizr.addTest("cssinvalid",function(){return q("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px}#modernizr input:invalid{width:50px}",function(e){var t=d("input");return t.required=!0,e.appendChild(t),t.clientWidth>10}
 )}
 ),q("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block} ",function(e){Modernizr.addTest("lastchild",e.lastChild.offsetWidth>e.firstChild.offsetWidth)}
 ,2),q("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(e){for(var t=e.getElementsByTagName("div"),n=!0,r=0;5>r;r++)n=n&&t[r].offsetWidth===r%2+1;Modernizr.addTest("nthchild",n)}
 ,5),q("#modernizr{overflow: scroll; width: 40px; height: 40px; } #"+E.join("scrollbar{width:10px}  #modernizr::").split("#").slice(1).join("#")+"scrollbar{width:10px} ",function(e){Modernizr.addTest("cssscrollbar","scrollWidth"in e&&30==e.scrollWidth)}
 ),Modernizr.addTest("siblinggeneral",function(){return q("#modernizr div {width:100px}  #modernizr div ~ div {width:200px;display:block} ",function(e){return 200==e.lastChild.offsetWidth}
 ,2)}
 ),q("#modernizr{position: absolute; top: -10em; visibility:hidden; font: normal 10px arial;} #subpixel{float: left; font-size: 33.3333%;} ",function(t){var n=t.firstChild;n.innerHTML="This is a text written in Arial",Modernizr.addTest("subpixelfont",e.getComputedStyle?"44px"!==e.getComputedStyle(n,null).getPropertyValue("width"):!1)}
 ,1,["subpixel"]),Modernizr.addTest("cssvalid",function(){return q("#modernizr input{height:0;border:0;padding:0;margin:0;width:10px} #modernizr input:valid{width:50px} ",function(e){var t=d("input");return e.appendChild(t),t.clientWidth>10}
 )}
 ),q("#modernizr { height: 50vh; }",function(t){var n=parseInt(e.innerHeight/2,10),r=parseInt(u(t,null,"height"),10);Modernizr.addTest("cssvhunit",r==n)}
 ),q("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll} #modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(e){var t=e.childNodes[2],n=e.childNodes[1],r=e.childNodes[0],i=parseInt((n.offsetWidth-n.clientWidth)/2,10),o=r.clientWidth/100,a=r.clientHeight/100,s=parseInt(50*Math.max(o,a),10),d=parseInt(u(t,null,"width"),10);Modernizr.addTest("cssvmaxunit",c(s,d)||c(s,d-i))}
 ,3),q("#modernizr1{width: 50vm;width:50vmin} #modernizr2{width:50px;height:50px;overflow:scroll} #modernizr3{position:fixed;top:0;left:0;bottom:0;right:0} ",function(e){var t=e.childNodes[2],n=e.childNodes[1],r=e.childNodes[0],i=parseInt((n.offsetWidth-n.clientWidth)/2,10),o=r.clientWidth/100,a=r.clientHeight/100,s=parseInt(50*Math.min(o,a),10),d=parseInt(u(t,null,"width"),10);Modernizr.addTest("cssvminunit",c(s,d)||c(s,d-i))}
 ,3),q("#modernizr { width: 50vw; }",function(t){var n=parseInt(e.innerWidth/2,10),r=parseInt(u(t,null,"width"),10);Modernizr.addTest("cssvwunit",r==n)}
 );var H=function(){var t=e.matchMedia||e.msMatchMedia;return t?function(e){var n=t(e);return n&&n.matches||!1}
 :function(t){var n=!1;return g("@media "+t+" { #modernizr { position: absolute; }} ",function(t){n="absolute"==(e.getComputedStyle?e.getComputedStyle(t,null):t.currentStyle).position}
 ),n}
}
 ();k.mq=H,Modernizr.addTest("mediaqueries",H("only all")),k.testAllProps=y;var F=k.prefixed=function(e,t,n){return 0===e.indexOf("@")?M(e):(-1!=e.indexOf("-")&&(e=a(e)),t?y(e,t,n):y(e,"pfx"))}
 ;k.prefixedCSS=function(e){var t=F(e);return t&&s(t)}
 ;Modernizr.addTest("backgroundblendmode",F("backgroundBlendMode","text")),Modernizr.addTest("objectfit",!!F("objectFit"),{aliases:["object-fit"]}
 ),Modernizr.addTest("wrapflow",function(){var e=F("wrapFlow");if(!e||j)return!1;var t=e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}
 ).replace(/^ms-/,"-ms-"),r=d("div"),i=d("div"),o=d("span");i.style.cssText="position: absolute; left: 50px; width: 100px; height: 20px;"+t+":end;",o.innerText="X",r.appendChild(i),r.appendChild(o),_.appendChild(r);var a=o.offsetLeft;return _.removeChild(r),i=o=r=n,150==a}
 ),k.testAllProps=x,Modernizr.addTest("cssanimations",x("animationName","a",!0)),Modernizr.addTest("csspseudoanimations",function(){var t=!1;if(!Modernizr.cssanimations||!e.getComputedStyle)return t;var n=["@",Modernizr._prefixes.join("keyframes csspseudoanimations { from { font-size: 10px; }}@").replace(/\@$/,""),'#modernizr:before { content:" "; font-size:5px;',Modernizr._prefixes.join("animation:csspseudoanimations 1ms infinite;"),"} "].join("");return Modernizr.testStyles(n,function(n){t="10px"===e.getComputedStyle(n,":before").getPropertyValue("font-size")}
 ),t}
 ),Modernizr.addTest("appearance",x("appearance")),Modernizr.addTest("backdropfilter",x("backdropFilter")),Modernizr.addTest("backgroundcliptext",function(){return x("backgroundClip","text")}
 ),Modernizr.addTest("bgpositionxy",function(){return x("backgroundPositionX","3px",!0)&&x("backgroundPositionY","5px",!0)}
 ),Modernizr.addTest("bgrepeatround",x("backgroundRepeat","round")),Modernizr.addTest("bgrepeatspace",x("backgroundRepeat","space")),Modernizr.addTest("backgroundsize",x("backgroundSize","100%",!0)),Modernizr.addTest("bgsizecover",x("backgroundSize","cover")),Modernizr.addTest("borderimage",x("borderImage","url() 1",!0)),Modernizr.addTest("borderradius",x("borderRadius","0px",!0)),Modernizr.addTest("boxshadow",x("boxShadow","1px 1px",!0)),Modernizr.addTest("boxsizing",x("boxSizing","border-box",!0)&&(t.documentMode===n||t.documentMode>7)),function(){Modernizr.addTest("csscolumns",function(){var e=!1,t=x("columnCount");try{e=!!t,e&&(e=new Boolean(e))}
 catch(n){}
 return e}
 );for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<n.length;r++)e=n[r].toLowerCase(),t=x("column"+n[r]),("breakbefore"===e||"breakafter"===e||"breakinside"==e)&&(t=t||x(n[r])),Modernizr.addTest("csscolumns."+e,t)}
 (),Modernizr.addTest("displayrunin",x("display","run-in"),{aliases:["display-runin"]}
 ),Modernizr.addTest("ellipsis",x("textOverflow","ellipsis")),Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return x("filter","blur(2px)");var e=d("a");return e.style.cssText=E.join("filter:blur(2px); "),!!e.style.length&&(t.documentMode===n||t.documentMode>9)}
 ),Modernizr.addTest("flexbox",x("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",x("boxDirection","reverse",!0)),Modernizr.addTest("flexboxtweener",x("flexAlign","end",!0)),Modernizr.addTest("flexwrap",x("flexWrap","wrap",!0)),Modernizr.addAsyncTest(function(){function n(){function i(){try{var e=d("div"),n=d("span"),r=e.style,i=0,o=0,a=!1,s=t.body.firstElementChild||t.body.firstChild;return e.appendChild(n),n.innerHTML="Bacon ipsum dolor sit amet jerky velit in culpa hamburger et. Laborum dolor proident, enim dolore duis commodo et strip steak. Salami anim et, veniam consectetur dolore qui tenderloin jowl velit sirloin. Et ad culpa, fatback cillum jowl ball tip ham hock nulla short ribs pariatur aute. Pig pancetta ham bresaola, ut boudin nostrud commodo flank esse cow tongue culpa. Pork belly bresaola enim pig, ea consectetur nisi. Fugiat officia turkey, ea cow jowl pariatur ullamco proident do laborum velit sausage. Magna biltong sint tri-tip commodo sed bacon, esse proident aliquip. Ullamco ham sint fugiat, velit in enim sed mollit nulla cow ut adipisicing nostrud consectetur. Proident dolore beef ribs, laborum nostrud meatball ea laboris rump cupidatat labore culpa. Shankle minim beef, velit sint cupidatat fugiat tenderloin pig et ball tip. Ut cow fatback salami, bacon ball tip et in shank strip steak bresaola. In ut pork belly sed mollit tri-tip magna culpa veniam, short ribs qui in andouille ham consequat. Dolore bacon t-bone, velit short ribs enim strip steak nulla. Voluptate labore ut, biltong swine irure jerky. Cupidatat excepteur aliquip salami dolore. Ball tip strip steak in pork dolor. Ad in esse biltong. Dolore tenderloin exercitation ad pork loin t-bone, dolore in chicken ball tip qui pig. Ut culpa tongue, sint ribeye dolore ex shank voluptate hamburger. Jowl et tempor, boudin pork chop labore ham hock drumstick consectetur tri-tip elit swine meatball chicken ground round. Proident shankle mollit dolore. Shoulder ut duis t-bone quis reprehenderit. Meatloaf dolore minim strip steak, laboris ea aute bacon beef ribs elit shank in veniam drumstick qui. Ex laboris meatball cow tongue pork belly. Ea ball tip reprehenderit pig, sed fatback boudin dolore flank aliquip laboris eu quis. Beef ribs duis beef, cow corned beef adipisicing commodo nisi deserunt exercitation. Cillum dolor t-bone spare ribs, ham hock est sirloin. Brisket irure meatloaf in, boudin pork belly sirloin ball tip. Sirloin sint irure nisi nostrud aliqua. Nostrud nulla aute, enim officia culpa ham hock. Aliqua reprehenderit dolore sunt nostrud sausage, ea boudin pork loin ut t-bone ham tempor. Tri-tip et pancetta drumstick laborum. Ham hock magna do nostrud in proident. Ex ground round fatback, venison non ribeye in.",t.body.insertBefore(e,s),r.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;",i=n.offsetHeight,o=n.offsetWidth,r.cssText="position:absolute;top:0;left:0;width:5em;text-align:justify;text-justification:newspaper;"+E.join("hyphens:auto; "),a=n.offsetHeight!=i||n.offsetWidth!=o,t.body.removeChild(e),e.removeChild(n),a}
 catch(l){return!1}
}
 function o(e,n){try{var r=d("div"),i=d("span"),o=r.style,a=0,s=!1,l=!1,u=!1,c=t.body.firstElementChild||t.body.firstChild;return o.cssText="position:absolute;top:0;left:0;overflow:visible;width:1.25em;",r.appendChild(i),t.body.insertBefore(r,c),i.innerHTML="mm",a=i.offsetHeight,i.innerHTML="m"+e+"m",l=i.offsetHeight>a,n?(i.innerHTML="m<br />m",a=i.offsetWidth,i.innerHTML="m"+e+"m",u=i.offsetWidth>a):u=!0,l===!0&&u===!0&&(s=!0),t.body.removeChild(r),r.removeChild(i),s}
 catch(f){return!1}
}
 function a(n){try{var r,i=d("input"),o=d("div"),a="lebowski",s=!1,l=t.body.firstElementChild||t.body.firstChild;o.innerHTML=a+n+a,t.body.insertBefore(o,l),t.body.insertBefore(i,o),i.setSelectionRange?(i.focus(),i.setSelectionRange(0,0)):i.createTextRange&&(r=i.createTextRange(),r.collapse(!0),r.moveEnd("character",0),r.moveStart("character",0),r.select());try{e.find?s=e.find(a+a):(r=e.self.document.body.createTextRange(),s=r.findText(a+a))}
 catch(u){s=!1}
 return t.body.removeChild(o),t.body.removeChild(i),s}
 catch(u){return!1}
}
 return t.body||t.getElementsByTagName("body")[0]?(f("csshyphens",function(){if(!x("hyphens","auto",!0))return!1;try{return i()}
 catch(e){return!1}
}
 ),f("softhyphens",function(){try{return o("&#173;",!0)&&o("&#8203;",!1)}
 catch(e){return!1}
}
 ),void f("softhyphensfind",function(){try{return a("&#173;")&&a("&#8203;")}
 catch(e){return!1}
}
 )):void setTimeout(n,r)}
 var r=300;setTimeout(n,r)}
 ),Modernizr.addTest("cssmask",x("maskRepeat","repeat-x",!0)),Modernizr.addTest("overflowscrolling",x("overflowScrolling","touch",!0)),Modernizr.addTest("cssreflections",x("boxReflect","above",!0)),Modernizr.addTest("cssresize",x("resize","both",!0)),Modernizr.addTest("shapes",x("shapeOutside","content-box",!0)),Modernizr.addTest("textalignlast",x("textAlignLast")),Modernizr.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&x("transform","scale(1)",!0)}
 ),Modernizr.addTest("csstransforms3d",function(){var e=!!x("perspective","1px",!0),t=Modernizr._config.usePrefixes;if(e&&(!t||"webkitPerspective"in _.style)){var n,r="#modernizr{width:0;height:0}";Modernizr.supports?n="@supports (perspective: 1px)":(n="@media (transform-3d)",t&&(n+=",(-webkit-transform-3d)")),n+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",q(r+n,function(t){e=7===t.offsetWidth&&18===t.offsetHeight})}return e}),Modernizr.addTest("csstransitions",x("transition","all",!0)),Modernizr.addTest("csspseudotransitions",function(){var t=!1;if(!Modernizr.csstransitions||!e.getComputedStyle)return t;var n='#modernizr:before { content:" "; font-size:5px;'+Modernizr._prefixes.join("transition:0s 100s;")+"}#modernizr.trigger:before { font-size:10px; }";return Modernizr.testStyles(n,function(n){e.getComputedStyle(n,":before").getPropertyValue("font-size"),n.className+="trigger",t="5px"===e.getComputedStyle(n,":before").getPropertyValue("font-size")}),t}),Modernizr.addTest("userselect",x("userSelect","none",!0));var I=k.testProp=function(e,t,r){return v([e],n,t,r)}
 ;Modernizr.addTest("textshadow",I("textShadow","1px 1px")),i(),o(T),delete k.addTest,delete k.addAsyncTest;for(var O=0;O<Modernizr._q.length;O++)Modernizr._q[O]();e.Modernizr=Modernizr}
 (window,document);
 /*! jQuery Migrate v3.3.2 | (c) OpenJS Foundation and other contributors | jquery.org/license */
 "undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e,window)}
 ):"object"==typeof module&&module.exports?module.exports=t(require("jquery"),window):t(jQuery,window)}
 (function(s,n){"use strict";function e(e){return 0<=function(e,t){for(var r=/^(\d+)\.(\d+)\.(\d+)/,n=r.exec(e)||[],o=r.exec(t)||[],i=1;i<=3;i++){if(+o[i]<+n[i])return 1;if(+n[i]<+o[i])return-1}
 return 0}
 (s.fn.jquery,e)}
 s.migrateVersion="3.3.2",n.console&&n.console.log&&(s&&e("3.0.0")||n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),s.migrateWarnings&&n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),n.console.log("JQMIGRATE: Migrate is installed"+(s.migrateMute?"":" with logging active")+", version "+s.migrateVersion));var r={}
 ;function u(e){var t=n.console;s.migrateDeduplicateWarnings&&r[e]||(r[e]=!0,s.migrateWarnings.push(e),t&&t.warn&&!s.migrateMute&&(t.warn("JQMIGRATE: "+e),s.migrateTrace&&t.trace&&t.trace()))}
 function t(e,t,r,n){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return u(n),r}
 ,set:function(e){u(n),r=e}
}
 )}
 function o(e,t,r,n){e[t]=function(){return u(n),r.apply(this,arguments)}
}
 s.migrateDeduplicateWarnings=!0,s.migrateWarnings=[],void 0===s.migrateTrace&&(s.migrateTrace=!0),s.migrateReset=function(){r={}
 ,s.migrateWarnings.length=0}
 ,"BackCompat"===n.document.compatMode&&u("jQuery is not compatible with Quirks Mode");var i,a,c,d={}
 ,l=s.fn.init,p=s.find,f=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,y=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,m=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;for(i in s.fn.init=function(e){var t=Array.prototype.slice.call(arguments);return"string"==typeof e&&"#"===e&&(u("jQuery( '#' ) is not a valid selector"),t[0]=[]),l.apply(this,t)}
 ,s.fn.init.prototype=s.fn,s.find=function(t){var r=Array.prototype.slice.call(arguments);if("string"==typeof t&&f.test(t))try{n.document.querySelector(t)}
 catch(e){t=t.replace(y,function(e,t,r,n){return"["+t+r+'"'+n+'"]'}
 );try{n.document.querySelector(t),u("Attribute selector with '#' must be quoted: "+r[0]),r[0]=t}
 catch(e){u("Attribute selector with '#' was not fixed: "+r[0])}
}
 return p.apply(this,r)}
 ,p)Object.prototype.hasOwnProperty.call(p,i)&&(s.find[i]=p[i]);o(s.fn,"size",function(){return this.length}
 ,"jQuery.fn.size() is deprecated and removed; use the .length property"),o(s,"parseJSON",function(){return JSON.parse.apply(null,arguments)}
 ,"jQuery.parseJSON is deprecated; use JSON.parse"),o(s,"holdReady",s.holdReady,"jQuery.holdReady is deprecated"),o(s,"unique",s.uniqueSort,"jQuery.unique is deprecated; use jQuery.uniqueSort"),t(s.expr,"filters",s.expr.pseudos,"jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),t(s.expr,":",s.expr.pseudos,"jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),e("3.1.1")&&o(s,"trim",function(e){return null==e?"":(e+"").replace(m,"")}
 ,"jQuery.trim is deprecated; use String.prototype.trim"),e("3.2.0")&&(o(s,"nodeName",function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}
 ,"jQuery.nodeName is deprecated"),o(s,"isArray",Array.isArray,"jQuery.isArray is deprecated; use Array.isArray")),e("3.3.0")&&(o(s,"isNumeric",function(e){var t=typeof e;return("number"==t||"string"==t)&&!isNaN(e-parseFloat(e))}
 ,"jQuery.isNumeric() is deprecated"),s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){d["[object "+t+"]"]=t.toLowerCase()}
 ),o(s,"type",function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?d[Object.prototype.toString.call(e)]||"object":typeof e}
 ,"jQuery.type is deprecated"),o(s,"isFunction",function(e){return"function"==typeof e}
 ,"jQuery.isFunction() is deprecated"),o(s,"isWindow",function(e){return null!=e&&e===e.window}
 ,"jQuery.isWindow() is deprecated")),s.ajax&&(a=s.ajax,c=/(=)\?(?=&|$)|\?\?/,s.ajax=function(){var e=a.apply(this,arguments);return e.promise&&(o(e,"success",e.done,"jQXHR.success is deprecated and removed"),o(e,"error",e.fail,"jQXHR.error is deprecated and removed"),o(e,"complete",e.always,"jQXHR.complete is deprecated and removed")),e}
 ,e("4.0.0")||s.ajaxPrefilter("+json",function(e){!1!==e.jsonp&&(c.test(e.url)||"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&c.test(e.data))&&u("JSON-to-JSONP auto-promotion is deprecated")}
 ));var g=s.fn.removeAttr,h=s.fn.toggleClass,v=/\S+/g;function j(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()}
 )}
 s.fn.removeAttr=function(e){var r=this;return s.each(e.match(v),function(e,t){s.expr.match.bool.test(t)&&(u("jQuery.fn.removeAttr no longer sets boolean properties: "+t),r.prop(t,!1))}
 ),g.apply(this,arguments)}
 ;var Q,b=!(s.fn.toggleClass=function(t){return void 0!==t&&"boolean"!=typeof t?h.apply(this,arguments):(u("jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var e=this.getAttribute&&this.getAttribute("class")||"";e&&s.data(this,"__className__",e),this.setAttribute&&this.setAttribute("class",!e&&!1!==t&&s.data(this,"__className__")||"")}
 ))}
 ),w=/^[a-z]/,x=/^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;s.swap&&s.each(["height","width","reliableMarginRight"],function(e,t){var r=s.cssHooks[t]&&s.cssHooks[t].get;r&&(s.cssHooks[t].get=function(){var e;return b=!0,e=r.apply(this,arguments),b=!1,e}
 )}
 ),s.swap=function(e,t,r,n){var o,i,a={}
 ;for(i in b||u("jQuery.swap() is undocumented and deprecated"),t)a[i]=e.style[i],e.style[i]=t[i];for(i in o=r.apply(e,n||[]),t)e.style[i]=a[i];return o}
 ,e("3.4.0")&&"undefined"!=typeof Proxy&&(s.cssProps=new Proxy(s.cssProps||{}
    ,{set:function(){return u("JQMIGRATE: jQuery.cssProps is deprecated"),Reflect.set.apply(this,arguments)}
}
 )),s.cssNumber||(s.cssNumber={}
    ),Q=s.fn.css,s.fn.css=function(e,t){var r,n,o=this;return e&&"object"==typeof e&&!Array.isArray(e)?(s.each(e,function(e,t){s.fn.css.call(o,e,t)}
 ),this):("number"==typeof t&&(r=j(e),n=r,w.test(n)&&x.test(n[0].toUpperCase()+n.slice(1))||s.cssNumber[r]||u('Number-typed values are deprecated for jQuery.fn.css( "'+e+'", value )')),Q.apply(this,arguments))}
 ;var A,k,S,M,N=s.data;s.data=function(e,t,r){var n,o,i;if(t&&"object"==typeof t&&2===arguments.length){for(i in n=s.hasData(e)&&N.call(this,e),o={}
 ,t)i!==j(i)?(u("jQuery.data() always sets/gets camelCased names: "+i),n[i]=t[i]):o[i]=t[i];return N.call(this,e,o),t}
 return t&&"string"==typeof t&&t!==j(t)&&(n=s.hasData(e)&&N.call(this,e))&&t in n?(u("jQuery.data() always sets/gets camelCased names: "+t),2<arguments.length&&(n[t]=r),n[t]):N.apply(this,arguments)}
 ,s.fx&&(S=s.Tween.prototype.run,M=function(e){return e}
 ,s.Tween.prototype.run=function(){1<s.easing[this.easing].length&&(u("'jQuery.easing."+this.easing.toString()+"' should use only one argument"),s.easing[this.easing]=M),S.apply(this,arguments)}
 ,A=s.fx.interval||13,k="jQuery.fx.interval is deprecated",n.requestAnimationFrame&&Object.defineProperty(s.fx,"interval",{configurable:!0,enumerable:!0,get:function(){return n.document.hidden||u(k),A}
 ,set:function(e){u(k),A=e}
}
 ));var R=s.fn.load,H=s.event.add,C=s.event.fix;s.event.props=[],s.event.fixHooks={}
 ,t(s.event.props,"concat",s.event.props.concat,"jQuery.event.props.concat() is deprecated and removed"),s.event.fix=function(e){var t,r=e.type,n=this.fixHooks[r],o=s.event.props;if(o.length){u("jQuery.event.props are deprecated and removed: "+o.join());while(o.length)s.event.addProp(o.pop())}
 if(n&&!n._migrated_&&(n._migrated_=!0,u("jQuery.event.fixHooks are deprecated and removed: "+r),(o=n.props)&&o.length))while(o.length)s.event.addProp(o.pop());return t=C.call(this,e),n&&n.filter?n.filter(t,e):t}
 ,s.event.add=function(e,t){return e===n&&"load"===t&&"complete"===n.document.readyState&&u("jQuery(window).on('load'...) called after load event occurred"),H.apply(this,arguments)}
 ,s.each(["load","unload","error"],function(e,t){s.fn[t]=function(){var e=Array.prototype.slice.call(arguments,0);return"load"===t&&"string"==typeof e[0]?R.apply(this,e):(u("jQuery.fn."+t+"() is deprecated"),e.splice(0,0,t),arguments.length?this.on.apply(this,e):(this.triggerHandler.apply(this,e),this))}
}
 ),s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,r){s.fn[r]=function(e,t){return u("jQuery.fn."+r+"() event shorthand is deprecated"),0<arguments.length?this.on(r,null,e,t):this.trigger(r)}
}
 ),s(function(){s(n.document).triggerHandler("ready")}
 ),s.event.special.ready={setup:function(){this===n.document&&u("'ready' event is deprecated")}
}
 ,s.fn.extend({bind:function(e,t,r){return u("jQuery.fn.bind() is deprecated"),this.on(e,null,t,r)}
 ,unbind:function(e,t){return u("jQuery.fn.unbind() is deprecated"),this.off(e,null,t)}
 ,delegate:function(e,t,r,n){return u("jQuery.fn.delegate() is deprecated"),this.on(t,e,r,n)}
 ,undelegate:function(e,t,r){return u("jQuery.fn.undelegate() is deprecated"),1===arguments.length?this.off(e,"**"):this.off(t,e||"**",r)}
 ,hover:function(e,t){return u("jQuery.fn.hover() is deprecated"),this.on("mouseenter",e).on("mouseleave",t||e)}
}
 );function T(e){var t=n.document.implementation.createHTMLDocument("");return t.body.innerHTML=e,t.body&&t.body.innerHTML}
 function P(e){var t=e.replace(O,"<$1></$2>");t!==e&&T(e)!==T(t)&&u("HTML tags must be properly nested and closed: "+e)}
 var O=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,q=s.htmlPrefilter;s.UNSAFE_restoreLegacyHtmlPrefilter=function(){s.htmlPrefilter=function(e){return P(e),e.replace(O,"<$1></$2>")}
}
 ,s.htmlPrefilter=function(e){return P(e),q(e)}
 ;var D,_=s.fn.offset;s.fn.offset=function(){var e=this[0];return!e||e.nodeType&&e.getBoundingClientRect?_.apply(this,arguments):(u("jQuery.fn.offset() requires a valid DOM element"),arguments.length?this:void 0)}
 ,s.ajax&&(D=s.param,s.param=function(e,t){var r=s.ajaxSettings&&s.ajaxSettings.traditional;return void 0===t&&r&&(u("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),t=r),D.call(this,e,t)}
 );var E,F,J=s.fn.andSelf||s.fn.addBack;return s.fn.andSelf=function(){return u("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),J.apply(this,arguments)}
 ,s.Deferred&&(E=s.Deferred,F=[["resolve","done",s.Callbacks("once memory"),s.Callbacks("once memory"),"resolved"],["reject","fail",s.Callbacks("once memory"),s.Callbacks("once memory"),"rejected"],["notify","progress",s.Callbacks("memory"),s.Callbacks("memory")]],s.Deferred=function(e){var i=E(),a=i.promise();return i.pipe=a.pipe=function(){var o=arguments;return u("deferred.pipe() is deprecated"),s.Deferred(function(n){s.each(F,function(e,t){var r="function"==typeof o[e]&&o[e];i[t[1]](function(){var e=r&&r.apply(this,arguments);e&&"function"==typeof e.promise?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[t[0]+"With"](this===a?n.promise():this,r?[e]:arguments)}
 )}
 ),o=null}
 ).promise()}
 ,e&&e.call(i,i),i}
 ,s.Deferred.exceptionHook=E.exceptionHook),s}
 );
 var $=window.jQuery;
 (function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()}
 )(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}
 .toString.call(e)}
 function t(e,t){if(1!==e.nodeType)return[];var o=e.ownerDocument.defaultView,n=o.getComputedStyle(e,null);return t?n[t]:n}
 function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}
 function n(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}
 var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll|overlay)/.test(r+s+p)?e:n(o(e))}
 function r(e){return 11===e?pe:10===e?se:pe||se}
 function p(e){if(!e)return document.documentElement;for(var o=r(10)?document.body:null,n=e.offsetParent||null;n===o&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TH','TD','TABLE'].indexOf(n.nodeName)&&'static'===t(n,'position')?p(n):n:e?e.ownerDocument.documentElement:document.documentElement}
 function s(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||p(e.firstElementChild)===e)}
 function d(e){return null===e.parentNode?e:d(e.parentNode)}
 function a(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,n=o?e:t,i=o?t:e,r=document.createRange();r.setStart(n,0),r.setEnd(i,0);var l=r.commonAncestorContainer;if(e!==l&&t!==l||n.contains(i))return s(l)?l:p(l);var f=d(e);return f.host?a(f.host,t):a(e,d(t).host)}
 function l(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',n=e.nodeName;if('BODY'===n||'HTML'===n){var i=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||i;return r[o]}
 return e[o]}
 function f(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],n=l(t,'top'),i=l(t,'left'),r=o?-1:1;return e.top+=n*r,e.bottom+=n*r,e.left+=i*r,e.right+=i*r,e}
 function m(e,t){var o='x'===t?'Left':'Top',n='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'],10)+parseFloat(e['border'+n+'Width'],10)}
 function h(e,t,o,n){return ee(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],r(10)?parseInt(o['offset'+e])+parseInt(n['margin'+('Height'===e?'Top':'Left')])+parseInt(n['margin'+('Height'===e?'Bottom':'Right')]):0)}
 function c(e){var t=e.body,o=e.documentElement,n=r(10)&&getComputedStyle(o);return{height:h('Height',t,o,n),width:h('Width',t,o,n)}
}
 function g(e){return fe({}
    ,e,{right:e.left+e.width,bottom:e.top+e.height}
    )}
 function u(e){var o={}
 ;try{if(r(10)){o=e.getBoundingClientRect();var n=l(e,'top'),i=l(e,'left');o.top+=n,o.left+=i,o.bottom+=n,o.right+=i}
 else o=e.getBoundingClientRect()}
 catch(t){}
 var p={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top}
 ,s='HTML'===e.nodeName?c(e.ownerDocument):{}
 ,d=s.width||e.clientWidth||p.right-p.left,a=s.height||e.clientHeight||p.bottom-p.top,f=e.offsetWidth-d,h=e.offsetHeight-a;if(f||h){var u=t(e);f-=m(u,'x'),h-=m(u,'y'),p.width-=f,p.height-=h}
 return g(p)}
 function b(e,o){var i=2<arguments.length&&void 0!==arguments[2]&&arguments[2],p=r(10),s='HTML'===o.nodeName,d=u(e),a=u(o),l=n(e),m=t(o),h=parseFloat(m.borderTopWidth,10),c=parseFloat(m.borderLeftWidth,10);i&&s&&(a.top=ee(a.top,0),a.left=ee(a.left,0));var b=g({top:d.top-a.top-h,left:d.left-a.left-c,width:d.width,height:d.height}
    );if(b.marginTop=0,b.marginLeft=0,!p&&s){var w=parseFloat(m.marginTop,10),y=parseFloat(m.marginLeft,10);b.top-=h-w,b.bottom-=h-w,b.left-=c-y,b.right-=c-y,b.marginTop=w,b.marginLeft=y}
 return(p&&!i?o.contains(l):o===l&&'BODY'!==l.nodeName)&&(b=f(b,o)),b}
 function w(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=e.ownerDocument.documentElement,n=b(e,o),i=ee(o.clientWidth,window.innerWidth||0),r=ee(o.clientHeight,window.innerHeight||0),p=t?0:l(o),s=t?0:l(o,'left'),d={top:p-n.top+n.marginTop,left:s-n.left+n.marginLeft,width:i,height:r}
 ;return g(d)}
 function y(e){var n=e.nodeName;if('BODY'===n||'HTML'===n)return!1;if('fixed'===t(e,'position'))return!0;var i=o(e);return!!i&&y(i)}
 function E(e){if(!e||!e.parentElement||r())return document.documentElement;for(var o=e.parentElement;o&&'none'===t(o,'transform');)o=o.parentElement;return o||document.documentElement}
 function v(e,t,i,r){var p=4<arguments.length&&void 0!==arguments[4]&&arguments[4],s={top:0,left:0}
 ,d=p?E(e):a(e,t);if('viewport'===r)s=w(d,p);else{var l;'scrollParent'===r?(l=n(o(t)),'BODY'===l.nodeName&&(l=e.ownerDocument.documentElement)):'window'===r?l=e.ownerDocument.documentElement:l=r;var f=b(l,d,p);if('HTML'===l.nodeName&&!y(d)){var m=c(e.ownerDocument),h=m.height,g=m.width;s.top+=f.top-f.marginTop,s.bottom=h+f.top,s.left+=f.left-f.marginLeft,s.right=g+f.left}
 else s=f}
 i=i||0;var u='number'==typeof i;return s.left+=u?i:i.left||0,s.top+=u?i:i.top||0,s.right-=u?i:i.right||0,s.bottom-=u?i:i.bottom||0,s}
 function x(e){var t=e.width,o=e.height;return t*o}
 function O(e,t,o,n,i){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=v(o,n,r,i),s={top:{width:p.width,height:t.top-p.top}
 ,right:{width:p.right-t.right,height:p.height}
 ,bottom:{width:p.width,height:p.bottom-t.bottom}
 ,left:{width:t.left-p.left,height:p.height}
}
 ,d=Object.keys(s).map(function(e){return fe({key:e}
    ,s[e],{area:x(s[e])}
 )}
 ).sort(function(e,t){return t.area-e.area}
 ),a=d.filter(function(e){var t=e.width,n=e.height;return t>=o.clientWidth&&n>=o.clientHeight}
 ),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}
 function L(e,t,o){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,i=n?E(t):a(t,o);return b(o,i,n)}
 function S(e){var t=e.ownerDocument.defaultView,o=t.getComputedStyle(e),n=parseFloat(o.marginTop||0)+parseFloat(o.marginBottom||0),i=parseFloat(o.marginLeft||0)+parseFloat(o.marginRight||0),r={width:e.offsetWidth+i,height:e.offsetHeight+n}
 ;return r}
 function T(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'}
 ;return e.replace(/left|right|bottom|top/g,function(e){return t[e]}
 )}
 function C(e,t,o){o=o.split('-')[0];var n=S(e),i={width:n.width,height:n.height}
 ,r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return i[p]=t[p]+t[d]/2-n[d]/2,i[s]=o===s?t[s]-n[a]:t[T(s)],i}
 function D(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}
 function N(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o}
 );var n=D(e,function(e){return e[t]===o}
 );return e.indexOf(n)}
 function P(t,o,n){var i=void 0===n?t:t.slice(0,N(t,'name',n));return i.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var n=t['function']||t.fn;t.enabled&&e(n)&&(o.offsets.popper=g(o.offsets.popper),o.offsets.reference=g(o.offsets.reference),o=n(o,t))}
 ),o}
 function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{}
 ,arrowStyles:{}
 ,attributes:{}
 ,flipped:!1,offsets:{}
}
 ;e.offsets.reference=L(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=O(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=C(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?'fixed':'absolute',e=P(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}
}
 function W(e,t){return e.some(function(e){var o=e.name,n=e.enabled;return n&&o===t}
 )}
 function B(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}
 return null}
 function H(){return this.state.isDestroyed=!0,W(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.position='',this.popper.style.top='',this.popper.style.left='',this.popper.style.right='',this.popper.style.bottom='',this.popper.style.willChange='',this.popper.style[B('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}
 function A(e){var t=e.ownerDocument;return t?t.defaultView:window}
 function M(e,t,o,i){var r='BODY'===e.nodeName,p=r?e.ownerDocument.defaultView:e;p.addEventListener(t,o,{passive:!0}
    ),r||M(n(p.parentNode),t,o,i),i.push(p)}
 function F(e,t,o,i){o.updateBound=i,A(e).addEventListener('resize',o.updateBound,{passive:!0}
 );var r=n(e);return M(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}
 function I(){this.state.eventsEnabled||(this.state=F(this.reference,this.options,this.state,this.scheduleUpdate))}
 function R(e,t){return A(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}
 ),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}
 function U(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=R(this.reference,this.state))}
 function Y(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}
 function V(e,t){Object.keys(t).forEach(function(o){var n='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&Y(t[o])&&(n='px'),e.style[o]=t[o]+n}
 )}
 function j(e,t){Object.keys(t).forEach(function(o){var n=t[o];!1===n?e.removeAttribute(o):e.setAttribute(o,t[o])}
 )}
 function q(e,t){var o=e.offsets,n=o.popper,i=o.reference,r=$,p=function(e){return e}
 ,s=r(i.width),d=r(n.width),a=-1!==['left','right'].indexOf(e.placement),l=-1!==e.placement.indexOf('-'),f=t?a||l||s%2==d%2?r:Z:p,m=t?r:p;return{left:f(1==s%2&&1==d%2&&!l&&t?n.left-1:n.left),top:m(n.top),bottom:m(n.bottom),right:f(n.right)}
}
 function K(e,t,o){var n=D(e,function(e){var o=e.name;return o===t}
 ),i=!!n&&e.some(function(e){return e.name===o&&e.enabled&&e.order<n.order}
 );if(!i){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}
 return i}
 function z(e){return'end'===e?'start':'start'===e?'end':e}
 function G(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=ce.indexOf(e),n=ce.slice(o+1).concat(ce.slice(0,o));return t?n.reverse():n}
 function _(e,t,o,n){var i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+i[1],p=i[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=n;}
 var d=g(s);return d[t]/100*r}
 if('vh'===p||'vw'===p){var a;return a='vh'===p?ee(document.documentElement.clientHeight,window.innerHeight||0):ee(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}
 return r}
 function X(e,t,o,n){var i=[0,0],r=-1!==['right','left'].indexOf(n),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}
 ),s=p.indexOf(D(p,function(e){return-1!==e.search(/,|\s/)}
 ));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,n){var i=(1===n?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)}
 ,[]).map(function(e){return _(e,i,t,o)}
 )}
 ),a.forEach(function(e,t){e.forEach(function(o,n){Y(o)&&(i[t]+=o*('-'===e[n-1]?-1:1))}
 )}
 ),i}
 function J(e,t){var o,n=t.offset,i=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=i.split('-')[0];return o=Y(+n)?[+n,0]:X(n,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}
 for(var Q=Math.min,Z=Math.floor,$=Math.round,ee=Math.max,te='undefined'!=typeof window&&'undefined'!=typeof document,oe=['Edge','Trident','Firefox'],ne=0,ie=0;ie<oe.length;ie+=1)if(te&&0<=navigator.userAgent.indexOf(oe[ie])){ne=1;break}
 var i=te&&window.Promise,re=i?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}
 ))}
}
 :function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()}
 ,ne))}
}
 ,pe=te&&!!(window.MSInputMethodContext&&document.documentMode),se=te&&/MSIE 10/.test(navigator.userAgent),de=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')}
 ,ae=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}
 return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}
}
 (),le=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}
    ):e[t]=o,e}
 ,fe=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var n in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}
 ,me=te&&/Firefox/i.test(navigator.userAgent),he=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],ce=he.slice(3),ge={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'}
 ,ue=function(){function t(o,n){var i=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{}
 ;de(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)}
 ,this.update=re(this.update.bind(this)),this.options=fe({}
    ,t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]}
 ,this.reference=o&&o.jquery?o[0]:o,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={}
 ,Object.keys(fe({}
    ,t.Defaults.modifiers,r.modifiers)).forEach(function(e){i.options.modifiers[e]=fe({}
    ,t.Defaults.modifiers[e]||{}
    ,r.modifiers?r.modifiers[e]:{}
    )}
 ),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return fe({name:e}
    ,i.options.modifiers[e])}
 ).sort(function(e,t){return e.order-t.order}
 ),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}
 ),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}
 return ae(t,[{key:'update',value:function(){return k.call(this)}
}
 ,{key:'destroy',value:function(){return H.call(this)}
}
 ,{key:'enableEventListeners',value:function(){return I.call(this)}
}
 ,{key:'disableEventListeners',value:function(){return U.call(this)}
}
]),t}
 ();return ue.Utils=('undefined'==typeof window?global:window).PopperUtils,ue.placements=he,ue.Defaults={placement:'bottom',positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){}
 ,onUpdate:function(){}
 ,modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],n=t.split('-')[1];if(n){var i=e.offsets,r=i.reference,p=i.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:le({}
    ,d,r[d]),end:le({}
    ,d,r[d]+r[a]-p[a])}
 ;e.offsets.popper=fe({}
    ,p,l[n])}
 return e}
}
 ,offset:{order:200,enabled:!0,fn:J,offset:0}
 ,preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||p(e.instance.popper);e.instance.reference===o&&(o=p(o));var n=B('transform'),i=e.instance.popper.style,r=i.top,s=i.left,d=i[n];i.top='',i.left='',i[n]='';var a=v(e.instance.popper,e.instance.reference,t.padding,o,e.positionFixed);i.top=r,i.left=s,i[n]=d,t.boundaries=a;var l=t.priority,f=e.offsets.popper,m={primary:function(e){var o=f[e];return f[e]<a[e]&&!t.escapeWithReference&&(o=ee(f[e],a[e])),le({}
    ,e,o)}
 ,secondary:function(e){var o='right'===e?'left':'top',n=f[o];return f[e]>a[e]&&!t.escapeWithReference&&(n=Q(f[o],a[e]-('right'===e?f.width:f.height))),le({}
    ,o,n)}
}
 ;return l.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';f=fe({}
    ,f,m[t](e))}
 ),e.offsets.popper=f,e}
 ,priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'}
 ,keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,n=t.reference,i=e.placement.split('-')[0],r=Z,p=-1!==['top','bottom'].indexOf(i),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(n[d])&&(e.offsets.popper[d]=r(n[d])-o[a]),o[d]>r(n[s])&&(e.offsets.popper[d]=r(n[s])),e}
}
 ,arrow:{order:500,enabled:!0,fn:function(e,o){var n;if(!K(e.instance.modifiers,'arrow','keepTogether'))return e;var i=o.element;if('string'==typeof i){if(i=e.instance.popper.querySelector(i),!i)return e;}
 else if(!e.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var r=e.placement.split('-')[0],p=e.offsets,s=p.popper,d=p.reference,a=-1!==['left','right'].indexOf(r),l=a?'height':'width',f=a?'Top':'Left',m=f.toLowerCase(),h=a?'left':'top',c=a?'bottom':'right',u=S(i)[l];d[c]-u<s[m]&&(e.offsets.popper[m]-=s[m]-(d[c]-u)),d[m]+u>s[c]&&(e.offsets.popper[m]+=d[m]+u-s[c]),e.offsets.popper=g(e.offsets.popper);var b=d[m]+d[l]/2-u/2,w=t(e.instance.popper),y=parseFloat(w['margin'+f],10),E=parseFloat(w['border'+f+'Width'],10),v=b-e.offsets.popper[m]-y-E;return v=ee(Q(s[l]-u,v),0),e.arrowElement=i,e.offsets.arrow=(n={}
    ,le(n,m,$(v)),le(n,h,''),n),e}
 ,element:'[x-arrow]'}
 ,flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=v(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),n=e.placement.split('-')[0],i=T(n),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case ge.FLIP:p=[n,i];break;case ge.CLOCKWISE:p=G(n);break;case ge.COUNTERCLOCKWISE:p=G(n,!0);break;default:p=t.behavior;}
 return p.forEach(function(s,d){if(n!==s||p.length===d+1)return e;n=e.placement.split('-')[0],i=T(n);var a=e.offsets.popper,l=e.offsets.reference,f=Z,m='left'===n&&f(a.right)>f(l.left)||'right'===n&&f(a.left)<f(l.right)||'top'===n&&f(a.bottom)>f(l.top)||'bottom'===n&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===n&&h||'right'===n&&c||'top'===n&&g||'bottom'===n&&u,w=-1!==['top','bottom'].indexOf(n),y=!!t.flipVariations&&(w&&'start'===r&&h||w&&'end'===r&&c||!w&&'start'===r&&g||!w&&'end'===r&&u),E=!!t.flipVariationsByContent&&(w&&'start'===r&&c||w&&'end'===r&&h||!w&&'start'===r&&u||!w&&'end'===r&&g),v=y||E;(m||b||v)&&(e.flipped=!0,(m||b)&&(n=p[d+1]),v&&(r=z(r)),e.placement=n+(r?'-'+r:''),e.offsets.popper=fe({}
    ,e.offsets.popper,C(e.instance.popper,e.offsets.reference,e.placement)),e=P(e.instance.modifiers,e,'flip'))}
 ),e}
 ,behavior:'flip',padding:5,boundariesElement:'viewport',flipVariations:!1,flipVariationsByContent:!1}
 ,inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],n=e.offsets,i=n.popper,r=n.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return i[p?'left':'top']=r[o]-(s?i[p?'width':'height']:0),e.placement=T(t),e.offsets.popper=g(i),e}
}
 ,hide:{order:800,enabled:!0,fn:function(e){if(!K(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=D(e.instance.modifiers,function(e){return'preventOverflow'===e.name}
 ).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}
 else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}
 return e}
}
 ,computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,n=t.y,i=e.offsets.popper,r=D(e.instance.modifiers,function(e){return'applyStyle'===e.name}
 ).gpuAcceleration;void 0!==r&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===r?t.gpuAcceleration:r,l=p(e.instance.popper),f=u(l),m={position:i.position}
 ,h=q(e,2>window.devicePixelRatio||!me),c='bottom'===o?'top':'bottom',g='right'===n?'left':'right',b=B('transform');if(d='bottom'==c?'HTML'===l.nodeName?-l.clientHeight+h.bottom:-f.height+h.bottom:h.top,s='right'==g?'HTML'===l.nodeName?-l.clientWidth+h.right:-f.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[g]=0,m.willChange='transform';else{var w='bottom'==c?-1:1,y='right'==g?-1:1;m[c]=d*w,m[g]=s*y,m.willChange=c+', '+g}
 var E={"x-placement":e.placement}
 ;return e.attributes=fe({}
    ,E,e.attributes),e.styles=fe({}
    ,m,e.styles),e.arrowStyles=fe({}
    ,e.offsets.arrow,e.arrowStyles),e}
 ,gpuAcceleration:!0,x:'bottom',y:'right'}
 ,applyStyle:{order:900,enabled:!0,fn:function(e){return V(e.instance.popper,e.styles),j(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&V(e.arrowElement,e.arrowStyles),e}
 ,onLoad:function(e,t,o,n,i){var r=L(i,t,e,o.positionFixed),p=O(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),V(t,{position:o.positionFixed?'fixed':'absolute'}
 ),o}
 ,gpuAcceleration:void 0}
}
}
 ,ue}
 );
 ;
 /*!
   * Bootstrap v4.3.1 (https://getbootstrap.com/)
   * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   */
 !function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e((t=t||self).bootstrap={}
 ,t.jQuery,t.Popper)}
 (this,function(t,g,u){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}
}
 function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}
 function l(o){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{}
 ,e=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}
 ))),e.forEach(function(t){var e,n,i;e=o,i=r[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}
    ):e[n]=i}
 )}
 return o}
 g=g&&g.hasOwnProperty("default")?g.default:g,u=u&&u.hasOwnProperty("default")?u.default:u;var e="transitionend";function n(t){var e=this,n=!1;return g(this).one(_.TRANSITION_END,function(){n=!0}
 ),setTimeout(function(){n||_.triggerTransitionEnd(e)}
 ,t),this}
 var _={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t}
 ,getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}
 try{return document.querySelector(e)?e:null}
 catch(t){return null}
}
 ,getTransitionDurationFromElement:function(t){if(!t)return 0;var e=g(t).css("transition-duration"),n=g(t).css("transition-delay"),i=parseFloat(e),o=parseFloat(n);return i||o?(e=e.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(e)+parseFloat(n))):0}
 ,reflow:function(t){return t.offsetHeight}
 ,triggerTransitionEnd:function(t){g(t).trigger(e)}
 ,supportsTransitionEnd:function(){return Boolean(e)}
 ,isElement:function(t){return(t[0]||t).nodeType}
 ,typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=e[i],s=r&&_.isElement(r)?"element":(a=r,{}
    .toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(o).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}
 var a}
 ,findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"!=typeof t.getRootNode)return t instanceof ShadowRoot?t:t.parentNode?_.findShadowRoot(t.parentNode):null;var e=t.getRootNode();return e instanceof ShadowRoot?e:null}
}
 ;g.fn.emulateTransitionEnd=n,g.event.special[_.TRANSITION_END]={bindType:e,delegateType:e,handle:function(t){if(g(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}
}
 ;var o="alert",r="bs.alert",a="."+r,c=g.fn[o],h={CLOSE:"close"+a,CLOSED:"closed"+a,CLICK_DATA_API:"click"+a+".data-api"}
 ,f="alert",d="fade",m="show",p=function(){function i(t){this._element=t}
 var t=i.prototype;return t.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)}
 ,t.dispose=function(){g.removeData(this._element,r),this._element=null}
 ,t._getRootElement=function(t){var e=_.getSelectorFromElement(t),n=!1;return e&&(n=document.querySelector(e)),n||(n=g(t).closest("."+f)[0]),n}
 ,t._triggerCloseEvent=function(t){var e=g.Event(h.CLOSE);return g(t).trigger(e),e}
 ,t._removeElement=function(e){var n=this;if(g(e).removeClass(m),g(e).hasClass(d)){var t=_.getTransitionDurationFromElement(e);g(e).one(_.TRANSITION_END,function(t){return n._destroyElement(e,t)}
 ).emulateTransitionEnd(t)}
 else this._destroyElement(e)}
 ,t._destroyElement=function(t){g(t).detach().trigger(h.CLOSED).remove()}
 ,i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(r);e||(e=new i(this),t.data(r,e)),"close"===n&&e[n](this)}
 )}
 ,i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}
}
 ,s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}
}
]),i}
 ();g(document).on(h.CLICK_DATA_API,'[data-dismiss="alert"]',p._handleDismiss(new p)),g.fn[o]=p._jQueryInterface,g.fn[o].Constructor=p,g.fn[o].noConflict=function(){return g.fn[o]=c,p._jQueryInterface}
 ;var v="button",y="bs.button",E="."+y,C=".data-api",T=g.fn[v],S="active",b="btn",I="focus",D='[data-toggle^="button"]',w='[data-toggle="buttons"]',A='input:not([type="hidden"])',N=".active",O=".btn",k={CLICK_DATA_API:"click"+E+C,FOCUS_BLUR_DATA_API:"focus"+E+C+" blur"+E+C}
 ,P=function(){function n(t){this._element=t}
 var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=g(this._element).closest(w)[0];if(n){var i=this._element.querySelector(A);if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains(S))t=!1;else{var o=n.querySelector(N);o&&g(o).removeClass(S)}
 if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!this._element.classList.contains(S),g(i).trigger("change")}
 i.focus(),e=!1}
}
 e&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(S)),t&&g(this._element).toggleClass(S)}
 ,t.dispose=function(){g.removeData(this._element,y),this._element=null}
 ,n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(y);t||(t=new n(this),g(this).data(y,t)),"toggle"===e&&t[e]()}
 )}
 ,s(n,null,[{key:"VERSION",get:function(){return"4.3.1"}
}
]),n}
 ();g(document).on(k.CLICK_DATA_API,D,function(t){t.preventDefault();var e=t.target;g(e).hasClass(b)||(e=g(e).closest(O)),P._jQueryInterface.call(g(e),"toggle")}
 ).on(k.FOCUS_BLUR_DATA_API,D,function(t){var e=g(t.target).closest(O)[0];g(e).toggleClass(I,/^focus(in)?$/.test(t.type))}
 ),g.fn[v]=P._jQueryInterface,g.fn[v].Constructor=P,g.fn[v].noConflict=function(){return g.fn[v]=T,P._jQueryInterface}
 ;var L="carousel",j="bs.carousel",H="."+j,R=".data-api",x=g.fn[L],F={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0}
 ,U={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"}
 ,W="next",q="prev",M="left",K="right",Q={SLIDE:"slide"+H,SLID:"slid"+H,KEYDOWN:"keydown"+H,MOUSEENTER:"mouseenter"+H,MOUSELEAVE:"mouseleave"+H,TOUCHSTART:"touchstart"+H,TOUCHMOVE:"touchmove"+H,TOUCHEND:"touchend"+H,POINTERDOWN:"pointerdown"+H,POINTERUP:"pointerup"+H,DRAG_START:"dragstart"+H,LOAD_DATA_API:"load"+H+R,CLICK_DATA_API:"click"+H+R}
 ,B="carousel",V="active",Y="slide",z="carousel-item-right",X="carousel-item-left",$="carousel-item-next",G="carousel-item-prev",J="pointer-event",Z=".active",tt=".active.carousel-item",et=".carousel-item",nt=".carousel-item img",it=".carousel-item-next, .carousel-item-prev",ot=".carousel-indicators",rt="[data-slide], [data-slide-to]",st='[data-ride="carousel"]',at={TOUCH:"touch",PEN:"pen"}
 ,lt=function(){function r(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(ot),this._touchSupported="ontouchstart"in document.documentElement||0<navigator.maxTouchPoints,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}
 var t=r.prototype;return t.next=function(){this._isSliding||this._slide(W)}
 ,t.nextWhenVisible=function(){!document.hidden&&g(this._element).is(":visible")&&"hidden"!==g(this._element).css("visibility")&&this.next()}
 ,t.prev=function(){this._isSliding||this._slide(q)}
 ,t.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(it)&&(_.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}
 ,t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))}
 ,t.to=function(t){var e=this;this._activeElement=this._element.querySelector(tt);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)g(this._element).one(Q.SLID,function(){return e.to(t)}
 );else{if(n===t)return this.pause(),void this.cycle();var i=n<t?W:q;this._slide(i,this._items[t])}
}
 ,t.dispose=function(){g(this._element).off(H),g.removeData(this._element,j),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null}
 ,t._getConfig=function(t){return t=l({}
    ,F,t),_.typeCheckConfig(L,t,U),t}
 ,t._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;0<e&&this.prev(),e<0&&this.next()}
}
 ,t._addEventListeners=function(){var e=this;this._config.keyboard&&g(this._element).on(Q.KEYDOWN,function(t){return e._keydown(t)}
 ),"hover"===this._config.pause&&g(this._element).on(Q.MOUSEENTER,function(t){return e.pause(t)}
 ).on(Q.MOUSELEAVE,function(t){return e.cycle(t)}
 ),this._config.touch&&this._addTouchEventListeners()}
 ,t._addTouchEventListeners=function(){var n=this;if(this._touchSupported){var e=function(t){n._pointerEvent&&at[t.originalEvent.pointerType.toUpperCase()]?n.touchStartX=t.originalEvent.clientX:n._pointerEvent||(n.touchStartX=t.originalEvent.touches[0].clientX)}
 ,i=function(t){n._pointerEvent&&at[t.originalEvent.pointerType.toUpperCase()]&&(n.touchDeltaX=t.originalEvent.clientX-n.touchStartX),n._handleSwipe(),"hover"===n._config.pause&&(n.pause(),n.touchTimeout&&clearTimeout(n.touchTimeout),n.touchTimeout=setTimeout(function(t){return n.cycle(t)}
 ,500+n._config.interval))}
 ;g(this._element.querySelectorAll(nt)).on(Q.DRAG_START,function(t){return t.preventDefault()}
 ),this._pointerEvent?(g(this._element).on(Q.POINTERDOWN,function(t){return e(t)}
 ),g(this._element).on(Q.POINTERUP,function(t){return i(t)}
 ),this._element.classList.add(J)):(g(this._element).on(Q.TOUCHSTART,function(t){return e(t)}
 ),g(this._element).on(Q.TOUCHMOVE,function(t){var e;(e=t).originalEvent.touches&&1<e.originalEvent.touches.length?n.touchDeltaX=0:n.touchDeltaX=e.originalEvent.touches[0].clientX-n.touchStartX}
 ),g(this._element).on(Q.TOUCHEND,function(t){return i(t)}
 ))}
}
 ,t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}
}
 ,t._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(et)):[],this._items.indexOf(t)}
 ,t._getItemByDirection=function(t,e){var n=t===W,i=t===q,o=this._getItemIndex(e),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return e;var s=(o+(t===q?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]}
 ,t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(this._element.querySelector(tt)),o=g.Event(Q.SLIDE,{relatedTarget:t,direction:e,from:i,to:n}
    );return g(this._element).trigger(o),o}
 ,t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=[].slice.call(this._indicatorsElement.querySelectorAll(Z));g(e).removeClass(V);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&g(n).addClass(V)}
}
 ,t._slide=function(t,e){var n,i,o,r=this,s=this._element.querySelector(tt),a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),h=Boolean(this._interval);if(o=t===W?(n=X,i=$,M):(n=z,i=G,K),l&&g(l).hasClass(V))this._isSliding=!1;else if(!this._triggerSlideEvent(l,o).isDefaultPrevented()&&s&&l){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(l);var u=g.Event(Q.SLID,{relatedTarget:l,direction:o,from:a,to:c}
    );if(g(this._element).hasClass(Y)){g(l).addClass(i),_.reflow(l),g(s).addClass(n),g(l).addClass(n);var f=parseInt(l.getAttribute("data-interval"),10);this._config.interval=f?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,f):this._config.defaultInterval||this._config.interval;var d=_.getTransitionDurationFromElement(s);g(s).one(_.TRANSITION_END,function(){g(l).removeClass(n+" "+i).addClass(V),g(s).removeClass(V+" "+i+" "+n),r._isSliding=!1,setTimeout(function(){return g(r._element).trigger(u)}
 ,0)}
 ).emulateTransitionEnd(d)}
 else g(s).removeClass(V),g(l).addClass(V),this._isSliding=!1,g(this._element).trigger(u);h&&this.cycle()}
}
 ,r._jQueryInterface=function(i){return this.each(function(){var t=g(this).data(j),e=l({}
    ,F,g(this).data());"object"==typeof i&&(e=l({}
    ,e,i));var n="string"==typeof i?i:e.slide;if(t||(t=new r(this,e),g(this).data(j,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}
 else e.interval&&e.ride&&(t.pause(),t.cycle())}
 )}
 ,r._dataApiClickHandler=function(t){var e=_.getSelectorFromElement(this);if(e){var n=g(e)[0];if(n&&g(n).hasClass(B)){var i=l({}
    ,g(n).data(),g(this).data()),o=this.getAttribute("data-slide-to");o&&(i.interval=!1),r._jQueryInterface.call(g(n),i),o&&g(n).data(j).to(o),t.preventDefault()}
}
}
 ,s(r,null,[{key:"VERSION",get:function(){return"4.3.1"}
}
 ,{key:"Default",get:function(){return F}
}
]),r}
 ();g(document).on(Q.CLICK_DATA_API,rt,lt._dataApiClickHandler),g(window).on(Q.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(st)),e=0,n=t.length;e<n;e++){var i=g(t[e]);lt._jQueryInterface.call(i,i.data())}
}
 ),g.fn[L]=lt._jQueryInterface,g.fn[L].Constructor=lt,g.fn[L].noConflict=function(){return g.fn[L]=x,lt._jQueryInterface}
 ;var ct="collapse",ht="bs.collapse",ut="."+ht,ft=g.fn[ct],dt={toggle:!0,parent:""}
 ,gt={toggle:"boolean",parent:"(string|element)"}
 ,_t={SHOW:"show"+ut,SHOWN:"shown"+ut,HIDE:"hide"+ut,HIDDEN:"hidden"+ut,CLICK_DATA_API:"click"+ut+".data-api"}
 ,mt="show",pt="collapse",vt="collapsing",yt="collapsed",Et="width",Ct="height",Tt=".show, .collapsing",St='[data-toggle="collapse"]',bt=function(){function a(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(St)),i=0,o=n.length;i<o;i++){var r=n[i],s=_.getSelectorFromElement(r),a=[].slice.call(document.querySelectorAll(s)).filter(function(t){return t===e}
 );null!==s&&0<a.length&&(this._selector=s,this._triggerArray.push(r))}
 this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}
 var t=a.prototype;return t.toggle=function(){g(this._element).hasClass(mt)?this.hide():this.show()}
 ,t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!g(this._element).hasClass(mt)&&(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(Tt)).filter(function(t){return"string"==typeof n._config.parent?t.getAttribute("data-parent")===n._config.parent:t.classList.contains(pt)}
 )).length&&(t=null),!(t&&(e=g(t).not(this._selector).data(ht))&&e._isTransitioning))){var i=g.Event(_t.SHOW);if(g(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call(g(t).not(this._selector),"hide"),e||g(t).data(ht,null));var o=this._getDimension();g(this._element).removeClass(pt).addClass(vt),this._element.style[o]=0,this._triggerArray.length&&g(this._triggerArray).removeClass(yt).attr("aria-expanded",!0),this.setTransitioning(!0);var r="scroll"+(o[0].toUpperCase()+o.slice(1)),s=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){g(n._element).removeClass(vt).addClass(pt).addClass(mt),n._element.style[o]="",n.setTransitioning(!1),g(n._element).trigger(_t.SHOWN)}
 ).emulateTransitionEnd(s),this._element.style[o]=this._element[r]+"px"}
}
}
 ,t.hide=function(){var t=this;if(!this._isTransitioning&&g(this._element).hasClass(mt)){var e=g.Event(_t.HIDE);if(g(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",_.reflow(this._element),g(this._element).addClass(vt).removeClass(pt).removeClass(mt);var i=this._triggerArray.length;if(0<i)for(var o=0;o<i;o++){var r=this._triggerArray[o],s=_.getSelectorFromElement(r);if(null!==s)g([].slice.call(document.querySelectorAll(s))).hasClass(mt)||g(r).addClass(yt).attr("aria-expanded",!1)}
 this.setTransitioning(!0);this._element.style[n]="";var a=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){t.setTransitioning(!1),g(t._element).removeClass(vt).addClass(pt).trigger(_t.HIDDEN)}
 ).emulateTransitionEnd(a)}
}
}
 ,t.setTransitioning=function(t){this._isTransitioning=t}
 ,t.dispose=function(){g.removeData(this._element,ht),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null}
 ,t._getConfig=function(t){return(t=l({}
    ,dt,t)).toggle=Boolean(t.toggle),_.typeCheckConfig(ct,t,gt),t}
 ,t._getDimension=function(){return g(this._element).hasClass(Et)?Et:Ct}
 ,t._getParent=function(){var t,n=this;_.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',i=[].slice.call(t.querySelectorAll(e));return g(i).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}
 ),t}
 ,t._addAriaAndCollapsedClass=function(t,e){var n=g(t).hasClass(mt);e.length&&g(e).toggleClass(yt,!n).attr("aria-expanded",n)}
 ,a._getTargetFromElement=function(t){var e=_.getSelectorFromElement(t);return e?document.querySelector(e):null}
 ,a._jQueryInterface=function(i){return this.each(function(){var t=g(this),e=t.data(ht),n=l({}
    ,dt,t.data(),"object"==typeof i&&i?i:{}
 );if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(ht,e)),"string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}
}
 )}
 ,s(a,null,[{key:"VERSION",get:function(){return"4.3.1"}
}
 ,{key:"Default",get:function(){return dt}
}
]),a}
 ();g(document).on(_t.CLICK_DATA_API,St,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=g(this),e=_.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(e));g(i).each(function(){var t=g(this),e=t.data(ht)?"toggle":n.data();bt._jQueryInterface.call(t,e)}
 )}
 ),g.fn[ct]=bt._jQueryInterface,g.fn[ct].Constructor=bt,g.fn[ct].noConflict=function(){return g.fn[ct]=ft,bt._jQueryInterface}
 ;var It="dropdown",Dt="bs.dropdown",wt="."+Dt,At=".data-api",Nt=g.fn[It],Ot=new RegExp("38|40|27"),kt={HIDE:"hide"+wt,HIDDEN:"hidden"+wt,SHOW:"show"+wt,SHOWN:"shown"+wt,CLICK:"click"+wt,CLICK_DATA_API:"click"+wt+At,KEYDOWN_DATA_API:"keydown"+wt+At,KEYUP_DATA_API:"keyup"+wt+At}
 ,Pt="disabled",Lt="show",jt="dropup",Ht="dropright",Rt="dropleft",xt="dropdown-menu-right",Ft="position-static",Ut='[data-toggle="dropdown"]',Wt=".dropdown form",qt=".dropdown-menu",Mt=".navbar-nav",Kt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Qt="top-start",Bt="top-end",Vt="bottom-start",Yt="bottom-end",zt="right-start",Xt="left-start",$t={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"}
 ,Gt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"}
 ,Jt=function(){function c(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}
 var t=c.prototype;return t.toggle=function(){if(!this._element.disabled&&!g(this._element).hasClass(Pt)){var t=c._getParentFromElement(this._element),e=g(this._menu).hasClass(Lt);if(c._clearMenus(),!e){var n={relatedTarget:this._element}
 ,i=g.Event(kt.SHOW,n);if(g(t).trigger(i),!i.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof u)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var o=this._element;"parent"===this._config.reference?o=t:_.isElement(this._config.reference)&&(o=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(o=this._config.reference[0])),"scrollParent"!==this._config.boundary&&g(t).addClass(Ft),this._popper=new u(o,this._menu,this._getPopperConfig())}
 "ontouchstart"in document.documentElement&&0===g(t).closest(Mt).length&&g(document.body).children().on("mouseover",null,g.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),g(this._menu).toggleClass(Lt),g(t).toggleClass(Lt).trigger(g.Event(kt.SHOWN,n))}
}
}
}
 ,t.show=function(){if(!(this._element.disabled||g(this._element).hasClass(Pt)||g(this._menu).hasClass(Lt))){var t={relatedTarget:this._element}
 ,e=g.Event(kt.SHOW,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(g(this._menu).toggleClass(Lt),g(n).toggleClass(Lt).trigger(g.Event(kt.SHOWN,t)))}
}
 ,t.hide=function(){if(!this._element.disabled&&!g(this._element).hasClass(Pt)&&g(this._menu).hasClass(Lt)){var t={relatedTarget:this._element}
 ,e=g.Event(kt.HIDE,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(g(this._menu).toggleClass(Lt),g(n).toggleClass(Lt).trigger(g.Event(kt.HIDDEN,t)))}
}
 ,t.dispose=function(){g.removeData(this._element,Dt),g(this._element).off(wt),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)}
 ,t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()}
 ,t._addEventListeners=function(){var e=this;g(this._element).on(kt.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()}
 )}
 ,t._getConfig=function(t){return t=l({}
 ,this.constructor.Default,g(this._element).data(),t),_.typeCheckConfig(It,t,this.constructor.DefaultType),t}
 ,t._getMenuElement=function(){if(!this._menu){var t=c._getParentFromElement(this._element);t&&(this._menu=t.querySelector(qt))}
 return this._menu}
 ,t._getPlacement=function(){var t=g(this._element.parentNode),e=Vt;return t.hasClass(jt)?(e=Qt,g(this._menu).hasClass(xt)&&(e=Bt)):t.hasClass(Ht)?e=zt:t.hasClass(Rt)?e=Xt:g(this._menu).hasClass(xt)&&(e=Yt),e}
 ,t._detectNavbar=function(){return 0<g(this._element).closest(".navbar").length}
 ,t._getOffset=function(){var e=this,t={}
 ;return"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=l({}
 ,t.offsets,e._config.offset(t.offsets,e._element)||{}
 ),t}
 :t.offset=this._config.offset,t}
 ,t._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip}
 ,preventOverflow:{boundariesElement:this._config.boundary}
}
}
 ;return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}
 ),t}
 ,c._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(Dt);if(t||(t=new c(this,"object"==typeof e?e:null),g(this).data(Dt,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}
}
 )}
 ,c._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=[].slice.call(document.querySelectorAll(Ut)),n=0,i=e.length;n<i;n++){var o=c._getParentFromElement(e[n]),r=g(e[n]).data(Dt),s={relatedTarget:e[n]}
 ;if(t&&"click"===t.type&&(s.clickEvent=t),r){var a=r._menu;if(g(o).hasClass(Lt)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&g.contains(o,t.target))){var l=g.Event(kt.HIDE,s);g(o).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),e[n].setAttribute("aria-expanded","false"),g(a).removeClass(Lt),g(o).removeClass(Lt).trigger(g.Event(kt.HIDDEN,s)))}
}
}
}
 ,c._getParentFromElement=function(t){var e,n=_.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode}
 ,c._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||g(t.target).closest(qt).length)):Ot.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!g(this).hasClass(Pt))){var e=c._getParentFromElement(this),n=g(e).hasClass(Lt);if(n&&(!n||27!==t.which&&32!==t.which)){var i=[].slice.call(e.querySelectorAll(Kt));if(0!==i.length){var o=i.indexOf(t.target);38===t.which&&0<o&&o--,40===t.which&&o<i.length-1&&o++,o<0&&(o=0),i[o].focus()}
}
 else{if(27===t.which){var r=e.querySelector(Ut);g(r).trigger("focus")}
 g(this).trigger("click")}
}
}
 ,s(c,null,[{key:"VERSION",get:function(){return"4.3.1"}
}
 ,{key:"Default",get:function(){return $t}
}
 ,{key:"DefaultType",get:function(){return Gt}
}
]),c}
 ();g(document).on(kt.KEYDOWN_DATA_API,Ut,Jt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API,qt,Jt._dataApiKeydownHandler).on(kt.CLICK_DATA_API+" "+kt.KEYUP_DATA_API,Jt._clearMenus).on(kt.CLICK_DATA_API,Ut,function(t){t.preventDefault(),t.stopPropagation(),Jt._jQueryInterface.call(g(this),"toggle")}
 ).on(kt.CLICK_DATA_API,Wt,function(t){t.stopPropagation()}
 ),g.fn[It]=Jt._jQueryInterface,g.fn[It].Constructor=Jt,g.fn[It].noConflict=function(){return g.fn[It]=Nt,Jt._jQueryInterface}
 ;var Zt="modal",te="bs.modal",ee="."+te,ne=g.fn[Zt],ie={backdrop:!0,keyboard:!0,focus:!0,show:!0}
 ,oe={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"}
 ,re={HIDE:"hide"+ee,HIDDEN:"hidden"+ee,SHOW:"show"+ee,SHOWN:"shown"+ee,FOCUSIN:"focusin"+ee,RESIZE:"resize"+ee,CLICK_DISMISS:"click.dismiss"+ee,KEYDOWN_DISMISS:"keydown.dismiss"+ee,MOUSEUP_DISMISS:"mouseup.dismiss"+ee,MOUSEDOWN_DISMISS:"mousedown.dismiss"+ee,CLICK_DATA_API:"click"+ee+".data-api"}
 ,se="modal-dialog-scrollable",ae="modal-scrollbar-measure",le="modal-backdrop",ce="modal-open",he="fade",ue="show",fe=".modal-dialog",de=".modal-body",ge='[data-toggle="modal"]',_e='[data-dismiss="modal"]',me=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",pe=".sticky-top",ve=function(){function o(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(fe),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}
 var t=o.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)}
 ,t.show=function(t){var e=this;if(!this._isShown&&!this._isTransitioning){g(this._element).hasClass(he)&&(this._isTransitioning=!0);var n=g.Event(re.SHOW,{relatedTarget:t}
 );g(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),g(this._element).on(re.CLICK_DISMISS,_e,function(t){return e.hide(t)}
 ),g(this._dialog).on(re.MOUSEDOWN_DISMISS,function(){g(e._element).one(re.MOUSEUP_DISMISS,function(t){g(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)}
 )}
 ),this._showBackdrop(function(){return e._showElement(t)}
 ))}
}
 ,t.hide=function(t){var e=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var n=g.Event(re.HIDE);if(g(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=g(this._element).hasClass(he);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),g(document).off(re.FOCUSIN),g(this._element).removeClass(ue),g(this._element).off(re.CLICK_DISMISS),g(this._dialog).off(re.MOUSEDOWN_DISMISS),i){var o=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(t){return e._hideModal(t)}
 ).emulateTransitionEnd(o)}
 else this._hideModal()}
}
}
 ,t.dispose=function(){[window,this._element,this._dialog].forEach(function(t){return g(t).off(ee)}
 ),g(document).off(re.FOCUSIN),g.removeData(this._element,te),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null}
 ,t.handleUpdate=function(){this._adjustDialog()}
 ,t._getConfig=function(t){return t=l({}
 ,ie,t),_.typeCheckConfig(Zt,t,oe),t}
 ,t._showElement=function(t){var e=this,n=g(this._element).hasClass(he);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),g(this._dialog).hasClass(se)?this._dialog.querySelector(de).scrollTop=0:this._element.scrollTop=0,n&&_.reflow(this._element),g(this._element).addClass(ue),this._config.focus&&this._enforceFocus();var i=g.Event(re.SHOWN,{relatedTarget:t}
 ),o=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,g(e._element).trigger(i)}
 ;if(n){var r=_.getTransitionDurationFromElement(this._dialog);g(this._dialog).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}
 else o()}
 ,t._enforceFocus=function(){var e=this;g(document).off(re.FOCUSIN).on(re.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===g(e._element).has(t.target).length&&e._element.focus()}
 )}
 ,t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?g(this._element).on(re.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}
 ):this._isShown||g(this._element).off(re.KEYDOWN_DISMISS)}
 ,t._setResizeEvent=function(){var e=this;this._isShown?g(window).on(re.RESIZE,function(t){return e.handleUpdate(t)}
 ):g(window).off(re.RESIZE)}
 ,t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){g(document.body).removeClass(ce),t._resetAdjustments(),t._resetScrollbar(),g(t._element).trigger(re.HIDDEN)}
 )}
 ,t._removeBackdrop=function(){this._backdrop&&(g(this._backdrop).remove(),this._backdrop=null)}
 ,t._showBackdrop=function(t){var e=this,n=g(this._element).hasClass(he)?he:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=le,n&&this._backdrop.classList.add(n),g(this._backdrop).appendTo(document.body),g(this._element).on(re.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}
 ),n&&_.reflow(this._backdrop),g(this._backdrop).addClass(ue),!t)return;if(!n)return void t();var i=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,t).emulateTransitionEnd(i)}
 else if(!this._isShown&&this._backdrop){g(this._backdrop).removeClass(ue);var o=function(){e._removeBackdrop(),t&&t()}
 ;if(g(this._element).hasClass(he)){var r=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}
 else o()}
 else t&&t()}
 ,t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")}
 ,t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}
 ,t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()}
 ,t._setScrollbar=function(){var o=this;if(this._isBodyOverflowing){var t=[].slice.call(document.querySelectorAll(me)),e=[].slice.call(document.querySelectorAll(pe));g(t).each(function(t,e){var n=e.style.paddingRight,i=g(e).css("padding-right");g(e).data("padding-right",n).css("padding-right",parseFloat(i)+o._scrollbarWidth+"px")}
 ),g(e).each(function(t,e){var n=e.style.marginRight,i=g(e).css("margin-right");g(e).data("margin-right",n).css("margin-right",parseFloat(i)-o._scrollbarWidth+"px")}
 );var n=document.body.style.paddingRight,i=g(document.body).css("padding-right");g(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}
 g(document.body).addClass(ce)}
 ,t._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(me));g(t).each(function(t,e){var n=g(e).data("padding-right");g(e).removeData("padding-right"),e.style.paddingRight=n||""}
 );var e=[].slice.call(document.querySelectorAll(""+pe));g(e).each(function(t,e){var n=g(e).data("margin-right");"undefined"!=typeof n&&g(e).css("margin-right",n).removeData("margin-right")}
 );var n=g(document.body).data("padding-right");g(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""}
 ,t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=ae,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e}
 ,o._jQueryInterface=function(n,i){return this.each(function(){var t=g(this).data(te),e=l({}
 ,ie,g(this).data(),"object"==typeof n&&n?n:{}
 );if(t||(t=new o(this,e),g(this).data(te,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}
 else e.show&&t.show(i)}
 )}
 ,s(o,null,[{key:"VERSION",get:function(){return"4.3.1"}
}
 ,{key:"Default",get:function(){return ie}
}
]),o}
 ();g(document).on(re.CLICK_DATA_API,ge,function(t){var e,n=this,i=_.getSelectorFromElement(this);i&&(e=document.querySelector(i));var o=g(e).data(te)?"toggle":l({}
 ,g(e).data(),g(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var r=g(e).one(re.SHOW,function(t){t.isDefaultPrevented()||r.one(re.HIDDEN,function(){g(n).is(":visible")&&n.focus()}
 )}
 );ve._jQueryInterface.call(g(e),o,this)}
 ),g.fn[Zt]=ve._jQueryInterface,g.fn[Zt].Constructor=ve,g.fn[Zt].noConflict=function(){return g.fn[Zt]=ne,ve._jQueryInterface}
 ;var ye=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],Ee={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]}
 ,Ce=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,Te=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function Se(t,s,e){if(0===t.length)return t;if(e&&"function"==typeof e)return e(t);for(var n=(new window.DOMParser).parseFromString(t,"text/html"),a=Object.keys(s),l=[].slice.call(n.body.querySelectorAll("*")),i=function(t,e){var n=l[t],i=n.nodeName.toLowerCase();if(-1===a.indexOf(n.nodeName.toLowerCase()))return n.parentNode.removeChild(n),"continue";var o=[].slice.call(n.attributes),r=[].concat(s["*"]||[],s[i]||[]);o.forEach(function(t){(function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===ye.indexOf(n)||Boolean(t.nodeValue.match(Ce)||t.nodeValue.match(Te));for(var i=e.filter(function(t){return t instanceof RegExp}
 ),o=0,r=i.length;o<r;o++)if(n.match(i[o]))return!0;return!1}
 )(t,r)||n.removeAttribute(t.nodeName)}
 )}
 ,o=0,r=l.length;o<r;o++)i(o);return n.body.innerHTML}
 var be="tooltip",Ie="bs.tooltip",De="."+Ie,we=g.fn[be],Ae="bs-tooltip",Ne=new RegExp("(^|\\s)"+Ae+"\\S+","g"),Oe=["sanitize","whiteList","sanitizeFn"],ke={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object"}
 ,Pe={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"}
 ,Le={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:Ee}
 ,je="show",He="out",Re={HIDE:"hide"+De,HIDDEN:"hidden"+De,SHOW:"show"+De,SHOWN:"shown"+De,INSERTED:"inserted"+De,CLICK:"click"+De,FOCUSIN:"focusin"+De,FOCUSOUT:"focusout"+De,MOUSEENTER:"mouseenter"+De,MOUSELEAVE:"mouseleave"+De}
 ,xe="fade",Fe="show",Ue=".tooltip-inner",We=".arrow",qe="hover",Me="focus",Ke="click",Qe="manual",Be=function(){function i(t,e){if("undefined"==typeof u)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={}
 ,this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}
 var t=i.prototype;return t.enable=function(){this._isEnabled=!0}
 ,t.disable=function(){this._isEnabled=!1}
 ,t.toggleEnabled=function(){this._isEnabled=!this._isEnabled}
 ,t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=g(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}
 else{if(g(this.getTipElement()).hasClass(Fe))return void this._leave(null,this);this._enter(null,this)}
}
 ,t.dispose=function(){clearTimeout(this._timeout),g.removeData(this.element,this.constructor.DATA_KEY),g(this.element).off(this.constructor.EVENT_KEY),g(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&g(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null}
 ,t.show=function(){var e=this;if("none"===g(this.element).css("display"))throw new Error("Please use show on visible elements");var t=g.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){g(this.element).trigger(t);var n=_.findShadowRoot(this.element),i=g.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!i)return;var o=this.getTipElement(),r=_.getUID(this.constructor.NAME);o.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&g(o).addClass(xe);var s="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,a=this._getAttachment(s);this.addAttachmentClass(a);var l=this._getContainer();g(o).data(this.constructor.DATA_KEY,this),g.contains(this.element.ownerDocument.documentElement,this.tip)||g(o).appendTo(l),g(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new u(this.element,o,{placement:a,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement}
 ,arrow:{element:We}
 ,preventOverflow:{boundariesElement:this.config.boundary}
}
 ,onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)}
 ,onUpdate:function(t){return e._handlePopperPlacementChange(t)}
}
 ),g(o).addClass(Fe),"ontouchstart"in document.documentElement&&g(document.body).children().on("mouseover",null,g.noop);var c=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,g(e.element).trigger(e.constructor.Event.SHOWN),t===He&&e._leave(null,e)}
 ;if(g(this.tip).hasClass(xe)){var h=_.getTransitionDurationFromElement(this.tip);g(this.tip).one(_.TRANSITION_END,c).emulateTransitionEnd(h)}
 else c()}
}
 ,t.hide=function(t){var e=this,n=this.getTipElement(),i=g.Event(this.constructor.Event.HIDE),o=function(){e._hoverState!==je&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),g(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()}
 ;if(g(this.element).trigger(i),!i.isDefaultPrevented()){if(g(n).removeClass(Fe),"ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),this._activeTrigger[Ke]=!1,this._activeTrigger[Me]=!1,this._activeTrigger[qe]=!1,g(this.tip).hasClass(xe)){var r=_.getTransitionDurationFromElement(n);g(n).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}
 else o();this._hoverState=""}
}
 ,t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()}
 ,t.isWithContent=function(){return Boolean(this.getTitle())}
 ,t.addAttachmentClass=function(t){g(this.getTipElement()).addClass(Ae+"-"+t)}
 ,t.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip}
 ,t.setContent=function(){var t=this.getTipElement();this.setElementContent(g(t.querySelectorAll(Ue)),this.getTitle()),g(t).removeClass(xe+" "+Fe)}
 ,t.setElementContent=function(t,e){"object"!=typeof e||!e.nodeType&&!e.jquery?this.config.html?(this.config.sanitize&&(e=Se(e,this.config.whiteList,this.config.sanitizeFn)),t.html(e)):t.text(e):this.config.html?g(e).parent().is(t)||t.empty().append(e):t.text(g(e).text())}
 ,t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t}
 ,t._getOffset=function(){var e=this,t={}
 ;return"function"==typeof this.config.offset?t.fn=function(t){return t.offsets=l({}
 ,t.offsets,e.config.offset(t.offsets,e.element)||{}
 ),t}
 :t.offset=this.config.offset,t}
 ,t._getContainer=function(){return!1===this.config.container?document.body:_.isElement(this.config.container)?g(this.config.container):g(document).find(this.config.container)}
 ,t._getAttachment=function(t){return Pe[t.toUpperCase()]}
 ,t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)g(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)}
 );else if(t!==Qe){var e=t===qe?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===qe?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;g(i.element).on(e,i.config.selector,function(t){return i._enter(t)}
 ).on(n,i.config.selector,function(t){return i._leave(t)}
 )}
}
 ),g(this.element).closest(".modal").on("hide.bs.modal",function(){i.element&&i.hide()}
 ),this.config.selector?this.config=l({}
 ,this.config,{trigger:"manual",selector:""}
 ):this._fixTitle()}
 ,t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))}
 ,t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Me:qe]=!0),g(e.getTipElement()).hasClass(Fe)||e._hoverState===je?e._hoverState=je:(clearTimeout(e._timeout),e._hoverState=je,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===je&&e.show()}
 ,e.config.delay.show):e.show())}
 ,t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Me:qe]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=He,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===He&&e.hide()}
 ,e.config.delay.hide):e.hide())}
 ,t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1}
 ,t._getConfig=function(t){var e=g(this.element).data();return Object.keys(e).forEach(function(t){-1!==Oe.indexOf(t)&&delete e[t]}
 ),"number"==typeof(t=l({}
 ,this.constructor.Default,e,"object"==typeof t&&t?t:{}
 )).delay&&(t.delay={show:t.delay,hide:t.delay}
 ),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),_.typeCheckConfig(be,t,this.constructor.DefaultType),t.sanitize&&(t.template=Se(t.template,t.whiteList,t.sanitizeFn)),t}
 ,t._getDelegateConfig=function(){var t={}
 ;if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t}
 ,t._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Ne);null!==e&&e.length&&t.removeClass(e.join(""))}
 ,t._handlePopperPlacementChange=function(t){var e=t.instance;this.tip=e.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))}
 ,t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(g(t).removeClass(xe),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)}
 ,i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ie),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ie,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}
}
 )}
 ,s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}
}
 ,{key:"Default",get:function(){return Le}
}
 ,{key:"NAME",get:function(){return be}
}
 ,{key:"DATA_KEY",get:function(){return Ie}
}
 ,{key:"Event",get:function(){return Re}
}
 ,{key:"EVENT_KEY",get:function(){return De}
}
 ,{key:"DefaultType",get:function(){return ke}
}
]),i}
 ();g.fn[be]=Be._jQueryInterface,g.fn[be].Constructor=Be,g.fn[be].noConflict=function(){return g.fn[be]=we,Be._jQueryInterface}
 ;var Ve="popover",Ye="bs.popover",ze="."+Ye,Xe=g.fn[Ve],$e="bs-popover",Ge=new RegExp("(^|\\s)"+$e+"\\S+","g"),Je=l({}
 ,Be.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}
 ),Ze=l({}
 ,Be.DefaultType,{content:"(string|element|function)"}
 ),tn="fade",en="show",nn=".popover-header",on=".popover-body",rn={HIDE:"hide"+ze,HIDDEN:"hidden"+ze,SHOW:"show"+ze,SHOWN:"shown"+ze,INSERTED:"inserted"+ze,CLICK:"click"+ze,FOCUSIN:"focusin"+ze,FOCUSOUT:"focusout"+ze,MOUSEENTER:"mouseenter"+ze,MOUSELEAVE:"mouseleave"+ze}
 ,sn=function(t){var e,n;function i(){return t.apply(this,arguments)||this}
 n=t,(e=i).prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n;var o=i.prototype;return o.isWithContent=function(){return this.getTitle()||this._getContent()}
 ,o.addAttachmentClass=function(t){g(this.getTipElement()).addClass($e+"-"+t)}
 ,o.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip}
 ,o.setContent=function(){var t=g(this.getTipElement());this.setElementContent(t.find(nn),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(on),e),t.removeClass(tn+" "+en)}
 ,o._getContent=function(){return this.element.getAttribute("data-content")||this.config.content}
 ,o._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Ge);null!==e&&0<e.length&&t.removeClass(e.join(""))}
 ,i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ye),e="object"==typeof n?n:null;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ye,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}
}
 )}
 ,s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}
}
 ,{key:"Default",get:function(){return Je}
}
 ,{key:"NAME",get:function(){return Ve}
}
 ,{key:"DATA_KEY",get:function(){return Ye}
}
 ,{key:"Event",get:function(){return rn}
}
 ,{key:"EVENT_KEY",get:function(){return ze}
}
 ,{key:"DefaultType",get:function(){return Ze}
}
]),i}
 (Be);g.fn[Ve]=sn._jQueryInterface,g.fn[Ve].Constructor=sn,g.fn[Ve].noConflict=function(){return g.fn[Ve]=Xe,sn._jQueryInterface}
 ;var an="scrollspy",ln="bs.scrollspy",cn="."+ln,hn=g.fn[an],un={offset:10,method:"auto",target:""}
 ,fn={offset:"number",method:"string",target:"(string|element)"}
 ,dn={ACTIVATE:"activate"+cn,SCROLL:"scroll"+cn,LOAD_DATA_API:"load"+cn+".data-api"}
 ,gn="dropdown-item",_n="active",mn='[data-spy="scroll"]',pn=".nav, .list-group",vn=".nav-link",yn=".nav-item",En=".list-group-item",Cn=".dropdown",Tn=".dropdown-item",Sn=".dropdown-toggle",bn="offset",In="position",Dn=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+vn+","+this._config.target+" "+En+","+this._config.target+" "+Tn,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,g(this._scrollElement).on(dn.SCROLL,function(t){return n._process(t)}
 ),this.refresh(),this._process()}
 var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?bn:In,o="auto"===this._config.method?t:this._config.method,r=o===In?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var e,n=_.getSelectorFromElement(t);if(n&&(e=document.querySelector(n)),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[g(e)[o]().top+r,n]}
 return null}
 ).filter(function(t){return t}
 ).sort(function(t,e){return t[0]-e[0]}
 ).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])}
 )}
 ,t.dispose=function(){g.removeData(this._element,ln),g(this._scrollElement).off(cn),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null}
 ,t._getConfig=function(t){if("string"!=typeof(t=l({}
 ,un,"object"==typeof t&&t?t:{}
 )).target){var e=g(t.target).attr("id");e||(e=_.getUID(an),g(t.target).attr("id",e)),t.target="#"+e}
 return _.typeCheckConfig(an,t,fn),t}
 ,t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop}
 ,t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}
 ,t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height}
 ,t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}
 else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}
}
}
 ,t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",").map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'}
 ),n=g([].slice.call(document.querySelectorAll(t.join(","))));n.hasClass(gn)?(n.closest(Cn).find(Sn).addClass(_n),n.addClass(_n)):(n.addClass(_n),n.parents(pn).prev(vn+", "+En).addClass(_n),n.parents(pn).prev(yn).children(vn).addClass(_n)),g(this._scrollElement).trigger(dn.ACTIVATE,{relatedTarget:e}
 )}
 ,t._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(t){return t.classList.contains(_n)}
 ).forEach(function(t){return t.classList.remove(_n)}
 )}
 ,n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(ln);if(t||(t=new n(this,"object"==typeof e&&e),g(this).data(ln,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}
}
 )}
 ,s(n,null,[{key:"VERSION",get:function(){return"4.3.1"}
}
 ,{key:"Default",get:function(){return un}
}
]),n}
 ();g(window).on(dn.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(mn)),e=t.length;e--;){var n=g(t[e]);Dn._jQueryInterface.call(n,n.data())}
}
 ),g.fn[an]=Dn._jQueryInterface,g.fn[an].Constructor=Dn,g.fn[an].noConflict=function(){return g.fn[an]=hn,Dn._jQueryInterface}
 ;var wn="bs.tab",An="."+wn,Nn=g.fn.tab,On={HIDE:"hide"+An,HIDDEN:"hidden"+An,SHOW:"show"+An,SHOWN:"shown"+An,CLICK_DATA_API:"click"+An+".data-api"}
 ,kn="dropdown-menu",Pn="active",Ln="disabled",jn="fade",Hn="show",Rn=".dropdown",xn=".nav, .list-group",Fn=".active",Un="> li > .active",Wn='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',qn=".dropdown-toggle",Mn="> .dropdown-menu .active",Kn=function(){function i(t){this._element=t}
 var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&g(this._element).hasClass(Pn)||g(this._element).hasClass(Ln))){var t,i,e=g(this._element).closest(xn)[0],o=_.getSelectorFromElement(this._element);if(e){var r="UL"===e.nodeName||"OL"===e.nodeName?Un:Fn;i=(i=g.makeArray(g(e).find(r)))[i.length-1]}
 var s=g.Event(On.HIDE,{relatedTarget:this._element}
 ),a=g.Event(On.SHOW,{relatedTarget:i}
 );if(i&&g(i).trigger(s),g(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){o&&(t=document.querySelector(o)),this._activate(this._element,e);var l=function(){var t=g.Event(On.HIDDEN,{relatedTarget:n._element}
 ),e=g.Event(On.SHOWN,{relatedTarget:i}
 );g(i).trigger(t),g(n._element).trigger(e)}
 ;t?this._activate(t,t.parentNode,l):l()}
}
}
 ,t.dispose=function(){g.removeData(this._element,wn),this._element=null}
 ,t._activate=function(t,e,n){var i=this,o=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?g(e).children(Fn):g(e).find(Un))[0],r=n&&o&&g(o).hasClass(jn),s=function(){return i._transitionComplete(t,o,n)}
 ;if(o&&r){var a=_.getTransitionDurationFromElement(o);g(o).removeClass(Hn).one(_.TRANSITION_END,s).emulateTransitionEnd(a)}
 else s()}
 ,t._transitionComplete=function(t,e,n){if(e){g(e).removeClass(Pn);var i=g(e.parentNode).find(Mn)[0];i&&g(i).removeClass(Pn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}
 if(g(t).addClass(Pn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),_.reflow(t),t.classList.contains(jn)&&t.classList.add(Hn),t.parentNode&&g(t.parentNode).hasClass(kn)){var o=g(t).closest(Rn)[0];if(o){var r=[].slice.call(o.querySelectorAll(qn));g(r).addClass(Pn)}
 t.setAttribute("aria-expanded",!0)}
 n&&n()}
 ,i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(wn);if(e||(e=new i(this),t.data(wn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}
}
 )}
 ,s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}
}
]),i}
 ();g(document).on(On.CLICK_DATA_API,Wn,function(t){t.preventDefault(),Kn._jQueryInterface.call(g(this),"show")}
 ),g.fn.tab=Kn._jQueryInterface,g.fn.tab.Constructor=Kn,g.fn.tab.noConflict=function(){return g.fn.tab=Nn,Kn._jQueryInterface}
 ;var Qn="toast",Bn="bs.toast",Vn="."+Bn,Yn=g.fn[Qn],zn={CLICK_DISMISS:"click.dismiss"+Vn,HIDE:"hide"+Vn,HIDDEN:"hidden"+Vn,SHOW:"show"+Vn,SHOWN:"shown"+Vn}
 ,Xn="fade",$n="hide",Gn="show",Jn="showing",Zn={animation:"boolean",autohide:"boolean",delay:"number"}
 ,ti={animation:!0,autohide:!0,delay:500}
 ,ei='[data-dismiss="toast"]',ni=function(){function i(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}
 var t=i.prototype;return t.show=function(){var t=this;g(this._element).trigger(zn.SHOW),this._config.animation&&this._element.classList.add(Xn);var e=function(){t._element.classList.remove(Jn),t._element.classList.add(Gn),g(t._element).trigger(zn.SHOWN),t._config.autohide&&t.hide()}
 ;if(this._element.classList.remove($n),this._element.classList.add(Jn),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,e).emulateTransitionEnd(n)}
 else e()}
 ,t.hide=function(t){var e=this;this._element.classList.contains(Gn)&&(g(this._element).trigger(zn.HIDE),t?this._close():this._timeout=setTimeout(function(){e._close()}
 ,this._config.delay))}
 ,t.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(Gn)&&this._element.classList.remove(Gn),g(this._element).off(zn.CLICK_DISMISS),g.removeData(this._element,Bn),this._element=null,this._config=null}
 ,t._getConfig=function(t){return t=l({}
 ,ti,g(this._element).data(),"object"==typeof t&&t?t:{}
 ),_.typeCheckConfig(Qn,t,this.constructor.DefaultType),t}
 ,t._setListeners=function(){var t=this;g(this._element).on(zn.CLICK_DISMISS,ei,function(){return t.hide(!0)}
 )}
 ,t._close=function(){var t=this,e=function(){t._element.classList.add($n),g(t._element).trigger(zn.HIDDEN)}
 ;if(this._element.classList.remove(Gn),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,e).emulateTransitionEnd(n)}
 else e()}
 ,i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(Bn);if(e||(e=new i(this,"object"==typeof n&&n),t.data(Bn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n](this)}
}
 )}
 ,s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}
}
 ,{key:"DefaultType",get:function(){return Zn}
}
 ,{key:"Default",get:function(){return ti}
}
]),i}
 ();g.fn[Qn]=ni._jQueryInterface,g.fn[Qn].Constructor=ni,g.fn[Qn].noConflict=function(){return g.fn[Qn]=Yn,ni._jQueryInterface}
 ,function(){if("undefined"==typeof g)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=g.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||4<=t[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}
 (),t.Util=_,t.Alert=p,t.Button=P,t.Carousel=lt,t.Collapse=bt,t.Dropdown=Jt,t.Modal=ve,t.Popover=sn,t.Scrollspy=Dn,t.Tab=Kn,t.Toast=ni,t.Tooltip=Be,Object.defineProperty(t,"__esModule",{value:!0}
 )}
 );
 ;
 /*!
  * jQuery Smooth Scroll - v2.2.0 - 2017-05-05
  * https://github.com/kswedberg/jquery-smooth-scroll
  * Copyright (c) 2017 Karl Swedberg
  * Licensed MIT
  */
 !function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof module&&module.exports?require("jquery"):jQuery)}
 (function(a){var b={}
 ,c={exclude:[],excludeWithin:[],offset:0,direction:"top",delegateSelector:null,scrollElement:null,scrollTarget:null,autoFocus:!1,beforeScroll:function(){}
 ,afterScroll:function(){}
 ,easing:"swing",speed:400,autoCoefficient:2,preventDefault:!0}
 ,d=function(b){var c=[],d=!1,e=b.dir&&"left"===b.dir?"scrollLeft":"scrollTop";return this.each(function(){var b=a(this);if(this!==document&&this!==window)return!document.scrollingElement||this!==document.documentElement&&this!==document.body?void(b[e]()>0?c.push(this):(b[e](1),d=b[e]()>0,d&&c.push(this),b[e](0))):(c.push(document.scrollingElement),!1)}
 ),c.length||this.each(function(){this===document.documentElement&&"smooth"===a(this).css("scrollBehavior")&&(c=[this]),c.length||"BODY"!==this.nodeName||(c=[this])}
 ),"first"===b.el&&c.length>1&&(c=[c[0]]),c}
 ,e=/^([\-\+]=)(\d+)/;a.fn.extend({scrollable:function(a){var b=d.call(this,{dir:a}
    );return this.pushStack(b)}
 ,firstScrollable:function(a){var b=d.call(this,{el:"first",dir:a}
 );return this.pushStack(b)}
 ,smoothScroll:function(b,c){if("options"===(b=b||{}
    ))return c?this.each(function(){var b=a(this),d=a.extend(b.data("ssOpts")||{}
 ,c);a(this).data("ssOpts",d)}
 ):this.first().data("ssOpts");var d=a.extend({}
    ,a.fn.smoothScroll.defaults,b),e=function(b){var c=function(a){return a.replace(/(:|\.|\/)/g,"\\$1")}
 ,e=this,f=a(this),g=a.extend({}
    ,d,f.data("ssOpts")||{}
 ),h=d.exclude,i=g.excludeWithin,j=0,k=0,l=!0,m={}
 ,n=a.smoothScroll.filterPath(location.pathname),o=a.smoothScroll.filterPath(e.pathname),p=location.hostname===e.hostname||!e.hostname,q=g.scrollTarget||o===n,r=c(e.hash);if(r&&!a(r).length&&(l=!1),g.scrollTarget||p&&q&&r){for(;l&&j<h.length;)f.is(c(h[j++]))&&(l=!1);for(;l&&k<i.length;)f.closest(i[k++]).length&&(l=!1)}
 else l=!1;l&&(g.preventDefault&&b.preventDefault(),a.extend(m,g,{scrollTarget:g.scrollTarget||r,link:e}
    ),a.smoothScroll(m))}
 ;return null!==b.delegateSelector?this.off("click.smoothscroll",b.delegateSelector).on("click.smoothscroll",b.delegateSelector,e):this.off("click.smoothscroll").on("click.smoothscroll",e),this}
}
 );var f=function(a){var b={relative:""}
 ,c="string"==typeof a&&e.exec(a);return"number"==typeof a?b.px=a:c&&(b.relative=c[1],b.px=parseFloat(c[2])||0),b}
 ,g=function(b){var c=a(b.scrollTarget);b.autoFocus&&c.length&&(c[0].focus(),c.is(document.activeElement)||(c.prop({tabIndex:-1}
    ),c[0].focus())),b.afterScroll.call(b.link,b)}
 ;a.smoothScroll=function(c,d){if("options"===c&&"object"==typeof d)return a.extend(b,d);var e,h,i,j,k=f(c),l={}
 ,m=0,n="offset",o="scrollTop",p={}
 ,q={}
 ;k.px?e=a.extend({link:null}
    ,a.fn.smoothScroll.defaults,b):(e=a.extend({link:null}
    ,a.fn.smoothScroll.defaults,c||{}
    ,b),e.scrollElement&&(n="position","static"===e.scrollElement.css("position")&&e.scrollElement.css("position","relative")),d&&(k=f(d))),o="left"===e.direction?"scrollLeft":o,e.scrollElement?(h=e.scrollElement,k.px||/^(?:HTML|BODY)$/.test(h[0].nodeName)||(m=h[o]())):h=a("html, body").firstScrollable(e.direction),e.beforeScroll.call(h,e),l=k.px?k:{relative:"",px:a(e.scrollTarget)[n]()&&a(e.scrollTarget)[n]()[e.direction]||0}
 ,p[o]=l.relative+(l.px+m+e.offset),i=e.speed,"auto"===i&&(j=Math.abs(p[o]-h[o]()),i=j/e.autoCoefficient),q={duration:i,easing:e.easing,complete:function(){g(e)}
}
 ,e.step&&(q.step=e.step),h.length?h.stop().animate(p,q):g(e)}
 ,a.smoothScroll.version="2.2.0",a.smoothScroll.filterPath=function(a){return a=a||"",a.replace(/^\//,"").replace(/(?:index|default).[a-zA-Z]{3,4}$/,"").replace(/\/$/,"")}
 ,a.fn.smoothScroll.defaults=c}
 );
 +function(a){"use strict";function b(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}
 var c=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}
}
 return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}
}
 ();(function(a){var d="ekkoLightbox",e=a.fn[d],f={title:"",footer:"",maxWidth:9999,maxHeight:9999,showArrows:!0,wrapping:!0,type:null,alwaysShowClose:!1,loadingMessage:'<div class="ekko-lightbox-loader"><div><div></div><div></div></div></div>',leftArrow:"<span>&#10094;</span>",rightArrow:"<span>&#10095;</span>",strings:{close:"Close",fail:"Failed to load image:",type:"Could not detect remote target type. Force the type using data-type"}
 ,doc:document,onShow:function(){}
 ,onShown:function(){}
 ,onHide:function(){}
 ,onHidden:function(){}
 ,onNavigate:function(){}
 ,onContentLoaded:function(){}
}
 ,g=function(){function d(c,e){var g=this;b(this,d),this._config=a.extend({}
    ,f,e),this._$modalArrows=null,this._galleryIndex=0,this._galleryName=null,this._padding=null,this._border=null,this._titleIsShown=!1,this._footerIsShown=!1,this._wantedWidth=0,this._wantedHeight=0,this._touchstartX=0,this._touchendX=0,this._modalId="ekkoLightbox-"+Math.floor(1e3*Math.random()+1),this._$element=c instanceof jQuery?c:a(c),this._isBootstrap3=3==a.fn.modal.Constructor.VERSION[0];var h='<h4 class="modal-title">'+(this._config.title||"&nbsp;")+"</h4>",i='<button type="button" class="close" data-dismiss="modal" aria-label="'+this._config.strings.close+'"><span aria-hidden="true">&times;</span></button>',j='<div class="modal-header'+(this._config.title||this._config.alwaysShowClose?"":" hide")+'">'+(this._isBootstrap3?i+h:h+i)+"</div>",k='<div class="modal-footer'+(this._config.footer?"":" hide")+'">'+(this._config.footer||"&nbsp;")+"</div>",l='<div class="modal-body"><div class="ekko-lightbox-container"><div class="ekko-lightbox-item fade in show"></div><div class="ekko-lightbox-item fade"></div></div></div>',m='<div class="modal-dialog" role="document"><div class="modal-content">'+j+l+k+"</div></div>";a(this._config.doc.body).append('<div id="'+this._modalId+'" class="ekko-lightbox modal fade" tabindex="-1" tabindex="-1" role="dialog" aria-hidden="true">'+m+"</div>"),this._$modal=a("#"+this._modalId,this._config.doc),this._$modalDialog=this._$modal.find(".modal-dialog").first(),this._$modalContent=this._$modal.find(".modal-content").first(),this._$modalBody=this._$modal.find(".modal-body").first(),this._$modalHeader=this._$modal.find(".modal-header").first(),this._$modalFooter=this._$modal.find(".modal-footer").first(),this._$lightboxContainer=this._$modalBody.find(".ekko-lightbox-container").first(),this._$lightboxBodyOne=this._$lightboxContainer.find("> div:first-child").first(),this._$lightboxBodyTwo=this._$lightboxContainer.find("> div:last-child").first(),this._border=this._calculateBorders(),this._padding=this._calculatePadding(),this._galleryName=this._$element.data("gallery"),this._galleryName&&(this._$galleryItems=a(document.body).find('*[data-gallery="'+this._galleryName+'"]'),this._galleryIndex=this._$galleryItems.index(this._$element),a(document).on("keydown.ekkoLightbox",this._navigationalBinder.bind(this)),this._config.showArrows&&this._$galleryItems.length>1&&(this._$lightboxContainer.append('<div class="ekko-lightbox-nav-overlay"><a href="#">'+this._config.leftArrow+'</a><a href="#">'+this._config.rightArrow+"</a></div>"),this._$modalArrows=this._$lightboxContainer.find("div.ekko-lightbox-nav-overlay").first(),this._$lightboxContainer.on("click","a:first-child",function(a){return a.preventDefault(),g.navigateLeft()}
 ),this._$lightboxContainer.on("click","a:last-child",function(a){return a.preventDefault(),g.navigateRight()}
 ),this.updateNavigation())),this._$modal.on("show.bs.modal",this._config.onShow.bind(this)).on("shown.bs.modal",function(){return g._toggleLoading(!0),g._handle(),g._config.onShown.call(g)}
 ).on("hide.bs.modal",this._config.onHide.bind(this)).on("hidden.bs.modal",function(){return g._galleryName&&(a(document).off("keydown.ekkoLightbox"),a(window).off("resize.ekkoLightbox")),g._$modal.remove(),g._config.onHidden.call(g)}
 ).modal(this._config),a(window).on("resize.ekkoLightbox",function(){g._resize(g._wantedWidth,g._wantedHeight)}
 ),this._$lightboxContainer.on("touchstart",function(){g._touchstartX=event.changedTouches[0].screenX}
 ).on("touchend",function(){g._touchendX=event.changedTouches[0].screenX,g._swipeGesure()}
 )}
 return c(d,null,[{key:"Default",get:function(){return f}
}
]),c(d,[{key:"element",value:function(){return this._$element}
}
 ,{key:"modal",value:function(){return this._$modal}
}
 ,{key:"navigateTo",value:function(b){return b<0||b>this._$galleryItems.length-1?this:(this._galleryIndex=b,this.updateNavigation(),this._$element=a(this._$galleryItems.get(this._galleryIndex)),void this._handle())}
}
 ,{key:"navigateLeft",value:function(){if(this._$galleryItems&&1!==this._$galleryItems.length){if(0===this._galleryIndex){if(!this._config.wrapping)return;this._galleryIndex=this._$galleryItems.length-1}
 else this._galleryIndex--;return this._config.onNavigate.call(this,"left",this._galleryIndex),this.navigateTo(this._galleryIndex)}
}
}
 ,{key:"navigateRight",value:function(){if(this._$galleryItems&&1!==this._$galleryItems.length){if(this._galleryIndex===this._$galleryItems.length-1){if(!this._config.wrapping)return;this._galleryIndex=0}
 else this._galleryIndex++;return this._config.onNavigate.call(this,"right",this._galleryIndex),this.navigateTo(this._galleryIndex)}
}
}
 ,{key:"updateNavigation",value:function(){if(!this._config.wrapping){var a=this._$lightboxContainer.find("div.ekko-lightbox-nav-overlay");0===this._galleryIndex?a.find("a:first-child").addClass("disabled"):a.find("a:first-child").removeClass("disabled"),this._galleryIndex===this._$galleryItems.length-1?a.find("a:last-child").addClass("disabled"):a.find("a:last-child").removeClass("disabled")}
}
}
 ,{key:"close",value:function(){return this._$modal.modal("hide")}
}
 ,{key:"_navigationalBinder",value:function(a){return a=a||window.event,39===a.keyCode?this.navigateRight():37===a.keyCode?this.navigateLeft():void 0}
}
 ,{key:"_detectRemoteType",value:function(a,b){return b=b||!1,!b&&this._isImage(a)&&(b="image"),!b&&this._getYoutubeId(a)&&(b="youtube"),!b&&this._getVimeoId(a)&&(b="vimeo"),!b&&this._getInstagramId(a)&&(b="instagram"),(!b||["image","youtube","vimeo","instagram","video","url"].indexOf(b)<0)&&(b="url"),b}
}
 ,{key:"_isImage",value:function(a){return a&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)}
}
 ,{key:"_containerToUse",value:function(){var a=this,b=this._$lightboxBodyTwo,c=this._$lightboxBodyOne;return this._$lightboxBodyTwo.hasClass("in")&&(b=this._$lightboxBodyOne,c=this._$lightboxBodyTwo),c.removeClass("in show"),setTimeout(function(){a._$lightboxBodyTwo.hasClass("in")||a._$lightboxBodyTwo.empty(),a._$lightboxBodyOne.hasClass("in")||a._$lightboxBodyOne.empty()}
 ,500),b.addClass("in show"),b}
}
 ,{key:"_handle",value:function(){var a=this._containerToUse();this._updateTitleAndFooter();var b=this._$element.attr("data-remote")||this._$element.attr("href"),c=this._detectRemoteType(b,this._$element.attr("data-type")||!1);if(["image","youtube","vimeo","instagram","video","url"].indexOf(c)<0)return this._error(this._config.strings.type);switch(c){case"image":this._preloadImage(b,a),this._preloadImageByIndex(this._galleryIndex,3);break;case"youtube":this._showYoutubeVideo(b,a);break;case"vimeo":this._showVimeoVideo(this._getVimeoId(b),a);break;case"instagram":this._showInstagramVideo(this._getInstagramId(b),a);break;case"video":this._showHtml5Video(b,a);break;default:this._loadRemoteContent(b,a)}
 return this}
}
 ,{key:"_getYoutubeId",value:function(a){if(!a)return!1;var b=a.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/);return!(!b||11!==b[2].length)&&b[2]}
}
 ,{key:"_getVimeoId",value:function(a){return!!(a&&a.indexOf("vimeo")>0)&&a}
}
 ,{key:"_getInstagramId",value:function(a){return!!(a&&a.indexOf("instagram")>0)&&a}
}
 ,{key:"_toggleLoading",value:function(b){return b=b||!1,b?(this._$modalDialog.css("display","none"),this._$modal.removeClass("in show"),a(".modal-backdrop").append(this._config.loadingMessage)):(this._$modalDialog.css("display","block"),this._$modal.addClass("in show"),a(".modal-backdrop").find(".ekko-lightbox-loader").remove()),this}
}
 ,{key:"_calculateBorders",value:function(){return{top:this._totalCssByAttribute("border-top-width"),right:this._totalCssByAttribute("border-right-width"),bottom:this._totalCssByAttribute("border-bottom-width"),left:this._totalCssByAttribute("border-left-width")}
}
}
 ,{key:"_calculatePadding",value:function(){return{top:this._totalCssByAttribute("padding-top"),right:this._totalCssByAttribute("padding-right"),bottom:this._totalCssByAttribute("padding-bottom"),left:this._totalCssByAttribute("padding-left")}
}
}
 ,{key:"_totalCssByAttribute",value:function(a){return parseInt(this._$modalDialog.css(a),10)+parseInt(this._$modalContent.css(a),10)+parseInt(this._$modalBody.css(a),10)}
}
 ,{key:"_updateTitleAndFooter",value:function(){var a=this._$element.data("title")||"",b=this._$element.data("footer")||"";return this._titleIsShown=!1,a||this._config.alwaysShowClose?(this._titleIsShown=!0,this._$modalHeader.css("display","").find(".modal-title").html(a||"&nbsp;")):this._$modalHeader.css("display","none"),this._footerIsShown=!1,b?(this._footerIsShown=!0,this._$modalFooter.css("display","").html(b)):this._$modalFooter.css("display","none"),this}
}
 ,{key:"_showYoutubeVideo",value:function(a,b){var c=this._getYoutubeId(a),d=a.indexOf("&")>0?a.substr(a.indexOf("&")):"",e=this._$element.data("width")||560,f=this._$element.data("height")||e/(560/315);return this._showVideoIframe("//www.youtube.com/embed/"+c+"?badge=0&autoplay=1&html5=1"+d,e,f,b)}
}
 ,{key:"_showVimeoVideo",value:function(a,b){var c=this._$element.data("width")||500,d=this._$element.data("height")||c/(560/315);return this._showVideoIframe(a+"?autoplay=1",c,d,b)}
}
 ,{key:"_showInstagramVideo",value:function(a,b){var c=this._$element.data("width")||612,d=c+80;return a="/"!==a.substr(-1)?a+"/":a,b.html('<iframe width="'+c+'" height="'+d+'" src="'+a+'embed/" frameborder="0" allowfullscreen></iframe>'),this._resize(c,d),this._config.onContentLoaded.call(this),this._$modalArrows&&this._$modalArrows.css("display","none"),this._toggleLoading(!1),this}
}
 ,{key:"_showVideoIframe",value:function(a,b,c,d){return c=c||b,d.html('<div class="embed-responsive embed-responsive-16by9"><iframe width="'+b+'" height="'+c+'" src="'+a+'" frameborder="0" allowfullscreen class="embed-responsive-item"></iframe></div>'),this._resize(b,c),this._config.onContentLoaded.call(this),this._$modalArrows&&this._$modalArrows.css("display","none"),this._toggleLoading(!1),this}
}
 ,{key:"_showHtml5Video",value:function(a,b){var c=this._$element.data("width")||560,d=this._$element.data("height")||c/(560/315);return b.html('<div class="embed-responsive embed-responsive-16by9"><video width="'+c+'" height="'+d+'" src="'+a+'" preload="auto" autoplay controls class="embed-responsive-item"></video></div>'),this._resize(c,d),this._config.onContentLoaded.call(this),this._$modalArrows&&this._$modalArrows.css("display","none"),this._toggleLoading(!1),this}
}
 ,{key:"_loadRemoteContent",value:function(b,c){var d=this,e=this._$element.data("width")||560,f=this._$element.data("height")||560,g=this._$element.data("disableExternalCheck")||!1;return this._toggleLoading(!1),g||this._isExternal(b)?(c.html('<iframe src="'+b+'" frameborder="0" allowfullscreen></iframe>'),this._config.onContentLoaded.call(this)):c.load(b,a.proxy(function(){return d._$element.trigger("loaded.bs.modal")}
 )),this._$modalArrows&&this._$modalArrows.css("display","none"),this._resize(e,f),this}
}
 ,{key:"_isExternal",value:function(a){var b=a.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/);return"string"==typeof b[1]&&b[1].length>0&&b[1].toLowerCase()!==location.protocol||"string"==typeof b[2]&&b[2].length>0&&b[2].replace(new RegExp(":("+{"http:":80,"https:":443}
 [location.protocol]+")?$"),"")!==location.host}
}
 ,{key:"_error",value:function(a){return console.error(a),this._containerToUse().html(a),this._resize(300,300),this}
}
 ,{key:"_preloadImageByIndex",value:function(b,c){if(this._$galleryItems){var d=a(this._$galleryItems.get(b),!1);if("undefined"!=typeof d){var e=d.attr("data-remote")||d.attr("href");return("image"===d.attr("data-type")||this._isImage(e))&&this._preloadImage(e,!1),c>0?this._preloadImageByIndex(b+1,c-1):void 0}
}
}
}
 ,{key:"_preloadImage",value:function(b,c){var d=this;c=c||!1;var e=new Image;return c&&!function(){var f=setTimeout(function(){c.append(d._config.loadingMessage)}
 ,200);e.onload=function(){f&&clearTimeout(f),f=null;var b=a("<img />");return b.attr("src",e.src),b.addClass("img-fluid"),b.css("width","100%"),c.html(b),d._$modalArrows&&d._$modalArrows.css("display",""),d._resize(e.width,e.height),d._toggleLoading(!1),d._config.onContentLoaded.call(d)}
 ,e.onerror=function(){return d._toggleLoading(!1),d._error(d._config.strings.fail+("  "+b))}
}
 (),e.src=b,e}
}
 ,{key:"_swipeGesure",value:function(){return this._touchendX<this._touchstartX?this.navigateRight():this._touchendX>this._touchstartX?this.navigateLeft():void 0}
}
 ,{key:"_resize",value:function(b,c){c=c||b,this._wantedWidth=b,this._wantedHeight=c;var d=b/c,e=this._padding.left+this._padding.right+this._border.left+this._border.right,f=this._config.doc.body.clientWidth>575?20:0,g=this._config.doc.body.clientWidth>575?0:20,h=Math.min(b+e,this._config.doc.body.clientWidth-f,this._config.maxWidth);b+e>h?(c=(h-e-g)/d,b=h):b+=e;var i=0,j=0;this._footerIsShown&&(j=this._$modalFooter.outerHeight(!0)||55),this._titleIsShown&&(i=this._$modalHeader.outerHeight(!0)||67);var k=this._padding.top+this._padding.bottom+this._border.bottom+this._border.top,l=parseFloat(this._$modalDialog.css("margin-top"))+parseFloat(this._$modalDialog.css("margin-bottom")),m=Math.min(c,a(window).height()-k-l-i-j,this._config.maxHeight-k-i-j);c>m&&(b=Math.ceil(m*d)+e),this._$lightboxContainer.css("height",m),this._$modalDialog.css("flex",1).css("maxWidth",b);var n=this._$modal.data("bs.modal");if(n)try{n._handleUpdate()}
 catch(o){n.handleUpdate()}
 return this}
}
],[{key:"_jQueryInterface",value:function(b){var c=this;return b=b||{}
 ,this.each(function(){var e=a(c),f=a.extend({}
 ,d.Default,e.data(),"object"==typeof b&&b);new d(c,f)}
 )}
}
]),d}
 ();return a.fn[d]=g._jQueryInterface,a.fn[d].Constructor=g,a.fn[d].noConflict=function(){return a.fn[d]=e,g._jQueryInterface}
 ,g}
 )(jQuery)}
 (jQuery);
 ;
 !function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}
 (function(i){"use strict";var e=window.Slick||{}
 ;(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)}
 ,dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3}
 ,n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{}
 ,transformsEnabled:!1,unslicked:!1}
 ,i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{}
 ,n.options=i.extend({}
    ,n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}
}
 ()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}
 ).find("a, input, button, select").attr({tabindex:"0"}
 )}
 ,e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}
 ),s.$slidesCache=s.$slides,s.reinit()}
 ,e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e}
    ,i.options.speed)}
}
 ,e.prototype.animateSlide=function(e,t){var o={}
 ,s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e}
    ,s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e}
    ,s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}
    ).animate({animStart:e}
    ,{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))}
 ,complete:function(){t&&t.call()}
}
 )):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()}
 ,s.options.speed))}
 ,e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t}
 ,e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)}
 )}
 ,e.prototype.applyTransition=function(i){var e=this,t={}
 ;!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)}
 ,e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))}
 ,e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)}
 ,e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))}
 ,e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}
 ))}
 ,e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}
}
 ,e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}
 ),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")}
 ,e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}
 d.appendChild(a)}
 o.appendChild(d)}
 l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"}
 )}
}
 ,e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({}
    ,r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({}
    ,r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}
}
 ,e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}
}
 ,e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}
 t=e[o]}
 return i}
 ,e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)}
 ,e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))}
 ,e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))}
 ,e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())}
 ,e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={}
 ,t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}
 ),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])}
 ,e.prototype.disableTransition=function(i){var e=this,t={}
 ;t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)}
 ,e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}
    ),t.$slides.eq(i).animate({opacity:1}
    ,t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}
    ),e&&setTimeout(function(){t.disableTransition(i),e.call()}
 ,t.options.speed))}
 ,e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2}
    ,e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}
    ))}
 ,e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())}
 ,e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())}
 ,0)}
 )}
 ,e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide}
 ,e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1}
 ,e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e}
 ,e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]}
 ,e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s}
 ,e.prototype.getSlick=function(){return this}
 ,e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}
 ),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll}
 ,e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}
}
 ,e)}
 ,e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())}
 ,e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount}
 );e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}
 ).find("a, input, button, select").attr({tabindex:"-1"}
 ),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}
 ),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s}
 )}
 ),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}
 ),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"}
 )}
 ).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}
 ).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()}
 ,e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"}
 ,i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"}
 ,i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))}
 ,e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"}
 ,e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))}
 ,e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))}
 ,e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"}
 ,e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"}
 ,e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"}
 ,e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"}
 ,e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)}
 ,e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()}
 ,e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}
}
 ):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}
}
 ))}
 ,e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0}
    ,100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1}
    ,200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}
 ),n.$slider.trigger("lazyLoaded",[n,e,t])}
 )}
 ,r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])}
 ,r.src=t}
 )}
 var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))}
 ,e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}
    ),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()}
 ,e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}
}
 )}
 ,e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()}
 ,e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0}
 ,e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1}
 ,e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))}
 ,e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}
}
 )}
 ,e.prototype.preventDefault=function(i){i.preventDefault()}
 ,e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()}
 ,r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)}
 ,500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())}
 ,r.src=o):l.$slider.trigger("allImagesLoaded",[l])}
 ,e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}
    ),s.init(),e||s.changeSlide({data:{message:"index",index:t}
}
 ,!1)}
 ,e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}
 s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i}
 )}
}
 ,e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])}
 ,e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()}
 ,50))}
 ,e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()}
 ,e.prototype.setCSS=function(i){var e,t,o=this,s={}
 ;!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={}
    ,!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))}
 ,e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}
 ):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"}
 )),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)}
 ,e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}
 ):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0}
 )}
 ),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1}
    )}
 ,e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}
}
 ,e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e}
 );else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}
 l&&(r.unload(),r.reinit())}
 ,e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])}
 ,e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType}
 ,e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}
 else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()}
 ,e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")}
 )}
}
 ,e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i}
 ,e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)}
 ,e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}
 ):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}
 ):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)}
 )):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}
 ):a.postSlide(s)}
}
 ,e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")}
 ,e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"}
 ,e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}
 "vertical"!=t&&(o.slideHandler(e),o.touchObject={}
 ,o.$slider.trigger("swipe",[o,t]))}
 else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={}
 )}
 ,e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}
}
 ,e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))}
 ,e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={}
 ,!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0}
 ,e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())}
 ,e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")}
 ,e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()}
 ,e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))}
 ,e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))}
 ,e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)}
 ,i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}
}
 );
 !function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.AOS=t()}
 (this,function(){"use strict";var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
 ,t="Expected a function",n=NaN,o="[object Symbol]",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,d="object"==typeof self&&self&&self.Object===Object&&self,l=u||d||Function("return this")(),f=Object.prototype.toString,m=Math.max,p=Math.min,b=function(){return l.Date.now()}
 ;function v(e,n,o){var i,a,r,c,s,u,d=0,l=!1,f=!1,v=!0;if("function"!=typeof e)throw new TypeError(t);function y(t){var n=i,o=a;return i=a=void 0,d=t,c=e.apply(o,n)}
 function h(e){var t=e-u;return void 0===u||t>=n||t<0||f&&e-d>=r}
 function k(){var e=b();if(h(e))return x(e);s=setTimeout(k,function(e){var t=n-(e-u);return f?p(t,r-(e-d)):t}
 (e))}
 function x(e){return s=void 0,v&&i?y(e):(i=a=void 0,c)}
 function O(){var e=b(),t=h(e);if(i=arguments,a=this,u=e,t){if(void 0===s)return function(e){return d=e,s=setTimeout(k,n),l?y(e):c}
 (u);if(f)return s=setTimeout(k,n),y(u)}
 return void 0===s&&(s=setTimeout(k,n)),c}
 return n=w(n)||0,g(o)&&(l=!!o.leading,r=(f="maxWait"in o)?m(w(o.maxWait)||0,n):r,v="trailing"in o?!!o.trailing:v),O.cancel=function(){void 0!==s&&clearTimeout(s),d=0,i=u=a=s=void 0}
 ,O.flush=function(){return void 0===s?c:x(b())}
 ,O}
 function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}
 function w(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}
 (e)&&f.call(e)==o}
 (e))return n;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}
 if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var u=r.test(e);return u||c.test(e)?s(e.slice(2),u?2:8):a.test(e)?n:+e}
 var y=function(e,n,o){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError(t);return g(o)&&(i="leading"in o?!!o.leading:i,a="trailing"in o?!!o.trailing:a),v(e,n,{leading:i,maxWait:n,trailing:a}
    )}
 ,h="Expected a function",k=NaN,x="[object Symbol]",O=/^\s+|\s+$/g,j=/^[-+]0x[0-9a-f]+$/i,E=/^0b[01]+$/i,N=/^0o[0-7]+$/i,z=parseInt,C="object"==typeof e&&e&&e.Object===Object&&e,A="object"==typeof self&&self&&self.Object===Object&&self,q=C||A||Function("return this")(),L=Object.prototype.toString,T=Math.max,M=Math.min,S=function(){return q.Date.now()}
 ;function D(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}
 function H(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}
 (e)&&L.call(e)==x}
 (e))return k;if(D(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=D(t)?t+"":t}
 if("string"!=typeof e)return 0===e?e:+e;e=e.replace(O,"");var n=E.test(e);return n||N.test(e)?z(e.slice(2),n?2:8):j.test(e)?k:+e}
 var $=function(e,t,n){var o,i,a,r,c,s,u=0,d=!1,l=!1,f=!0;if("function"!=typeof e)throw new TypeError(h);function m(t){var n=o,a=i;return o=i=void 0,u=t,r=e.apply(a,n)}
 function p(e){var n=e-s;return void 0===s||n>=t||n<0||l&&e-u>=a}
 function b(){var e=S();if(p(e))return v(e);c=setTimeout(b,function(e){var n=t-(e-s);return l?M(n,a-(e-u)):n}
 (e))}
 function v(e){return c=void 0,f&&o?m(e):(o=i=void 0,r)}
 function g(){var e=S(),n=p(e);if(o=arguments,i=this,s=e,n){if(void 0===c)return function(e){return u=e,c=setTimeout(b,t),d?m(e):r}
 (s);if(l)return c=setTimeout(b,t),m(s)}
 return void 0===c&&(c=setTimeout(b,t)),r}
 return t=H(t)||0,D(n)&&(d=!!n.leading,a=(l="maxWait"in n)?T(H(n.maxWait)||0,t):a,f="trailing"in n?!!n.trailing:f),g.cancel=function(){void 0!==c&&clearTimeout(c),u=0,o=s=i=c=void 0}
 ,g.flush=function(){return void 0===c?r:v(S())}
 ,g}
 ,W=function(){}
 ;function P(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes);if(function e(t){var n=void 0,o=void 0;for(n=0;n<t.length;n+=1){if((o=t[n]).dataset&&o.dataset.aos)return!0;if(o.children&&e(o.children))return!0}
 return!1}
 (t.concat(n)))return W()}
 )}
 function Y(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}
 var _={isSupported:function(){return!!Y()}
 ,ready:function(e,t){var n=window.document,o=new(Y())(P);W=t,o.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0}
    )}
}
 ,B=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}
 ,F=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}
}
 return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}
}
 (),I=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}
 return e}
 ,K=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,G=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,J=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,Q=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function R(){return navigator.userAgent||navigator.vendor||window.opera||""}
 var U=new(function(){function e(){B(this,e)}
 return F(e,[{key:"phone",value:function(){var e=R();return!(!K.test(e)&&!G.test(e.substr(0,4)))}
}
 ,{key:"mobile",value:function(){var e=R();return!(!J.test(e)&&!Q.test(e.substr(0,4)))}
}
 ,{key:"tablet",value:function(){return this.mobile()&&!this.phone()}
}
 ,{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}
}
]),e}
 ()),V=function(e,t){var n=void 0;return U.ie11()?(n=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,{detail:t}
    ):n=new CustomEvent(e,{detail:t}
    ),document.dispatchEvent(n)}
 ,X=function(e){return e.forEach(function(e,t){return function(e,t){var n=e.options,o=e.position,i=e.node,a=(e.data,function(){e.animated&&(function(e,t){t&&t.forEach(function(t){return e.classList.remove(t)}
 )}
 (i,n.animatedClassNames),V("aos:out",i),e.options.id&&V("aos:in:"+e.options.id,i),e.animated=!1)}
 );n.mirror&&t>=o.out&&!n.once?a():t>=o.in?e.animated||(function(e,t){t&&t.forEach(function(t){return e.classList.add(t)}
 )}
 (i,n.animatedClassNames),V("aos:in",i),e.options.id&&V("aos:in:"+e.options.id,i),e.animated=!0):e.animated&&!n.once&&a()}
 (e,window.pageYOffset)}
 )}
 ,Z=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}
}
 ,ee=function(e,t,n){var o=e.getAttribute("data-aos-"+t);if(void 0!==o){if("true"===o)return!0;if("false"===o)return!1}
 return o||n}
 ,te=function(e,t){return e.forEach(function(e,n){var o=ee(e.node,"mirror",t.mirror),i=ee(e.node,"once",t.once),a=ee(e.node,"id"),r=t.useClassNames&&e.node.getAttribute("data-aos"),c=[t.animatedClassName].concat(r?r.split(" "):[]).filter(function(e){return"string"==typeof e}
 );t.initClassName&&e.node.classList.add(t.initClassName),e.position={in:function(e,t,n){var o=window.innerHeight,i=ee(e,"anchor"),a=ee(e,"anchor-placement"),r=Number(ee(e,"offset",a?0:t)),c=a||n,s=e;i&&document.querySelectorAll(i)&&(s=document.querySelectorAll(i)[0]);var u=Z(s).top-o;switch(c){case"top-bottom":break;case"center-bottom":u+=s.offsetHeight/2;break;case"bottom-bottom":u+=s.offsetHeight;break;case"top-center":u+=o/2;break;case"center-center":u+=o/2+s.offsetHeight/2;break;case"bottom-center":u+=o/2+s.offsetHeight;break;case"top-top":u+=o;break;case"bottom-top":u+=o+s.offsetHeight;break;case"center-top":u+=o+s.offsetHeight/2}
 return u+r}
 (e.node,t.offset,t.anchorPlacement),out:o&&function(e,t){window.innerHeight;var n=ee(e,"anchor"),o=ee(e,"offset",t),i=e;return n&&document.querySelectorAll(n)&&(i=document.querySelectorAll(n)[0]),Z(i).top+i.offsetHeight-o}
 (e.node,t.offset)}
 ,e.options={once:i,mirror:o,animatedClassNames:c,id:a}
}
 ),e}
 ,ne=function(){var e=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(e,function(e){return{node:e}
}
 )}
 ,oe=[],ie=!1,ae={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50}
 ,re=function(){return document.all&&!window.atob}
 ,ce=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(ie=!0),ie&&(oe=te(oe,ae),X(oe),window.addEventListener("scroll",y(function(){X(oe,ae.once)}
 ,ae.throttleDelay)))}
 ,se=function(){if(oe=ne(),de(ae.disable)||re())return ue();ce()}
 ,ue=function(){oe.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),ae.initClassName&&e.node.classList.remove(ae.initClassName),ae.animatedClassName&&e.node.classList.remove(ae.animatedClassName)}
 )}
 ,de=function(e){return!0===e||"mobile"===e&&U.mobile()||"phone"===e&&U.phone()||"tablet"===e&&U.tablet()||"function"==typeof e&&!0===e()}
 ;return{init:function(e){return ae=I(ae,e),oe=ne(),ae.disableMutationObserver||_.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),ae.disableMutationObserver=!0),ae.disableMutationObserver||_.ready("[data-aos]",se),de(ae.disable)||re()?ue():(document.querySelector("body").setAttribute("data-aos-easing",ae.easing),document.querySelector("body").setAttribute("data-aos-duration",ae.duration),document.querySelector("body").setAttribute("data-aos-delay",ae.delay),-1===["DOMContentLoaded","load"].indexOf(ae.startEvent)?document.addEventListener(ae.startEvent,function(){ce(!0)}
 ):window.addEventListener("load",function(){ce(!0)}
 ),"DOMContentLoaded"===ae.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1&&ce(!0),window.addEventListener("resize",$(ce,ae.debounceDelay,!0)),window.addEventListener("orientationchange",$(ce,ae.debounceDelay,!0)),oe)}
 ,refresh:ce,refreshHard:se}
}
 );
 /*!
  * fullpage.js Parallax Effect Extension 0.1.9 for fullPage.js v3
  * https://github.com/alvarotrigo/fullPage.js
  *
  * @license This code has been bought from www.alvarotrigo.com/fullPage/extensions/ and it is not free to use or distribute.
  * Copyright (C) 2016 alvarotrigo.com - A project by Alvaro Trigo
  */
 window.fp_parallaxExtension=function(){var f,d,n,c,o,p,s,l,e,t,i=this,a=window.fp_utils,r=window.fullpage_api,u=a,v=a.$,m=r.getFullpageData(),g=m.options,x=m.internals,h=".fullpage-wrapper",E="active",b="."+E,S=".fp-section",y=S+b,w="fp-slide",L="."+w,A=L+b,M="fp-notransition",N=".fp-bg",R="reveal",T="cover",I="fp-parallax-stylesheet",C="fp-parallax-transitions",z="#"+C,O="fp-parallax-transition-class",B="#"+O,H=0,F=!1,k=!1,q=!0,W=!0,_=!1,V=!1,G=!1,X=!1,Y=!1,D=!0===g.parallax||"slides"===g.parallax,P=!0===g.parallax||"sections"===g.parallax,U=u.closest,$=u.addClass,j=u.removeClass,J=u.hasClass,K=u.css,Q=u.nextAll,Z=u.prevAll;function ee(e){return{cover:{offsetNormal:e?0:d}
 ,reveal:{offsetNormal:e?-d:0}
}
}
 function te(e){return{cover:{offsetNormal:e?0:n}
 ,reveal:{offsetNormal:e?-n:0}
}
}
 function ne(e){return e*c/100}
 function oe(e){return e*o/100}
 function ie(){return window.innerWidth||document.documentElement.clientWidth||document.getElementsByTagName("body")[0].clientWidth}
 function ae(){s&&Ae(v(y).length?v(y)[0]:v(S)[0],0)}
 function re(){if(P){var e=v(y).length?v(y)[0]:v(S)[0],t=f===R,n=t?Q(e):Z(e),o=t?Z(e):Q(e);n.forEach(function(e){Ae(e,ee(t)[f].offsetNormal,"silent")}
 ),o.forEach(function(e){Ae(e,0,"silent")}
 )}
 D&&v(S).forEach(function(e){v(L,e).length&&le(v(A,e).length?v(A,e)[0]:v(L,e)[0])}
 )}
 function le(e){var t=f===R,n=t?Q(e):Z(e),o=t?Z(e):Q(e);n.forEach(function(e){Me(e,te(t)[f].offsetNormal,"silent")}
 ),o.forEach(function(e){Me(e,0,"silent")}
 )}
 function se(e){var t=e.detail;o=ie(),t&&!g.scrollBar?(he(),Ee()):be()}
 function fe(e){i.destroy(),_=!1}
 function de(){v(".fp-scrollable").forEach(function(e){var t=v(N,e)[0];(v(".fp-scrollable",e).length||J(e,"fp-scrollable"))&&null!=t&&u.prependTo(e.parentNode,t)}
 )}
 function ce(e){e.detail?be():X=!0}
 function pe(e){e.detail,v(N).forEach(function(e){e.setAttribute("data-final-x",0),e.setAttribute("data-final-y",0)}
 ),p=v(S),re()}
 function ue(e){e.detail.leavingSection,e.detail.destination,k=Y=!0}
 function ve(e){var t=e.detail.leavingSection,n=e.detail.destination;Ae(t,ee(F)[f].offsetNormal,"silent");var o=v(L,t);o.length&&o.forEach(function(e){e!==n&&Ae(e,0,"silent")}
 ),i.afterSlideLoads(v(L,t)[0]),Y=!1}
 function me(e){var t=e.detail;V=!0,le("left"===t.xMovement?v(L,v(y)[0])[0]:u.last(v(L,v(y)[0]))),setTimeout(function(){i.applyHorizontal(t)}
 )}
 function ge(e){var t=e.detail;G=!0,re(),setTimeout(function(){i.apply(t)}
 )}
 function xe(){_&&(g.scrollBar||!g.autoScrolling||x.usingExtension("dragAndMove"))&&function(){var e=x.usingExtension("dragAndMove")?Math.abs(window.fp_dragAndMoveExtension.getCurrentScroll()):u.getScrollTop(),t=e<H,n=u.index(v(y)[0],S),o=c+e;H=e;for(var i=0;i<p.length;++i){var a=p[i],r=c+a.offsetTop;!t&&a.offsetTop<=o?n=i:t&&e<=r&&a.offsetTop<e&&p.length>i+1&&(n=i+1)}
 var l=(c-(p[n].offsetTop-e))*d/c;f!==R&&(n-=1);var s=f!==R?l:-d+l;-1<n&&Ae(v(S)[n],s),0<=n-1&&Ae(p[n-1],ee(!1)[f].offsetNormal),void 0!==p[n+1]&&Ae(p[n+1],ee(!0)[f].offsetNormal)}
 ()}
 function he(){var e=".fp-bg{transition: transform "+g.scrollingSpeed+"ms "+g.easingcss3+";}.fp-slide, .fp-section{transition: background-position "+g.scrollingSpeed+"ms "+g.easingcss3+";}";g.autoScrolling&&!g.scrollBar&&Ne(C,e)}function Ee(){var e=".fp-bg-animate{ transition: all "+g.scrollingSpeed+"ms "+g.easingcss3+"}";Ne(O,e)}function be(){u.remove(v(z))}function Se(){clearTimeout(t),t=setTimeout(ye,350)}function ye(){c=u.getWindowHeight(),o=ie(),d=ne(g.parallaxOptions.percentage),n=oe(g.parallaxOptions.percentage),ae(),re(),we()}function we(){K(v(N),{height:c+"px"})}function Le(e){return Math.round(2*e)/2}function Ae(e,t,n){var o=Le(t),i=v(L,e);if(i.length){var a=v(A,e)[0];e=null!=a?a:i[0]}
 if(s)K(e,{"background-position-y":o+"px"}
 );else if(!J(e,w)||J(e,E)||void 0!==n){var r=v(N,e)[0];if(r){var l=null!=r.getAttribute("data-final-x")?r.getAttribute("data-final-x"):0;u.toggleClass(r,M,void 0!==n),K(r,{transform:"translateX("+l+"px) translateY("+o+"px)"}
 ),r.setAttribute("data-final-x",l),r.setAttribute("data-final-y",o)}
}
}
 function Me(e,t,n){var o=Le(t),i=s?e:v(N,e)[0];if(i)if(!g.scrollBar&&g.autoScrolling||$(i,"fp-bg-animate"),s)u.toggleClass(i,M,void 0!==n),K(i,{"background-position-x":o+"px"}
 );else{var a=0,r=i.getAttribute("data-final-y");"none"!==r&&null!=r&&(a=r),u.toggleClass(i,M,void 0!==n||Y),K(i,{transform:"translateX("+o+"px) translateY("+a+"px)"}
 ),i.setAttribute("data-final-x",o),i.setAttribute("data-final-y",a)}
}
 function Ne(e,t){if(!v("#"+e).length){var n=document.head||document.getElementsByTagName("head")[0];u.appendTo((o=e,i=t,(a=document.createElement("style")).type="text/css",a.id=o,a.styleSheet?a.styleSheet.cssText=i:a.appendChild(document.createTextNode(i)),a),n)}
 var o,i,a}
 e=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,window.requestAnimationFrame=e,i.apply=function(e){if(P&&(X&&he(),!e.localIsResizing&&!g.scrollBar&&g.autoScrolling))if(("up"===e.yMovement||e.sectionIndex)&&(!e.isMovementUp||e.leavingSection-1)||!g.continuousVertical||G){var t=ee(F="up"===e.yMovement)[f].offsetNormal;Ae(v(S)[e.sectionIndex],0),Ae(v(S)[e.leavingSection-1],t),q=1===Math.abs(e.leavingSection-1-e.sectionIndex);for(var n=Math.min(e.leavingSection-1,e.sectionIndex)+1;n<Math.max(e.leavingSection-1,e.sectionIndex);n++)Ae(v(S)[n],0,"silent")}
 else;}
 ,i.applyHorizontal=function(e){if(D&&(!e.localIsResizing||Y)&&"none"!=e.xMovement)if((l=void 0!==e.direction&&e.direction!==e.xMovement)&&g.continuousHorizontal&&!V)l=!1;else{var t=te(k=l?"left"===e.direction:"left"===e.xMovement)[f].offsetNormal;if(Me(v(L,e.section)[e.slideIndex],0),Me(v(L,e.section)[e.prevSlideIndex],t),!(W=1===Math.abs(e.slideIndex-e.prevSlideIndex))&&!Y)for(var n=Math.min(e.slideIndex,e.prevSlideIndex)+1;n<Math.max(e.slideIndex,e.prevSlideIndex);n++)Me(v(L,e.section)[n],0,"silent")}
},i.init=function(){var e;c=u.getWindowHeight(),o=ie(),f=g.parallaxOptions.type,d=ne(g.parallaxOptions.percentage),n=oe(g.parallaxOptions.percentage),p=v(g.sectionSelector),s="background"===g.parallaxOptions.property,we(),(e=v(h)[0]).addEventListener("setAutoScrolling",se),e.addEventListener("destroy",fe),e.addEventListener("onScroll",xe),e.addEventListener("afterResponsive",pe),e.addEventListener("onGrab",ce),e.addEventListener("onContinuousVertical",ge),e.addEventListener("onResize",Se),e.addEventListener("afterRender",de),e.addEventListener("afterRebuild",de),e.addEventListener("onResetSliders",ue),D&&e.addEventListener("onContinuosHorizontal",me),e.addEventListener("onEndResetSliders",ve),s||(Ne(I,".fp-bg{top:0;bottom:0;width: 100%;position:absolute;z-index: -1;}.fp-section, .fp-slide, .fp-section.fp-table, .fp-slide.fp-table, .fp-section .fp-tableCell, .fp-slide .fp-tableCell {position:relative;overflow: hidden;}"),he()),Ee(),ae(),re(),_=!0},i.destroy=function(){be(),u.remove(v(B)),d=ne(0),n=oe(0),v(S).length&&(re(),u.css(v(N),{height:""})),clearTimeout(t);var e=v(h)[0];e&&(e.removeEventListener("setAutoScrolling",se),e.removeEventListener("destroy",fe),e.removeEventListener("onScroll",xe),e.removeEventListener("afterResponsive",pe),e.removeEventListener("onGrab",ce),e.removeEventListener("onContinuousVertical",ge),e.removeEventListener("onResize",Se),e.removeEventListener("afterRender",de),e.removeEventListener("afterRebuild",de),e.removeEventListener("onResetSliders",ue),D&&e.removeEventListener("onContinuosHorizontal",me),e.removeEventListener("onEndResetSliders",ve))},i.setOption=function(e,t){"offset"===e?(g.parallaxOptions.percentage=t,d=ne(t),n=oe(t)):"type"===e&&(g.parallaxOptions.type=t,f=t),re()}
 ,i.applyProperties=Ae,i.afterSlideLoads=function(e){var t,n=void 0!==e?e:v(A,v(y)[0])[0],o=U(n,S);if((s?(t=o,v(L,t).length?v(L,t):[t]):v(N,o)).forEach(function(e){j(e,"fp-bg-animate")}
 ),(V||l)&&(le(n),V=!1),!W){var i=te(k)[f].offsetNormal,a=n,r=k?Q(a):Z(a);(f===R&&k||f===T&&!k||Y)&&r.forEach(function(e){Me(e,i,"silent")}
 )}
}
 ,i.afterLoad=function(){if((!g.scrollBar||!g.autoScrolling||x.usingExtension("dragAndMove"))&&((G||l)&&(re(),G=!1),!q)){var t=ee(F)[f].offsetNormal,e=F?Q(v(y)[0]):Z(v(y)[0]);(f===R&&F||f===T&&!F)&&e.forEach(function(e){Ae(e,t,"silent")}
 )}
}
 ,i.c=x.c;var Re=i["common".charAt(0)];return"complete"===document.readyState&&Re("parallax"),window.addEventListener("load",function(){Re("parallax")}
 ),i}
 ;
 
 !function(n,r,p){var f=n.requestAnimationFrame||n.webkitRequestAnimationFrame||n.mozRequestAnimationFrame||n.oRequestAnimationFrame||n.msRequestAnimationFrame||function(t){n.setTimeout(t,1e3/60)}
 ,m=function(){var e={}
 ,o=r.createElement("div").style,i=function(){for(var t=["t","webkitT","MozT","msT","OT"],i=0,s=t.length;i<s;i++)if(t[i]+"ransform"in o)return t[i].substr(0,t[i].length-1);return!1}
 ();function t(t){return!1!==i&&(""===i?t:i+t.charAt(0).toUpperCase()+t.substr(1))}
 e.getTime=Date.now||function(){return(new Date).getTime()}
 ,e.extend=function(t,i){for(var s in i)t[s]=i[s]}
 ,e.addEvent=function(t,i,s,e){t.addEventListener(i,s,!!e)}
 ,e.removeEvent=function(t,i,s,e){t.removeEventListener(i,s,!!e)}
 ,e.prefixPointerEvent=function(t){return n.MSPointerEvent?"MSPointer"+t.charAt(7).toUpperCase()+t.substr(8):t}
 ,e.momentum=function(t,i,s,e,o,n){var r,h,a=t-i,l=p.abs(a)/s;return h=l/(n=void 0===n?6e-4:n),(r=t+l*l/(2*n)*(a<0?-1:1))<e?(r=o?e-o/2.5*(l/8):e,h=(a=p.abs(r-t))/l):0<r&&(r=o?o/2.5*(l/8):0,h=(a=p.abs(t)+r)/l),{destination:p.round(r),duration:h}
}
 ;var s=t("transform");return e.extend(e,{hasTransform:!1!==s,hasPerspective:t("perspective")in o,hasTouch:"ontouchstart"in n,hasPointer:!(!n.PointerEvent&&!n.MSPointerEvent),hasTransition:t("transition")in o}
 ),e.isBadAndroid=function(){var t=n.navigator.appVersion;if(!/Android/.test(t)||/Chrome\/\d/.test(t))return!1;var i=t.match(/Safari\/(\d+.\d)/);return!(i&&"object"==typeof i&&2<=i.length)||parseFloat(i[1])<535.19}
 (),e.extend(e.style={}
    ,{transform:s,transitionTimingFunction:t("transitionTimingFunction"),transitionDuration:t("transitionDuration"),transitionDelay:t("transitionDelay"),transformOrigin:t("transformOrigin")}
 ),e.hasClass=function(t,i){return new RegExp("(^|\\s)"+i+"(\\s|$)").test(t.className)}
 ,e.addClass=function(t,i){if(!e.hasClass(t,i)){var s=t.className.split(" ");s.push(i),t.className=s.join(" ")}
}
 ,e.removeClass=function(t,i){if(e.hasClass(t,i)){var s=new RegExp("(^|\\s)"+i+"(\\s|$)","g");t.className=t.className.replace(s," ")}
}
 ,e.offset=function(t){for(var i=-t.offsetLeft,s=-t.offsetTop;t=t.offsetParent;)i-=t.offsetLeft,s-=t.offsetTop;return{left:i,top:s}
}
 ,e.preventDefaultException=function(t,i){for(var s in i)if(i[s].test(t[s]))return!0;return!1}
 ,e.extend(e.eventType={}
    ,{touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,pointerdown:3,pointermove:3,pointerup:3,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3}
    ),e.extend(e.ease={}
    ,{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(t){return t*(2-t)}
}
 ,circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(t){return p.sqrt(1- --t*t)}
}
 ,back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(t){return(t-=1)*t*(5*t+4)+1}
}
 ,bounce:{style:"",fn:function(t){return(t/=1)<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}
}
 ,elastic:{style:"",fn:function(t){return 0===t?0:1==t?1:.4*p.pow(2,-10*t)*p.sin((t-.055)*(2*p.PI)/.22)+1}
}
}
 ),e.tap=function(t,i){var s=r.createEvent("Event");s.initEvent(i,!0,!0),s.pageX=t.pageX,s.pageY=t.pageY,t.target.dispatchEvent(s)}
 ,e.click=function(t){var i,s=t.target;/(SELECT|INPUT|TEXTAREA)/i.test(s.tagName)||((i=r.createEvent(n.MouseEvent?"MouseEvents":"Event")).initEvent("click",!0,!0),i.view=t.view||n,i.detail=1,i.screenX=s.screenX||0,i.screenY=s.screenY||0,i.clientX=s.clientX||0,i.clientY=s.clientY||0,i.ctrlKey=!!t.ctrlKey,i.altKey=!!t.altKey,i.shiftKey=!!t.shiftKey,i.metaKey=!!t.metaKey,i.button=0,i.relatedTarget=null,i._constructed=!0,s.dispatchEvent(i))}
 ,e}
 ();function t(t,i){for(var s in this.wrapper="string"==typeof t?r.querySelector(t):t,this.scroller=this.wrapper.children[0],this.scrollerStyle=this.scroller.style,this.options={resizeScrollbars:!0,mouseWheelSpeed:20,snapThreshold:.334,disablePointer:!m.hasPointer,disableTouch:m.hasPointer||!m.hasTouch,disableMouse:m.hasPointer||m.hasTouch,startX:0,startY:0,scrollY:!0,directionLockThreshold:5,momentum:!0,bounce:!0,bounceTime:600,bounceEasing:"",preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT|LABEL)$/}
 ,HWCompositing:!0,useTransition:!0,useTransform:!0,bindToWrapper:void 0===n.onmousedown}
 ,i)this.options[s]=i[s];this.translateZ=this.options.HWCompositing&&m.hasPerspective?" translateZ(0)":"",this.options.useTransition=m.hasTransition&&this.options.useTransition,this.options.useTransform=m.hasTransform&&this.options.useTransform,this.options.eventPassthrough=!0===this.options.eventPassthrough?"vertical":this.options.eventPassthrough,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollY="vertical"!=this.options.eventPassthrough&&this.options.scrollY,this.options.scrollX="horizontal"!=this.options.eventPassthrough&&this.options.scrollX,this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,this.options.bounceEasing="string"==typeof this.options.bounceEasing?m.ease[this.options.bounceEasing]||m.ease.circular:this.options.bounceEasing,this.options.resizePolling=void 0===this.options.resizePolling?60:this.options.resizePolling,!0===this.options.tap&&(this.options.tap="tap"),this.options.useTransition||this.options.useTransform||/relative|absolute/i.test(this.scrollerStyle.position)||(this.scrollerStyle.position="relative"),"scale"==this.options.shrinkScrollbars&&(this.options.useTransition=!1),this.options.invertWheelDirection=this.options.invertWheelDirection?-1:1,this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._events={}
 ,this._init(),this.refresh(),this.scrollTo(this.options.startX,this.options.startY),this.enable()}
 function h(t,i,s){var e=r.createElement("div"),o=r.createElement("div");return!0===s&&(e.style.cssText="position:absolute;z-index:9999",o.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"),o.className="iScrollIndicator",e.className="h"==t?(!0===s&&(e.style.cssText+=";height:7px;left:2px;right:2px;bottom:0",o.style.height="100%"),"iScrollHorizontalScrollbar"):(!0===s&&(e.style.cssText+=";width:7px;bottom:2px;top:2px;right:1px",o.style.width="100%"),"iScrollVerticalScrollbar"),e.style.cssText+=";overflow:hidden",i||(e.style.pointerEvents="none"),e.appendChild(o),e}
 function a(t,i){for(var s in this.wrapper="string"==typeof i.el?r.querySelector(i.el):i.el,this.wrapperStyle=this.wrapper.style,this.indicator=this.wrapper.children[0],this.indicatorStyle=this.indicator.style,this.scroller=t,this.options={listenX:!0,listenY:!0,interactive:!1,resize:!0,defaultScrollbars:!1,shrink:!1,fade:!1,speedRatioX:0,speedRatioY:0}
 ,i)this.options[s]=i[s];if(this.sizeRatioX=1,this.sizeRatioY=1,this.maxPosX=0,this.maxPosY=0,this.options.interactive&&(this.options.disableTouch||(m.addEvent(this.indicator,"touchstart",this),m.addEvent(n,"touchend",this)),this.options.disablePointer||(m.addEvent(this.indicator,m.prefixPointerEvent("pointerdown"),this),m.addEvent(n,m.prefixPointerEvent("pointerup"),this)),this.options.disableMouse||(m.addEvent(this.indicator,"mousedown",this),m.addEvent(n,"mouseup",this))),this.options.fade){this.wrapperStyle[m.style.transform]=this.scroller.translateZ;var e=m.style.transitionDuration;if(!e)return;this.wrapperStyle[e]=m.isBadAndroid?"0.0001ms":"0ms";var o=this;m.isBadAndroid&&f(function(){"0.0001ms"===o.wrapperStyle[e]&&(o.wrapperStyle[e]="0s")}
 ),this.wrapperStyle.opacity="0"}
}
 t.prototype={version:"5.2.0",_init:function(){this._initEvents(),(this.options.scrollbars||this.options.indicators)&&this._initIndicators(),this.options.mouseWheel&&this._initWheel(),this.options.snap&&this._initSnap(),this.options.keyBindings&&this._initKeys()}
 ,destroy:function(){this._initEvents(!0),clearTimeout(this.resizeTimeout),this.resizeTimeout=null,this._execEvent("destroy")}
 ,_transitionEnd:function(t){t.target==this.scroller&&this.isInTransition&&(this._transitionTime(),this.resetPosition(this.options.bounceTime)||(this.isInTransition=!1,this._execEvent("scrollEnd")))}
 ,_start:function(t){if(1!=m.eventType[t.type]&&0!==(t.which?t.button:t.button<2?0:4==t.button?1:2))return;if(this.enabled&&(!this.initiated||m.eventType[t.type]===this.initiated)){!this.options.preventDefault||m.isBadAndroid||m.preventDefaultException(t.target,this.options.preventDefaultException)||t.preventDefault();var i,s=t.touches?t.touches[0]:t;this.initiated=m.eventType[t.type],this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.directionLocked=0,this.startTime=m.getTime(),this.options.useTransition&&this.isInTransition?(this._transitionTime(),this.isInTransition=!1,i=this.getComputedPosition(),this._translate(p.round(i.x),p.round(i.y)),this._execEvent("scrollEnd")):!this.options.useTransition&&this.isAnimating&&(this.isAnimating=!1,this._execEvent("scrollEnd")),this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=s.pageX,this.pointY=s.pageY,this._execEvent("beforeScrollStart")}
}
 ,_move:function(t){if(this.enabled&&m.eventType[t.type]===this.initiated){this.options.preventDefault&&t.preventDefault();var i,s,e,o,n=t.touches?t.touches[0]:t,r=n.pageX-this.pointX,h=n.pageY-this.pointY,a=m.getTime();if(this.pointX=n.pageX,this.pointY=n.pageY,this.distX+=r,this.distY+=h,e=p.abs(this.distX),o=p.abs(this.distY),!(300<a-this.endTime&&e<10&&o<10)){if(this.directionLocked||this.options.freeScroll||(e>o+this.options.directionLockThreshold?this.directionLocked="h":o>=e+this.options.directionLockThreshold?this.directionLocked="v":this.directionLocked="n"),"h"==this.directionLocked){if("vertical"==this.options.eventPassthrough)t.preventDefault();else if("horizontal"==this.options.eventPassthrough)return void(this.initiated=!1);h=0}
 else if("v"==this.directionLocked){if("horizontal"==this.options.eventPassthrough)t.preventDefault();else if("vertical"==this.options.eventPassthrough)return void(this.initiated=!1);r=0}
 r=this.hasHorizontalScroll?r:0,h=this.hasVerticalScroll?h:0,i=this.x+r,s=this.y+h,(0<i||i<this.maxScrollX)&&(i=this.options.bounce?this.x+r/3:0<i?0:this.maxScrollX),(0<s||s<this.maxScrollY)&&(s=this.options.bounce?this.y+h/3:0<s?0:this.maxScrollY),this.directionX=0<r?-1:r<0?1:0,this.directionY=0<h?-1:h<0?1:0,this.moved||this._execEvent("scrollStart"),this.moved=!0,this._translate(i,s),300<a-this.startTime&&(this.startTime=a,this.startX=this.x,this.startY=this.y)}
}
}
 ,_end:function(t){if(this.enabled&&m.eventType[t.type]===this.initiated){this.options.preventDefault&&!m.preventDefaultException(t.target,this.options.preventDefaultException)&&t.preventDefault();t.changedTouches&&t.changedTouches[0];var i,s,e=m.getTime()-this.startTime,o=p.round(this.x),n=p.round(this.y),r=p.abs(o-this.startX),h=p.abs(n-this.startY),a=0,l="";if(this.isInTransition=0,this.initiated=0,this.endTime=m.getTime(),!this.resetPosition(this.options.bounceTime)){if(this.scrollTo(o,n),!this.moved)return this.options.tap&&m.tap(t,this.options.tap),this.options.click&&m.click(t),void this._execEvent("scrollCancel");if(this._events.flick&&e<200&&r<100&&h<100)this._execEvent("flick");else{if(this.options.momentum&&e<300&&(i=this.hasHorizontalScroll?m.momentum(this.x,this.startX,e,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options.deceleration):{destination:o,duration:0}
 ,s=this.hasVerticalScroll?m.momentum(this.y,this.startY,e,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options.deceleration):{destination:n,duration:0}
 ,o=i.destination,n=s.destination,a=p.max(i.duration,s.duration),this.isInTransition=1),this.options.snap){var c=this._nearestSnap(o,n);this.currentPage=c,a=this.options.snapSpeed||p.max(p.max(p.min(p.abs(o-c.x),1e3),p.min(p.abs(n-c.y),1e3)),300),o=c.x,n=c.y,this.directionX=0,this.directionY=0,l=this.options.bounceEasing}
 if(o!=this.x||n!=this.y)return(0<o||o<this.maxScrollX||0<n||n<this.maxScrollY)&&(l=m.ease.quadratic),void this.scrollTo(o,n,a,l);this._execEvent("scrollEnd")}
}
}
}
 ,_resize:function(){var t=this;clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){t.refresh()}
 ,this.options.resizePolling)}
 ,resetPosition:function(t){var i=this.x,s=this.y;return t=t||0,!this.hasHorizontalScroll||0<this.x?i=0:this.x<this.maxScrollX&&(i=this.maxScrollX),!this.hasVerticalScroll||0<this.y?s=0:this.y<this.maxScrollY&&(s=this.maxScrollY),(i!=this.x||s!=this.y)&&(this.scrollTo(i,s,t,this.options.bounceEasing),!0)}
 ,disable:function(){this.enabled=!1}
 ,enable:function(){this.enabled=!0}
 ,refresh:function(){this.wrapper.offsetHeight;this.wrapperWidth=this.wrapper.clientWidth,this.wrapperHeight=this.wrapper.clientHeight,this.scrollerWidth=this.scroller.offsetWidth,this.scrollerHeight=this.scroller.offsetHeight,this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight,this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,this.wrapperOffset=m.offset(this.wrapper),this._execEvent("refresh"),this.resetPosition()}
 ,on:function(t,i){this._events[t]||(this._events[t]=[]),this._events[t].push(i)}
 ,off:function(t,i){if(this._events[t]){var s=this._events[t].indexOf(i);-1<s&&this._events[t].splice(s,1)}
}
 ,_execEvent:function(t){if(this._events[t]){var i=0,s=this._events[t].length;if(s)for(;i<s;i++)this._events[t][i].apply(this,[].slice.call(arguments,1))}
}
 ,scrollBy:function(t,i,s,e){t=this.x+t,i=this.y+i,s=s||0,this.scrollTo(t,i,s,e)}
 ,scrollTo:function(t,i,s,e){e=e||m.ease.circular,this.isInTransition=this.options.useTransition&&0<s;var o=this.options.useTransition&&e.style;!s||o?(o&&(this._transitionTimingFunction(e.style),this._transitionTime(s)),this._translate(t,i)):this._animate(t,i,s,e.fn)}
 ,scrollToElement:function(t,i,s,e,o){if(t=t.nodeType?t:this.scroller.querySelector(t)){var n=m.offset(t);n.left-=this.wrapperOffset.left,n.top-=this.wrapperOffset.top,!0===s&&(s=p.round(t.offsetWidth/2-this.wrapper.offsetWidth/2)),!0===e&&(e=p.round(t.offsetHeight/2-this.wrapper.offsetHeight/2)),n.left-=s||0,n.top-=e||0,n.left=0<n.left?0:n.left<this.maxScrollX?this.maxScrollX:n.left,n.top=0<n.top?0:n.top<this.maxScrollY?this.maxScrollY:n.top,i=null==i||"auto"===i?p.max(p.abs(this.x-n.left),p.abs(this.y-n.top)):i,this.scrollTo(n.left,n.top,i,o)}
}
 ,_transitionTime:function(t){if(this.options.useTransition){t=t||0;var i=m.style.transitionDuration;if(i){if(this.scrollerStyle[i]=t+"ms",!t&&m.isBadAndroid){this.scrollerStyle[i]="0.0001ms";var s=this;f(function(){"0.0001ms"===s.scrollerStyle[i]&&(s.scrollerStyle[i]="0s")}
 )}
 if(this.indicators)for(var e=this.indicators.length;e--;)this.indicators[e].transitionTime(t)}
}
}
 ,_transitionTimingFunction:function(t){if(this.scrollerStyle[m.style.transitionTimingFunction]=t,this.indicators)for(var i=this.indicators.length;i--;)this.indicators[i].transitionTimingFunction(t)}
 ,_translate:function(t,i){if(this.options.useTransform?this.scrollerStyle[m.style.transform]="translate("+t+"px,"+i+"px)"+this.translateZ:(t=p.round(t),i=p.round(i),this.scrollerStyle.left=t+"px",this.scrollerStyle.top=i+"px"),this.x=t,this.y=i,this.indicators)for(var s=this.indicators.length;s--;)this.indicators[s].updatePosition()}
 ,_initEvents:function(t){var i=t?m.removeEvent:m.addEvent,s=this.options.bindToWrapper?this.wrapper:n;i(n,"orientationchange",this),i(n,"resize",this),this.options.click&&i(this.wrapper,"click",this,!0),this.options.disableMouse||(i(this.wrapper,"mousedown",this),i(s,"mousemove",this),i(s,"mousecancel",this),i(s,"mouseup",this)),m.hasPointer&&!this.options.disablePointer&&(i(this.wrapper,m.prefixPointerEvent("pointerdown"),this),i(s,m.prefixPointerEvent("pointermove"),this),i(s,m.prefixPointerEvent("pointercancel"),this),i(s,m.prefixPointerEvent("pointerup"),this)),m.hasTouch&&!this.options.disableTouch&&(i(this.wrapper,"touchstart",this),i(s,"touchmove",this),i(s,"touchcancel",this),i(s,"touchend",this)),i(this.scroller,"transitionend",this),i(this.scroller,"webkitTransitionEnd",this),i(this.scroller,"oTransitionEnd",this),i(this.scroller,"MSTransitionEnd",this)}
 ,getComputedPosition:function(){var t,i,s=n.getComputedStyle(this.scroller,null);return i=this.options.useTransform?(t=+((s=s[m.style.transform].split(")")[0].split(", "))[12]||s[4]),+(s[13]||s[5])):(t=+s.left.replace(/[^-\d.]/g,""),+s.top.replace(/[^-\d.]/g,"")),{x:t,y:i}
}
 ,_initIndicators:function(){var t,i=this.options.interactiveScrollbars,s="string"!=typeof this.options.scrollbars,e=[],o=this;this.indicators=[],this.options.scrollbars&&(this.options.scrollY&&(t={el:h("v",i,this.options.scrollbars),interactive:i,defaultScrollbars:!0,customStyle:s,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenX:!1}
 ,this.wrapper.appendChild(t.el),e.push(t)),this.options.scrollX&&(t={el:h("h",i,this.options.scrollbars),interactive:i,defaultScrollbars:!0,customStyle:s,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenY:!1}
 ,this.wrapper.appendChild(t.el),e.push(t))),this.options.indicators&&(e=e.concat(this.options.indicators));for(var n=e.length;n--;)this.indicators.push(new a(this,e[n]));function r(t){if(o.indicators)for(var i=o.indicators.length;i--;)t.call(o.indicators[i])}
 this.options.fadeScrollbars&&(this.on("scrollEnd",function(){r(function(){this.fade()}
 )}
 ),this.on("scrollCancel",function(){r(function(){this.fade()}
 )}
 ),this.on("scrollStart",function(){r(function(){this.fade(1)}
 )}
 ),this.on("beforeScrollStart",function(){r(function(){this.fade(1,!0)}
 )}
 )),this.on("refresh",function(){r(function(){this.refresh()}
 )}
 ),this.on("destroy",function(){r(function(){this.destroy()}
 ),delete this.indicators}
 )}
 ,_initWheel:function(){m.addEvent(this.wrapper,"wheel",this),m.addEvent(this.wrapper,"mousewheel",this),m.addEvent(this.wrapper,"DOMMouseScroll",this),this.on("destroy",function(){clearTimeout(this.wheelTimeout),this.wheelTimeout=null,m.removeEvent(this.wrapper,"wheel",this),m.removeEvent(this.wrapper,"mousewheel",this),m.removeEvent(this.wrapper,"DOMMouseScroll",this)}
 )}
 ,_wheel:function(t){if(this.enabled){t.preventDefault();var i,s,e,o,n=this;if(void 0===this.wheelTimeout&&n._execEvent("scrollStart"),clearTimeout(this.wheelTimeout),this.wheelTimeout=setTimeout(function(){n.options.snap||n._execEvent("scrollEnd"),n.wheelTimeout=void 0}
 ,400),"deltaX"in t)s=1===t.deltaMode?(i=-t.deltaX*this.options.mouseWheelSpeed,-t.deltaY*this.options.mouseWheelSpeed):(i=-t.deltaX,-t.deltaY);else if("wheelDeltaX"in t)i=t.wheelDeltaX/120*this.options.mouseWheelSpeed,s=t.wheelDeltaY/120*this.options.mouseWheelSpeed;else if("wheelDelta"in t)i=s=t.wheelDelta/120*this.options.mouseWheelSpeed;else{if(!("detail"in t))return;i=s=-t.detail/3*this.options.mouseWheelSpeed}
 if(i*=this.options.invertWheelDirection,s*=this.options.invertWheelDirection,this.hasVerticalScroll||(i=s,s=0),this.options.snap)return e=this.currentPage.pageX,o=this.currentPage.pageY,0<i?e--:i<0&&e++,0<s?o--:s<0&&o++,void this.goToPage(e,o);e=this.x+p.round(this.hasHorizontalScroll?i:0),o=this.y+p.round(this.hasVerticalScroll?s:0),this.directionX=0<i?-1:i<0?1:0,this.directionY=0<s?-1:s<0?1:0,0<e?e=0:e<this.maxScrollX&&(e=this.maxScrollX),0<o?o=0:o<this.maxScrollY&&(o=this.maxScrollY),this.scrollTo(e,o,0)}
}
 ,_initSnap:function(){this.currentPage={}
 ,"string"==typeof this.options.snap&&(this.options.snap=this.scroller.querySelectorAll(this.options.snap)),this.on("refresh",function(){var t,i,s,e,o,n,r=0,h=0,a=0,l=this.options.snapStepX||this.wrapperWidth,c=this.options.snapStepY||this.wrapperHeight;if(this.pages=[],this.wrapperWidth&&this.wrapperHeight&&this.scrollerWidth&&this.scrollerHeight){if(!0===this.options.snap)for(s=p.round(l/2),e=p.round(c/2);a>-this.scrollerWidth;){for(this.pages[r]=[],o=t=0;o>-this.scrollerHeight;)this.pages[r][t]={x:p.max(a,this.maxScrollX),y:p.max(o,this.maxScrollY),width:l,height:c,cx:a-s,cy:o-e}
 ,o-=c,t++;a-=l,r++}
 else for(t=(n=this.options.snap).length,i=-1;r<t;r++)(0===r||n[r].offsetLeft<=n[r-1].offsetLeft)&&(h=0,i++),this.pages[h]||(this.pages[h]=[]),a=p.max(-n[r].offsetLeft,this.maxScrollX),o=p.max(-n[r].offsetTop,this.maxScrollY),s=a-p.round(n[r].offsetWidth/2),e=o-p.round(n[r].offsetHeight/2),this.pages[h][i]={x:a,y:o,width:n[r].offsetWidth,height:n[r].offsetHeight,cx:s,cy:e}
 ,a>this.maxScrollX&&h++;this.goToPage(this.currentPage.pageX||0,this.currentPage.pageY||0,0),this.options.snapThreshold%1==0?(this.snapThresholdX=this.options.snapThreshold,this.snapThresholdY=this.options.snapThreshold):(this.snapThresholdX=p.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width*this.options.snapThreshold),this.snapThresholdY=p.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height*this.options.snapThreshold))}
}
 ),this.on("flick",function(){var t=this.options.snapSpeed||p.max(p.max(p.min(p.abs(this.x-this.startX),1e3),p.min(p.abs(this.y-this.startY),1e3)),300);this.goToPage(this.currentPage.pageX+this.directionX,this.currentPage.pageY+this.directionY,t)}
 )}
 ,_nearestSnap:function(t,i){if(!this.pages.length)return{x:0,y:0,pageX:0,pageY:0}
 ;var s=0,e=this.pages.length,o=0;if(p.abs(t-this.absStartX)<this.snapThresholdX&&p.abs(i-this.absStartY)<this.snapThresholdY)return this.currentPage;for(0<t?t=0:t<this.maxScrollX&&(t=this.maxScrollX),0<i?i=0:i<this.maxScrollY&&(i=this.maxScrollY);s<e;s++)if(t>=this.pages[s][0].cx){t=this.pages[s][0].x;break}
 for(e=this.pages[s].length;o<e;o++)if(i>=this.pages[0][o].cy){i=this.pages[0][o].y;break}
 return s==this.currentPage.pageX&&((s+=this.directionX)<0?s=0:s>=this.pages.length&&(s=this.pages.length-1),t=this.pages[s][0].x),o==this.currentPage.pageY&&((o+=this.directionY)<0?o=0:o>=this.pages[0].length&&(o=this.pages[0].length-1),i=this.pages[0][o].y),{x:t,y:i,pageX:s,pageY:o}
}
 ,goToPage:function(t,i,s,e){e=e||this.options.bounceEasing,t>=this.pages.length?t=this.pages.length-1:t<0&&(t=0),i>=this.pages[t].length?i=this.pages[t].length-1:i<0&&(i=0);var o=this.pages[t][i].x,n=this.pages[t][i].y;s=void 0===s?this.options.snapSpeed||p.max(p.max(p.min(p.abs(o-this.x),1e3),p.min(p.abs(n-this.y),1e3)),300):s,this.currentPage={x:o,y:n,pageX:t,pageY:i}
 ,this.scrollTo(o,n,s,e)}
 ,next:function(t,i){var s=this.currentPage.pageX,e=this.currentPage.pageY;++s>=this.pages.length&&this.hasVerticalScroll&&(s=0,e++),this.goToPage(s,e,t,i)}
 ,prev:function(t,i){var s=this.currentPage.pageX,e=this.currentPage.pageY;--s<0&&this.hasVerticalScroll&&(s=0,e--),this.goToPage(s,e,t,i)}
 ,_initKeys:function(t){var i,s={pageUp:33,pageDown:34,end:35,home:36,left:37,up:38,right:39,down:40}
 ;if("object"==typeof this.options.keyBindings)for(i in this.options.keyBindings)"string"==typeof this.options.keyBindings[i]&&(this.options.keyBindings[i]=this.options.keyBindings[i].toUpperCase().charCodeAt(0));else this.options.keyBindings={}
 ;for(i in s)this.options.keyBindings[i]=this.options.keyBindings[i]||s[i];m.addEvent(n,"keydown",this),this.on("destroy",function(){m.removeEvent(n,"keydown",this)}
 )}
 ,_key:function(t){if(this.enabled){var i,s=this.options.snap,e=s?this.currentPage.pageX:this.x,o=s?this.currentPage.pageY:this.y,n=m.getTime(),r=this.keyTime||0;switch(this.options.useTransition&&this.isInTransition&&(i=this.getComputedPosition(),this._translate(p.round(i.x),p.round(i.y)),this.isInTransition=!1),this.keyAcceleration=n-r<200?p.min(this.keyAcceleration+.25,50):0,t.keyCode){case this.options.keyBindings.pageUp:this.hasHorizontalScroll&&!this.hasVerticalScroll?e+=s?1:this.wrapperWidth:o+=s?1:this.wrapperHeight;break;case this.options.keyBindings.pageDown:this.hasHorizontalScroll&&!this.hasVerticalScroll?e-=s?1:this.wrapperWidth:o-=s?1:this.wrapperHeight;break;case this.options.keyBindings.end:e=s?this.pages.length-1:this.maxScrollX,o=s?this.pages[0].length-1:this.maxScrollY;break;case this.options.keyBindings.home:o=e=0;break;case this.options.keyBindings.left:e+=s?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.up:o+=s?1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.right:e-=s?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.down:o-=s?1:5+this.keyAcceleration>>0;break;default:return}
 s?this.goToPage(e,o):(0<e?(e=0,this.keyAcceleration=0):e<this.maxScrollX&&(e=this.maxScrollX,this.keyAcceleration=0),0<o?(o=0,this.keyAcceleration=0):o<this.maxScrollY&&(o=this.maxScrollY,this.keyAcceleration=0),this.scrollTo(e,o,0),this.keyTime=n)}
}
 ,_animate:function(n,r,h,a){var l=this,c=this.x,p=this.y,d=m.getTime(),u=d+h;this.isAnimating=!0,function t(){var i,s,e,o=m.getTime();if(u<=o)return l.isAnimating=!1,l._translate(n,r),void(l.resetPosition(l.options.bounceTime)||l._execEvent("scrollEnd"));e=a(o=(o-d)/h),i=(n-c)*e+c,s=(r-p)*e+p,l._translate(i,s),l.isAnimating&&f(t)}
 ()}
 ,handleEvent:function(t){switch(t.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(t);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(t);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(t);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(t);break;case"wheel":case"DOMMouseScroll":case"mousewheel":this._wheel(t);break;case"keydown":this._key(t);break;case"click":this.enabled&&!t._constructed&&(t.preventDefault(),t.stopPropagation())}
}
}
 ,a.prototype={handleEvent:function(t){switch(t.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(t);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(t);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(t)}
}
 ,destroy:function(){this.options.fadeScrollbars&&(clearTimeout(this.fadeTimeout),this.fadeTimeout=null),this.options.interactive&&(m.removeEvent(this.indicator,"touchstart",this),m.removeEvent(this.indicator,m.prefixPointerEvent("pointerdown"),this),m.removeEvent(this.indicator,"mousedown",this),m.removeEvent(n,"touchmove",this),m.removeEvent(n,m.prefixPointerEvent("pointermove"),this),m.removeEvent(n,"mousemove",this),m.removeEvent(n,"touchend",this),m.removeEvent(n,m.prefixPointerEvent("pointerup"),this),m.removeEvent(n,"mouseup",this)),this.options.defaultScrollbars&&this.wrapper.parentNode.removeChild(this.wrapper)}
 ,_start:function(t){var i=t.touches?t.touches[0]:t;t.preventDefault(),t.stopPropagation(),this.transitionTime(),this.initiated=!0,this.moved=!1,this.lastPointX=i.pageX,this.lastPointY=i.pageY,this.startTime=m.getTime(),this.options.disableTouch||m.addEvent(n,"touchmove",this),this.options.disablePointer||m.addEvent(n,m.prefixPointerEvent("pointermove"),this),this.options.disableMouse||m.addEvent(n,"mousemove",this),this.scroller._execEvent("beforeScrollStart")}
 ,_move:function(t){var i,s,e,o,n=t.touches?t.touches[0]:t;m.getTime();this.moved||this.scroller._execEvent("scrollStart"),this.moved=!0,i=n.pageX-this.lastPointX,this.lastPointX=n.pageX,s=n.pageY-this.lastPointY,this.lastPointY=n.pageY,e=this.x+i,o=this.y+s,this._pos(e,o),t.preventDefault(),t.stopPropagation()}
 ,_end:function(t){if(this.initiated){if(this.initiated=!1,t.preventDefault(),t.stopPropagation(),m.removeEvent(n,"touchmove",this),m.removeEvent(n,m.prefixPointerEvent("pointermove"),this),m.removeEvent(n,"mousemove",this),this.scroller.options.snap){var i=this.scroller._nearestSnap(this.scroller.x,this.scroller.y),s=this.options.snapSpeed||p.max(p.max(p.min(p.abs(this.scroller.x-i.x),1e3),p.min(p.abs(this.scroller.y-i.y),1e3)),300);this.scroller.x==i.x&&this.scroller.y==i.y||(this.scroller.directionX=0,this.scroller.directionY=0,this.scroller.currentPage=i,this.scroller.scrollTo(i.x,i.y,s,this.scroller.options.bounceEasing))}
 this.moved&&this.scroller._execEvent("scrollEnd")}
}
 ,transitionTime:function(t){t=t||0;var i=m.style.transitionDuration;if(i&&(this.indicatorStyle[i]=t+"ms",!t&&m.isBadAndroid)){this.indicatorStyle[i]="0.0001ms";var s=this;f(function(){"0.0001ms"===s.indicatorStyle[i]&&(s.indicatorStyle[i]="0s")}
 )}
}
 ,transitionTimingFunction:function(t){this.indicatorStyle[m.style.transitionTimingFunction]=t}
 ,refresh:function(){this.transitionTime(),this.options.listenX&&!this.options.listenY?this.indicatorStyle.display=this.scroller.hasHorizontalScroll?"block":"none":this.options.listenY&&!this.options.listenX?this.indicatorStyle.display=this.scroller.hasVerticalScroll?"block":"none":this.indicatorStyle.display=this.scroller.hasHorizontalScroll||this.scroller.hasVerticalScroll?"block":"none",this.scroller.hasHorizontalScroll&&this.scroller.hasVerticalScroll?(m.addClass(this.wrapper,"iScrollBothScrollbars"),m.removeClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="8px":this.wrapper.style.bottom="8px")):(m.removeClass(this.wrapper,"iScrollBothScrollbars"),m.addClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="2px":this.wrapper.style.bottom="2px"));this.wrapper.offsetHeight;this.options.listenX&&(this.wrapperWidth=this.wrapper.clientWidth,this.options.resize?(this.indicatorWidth=p.max(p.round(this.wrapperWidth*this.wrapperWidth/(this.scroller.scrollerWidth||this.wrapperWidth||1)),8),this.indicatorStyle.width=this.indicatorWidth+"px"):this.indicatorWidth=this.indicator.clientWidth,this.maxPosX=this.wrapperWidth-this.indicatorWidth,"clip"==this.options.shrink?(this.minBoundaryX=8-this.indicatorWidth,this.maxBoundaryX=this.wrapperWidth-8):(this.minBoundaryX=0,this.maxBoundaryX=this.maxPosX),this.sizeRatioX=this.options.speedRatioX||this.scroller.maxScrollX&&this.maxPosX/this.scroller.maxScrollX),this.options.listenY&&(this.wrapperHeight=this.wrapper.clientHeight,this.options.resize?(this.indicatorHeight=p.max(p.round(this.wrapperHeight*this.wrapperHeight/(this.scroller.scrollerHeight||this.wrapperHeight||1)),8),this.indicatorStyle.height=this.indicatorHeight+"px"):this.indicatorHeight=this.indicator.clientHeight,this.maxPosY=this.wrapperHeight-this.indicatorHeight,"clip"==this.options.shrink?(this.minBoundaryY=8-this.indicatorHeight,this.maxBoundaryY=this.wrapperHeight-8):(this.minBoundaryY=0,this.maxBoundaryY=this.maxPosY),this.maxPosY=this.wrapperHeight-this.indicatorHeight,this.sizeRatioY=this.options.speedRatioY||this.scroller.maxScrollY&&this.maxPosY/this.scroller.maxScrollY),this.updatePosition()}
 ,updatePosition:function(){var t=this.options.listenX&&p.round(this.sizeRatioX*this.scroller.x)||0,i=this.options.listenY&&p.round(this.sizeRatioY*this.scroller.y)||0;this.options.ignoreBoundaries||(t<this.minBoundaryX?("scale"==this.options.shrink&&(this.width=p.max(this.indicatorWidth+t,8),this.indicatorStyle.width=this.width+"px"),t=this.minBoundaryX):t>this.maxBoundaryX?t="scale"==this.options.shrink?(this.width=p.max(this.indicatorWidth-(t-this.maxPosX),8),this.indicatorStyle.width=this.width+"px",this.maxPosX+this.indicatorWidth-this.width):this.maxBoundaryX:"scale"==this.options.shrink&&this.width!=this.indicatorWidth&&(this.width=this.indicatorWidth,this.indicatorStyle.width=this.width+"px"),i<this.minBoundaryY?("scale"==this.options.shrink&&(this.height=p.max(this.indicatorHeight+3*i,8),this.indicatorStyle.height=this.height+"px"),i=this.minBoundaryY):i>this.maxBoundaryY?i="scale"==this.options.shrink?(this.height=p.max(this.indicatorHeight-3*(i-this.maxPosY),8),this.indicatorStyle.height=this.height+"px",this.maxPosY+this.indicatorHeight-this.height):this.maxBoundaryY:"scale"==this.options.shrink&&this.height!=this.indicatorHeight&&(this.height=this.indicatorHeight,this.indicatorStyle.height=this.height+"px")),this.x=t,this.y=i,this.scroller.options.useTransform?this.indicatorStyle[m.style.transform]="translate("+t+"px,"+i+"px)"+this.scroller.translateZ:(this.indicatorStyle.left=t+"px",this.indicatorStyle.top=i+"px")}
 ,_pos:function(t,i){t<0?t=0:t>this.maxPosX&&(t=this.maxPosX),i<0?i=0:i>this.maxPosY&&(i=this.maxPosY),t=this.options.listenX?p.round(t/this.sizeRatioX):this.scroller.x,i=this.options.listenY?p.round(i/this.sizeRatioY):this.scroller.y,this.scroller.scrollTo(t,i)}
 ,fade:function(t,i){if(!i||this.visible){clearTimeout(this.fadeTimeout),this.fadeTimeout=null;var s=t?250:500,e=t?0:300;t=t?"1":"0",this.wrapperStyle[m.style.transitionDuration]=s+"ms",this.fadeTimeout=setTimeout(function(t){this.wrapperStyle.opacity=t,this.visible=+t}
 .bind(this,t),e)}
}
}
 ,t.utils=m,"undefined"!=typeof module&&module.exports?module.exports=t:"function"==typeof define&&define.amd?(define(function(){return t}
 ),void 0!==n&&(n.IScroll=t)):n.IScroll=t}
 (window,document,Math),
 /*!
 * Scrolloverflow 2.0.2 module for fullPage.js >= 3
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
 function(l,f){l.fp_scrolloverflow=function(){l.IScroll||(IScroll=module.exports);var s="fp-scrollable",n="."+s,t=".active",p=".fp-section",e=p+t,o=".fp-slide",d=".fp-tableCell";function r(){var c=this;function s(){var i;fp_utils.hasClass(f.body,"fp-responsive")?(i=c.options.scrollOverflowHandler,e(function(t){fp_utils.hasClass(fp_utils.closest(t,p),"fp-auto-height-responsive")&&i.remove(t)}
 )):e(t)}
 function t(t){if(!fp_utils.hasClass(t,"fp-noscroll")){fp_utils.css(t,{overflow:"hidden"}
 );var i,s,e,o=c.options.scrollOverflowHandler,n=o.wrapContent(),r=fp_utils.closest(t,p),h=o.scrollable(t),a=(s=r,null!=(e=fp_utils.closest(s,p))?parseInt(getComputedStyle(e)["padding-bottom"])+parseInt(getComputedStyle(e)["padding-top"]):0);null!=h?i=o.scrollHeight(t):(i=t.scrollHeight-a,c.options.verticalCentered&&(i=u(d,t)[0].scrollHeight-a));var l=fp_utils.getWindowHeight()-a;l<i?null!=h?o.update(t,l):(c.options.verticalCentered?(fp_utils.wrapInner(u(d,t)[0],n.scroller),fp_utils.wrapInner(u(d,t)[0],n.scrollable)):(fp_utils.wrapInner(t,n.scroller),fp_utils.wrapInner(t,n.scrollable)),o.create(t,l,c.iscrollOptions)):o.remove(t),fp_utils.css(t,{overflow:""}
 )}
}
 function e(s){u(p).forEach(function(t){var i=u(o,t);i.length?i.forEach(function(t){s(t)}
 ):s(t)}
 )}
 c.options=null,c.init=function(t,i){return c.options=t,c.iscrollOptions=i,"complete"===f.readyState&&(s(),fullpage_api.shared.afterRenderActions()),l.addEventListener("load",function(){s(),fullpage_api.shared.afterRenderActions()}
 ),c}
 ,c.createScrollBarForAll=s}
 IScroll.prototype.wheelOn=function(){this.wrapper.addEventListener("wheel",this),this.wrapper.addEventListener("mousewheel",this),this.wrapper.addEventListener("DOMMouseScroll",this)}
 ,IScroll.prototype.wheelOff=function(){this.wrapper.removeEventListener("wheel",this),this.wrapper.removeEventListener("mousewheel",this),this.wrapper.removeEventListener("DOMMouseScroll",this)}
 ;var u=null,h=null,a={refreshId:null,iScrollInstances:[],iscrollOptions:{scrollbars:!0,mouseWheel:!0,hideScrollbars:!1,fadeScrollbars:!1,disableMouse:!0,interactiveScrollbars:!0}
 ,init:function(t){u=fp_utils.$,h=t;var i="ontouchstart"in l||0<navigator.msMaxTouchPoints||navigator.maxTouchPoints;return a.iscrollOptions.click=i,a.iscrollOptions=fp_utils.deepExtend(a.iscrollOptions,t.scrollOverflowOptions),(new r).init(t,a.iscrollOptions)}
 ,toggleWheel:function(s){u(n,u(e)[0]).forEach(function(t){var i=t.fp_iscrollInstance;null!=i&&(s?i.wheelOn():i.wheelOff())}
 )}
 ,onLeave:function(){a.toggleWheel(!1)}
 ,beforeLeave:function(){a.onLeave()}
 ,afterLoad:function(){a.toggleWheel(!0)}
 ,create:function(s,e,o){u(n,s).forEach(function(t){fp_utils.css(t,{height:e+"px"}
 );var i=t.fp_iscrollInstance;null!=i&&a.iScrollInstances.forEach(function(t){t.destroy()}
 ),i=new IScroll(t,o),a.iScrollInstances.push(i),fp_utils.hasClass(fp_utils.closest(s,p),"active")||i.wheelOff(),t.fp_iscrollInstance=i}
 )}
 ,isScrolled:function(t,i){var s=i.fp_iscrollInstance;return!s||("top"===t?0<=s.y&&!fp_utils.getScrollTop(i):"bottom"===t?0-s.y+fp_utils.getScrollTop(i)+1+i.offsetHeight>=i.scrollHeight:void 0)}
 ,scrollable:function(t){return u(".fp-slides",t).length?u(n,u(".fp-slide.active",t)[0])[0]:u(n,t)[0]}
 ,scrollHeight:function(t){return u(".fp-scroller",u(n,t)[0])[0].scrollHeight}
 ,remove:function(t){if(null!=t){var i=u(n,t)[0];if(null!=i){var s=i.fp_iscrollInstance;null!=s&&s.destroy(),i.fp_iscrollInstance=null,fp_utils.unwrap(u(".fp-scroller",t)[0]),fp_utils.unwrap(u(n,t)[0])}
}
}
 ,update:function(t,i){clearTimeout(a.refreshId),a.refreshId=setTimeout(function(){a.iScrollInstances.forEach(function(t){t.refresh(),fullpage_api.silentMoveTo(fp_utils.index(u(e)[0])+1)}
 )}
 ,150),fp_utils.css(u(n,t)[0],{height:i+"px"}
 ),h.verticalCentered&&fp_utils.css(u(n,t)[0].parentNode,{height:i+"px"}
 )}
 ,wrapContent:function(){var t=f.createElement("div");t.className=s;var i=f.createElement("div");return i.className="fp-scroller",{scrollable:t,scroller:i}
}
}
 ;return{iscrollHandler:a}
}
 ()}
 (window,document);
 ;
 /*!
  * fullpage.js Reset Scroll Overflow 0.0.2 for fullPage.js v3
  * https://github.com/alvarotrigo/fullPage.js
  *
  * @license This code has been bought from www.alvarotrigo.com/fullPage/extensions/ and it is not free to use or distribute.
  * Copyright (C) 2016 alvarotrigo.com - A project by Alvaro Trigo
  */
 window.fp_scrollOverflowResetExtension=function(){var e=this,l=(fp_utils,fp_utils.$),t=fullpage_api.getFullpageData().internals;e.reset=function(){if(e.prevDestiny){var t=l(".fp-scrollable",e.prevDestiny);null!=t&&t.forEach(function(e){var l=e.fp_iscrollInstance;null!=l&&l.scrollTo(0,0)}
 )}
}
 ,e.setPrevious=function(l){e.prevDestiny=l}
 ,e.c=t.c;var n=e["common".charAt(0)];return"complete"===document.readyState&&n("scrollOverflowReset"),window.addEventListener("load",function(){n("scrollOverflowReset")}
 ),e}
 ;
 /*!
  * fullPage 3.0.5 - Extensions 0.1.8
  * https://github.com/alvarotrigo/fullPage.js
  * @license http://alvarotrigo.com/fullPage/extensions/#license
  *
  * Copyright (C) 2018 alvarotrigo.com - A project by Alvaro Trigo
  */
 !function(e,t,n,o,r){"function"==typeof define&&define.amd?define(function(){return e.fullpage=o(t,n),e.fullpage}
 ):"object"==typeof exports?module.exports=o(t,n):t.fullpage=o(t,n)}
 (this,window,document,function(Ut,_t){"use strict";var Qt="fullpage-wrapper",Jt="."+Qt,Kt="fp-responsive",$t="fp-notransition",qt="fp-destroyed",en="fp-enabled",tn="fp-viewing",nn="active",on="."+nn,rn="fp-completely",ln="fp-section",an="."+ln,sn=an+on,cn="fp-tableCell",un="."+cn,dn="fp-auto-height",fn="fp-normal-scroll",vn="fp-nav",pn="#"+vn,hn="fp-tooltip",gn="fp-slide",mn="."+gn,Sn=mn+on,bn="fp-slides",yn="."+bn,wn="fp-slidesContainer",En="."+wn,xn="fp-table",An="fp-slidesNav",Ln="."+An,Mn=Ln+" a",e="fp-controlArrow",Tn="."+e,On="fp-prev",kn=Tn+".fp-prev",Cn=Tn+".fp-next";function Hn(e,t){Ut.console&&Ut.console[e]&&Ut.console[e]/*("fullPage: "+t)*/}
 function Rn(e,t){return(t=1<arguments.length?t:_t)?t.querySelectorAll(e):null}
 function In(e){e=e||{}
 ;for(var t=1,n=arguments.length;t<n;++t){var o=arguments[t];if(o)for(var r in o)o.hasOwnProperty(r)&&("[object Object]"!==Object.prototype.toString.call(o[r])?e[r]=o[r]:e[r]=In(e[r],o[r]))}
 return e}
 function zn(e,t){return null!=e&&(e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className))}
 function Bn(){return"innerHeight"in Ut?Ut.innerHeight:_t.documentElement.offsetHeight}
 function Nn(e,t){var n;for(n in e=l(e),t)if(t.hasOwnProperty(n)&&null!==n)for(var o=0;o<e.length;o++){e[o].style[n]=t[n]}
 return e}
 function n(e,t,n){for(var o=e[n];o&&!io(o,t);)o=o[n];return o}
 function jn(e,t){return n(e,t,"previousElementSibling")}
 function Pn(e,t){return n(e,t,"nextElementSibling")}
 function Wn(e,t){if(null==t)return e.previousElementSibling;var n=Wn(e);return n&&io(n,t)?n:null}
 function Yn(e,t){if(null==t)return e.nextElementSibling;var n=Yn(e);return n&&io(n,t)?n:null}
 function Dn(e){return e[e.length-1]}
 function Xn(e,t){e=i(e)?e[0]:e;for(var n=null!=t?Rn(t,e.parentNode):e.parentNode.childNodes,o=0,r=0;r<n.length;r++){if(n[r]==e)return o;1==n[r].nodeType&&o++}
 return-1}
 function l(e){return i(e)?e:[e]}
 function Vn(e){e=l(e);for(var t=0;t<e.length;t++)e[t].style.display="none";return e}
 function Zn(e){e=l(e);for(var t=0;t<e.length;t++)e[t].style.display="block";return e}
 function i(e){return"[object Array]"===Object.prototype.toString.call(e)||"[object NodeList]"===Object.prototype.toString.call(e)}
 function Gn(e,t){e=l(e);for(var n=0;n<e.length;n++){var o=e[n];o.classList?o.classList.add(t):o.className+=" "+t}
 return e}
 function Fn(e,t){e=l(e);for(var n=t.split(" "),o=0;o<n.length;o++){t=n[o];for(var r=0;r<e.length;r++){var i=e[r];i.classList?i.classList.remove(t):i.className=i.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}
}
 return e}
 function Un(e,t){t.appendChild(e)}
 function o(e,t,n){var o;t=t||_t.createElement("div");for(var r=0;r<e.length;r++){var i=e[r];(n&&!r||!n)&&(o=t.cloneNode(!0),i.parentNode.insertBefore(o,i)),o.appendChild(i)}
 return e}
 function _n(e,t){o(e,t,!0)}
 function Qn(e,t){for("string"==typeof t&&(t=ao(t)),e.appendChild(t);e.firstChild!==t;)t.appendChild(e.firstChild)}
 function Jn(e){for(var t=_t.createDocumentFragment();e.firstChild;)t.appendChild(e.firstChild);e.parentNode.replaceChild(t,e)}
 function Kn(e,t){return e&&1===e.nodeType?io(e,t)?e:Kn(e.parentNode,t):null}
 function $n(e,t){r(e,e.nextSibling,t)}
 function qn(e,t){r(e,e,t)}
 function r(e,t,n){i(n)||("string"==typeof n&&(n=ao(n)),n=[n]);for(var o=0;o<n.length;o++)e.parentNode.insertBefore(n[o],t)}
 function eo(){var e=_t.documentElement;return(Ut.pageYOffset||e.scrollTop)-(e.clientTop||0)}
 function to(t){return Array.prototype.filter.call(t.parentNode.children,function(e){return e!==t}
 )}
 function no(e){e.preventDefault?e.preventDefault():e.returnValue=!1}
 function oo(e){if("function"==typeof e)return!0;var t=Object.prototype.toString(e);return"[object Function]"===t||"[object GeneratorFunction]"===t}
 function ro(e,t,n){var o;n=void 0===n?{}
 :n,"function"==typeof Ut.CustomEvent?o=new CustomEvent(t,{detail:n}
    ):(o=_t.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,n),e.dispatchEvent(o)}
 function io(e,t){return(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,t)}
 function lo(e,t){if("boolean"==typeof t)for(var n=0;n<e.length;n++)e[n].style.display=t?"block":"none";return e}
 function ao(e){var t=_t.createElement("div");return t.innerHTML=e.trim(),t.firstChild}
 function so(e){e=l(e);for(var t=0;t<e.length;t++){var n=e[t];n&&n.parentElement&&n.parentNode.removeChild(n)}
}
 function a(e,t,n){for(var o=e[n],r=[];o;)(io(o,t)||null==t)&&r.push(o),o=o[n];return r}
 function co(e,t){return a(e,t,"nextElementSibling")}
 function uo(e,t){return a(e,t,"previousElementSibling")}
 function fo(e,t){e.insertBefore(t,e.firstChild)}
 return Ut.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||Ut;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)}
 ),Ut.fp_utils={$:Rn,deepExtend:In,hasClass:zn,getWindowHeight:Bn,css:Nn,until:n,prevUntil:jn,nextUntil:Pn,prev:Wn,next:Yn,last:Dn,index:Xn,getList:l,hide:Vn,show:Zn,isArrayOrList:i,addClass:Gn,removeClass:Fn,appendTo:Un,wrap:o,wrapAll:_n,wrapInner:Qn,unwrap:Jn,closest:Kn,after:$n,before:qn,insertBefore:r,getScrollTop:eo,siblings:to,preventDefault:no,isFunction:oo,trigger:ro,matches:io,toggle:lo,createElementFromHTML:ao,remove:so,filter:function(e,t){Array.prototype.filter.call(e,t)}
 ,untilAll:a,nextAll:co,prevAll:uo,showError:Hn,prependTo:fo,toggleClass:function(e,t,n){if(e.classList&&null==n)e.classList.toggle(t);else{var o=zn(e,t);o&&null==n||!n?Fn(e,t):(!o&&null==n||n)&&Gn(e,t)}
}
}
 ,function(e,g){var t=g&&new RegExp("([\\d\\w]{8}    -){3} [\\d\\w]{8} |^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,} $").test(g.licenseKey)||-1<_t.domain.indexOf("alvarotrigo.com");if(!zn(Rn("html"),en)){var r=Rn("html, body"),m=Rn("body")[0],S={}
 ;g=In({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowHandler:Ut.fp_scrolloverflow?Ut.fp_scrolloverflow.iscrollHandler:null,scrollOverflowOptions:null,touchSensitivity:5,touchWrapper:"string"==typeof e?Rn(e)[0]:e,normalScrollElementTouchThreshold:5,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"}
 ,cards:!1,cardsOptions:{perspective:100,fadeContent:!0,fadeBackground:!0}
 ,sectionSelector:".section",slideSelector:".slide",v2compatible:!1,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0}
 ,g);var b,l,c,n,a=!1,o=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),i="ontouchstart"in Ut||0<navigator.msMaxTouchPoints||navigator.maxTouchPoints,y="string"==typeof e?Rn(e)[0]:e,w=Bn(),E=!1,s=!0,x=!0,u=[],d={m:{up:!0,down:!0,left:!0,right:!0}
}
 ;d.k=In({}
    ,d.m);var f,v,p,h,A,L,M,T,O=kt(),k={touchmove:"ontouchmove"in Ut?"touchmove":O.move,touchstart:"ontouchstart"in Ut?"touchstart":O.down}
 ,C=!1,H='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',R=!1;try{var I=Object.defineProperty({}
    ,"passive",{get:function(){R=!0}
}
 );Ut.addEventListener("testPassive",null,I),Ut.removeEventListener("testPassive",null,I)}
 catch(e){}
 var z,B=In({}
    ,g),N=!1,j=!0,P={}
 ;Dt(),Ut.fp_easings=In(Ut.fp_easings,{easeInOutCubic:function(e,t,n,o){return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t}
}
 ),y&&(S.version="3.0.5",S.setAutoScrolling=K,S.setRecordHistory=$,S.setScrollingSpeed=q,S.setFitToSection=ee,S.setLockAnchors=function(e){g.lockAnchors=e}
 ,S.setMouseWheelScrolling=te,S.setAllowScrolling=ne,S.setKeyboardScrolling=re,S.moveSectionUp=ie,S.moveSectionDown=le,S.silentMoveTo=ae,S.moveTo=se,S.moveSlideRight=ce,S.moveSlideLeft=ue,S.fitToSection=xe,S.reBuild=de,S.setResponsive=fe,S.getFullpageData=function(){return{options:g,internals:{container:y,canScroll:x,isScrollAllowed:d,getDestinationPosition:Ie,isTouch:i,c:Je,getXmovement:St,removeAnimation:ht,getTransforms:It,lazyLoad:De,addAnimation:pt,performHorizontalMove:dt,landscapeScroll:st,silentLandscapeScroll:Ht,keepSlidesPosition:Re,silentScroll:Rt,styleSlides:me,styleSection:be,scrollHandler:Ee,getEventsPage:Ct,getMSPointer:kt,isReallyTouch:Te,usingExtension:Nt,toggleControlArrows:ct,touchStartHandler:Oe,touchMoveHandler:Me}
}
}
 ,S.destroy=function(e){ro(y,"destroy",e),K(!1,"internal"),ne(!0),oe(!1),re(!1),Gn(y,qt),clearTimeout(h),clearTimeout(p),clearTimeout(v),clearTimeout(A),clearTimeout(L),Ut.removeEventListener("scroll",Ee),Ut.removeEventListener("hashchange",qe),Ut.removeEventListener("resize",ft),_t.removeEventListener("keydown",tt),_t.removeEventListener("keyup",nt),["click","touchstart"].forEach(function(e){_t.removeEventListener(e,ve)}
 ),["mouseenter","touchstart","mouseleave","touchend"].forEach(function(e){_t.removeEventListener(e,he,!0)}
 ),Nt("dragAndMove")&&S.dragAndMove.destroy(),clearTimeout(h),clearTimeout(p),e&&(Rt(0),Rn("img[data-src], source[data-src], audio[data-src], iframe[data-src]",y).forEach(function(e){Ye(e,"src")}
 ),Rn("img[data-srcset]").forEach(function(e){Ye(e,"srcset")}
 ),so(Rn(pn+", "+Ln+", "+Tn)),Nn(Rn(an),{height:"","background-color":"",padding:""}
 ),Nn(Rn(mn),{width:""}
 ),Nn(y,{height:"",position:"","-ms-touch-action":"","touch-action":""}
 ),Nn(r,{overflow:"",height:""}
 ),Fn(Rn("html"),en),Fn(m,Kt),m.className.split(/\s+/).forEach(function(e){0===e.indexOf(tn)&&Fn(m,e)}
 ),Rn(an+", "+mn).forEach(function(e){g.scrollOverflowHandler&&g.scrollOverflow&&g.scrollOverflowHandler.remove(e),Fn(e,xn+" "+nn+" "+rn);var t=e.getAttribute("data-fp-styles");t&&e.setAttribute("style",e.getAttribute("data-fp-styles")),zn(e,ln)&&!N&&e.removeAttribute("data-anchor")}
 ),Bt(y),[un,En,yn].forEach(function(e){Rn(e,y).forEach(function(e){Jn(e)}
 )}
 ),Ut.scrollTo(0,0),[ln,gn,wn].forEach(function(e){Fn(Rn("."+e),e)}
 ))}
 ,S.getActiveSection=function(){return new Gt(Rn(sn)[0])}
 ,S.getActiveSlide=function(){return je(Rn(Sn,Rn(sn)[0])[0])}
 ,S.landscapeScroll=st,S.test={top:"0px",translate3d:"translate3d(0px, 0px, 0px)",translate3dH:function(){for(var e=[],t=0;t<Rn(g.sectionSelector,y).length;t++)e.push("translate3d(0px, 0px, 0px)");return e}
 (),left:function(){for(var e=[],t=0;t<Rn(g.sectionSelector,y).length;t++)e.push(0);return e}
 (),options:g,setAutoScrolling:K}
 ,S.shared={afterRenderActions:we}
 ,Ut.fullpage_api=S,g.$&&(g.$.fn.fullpage=S),ge("continuousHorizontal"),ge("scrollHorizontally"),ge("resetSliders"),ge("interlockedSlides"),ge("responsiveSlides"),ge("fadingEffect"),ge("dragAndMove"),ge("offsetSections"),ge("scrollOverflowReset"),ge("parallax"),ge("cards"),Nt("dragAndMove")&&S.dragAndMove.init(),g.css3&&(g.css3=function(){var e,t=_t.createElement("p"),n={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"}
 ;for(var o in t.style.display="block",_t.body.insertBefore(t,null),n)void 0!==t.style[o]&&(t.style[o]="translate3d(1px,1px,1px)",e=Ut.getComputedStyle(t).getPropertyValue(n[o]));return _t.body.removeChild(t),void 0!==e&&0<e.length&&"none"!==e}
 ()),g.scrollBar=g.scrollBar||g.hybrid,function(){if(!g.anchors.length){var e="[data-anchor]",t=Rn(g.sectionSelector.split(",").join(e+",")+e,y);t.length&&(N=!0,t.forEach(function(e){g.anchors.push(e.getAttribute("data-anchor").toString())}
 ))}
 if(!g.navigationTooltips.length){var e="[data-tooltip]",n=Rn(g.sectionSelector.split(",").join(e+",")+e,y);n.length&&n.forEach(function(e){g.navigationTooltips.push(e.getAttribute("data-tooltip").toString())}
 )}
}
 (),function(){Nn(y,{height:"100%",position:"relative"}
 ),Gn(y,Qt),Gn(Rn("html"),en),w=Bn(),Fn(y,qt),Gn(Rn(g.sectionSelector,y),ln),Gn(Rn(g.slideSelector,y),gn),jt("parallax","init");for(var e=Rn(an),t=0;t<e.length;t++){var n=t,o=e[t],r=Rn(mn,o),i=r.length;o.setAttribute("data-fp-styles",o.getAttribute("style")),be(o,n),l=o,a=n,void 0!==g.anchors[a]&&zn(l,nn)&&gt(g.anchors[a],a),g.menu&&g.css3&&null!=Kn(Rn(g.menu)[0],Jt)&&Rn(g.menu).forEach(function(e){m.appendChild(e)}
 ),0<i?me(o,r,i):g.verticalCentered&&bt(o)}
 var l,a;g.fixedElements&&g.css3&&Rn(g.fixedElements).forEach(function(e){m.appendChild(e)}
 ),g.navigation&&function(){var e=_t.createElement("div");e.setAttribute("id",vn);var t=_t.createElement("ul");e.appendChild(t),Un(e,m);var n=Rn(pn)[0];Gn(n,"fp-"+g.navigationPosition),g.showActiveTooltip&&Gn(n,"fp-show-active");for(var o="",r=0;r<Rn(an).length;r++){var i="";g.anchors.length&&(i=g.anchors[r]),o+='<li><a href="#'+i+'"><span class="fp-sr-only">'+ye(r,"Section")+"</span><span></span></a>";var l=g.navigationTooltips[r];void 0!==l&&""!==l&&(o+='<div class="'+hn+" fp-"+g.navigationPosition+'">'+l+"</div>"),o+="</li>"}
 Rn("ul",n)[0].innerHTML=o,Nn(Rn(pn),{"margin-top":"-"+Rn(pn)[0].offsetHeight/2+"px"}
 ),Gn(Rn("a",Rn("li",Rn(pn)[0])[Xn(Rn(sn)[0],an)]),nn)}
 (),Rn('iframe[src*="youtube.com/embed/"]',y).forEach(function(e){var t,n,o;n="enablejsapi=1",o=(t=e).getAttribute("src"),t.setAttribute("src",o+(/\?/.test(o)?"&":"?")+n)}
 ),g.fadingEffect&&S.fadingEffect&&S.fadingEffect.apply(),Nt("cards")&&S.cards.init(),g.scrollOverflow&&(f=g.scrollOverflowHandler.init(g))}
 (),ne(!0),oe(!0),K(g.autoScrolling,"internal"),vt(),Ot(),"complete"===_t.readyState&&$e(),Ut.addEventListener("load",$e),g.scrollOverflow||we(),Ut.addEventListener("scroll",Ee),Ut.addEventListener("hashchange",qe),Ut.addEventListener("blur",lt),Ut.addEventListener("resize",ft),_t.addEventListener("keydown",tt),_t.addEventListener("keyup",nt),["click","touchstart"].forEach(function(e){_t.addEventListener(e,ve)}
 ),g.normalScrollElements&&(["mouseenter","touchstart"].forEach(function(e){pe(e,!1)}
 ),["mouseleave","touchend"].forEach(function(e){pe(e,!0)}
 )),Nt("dragAndMove")&&S.dragAndMove.turnOffTouch());var W,Y,D,X=!1,V=0,Z=0,G=0,F=0,U=(new Date).getTime(),_=0,Q=0,J=w;return S}
 function K(e,t){e||Rt(0),Yt("autoScrolling",e,t);var n=Rn(sn)[0];if(g.autoScrolling&&!g.scrollBar)Nn(r,{overflow:"hidden",height:"100%"}
 ),$(B.recordHistory,"internal"),Nn(y,{"-ms-touch-action":"none","touch-action":"none"}
 ),null!=n&&Rt(n.offsetTop);else if(Nn(r,{overflow:"visible",height:"initial"}
 ),$(!!g.autoScrolling&&B.recordHistory,"internal"),Nn(y,{"-ms-touch-action":"","touch-action":""}
 ),Bt(y),null!=n){var o=Pe(n.offsetTop);o.element.scrollTo(0,o.options)}
 ro(y,"setAutoScrolling",e)}
 function $(e,t){Yt("recordHistory",e,t)}
 function q(e,t){"internal"!==t&&Nt("fadingEffect")&&S.fadingEffect.update(e),Nt("cards")&&S.cards.update(e),Yt("scrollingSpeed",e,t)}
 function ee(e,t){Yt("fitToSection",e,t)}
 function te(e){e?(function(){var e,t="";Ut.addEventListener?e="addEventListener":(e="attachEvent",t="on");var n="onwheel"in _t.createElement("div")?"wheel":void 0!==_t.onmousewheel?"mousewheel":"DOMMouseScroll",o=!!R&&{passive:!1}
 ;"DOMMouseScroll"==n?_t[e](t+"MozMousePixelScroll",Ce,o):_t[e](t+n,Ce,o)}
 (),y.addEventListener("mousedown",ot),y.addEventListener("mouseup",rt)):(_t.addEventListener?(_t.removeEventListener("mousewheel",Ce,!1),_t.removeEventListener("wheel",Ce,!1),_t.removeEventListener("MozMousePixelScroll",Ce,!1)):_t.detachEvent("onmousewheel",Ce),y.removeEventListener("mousedown",ot),y.removeEventListener("mouseup",rt))}
 function ne(t,e){void 0!==e?(e=e.replace(/ /g,"").split(",")).forEach(function(e){zt(t,e,"m")}
 ):zt(t,"all","m"),ro(y,"setAllowScrolling",{value:t,directions:e}
 )}
 function oe(e){e?(te(!0),function(){if(o||i){g.autoScrolling&&(m.removeEventListener(k.touchmove,Le,{passive:!1}
    ),m.addEventListener(k.touchmove,Le,{passive:!1}
    ));var e=g.touchWrapper;e.removeEventListener(k.touchstart,Oe),e.removeEventListener(k.touchmove,Me,{passive:!1}
    ),e.addEventListener(k.touchstart,Oe),e.addEventListener(k.touchmove,Me,{passive:!1}
    )}
}
 ()):(te(!1),function(){if(o||i){g.autoScrolling&&(m.removeEventListener(k.touchmove,Me,{passive:!1}
    ),m.removeEventListener(k.touchmove,Le,{passive:!1}
    ));var e=g.touchWrapper;e.removeEventListener(k.touchstart,Oe),e.removeEventListener(k.touchmove,Me,{passive:!1}
    )}
}
 ())}
 function re(t,e){void 0!==e?(e=e.replace(/ /g,"").split(",")).forEach(function(e){zt(t,e,"k")}
 ):(zt(t,"all","k"),g.keyboardScrolling=t)}
 function ie(){var e=jn(Rn(sn)[0],an);e||!g.loopTop&&!g.continuousVertical||(e=Dn(Rn(an))),null!=e&&ze(e,null,!0)}
 function le(){var e=Pn(Rn(sn)[0],an);e||!g.loopBottom&&!g.continuousVertical||(e=Rn(an)[0]),null!=e&&ze(e,null,!1)}
 function ae(e,t){q(0,"internal"),se(e,t),q(B.scrollingSpeed,"internal")}
 function se(e,t){var n=Et(e);void 0!==t?xt(e,t):null!=n&&ze(n)}
 function ce(e){He("right",e)}
 function ue(e){He("left",e)}
 function de(e){if(!zn(y,qt)){E=!0,w=Bn();for(var t=Rn(an),n=0;n<t.length;++n){var o=t[n],r=Rn(yn,o)[0],i=Rn(mn,o);g.verticalCentered&&Nn(Rn(un,o),{height:yt(o)+"px"}
 ),Nn(o,{height:Se(o)+"px"}
 ),1<i.length&&st(r,Rn(Sn,r)[0])}
 g.scrollOverflow&&f.createScrollBarForAll();var l=Xn(Rn(sn)[0],an);l&&!Nt("fadingEffect")&&ae(l+1),E=!1,oo(g.afterResize)&&e&&g.afterResize.call(y,Ut.innerWidth,Ut.innerHeight),oo(g.afterReBuild)&&!e&&g.afterReBuild.call(y),ro(y,"afterRebuild")}
}
 function fe(e){var t=zn(m,Kt);e?t||(K(!1,"internal"),ee(!1,"internal"),Vn(Rn(pn)),Gn(m,Kt),oo(g.afterResponsive)&&g.afterResponsive.call(y,e),g.responsiveSlides&&S.responsiveSlides&&S.responsiveSlides.toSections(),ro(y,"afterResponsive",e),g.scrollOverflow&&f.createScrollBarForAll()):t&&(K(B.autoScrolling,"internal"),ee(B.autoScrolling,"internal"),Zn(Rn(pn)),Fn(m,Kt),oo(g.afterResponsive)&&g.afterResponsive.call(y,e),g.responsiveSlides&&S.responsiveSlides&&S.responsiveSlides.toSlides(),ro(y,"afterResponsive",e))}
 function ve(e){var t=e.target;t&&Kn(t,pn+" a")?function(e){no(e);var t=Xn(Kn(this,pn+" li"));ze(Rn(an)[t])}
 .call(t,e):io(t,".fp-tooltip")?function(){ro(Wn(this),"click")}
 .call(t):io(t,Tn)?function(){var e=Kn(this,an);zn(this,On)?d.m.left&&ue(e):d.m.right&&ce(e)}
 .call(t,e):io(t,Mn)||null!=Kn(t,Mn)?function(e){no(e);var t=Rn(yn,Kn(this,an))[0],n=Rn(mn,t)[Xn(Kn(this,"li"))];st(t,n)}
 .call(t,e):Kn(t,g.menu+" [data-menuanchor]")&&function(e){!Rn(g.menu)[0]||!g.lockAnchors&&g.anchors.length||(no(e),se(this.getAttribute("data-menuanchor")))}
 .call(t,e)}
 function pe(e,t){_t["fp_"+e]=t,_t.addEventListener(e,he,!0)}
 function he(t){t.target!=_t&&("touchend"===t.type&&(j=!1,setTimeout(function(){j=!0}
 ,800)),("mouseenter"!==t.type||j)&&g.normalScrollElements.split(",").forEach(function(e){null!=Kn(t.target,e)&&oe(_t["fp_"+t.type])}
 ))}
 function ge(e){var t="fp_"+e+"Extension";P[e]=g[e+"Key"],S[e]=void 0!==Ut[t]?new Ut[t]:null,S[e]&&S[e].c(e)}
 function me(e,t,n){var o=100*n,r=100/n,i=_t.createElement("div");i.className=bn,_n(t,i);var l,a,s=_t.createElement("div");s.className=wn,_n(t,s),Nn(Rn(En,e),{width:o+"%"}
 ),1<n&&(g.controlArrows&&(l=e,a=[ao('<div class="fp-controlArrow fp-prev"></div>'),ao('<div class="fp-controlArrow fp-next"></div>')],$n(Rn(yn,l)[0],a),"#fff"!==g.controlArrowColor&&(Nn(Rn(Cn,l),{"border-color":"transparent transparent transparent "+g.controlArrowColor}
 ),Nn(Rn(kn,l),{"border-color":"transparent "+g.controlArrowColor+" transparent transparent"}
 )),g.loopHorizontal||Vn(Rn(kn,l))),g.slidesNavigation&&function(e,t){Un(ao('<div class="'+An+'"><ul></ul></div>'),e);var n=Rn(Ln,e)[0];Gn(n,"fp-"+g.slidesNavPosition);for(var o=0;o<t;o++)Un(ao('<li><a href="#"><span class="fp-sr-only">'+ye(o,"Slide")+"</span><span></span></a></li>"),Rn("ul",n)[0]);Nn(n,{"margin-left":"-"+n.innerWidth/2+"px"}
 ),Gn(Rn("a",Rn("li",n)[0]),nn)}
 (e,n)),t.forEach(function(e){Nn(e,{width:r+"%"}
 ),g.verticalCentered&&bt(e)}
 );var c=Rn(Sn,e)[0];null!=c&&(0!==Xn(Rn(sn),an)||0===Xn(Rn(sn),an)&&0!==Xn(c))?(Ht(c,"internal"),Gn(c,"fp-initial")):Gn(t[0],nn)}
 function Se(e){return g.offsetSections&&S.offsetSections?Math.round(S.offsetSections.getWindowHeight(e)):Bn()}
 function be(e,t){t||null!=Rn(sn)[0]||Gn(e,nn),n=Rn(sn)[0],Nn(e,{height:Se(e)+"px"}
 ),g.paddingTop&&Nn(e,{"padding-top":g.paddingTop}
 ),g.paddingBottom&&Nn(e,{"padding-bottom":g.paddingBottom}
 ),void 0!==g.sectionsColor[t]&&Nn(e,{"background-color":g.sectionsColor[t]}
 ),void 0!==g.anchors[t]&&e.setAttribute("data-anchor",g.anchors[t])}
 function ye(e,t){return g.navigationTooltips[e]||g.anchors[e]||t+" "+(e+1)}
 function we(){var e,t=Rn(sn)[0];Gn(t,rn),De(t),Xe(t),g.scrollOverflow&&g.scrollOverflowHandler.afterLoad(),(!(e=Et(et().section))||void 0!==e&&Xn(e)===Xn(n))&&oo(g.afterLoad)&&Be("afterLoad",{activeSection:null,element:t,direction:null,anchorLink:t.getAttribute("data-anchor"),sectionIndex:Xn(t,an)}
 ),oo(g.afterRender)&&Be("afterRender"),ro(y,"afterRender")}
 function Ee(){var e;if(ro(y,"onScroll"),(!g.autoScrolling||g.scrollBar||Nt("dragAndMove"))&&!Wt()){var t=Nt("dragAndMove")?Math.abs(S.dragAndMove.getCurrentScroll()):eo(),n=0,o=t+Bn()/2,r=(Nt("dragAndMove")?S.dragAndMove.getDocumentHeight():m.offsetHeight-Bn())===t,i=Rn(an);if(r)n=i.length-1;else if(t)for(var l=0;l<i.length;++l)i[l].offsetTop<=o&&(n=l);else n=0;if(!zn(e=i[n],nn)){X=!0;var a,s,c=Rn(sn)[0],u=Xn(c,an)+1,d=mt(e),f=e.getAttribute("data-anchor"),v=Xn(e,an)+1,p=Rn(Sn,e)[0],h={activeSection:c,sectionIndex:v-1,anchorLink:f,element:e,leavingSection:u,direction:d}
 ;p&&(s=p.getAttribute("data-anchor"),a=Xn(p)),x&&(Gn(e,nn),Fn(to(e),nn),jt("parallax","afterLoad"),oo(g.onLeave)&&Be("onLeave",h),oo(g.afterLoad)&&Be("afterLoad",h),g.resetSliders&&S.resetSliders&&S.resetSliders.apply({localIsResizing:E,leavingSection:u}
    ),Ze(c),De(e),Xe(e),gt(f,v-1),g.anchors.length&&(b=f),Lt(a,s,f)),clearTimeout(A),A=setTimeout(function(){X=!1}
 ,100)}
 g.fitToSection&&(clearTimeout(L),L=setTimeout(function(){g.fitToSection&&Rn(sn)[0].offsetHeight<=w&&xe()}
 ,g.fitToSectionDelay))}
}
 function xe(){x&&(E=!0,ze(Rn(sn)[0]),E=!1)}
 function Ae(e){if(d.m[e]){var t="down"===e?le:ie;if(S.scrollHorizontally&&(t=S.scrollHorizontally.getScrollSection(e,t)),g.scrollOverflow){var n=g.scrollOverflowHandler.scrollable(Rn(sn)[0]),o="down"===e?"bottom":"top";if(null!=n){if(!g.scrollOverflowHandler.isScrolled(o,n))return!0;t()}
 else t()}
 else t()}
}
 function Le(e){g.autoScrolling&&Te(e)&&d.m.up&&no(e)}
 function Me(e){var t=Kn(e.target,an)||Rn(sn)[0];if(Te(e)){g.autoScrolling&&no(e);var n=Ct(e);G=n.y,F=n.x,Rn(yn,t).length&&Math.abs(Z-F)>Math.abs(V-G)?!a&&Math.abs(Z-F)>Ut.innerWidth/100*g.touchSensitivity&&(F<Z?d.m.right&&ce(t):d.m.left&&ue(t)):g.autoScrolling&&x&&Math.abs(V-G)>Ut.innerHeight/100*g.touchSensitivity&&(G<V?Ae("down"):V<G&&Ae("up"))}
}
 function Te(e){return void 0===e.pointerType||"mouse"!=e.pointerType}
 function Oe(e){if(g.fitToSection&&(z=!1),Te(e)){var t=Ct(e);V=t.y,Z=t.x}
}
 function ke(e,t){for(var n=0,o=e.slice(Math.max(e.length-t,1)),r=0;r<o.length;r++)n+=o[r];return Math.ceil(n/t)}
 function Ce(e){var t=(new Date).getTime(),n=zn(Rn(".fp-completely")[0],fn);if(!d.m.down&&!d.m.up)return no(e),!1;if(g.autoScrolling&&!c&&!n){var o=(e=e||Ut.event).wheelDelta||-e.deltaY||-e.detail,r=Math.max(-1,Math.min(1,o)),i=void 0!==e.wheelDeltaX||void 0!==e.deltaX,l=Math.abs(e.wheelDeltaX)<Math.abs(e.wheelDelta)||Math.abs(e.deltaX)<Math.abs(e.deltaY)||!i;149<u.length&&u.shift(),u.push(Math.abs(o)),g.scrollBar&&no(e);var a=t-U;if(U=t,200<a&&(u=[]),x&&!Pt()){var s=ke(u,10);ke(u,70)<=s&&l&&Ae(r<0?"down":"up")}
 return!1}
 g.fitToSection&&(z=!1)}
 function He(e,t){var n=null==t?Rn(sn)[0]:t,o=Rn(yn,n)[0];if(!(null==o||Pt()||a||Rn(mn,o).length<2)){var r=Rn(Sn,o)[0],i=null;if(null==(i="left"===e?jn(r,mn):Pn(r,mn))){if(!g.loopHorizontal)return;var l=to(r);i="left"===e?l[l.length-1]:l[0]}
 a=!S.test.isTesting,st(o,i,e)}
}
 function Re(){for(var e=Rn(Sn),t=0;t<e.length;t++)Ht(e[t],"internal")}
 function Ie(e){var t=e.offsetHeight,n=e.offsetTop,o=n,r=Nt("dragAndMove")&&S.dragAndMove.isGrabbing?S.dragAndMove.isScrollingDown():_<n,i=o-w+t,l=g.bigSectionsDestination;return w<t?(r||l)&&"bottom"!==l||(o=i):(r||E&&null==Yn(e))&&(o=i),g.offsetSections&&S.offsetSections&&(o=S.offsetSections.getSectionPosition(r,o,e)),_=o}
 function ze(e,t,n){if(null!=e){var o,r,i={element:e,callback:t,isMovementUp:n,dtop:Ie(e),yMovement:mt(e),anchorLink:e.getAttribute("data-anchor"),sectionIndex:Xn(e,an),activeSlide:Rn(Sn,e)[0],activeSection:Rn(sn)[0],leavingSection:Xn(Rn(sn),an)+1,localIsResizing:E}
 ;if(!(i.activeSection==e&&!E||g.scrollBar&&eo()===i.dtop&&!zn(e,dn))){if(null!=i.activeSlide&&(o=i.activeSlide.getAttribute("data-anchor"),r=Xn(i.activeSlide)),!i.localIsResizing){var l=i.yMovement;if(void 0!==n&&(l=n?"up":"down"),i.direction=l,oo(g.onLeave)&&!1===Be("onLeave",i))return}
 var a;jt("parallax","apply",i),jt("cards","apply",i),g.autoScrolling&&g.continuousVertical&&void 0!==i.isMovementUp&&(!i.isMovementUp&&"up"==i.yMovement||i.isMovementUp&&"down"==i.yMovement)&&((s=i).isMovementUp?qn(Rn(sn)[0],co(s.activeSection,an)):$n(Rn(sn)[0],uo(s.activeSection,an).reverse()),Rt(Rn(sn)[0].offsetTop),Re(),s.wrapAroundElements=s.activeSection,s.dtop=s.element.offsetTop,s.yMovement=mt(s.element),s.leavingSection=Xn(s.activeSection,an)+1,s.sectionIndex=Xn(s.element,an),ro(Rn(Jt)[0],"onContinuousVertical",s),i=s),Nt("scrollOverflowReset")&&S.scrollOverflowReset.setPrevious(i.activeSection),i.localIsResizing||Ze(i.activeSection),g.scrollOverflow&&g.scrollOverflowHandler.beforeLeave(),Gn(e,nn),Fn(to(e),nn),De(e),g.scrollOverflow&&g.scrollOverflowHandler.onLeave(),x=S.test.isTesting,Lt(r,o,i.anchorLink,i.sectionIndex),function(e){if(g.css3&&g.autoScrolling&&!g.scrollBar){var t="translate3d(0px, -"+Math.round(e.dtop)+"px, 0px)";wt(t,!0),g.scrollingSpeed?(clearTimeout(p),p=setTimeout(function(){We(e)}
 ,g.scrollingSpeed)):We(e)}
 else{var n=Pe(e.dtop);S.test.top=-e.dtop+"px",Xt(n.element,n.options,g.scrollingSpeed,function(){g.scrollBar?setTimeout(function(){We(e)}
 ,30):We(e)}
 )}
}
 (i),b=i.anchorLink,gt(i.anchorLink,null==(a=i).wrapAroundElements?a.sectionIndex:a.isMovementUp?Rn(an).length-1:0)}
}
 var s}
 function Be(e,t){var n,o,r,i,l=(o=e,r=t,(i=g.v2compatible?{afterRender:function(){return[y]}
 ,onLeave:function(){return[r.activeSection,r.leavingSection,r.sectionIndex+1,r.direction]}
 ,afterLoad:function(){return[r.element,r.anchorLink,r.sectionIndex+1]}
 ,afterSlideLoad:function(){return[r.destiny,r.anchorLink,r.sectionIndex+1,r.slideAnchor,r.slideIndex]}
 ,onSlideLeave:function(){return[r.prevSlide,r.anchorLink,r.sectionIndex+1,r.prevSlideIndex,r.direction,r.slideIndex]}
}
 :{afterRender:function(){return{section:Ne(Rn(sn)[0]),slide:je(Rn(Sn,Rn(sn)[0])[0])}
}
 ,onLeave:function(){return{origin:Ne(r.activeSection),destination:Ne(r.element),direction:r.direction}
}
 ,afterLoad:function(){return i.onLeave()}
 ,afterSlideLoad:function(){return{section:Ne(r.section),origin:je(r.prevSlide),destination:je(r.destiny),direction:r.direction}
}
 ,onSlideLeave:function(){return i.afterSlideLoad()}
}
 )[o]());if(g.v2compatible){if(!1===g[e].apply(l[0],l.slice(1)))return!1}
 else if(ro(y,e,l),!1===g[e].apply(l[Object.keys(l)[0]],(n=l,Object.keys(n).map(function(e){return n[e]}
 ))))return!1;return!0}
 function Ne(e){return e?new Gt(e):null}
 function je(e){return e?new Ft(e):null}
 function Pe(e){var t={}
 ;return g.autoScrolling&&!g.scrollBar?(t.options=-e,t.element=Rn(Jt)[0]):(t.options=e,t.element=Ut),t}
 function We(e){var t;null!=(t=e).wrapAroundElements&&(t.isMovementUp?qn(Rn(an)[0],t.wrapAroundElements):$n(Rn(an)[Rn(an).length-1],t.wrapAroundElements),Rt(Rn(sn)[0].offsetTop),Re(),t.sectionIndex=Xn(t.element,an),t.leavingSection=Xn(t.activeSection,an)+1),oo(g.afterLoad)&&!e.localIsResizing&&Be("afterLoad",e),g.scrollOverflow&&g.scrollOverflowHandler.afterLoad(),jt("parallax","afterLoad"),Nt("scrollOverflowReset")&&S.scrollOverflowReset.reset(),Nt("resetSliders")&&S.resetSliders.apply(e),e.localIsResizing||Xe(e.element),Gn(e.element,rn),Fn(to(e.element),rn),x=!0,oo(e.callback)&&e.callback()}
 function Ye(e,t){e.setAttribute(t,e.getAttribute("data-"+t)),e.removeAttribute("data-"+t)}
 function De(e){g.lazyLoading&&Rn("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",Ge(e)).forEach(function(n){if(["src","srcset"].forEach(function(e){var t=n.getAttribute("data-"+e);null!=t&&t&&Ye(n,e)}
 ),io(n,"source")){var e=Kn(n,"video, audio");e&&e.load()}
}
 )}
 function Xe(e){var t=Ge(e);Rn("video, audio",t).forEach(function(e){e.hasAttribute("data-autoplay")&&"function"==typeof e.play&&e.play()}
 ),Rn('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){e.hasAttribute("data-autoplay")&&Ve(e),e.onload=function(){e.hasAttribute("data-autoplay")&&Ve(e)}
}
 )}
 function Ve(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}
 function Ze(e){var t=Ge(e);Rn("video, audio",t).forEach(function(e){e.hasAttribute("data-keepplaying")||"function"!=typeof e.pause||e.pause()}
 ),Rn('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){/youtube\.com\/embed\//.test(e.getAttribute("src"))&&!e.hasAttribute("data-keepplaying")&&e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}
 function Ge(e){var t=Rn(Sn,e);return t.length&&(e=t[0]),e}
 function Fe(e){var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function o(e){var t,n,o,r,i,l,a="",s=0;for(e=e.replace(/[^A-Za-z0-9+/=]/g,"");s<e.length;)t=c.indexOf(e.charAt(s++))<<2|(r=c.indexOf(e.charAt(s++)))>>4,n=(15&r)<<4|(i=c.indexOf(e.charAt(s++)))>>2,o=(3&i)<<6|(l=c.indexOf(e.charAt(s++))),a+=String.fromCharCode(t),64!=i&&(a+=String.fromCharCode(n)),64!=l&&(a+=String.fromCharCode(o));return a=function(e){for(var t,n="",o=0,r=0,i=0;o<e.length;)(r=e.charCodeAt(o))<128?(n+=String.fromCharCode(r),o++):191<r&&r<224?(i=e.charCodeAt(o+1),n+=String.fromCharCode((31&r)<<6|63&i),o+=2):(i=e.charCodeAt(o+1),t=e.charCodeAt(o+2),n+=String.fromCharCode((15&r)<<12|(63&i)<<6|63&t),o+=3);return n}
 (a)}
 function r(e){return e.slice(3).slice(0,-3)}
 return function(e){var t=e.split("_");if(1<t.length){var n=t[1];return e.replace(r(t[1]),"").split("_")[0]+"_"+o(n.slice(3).slice(0,-3))}
 return r(e)}
 (o(e))}
 function Ue(e){var t=function(){if(_t.domain.length){for(var e=_t.domain.replace(/^(www\.)/,"").split(".");2<e.length;)e.shift();return e.join(".").replace(/(^\.*)|(\.*$)/g,"")}
 return""}
 (),n=["MTM0bG9jYWxob3N0MjM0","MTM0MC4xMjM0","MTM0anNoZWxsLm5ldDIzNA==","UDdDQU5ZNlNN"],o=Fe(n[0]),r=Fe(n[1]),i=Fe(n[2]),l=Fe(n[3]),a=[o,r,i].indexOf(t)<0&&0!==t.length,s=void 0!==P[e]&&P[e].length;if(!s&&a)return!1;var c=s?Fe(P[e]):"",u=1<(c=c.split("_")).length&&-1<c[1].indexOf(e,c[1].length-e.length);return!(c[0].indexOf(t,c[0].length-t.length)<0&&a&&l!=c[0])&&u||!a}
 function _e(e){e.forEach(function(e){e.removedNodes[0]&&e.removedNodes[0].isEqualNode(Y)&&(clearTimeout(D),D=setTimeout(Qe,900))}
 )}
 function Qe(){C=!1}
 function Je(e){Y=_t.createElement("div"),W=Fe("MTIzPGRpdj48YSBocmVmPSJodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL2V4dGVuc2lvbnMvIiBzdHlsZT0iY29sb3I6ICNmZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDsiPlVubGljZW5zZWQgZnVsbFBhZ2UuanMgRXh0ZW5zaW9uPC9hPjwvZGl2PjEyMw=="),Y.innerHTML=W,Y=Y.firstChild,"MutationObserver"in Ut&&new MutationObserver(_e).observe(_t.body,{childList:!0,subtree:!1}
 ),Nt(e)&&S[e]&&(Ue(e)||(Ke(),setInterval(Ke,2e3)))}
 function Ke(){Y&&(C||(Math.random()<.5?fo(m,Y):Un(Y,m),C=!0),Y.setAttribute("style",Fe("MTIzei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O2JvdHRvbTphdXRvO2xlZnQ6MjBweDtyaWdodDphdXRvO2JhY2tncm91bmQ6cmVkO3BhZGRpbmc6N3B4IDE1cHg7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6YXJpYWw7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MTtoZWlnaHQ6YXV0bzt3aWR0aDphdXRvO3pvb206MTttYXJnaW46YXV0bztib3JkZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7Y2xpcC1wYXRoOm5vbmU7MTIz").replace(/;/g,Fe("MTIzICFpbXBvcnRhbnQ7MzQ1"))))}
 function $e(){var e=et(),t=e.section,n=e.slide;t&&(g.animateAnchor?xt(t,n):ae(t,n))}
 function qe(){if(!X&&!g.lockAnchors){var e=et(),t=e.section,n=e.slide,o=void 0===b,r=void 0===b&&void 0===n&&!a;if(t&&t.length){var i=!Nt("dragAndMove")||l;(t&&t!==b&&!o||r||!a&&l!=n&&i)&&xt(t,n)}
}
}
 function et(){var e,t,n=Ut.location.hash;if(n.length){var o=n.replace("#","").split("/"),r=-1<n.indexOf("#/");e=r?"/"+o[1]:decodeURIComponent(o[0]);var i=r?o[2]:o[1];i&&i.length&&(t=decodeURIComponent(i))}
 return{section:e,slide:t}
}
 function tt(e){clearTimeout(M);var t=_t.activeElement,n=e.keyCode;9===n?function(e){var t,n,o,r,i,l,a,s=e.shiftKey,c=_t.activeElement,u=it(Ge(Rn(sn)[0]));function d(e){return no(e),u[0]?u[0].focus():null}
 (t=e,n=it(_t),o=n.indexOf(_t.activeElement),r=t.shiftKey?o-1:o+1,i=n[r],l=je(Kn(i,mn)),a=Ne(Kn(i,an)),l||a)&&(c?null==Kn(c,sn+","+sn+" "+Sn)&&(c=d(e)):d(e),(!s&&c==u[u.length-1]||s&&c==u[0])&&no(e))}
 (e):io(t,"textarea")||io(t,"input")||io(t,"select")||"true"===t.getAttribute("contentEditable")||""===t.getAttribute("contentEditable")||!g.keyboardScrolling||!g.autoScrolling||(-1<[40,38,32,33,34].indexOf(n)&&no(e),c=e.ctrlKey,M=setTimeout(function(){!function(e){var t=e.shiftKey;if(x||!([37,39].indexOf(e.keyCode)<0))switch(e.keyCode){case 38:case 33:d.k.up&&ie();break;case 32:if(t&&d.k.up){ie();break}
 case 40:case 34:d.k.down&&le();break;case 36:d.k.up&&se(1);break;case 35:d.k.down&&se(Rn(an).length);break;case 37:d.k.left&&ue();break;case 39:d.k.right&&ce()}
}
 (e)}
 ,150))}
 function nt(e){s&&(c=e.ctrlKey)}
 function ot(e){2==e.which&&(Q=e.pageY,y.addEventListener("mousemove",at))}
 function rt(e){2==e.which&&y.removeEventListener("mousemove",at)}
 function it(e){return[].slice.call(Rn(H,e)).filter(function(e){return"-1"!==e.getAttribute("tabindex")&&null!==e.offsetParent}
 )}
 function lt(){c=s=!1}
 function at(e){x&&(e.pageY<Q&&d.m.up?ie():e.pageY>Q&&d.m.down&&le()),Q=e.pageY}
 function st(e,t,n){var o=Kn(e,an),r={slides:e,destiny:t,direction:n,destinyPos:{left:t.offsetLeft}
 ,slideIndex:Xn(t),section:o,sectionIndex:Xn(o,an),anchorLink:o.getAttribute("data-anchor"),slidesNav:Rn(Ln,o)[0],slideAnchor:Tt(t),prevSlide:Rn(Sn,o)[0],prevSlideIndex:Xn(Rn(Sn,o)[0]),localIsResizing:E}
 ;r.xMovement=St(r.prevSlideIndex,r.slideIndex),r.direction=r.direction?r.direction:r.xMovement,r.localIsResizing||(x=!1),jt("parallax","applyHorizontal",r),jt("cards","apply",r),g.onSlideLeave&&!r.localIsResizing&&"none"!==r.xMovement&&oo(g.onSlideLeave)&&!1===Be("onSlideLeave",r)?a=!1:(Gn(t,nn),Fn(to(t),nn),r.localIsResizing||(Ze(r.prevSlide),De(t)),ct(r),zn(o,nn)&&!r.localIsResizing&&Lt(r.slideIndex,r.slideAnchor,r.anchorLink,r.sectionIndex),S.continuousHorizontal&&S.continuousHorizontal.apply(r),Wt()?ut(r):dt(e,r,!0),g.interlockedSlides&&S.interlockedSlides&&(Nt("continuousHorizontal")&&void 0!==n&&n!==r.xMovement||S.interlockedSlides.apply(r)))}
 function ct(e){!g.loopHorizontal&&g.controlArrows&&(lo(Rn(kn,e.section),0!==e.slideIndex),lo(Rn(Cn,e.section),null!=Yn(e.destiny)))}
 function ut(e){var t,n;S.continuousHorizontal&&S.continuousHorizontal.afterSlideLoads(e),t=e.slidesNav,n=e.slideIndex,g.slidesNavigation&&null!=t&&(Fn(Rn(on,t),nn),Gn(Rn("a",Rn("li",t)[n]),nn)),e.localIsResizing||(jt("parallax","afterSlideLoads"),jt("scrollOverflowReset","setPrevious",e.prevSlide),jt("scrollOverflowReset","reset"),oo(g.afterSlideLoad)&&Be("afterSlideLoad",e),x=!0,Xe(e.destiny)),a=!1,Nt("interlockedSlides")&&S.interlockedSlides.apply(e)}
 function dt(e,t,n){var o=t.destinyPos;if(g.css3){var r="translate3d(-"+Math.round(o.left)+"px, 0px, 0px)";S.test.translate3dH[t.sectionIndex]=r,Nn(pt(Rn(En,e)),It(r)),h=setTimeout(function(){n&&ut(t)}
 ,g.scrollingSpeed)}
 else S.test.left[t.sectionIndex]=Math.round(o.left),Xt(e,Math.round(o.left),g.scrollingSpeed,function(){n&&ut(t)}
 )}
 function ft(){if(ro(y,"onResize"),vt(),o){var e=_t.activeElement;if(!io(e,"textarea")&&!io(e,"input")&&!io(e,"select")){var t=Bn();Math.abs(t-J)>20*Math.max(J,t)/100&&(v=setTimeout(function(){de(!0),J=t}
 ,navigator.userAgent.match("CriOS")?50:0))}
}
 else clearTimeout(v),v=setTimeout(function(){de(!0)}
 ,350)}
 function vt(){var e=g.responsive||g.responsiveWidth,t=g.responsiveHeight,n=e&&Ut.innerWidth<e,o=t&&Ut.innerHeight<t;e&&t?fe(n||o):e?fe(n):t&&fe(o)}
 function pt(e){var t="all "+g.scrollingSpeed+"ms "+g.easingcss3;return Fn(e,$t),Nn(e,{"-webkit-transition":t,transition:t}
 )}
 function ht(e){return Gn(e,$t)}
 function gt(e,t){var n,o,r,i;n=e,Rn(g.menu).forEach(function(e){g.menu&&null!=e&&(Fn(Rn(on,e),nn),Gn(Rn('[data-menuanchor="'+n+'"]',e),nn))}
 ),o=e,r=t,i=Rn(pn)[0],g.navigation&&null!=i&&"none"!==i.style.display&&(Fn(Rn(on,Rn(pn)[0]),nn),Gn(o?Rn('a[href="#'+o+'"]',Rn(pn)[0]):Rn("a",Rn("li",Rn(pn)[0])[r]),nn))}
 function mt(e){var t=Xn(Rn(sn)[0],an),n=Xn(e,an);return t==n?"none":n<t?"up":"down"}
 function St(e,t){return e==t?"none":t<e?"left":"right"}
 function bt(e){if(!zn(e,xn)){var t=_t.createElement("div");t.className=cn,t.style.height=yt(e)+"px",Gn(e,xn),Qn(e,t)}
}
 function yt(e){var t=Se(e);if(g.paddingTop||g.paddingBottom){var n=e;zn(n,ln)||(n=Kn(e,an)),t-=parseInt(getComputedStyle(n)["padding-top"])+parseInt(getComputedStyle(n)["padding-bottom"])}
 return t}
 function wt(e,t){t?pt(y):ht(y),clearTimeout(T),Nn(y,It(e)),S.test.translate3d=e,T=setTimeout(function(){Fn(y,$t)}
 ,10)}
 function Et(e){var t=Rn(an+'[data-anchor="'+e+'"]',y)[0];if(!t){var n=void 0!==e?e-1:0;t=Rn(an)[n]}
 return t}
 function xt(e,t){var n=Et(e);if(null!=n){var o,r,i,l=(null==(i=Rn(mn+'[data-anchor="'+(o=t)+'"]',r=n)[0])&&(o=void 0!==o?o:0,i=Rn(mn,r)[o]),i);Tt(n)===b||zn(n,nn)?At(l):ze(n,function(){At(l)}
 )}
}
 function At(e){null!=e&&st(Kn(e,yn),e)}
 function Lt(e,t,n,o){var r="";g.anchors.length&&!g.lockAnchors&&(e?(null!=n&&(r=n),null==t&&(t=e),Mt(r+"/"+(l=t))):(null!=e&&(l=t),Mt(n))),Ot()}
 function Mt(e){if(g.recordHistory)location.hash=e;else if(o||i)Ut.history.replaceState(void 0,void 0,"#"+e);else{var t=Ut.location.href.split("#")[0];Ut.location.replace(t+"#"+e)}
}
 function Tt(e){if(!e)return null;var t=e.getAttribute("data-anchor"),n=Xn(e);return null==t&&(t=n),t}
 function Ot(){var e=Rn(sn)[0],t=Rn(Sn,e)[0],n=Tt(e),o=Tt(t),r=String(n);t&&(r=r+"-"+o),r=r.replace("/","-").replace("#","");var i=new RegExp("\\b\\s?"+tn+"-[^\\s]+\\b","g");m.className=m.className.replace(i,""),Gn(m,tn+"-"+r)}
 function kt(){return Ut.PointerEvent?{down:"pointerdown",move:"pointermove"}
 :{down:"MSPointerDown",move:"MSPointerMove"}
}
 function Ct(e){var t=[];return t.y=void 0!==e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,t.x=void 0!==e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,i&&Te(e)&&g.scrollBar&&void 0!==e.touches&&(t.y=e.touches[0].pageY,t.x=e.touches[0].pageX),t}
 function Ht(e,t){q(0,"internal"),void 0!==t&&(E=!0),st(Kn(e,yn),e),void 0!==t&&(E=!1),q(B.scrollingSpeed,"internal")}
 function Rt(e){var t=Math.round(e);if(g.css3&&g.autoScrolling&&!g.scrollBar)wt("translate3d(0px, -"+t+"px, 0px)",!1);else if(g.autoScrolling&&!g.scrollBar)Nn(y,{top:-t+"px"}
 ),S.test.top=-t+"px";else{var n=Pe(t);Vt(n.element,n.options)}
}
 function It(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}
}
 function zt(t,e,n){"all"!==e?d[n][e]=t:Object.keys(d[n]).forEach(function(e){d[n][e]=t}
 )}
 function Bt(e){return Nn(e,{"-webkit-transition":"none",transition:"none"}
 )}
 function Nt(e){return null!==g[e]&&"[object Array]"===Object.prototype.toString.call(g[e])?g[e].length&&S[e]:g[e]&&S[e]}
 function jt(e,t,n){if(Nt(e))return S[e][t](n)}
 function Pt(){return Nt("dragAndMove")&&S.dragAndMove.isAnimating}
 function Wt(){return Nt("dragAndMove")&&S.dragAndMove.isGrabbing}
 function Yt(e,t,n){g[e]=t,"internal"!==n&&(B[e]=t)}
 function Dt(){t||(Hn("error","Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"),Hn("error","https://github.com/alvarotrigo/fullPage.js#options.")),zn(Rn("html"),en)?Hn("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(g.continuousVertical&&(g.loopTop||g.loopBottom)&&(g.continuousVertical=!1,Hn("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),!g.scrollOverflow||!g.scrollBar&&g.autoScrolling||Hn("warn","Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"),!g.continuousVertical||!g.scrollBar&&g.autoScrolling||(g.continuousVertical=!1,Hn("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),g.scrollOverflow&&null==g.scrollOverflowHandler&&(g.scrollOverflow=!1,Hn("error","The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),g.anchors.forEach(function(t){var e=[].slice.call(Rn("[name]")).filter(function(e){return e.getAttribute("name")&&e.getAttribute("name").toLowerCase()==t.toLowerCase()}
 ),n=[].slice.call(Rn("[id]")).filter(function(e){return e.getAttribute("id")&&e.getAttribute("id").toLowerCase()==t.toLowerCase()}
 );(n.length||e.length)&&(Hn("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."),n.length&&Hn("error",'"'+t+'" is is being used by another element `id` property'),e.length&&Hn("error",'"'+t+'" is is being used by another element `name` property'))}
 ))}
 function Xt(t,n,o,r){var e,i=(e=t).self!=Ut&&zn(e,bn)?e.scrollLeft:!g.autoScrolling||g.scrollBar?eo():e.offsetTop,l=n-i,a=0;z=!0;var s=function(){if(z){var e=n;a+=20,o&&(e=Ut.fp_easings[g.easing](a,i,l,o)),Vt(t,e),a<o?setTimeout(s,20):void 0!==r&&r()}
 else a<o&&r()}
 ;s()}
 function Vt(e,t){!g.autoScrolling||g.scrollBar||e.self!=Ut&&zn(e,bn)?e.self!=Ut&&zn(e,bn)?e.scrollLeft=t:e.scrollTo(0,t):e.style.top=t+"px"}
 function Zt(e,t){this.anchor=e.getAttribute("data-anchor"),this.item=e,this.index=Xn(e,t),this.isLast=this.index===e.parentElement.querySelectorAll(t).length-1,this.isFirst=!this.index}
 function Gt(e){Zt.call(this,e,an)}
 function Ft(e){Zt.call(this,e,mn)}
 Dt()}
}
 ),window.jQuery&&window.fullpage&&function(t,n){"use strict";t&&n?t.fn.fullpage=function(e){e.$=t,new n(this[0],e)}
 :window.fp_utils.showError("error","jQuery is required to use the jQuery fullpage adapter!")}
 (window.jQuery,window.fullpage);
 jQuery(document).ready(function(e){e("#fullpage").fullpage({licenseKey:"336242E4-70D0406E-A9344816-91A6F92A",parallaxKey:"Z2hhZ2VuY3kuY29tX3oxR2NHRnlZV3hzWVhnPVFNUQ==",parallax:!0,parallaxOptions:{type:"reveal",percentage:62,property:"translate"}
 ,scrollOverflowReset:!1,scrollOverflowResetKey:"Z2hhZ2VuY3kuY29tX1k2NGMyTnliMnhzVDNabGNtWnNiM2RTWlhObGRBPT10eFU=",recordHistory:!1,scrollingSpeed:600,fitToSection:!0,fitToSectionDelay:600,scrollOverflow:!0,sectionSelector:".section-slide",navigation:!0,navigationPosition:"right"}
 )}
 );
 jQuery(document).ready(function($){AOS.init({disable:'mobile',once:false,mirror:true,}
 );$(document).on('click','[data-toggle="lightbox"]',function(event){event.preventDefault();$(this).ekkoLightbox({alwaysShowClose:true,wrapping:true,showArrows:true,height:'600',leftArrow:'<i class="fal fa-angle-left"></i>',rightArrow:'<i class="fal fa-angle-right"></i>'}
 );}
 );var $header=$(".site-header");var $adminBar=$("#wpadminbar");var scrollLink="a[href^='#']";$(scrollLink).smoothScroll({offset:(function(){var offset=0;if($header.length){offset-=$header.outerHeight();}

 if($adminBar.length){offset-=$adminBar.outerHeight();}

 return offset;}
 ()),}
 );var navoverlay=".mobile-nav-overlay";var btnclose=".mobile-nav-close";var btntrigger=".mobile-nav-trigger";$(btntrigger).on('click touchend',function(e){e.preventDefault();e.stopPropagation();$(btntrigger).addClass('active');$(navoverlay).addClass('fade-in');$(btnclose).removeClass('active');}
 );$(btnclose).on('click touchend',function(e){e.preventDefault();e.stopPropagation();$(btnclose).addClass('active');$(navoverlay).removeClass('fade-in');$(btntrigger).removeClass('active');}
 );}
 );function init_header_size(){window.addEventListener('scroll',function(){var distanceY=window.pageYOffset||document.documentElement.scrollTop,header=jQuery('header'),body=jQuery('body'),lastSlide='fp-viewing-3',scrollDown='header-scrolled-down',scrollUp='header-scrolled-up',changeOn=15;if(body.hasClass(lastSlide)){header.addClass(scrollDown);body.removeClass(scrollUp).addClass(scrollDown);}

 if(distanceY>changeOn){header.addClass(scrollDown);body.removeClass(scrollUp).addClass(scrollDown);}
 else{if(header.hasClass(scrollDown)){header.removeClass(scrollDown);body.addClass(scrollUp).removeClass(scrollDown);}
}
}
 );}

 window.onload=init_header_size();
 /*! This file is auto-generated */
 !function(c,d){"use strict";var e=!1,n=!1;if(d.querySelector)if(c.addEventListener)e=!0;if(c.wp=c.wp||{}
    ,!c.wp.receiveEmbedMessage)if(c.wp.receiveEmbedMessage=function(e){var t=e.data;if(t)if(t.secret||t.message||t.value)if(!/[^a-zA-Z0-9]/.test(t.secret)){for(var r,a,i,s=d.querySelectorAll('iframe[data-secret="'+t.secret+'"]'),n=d.querySelectorAll('blockquote[data-secret="'+t.secret+'"]'),o=0;o<n.length;o++)n[o].style.display="none";for(o=0;o<s.length;o++)if(r=s[o],e.source===r.contentWindow){if(r.removeAttribute("style"),"height"===t.message){if(1e3<(i=parseInt(t.value,10)))i=1e3;else if(~~i<200)i=200;r.height=i}
 if("link"===t.message)if(a=d.createElement("a"),i=d.createElement("a"),a.href=r.getAttribute("src"),i.href=t.value,i.host===a.host)if(d.activeElement===r)c.top.location.href=t.value}
}
}
 ,e)c.addEventListener("message",c.wp.receiveEmbedMessage,!1),d.addEventListener("DOMContentLoaded",t,!1),c.addEventListener("load",t,!1);function t(){if(!n){n=!0;for(var e,t,r=-1!==navigator.appVersion.indexOf("MSIE 10"),a=!!navigator.userAgent.match(/Trident.*rv:11\./),i=d.querySelectorAll("iframe.wp-embedded-content"),s=0;s<i.length;s++){if(!(e=i[s]).getAttribute("data-secret"))t=Math.random().toString(36).substr(2,10),e.src+="#?secret="+t,e.setAttribute("data-secret",t);if(r||a)(t=e.cloneNode(!0)).removeAttribute("security"),e.parentNode.replaceChild(t,e)}
}
}
}
 (window,document);