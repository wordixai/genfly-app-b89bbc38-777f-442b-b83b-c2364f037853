import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <Header />
      
      <div id="Wrapper">
        <div className="content">
          <div className="flex">
            <div id="Leftbar" className="w-0"></div>
            <Sidebar />
            <MainContent />
          </div>
          <div className="clear-both"></div>
          <div className="sep20"></div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;