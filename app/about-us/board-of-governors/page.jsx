import GenericPage from "../../components/GenericPage";

export default function BoardPage() {
  return (
    <GenericPage
      title="Board of Governors"
      heroColor="bg-[#7C7486]"
      sections={[
        {
          heading: "Community Leaders Guiding Our Mission",
          content: "Our Board of Governors comprises distinguished community leaders who provide strategic oversight and governance. Their diverse expertise and deep commitment to Dallas ensure that The Dallas Foundation remains responsive to community needs and faithful to our mission."
        },
        {
          cards: [
            {
              title: "Strategic Governance",
              description: "Board members provide strategic direction and oversight to ensure organizational excellence and impact.",
              image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop"
            },
            {
              title: "Community Representation",
              description: "Our board reflects the diversity of Dallas, bringing varied perspectives and expertise.",
              image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop"
            },
            {
              title: "Fiduciary Responsibility",
              description: "Board members ensure responsible stewardship of foundation assets and adherence to our mission.",
              image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop"
            }
          ]
        }
      ]}
    />
  );
}

