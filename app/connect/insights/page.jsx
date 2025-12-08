import PageTemplate from "../../components/PageTemplate";

export default function InsightsPage() {
  const insights = [
    {
      title: "A Fund that Moves the Needle",
      excerpt: "Discover how one donor's strategic approach is creating transformational change in education across Dallas.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      category: "Donor Stories",
      date: "May 15, 2024"
    },
    {
      title: "Partners for Progress: Big Thought",
      excerpt: "Learn about our collaboration with Big Thought to expand access to arts education for underserved youth.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop",
      category: "Community Impact",
      date: "May 10, 2024"
    },
    {
      title: "The Dallas Foundation Provides $310,000 in Rapid Relief Grants",
      excerpt: "Supporting families affected by SNAP disruptions through emergency funding to local food banks.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop",
      category: "Press Release",
      date: "May 5, 2024"
    },
    {
      title: "Ask an Expert: Creating a Charitable Fund Through a Community Foundation",
      excerpt: "Our experts answer common questions about the advantages of giving through a community foundation.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      category: "Expert Insights",
      date: "April 28, 2024"
    },
    {
      title: "2024 Grant Recipients Announced",
      excerpt: "Celebrating the incredible work of nonprofits receiving grants in our latest funding cycle.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
      category: "Grantmaking",
      date: "April 20, 2024"
    },
    {
      title: "Women's Philanthropy Institute Celebrates 10 Years",
      excerpt: "A decade of women leading change and making transformational impact in the Dallas community.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop",
      category: "Programs",
      date: "April 15, 2024"
    }
  ];

  return (
    <PageTemplate title="Insights & Impact" heroColor="bg-[#C0647B]">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            Stories of <span className="font-bold">Impact</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            Explore stories, insights, and news about philanthropy and community impact in Dallas.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight, idx) => (
              <article key={idx} className="group cursor-pointer">
                <div className="relative h-64 overflow-hidden rounded-lg mb-4">
                  <img 
                    src={insight.image} 
                    alt={insight.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-[#006B8F] text-white text-sm font-semibold rounded-full">
                      {insight.category}
                    </span>
                  </div>
                </div>
                <div className="text-sm text-gray-500 mb-2">{insight.date}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#006B8F] transition-colors">
                  {insight.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {insight.excerpt}
                </p>
                <button className="text-[#006B8F] font-semibold hover:underline inline-flex items-center gap-2">
                  Read More
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#004F71] text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stay Informed
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Subscribe to our newsletter for the latest news, stories, and opportunities.
          </p>
          <button className="px-10 py-4 rounded-full bg-white text-[#004F71] font-bold hover:bg-gray-100 transition-all duration-300">
            Subscribe Now
          </button>
        </div>
      </section>
    </PageTemplate>
  );
}

