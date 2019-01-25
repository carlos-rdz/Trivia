import React, { Component } from 'react';
import './App.css';
import Question from './Question';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question : {question : '', incorrect_answers : []},
      result : false
    };
  }
// need to HTML decode
  componentDidMount() {
    fetch('https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple')
      .then(response => response.json())
      .then(data => this.setState({ question : data.results[0] }));
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
        question : data.results[0] }));
  }

  render() {
    return (
      <div className="App">
       <Question
       question = {this.state.question}
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
