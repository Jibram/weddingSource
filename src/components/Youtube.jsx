import React from "react";

class Youtube extends React.Component {
  render() {
    return (
      <div className="aspect-ratio-box">
        <div className="aspect-ratio-box-inner">
          <iframe
            className="youtube"
            src="https://www.youtube.com/embed/SvFIJOXx1A8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; allowfullscreen"
            allowfullscreen=""
          />
        </div>
      </div>
    );
  }
}

export default Youtube;
