import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {Form, Button} from 'react-bootstrap';
import './App.css';



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
    return fetch('/login',{
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
    // .then(this.props.loginCheck())
    .then(this.setState({submitted : true}))
    
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
return (
    <Form onSubmit={this._handleSubmit}>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={this._handleEmailChange} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
                 We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={this._handlePasswordChange} type="password" placeholder="Password" />
            </Form.Group>
        <Button variant="primary" type="submit">
            Submit
            </Button>
    </Form>
     )
}}

export default Login;




// {/* <Form onSubmit={this._handleSubmit}>
//      <label>
//          Email:
//          <input type="text" value={this.state.email} onChange={this._handleEmailChange}name="name"/>
//      </label>

//      {/* need to hash the password here */}
//      <label>
//          Password:
//          <input type="text" value={this.state.password} onChange={this._handlePasswordChange}name="name"/>
//      </label>
//      <input type="submit" value="Submit"/>
//      </Form> */}