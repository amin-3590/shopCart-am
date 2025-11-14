'use client'

import { Heart } from "lucide-react";
import { Product } from "../../sanity.types";
import { cn } from "@/lib/utils";
import useStore from "../../store";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function AddToWishListButton({ product, className }: { product: Product, className?: string }) {

    const { favoriteProduct, addToFavorite } = useStore();
    const [existingProduct, setExistingProduct] = useState<Product | null>(null);

    useEffect(() => {
        const availableProduct = favoriteProduct.find((item) => item._id === product._id);

        setExistingProduct(availableProduct || null);
    }, [product, favoriteProduct]);

    const handleFavorite = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.preventDefault();

        if (product._id) {
            addToFavorite(product).then(() => {
                toast.success(existingProduct ? "Product removed successfully!" : "Product added successfully!");
            });
        }
    };

    return (
        <div className={cn('absolute top-2 right-2 cursor-pointer', className)}>
            <div onClick={handleFavorite} className={`p-2.5 rounded-full hover:bg-shop_dark_green/80 hover:text-white transition-all duration-300 ease-in-out  ${existingProduct ? "bg-shop_dark_green/80 text-white" : "bg-lightColor/10"}`}>
                <Heart size={15} />
            </div>
        </div>
    );
}