import NavBar from "./components/NavBar";
import NavItem from "./components/NavItem";
import { FaPlus, FaBell } from "react-icons/fa";
import { BiMessageRoundedDetail } from 'react-icons/bi';
import { IoIosArrowDropdownCircle } from 'react-icons/io'
import DropdownMenu from "./components/DropdownMenu";


function App() {

  return (
    <NavBar>
      <NavItem icon={<FaPlus />} />
      <NavItem icon={<FaBell />} />
      <NavItem icon={<BiMessageRoundedDetail />} />
      <NavItem icon={<IoIosArrowDropdownCircle />}>
        <DropdownMenu />
      </NavItem>
    </NavBar>
  )
}



export default App
