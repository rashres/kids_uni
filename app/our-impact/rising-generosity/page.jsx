import GenericPage from "../../components/GenericPage";

export default function RisingGenerosityPage() {
  return (
    <GenericPage
      title="Rising GENerosity"
      heroColor="bg-[#C17288]"
      sections={[
        {
          heading: "Empowering the Next Generation of Philanthropists",
          content: "Rising GENerosity engages young professionals and emerging leaders in meaningful philanthropy. Through education, networking, and hands-on grantmaking, participants develop the knowledge and skills to become effective philanthropic leaders in our community."
        },
        {
          cards: [
            {
              title: "Philanthropic Education",
              description: "Learn about effective giving strategies, community needs, and the nonprofit sector through workshops and site visits.",
              image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop"
            },
            {
              title: "Peer Networking",
              description: "Connect with like-minded young professionals passionate about making a difference in Dallas.",
              image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop"
            },
            {
              title: "Hands-On Grantmaking",
              description: "Participate in collective grantmaking decisions and see the direct impact of your contributions.",
              image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&h=400&fit=crop"
            }
          ]
        }
      ]}
    />
  );
}

