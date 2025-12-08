import PageTemplate from "../../components/PageTemplate";

export default function EventsPage() {
  const events = [
    {
      date: "May 03",
      time: "7:30 a.m. - 10:30 a.m.",
      title: "Beyond Numbers: Transforming How Advisors Win and Retain Clients",
      description: "Join us for an insightful breakfast discussion on innovative strategies for financial advisors.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop"
    },
    {
      date: "June 15",
      time: "6:00 p.m. - 8:00 p.m.",
      title: "Annual Community Impact Celebration",
      description: "Celebrate the incredible impact of our donors and nonprofit partners over the past year.",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=400&fit=crop"
    },
    {
      date: "July 20",
      time: "12:00 p.m. - 1:30 p.m.",
      title: "Nonprofit Leadership Luncheon",
      description: "Network with fellow nonprofit leaders and learn about emerging trends in the sector.",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=400&fit=crop"
    },
    {
      date: "Aug 10",
      time: "5:30 p.m. - 7:30 p.m.",
      title: "Rising GENerosity Networking Happy Hour",
      description: "Young professionals gather to discuss philanthropy and community engagement.",
      image: "https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=800&h=400&fit=crop"
    }
  ];

  return (
    <PageTemplate title="Events" heroColor="bg-[#9E6C7E]">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            <span className="font-bold">Attend</span> an Event
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            Join us for educational programs, networking opportunities, and community celebrations throughout the year.
          </p>
          
          <div className="space-y-8">
            {events.map((event, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-32 flex-shrink-0">
                        <div className="text-[#006B8F] font-bold text-2xl">{event.date}</div>
                        <div className="text-gray-600 text-sm mt-1">{event.time}</div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                          {event.title}
                        </h3>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                          {event.description}
                        </p>
                        <div className="flex gap-4">
                          <button className="px-6 py-3 rounded-full border-2 border-[#006B8F] text-[#006B8F] font-semibold hover:bg-[#006B8F] hover:text-white transition-all duration-300">
                            Register Now
                          </button>
                          <button className="px-6 py-3 rounded-full text-[#006B8F] font-semibold hover:underline">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F5F5F5]">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl font-bold mb-6 text-[#006B8F]">
            Stay Informed About Upcoming Events
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Sign up for our newsletter to receive invitations and updates about upcoming events and programs.
          </p>
          <button className="px-10 py-4 rounded-full bg-[#006B8F] text-white font-bold hover:bg-[#004F71] transition-all duration-300">
            Subscribe to Newsletter
          </button>
        </div>
      </section>
    </PageTemplate>
  );
}

