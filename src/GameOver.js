import React, {Component} from 'react';
// import { bootstrapUtils } from 'react-bootstrap/lib/utils';
import Button from 'react-bootstrap/Button';
// import { Button } from 'react-bootstrap'

// bootstrapUtils.addStyle(Button, 'custom');


class GameOver extends Component {

    constructor(props){
        super(props);
        this.state = {

        }
    }
render() 

{

    return <div> 
        <h1>Game Over</h1>
        <div> You got {this.props.QuestionsRight} out of 10 questions right</div>
        <Button bsStyle="custom" onClick={this.props.resetGame}>Play Again?</Button>
    </div>
}

}


export default GameOver ;


