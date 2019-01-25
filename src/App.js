import React, { Component } from 'react';
import './App.css';
import Question from './Question';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions : [{question : '', incorrect_answers : []}],
      result : false
    };
  }
// need to HTML decode
  componentDidMount() {
    fetch('https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple')
      .then(response => response.json())
      .then(data => this.setState({ questions : data.results }));
  }
  _resetResult = () => {
    this.setState({result : false})
  }
  _rightAnswer = () => {
    this.setState({result : "Right"})
  }
  _wrongAnswer = () => {
    this.setState({result : "Wrong"})
  }

  _fetchData = () => {
    fetch('https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple')
      .then(response => response.json())
      .then(data => this.setState({ 
        result : false,
        questions : data.results }));
  }

  render() {
    return (
      <div className="App">
       <Question
       questionsArray = {this.state.questions}
       fetch = {this._fetchData}
       result = {this.state.result}
       resetResult = {this._resetResult}
       rightAnswer = {this._rightAnswer}
       wrongAnswer = {this._wrongAnswer}
       />
      </div>
    );
  }
}

export default App;
