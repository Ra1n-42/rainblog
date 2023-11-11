import styles from "./NavBar.module.css";
// import { AiOutlineClose } from "react-icons/ai";

const NavLinks = [
  { label: "Who am I?", route: "/me" },
  { label: "How To's", route: "/archives" },
  { label: "Journey", route: "/journey" },
  { label: "About", route: "/about" },
];

function NavBar() {
  return (
    <div className={`${styles.SideBarMenuContainer}`}>
      <div className={styles.SideBarMenu}>
        <div className={styles.CloseButtonContainer}>
          <button className={styles.BtnClose}>
            <span>&times;</span>
          </button>
        </div>
        <div className={styles.MenuLinks}>
          <ul>
            {NavLinks.map((item) => (
              <li className={styles.NavBarMenuList}>
                <a href={item.route}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
