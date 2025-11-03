import { productType } from "@/constants/data";
import Link from "next/link";

interface SelectedProps {
    selectedTab: string;
    onTabSelect: (tab: string) => void;
}

export default function HomeTabBar({ selectedTab, onTabSelect }: SelectedProps) {
    return (
        <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3 text-sm font-semibold">
                {productType.map(item => (
                    <button onClick={() => onTabSelect(item.title)} className={`border border-shop_light_green/30 px-4 cursor-pointer py-1.5 md:px-6 md:py-2 rounded-full hover:bg-shop_light_green hover:border-shop_light_green hover:text-white transition-all duration-300 ease-in-out ${selectedTab === item.title ? 'bg-shop_light_green text-white border-shop_light_green' : 'bg-shop_light_green/20'}`} key={item.title}>
                        {item.title}
                    </button>
                ))}
            </div>
            <Link href={'/shop'} className="border border-shop_light_green/30 px-4 cursor-pointer py-1.5 md:px-6 md:py-2 rounded-full hover:bg-shop_light_green hover:border-shop_light_green hover:text-white transition-all duration-300 ease-in-out">See all</Link>
        </div>
    );
}