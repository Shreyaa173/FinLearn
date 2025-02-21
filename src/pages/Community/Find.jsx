import React, { useState } from 'react';
import { ChevronDown, MessageCircle, Award, Users } from 'lucide-react';

const Find= () => {
    const mentors = [
      {
        name: "Dr. Emily Watson",
        role: "Senior Software Engineer",
        company: "Amazon",
        expertise: ["React", "Node.js", "System Design"],
        experience: "12 years",
        rating: 4.9,
        availability: "Available for 2 mentees",
        image: "/api/placeholder/60/60"
      },
      {
        name: "Michael Chang",
        role: "Tech Lead",
        company: "Meta",
        expertise: ["Python", "Machine Learning", "Career Guidance"],
        experience: "8 years",
        rating: 4.8,
        availability: "Available for 1 mentee",
        image: "/api/placeholder/60/60"
      }
    ];
  
    return (
      <div className="p-4">
        {/* Search and Filters */}
        <div className="mb-6 space-y-3">
          <input 
            type="text"
            placeholder="Search by expertise, name, or company..."
            className="w-full p-2 border rounded-lg"
          />
          <div className="flex gap-2">
            <select className="border rounded-lg p-2 flex-1">
              <option>All Expertise</option>
              <option>Frontend</option>
              <option>Backend</option>
              <option>Machine Learning</option>
            </select>
            <select className="border rounded-lg p-2 flex-1">
              <option>All Experience Levels</option>
              <option>5+ years</option>
              <option>10+ years</option>
              <option>15+ years</option>
            </select>
          </div>
        </div>
  
        {/* Mentors Grid */}
        <div className="space-y-6">
          {mentors.map((mentor, index) => (
            <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition">
              <div className="flex items-start gap-4">
                <img 
                  src={mentor.image} 
                  alt={mentor.name} 
                  className="w-16 h-16 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-xl">{mentor.name}</h3>
                      <p className="text-gray-600">
                        {mentor.role} at {mentor.company}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {mentor.experience} experience • {mentor.rating} ★
                      </p>
                    </div>
                    <span className="text-green-600 text-sm">
                      {mentor.availability}
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {mentor.expertise.map((skill, i) => (
                      <span 
                        key={i} 
                        className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex gap-2">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition flex-1">
                      Request Mentorship
                    </button>
                    <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-50 transition">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Find;