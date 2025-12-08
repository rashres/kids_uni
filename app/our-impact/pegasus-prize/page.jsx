import GenericPage from "../../components/GenericPage";

export default function PegasusPrizePage() {
  return (
    <GenericPage
      title="Pegasus Prize"
      heroColor="bg-[#E36A80]"
      sections={[
        {
          heading: "Celebrating Excellence in Nonprofit Leadership",
          content: "The Pegasus Prize recognizes and celebrates outstanding nonprofit organizations making significant impact in the Dallas community. This prestigious award honors excellence in leadership, innovation, and measurable community outcomes."
        },
        {
          cards: [
            {
              title: "Recognition",
              description: "Celebrate exceptional nonprofit organizations that demonstrate outstanding leadership and measurable impact.",
              image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&h=400&fit=crop"
            },
            {
              title: "Financial Support",
              description: "Award recipients receive significant financial support to further their important work in the community.",
              image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=400&fit=crop"
            },
            {
              title: "Visibility",
              description: "Winners gain increased visibility and recognition, helping attract additional support and resources.",
              image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
            }
          ]
        }
      ]}
    />
  );
}

