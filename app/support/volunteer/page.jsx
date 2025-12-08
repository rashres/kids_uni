import PageTemplate from "../../components/PageTemplate";

export default function VolunteerPage() {
  return (
    <PageTemplate title="Volunteer" heroColor="bg-[#E63946]">
      <section className="py-16 md:py-24 bg-[#FFF5F5]">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Make a Difference, <span className="text-[#E63946]">One Child at a Time</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
            Volunteers are the heart of Kids-U. Whether you're a tutor, mentor, or help with administrative tasks, your time and talents make a real difference in the lives of children.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            No teaching experience required - we provide training and support. All we ask is that you're committed to helping kids succeed.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Volunteer Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                title: "Tutoring",
                description: "Work directly with students in small groups, helping them with homework and reinforcing classroom learning.",
                commitment: "2-3 hours per week",
                image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop"
              },
              {
                title: "Mentoring",
                description: "Build meaningful relationships with students, providing guidance, encouragement, and positive role modeling.",
                commitment: "1-2 hours per week",
                image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop"
              },
              {
                title: "Special Events",
                description: "Help with summer camps, field trips, family events, and seasonal celebrations.",
                commitment: "Flexible schedule",
                image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop"
              }
            ].map((opportunity, idx) => (
              <div key={idx} className="bg-[#F8F8F8] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={opportunity.image} 
                    alt={opportunity.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{opportunity.title}</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">{opportunity.description}</p>
                  <div className="text-sm font-semibold text-[#E63946]">
                    Time Commitment: {opportunity.commitment}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#E63946] text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to Volunteer?
          </h2>
          <p className="text-lg md:text-xl mb-10 opacity-95 max-w-2xl mx-auto">
            Fill out our volunteer application and we'll get in touch with you about available opportunities.
          </p>
          <a href="/connect/contact" className="px-10 md:px-12 py-4 md:py-5 rounded-md bg-white text-[#E63946] font-bold hover:bg-gray-50 transition-all duration-300 shadow-xl inline-block uppercase">
            Apply to Volunteer
          </a>
        </div>
      </section>
    </PageTemplate>
  );
}

