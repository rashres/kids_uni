import PageTemplate from "../components/PageTemplate";

export default function ApartmentOwnersPage() {
  return (
    <PageTemplate title="Apartment Owners" heroColor="bg-[#A61D2A]">
      <section className="py-16 md:py-24 bg-[#FFF5F5]">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Partner to <span className="text-[#E63946]">Transform Lives</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
            Apartment owners and property managers play a crucial role in improving the lives of children in their communities. By partnering with Kids-U, you can provide valuable educational resources to your residents at no cost to them.
          </p>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed">
            Our programs create stable, thriving communities where families want to stay, reducing turnover and creating positive environments for all residents.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Benefits of Partnership
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[
              {
                title: "Resident Retention",
                description: "Families with children in our programs tend to stay longer, reducing turnover costs and maintaining stable occupancy.",
                image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop"
              },
              {
                title: "Community Value",
                description: "Educational programs add value to your property and make it more attractive to families seeking quality environments.",
                image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
              },
              {
                title: "Social Impact",
                description: "Make a tangible difference in your community by providing opportunities for children to succeed academically and socially.",
                image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop"
              }
            ].map((benefit, idx) => (
              <div key={idx} className="group">
                <div className="relative h-56 md:h-64 overflow-hidden rounded-xl mb-6 shadow-md">
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

      <section className="py-16 md:py-24 bg-[#E63946] text-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Let's Talk
          </h2>
          <p className="text-lg md:text-xl mb-10 opacity-95 max-w-2xl mx-auto">
            Contact us to learn more about bringing Kids-U programs to your apartment community.
          </p>
          <a href="/connect/contact" className="px-10 py-4 rounded-md bg-white text-[#E63946] font-bold hover:bg-gray-50 transition-all duration-300 shadow-xl inline-block uppercase">
            Contact Us Today
          </a>
        </div>
      </section>
    </PageTemplate>
  );
}

