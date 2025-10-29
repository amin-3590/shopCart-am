import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Logo({ className, spanDesign }: { className?: string, spanDesign?: string }) {
    return (
        <Link href='/' className="inline-flex">
            <h1 className={cn("uppercase text-shop_dark_green text-xl font-black hover:text-shop_light_green tracking-wider font-sans group transition-all duration-300 ease-in-out", className)}>
                Shopcar<span className={cn("text-shop_light_green group-hover:text-shop_dark_green transition-all duration-300 ease-in-out", spanDesign)}>t</span>
            </h1>
        </Link>
    );
}