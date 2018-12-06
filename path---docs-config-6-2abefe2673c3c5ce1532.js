webpackJsonp([0xac3648e90db3],{368:function(e,i){e.exports={pathContext:{page:{fileAbsolutePath:"/Users/smoclock/work/cdn-docs/src/docs/000-config/006-6.md",html:'<p>当网站接入CDN后，某些客户端和源站需要根据HTTP Header头部进行相关行为处理。所以需要针对某些场景进行头部添加处理。白山支持添加CDN节点到客户端的响应头以及CDN节点到源站的响应头。</p>\n<p>场景1:添加回源请求头</p>\n<ol>\n<li>\n<p>登录控制台，在左侧菜单栏域名管理内选择【域名配置】，选择域名，再选择【添加配置】。点击【添加配置】，选择【访问控制】内的添加【回源请求头】</p>\n<p><img src="/image/image-20181119171441911.png" alt="image-20181119171441911"></p>\n<p><img src="/image/image-20181119171523489.png" alt="image-20181119171523489"></p>\n<p><img src="/image/image-20181119171626533.png" alt="image-20181119171626533"></p>\n</li>\n<li>\n<p>配置参数以及各参数含义</p>\n<ul>\n<li>HTTP头部：需要添加回源请求头的头部名。</li>\n<li>头部值：添加的HTTP头部的值</li>\n<li>头部存在时是否覆盖：例如配置添加请求头部Request Head：test，客户端请求到CDN节点时也带有头部Request Head：abc。开启该功能，CDN节点回源时会将Request Head头部值abc替换成test，回源只带头部Request Head：test。如果未开启改功能，回源会带两个相同的请求头 Request Head：test和Request Head：abc。</li>\n</ul>\n</li>\n</ol>\n<p>场景2：添加客户端响应头</p>\n<ol>\n<li>\n<p>登录控制台，在左侧菜单栏域名管理内选择【域名配置】，选择域名，再选择【添加配置】。点击【添加配置】，选择【特殊功能】内的添加【回源请求头】</p>\n<p><img src="/image/image-20181119171441911.png" alt="image-20181119171441911"></p>\n<p><img src="/image/image-20181119173510580.png" alt="image-20181119173510580"></p>\n<p><img src="/image/image-20181119173554472.png" alt="image-20181119173554472"></p>\n</li>\n<li>\n<p>配置参数以及各参数含义</p>\n<ul>\n<li>HTTP头部名称：需要添加的客户端响应头部名称。</li>\n<li>头部值：添加的HTTP头部的值。</li>\n<li>头部存在时是否覆盖：例如配置添加响应头部Request Head：test，源站响应CDN节点时也带有头部Request Head：abc。开启该功能，CDN节点响应客户端时会将Request Head头部值abc替换成test后再响应给客户端，客户端接收到的头部为Request Head：test，如果未开启改功能，会响应客户端两个相同的头部 Request Head：test和Request Head：abc</li>\n</ul>\n</li>\n<li>\n<p>注意事项</p>\n<ul>\n<li>当添加多条规则时，配置越靠前，优先级越高，可拖动配置项调整配置的前后顺序。</li>\n</ul>\n</li>\n</ol>\n<h3 id="配置案例"><a href="#%E9%85%8D%E7%BD%AE%E6%A1%88%E4%BE%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>配置案例</h3>\n<p>域名Blog4.lowxp.com需求如下：</p>\n<ol>\n<li>\n<p>添加跨域头部（即添加客户端响应头）：Access-Control-Allow-Origin: *，需将源站响应的跨域头部替换。</p>\n</li>\n<li>\n<p>添加回源请求头：Http-Get：honest，并且不需要将客户请求的Http-Get头部覆盖。</p>\n<p><img src="/image/image-20181119175442703.png" alt="image-20181119175442703"></p>\n</li>\n</ol>',headings:[{value:"配置案例",depth:3}],frontmatter:{title:"HTTP头配置",parent:"/Users/smoclock/work/cdn-docs/src/docs/000-config/006-6.md absPath of file"}},nav:[{title:"用户指南",children:[{title:"源站配置",path:"/docs/config/1"},{title:"回源HOST",path:"/docs/config/2"},{title:"缓存规则",path:"/docs/config/3"},{title:"IP黑名单",path:"/docs/config/4"},{title:"Referer黑白名单",path:"/docs/config/5"},{title:"HTTP头配置",path:"/docs/config/6"},{title:"跟随301/302跳转",path:"/docs/config/7"},{title:"限速规则",path:"/docs/config/8"}],redirectFrom:"/docs/config",path:"/docs/config/1"}]}}}});
//# sourceMappingURL=path---docs-config-6-2abefe2673c3c5ce1532.js.map