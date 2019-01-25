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
_getQuestions = (Obj) => {
        return <PageHeader>{he.decode(Obj.question)}</PageHeader>
}
_getAnswers = (Obj) => {
        let ArrayofAnswers = Obj.incorrect_answers.map((wrongAnswer) => {
            return <ListGroupItem bsStyle="info"  onClick={this.props.wrongAnswer} >{he.decode(wrongAnswer)}</ListGroupItem>
        });
      
        ArrayofAnswers.push(<ListGroupItem bsStyle="info"  onClick={this.props.rightAnswer }>{Obj.correct_answer}</ListGroupItem>
        )
        return this._RandomizeAnswers(ArrayofAnswers)
}

render() {
    return (
        <div> 
            {this._getQuestions(this.props.question)}
            {this.props.result ? 
                <div>
                    <div>{this.props.result}</div>
                    <div>The correct answer is: {this.props.question.correct_answer}</div>
                    <Button bsSize="large" block onClick={this.props.fetch}> Next Question </Button>
                </div> : 
                <ListGroup vertical block> 
                    {this._getAnswers(this.props.question)} 
                </ListGroup>} 
        </div>
    );
  }

}

export default Question;