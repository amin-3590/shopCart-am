import "./globals.css";
import { Toaster } from "react-hot-toast";
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="font-poppins antialiased">
                <ClerkProvider>
                    {children}
                    <Toaster
                        position="bottom-right"
                        toastOptions={{
                            style: {
                                background: "#000000",
                                color: "#fff",
                            },
                        }}
                    />
                </ClerkProvider>
            </body>
        </html>
    );
}
