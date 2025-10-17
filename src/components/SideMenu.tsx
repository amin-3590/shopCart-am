'use client'

import { X } from "lucide-react";
import Logo from "./Logo";
import { headerData } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialMedia from "./SocialMedia";

interface SideBarType {
    isOpen: boolean;
    onClose: () => void;
}


export default function SideMenu({ isOpen, onClose }: SideBarType) {
    const pathName = usePathname()

    return (
        <div onClick={onClose} className={`h-screen w-full inset-y-0 fixed text-white/70 left-0 z-50 bg-black/50 shadow-xl ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-all duration-300 ease-in-out`}>
            <div onClick={(e) => e.stopPropagation()} className="min-w-80 max-w-96 bg-black h-screen border-r border-r-shop_light_green">
                <div className="p-5 flex items-center justify-between">
                    <Logo className="text-white" spanDesign='group-hover:text-white' />
                    <button onClick={onClose} className="hover:text-shop_light_green transition-all duration-300 ease-in-out cursor-pointer">
                        <X />
                    </button>
                </div>
                <div className="flex flex-col p-5 space-y-3.5 font-semibold tracking-wide">
                    {headerData.map(item => (
                        <Link className={`hover:text-shop_light_green transition-all duration-300 ease-in-out ${pathName === item.href ? 'text-shop_light_green' : ''}`} key={item.title} href={item.href}>
                            {item.title}
                        </Link>
                    ))}
                </div>
                <SocialMedia />
            </div>
        </div>
    );
}