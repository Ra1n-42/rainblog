import SideBar from "./components/Sidebar/SideBar";
import { GiStairsGoal } from "react-icons/gi";
import { SiAboutdotme } from "react-icons/si";
import { RiSlideshow3Line } from "react-icons/ri";
import { VscDebugStart } from "react-icons/vsc";
import { useState } from "react";

const NavLinks = [
  { label: "Start here", route: "/here", icon: <VscDebugStart size={20} /> },
  {
    label: "How To's",
    route: "/archives",
    icon: <RiSlideshow3Line size={20} />,
  },
  { label: "Journey", route: "/journey", icon: <GiStairsGoal size={20} /> },
  { label: "About", route: "/about", icon: <SiAboutdotme size={20} /> },
];
// const [theme, setTheme] = useState(true)
function App() {
  return (
    <div className="App flex bg-slate-100">
      <SideBar items={NavLinks} />
      <div className="main"></div>
    </div>
  );
}

export default App;
