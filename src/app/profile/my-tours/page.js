"use client";

import { useGetUserTours } from "@/core/services/queries";

function MyToursPage() {
  const { data, isPending } = useGetUserTours(); //get user's tour
  console.log(data);
  if (isPending) return <p>Loading</p>;

  return (

    <div className=" w-[%100] py-[10px] px-[8px]">
      
      
      {data?.data?.map((tour) => (
        <div key={tour.id} className=" h-[150px] border-2 rounded-xl border-gray-200 w-[100%] px-[10px] py-[15px]">
          <div className="flex">
          <div className="w-[50%] flex-col mr-[25px] mb-[20px]">
            <h1 className=" mb-[20px]">{tour.title}</h1>
            <h1><span>{tour.destination.namefa} به {tour.origin.namefa}</span><span className="text-gray-500"> {tour.startDate.split("T")[0]}</span></h1>
          </div>
          <div className="w-[50%] justufy-between">
            <h1 className="mb-[20px]"><span>سفر با </span>{tour.fleetVehicle}</h1>
            <h1><span>تاریخ برگشت </span><span className="text-gray-500">{tour.endDate.split("T")[0]}</span></h1>
          </div>
          </div>
          <hr></hr>
          <div className="items-center justify-center mr-[25px] py-[15px] numbers">
            <h3><span className="text-gray-400">مبلغ پرداخت شده </span>{tour.price} <span className="text-gray-400">تومان </span></h3>
            <h3></h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyToursPage;