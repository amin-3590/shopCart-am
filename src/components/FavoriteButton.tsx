import { Heart } from "lucide-react";
import Link from "next/link";

export default function FavoriteButton() {
    return (
        <Link href={'/favorite'} className="relative group">
            <Heart className="w-5 h-5 hover:text-shop_light_green transition-all duration-300 ease-in-out" />
            <span className="absolute -top-1 -right-1 bg-shop_dark_green w-3.5 h-3.5 text-white rounded-full text-xs flex items-center justify-center font-semibold">0</span>
        </Link>
    );
}