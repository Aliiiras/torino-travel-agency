import ModalContainer from "@/components/partials/container/ModalContainer";
import AuthForm from "@/components/partials/provider/AuthProvider";
import HeaderWithImg from "@/components/HeaderWithImg";
import Header from "@/components/partials/Header"
import Footer from "@/components/Footer";
import Tours from "@/components/Tours";
import styles from "@/app/page.module.css"
import Image from "next/image";
import Slider from "@/components/templates/Sider";



export default function Home() {
  return (
    <div>
      <div className={styles.header} >
      <Header/>
      <HeaderWithImg/>
      </div>
      <ModalContainer />
      <Tours/>
      <div className={styles.telbuy}>
        
        <div className={styles.telbuyr}>
          <div className={styles.telbuytxt}>
            <h1>خرید تلفنی از تورینو</h1>
            <h4>به هرکجا که میخواهید!</h4>
          </div>
          <div className={styles.buymanimg}>
            <Image className={styles.manimg} src="/ico/cartoon-man.png" width={225} height={308} alt="man"/>
          </div>
        </div>
        <div className={styles.telbuyl}>
          <div className={styles.calling}>
            <h2>021-1840</h2>
            <Image className={styles.telimg} src="/ico/call.png" width={30} height={30} alt="call"/>
          </div>
            <button className={styles.moreinfo}>
            اطلاعات بیشتر
            </button>
        </div>
      </div>
          <div className={styles.whytorino}>
            <div className={styles.whytxt}>
              <h3>چرا تورینو ؟</h3>
              <h4>تور طبیعت گردی و تاریخی </h4>
              <h5>
              اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید تورهای طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های گردشگری و آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و تاریخی را خریداری کنید.
              </h5>
            </div>
            <div className={styles.slider}>
              <Slider />  
            </div>
          </div>
          <hr></hr>
        <div className={styles.futures}>
          <div className={styles.futureskids}>
            <div>
              <Image className={styles.futuresimages} alt="16" src="/ico/Group 16.png" width={50} height={50} alt="o"/>
            </div>
            <div className={styles.futurestxt}>
              <h3>بصرفه ترین قیمت</h3>
              <h5>بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.</h5></div>
            </div>
          <div  className={styles.futureskids}>
            <div>
              <Image className={styles.futuresimages} alt="17" src="/ico/Group 17.png" width={50} height={50} alt="i"/>
            </div>
            <div className={styles.futurestxt}>
              <h3>پشتیبانی</h3>
              <h5>پشتیبانی و همراهی 24 ساعته در تمامی مراحل سفر شما.</h5>
            </div>
          </div>
          <div className={styles.futureskids}>
            <div>
              <Image className={styles.futuresimages} alt="18" src="/ico/Group 18.png" width={50} height={50} alt="u"/>
            </div>
            <div className={styles.futurestxt}>
              <h3>رضایت کاربران</h3>
              <h5>رضایت بیش از 10هزار کاربر از تور های ما. </h5>
            </div>
          </div>
        </div>
        <hr className={styles.footersplitor}></hr>
      <Footer/>
    </div>
  );
}
