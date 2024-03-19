import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/utils/auth";

export const metadata: Metadata = {
    title: "Next App + Next Auth - Template",
    description: "Authentication template for Next.js applications",
};

import Navbar from "@/components/Navbar";

export default async function HomeLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await getServerSession(authOptions)

    return (
        <main className="h-full">
            <Navbar session={session} />
            {children}
        </main>
    );
}
