import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../style/site.css';

class Story extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heading: "",
      videoDescription: "",
      image: ""
    };
  }

  componentDidMount() {
    axios.get(`https://content.thewest.com.au/publication/${this.props.match.params.id}`)
    .then(res => {
      this.setState({ heading: res.data.heading });
      this.setState({ videoDescription: res.data.videoDescription });
      this.setState({ image: res.data.posterImage.reference });
    });
  }

  render() {
    // Note: Doesn't actually play the video
    return (
      <div className="Story">
        <Link className="BackButton" to="/">Back</Link>
        <div className="StoryContent">
          <h1>{ this.state.heading }</h1>
          <img className="VideoImage" src={ this.state.image } alt="video" />
          <p>{ this.state.videoDescription }</p>
        </div>
      </div>
    );
  }
}

export default Story;