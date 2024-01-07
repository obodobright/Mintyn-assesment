import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import styles from "./user.module.scss";

const ChartsView = () => {
    return (
        <div className={styles.Charts}>
            <div className={styles.topCharts}>
                <h3>Today: 5, Aug 2018</h3>
                <div className={styles.dropDown}>
                    <p>  1 Jan - 1 Jun</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="6" height="4" viewBox="0 0 6 4" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.82714 1.1676L3.59977 3.7481C3.40479 3.97367 2.76545 4.20514 2.30836 3.6872L0.16649 1.20594C-0.0554965 0.948797 -0.0554965 0.532059 0.16649 0.275476C0.387976 0.0183277 0.747953 0.0183277 0.969439 0.275476L2.94832 2.56725L4.99169 0.200474C5.22217 -0.0668244 5.59665 -0.0668244 5.82714 0.200474C6.05762 0.467208 6.05762 0.900863 5.82714 1.1676Z" fill="#CCCFD4" />
                    </svg>
                </div>
                <div className={styles.controlBtn}>
                    <button>
                        <IoIosArrowBack />

                    </button>
                    <button>
                        <IoIosArrowForward />
                    </button>
                </div>
            </div>
        </div>
    )
}
export default ChartsView;