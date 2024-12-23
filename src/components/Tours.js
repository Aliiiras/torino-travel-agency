"use client";
import Image from "next/image"
import styles from "@/components/Tours.module.css"
import Tour from "./Tour"
import Date from "@/components/partials/container/Date"
import { useState } from "react"

function Tours() {
    const [Ovalue, setOvalue] = useState("");
    const [Dvalue, setDvalue] = useState("");

  const handleOrign = (e) => {
    const inputValue = e.target.value;
    const regex = /^[\u0600-\u06FF\s]*$/; 
    if (regex.test(inputValue)) {
        setOvalue(inputValue);
    }};

    const handleDestnt = (e) => {
        const inputValue = e.target.value;
        const regex = /^[\u0600-\u06FF\s]*$/; 
        if (regex.test(inputValue)) {
            setDvalue(inputValue);
        }};
  return (
    <div>
            <h3 className={styles.intro}>تورینو برگزار کننده بهترین تور های داخلی و خارجی</h3>
        <div className={styles.search}>
            <div className={styles.inputwrapper}>
                <input id="location" className={styles.inputico} type="text" placeholder="مبدا" value={Ovalue} onChange={handleOrign}/>
                <Image className={styles.ico} src="/ico/location.png" width={20} height={20} alt="loc"></Image>
            </div>
            <div className={styles.inputwrapper}>
                <input className={styles.inputico} type="text" placeholder="مقصد" value={Dvalue} onChange={handleDestnt}/>
                <Image className={styles.ico} src="/ico/global-search.png" width={20} height={20} alt="loc"></Image>
            </div>
            <div className={styles.inputwrapper}>
                {/* <input className={styles.inputico} placeholder="تاریخ"/> */}
                <Date/>
                <Image className={styles.ico} src="/ico/calendar.png" width={20} height={20} alt="loc"></Image>
                
            </div>
            <button>جستجو</button>
        </div>
            <Tour/>
    </div>
  )
}

export default Tours