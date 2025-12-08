"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div className="w-full bg-white min-h-screen">
      <Navigation />
      <div className="pt-[132px]">  {/* Offset for fixed header */}
        <HeroSection />
        <ThreeCardSection />
        <MissionSection />
        <ProgramsShowcaseSection />
        <ImpactStatsSection />
        <TestimonialsSection />
        <NewsletterSection />
        <Footer />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-132px)] md:h-[700px] overflow-hidden bg-[#E63946]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&h=1080&fit=crop"
          alt="Kids U - Success Starts Here"
          className="h-full w-full object-cover object-center"
          style={{ objectPosition: '50% 40%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#E63946]/85 via-[#E63946]/70 to-[#E63946]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 w-full">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] mb-8 tracking-tight text-shadow-lg">
              SUCCESS<br />
              STARTS<br />
              HERE!
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-10 font-medium opacity-95">
              Improving the lives of low-income children through education, mentorship, and community support.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <Link href="/donate" className="px-8 sm:px-12 py-4 sm:py-5 rounded-md border-3 border-white text-white font-bold text-base sm:text-xl hover:bg-white hover:text-[#E63946] transition-all duration-300 shadow-2xl text-center uppercase tracking-wide">
                DONATE
              </Link>
              <Link href="/connect/contact" className="px-8 sm:px-12 py-4 sm:py-5 rounded-md border-3 border-white text-white font-bold text-base sm:text-xl hover:bg-white hover:text-[#E63946] transition-all duration-300 shadow-2xl text-center uppercase tracking-wide">
                VOLUNTEER
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




function ThreeCardSection() {
  const cards = [
    {
      title: "Our Programs",
      heading: "After-School Tutoring &",
      headingBold: "Academic Support",
      description: "Kids-U provides after-school tutoring focusing on core learning subjects of math, language arts, and reading for students in grades K-8. Our TEKS-based curriculum parallels what students learn in their everyday public-school classrooms.",
      buttonText: "Learn More",
      href: "/programs-services/our-programs",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop"
    },
    {
      title: "Our Approach",
      heading: "Social-Emotional Learning &",
      headingBold: "Character Development",
      description: "We use a hands-on approach to teaching, ensuring assistance to all types of learners. Our programs include social-emotional learning (SEL), character development, and mentorship opportunities that help students thrive.",
      buttonText: "Learn More",
      href: "/programs-services/our-approach",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop"
    },
    {
      title: "Support Kids-U",
      heading: "Partner With Us,",
      headingBold: "Make an Impact",
      description: "Join us in improving the lives of low-income children. Whether through volunteering, donations, or partnerships, your support helps provide crucial educational opportunities to at-risk youth in our community.",
      buttonText: "Get Involved",
      href: "/support-kids-u",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {cards.map((card, idx) => (
            <div key={idx} className="flex flex-col group">
              <h3 className="text-xl md:text-2xl font-bold text-[#E63946] mb-4 md:mb-6">{card.title}</h3>
              <div className="mb-4 md:mb-6">
                <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight text-gray-900">
                  {card.heading}<br />
                  <span className="font-bold">{card.headingBold}</span>
                </h2>
              </div>
              <p className="text-gray-700 mb-6 md:mb-8 leading-relaxed text-sm md:text-base flex-grow">{card.description}</p>
              <Link href={card.href} className="mb-6 md:mb-8 px-6 md:px-8 py-2.5 md:py-3 rounded-full border-2 border-[#E63946] text-[#E63946] font-semibold hover:bg-[#E63946] hover:text-white transition-all duration-300 self-start text-sm md:text-base text-center">
                {card.buttonText}
              </Link>
              <div className="relative h-56 md:h-64 overflow-hidden rounded-lg shadow-md">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



function MissionSection() {
  return (
    <section className="bg-[#F8F8F8] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <div className="mb-4 md:mb-6 text-xs md:text-sm font-bold text-[#E63946] uppercase tracking-wider">
            Our Mission
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 md:mb-8 text-gray-900">
            Empowering At-Risk Youth Through{" "}
            <span className="text-[#E63946]">Education & Support</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              Kids-U provides after-school tutoring, social-emotional learning (SEL) programs, summer camps, family services, and community outreach for at-risk youth living in low-income apartment communities.
            </p>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Our TEKS (Texas Essential Knowledge & Skills)-based curriculum parallels what students are learning in their everyday public-school classrooms, using a hands-on approach to ensure assistance to all types of learners.
            </p>
          </div>
          <div className="relative h-80 md:h-96 overflow-hidden rounded-lg shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop" 
              alt="Kids-U Programs"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProgramsShowcaseSection() {
  const programs = [
    {
      title: "After-School Tutoring",
      description: "Academic support in math, language arts, and reading for grades K-8",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=800&fit=crop",
      icon: "📚"
    },
    {
      title: "Summer Enrichment Camps",
      description: "Engaging summer programs that prevent learning loss and build skills",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=800&fit=crop",
      icon: "☀️"
    },
    {
      title: "Social-Emotional Learning",
      description: "Character development and emotional intelligence programs",
      image: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=800&h=800&fit=crop",
      icon: "❤️"
    },
    {
      title: "Family Services",
      description: "Support for families to create stable, nurturing home environments",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=800&fit=crop",
      icon: "👨‍👩‍👧‍👦"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-10 md:mb-12 text-center">
          <span className="text-[#E63946]">Our Programs</span> <span className="text-gray-900">& Services</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {programs.map((program, idx) => (
            <div key={idx} className="group relative h-80 md:h-96 overflow-hidden rounded-xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300">
              <img 
                src={program.image} 
                alt={program.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1D3557]/95 via-[#1D3557]/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <div className="text-4xl mb-3">{program.icon}</div>
                <h3 className="text-white text-xl md:text-2xl font-bold leading-tight mb-2">{program.title}</h3>
                <p className="text-white/90 text-sm md:text-base">{program.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ImpactStatsSection() {
  const stats = [
    { number: "1,000+", label: "Students Served Annually" },
    { number: "15+", label: "Apartment Communities" },
    { number: "25", label: "Years of Service" },
    { number: "500+", label: "Volunteers & Mentors" }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#1D3557] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16">
          Our <span className="text-[#E63946]">Impact</span> by the Numbers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl sm:text-5xl md:text-6xl font-black mb-3 md:mb-4 text-[#E63946]">
                {stat.number}
              </div>
              <div className="text-base sm:text-lg md:text-xl font-medium opacity-95">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Kids-U has transformed my daughter's attitude toward learning. She's more confident and excited about school!",
      author: "Maria Rodriguez",
      role: "Parent",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    },
    {
      quote: "The tutoring program helped me improve my math grades from C's to A's. Now I actually enjoy solving problems!",
      author: "James Williams",
      role: "8th Grade Student",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      quote: "Volunteering at Kids-U has been incredibly rewarding. Seeing these kids grow and succeed makes it all worthwhile.",
      author: "Sarah Johnson",
      role: "Volunteer Tutor",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 md:mb-16 text-center text-gray-900">
          Success <span className="text-[#E63946]">Stories</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-[#F8F8F8] p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.author}
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-4 border-[#E63946]"
                />
                <div className="ml-4">
                  <div className="font-bold text-gray-900 text-lg">{testimonial.author}</div>
                  <div className="text-gray-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic text-base md:text-lg">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function NewsletterSection() {
  return (
    <section className="py-16 md:py-24 bg-[#E63946] text-white">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
              Get Involved Today
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-8 md:mb-10 opacity-95">
              Join us in making a difference in the lives of children. Whether you volunteer your time, make a donation, or partner with us, every contribution matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/support/volunteer" className="px-6 md:px-8 py-3 md:py-4 rounded-md bg-white text-[#E63946] font-bold hover:bg-gray-50 transition-all duration-300 shadow-xl text-sm md:text-base text-center uppercase">
                Volunteer
              </Link>
              <Link href="/donate" className="px-6 md:px-8 py-3 md:py-4 rounded-md border-2 border-white text-white font-bold hover:bg-white hover:text-[#E63946] transition-all duration-300 text-sm md:text-base text-center uppercase">
                Donate Now
              </Link>
            </div>
          </div>
          <div className="relative h-80 md:h-96 overflow-hidden rounded-xl shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=800&h=600&fit=crop" 
              alt="Get Involved"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

