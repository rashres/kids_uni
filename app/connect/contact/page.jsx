import PageTemplate from "../../components/PageTemplate";

export default function ContactPage() {
  return (
    <PageTemplate title="Contact Us" heroColor="bg-[#E63946]">
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#E63946]">Get in Touch</h2>
              <p className="text-gray-700 mb-8">
                Have a question or want to learn more about Kids-U programs? We'd love to hear from you and help you get involved.
              </p>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E63946] focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E63946] focus:border-transparent"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E63946] focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-sm font-semibold text-gray-700 mb-2">
                    I'm interested in *
                  </label>
                  <select
                    id="interest"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E63946] focus:border-transparent"
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="enroll">Enrolling My Child</option>
                    <option value="partner">Partnership Opportunities</option>
                    <option value="donate">Making a Donation</option>
                    <option value="general">General Information</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E63946] focus:border-transparent"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full px-8 py-4 rounded-md bg-[#E63946] text-white font-bold hover:bg-[#C62333] transition-all duration-300 uppercase shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#E63946]">Contact Information</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Main Office</h3>
                  <p className="text-gray-700">
                    Kids-U<br />
                    Dallas, TX 75201
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Phone</h3>
                  <p className="text-gray-700">
                    <a href="tel:2145551234" className="hover:text-[#E63946]">
                      (214) 555-1234
                    </a>
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Email</h3>
                  <p className="text-gray-700">
                    <a href="mailto:info@kids-u.org" className="hover:text-[#E63946]">
                      info@kids-u.org
                    </a>
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Program Hours</h3>
                  <p className="text-gray-700">
                    Monday - Friday<br />
                    3:00 PM - 6:00 PM<br />
                    (After-School Programs)
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">Follow Us</h3>
                  <div className="flex gap-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#E63946] text-white rounded-full flex items-center justify-center hover:bg-[#C62333] transition">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-12 h-12 bg-[#006B8F] text-white rounded-full flex items-center justify-center hover:bg-[#004F71] transition">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-12 h-12 bg-[#006B8F] text-white rounded-full flex items-center justify-center hover:bg-[#004F71] transition">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}

