import GenericPage from "../../components/GenericPage";

export default function DedicationToQualityPage() {
  return (
    <GenericPage
      title="Dedication to Quality"
      heroColor="bg-[#B71E2D]"
      sections={[
        {
          heading: "Excellence in Everything We Do",
          content: "Kids-U is committed to providing the highest quality programs and services. We continuously evaluate and improve our offerings to ensure we're meeting the evolving needs of the children and families we serve."
        },
        {
          cards: [
            {
              title: "Certified Educators",
              description: "All our tutors are certified teachers or have completed rigorous training in our teaching methodologies.",
              image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop"
            },
            {
              title: "Evidence-Based Practices",
              description: "Our programs are grounded in research and proven educational strategies that work.",
              image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop"
            },
            {
              title: "Continuous Improvement",
              description: "We regularly assess our impact and make data-driven decisions to enhance program effectiveness.",
              image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
            }
          ]
        }
      ]}
    />
  );
}

