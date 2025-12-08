import PageTemplate from "../components/PageTemplate";
import Link from "next/link";

export default function DonatePage() {
  return (
    <PageTemplate title="Donate" heroColor="bg-[#E63946]">
      <section className="py-16 md:py-24 bg-[#FFF5F5]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Your Gift <span className="text-[#E63946]">Changes Lives</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
            Every donation to Kids-U directly supports children who need it most. Your contribution provides tutoring, mentorship, meals, and hope for a brighter future.
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-gray-900">
              Make Your Donation
            </h3>
            
            {/* Donation Amounts */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {[
                { amount: "$50", impact: "1 student for 1 month" },
                { amount: "$150", impact: "1 student for 3 months" },
                { amount: "$500", impact: "1 student for 1 year" },
                { amount: "Custom", impact: "Choose your amount" }
              ].map((option, idx) => (
                <button key={idx} className="p-6 border-2 border-gray-300 rounded-xl hover:border-[#E63946] hover:bg-[#FFF5F5] transition-all duration-300 text-center group">
                  <div className="text-2xl md:text-3xl font-black text-[#E63946] mb-2">
                    {option.amount}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600">
                    {option.impact}
                  </div>
                </button>
              ))}
            </div>

            {/* Impact Statement */}
            <div className="bg-[#FFF5F5] p-6 md:p-8 rounded-xl mb-10">
              <h4 className="text-xl font-bold mb-4 text-gray-900">Your Impact</h4>
              <div className="space-y-3 text-gray-700">
                <p className="flex items-start gap-3">
                  <span className="text-[#E63946] font-bold">•</span>
                  <span><strong>$50</strong> provides tutoring materials and supplies for one student for a month</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-[#E63946] font-bold">•</span>
                  <span><strong>$150</strong> covers academic assessments and personalized learning plans</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-[#E63946] font-bold">•</span>
                  <span><strong>$500</strong> provides a full year of after-school tutoring for one child</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-[#E63946] font-bold">•</span>
                  <span><strong>$1,000+</strong> supports summer camp, family services, and year-round programming</span>
                </p>
              </div>
            </div>

            {/* Donation Button */}
            <div className="text-center">
              <button className="w-full md:w-auto px-12 py-5 rounded-md bg-[#E63946] text-white font-bold text-xl hover:bg-[#C62333] transition-all duration-300 shadow-xl uppercase">
                Donate Now
              </button>
              <p className="text-sm text-gray-600 mt-4">
                Kids-U is a 501(c)(3) nonprofit organization. Your donation is tax-deductible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Other Ways to Support Kids-U
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Monthly Giving",
                description: "Join our sustainer circle with a monthly donation and provide consistent support throughout the year.",
                icon: "🔄"
              },
              {
                title: "Corporate Matching",
                description: "Many employers will match your donation. Check if your company participates in matching gift programs.",
                icon: "🏢"
              },
              {
                title: "Legacy Giving",
                description: "Include Kids-U in your estate planning to create a lasting impact for future generations.",
                icon: "🌟"
              }
            ].map((option, idx) => (
              <div key={idx} className="bg-[#F8F8F8] p-8 rounded-xl text-center shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-5xl mb-4">{option.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">{option.title}</h3>
                <p className="text-gray-700 leading-relaxed">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}

