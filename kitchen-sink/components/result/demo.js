webpackJsonp([38],{433:function(n,s,a){n.exports={basic:a(911)}},911:function(n,s,a){n.exports={content:[],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/result/demo/basic.md",id:"components-result-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Result<span class="token punctuation">,</span> Icon<span class="token punctuation">,</span> WhiteSpace <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> myImg <span class="token operator">=</span> src <span class="token operator">=</span><span class="token operator">></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>src<span class="token punctuation">}</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>spe</span> <span class="token attr-name">am-icon</span> <span class="token attr-name">am-icon-md"</span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> ResultExample <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>result-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u652f\u4ed8\u6210\u529f<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Result</span>\n    <span class="token attr-name">img</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">myImg</span><span class="token punctuation">(</span><span class="token string">\'https://gw.alipayobjects.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u652f\u4ed8\u6210\u529f<span class="token punctuation">"</span></span>\n    <span class="token attr-name">message={&lt;div</span><span class="token punctuation">></span></span><span class="token number">998.00</span>\u5143 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>del</span><span class="token punctuation">></span></span><span class="token number">1098</span>\u5143<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>del</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n  <span class="token operator">/</span><span class="token operator">></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u9a8c\u8bc1\u6210\u529f<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Result</span>\n    <span class="token attr-name">img</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Icon type<span class="token operator">=</span><span class="token string">"check-circle"</span> className<span class="token operator">=</span><span class="token string">"spe"</span> style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> fill<span class="token punctuation">:</span> <span class="token string">\'#1F90E6\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n    title<span class="token operator">=</span><span class="token string">"\u9a8c\u8bc1\u6210\u529f"</span>\n    message<span class="token operator">=</span><span class="token string">"\u6240\u63d0\u4ea4\u5185\u5bb9\u5df2\u6210\u529f\u5b8c\u6210\u9a8c\u8bc1"</span>\n  <span class="token operator">/</span><span class="token operator">></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u652f\u4ed8\u5931\u8d25<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Result</span>\n    <span class="token attr-name">img</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Icon type<span class="token operator">=</span><span class="token string">"cross-circle-o"</span> className<span class="token operator">=</span><span class="token string">"spe"</span> style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> fill<span class="token punctuation">:</span> <span class="token string">\'#F13642\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">}</span>\n    title<span class="token operator">=</span><span class="token string">"\u652f\u4ed8\u5931\u8d25"</span>\n    message<span class="token operator">=</span><span class="token string">"\u6240\u9009\u94f6\u884c\u5361\u4f59\u989d\u4e0d\u8db3"</span>\n  <span class="token operator">/</span><span class="token operator">></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u7b49\u5f85\u5904\u7406<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Result</span>\n    <span class="token attr-name">img</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">myImg</span><span class="token punctuation">(</span><span class="token string">\'https://gw.alipayobjects.com/zos/rmsportal/HWuSTipkjJRfTWekgTUG.svg\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u7b49\u5f85\u5904\u7406<span class="token punctuation">"</span></span>\n    <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u5df2\u63d0\u4ea4\u7533\u8bf7\uff0c\u7b49\u5f85\u94f6\u884c\u5904\u7406<span class="token punctuation">"</span></span>\n  <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\u64cd\u4f5c\u5931\u8d25<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Result</span>\n    <span class="token attr-name">img</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">myImg</span><span class="token punctuation">(</span><span class="token string">\'https://gw.alipayobjects.com/zos/rmsportal/GIyMDJnuqmcqPLpHCSkj.svg\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u65e0\u6cd5\u5b8c\u6210\u64cd\u4f5c<span class="token punctuation">"</span></span>\n    <span class="token attr-name">message</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u7531\u4e8e\u4f60\u7684\u652f\u4ed8\u5b9d\u8d26\u6237\u8fd8\u672a\u7ed1\u5b9a\u6dd8\u5b9d\u8d26\u6237\u8bf7\u767b\u8bf7\u767b\u5f55www.taobao.com<span class="token punctuation">"</span></span>\n  <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ResultExample</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=a(0),s=(a(0),e(a(912))),t=e(a(130)),p=e(a(44));function e(n){return n&&n.__esModule?n:{default:n}}a(913),a(131),a(45);var o=function(s){return n.createElement("img",{src:s,className:"spe am-icon am-icon-md",alt:""})};return n.createElement(function(){return n.createElement("div",{className:"result-example"},n.createElement("div",{className:"sub-title"},"\u652f\u4ed8\u6210\u529f"),n.createElement(s.default,{img:o("https://gw.alipayobjects.com/zos/rmsportal/pdFARIqkrKEGVVEwotFe.svg"),title:"\u652f\u4ed8\u6210\u529f",message:n.createElement("div",null,"998.00\u5143 ",n.createElement("del",null,"1098\u5143"))}),n.createElement(t.default,null),n.createElement("div",{className:"sub-title"},"\u9a8c\u8bc1\u6210\u529f"),n.createElement(s.default,{img:n.createElement(p.default,{type:"check-circle",className:"spe",style:{fill:"#1F90E6"}}),title:"\u9a8c\u8bc1\u6210\u529f",message:"\u6240\u63d0\u4ea4\u5185\u5bb9\u5df2\u6210\u529f\u5b8c\u6210\u9a8c\u8bc1"}),n.createElement(t.default,null),n.createElement("div",{className:"sub-title"},"\u652f\u4ed8\u5931\u8d25"),n.createElement(s.default,{img:n.createElement(p.default,{type:"cross-circle-o",className:"spe",style:{fill:"#F13642"}}),title:"\u652f\u4ed8\u5931\u8d25",message:"\u6240\u9009\u94f6\u884c\u5361\u4f59\u989d\u4e0d\u8db3"}),n.createElement(t.default,null),n.createElement("div",{className:"sub-title"},"\u7b49\u5f85\u5904\u7406"),n.createElement(s.default,{img:o("https://gw.alipayobjects.com/zos/rmsportal/HWuSTipkjJRfTWekgTUG.svg"),title:"\u7b49\u5f85\u5904\u7406",message:"\u5df2\u63d0\u4ea4\u7533\u8bf7\uff0c\u7b49\u5f85\u94f6\u884c\u5904\u7406"}),n.createElement(t.default,null),n.createElement("div",{className:"sub-title"},"\u64cd\u4f5c\u5931\u8d25"),n.createElement(s.default,{img:o("https://gw.alipayobjects.com/zos/rmsportal/GIyMDJnuqmcqPLpHCSkj.svg"),title:"\u65e0\u6cd5\u5b8c\u6210\u64cd\u4f5c",message:"\u7531\u4e8e\u4f60\u7684\u652f\u4ed8\u5b9d\u8d26\u6237\u8fd8\u672a\u7ed1\u5b9a\u6dd8\u5b9d\u8d26\u6237\u8bf7\u767b\u8bf7\u767b\u5f55www.taobao.com"}))},null)},style:".result-example .spe {\n  width: 60px;\n  height: 60px;\n}\n.sub-title {\n  color: #888;\n  font-size: 14px;\n  padding: 30px 0 18px 0;\n  margin-left: 15px;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.result-example</span> <span class="token class">.spe</span> </span><span class="token punctuation">{</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">60</span>px<span class="token punctuation">;</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">60</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.sub-title</span> </span><span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode">#888</span><span class="token punctuation">;</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">14</span>px<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">30</span>px <span class="token number">0</span> <span class="token number">18</span>px <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token property">margin-left</span><span class="token punctuation">:</span> <span class="token number">15</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},912:function(n,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var t=function(){function n(n,s){for(var a=0;a<s.length;a++){var t=s[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(s,a,t){return a&&n(s.prototype,a),t&&n(s,t),s}}(),p=c(a(0)),e=c(a(134)),o=c(a(3));function c(n){return n&&n.__esModule?n:{default:n}}var l=function(n){function s(){return function(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}(this,s),function(n,s){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!s||"object"!=typeof s&&"function"!=typeof s?n:s}(this,(s.__proto__||Object.getPrototypeOf(s)).apply(this,arguments))}return function(n,s){if("function"!=typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function, not "+typeof s);n.prototype=Object.create(s&&s.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(n,s):n.__proto__=s)}(s,p.default.Component),t(s,[{key:"render",value:function(){var n=this.props,s=n.prefixCls,a=n.className,t=n.style,c=n.img,l=n.imgUrl,u=n.title,i=n.message,k=n.buttonText,r=n.onButtonClick,m=n.buttonType,g=null;return c?g=p.default.createElement("div",{className:s+"-pic"},c):l&&(g=p.default.createElement("div",{className:s+"-pic",style:{backgroundImage:"url("+l+")"}})),p.default.createElement("div",{className:(0,o.default)(s,a),style:t,role:"alert"},g,u?p.default.createElement("div",{className:s+"-title"},u):null,i?p.default.createElement("div",{className:s+"-message"},i):null,k?p.default.createElement("div",{className:s+"-button"},p.default.createElement(e.default,{type:m,onClick:r},k)):null)}}]),s}();s.default=l,l.defaultProps={prefixCls:"am-result",buttonType:"",onButtonClick:function(){}},n.exports=s.default},913:function(n,s,a){"use strict";a(29),a(135),a(914)},914:function(n,s){}});