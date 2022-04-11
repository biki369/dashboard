import logo from "../../assets/logo.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MenuItemsOne} from "../data/menuItem";
import "./Sidebar.css";
import Profile from "../SideBarElements/Profile/Profile";
import Settings from "../SideBarElements/Settings/Settings";
import Browse from "../SideBarElements/Browse/Browse";
import ChangePassword from "../SideBarElements/ChangePassword/ChangePassword";
const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <Router>
      <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
        <div className="sidebar__title">
          <div className="sidebar__img">
            <img src={logo} alt="logo" />
            <h1>Username</h1>
          </div>

          <i
            onClick={() => closeSidebar()}
            className="fa fa-times"
            id="sidebarIcon"
            aria-hidden="true"
          ></i>
        </div>

        <div className="sidebar__menu">
          <h2>Home</h2>
          <ul>
          {MenuItemsOne.map((elm, index) => (
            <li className="sidebar__link " key={index}>
              
              <a className={`sidebar-item`}href={elm.link}><i className={`fa ${elm.icon}`}> </i> {elm.name}</a>
            </li>
          ))}
          </ul>
         

       
          <div className="sidebar__logout">
            <i className="fa fa-power-off"></i>
            <a href="#">Log out</a>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/browse" element={<Browse />}></Route>
        <Route path="/change-password" element={<ChangePassword />}></Route>
        <Route path="/" element={<Profile />}></Route>
      </Routes>
    </Router>
  );
};
export default Sidebar;
