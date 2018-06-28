import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";
import { shuffleImages } from "./helpers/Shuffler";
import Jumbotron from "./components/Jumbotron";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    guessed: [],
    highestScore: 0,
    score: 0
  };

  componentDidMount() {
    this.setState({friends});
  }

  clickHandler = (id) => {

    this.setState({guessed: [...this.state.guessed, id] });

    if (this.state.friends.length === (this.state.guessed.length + 1)) {
      alert ("You Win");
    }

    if (this.state.guessed.includes(id)) {
      if (this.state.score > this.state.highestScore) {
        this.setState({ highestScore: this.state.score });
      }

      this.setState({ score: 0, guessed: [] });
      shuffleImages(friends);
      alert("You Lost");
    } else {
      this.setState({
        score: this.state.score + 1,
        highestScore:
          (this.state.score >= this.state.highestScore)
            ? this.state.score + 1
            : this.state.highestScore
      });
      shuffleImages(friends)
    }

    //shuffle friends
  };

  render() {
    return (
      <Wrapper>
        <Jumbotron
          highestScore={this.state.highestScore}
          score={this.state.score}
        />

        <Title>Friends Guess</Title>
        {this.state.friends.map(friend => {
          return (
            <FriendCard
              onClick={() => this.clickHandler(friend.id)}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
            />
          );
        })}
      </Wrapper>
    );
  }
}

export default App;
