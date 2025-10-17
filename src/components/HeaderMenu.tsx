'use client'

import { headerData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderMenu() {
    const pathName = usePathname()
    return (
        <div className="hidden md:inline-flex w-1/3 items-center gap-7 text-sm capitalize font-semibold text-lightColor">
            {headerData?.map(item => (
                <Link className={`hover:text-shop_light_green transition-all duration-300 ease-in-out group relative ${pathName === item.href ? 'text-shop_light_green' : ''}`} href={item.href} key={item.title}>
                    {item.title}
                    <span className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-shop_light_green group-hover:w-5 transition-all duration-300 ease-in-out ${pathName === item.href ? 'w-5' : 'w-0'}`}></span>
                    <span className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-shop_light_green group-hover:w-5 transition-all duration-300 ease-in-out ${pathName === item.href ? 'w-5' : 'w-0'}`}></span>
                </Link>
            ))}
        </div>
    );
}