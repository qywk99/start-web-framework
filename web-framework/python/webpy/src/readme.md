
> 注：当前项目为 Serverless Devs 应用，由于应用中会存在需要初始化才可运行的变量（例如应用部署地区、函数名等等），所以**不推荐**直接 Clone 本仓库到本地进行部署或直接复制 s.yaml 使用，**强烈推荐**通过 `s init ${模版名称}` 的方法或应用中心进行初始化，详情可参考[部署 & 体验](#部署--体验) 。

# start-webpy-v3 帮助文档
<p align="center" class="flex justify-center">
    <a href="https://www.serverless-devs.com" class="ml-1">
    <img src="http://editor.devsapp.cn/icon?package=start-webpy-v3&type=packageType">
  </a>
  <a href="http://www.devsapp.cn/details.html?name=start-webpy-v3" class="ml-1">
    <img src="http://editor.devsapp.cn/icon?package=start-webpy-v3&type=packageVersion">
  </a>
  <a href="http://www.devsapp.cn/details.html?name=start-webpy-v3" class="ml-1">
    <img src="http://editor.devsapp.cn/icon?package=start-webpy-v3&type=packageDownload">
  </a>
</p>

<description>

本案例将简单而功能强大的Web.py框架，快速创建部署到阿里云函数计算 FC 。

</description>

<codeUrl>



</codeUrl>
<preview>



</preview>


## 前期准备

使用该项目，您需要有开通以下服务并拥有对应权限：

<service>



| 服务/业务 |  权限  | 相关文档 |
| --- |  --- | --- |
| 函数计算 |  AliyunFCFullAccess | [帮助文档](https://help.aliyun.com/product/2508973.html) [计费文档](https://help.aliyun.com/document_detail/2512928.html) |

</service>

<remark>



</remark>

<disclaimers>



</disclaimers>

## 部署 & 体验

<appcenter>
   
- :fire: 通过 [Serverless 应用中心](https://fcnext.console.aliyun.com/applications/create?template=start-webpy-v3) ，
  [![Deploy with Severless Devs](https://img.alicdn.com/imgextra/i1/O1CN01w5RFbX1v45s8TIXPz_!!6000000006118-55-tps-95-28.svg)](https://fcnext.console.aliyun.com/applications/create?template=start-webpy-v3) 该应用。
   
</appcenter>
<deploy>
    
- 通过 [Serverless Devs Cli](https://www.serverless-devs.com/serverless-devs/install) 进行部署：
  - [安装 Serverless Devs Cli 开发者工具](https://www.serverless-devs.com/serverless-devs/install) ，并进行[授权信息配置](https://docs.serverless-devs.com/fc/config) ；
  - 初始化项目：`s init start-webpy-v3 -d start-webpy-v3`
  - 进入项目，并进行项目部署：`cd start-webpy-v3 && s deploy -y`
   
</deploy>

## 案例介绍

<appdetail id="flushContent">

本案例将 Web.py ，这一简单而功能强大的 Python Web 框架，快速创建部署到阿里云函数计算 FC 。

web.py是一个轻量级的Python Web框架，并且拥有许多主要功能和特点。首先，它支持简单而强大的URL路由系统，允许开发者将URL映射到视图函数，以处理不同的HTTP请求。其次，开发者可以编写视图函数来处理HTTP请求，并返回相应的HTTP响应，从而构建Web应用程序的功能。

web.py还内置了一个简单但有效的模板引擎，用于生成动态HTML页面。虽然web.py不强制使用特定的数据库访问库，但它提供了轻松与各种数据库（如MySQL、SQLite、PostgreSQL等）集成的能力。web.py还支持会话管理，允许开发者跟踪和存储用户会话数据。此外，开发者可以使用中间件来扩展和自定义应用程序的功能，例如添加身份验证、日志记录等。最后，web.py对构建RESTful API提供了良好的支持，使开发Web服务更加容易。

通过 Serverless 开发平台，您只需要几步，就可以体验 Web.py 框架，并享受 Serverless 架构带来的降本提效的技术红利。

</appdetail>

## 使用流程

<usedetail id="flushContent">

### 查看部署的案例

部署完成之后，您可以看到系统返回给您的案例地址,进入 webpy 默认的首页，如图:

![](https://img.alicdn.com/imgextra/i2/O1CN01oQDlE01HlzOa7INYR_!!6000000000799-0-tps-1282-960.jpg)


### 二次开发

您可以通过云端控制台的开发功能进行二次开发。如果您之前是在本地创建的项目案例，也可以在本地项目目录`start-webpy-v3`文件夹下，对项目进行二次开发。开发完成后，可以通过`s deploy`进行快速部署。

</usedetail>

## 注意事项

<matters id="flushContent">
</matters>


<devgroup>


## 开发者社区

您如果有关于错误的反馈或者未来的期待，您可以在 [Serverless Devs repo Issues](https://github.com/serverless-devs/serverless-devs/issues) 中进行反馈和交流。如果您想要加入我们的讨论组或者了解 FC 组件的最新动态，您可以通过以下渠道进行：

<p align="center">  

| <img src="https://serverless-article-picture.oss-cn-hangzhou.aliyuncs.com/1635407298906_20211028074819117230.png" width="130px" > | <img src="https://serverless-article-picture.oss-cn-hangzhou.aliyuncs.com/1635407044136_20211028074404326599.png" width="130px" > | <img src="https://serverless-article-picture.oss-cn-hangzhou.aliyuncs.com/1635407252200_20211028074732517533.png" width="130px" > |
| --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| <center>微信公众号：`serverless`</center>                                                                                         | <center>微信小助手：`xiaojiangwh`</center>                                                                                        | <center>钉钉交流群：`33947367`</center>                                                                                           |
</p>
</devgroup>
