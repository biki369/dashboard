import logo from "../../assets/logo.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MenuItemsOne, MenuItemsTwo } from "../data/menuItem";
import "./Sidebar.css";
import Jobs from "../SideBarElements/Jobs/Jobs";
import Calender from "../SideBarElements/Calender/Calender";
import Tasks from "../SideBarElements/Tasks/Tasks";
import Users from "../SideBarElements/Users/Users";
import Reports from "../SideBarElements/Reports/Reports";
import Projects from "../SideBarElements/Projects/Projects";
import Location from "../SideBarElements/Location/Location";
import Resume from "../SideBarElements/Resume/Resume";
import Home from "../SideBarElements/Home/Home";

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
          {MenuItemsOne.map((elm, index) => (
            <div className="sidebar__link" key={index}>
              <i className={`fa ${elm.icon}`}></i>
              <a href={elm.link}>{elm.name}</a>
            </div>
          ))}

          <h2>Admin</h2>
          {MenuItemsTwo.map((elm, index) => (
            <div className="sidebar__link" key={index}>
              <i className={`fa ${elm.icon}`}></i>
              <Link to={elm.link}>{elm.name}</Link>
            </div>
          ))}
          <div className="sidebar__logout">
            <i className="fa fa-power-off"></i>
            <a href="#">Log out</a>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/Jobs" element={<Jobs />}></Route>
        <Route path="/Resume" element={<Resume />}></Route>
        <Route path="/Tasks" element={<Tasks />}></Route>
        <Route path="/Calender" element={<Calender />}></Route>
        <Route path="/Users" element={<Users />}></Route>
        <Route path="/Location" element={<Location />}></Route>
        <Route path="/Projects" element={<Projects />}></Route>
        <Route path="/Reports" element={<Reports />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
};
export default Sidebar;
