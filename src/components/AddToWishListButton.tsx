import { Heart } from "lucide-react";
import { Product } from "../../sanity.types";
import { cn } from "@/lib/utils";

export default function AddToWishListButton({ product, className }: { product: Product, className?: string }) {
    return (
        <div className={cn('absolute top-2 right-2 z-10', className)}>
            <button className="p-2.5 rounded-full cursor-pointer hover:bg-shop_dark_green hover:text-white transition-all duration-300 ease-in-out bg-shop_lighter_bg">
                <Heart size={15} />
            </button>
        </div>
    );
}