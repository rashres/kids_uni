import PageTemplate from "../../components/PageTemplate";
import Link from "next/link";

export default function DonorsPage() {
  return (
    <PageTemplate title="Donors" heroColor="bg-[#E87461]">
      {/* Main Content Section */}
      <section className="py-20 bg-[#FBF6F4]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Empowering Donors, <span className="font-bold">Inspiring Impact</span>
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              The Dallas Foundation offers highly individualized service to help you achieve your personal charitable goals. Let us give you the one-on-one attention you deserve and create giving plans meaningful to you.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Whether you're just beginning your philanthropic journey or looking to expand your impact, we provide the expertise and resources to make giving easy, effective, and personally fulfilling.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#006B8F]">
            Why Give Through The Dallas Foundation?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Expert Guidance",
                description: "Our experienced team provides personalized advice to help you maximize your philanthropic impact and achieve your charitable goals.",
                image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
              },
              {
                title: "Tax Benefits",
                description: "Take advantage of immediate tax deductions while supporting the causes you care about most, with flexible giving options.",
                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop"
              },
              {
                title: "Lasting Legacy",
                description: "Create a charitable fund that can support your community for generations, ensuring your values live on long into the future.",
                image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=600&h=400&fit=crop"
              }
            ].map((benefit, idx) => (
              <div key={idx} className="group">
                <div className="relative h-64 overflow-hidden rounded-lg mb-6">
                  <img 
                    src={benefit.image} 
                    alt={benefit.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Giving Options */}
      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold text-center mb-4 text-[#006B8F]">
            Explore Your Giving Options
          </h2>
          <p className="text-center text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
            We offer a variety of fund types to match your philanthropic goals and financial situation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Donor-Advised Funds",
                description: "The most popular and flexible way to give. Make a charitable contribution, receive an immediate tax deduction, and recommend grants over time.",
                link: "/what-we-do/donor-advised-funds"
              },
              {
                title: "Scholarships",
                description: "Invest in the next generation by creating a scholarship fund that helps students achieve their educational dreams.",
                link: "/what-we-do/scholarships"
              },
              {
                title: "Legacy Planning",
                description: "Include charitable giving in your estate plans to create a lasting impact that reflects your values.",
                link: "/what-we-do/legacy-planning"
              },
              {
                title: "Supporting Organizations",
                description: "Establish a permanent charitable fund to support your favorite nonprofit organization in perpetuity.",
                link: "/what-we-do/supporting-organizations"
              }
            ].map((option, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-[#006B8F]">{option.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{option.description}</p>
                <Link href={option.link} className="text-[#006B8F] font-semibold hover:underline inline-flex items-center gap-2">
                  Learn More
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#006B8F] text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Connect with our team to discuss how you can create meaningful change in your community.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/connect/contact" className="px-10 py-4 rounded-full bg-white text-[#006B8F] font-bold hover:bg-gray-100 transition-all duration-300">
              Contact Us
            </Link>
            <Link href="/donate" className="px-10 py-4 rounded-full border-2 border-white text-white font-bold hover:bg-white hover:text-[#006B8F] transition-all duration-300">
              Open a Fund
            </Link>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}

