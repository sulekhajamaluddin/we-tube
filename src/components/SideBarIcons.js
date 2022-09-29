import "../App.css";
const SideBarIcons = ({icon, text}) => {
  return (
    <div className="sidebar_icon_container">
      <button className="sidebar_icon">{icon}</button>
      <span className="sidebar_icon_text">{text}</span>
    </div>
  )
}
export default SideBarIcons;