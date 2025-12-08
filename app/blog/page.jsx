import PageTemplate from "../components/PageTemplate";

export default function BlogPage() {
  const posts = [
    {
      title: "5 Ways After-School Programs Benefit Children",
      excerpt: "Discover how quality after-school programs like Kids-U help children develop academically, socially, and emotionally.",
      date: "December 1, 2024",
      category: "Education",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop"
    },
    {
      title: "Meet Our Volunteers: Making a Difference Every Day",
      excerpt: "Learn about the dedicated volunteers who make our programs possible and the impact they're having on students' lives.",
      date: "November 28, 2024",
      category: "Community",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=500&fit=crop"
    },
    {
      title: "Summer Camp 2024: A Huge Success",
      excerpt: "Recap of our summer enrichment camps and the amazing experiences our students had this year.",
      date: "November 20, 2024",
      category: "Programs",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop"
    },
    {
      title: "The Importance of Social-Emotional Learning",
      excerpt: "Why SEL is just as important as academic skills and how we incorporate it into all our programs.",
      date: "November 15, 2024",
      category: "Education",
      image: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=800&h=500&fit=crop"
    },
    {
      title: "Partnership Spotlight: Supporting Local Families",
      excerpt: "How our partnerships with local organizations are helping us reach more families in need.",
      date: "November 10, 2024",
      category: "Partnerships",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop"
    },
    {
      title: "Student Success Story: Maria's Journey",
      excerpt: "From struggling reader to honor student - one student's inspiring transformation with Kids-U.",
      date: "November 5, 2024",
      category: "Success Stories",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=500&fit=crop"
    }
  ];

  return (
    <PageTemplate title="Kids-U Blog" heroColor="bg-[#B71E2D]">
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900">
            Latest News & <span className="text-[#E63946]">Stories</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-12 md:mb-16 max-w-3xl mx-auto text-center">
            Stay updated on our programs, success stories, and the impact we're making in the Dallas community.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <article key={idx} className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-[#E63946] text-white text-xs font-bold rounded-full uppercase">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-3">{post.date}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#E63946] transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <button className="text-[#E63946] font-semibold hover:underline inline-flex items-center gap-2">
                    Read More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}

