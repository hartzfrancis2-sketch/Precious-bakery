import type { JSX } from "react";
import { MenuSection, SEO } from "../components/common";

const Gallery = (): JSX.Element => {
  return (
    <div>
      <SEO
        title="Precious Bakery | Gallery"
        description="Explore our collection of delicious cakes and pastries at Precious Bakery."
        keywords="bakery gallery, cakes, pastries, Accra"
      />
      <MenuSection />
    </div>
  );
};

export default Gallery;
