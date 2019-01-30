import React, { Component } from 'react';
import './App.css';
import Question from './Question';
import GameOver from './GameOver';
import Login from './Login';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question : {question : '', incorrect_answers : []},
      result : false,
      progress : 0,
      gameOver : false,
      QuestionsRight : 0
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

    if (this.state.progress === 100) {
      this.setState({gameOver : true})
    } else {
    this.setState({
      result : "Right",
      QuestionsRight : this.state.QuestionsRight + 1
  })}
  }
  _wrongAnswer = () => {
    if (this.state.progress === 100) {
      this.setState({gameOver : true})
    } else {
    this.setState({result : "Wrong"})}
  }

  _handleNextClick = () => {

    let newProgress = this.state.progress + 10;
    fetch('https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple')
      .then(response => response.json())
      .then(data => this.setState({ 
        result : false,
        question : data.results[0], 
        progress : newProgress
      }));
  }

  _addToProgress = () => {
    let newProgress = this.state.progress + 1;
    this.setState({
      progres : newProgress
    })
  }

  _resetGame = () => {
    fetch('https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple')
      .then(response => response.json())
      .then(data => this.setState({ 
        result : false,
        question : data.results[0], 
        progress : 0,
        gameOver : false,
        QuestionsRight : 0
      }));
  }

  render() {
    return (
      <div className="App">
      {this.state.gameOver ? 

        // need to create Game Over Compnent that tells user his score and play again


      <GameOver
      QuestionsRight = {this.state.QuestionsRight}
      resetGame = {this._resetGame}
      />
      : 
      <div className="questionContainer"> 
      <Login/>
       <Question
       question = {this.state.question}
       fetch = {this._handleNextClick}
       result = {this.state.result}
       resetResult = {this._resetResult}
       rightAnswer = {this._rightAnswer}
       wrongAnswer = {this._wrongAnswer}
       progress = {this.state.progress}
       gameOver = {this.state.gameOver}
       />
       </div>
       }
      </div>
    );
  }
}

export default App;
