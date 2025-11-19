'use client'

import NoAccess from "@/components/NoAccess";
import WishListProducts from "@/components/WishListProducts";
import { useUser } from "@clerk/nextjs";

export default  function WishListPage() {
    const user = useUser();
    return (
        <>
            {user ? (
                <WishListProducts />
            ) : (
                <NoAccess details="Log in to view your wishlist items. Don’t miss out on your cart products to make the payment!" />
            )}
        </>
    );
}