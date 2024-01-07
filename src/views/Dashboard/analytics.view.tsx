import styles from "./user.module.scss";


interface AnalyticsProps {
    title: string;
    pending: string;
    reconcilled: string;
    total: string;
}
const AnalyticsView = ({ title, pending, reconcilled, total }: AnalyticsProps) => {
    return (
        <div className={styles.Analytics}>
            <h3 className={styles.header}>{title}</h3>
            <div className={styles.progressBar}>
                <div></div>
            </div>
            <section className={styles.stats}>
                <h4>Pending {title}: <span className={styles.pending}>{pending}</span></h4>
                <h4>Reconcilled {title}: <span className={styles.reconciled}>{reconcilled}</span></h4>
                <h4>Total {title}: <span className={styles.total}>{total}</span></h4>

            </section>
        </div>
    )
}

export default AnalyticsView