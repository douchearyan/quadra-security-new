// src/components/BlogCard.tsx
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  description: string;
  imageUrl: string;
  author: string;
  date: string;
  slug: string;
}

export default function BlogCard({
  title,
  description,
  imageUrl,
  author,
  date,
  slug,
}: BlogCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg">
      <Image
        src={imageUrl}
        alt={title}
        width={400}
        height={200}
        className="w-full h-56 object-cover"
      />
      <div className="p-5 flex flex-col gap-2">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 text-sm line-clamp-3">{description}</p>
        <div className="text-sm text-gray-500 mt-2 flex justify-between">
          <span>👤 {author}</span>
          <span>📅 {date}</span>
        </div>
        <Link
          href={`/blog/${slug}`}
          className="text-blue-600 text-sm mt-3 hover:underline"
        >
          Read more →
        </Link>
      </div>
    </div>
  );
}
