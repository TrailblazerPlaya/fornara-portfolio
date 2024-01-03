import cls from "./Swiper.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/autoplay";
import { SlideOne } from "../../component/Slide/SlideOne";
import { SlideTwo } from "../../component/Slide/SlideTwo";
const FornaraSwiper = () => {
    return (
        <Swiper
            className={cls.Swiper}
            loop={true}
            autoplay={{ delay: 3000 }}
            speed={500}
            grabCursor={true}
        >
            <img src="/assets/kurapika.png" className={cls.Hero} />
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
