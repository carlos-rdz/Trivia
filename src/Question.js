import React, {Component} from "react"
import { ListGroup, ListGroupItem, PageHeader, Button } from 'react-bootstrap'
var he = require('he');


class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result : false
          };
    }

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
_getQuestions = (arrayOfObj) => {
    let listOfQuestions = arrayOfObj.map((questionObj) => {
        return <PageHeader>{he.decode(questionObj.question)}</PageHeader>
    })
    return listOfQuestions
}
_getAnswers = (arrayOfObj) => {

    let ArrayofAnswerArrays = arrayOfObj.map((questionObj) => {
        let ArrayofAnswers = questionObj.incorrect_answers.map((wrongAnswer) => {
            return <ListGroupItem bsStyle="info"  onClick={this.props.wrongAnswer} >{wrongAnswer}</ListGroupItem>
            
        })
        ArrayofAnswers.push(<ListGroupItem bsStyle="info"  onClick={this.props.rightAnswer }>{questionObj.correct_answer}</ListGroupItem>
        )
        return this._RandomizeAnswers(ArrayofAnswers)
    })
    return ArrayofAnswerArrays
}



render() {
    return (
        <div> 
            {this._getQuestions(this.props.questionsArray)}
            {this.props.result ? 
                <div>
                    <div>{this.props.result}</div>
                    <div>The correct answer is: {this.props.questionsArray[0].correct_answer}</div>
                    <Button bsSize="large" block onClick={this.props.fetch}> Next Question </Button>
                </div> : 
                <ListGroup vertical block> 
                    {this._getAnswers(this.props.questionsArray)} 
                </ListGroup>} 
        </div>
    );
  }

}

export default Question;