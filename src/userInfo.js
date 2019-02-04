import React, {Component} from 'react';


class UserInfo extends Component {

    constructor(props){
        super(props);
        this.state = {
            user : 
                {id:0,
                email:""
                }
        }
    }

componentDidMount(){
    fetch('/game')
    .then(response => response.json())
    .catch(console.log("not logged in"))
    .then(userInfo => {this.setState({user : userInfo})})
}
render() 

{

    return <div> 
        <div> {this.state.user.email} is logged in</div>
    </div>
}}

export default UserInfo;