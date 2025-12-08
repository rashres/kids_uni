import PageTemplate from "../../components/PageTemplate";
import Link from "next/link";

export default function AdvisorsPage() {
  return (
    <PageTemplate title="Advisors" heroColor="bg-[#D9895A]">
      <section className="py-20 bg-[#FBF6F4]">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Guide Giving, <span className="font-bold">Drive Change</span>
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Estate planners, financial advisors, accountants, and attorneys are trusted partners in a unique position to help their clients on their philanthropic journey.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Working alongside you, we can help create and implement a strategy to meet your clients' philanthropic goals while providing expert guidance on charitable giving structures and tax advantages.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold text-center mb-16 text-[#006B8F]">
            Resources for Professional Advisors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Expert Collaboration",
                description: "Work with our experienced team to develop comprehensive charitable giving strategies for your clients.",
                image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop"
              },
              {
                title: "Tax Strategies",
                description: "Access sophisticated charitable planning tools and strategies to maximize your clients' philanthropic and financial goals.",
                image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop"
              },
              {
                title: "Ongoing Support",
                description: "Benefit from our dedicated team's expertise in managing complex gifts and providing exceptional client service.",
                image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop"
              }
            ].map((resource, idx) => (
              <div key={idx} className="group">
                <div className="relative h-64 overflow-hidden rounded-lg mb-6">
                  <img 
                    src={resource.image} 
                    alt={resource.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{resource.title}</h3>
                <p className="text-gray-700 leading-relaxed">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#006B8F] text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Partner With Us
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Let's work together to help your clients achieve their philanthropic goals.
          </p>
          <Link href="/connect/contact" className="px-10 py-4 rounded-full bg-white text-[#006B8F] font-bold hover:bg-gray-100 transition-all duration-300 inline-block">
            Contact Our Team
          </Link>
        </div>
      </section>
    </PageTemplate>
  );
}

