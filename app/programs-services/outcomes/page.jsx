import PageTemplate from "../../components/PageTemplate";

export default function OutcomesPage() {
  const outcomes = [
    { stat: "85%", label: "Improved Academic Performance" },
    { stat: "92%", label: "Increased School Attendance" },
    { stat: "78%", label: "Enhanced Social Skills" },
    { stat: "95%", label: "Parent Satisfaction Rate" }
  ];

  return (
    <PageTemplate title="Outcomes" heroColor="bg-[#C62333]">
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Measurable <span className="text-[#E63946]">Results</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-12 md:mb-16 max-w-3xl mx-auto">
            Our programs deliver real, measurable impact for the children and families we serve.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-16">
            {outcomes.map((outcome, idx) => (
              <div key={idx} className="bg-[#FFF5F5] p-8 rounded-xl shadow-lg text-center">
                <div className="text-5xl md:text-6xl font-black text-[#E63946] mb-4">
                  {outcome.stat}
                </div>
                <div className="text-base md:text-lg font-semibold text-gray-900">
                  {outcome.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Student Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Academic Achievement",
                description: "Students show an average improvement of 2 grade levels in reading comprehension after one year in our program.",
                image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop"
              },
              {
                title: "Behavioral Improvements",
                description: "Teachers report significant improvements in classroom behavior, participation, and cooperation.",
                image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop"
              },
              {
                title: "Long-Term Success",
                description: "90% of our program graduates go on to complete high school and pursue post-secondary education.",
                image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop"
              }
            ].map((story, idx) => (
              <div key={idx} className="bg-white p-6 md:p-8 rounded-xl shadow-md">
                <div className="relative h-48 overflow-hidden rounded-lg mb-6">
                  <img 
                    src={story.image} 
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">{story.title}</h3>
                <p className="text-gray-700 leading-relaxed">{story.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}

