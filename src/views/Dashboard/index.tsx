import AnalyticsCard from "@/components/cards/AnalyticsCard";
import { FC, useEffect, useRef, useState } from "react";
import styles from "./user.module.scss";
import { AnalyticsData } from "@/helper/data";
import Table from "@/components/table";
import { itemData } from "@/helper/data";
import ChartsView from "./chart.dashboard";
import AnalyticsView from "./analytics.view";
import { TableFilter } from "@/components/filter/tableFilter";
import Pagination from "@/components/pagination";

const DashboardView: FC = () => {
    const header = ["Item Type", "Price", "Transaction No", "Time", "Status", ""]
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
                <TableFilter />
            </section>
            <section>
                <Table header={header} itemData={itemData} />
            </section>
            <Pagination />
        </section>
    )
}
export default DashboardView;