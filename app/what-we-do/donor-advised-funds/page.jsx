import GenericPage from "../../components/GenericPage";

export default function DonorAdvisedFundsPage() {
  return (
    <GenericPage
      title="Donor-Advised Funds"
      heroColor="bg-[#4A90A4]"
      sections={[
        {
          heading: "The Most Popular and Flexible Way to Give",
          content: "A donor-advised fund is a simple, flexible, and tax-efficient way to support the causes you care about. You can make a charitable contribution, receive an immediate tax deduction, and then recommend grants to your favorite charities over time."
        },
        {
          cards: [
            {
              title: "Simple to Establish",
              description: "Opening a donor-advised fund is easy and can be done with cash, securities, or other assets with a minimum initial contribution.",
              image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=400&fit=crop"
            },
            {
              title: "Immediate Tax Benefits",
              description: "Receive an immediate tax deduction for your contribution, and let your fund grow tax-free over time.",
              image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop"
            },
            {
              title: "Grant Anytime",
              description: "Recommend grants to qualified charities whenever you're ready, with no pressure or deadline.",
              image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&h=400&fit=crop"
            }
          ]
        }
      ]}
    />
  );
}

