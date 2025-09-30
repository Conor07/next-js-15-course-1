import { Metadata } from "next";
import React from "react";

// Only can be used in a server component:
export const metadata: Metadata = {
  title: "Website | About Us",
  description: "SEO keywords",
  keywords: ["about", "about us", "company", "information"],
  twitter: {
    title: "Website | About Us",
    description: "SEO keywords",
    card: "summary_large_image",
  },
};

const About = () => {
  return <div>About</div>;
};

export default About;
