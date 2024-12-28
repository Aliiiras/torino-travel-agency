"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./sider.module.css";

const Slider = () => {
  return (
    <div className={styles.sliderContainer}>
      <Swiper
        effect="cards"
        // grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.2} 
        // loop={true}
        
        // spaceBetween={-30} 
        cardsEffect={{
          rotate: true, 
          edgeSwipeThreshold:5,
        //   stretch: -50, 
        //   depth: 150, 
        //   modifier: 1, 
          perSlideRotate: 1.1,
          slideShadows: true, 
          crossFade: true,
        }}
        pagination={{
          type: "fraction",
        }}
        // navigation={true}
        // modules={[EffectCoverflow, Pagination, Navigation]}
      >
        <SwiperSlide>
          <img src="/ico/s1.png" alt="slide 1"
           className={styles.slideImage}
            />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/ico/s2.png" alt="slide 2"
           className={styles.slideImage}
            />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/ico/s3.png" alt="slide 3"
           className={styles.slideImage}
            />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/ico/s4.png" alt="slide 4"
           className={styles.slideImage}
            />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;