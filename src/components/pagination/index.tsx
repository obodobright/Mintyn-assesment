import styles from "./paginate.module.scss";

const Pagination = () => {
    return (
        <section className={styles.paginateContainer}>
            <p className={styles.paginateText}>Showing 1 to 10 of 500 entries</p>
            <div className={styles.paginateBtn}>
                <button>Previous</button>
                <button className={styles.active}>1</button>
                <button className={styles.inactive}>2</button>
                <button>Next</button>
            </div>
        </section>
    )
}

export default Pagination;