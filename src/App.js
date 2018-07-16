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
        return <GameOver playAgain={this.isIntroDone} />
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
      <Typist.Delay ms={2000} />
  </Typist>

class GameOver extends Component {
  constructor(props) {
    super(props)
    this.state = {
      renderMsg: false
    }
  }

  onHeaderTyped = () => {
    this.setState({ renderMsg: true })
  }

  render(){
    const { renderMsg } = this.state
    const { playAgain } = this.props
    return(
      <div className="gameover">
        <Typist  cursor={{show: false, blink: true}}
                 className="typing"
                 onTypingDone={this.onHeaderTyped}
          >
            Game Over!
            <Typist.Delay ms={1500} />
        </Typist>
        {renderMsg &&
          <Typist cursor={{show: true, blink: true}}
                className="again"
                startDelay={1000}
          >
            Want to play again?
            <Typist.Delay ms={800} />
             <br />
             <br />
            <span onClick={playAgain}> Yes! </span>
            <Typist.Delay ms={400} />
            <br />
            <br />
            No
        </Typist>}
      </div>
    )
  }
}



export default App
