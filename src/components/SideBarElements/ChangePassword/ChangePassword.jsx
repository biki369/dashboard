import React, { Component } from "react";
import './ChangePassword.css'
export class ChangePassword extends Component {
  render() {
    return (
      <>
        <div class="login-page">
          <div class="form">
            
            <form class="login-form">
              <input type="password" placeholder="old password" />
              <input type="password" placeholder="new password" />
              <input type="password" placeholder="re-enter password" />
              <button>CHANGE PASSWORD</button>
             
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default ChangePassword;
