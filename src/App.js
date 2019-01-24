import React, {Component} from "react";
import Navbar from "./components/Navbar";
import ImageCard from "./components/ImageCard";
import Icons from "./icons.json";
import "./App.css";

const shuffleImage = (array) => {
  let counter = array.length;
  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let view = array[counter];
    array[counter] = array[index];
    array[index] = view;
  }
  return array;
}

class App extends Component {

  state = {
    currentScore: 0,
    highScore: 0,
    result: "",
    click: [],
    Icons,
    gameOver: false
  };

  render() {
    return (
      <div class="container">
        <Navbar highScore={this.state.highScore} currentScore={this.state.currentScore} status={this.state.result} />
        <div class="main">
          {this.state.Icons.map(icon => (
            <ImageCard id={icon.id} image={icon.image} clickPlayer={this.clickPlayer} />
          ))}
        </div>
      </div>
    );
  }

  clickPlayer= (id) => {
    if(!this.state.click.includes(id)){
      this.increaseScore();
      this.state.click.push(id);
      this.setState({ gameOver: false});
    } else {
      this.resetGame();
    }
  }

  resetGame = () => {
    this.setState({
      points: 0,
      currentScore: 0,
      highScore: this.state.highScore,
      result: "Last Place Finish! Your racing career is over!!!!!",
      click: [],
      Icons,
      gameOver: true
    });
    this.resetIconArray();
  }

  resetIconArray= () => {
    let scramble= shuffleImage(Icons);
    this.setState({Icons: scramble})
  }

  increaseScore = () => {
    let score = this.state.currentScore +1;
    if(score === this.state.Icons.length) {
      this.setState({
        result: "First Place Finish! Select new racer to start again!",
        highScore: score,
        currentScore: 0,
        click: [],
        Icons,
        gameOver: false
      });
    } else if (score > this.state.highScore){
      this.setState({
        highScore: score,
        currentScore: score,
        result: "Fastest Lap time!!! New Record!"
      });
    } else { 
      this.setState({
        currentScore: score,
        result: "Got 'emmmmm"
      });
    }
    this.resetIconArray();
  }
}
export default App;
