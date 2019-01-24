import React, {Component} from "react"
var he = require('he');


class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filler : null
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
        return <div>{he.decode(questionObj.question)}</div>
    })
    return listOfQuestions
}
_getAnswers = (arrayOfObj) => {

    let ArrayofAnswerArrays = arrayOfObj.map((questionObj) => {
        let ArrayofAnswers = questionObj.incorrect_answers.map((wrongAnswer) => {
            return <li> {wrongAnswer}</li>
        })

        ArrayofAnswers.push(<li>{questionObj.correct_answer}</li>)
        return this._RandomizeAnswers(ArrayofAnswers)
    })
    return ArrayofAnswerArrays
}



render() {
    return (
        <div>
          <div>
              {this._getQuestions(this.props.questionsArray)}
          </div>
          <div>Answers: </div>
          <ul> {this._getAnswers(this.props.questionsArray)} </ul>
        </div>  
    );
  }

}

export default Question;