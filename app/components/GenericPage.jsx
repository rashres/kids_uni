import PageTemplate from "./PageTemplate";
import Link from "next/link";

export default function GenericPage({ title, heroColor, sections }) {
  return (
    <PageTemplate title={title} heroColor={heroColor}>
      {sections.map((section, idx) => (
        <section 
          key={idx} 
          className={`py-16 md:py-24 ${idx % 2 === 0 ? 'bg-white' : 'bg-[#F8F8F8]'}`}
        >
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            {section.heading && (
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light mb-6 md:mb-8 max-w-4xl text-gray-900 leading-tight">
                {section.heading}
              </h2>
            )}
            {section.content && (
              <div className="max-w-4xl mb-10 md:mb-12">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  {section.content}
                </p>
              </div>
            )}
            {section.cards && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {section.cards.map((card, cardIdx) => (
                  <div key={cardIdx} className="group">
                    <div className="relative h-56 md:h-64 overflow-hidden rounded-lg mb-4 md:mb-6 shadow-md">
                      <img 
                        src={card.image} 
                        alt={card.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900">{card.title}</h3>
                    <p className="text-gray-700 leading-relaxed text-sm md:text-base">{card.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[#006B8F] text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            Get Involved
          </h2>
          <p className="text-lg md:text-xl mb-8 md:mb-10 opacity-95 max-w-2xl mx-auto">
            Learn more about how you can make a difference in our community.
          </p>
          <Link href="/connect/contact" className="px-8 md:px-10 py-3 md:py-4 rounded-full bg-white text-[#006B8F] font-bold hover:bg-gray-50 transition-all duration-300 inline-block shadow-xl text-sm md:text-base">
            Contact Us
          </Link>
        </div>
      </section>
    </PageTemplate>
  );
}

