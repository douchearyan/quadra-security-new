import { client } from "@/lib/sanityClient";
import { PortableText } from "@portabletext/react";
import HeroBanner from "@/components/ui/hero-banner";
import type { Metadata } from "next";
import ConsultationForm from "@/components/blog/ConsultationForm";
import Canonical from "@/utils/Canonical";

export const revalidate = 60;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const blog = await client.fetch(
    `*[_type == "blog" && slug.current == $slug][0]{ title }`,
    { slug }
  );

  return {
    title: blog?.title || "Blog",
    description: blog?.title
      ? `Read more about ${blog.title}`
      : "Read our blog post.",
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;

  const blog = await client.fetch(
    `*[_type == "blog" && slug.current == $slug][0] {
      title,
      publishedAt,
      poster { asset->{url} },
      Content
    }`,
    { slug }
  );

  if (!blog) {
    return <div className="p-8">Blog not found.</div>;
  }


  return (
    <>
    <Canonical/>
     <div className="min-h-screen bg-gray-50">
      <HeroBanner title={blog.title} />

      <div className="bg-white container mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left content */}
        <div className="lg:col-span-2">
          {blog.poster && (
            <img
              src={blog.poster.asset.url}
              alt={`Cover image for blog post titled "${blog.title}"`}
              className="rounded-md mb-6 w-full h-auto max-h-[500px] object-cover"
            />
          )}

          <div className="flex flex-wrap items-center text-sm font-medium text-[#2B388F] mb-4 sm:mb-6">
            <p>
              {new Date(blog.publishedAt).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </p>
            <span className="mx-2 hidden sm:inline">|</span>
            <p>Security</p>
          </div>

          <div className="prose prose-lg max-w-none text-[#575757] font-serif leading-6 space-y-6">
            <PortableText value={blog.Content} />
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-8">
          <ConsultationForm />

        
        </div>
      </div>
    </div>

    </>
     );
}

export async function generateStaticParams() {
  const slugs = await client.fetch(`*[_type == "blog"]{ "slug": slug.current }`);
  return slugs.map((item: { slug: string }) => ({
    slug: item.slug,
  }));
}
