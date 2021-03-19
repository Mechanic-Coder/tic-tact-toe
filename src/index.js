import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// 
class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        BoardArray: Array(9).fill(null),
        IsX: true
      }
    }
    Val(i) {
      return this.state.BoardArray[i]
    }
    gameOver() {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

     for(let i of lines ) {
       let spot = this.state.BoardArray
       if(spot[i[0]] && spot[i[0]] === spot[i[1]] && spot[i[1]] === spot[i[2]]){
        return true;
       }
     }
    }
    clickBox(i) {
      if(!this.state.BoardArray[i] && !this.gameOver()) {
        this.state.BoardArray[i] = this.state.IsX ? 'X' : 'O';
          this.setState({
            BoardArray: this.state.BoardArray,
            IsX: !this.state.IsX
          })
      }
    }
    block(i) {
      return(
        <div 
          className="block"
          onClick={() => this.clickBox(i)}>{this.Val(i)}</div>
      )
    }
    render() {
      return(
        <div className="main">
          <h1> {this.gameOver() ? `winner is ${this.state.IsX ? 'O' : 'X'} ` : ''}</h1>
          <div className="row">
            {this.block(0)}
            {this.block(1)}
            {this.block(2)}
          </div>
          <div className="row">
            {this.block(3)}
            {this.block(4)}
            {this.block(5)}
          </div>
          <div className="row">
            {this.block(6)}
            {this.block(7)}
            {this.block(8)}
          </div>
        </div>
      )
    }
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


