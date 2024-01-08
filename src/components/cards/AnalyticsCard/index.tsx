import { FC } from "react";
import styles from "./analyticsCard.module.scss";

interface AnalyticsProps {
    title: string;
    stats: string;
}

const AnalyticsCard: FC<AnalyticsProps> = ({ title, stats }: AnalyticsProps) => {
    return (
        <div className={styles.Cards}>
            <div>
                <h3 className={styles.Text}>{title}</h3>
                <h2 className={styles.staNumber}>{stats}</h2>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="38" viewBox="0 0 64 38" fill="none">
                <path d="M9.85714 20.2551L1 11.1939V38H63V1L50.8797 11.1939L42.4887 7.79592L28.0376 14.9694L9.85714 20.2551Z" fill="url(#paint0_linear_679_3)" />
                <path d="M1 11.1939L9.85714 20.2551L28.0376 14.9694L42.4887 7.79592L50.8797 11.1939L63 1" stroke="#0294FF" />
                <defs>
                    <linearGradient id="paint0_linear_679_3" x1="5.98077" y1="13.257" x2="5.98077" y2="44.3122" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#0294FF" stopOpacity="0.126274" />
                        <stop offset="1" stopColor="white" stopOpacity="0.01" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    )
}

export default AnalyticsCard;