import React, { ReactElement } from 'react'

import FilterComponent from './components/filter/filter-provider.component'

import styles from "./search.module.css"

import MingcuteFilter2Line from '@/icons/MingcuteFilter2Line'


import TypeSearchComponent from '@/app/search/components/type-search/type-search.component';
import FilterResultComponent from './components/filter-result/filter-result.component'


import SeleceOptionComponent from '@/components/select-option/selece-option.component';

import specialties from "@/data/specialties.json";
import services from "@/data/services.json";

import FilterDadgesComponent from './components/filter-badges/filter-badges.component';


export default function page(): ReactElement {
  return (
    <FilterComponent>
      <div className={styles.page}>
        <div className={styles.filter}>
          <div className={styles.title}>
            <MingcuteFilter2Line />
            <h3>فیلتر ها</h3>
          </div>
          <div className={styles.filter_items}>
            <div className={styles.type_search}>
              <TypeSearchComponent />
            </div>
              <FilterDadgesComponent />
            <div className={styles.card}>
              <SeleceOptionComponent label={"تخصص و فوق تخصص"} placeholder={'مثلا فیزیوتراپی'} id='specialties' name='specialties' options={specialties} />
            </div>
            <div className={styles.card}>
              <SeleceOptionComponent label={"خدمات"} placeholder={'مثلا سی تی اسکن قلب'} id='services' name='services' options={services} />
            </div>
          </div>
        </div>
          <FilterResultComponent />
      </div>
    </FilterComponent>
  )
}