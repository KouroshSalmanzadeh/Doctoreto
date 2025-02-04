import { ReactElement } from "react";

import styles from "./page.module.css";

import GlobalSearchBoxComponent from "@/components/global-search-box/global-search-box.component";

import DoctoretoLogo from "@/logo/doctoreto.logo";

import LastSearchItemComponent from "@/components/last-search-item/LastSearchItem.component";

export default function Home(): ReactElement {
  return (
    <div className={styles.home}>
      <h1>
        <DoctoretoLogo />
        دُکترتو
      </h1>
      <GlobalSearchBoxComponent />
      <div className={styles.history}>
        <div className={styles.title}>آخرین جستجوهای شما</div>
        <ul>
          <LastSearchItemComponent title="ارتوپد" />
          <LastSearchItemComponent title="قلب و عروق" />
        </ul>
      </div>
    </div>
  );
}
