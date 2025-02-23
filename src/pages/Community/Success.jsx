const Success = () => {
  const stories = [
    {
      name: "Rajesh Patel",
      title: "Started saving ₹50 daily, built emergency fund",
      localTitle: "रोज़ाना ₹50 की बचत से आपातकालीन फंड बनाया",
      location: "Gujarat",
      image: "/api/placeholder/60/60",
      story:
        "I never thought I could save money from my small shop income. This app helped me start with just ₹50 per day...",
      tags: ["Small Business", "Emergency Fund", "Daily Saving"],
    },
    {
      name: "Lakshmi Devi",
      title: "Got first bank account & started digital payments",
      localTitle: "पहला बैंक खाता खोला और डिजिटल भुगतान शुरू किया",
      location: "Bihar",
      image: "/api/placeholder/60/60",
      story:
        "I learned how to use banking apps and now receive payments directly in my account...",
      tags: ["Digital Banking", "Financial Inclusion", "Women Empowerment"],
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[75vw] p-4">
        <div className="mb-6">
          <select className="w-full p-3 border-2 border-gray-200 rounded-lg">
            <option>All Stories / सभी कहानियां</option>
            <option>Savings / बचत</option>
            <option>Digital Banking / डिजिटल बैंकिंग</option>
            <option>Small Business / छोटा व्यवसाय</option>
          </select>
        </div>

        <div className="space-y-6">
          {stories.map((story, index) => (
            <div key={index} className="border-2 border-gray-200 rounded-lg p-4">
              <div className="flex items-start gap-4">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-16 h-16 rounded-full border-2 border-gray-200"
                />
                <div>
                  <h3 className="font-bold text-lg">{story.localTitle}</h3>
                  <h4 className="text-md">{story.title}</h4>
                  <p className="text-gray-700">
                    {story.name} • {story.location}
                  </p>
                  <p className="mt-3 text-gray-700">{story.story}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {story.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="border-2 border-gray-200 px-3 py-1 rounded-lg text-sm"
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

        <button className="mt-6 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition">
          Share Your Story / अपनी कहानी साझा करें
        </button>
      </div>
    </div>
  );
};

export default Success;
