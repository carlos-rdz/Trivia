import React, { Component } from 'react';
import './App.css';



class Login extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          users : {email : ""}
        };
      }
componentDidMount(){
    fetch('/user')
      .then(res => res.json())
      .then(users => this.setState({ users }))
}

render()
{
return (<form>
     <label>
         Email:
         {/* change password to password input */}
         <input type="text" name="name"/>
     </label>
     <input type="submit" value="Submit"/>
     </form>
     )
}}

export default Login;