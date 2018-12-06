webpackJsonp([30517571101605],{364:function(i,n){i.exports={pathContext:{page:{fileAbsolutePath:"/Users/smoclock/key/cdn-docs/src/docs/000-config/002-2.md",html:'<ul>\n<li>配置指引</li>\n<li>配置案例</li>\n</ul>\n<p>回源HOST是指CDN节点在回源时，在源站访问的站点域名。</p>\n<h3 id="配置指引"><a href="#%E9%85%8D%E7%BD%AE%E6%8C%87%E5%BC%95" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>配置指引</h3>\n<ol>\n<li>\n<p>登录控制台，在左侧菜单栏域名管理内选择【域名配置】，选择域名，再选择【添加配置】，点击添加配置选择【回源】。</p>\n<p><img src="/cdn-docs/image/image-20181121115807861.png" alt="image-20181121115807861"></p>\n<p><img src="/cdn-docs/image/image-20181121115826399.png" alt="image-20181121115826399"></p>\n<p><img src="/cdn-docs/image/image-20181121115846112.png" alt="image-20181121115846112"></p>\n</li>\n<li>\n<p>在输入框中填入对应host，点击【请点击发布】，再【确认保存】，配置即可生效</p>\n<p><img src="/cdn-docs/image/image-20181121120202272.png" alt="image-20181121120202272"></p>\n<p><img src="/cdn-docs/image/image-20181121120119716.png" alt="image-20181121120119716"></p>\n</li>\n<li>\n<p>配置注意事项</p>\n<ul>\n<li>如果没有配置该功能项，则默认回源host为加速域名。</li>\n<li>默认情况下，子域名的回源host为所配置的加速域名，泛域名的回源HOST为访问域名。若接入的加速域名为www.baishan.com，则此节点对此域名下资源发起回源请求，回源所带的host字段值为：www.baishan.com。若接入的域名为泛域名*.baishan.com，访问的域名为abc.baishan.com，则回源HOST为abc.baishan.com。</li>\n</ul>\n</li>\n</ol>\n<h3 id="配置案例"><a href="#%E9%85%8D%E7%BD%AE%E6%A1%88%E4%BE%8B" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>配置案例</h3>\n<p>客户访问的域名为www.qingcdn.com，回源配置为1.1.1.1，用户请求的<a href="http://www.baishan.com:82/1.jpg">http://www.baishan.com:82/1.jpg</a></p>\n<ol>\n<li>\n<p>若配置如下：</p>\n<p><img src="/cdn-docs/image/image-20181115231410909.png" alt="image-20181115231410909"></p>\n<p>回源host为www.test.com，从源服务器1.1.1.1获取资源为 <a href="http://www.test.com:82/1.jpg">http://www.test.com:82/1.jpg</a></p>\n</li>\n<li>\n<p>若没有添加回源host功能，从源服务器1.1.1.1获取的资源为 <a href="http://www.baishan.com:82/1.jpg">http://www.baishan.com:82/1.jpg</a></p>\n</li>\n</ol>',headings:[{value:"配置指引",depth:3},{value:"配置案例",depth:3}],frontmatter:{title:"回源HOST",parent:"/Users/smoclock/key/cdn-docs/src/docs/000-config/002-2.md absPath of file"}},nav:[{title:"用户指南",children:[{title:"源站配置",path:"/docs/config/1"},{title:"回源HOST",path:"/docs/config/2"},{title:"缓存规则",path:"/docs/config/3"},{title:"IP黑名单",path:"/docs/config/4"},{title:"Referer黑白名单",path:"/docs/config/5"},{title:"HTTP头配置",path:"/docs/config/6"},{title:"跟随301/302跳转",path:"/docs/config/7"},{title:"限速规则",path:"/docs/config/8"}],redirectFrom:"/docs/config",path:"/docs/config/1"}]}}}});
//# sourceMappingURL=path---docs-config-2-5367c1c693602f1c9f4c.js.map