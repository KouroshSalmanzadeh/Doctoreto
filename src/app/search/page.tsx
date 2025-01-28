import React, { ReactElement } from "react";

import FilterComponent from "./components/filter/filter-provider.component";

import styles from "./search.module.css";

import MingcuteFilter2Line from "@/icons/MingcuteFilter2Line";

import TypeSearchComponent from "@/app/search/components/type-search/type-search.component";
import FilterResultComponent from "./components/filter-result/filter-result.component";

import SeleceOptionComponent from "@/components/select-option/selece-option.component";

import specialties from "@/mock/specialties.json";
import services from "@/mock/services.json";

import FilterBadgesComponent from "./components/filter-badges/filter-badges.component";
import GlobalSearchBoxComponent from "@/components/global-search-box/global-search-box.component";
import ClearFiltersButton from "./components/clear-filters-button/ClearFiltersButton";

type SearchPageProps = {
  searchParams: { query?: string };
};

export default function page({ searchParams }: SearchPageProps): ReactElement {

  return (
    <FilterComponent searchParams={searchParams && searchParams}>
      <div className={styles.page}>
        <div className={styles.filter}>
          <div className={styles["title-and-clear"]}>
            <div className={styles.title}>
              <MingcuteFilter2Line />
              <h3>فیلتر ها</h3>
            </div>
            <ClearFiltersButton />
          </div>
          <div className={styles.filter_items}>
            <div className={styles.type_search}>
              <TypeSearchComponent />
            </div>
            <FilterBadgesComponent />
            <div className={styles.card}>
              <SeleceOptionComponent
                label={"تخصص و فوق تخصص"}
                placeholder={"مثلا فیزیوتراپی"}
                id="expertises"
                name="expertises"
                options={specialties}
              />
            </div>
            <div className={styles.card}>
              <SeleceOptionComponent
                label={"خدمات"}
                placeholder={"مثلا سی تی اسکن قلب"}
                id="services"
                name="services"
                options={services}
              />
            </div>
          </div>
        </div>
        <div className={styles["left-box"]}>
          <GlobalSearchBoxComponent />
          <FilterResultComponent />
        </div>
      </div>
    </FilterComponent>
  );
}
