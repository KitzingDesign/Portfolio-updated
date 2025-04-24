// declarations.d.ts
declare module "@splidejs/react-splide" {
  import { ComponentType } from "react";

  export interface SplideProps {
    // Add any Splide props you use
    options?: any;
    children?: React.ReactNode;
  }

  export interface SplideSlideProps {
    // Add any SplideSlide props you use
    children?: React.ReactNode;
  }

  export const Splide: ComponentType<SplideProps>;
  export const SplideSlide: ComponentType<SplideSlideProps>;
}

// Add these for CSS/SCSS module support
declare module "*.css" {
  const content: string;
  export default content;
}

declare module "*.scss" {
  const content: string;
  export default content;
}

// For Swiper CSS imports
declare module "swiper/css" {
  const content: string;
  export default content;
}

declare module "swiper/css/navigation" {
  const content: string;
  export default content;
}

declare module "swiper/css/pagination" {
  const content: string;
  export default content;
}
