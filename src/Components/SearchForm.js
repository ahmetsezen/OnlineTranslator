import React from 'react';
import axios from 'axios';

const url = "https://translate.yandex.net/api/v1.5/tr.json/translate";
const apiKey = "trnsl.1.1.20191009T091804Z.4b3f98bcc9007f00.bcb9839a5aef0eb02109b0f0005a0466565d9b63"
const getLangsListUrl = "https://translate.yandex.net/api/v1.5/tr.json/getLangs"
class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText:"",
            languageLists: {},
            toLang: "",
            translatedText:""
        }
    }   
  
    componentDidMount(){
        axios.get(getLangsListUrl + "?key=" + apiKey + "&ui=en")
          .then(response => {
            this.setState ({ languageLists: response.data.langs });
            console.log(response.data.langs)
          })
          .catch(function (error) {
            console.log(error);
          });
          this.setState({toLang:"en"})
    }
    compo
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
    handleSubmit = (event) => {
        
        axios.get(url + "?key=" + apiKey + "&text=" + this.state.searchText + "&lang=" + this.state.toLang)
          .then(response => {
            console.log(response.data);
            this.setState({ translatedText : response.data.text[0]})
            
            let translateHistory = {
                
                fromLang: this.state.languageLists[response.data.lang.split("-")[0]],
                toLang: this.state.languageLists[this.state.toLang],
                fromText: this.state.searchText,
                toText: this.state.translatedText

            }
       
            this.props.passData(this.state.translatedText, translateHistory)
           
          })
          event.preventDefault();
        
    }
    render() {
      return (
        <div>
            <form onSubmit={this.handleSubmit} className="well">
                <textarea name="searchText" onChange={this.handleChange} cols="30" rows="5" className="form-control" placeholder="Translation Text" />
               
                <select name="toLang" onChange={this.handleChange} value={this.state.toLang} className="form-control">
                {
                    Object.entries(this.state.languageLists).map(([key, language]) => (
                        <option key={key} value={key}>{language}</option>
                    ))
                }
                </select>
                <br></br>
                
                <div className="text-left">
                    <strong>I want to translate to: </strong> { this.state.languageLists[this.state.toLang] }
                </div>
                <br></br>
                <button tyle="submit" className="btn btn-primary btn-block">Çevir</button>

            </form>
        </div>
      )
    }
  }

export default SearchForm;