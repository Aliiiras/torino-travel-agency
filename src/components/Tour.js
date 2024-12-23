"use client";

import Image from "next/image"
import { useGetTourData } from "@/core/services/tourQueries";
import styles from "@/components/Tour.module.css"
// import NoConnection from '../components/templates/NoConnection';
import { useState } from 'react';


function Tour() {
    const page = 1; // شماره صفحه
    const { data, isLoading, isError, error } = useGetTourData(page);

    console.log("Loading:", isLoading);
    console.log("Error:", error);
    console.log("Data:", data);

    if (isLoading) return <p>در حال بارگذاری...</p>;
    if (isError) return <p>خطا در دریافت داده!</p>;

    // const fetchData = async () => {
    //   try {
    //     const response = await fetch('https://example.com/api');
    //     if (!response.ok) {
    //       throw new Error('Connection Error');
    //     }
    //   } catch (error) {
    //     setisError(true);
    //   }
    // };
  
    // اگر خطا وجود داشته باشد، صفحه خطا را نشان بده
    // if (isError) {
    //   return <NoConnection />;
    // }
    
  return (
    <div className={styles.leveler}>
      <h2>همه تورها</h2>
    <div className={styles.container}>
      {data?.data?.map((tour) => (
          <div className={styles.main} key={tour.id}>
          {tour.image && (
          <Image
            className={styles.placeimg}
            src={tour.image.startsWith("http") ? tour.image : `http://localhost:6500/${tour.image}`}
            width={100}
            height={100}
            alt={tour.title || "placeimg"}
          />
        )}
        <div className={styles.firstsector}>
          <h3 className={styles.title}>{tour.title}</h3>
          <div className={styles.options}>
            <span>{tour.options[0]} - </span>
            <span>{tour.options[1]} - </span>
            <span>{tour.options[2]}</span>
          </div>
        </div>  
          <hr></hr>
        <div className={styles.endsector}>
          <button className={styles.reserve}>رزرو</button>
          <h6 className={styles.price}>{tour.price} <span>تومان</span></h6>
        </div>
          </div>
      ))}
    </div>
    </div>
  )
}

export default Tour


