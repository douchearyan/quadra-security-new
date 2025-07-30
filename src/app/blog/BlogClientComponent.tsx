/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { toast } from "sonner";

import { BlogPost } from "./page";
import { categories } from "@/constants/categories";
import HeroBanner from "@/components/ui/hero-banner";
import ConsultationForm from "@/components/blog/ConsultationForm";

export default function BlogClientComponent({
  blogPosts,
}: {
  blogPosts: BlogPost[];
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    area: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/site-visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        toast.error(result.error || "Submission failed");
      } else {
        toast.success("Submitted successfully!");
        setFormData({ name: "", phone: "", service: "", area: "" });
      }
    } catch (err) {
      toast.error("Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(date.getDate()).padStart(2, "0")}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-gray-50 font-[family-name:var(--font-urbanist)]"
    >
      {/* Hero Section */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <HeroBanner title="Latest Posts" />
      </motion.div>

      {/* Blog Content */}
      <div className="container mx-auto py-12 px-4">
        <div className="flex flex-col lg:flex-row gap-12 max-w-7xl mx-auto">
          {/* Blog Posts - Main Section */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter((post) =>
                post.title.toLowerCase().includes(searchQuery.toLowerCase())
              )
              .map((post, index) => (
                <Link
                  key={post._id}
                  href={`/blog/${post.slug}`}
                  className="text-indigo-600  text-sm font-medium block "
                >
                  <motion.div
                    key={post._id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white  h-fit rounded-lg overflow-hidden shadow-md hover:shadow-lg transform hover:scale-[1.02] transition duration-300 ease-in-out cursor-pointer"
                  >
                    <div className="relative h-48 md:h-60">
                      <Image
                        src={post.image}
                        alt={`Cover image for blog post titled "${post.title}"`}
                        fill
                        sizes="(max-width: 768px) 100vw , 33vw"
                        className="object-cover"
                        onClick={() => {
                          router.push(`/blog/${post.slug}`);
                        }}
                      />
                      <div className="absolute top-3 left-3 bg-white text-black text-xs px-2 py-1 rounded">
                        {formatDate(post.publishedAt)}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {post.title}
                      </h3>
                      <div
                        
                        className="text-indigo-600 text-sm font-medium flex items-center"
                      >
                        Read More
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3 space-y-8 ">
            {/* Search Box */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h2 className="text-lg text-black font-medium mb-4">Search</h2>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search for..."
                  className="flex-1 border border-gray-300 rounded-l-md px-4 text-gray-700 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="bg-[#2313AC] text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>

            {/* Quick Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 md:p-0"
            >
              <ConsultationForm/>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
