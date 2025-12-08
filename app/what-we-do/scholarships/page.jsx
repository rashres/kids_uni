import GenericPage from "../../components/GenericPage";

export default function ScholarshipsPage() {
  return (
    <GenericPage
      title="Scholarships"
      heroColor="bg-[#7D8298]"
      sections={[
        {
          heading: "Invest in the Next Generation",
          content: "Create a scholarship fund to help students achieve their educational dreams. Your scholarship can honor a loved one, support students in a specific field, or help those with financial need access higher education."
        },
        {
          cards: [
            {
              title: "Custom Criteria",
              description: "Design scholarship criteria that reflect your values and priorities, from academic achievement to community service.",
              image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop"
            },
            {
              title: "Professional Management",
              description: "We handle all administrative details, from applications to selection to fund distribution.",
              image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&h=400&fit=crop"
            },
            {
              title: "Lasting Impact",
              description: "See the direct impact of your generosity as students achieve their educational and career goals.",
              image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=400&fit=crop"
            }
          ]
        }
      ]}
    />
  );
}

