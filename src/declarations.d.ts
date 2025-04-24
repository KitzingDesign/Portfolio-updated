// SplideJS
declare module "@splidejs/react-splide" {
  import { ComponentType, CSSProperties, ReactNode } from "react";

  export interface SplideProps {
    options?: Record<string, any>;
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
    tag?: keyof JSX.IntrinsicElements;
  }

  export interface SplideSlideProps {
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
  }

  export const Splide: ComponentType<SplideProps>;
  export const SplideSlide: ComponentType<SplideSlideProps>;
  export const SplideTrack: ComponentType<{ children: ReactNode }>;
}

// Swiper CSS
declare module "swiper/css" {
  const css: string;
  export default css;
}

declare module "swiper/css/navigation" {
  const css: string;
  export default css;
}

declare module "swiper/css/pagination" {
  const css: string;
  export default css;
}
