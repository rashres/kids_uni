import GenericPage from "../../components/GenericPage";

export default function WomensPhilanthropyInstitutePage() {
  return (
    <GenericPage
      title="Women's Philanthropy Institute"
      heroColor="bg-[#D26E84]"
      sections={[
        {
          heading: "Women Leading Change Through Philanthropy",
          content: "The Women's Philanthropy Institute brings together women who are committed to creating positive change in our community. Through education, collaboration, and strategic grantmaking, members amplify their impact and inspire other women to engage in meaningful philanthropy."
        },
        {
          cards: [
            {
              title: "Collective Impact",
              description: "Pool resources and expertise to make transformational grants that address critical community needs.",
              image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop"
            },
            {
              title: "Leadership Development",
              description: "Develop philanthropic leadership skills through education, mentorship, and hands-on experience.",
              image: "https://images.unsplash.com/photo-1573167243872-43c6433b9d40?w=600&h=400&fit=crop"
            },
            {
              title: "Community Building",
              description: "Join a powerful network of women philanthropists committed to making a lasting difference.",
              image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop"
            }
          ]
        }
      ]}
    />
  );
}

