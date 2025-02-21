import React, { useState } from "react";
import { ChevronDown, MessageCircle, Award, Users } from "lucide-react";

const Discussion = () => {
  const discussions = [
    {
      title: "How to get started with React?",
      category: "Programming",
      author: "John Smith",
      date: "2 hours ago",
      replies: 15,
      status: "Active",
    },
    {
      title: "Career switch to Tech - My Journey",
      category: "Career",
      author: "Sarah Wilson",
      date: "1 day ago",
      replies: 23,
      status: "Active",
    },
  ];

  return (
    <div className="p-4">
      {/* Search and Filter */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search discussions..."
          className="w-full p-2 border rounded-lg mb-3"
        />
        <div className="flex gap-2">
          <select className="border rounded-lg p-2">
            <option>All Categories</option>
            <option>Programming</option>
            <option>Career</option>
            <option>Job Search</option>
          </select>
          <select className="border rounded-lg p-2">
            <option>Most Recent</option>
            <option>Most Replies</option>
            <option>Most Viewed</option>
          </select>
        </div>
      </div>

      {/* Discussions List */}
      <div className="space-y-4">
        {discussions.map((discussion, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 hover:shadow-md transition"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-lg text-blue-600">
                  {discussion.title}
                </h3>
                <div className="text-sm text-gray-500 mt-1">
                  <span className="bg-gray-100 px-2 py-1 rounded">
                    {discussion.category}
                  </span>
                  <span className="ml-2">by {discussion.author}</span>
                  <span className="ml-2">{discussion.date}</span>
                </div>
              </div>
              <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-sm">
                {discussion.status}
              </span>
            </div>
            <div className="mt-3 text-sm  text-gray-600">
              {discussion.replies} replies
            </div>
          </div>
        ))}
      </div>

      {/* Create Discussion Button */}
      <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
        Start New Discussion
      </button>
    </div>
  );
};

export default Discussion;
