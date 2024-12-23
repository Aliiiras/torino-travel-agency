import Image from "next/image"
import styles from "@/app/globals.css"
import Header from "@/components/partials/Header"
import Footer from "@/components/Footer"


function NotFound() {
  return (
    <>
    <Header/>
    <div className="w-[70%] mx-auto flex flex-row">
        
        <div className="m-auto flex flex-col">
            <h2 className="font-semibold text-[36px] leading-[56px]">صفحه مورد نظر یافت نشد!</h2>
            <button className="w-[361px] h-[75px] rounded-[16px] p-[8px] bg-[#D8FFE1] text-[#28A745]">
              بازگشت به صفحه اصلی</button>
        </div>
        <div>
            <Image className="w-[555px] h-[555px]" src="/ico/Error TV.png" width={200} height={200} alt="404"></Image>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default NotFound