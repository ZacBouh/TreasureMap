import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { sidebarLinks } from "@/constants/sidebarLinks";
import SidebarLink from "./SidebarLink";

const Sidebar = ({ user }: SiderbarProps) => {
  return (
    <section className="sticky left-0 top-0 flex h-screen w-fit flex-col  justify-between border-r border-gray-200 bg-white pt-8 text-white max-md:hidden sm:p-4 xl:p-6 2xl:w-[355px]">
      <nav className="flex flex-col gap-4">
        <Link
          href={"/"}
          className="mb-12 cursor-pointer items-center gap-2 flex max-xl:justify-center"
        >
          <Image
            src={"/icons/logo.svg"}
            width={34}
            height={34}
            alt={"TreasureChart Logo"}
          />
          <h1 className="2xl:text-26 font-ibm-plex-serif text-[26px] font-bold text-black-1  max-xl:hidden">
            Treasure&#8203;Map
          </h1>
        </Link>
        {sidebarLinks.map((link) => (
          <SidebarLink {...link} />
        ))}
      </nav>
    </section>
  );
};

export default Sidebar;
