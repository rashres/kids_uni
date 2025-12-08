import GenericPage from "../../components/GenericPage";

export default function HistoryPage() {
  return (
    <GenericPage
      title="History"
      heroColor="bg-[#5A7C8E]"
      sections={[
        {
          heading: "A Legacy of Community Impact Since 1929",
          content: "For nearly a century, The Dallas Foundation has been connecting generous people with meaningful causes. Founded in 1929, we are one of the oldest and largest community foundations in the nation, built on a tradition of thoughtful philanthropy and deep community knowledge."
        },
        {
          cards: [
            {
              title: "Founded in 1929",
              description: "Established during the Great Depression to address critical community needs and build a permanent source of charitable capital.",
              image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=600&h=400&fit=crop"
            },
            {
              title: "Growing Impact",
              description: "From our humble beginnings, we've grown to manage over $1 billion in assets and award millions in grants annually.",
              image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
            },
            {
              title: "Community Leadership",
              description: "Throughout our history, we've been at the forefront of addressing Dallas's most pressing challenges and opportunities.",
              image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop"
            }
          ]
        }
      ]}
    />
  );
}

