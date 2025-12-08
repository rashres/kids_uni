import PageTemplate from "../../components/PageTemplate";

export default function LocationsPage() {
  const locations = [
    { name: "Oak Cliff Learning Center", address: "1234 West Davis St, Dallas, TX 75208", students: "120+" },
    { name: "Pleasant Grove Site", address: "5678 Bruton Rd, Dallas, TX 75227", students: "95+" },
    { name: "Vickery Meadow Community", address: "9101 Skillman St, Dallas, TX 75243", students: "150+" },
    { name: "South Dallas Center", address: "2345 Malcolm X Blvd, Dallas, TX 75215", students: "110+" },
  ];

  return (
    <PageTemplate title="Our Locations" heroColor="bg-[#C62333]">
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Serving <span className="text-[#E63946]">15+ Communities</span> Across Dallas
          </h2>
          <p className="text-lg md:text-xl text-gray-700">
            Kids-U operates in low-income apartment communities throughout the Dallas area, bringing our programs directly to the families who need them most.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locations.map((location, idx) => (
              <div key={idx} className="bg-[#F8F8F8] p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#E63946] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{location.name}</h3>
                    <p className="text-gray-600 mb-2">{location.address}</p>
                    <p className="text-[#E63946] font-semibold">{location.students} Students Served</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F8F8F8]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Bring Kids-U to Your Community
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
            Are you an apartment owner or property manager interested in bringing our programs to your community? We'd love to partner with you.
          </p>
          <a href="/apartment-owners" className="px-10 py-4 rounded-md bg-[#E63946] text-white font-bold hover:bg-[#C62333] transition-all duration-300 shadow-lg inline-block uppercase">
            Learn More
          </a>
        </div>
      </section>
    </PageTemplate>
  );
}

