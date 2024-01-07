import { navItems } from "@/helper/data";
import styles from "./sidebar.module.scss";
import Link from "next/link";

export const Sidebar = () => {

    return (
        <aside className={styles.sidebarContainer}>
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
    )
}