'use client';

import styles from '@/app/(authenticated)/page.module.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from "react";
import Link from "next/link";
export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    //const pathname = usePathname();

    return (
        <html lang="en" className={styles.html}>
        <head>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
            />
        </head>
        <body className={styles.body}>
        <h1>Sistema Ticket Manager</h1>
        <nav>
            <ul>
                <li><Link href="/">Page</Link></li>
                <li><Link href="/login">Login</Link></li>
                <li><Link href="/home">Home</Link></li>
                <li><Link href="/home2">Home 2</Link></li>
            </ul>
        </nav>
        <hr/>
        {children}
        </body>
        </html>
    )
}
