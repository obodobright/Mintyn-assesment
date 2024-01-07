import { FC } from "react";
import styles from "./profile.module.scss";


export const ProfileTab: FC = () => {
    return (
        <section className={styles.profileContainer}>

            <div className={styles.detailWrapper}>
                <span>Hello</span>
                <h3 className={styles.profileName}>Oluwaleke Ojo</h3>
            </div>
            <div className={styles.imgContainer}>
                <img src="/asset/png/profile.png" alt="" />
            </div>
        </section>
    )
}