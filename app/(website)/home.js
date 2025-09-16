import React from "react";
import Link from "next/link";
import Container from "@/components/container";
import PostList from "@/components/postlist";

const Home = ({ posts }) => {
  const recentPosts = posts?.slice(0, 3) || [];

  return (
    <div className="min-h-screen flex items-center justify-center py-16 px-4">
      <Container className="w-full max-w-6xl">
        {/* Recent Posts Section */}
        {recentPosts.length > 0 && (
          <div className="text-center">
            <div className="mb-12">
              <h2 className="text-4xl font-bold tracking-tight dark:text-white mb-4">
                Latest Tracks
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Recent musical musings and sonic experiments
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 mb-12">
              {recentPosts.map((post, index) => (
                <PostList
                  key={post._id}
                  post={post}
                  aspect="square"
                  preloadImage={index === 0}
                  fontSize="large"
                />
              ))}
            </div>

            <div className="mt-8">
              <Link
                href="/archive"
                className="inline-flex items-center rounded-lg bg-gray-100 px-8 py-4 text-base font-medium text-gray-900 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
                View All Posts →
              </Link>
            </div>
          </div>
        )}

        {/* Fallback when no posts */}
        {recentPosts.length === 0 && (
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight dark:text-white mb-4">
              Coming Soon
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Musical musings and sonic experiments loading...
            </p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Home;
