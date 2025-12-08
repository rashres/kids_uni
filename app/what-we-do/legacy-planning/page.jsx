import GenericPage from "../../components/GenericPage";

export default function LegacyPlanningPage() {
  return (
    <GenericPage
      title="Legacy Planning"
      heroColor="bg-[#6C869C]"
      sections={[
        {
          heading: "Create Impact That Lasts Forever",
          content: "Legacy giving allows you to support the causes you care about beyond your lifetime. Through planned giving options, you can create a lasting impact while potentially receiving tax benefits and honoring your values for generations to come."
        },
        {
          cards: [
            {
              title: "Estate Planning",
              description: "Include charitable giving in your will or trust to support your favorite causes and reduce estate taxes.",
              image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop"
            },
            {
              title: "Beneficiary Designations",
              description: "Name The Dallas Foundation as a beneficiary of retirement accounts, life insurance, or other assets.",
              image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop"
            },
            {
              title: "Life Income Gifts",
              description: "Make a charitable gift while receiving income for life through charitable gift annuities or trusts.",
              image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=400&fit=crop"
            }
          ]
        }
      ]}
    />
  );
}

