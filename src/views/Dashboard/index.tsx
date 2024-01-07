import AnalyticsCard from "@/components/cards/AnalyticsCard";
import { FC, useEffect, useRef, useState } from "react";
import styles from "./user.module.scss";
import { AnalyticsData } from "@/helper/data";
import Table from "@/components/table";
import { itemData } from "@/helper/data";
import ChartsView from "./chart.dashboard";
import AnalyticsView from "./analytics.view";

const DashboardView: FC = () => {
    const [showFilter, setShowFilter] = useState(false);
    const header = ["Item Type", "Price", "Transaction No", "Time", "Status", ""]

    const menuRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        let handler = (e: MouseEvent) => {
            if (!menuRef.current?.contains(e.target as Node)) {
                setShowFilter(false);
            }
        };
        document.addEventListener("mousedown", handler, true);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, []);
    return (
        <section className={styles.userContainer}>
            <section className={styles.cardContainer}>
                {AnalyticsData.map((el, elIndex) => (
                    <AnalyticsCard title={el.title} stats={el.stats} key={elIndex} />
                ))}
            </section>
            <section className={styles.ChartContainer}>
                <ChartsView />
                <div>
                    <AnalyticsView title="Orders" pending="20" reconcilled="80" total="100" />
                    <AnalyticsView title="Payment" pending="20" reconcilled="80" total="100" />
                </div>
            </section>
            <section className={styles.tableContainer}>
                <h3 className={styles.headerText}>Payments</h3>
                <div className={styles.filterWrapper}>
                    <div className={styles.filterWrapperLeft}>
                        <p>Showing</p>
                        <div className={styles.sortNumber}>
                            <span>20</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" fill="none">
                                <path d="M8 1L4.5 5L1 1" stroke="#1875F0" />
                            </svg>
                        </div>
                        <p>out of 500 payments</p>
                    </div>
                    <section className={styles.SearchWrapper}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.626 11.0884L10.7144 11.1768L10.8028 11.0884L11.0884 10.8028L11.1768 10.7144L11.0884 10.626L7.84034 7.37797C8.47823 6.62458 8.81189 5.6582 8.77268 4.66895C8.73191 3.64011 8.29105 2.66785 7.54401 1.95926C6.79697 1.25067 5.80279 0.86175 4.77323 0.875345C3.74368 0.88894 2.76011 1.30397 2.03204 2.03204C1.30397 2.76011 0.88894 3.74368 0.875345 4.77323C0.86175 5.80279 1.25067 6.79697 1.95926 7.54401C2.66785 8.29105 3.64011 8.73191 4.66895 8.77268C5.6582 8.81189 6.62458 8.47823 7.37797 7.84034L10.626 11.0884ZM2.99578 2.08488C3.53901 1.72433 4.177 1.53309 4.82898 1.53538C5.70031 1.53949 6.53462 1.88825 7.14967 2.50547C7.76473 3.12271 8.11053 3.95827 8.11155 4.82964C8.11152 5.4816 7.91802 6.11889 7.55557 6.66081C7.19309 7.20278 6.67793 7.62498 6.07533 7.87396C5.47273 8.12294 4.8098 8.18749 4.17049 8.05944C3.53118 7.93139 2.94425 7.6165 2.48402 7.15465C2.0238 6.69279 1.71098 6.10475 1.5852 5.46499C1.45941 4.82523 1.5263 4.16253 1.77741 3.56081C2.02852 2.9591 2.45254 2.44544 2.99578 2.08488Z" fill="#787878" stroke="#787878" stroke-width="0.25" />
                        </svg>
                        <input type="text" placeholder="Search payments" />
                    </section>
                    <section ref={menuRef} className={styles.filterBy}>
                        <p>Show</p>
                        <div role="button" onClick={() => setShowFilter(!showFilter)} className={styles.filterHolder}>
                            <span>All</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="6" viewBox="0 0 9 6" fill="none">
                                <path d="M8 1L4.5 5L1 1" stroke="#1875F0" />
                            </svg>
                        </div>
                        {showFilter && <div className={styles.filterDropDown}>
                            <p>All</p>
                            <p>Reconcilled</p>
                            <p>Un-reconcilled</p>
                            <p>Settled</p>
                            <p>Unsettled</p>
                        </div>}

                    </section>
                </div>
            </section>
            <section>
                <Table header={header} itemData={itemData} />
            </section>
        </section>
    )
}
export default DashboardView;