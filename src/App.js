import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchBar from './components/Search_Bar';
import YoutubeSearch from 'youtube-api-search';

const YOU_API_KEY = 'AIzaSyBEnqKd9PRy8jx4HwcoE5NNtFADgRobyzw';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [

      ]
    };

    YoutubeSearch({key: YOU_API_KEY, term: 'Tanzania'}, (videos) => {
    this.setState({videos}); //ES6 we can just write videos if the key and proprty are same name
    console.log(videos);
    });


  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Yotube Search API App</h1>
        </header>
       
        <SearchBar />
      </div>
    );
  }
}

export default App;
