import "../styles/globals.scss";
import "../styles/_grid.scss";
import type { AppProps } from "next/app";
import CanvasWrapper from "../components/layouts/canvas/CanvasWrapper";
import ErrorBoundary from "../components/singleComponents/ErrorBoundary/ErrorBoundary";
import { useDetectGPU } from "@react-three/drei";
import useStore from "../components/singleComponents/Hooks/useStore";
import { useRef, useEffect, useState } from "react";
import { useSpring } from "react-spring";
import { useThrottledCallback } from "use-debounce";
import { getPositions } from "../components/singleComponents/Utils/Utils";
import ErrorMessage from "../components/singleComponents/ErrorBoundary/ErrorMessage";

function MyApp({ Component, pageProps }: AppProps) {
  // Configuration for GPU Tier system 1-3 is Mobile 4-6 is Desktop.
  //Higher values have better graphics processing power.
  //Stored in the global Store to be accesible anywhere
  const GPUT = useDetectGPU();
  const GPUTier = GPUT.tier < 1 ? 0 : GPUT.isMobile ? GPUT.tier : GPUT.tier + 3;
  const setGPU = useStore((state) => state.setGPUTier);
  const [show, setShow] = useState(false);
  const [reveal, setReveal] = useState(false);

  const fwdRef = useRef<HTMLDivElement>(null); // ref to connect mouse events to the Canvas when Children DOM elements of this element are layerd on top

  // Scroll spring configuration for animating based on scroll
  const setScrollYGlobal = useStore((state) => state.setScrollY);

  const options = {
    mass: 1,
    tension: 260,
    friction: 100,
    precision: 0.0000001,
    velocity: 0,
    clamp: true,
  };

  const [{ y }, setScroll] = useSpring(() => ({
    y: [0],
    config: options,
  }));

  setScrollYGlobal(y);
  //   setGPU(GPUTier);

  useEffect(() => {
    setScroll({ config: options });
  }, [options, setScroll]);

  // Scroll functionality sets the y values to be a spring interpolated normalised value of the scroll
  const handleScroll = useThrottledCallback(() => {
    setScroll({
      y: [window.scrollY / (document.body.offsetHeight - window.screen.height)],
    });
  }, 16);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div className="app" ref={fwdRef}>
      <div className={`preloader ${reveal && "reveal"} `}>
        <div className={`loader_logo`}>
          <h1>Josh Waay Portfolio Hub</h1>
        </div>
        <div className="project_containers">
          <a href="https://like-no-ones-watchin.vercel.app/" rel="noreferrer" target={"_blank"}>
            <div className="project">
              <img src="/images/like-no-ones-watchin.png" alt="" />
              <h2>Like no one's watchin</h2>
            </div>
          </a>
          <a href="https://the-tale-of-abe.vercel.app/" rel="noreferrer" target={"_blank"}>
            <div className="project">
              <img src="/images/the-tale-of-abe.png" alt="" />
              <h2>The tale of Abe</h2>
            </div>
          </a>
          <a href="https://help-me-im-lost.vercel.app/" rel="noreferrer" target={"_blank"}>
            <div className="project">
              <img src="/images/help-me-im-lost.png" alt="" />
              <h2>Help me! I'm lost!</h2>
            </div>
          </a>
        </div>
        {/* <div
          className={`${
            show ? "loader_button_show" : "loader_button_not_show"
          }`}
        >
          <button className="enter_btn" onClick={() =>{
            setReveal(true)
          }}>enter</button>
        </div> */}
      </div>
      
      <ErrorBoundary fallback={<ErrorMessage />}>
        <CanvasWrapper fwdRef={fwdRef} setReveal={setReveal} />
        <div className="dom">
          <Component {...pageProps} />
        </div>
      </ErrorBoundary>
    </div>
  );
}

export default MyApp;
