import React, { Component } from 'react';
import './App.css';
import { Redirect } from 'react-router-dom';



class Login extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            email: "",
            password : "",
            submitted : false
        }
        };
      
_handleSubmit = (event) => {
    fetch('/login',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: this.state.email,
            password: this.state.password
          })
    })
    this.setState({submitted : true})
    event.preventDefault();
}

_handleEmailChange = (event) => {
    this.setState({email : event.target.value})
}
_handlePasswordChange = (event) => {
    this.setState({password : event.target.value})
}



render()
{
if (this.state.submitted === true){
return (<Redirect to="/"/>) }
else
return (<form onSubmit={this._handleSubmit}>
     <label>
         Email:
         <input type="text" value={this.state.email} onChange={this._handleEmailChange}name="name"/>
     </label>

     {/* need to hash the password here */}
     <label>
         Password:
         <input type="text" value={this.state.password} onChange={this._handlePasswordChange}name="name"/>
     </label>
     <input type="submit" value="Submit"/>
     </form>
     )
}}

export default Login;