"use client";

import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { DatePicker } from "zaman";
import QueryString from "qs";

import { useGetTours } from "@/core/services/queries";
import { DateToIso, flattenObject } from "@/core/utils/helper";
import { useRouter } from "next/navigation";
import useQuery from "@/core/hooks/query";
import styles from "@/components/Tours.module.css"

function Tours() {
  const [query, setQuery] = useState("");

  const router = useRouter();
  const { getQuery } = useQuery();
  const { data, isPending, refetch } = useGetTours(query);
  const { register, handleSubmit,control, reset } = useForm();
    useEffect(() => {
      const originId = getQuery("originId");
      const destinationId = getQuery("destinationId");
      if (originId && destinationId) reset({originId, destinationId})
    }, []);
  
    const submitHandler = (form) => {
      // setQuery(flattenObject(form));
      const query = QueryString.stringify(flattenObject(form));
      router.push(`/?${query}`);
    };
  
    return (
    <>
    <h3 className={styles.intro}>تورینو برگزار کننده بهترین تور های داخلی و خارجی</h3>
      <form
        // className="bg-green-100 flex gap-5 p-5 w-fit m-auto"
        className={styles.search}
        onSubmit={handleSubmit(submitHandler)}
      >
        <select className={styles.inputico} {...register("originId")}>
        <option value="" disabled selected>مبدا</option>
          <option value="1">تهران</option>  
          <option value="2">سنندج</option>
          <option value="3">مادرید</option>
          <option value="4">اصفهان</option>
          <option value="5">سلیمانیه</option>
          <option value="6">هویلر</option>
          <option value="7">مازندران</option>
          <option value="8">آفرود</option>
          <option value="9">رم</option>
          <option value="10">کیش</option>
          <option value="11">شیراز</option>
  
        </select>
        <select className={`${styles.inputico} border-r border-[rgba(0,0,0,0.15)]`} {...register("destinationId")}>
        <option value="" disabled selected>مقصد</option>
        <option value="1">تهران</option>  
          <option value="2">سنندج</option>
          <option value="3">مادرید</option>
          <option value="4">اصفهان</option>
          <option value="5">سلیمانیه</option>
          <option value="6">هویلر</option>
          <option value="7">مازندران</option>
          <option value="8">آفرود</option>
          <option value="9">رم</option>
          <option value="10">کیش</option>
          <option value="11">شیراز</option>
        </select>
        <Controller
        control={control}
        name="date"
        render={({ field: { onChange } }) => (
          <DatePicker
          inputClass="!text-black pr-0"
            round="x2"
            accentColor="#28A745"
            onChange={(e) =>
              onChange({
                startDate: DateToIso(e.from),
                endDate: DateToIso(e.to),
              })
            }
            range
          />
        )}
      />
        <input className="bg-[rgba(40,167,69,1)]" type="submit" value="جستجو"/>
      </form>
      </>
    );
  }
  
  export default Tours;