import GenericPage from "../../components/GenericPage";

export default function TeamPage() {
  return (
    <GenericPage
      title="Team"
      heroColor="bg-[#6B788A]"
      sections={[
        {
          heading: "Meet Our Dedicated Team",
          content: "Our team of experienced professionals is passionate about helping donors achieve their philanthropic goals and supporting nonprofits in their vital work. With deep community knowledge and expertise in charitable giving, we're here to help you make a lasting difference."
        },
        {
          cards: [
            {
              title: "Leadership Team",
              description: "Experienced executives guiding our strategic vision and ensuring excellence in all we do.",
              image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=400&fit=crop"
            },
            {
              title: "Philanthropic Advisors",
              description: "Dedicated professionals providing personalized service to donors and fund holders.",
              image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop"
            },
            {
              title: "Community Impact Staff",
              description: "Experts in grantmaking, nonprofit relations, and community development.",
              image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
            }
          ]
        }
      ]}
    />
  );
}

