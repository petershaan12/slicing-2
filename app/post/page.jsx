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
