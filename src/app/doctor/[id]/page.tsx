import React, { ReactElement } from "react";

import { notFound } from "next/navigation";
import Image from "next/image";

import { doctors } from "@/mock/docrorDetails";

import styles from "./doctorDetails.module.css";

import ButtonComponent from "@/components/button/button.component";

import ProgressBarComponent from "@/components/progress-bar/ProgressBar.component";
import SelectOptionComponent from "@/components/select-option/select-option.component";

import FilterCommentsProviderComponent from "./components/filter-comments-provider/FilterCommentsProvider.component";
import ResultCommentsComponent from "./components/result-comments/ResultComments.component";
import SearchCommentsComponents from "./components/search-comments/SearchComments.components";

import MingcuteCalendarTimeAddLine from "@/icons/MingcuteCalendarTimeAddLine";
import MingcutePhoneCallLine from "@/icons/MingcutePhoneCallLine";
import MingcuteChat1Line from "@/icons/MingcuteChat1Line";
import MingcuteHospitalLine from "@/icons/MingcuteHospitalLine";
import MingcuteCertificate2Line from "@/icons/MingcuteCertificate2Line";
import MingcuteLocationLine from "@/icons/MingcuteLocationLine";
import MingcuteInformationLine from "@/icons/MingcuteInformationLine";
import MingcuteCertificateLine from "@/icons/MingcuteCertificateLine";
import MingcuteStarLine from "@/icons/MingcuteStarLine";
import MingcuteTimeDurationLine from "@/icons/MingcuteTimeDurationLine";
import MingcuteCheckCircleLine from "@/icons/MingcuteCheckCircleLine";

type Props = {
  params: { id: string };
};

export default function Page({ params }: Props): ReactElement {
  const doctor = doctors.find((item) => item.id === +params.id);

  if (!doctor) {
    return notFound();
  }

  const {
    name,
    avatar,
    expertise,
    services,
    star,
    reviewCount,
    address,
    about,
    phone,
    services_types,
    reviews,
  } = doctor;

  return (
    <div className={styles.page}>
      <div className={styles["right-section"]}>
        <div className={styles["doctor-info"]}>
          {avatar && (
            <Image
              src={avatar}
              alt={name}
              width={72}
              height={72}
              className={styles["doctor-avatar"]}
            />
          )}
          <div className={styles["doctor-text-info"]}>
            <h1 className={styles["doctor-name"]}>{name}</h1>
            <p className={styles["doctor-expertise"]}>
              <MingcuteCertificate2Line />
              {expertise}
            </p>
            <p className={styles["doctor-address"]}>
              <MingcuteLocationLine />
              {address}
            </p>
            <p className={styles["contact-phone"]}>
              <MingcutePhoneCallLine />
              {phone}
            </p>
          </div>
        </div>

        <div className={styles["about-services-container"]}>
          <div className={styles["about-section"]}>
            <h2 className={styles["section-title"]}>
              <MingcuteInformationLine />
              درباره {name}:
            </h2>
            <div className={styles["about-text"]}>
              {about.split("،").map((item, i) => (
                <p key={i} className={styles["about-item"]}>
                  <span className={styles["bullet-animate"]}></span>
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className={styles["services-section"]}>
            <h2 className={styles["section-title"]}>
              <MingcuteCheckCircleLine />
              خدمات:
            </h2>
            <ul className={styles["services-list"]}>
              {services.map((service, index) => (
                <li key={index} className={styles["service-item"]}>
                  <span className={styles["bullet-animate"]}></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles["reviews-section"]}>
          <h2 className={styles["section-title"]}>
            <MingcuteCertificateLine />
            امتیاز ها و نظرات:
          </h2>

          <div className={styles["reviews-info"]}>
            <div className={styles["preview-box"]}>
              <p>
                <MingcuteStarLine />
                میانگین امتیازها:
                <span>
                  <b>{star}</b>
                  (از {reviewCount} نظر)
                </span>
              </p>
              <p className={styles["review-wait-time"]}>
                <MingcuteTimeDurationLine />
                میانگین زمان انتظار:
                <span>
                  <b>{reviews.average_wait_time}</b>
                  دقیقه
                </span>
              </p>
            </div>
            <ProgressBarComponent
              label="رفتار حرفه ای پزشک (برخورد صبورانه و محترمانه)"
              rate={reviews.criteria.professional_behavior}
            />
            <ProgressBarComponent
              label="اختصاص وقت و توضیحات کافی برای مراجعه کننده"
              rate={reviews.criteria.time_allocation}
            />
            <ProgressBarComponent
              label="مهارت پزشک در تشخیص و درمان"
              rate={reviews.criteria.diagnostic_skill}
            />
            <ProgressBarComponent
              label="فرایند پذیرش و رفتار منشی و پرسنل"
              rate={reviews.criteria.reception_process}
            />
            <ProgressBarComponent
              label="شرایط محیط مطب و اتاق انتظار"
              rate={reviews.criteria.clinic_conditions}
            />
          </div>

          {/* Comments */}
          <div className={styles["comments-provider"]}>
            <FilterCommentsProviderComponent>
              <div className={styles["filter-search"]}>
                <SelectOptionComponent
                  id="sort-comments"
                  name="sort-comments"
                  label="فیلتر نظرات:"
                  placeholder="مثال: جدیدترین"
                  options={[
                    { id: "relevant", value: "مرتبط ترین" },
                    { id: "popular", value: "محبوب ترین" },
                    { id: "newest", value: "جدید ترین" },
                  ]}
                  contextType="comments"
                />
                <SearchCommentsComponents
                  id={"search-comments"}
                  label={"جستجو در نظرات:"}
                  placeholder="مثال: تیروئید پرکار..."
                />
              </div>
              <ResultCommentsComponent doctorId={+params.id} />
            </FilterCommentsProviderComponent>
          </div>
        </div>
      </div>
      <div className={styles["left-section"]}>
        <div className={styles["services-types-section"]}>
          <h2 className={styles["section-title"]}>
            <MingcuteCalendarTimeAddLine />
            نوبت گیری و ویزیت:
          </h2>
          <div className={styles["services-types-list"]}>
            {services_types.map((serviceType, index) => (
              <div key={index} className={styles["service-type-item"]}>
                <h3 className={styles["service-type-title"]}>
                  {serviceType.type === "online" ? (
                    <MingcuteChat1Line />
                  ) : serviceType.type === "inPerson" ? (
                    <MingcuteHospitalLine />
                  ) : (
                    <MingcutePhoneCallLine />
                  )}
                  {serviceType.type === "online"
                    ? "مشاوره متنی"
                    : serviceType.type === "inPerson"
                      ? "ویزیت حضوری"
                      : "ویزیت آنلاین"}
                </h3>
                <p className={styles["next-slot"]}>
                  اولین نوبت آزاد:
                  <span>{serviceType.next_slot}</span>
                </p>
                <p className={styles["service-price"]}>
                  قیمت:
                  <span>{serviceType.details_type.price} تومان</span>
                </p>
                <p className={styles["service-duration"]}>
                  مدت زمان ویزیت:
                  <span>{serviceType.details_type.duration} دقیقه</span>
                </p>
                <div className={styles["service-features"]}>
                  <span className={styles["badge-item"]}>
                    {serviceType.details_type.description}
                  </span>
                  {serviceType.details_type.features?.map((feature, index) => (
                    <span key={index} className={styles["badge-item"]}>
                      {feature}
                    </span>
                  ))}
                </div>
                <ButtonComponent>
                  {serviceType.type === "online"
                    ? "درخواست مشاوره"
                    : serviceType.type === "inPerson"
                      ? "نوبت دهی"
                      : "مشاوره آنلاین"}
                </ButtonComponent>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
