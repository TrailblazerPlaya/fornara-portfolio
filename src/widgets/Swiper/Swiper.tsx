import { Swiper, SwiperSlide } from 'swiper/react';
import cls from './Swiper.module.scss';
import 'swiper/scss';
import 'swiper/scss/autoplay';
import GlowingBlobEffect from '../GlowingBlobEffect/GlowingBlobEffect';
const FornaraSwiper = () => {
    return (
        <Swiper className={cls.Swiper} loop={true} autoplay={{delay: 3000}} speed={500} grabCursor={true} >
            <img className={cls.Hero} /> 
            <div className={cls.SwiperWrapper}>
                <SwiperSlide>
                    <GlowingBlobEffect />
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
            </div>
        </Swiper>
    )
}
export default FornaraSwiper;