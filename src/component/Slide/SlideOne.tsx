import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import cls from "./SlideOne.module.scss";
export const SlideOne = () => {
    const rightRef = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(
                "#dazed, #links, #fron, #dev, #nik, #chu, #year, #city, #ft, #maze, #end, #lop, #lay, #kov, #rus, #react, #stack",
                {
                    rotationY: 36,
                    opacity: 0,
                    duration: 2.6,
                    yPercent: -100,
                    stagger: 0.1,
                    ease: "Expo.easeOut",
                },
            );
        }, rightRef);
        return () => ctx.revert();
    }, []);

    return (
        <div className={cls.SlideOne}>
            <div className={cls.SwiperSlideOne} ref={rightRef}>
                <div className={cls.SlideContainer}>
                    <div className={cls.About}>
                        <div className={cls.AboutDazed}>
                            <div id="dazed">
                                <span>Dazed in</span>
                            </div>
                            <div className={cls.Maze} id="maze">
                                <span>the maze</span>
                            </div>
                        </div>
                        <div className={cls.AboutFrontend}>
                            <div id="fron">
                                <span>Fron</span>
                            </div>
                            <div id="end">
                                <span>tend</span>
                            </div>
                            <div className={cls.Dev} id="dev">
                                <span>Deve</span>
                            </div>
                            <div id="lop">
                                <span>loper</span>
                            </div>
                            <div className={cls.Ft} id="ft">
                                <span>ft.</span>
                            </div>
                            <div id="react">
                                <span>React</span>
                            </div>
                        </div>
                        <div className={cls.AboutName}>
                            <div id="nik">
                                <span>Nik</span>
                            </div>
                            <div id="lay">
                                <span>olay</span>
                            </div>
                            <div id="chu" className={cls.LastName}>
                                <span>Chuba</span>
                            </div>
                            <div id="kov">
                                <span>kov</span>
                            </div>
                        </div>
                        <div className={cls.AboutYear}>
                            <div id="year">
                                <span>22 y.o</span>
                            </div>
                        </div>
                        <div className={cls.AboutLocation}>
                            <div id="city">
                                <span>Saratov,</span>
                            </div>
                            <div className={cls.Russia} id="rus">
                                <span>Russia</span>
                            </div>
                        </div>
                    </div>
                    <div id="stack" className={cls.Stack} ref={rightRef}>
                        <h1 className={cls.StackTitle}>Technical skills</h1>
                        <div className={cls.StackContainerOne}>
                            <div className={cls.StackItem}>HTML</div>
                            <div className={cls.StackItem}>CSS</div>
                            <div className={cls.StackItem}>SASS</div>
                            <div className={cls.StackItem}>JavaScript</div>
                        </div>
                        <div className={cls.StackContainerTwo}>
                            <div className={cls.StackItem}>TypeScript</div>
                            <div className={cls.StackItem}>React</div>
                            <div className={cls.StackItem}>Redux</div>
                            <div className={cls.StackItem}>Webpack</div>
                        </div>
                    </div>
                    <div id="links" className={cls.Links} ref={rightRef}>
                        <a href="http://github.com/fornara">GitHub</a>
                        <a href="https://t.me/fornara_the_great">Telegram</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
