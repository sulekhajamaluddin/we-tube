import "../App.css";
import { MdHomeFilled,MdOutlineExplore,MdOutlineSubscriptions, MdOutlineVideoLibrary } from "react-icons/md";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { GrHistory } from "react-icons/gr";
import SideBarIcons from "./SideBarIcons";

const SideBar = () => {
  return (
    <div className="sidebar">
        <SideBarIcons icon={<MdHomeFilled className="sidebar_icon"/>} text='Home' />
        <SideBarIcons icon={<MdOutlineExplore className="sidebar_icon"/>} text='Explore' />
        <SideBarIcons icon={<BsFillLightningChargeFill className="sidebar_icon"/>} text='Shorts' />
        <SideBarIcons icon={<MdOutlineSubscriptions className="sidebar_icon"/>} text='Subscriptions' />
        <SideBarIcons icon={<MdOutlineVideoLibrary className="sidebar_icon"/>} text='Library' />
        <SideBarIcons icon={<GrHistory className="sidebar_icon"/>} text='History' />
    </div>
  )
}
export default SideBar