import { useLayoutEffect, useRef, useState } from 'react';
import { CSSTransition } from "react-transition-group";
import { FaCog, FaHtml5, FaReact } from "react-icons/fa";
import { BiSolidFileCss } from "react-icons/bi";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
  IoLogoJavascript,
} from "react-icons/io";
import { SiTailwindcss } from "react-icons/si";

const DropdownMenu = () => {
    const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useLayoutEffect(() => {
    setMenuHeight(dropdownRef.current.clientHeight);
    // setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, [setMenuHeight]);

  function calcHeight(el) {
    const height = el.clientHeight + 20;
    setMenuHeight(height);
  }

  const DropdownItem = (props) => {
    return (
      <a
          href="#"
          className="menu-item"
          onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
        >
          <span className="icon-button">{props.leftIcon}</span>
          {props.children}
          <span className="icon-right">{props.rightIcon}</span>
        </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        unmountOnExit
        timeout={500}
        classNames="menu-primary"
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<IoIosArrowDropleftCircle />}
            goToMenu="settings"
          >
            Settings
          </DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<IoIosArrowDroprightCircle />}>
            <h2>My Tutorial</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<FaHtml5 />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<BiSolidFileCss />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<IoLogoJavascript />}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={<FaReact />}>React JS</DropdownItem>
          <DropdownItem leftIcon={<SiTailwindcss />}>Tailwind CSS</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  )
}

export default DropdownMenu