const Footer = () => {
  return (
    <div id="Bottom" className="bg-white border-t border-[#e2e2e2] mt-10">
      <div className="content">
        <div className="inner">
          <div className="sep10"></div>
          <div className="fr">
            <a href="https://www.digitalocean.com/?refcode=1b51f1a7651d" target="_blank">
              <div className="w-[120px] h-[40px] bg-[url('https://v2ex.com/static/img/do.png')] bg-no-repeat bg-contain"></div>
            </a>
          </div>
          <strong>
            <a href="/about" className="text-[#333333] mr-2">关于</a>
            <span className="text-[#ccc] mx-2">·</span>
            <a href="/help" className="text-[#333333] mr-2">帮助文档</a>
            <span className="text-[#ccc] mx-2">·</span>
            <a href="https://blog.v2ex.com/" className="text-[#333333] mr-2" target="_blank">博客</a>
            <span className="text-[#ccc] mx-2">·</span>
            <a href="/help/api" className="text-[#333333] mr-2">API</a>
            <span className="text-[#ccc] mx-2">·</span>
            <a href="/faq" className="text-[#333333] mr-2">FAQ</a>
            <span className="text-[#ccc] mx-2">·</span>
            <a href="/tools" className="text-[#333333] mr-2">实用小工具</a>
            <span className="text-[#ccc] mx-2">·</span>
            2381 人在线
          </strong>
          <span className="fade ml-2">最高记录 6679</span>
          <span className="text-[#ccc] mx-2">·</span>
          <a href="/select/language" className="text-xs">
            <img src="https://v2ex.com/static/img/language.png?v=6a5cfa731dc71a3769f6daace6784739" width="16" className="inline mr-1" alt="language" />
            Select Language
          </a>
          <div className="sep20"></div>
          创意工作者们的社区
          <div className="sep5"></div>
          World is powered by solitude
          <div className="sep20"></div>
          <span className="text-xs fade">
            VERSION: 3.9.8.5 · 26ms · <a href="/worldclock#utc">UTC 15:14</a> · <a href="/worldclock#pvg">PVG 23:14</a> · <a href="/worldclock#lax">LAX 08:14</a> · <a href="/worldclock#jfk">JFK 11:14</a><br />
            Developed with <a href="https://cl.v2ex.pro/" target="_blank">CodeLauncher</a><br />
            ♥ Do have faith in what you're doing.
          </span>
          <div className="sep10"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;