function e(e){return encodeURIComponent(String(e).trim().toLowerCase().replace(/\s+/g,"-"))}function n(e){return String(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}module.exports=function(r,t){var l;t=Object.assign({},{placeholder:"(\\$\\{toc\\}|\\[\\[?_?toc_?\\]?\\]|\\$\\<toc(\\{[^}]*\\})\\>)",slugify:e,href:null,containerClass:"table-of-contents",containerId:void 0,listClass:void 0,itemClass:void 0,linkClass:void 0,level:1,listType:"ol",format:void 0,callback:void 0},t);var i=new RegExp("^"+t.placeholder+"$","i");r.renderer.rules.tocOpen=function(e,r){var l=Object.assign({},t);return e&&r>=0&&(l=Object.assign(l,e[r].inlineOptions)),"<nav"+(l.containerId?' id="'+n(l.containerId)+'"':"")+' class="'+n(l.containerClass)+'">'},r.renderer.rules.tocClose=function(){return"</nav>"},r.renderer.rules.tocBody=function(e,r){var i=Object.assign({},t);e&&r>=0&&(i=Object.assign(i,e[r].inlineOptions));var s,c={},o=Array.isArray(i.level)?(s=i.level,function(e){return s.includes(e)}):function(e){return function(n){return n>=e}}(i.level);return function e(r){var l=i.listClass?' class="'+n(i.listClass)+'"':"",s=i.itemClass?' class="'+n(i.itemClass)+'"':"",a=i.linkClass?' class="'+n(i.linkClass)+'"':"";if(0===r.c.length)return"";var u="";return(0===r.l||o(r.l))&&(u+="<"+(n(i.listType)+l)+">"),r.c.forEach(function(r){o(r.l)?u+="<li"+s+"><a"+a+' href="'+function(e){for(var n=e,r=2;Object.prototype.hasOwnProperty.call(c,n);)n=e+"-"+r++;return c[n]=!0,n}(t.href?t.href(r.n):"#"+t.slugify(r.n))+'">'+("function"==typeof i.format?i.format(r.n,n):n(r.n))+"</a>"+e(r)+"</li>":u+=e(r)}),(0===r.l||o(r.l))&&(u+="</"+n(i.listType)+">"),u}(l)},r.core.ruler.push("generateTocAst",function(e){l=function(e){for(var n={l:0,n:"",c:[]},r=[n],t=0,l=e.length;t<l;t++){var i=e[t];if("heading_open"===i.type){var s=e[t+1].children.filter(function(e){return"text"===e.type||"code_inline"===e.type}).reduce(function(e,n){return e+n.content},""),c={l:parseInt(i.tag.substr(1),10),n:s,c:[]};if(c.l>r[0].l)r[0].c.push(c),r.unshift(c);else if(c.l===r[0].l)r[1].c.push(c),r[0]=c;else{for(;c.l<=r[0].l;)r.shift();r[0].c.push(c),r.unshift(c)}}}return n}(e.tokens),"function"==typeof t.callback&&t.callback(r.renderer.rules.tocOpen()+r.renderer.rules.tocBody()+r.renderer.rules.tocClose(),l)}),r.block.ruler.before("heading","toc",function(e,n,r,t){var l,s=e.src.slice(e.bMarks[n]+e.tShift[n],e.eMarks[n]).split(" ")[0];if(!i.test(s))return!1;if(t)return!0;var c=i.exec(s),o={};if(null!==c&&3===c.length)try{o=JSON.parse(c[2])}catch(e){}return e.line=n+1,(l=e.push("tocOpen","nav",1)).markup="",l.map=[n,e.line],l.inlineOptions=o,(l=e.push("tocBody","",0)).markup="",l.map=[n,e.line],l.inlineOptions=o,l.children=[],(l=e.push("tocClose","nav",-1)).markup="",!0},{alt:["paragraph","reference","blockquote"]})};
//# sourceMappingURL=markdownItTocDoneRight.js.map
