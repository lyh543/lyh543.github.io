(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{613:function(e,t,v){"use strict";v.r(t);var r=v(3),_=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("虽然现在提到云原生，大家就会想到 Kubernetes，但是云原生并不仅仅是 Kubernetes。云原生是一种基础设施架构的设计思想和理念，而 Kubernetes 是云原生这张蓝图上的一个组件。")]),e._v(" "),t("blockquote",[t("p",[e._v("云原生的本质是一系列最佳实践的结合。云原生为实践者指定了一条低心智负担的，能够以可扩展、可复制的方式，最大化地利用云的能力发挥云的价值和最佳路径。"),t("br"),e._v(" "),t("strong",[e._v("云原生并不指代某种开源设计和技术，而是一套指导软件和基础设施架构设计的思想")]),e._v("。这种思想一言以蔽之，就是“"),t("strong",[e._v("以应用为中心")]),e._v("”。正是“以应用为中心”，云原生技术体系才会无限强调，让基础设施能够更好地配合应用，以最高效的方式为应用输送基础能力。"),t("br"),e._v("\nDocker、Kubernetes、Operator 等在云原生生态中起关键作用的开源项目，就是让这种思想落地的技术手段。"),t("br"),e._v("\n--《深入剖析 Kubernetes》—— 再谈 Kubernetes 的本质与云原生")])]),e._v(" "),t("h3",{attrs:{id:"云的迭代"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#云的迭代"}},[e._v("#")]),e._v(" 云的迭代")]),e._v(" "),t("p",[e._v("亚马逊云科技的"),t("a",{attrs:{href:"https://www.amazonaws.cn/knowledge/what-is-cloud-native/",target:"_blank",rel:"noopener noreferrer"}},[e._v("文章"),t("OutboundLink")],1),e._v("中，提到了云迭代的四个阶段：")]),e._v(" "),t("p",[t("img",{attrs:{src:"/images/aws-cloud-native-evolution.png",alt:"AWS 云的迭代"}})]),e._v(" "),t("ul",[t("li",[e._v("第一个阶段："),t("strong",[e._v("自建 IDC")]),e._v("——云厂商出现之前，每个企业需要维护自己的机房和整套设备。")]),e._v(" "),t("li",[e._v("第二个阶段："),t("strong",[e._v("云计算")]),e._v("——是云厂商出现后，企业可以选择在云厂商购买 VM 等产品，替代掉自己的机房，省去机房维护的成本。")]),e._v(" "),t("li",[e._v("第三个阶段，"),t("strong",[e._v("容器化")]),e._v("——是企业可以将应用打包成容器，部署到云上，实现更快的部署和更高的弹性，省去了维护 VM、监控 VM 等的成本。")]),e._v(" "),t("li",[e._v("第四个阶段，"),t("strong",[e._v("Serverless")]),e._v("——是企业可以选择使用 Serverless 的方案，将应用的可执行文件直接部署到云上，这样就不存在服务器的概念了，也省去了维护服务器的成本。")])]),e._v(" "),t("p",[e._v("从第一个阶段到第四个阶段，"),t("strong",[e._v("自动化运维的程度越来越高，研发团队在运维上花的精力越来越少，研发可以将更多的精力放在应用研发本身上")]),e._v("。")]),e._v(" "),t("p",[e._v("这并不意味着 Serverless 就一定最先进，自建 IDC 就一定落后。在企业数据规模越来越大以后，自建 IDC 的成本会更加可控，从成本角度考虑，企业反而可能会从 Serverless 方案、容器化方案迁移到自建机房。")]),e._v(" "),t("h3",{attrs:{id:"容器化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#容器化"}},[e._v("#")]),e._v(" 容器化")]),e._v(" "),t("blockquote",[t("p",[e._v("The most notable change, Sharma said, was the move from tightly coupled systems with many dependent components to loosely coupled systems made of tiny components that could run quasi-independently."),t("br"),e._v("\nThose components are containers.")]),e._v(" "),t("p",[e._v("最大的变化是，从由大量依赖的组件构成的紧密耦合的系统，转变为由许多微小组件构成的松散耦合的系统，这些组件几乎是可以独立运行的。这些组件就是容器。")]),e._v(" "),t("p",[e._v("--"),t("a",{attrs:{href:"https://builtin.com/articles/what-is-cloud-native",target:"_blank",rel:"noopener noreferrer"}},[e._v("What Is Cloud Native? | Built In"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("容器化可以说是云原生最核心的特点了。容器化技术的出现，让应用的部署和运维变得更加简单，也让应用的开发和测试变得更加高效。")]),e._v(" "),t("p",[e._v("大二的时候，老师在课上讲解在 Windows 上安装 MySQL 的步骤，我却发现一行 "),t("code",[e._v("docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=secret1234 mysql:8")]),e._v(" 就能达到同样的效果，一行 "),t("code",[e._v("docker stop")]),e._v(" 外加两三秒的时间就能完成 MySQL 的“卸载”，容器化给了那个时候的我一点小小的震撼。从此我便爱上了 Docker，愿意把各种 Web 前端、后端服务都用 Dockerfile 容器化，然后在服务器上用一行 "),t("code",[e._v("docker run")]),e._v(" 跑起来。")]),e._v(" "),t("p",[e._v("时至今日，当我在工作上编写完 Python 应用后，也会部署到 K8s 上。我不需要担心应用实际部署在集群的哪个虚拟机（K8s 节点）上，也不用担心那台虚拟机的环境有没有可能不干净；当我想要调整 CPU、内存资源的时候，改两行 yaml，然后重新 "),t("code",[e._v("kubectl apply")]),e._v(" 就好，也不需要担心如果这个虚拟机的资源不够，容器需要在其它虚拟机上运行，由此会不会产生一系列运维问题。")]),e._v(" "),t("h3",{attrs:{id:"声明式-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#声明式-api"}},[e._v("#")]),e._v(" 声明式 API")]),e._v(" "),t("p",[e._v("声明式 API，也是 Kubernetes 的一大亮点。")]),e._v(" "),t("p",[e._v("声明式 API 是一种描述系统状态的方式，而不是告诉系统如何去做，让系统想办法去实现这个状态。声明式 API 的优点就在于，"),t("strong",[e._v("系统将如何实现的细节完全隐藏起来了，大大降低了研发和运维的心智负担，让研发能够聚集精力在应用本身上")]),e._v("。")]),e._v(" "),t("p",[e._v("在上面的例子中有提到，如果我想要当我想要调整 CPU、内存资源的时候，改两行 yaml 然后 "),t("code",[e._v("kubectl apply")]),e._v(" 就好，这就是声明式 API 的一种体现。我声明我想要的终态，至于这个服务是否要改到其它节点运行，以及其它的技术细节，我都不用担心。")]),e._v(" "),t("p",[e._v("Kubernetes 实现声明式 API 的方法——"),t("strong",[e._v("控制循环")]),e._v("，在这本书中也有大量提及。不仅是 Pod 的调度，在实现 CRD、存储、网络等等资源时，我们都需要和控制循环打交道。控制循环的核心就是一个 for 循环，不断地向 kube-apiserver 请求期望状态，检查当前状态和期望状态是否一致，如果不一致就调用相应的函数去更改现有状态，更改完成后再进行检查。")]),e._v(" "),t("p",[e._v("除了 Kubernetes 以外，还有很多技术也使用了声明式语法：")]),e._v(" "),t("ul",[t("li",[e._v("绝大部分"),t("strong",[e._v("前端框架")]),e._v("（React、Vue、Flutter 等等）都是声明式的。开发者只需要声明终态，框架实现页面元素的 diff 增量更新。命令式的 jQuery 就已经消失在历史的长河中了。")]),e._v(" "),t("li",[t("strong",[e._v("Ansible")]),e._v(" 这个运维工具也是声明式的。举个栗子，如果开发者想要增/删/改一个文件，只需要声明这个文件是否存在、内容是什么，Ansible 会自动帮你实现这个状态，缺了就写，多了就删，不同就更新，相同则不执行任何操作。用 shell 这种命令式语法实现同样的效果就很麻烦。")]),e._v(" "),t("li",[t("strong",[e._v("Python 的装饰器")]),e._v("（"),t("code",[e._v("@register")]),e._v("）、"),t("strong",[e._v("Java 的注解")]),e._v("（"),t("code",[e._v("@Transactional")]),e._v("）、"),t("strong",[e._v("Go 的 struct tag")]),e._v(" 等等，都是声明式的语法。这些语法的目的都是为了让开发者用一个 tag 来描述需要的功能，读代码的人看到 tag 也知道是什么效果，框架负责实现背后的逻辑，对开发和维护都十分友好。")])]),e._v(" "),t("p",[e._v("总的来说，在该使用声明式的地方用声明式，能大大提高代码的可读性和可维护性，降低研发的心智负担。")]),e._v(" "),t("h3",{attrs:{id:"监控和告警"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#监控和告警"}},[e._v("#")]),e._v(" 监控和告警")]),e._v(" "),t("p",[e._v("在自建 IDC 中，我们需要自己搭建监控服务（例如 "),t("a",{attrs:{href:"https://www.zabbix.com/cn",target:"_blank",rel:"noopener noreferrer"}},[e._v("Zabbix"),t("OutboundLink")],1),e._v("），在自己的机器上安装监控客户端，向中心服务器汇报监控指标。")]),e._v(" "),t("p",[e._v("当企业开始使用云厂商的 VM 和 DB 等 SaaS 服务时，云厂商也提供了对应通用的监控和告警。比如 AWS 的 CloudWatch，可以监控 EC2、RDS、S3 等等资源的 CPU、内存、网络等指标，也可以设置告警规则，当某个指标超过阈值时发送邮件或者短信。")]),e._v(" "),t("p",[e._v("在 Kubernetes 的体系下，由于应用以 Pod 为单位运行，监控和告警的粒度从虚拟机（K8s 节点）细化到了 Pod。多个应用在同一台虚拟机上运行，互不干扰，对用户也无感，也不需要担心监控指标的混淆。")]),e._v(" "),t("h3",{attrs:{id:"可横向扩展"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可横向扩展"}},[e._v("#")]),e._v(" 可横向扩展")]),e._v(" "),t("p",[e._v("在接触 Kubernetes 以前，我以为 Kubernetes 就是一个分布式的 Docker，尽管实际接触以后发现 Kubernetes 还在调度、声明式 API、自定义资源等方面下了足够的功夫，但是 Kubernetes 的横向扩展能力也是它的一大特点。")]),e._v(" "),t("p",[e._v("在 Kubernetes 中，加机器这件事情会变得非常简单。只需要在云厂商的控制台上增加一个虚拟机，然后在 K8s 集群中添加这个节点，K8s 就会自动将 Pod 调度到这个节点上，对研发来说，这同样是无感的。")]),e._v(" "),t("p",[e._v("而在减机器、临时下线机器（用于维护）的场景下，服务的维护窗口期从小时级别（机器下线、维护、重新上线）变到了分钟级（下线 Node 后，K8s 会自动在新的 Node 重新部署 Pod）。当然，如果应用层面实现了多个副本的高可用，那么无论是 Kubernetes 还是自建，维护机器时总能做到高可用。")]),e._v(" "),t("h3",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[e._v("#")]),e._v(" 总结")]),e._v(" "),t("p",[e._v("虽然听到云原生这个词，就会想到有很多新的技术需要学习，但学会这些技术能够让你拥有更大的运维能力，从应用研发，到部署，到运维，都能够更加高效。初始化头疼。一两行配置就能修改了。")]),e._v(" "),t("p",[e._v("如果你的服务只需要在一台裸机上运行，学会云原生可能无法立即帮助到你；但如果想要利用大规模的计算资源，云原生是不可或缺的一项技术。")])])}),[],!1,null,null,null);t.default=_.exports}}]);