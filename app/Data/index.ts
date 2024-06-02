
import icon from "../../public/assets/Icon.png";
import icons from "../../public/assets/icons.png";
import iconss from "../../public/assets/iconsss.png";
import { CheckCircleIcon } from "lucide-react";

export const data = {
  hero: {
    headline: "Discover Our App",
    subheadline: "The best app for all your needs.",
    ctaButtons: [
      {
        text: "Download Now",
        link: "/download",
      },
      {
        text: "Learn More",
        link: "#features",
      },
    ],
  },
  features: [
    {
      title: "Budgeting intervals",
      description:
        "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor..",
      icon: icon,
    },
    {
      title: "Expense Tracking",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.",
      icon: icons,
    },
    {
      title: "Financial Planning",
      description:
        "Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis.",
      icon: iconss,
    },
  ],
  testimonials: [
    {
      quote:
        "Collaborating with Batch System was an absolute pleasure. Their professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Sobin Thomas's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "John Doe",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Batch System was an absolute pleasure. Their professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Sobin Thomas's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Robert Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Batch System was an absolute pleasure. Their professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Sobin Thomas's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Jane Smith",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Batch System was an absolute pleasure. Their professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Sobin Thomas's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Dora",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Batch System was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Sobin Thomas's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Tyler Durde",
      title: "Director of AlphaStream Technologies",
    },
  ],
  people: [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Dora",
      designation: "The Explorer",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
  ],

  pricing: [
    {
      plan: "Basic",
      price: "$9.99/month",
      title: " Features ",
      icon: CheckCircleIcon,
      features: [
        " Lorem ipsum dolor sit amet.",
        " Consectetur adipiscing elit.",
        " Sed do eiusmod tempor incididunt ut labore a.",
      ],
    },
    {
      plan: "Premium",
      price: "$19.99/month",
      title: " Features ",
      icon: CheckCircleIcon,
      features: [
        " Lorem ipsum dolor sit amet.",
        " Consectetur adipiscing elit.",
        " Sed do eiusmod tempor incididunt ut labore a.",
      ],
    },
    {
      plan: "Pro",
      price: "$29.99/month",
      title: " Features ",
      icon: CheckCircleIcon,
      features: [
        " Lorem ipsum dolor sit amet.",
        " Consectetur adipiscing elit.",
        " Sed do eiusmod tempor incididunt ut labore a.",
      ],
    },
    // Add more pricing plans as needed
  ],
};
