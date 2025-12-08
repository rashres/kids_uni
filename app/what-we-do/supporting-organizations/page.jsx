import GenericPage from "../../components/GenericPage";

export default function SupportingOrganizationsPage() {
  return (
    <GenericPage
      title="Supporting Organizations"
      heroColor="bg-[#8E7E94]"
      sections={[
        {
          heading: "Support Your Favorite Nonprofit in Perpetuity",
          content: "A supporting organization is a permanent charitable fund dedicated to supporting one or more specific nonprofit organizations. This structure provides long-term, sustainable support while offering significant tax advantages."
        },
        {
          cards: [
            {
              title: "Permanent Support",
              description: "Create a lasting source of funding for the nonprofit organizations you care about most.",
              image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop"
            },
            {
              title: "Tax Advantages",
              description: "Enjoy the same tax benefits as a private foundation without the administrative burden.",
              image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop"
            },
            {
              title: "Expert Management",
              description: "Benefit from professional investment management and administrative support from our team.",
              image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
            }
          ]
        }
      ]}
    />
  );
}

