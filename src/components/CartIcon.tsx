'use client'
import { ShoppingBag } from "lucide-react";
import Link from "next/link";
import useStore from "../../store";

export default function CartIcon() {

    const { items } = useStore();

    return (
        <Link href={'/cart'} className="relative group">
            <ShoppingBag className="w-5 h-5 hover:text-shop_light_green transition-all duration-300 ease-in-out" />
            <span className="absolute -top-1 -right-1 bg-shop_dark_green w-3.5 h-3.5 text-white rounded-full text-xs flex items-center justify-center font-semibold">
                {items.length ? items.length : 0}
            </span>
        </Link>
    );
}