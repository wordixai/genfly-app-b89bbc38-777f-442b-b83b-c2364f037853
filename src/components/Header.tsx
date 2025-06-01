import { Search } from "lucide-react";

const Header = () => {
  return (
    <div id="Top" className="bg-white border-b border-[#e2e2e2]">
      <div className="content">
        <div className="site-nav">
          <a href="/" title="way to explore">
            <div id="Logo"></div>
          </a>
          <div id="search-container" className="relative">
            <div className="relative">
              <input
                id="search"
                type="text"
                maxLength={128}
                autoComplete="off"
                tabIndex={1}
                placeholder="搜索主题、节点、用户"
                className="w-[300px] px-3 py-1 text-sm border border-[#ccc] rounded focus:outline-none focus:border-[#778087] pr-8"
              />
              <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#999999]" />
            </div>
            <div id="search-result" className="box absolute top-full left-0 w-full mt-1 hidden"></div>
          </div>
          <div className="tools">
            {/* Tools section - can be expanded later */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;