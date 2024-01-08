import { navItems } from "@/helper/data";
import styles from "./mobile.module.scss";
import Link from "next/link";
import { Logo } from "../Logo";
import { MdClose } from "react-icons/md";

export const MobileSidebar = ({ hideSidebar }: { hideSidebar: () => void }) => {

    return (
        <aside className={styles.sidebarWrapper}>
            <aside className={styles.sidebarContainer}>
                <div className={styles.logoWrapper}>
                    <MdClose onClick={hideSidebar} className={styles.fabars} fontSize={20} color="#1875F0" cursor="pointer" />
                    <Logo />
                </div>
                <div className={styles.navItemWrapper}>
                    <h3 className={styles.navItemTop}>GENERATE INVOICE</h3>
                </div>

                <ul className={styles.navItem}>

                    {navItems.map((nav, navIndex) => (
                        <li key={navIndex}>
                            <section className={styles.navHeader}>
                                <span>{nav.navTitle}</span>
                            </section>
                            <section>{nav.children?.map((navChild, navChildIndex) => (
                                <section className={`${styles.navLink} ${navChild.isActive ? styles.active : ""}`} key={navChildIndex}>
                                    <img src={navChild.icon} alt="" />
                                    <Link href={navChild.link}>{navChild.navTitle}</Link>
                                </section>
                            ))}</section>
                        </li>
                    ))}
                </ul>

            </aside>
        </aside>
    )
}