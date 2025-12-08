import GenericPage from "../../components/GenericPage";

export default function GrantOpportunitiesPage() {
  return (
    <GenericPage
      title="Grant Opportunities"
      heroColor="bg-[#B0768C]"
      sections={[
        {
          heading: "Funding to Support Your Mission",
          content: "The Dallas Foundation offers various grant opportunities to support nonprofit organizations working to improve our community. Our grantmaking focuses on areas of critical need and aligns with our strategic priorities for creating lasting positive change."
        },
        {
          cards: [
            {
              title: "Community Impact Grants",
              description: "Support for programs addressing education, health, arts, and social services across the Dallas region.",
              image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop"
            },
            {
              title: "Capacity Building",
              description: "Grants to strengthen organizational infrastructure, leadership development, and operational effectiveness.",
              image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop"
            },
            {
              title: "Innovation Funding",
              description: "Support for innovative approaches to addressing persistent community challenges and emerging needs.",
              image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
            }
          ]
        }
      ]}
    />
  );
}

