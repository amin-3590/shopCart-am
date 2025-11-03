import { ShoppingBag } from "lucide-react";
import { Product } from "../../sanity.types";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface Props {
    product: Product;
    className?: string;
}

export default function AddToCardButton({ product, className }: Props) {
    const isOutOfStock = product.stock === 0;

    return (
        <div>
            <Button className={cn('w-full bg-shop_dark_green/80 text-white shadow-none border border-shop_dark_green/80 font-semibold tracking-wide hover:text-white hover:bg-shop_dark_green hover:border-shop_dark_green transition-all duration-300 ease-in-out', className)}>
                <ShoppingBag /> {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
            </Button>
        </div>
    );
}