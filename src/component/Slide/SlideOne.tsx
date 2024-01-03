import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

import cls from "./SlideOne.module.scss";
import BlinkingCursor from "../../widgets/BlinkingCursor/BlinkingCursor";

export const SlideOne = () => {
    const blobRef = useRef();
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(
                "h1, h2",
                { opacity: 0, x: -100 },
                { opacity: 1, x: 0, duration: 1, delay: 2 },
            );
        }, blobRef);
        return () => ctx.revert();
    }, []);

    return (
        <div className={cls.SlideOne}>
            <div className={cls.SwiperSlideOne} ref={blobRef}>
                <div className={cls.SlideContainer}>
                    <div className={cls.About}>
                        <BlinkingCursor />
                        <h2>Dazed in the maze</h2>
                        <h1>Frontend Developer ft.React</h1>
                        <h1>Nikolay Chubakov</h1>
                        <h2>22 y.o</h2>
                        <h2>Saratov, Russia</h2>
                    </div>
                    <div className={cls.Stack}>
                        <h1>Technical skills</h1>
                        <div className={cls.StackItem}>HTML</div>
                        <div className={cls.StackItem}>CSS</div>
                        <div className={cls.StackItem}>SASS</div>
                        <div className={cls.StackItem}>JavaScript</div>
                        <div className={cls.StackItem}>TypeScript</div>
                        <div className={cls.StackItem}>React</div>
                        <div className={cls.StackItem}>Redux</div>
                        <div className={cls.StackItem}>Webpack</div>
                    </div>
                    <div className={cls.Swipe}>Swipe</div>
                </div>
            </div>
        </div>
    );
};
