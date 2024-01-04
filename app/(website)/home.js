import React from "react";
import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";

const Home = () => {
  const backgroundImage = "/img/background.jpeg";

  return (
    <Container className="full-width-container">
      {backgroundImage && (
        <div
          className="custom-bg-image ml-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: "no-repeat"
          }}>
          <div className="pt-32 text-center text-white">
            <h1 className="mb-4 text-4xl font-bold">ironicbuddha</h1>
            <p className="text-lg">here are my noodlings</p>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Home;
