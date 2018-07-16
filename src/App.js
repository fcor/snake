import React, { Component } from 'react';
import Typist from 'react-typist'
import Snake from './Snake'
import './App.css';

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      step: 'INTRO'
    }

  }

  isIntroDone = () =>
    this.setState({
      step: 'PLAYGROUND'
    })

  isGameOver = () =>
    this.setState({
      step: 'GAMEOVER'
    })

  render() {
    const { step } = this.state

    const getGameStep = (step) => {
      if (step === 'INTRO') {
        return <Intro isIntroDone={this.isIntroDone}/>
      } else if (step === 'PLAYGROUND') {
        return <Snake isGameOver={this.isGameOver} />
      } else if (step === 'GAMEOVER') {
        return <GameOver />
      }
    }

    return (
      <div className="app">
        {getGameStep(step)}
      </div>
    )
  }
}


const Intro = ({ isIntroDone }) =>
  <Typist  onTypingDone={isIntroDone}
           cursor={{show: true, blink: true}}
           className="typing">
      Old School Snake is back!
      <Typist.Delay ms={3000} />
  </Typist>

const GameOver = () =>
  <Typist  cursor={{show: true, blink: true}}
           className="typing"
           // onTypingDone={isIntroDone}
           >
      Game Over!
      <Typist.Delay ms={3000} />
  </Typist>

export default App
