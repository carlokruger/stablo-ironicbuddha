"use client";

export default function Beatport(props) {
  if (props.embedCode) {
    return (
      <div className="beatport-embed my-6">
        <div dangerouslySetInnerHTML={{ __html: props.embedCode }}></div>
      </div>
    );
  }
  return null;
}