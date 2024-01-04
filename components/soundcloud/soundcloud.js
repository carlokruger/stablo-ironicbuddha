"use client";

export default function Soundcloud(props) {
  if (props.url) {
    return (
      <div dangerouslySetInnerHTML={{ __html: props.url }}></div>
    );
  }
  return null;
}
