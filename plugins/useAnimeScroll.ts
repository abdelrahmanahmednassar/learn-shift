/*eslint no-constant-condition: "off"*/
import $anime from "animejs";
import { useEffect } from "react";
export const useAnimeScroll = () => {
  let distroy: ((this: Window, ev: Event) => unknown) | null = null;

  useEffect(() => {
    let ai = [...document.getElementsByClassName("animated")] as HTMLElement[];

    

    const beforeSet = 200;

    setTimeout(() => {
      for (let i = 0; i < ai.length; i++) {
        if ("getBoundingClientRect" in ai[i]) {
          const ele = ai[i].getBoundingClientRect();
        
          
          

          const after =
            ai[i].getAttribute("data-anime-after") != null
              ? ai[i].getAttribute("data-anime-after")!.split(",")
              : [0];
          const animeOff =
            ai[i].getAttribute("data-anime-off-auto-run") != null;
       
          if (
            animeOff &&
            window.innerHeight +
              window.scrollY -
              beforeSet -
              Number(after[0]) >=
              ele.y + window.scrollY
          ) {
            let next = null;

            if (ai.length) {
              next = ai[i]?.getAttribute("data-next-anime") != null;
              i++;
            }

            while (true) {
              if (next && ai.length) {
                runAnime(ai[i]);

                next = ai[i].getAttribute("data-next-anime") != null;
                ai = ai.filter((_, ei) => ei !== i);
              } else {
                break;
              }
            }
          } else if (after[1] && window.innerWidth <= Number(after[1])) {
            if (
              window.innerHeight - Number(after[0]) >=
              ele.y + window.scrollY
            ) {
              runAnime(ai[i]);

              ai = ai.filter((_, ei) => ei !== i);
              i = -1;
            }
          } else if (
            window.innerHeight +
              window.scrollY -
              beforeSet -
              Number(after[0]) >=
            ele.y + window.scrollY
          ) {
            runAnime(ai[i]);

            let next = null;
            if (ai.length) {
              next = ai[i].getAttribute("data-next-anime") != null;
            }

            ai = ai.filter((_, ei) => ei !== i);
            while (true) {
              if (next && ai.length) {
                runAnime(ai[i]);

                next = ai[i].getAttribute("data-next-anime") != null;
                ai = ai.filter((_, ei) => ei !== i);
              } else {
                break;
              }
            }
            i = -1;
          }
        } else {
          ai[i].classList.add("opacity-1");
          ai = ai.filter((_, ei) => ei !== i);
        }
      }

      window.addEventListener("scroll", function scrollPage() {
        distroy = scrollPage;
        for (let i = 0; i < ai.length; i++) {
          const ele = ai[i].getBoundingClientRect();
          const before =
            ai[i].getAttribute("data-anime-before") != null
              ? Number(ai[i].getAttribute("data-anime-before"))
              : 0;
          const animeOff =
            ai[i].getAttribute("data-anime-off-auto-run") != null;

          if (
            window.innerHeight + window.scrollY - beforeSet + before >=
              ele.y + window.scrollY &&
            !animeOff
          ) {
            runAnime(ai[i]);

            let next = null;

            if (ai.length) {
              next = ai[i].getAttribute("data-next-anime") != null;
            }

            ai = ai.filter((_, ei) => ei !== i);

            while (true) {
              if (next && ai.length) {
                if (!ai[i]) {
                  return;
                }

               

                runAnime(ai[i]);

                next = ai[i].getAttribute("data-next-anime") != null;
                ai = ai.filter((_, ei) => ei !== i);
              } else {
                break;
              }
            }
         
          }
        }
      });
    }, 500);

    function runAnime(ele: Element) {
      const name = ele.getAttribute("data-anime-name");

      const delayTime = Number(ele.getAttribute("data-anime-delay"));
      const easing =
        ele.getAttribute("data-anime-type") || "easeOutElastic(1, .5)";
      const dir = Number(ele.getAttribute("data-anime-dir")) || 1000;

     
      if (name) {
        switch (name) {
          case "right-in":
            ele.classList.add("visible");
            $anime({
              targets: ele,
              translateX: [250, 0],
              opacity: 1,
              delay: delayTime,
              duration: dir,
              easing,
            });
            break;
          case "left-in":
            ele.classList.add("visible");
            $anime({
              targets: ele,
              translateX: [-250, 0],
              opacity: 1,
              delay: delayTime,
              duration: dir,
              easing,
            });
            break;
          case "bottom-in":
            ele.classList.add("visible");
            $anime({
              targets: ele,
              translateY: [-250, 0],
              opacity: 1,
              delay: delayTime,
              duration: dir,
              easing,
            });
            break;
          case "top-in":
            ele.classList.add("visible");
            $anime({
              targets: ele,
              translateY: [250, 0],
              opacity: 1,
              delay: delayTime,
              duration: dir,
              easing,
            });
            break;
          case "left-in-center":
            ele.classList.add("visible");
            $anime({
              targets: ele,
              translateX: ["-65%", "-50%"],
              translateY: ["-50%", "-50%"],
              opacity: 1,
              delay: delayTime,
              duration: dir,
              easing,
            });
            break;
          case "bottom-in-center":
            ele.classList.add("visible");
            $anime({
              targets: ele,
              translateX: ["-50%", "-50%"],
              translateY: ["-65%", "-50%"],
          
              opacity: 1,
              delay: delayTime,
              easing,
              duration: dir,
            });
            break;
        }
      }
    }

    return () => {
      if (distroy !== null) {
        window.removeEventListener("scroll", distroy);
      }

    };
  });
};
