// src/app/blog/page.tsx
import { Suspense } from "react";
import { groq } from "next-sanity";
import { client } from "@/lib/sanityClient";
import BlogClientComponent from "./BlogClientComponent";
import Canonical from "@/utils/Canonical";
import Head from "next/head";

export const revalidate = 60;

// Blog post interface for TypeScript
export interface BlogPost {
  _id: string;
  title: string;
  publishedAt: string;
  slug: string;
  image: string;
}

// Server Component for data fetching
export default async function BlogPage() {
  const query = groq`
    *[_type == "blog"] {
      _id,
      title,
      publishedAt,
      "slug": slug.current,
      "image": poster.asset->url
    }
  `;

  const blogPosts = await client.fetch(query);

  return (
    <>
      <Head>
        <title>Blog - Quadra Security</title>
        <meta
          name="description"
          content="Read the latest news and updates on CCTV surveillance, security installations, biometrics, and other security services in Gurugram."
        />
        <Canonical />
      </Head>

      <Suspense fallback={<div>Loading...</div>}>
        <BlogClientComponent blogPosts={blogPosts} />
      </Suspense>
    </>
  );
}
