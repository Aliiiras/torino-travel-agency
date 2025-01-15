import ReserveButton from "@/components/ReserveButton";
import ProfileLayout from "@/app/profile/layout";
import { serverFetch } from "@/core/services/http";
import moment from "moment-jalaali";
import Image from "next/image";

async function TourDetailsPage({ params }) {
  const tourData = await serverFetch(`tour/${params.id}`, null, {
    cache: "no-store",
    
  });
  const startDate = new Date(tourData.startDate); 
  const endDate = new Date(tourData.endDate);
  const differenceMS = endDate - startDate;
  const differenceDays = differenceMS / (1000 * 60 * 60 * 24);

  const startDateShamsi = moment(tourData.startDate).format("jYYYY/jMM/jDD");
  const endDateShamsi = moment(tourData.endDate).format("jYYYY/jMM/jDD");

  return (
    <ProfileLayout>
    <div className="w-full h-[430px]">
      <div className="box-border w-full h-[250px] flex flex-row items-center">
      <Image
            className="w-96 h-64 pr-4 pt-4 rounded-lg"
            src={tourData.image.startsWith("http") ? tourData.image : `http://localhost:6500/${tour.image}`}
            width={100}
            height={100}
            alt={tourData.title || "placeimg"}
            />
        <div>
        <div className="h-[25vh] w-[80vh] pr-8 mt-10">
          <h1 className="text-[32px] leading-[50px] text-2xl">{tourData.title}</h1>
          <h1 className="numbers pt-4">{differenceDays}شب {differenceDays-1}روز</h1>
          <div className="flex flex-row pt-8 text-gray-500">
          <h1 className="flex items-center space-x-2 ml-10"><img className="pl-4" src="/ico/user-tick.svg"></img>{tourData.options[0]}</h1>
          <h1 className="flex items-center space-x-2 ml-10"><img className="pl-4" src="/ico/map.svg"></img>{tourData.options[1]}</h1>
          <h1 className="flex items-center space-x-2 ml-10"><img className="pl-4" src="/ico/medal-star.svg"></img>{tourData.options[2]}</h1>
          </div>
        </div>
        <div className="flex flex-row justify-between h-[10vh] w-[90vh] items-center">
          <h1 className="numbers pr-10 leading-[22px] text-[14px] font-normal text-blue-400">{tourData.price} تومان</h1>
          <ReserveButton id={params.id} />
        </div>
        </div>
      </div>
      <div className=" box-content mt-12 h-[80px] w-[100%] flex flex-row gap-">
        <div className="flex flex-col border-l-2">
          <h1 className="flex items-center space-x-2 mx-10"><img className="pl-4" src="/ico/routing-2.svg"></img>مبدا</h1>
          <h1 className="flex items-center justify-center space-x-2 mx-10 h-[70px]">{tourData.origin.namefa}</h1>
          </div>
          <div className="flex flex-col border-l-2">
          <h1 className="flex items-center space-x-2 mx-10"><img className="pl-4" src="/ico/calendar.svg"></img>تاریخ رفت</h1>
          <h1 className="numbers flex items-center justify-center space-x-2 mx-10 h-[70px]">{startDateShamsi}</h1>
          </div>
          <div className="flex flex-col border-l-2">
          <h1 className="flex items-center space-x-2 mx-10"><img className="pl-4" src="/ico/calendar-2.svg"></img>تاریخ برگشت</h1>
          <h1 className="numbers flex items-center justify-center space-x-2 mx-10 h-[70px]">{endDateShamsi}</h1>
          </div>
          <div className="flex flex-col border-l-2">
          <h1 className="flex items-center space-x-2 mx-10"><img className="pl-4" src="/ico/bus.svg"></img>حمل و نقل</h1>
          <h1 className="flex items-center justify-center space-x-2 mx-10 h-[70px]">{tourData.fleetVehicle}</h1>
          </div>
          <div className="flex flex-col border-l-2">
          <h1 className="flex items-center space-x-2 mx-10"><img className="pl-4" src="/ico/profile-2user.svg"></img>ظرفیت</h1>
          <h1 className="numbers flex items-center justify-center space-x-2 mx-10 h-[70px]">{tourData.availableSeats}</h1>
          </div>
          <div className="flex flex-col">
          <h1 className="flex items-center space-x-2 mx-10"><img className="pl-4" src="/ico/security.svg"></img>بیمه</h1>
          <h1 className="flex items-center justify-center space-x-2 mx-10 h-[70px]">{tourData.insurance}</h1>
          </div>
      {/* {tourData.startDate} */}
      {/* {tourData.endDate} */}
      
      {/* {tourData.fleetVehicle} */}
      {/* {tourData.availableSeats} */}
      {/* {tourData.insurance} */}
      {/* {tourData.image} */}
      
      </div>
      
      
      

      
    </div>
    </ProfileLayout>
  );
}

export default TourDetailsPage;