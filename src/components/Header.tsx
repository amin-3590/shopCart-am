'use client'

import { ClerkLoaded, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import CartIcon from "./CartIcon";
import Container from "./Container";
import FavoriteButton from "./FavoriteButton";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";
import SighIn from "./SighIn";

export default function Header() {
    return (
        <header className="bg-white py-4">
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
                    <ClerkLoaded>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                        <SignedOut>
                            <SighIn />
                        </SignedOut>
                    </ClerkLoaded>
                </div>
            </Container>
        </header>
    );
}  