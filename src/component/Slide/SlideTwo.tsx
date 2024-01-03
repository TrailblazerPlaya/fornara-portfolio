import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

import cls from "./SlideTwo.module.scss";

export const SlideTwo = () => {
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
        <div className={cls.SlideTwo} ref={blobRef}>
            <h1>Slide Two</h1>
        </div>
    );
};
