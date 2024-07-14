import * as React from "react";
import { Input } from "@/components/ui/input";
import InputSearch from "../_components/search-bar";
import CategoryDesktop from "./home/category-hero-desktop";
import hero from "@p/public/images/hero.png";
interface IHeroProps {}

const Hero: React.FunctionComponent<IHeroProps> = (props) => {
  return (
    <section>
      <div
        className={`mx-auto flex h-[176px] w-full flex-col bg-[#5CC8E4] bg-cover bg-center md:h-[434px]`}
        style={{ backgroundImage: `url(${hero.src})` }}
      >
        <h2 className="mx-auto mt-[2em] text-center text-[22px] italic text-white md:mt-[120px]">
          Hey you,
          <span className=" font-bold">what tickets are you looking for?</span>
        </h2>
        <InputSearch />
        <CategoryDesktop />
      </div>
    </section>
  );
};

export default Hero;
