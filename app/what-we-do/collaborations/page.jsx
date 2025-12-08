import GenericPage from "../../components/GenericPage";

export default function CollaborationsPage() {
  return (
    <GenericPage
      title="Collaborations"
      heroColor="bg-[#9F7A90]"
      sections={[
        {
          heading: "Partnering for Greater Impact",
          content: "Through strategic collaborations, we bring together donors, nonprofits, and community leaders to address complex challenges. Our collaborative initiatives leverage collective expertise and resources to create meaningful, lasting change."
        },
        {
          cards: [
            {
              title: "Collective Impact",
              description: "Join forces with other philanthropists and organizations to tackle systemic community issues.",
              image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
            },
            {
              title: "Shared Learning",
              description: "Benefit from collaborative learning opportunities and best practices sharing among partners.",
              image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop"
            },
            {
              title: "Amplified Resources",
              description: "Pool resources and expertise to achieve outcomes that wouldn't be possible working alone.",
              image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop"
            }
          ]
        }
      ]}
    />
  );
}

