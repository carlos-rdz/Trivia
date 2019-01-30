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
let user = this.state.users.email;
return (<div> {user} is logged in</div>)
}}

export default Login;