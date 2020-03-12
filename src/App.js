import React, {Component} from 'react';
import data from './data'
import './App.css';
import Card from './components/Card'
import Header from './components/Header'

class App extends Component {
  constructor () {
    super()
    this.state = {
      users: data,
      cardNumber: 0
    }
    this.nextButton = this.nextButton.bind(this)
    this.prevButton = this.prevButton.bind(this)
  }

  
  nextButton() {
    if (this.state.cardNumber < 24) {
    this.setState({cardNumber: this.state.cardNumber + 1})
  } else this.setState({cardNumber: 0})
}
  prevButton() {
    if (this.state.cardNumber > 0) {
    this.setState({cardNumber: this.state.cardNumber - 1})
  } else this.setState({cardNumber: 24})
  }
  render(){
    
    const mappedData = this.state.users.map(element => {
      return <div key={element.id} className='temp-class-name'>
          <Card person={element}/>

      </div>
  })
  return (
    <div className="App"> 
      <Header/>
      <div className="card">
          <div className='page'> 
            <div>{mappedData[this.state.cardNumber]}</div>
            
            </div>
            <div className='button-container'>
              <button className='button' onClick={this.prevButton}><b>&lt; Previous</b></button>
              <button className='button' onClick={this.nextButton}><b>Next &gt;</b></button>
          </div>
      </div>
    </div>
  
  );
}
}
export default App;
