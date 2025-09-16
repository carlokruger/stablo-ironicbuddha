"use client";

export default function AppleMusic(props) {
  if (props.embedCode) {
    return (
      <div className="apple-music-embed my-6">
        <div dangerouslySetInnerHTML={{ __html: props.embedCode }}></div>
      </div>
    );
  }
  return null;
}