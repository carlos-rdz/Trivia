import React, {Component} from "react"
var he = require('he');


class Question extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filler : null
          };
    }

_getQuestions = (arrayOfObj) => {
    let listOfQuestions = arrayOfObj.map((questionObj) => {
        return <li>{he.decode(questionObj.question)}</li>
    })
    return listOfQuestions
}

render() {
    return (
          <ul>
              {this._getQuestions(this.props.questionsArray)}
          </ul>
    );
  }

}

export default Question;