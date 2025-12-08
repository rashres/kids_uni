import GenericPage from "../../components/GenericPage";

export default function PartnerPage() {
  return (
    <GenericPage
      title="Partner With Us"
      heroColor="bg-[#D62839]"
      sections={[
        {
          heading: "Corporate & Community Partnerships",
          content: "Partner with Kids-U to make a lasting impact in your community. We work with businesses, foundations, civic organizations, and faith communities to expand our reach and enhance our programs."
        },
        {
          cards: [
            {
              title: "Corporate Sponsorships",
              description: "Align your company's values with our mission through financial support, employee volunteers, or in-kind donations.",
              image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop"
            },
            {
              title: "Foundation Grants",
              description: "Partner with us to fund specific programs or initiatives that align with your foundation's goals.",
              image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop"
            },
            {
              title: "Community Collaborations",
              description: "Work together to address educational disparities and create opportunities for at-risk youth.",
              image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
            }
          ]
        }
      ]}
    />
  );
}

