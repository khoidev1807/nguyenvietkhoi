import About from "@/components/About";
import Certificates from "@/components/Certificates";
import Earth from "@/components/Earth";
import Journey from "@/components/Journey";

import Skills from "@/components/Skills";
import Sky from "@/components/Sky";
export default function Home() {
  return (
    <>
      <Sky />
      <div className="px-[16px] min-h-screen flex flex-col gap-y-4">
        <div className="grid grid-cols-10 gap-2 ">
          <div className=" col-span-full lg:col-span-4 relative">
            <div className="sticky flex flex-col gap-y-2 top-0">
              <About />
              <Skills />
            </div>
          </div>
          <div className=" flex flex-col col-span-full lg:col-span-6 gap-y-2">
            <Journey />
            <Certificates />
          </div>
        </div>
      </div>
      <Earth />
    </>
  );
}
