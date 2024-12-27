import { ReactElement } from 'react'

import notFoundImg from '@/assets/illastrations/not-found-img.svg';

import styles from "./not-found.module.css";

import Image from 'next/image';
import GlobalSearchBoxComponent from '@/components/global-search-box/global-search-box.component';

export default function NotFound (): ReactElement {
  return (
    <div className={styles.not_found}>
        <div className={styles.text}>
            <h2>صفحه مورد نظر یافت نشد!</h2>
            <p>لطفا از طریق کادر جستجو، دکتر یا مرکز درمانی مد نظر خود را جستجو کنید.</p>
        </div>
        <div className={styles.search_box}>
            <GlobalSearchBoxComponent />
        </div>
        <div className={styles.vector}>
            <Image src={notFoundImg} alt='' />
        </div>
    </div>
  )
}