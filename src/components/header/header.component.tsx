"use client";

import { ReactElement, useEffect, useRef, useState } from "react";

import styles from "./header.module.css";
import data from "./itemNav.json";

import Link from "next/link";
import { usePathname } from "next/navigation";

import MingcuteSunFill from "@/icons/MingcuteSunFill";
import MingcuteMoonFill from "@/icons/MingcuteMoonFill";

import { flushSync } from "react-dom";

export default function HeaderComponent(): ReactElement {
  const pathname = usePathname();

  const ref = useRef<HTMLLabelElement>(null);

  const [theme, setTheme] = useState<boolean>(false);

  useEffect(() => {
    const activeElement = document.querySelector(
      `a.${styles.active}`,
    ) as HTMLElement | null;

    if (activeElement) {
      const width = activeElement.offsetWidth;
      document.documentElement.style.setProperty("--line-li", `${width}px`);

      const leftOffset = activeElement.offsetLeft;
      document.documentElement.style.setProperty(
        "--offset-left",
        `${leftOffset}px`,
      );
    }
  }, [pathname]);

  const changeTheme = async () => {
    // * Return early if View Transition API is not supported
    //  * or user prefers reduced motion
    if (
      !ref.current ||
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setTheme(theme);
      return;
    }

    await document.startViewTransition(() => {
      flushSync(() => {
        if (theme) {
          setTheme(!theme);
          document.documentElement.setAttribute("data-theme", "dark");
        } else {
          setTheme(!theme);
          document.documentElement.setAttribute("data-theme", "light");
        }
      });
    }).ready;

    if (ref.current) {
      const parent = ref.current.parentElement;
      if (!parent) return;
      const { top, left, width, height } = parent.getBoundingClientRect();

      // محاسبه مرکز عنصر
      const centerX = left + width - 25;
      const centerY = top + height - 25;

      // محاسبه شعاع بزرگترین دایره
      const maxRadius = Math.hypot(
        Math.max(centerX, window.innerWidth - centerX),
        Math.max(centerY, window.innerHeight - centerY),
      );

      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${centerX}px ${centerY}px)`,
            `circle(${maxRadius}px at ${centerX}px ${centerY}px)`,
          ],
        },
        {
          duration: 500,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    }
  };

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
      <div className={styles.section_left_nav}>
        <label
          ref={ref}
          htmlFor={styles.input_toggle_nav}
          className={styles.toggle_theme}
        >
          <input
            type="checkbox"
            id={styles.input_toggle_nav}
            onClick={changeTheme}
          />
          <MingcuteSunFill className={styles.theme_icon_light} />
          <MingcuteMoonFill className={styles.theme_icon_dark} />
        </label>
        <button className={styles.cta}>ورود | ثبت نام</button>
      </div>
    </header>
  );
}
