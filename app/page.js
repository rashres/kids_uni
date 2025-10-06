import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-[3840px] mx-auto w-full ">
      <HeroSection />

      <ProgramsSection />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[680px] md:min-h-[760px] bg-[#2E5E73] overflow-hidden flex align-center text-white ">
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

      <div className="relative z-30 w-full md:w-1/2 px-6 md:px-12 lg:px-16 py-16 md:py-24 mt-30  ">
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




export const programs = [
  {
    slug: "after-school-tutoring",
    title: "After School Tutoring",
    image:
      "https://i0.wp.com/keypointacademybrickell.com/wp-content/uploads/2024/03/5-Ways-Your-Child-Can-Benefit-from-After-School-Tutoring.png?fit=1200%2C600&ssl=1",
    body: `Our after school tutoring program focuses on the core learning subjects of math, language arts, and reading for students in grades K-8. Our TEKS (Texas Essential Knowledge & Skills)-based curriculum, PATHWAYS, parallels what students are learning in their everyday public-school classrooms. We use a “hands-on” approach to teaching, ensuring assistance to all types of learners.`,
  },
  {
    slug: "summer-camp",
    title: "Summer Enrichment Camps",
    image: "https://campkeystone.com/wp-content/uploads/2021/07/Summer-Camp.jpg",
    body: `The activities that children engage in during out-of-school-time hours directly impact how well children do in school. ... Low-income children deserve access to the same types of programs and the mentors they provide.`,
  },
];

function ProgramsSection() {
  return (
    <section className="bg-[#F3F2EE] py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#2E5E73] text-center mb-12">
          Our Programs
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {programs.map((program) => (
            <Link key={program.slug} href={`/programs/`} className="group">
              <div className="bg-white rounded-t-md overflow-hidden shadow-sm flex flex-col gap-10 relative">
                <h3 className="text-lg md:text-xl font-semibold text-[#2E5E73] text-center py-6 px-4">
                  {program.title}
                </h3>

                <div className="relative w-full h-60 overflow-hidden rounded-b-[50%_50%_0_0]">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#2E5E73]/75 flex items-center justify-center">
                    <span className="inline-flex items-center rounded-full border-2 border-white text-white px-6 py-2 font-semibold">
                      View
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
