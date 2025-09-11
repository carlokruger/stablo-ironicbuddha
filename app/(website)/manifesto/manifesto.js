"use client";

import Container from "@/components/container";

export default function Manifesto({ settings }) {
  return (
    <Container>
      <div className="w-full">
        <iframe
          src="/img/manifesto.html"
          title="Manifesto - The Speaker"
          width="100%"
          height="1600px"
          style={{ 
            backgroundColor: "#000000",
            border: "none",
            overflow: "hidden"
          }}
          scrolling="no"
        />
      </div>
    </Container>
  );
}