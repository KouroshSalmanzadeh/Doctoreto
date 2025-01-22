"use client";

import { useContext, useMemo } from "react";
import styles from "./filter-result.module.css";
import { doctors } from "@/mock/doctors";
import { FilterContext } from "@/app/search/components/filter/filter-provider.component";

import MingcuteUser3Fill from "@/icons/MingcuteUser3Fill";
import MingcuteStethoscopeLine from "@/icons/MingcuteStethoscopeLine";
import MingcuteChat1Line from "@/icons/MingcuteChat1Line";
import MingcutePhoneCallLine from "@/icons/MingcutePhoneCallLine";
import MingcuteStarFill from "@/icons/MingcuteStarFill";
import MingcuteLocationLine from "@/icons/MingcuteLocationLine";
import MingcuteCashLine from "@/icons/MingcuteCashLine";
import MingcuteCalendarTimeAddLine from "@/icons/MingcuteCalendarTimeAddLine";
import MingcuteLeftFill from "@/icons/MingcuteLeftFill";

import NotfoundSearch from "@/assets/illastrations/not-found-search.svg";
import Image from "next/image";
import Link from "next/link";
import ButtonComponent from "@/components/button/button.component";

export default function FilterResultComponent() {
  const { filters } = useContext(FilterContext);

  const filteredDoctors = useMemo(() => {
    return doctors.filter((doctor) => {
      const matchesServiceType = filters.plural === "" || doctor.plural.includes(filters.plural);
      const matchesExpertise = filters.expertise === "" || doctor.expertise === filters.expertise;
      const matchesService = filters.service === "" || doctor.services.includes(filters.service);

      return matchesServiceType && matchesExpertise && matchesService;
    });
  }, [filters.service, filters.plural, filters.expertise]);

  if (filteredDoctors.length === 0) {
    return (
      <div className={styles.result}>
        <div className={styles.not_found}>
          <Image src={NotfoundSearch} alt="" />
          <h2>جست و جوی مورد نظر یافت نشد!</h2>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.result}>
      {filteredDoctors.map((doctor) => (
        <div key={doctor.id} className={styles.doctorCard}>
          <div className={styles.info}>
            <div className={styles.info_container}>
              <div className={styles.right_box}>
                <span className={styles.profile}>
                  <MingcuteUser3Fill />
                </span>
                <div className={styles.rate}>
                  <span>
                    <MingcuteStarFill />
                    <b>{doctor.star}</b>
                  </span>
                  <label> {` (${doctor.reviewCount} نظر)`}</label>
                </div>
              </div>
              <div className={styles.left_box}>
                <h3>{doctor.name}</h3>
                <p>تخصص: {doctor.expertise}</p>
                <p>خدمات: {doctor.services.join(", ")}</p>
                <p className={styles.service_types}>
                  {doctor.plural.map((item, i) => (
                    <span key={i}>
                      {item === "inPerson"
                        ? "حضوری"
                        : item === "online"
                          ? "چت آنلاین"
                          : "تلفنی"}
                      {item === "inPerson" ? (
                        <MingcuteStethoscopeLine />
                      ) : item === "online" ? (
                        <MingcuteChat1Line />
                      ) : (
                        <MingcutePhoneCallLine />
                      )}
                    </span>
                  ))}
                </p>
              </div>
            </div>
            <Link href={"#"} className={styles.view_profile}>
              <span>مشاهده پروفایل</span>
              <MingcuteLeftFill />
            </Link>
          </div>
          <div className={styles.details}>
            <div className={styles.item_detail}>
              <span>
                <MingcuteLocationLine />
                آدرس:
              </span>
              {doctor.address}
            </div>
            {doctor.price && (
              <div className={styles.item_detail}>
                <span>
                  <MingcuteCashLine />
                  هزینه ویزیت:
                </span>
                {doctor.price + " "}
                تومان
              </div>
            )}
            {doctor.lastFreeTime && (
              <div className={styles.item_detail}>
                <span>
                  <MingcuteCalendarTimeAddLine />
                  اولین نوبت آزاد:
                </span>
                {doctor.lastFreeTime}
              </div>
            )}
          </div>
          <div className={styles.buttons}>
            <ButtonComponent text="دریافت مشاوره" />
            <ButtonComponent text="مشاهده پروفایل" />
          </div>
        </div>
      ))}
    </div>
  );
}