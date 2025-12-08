import GenericPage from "../../components/GenericPage";

export default function OurHistoryPage() {
  return (
    <GenericPage
      title="Our History"
      heroColor="bg-[#A61D2A]"
      sections={[
        {
          heading: "25 Years of Serving At-Risk Youth",
          content: "Founded in 2000, Kids-U has been dedicated to improving the lives of low-income children through education and support. What started as a small tutoring program in one apartment community has grown into a comprehensive service reaching over 1,000 students annually across 15+ apartment communities in the Dallas area."
        },
        {
          cards: [
            {
              title: "Our Beginning",
              description: "Started with 25 students in one apartment complex, providing basic after-school tutoring in math and reading.",
              image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop"
            },
            {
              title: "Expanding Our Reach",
              description: "Grew to serve multiple communities, adding summer camps and family services to our offerings.",
              image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&h=400&fit=crop"
            },
            {
              title: "Today & Beyond",
              description: "Now serving 1,000+ students annually with comprehensive programs and a vision for continued growth.",
              image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop"
            }
          ]
        }
      ]}
    />
  );
}

