import { useState } from "react";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";
interface NavLink {
  label: string;
  route: string;
  icon: React.ReactNode;
}

interface Props {
  items: NavLink[];
}

export default function SideBar({ items }: Props) {
  const [expanded, setExpanded] = useState(false);
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm ">
        <div className="relative">
          {/* <img src="https://img.logoipsum.com/243.svg" alt="" /> */}
          <button
            title={expanded ? "close" : "open"}
            className={`
            absolute p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 top-1
            ${expanded ? "right-2" : "left-3"}
            `}
            onClick={() => setExpanded((curr) => !curr)}
          >
            {expanded ? (
              <BiArrowToLeft size={25} />
            ) : (
              <BiArrowToRight size={25} />
            )}
          </button>
        </div>
        {/* Navigationskontainer */}
        <div className="Navcontainer pt-12">
          <ul className="NavList px-5">
            {items.map((item) => (
              <li
                key={item.route}
                className="flex items-center cursor-pointer mt-10 group"
              >
                <a href={item.route}>{item.icon}</a>

                <a
                  className={`overflow-hidden transition-all  ${
                    expanded ? "w-30 ml-3" : "hidden w-0"
                  }`}
                  href={item.route}
                >
                  {item.label}
                </a>
                {!expanded && (
                  <div
                    className={`
                    absolute rounded-md px-2 py-1 left-12 bg-indigo-100 text-indigo-800 text-sm 
                    invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100
                    group-hover:translate-x-0 mx-5
                    `}
                  >
                    {item.label}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
}
