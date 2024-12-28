import Image from "next/image"
import styles from "@/components/partials/Footer.module.css"
import Swiper from 'swiper';
import 'swiper/css';


function Footer() {
  return (
    <>
    <hr className={styles.footersplitor}></hr>
    <div className={styles.footer}>
        <div className={styles.contactsecfooter}>
            <div className={styles.rightsecfooter}><h3>تورینو</h3>
                <a href="#">درباره ما</a>
                <a href="#">تماس با ما</a>
                <a href="#">چرا تورینو</a>
                <a href="#">بیمه مسافرتی</a>
            </div>
            <div className={styles.leftsecfooter}><h3>خدمات مشتریان</h3>
                <a href="#">پشتیبانی آنلاین</a>
                <a href="#">راهنمای خرید</a>
                <a href="#">راهنمای استرداد</a>
                <a href="#">پرسش و پاسخ</a>
            </div>
        </div>
        <div className={styles.supportsecfooter}>
            <div className={styles.logotel}>
                <Image src="/ico/logo.png" width={150} height={44} alt="logo" />
                <h4><span className="numbers">021-8574 </span>
                     : تلفن پشتیبانی </h4>
            </div>
            <div className={styles.imgsupportfooter}>
                <Image className={styles.images} src="/ico/passenger-rights-48368f81 1.png" width={50} height={50} alt="passngr" />
                <Image className={styles.images} src="/ico/ecunion-35c3c933.png" width={50} height={50} alt="ecunion" />
                <Image className={styles.images} src="/ico/samandehi-6e2b448a.png" width={50} height={50} alt="samandhi" />
                <Image className={styles.images} src="/ico/state-airline-f45c55b2 1.png" width={50} height={50} alt="statairline" />
                <Image className={styles.images} src="/ico/aira-682b7c43.png" width={50} height={50} alt="aira" />
            </div>
        </div>
    </div>
    <hr className={styles.rightssplitor}></hr>
    <h4 className={styles.rights}>کلیه حقوق این وب سایت متعلق به تورینو میباشد.</h4>
    </>
  )
}

export default Footer