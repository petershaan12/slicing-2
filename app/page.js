"use client";

import FeaturedPost from "@/app/components/FeaturedPost";
import CardPost from "@/app/components/CardPost";
import mockPosts from "@/utils/posts.json";
import { useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState(mockPosts);
  return (
    <main className="container mx-auto px-10">
      <FeaturedPost />
      <div className="flex -mx-4 flex-wrap mt-6">
        {posts.map((post) => (
          <div key={post.id} className="md:w-4/12 w-full px-4 py-6">
            <CardPost {...post} />
          </div>
        ))}
      </div>
    </main>
  );
}
