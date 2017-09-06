import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../style/site.css';

class Story extends Component {
  constructor(props) {
    super(props);

    this.state = {
      story: [],
      heading: "",
      byline: "",
      image: ""
    };
  }

  componentDidMount() {
    axios.get(`https://content.thewest.com.au/publication/${this.props.match.params.id}`)
    .then(res => {
      const storyData = res.data.items;
      if (storyData) {
        storyData
          .filter(function(data) { return data.kind === "heading"; })
          .map((data, index) => ( this.setState({ heading: data.text }) ));
        storyData
          .filter(function(data) { return data.kind === "byline"; })
          .map((data, index) => ( this.setState({ byline: data.text }) ));
        storyData
          .filter(function(data) { return data.kind === "content"; })
          .map((data, index) => ( this.setState({ story: data.blocks }) ));
        const imageData = res.data.assets
          .filter(function(data) { return data.kind === "image"; })
        if (imageData) {
          this.setState({ image: imageData[0].original.reference });
        }
      }
      else {
        console.error("No story found");
      }
    });
  }

  render() {
    if (this.state.story) {
      let image = <div></div>
      if (this.state.image) {
        image = <img className="StoryImage" src={ this.state.image } alt="video" />
      }
      return (
        <div className="Story">
          <Link className="BackButton" to="/">Back</Link>
          <div className="StoryContent">
            <h1>{ this.state.heading }</h1>
            <small>{ this.state.byline }</small>
            <div>
              { image }
              {
                this.state.story
                .filter(function(data) { return data.kind === "text"; })
                .map((data, index) => ( <p key={ index }>{ data.text }</p> ))
              }
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Story;