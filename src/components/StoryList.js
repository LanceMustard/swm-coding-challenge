import React, { Component } from 'react';
import '../style/site.css';
import { Link } from 'react-router-dom';

class StoryList extends Component {

  renderDocumentThumbnail(document, index) {
    return (
      <div key={index} className="StoryCard" >
        <Link className="PageLink" to={`/story/${document.id}`}>
          <img className="StoryCardImage" src={document.mainImage.reference}  alt="story" />
          <p>{document.heading}</p>
        </Link>
      </div>
    );
  }

  render() {
    const stories = this.props.documents.filter(function(document) { return document.mainImage; })
    return (
      <div className="StoryList">
        <h2>Top Stories</h2>
        <div className="StoryCardList">
          { stories.map(this.renderDocumentThumbnail)} 
        </div>
      </div>
    );
  }
}

export default StoryList;