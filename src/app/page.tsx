import { ReactElement } from "react";

import styles from "./page.module.css";

import GlobalSearchBoxComponent from "@/components/global-search-box/global-search-box.component";

import DoctoretoLogo from "@/logo/doctoreto.logo";

export default function Home(): ReactElement {
  return (
    <div className={styles.home}>
      <h1>
        <DoctoretoLogo />
        دکتر من
      </h1>
      <GlobalSearchBoxComponent />
      <div className={styles.history}>
        <div className={styles.title}>آخرین جستجوهای شما</div>
        <ul>
          <li>ارتوپد</li>
          <li>قلب و عروق</li>
        </ul>
      </div>
    </div>
  );
}
