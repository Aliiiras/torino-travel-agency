
import Image from "next/image"
import styles from "@/components/Tour.module.css"
import LotAnim from "../../public/ico/anim.js";
import Link from "next/link";

function Tour({ toursData = [] }) {
  // console.log(toursData);
  if (!toursData.length) return (
    <div className="flex flex-col items-center text-2xl font-bold my-32">
      <div className="w-48 h-48"><LotAnim/></div>
      <p className="mt-4">متاسفانه نتیجه‌ای یافت نشد</p>
    </div>
  );
  return (
<div className={styles.leveler}>
      <h2>همه تورها</h2>
    <div className={styles.container}>
      {toursData?.map((tour) => (
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
          <Link href={`/tours/${tour?.id}`} className={styles.reserve}>رزرو</Link>
          <h6 className={`${styles.price} numbers`}>{tour.price} <span>تومان</span></h6>
        </div>
          </div>
      ))}
    </div>
    </div>


  );
}

export default Tour;