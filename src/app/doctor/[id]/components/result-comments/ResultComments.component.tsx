"use client";

import React, { useContext, useMemo, useState } from "react";

import styles from "./resultComments.module.css";

import Image from "next/image";

import { FilterCommentsContext } from "../filter-comments-provider/FilterCommentsProvider.component";

import { CommentModel } from "@/models/comment.model";
import { comments } from "@/mock/comments";

import NotfoundSearch from "@/assets/illastrations/not-found-search.svg";
import MingcuteUser3Fill from "@/icons/MingcuteUser3Fill";
import MingcuteStarFill from "@/icons/MingcuteStarFill";
import SolarLikeBold from "@/icons/SolarLikeBold";
import SolarHeartOutline from "@/icons/SolarHeartOutline";
import SolarHeartBold from "@/icons/SolarHeartBold";
import SolarShareOutline from "@/icons/SolarShareOutline";

type Props = {
  doctorId: number;
};

export default function ResultCommentsComponent({ doctorId }: Props) {
  const [likedComments, setLikedComments] = useState<{
    [key: number]: boolean;
  }>({});
  const { filterCommnets } = useContext(FilterCommentsContext);

  const filteredComments: CommentModel[] = useMemo(() => {
    return comments.filter((comment) => {
      const matchesComment = comment.relId === doctorId;
      return matchesComment;
    });
  }, [doctorId]);

  console.log(filterCommnets);

  const sortedAndFilteredComments = useMemo(() => {
    let result = [...filteredComments];

    // اعمال جستجو
    if (filterCommnets.query) {
      result = result.filter((comment) =>
        comment.text.toLowerCase().includes(filterCommnets.query.toLowerCase()),
      );
    }

    // اعمال مرتب‌سازی
    switch (filterCommnets.sortBy) {
      case "relevant":
        // مرتب‌سازی بر اساس مرتبط‌ترین (مثلاً تعداد لایک‌ها)
        result = result.filter((comment) => comment.Related);
        break;
      case "popular":
        // مرتب‌سازی بر اساس محبوب‌ترین (مثلاً تعداد لایک‌ها)
        result.sort((a, b) => b.likes - a.likes);
        break;
      case "newest":
        // مرتب‌سازی بر اساس جدیدترین (مثلاً تاریخ ایجاد)
        result.sort(
          (a, b) =>
            new Date(b.createdDay).getTime() - new Date(a.createdDay).getTime(),
        );
        break;
      default:
        break;
    }

    return result;
  }, [filteredComments, filterCommnets.sortBy, filterCommnets.query]);

  const handleIncrementLikes = (commentId: number) => {
    setLikedComments((prev) => {
      const isLiked = !prev[commentId];
      return {
        ...prev,
        [commentId]: isLiked,
      };
    });
  };

  if (filteredComments.length === 0) {
    return (
      <div className={styles.result}>
        <div className={styles.not_found}>
          <Image src={NotfoundSearch} alt="" />
          <h2>در حال حاضر نظری ثبت نشده است!</h2>
        </div>
      </div>
    );
  }

  return (
    <div className={styles["result-comments"]}>
      {sortedAndFilteredComments.map((comment) => (
        <div key={comment.id} className={styles.comment}>
          <div className={styles["comment-details"]}>
            <div className={styles["right-section"]}>
              <span className={styles.profile}>
                <MingcuteUser3Fill />
              </span>
              <div className={styles["name-date"]}>
                <span className={styles.name}>{comment.name}</span>
                <span className={styles.date}>
                  {comment.createdDay} روز پیش
                </span>
              </div>
            </div>
            <div className={styles["left-section"]}>
              {comment.doctorRate}
              <MingcuteStarFill />
            </div>
          </div>
          <p>{comment.text}</p>
          <div className={styles["comment-buttons"]}>
            <div className={styles.suggest}>
              <SolarLikeBold />
              <span>این پزشک را پیشنهاد میکنم</span>
            </div>
            <div className={styles["like-share-buttons"]}>
              <div
                className={`${styles["like-button"]} ${likedComments[comment.id] ? styles.liked : ""}`}
                onClick={() => handleIncrementLikes(comment.id)}
              >
                <span className={styles["counter-like"]}>
                  {comment.likes + (likedComments[comment.id] ? 1 : 0)}
                </span>
                {likedComments[comment.id] ? (
                  <SolarHeartBold />
                ) : (
                  <SolarHeartOutline />
                )}
              </div>
              <div className={styles["share-button"]}>
                <SolarShareOutline />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
