import { FC } from "react";
import styles from "./profile.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { MobileDropdown } from "../mobileNav/mobileDropdown";
import { useRef, useEffect } from "react"

import { useState } from "react";

export const ProfileTab: FC = () => {
    const [show, setShow] = useState(false)
    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        let handler = (e: MouseEvent) => {
            if (!menuRef.current?.contains(e.target as Node)) {
                setShow(false);
            }
        };
        document.addEventListener("mousedown", handler, true);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, []);
    return (
        <>
            <section className={styles.profileContainer}>

                <div className={styles.detailWrapper}>
                    <span>Hello</span>
                    <h3 className={styles.profileName}>Oluwaleke Ojo</h3>
                </div>
                <div ref={menuRef} className={styles.flexContainer}>
                    <div className={styles.imgContainer}>
                        <img src="/asset/png/profile.png" alt="" />
                    </div>
                    <IoIosArrowDown onClick={() => setShow(!show)} />
                </div>
            </section>
            {show && <MobileDropdown />}

        </>

    )
}