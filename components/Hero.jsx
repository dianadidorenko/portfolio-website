import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

import DevImg from "./DevImg";

import Socials from "./Socials";
import Badge from "./Badge";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* text */}
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className="h1 mb-4">Hello, me name is Ryan Davis</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Brief description with insights into myself, my vocationak
              journey, and what I engage in professionally.
            </p>
            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href={"/contact"}>
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Button variant="secondary" className="gap-x-2">
                Download CV <Download size={18} />
              </Button>
            </div>

            {/* socials */}
            <Socials
              containerStyles={"flex gap-x-6 mx-auto xl:mx-0"}
              iconStyles={
                "text-foreground text-[22px] hover:text-primary transition-all"
              }
            />
          </div>

          {/* image */}
          <div className="hidden xl:flex relative">
            <Badge
              icon={<RiBriefcase4Fill />}
              endCountNum={3}
              badgeText={"Years Of Experience"}
              containerStyles={"absolute top-[24%] right-[25rem]"}
            />
            <Badge
              icon={<RiTodoFill />}
              endCountNum={6}
              endCountText={"k"}
              badgeText={"Finished Projects"}
              containerStyles={"absolute top-[85%] right-[18rem]"}
            />
            <Badge
              icon={<RiTeamFill />}
              endCountNum={9}
              endCountText={"k"}
              badgeText={"Happy Clients"}
              containerStyles={"absolute top-[55%] -left-[8rem]"}
            />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2">
              <DevImg
                containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
                imgSrc="/assets/hero/developer.png"
              />
            </div>
          </div>
        </div>

        {/* icon */}
        <div
          className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 
        animate-bound"
        >
          <RiArrowDownSLine className="text-3xl" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
