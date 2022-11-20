import React from "react";
import car from "../assets/car.jpg";
import Interest from "./Interest";
import wallpaper from "../assets/wallpaper.jpg";

const Interests = () => {
  const interests = [
    {
      title: "Build a 3D Game!",
      stars: "125",
      image: wallpaper,
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    },
    {
      title: "john-doe/e-commerce-website-nextjs-project",
      stars: "125",

      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
    },
    {
      title: "Build a 3D Game!",
      stars: "125",
      image: wallpaper,
      description: "Sed ut perspiciatis unde omnis iste natus error sit.",
    },
    {
      title: "Build a 3D Game!",
      stars: "125",
      image: wallpaper,
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    },
    {
      title: "john-doe/e-commerce-website-nextjs-project",
      stars: "125",

      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam",
    },
    {
      title: "Build a 3D Game!",
      stars: "125",
      image: wallpaper,
      description: "Sed ut perspiciatis unde omnis iste natus error sit.",
    },
  ];
  return (
    <div className="space-y-8 mb-6 w-full sm:h-[25rem]">
      {interests.map((interest) => (
        <Interest
          title={interest.title}
          stars={interest.stars}
          image={interest.image}
          description={interest.description}
        />
      ))}
    </div>
  );
};

export default Interests;
