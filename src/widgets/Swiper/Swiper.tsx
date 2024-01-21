import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import cls from "./Swiper.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Mousewheel } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/autoplay";
import "swiper/scss/pagination";
import { SlideOne } from "../../component/Slide/SlideOne";
import { SlideTwo } from "../../component/Slide/SlideTwo";
import kurapika from "/public/assets/kurapika.png";
const FornaraSwiper = () => {
    const heroRef = useRef();
    useEffect(() => {
        const heroElement = heroRef.current;
        gsap.from(heroElement, {
            rotationY: 36,
            opacity: 0,
            duration: 2.6,
            xPercent: 20,
            stagger: 0.1,
            ease: "Expo.easeOut",
        });
    }, []);

    return (
        <Swiper
            className={cls.Swiper}
            loop={true}
            autoplay={{ delay: 10000, disableOnInteraction: false }}
            speed={500}
            grabCursor={true}
            pagination={{ clickable: true }}
            mousewheel={true}
            modules={[Pagination, Autoplay, Mousewheel]}
        >
            <div id="hero" ref={heroRef}>
                <img src={kurapika} className={cls.Hero} />
            </div>
            <div className={cls.SwiperWrapper}>
                <SwiperSlide>
                    <SlideOne />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideTwo />
                </SwiperSlide>
            </div>
        </Swiper>
    );
};
export default FornaraSwiper;
