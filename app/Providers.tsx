"use client";
import { ThemeProvider } from "next-themes";

function Providers({
    children,
    }: {
        children: React.ReactNode
    }) {
    return (
        <ThemeProvider
            attribute="class"
            enableSystem={true}
        >
            {children}
        </ThemeProvider>
    )
}

export default Providers;