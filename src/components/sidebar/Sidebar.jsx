import logo from '../../assets/logo.png';
import { MenuItemsOne, MenuItemsTwo } from '../data/menuItem';
import './Sidebar.css';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return(
        <div className={sidebarOpen ? 'sidebar-responsive' : ''} id="sidebar">
            <div className='sidebar__title'>
                <div className='sidebar__img'>
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
                 {
                     MenuItemsOne.map((elm,index) =>(
                        <div className="sidebar__link" key={index}>
                        <i className={`fa ${elm.icon}`}></i>
                        <a href={elm.link}>{elm.name}</a>
                    </div>
                     ))
                 }

                <h2>Admin</h2>
                 {
                      MenuItemsTwo.map((elm,index) =>(
                        <div className="sidebar__link" key={index}>
                        <i className={`fa ${elm.icon}`}></i>
                        <a href={elm.link}>{elm.name}</a>
                    </div>
                     )) 
                 }
                 <div className="sidebar__logout">
                    <i className="fa fa-power-off"></i>
                    <a href="#">Log out</a>
                </div>
            </div>

        </div>
    )
}
export default Sidebar;