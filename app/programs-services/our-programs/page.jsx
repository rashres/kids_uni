import PageTemplate from "../../components/PageTemplate";
import Link from "next/link";

export default function OurProgramsPage() {
  return (
    <PageTemplate title="Our Programs" heroColor="bg-[#E63946]">
      {/* Introduction */}
      <section className="py-16 md:py-24 bg-[#FFF5F5]">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 text-gray-900">
            Comprehensive Support for <span className="text-[#E63946]">At-Risk Youth</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
            Kids-U provides after-school tutoring and social-emotional learning (SEL) programs, summer camps, family services, and community outreach for at-risk youth living in low-income apartment communities.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Our programs are designed to address the unique challenges faced by children in underserved communities, providing them with the academic support, mentorship, and resources they need to succeed.
          </p>
        </div>
      </section>

      {/* After-School Tutoring */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#E63946]">
                After-School Tutoring
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our after-school tutoring program focuses on the core learning subjects of math, language arts, and reading for students in grades K-8.
              </p>
              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                Our TEKS (Texas Essential Knowledge & Skills)-based curriculum, PATHWAYS, parallels what students are learning in their everyday public-school classrooms. We use a "hands-on" approach to teaching, ensuring assistance to all types of learners.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Small group instruction (4-6 students per tutor)",
                  "Individualized learning plans",
                  "Certified teachers and trained tutors",
                  "Progress tracking and reporting",
                  "Free for all participating students"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#E63946] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-96 md:h-[500px] overflow-hidden rounded-xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=1000&fit=crop" 
                alt="After-School Tutoring"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Summer Camps */}
      <section className="py-16 md:py-24 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="order-2 md:order-1 relative h-96 md:h-[500px] overflow-hidden rounded-xl shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=1000&fit=crop" 
                alt="Summer Enrichment Camps"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#E63946]">
                Summer Enrichment Camps
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The activities that children engage in during out-of-school-time hours directly impact how well children do in school. Low-income children deserve access to the same types of programs and the mentors they provide.
              </p>
              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                Our summer camps prevent learning loss, provide enriching experiences, and keep kids engaged in productive activities throughout the summer months.
              </p>
              <ul className="space-y-3">
                {[
                  "STEM activities and hands-on learning",
                  "Arts, music, and creative expression",
                  "Physical fitness and outdoor activities",
                  "Field trips and cultural experiences",
                  "Healthy meals and snacks provided"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[#E63946] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Programs Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center text-gray-900">
            Additional <span className="text-[#E63946]">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                title: "Social-Emotional Learning",
                description: "Character development programs that build resilience, empathy, and emotional intelligence.",
                image: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=600&h=400&fit=crop"
              },
              {
                title: "Family Services",
                description: "Supporting families with resources, workshops, and guidance to create stable home environments.",
                image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop"
              },
              {
                title: "Community Outreach",
                description: "Partnerships with schools, nonprofits, and community organizations to maximize our impact.",
                image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop"
              }
            ].map((program, idx) => (
              <div key={idx} className="group bg-[#F8F8F8] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">{program.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{program.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[#E63946] text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg md:text-xl mb-10 opacity-95 max-w-2xl mx-auto">
            Learn more about our approach and see the outcomes we're achieving for children in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/programs-services/our-approach" className="px-8 md:px-10 py-3 md:py-4 rounded-md bg-white text-[#E63946] font-bold hover:bg-gray-50 transition-all duration-300 shadow-xl text-sm md:text-base uppercase">
              Our Approach
            </Link>
            <Link href="/programs-services/outcomes" className="px-8 md:px-10 py-3 md:py-4 rounded-md border-2 border-white text-white font-bold hover:bg-white hover:text-[#E63946] transition-all duration-300 text-sm md:text-base uppercase">
              View Outcomes
            </Link>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}

