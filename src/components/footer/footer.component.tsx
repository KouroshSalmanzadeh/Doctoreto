import { ReactElement } from "react";

import styles from "./footer.module.css";

import Link from "next/link";
import Image from "next/image";

import certificateLogo from "@/assets/logo/certificate.svg";
import enamadLogo from "@/assets/logo/enamad.svg";
import idkLogo from "@/assets/logo/idk.svg";

import MingcuteLinkedinFill from "@/icons/MingcuteLinkedinFill";
import MingcuteSocialXLine from "@/icons/MingcuteSocialXLine";
import MingcuteTelegramFill from "@/icons/MingcuteTelegramFill";

export default function FooterComponent(): ReactElement {
  return (
    <footer className={styles.footer}>
      <div className={styles.writings}>
        <div className={styles.logo}>دکتر من</div>
        <p className={styles.description}>
          تجربه مشاوره آنلاین و دریافت نوبت از بهترین پزشکان و بیمارستان‌های
          ایران
        </p>
      </div>
      <div className={styles.visuals}>
        <ul className={styles.certificates}>
          <li>
            <Link href="#">
              <Image src={idkLogo} alt="IDK Logo" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src={certificateLogo} alt="Certificate Logo" />
            </Link>
          </li>
          <li>
            <Link href="#">
              <Image src={enamadLogo} alt="Enamad Logo" />
            </Link>
          </li>
        </ul>
        <ul className={styles.socials}>
          <li>
            <Link href="https://t.me/@Kourosh_s1" target="_blank">
              <MingcuteTelegramFill />
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/kourosh-salmanzadeh-80796b25b"
              target="_blank"
            >
              <MingcuteLinkedinFill />
            </Link>
          </li>
          <li>
            <Link href="https://x.com/Kourosh_s1" target="_blank">
              <MingcuteSocialXLine />
            </Link>
          </li>
        </ul>
      </div>
      <p className={styles.copy}>
        تمامی حقوق مادی و معنوی این وب‌سایت، خدمات و محتوای مربوط به آن متعلق به
        من می‌باشد!
      </p>
    </footer>
  );
}
