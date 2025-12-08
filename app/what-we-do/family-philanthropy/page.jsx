import GenericPage from "../../components/GenericPage";

export default function FamilyPhilanthropyPage() {
  return (
    <GenericPage
      title="Family Philanthropy"
      heroColor="bg-[#5B8BA0]"
      sections={[
        {
          heading: "Build a Lasting Legacy Together",
          content: "Family philanthropy allows you to involve multiple generations in charitable giving, creating shared values and lasting impact. Work together to support causes that matter to your family while teaching the next generation about generosity and community engagement."
        },
        {
          cards: [
            {
              title: "Multi-Generational Giving",
              description: "Engage children, grandchildren, and extended family in meaningful philanthropic decisions.",
              image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&h=400&fit=crop"
            },
            {
              title: "Shared Values",
              description: "Strengthen family bonds by working together toward common charitable goals and values.",
              image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop"
            },
            {
              title: "Educational Opportunities",
              description: "Provide learning experiences for younger family members about community needs and philanthropy.",
              image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop"
            }
          ]
        }
      ]}
    />
  );
}

