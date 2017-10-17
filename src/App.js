import React, { Component } from 'react';
import _ from 'lodash';
import logo from './if_youtube.svg';
import './App.css';
import SearchBar from './components/Search_Bar';
import YoutubeSearch from 'youtube-api-search';
import VideoList from './components/Video_List';
import VideoDetail from './components/Video_Detail';
const YOU_API_KEY = 'AIzaSyBEnqKd9PRy8jx4HwcoE5NNtFADgRobyzw';



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [

      ],
      selectedVideo : null
    };

    this.videoSearchTerm('danielmangowi')
  }

  videoSearchTerm(term){
        YoutubeSearch({key: YOU_API_KEY, term: term}, (videos) => {
            this.setState({
              
              videos : videos,
              selectedVideo: videos[0]
            
            }); //ES6 we can just write videos if the key and proprty are same name
            console.log(videos);
            });
  }


  render() {
    const videoSearchTerm = _.debounce((term) => {this.videoSearchTerm(term)}, 300);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Yotube Search API App</h1>
        </header>
       
        <SearchBar onSearchTermChange={term =>this.videoSearchTerm(term)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect ={selectedVideo => 
           {this.setState({selectedVideo})}
          }
         videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
