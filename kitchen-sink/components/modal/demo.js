webpackJsonp([13],{380:function(n,s,a){n.exports={basic:a(522)}},522:function(n,s,a){n.exports={content:{"zh-CN":[["p","\u57fa\u672c\u5bf9\u8bdd\u6846\u3002"]],"en-US":[["p","Basic Modal."]]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/modal/demo/basic.md",id:"components-modal-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Modal<span class="token punctuation">,</span> List<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> WhiteSpace<span class="token punctuation">,</span> WingBlank<span class="token punctuation">,</span> Icon<span class="token punctuation">,</span> TextareaItem <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'dui-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      modal1<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n      modal2<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  showModal <span class="token operator">=</span> key <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// \u4fee\u590d Android \u4e0a\u70b9\u51fb\u7a7f\u900f</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      <span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  onClose <span class="token operator">=</span> key <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      <span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">showModal</span><span class="token punctuation">(</span><span class="token string">\'modal1\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Alert<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Modal</span>\n          <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>modal1<span class="token punctuation">}</span></span>\n          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>alert<span class="token punctuation">\'</span></span>\n          <span class="token attr-name">maskClosable</span>\n          <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onClose</span><span class="token punctuation">(</span><span class="token string">\'modal1\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">title={&lt;div</span><span class="token punctuation">></span></span>asadf<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>asdf<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n          onOk<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">\'ok\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n          okText<span class="token operator">=</span><span class="token string">\'\u597d\u7684\'</span>\n          cancelText<span class="token operator">=</span><span class="token string">\'\u4e0d\u597d\'</span>\n          onCancel<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onClose</span><span class="token punctuation">(</span><span class="token string">\'modal1\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n        <span class="token operator">></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> height<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span> overflow<span class="token punctuation">:</span> <span class="token string">\'scroll\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            scoll content<span class="token operator">...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n            scoll content<span class="token operator">...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n            scoll content<span class="token operator">...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n            scoll content<span class="token operator">...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n            scoll content<span class="token operator">...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n            scoll content<span class="token operator">...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Modal</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">showModal</span><span class="token punctuation">(</span><span class="token string">\'modal2\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Confirm<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Modal</span>\n          <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>modal2<span class="token punctuation">}</span></span>\n          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>confirm<span class="token punctuation">\'</span></span>\n          <span class="token attr-name">maskClosable</span>\n          <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onClose</span><span class="token punctuation">(</span><span class="token string">\'modal2\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">title</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token operator">&lt;</span>Icon size<span class="token operator">=</span><span class="token string">\'lg\'</span> style<span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>color<span class="token punctuation">:</span> <span class="token string">\'red\'</span><span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>icon-zhuyi<span class="token punctuation">\'</span>/</span><span class="token punctuation">></span></span><span class="token punctuation">}</span>\n          onOk<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">\'ok\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n          okText<span class="token operator">=</span><span class="token string">\'\u597d\u7684\'</span>\n          cancelText<span class="token operator">=</span><span class="token string">\'\u4e0d\u597d\'</span>\n          onCancel<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onClose</span><span class="token punctuation">(</span><span class="token string">\'modal2\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n        <span class="token operator">></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> height<span class="token punctuation">:</span> <span class="token number">100</span><span class="token punctuation">,</span> overflow<span class="token punctuation">:</span> <span class="token string">\'scroll\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n            scoll content<span class="token operator">...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n            scoll content<span class="token operator">...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n            scoll content<span class="token operator">...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n            scoll content<span class="token operator">...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n            scoll content<span class="token operator">...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n            scoll content<span class="token operator">...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span> <span class="token punctuation">/></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Modal</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">showModal</span><span class="token punctuation">(</span><span class="token string">\'modal3\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Input<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Modal</span>\n          <span class="token attr-name">visible</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>modal3<span class="token punctuation">}</span></span>\n          <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>confirm<span class="token punctuation">\'</span></span>\n          <span class="token attr-name">maskClosable</span>\n          <span class="token attr-name">onClose</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onClose</span><span class="token punctuation">(</span><span class="token string">\'modal3\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onOk</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">\'ok\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n          <span class="token attr-name">onCancel</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">onClose</span><span class="token punctuation">(</span><span class="token string">\'modal3\'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span>\n        <span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TextareaItem</span>\n            <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u9650\u5236\u5b57\u6570<span class="token punctuation">"</span></span>\n            <span class="token attr-name">rows</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span></span>\n            <span class="token attr-name">count</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">}</span></span>\n          <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Modal</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> Modal<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token punctuation">{</span>title<span class="token punctuation">:</span> <span class="token string">\'\u786e\u8ba4\'</span><span class="token punctuation">,</span> message<span class="token punctuation">:</span> <span class="token string">\'\u4fa7\u6d4b\u8bd5\'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Modal<span class="token punctuation">.</span>alert<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> \n          <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>confirm <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n          <span class="token keyword">this</span><span class="token punctuation">.</span>confirm <span class="token operator">=</span> Modal<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token punctuation">{</span>title<span class="token punctuation">:</span> <span class="token string">\'\u786e\u8ba4\'</span><span class="token punctuation">,</span> message<span class="token punctuation">:</span> <span class="token string">\'\u4fa7\u6d4b\u8bd5\u4fa7\u6d4b\u8bd5\u4fa7\u4fa7\u6d4b\u8bd5\u4fa7\u6d4b\u8bd5\u4fa7\u6d4b\u8bd5\u4fa7\u6d4b\u8bd5\u4fa7\u6d4b\u8bd5\u4fa7\u6d4b\u8bd5\u4fa7\u6d4b\u8bd5\u4fa7\u6d4b\u8bd5\u4fa7\u6d4b\u8bd5\u4fa7\u6d4b\u8bd5\u4fa7\u6d4b\u8bd5\u4fa7\u6d4b\u8bd5\u4fa7\u6d4b\u8bd5\u4fa7\u6d4b\u8bd5\u4fa7\u6d4b\u8bd5\u6d4b\u8bd5\u4fa7\u6d4b\u8bd5\u4fa7\u6d4b\u8bd5\'</span><span class="token punctuation">,</span> \n          onOk<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span>confirm<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token attr-name">}</span>\n        <span class="token punctuation">></span></span>\n          Modal<span class="token punctuation">.</span>confirm\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){var n=a(0),s=(a(4),function(){function n(n,s){for(var a=0;a<s.length;a++){var t=s[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(s,a,t){return a&&n(s.prototype,a),t&&n(s,t),s}}()),t=a(63);function p(n,s,a){return s in n?Object.defineProperty(n,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[s]=a,n}var o=function(a){function o(n){!function(n,s){if(!(n instanceof s))throw new TypeError("Cannot call a class as a function")}(this,o);var s=function(n,s){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!s||"object"!=typeof s&&"function"!=typeof s?n:s}(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,n));return s.showModal=function(n){return function(a){a.preventDefault(),s.setState(p({},n,!0))}},s.onClose=function(n){return function(){s.setState(p({},n,!1))}},s.state={modal1:!1,modal2:!1},s}return function(n,s){if("function"!=typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function, not "+typeof s);n.prototype=Object.create(s&&s.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(n,s):n.__proto__=s)}(o,n.Component),s(o,[{key:"render",value:function(){var s=this;return n.createElement(t.WingBlank,null,n.createElement(t.Button,{onClick:this.showModal("modal1")},"Alert"),n.createElement(t.WhiteSpace,null),n.createElement(t.Modal,{visible:this.state.modal1,type:"alert",maskClosable:!0,onClose:this.onClose("modal1"),title:n.createElement("div",null,"asadf",n.createElement("div",null,"asdf")),onOk:function(){return alert("ok")},okText:"\u597d\u7684",cancelText:"\u4e0d\u597d",onCancel:this.onClose("modal1")},n.createElement("div",{style:{height:100,overflow:"scroll"}},"scoll content...",n.createElement("br",null),"scoll content...",n.createElement("br",null),"scoll content...",n.createElement("br",null),"scoll content...",n.createElement("br",null),"scoll content...",n.createElement("br",null),"scoll content...",n.createElement("br",null))),n.createElement(t.Button,{onClick:this.showModal("modal2")},"Confirm"),n.createElement(t.WhiteSpace,null),n.createElement(t.Modal,{visible:this.state.modal2,type:"confirm",maskClosable:!0,onClose:this.onClose("modal2"),title:n.createElement(t.Icon,{size:"lg",style:{color:"red"},type:"icon-zhuyi"}),onOk:function(){return alert("ok")},okText:"\u597d\u7684",cancelText:"\u4e0d\u597d",onCancel:this.onClose("modal2")},n.createElement("div",{style:{height:100,overflow:"scroll"}},"scoll content...",n.createElement("br",null),"scoll content...",n.createElement("br",null),"scoll content...",n.createElement("br",null),"scoll content...",n.createElement("br",null),"scoll content...",n.createElement("br",null),"scoll content...",n.createElement("br",null))),n.createElement(t.Button,{onClick:this.showModal("modal3")},"Input"),n.createElement(t.WhiteSpace,null),n.createElement(t.Modal,{visible:this.state.modal3,type:"confirm",maskClosable:!0,onClose:this.onClose("modal3"),onOk:function(){return alert("ok")},onCancel:this.onClose("modal3")},n.createElement(t.TextareaItem,{placeholder:"\u9650\u5236\u5b57\u6570",rows:3,count:10})),n.createElement(t.Button,{onClick:function(){return t.Modal.alert({title:"\u786e\u8ba4",message:"\u4fa7\u6d4b\u8bd5"})}},"Modal.alert"),n.createElement(t.WhiteSpace,null),n.createElement(t.Button,{onClick:function(){s.confirm=null,s.confirm=t.Modal.confirm({title:"\u786e\u8ba4",message:"\u4fa7\u6d4b\u8bd5\u4fa7\u6d4b\u8bd5\u4fa7\u4fa7\u6d4b\u8bd5\u4fa7\u6d4b\u8bd5\u4fa7\u6d4b\u8bd5\u4fa7\u6d4b\u8bd5\u4fa7\u6d4b\u8bd5\u4fa7\u6d4b\u8bd5\u4fa7\u6d4b\u8bd5\u4fa7\u6d4b\u8bd5\u4fa7\u6d4b\u8bd5\u4fa7\u6d4b\u8bd5\u4fa7\u6d4b\u8bd5\u4fa7\u6d4b\u8bd5\u4fa7\u6d4b\u8bd5\u4fa7\u6d4b\u8bd5\u4fa7\u6d4b\u8bd5\u6d4b\u8bd5\u4fa7\u6d4b\u8bd5\u4fa7\u6d4b\u8bd5",onOk:function(){return s.confirm.close()}})}},"Modal.confirm"))}}]),o}();return n.createElement(o,null)},style:".popup-list .am-list-body {\n  height: 120px;\n  overflow: auto;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.popup-list</span> <span class="token class">.am-list-body</span> </span><span class="token punctuation">{</span>\n  <span class="token property">height</span><span class="token punctuation">:</span> <span class="token number">120</span>px<span class="token punctuation">;</span>\n  <span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}}});