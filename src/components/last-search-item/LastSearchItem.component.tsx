"use client";

import styles from "./lastSearchItem.module.css"

import HandleSearchFunc from '@/utils/HandleSearchFunc';

import { useRouter } from 'next/navigation';

import React from 'react';

type Props = {
  title: string;
};

export default function LastSearchItemComponent({ title }: Props) {
  const router = useRouter();

  const handleClick = () => {
    HandleSearchFunc(router, title);
  };

  return (
    <li className={styles.item} onClick={handleClick}>{title}</li>
  );
}