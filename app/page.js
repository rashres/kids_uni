export default function Home() {
  return (
    <main className="max-w-[1920px] mx-auto w-full ">
      <HeroSection />
      <InfoBlock
        title="After-School Tutoring"
        description="From Old"
        bgColor="bg-white"
      />
      <InfoBlock
        title="Summer Camp"
        description="From Website"
        bgColor="bg-gray-50"
      />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[680px] md:min-h-[760px] bg-[#2E5E73] overflow-hidden ">
      <div className="absolute inset-y-0 right-0 w-full md:w-2/3">
        <img
          src="https://www.dallasfoundation.org/wp-content/uploads/2024/05/Stocksy_txp039bee885uk200_OriginalDelivery_3013007-2-scaled-aspect-ratio-2880-1400-scaled-1.webp"
          alt="Smiling child"
          className="h-full w-full object-cover object-right"
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute z-20 top-1/2 right-[45%] -translate-y-1/2
                   w-[1000px] h-[1000px] rounded-full bg-[#2E5E73] hidden md:block"
      />

      <div className="relative z-30 w-full md:w-1/2 px-6 md:px-12 lg:px-16 py-16 md:py-24 ">
        <div className="max-w-md mx-auto md:mx-0">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight">
            Success starts here.
          </h1>
          <p className="mt-6 text-lg md:text-xl opacity-90">
            Your philanthropic journey starts here.
          </p>
          <button className="mt-8 inline-flex items-center rounded-full border-2 border-white bg-transparent px-8 py-3 text-base font-semibold hover:bg-white hover:text-[#2E5E73] transition">
            Donate
          </button>
        </div>
      </div>
    </section>
  );
}



function InfoBlock({ title, description, bgColor }) {
  return (
    <section className={`${bgColor} px-6 py-12 md:px-20`}>
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="text-3xl font-bold text-[#2E5E73]">{title}</h2>
        <p className="text-gray-700 text-lg">{description}</p>
      </div>
    </section>
  );
}
