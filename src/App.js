import React, { Component } from 'react';
import './App.css';
import Question from './Question';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions : [{question : '', incorrect_answers : []}],
    };
  }
// need to HTML decode
  componentDidMount() {
    fetch('https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple')
      .then(response => response.json())
      .then(data => this.setState({ questions : data.results }));
  }


  render() {
    return (
      <div className="App">
       <div>Question:</div>
       <Question
       questionsArray = {this.state.questions}
       />
      </div>
    );
  }
}

export default App;
