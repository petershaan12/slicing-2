"use client";

import CardPost from "@/app/components/CardPost";
import { useState } from "react";
import mockPosts from "../../utils/posts.json";
import SectionHeader from "../components/SectionHeader";

export default function Post() {
  const [posts, setPosts] = useState(mockPosts);
  return (
    <main className="container mx-auto px-10">
      <SectionHeader>UI Design</SectionHeader>
      {posts.length < 1 ? (
        <div className="text-center py-20">
          <h2 className="text-6xl">No Result 😓</h2>
          <p className="text-xl mt-4 text-white/60 md:w-6/12 w-full mx-auto">
            We couldn't find any post with the keyword `yahahahyuk`, please try
            another keyword.
          </p>
        </div>
      ) : (
        <div className="flex -mx-4 flex-wrap mt-6">
          {posts.map((post) => (
            <div key={post.id} className="md:w-4/12 w-full px-4 py-6">
              <CardPost {...post} />
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
