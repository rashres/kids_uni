import GenericPage from "../../components/GenericPage";

export default function OurApproachPage() {
  return (
    <GenericPage
      title="Our Approach"
      heroColor="bg-[#D62839]"
      sections={[
        {
          heading: "Hands-On, Student-Centered Learning",
          content: "At Kids-U, we believe every child can succeed with the right support and approach. Our teaching methodology is designed to meet students where they are and help them reach their full potential through personalized, engaging instruction."
        },
        {
          cards: [
            {
              title: "Individualized Instruction",
              description: "Small group sizes allow us to tailor our teaching to each student's learning style, pace, and needs.",
              image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop"
            },
            {
              title: "TEKS-Aligned Curriculum",
              description: "Our PATHWAYS curriculum aligns with Texas state standards, reinforcing what students learn in school.",
              image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop"
            },
            {
              title: "Positive Learning Environment",
              description: "We create a safe, supportive space where students feel comfortable taking risks and asking questions.",
              image: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=600&h=400&fit=crop"
            }
          ]
        }
      ]}
    />
  );
}

