import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

import cls from "./SlideTwo.module.scss";

import snakeImage from "/public/assets/snake.png";
import hunterImage from "/public/assets/hunter.png";
export const SlideTwo = () => {
    const blobRef = useRef();
    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(
                "#card, #also",
                { opacity: 0, x: -100 },
                { opacity: 1, x: 0, duration: 1, delay: 2 },
            );
        }, blobRef);
        return () => ctx.revert();
    }, []);
    return (
        <div className={cls.SlideTwo} ref={blobRef}>
            <div className={cls.Title}>Portfolio</div>
            <div className={cls.CardRow}>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://euphonious-cucurucho-bc89c0.netlify.app/"
                >
                    <div id="card" className={cls.Card}>
                        <img
                            src={snakeImage}
                            className={cls.SnakeImage}
                            alt="Card 1"
                        />
                        <div className={cls.CardInfo}>
                            <h2>Snake game on JS</h2>
                            <p>
                                Stack: <br /> JavaScript HTML CSS
                            </p>
                            <a
                                href="https://github.com/fornara/snake-game-js"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub repository
                            </a>
                        </div>
                    </div>
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://visionary-entremet-68ac42.netlify.app/"
                >
                    <div id="card" className={cls.Card}>
                        <img
                            src={hunterImage}
                            className={cls.HunterImage}
                            alt="Card 2"
                        />
                        <div className={cls.CardInfo}>
                            <h2>GSAP ScrollTrigger Animation</h2>
                            <p>
                                Stack: <br />
                                GSAP JavaScript HTML CSS
                            </p>
                            <a
                                href="https://github.com/fornara/hunter-scroll-trigger"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub repository
                            </a>
                        </div>
                    </div>
                </a>
            </div>
            <div className={cls.Also} ref={blobRef}>
                <h4 id="also">
                    There are also several projects I have implemented using
                    React and TypeScript libraries.
                    <br /> In my work, I prefer to use a component-based
                    approach. <br />I develop each module with specific
                    functionality in mind and with the ability to be added or
                    modified independently of other modules.
                </h4>
            </div>
        </div>
    );
};
