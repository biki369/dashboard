import React from 'react'
import "./profile.css";
import logo  from "../../assets/logo.png"



const Profile = () => {
  return (
   <div className="profile-container">

       <div className="user">
            <div>
                <div className="user-top">
                    <div className="user-img">
                        <img src={logo} alt="" />
                    </div>
                    <div className="user-info">
                        <p className="user-name">Spider men</p>
                        <p className="user-title">Super hero</p>
                    </div>
                </div>
                <div className="user-details">
                    <p className="details-title">Account Details</p>
                    <div className="user-details-info">
                       <p className="name"> <i class="fa-solid fa-user"></i>  Pitter</p>
                       <p className="dob"> <i class="fa-solid fa-calendar"></i> 24.10.1996</p>
                    </div>
                </div>
                <div className="user-details">
                    <p className="details-title">Contact Details</p>
                    <div className="user-details-info">
                       <p className="user-phon">
                       <i class="fa-solid fa-phone"></i>
                           +91723521323</p>
                       <p className="user-email">
                       <i class="fa-solid fa-envelope"></i>
                           anabel@gmail.com6</p>
                       <p className="user-location">
                       <i class="fa-solid fa-location-crosshairs"></i>
                           Tangla|India</p>
                    </div>
                </div>
            </div>
       </div>

       <div className="update-user">
            <div className='update-form'>
                <h2>Edit</h2>
                <form action="">
                    <div className="input__field">
                        <label htmlFor="">User Name</label>
                        <input type="text" placeholder="Spider men" />
                    </div>
                    <div className="input__field">
                        <label htmlFor="">Full Name</label>
                        <input type="text" placeholder="Pitter" />
                    </div>
                    <div className="input__field">
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder="Pitter@gmail.com" />
                    </div>
                    <div className="input__field">
                        <label htmlFor="">Phone Number</label>
                        <input type="number" placeholder="+1097936" />
                    </div>
                    <div className="input__field">
                        <label htmlFor="">Address</label>
                        <input type="text" placeholder="Tangla" />
                    </div>
                </form>
            </div>
            <div className="update-now">
                <div className="user-avatar">
                    <img src={logo} alt="" />
                    <div className="upload-icon">
                    <i class="fa-solid fa-arrow-up-from-bracket"></i>
                    <input type="file"  />
                    </div>
                </div>
                <input type="submit" className="submit-btn"/>
            </div>
       </div>
   </div>
  )
}

export default Profile