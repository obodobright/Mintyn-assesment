import { useEffect, useRef, useState } from "react";
import Tags from "../tags";
import styles from "./table.module.scss";
import { useRouter } from "next/router";
import Filters from "../filter";
import { IoIosArrowDown } from "react-icons/io";

interface TableProps {
  header: string[];
  itemData: {
    item: string;
    price: string;
    transactionNo: string;
    status: string;
    createdAt: string;

  }[]
}

const Table = ({ header, itemData }: TableProps) => {
  const [show, setShow] = useState(false);

  const updateShow = (show: boolean) => {
    setShow(show)
  }

  return <>
    <section className={styles.tableContainer}>
      <table className={styles.table}>
        <thead className={styles.Thead}>
          <tr>
            {header.map((el, elIndex) => (
              <th key={elIndex}>
                <span>{el}</span>

              </th>
            ))}

          </tr>
        </thead>
        <tbody className={styles.Tbody}>
          {itemData.map((el, elIndex) => (
            <tr key={elIndex}>
              <td>
                <div className={styles.itemsList}>
                  <div className={styles.itemsInitials}>VM</div>
                  <span>{el.item}</span>
                </div>
              </td>
              <td>{el.price}</td>
              <td>{el.transactionNo}</td>
              <td>{el.createdAt}</td>
              <td>
                <div className={styles.tagContainer}>
                  <Tags status={el.status} />
                </div>
              </td>
              <td> <IoIosArrowDown /></td>
            </tr>
          ))}

        </tbody>
      </table>
      {show && <Filters setShow={updateShow} />}
    </section>
  </>;
};

export default Table;

