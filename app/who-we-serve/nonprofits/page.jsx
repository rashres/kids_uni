import PageTemplate from "../../components/PageTemplate";
import Link from "next/link";

export default function NonprofitsPage() {
  return (
    <PageTemplate title="Nonprofits" heroColor="bg-[#C3956F]">
      <section className="py-20 bg-[#FBF6F4]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Access Opportunities, <span className="font-bold">Fund Your Mission</span>
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              We award grants through several key channels, aligning with our strategic priorities. These entrusted funds enable us to make grants that honor donor intent while creating meaningful impact across our community.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Whether you're seeking funding for a specific project or building long-term sustainability, The Dallas Foundation connects nonprofits with resources and donors who share your mission.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#006B8F]">
            How We Support Nonprofits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Grant Opportunities",
                description: "Access funding through our competitive grant programs designed to address critical community needs.",
                image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop"
              },
              {
                title: "Capacity Building",
                description: "Strengthen your organization with resources, training, and technical assistance to increase your impact.",
                image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop"
              },
              {
                title: "Donor Connections",
                description: "Connect with philanthropists who are passionate about supporting organizations like yours.",
                image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop"
              }
            ].map((support, idx) => (
              <div key={idx} className="group">
                <div className="relative h-64 overflow-hidden rounded-lg mb-6">
                  <img 
                    src={support.image} 
                    alt={support.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{support.title}</h3>
                <p className="text-gray-700 leading-relaxed">{support.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#006B8F]">
            Available Grant Programs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Community Impact Grants",
                description: "Support for programs addressing education, health, arts, and social services in the Dallas area.",
              },
              {
                title: "Capacity Building Grants",
                description: "Funding to strengthen organizational infrastructure, leadership, and operational effectiveness.",
              },
              {
                title: "Emergency Relief Funding",
                description: "Rapid response grants to address urgent community needs and crisis situations.",
              },
              {
                title: "Collaborative Initiatives",
                description: "Support for partnerships and coalitions working together on systemic community challenges.",
              }
            ].map((program, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-[#006B8F]">{program.title}</h3>
                <p className="text-gray-700 leading-relaxed">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#006B8F] text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Apply for Funding
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Explore grant opportunities and learn how to apply for funding to support your mission.
          </p>
          <Link href="/our-impact/grant-opportunities" className="px-10 py-4 rounded-full bg-white text-[#006B8F] font-bold hover:bg-gray-100 transition-all duration-300 inline-block">
            View Grant Opportunities
          </Link>
        </div>
      </section>
    </PageTemplate>
  );
}

