import React from "react";
import "@/app/(public)/public.module.css"


export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="html">
        <head>
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            <title>Login</title>
        </head>
        <body>{children}</body>
        </html>
    )
}
