'use client'

import { useUser, UserButton, SignInButton } from "@clerk/nextjs";
import CartIcon from "./CartIcon";
import Container from "./Container";
import FavoriteButton from "./FavoriteButton";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";
import Link from "next/link";
import { Logs } from "lucide-react";
import { useEffect, useState } from "react";
import { getMyOrders } from "@/sanity/queries";

export default function Header() {

    const { isSignedIn, user } = useUser();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (isSignedIn && user) {
            getMyOrders(user.id).then((res) => setOrders(res || []));
        }
    }, [isSignedIn, user]);

    return (
        <header className="py-4 sticky z-50 top-0 bg-white/70 backdrop-blur-md">
            <Container className="flex items-center justify-between text-lightColor">
                <div className="flex justify-start items-center gap-3">
                    <MobileMenu />
                    <Logo />
                </div>

                <HeaderMenu />

                <div className="flex items-center justify-end gap-5">
                    <SearchBar />
                    <CartIcon />
                    <FavoriteButton />

                    {isSignedIn && orders.length > 0 && (
                        <Link href={"/orders"} className="group relative hover:text-shop_light_green transition-all duration-300 ease-in-out" >
                            <Logs />

                            <span className="absolute -top-1 -right-1 bg-shop_btn_dark_green text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
                                {orders.length}
                            </span>

                        </Link>
                    )}


                    {!isSignedIn && (
                        <SignInButton mode="modal">
                            <button className="text-xs font-semibold cursor-pointer text-lightColor hover:text-darkColor transition-all duration-300 ease-in-out">
                                Login
                            </button>
                        </SignInButton>
                    )}

                    {isSignedIn && <UserButton />}

                </div>
            </Container>
        </header>
    );
}
