import { BiArrowToLeft } from "react-icons/bi";
interface NavLink {
  label: string;
  route: string;
  icon: React.ReactNode;
}

interface Props {
  items: NavLink[];
}

export default function SideBar({ items }: Props) {
  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img src="https://img.logoipsum.com/243.svg" alt="" />
          <button className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
            <BiArrowToLeft size={25} />
          </button>
        </div>
        <div className=" border-t flex p-3 justify-center h-full">
          <ul className="px-3">
            {items.map((item) => (
              <li className="flex ">
                {item.icon}
                <a href={item.route}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
}

// export default function SideBarItem({ icon, text, active, alert }) {
//   return (
//     <li>
//       {icon}
//       <span>{text}</span>
//     </li>
//   );
// }
