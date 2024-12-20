"use client";

import { ReactElement } from "react";

import styles from "./header.module.css";
import data from "./itemNav.json";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderComponent(): ReactElement {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          {data.map((item, i) => (
            <li key={i}>
              <Link
                href={item.path}
                className={pathname === item.path ? styles.active : ""}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button className={styles.cta}>ورود | ثبت نام</button>
    </header>
  );
}
