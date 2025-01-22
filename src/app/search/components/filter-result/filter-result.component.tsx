"use client";

import { useContext, useEffect, useState } from "react";

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

import NotfoundSearch from "@/assets/illastrations/not-found-search.svg";
import Image from "next/image";
import MingcuteLeftFill from "@/icons/MingcuteLeftFill";
import Link from "next/link";

export default function FilterResultComponent() {
  const { selectedFilters } = useContext(FilterContext);

  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  useEffect(() => {
    const filtered = doctors.filter((doctor) => {
      const matchesServiceType =
        selectedFilters.serviceType === "" ||
        doctor.serviceType.includes(selectedFilters.serviceType);
      const matchesExpertise =
        selectedFilters.expertise === "" ||
        doctor.expertise === selectedFilters.expertise;
      const matchesService =
        selectedFilters.service === "" ||
        doctor.services.includes(selectedFilters.service);

      return matchesServiceType && matchesExpertise && matchesService;
    });
    setFilteredDoctors(filtered);
  }, [
    selectedFilters.service,
    selectedFilters.serviceType,
    selectedFilters.expertise,
  ]);

  return (
    <div className={styles.result}>
      {filteredDoctors.length ? (
        filteredDoctors.map((doctor) => (
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
                      <b>{`${doctor.star}`}</b>
                    </span>
                    <h6> {` (${doctor.reviewCount} نظر)`}</h6>
                  </div>
                </div>
                <div className={styles.left_box}>
                  <h3>{doctor.name}</h3>
                  <p>تخصص: {doctor.expertise}</p>
                  <p>خدمات: {doctor.services.join(", ")}</p>
                  <p className={styles.service_types}>
                    {doctor.serviceType.map((item, i) => (
                      <span key={i}>
                        {item === "in_person"
                          ? "حضوری"
                          : item === "online"
                            ? "چت آنلاین"
                            : "تلفنی"}
                        {item === "in_person" ? (
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
              <button>دریافت مشاوره</button>
              <button>مشاهده پروفایل</button>
            </div>
          </div>
        ))
      ) : (
        <div className={styles.not_found}>
          <Image src={NotfoundSearch} alt="جست و جوی مورد نظر یافت نشد" />
          <h2>جست و جوی مورد نظر یافت نشد!</h2>
        </div>
      )}
    </div>
  );
}
