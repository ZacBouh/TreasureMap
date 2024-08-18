import Link from "next/link";
import Image from "next/image";
import CreditCard from "../CreditCard";

const RightSideBar = ({ user }: RightSidebarProps) => {
  return (
    <section className="h-screen  w-[355px] border-l border-gray-200 px-6  ">
      <header>
        <div className="h-[120px] bg-[url('/icons/gradient-mesh.svg')] -mx-6"></div>
        <div className="bg-gray-200 size-24 relative -top-8  rounded-full flex justify-center items-center border-white border-4 shadow-lg">
          <span className="text-5xl font-semibold">Z</span>
        </div>
        <h1 className="font-inter font-semibold text-2xl">Zacharie Bouhaya</h1>
      </header>
      <section className="mt-[32px]">
        <header className="flex justify-between items-center">
          <h1 className="font-semibold text-lg">Mes Banques</h1>
          <Link href={"/"} className="flex gap-[4px] text-sm font-semibold">
            <Image
              src={"/icons/plus.svg"}
              alt="ajouter une banque"
              width={20}
              height={20}
            />
            Ajouter
          </Link>
        </header>
        <CreditCard />
      </section>
    </section>
  );
};
export default RightSideBar;
