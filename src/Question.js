import React, {Component} from "react";
import Container from 'react-bootstrap/Container';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Jumbotron from 'react-bootstrap/Jumbotron';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
// import { Jumbotron, ListGroup, ListGroupItem, PageHeader, Button, ProgressBar, Grid } from 'react-bootstrap'
var he = require('he')


class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result : false,
            user : ""
          };
    }

// this needs to be moved into its own component for user display
// componentDidMount(){
//     fetch('/game')
//         .then(response => response.json())
//         .then(userInfo => {this.setState({user : userInfo})})
// }
// Takes the Obj and converts to JSX to display question
_getQuestions = (Obj) => {
    return <Jumbotron>{he.decode(Obj.question)}</Jumbotron>
}
// Access the Obj then maps the incorrect answers then pushes the correct answer in the array
_getAnswers = (Obj) => {
        let ArrayofAnswers = Obj.incorrect_answers.map((wrongAnswer) => {
            return <ListGroup.Item 
            variant="info" 
            onClick={this.props.wrongAnswer}>
            {he.decode(wrongAnswer)}
            </ListGroup.Item>
        });
      
        ArrayofAnswers.push(
            <ListGroup.Item 
            variant="info" 
            onClick={this.props.rightAnswer }>
            {Obj.correct_answer}
            </ListGroup.Item>
        )
        return this._RandomizeAnswers(ArrayofAnswers)
}
// Shuffles the array of Answers
_RandomizeAnswers = (a) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}



render() {


    return (
        
        <Container className="column gridDisplay"> 
            <ProgressBar
                striped variant="info" active 
                now={this.props.progress} 
                label={`${this.props.progress/10}/10`}
            />
            {this._getQuestions(this.props.question)}
            {/* dispalys questions or result after answering */}
            {this.props.result ? 
                <div className="col align-self-end">
                    <div>{this.props.result}</div>
                    <div>The correct answer is: {this.props.question.correct_answer}</div>
                    <Button 
                        bsSize="large" block 
                        onClick={this.props.fetch}
                        > 
                        Next Question 
                    </Button>
                </div> 
                : 
                <ListGroup vertical block> 
                    {this._getAnswers(this.props.question)} 
                </ListGroup>} 
        </Container>
    );
  }

}

export default Question;