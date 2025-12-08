import Navigation from "./Navigation";
import Footer from "./Footer";

export default function PageTemplate({ 
  title, 
  heroColor = "bg-[#E87461]",
  children 
}) {
  return (
    <div className="w-full bg-white min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className={`${heroColor} pt-40 md:pt-48 pb-16 md:pb-24 px-6 md:px-12`}>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
            {title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <div className="w-full">
        {children}
      </div>

      <Footer />
    </div>
  );
}

