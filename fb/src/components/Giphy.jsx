import './Giphy.css';
import React from "react";
import ReactGiphySearchbox from "react-giphy-searchbox";


function Giphy() {
  return (
    <div className="searchboxWrapper">
      <ReactGiphySearchbox
        apiKey="9Ixlv3DWC1biJRI57RanyL7RTbfzz0o7"
        onSelect={(item) => console.log(item)}
        masonryConfig={[
          { columns: 5, imageWidth: 90, gutter: 5 },
          { mq: "700px", columns: 5, imageWidth: 90, gutter: 5 }
        ]}
      />
    </div>
  );
}

export default Giphy;
