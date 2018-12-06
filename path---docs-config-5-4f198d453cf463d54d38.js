webpackJsonp([0xc86ad0e8aa6],{367:function(e,r){e.exports={pathContext:{page:{fileAbsolutePath:"/Users/smoclock/work/cdn-docs/src/docs/000-config/005-5.md",html:'<ul>\n<li>配置指引</li>\n<li>配置案例</li>\n</ul>\n<p>Referer黑白名单可实现对业务资源的访问来源进行控制，以保护网站内容不被其他网站盗用。其实现原理是将HTTP请求中的 referer header，同配置中的Referer黑名单/白名单进行匹配，对匹配上的请求进行拒绝/放过。</p>\n<h3 id="配置指引"><a href="#%E9%85%8D%E7%BD%AE%E6%8C%87%E5%BC%95" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>配置指引</h3>\n<ol>\n<li>\n<p>登录控制台，在左侧菜单栏域名管理内选择【域名配置】，选择域名，再选择【添加配置】。点击添加配置选择【访问控制】内的referer黑白名单</p>\n<p><img src="/image/image-20181115225358338.png" alt="image-20181115225358338"></p>\n<p><img src="/image/image-20181115225418467.png" alt="image-20181115225418467"></p>\n<p><img src="/image/image-20181115225446727.png" alt="image-20181115225446727"></p>\n</li>\n<li>\n<p>注意事项</p>\n<ul>\n<li>默认允许Referer为空。当请求的Referer字段为空或无Referer时，CDN正常返回请求信息。空Referer和Referer黑白名单是分别配置，互不干涉。</li>\n<li>referer黑名单和白名单同一时间只能生效一种类型。</li>\n<li>配置框内的名单列表一行一个，不重复，不需要输入<a href="http://%E5%BC%80%E5%A4%B4%EF%BC%8C%E5%A6%82">http://开头，如</a>: www.baishancloud.com。同时配置包含任意主机头的域名以 * . 开头，如：*.baishancloud.com包含baishancloud.com、xxx.baishancloud.com等。</li>\n</ul>\n</li>\n</ol>\n<h3 id="配置案例"><a href="#%E9%85%8D%E7%BD%AE%E6%A1%88%E4%BE%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>配置案例</h3>\n<p>blog4.lowxp.com域名配置黑名单www.baishancloud.com，*.lowxpcloud.com</p>\n<p><img src="/image/image-20181115230648597.png" alt="image-20181115230648597"></p>\n<p>用户请求url为<a href="http://blog4.lowxp.com/1.jpg%E7%9A%84%E8%B5%84%E6%BA%90%EF%BC%8C%E8%AF%B7%E6%B1%82%E7%9A%84referer%E4%B8%BAwww.abc.com%E4%B8%8D%E5%9C%A8%E9%BB%91%E5%90%8D%E5%8D%95%E5%86%85%EF%BC%8C%E8%BF%94%E5%9B%9E%E6%AD%A3%E5%B8%B8%E5%86%85%E5%AE%B9%E3%80%82">http://blog4.lowxp.com/1.jpg的资源，请求的referer为www.abc.com不在黑名单内，返回正常内容。</a></p>\n<p>用户请求url为<a href="http://blog4.lowxp.com/1.jpg%E7%9A%84%E8%B5%84%E6%BA%90%EF%BC%8C%E8%AF%B7%E6%B1%82%E7%9A%84referer%E4%B8%BAlowxpcloud.com%E5%9C%A8%E9%BB%91%E5%90%8D%E5%8D%95%E5%86%85%EF%BC%8C%E8%BF%94%E5%9B%9E403%E3%80%82">http://blog4.lowxp.com/1.jpg的资源，请求的referer为lowxpcloud.com在黑名单内，返回403。</a></p>\n<p>用户通过浏览器请求url为<a href="http://blog4.lowxp.com/1.jpg%E7%9A%84%E8%B5%84%E6%BA%90%EF%BC%8C%E8%AF%B7%E6%B1%82%E7%9A%84referer%E4%B8%BA%E7%A9%BA%EF%BC%8C%E9%85%8D%E7%BD%AE%E5%85%81%E8%AE%B8%E7%A9%BAreferer%E8%AE%BF%E9%97%AE%EF%BC%8C%E8%BF%94%E5%9B%9E%E6%AD%A3%E5%B8%B8%E5%86%85%E5%AE%B9%E3%80%82">http://blog4.lowxp.com/1.jpg的资源，请求的referer为空，配置允许空referer访问，返回正常内容。</a></p>',headings:[{value:"配置指引",depth:3},{value:"配置案例",depth:3}],frontmatter:{title:"Referer黑白名单",parent:"/Users/smoclock/work/cdn-docs/src/docs/000-config/005-5.md absPath of file"}},nav:[{title:"用户指南",children:[{title:"源站配置",path:"/docs/config/1"},{title:"回源HOST",path:"/docs/config/2"},{title:"缓存规则",path:"/docs/config/3"},{title:"IP黑名单",path:"/docs/config/4"},{title:"Referer黑白名单",path:"/docs/config/5"},{title:"HTTP头配置",path:"/docs/config/6"},{title:"跟随301/302跳转",path:"/docs/config/7"},{title:"限速规则",path:"/docs/config/8"}],redirectFrom:"/docs/config",path:"/docs/config/1"}]}}}});
//# sourceMappingURL=path---docs-config-5-4f198d453cf463d54d38.js.map