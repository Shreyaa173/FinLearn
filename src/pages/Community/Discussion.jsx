const Discussion = () => {
  const discussions = [
    {
      title: "How to save money from small income?",
      localTitle: "कम आय से पैसे कैसे बचाएं?",
      category: "Savings",
      author: "Ramesh Kumar",
      date: "2 hours ago",
      replies: 15,
      status: "Active",
    },
    {
      title: "Questions about PM-KISAN scheme",
      localTitle: "पीएम-किसान योजना के बारे में प्रश्न",
      category: "Government Schemes",
      author: "Priya Singh",
      date: "1 day ago",
      replies: 23,
      status: "Active",
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen transform scale-[-0
    9]">
      <div className="w-[75vw] p-4">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Ask a question / प्रश्न पूछें..."
            className="w-full p-3 border-2 border-gray-200 rounded-lg mb-3"
          />
          <div className="flex gap-2">
            <select className="border-2 border-gray-200 rounded-lg p-3 flex-1">
              <option>All Topics / सभी विषय</option>
              <option>Savings / बचत</option>
              <option>Banking / बैंकिंग</option>
              <option>Government Schemes / सरकारी योजनाएं</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          {discussions.map((discussion, index) => (
            <div key={index} className="border-2 border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-lg">{discussion.localTitle}</h3>
                  <h4 className="text-md">{discussion.title}</h4>
                  <div className="text-sm text-gray-700 mt-1">
                    <span className="border-2 border-gray-200 px-2 py-1 rounded-lg">
                      {discussion.category}
                    </span>
                    <span className="ml-2">by {discussion.author}</span>
                    <span className="ml-2">{discussion.date}</span>
                  </div>
                </div>
              </div>
              <div className="mt-3 text-sm text-gray-700">
                {discussion.replies} replies
              </div>
            </div>
          ))}
        </div>

        <button className="mt-6 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition">
          Ask Question / प्रश्न पूछें
        </button>
      </div>
    </div>
  );
};

export default Discussion;
