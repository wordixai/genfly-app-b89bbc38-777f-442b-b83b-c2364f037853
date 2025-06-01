import { ChevronUp, Rss } from "lucide-react";

const MainContent = () => {
  const tabs = [
    { name: "技术", href: "/?tab=tech", current: true },
    { name: "创意", href: "/?tab=creative", current: false },
    { name: "好玩", href: "/?tab=play", current: false },
    { name: "Apple", href: "/?tab=apple", current: false },
    { name: "酷工作", href: "/?tab=jobs", current: false },
    { name: "交易", href: "/?tab=deals", current: false },
    { name: "城市", href: "/?tab=city", current: false },
    { name: "问与答", href: "/?tab=qna", current: false },
    { name: "最热", href: "/?tab=hot", current: false },
    { name: "全部", href: "/?tab=all", current: false },
    { name: "R2", href: "/?tab=r2", current: false },
    { name: "VXNA", href: "/xna", current: false }
  ];

  const secondaryTabs = [
    { name: "程序员", href: "/go/programmer" },
    { name: "Python", href: "/go/python" },
    { name: "iDev", href: "/go/idev" },
    { name: "Android", href: "/go/android" },
    { name: "Linux", href: "/go/linux" },
    { name: "node.js", href: "/go/nodejs" },
    { name: "云计算", href: "/go/cloud" },
    { name: "宽带症候群", href: "/go/bb" }
  ];

  const topics = [
    {
      id: 1,
      avatar: "https://cdn.v2ex.com/avatar/4bd6/c5ae/635411_xlarge.png?m=1741657885",
      username: "ZimaBlueee",
      title: "《高性能 MySQL》第三版：是否已经过时？",
      node: "MySQL",
      nodeHref: "/go/mysql",
      time: "15 分钟前",
      lastReplyUser: "815979670",
      replyCount: 8,
      topicHref: "/t/1135741#reply8"
    },
    {
      id: 2,
      avatar: "https://cdn.v2ex.com/gravatar/4b939d3aa2916afabe1701e936e901da?s=48&d=retro",
      username: "LiJavaT",
      title: "异步架构的设计困惑",
      node: "Java",
      nodeHref: "/go/java",
      time: "28 分钟前",
      lastReplyUser: "kkhaike",
      replyCount: 1,
      topicHref: "/t/1135758#reply1"
    },
    {
      id: 3,
      avatar: "https://cdn.v2ex.com/gravatar/a1a7952e770bca1b3c559bfdba68ac5b?s=48&d=retro",
      username: "tangknox1",
      title: "有用 LiveKit 开发过视频语音会议系统的嘛",
      node: "React",
      nodeHref: "/go/react",
      time: "30 分钟前",
      lastReplyUser: "rocmax",
      replyCount: 3,
      topicHref: "/t/1135748#reply3"
    },
    {
      id: 4,
      avatar: "https://cdn.v2ex.com/gravatar/39e185a524ebf37445b268f4af21a585?s=48&d=retro",
      username: "stuliren",
      title: "低 glibc 版本服务器，有没有办法用 AI？",
      node: "程序员",
      nodeHref: "/go/programmer",
      time: "59 分钟前",
      lastReplyUser: "tinybaby365",
      replyCount: 22,
      topicHref: "/t/1135699#reply22"
    },
    {
      id: 5,
      avatar: "https://cdn.v2ex.com/avatar/ed22/24fd/43087_xlarge.png?m=1748442523",
      username: "darkway",
      title: "做 ai 模型层的人,为什么会看不起做应用层的人?是不是做应用的人不配.",
      node: "程序员",
      nodeHref: "/go/programmer",
      time: "38 分钟前",
      lastReplyUser: "404www",
      replyCount: 76,
      topicHref: "/t/1135615#reply76",
      hasVotes: true,
      votes: 2
    }
  ];

  return (
    <div id="Main" className="flex-1 ml-5">
      <div className="sep20"></div>
      
      <div className="box">
        {/* Primary Tabs */}
        <div className="inner" id="Tabs">
          {tabs.map((tab, index) => (
            <a
              key={index}
              href={tab.href}
              className={tab.current ? "tab_current mr-2" : "tab mr-2"}
            >
              {tab.name}
            </a>
          ))}
          &nbsp;
          <a href="/planet">
            <img 
              src="https://v2ex.com/static/img/planet/planet128.png?v=129f466d599bcd3bcb3d7a191f11a2be" 
              className="inline-block h-5" 
              alt="Planet"
            />
          </a>
        </div>

        {/* Secondary Tabs */}
        <div className="cell" id="SecondaryTabs">
          {secondaryTabs.map((tab, index) => (
            <span key={index}>
              <a href={tab.href} className="text-[#778087] hover:text-[#4d5256]">
                {tab.name}
              </a>
              {index < secondaryTabs.length - 1 && <span className="mx-3">&nbsp;</span>}
            </span>
          ))}
        </div>

        {/* Topics List */}
        {topics.map((topic, index) => (
          <div key={topic.id}>
            <div className="cell item">
              <div className="flex w-full">
                <div className="w-12 flex justify-center pt-1">
                  <a href={`/member/${topic.username}`}>
                    <img 
                      src={topic.avatar} 
                      className="avatar w-12 h-12" 
                      alt={topic.username}
                    />
                  </a>
                </div>
                <div className="w-2"></div>
                <div className="flex-1 min-w-0">
                  <span className="item_title">
                    <a href={topic.topicHref} className="topic-link text-base font-normal">
                      {topic.title}
                    </a>
                  </span>
                  <div className="sep5"></div>
                  <span className="topic_info">
                    <div className="votes inline-flex items-center">
                      {topic.hasVotes && (
                        <>
                          <ChevronUp className="w-3 h-3" />
                          &nbsp;{topic.votes}&nbsp;&nbsp;
                        </>
                      )}
                    </div>
                    <a className="node" href={topic.nodeHref}>{topic.node}</a>
                    &nbsp;•&nbsp;
                    <strong>
                      <a href={`/member/${topic.username}`} className="text-[#778087] hover:text-[#4d5256]">
                        {topic.username}
                      </a>
                    </strong>
                    &nbsp;•&nbsp;
                    <span>{topic.time}</span>
                    &nbsp;•&nbsp;
                    最后回复来自 
                    <strong>
                      <a href={`/member/${topic.lastReplyUser}`} className="text-[#778087] hover:text-[#4d5256]">
                        {topic.lastReplyUser}
                      </a>
                    </strong>
                  </span>
                </div>
                <div className="w-[70px] flex justify-end items-center">
                  {topic.replyCount > 0 && (
                    <a href={topic.topicHref} className="count_livid">
                      {topic.replyCount}
                    </a>
                  )}
                </div>
              </div>
            </div>
            {/* Ad placeholder after certain topics */}
            {(index === 4 || index === 9 || index === 14) && (
              <div className="border-b border-[var(--box-border-color)] h-[72px] bg-[#f5f5f5] flex items-center justify-center text-[#999999]">
                广告位
              </div>
            )}
          </div>
        ))}

        {/* Footer */}
        <div className="inner">
          <div className="fr">
            <a href="/feed/tab/tech.xml" target="_blank" className="flex items-center">
              <Rss className="w-4 h-4 mr-1" />
              通过 Atom Feed 订阅
            </a>
          </div>
          <span className="chevron">»</span> &nbsp;
          <a href="/recent" className="text-[#778087] hover:text-[#4d5256]">更多新主题</a>
        </div>
      </div>

      <div className="sep20"></div>

      {/* Advertisement */}
      <div className="wwads-cn wwads-horizontal mb-5">
        <a href="#" className="wwads-img">
          <img src="https://cdn.wwads.cn/creatives/tCsMFF956EX0JzAB8kkMuGpAUwWcW7KoJnzN1fY5.jpg" width="130" alt="万维广告联盟" />
        </a>
        <div className="wwads-content">
          <a href="#" className="wwads-text">
            🛒 B2B2C商家入驻平台系统java版 <b>Java+vue+uniapp</b> 功能强大 稳定 支持diy 方便二开
          </a>
          <a href="#" className="wwads-poweredby">
            <span className="wwads-logo-text">广告</span>
          </a>
        </div>
      </div>

      <div className="sep20"></div>

      {/* Node Navigation */}
      <div className="box">
        <div className="cell">
          <div className="fr">
            <a href="/planes" className="text-[#778087] hover:text-[#4d5256]">浏览全部节点</a>
          </div>
          <span className="fade"><strong>V2EX</strong> / 节点导航</span>
        </div>
        
        <div className="cell">
          <table cellPadding="0" cellSpacing="0">
            <tbody>
              <tr>
                <td className="text-right w-20">
                  <span className="fade">分享与探索</span>
                </td>
                <td className="pl-2 leading-relaxed">
                  <a href="/go/qna" className="text-sm mr-3">问与答</a>
                  <a href="/go/share" className="text-sm mr-3">分享发现</a>
                  <a href="/go/create" className="text-sm mr-3">分享创造</a>
                  <a href="/go/ideas" className="text-sm mr-3">奇思妙想</a>
                  <a href="/go/in" className="text-sm mr-3">分享邀请码</a>
                  <a href="/go/autistic" className="text-sm mr-3">自言自语</a>
                  <a href="/go/design" className="text-sm mr-3">设计</a>
                  <a href="/go/blog" className="text-sm mr-3">Blog</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="cell">
          <table cellPadding="0" cellSpacing="0">
            <tbody>
              <tr>
                <td className="text-right w-20">
                  <span className="fade">Apple</span>
                </td>
                <td className="pl-2 leading-relaxed">
                  <a href="/go/apple" className="text-sm mr-3">Apple</a>
                  <a href="/go/macos" className="text-sm mr-3">macOS</a>
                  <a href="/go/iphone" className="text-sm mr-3">iPhone</a>
                  <a href="/go/mbp" className="text-sm mr-3">MacBook Pro</a>
                  <a href="/go/ios" className="text-sm mr-3">iOS</a>
                  <a href="/go/ipad" className="text-sm mr-3">iPad</a>
                  <a href="/go/watch" className="text-sm mr-3">WATCH</a>
                  <a href="/go/macbook" className="text-sm mr-3">MacBook</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="cell">
          <table cellPadding="0" cellSpacing="0">
            <tbody>
              <tr>
                <td className="text-right w-20">
                  <span className="fade">编程语言</span>
                </td>
                <td className="pl-2 leading-relaxed">
                  <a href="/go/python" className="text-sm mr-3">Python</a>
                  <a href="/go/java" className="text-sm mr-3">Java</a>
                  <a href="/go/php" className="text-sm mr-3">PHP</a>
                  <a href="/go/go" className="text-sm mr-3">Go 编程语言</a>
                  <a href="/go/js" className="text-sm mr-3">JavaScript</a>
                  <a href="/go/nodejs" className="text-sm mr-3">Node.js</a>
                  <a href="/go/cpp" className="text-sm mr-3">C++</a>
                  <a href="/go/rust" className="text-sm mr-3">Rust</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MainContent;