"use client";

import type { Metadata } from "next";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

// export const metadata: Metadata = {
//     title: "Home",
// };

const ReceiverClient = dynamic(() => import("../receiver-client"), {
    ssr: false,
    loading: () => (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4">
            <h1 className="text-2xl font-bold mb-4">Audio Receiver</h1>
            <div className="text-sm text-gray-600">Loading...</div>
        </div>
    ),
});

export default function Page() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <div className="container mx-auto px-4">
            <div className="flex justify-center gap-4 my-8">
                <Link
                    href="/sender"
                    className="px-6 py-3 rounded-full bg-green-500 hover:bg-green-600 text-white transition-colors">
                    Go to Sender
                </Link>
            </div>
            <ReceiverClient />
        </div>
    );
}
