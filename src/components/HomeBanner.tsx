import Link from "next/link";
import Title from "./ui/text";
import Image from "next/image";
import { banner_1 } from "../../public/images";

export default function HomeBanner() {
    return (
        <div className="py-26 md:py-0 bg-shop_light_pink rounded-lg px-20 lg:px-24 ">
            <div className="flex items-center justify-between">
                <div className="space-y-5">
                    <Title>Grap Upto 50% off on <br />
                        Selected headphone
                    </Title>
                    <Link href={'/shop'} className="bg-shop_dark_green/90 text-white/90 px-5 py-2 rounded-md text-sm font-semibold hover:text-white hover:bg-shop_dark_green transition-all duration-300 ease-in-out">
                        Buy Now
                    </Link>
                </div>
                <div>
                    <Image src={banner_1} alt="banner" className="hidden md:inline-block w-96" />
                </div>
            </div>
        </div>
    );
}