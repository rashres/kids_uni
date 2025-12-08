import PageTemplate from "../../components/PageTemplate";

export default function SpotlightPage() {
  const spotlights = [
    {
      name: "Maria's Story",
      role: "Student Success",
      story: "Maria joined Kids-U in 3rd grade, struggling with reading. Today, she's a straight-A high school student planning to attend college.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop"
    },
    {
      name: "Mr. Thompson",
      role: "Lead Tutor",
      story: "A retired teacher who has volunteered with Kids-U for 10 years, impacting hundreds of students' lives.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=600&fit=crop"
    },
    {
      name: "Carlos Rodriguez",
      role: "Alumni Success",
      story: "Former Kids-U student, now a college graduate working as an engineer and mentoring current students.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop"
    },
    {
      name: "Sarah Chen",
      role: "Program Coordinator",
      story: "Dedicated staff member who develops innovative curriculum and supports tutors in delivering excellent instruction.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop"
    }
  ];

  return (
    <PageTemplate title="Students & Staff Spotlight" heroColor="bg-[#86141E]">
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center text-gray-900">
            Celebrating Our <span className="text-[#E63946]">Community</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-12 md:mb-16 max-w-3xl mx-auto text-center">
            Meet the inspiring students, dedicated staff, and passionate volunteers who make Kids-U special.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
            {spotlights.map((person, idx) => (
              <div key={idx} className="bg-[#F8F8F8] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={person.image} 
                      alt={person.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-6 md:p-8">
                    <div className="text-sm font-bold text-[#E63946] uppercase tracking-wide mb-2">
                      {person.role}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {person.story}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}

