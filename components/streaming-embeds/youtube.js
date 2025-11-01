"use client";

export default function YouTube(props) {
  if (props.embedCode) {
    return (
      <div className="youtube-embed my-6">
        <div dangerouslySetInnerHTML={{ __html: props.embedCode }}></div>
      </div>
    );
  }
  return null;
}