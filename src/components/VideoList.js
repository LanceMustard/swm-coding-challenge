import React, { Component } from 'react';
import '../style/site.css';
import { Link } from 'react-router-dom';

class TopStories extends Component {

  renderDocumentThumbnail(document, index) {
    return (
      <div key={index}>
        <Link className="PageLink" to={`/video/${document.id}`}>
          <p>{document.heading}</p>
        </Link>
      </div>
    );
  }

  render() {
    // dodgy way of determining if a document is either a story or a video
    const videos = this.props.documents.filter(function(document) { return !document.mainImage; })
    if (videos.length > 0) {
      return (
        <div className="VideoList">
          <h2>Trending Videos</h2>
          { videos.map(this.renderDocumentThumbnail) } 
        </div>
      );
    }
    else {
      return <div></div>
    }
  }
}

export default TopStories;