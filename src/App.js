import React from 'react';
import SearchForm from './Components/SearchForm'
import History from './Components/History'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      translatedText: "",
      translatedHistory: []
    }
  }
  passData(translatedText, translatedHistory){
    this.setState({ translatedText })
    this.setState({ translatedHistory: [...this.state.translatedHistory, translatedHistory]})
  }
  render() {
  
  return (

      <div className="container">
          <h2 className="text-center"><strong>Online Translator</strong></h2>
          <div className="row">
            <div className="col-md-12 text-center">
              <SearchForm passData={this.passData.bind(this)} />
              <h3 className="text-success text-center">
                {this.state.translatedText}
              </h3>
              {
                this.state.translatedHistory.length > 0 && 
                <History histories={this.state.translatedHistory} />
              }
            </div>
          </div>
      </div>
  
  );
}
}

export default App;
