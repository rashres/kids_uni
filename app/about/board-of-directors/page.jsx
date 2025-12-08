import GenericPage from "../../components/GenericPage";

export default function BoardOfDirectorsPage() {
  return (
    <GenericPage
      title="Board of Directors"
      heroColor="bg-[#961924]"
      sections={[
        {
          heading: "Leadership Committed to Our Mission",
          content: "Our Board of Directors provides strategic oversight and governance to ensure Kids-U remains faithful to our mission of serving at-risk youth. These dedicated community leaders bring diverse expertise in education, business, and nonprofit management."
        },
        {
          cards: [
            {
              title: "Strategic Guidance",
              description: "Board members provide vision and direction to ensure organizational excellence and sustainable growth.",
              image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop"
            },
            {
              title: "Community Connection",
              description: "Our board members are deeply rooted in the Dallas community and understand local needs.",
              image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop"
            },
            {
              title: "Fiscal Responsibility",
              description: "Ensuring responsible stewardship of donor contributions and organizational resources.",
              image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop"
            }
          ]
        }
      ]}
    />
  );
}

