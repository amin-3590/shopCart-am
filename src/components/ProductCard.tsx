
import Image from "next/image";
import { Product } from "../../sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { Flame, StarIcon } from "lucide-react";
import AddToWishListButton from "./AddToWishListButton";
import { Title } from "./ui/text";
import PriceView from "./PriceView";
import AddToCardButton from "./AddToCardButton";

export default function ProductCard({ product }: { product: Product }) {
    return (
        <div className="text-sm border-[1px] border-dark-blue/20 rounded-md bg-white group">
            <div className="relative group overflow-hidden bg-shop_light_bg">
                {product.images && (
                    <Image
                        src={urlFor(product.images[0]).url()}
                        alt="ProductImage"
                        width={700}
                        height={700}
                        unoptimized
                        priority
                        className={`w-full h-64 object-contain overflow-hidden transition-transform bg-shop_light_bg duration-500 
                        ${product?.stock !== 0 ? "group-hover:scale-105" : "opacity-50"}`}
                    />
                )}

                <AddToWishListButton product={product} />

                {product?.status === "sale" ? (
                    <p className="absolute top-2 left-2 z-10 text-xs border border-darkColor/50 px-2 rounded-full group-hover:border-lightGreen hover:text-shop_dark_green hoverEffect">
                        Sale!
                    </p>
                ) : (
                    <Link
                        href={"/deal"}
                        className="absolute top-2 left-2 z-10 border border-shop_orange/50 p-1 rounded-full group-hover:border-shop_orange hover:text-shop_dark_green hoverEffect"
                    >
                        <Flame
                            size={18}
                            fill="#fb6c08"
                            className="text-shop_orange/50 group-hover:text-shop_orange hoverEffect"
                        />
                    </Link>
                )}
            </div>

            <div className="p-3 flex flex-col gap-2">
                {product.categories && (
                    <p className="uppercase line-clamp-1 text-sm text-shop_light_text">
                        {product.categories?.map(cat => cat).join(', ')}
                    </p>
                )}

                <Title className="text-sm line-clamp-1">{product.name}</Title>

                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, index) => (
                            <StarIcon
                                key={index}
                                size={13}
                                className={index < 4 ? 'text-shop_lighter_green' : 'text-shop_lighter_text'}
                                fill={index < 4 ? '#93D991' : '#ababab'}
                            />
                        ))}
                    </div>
                    <p className="text-shop_light_text text-xs tracking-wide">5 Reviews</p>
                </div>

                <div className="flex items-center gap-2.5">
                    <p className="font-medium">In Stock</p>
                    <p className={`${product.stock === 0 ? 'text-red-600' : 'text-shop_light_green font-semibold'}`}>{(product.stock as number) > 0 ? product.stock : 'unavailbale'}</p>
                </div>

                <PriceView
                    price={product?.price}
                    discount={product?.discount}
                    className="text-sm"
                />

                <AddToCardButton product={product} className={'rounded-full w-36'} />
            </div>
        </div>
    );
}