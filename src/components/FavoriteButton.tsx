import { Heart } from "lucide-react";
import Link from "next/link";
import { Product } from "../../sanity.types";

export default function FavoriteButton({ showProduct = false, product }: { showProduct?: boolean, product?: Product }) {
    return (
        <>
            {!showProduct ? (
                <Link href={"/wishlist"} className="group relative">
                    <Heart className="w-5 h-5 hover:text-shop_light_green transition-all duration-300 ease-in-out" />
                    <span className="absolute -top-1 -right-1 bg-shop_dark_green text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
                        0
                    </span>
                </Link>
            ) : (
                <button className="group relative hover:text-shop_light_green transition-all duration-300 ease-in-out border border-shop_light_green/80 hover:border-shop_light_green p-1.5 rounded-sm">
                    <Heart className="text-shop_light_green/80 group-hover:text-shop_light_green transition-all duration-300 ease-in-out mt-.5 w-5 h-5" />
                </button>
            )}
        </>
    );
}