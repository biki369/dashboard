
import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { MenuItemsOne, MenuItemsTwo } from '../data/menuItem';
import './Sidebar.css';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {

    // const [active, isActive] = React.useState(true);

    return (
        <div className={sidebarOpen ? 'sidebar-responsive' : ''} id="sidebar">
            <div className='sidebar__title'>
                <div className='sidebar__img'>
                    <img src={logo} alt="logo" />
                    <h1>Teacher</h1>
                </div>

                <i
                    onClick={() => closeSidebar()}
                    className="fa fa-times"
                    id="sidebarIcon"
                    aria-hidden="true"
                ></i>
            </div>

            <div className="sidebar__menu">
                <Link to="/" className="sidebar__link active_menu_link">
                    <i className="fa fa-minus-square"></i>
                    <span className="link-name">Home</span>
                </Link>
                <h2>Home</h2>
                {
                    MenuItemsOne.map((elm, index) => (
                        <>
                            <NavLink to={elm.link} className={({ isActive }) => (isActive ? 'sidebar__link active_menu_link' : 'sidebar__link')} key={index}>
                                <i className={`fa ${elm.icon}`}></i>
                                <span className="link-name">{elm.name}</span>
                            </NavLink>
                        </>
                    ))
                }

                <h2>Admin</h2>
                {
                    MenuItemsTwo.map((elm, index) => (

                        <>
                            <NavLink to={elm.link} className={({ isActive }) => (isActive ? 'sidebar__link active_menu_link' : 'sidebar__link')} key={index}>
                                <i className={`fa ${elm.icon}`}></i>
                                <span className="link-name">{elm.name}</span>
                            </NavLink>
                        </>
                    ))
                }

                <Link to="/" className="sidebar__logout">
                    <i className="fa fa-power-off"></i>
                    <span className="link-name">Log out</span>
                </Link>
            </div>

        </div>
    )
}
export default Sidebar;