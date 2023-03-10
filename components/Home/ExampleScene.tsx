import React, { Dispatch, SetStateAction, useEffect, useRef } from "react";
import {
  Float,
  Circle,
  MeshReflectorMaterial,
  Icosahedron,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import useStore from "../singleComponents/Hooks/useStore";
import { useTimeline } from "../singleComponents/Hooks/useTimeLine";

export default function ExampleScene(props: {
  setReveal: Dispatch<SetStateAction<boolean>>;
}) {
  // let meshRef = useRef<THREE.Mesh>();
  // const { viewport, mouse } = useThree();

  // //Importing global scroll function
  // const scroll = useStore((state) => state.scroll);

  // const GPUTier = useStore((state) => state.GPUTier);

  // //Keyframes for scroll based animations
  // const keyframes = {
  //   rotation: [
  //     { time: 0, val: 0 },
  //     { time: 500, val: -100, easing: "easeInSine" },
  //     { time: 1000, val: 100, easing: "easeInSine" },
  //   ],
  // };

  // const remapKeyframes = {
  //   frame: [
  //     { time: 0, val: 0 },
  //     { time: 1000, val: 1000, easing: "linear" },
  //   ],
  // };

  // const [timeline, axes] = useTimeline(keyframes);
  // const [timeRemap, timeAxe] = useTimeline(remapKeyframes);

  // useFrame(() => {
  //   if (meshRef.current !== undefined) {
  //     meshRef.current.rotateY((mouse.x * viewport.width) / 1500);
  //     meshRef.current.rotateZ((mouse.y * viewport.height) / 1500);
  //   }

  //   // scrubbing through the keyframes using the interpolated scroll value
  //   if (scroll?.animation.changed) {
  //     const y = scroll.get()[0];
  //     // @ts-ignore
  //     timeRemap.seek(timeRemap.duration * y);
  //     // @ts-ignore
  //     timeline.seek(timeAxe.current.frame);
  //     // @ts-ignore
  //     // meshRef.current?.rotateY(axes.current.rotation / 1500);
  //   }
  // });

  // useEffect(() => {
  //   props.setReveal(true);
  // }, []);
  return (
    <>
      {/* <Circle
        args={[12.75, 36, 36]}
        rotation-x={-Math.PI / 2}
        position={[1, -1.7, 0]}
      >
        <MeshReflectorMaterial
          resolution={1024}
          blur={[400, 50]}
          mirror={2}
          mixBlur={0.75}
          mixStrength={10}
          transparent
          opacity={0.5}
          color="#555"
          metalness={4}
          roughness={1}
        />
      </Circle>

      <Float floatIntensity={3}>
        <Icosahedron
          args={[1.5]}
          castShadow={true}
          ref={meshRef}
          onClick={() => {
            console.log(mouse);
          }}
        >
          <MeshReflectorMaterial
            resolution={1024}
            blur={[400, 50]}
            mirror={0}
            mixBlur={0.75}
            mixStrength={10}
            transparent
            opacity={1}
            color="orange"
            metalness={2}
            roughness={1}
          />
        </Icosahedron>
      </Float>

      <pointLight position={[10, 10, 10]} power={800} /> */}
    </>
  );
}
