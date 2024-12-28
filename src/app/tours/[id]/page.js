import ReserveButton from "@/components/ReserveButton";
import ProfileLayout from "@/app/profile/layout";
import { serverFetch } from "@/core/services/http";
import Image from "next/image";

async function TourDetailsPage({ params }) {
  const tourData = await serverFetch(`tour/${params.id}`, null, {
    cache: "no-store",
    
  });
  const startDate = new Date(tourData.startDate); 
  const endDate = new Date(tourData.endDate);
  const differenceMS = endDate - startDate;
  const differenceDays = differenceMS / (1000 * 60 * 60 * 24);
  return (
    <ProfileLayout>
    <div className="w-[1188px] h-[430px]">
      <div className="box-border w-[1188px] h-[250px] flex flex-row items-center">
      <Image
            className="w-96 h-64 pr-4 pt-4 rounded-lg"
            src={tourData.image.startsWith("http") ? tourData.image : `http://localhost:6500/${tour.image}`}
            width={100}
            height={100}
            alt={tourData.title || "placeimg"}
            />
        <div>
        <div className="h-[30vh] w-[125vh] pr-8 mt-12">
          <h1 className="text-[32px] leading-[50px] text-2xl">{tourData.title}</h1>
          <h1 className="numbers pt-4">{differenceDays}شب {differenceDays-1}روز</h1>
          <div className="flex flex-row pt-8 text-gray-500">
          <h1 className="flex items-center space-x-2 ml-10"><img className="pl-4" src="/ico/user-tick.svg"></img>{tourData.options[0]}</h1>
          <h1 className="flex items-center space-x-2 ml-10"><img src="/ico/map.svg"></img>{tourData.options[1]}</h1>
          <h1 className="flex items-center space-x-2"><img src="/ico/medal-star.svg"></img>{tourData.options[2]}</h1>
          </div>
        </div>
        <div className="flex flex-row justify-between h-[20vh] w-[125vh] items-center">
          <h1 className="numbers pr-10 leading-[22px] text-[14px] font-normal text-blue-400">{tourData.price} تومان</h1>
          <ReserveButton id={params.id} />
        </div>
        </div>
      </div>
      <div>
        <h1>{tourData.origin.namefa}</h1>
      {tourData.startDate}
      {tourData.endDate}
      
      {tourData.fleetVehicle}
      {tourData.availableSeats}
      {tourData.insurance}
      {/* {tourData.image} */}
      
      </div>
      
      
      

      
    </div>
    </ProfileLayout>
  );
}

export default TourDetailsPage;