import avatar from "../assets/avatar.svg";

function SideBar() {
  return (
    <div className="sidebar">
      <img className="sidebar__avatar" src={avatar} alt="user avatar" />
      <p className="sidebar__username">User name</p>
    </div>
  );
}

export default SideBar;
