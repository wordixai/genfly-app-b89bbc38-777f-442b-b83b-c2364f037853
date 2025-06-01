import { Rss, Globe } from "lucide-react";

const Sidebar = () => {
  const hotTopics = [
    {
      id: 1,
      avatar: "https://cdn.v2ex.com/avatar/b6cc/3351/559795_normal.png?m=1653033516",
      username: "callmesmc",
      title: "周经帖的末日？笔记软件已经进入决赛圈",
      url: "/t/1135671"
    },
    {
      id: 2,
      avatar: "https://cdn.v2ex.com/avatar/e65a/afe1/219837_normal.png?m=1712800352",
      username: "arnoldnuo",
      title: "为什么在这里留联系方式比如微信、邮箱要用 base64 呢？",
      url: "/t/1135678"
    },
    {
      id: 3,
      avatar: "https://cdn.v2ex.com/avatar/a93f/eb88/130042_normal.png?m=1651655062",
      username: "jessun1990",
      title: "六年前发过一个《抑郁发作求助的帖子》，如今的后续来了（实际上更糟糕了）",
      url: "/t/1135663"
    },
    {
      id: 4,
      avatar: "https://cdn.v2ex.com/avatar/32ad/39d1/647743_normal.png?m=1719759557",
      username: "GeekGuru",
      title: "今年 618 消费欲望不强，只买了一些生活必需品",
      url: "/t/1135708"
    },
    {
      id: 5,
      avatar: "https://cdn.v2ex.com/avatar/ba05/5de8/162924_normal.png?m=1748755227",
      username: "Alloyt",
      title: "Deepseek 的自我阉割",
      url: "/t/1135706"
    }
  ];

  const hotNodes = [
    "问与答", "程序员", "酷工作", "分享发现", "Apple", "分享创造", "macOS", "职场话题", 
    "宽带症候群", "Python", "Android", "iPhone", "全球工单系统", "MacBook Pro", "推广"
  ];

  const recentNodes = [
    "钓鱼", "VXNA", "ENS", "原神", "Mac OS 9", "Diablo IV", "nostr", "Freeform", 
    "OpenAI", "掌机", "YubiKey", "Logseq", "Planet", "魂系游戏", "Mac Studio", 
    "Zoom", "iMovie", "Xbox Series X/S", "NixOS"
  ];

  return (
    <div id="Rightbar" className="w-[270px]">
      <div className="sep20"></div>
      
      {/* Welcome Box */}
      <div className="box mb-5">
        <div className="cell">
          <strong>V2EX = way to explore</strong>
          <div className="sep5"></div>
          <span className="fade">V2EX 是一个关于分享和探索的地方</span>
        </div>
        <div className="inner">
          <div className="sep5"></div>
          <div className="text-center">
            <a href="/signup" className="super normal button">现在注册</a>
            <div className="sep5"></div>
            <div className="sep10"></div>
            已注册用户请 &nbsp;<a href="/signin" className="text-[#778087] hover:text-[#4d5256]">登录</a>
          </div>
        </div>
      </div>

      <div className="sep20"></div>

      {/* Advertisement */}
      <div className="wwads-cn wwads-vertical mb-5">
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

      {/* Hot Topics */}
      <div className="box mb-5" id="TopicsHot">
        <div className="cell">
          <span className="fade">今日热议主题</span>
        </div>
        {hotTopics.map((topic) => (
          <div key={topic.id} className="cell">
            <div className="flex items-center">
              <div className="w-6 flex justify-center">
                <a href={`/member/${topic.username}`}>
                  <img 
                    src={topic.avatar} 
                    className="avatar w-6 h-6" 
                    alt={topic.username}
                  />
                </a>
              </div>
              <div className="w-2"></div>
              <div className="flex-1">
                <span className="item_hot_topic_title">
                  <a href={topic.url} className="text-sm">{topic.title}</a>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="sep20"></div>

      {/* Hot Nodes */}
      <div className="box mb-5">
        <div className="cell">
          <span className="fade">最热节点</span>
        </div>
        <div className="cell">
          {hotNodes.map((node, index) => (
            <a key={index} href={`/go/${node.toLowerCase()}`} className="item_node">
              {node}
            </a>
          ))}
        </div>
        <div className="inner">
          <Rss className="inline w-4 h-4 mr-1" />
          <a href="/index.xml" target="_blank" className="text-[#778087] hover:text-[#4d5256]">RSS</a>
        </div>
      </div>

      <div className="sep20"></div>

      {/* Site of the Day */}
      <div className="box mb-5">
        <div className="cell flex-one-row" style={{gap: '10px'}}>
          <Globe className="w-[18px] h-[18px]" />
          <strong style={{fontFamily: "'Press Start 2P'", fontSize: '10px', fontWeight: 'normal'}}>
            <a href="/xna">VXNA</a>
          </strong>
          <span className="chevron">›</span>
          <span style={{flex: 1}}>Site of the Day</span>
        </div>
        <div className="cell flex-one-row" style={{gap: '5px'}}>
          <div style={{flex: 1}} className="f16">
            <a href="https://blog.licsber.site/" target="_blank">Licsber</a>
          </div>
          <span className="f12 fade">11 篇文章</span>
          <a href="https://blog.licsber.site/atom.xml" target="_blank">
            <Rss className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="sep20"></div>

      {/* Recent Nodes */}
      <div className="box mb-5">
        <div className="cell">
          <span className="fade">最近新增节点</span>
        </div>
        <div className="inner">
          {recentNodes.map((node, index) => (
            <a key={index} href={`/go/${node.toLowerCase()}`} className="item_node">
              {node}
            </a>
          ))}
        </div>
      </div>

      <div className="sep20"></div>

      {/* Community Stats */}
      <div className="box mb-5">
        <div className="cell">
          <span className="fade">社区运行状况</span>
        </div>
        <div className="cell">
          <table className="w-full" cellPadding="5" cellSpacing="0">
            <tbody>
              <tr>
                <td className="w-15 text-right">
                  <span className="gray">注册会员</span>
                </td>
                <td className="text-left">
                  <strong>750,877</strong>
                </td>
              </tr>
              <tr>
                <td className="w-15 text-right">
                  <span className="gray">主题</span>
                </td>
                <td className="text-left">
                  <strong>1,135,762</strong>
                </td>
              </tr>
              <tr>
                <td className="w-15 text-right">
                  <span className="gray">回复</span>
                </td>
                <td className="text-left">
                  <strong>16,325,178</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="sep20"></div>
    </div>
  );
};

export default Sidebar;