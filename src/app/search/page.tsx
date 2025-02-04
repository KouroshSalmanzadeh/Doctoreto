import React, { ReactElement } from "react";

import FilterComponent from "./components/filter/filter-provider.component";

import styles from "./search.module.css";

import MingcuteFilter2Line from "@/icons/MingcuteFilter2Line";

import TypeSearchComponent from "@/app/search/components/type-search/type-search.component";
import FilterResultComponent from "./components/filter-result/filter-result.component";

import SelectOptionComponent from "@/components/select-option/select-option.component";

import specialties from "@/mock/specialties.json";
import services from "@/mock/services.json";

import FilterBadgesComponent from "./components/filter-badges/filter-badges.component";
import GlobalSearchBoxComponent from "@/components/global-search-box/global-search-box.component";
import ClearFiltersButton from "./components/clear-filters-button/ClearFiltersButton";
import RadioButtonComponent from "@/components/radio-button/radio-button.component";

type SearchPageProps = {
  searchParams: { [query: string]: string | string[] | undefined };
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
              <SelectOptionComponent
                label={"تخصص و فوق تخصص"}
                placeholder={"مثلا فیزیوتراپی"}
                id="expertises"
                name="expertises"
                options={specialties}
                contextType="main"
              />
            </div>
            <div className={styles.card}>
              <SelectOptionComponent
                label={"خدمات"}
                placeholder={"مثلا سی تی اسکن قلب"}
                id="services"
                name="services"
                options={services}
                contextType="main"
              />
            </div>
            <div className={`${styles.card} ${styles["radio-buttons"]}`}>
              <span>جنسیت پزشک</span>
              <RadioButtonComponent
                name="gender"
                inputs={[
                  { id: "male", value: "آقا" },
                  { id: "female", value: "خانم" },
                ]}
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
