"use client";

import { useState } from "react";

interface Blog {
  title: string;
  // Add other blog fields if needed (like slug, description etc)
}

export default function SearchBox({ blogs }: { blogs: Blog[] }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
      <h2 className="text-lg text-black font-semibold mb-4">Search Blogs</h2>
      <div className="flex mb-6">
        <input
          type="text"
          placeholder="Search for blogs..."
          className="flex-1 border border-gray-300 rounded-l-md px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition"
          onClick={() => {}}
        >
          🔍
        </button>
      </div>

      {/* Show filtered blogs */}
      <div className="space-y-4">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog, index) => (
            <div
              key={index}
              className="p-4 bg-gray-100 rounded hover:bg-gray-200 transition"
            >
              <h3 className="text-xl font-medium">{blog.title}</h3>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No blogs found.</p>
        )}
      </div>
    </div>
  );
}
