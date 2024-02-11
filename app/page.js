"use client";

import FeaturedPost from "@/app/components/FeaturedPost";
import Post from "@/app/post/page";
import SectionHeader from "@/app/components/SectionHeader";

export default function Home() {
  return (
    <main className="container mx-auto px-10">
      <FeaturedPost />
      <Post />
    </main>
  );
}
