import './Navbar.css'
import avatar from '../../assets/avatar.jpg'

const Navbar = ({ sidebarOpen, openSidebar }) => {
    return (
        <div className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars" aria-hidden="true"></i>
            </div>

            {/* <div className="navbar__left">
                <a href="#">Products</a>
                <a href="#">Edit</a>
                <a href="#" className="active_link">Admin</a>
            </div> */}

            <div className="navbar__right">
               <div className="search-box">
                   <input type="text" className="search-txt"name="" placeholder='Type here to search' />
                   <a href="" className="search-btn"><i className='fa fa-search'></i></a>
                   
               </div>

                <a href="#">
                    <i className="fa-solid fa-clock"></i>
                </a>

                <a href="#">
                    <img width="30" src={avatar} alt="avatar"/>
                </a>
            </div>
        </div>
    )
}

export default Navbar