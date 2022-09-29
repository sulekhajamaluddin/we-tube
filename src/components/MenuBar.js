import "../App.css";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import { FaBars, FaRegUserCircle } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

const MenuBar = () => {
  const navigate = useNavigate();

  return (
    <div className="menubar">
      <div className="menubar_left">
        <FaBars className="menubar_left_burger-menu-icon" />
        <img
          src={`../logo.svg`}
          alt="we-tube logo"
          className="menubar_left_logo"
          onClick={() => {
            navigate("/");
          }}
        />
      </div>

      <div className="search">
        <SearchBar />
      </div>

      <div className="menubar_right">
        <div className="menubar_right_settings-icon">
          <BsThreeDotsVertical />
        </div>
        <div className="menubar_right_sign-in">
          <FaRegUserCircle className="menubar_right_user-icon" />
          <div className="menubar_right_sign-in-text">Sign In</div>
        </div>
      </div>
    </div>
  );
};
export default MenuBar;
