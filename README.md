# CNKI PDF

一款中国知网下载 PDF 的 Chrome 浏览器插件

## 🐪 设计思路

将页面所有文档列表中的 `<a></a>` 标签内容解析，并转化为可以下载 `pdf` 文件的路径

```js
// 文献唯一标识哈希值
const fileName = '4IHUSdnSyMDTkF0KGZzdTlUawx2S2kzb0gkSip2aTN2ZYRnQqR3csBHOzkjd1F0cQlFVwFXWaJGckh1czp3dmVERwlVdoJmUwJmepZlb3cUZttWdZ1GSYlzZBdjQqlTbwdXS08kcCFGZk9WRkFkbXp0VUFTQZdTW'; 

// 文献存储数据库表，猜测是按照年份排的
const tablename = 'CMFD2008';

// pdfdown
const dflag = 'nhdown';

// 下载地址完整链接，服务器返回文档流
const href = `http://kns.cnki.net/kns/download.aspx?filename=${filename}&tablename=${tablename}&dflag=${dflag}`;
```

网页中 `html` 渲染结果：

``` html
<a href="../download.aspx?filename=4IHUSdnSyMDTkF0KGZzdTlUawx2S2kzb0gkSip2aTN2ZYRnQqR3csBHOzkjd1F0cQlFVwFXWaJGckh1czp3dmVERwlVdoJmUwJmepZlb3cUZttWdZ1GSYlzZBdjQqlTbwdXS08kcCFGZk9WRkFkbXp0VUFTQZdTW&amp;tablename=CMFD2008&amp;dflag=nhdown" target="_blank" class="briefDl_Y" title="下载_108页"></a>
```

## 📝 使用说明

鼠标右键，下载 PDF

- 下载失败，说明服务器上只有 `.caj` 文件，只能乖乖的用特殊浏览器阅读了 :(

- 下载成功 👌
