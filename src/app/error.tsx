"use client";

import { ReactElement } from "react";

import styles from "./error.module.css";

import errorImg from "@/assets/illastrations/error-img.svg";
import Image from "next/image";

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: Props): ReactElement {
  return (
    <div className={styles.error}>
      <div className={styles.text}>
        <span className={styles.status_code}>اوه اوه!</span>
        <h2>یک خطای غیر منتظره رخ داد!</h2>
        <p>با عرض پوزش، لطفن با تیم پشتیبانی تماس بگیرید</p>
      </div>
      <div className={styles.vector}>
        <Image src={errorImg} alt="error" />
      </div>
      <div className={styles.actions}>
        <button onClick={reset}>تلاش مجدد</button>
      </div>
      <div className={styles.trace}>
        <details>
          <summary>خطاهای رخ داده:</summary>
          <pre className="scroll" dir="ltr">
            {error.stack}
          </pre>
        </details>
      </div>
    </div>
  );
}
