import { useRef, useEffect } from "react";
import cls from "./GlowingBlobEffect.module.scss";


const GlowingBlobEffect = () => {
  const blobRef = useRef(null);
  const h1Ref = useRef(null);

  const handleMouseMove = (event: any) => {
    const { clientX, clientY } = event;
    blobRef.current.animate(
      {
        left: `${clientX}px`,
        top: `${clientY}px`,
      },
      { duration: 3000, fill: "forwards" }
    );
  };

  const handleMouseOver = (event: any) => {
    let iteration = 0;
    let interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter: any, index: any) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }
          return String.fromCharCode(65 + Math.floor(Math.random() * 26));
        })
        .join("");
      if (iteration >= event.target.dataset.value.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 30);
  };
  return (
    <div className={cls.GlowingBlobEffect}>
      <div id="blob" ref={blobRef}></div>
      <div id="blur"></div>
      <h1
        data-value="DEVELOPER"
        ref={h1Ref}
        onMouseOver={handleMouseOver}
        onMouseMove={handleMouseMove}
      >
        FRONT-END
      </h1>
    </div>
  );
};
export default GlowingBlobEffect;