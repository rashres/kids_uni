import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1D3557] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-10 md:mb-12">
          <div>
            <h3 className="font-bold mb-4 text-base md:text-lg">About</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link href="/about/our-history" className="hover:underline hover:text-[#E63946] transition-colors">Our History</Link></li>
              <li><Link href="/about/board-of-directors" className="hover:underline hover:text-[#E63946] transition-colors">Board of Directors</Link></li>
              <li><Link href="/about/spotlight" className="hover:underline hover:text-[#E63946] transition-colors">Students & Staff Spotlight</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-base md:text-lg">Programs & Services</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link href="/programs-services/our-programs" className="hover:underline hover:text-[#E63946] transition-colors">Our Programs</Link></li>
              <li><Link href="/programs-services/our-approach" className="hover:underline hover:text-[#E63946] transition-colors">Our Approach</Link></li>
              <li><Link href="/programs-services/outcomes" className="hover:underline hover:text-[#E63946] transition-colors">Outcomes</Link></li>
              <li><Link href="/programs-services/dedication-to-quality" className="hover:underline hover:text-[#E63946] transition-colors">Dedication to Quality</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-base md:text-lg">Support Kids-U</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link href="/support/volunteer" className="hover:underline hover:text-[#E63946] transition-colors">Volunteer</Link></li>
              <li><Link href="/support/partner" className="hover:underline hover:text-[#E63946] transition-colors">Partner</Link></li>
              <li><Link href="/support/locations" className="hover:underline hover:text-[#E63946] transition-colors">Locations</Link></li>
              <li><Link href="/donate" className="hover:underline hover:text-[#E63946] transition-colors">Donate</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4 text-base md:text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm opacity-90">
              <li><Link href="/blog" className="hover:underline hover:text-[#E63946] transition-colors">Kids-U Blog</Link></li>
              <li><Link href="/apartment-owners" className="hover:underline hover:text-[#E63946] transition-colors">Apartment Owners</Link></li>
              <li><Link href="/connect/contact" className="hover:underline hover:text-[#E63946] transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm opacity-90 text-center md:text-left">
            <p className="mb-2"><strong>Kids-U</strong> | Improving Lives Through Education</p>
            <p className="mb-2"><strong>Email:</strong> <a href="mailto:info@kids-u.org" className="hover:text-[#E63946] transition-colors">info@kids-u.org</a></p>
            <p><strong>Phone:</strong> <a href="tel:+12145551234" className="hover:text-[#E63946] transition-colors">(214) 555-1234</a></p>
          </div>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#E63946] transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#E63946] transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-xs md:text-sm opacity-75">
          <p>© 2025 Kids-U. All Rights Reserved | <Link href="/privacy" className="hover:underline hover:text-[#E63946]">Privacy Policy</Link> | <Link href="/terms" className="hover:underline hover:text-[#E63946]">Terms of Use</Link></p>
        </div>
      </div>
    </footer>
  );
}

