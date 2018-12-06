webpackJsonp([0x5d458cdff5f9],{366:function(i,e){i.exports={pathContext:{page:{fileAbsolutePath:"/Users/smoclock/key/cdn-docs/src/docs/000-config/004-4.md",html:'<ul>\n<li>配置指引</li>\n<li>配置案例</li>\n</ul>\n<p>IP黑名单功能，主要解决恶意IP盗刷、攻击的问题。其实现原理是CDN将获取客户端的ip，同配置的IP黑名单进行匹配，对匹配上的客户端请求进行拒绝。</p>\n<h3 id="配置指引"><a href="#%E9%85%8D%E7%BD%AE%E6%8C%87%E5%BC%95" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>配置指引</h3>\n<ol>\n<li>\n<p>登录控制台，在左侧菜单栏域名管理内选择【域名配置】，选择域名，再选择【添加配置】。点击添加配置选择【访问控制】内的【IP黑名单】</p>\n<p><img src="/image/image-20181115223517572.png" alt="image-20181115223517572"></p>\n<p><img src="/image/image-20181115223537133.png" alt="image-20181115223537133"></p>\n<p><img src="/image/image-20181115223558844.png" alt="image-20181115223558844"></p>\n</li>\n<li>\n<p>配置注意事项</p>\n<ul>\n<li>每个ip之间用多个IP或IP段以逗号隔开，IP范围不允许交叉，如：1.1.1.1,2.2.2.2,3.3.3.0/24,4.4.0.0/18</li>\n</ul>\n</li>\n</ol>\n<h3 id="配置案例"><a href="#%E9%85%8D%E7%BD%AE%E6%A1%88%E4%BE%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>配置案例</h3>\n<p>配置blog4.lowxp.com黑名单1.1.1.1,2.2.2.2,3.3.3.0/24</p>\n<p><img src="/image/image-20181115224517809.png" alt="image-20181115224517809"></p>\n<p>配置完成【点击发布】并【确认保存】即可让配置生效</p>\n<p><img src="/image/image-20181115224535592.png" alt="image-20181115224535592"></p>\n<p><img src="/image/image-20181115224553654.png" alt="image-20181115224553654"></p>\n<p>客户端IP 3.3.3.2 访问<a href="http://blog4.lowxp.com/1.jpg%EF%BC%8C%E5%8C%B9%E9%85%8D%E9%BB%91%E5%90%8D%E5%8D%95%EF%BC%8C%E8%BF%94%E5%9B%9E403%E6%8B%92%E7%BB%9D%E3%80%82">http://blog4.lowxp.com/1.jpg，匹配黑名单，返回403拒绝。</a></p>\n<p>客户端IP 4.4.4.4 访问<a href="http://blog4.lowxp.com/1.jpg%EF%BC%8C%E4%B8%8D%E5%9C%A8%E9%BB%91%E5%90%8D%E5%8D%95%E5%86%85%EF%BC%8C%E5%85%81%E8%AE%B8%E8%AE%BF%E9%97%AE%E3%80%82">http://blog4.lowxp.com/1.jpg，不在黑名单内，允许访问。</a></p>',headings:[{value:"配置指引",depth:3},{value:"配置案例",depth:3}],frontmatter:{title:"IP黑名单",parent:"/Users/smoclock/key/cdn-docs/src/docs/000-config/004-4.md absPath of file"}},nav:[{title:"用户指南",children:[{title:"源站配置",path:"/docs/config/1"},{title:"回源HOST",path:"/docs/config/2"},{title:"缓存规则",path:"/docs/config/3"},{title:"IP黑名单",path:"/docs/config/4"},{title:"Referer黑白名单",path:"/docs/config/5"},{title:"HTTP头配置",path:"/docs/config/6"},{title:"跟随301/302跳转",path:"/docs/config/7"},{title:"限速规则",path:"/docs/config/8"}],redirectFrom:"/docs/config",path:"/docs/config/1"}]}}}});
//# sourceMappingURL=path---docs-config-4-39f8c7e4fd575a068d9d.js.map