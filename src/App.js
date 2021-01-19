import React from 'react';
import Quantite from './Components/Quantite';
import './App.css';



class App extends React.Component {
  
  state = {
    nbr : 0
  };

  chgNbr = (e) => {
    this.setState ({
      nbr : e.target.value
    });
  };

  render(){
    
    return (
      <div className="App">
        <h1>Exercice 12</h1> <br/>
        <span>nombre: {this.state.nbr}</span> <br/> <br/>
        <input type="number" onInput={this.chgNbr}/>
        <Quantite state={this.state}/>
      </div>
    );
  }
  
}

export default App;