import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { sidebarLinks } from "@/constants/sidebarLinks";
import MobileNavBarLink from "./MobileNavBarLink";

const MobileNavBar = () => {
  const loggedIn = { firstName: "Zac", LastName: "Bouhaya" };
  return (
    <nav className=" flex justify-between shadow-xl py-[16px] px-[12px] md:hidden ">
      <Link href={"/"} className=" gap-2 flex ">
        <Image
          src={"/icons/logo.svg"}
          width={34}
          height={34}
          alt={"TreasureChart Logo"}
        />
        <h1 className="2xl:text-26 font-ibm-plex-serif text-[26px] font-bold text-black-1">
          Treasure&#8203;Map
        </h1>
      </Link>
      <Sheet>
        <SheetTrigger className="mr-2">
          <Image
            src={"/icons/hamburger.svg"}
            width={34}
            height={34}
            alt={"Menu"}
          />
        </SheetTrigger>
        <SheetContent className="bg-slate-50">
          <SheetTitle className="invisible">Menu</SheetTitle>
          <SheetDescription className="invisible">Menu</SheetDescription>
          <div className="flex flex-col gap-4 w-full pt-[5px]">
            {sidebarLinks.map((link) => (
              <SheetClose asChild key={link.title}>
                <MobileNavBarLink {...link} />
              </SheetClose>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};
export default MobileNavBar;
