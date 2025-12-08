import GenericPage from "../../components/GenericPage";

export default function CareersPage() {
  return (
    <GenericPage
      title="Careers"
      heroColor="bg-[#8D7082]"
      sections={[
        {
          heading: "Join Our Team and Make a Difference",
          content: "Working at The Dallas Foundation means being part of a mission-driven organization that's making a real difference in our community. We seek talented, passionate individuals who share our commitment to philanthropy and community impact."
        },
        {
          cards: [
            {
              title: "Meaningful Work",
              description: "Every day, you'll help connect generous people with important causes and see the direct impact of your work.",
              image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
            },
            {
              title: "Professional Growth",
              description: "We invest in our team's development with training, mentorship, and opportunities to advance your career.",
              image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop"
            },
            {
              title: "Collaborative Culture",
              description: "Join a supportive team that values collaboration, innovation, and continuous learning.",
              image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop"
            }
          ]
        }
      ]}
    />
  );
}

