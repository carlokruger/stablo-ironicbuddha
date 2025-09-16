"use client";

export default function Spotify(props) {
  if (props.embedCode) {
    return (
      <div className="spotify-embed my-6">
        <div dangerouslySetInnerHTML={{ __html: props.embedCode }}></div>
      </div>
    );
  }
  return null;
}