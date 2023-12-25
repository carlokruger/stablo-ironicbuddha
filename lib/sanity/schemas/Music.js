import React from "react";

const Music = ({ value }) => {
  return (
    <div>
      <iframe src={value} width="100%" height="300" frameBorder="0" allowFullScreen></iframe>
    </div>
  );
};

export default Music;