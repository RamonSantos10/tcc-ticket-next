'use client';

import styles from './style.module.css'
import {useRouter} from "next/navigation";
import Logo from "@/components/Logo";
import TextBox from "@/components/TextBox";
import {Button} from "@mui/material";
import React from "react";
import Image from "next/image";



export default function login() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter()
    return (
        <div className={styles.login}>
            <form onSubmit={() => router.push('/')} className={styles.form}>

                <Image src={"/images/logo1.svg"} alt={"Logo"} width={300} height={300}/>

                <TextBox label="Login"/>
                <TextBox label="Password"/>

                <a href="">Forgot password</a>

                <Button variant="contained">
                    Login
                </Button>





            </form>
        </div>
    );
}