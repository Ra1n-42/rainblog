import SideBar from "./components/Sidebar/SideBar";
import { GiStairsGoal } from "react-icons/gi";
import { SiAboutdotme } from "react-icons/si";
import { RiSlideshow3Line } from "react-icons/ri";
import { VscDebugStart } from "react-icons/vsc";
// import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Me from "./pages/Me";
import NotFound from "./pages/NotFound";

const NavLinks = [
  { label: "Start here", route: "/here", icon: <VscDebugStart size={20} /> },
  {
    label: "How To's",
    route: "/archives",
    icon: <RiSlideshow3Line size={20} />,
  },
  { label: "Journey", route: "/journey", icon: <GiStairsGoal size={20} /> },
  { label: "WhoAmI?", route: "/about", icon: <SiAboutdotme size={20} /> },
];
// const [theme, setTheme] = useState(true)
function App() {
  return (
    <div className="App flex bg-slate-50">
      <SideBar items={NavLinks} />
      <Router>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/about" element={<Me />} />
        </Routes>
      </Router>
      {/* <div className="main"></div> */}
    </div>
  );
}

export default App;
