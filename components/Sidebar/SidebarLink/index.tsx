"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
const SidebarLink = ({ href, icon, title }: SidebarLinkProps) => {
  const pathName = usePathname();
  return (
    <Button
      asChild
      className="flex justify-start hover:brightness-0 w-full h-full py-[16px] px-[12px]"
    >
      <Link
        href={href}
        className={cn("2xl:text-26 font-inter    text-gray-900 text-wrap", {
          "bg-treasureMain text-white": pathName === href,
        })}
      >
        <div className="mask mask-image">
          <Image
            src={icon}
            alt={title}
            height={34}
            width={34}
            className={cn("mr-[12px] flex-shrink-0  ", {
              "brightness-0 invert": pathName === href,
            })}
          />
        </div>
        <h1 className="break-words max-xl:hidden">{title}</h1>
      </Link>
    </Button>
  );
};
export default SidebarLink;
