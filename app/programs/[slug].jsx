// pages/programs/[slug].jsx
import { programs } from "../page"; 

export default function ProgramPage({ program }) {
  return (
    <main className="min-h-screen">
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={program.image}
          alt={program.title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-end">
          <div className="w-full max-w-6xl mx-auto px-6 md:px-10 pb-8 md:pb-12">
            <h1 className="text-3xl md:text-5xl font-semibold text-white">
              {program.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-10 lg:px-20 py-10 md:py-14 bg-white">
        <div className="max-w-4xl mx-auto prose prose-lg text-gray-700 whitespace-pre-line">
          {program.body}
        </div>
      </section>
    </main>
  );
}

export async function getStaticPaths() {
  return {
    paths: programs.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const program = programs.find((p) => p.slug === params.slug);
  if (!program) return { notFound: true };
  return { props: { program } };
}
