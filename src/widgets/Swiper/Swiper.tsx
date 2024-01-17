import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import cls from "./Swiper.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/autoplay";
import { SlideOne } from "../../component/Slide/SlideOne";
import { SlideTwo } from "../../component/Slide/SlideTwo";
const FornaraSwiper = () => {
    const heroRef = useRef();
    useEffect(() => {
        const heroElement = heroRef.current;
        gsap.from(heroElement, {
            rotationY: 36,
            opacity: 0,
            duration: 7.6,
            yPercent: 100,
            stagger: 0.1,
            ease: "Expo.easeOut",
        });
    }, []);
    return (
        <Swiper
            className={cls.Swiper}
            loop={true}
            autoplay={{ delay: 3000 }}
            speed={500}
            grabCursor={true}
        >
            <div id="hero" ref={heroRef}>
                <img src="/assets/kurapika.png" className={cls.Hero} />
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
