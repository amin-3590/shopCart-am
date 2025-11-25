import Shop from "@/components/Shop";
import { getAllBrands, getCategories } from "@/sanity/queries";
import { Suspense } from "react";

export default async function ShopPage() {

    const categories = await getCategories();
    const brands = await getAllBrands();
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className="bg-white">
                <Shop categories={categories} brands={brands} />
            </div>
        </Suspense>
    );
}