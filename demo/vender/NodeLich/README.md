#### 项目介绍
- NodeLich是一个使用NodeJS开发的轻量级的MVC框架，实现了路由转发,模块渲染，MVC等。
- NodeLich是一个快速开发的轻量级框架，整个源代码开发时间为4-6个小时

#### 如何启动？
首先下载dist文件，将_NodeLich文件夹拷贝到项目中，在入口处执行下面的代码，即可在8888端口启动程序。
    
    var server=require('./_NodeLich/services/server');
    server.start(8888);
    
----
现在你可以在项目中增加controllers文件夹用来存放你的controller,并在views里面存放视图文件。
NodeLich默认遵守"约定大于配置"的理念。

一般的，控制器为IndexController.js 使用驼峰命名法则，后面的Controller后缀是默认的。
同样在IndexController中我们定义一个Action为indexAction


这样，当在URL中访问/index/index的时候，NodeLich会默认的寻找到IndexController控制器的indexAction方法，对应的默认视图是/views/index/index.html文件。

#### 希望得到大牛指导！




