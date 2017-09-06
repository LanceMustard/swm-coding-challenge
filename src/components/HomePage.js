import React, { Component } from 'react';
import axios from 'axios';
import VideoList from './VideoList.js';
import StoryList from './StoryList.js';
import '../style/site.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      documents: []
    };
  }

  componentDidMount() {
    axios.get("https://content.thewest.com.au/publication")
    .then(res => {
      const documents = res.data.documents;
      if (documents) {
        this.setState({documents});  
      }
      else {
        console.error("No documents found");
      }
    });
  }

  render() {
    return (
      <div className="HomePage">
        <VideoList documents={this.state.documents} />
        <StoryList documents={this.state.documents} />
      </div>
    );
  }
}

export default App;