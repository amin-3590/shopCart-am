'use client'

import { SignInButton } from "@clerk/nextjs";

export default function SighIn() {
    return (
        <SignInButton mode="modal">
            <button className="text-xs font-semibold cursor-pointer text-lightColor hover:text-darkColor transition-all duration-300 ease-in-out">
                Login
            </button>
        </SignInButton>
    );
}