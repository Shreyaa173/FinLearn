import React, { useState } from 'react';
import { ChevronDown, MessageCircle, Award, Users } from 'lucide-react';

const Success = () => {
    const stories = [
      {
        name: "Alex Johnson",
        title: "From Marketing to Software Engineer",
        company: "Google",
        image: "/api/placeholder/60/60",
        story: "After 6 months of dedicated learning and mentorship, I successfully transitioned into tech...",
        tags: ["Career Switch", "Software Engineering", "Success"]
      },
      {
        name: "Maria Garcia",
        title: "Landed My Dream Job in Data Science",
        company: "Microsoft",
        image: "/api/placeholder/60/60",
        story: "With the support of this community and great mentors, I went from zero coding knowledge to...",
        tags: ["Data Science", "Job Success", "Learning"]
      }
    ];
  
    return (
      <div className="p-4">
        {/* Filter Options */}
        <div className="mb-6">
          <select className="w-full p-2 border rounded-lg">
            <option>All Categories</option>
            <option>Career Switch</option>
            <option>Job Success</option>
            <option>Learning Journey</option>
          </select>
        </div>
  
        {/* Stories Grid */}
        <div className="space-y-6">
          {stories.map((story, index) => (
            <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <img 
                  src={story.image} 
                  alt={story.name} 
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-xl">{story.title}</h3>
                  <p className="text-gray-600">
                    {story.name} • {story.company}
                  </p>
                  <p className="mt-3 text-gray-700">{story.story}</p>
                  <div className="mt-4 flex gap-2">
                    {story.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
  
        {/* Share Story Button */}
        <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
          Share Your Success Story
        </button>
      </div>
    );
  };

  export default Success;