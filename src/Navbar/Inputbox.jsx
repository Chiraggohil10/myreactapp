import { IoLocationOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
function Inputbox() {
  return (
    <div className="inputboxs">
        <IoLocationOutline className="iconssin"/>
        <input type="text" />
        <CiSearch className="iconssin"/>
        <input type="text" />
    </div>
  )
}

export default Inputbox;