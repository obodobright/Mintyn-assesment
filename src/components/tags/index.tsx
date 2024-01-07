import styles from "./tags.module.scss";

enum ItemStatus {
    Reconcilled = "Reconcilled",
    Unreconcilled = "Un-reconcilled",
    Pending = "Pending",
    Settled = "Settled",
}



interface tagsProp {
    status: string;
}

const Tags = ({ status }: tagsProp) => {

    const displayStyle = status === ItemStatus.Reconcilled ?
        { color: "#27AE60" }
        : status === ItemStatus.Unreconcilled
            ? { color: "#C4C4C4" }
            : status === ItemStatus.Pending ?
                { color: "#EBC315" }
                : { color: "#E4033B" }

    return (
        <div style={displayStyle} className={styles.tagsWrapper}>
            <div className={styles.statusIndicator}></div>
            <span>{status}</span>
        </div>
    )
}
export default Tags

