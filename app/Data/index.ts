import icon from "../../public/assets/Icon.png";
import icons from "../../public/assets/icons.png";
import iconss from "../../public/assets/iconsss.png";

export const data = {
  hero: {
    headline: "Discover Our App",
    subheadline: "The best app for all your needs.",
    ctaButtons: [
      {
        text: "Download Now",
        link: "/download"
      },
      {
        text: "Learn More",
        link: "#features"
      }
    ]
  },
  features: [
    {
      title: "Budgeting intervals",
      description: "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor..",
      icon: icon
    },
    {
      title: "Expense Tracking",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      icon: icons
    },
    {
      title: "Financial Planning",
      description: "Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis.",
      icon: iconss
    }
  ],
  testimonials: [
    {
      name: "User One",
      feedback: "This app is fantastic! It has changed my life.",
      avatar: "https://via.placeholder.com/50"
    },
    {
      name: "User Two",
      feedback: "I can't imagine my daily routine without this app.",
      avatar: "https://via.placeholder.com/50"
    }
  ],
  pricing: [
    {
      plan: "Basic",
      price: "$9.99/month",
      features: ["Feature A", "Feature B", "Feature C"]
    },
    {
      plan: "Premium",
      price: "$19.99/month",
      features: ["Feature A", "Feature B", "Feature C", "Feature D"]
    }
  ]
};
